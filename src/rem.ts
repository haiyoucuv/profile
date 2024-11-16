// !(function (e, i) {
//   var t = e.documentElement, n = navigator.userAgent.match(/iphone|ipod|ipad/gi),
//     a = n ? Math.min(i.devicePixelRatio, 3) : 1, m = "orientationchange" in window ? "orientationchange" : "resize";
//   t.dataset.dpr = a;
//   for (var d, l, c = !1, o = e.getElementsByTagName("meta"), r = 0; r < o.length; r++) {(l = o[r]), "viewport" == l.name && ((c = !0), (d = l));}
//   if (c) {d.content = "width=device-width,initial-scale=1.0,maximum-scale=1.0, minimum-scale=1.0,user-scalable=no";} else {
//     var o = e.createElement("meta");
//     (o.name = "viewport"), (o.content = "width=device-width,initial-scale=1.0,maximum-scale=1.0, minimum-scale=1.0,user-scalable=no");
//     t.firstElementChild.appendChild(o);
//   }
//   var s = function () {
//     var e = t.clientWidth;
//     var dw = window["designWidth"] || 750;
//     e / a > dw && (e = dw * a), (window.remScale = e / dw), (t.style.fontSize = 100 * (e / dw) + "px");
//   };
//   s(), e.addEventListener && i.addEventListener(m, s, !1);
// })(document, window);