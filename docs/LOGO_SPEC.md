# Logo & Icon Specification v0.1

Status: Confirmed
Updated: 2026-03-05

---

## 1. Logo Variants

3つのロゴバリアント。すべて共通のベースライン波形モチーフを持つ。

### 1.1 BiVi（略称ロゴ）

| Property | Value |
|----------|-------|
| Font | Montserrat Black (900) |
| Text | `BiVi` |
| Reference size | 84px |
| Text color | `#e8e6e3` (Off White) |
| Wave | テキスト幅に追従するベースライン波形 |
| Primary use | SNSヘッダー、省スペース、ロゴマーク単体 |

### 1.2 美少女Vibes（日本語ロゴ）

| Property | Value |
|----------|-------|
| Font (JP) | M PLUS 1p Black (900) — 「美少女」部分 |
| Font (EN) | Montserrat Black (900) — 「Vibes」部分 |
| Text | `美少女Vibes` |
| Reference size | 72px |
| Text color | `#e8e6e3` (Off White) |
| Wave | テキスト幅に追従するベースライン波形 |
| Primary use | bishojo-vibes.com サイトヘッダー |

### 1.3 Bishojo Vibes（英語ロゴ）

| Property | Value |
|----------|-------|
| Font | Montserrat Black (900) |
| Text | `Bishojo Vibes` |
| Reference size | 64px |
| Text color | `#e8e6e3` (Off White) |
| Wave | テキスト幅に追従するベースライン波形 |
| Primary use | SNS投稿、海外向け、正式表記が必要な場面 |

---

## 2. Icons

### 2.1 Primary — icon-baseline.svg

| Property | Value |
|----------|-------|
| Shape | 正円 |
| Size | 256x256 (viewBox) |
| Background | `#101e2c` (Dark Blue) |
| Motif | ベースライン波形のみ |
| Wave stroke | 20px |
| File | `assets/icon-baseline.svg` |
| Primary use | ファビコン、Apple Touch Icon、SNSアイコン |

### 2.2 Secondary — icon-b-baseline.svg

| Property | Value |
|----------|-------|
| Shape | 角丸四角 (rx=48) |
| Size | 256x256 (viewBox) |
| Background | `#101e2c` (Dark Blue) |
| Motif | Montserrat Black "B" (アウトライン化パス) + ベースライン波形 |
| B color | `#e8e6e3` (Off White) |
| Wave stroke | 12px |
| File | `assets/icon-b-baseline.svg` |
| Primary use | 予備（現時点で用途未定） |

---

## 3. Baseline Wave — 仕様詳細

全ロゴ・アイコン共通のモチーフ。心拍/パルスを想起させる1回の blip。

### 3.1 構造パラメータ

| Parameter | Value | Notes |
|-----------|-------|-------|
| Blip count | 1 | 単一パルス |
| Blip center | 総幅の **38.2%** 地点 | 黄金比分割 (1 / (1 + 1.618)) |
| Baseline Y | 中央 | 波形の静止位置 |
| Stroke linecap | `round` | |
| Stroke linejoin | `round` | |

### 3.2 ロゴ用波形（stroke 7px）

テキスト幅に追従。ポイント座標（テキスト左端を 0、右端を W とする）:

```
Point    X                Y        Notes
─────    ──────────       ──       ─────
P0       0                y        始点（ベースライン）
P1       center - 24      y        blip 開始手前
P2       center - 16      y        blip 進入
P3       center - 8       5        上ピーク
P4       center           25       下ピーク
P5       center + 8       10       リバウンド
P6       center + 16      y        blip 終了
P7       W                y        終点（ベースライン）

y = 15 (静止位置)
center = W × 0.382
```

SVG要素: `<polyline>`, stroke `url(#wave-grad)`, stroke-width `7`

### 3.3 アイコン用波形

**Primary (icon-baseline.svg)** — 256x256 viewBox 内:

```
Point    X        Y        Notes
─────    ─────    ─────    ─────
P0       38.0     128.0    始点
P1       60.8     128.0
P2       74.8     128.0
P3       90.8     88.0     上ピーク (−40)
P4       106.8    168.0    下ピーク (+40)
P5       122.8    108.0    リバウンド (−20)
P6       138.8    128.0    blip 終了
P7       218.0    128.0    終点

Stroke-width: 20
```

**Secondary (icon-b-baseline.svg)** — 256x256 viewBox 内:

```
Point    X        Y        Notes
─────    ─────    ─────    ─────
P0       66.6     193.5    始点
P1       83.3     193.5
P2       93.3     193.5
P3       105.3    169.5    上ピーク (−24)
P4       115.3    217.5    下ピーク (+24)
P5       125.3    181.5    リバウンド (−12)
P6       137.3    193.5    blip 終了
P7       194.1    193.5    終点

Stroke-width: 12
```

### 3.4 グラデーション

```xml
<linearGradient id="bv-grad" x1="0%" y1="0%" x2="100%" y2="0%">
  <stop offset="0%" stop-color="#c7f284"/>   <!-- Lime -->
  <stop offset="100%" stop-color="#ff69b4"/> <!-- Neon Pink -->
</linearGradient>
```

方向: 左→右（水平）、Lime Green → Neon Pink

---

## 4. Color Variations

### 4.1 正規版（Primary — Dark Background）

デフォルトの使用バリエーション。

| Element | Color |
|---------|-------|
| Background | `#0a1520` (Deep Navy) or `#101e2c` (Dark Blue) |
| Text | `#e8e6e3` (Off White) |
| Wave | Lime→Pink gradient (`#c7f284` → `#ff69b4`) |

### 4.2 モノクロ白（Mono White — Dark Background）

ダーク背景上で使用。全要素を白一色に。

| Element | Color |
|---------|-------|
| Background | Dark (任意) |
| Text | `#ffffff` |
| Wave | `#ffffff` |

### 4.3 モノクロ黒（Mono Black — Light Background）

ライト背景上で使用。全要素を黒一色に。

| Element | Color |
|---------|-------|
| Background | Light (任意) |
| Text | `#000000` |
| Wave | `#000000` |

### 4.4 ライト背景版（Light Background）

白背景上で使用。波形グラデーションは維持。

| Element | Color |
|---------|-------|
| Background | `#ffffff` or light |
| Text | `#0a1520` (Deep Navy) |
| Wave | Lime→Pink gradient（正規版と同一） |

---

## 5. Usage Guidelines

### 5.1 使い分け一覧

| Context | Logo | Icon |
|---------|------|------|
| SNSヘッダー画像 | BiVi | — |
| SNSプロフィールアイコン | — | Primary (icon-baseline) |
| SNS投稿内ウォーターマーク | BiVi or Bishojo Vibes | — |
| bishojo-vibes.com ヘッダー | 美少女Vibes | — |
| ファビコン (16-32px) | — | Primary (icon-baseline) |
| Apple Touch Icon (180px) | — | Primary (icon-baseline) |
| 海外向け正式表記 | Bishojo Vibes | — |

### 5.2 最小サイズ（目安）

| Asset | Min Width | Notes |
|-------|-----------|-------|
| BiVi | ~80px | 4文字、小さくても判読可 |
| 美少女Vibes | ~160px | 混植のため余裕を持つ |
| Bishojo Vibes | ~160px | 文字数が多い |
| Icon (Primary/Secondary) | 16px | ファビコン最小 |

### 5.3 クリアスペース（目安）

ロゴ周囲に **テキスト高さの 50%** 以上の余白を確保する。
アイコンは背景形状（円/角丸四角）自体がクリアスペースを含む。

---

## 6. Source Files

| File | Content | Format |
|------|---------|--------|
| `assets/icon-baseline.svg` | Primary icon (確定) | SVG |
| `assets/icon-b-baseline.svg` | Secondary icon (確定) | SVG |
| `prototypes/logo-all-baseline-d.html` | ロゴ3バリアント最終版プロトタイプ | HTML |
| `prototypes/icon-final-preview.html` | アイコン全サイズプレビュー | HTML |
| `prototypes/Montserrat-Black.ttf` | opentype.js アウトライン化用フォント | TTF |

### Font Dependencies

| Font | Weight | Source | Used In |
|------|--------|--------|---------|
| Montserrat | Black (900) | Google Fonts | BiVi, Bishojo Vibes, icon-b "B" |
| M PLUS 1p | Black (900) | Google Fonts | 美少女Vibes「美少女」部分 |

---

## Appendix: Design Decisions

| # | Decision | Rationale |
|---|----------|-----------|
| L1 | Montserrat Black をメインフォントに採用 | 幾何学的で太く、テック感がある。Google Fonts で無料 |
| L2 | M PLUS 1p Black を日本語に採用 | Montserrat と太さ・幾何学感が近い。Google Fonts で無料 |
| L3 | 波形モチーフ Pattern C（1 blip ベースライン）を採用 | 「Vibes」「Pulse」の世界観に直結。シンプルで再現性が高い |
| L4 | Blip を黄金比位置 (38.2%) に配置 | 視覚的バランス。中央配置より動きが出る |
| L5 | 波形幅をテキスト幅に追従させる | バリアント間で統一感を保ちつつ、各サイズに自然に対応 |
| L6 | アイコンPrimaryは波形のみ（文字なし） | 小サイズでの視認性。波形自体がブランドシンボル |
| L7 | "B" アウトラインは opentype.js で生成 | フォント依存を排除し、SVG単体で完結 |
