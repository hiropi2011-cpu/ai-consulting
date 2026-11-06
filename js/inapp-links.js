/* LINEアプリ内のブラウザでは、別タブ指定のリンクが1回のタップで開かないことがある（2026-11-06 iPhoneのLINEで確認。2回押すと開く。外部ブラウザでは起きない）
   タブの無いブラウザなので、LINEの中でだけ別タブの指定を外して普通のリンクにする */
(function () {
  if (!/\bLine\//i.test(navigator.userAgent)) return;
  var links = document.querySelectorAll('a[target="_blank"]');
  for (var i = 0; i < links.length; i++) links[i].removeAttribute('target');
})();
