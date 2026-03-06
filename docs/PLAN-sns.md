# Plan: Phase 2 — SNS運用

## Metadata
- project: 美少女Vibes (bishojo-vibes)
- phase: Phase 2
- date: 2026-03-05
- related_docs:
  - `CLAUDE.md`
  - `docs/BRAND_GUIDE.md`
  - `docs/LOGO_SPEC.md`
  - `docs/QUESTIONS.md`

## 1. Background & Purpose

Phase 1（ブランド基盤）でロゴ・カラー・トーン&マナーが確定した。Phase 2 では、これらを活用して X での認知獲得・サイト流入を開始する。

目的:
- 美少女Vibes ブランドの認知を X 上で確立する
- キャラ画像コンテンツでフォロワーを獲得する
- bishojo-vibes.com をブランドのハブ（サイト一覧）として機能させる

## 2. Scope

### In Scope
- bishojo-vibes.com ドメイン取得 + メールアドレス設定
- bishojo-vibes.com サイト一覧ページ（SFW、ミニマル）
- X アカウント `@BishojoVibes` 作成（bishojo-vibes.com メールで登録）
- X プロフィール設定（アイコン・ヘッダー・Bio・リンク）
- SNS運用コンセプト文書化（`sns/OPERATION_CONCEPT.md`）
- ティザー投稿開始（キャラ画像ストック準備 + 初投稿）

### Out of Scope
- X API 自動化（収益化後に検討）
- 有料販売チャネル（Phase 3）
- bishojo-vibes.com の本格的な LP / UGC 機能（Phase 4-5）
- キャラ画像の制作自体（ugc-creative リポで管理）

### Prerequisites / Dependencies
- Phase 1 完了（ロゴ・カラー・トーン確定）✅
- ugc-creative でキャラ画像ストックが確保できること
- Cloudflare アカウント（ドメイン取得・DNS・Pages）

## 3. Technical Design

### Architecture Overview

```
bishojo-vibes.com (Cloudflare Pages)
├── index.html          — サイト一覧ページ（SFW）
├── favicon / icons     — icon-baseline.svg ベース
└── (将来拡張用)

X @BishojoVibes
├── Profile icon        — icon-baseline.svg → PNG
├── Header              — BiVi ロゴ + ブランドカラー背景
├── Bio                 — ブランド紹介 + bishojo-vibes.com リンク
└── Posts               — キャラ画像 (SFW) + BiVi リリース情報
```

### bishojo-vibes.com サイト一覧ページ

- Hugo 不要。静的 HTML 1ページで十分
- ダークテーマ（Deep Navy `#0a1520` ベース）
- BiVi ロゴ表示 + 8サイトへのリンクカード
- SFW: サイト名・簡潔な説明のみ（サムネイルなし or SFW画像のみ）
- レスポンシブ対応
- Cloudflare Pages でホスト

### X プロフィール構成

| Element | Content |
|---------|---------|
| Handle | `@BishojoVibes` |
| Display name | Bishojo Vibes / 美少女Vibes |
| Icon | icon-baseline.svg → 400x400 PNG |
| Header | BiVi ロゴ + Lime→Pink グラデーション背景（1500x500） |
| Bio | EN: "Your vibe starts here." + サイト概要 |
| Link | `https://bishojo-vibes.com` |
| Sensitive flag | OFF（SFW運用） |

### 投稿テンプレート

**キャラ画像投稿（日次）:**
```
[キャラ画像 SFW]

[短いキャプション — Cool & Stylish トーン]

#BishojoVibes #BiVi #[ジャンルタグ]
```

**BiVi リリース情報（随時）:**
```
[スクリーンショット or ビジュアル]

[機能紹介 — 簡潔に]

#BishojoVibes #BiVi
```

## 4. Implementation Steps

### Step 1: ドメイン取得 + メール設定
- Cloudflare Registrar で `bishojo-vibes.com` を取得
- Cloudflare Email Routing でメールアドレス設定（例: `info@bishojo-vibes.com`）
- 完了条件: ドメインがアクティブ、メールが受信可能

### Step 2: bishojo-vibes.com サイト一覧ページ作成
- `sites/bishojo-vibes/` ディレクトリ作成
- 静的 HTML + CSS で1ページ作成（ダークテーマ、BiVi ロゴ、8サイトリンク）
- Cloudflare Pages プロジェクト作成 + デプロイ
- カスタムドメイン `bishojo-vibes.com` を Pages に接続
- favicon 設定（icon-baseline.svg → ICO/PNG 変換）
- 完了条件: `https://bishojo-vibes.com` でページが表示される

### Step 3: X アカウント作成 + プロフィール設定
- `info@bishojo-vibes.com` で X アカウント `@BishojoVibes` を作成
- プロフィール画像設定:
  - アイコン: icon-baseline.svg → 400x400 PNG
  - ヘッダー: 1500x500 ブランドビジュアル作成
- Bio・表示名・リンク設定
- センシティブメディア設定: OFF
- 完了条件: プロフィールがブランドガイドに沿って完成

### Step 4: SNS運用コンセプト文書化
- `sns/OPERATION_CONCEPT.md` 作成
- 内容: 投稿カテゴリ・頻度・トーン・ハッシュタグ戦略・画像仕様
- 完了条件: 運用ルールが文書化され、誰でも投稿できる状態

### Step 5: 画像ストック準備 + 初投稿
- ugc-creative で SFW キャラ画像を最低14枚（2週間分）ストック
- 投稿テンプレートに沿って初投稿
- 完了条件: 初投稿完了、2週間分のストック確保

## 5. Testing & Validation

| Check | Method |
|-------|--------|
| bishojo-vibes.com 表示 | `curl -s https://bishojo-vibes.com/ \| grep '<title>'` |
| メール受信 | テストメール送信 → 転送先で確認 |
| X プロフィール | 目視確認（アイコン・ヘッダー・Bio・リンク） |
| SFW コンプライアンス | bishojo-vibes.com に NSFW コンテンツがないこと確認 |
| リンク動作 | 8サイトへのリンクが全て正しく遷移すること |

## 6. Risk & Mitigation

| Risk | Impact | Mitigation |
|------|--------|-----------|
| `@BishojoVibes` が既に取得されている | ハンドル変更が必要 | 代替候補: `@Bishojo_Vibes`, `@BishojoVibes_` |
| `bishojo-vibes.com` が取得できない | ドメイン変更 | 代替: `bishojovibes.com`, `bivi.jp` |
| SFW 画像のストック不足 | 投稿頻度が維持できない | 初期は週3-4回から開始、ストックが溜まり次第毎日に移行 |
| X アカウント凍結 | 運用停止 | SFW 厳守、急激なフォロー・投稿を避ける |

## 7. Open Questions

- ヘッダー画像のデザイン詳細（Step 3 で決定）
- ハッシュタグ戦略の詳細（Step 4 で決定）
- bishojo-vibes.com の将来拡張方針（Phase 4 で決定）
