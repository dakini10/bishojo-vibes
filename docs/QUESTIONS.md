# Design Questions: 美少女Vibes ブランドプロジェクト

## Status
- Total: 21 questions (Overall Q1-Q7, Phase 2 P2Q1-P2Q6, Site SQ1-SQ6, Perf PQ1-PQ2)
- Decided: 21 / 21
- Pending: 0

---

## Q1: プロジェクトの位置づけ

### Context
美少女Vibes は当初 ugc-community のサブブランドとして計画されたが、キャラ画像活用・有料販売・ugc連携と複数事業を横断する。どこに配置するか。

### Options
| Option | Description | Pros | Cons |
|--------|------------|------|------|
| A: 独立プロジェクト | `.claude/projects/bishojo-vibes/` にトップレベル配置 | 事業横断で管理。seed-site/site-ops と対等 | ugc-community との距離が物理的に離れる |
| B: site-ops 配下 | `.claude/projects/site-ops/bishojo-vibes/` | 運用管理と一体 | スコープが site-ops に合わない |

### Recommendation: Option A
### Decision: Option A
独立プロジェクト。ugc-community との連携は Related Projects で相互参照。

---

## Q2: ブランドガイドの粒度

### Context
Phase 3（ugc-community 認証基盤）実装は PV 10万/月到達後。ただしティザー・キャラ活用は即時開始。

### Options
| Option | Description | Pros | Cons |
|--------|------------|------|------|
| A: ミニマム | 命名+カラー+トーンのみ | 低コスト | ティザーで使うには不足 |
| B: 実装Ready | 全コンポーネント規約まで | 完全 | 陳腐化リスク |
| C: 段階的 | v0.1（方向性+ロゴ+カラー）を今作成。Phase 5でv1.0に拡充 | バランス良い | 2回作業 |

### Recommendation: Option C
### Decision: Option C
段階的。v0.1 はティザー・SNS運用に十分な詳細度。ugc-community 連携時に v1.0。

---

## Q3: ロゴデザインのアプローチ

### Context
ティザープロモーションで早期にロゴが必要。「BV」モノグラム + グロー効果（サイバーパンク調）。

### Options
| Option | Description | Pros | Cons |
|--------|------------|------|------|
| A: テキスト仕様書のみ | コンセプト記述のみ | 低コスト | ビジュアルなし |
| B: CSS/SVGプロトタイプ | HTML+CSS+SVGで実制作 | そのまま使える | デザイナー不在 |
| C: AI画像生成 | SD/FLUXで生成 | 高品質 | ベクター化が必要 |

### Recommendation: Option B → C fallback
### Decision: Option B（CSS/SVG優先）、ダメならC（AI生成）にフォールバック
コンセプト・仕様書を固めた後に実制作。

---

## Q4: マーケティング計画のスコープ

### Context
3つの事業軸（キャラ活用・有料販売・ugc連携）がある。どこまで計画するか。

### Options
| Option | Description | Pros | Cons |
|--------|------------|------|------|
| A: 3軸ロードマップ | 全軸の段階計画 | 網羅的 | 有料販売の具体像が不明 |
| B: ティザー期詳細 + 他軸概要 | 即時開始のキャラ活用に集中 | 今すぐ動ける | 長期ビジョンが弱い |
| C: ファネル中心 | 認知→興味→購入→ファン化 | 事業横断で一貫 | 抽象的 |

### Recommendation: Option B
### Decision: Option B
ティザー期の詳細アクション計画に集中。有料販売・ugc連携は bishojo-vibes プロジェクト内のサブプロジェクトとして別途深掘り。

---

## Q5: カラーシステム拡張方針

### Context
ネオンピンク `#ff69b4` をセカンダリカラーとして使う範囲。独立ブランドになったため SNS・ロゴでも使用。

### Options
| Option | Description | Pros | Cons |
|--------|------------|------|------|
| A: ブランド全般 | 全タッチポイントで統一使用 | 認知一貫 | 既存サイトとの調和が必要 |
| B: BiVi UI専用 | 8サイトの既存デザイン不変 | 影響ゼロ | 存在感が限定的 |
| C: 段階的拡大 | まずSNS・ロゴで確立。サイト組み込みはPhase 5で判断 | 柔軟 | 一時的に統一感弱い |

### Recommendation: Option C
### Decision: Option C
ブランドガイドで定義し、まずSNS・ロゴで使用。既存サイトへの適用は ugc-community 連携時に判断。

---

## Q6: SNSアカウント開設タイミング

### Context
ティザープロモーションの場としてX アカウントが必要。

### Options
| Option | Description | Pros | Cons |
|--------|------------|------|------|
| A: 即時開設・運用開始 | ロゴ完成前から投稿開始 | 最速 | ブランド統一されていない第一印象 |
| B: ハンドル確保即時 + 運用はロゴ完成後 | アカウント作成のみ先行。投稿はブランド確定後 | 第一印象が整う | 若干遅れる |

### Recommendation: Option B
### Decision: Option B
ハンドル即時確保。運用はロゴ・カラー・トーン確定後に開始。**運用コンセプトをしっかり策定する。**

---

## Q7: ドメイン取得タイミング

### Context
`bishojo-vibes.com` 等の独自ドメイン。ティザー・ランディングページ・将来の中央認証に使用可能。

### Options
| Option | Description | Pros | Cons |
|--------|------------|------|------|
| A: 即時確保 | 今すぐ取得 | 確実に確保 | 年間費用発生 |
| B: コンセプト確定後 | ブランド仕様を固めてから必要性を判断 | コスト最適 | 取られるリスク（低） |
| C: Phase 5（ugc連携）時 | 認証基盤設計時に判断 | 技術要件が確定 | かなり先 |

### Recommendation: Option B
### Decision: Option A（前倒し）
Phase 2 でドメイン取得を前倒し。X アカウントのメールアドレス + サイト一覧ページのインフラとして必要。

---

# Phase 2: SNS運用 — Design Questions

## P2Q1: アカウント構成

### Context
8サイトを横断するブランドの X アカウント構成。1アカウント vs 複数アカウント。

### Options
| Option | Description | Pros | Cons |
|--------|------------|------|------|
| A: ブランド1アカウント | `@BishojoVibes` 1本 | 管理コスト最小、フォロワー集約 | 各サイトのジャンル混在 |
| B: ブランド + サイト別 | `@BishojoVibes` + 各サイトごと | ジャンル純度、ファン層の分離 | 9アカウント運用は非現実的 |
| C: ブランド + NSFW分離 | `@BishojoVibes`(SFW) + `@BishojoVibes_`(NSFW) | センシティブ設定問題を回避 | 2アカウント管理 |

### Recommendation: Option A
### Decision: Option A
ブランド1アカウント。bishojo-vibes.com ドメインを取得し、そのメールアドレスに紐付けてアカウント作成。

---

## P2Q2: X ハンドル名

### Context
ハンドルはブランド認知に直結。変更コストが高い。

### Options
| Option | Description | Pros | Cons |
|--------|------------|------|------|
| A: `@BishojoVibes` | フルネーム | ブランド名と完全一致、検索性◎ | 14文字 |
| B: `@bishojo_vibes` | スネークケース | 読みやすい | アンダースコアが入る |
| C: `@BiViOfficial` | 略称+公式 | 短い | BiVi 単体の認知が必要 |
| D: `@BiVi_jp` | 略称+地域 | 最短 | グローバル展開時に制約 |

### Recommendation: Option A
### Decision: Option A (`@BishojoVibes`)
ブランド名と完全一致。ハッシュタグ `#BishojoVibes` とも統一。

---

## P2Q3: 投稿コンテンツカテゴリと比率

### Context
何を投稿するかの軸。キャラ画像がメインだが、それ以外の投稿も混ぜるか。

### Options
| Option | Description | Pros | Cons |
|--------|------------|------|------|
| A: キャラ画像特化 (90%+) | ほぼ画像投稿のみ | 運用シンプル、ビジュアル訴求特化 | エンゲージメント手段が限定的 |
| B: 画像主軸 + 記事導線 (70/30) | キャラ画像 + 新着記事紹介 | サイト流入が期待 | 宣伝臭 |
| C: 画像 + 記事 + 対話 (60/20/20) | アンケート・リプ・コミュニティ運用含む | エンゲージメント最大化 | 運用コスト高 |

### Recommendation: Option B
### Decision: キャラ画像特化 (90%+) + 美少女Vibes リリース情報（新機能・ガチャ等）を随時
記事導線ではなく、ブランド自体のニュースを混ぜる。フォロワー体験と一貫性がある。

---

## P2Q4: 投稿頻度

### Context
頻度が高すぎると制作が追いつかない。低すぎるとアルゴリズムに不利。

### Options
| Option | Description | Pros | Cons |
|--------|------------|------|------|
| A: 毎日1投稿 | 日次ルーティン | アルゴリズム最適、習慣化 | 画像ストック30枚/月必要 |
| B: 週3-4回 | 隔日ペース | 現実的な制作量 | リーチ弱め |
| C: 週1-2回 | 厳選投稿 | 高品質に集中 | 成長が遅い |

### Recommendation: Option B
### Decision: Option A（毎日1投稿）
画像は大量生成でストック可能なため、毎日投稿を維持。

---

## P2Q5: NSFW コンテンツの扱い

### Context
X はセンシティブメディア設定で NSFW 投稿可能だが、フラグが付くと SFW 投稿もリーチが落ちる。

### Options
| Option | Description | Pros | Cons |
|--------|------------|------|------|
| A: NSFW中心 | センシティブ設定ON | ターゲット層に直球 | リーチ制限、検索非表示 |
| B: SFW中心 + 際どいSFW | 明確なNSFWは避ける | リーチ最大化、凍結リスク低 | サイトとのギャップ |
| C: SFW主軸 + NSFW定期 | 混在 | バランス | フラグは付く |

### Recommendation: Option B
### Decision: Option B（SFW中心）
リーチとフォロワー獲得を最優先。NSFW画像は有料販売チャネル（Phase 3）への誘導素材として温存。プロフィールに bishojo-vibes.com（SFW サイト一覧）をリンク。リンク先のリンク先がアダルトなのは X 規約上問題なし。

---

## P2Q6: 投稿自動化の程度

### Context
毎日投稿を継続するための仕組み。

### Options
| Option | Description | Pros | Cons |
|--------|------------|------|------|
| A: 完全手動 | 毎日手動で投稿 | 柔軟 | 継続が負担 |
| B: スケジュール投稿 (X標準) | X の予約投稿で1週間分まとめ設定 | 無料 | 週次の設定作業 |
| C: API自動化 | X API + パイプライン連携 | 完全自動 | API有料（$100/月）、開発コスト |
| D: 外部ツール (Buffer等) | SaaS スケジューラー | UI便利 | 月額費用 |

### Recommendation: Option B
### Decision: Option A/B（手動運用、予約投稿も活用）
収益化後に API 自動化 (C) を検討。

---

---

# Site Construction — Design Questions

## SQ1: 技術スタック

### Context
bishojo-vibes.com はブランド LP（今）→ ugc-community フロントエンド（将来）に発展する。技術選定が拡張性・表現力・開発コストを決定。

### Options
| Option | Description | Pros | Cons |
|--------|------------|------|------|
| A: Hugo | 既存8サイトと同じ | ノウハウ活用 | 動的機能が弱い、テンプレートの表現力に限界 |
| B: Astro | SSG + Islands Architecture | 部分的に React 等追加可、MDX 対応 | 新技術の学習コスト |
| C: Next.js | フルスタック | 動的機能統合しやすい | 過剰、SSR運用が複雑 |
| D: 静的HTML | フレームワーク不要 | 最速・最軽量 | 拡張性低い |

### Recommendation: Option B
### Decision: Option B（Astro）
ugc-community 統合を見据えたハイブリッド構成。ai-adaffi-lab でも Astro を使用しており、運用ノウハウの蓄積効果が大きい。

---

## SQ2: サイト構造・ページ構成

### Context
今作るページと将来追加するページの設計。

### Options
| Option | Description | Pros | Cons |
|--------|------------|------|------|
| A: LP 1ページのみ | `/` だけ。将来ページ追加 | 最小工数 | 世界観表現が1ページに限定 |
| B: LP + システム紹介 | `/` + BiVi 紹介ページ数枚 | 深みが出る | システム未稼働での説明は違和感 |
| C: LP + docs サブドメイン | `/` + `docs.bishojo-vibes.com` | 分離が綺麗 | 2サイト管理 |

### Recommendation: Option A
### Decision: Option A（LP 1ページのみ）
ティザー戦略として「BiVi って何？」にはあえて答えない。謎めいたままにしておく。docs は Phase 5 で Starlight を検討。

---

## SQ3: リポジトリ戦略

### Context
bishojo-vibes.com を auto-publisher リポ内に置くか独立リポにするか。

### Options
| Option | Description | Pros | Cons |
|--------|------------|------|------|
| A: auto-publisher 内 | `sites/bishojo-vibes/` | 既存CI/CDに乗る | Hugo群と異質、リポ肥大化 |
| B: 独立リポ | `bishojo-vibes` 新規作成 | 技術スタック独立、ugcバックエンド同居可 | デプロイフロー別途構築 |
| C: 段階的 | 今は内部、後で分離 | 初期コスト最小 | 移行コスト |

### Recommendation: Option B
### Decision: Option B（独立リポ）
Astro は Hugo と build/deploy フローが異なる。将来 ugc-community API も同居する。

---

## SQ4: デザインアプローチ

### Context
LP 1ページの世界観表現方針。

### Options
| Option | Description | Pros | Cons |
|--------|------------|------|------|
| A: ミニマル・ダーク | ロゴ + 波形アニメーション + サイト一覧 | 「謎めいた」を体現 | 物足りないリスク |
| B: ビジュアル・イマーシブ | パーティクル/グロー + スクロールアニメーション | インパクト大 | 開発コスト高 |
| C: キャラ画像活用 | SFW キャラ画像をヒーローに使用 | 目を引く | ギャラリーっぽくなる |

### Recommendation: Option A
### Decision: Option A ベース + オリキャラ入りキービジュアル（SD リポで制作）+ アニメーション/パララックスはモックアップ複数案で検討
ミニマル基調だが、キービジュアルで華を添える。演出の程度はプロトタイピングで決定。

---

## SQ5: デプロイ方式

### Context
Cloudflare Pages へのデプロイ方法。

### Options
| Option | Description | Pros | Cons |
|--------|------------|------|------|
| A: 既存プロジェクト流用 | wrangler deploy | 追加作業なし | 手動デプロイ |
| B: GitHub 連携 | push で自動デプロイ | CI/CD 不要 | Astro ビルド設定が必要 |

### Recommendation: Option B
### Decision: Option B（GitHub 連携で自動デプロイ）

---

## SQ6: カスタムドメイン接続タイミング

### Context
bishojo-vibes.com をいつ Pages に接続するか。

### Options
| Option | Description | Pros | Cons |
|--------|------------|------|------|
| A: 今接続 | 仮ページでもドメイン有効化 | すぐアクセス可能 | 仮ページが公開される |
| B: LP 完成後に接続 | 初公開が完成版 | 第一印象が整う | それまでドメインは未使用 |

### Recommendation: Option A
### Decision: Option B（LP 完成後にカスタムドメイン接続 → X 運用開始）
LP 完成 → ドメイン接続 → X アカウント作成の順序で進める。

---

---

# Performance Optimization — Design Questions

## PQ1: Three.js の扱い

### Context
Lighthouse Performance スコア 59。JS バンドル 490.80 KB (gzip 123.58 KB) のほぼ全てが Three.js。実際に使用しているのは PlaneGeometry + カスタム ShaderMaterial + カメラ + レンダラーのみで、Three.js の機能の大部分は不要。

### Options
| Option | Description | Pros | Cons |
|--------|------------|------|------|
| A: Raw WebGL に置き換え | カスタムシェーダーはそのまま、ボイラープレートを自前実装 | バンドル 490KB → ~3KB、依存ゼロ | 実装工数 ~150行 |
| B: TWGL.js に置き換え | 軽量 WebGL ヘルパー使用 | ~15KB gzip、コード簡潔 | 新規依存追加 |
| C: Three.js tree-shake + lazy | 名前付き import + dynamic import | コード変更最小 | まだ 200KB+ 残る |
| D: CSS/Canvas 2D | WebGL 廃止 | JS バンドルゼロ | 3D波形テレインの表現力低下 |

### Recommendation: Option A
### Decision: Option A（Raw WebGL に完全置き換え）
モック検証で見た目が完全同一であることを確認済み。490KB → ~3KB の最大削減効果。

---

## PQ2: 画像最適化

### Context
KV画像 4枚 (PNG) 合計 5.9MB + OG画像 3.6MB。Lighthouse LCP・画像読み込み時間に直接影響。

### Options
| Option | Description | Pros | Cons |
|--------|------------|------|------|
| A: WebP変換 + リサイズ | PNG → WebP (80%品質)、幅1200px | 合計 9.5MB → ~600KB (94%削減) | WebP非対応ブラウザ(極少) |
| B: スキップ | Three.js置き換えのみ | 画像品質維持 | Lighthouse改善が限定的 |

### Recommendation: Option A
### Decision: Option A（WebP変換 + リサイズ）
KV画像・OG画像ともにWebP化してサイズ大幅削減。

---

## Concerns Summary
| # | Concern | Status | Resolution |
|---|---------|--------|-----------|
| C1 | ロゴのCSS/SVG制作品質 | **Resolved** | CSS/SVGプロトタイプ + opentype.jsアウトライン化で確定。フォールバック不要 |
| C2 | 3事業軸の優先順位 | Open | ティザー期はキャラ活用に集中。他軸はサブPJとして別途深掘り |
| C3 | ugc-community との統合 | **Resolved** | bishojo-vibes.com を ugc-community のフロントエンドとして統合（ハイブリッド: 基盤は今、機能は段階的）|
| C4 | SNS運用の継続的コンテンツ供給 | **Resolved** | P2Q3-4 で決定: キャラ画像特化・毎日投稿・大量生成ストック |
| C5 | 有料販売の法的要件 | Deferred | サブPJとして別途調査 |
