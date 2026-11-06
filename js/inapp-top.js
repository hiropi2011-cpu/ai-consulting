/* アプリ内ブラウザ（LINEなど）で別タブが開けず同じ画面のまま移ったとき、前のページのスクロール位置が残って
   一番下から始まることがある（2026-11-06 iPhoneのLINEで確認）。普通に開いたときだけ先頭に戻す。
   ・別タブで開くリンクの行き先のページにだけ入れる（トップ・LP・プライバシーポリシー）
   ・#付きのリンク、再読み込み、戻るボタンでは何もしない
   ・読者が画面に触れたら何もしない */
(function () {
  var nav = performance.getEntriesByType && performance.getEntriesByType('navigation')[0];
  if (location.hash || (nav && (nav.type !== 'navigate' || nav.name.indexOf('#') !== -1))) return;

  var touched = false;
  ['pointerdown', 'touchstart', 'wheel', 'keydown'].forEach(function (name) {
    window.addEventListener(name, function () { touched = true; }, { passive: true, once: true });
  });

  function toTop() {
    if (!touched && window.scrollY > 0) window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }

  toTop();
  window.addEventListener('load', function () {
    toTop();
    setTimeout(toTop, 300);
    setTimeout(toTop, 1000);
  });
})();
