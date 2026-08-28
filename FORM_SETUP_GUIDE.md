# フォーム稼働化ガイド（無料相談 / 資料請求）

このサイトは現状、**mailto方式**でも動作しますが、
実運用では **Formspree** を使う形を推奨します。

---

## 推奨構成
- ホスティング：GitHub Pages のままでOK
- フォーム送信：Formspree
- 送信完了ページ：`/contact/thanks.html`
- 受信先メール：`nakata@ai-consulting.jp`

---

## 1. Formspreeで2つフォームを作成

Formspreeで以下の2つを作成してください。

1. **無料相談フォーム**
2. **資料請求フォーム**

作成後、以下のようなエンドポイントURLが発行されます。

- 無料相談用：`https://formspree.io/f/xxxxxxxx`
- 資料請求用：`https://formspree.io/f/yyyyyyyy`

---

## 2. 無料相談フォームの切り替え

対象ファイル：
`contact/consultation.html`

### 現在
```html
<form id="consultationForm" onsubmit="return submitConsultation(event)">
```

### 変更後
```html
<form action="https://formspree.io/f/xxxxxxxx" method="POST">
  <input type="hidden" name="_next" value="https://YOUR_DOMAIN/contact/thanks.html?type=consultation">
  <input type="hidden" name="_subject" value="【無料相談】新規お申し込み">
```

### あわせて行うこと
- ページ下部の `submitConsultation` JavaScript は不要になるため削除、または残しても `onsubmit` を外せば動作に影響はありません。

---

## 3. 資料請求フォームの切り替え

対象ファイル：
`contact/document-request.html`

### 現在
```html
<form id="documentForm" onsubmit="return submitDocument(event)">
```

### 変更後
```html
<form action="https://formspree.io/f/yyyyyyyy" method="POST">
  <input type="hidden" name="_next" value="https://YOUR_DOMAIN/contact/thanks.html?type=document">
  <input type="hidden" name="_subject" value="【資料請求】新規お申し込み">
```

### あわせて行うこと
- ページ下部の `submitDocument` JavaScript は不要になるため削除、または残しても `onsubmit` を外せば動作に影響はありません。

---

## 4. 推奨の追加設定

### スパム対策
Formspree管理画面で以下を有効化してください。
- reCAPTCHA
- Honeypot
- Rate limit

### 返信設定
- 送信通知先：`nakata@ai-consulting.jp`
- 自動返信：必要に応じて設定

### テスト
以下を必ず確認してください。
- 無料相談フォーム送信 → 完了ページに遷移
- 資料請求フォーム送信 → 完了ページに遷移
- 受信メールの件名が意図どおりか
- 入力内容が欠けずに届くか

---

## 5. GitHub Pages運用時の注意

`_next` のURLは、公開URLに合わせて変更してください。

例：
```html
<input type="hidden" name="_next" value="https://hiropi2011-cpu.github.io/ai-consulting/contact/thanks.html?type=consultation">
```

---

## 6. 最短で運用開始する手順

1. Formspreeで2フォーム作成
2. 各HTMLの`<form>`タグを書き換え
3. `_next` に本番URLを設定
4. GitHub Pagesへ再アップロード
5. 送信テスト

---

## 補足
このZIP内のフォームは、現時点では**mailto方式のまま**残しています。
つまり、**今すぐ閲覧確認は可能**で、
本番運用時だけ Formspree に切り替える想定です。
