# Plan: Lighthouse Performance 改善（Three.js → Raw WebGL + 画像最適化）

## Metadata
- project: bishojo-vibes (美少女Vibes)
- phase: Phase 2a Step 6 — Performance 改善
- date: 2026-03-06
- related_docs:
  - `docs/PLAN-site.md`
  - `docs/QUESTIONS.md` (PQ1-PQ2)
  - `mockups/perf-raw-webgl.html` (検証済みモック)

## 1. Background & Purpose

Lighthouse Performance スコアが 59（目標 ≥ 90）。主な原因:

1. **JS バンドル**: 490.80 KB (gzip 123.58 KB) — ほぼ全て Three.js
2. **画像サイズ**: KV画像 5.9MB + OG画像 3.6MB (すべて PNG)

Three.js は PlaneGeometry + カスタムシェーダーしか使っていないため、Raw WebGL で完全に置き換え可能。画像は WebP 変換 + リサイズで 94% 削減。

## 2. Scope

### In Scope
- Three.js → Raw WebGL 置き換え（`src/pages/index.astro` の `<script>` 部分）
- `three` パッケージの削除
- KV画像 4枚 + OG画像の WebP 変換・リサイズ
- `<img>` タグの src を `.webp` に変更
- Lighthouse 再計測で 90+ 確認

### Out of Scope
- デザイン・レイアウトの変更
- 新機能追加
- フォント読み込み最適化（現状 `display=swap` + `preconnect` で十分）

### Prerequisites / Dependencies
- `mockups/perf-raw-webgl.html` で見た目同一を確認済み

## 3. Technical Design

### Architecture Overview

**Before:**
```
index.astro <script>
  └── import * as THREE from 'three'  (490KB bundle)
       └── WebGLRenderer, PerspectiveCamera, Scene,
           PlaneGeometry, ShaderMaterial, Mesh, ...
```

**After:**
```
index.astro <script>
  └── Raw WebGL (~3KB inline)
       ├── mat4Perspective() / mat4LookAt()  (自前)
       ├── PlaneGeometry 生成 (自前)
       └── Vertex/Fragment Shader (既存と同一)
```

### 置き換えポイント

| Three.js | Raw WebGL 代替 |
|----------|---------------|
| `new THREE.WebGLRenderer()` | `canvas.getContext('webgl')` |
| `new THREE.PerspectiveCamera()` | `mat4Perspective()` 自前関数 |
| `camera.lookAt()` | `mat4LookAt()` 自前関数 |
| `new THREE.PlaneGeometry()` | 頂点・UV・インデックス手動生成 |
| `new THREE.ShaderMaterial()` | `gl.createProgram()` + `gl.createShader()` |
| `new THREE.Mesh()` | `gl.bindBuffer()` + `gl.drawElements()` |
| `new THREE.Color()` | `[r/255, g/255, b/255]` 配列 |
| `new THREE.Vector2()` | `gl.uniform2f()` 直接 |

### 画像最適化

| ファイル | Before | After (目安) |
|---------|--------|-------------|
| kv-bishoujo-girls_nsfw.png | 1.6MB | ~80KB (WebP) |
| kv-bishoujo-girls_nsfw_g1.png | 1.6MB | ~80KB (WebP) |
| kv-bishoujo-girls_nsfw_g2.png | 1.2MB | ~60KB (WebP) |
| kv-bishoujo-girls_nsfw_g3.png | 1.5MB | ~75KB (WebP) |
| og-image.png | 3.6MB | ~150KB (WebP 1200x630) |

## 4. Implementation Steps

### Step 1: 画像変換
- `cwebp` / `sharp` で PNG → WebP 変換（品質 80）
- KV画像: 幅 1200px にリサイズ
- OG画像: 1200x630 にリサイズ
- `public/images/` に WebP ファイルを配置
- 完了条件: WebP ファイルが生成され、合計 ~600KB 以下

### Step 2: Three.js → Raw WebGL 置き換え
- `mockups/perf-raw-webgl.html` のコードを `index.astro` の `<script>` に移植
- Three.js 固有の import 文を削除
- canvas 要素の ID を合わせる（`three-canvas` → `gl-canvas` or 統一）
- 完了条件: `npm run dev` でローカル動作確認、Three.js と同一の見た目

### Step 3: パッケージ削除 + 画像参照更新
- `npm uninstall three`
- `index.astro` の `kvImages` 配列の拡張子を `.webp` に変更
- OGP meta タグの画像パスを `.webp` に変更
- 完了条件: `npm run build` 成功、バンドルサイズ大幅削減

### Step 4: Lighthouse 計測 + 調整
- `npm run build && npm run preview` でローカルプレビュー
- Lighthouse 計測（Performance ≥ 90 目標）
- 必要に応じて追加最適化（font preload 等）
- 完了条件: Lighthouse Performance ≥ 90

### Step 5: コミット + デプロイ
- 変更をコミット
- bishojo-vibes.com に再デプロイ
- 本番環境で Lighthouse 再計測
- 完了条件: 本番 Lighthouse Performance ≥ 90

## 5. Testing & Validation

| Check | Method |
|-------|--------|
| 見た目同一 | ローカルで Three.js 版と比較（モック検証済み） |
| マウス追従 | インタラクション動作確認 |
| スクロール減衰 | スクロール時の波形ダンピング確認 |
| KV画像表示 | WebP 画像がカルーセルで正常表示 |
| OGP | og:image が WebP でも正常にプレビュー表示 |
| ビルド成功 | `npm run build` エラーなし |
| バンドルサイズ | `< 20KB` (gzip) |
| Lighthouse | Performance ≥ 90 |

## 6. Risk & Mitigation

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Raw WebGL のバグ | 見た目の差異 | モック検証済み。行列計算は数学的に検証 |
| WebP 非対応ブラウザ | 画像表示されない | WebP 対応率 97%+。`<picture>` タグで PNG フォールバック追加可（必要なら） |
| OGP の WebP 対応 | SNS プレビューが表示されない | X/Facebook は WebP 対応済み。念のため確認 |

## 7. Open Questions

- OGP 画像は WebP と PNG どちらが安全か — Step 4 で X Card Validator で検証
