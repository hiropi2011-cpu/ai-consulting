/* 文字データ（Noto Sans JP）を裏で読み込み、そろってから1回で切り替える（2026-11-06）
   ・Googleの文字データは日本語だと約40個のファイルに分かれる。届くたびに画面全体を計算し直すと、スマホで数秒かたまる
   ・届くまでは端末の標準の文字で表示する（--font-sans の切り替えは css/style.css）
   ・同じタブの2ページ目からは最初から切り替え済みにする（各ページの head の1行） */
(function () {
  var root = document.documentElement;
  var link = document.getElementById('aic-fonts');
  if (!link) return;

  function done() {
    root.classList.add('fonts-loaded');
    try { sessionStorage.setItem('aicFonts', '1'); } catch (e) {}
  }

  function load() {
    if (root.classList.contains('fonts-loaded') || !document.fonts || !document.fonts.load) {
      done();
      return;
    }
    // ページの文字に必要なファイルだけを読み込む。太さは1つのファイルにまとまっているので1回でよい
    document.fonts.load('400 1em "Noto Sans JP"', document.body.textContent).then(done, done);
    // 完了が返ってこない場合の保険。10秒たったら切り替える（それ以降は届いた分から表示される）
    setTimeout(done, 10000);
  }

  window.aicFontsLoad = load;
  if (link.media === 'all') load();
})();
