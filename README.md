# AIコンサルティング株式会社 コーポレートサイト【🌸 ピンク版 +30%】

> AIで、企業と学校の未来をつなぐ。

独立系AIコンサルティングファーム「AIコンサルティング株式会社」のコーポレートサイトです。

> **📌 このバージョンについて**
> ロゴのピンク #E72FC2 をコーポレートカラーとして採用した「ピンク版」です。
> 背景画像の鮮明度は **+30%** で調整されています（華やか・先進的・ネオン感）。
>
> もう1つの「Cyan Tech版」（爽やか・テック感）と見比べてお選びください。

## 🎨 デザインコンセプト

- **コーポレートカラー**：ピンク `#E72FC2`（ロゴから抽出）
- **トーン**：高級感 × 先進性 × テック感（ネオン調のグラデーション）
- **メインフォント**：Noto Sans JP（Google Fonts）
- **背景画像鮮明度**：+30%（華やかでインパクトのある仕上がり）

## 📁 ディレクトリ構造

```
ai-consulting-site/
├── index.html                    # トップページ
├── 404.html                      # 404エラーページ
├── README.md
├── .nojekyll                     # GitHub Pages Jekyll無効化
├── .gitignore
├── css/
│   └── style.css                 # 統一スタイルシート（フォーム含む）
├── images/
│   ├── logo.png                  # 会社ロゴ
│   ├── favicon.svg               # ファビコン
│   ├── hero.jpg                  # ヒーロー画像
│   └── services/
│       ├── corporate.jpg         # 企業向けキービジュアル
│       ├── education.jpg         # 通信制高校向けキービジュアル
│       ├── teacher.jpg           # 教員向けキービジュアル
│       └── matching.jpg          # マッチングキービジュアル
├── services/
│   ├── corporate.html            # 企業向けAI導入コンサル
│   ├── education.html            # 通信制高校向けAIソリューション
│   ├── teacher.html              # 教員向けAI研修・AIチューター
│   └── matching.html             # AI事業者マッチング
└── contact/
    ├── consultation.html         # 無料相談めし込みフォーム
    ├── document-request.html     # サービス資料請求フォーム
    └── thanks.html               # 送信完了ページ【共通】
```

## 📨 フォームの動作について

### デフォルト：mailto方式（設定不要・即可動作）
フォーム送信ボタンを押すと、ユーザーのメーラーソフトが起動し、入力内容が自動セットされた状態で `nakata@ai-consulting.jp` 宛のメール作成画面が開きます。

### （推奨）Formspree連携への切り替え
サーバーを使わずに、入力内容を自動でメール転送する場合：
1. [Formspree](https://formspree.io/) で無料アカウント登録（月50件まで無料）
2. エンドポイントURL（例：`https://formspree.io/f/xxxxxxxx`）を取得
3. `contact/consultation.html` と `contact/document-request.html` の `<form>` タグ内のコメントに手順記載済み
4. 送信テストして、スパムフィルターを設定

概要：`<form>` タグに `action="https://formspree.io/f/xxxxxxxx" method="POST"` を設定し、スクリプトのonsubmitを削除するだけで切り替え可能です。

## 🚀 GitHub Pagesへのデプロイ手順

### 方法1：このリポジトリをそのまま公開する場合

1. **新しいリポジトリを作成**
   ```bash
   # 例：ai-consulting-site という名前でリポジトリ作成
   ```

2. **ファイルをアップロード**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AI Consulting corporate site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ai-consulting-site.git
   git push -u origin main
   ```

3. **GitHub Pagesを有効化**
   - リポジトリの `Settings` → `Pages` を開く
   - `Source` で `Deploy from a branch` を選択
   - `Branch` を `main`、フォルダを `/ (root)` に設定
   - `Save` をクリック

4. **公開URL**
   ```
   https://YOUR_USERNAME.github.io/ai-consulting-site/
   ```

### 方法2：独自ドメインを使う場合

1. リポジトリのルートに `CNAME` ファイルを作成し、ドメインを記述：
   ```
   www.ai-consulting.jp
   ```

2. ドメインのDNS設定で、以下のAレコードを追加：
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

3. GitHub Pages の `Custom domain` 欄にドメインを入力し、`Enforce HTTPS` を有効化

## 🛠️ ローカルでのプレビュー

シンプルなHTMLサイトのため、特別なビルドは不要です。

### Python の組み込みサーバー

```bash
cd ai-consulting-site
python3 -m http.server 8000
# → http://localhost:8000 をブラウザで開く
```

### Node.js の場合

```bash
npx serve .
```

### VS Code の場合

`Live Server` 拡張機能をインストール → `index.html` を右クリック → `Open with Live Server`

## ✏️ 編集ガイド

### よく編集する箇所

| 項目 | ファイル | 検索ワード |
|---|---|---|
| 会社情報 | `index.html` | `〒104-0061` |
| 問い合わせ先メール | 全HTML | `nakata@ai-consulting.jp` |
| ロゴ画像差し替え | `images/logo.png` | — |
| ヒーロー画像 | `images/hero.jpg` | — |
| カラーテーマ | `css/style.css` | `--pink:` `--purple:` |
| 導入事例 | `index.html` | `Case Studies` |
| お客様の声 | `index.html` | `Client Voices` |
| FAQ内容 | `index.html` | `class="faq"` |

### カラーパレットの調整

`css/style.css` の冒頭にある `:root` セクションで全色を一括管理しています。

```css
:root {
  --pink:        #E72FC2;   /* メインピンク */
  --purple:      #8B2DD7;   /* サブパープル */
  --cyan:        #2FC7E8;   /* アクセントシアン */
  /* ... */
}
```

## 📧 お問い合わせ

サイト内のすべての「無料相談」「資料請求」ボタンは、以下のメールアドレスにメールクライアントを起動します：

- **問い合わせ先**：`nakata@ai-consulting.jp`（代表 中田 博之）

メールアドレスを変更する場合は、各HTMLファイル内の `mailto:nakata@ai-consulting.jp` を一括置換してください。

## 📋 ページ一覧

| ページ | URL | 主な内容 |
|---|---|---|
| トップ | `/index.html` | ヒーロー、強み、サービス、事例、FAQ、会社概要 |
| 企業向けAI導入 | `/services/corporate.html` | 戦略立案・PoC・運用定着支援 |
| 通信制高校向け | `/services/education.html` | 個別最適学習・補助金活用 |
| 教員向け研修 | `/services/teacher.html` | AI研修・AIチューター導入 |
| AI事業者マッチング | `/services/matching.html` | 事業者紹介・アライアンス |
| 無料相談フォーム | `/contact/consultation.html` | 氏名・企業名・住所・連絡先・希望日時（1〜3） |
| 資料請求フォーム | `/contact/document-request.html` | 氏名・企業名・住所・メール |
| 送信完了ページ | `/contact/thanks.html` | 両フォーム共通（?type=で切り替え） |

## 🔧 技術仕様

- **HTML5** セマンティック構造
- **CSS3** カスタムプロパティ（変数）、Grid、Flexbox
- **バニラ JavaScript**（フレームワーク不使用、約30行）
- **レスポンシブ対応**：1024px / 768px / 480px の3段階ブレークポイント
- **アクセシビリティ**：セマンティックHTML、`<details>` ネイティブアコーディオン
- **パフォーマンス**：画像最適化済（合計約760KB）、外部依存はGoogle Fonts のみ

## 📄 ライセンス

© 2026 AIコンサルティング株式会社 All Rights Reserved.

---

**お問い合わせ**：nakata@ai-consulting.jp  
**所在地**：〒104-0061 東京都中央区銀座七丁目５番４号
