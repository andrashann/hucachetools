/**
 * Minified by jsDelivr using UglifyJS v3.3.16.
 * Original file: /npm/togpx@0.5.4/togpx.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!(function (e) {
  if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    ("undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : this
    ).togpx = e();
  }
})(function () {
  return (function i(a, s, u) {
    function f(r, e) {
      if (!s[r]) {
        if (!a[r]) {
          var t = "function" == typeof require && require;
          if (!e && t) return t(r, !0);
          if (c) return c(r, !0);
          var o = new Error("Cannot find module '" + r + "'");
          throw ((o.code = "MODULE_NOT_FOUND"), o);
        }
        var n = (s[r] = { exports: {} });
        a[r][0].call(
          n.exports,
          function (e) {
            var t = a[r][1][e];
            return f(t || e);
          },
          n,
          n.exports,
          i,
          a,
          s,
          u
        );
      }
      return s[r].exports;
    }
    for (
      var c = "function" == typeof require && require, e = 0;
      e < u.length;
      e++
    )
      f(u[e]);
    return f;
  })(
    {
      1: [
        function (e, t, r) {
          var n = e("jxon");
          n.config({ attrPrefix: "@" }),
            (t.exports = function (e, a) {
              if (
                "string" ==
                typeof (a = (function (e, t) {
                  for (var r in e) t.hasOwnProperty(r) && (e[r] = t[r]);
                  return e;
                })(
                  {
                    creator: "togpx",
                    metadata: void 0,
                    featureTitle: function e(t) {
                      if (!t) return "";
                      if ("object" == typeof t.tags) {
                        var r = e(t.tags);
                        if ("" !== r) return r;
                      }
                      return t.name ? t.name : t.ref ? t.ref : t.id ? t.id : "";
                    },
                    featureDescription: function e(t) {
                      if (!t) return "";
                      if ("object" == typeof t.tags) return e(t.tags);
                      var r = "";
                      for (var o in t)
                        "object" != typeof t[o] && (r += o + "=" + t[o] + "\n");
                      return r.substr(0, r.length - 1);
                    },
                    featureLink: void 0,
                    featureCoordTimes: function (e) {
                      return (
                        (e.properties &&
                          (e.properties.times || e.properties.coordTimes)) ||
                        null
                      );
                    },
                  },
                  a || {}
                )).featureCoordTimes
              ) {
                var t = a.featureCoordTimes;
                a.featureCoordTimes = function (e) {
                  return e.properties[t];
                };
              }
              function s(e, t) {
                a.featureLink &&
                  (e.link = { "@href": a.featureLink(t.properties) });
              }
              var u = {
                gpx: {
                  "@xmlns": "http://www.topografix.com/GPX/1/1",
                  "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                  "@xsi:schemaLocation":
                    "http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd",
                  "@version": "1.1",
                  metadata: null,
                  wpt: [],
                  trk: [],
                },
              };
              return (
                a.creator && (u.gpx["@creator"] = a.creator),
                a.metadata ? (u.gpx.metadata = a.metadata) : delete a.metadata,
                ("FeatureCollection" === e.type
                  ? e.features
                  : "Feature" === e.type
                  ? [e]
                  : [{ type: "Feature", properties: {}, geometry: e }]
                ).forEach(function r(n) {
                  switch (n.geometry.type) {
                    case "Point":
                    case "MultiPoint":
                      var e = n.geometry.coordinates;
                      "Point" == n.geometry.type && (e = [e]),
                        e.forEach(function (e) {
                          (o = {
                            "@lat": e[1],
                            "@lon": e[0],
                            name: a.featureTitle(n.properties),
                            desc: a.featureDescription(n.properties),
                          }),
                            void 0 !== e[2] && (o.ele = e[2]),
                            s(o, n),
                            u.gpx.wpt.push(o);
                        });
                      break;
                    case "LineString":
                    case "MultiLineString":
                      e = n.geometry.coordinates;
                      var i = a.featureCoordTimes(n);
                      "LineString" == n.geometry.type && (e = [e]),
                        (o = {
                          name: a.featureTitle(n.properties),
                          desc: a.featureDescription(n.properties),
                        }),
                        s(o, n),
                        (o.trkseg = []),
                        e.forEach(function (e) {
                          var n = { trkpt: [] };
                          e.forEach(function (e, t) {
                            var r = { "@lat": e[1], "@lon": e[0] };
                            void 0 !== e[2] && (r.ele = e[2]),
                              i && i[t] && (r.time = i[t]),
                              n.trkpt.push(r);
                          }),
                            o.trkseg.push(n);
                        }),
                        u.gpx.trk.push(o);
                      break;
                    case "Polygon":
                    case "MultiPolygon":
                      (o = {
                        name: a.featureTitle(n.properties),
                        desc: a.featureDescription(n.properties),
                      }),
                        s(o, n),
                        (o.trkseg = []),
                        (e = n.geometry.coordinates),
                        (i = a.featureCoordTimes(n)),
                        "Polygon" == n.geometry.type && (e = [e]),
                        e.forEach(function (e) {
                          e.forEach(function (e) {
                            var r = { trkpt: [] },
                              n = 0;
                            e.forEach(function (e) {
                              var t = { "@lat": e[1], "@lon": e[0] };
                              void 0 !== e[2] && (t.ele = e[2]),
                                i && i[n] && (t.time = i[n]),
                                n++,
                                r.trkpt.push(t);
                            }),
                              o.trkseg.push(r);
                          });
                        }),
                        u.gpx.trk.push(o);
                      break;
                    case "GeometryCollection":
                      n.geometry.geometries.forEach(function (e) {
                        var t = { properties: n.properties, geometry: e };
                        r(t);
                      });
                      break;
                    default:
                      console.log(
                        "warning: unsupported geometry type: " + n.geometry.type
                      );
                  }
                }),
                (gpx_str = n.stringify(u)),
                gpx_str
              );
            });
        },
        { jxon: 2 },
      ],
      2: [
        function (e, t, r) {
          var o, n;
          (o = this),
            (n = function (i, c) {
              var r,
                k = {
                  valueKey: "_",
                  attrKey: "$",
                  attrPrefix: "$",
                  lowerCaseTags: !1,
                  trueIsEmpty: !1,
                  autoDate: !1,
                  ignorePrefixedNodes: !1,
                  parseValues: !1,
                },
                D = [],
                t = /^\s*$/,
                o = /^(?:true|false)$/i;
              return new (function () {
                function C(e) {
                  return k.parseValues
                    ? t.test(e)
                      ? null
                      : o.test(e)
                      ? "true" === e.toLowerCase()
                      : isFinite(e)
                      ? parseFloat(e)
                      : k.autoDate && isFinite(Date.parse(e))
                      ? new Date(e)
                      : e
                    : e;
                }
                function S() {}
                function O(e, t, r, o) {
                  var n,
                    i,
                    a = D.length,
                    s = e.hasChildNodes(),
                    u = e.nodeType === e.ELEMENT_NODE && e.hasAttributes(),
                    f = Boolean(2 & t),
                    c = 0,
                    l = "",
                    p = f ? {} : !!k.trueIsEmpty || "";
                  if (s)
                    for (var d, m = 0; m < e.childNodes.length; m++)
                      4 === (d = e.childNodes.item(m)).nodeType
                        ? (l += d.nodeValue)
                        : 3 === d.nodeType
                        ? (l += d.nodeValue.trim())
                        : 1 !== d.nodeType ||
                          (k.ignorePrefixedNodes && d.prefix) ||
                          D.push(d);
                  var g,
                    h = D.length,
                    y = C(l);
                  f ||
                    (!s && !u) ||
                    (p =
                      0 === t
                        ? null === (g = y)
                          ? new S()
                          : g instanceof Object
                          ? g
                          : new g.constructor(g)
                        : {});
                  for (var x = a; x < h; x++)
                    (n = D[x].nodeName),
                      k.lowerCaseTags && (n = n.toLowerCase()),
                      (i = O(D[x], t, r, o)),
                      p.hasOwnProperty(n)
                        ? (p[n].constructor !== Array && (p[n] = [p[n]]),
                          p[n].push(i))
                        : ((p[n] = i), c++);
                  if (u) {
                    for (
                      var w,
                        v,
                        T = e.attributes.length,
                        b = o ? "" : k.attrPrefix,
                        E = o ? {} : p,
                        P = 0;
                      P < T;
                      c++, P++
                    )
                      (v = (w = e.attributes.item(P)).name),
                        k.lowerCaseTags && (v = v.toLowerCase()),
                        (E[b + v] = C(w.value.trim()));
                    o &&
                      (r && Object.freeze(E), (p[k.attrKey] = E), (c -= T - 1));
                  }
                  return (
                    3 === t || ((2 === t || (1 === t && 0 < c)) && l)
                      ? (p[k.valueKey] = y)
                      : !f && 0 === c && l && (p = y),
                    r && (f || 0 < c) && Object.freeze(p),
                    (D.length = a),
                    p
                  );
                }
                (this.config = function (e) {
                  for (var t in e) k[t] = e[t];
                  k.parserErrorHandler &&
                    (r = new i.DOMParser({
                      errorHandler: k.parserErrorHandler,
                      locator: {},
                    }));
                }),
                  (S.prototype.toString = function () {
                    return "null";
                  }),
                  (S.prototype.valueOf = function () {
                    return null;
                  }),
                  (this.xmlToJs = this.build =
                    function (e, t, r, o) {
                      var n =
                        1 < arguments.length && "number" == typeof t
                          ? 3 & t
                          : 1;
                      return O(
                        e,
                        n,
                        r || !1,
                        3 < arguments.length ? o : 3 === n
                      );
                    }),
                  (this.jsToXml = this.unbuild =
                    function (e, t, r, o) {
                      var n = (
                        (i.document && i.document.implementation) ||
                        new i.DOMImplementation()
                      ).createDocument(t || null, r || "", o || null);
                      return (
                        (function e(t, r, o) {
                          var n, i, a;
                          if (
                            o.constructor === String ||
                            o.constructor === Number ||
                            o.constructor === Boolean
                          ) {
                            if (
                              (r.appendChild(t.createTextNode(o.toString())),
                              o === o.valueOf())
                            )
                              return;
                          } else
                            o.constructor === Date &&
                              r.appendChild(t.createTextNode(o.toISOString()));
                          for (var s in o)
                            if (
                              void 0 !== (n = o[s]) &&
                              (null === n && (n = {}),
                              !(isFinite(s) || n instanceof Function))
                            )
                              if (s === k.valueKey)
                                null !== n &&
                                  !0 !== n &&
                                  r.appendChild(
                                    t.createTextNode(
                                      n.constructor === Date
                                        ? n.toISOString()
                                        : String(n)
                                    )
                                  );
                              else if (s === k.attrKey)
                                for (var u in n) r.setAttribute(u, n[u]);
                              else if (s === k.attrPrefix + "xmlns")
                                c && r.setAttribute(s.slice(1), n);
                              else if (s.charAt(0) === k.attrPrefix)
                                r.setAttribute(s.slice(1), n);
                              else if (n.constructor === Array)
                                for (var f in n)
                                  n.hasOwnProperty(f) &&
                                    (e(
                                      t,
                                      (i = (a =
                                        (n[f] &&
                                          n[f][k.attrPrefix + "xmlns"]) ||
                                        r.namespaceURI)
                                        ? t.createElementNS(a, s)
                                        : t.createElement(s)),
                                      n[f] || {}
                                    ),
                                    r.appendChild(i));
                              else
                                (i = (a =
                                  (n || {})[k.attrPrefix + "xmlns"] ||
                                  r.namespaceURI)
                                  ? t.createElementNS(a, s)
                                  : t.createElement(s)),
                                  n instanceof Object
                                    ? e(t, i, n)
                                    : null === n ||
                                      (!0 === n && k.trueIsEmpty) ||
                                      i.appendChild(
                                        t.createTextNode(n.toString())
                                      ),
                                  r.appendChild(i);
                        })(n, n.documentElement || n, e),
                        n
                      );
                    }),
                  (this.stringToXml = function (e) {
                    return (
                      r || (r = new i.DOMParser()),
                      r.parseFromString(e, "application/xml")
                    );
                  }),
                  (this.xmlToString = function (e) {
                    return void 0 !== e.xml
                      ? e.xml
                      : new i.XMLSerializer().serializeToString(e);
                  }),
                  (this.stringToJs = function (e) {
                    var t = this.stringToXml(e);
                    return this.xmlToJs(t);
                  }),
                  (this.jsToString = this.stringify =
                    function (e, t, r, o) {
                      return this.xmlToString(this.jsToXml(e, t, r, o));
                    }),
                  (this.each = function (e, t, r) {
                    e instanceof Array ? e.forEach(t, r) : [e].forEach(t, r);
                  });
              })();
            }),
            "object" == typeof r
              ? "object" == typeof window &&
                window.DOMImplementation &&
                window.XMLSerializer &&
                window.DOMParser
                ? (t.exports = n(window))
                : (t.exports = n(e("xmldom"), !0))
              : (o.JXON = n(window));
        },
        { xmldom: 3 },
      ],
      3: [function (e, t, r) {}, {}],
    },
    {},
    [1]
  )(1);
});
//# sourceMappingURL=/sm/fee43f8d5d72cd277c0756c9d1b78695200e478ee8e68f5466d966053a10be79.map
