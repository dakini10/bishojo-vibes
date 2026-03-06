# 美少女Vibes PROGRESS

最終更新: 2026-03-06 (13)

---

## 進捗サマリ

| フェーズ | ステータス | 完了日 |
|---------|----------|--------|
| Phase 1: ブランド基盤 | **完了** | 2026-03-05 |
| Phase 2: SNS運用 | **進行中** — Step 3 完了、Step 4 LP実装中（調整中） | - |
| Phase 3: 有料販売チャネル設計 | 未着手（サブPJ） | - |
| Phase 4: ドメイン・LP | Phase 2 に統合（前倒し） | - |
| Phase 5: ugc-community 連携 | 未着手（PV 10万後、bishojo-vibes.com に統合予定） | - |

---

## 設計決定事項

QUESTIONS.md 全19問決定済み（Overall Q1-Q7, SNS P2Q1-P2Q6, Site SQ1-SQ6）。

| 項目 | 決定 |
|------|------|
| プロジェクト位置づけ | 独立プロジェクト |
| ブランドガイド粒度 | 段階的（v0.1→v1.0） |
| ロゴデザイン | CSS/SVG確定 |
| ドメイン | **前倒し取得済み**（bishojo-vibes.com） |
| SNSアカウント | `@BishojoVibes`、SFW運用、毎日1投稿 |
| サイト技術スタック | **Astro**（独立リポ、ugc-community 統合見据え） |
| サイト構成 | LP 1ページ（ティザー戦略：詳細はあえて明かさない） |
| デプロイ | GitHub 連携で自動デプロイ、LP 完成後にドメイン接続 |

---

## 変更履歴

### 2026-03-06 (13): Features セクション追加（カルーセル下）

カルーセルとサイト一覧の間に説明セクションを追加。3項目（XPシステム / CG解放 / コミュニティ）を英語ヘッディング + 日本語補足で表示。既存の `data-reveal` IntersectionObserver でスクロールフェードイン対応。

更新ファイル: `src/pages/index.astro`（HTML + CSS追加）
ステータス: **Step 4 調整中** — 次: デプロイ準備 or 追加調整

---

### 2026-03-06 (12): Step 3 完了 + Step 4 LP本実装

KV 4枚を SD リポから取得・配置。Mock D v3 ベースで index.astro を全面実装。Three.js 3D波形テレイン（npm バンドル）、4枚KVカルーセル（自動再生・スワイプ・キーボード対応）、Doujin/Video サイトグルーピング、SNSリンク、CTA セクション、レスポンシブ対応。PFP Gallery は KV 追加後に検討。

更新ファイル: `src/pages/index.astro`(全面書き換え), `src/styles/tokens.css`, `src/layouts/Base.astro`, `public/images/kv-*.png`(4枚)
ステータス: **Step 4 調整中** — カルーセル表示調整中 → 完了後 Step 5（デプロイ + ドメイン接続）

---

### 2026-03-05 (11): Step 2 完了（Mock D v3 確定）→ Step 3 KV制作開始

Mock D (Waveform) v3 をデザイン最終確定。Three.js 3D波形テレイン + 5枚KVカルーセル + サイトグルーピング構成。Step 3 のキービジュアル制作に進行（SD リポで作成）。

ステータス: **Step 3 進行中** — KV制作完了後 → Step 4（LP 本実装）

---

### 2026-03-05 (10): PLAN-site.md Step 2 進行中 — デザインモック6案作成、Mock D (Waveform) v3 採用方向

6案のHTMLモック（A: Void, B: Pulse, C: Grid, D: Waveform, E: Neon, F: Cinematic）を作成。Mock D（Three.js 3D波形テレイン + カスタムシェーダー）が採用方向に決定。v2 でサイトグルーピング（Doujin/Video）、Girl PFP セクション、SNSリンク（X + Patreon）、CTA（Coming Soon）を追加。v3 で KV を5枚カルーセル化、ステートメントを「8+ sites. One vibe.」に更新。ロゴ混植（M PLUS 1p + Montserrat）も修正済み。

更新ファイル: `bishojo-vibes/mockups/mock-{a,b,c,d,d2,d3,e,f}-*.html`
ステータス: **Step 2 進行中** — 次: デザイン最終確定 → Step 3（キービジュアル制作依頼）→ Step 4（LP 実装）

---

### 2026-03-05 (9): PLAN-site.md Step 1 完了 — リポ作成 + Astro セットアップ

GitHub リポ `dakini10/bishojo-vibes` 作成、Astro v5.18 初期化。BRAND_GUIDE 準拠のカラートークン (`tokens.css`)、Base レイアウト（OGP対応）、BiViLogo コンポーネント（波形アニメーション付き）、index.astro（LP: ロゴ + tagline + 8サイト一覧）を実装。ビルド成功、dev server `localhost:4400` で動作確認済み。

更新ファイル: `/Users/yamamotochisato/Documents/bishojo-vibes/` （独立リポ）
ステータス: **Step 1 完了** — 次: Step 2（デザインモック複数案作成 → 対話的に検討）

---

### 2026-03-05 (8): サイト構築計画策定（PLAN-site.md）

bishojo-vibes.com を ugc-community フロントエンドに発展するブランドサイトとして設計。Astro + 独立リポ + GitHub 連携デプロイに決定。LP 1ページ（ミニマル・ダーク + オリキャラキービジュアル）、モック複数案で検討予定。SQ1-SQ6 全6問決定。

更新ファイル: `PLAN-site.md`(新規), `QUESTIONS.md`(SQ1-SQ6追記)
ステータス: **計画完了** — 次: PLAN-site.md Step 1（リポ作成 + Astro セットアップ）実行

---

### 2026-03-05 (7): Phase 2 計画策定 + ドメイン・メール設定

SNS運用の詳細計画を策定（PLAN.md、P2Q1-P2Q6 全6問決定）。bishojo-vibes.com ドメインを Cloudflare Registrar で取得、Email Routing で `info@bishojo-vibes.com` → 転送設定完了。CF Pages プロジェクト `bishojo-vibes` 作成済み。

更新ファイル: `PLAN.md`(新規), `QUESTIONS.md`(P2Q1-P2Q6追記, Q7前倒し更新)
ステータス: **Phase 2 進行中** — 次: サイト構築 → X アカウント作成 → SNS運用開始

---

### 2026-03-05 (6): LOGO_SPEC.md 作成 → Phase 1 完了

ロゴ3バリアント + アイコン2種の全仕様を LOGO_SPEC.md v0.1 として文書化。波形パラメータ表、カラーバリエーション4種（正規/モノクロ白/モノクロ黒/ライト背景）、使い分けガイド、最小サイズ目安を含む。

更新ファイル: `LOGO_SPEC.md`(新規)
ステータス: **Phase 1 完了** — 次: Phase 2（Xハンドル確保 + SNS運用コンセプト策定）

---

### 2026-03-05 (5): アイコンデザイン確定 + SVG書き出し

ファビコン・Apple Touch・SNS用アイコンを対話的にデザインし、2種のSVGを確定。Montserrat Black "B" は opentype.js (Node.js) でアウトライン化。

**確定アイコン:**
- **Primary**: 正円ダーク(`#101e2c`)背景 + Lime→Pink グラデーション波形 → `assets/icon-baseline.svg`
- **Secondary**: 角丸四角(`#101e2c`)背景 + B (アウトライン) + グラデーション波形 → `assets/icon-b-baseline.svg`

更新ファイル: `assets/icon-baseline.svg`(新規), `assets/icon-b-baseline.svg`(新規), `prototypes/icon-*.html`
ステータス: **完了** — 次: LOGO_SPEC.md に全仕様（ロゴ3バリアント + アイコン2種）を文書化

---

### 2026-03-05 (4): ロゴデザイン確定

HTMLプロトタイプで対話的にフォント・モチーフ・カラーを選定し、3ロゴバリアントのデザインを確定。

**確定仕様:**
- フォント: Montserrat Black (900) + M PLUS 1p Black (900)（日本語）
- モチーフ: Pattern C — ベースライン波形（1 blip、黄金比配置）
- カラー: Lime→Pink グラデーション (`#c7f284` → `#ff69b4`)
- バリアント: BiVi / 美少女Vibes / Bishojo Vibes（共通モチーフ、幅はテキストに追従）

更新ファイル: `prototypes/`（font-test*.html, bivi-wave-*.html, logo-all-baseline-*.html）
ステータス: **完了** — 次: LOGO_SPEC.md に確定仕様を文書化 + シンボルマーク/アイコンのデザイン

---

### 2026-03-05 (3): BRAND_GUIDE.md v0.1 作成

対話でカラー・トーン・表記ルール等を決定し、BRAND_GUIDE.md v0.1 を作成。命名体系の一部を更新（Gacha→BV Gacha、Profile→Profile）。言語優先ルールをサイト内=日本語、SNS=英語に設定。

更新ファイル: `BRAND_GUIDE.md`(新規)
ステータス: **完了** — 次: LOGO_SPEC.md 作成（フォント候補テスト + モチーフA/C比較）

---

### 2026-03-05 (2): CLI コマンド作成

`/r-bv`（プロジェクト再開）と `/s-bv`（進捗更新）コマンドを作成。

更新ファイル: `.claude/commands/r-bv.md`(新規), `.claude/commands/s-bv.md`(新規)
ステータス: **完了**

---

### 2026-03-05 (1): プロジェクト立ち上げ — 独立ブランドプロジェクト化

ugc-community Phase 0.5（ブランディング計画）から独立プロジェクトに昇格。キャラ活用・有料販売・ugc連携を横断管理するブランドプロジェクトとして `bishojo-vibes/` を新設。

/plan-forge phase で Phase 1（ブランド基盤）の詳細計画を策定。QUESTIONS.md 7問全決定。

成果物: `README.md`, `QUESTIONS.md`, `PROGRESS.md`
ステータス: **計画完了** — 次: Phase 1 実行（BRAND_GUIDE.md + LOGO_SPEC.md 作成）

---
