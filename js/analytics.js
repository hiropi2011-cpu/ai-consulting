/* アクセス解析（2026-11-06）。IDはこのファイルの2か所だけ。
   ・社内の閲覧は数えない：アドレスに ?aic_internal=1 を付けて1回開くと、そのブラウザは以後カウントしない（?aic_internal=0 で解除）
   ・申込フォームのページには Clarity を入れない（プライバシーポリシーにも明記）
   ・申込の完了ページ（/contact/thanks.html・/lp/contact/thanks.html）で generate_lead を送る。?type= は consultation / document / seminar */
(function () {
  var GA_ID = 'G-ZPZ2150PQV';
  var CLARITY_ID = 'z9904o1m0k';

  // 本番のアドレス以外（手元の確認用サーバー・GitHub Pagesの試作）では数えない
  if (location.hostname !== 'ai-consulting.jp') return;

  var internal = false;
  try {
    var q = location.search;
    if (q.indexOf('aic_internal=1') > -1) localStorage.setItem('aic_internal', '1');
    if (q.indexOf('aic_internal=0') > -1) localStorage.removeItem('aic_internal');
    internal = localStorage.getItem('aic_internal') === '1';
  } catch (e) {}
  if (internal) return;

  var path = location.pathname;

  // Googleアナリティクス
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);
  var g = document.createElement('script');
  g.async = true;
  g.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(g);

  if (/\/contact\/thanks\.html$/.test(path)) {
    var type = new URLSearchParams(location.search).get('type') || 'unknown';
    window.gtag('event', 'generate_lead', {
      form_type: type,
      site_area: path.indexOf('/lp/') === 0 ? 'lp' : 'official'
    });
  }

  // Microsoft Clarity（申込フォームのページでは動かさない）
  if (!/\/contact\//.test(path)) {
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', CLARITY_ID);
  }
})();
