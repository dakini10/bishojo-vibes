# Bishojo Vibes (美少女Vibes)

8つのFANZA同人/動画アフィリエイトサイトを横断する独立ブランド。
ティザー期はブランドLP + 8サイト一覧として機能し、将来的に ugc-community のフロントエンドに発展する。

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Astro (SSG, Islands Architecture) |
| Hosting | Cloudflare Pages (GitHub 連携自動デプロイ) |
| Styling | CSS (vanilla, BRAND_GUIDE トークンベース) |
| Fonts | Google Fonts (Montserrat Black, M PLUS 1p Black) |
| Domain | bishojo-vibes.com (Cloudflare Registrar) |
| Future | Cloudflare D1/KV/Workers (ugc-community backend) |

## Directory Structure

```
bishojo-vibes/
├── src/
│   ├── components/      # Astro コンポーネント (BiViLogo etc.)
│   ├── layouts/          # Base.astro (OGP対応)
│   ├── pages/            # index.astro (LP 1ページ)
│   └── styles/           # tokens.css, global.css
├── public/
│   ├── favicon.svg
│   ├── favicon.ico
│   └── images/           # キービジュアル等
├── mockups/              # デザインモック (mock-d3 が採用版)
├── docs/                 # ブランド・計画ドキュメント
│   ├── BRAND_GUIDE.md    # ブランドガイド v0.1
│   ├── LOGO_SPEC.md      # ロゴ・VI仕様書
│   ├── PLAN-site.md      # サイト構築計画 (Phase 2a)
│   ├── PLAN-sns.md       # SNS運用計画 (Phase 2b)
│   ├── QUESTIONS.md      # 設計判断記録 (19問)
│   ├── PROGRESS.md       # 進捗管理
│   └── assets/           # SVGアセット (icon-baseline等)
├── astro.config.mjs
└── package.json
```

## Common Commands

```bash
# Dev server
npm run dev              # localhost:4321

# Build
npm run build            # dist/ に出力

# Preview (build後)
npm run preview
```

## Brand Summary

| Item | Value |
|------|-------|
| Formal (EN) | Bishojo Vibes |
| Formal (JP) | 美少女Vibes |
| Logo / Abbreviation | BiVi |
| Primary Color | Lime Green `#c7f284` |
| Secondary Color | Neon Pink `#ff69b4` |
| Background | Deep Navy `#0a1520` |
| Surface | Dark Blue `#101e2c` |
| Gradient | `#c7f284` → `#ff69b4` (Lime to Pink) |
| Fonts | Montserrat Black (900) + M PLUS 1p Black (900) |
| Motif | Baseline Wave (pulse/heartbeat blip) |
| Tone | Cool & Stylish + Gaming Edge |
| Tagline | "Your vibe starts here." |

## Current Status

- Phase 1 (ブランド基盤): **完了** — ロゴ・カラー・命名確定
- Phase 2a (サイト構築): **進行中** — Step 6 検証中（デプロイ・OGP済み、Performance改善残）
- Phase 2b (SNS運用): Step 6完了後に開始
- Phase 3 (有料販売): 未着手
- Phase 4 (ugc-community連携): PV 10万/月後

## Design Decisions (確定)

全19問決定済み。詳細は `docs/QUESTIONS.md` を参照。

| Key Decision | Value |
|-------------|-------|
| 技術スタック | Astro (独立リポ) |
| サイト構成 | LP 1ページ (ティザー戦略) |
| デプロイ | GitHub 連携自動デプロイ |
| ドメイン接続 | **完了** (bishojo-vibes.com) |
| SNS | @BishojoVibes、SFW運用、毎日1投稿 |
| LP デザイン | Mock D v3 (Waveform) — Three.js 3D波形テレイン + 4枚KVカルーセル |

## Implementation Steps (Phase 2a)

| Step | Status |
|------|--------|
| Step 1: リポ作成 + Astro セットアップ | **完了** |
| Step 2: デザインモック検討 | **完了** (Mock D v3 採用) |
| Step 3: キービジュアル制作 (SD リポ) | **完了** (4枚納品) |
| Step 4: LP 本実装 | **完了** (Lucideアイコン・CTAスライド・OGP対応) |
| Step 5: デプロイ + ドメイン接続 | **完了** (wrangler CLI + CNAME設定) |
| Step 6: 検証 + SNS開始準備 | **進行中** (Lighthouse: Perf 59 要改善) |

## Skills

| Skill | Description |
|-------|-------------|
| `/r-bv` | プロジェクト再開 — 状況報告 |
| `/s-bv` | 進捗更新 — PROGRESS.md 記録 |

## Related Projects (auto-publisher 側)

| Project | Location | Relationship |
|---------|----------|-------------|
| auto-publisher | `/Users/yamamotochisato/Documents/auto-publisher/` | 8サイト運用・パイプライン |
| ugc-creative | `/Users/yamamotochisato/Documents/SD/` | キャラ画像制作 (SD) |
| 計画アーカイブ | `auto-publisher/.claude/projects/bishojo-vibes/` | 元の計画ドキュメント |

## Key References

@docs/BRAND_GUIDE.md
@docs/LOGO_SPEC.md
@docs/PLAN-site.md
