/* 一時的な調査用（2026-11-06）。LPを ?tapdebug=1 で開いたときだけ読み込まれる。
   LINEの中で1回目のタップが効かない原因を調べるため、タップで届いたものを画面の上に出す。リンクを押しても移動しない。
   調査が終わったら読み込みの行を消し、このファイルは空にする */
(function () {
  var box = document.createElement('div');
  box.style.cssText = 'position:fixed;left:4px;right:4px;top:4px;z-index:99999;max-height:60vh;overflow:hidden;background:rgba(0,0,0,.88);color:#7CFC00;font:11px/1.4 monospace;padding:6px;border-radius:6px;pointer-events:none;white-space:pre-wrap;word-break:break-all';
  document.body.appendChild(box);

  var t0 = performance.now();
  var lines = [];
  function head() {
    var vv = window.visualViewport;
    return (/\bLine\//i.test(navigator.userAgent) ? 'LINE' : 'LINE以外') +
      ' 高さ' + window.innerHeight + (vv ? '/' + Math.round(vv.height) : '') +
      ' 位置' + Math.round(window.scrollY) + '/' + Math.round(document.documentElement.scrollHeight) + '\n';
  }
  function show() { box.textContent = head() + lines.join('\n'); }
  function log(s) {
    lines.push(((performance.now() - t0) / 1000).toFixed(2) + ' ' + s);
    if (lines.length > 18) lines.shift();
    show();
  }
  function name(el) {
    if (!el || !el.tagName) return el && el.nodeName ? el.nodeName : '?';
    var c = typeof el.className === 'string' && el.className ? '.' + el.className.split(/\s+/)[0] : '';
    return el.tagName.toLowerCase() + c;
  }

  ['touchstart', 'touchend', 'touchcancel', 'pointerdown', 'pointerup', 'pointercancel', 'mouseover', 'mousedown', 'mouseup', 'click'].forEach(function (ev) {
    window.addEventListener(ev, function (e) {
      var p = e.changedTouches ? e.changedTouches[0] : e;
      var y = p && p.clientY !== undefined ? ' y' + Math.round(p.clientY) : '';
      log(ev + ' ' + name(e.target) + y);
      if (ev === 'click' && e.target.closest) {
        var a = e.target.closest('a');
        if (a) {
          e.preventDefault();
          log('=> リンク届いた ' + a.getAttribute('href') + ' 別タブ=' + (a.getAttribute('target') || 'なし'));
        }
      }
    }, { capture: true, passive: ev !== 'click' });
  });

  var timer;
  window.addEventListener('scroll', function () {
    clearTimeout(timer);
    timer = setTimeout(function () { log('スクロール止まる 位置' + Math.round(window.scrollY)); }, 200);
  }, { passive: true });
  window.addEventListener('resize', function () { log('画面の大きさ変化 ' + window.innerHeight); }, { passive: true });
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', function () { log('見える範囲変化 ' + Math.round(window.visualViewport.height)); });
  }
  log('調査中。タップしてください');
})();
