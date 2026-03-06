# Plan: bishojo-vibes.com サイト構築

## Metadata
- project: 美少女Vibes (bishojo-vibes)
- phase: Phase 2 サブフェーズ — サイト構築
- date: 2026-03-05
- related_docs:
  - `CLAUDE.md`
  - `docs/BRAND_GUIDE.md`
  - `docs/LOGO_SPEC.md`
  - `docs/PLAN-sns.md` (SNS運用計画)

## 1. Background & Purpose

bishojo-vibes.com は美少女Vibes ブランドの中央サイト。ティザー期はブランドLP + 8サイト一覧として機能し、将来的に ugc-community（認証・プロフィール・ガチャ等）のフロントエンドに発展する。

**ハイブリッド戦略**: ugc-community 統合を見据えた技術基盤を今選び、実装は段階的に。

目的:
- 美少女Vibes の世界観を凝縮した1ページ LP
- 8サイトへの導線
- X プロフィールリンクの着地先
- 将来の ugc-community フロントエンドとしての拡張基盤

## 2. Scope

### In Scope
- 独立リポジトリ `bishojo-vibes` の作成
- Astro プロジェクトのセットアップ
- LP 1ページ（ブランドLP + サイト一覧）
- デザインモックアップ複数案作成・検討（アニメーション/パララックス）
- オリキャラ入りキービジュアル（SD リポで制作、本プランでは配置のみ）
- Cloudflare Pages GitHub 連携設定
- カスタムドメイン `bishojo-vibes.com` 接続
- favicon / OGP 設定

### Out of Scope
- キービジュアルの画像制作（ugc-creative リポで実施）
- ugc-community 機能実装（Phase 3-5 で追加）
- docs サブドメイン（Phase 5 で Starlight 検討）
- X アカウント作成・運用（LP 完成後に PLAN.md に従って実施）

### Prerequisites / Dependencies
- bishojo-vibes.com ドメイン取得済み ✅
- Email Routing 設定済み（info@bishojo-vibes.com）✅
- Cloudflare Pages プロジェクト `bishojo-vibes` 作成済み ✅
- BRAND_GUIDE.md v0.1 確定済み ✅
- LOGO_SPEC.md v0.1 確定済み ✅

## 3. Technical Design

### Architecture Overview

```
bishojo-vibes (独立リポジトリ)
├── src/
│   ├── layouts/         # Astro レイアウト
│   ├── pages/
│   │   └── index.astro  # LP（v1 はこれだけ）
│   ├── components/      # 再利用コンポーネント
│   └── styles/          # グローバルCSS / デザイントークン
├── public/
│   ├── icon.svg         # favicon
│   ├── og-image.png     # OGP画像
│   └── images/          # キービジュアル等
├── astro.config.mjs
└── package.json

将来の拡張:
├── src/pages/
│   ├── auth/            # Phase 3: 認証
│   ├── profile/         # Phase 3: My Vibes
│   ├── gacha/           # Phase 5b: BV Gacha
│   ├── badges/          # Phase 5a: バッジコレクション
│   └── ranking/         # Phase 6: ランキング
└── src/api/             # Cloudflare Functions (認証・データ)
```

### Technology Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Framework | **Astro** | SSG ベース、Islands Architecture で将来 React/Svelte 追加可 |
| Hosting | **Cloudflare Pages** | GitHub 連携で自動デプロイ |
| Styling | **CSS** (vanilla or Tailwind — Step 2 で決定) | BRAND_GUIDE カラーシステム準拠 |
| Fonts | Google Fonts (Montserrat Black, M PLUS 1p Black) | LOGO_SPEC 準拠 |
| Domain | bishojo-vibes.com | Cloudflare Registrar 取得済み |
| 将来 | Cloudflare D1 / KV / Workers | ugc-community バックエンド |

### LP デザインコンセプト

- **トーン**: ミニマル・ダーク + 謎めいたティザー
- **背景**: Deep Navy `#0a1520`
- **カラー**: Lime `#c7f284` → Pink `#ff69b4` グラデーション（アクセント）
- **ロゴ**: BiVi + ベースライン波形（LOGO_SPEC 準拠、アニメーション付き）
- **キービジュアル**: オリキャラ入り（SD リポで制作）
- **サイト一覧**: 8サイトへのリンクカード（控えめに配置）
- **タグライン**: "Your vibe starts here." のみ。説明しすぎない
- **アニメーション/パララックス**: モックアップ複数案で検討

### ai-adaffi-lab との共通点

- 同じ Astro フレームワーク
- 同じ Cloudflare Pages ホスティング
- リポ構成・ビルドフローのノウハウを共有可能

## 4. Implementation Steps

### Step 1: リポジトリ作成 + Astro セットアップ
- GitHub に `bishojo-vibes` リポ作成
- `npm create astro@latest` でプロジェクト初期化
- BRAND_GUIDE カラートークンを CSS 変数として定義
- Google Fonts (Montserrat, M PLUS 1p) セットアップ
- favicon (icon-baseline.svg) 配置
- 完了条件: `npm run dev` でローカルサーバー起動、空ページ表示

### Step 2: デザインモックアップ作成・検討
- LP のデザインモックを複数案作成（HTML/Astro）
- 検討ポイント:
  - ロゴの表示・アニメーション方法（フェードイン、波形アニメーション等）
  - パララックス効果の有無・程度
  - キービジュアル配置（ヒーロー全面 vs セクション分割）
  - サイト一覧の見せ方（カード vs リスト vs グリッド）
  - スクロール体験（1画面完結 vs スクロールで展開）
- ユーザーと対話的にデザインを決定
- 完了条件: デザイン方向性が確定

### Step 3: キービジュアル制作依頼 (SD リポ)
- ugc-creative リポでオリキャラ入りキービジュアルを制作
- LP レイアウトに合わせたサイズ・構図を指定
- 完了条件: キービジュアル画像が納品され、`public/images/` に配置

### Step 4: LP 実装
- Step 2 で確定したデザインを Astro コンポーネントとして実装
- キービジュアル組み込み
- レスポンシブ対応（モバイル・タブレット・デスクトップ）
- OGP メタタグ設定（タイトル、説明、og-image）
- パフォーマンス最適化（画像最適化、フォント読み込み）
- 完了条件: ローカルで完成版が動作

### Step 5: デプロイ + ドメイン接続
- GitHub リポを Cloudflare Pages に連携（Astro ビルド設定）
- 初回デプロイ確認（`*.bishojo-vibes.pages.dev`）
- カスタムドメイン `bishojo-vibes.com` を Pages に接続
- SSL / HTTPS 確認
- 完了条件: `https://bishojo-vibes.com` で LP が正常表示

### Step 6: 検証 + SNS運用開始へ
- クロスブラウザ確認（Chrome, Safari, Firefox, モバイル）
- Lighthouse スコア確認（Performance, Accessibility）
- OGP プレビュー確認（X Card Validator 等）
- 完了条件: 全チェック通過 → PLAN.md (SNS運用) の Step 3 に接続

## 5. Testing & Validation

| Check | Method |
|-------|--------|
| ローカル動作 | `npm run dev` + 目視確認 |
| ビルド成功 | `npm run build` エラーなし |
| デプロイ | `curl -s https://bishojo-vibes.com/ \| grep '<title>'` |
| レスポンシブ | Chrome DevTools デバイスエミュレーション |
| パフォーマンス | Lighthouse ≥ 90 (Performance) |
| OGP | X Card Validator でプレビュー確認 |
| リンク動作 | 8サイトへのリンクが全て正しく遷移 |
| SFW | NSFW コンテンツが一切ないこと |

## 6. Risk & Mitigation

| Risk | Impact | Mitigation |
|------|--------|-----------|
| キービジュアル制作の遅延 | LP 完成が遅れる | Step 2-4 はプレースホルダー画像で進行可能。キービジュアルは後差し替え |
| デザインモック検討に時間がかかる | 全体スケジュール遅延 | 最大3案に絞り、1セッションで方向性決定 |
| Astro + CF Pages の連携問題 | デプロイ失敗 | ai-adaffi-lab の実績あり。既知の設定で対応可能 |
| 既存 Pages プロジェクトとの競合 | 仮デプロイが残る | 既存の静的 HTML デプロイは GitHub 連携時に上書きされる |

## 7. Open Questions

- CSS フレームワーク選定（vanilla CSS vs Tailwind） — Step 1-2 で決定
- パララックスライブラリの選定 — Step 2 で検討
- キービジュアルの構図・キャラ選定 — Step 3 で SD リポと調整
- OGP 画像の内容 — Step 4 で決定

## 8. Phase 2 全体フロー（更新）

```
PLAN-site.md (本計画)                    PLAN.md (SNS運用計画)
─────────────────────                    ─────────────────────
Step 1: リポ作成 + Astro セットアップ
Step 2: デザインモック検討
Step 3: キービジュアル制作 (SD リポ)
Step 4: LP 実装
Step 5: デプロイ + ドメイン接続
Step 6: 検証                        →   Step 3: X アカウント作成 + プロフィール設定
                                         Step 4: SNS運用コンセプト文書化
                                         Step 5: 画像ストック準備 + 初投稿
```

PLAN.md の Step 1（ドメイン取得 + メール設定）は完了済み。
PLAN.md の Step 2（サイト一覧ページ作成）は本計画 (PLAN-site.md) に置き換え。
