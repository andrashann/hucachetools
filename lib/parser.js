var parser = (function (t) {
  var e = {};
  function r(a) {
    if (e[a]) return e[a].exports;
    var n = (e[a] = { i: a, l: !1, exports: {} });
    return t[a].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  return (
    (r.m = t),
    (r.c = e),
    (r.d = function (t, e, a) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
    }),
    (r.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (r.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          r.d(
            a,
            n,
            function (e) {
              return t[e];
            }.bind(null, n)
          );
      return a;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ""),
    r((r.s = 2))
  );
})([
  function (t, e, r) {
    "use strict";
    var a =
        ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
      n =
        "[" +
        a +
        "][:A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*",
      i = new RegExp("^" + n + "$");
    (e.isExist = function (t) {
      return void 0 !== t;
    }),
      (e.isEmptyObject = function (t) {
        return 0 === Object.keys(t).length;
      }),
      (e.merge = function (t, e, r) {
        if (e)
          for (var a = Object.keys(e), n = a.length, i = 0; i < n; i++)
            t[a[i]] = "strict" === r ? [e[a[i]]] : e[a[i]];
      }),
      (e.getValue = function (t) {
        return e.isExist(t) ? t : "";
      }),
      (e.buildOptions = function (t, e, r) {
        var a = {};
        if (!t) return e;
        for (var n = 0; n < r.length; n++)
          void 0 !== t[r[n]] ? (a[r[n]] = t[r[n]]) : (a[r[n]] = e[r[n]]);
        return a;
      }),
      (e.isTagNameInArrayMode = function (t, e, r) {
        return (
          !1 !== e &&
          (e instanceof RegExp
            ? e.test(t)
            : "function" == typeof e
            ? !!e(t, r)
            : "strict" === e)
        );
      }),
      (e.isName = function (t) {
        var e = i.exec(t);
        return !(null == e);
      }),
      (e.getAllMatches = function (t, e) {
        for (var r = [], a = e.exec(t); a; ) {
          var n = [];
          n.startIndex = e.lastIndex - a[0].length;
          for (var i = a.length, s = 0; s < i; s++) n.push(a[s]);
          r.push(n), (a = e.exec(t));
        }
        return r;
      }),
      (e.nameRegexp = n);
  },
  function (t, e, r) {
    "use strict";
    var a = r(0),
      n = r(0).buildOptions,
      i = r(4),
      s = r(5);
    "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(
      /NAME/g,
      a.nameRegexp
    );
    !Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt),
      !Number.parseFloat &&
        window.parseFloat &&
        (Number.parseFloat = window.parseFloat);
    var o = {
      attributeNamePrefix: "@_",
      attrNodeName: !1,
      textNodeName: "#text",
      ignoreAttributes: !0,
      ignoreNameSpace: !1,
      allowBooleanAttributes: !1,
      parseNodeValue: !0,
      parseAttributeValue: !1,
      arrayMode: !1,
      trimValues: !0,
      cdataTagName: !1,
      cdataPositionChar: "\\c",
      numParseOptions: { hex: !0, leadingZeros: !0 },
      tagValueProcessor: function (t, e) {
        return t;
      },
      attrValueProcessor: function (t, e) {
        return t;
      },
      stopNodes: [],
      alwaysCreateTextNode: !1,
    };
    e.defaultOptions = o;
    var u = [
      "attributeNamePrefix",
      "attrNodeName",
      "textNodeName",
      "ignoreAttributes",
      "ignoreNameSpace",
      "allowBooleanAttributes",
      "parseNodeValue",
      "parseAttributeValue",
      "arrayMode",
      "trimValues",
      "cdataTagName",
      "cdataPositionChar",
      "tagValueProcessor",
      "attrValueProcessor",
      "parseTrueNumberOnly",
      "numParseOptions",
      "stopNodes",
      "alwaysCreateTextNode",
    ];
    function l(t, e, r) {
      return (
        e &&
          (r.trimValues && (e = e.trim()),
          (e = c(
            (e = r.tagValueProcessor(e, t)),
            r.parseNodeValue,
            r.numParseOptions
          ))),
        e
      );
    }
    function d(t, e) {
      if (e.ignoreNameSpace) {
        var r = t.split(":"),
          a = "/" === t.charAt(0) ? "/" : "";
        if ("xmlns" === r[0]) return "";
        2 === r.length && (t = a + r[1]);
      }
      return t;
    }
    function c(t, e, r) {
      if (e && "string" == typeof t) {
        var n = t.trim();
        return "true" === n || ("false" !== n && s(t, r));
      }
      return a.isExist(t) ? t : "";
    }
    e.props = u;
    var f = new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])(.*?)\\3)?", "g");
    function h(t, e) {
      if (!e.ignoreAttributes && "string" == typeof t) {
        t = t.replace(/\r?\n/g, " ");
        for (
          var r = a.getAllMatches(t, f), n = r.length, i = {}, s = 0;
          s < n;
          s++
        ) {
          var o = d(r[s][1], e);
          o.length &&
            (void 0 !== r[s][4]
              ? (e.trimValues && (r[s][4] = r[s][4].trim()),
                (r[s][4] = e.attrValueProcessor(r[s][4], o)),
                (i[e.attributeNamePrefix + o] = c(
                  r[s][4],
                  e.parseAttributeValue,
                  e.numParseOptions
                )))
              : e.allowBooleanAttributes &&
                (i[e.attributeNamePrefix + o] = !0));
        }
        if (!Object.keys(i).length) return;
        if (e.attrNodeName) {
          var u = {};
          return (u[e.attrNodeName] = i), u;
        }
        return i;
      }
    }
    function g(t, e) {
      for (var r, a = "", n = e; n < t.length; n++) {
        var i = t[n];
        if (r) i === r && (r = "");
        else if ('"' === i || "'" === i) r = i;
        else {
          if (">" === i) return { data: a, index: n };
          "\t" === i && (i = " ");
        }
        a += i;
      }
    }
    function p(t, e, r, a) {
      var n = t.indexOf(e, r);
      if (-1 === n) throw new Error(a);
      return n + e.length - 1;
    }
    e.getTraversalObj = function (t, e) {
      (t = t.replace(/\r\n?/g, "\n")), (e = n(e, o, u));
      for (var r = new i("!xml"), s = r, d = "", c = 0; c < t.length; c++) {
        if ("<" === t[c])
          if ("/" === t[c + 1]) {
            var f = p(t, ">", c, "Closing Tag is not closed."),
              v = t.substring(c + 2, f).trim();
            if (e.ignoreNameSpace) {
              var m = v.indexOf(":");
              -1 !== m && (v = v.substr(m + 1));
            }
            s &&
              (s.val
                ? (s.val = a.getValue(s.val) + "" + l(v, d, e))
                : (s.val = l(v, d, e))),
              e.stopNodes.length &&
                e.stopNodes.includes(s.tagname) &&
                ((s.child = []),
                null == s.attrsMap && (s.attrsMap = {}),
                (s.val = t.substr(s.startIndex + 1, c - s.startIndex - 1))),
              (s = s.parent),
              (d = ""),
              (c = f);
          } else if ("?" === t[c + 1])
            c = p(t, "?>", c, "Pi Tag is not closed.");
          else if ("!--" === t.substr(c + 1, 3))
            c = p(t, "--\x3e", c, "Comment is not closed.");
          else if ("!D" === t.substr(c + 1, 2)) {
            var b = p(t, ">", c, "DOCTYPE is not closed.");
            c =
              t.substring(c, b).indexOf("[") >= 0 ? t.indexOf("]>", c) + 1 : b;
          } else if ("![" === t.substr(c + 1, 2)) {
            var N = p(t, "]]>", c, "CDATA is not closed.") - 2,
              x = t.substring(c + 9, N);
            if (
              (d &&
                ((s.val = a.getValue(s.val) + "" + l(s.tagname, d, e)),
                (d = "")),
              e.cdataTagName)
            ) {
              var A = new i(e.cdataTagName, s, x);
              s.addChild(A),
                (s.val = a.getValue(s.val) + e.cdataPositionChar),
                x && (A.val = x);
            } else s.val = (s.val || "") + (x || "");
            c = N + 2;
          } else {
            var y = g(t, c + 1),
              C = y.data,
              T = y.index,
              O = C.indexOf(" "),
              P = C,
              F = !0;
            if (
              (-1 !== O &&
                ((P = C.substr(0, O).replace(/\s\s*$/, "")),
                (C = C.substr(O + 1))),
              e.ignoreNameSpace)
            ) {
              var E = P.indexOf(":");
              -1 !== E && (F = (P = P.substr(E + 1)) !== y.data.substr(E + 1));
            }
            if (
              (s &&
                d &&
                "!xml" !== s.tagname &&
                (s.val = a.getValue(s.val) + "" + l(s.tagname, d, e)),
              C.length > 0 && C.lastIndexOf("/") === C.length - 1)
            ) {
              C =
                "/" === P[P.length - 1]
                  ? (P = P.substr(0, P.length - 1))
                  : C.substr(0, C.length - 1);
              var j = new i(P, s, "");
              P !== C && (j.attrsMap = h(C, e)), s.addChild(j);
            } else {
              var D = new i(P, s);
              e.stopNodes.length &&
                e.stopNodes.includes(D.tagname) &&
                (D.startIndex = T),
                P !== C && F && (D.attrsMap = h(C, e)),
                s.addChild(D),
                (s = D);
            }
            (d = ""), (c = T);
          }
        else d += t[c];
      }
      return r;
    };
  },
  function (t, e, r) {
    "use strict";
    var a = r(3),
      n = r(1),
      i = r(1),
      s = r(0).buildOptions,
      o = r(6);
    (e.parse = function (t, e, r) {
      if ((void 0 === e && (e = {}), r)) {
        !0 === r && (r = {});
        var u = o.validate(t, r);
        if (!0 !== u) throw Error(u.err.msg);
      }
      e.parseTrueNumberOnly &&
        !1 !== e.parseNodeValue &&
        !e.numParseOptions &&
        (e.numParseOptions = { leadingZeros: !1 });
      var l = s(e, i.defaultOptions, i.props),
        d = n.getTraversalObj(t, l);
      return a.convertToJson(d, l);
    }),
      (e.convertTonimn = r(7).convert2nimn),
      (e.getTraversalObj = n.getTraversalObj),
      (e.convertToJson = a.convertToJson),
      (e.convertToJsonString = r(8).convertToJsonString),
      (e.validate = o.validate),
      (e.j2xParser = r(9)),
      (e.parseToNimn = function (t, r, a) {
        return e.convertTonimn(e.getTraversalObj(t, a), r, a);
      });
  },
  function (t, e, r) {
    "use strict";
    var a = r(0);
    e.convertToJson = function t(e, r, n) {
      var i = {};
      if (
        !r.alwaysCreateTextNode &&
        (!e.child || a.isEmptyObject(e.child)) &&
        (!e.attrsMap || a.isEmptyObject(e.attrsMap))
      )
        return a.isExist(e.val) ? e.val : "";
      if (
        a.isExist(e.val) &&
        ("string" != typeof e.val ||
          ("" !== e.val && e.val !== r.cdataPositionChar))
      ) {
        var s = a.isTagNameInArrayMode(e.tagname, r.arrayMode, n);
        i[r.textNodeName] = s ? [e.val] : e.val;
      }
      a.merge(i, e.attrsMap, r.arrayMode);
      for (var o = Object.keys(e.child), u = 0; u < o.length; u++) {
        var l = o[u];
        if (e.child[l] && e.child[l].length > 1)
          for (var d in ((i[l] = []), e.child[l]))
            e.child[l].hasOwnProperty(d) && i[l].push(t(e.child[l][d], r, l));
        else {
          var c = t(e.child[l][0], r, l),
            f =
              (!0 === r.arrayMode && "object" == typeof c) ||
              a.isTagNameInArrayMode(l, r.arrayMode, n);
          i[l] = f ? [c] : c;
        }
      }
      return i;
    };
  },
  function (t, e, r) {
    "use strict";
    t.exports = function (t, e, r) {
      (this.tagname = t),
        (this.parent = e),
        (this.child = {}),
        (this.attrsMap = {}),
        (this.val = r),
        (this.addChild = function (t) {
          Array.isArray(this.child[t.tagname])
            ? this.child[t.tagname].push(t)
            : (this.child[t.tagname] = [t]);
        });
    };
  },
  function (t, e) {
    const r = /^[-+]?0x[a-fA-F0-9]+$/,
      a =
        /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/,
      n = { hex: !0, leadingZeros: !0, decimalPoint: "." };
    t.exports = function (t, e = {}) {
      if (((e = Object.assign({}, n, e)), !t || "string" != typeof t)) return t;
      let i = t.trim();
      if (void 0 !== e.skipLike && e.skipLike.test(i)) return t;
      if (e.hex && r.test(i)) return Number.parseInt(i, 16);
      {
        const r = a.exec(i);
        if (r) {
          r[1];
          const a = r[2],
            n = r[3];
          r[4] || r[6];
          return 1 === a.length && "." === n[0]
            ? Number(t)
            : !e.leadingZeros && a.length > 0
            ? t
            : Number(i);
        }
        return t;
      }
    };
  },
  function (t, e, r) {
    "use strict";
    var a = r(0),
      n = { allowBooleanAttributes: !1 },
      i = ["allowBooleanAttributes"];
    function s(t, e) {
      for (var r = e; e < t.length; e++)
        if ("?" != t[e] && " " != t[e]);
        else {
          var a = t.substr(r, e - r);
          if (e > 5 && "xml" === a)
            return g(
              "InvalidXml",
              "XML declaration allowed only at the start of the document.",
              v(t, e)
            );
          if ("?" == t[e] && ">" == t[e + 1]) {
            e++;
            break;
          }
        }
      return e;
    }
    function o(t, e) {
      if (t.length > e + 5 && "-" === t[e + 1] && "-" === t[e + 2]) {
        for (e += 3; e < t.length; e++)
          if ("-" === t[e] && "-" === t[e + 1] && ">" === t[e + 2]) {
            e += 2;
            break;
          }
      } else if (
        t.length > e + 8 &&
        "D" === t[e + 1] &&
        "O" === t[e + 2] &&
        "C" === t[e + 3] &&
        "T" === t[e + 4] &&
        "Y" === t[e + 5] &&
        "P" === t[e + 6] &&
        "E" === t[e + 7]
      ) {
        var r = 1;
        for (e += 8; e < t.length; e++)
          if ("<" === t[e]) r++;
          else if (">" === t[e] && 0 === --r) break;
      } else if (
        t.length > e + 9 &&
        "[" === t[e + 1] &&
        "C" === t[e + 2] &&
        "D" === t[e + 3] &&
        "A" === t[e + 4] &&
        "T" === t[e + 5] &&
        "A" === t[e + 6] &&
        "[" === t[e + 7]
      )
        for (e += 8; e < t.length; e++)
          if ("]" === t[e] && "]" === t[e + 1] && ">" === t[e + 2]) {
            e += 2;
            break;
          }
      return e;
    }
    e.validate = function (t, e) {
      e = a.buildOptions(e, n, i);
      var r,
        u = [],
        l = !1,
        c = !1;
      "\ufeff" === t[0] && (t = t.substr(1));
      for (var p = 0; p < t.length; p++)
        if ("<" === t[p] && "?" === t[p + 1]) {
          if ((p = s(t, (p += 2))).err) return p;
        } else {
          if ("<" !== t[p]) {
            if (" " === t[p] || "\t" === t[p] || "\n" === t[p] || "\r" === t[p])
              continue;
            return g(
              "InvalidChar",
              "char '" + t[p] + "' is not expected.",
              v(t, p)
            );
          }
          var m = p;
          if ("!" === t[++p]) {
            p = o(t, p);
            continue;
          }
          var b = !1;
          "/" === t[p] && ((b = !0), p++);
          for (
            var N = "";
            p < t.length &&
            ">" !== t[p] &&
            " " !== t[p] &&
            "\t" !== t[p] &&
            "\n" !== t[p] &&
            "\r" !== t[p];
            p++
          )
            N += t[p];
          if (
            ("/" === (N = N.trim())[N.length - 1] &&
              ((N = N.substring(0, N.length - 1)), p--),
            (r = N),
            !a.isName(r))
          ) {
            return g(
              "InvalidTag",
              0 === N.trim().length
                ? "Invalid space after '<'."
                : "Tag '" + N + "' is an invalid name.",
              v(t, p)
            );
          }
          var x = d(t, p);
          if (!1 === x)
            return g(
              "InvalidAttr",
              "Attributes for '" + N + "' have open quote.",
              v(t, p)
            );
          var A = x.value;
          if (((p = x.index), "/" === A[A.length - 1])) {
            var y = p - A.length,
              C = f((A = A.substring(0, A.length - 1)), e);
            if (!0 !== C) return g(C.err.code, C.err.msg, v(t, y + C.err.line));
            l = !0;
          } else if (b) {
            if (!x.tagClosed)
              return g(
                "InvalidTag",
                "Closing tag '" + N + "' doesn't have proper closing.",
                v(t, p)
              );
            if (A.trim().length > 0)
              return g(
                "InvalidTag",
                "Closing tag '" +
                  N +
                  "' can't have attributes or invalid starting.",
                v(t, m)
              );
            var T = u.pop();
            if (N !== T.tagName) {
              var O = v(t, T.tagStartPos);
              return g(
                "InvalidTag",
                "Expected closing tag '" +
                  T.tagName +
                  "' (opened in line " +
                  O.line +
                  ", col " +
                  O.col +
                  ") instead of closing tag '" +
                  N +
                  "'.",
                v(t, m)
              );
            }
            0 == u.length && (c = !0);
          } else {
            var P = f(A, e);
            if (!0 !== P)
              return g(P.err.code, P.err.msg, v(t, p - A.length + P.err.line));
            if (!0 === c)
              return g(
                "InvalidXml",
                "Multiple possible root nodes found.",
                v(t, p)
              );
            u.push({ tagName: N, tagStartPos: m }), (l = !0);
          }
          for (p++; p < t.length; p++)
            if ("<" === t[p]) {
              if ("!" === t[p + 1]) {
                p = o(t, ++p);
                continue;
              }
              if ("?" !== t[p + 1]) break;
              if ((p = s(t, ++p)).err) return p;
            } else if ("&" === t[p]) {
              var F = h(t, p);
              if (-1 == F)
                return g("InvalidChar", "char '&' is not expected.", v(t, p));
              p = F;
            }
          "<" === t[p] && p--;
        }
      return l
        ? 1 == u.length
          ? g(
              "InvalidTag",
              "Unclosed tag '" + u[0].tagName + "'.",
              v(t, u[0].tagStartPos)
            )
          : !(u.length > 0) ||
            g(
              "InvalidXml",
              "Invalid '" +
                JSON.stringify(
                  u.map(function (t) {
                    return t.tagName;
                  }),
                  null,
                  4
                ).replace(/\r?\n/g, "") +
                "' found.",
              { line: 1, col: 1 }
            )
        : g("InvalidXml", "Start tag expected.", 1);
    };
    var u = '"',
      l = "'";
    function d(t, e) {
      for (var r = "", a = "", n = !1; e < t.length; e++) {
        if (t[e] === u || t[e] === l)
          "" === a ? (a = t[e]) : a !== t[e] || (a = "");
        else if (">" === t[e] && "" === a) {
          n = !0;
          break;
        }
        r += t[e];
      }
      return "" === a && { value: r, index: e, tagClosed: n };
    }
    var c = new RegExp(
      "(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?",
      "g"
    );
    function f(t, e) {
      for (var r = a.getAllMatches(t, c), n = {}, i = 0; i < r.length; i++) {
        if (0 === r[i][1].length)
          return g(
            "InvalidAttr",
            "Attribute '" + r[i][2] + "' has no space in starting.",
            m(r[i])
          );
        if (void 0 === r[i][3] && !e.allowBooleanAttributes)
          return g(
            "InvalidAttr",
            "boolean attribute '" + r[i][2] + "' is not allowed.",
            m(r[i])
          );
        var s = r[i][2];
        if (!p(s))
          return g(
            "InvalidAttr",
            "Attribute '" + s + "' is an invalid name.",
            m(r[i])
          );
        if (n.hasOwnProperty(s))
          return g(
            "InvalidAttr",
            "Attribute '" + s + "' is repeated.",
            m(r[i])
          );
        n[s] = 1;
      }
      return !0;
    }
    function h(t, e) {
      if (";" === t[++e]) return -1;
      if ("#" === t[e])
        return (function (t, e) {
          var r = /\d/;
          for ("x" === t[e] && (e++, (r = /[\da-fA-F]/)); e < t.length; e++) {
            if (";" === t[e]) return e;
            if (!t[e].match(r)) break;
          }
          return -1;
        })(t, ++e);
      for (var r = 0; e < t.length; e++, r++)
        if (!(t[e].match(/\w/) && r < 20)) {
          if (";" === t[e]) break;
          return -1;
        }
      return e;
    }
    function g(t, e, r) {
      return { err: { code: t, msg: e, line: r.line || r, col: r.col } };
    }
    function p(t) {
      return a.isName(t);
    }
    function v(t, e) {
      var r = t.substring(0, e).split(/\r?\n/);
      return { line: r.length, col: r[r.length - 1].length + 1 };
    }
    function m(t) {
      return t.startIndex + t[1].length;
    }
  },
  function (t, e, r) {
    "use strict";
    var a = function (t) {
        return String.fromCharCode(t);
      },
      n = {
        nilChar: a(176),
        missingChar: a(201),
        nilPremitive: a(175),
        missingPremitive: a(200),
        emptyChar: a(178),
        emptyValue: a(177),
        boundryChar: a(179),
        objStart: a(198),
        arrStart: a(204),
        arrayEnd: a(185),
      },
      i = [
        n.nilChar,
        n.nilPremitive,
        n.missingChar,
        n.missingPremitive,
        n.boundryChar,
        n.emptyChar,
        n.emptyValue,
        n.arrayEnd,
        n.objStart,
        n.arrStart,
      ],
      s = function t(e, r, a) {
        if ("string" == typeof r)
          return e && e[0] && void 0 !== e[0].val ? o(e[0].val, r) : o(e, r);
        var i,
          s =
            void 0 === (i = e)
              ? n.missingChar
              : null === i
              ? n.nilChar
              : !(
                  i.child &&
                  0 === Object.keys(i.child).length &&
                  (!i.attrsMap || 0 === Object.keys(i.attrsMap).length)
                ) || n.emptyChar;
        if (!0 === s) {
          var l = "";
          if (Array.isArray(r)) {
            l += n.arrStart;
            var d = r[0],
              c = e.length;
            if ("string" == typeof d)
              for (var f = 0; f < c; f++) {
                var h = o(e[f].val, d);
                l = u(l, h);
              }
            else
              for (var g = 0; g < c; g++) {
                var p = t(e[g], d, a);
                l = u(l, p);
              }
            l += n.arrayEnd;
          } else {
            l += n.objStart;
            var v = Object.keys(r);
            for (var m in (Array.isArray(e) && (e = e[0]), v)) {
              var b = v[m],
                N = void 0;
              (N =
                !a.ignoreAttributes && e.attrsMap && e.attrsMap[b]
                  ? t(e.attrsMap[b], r[b], a)
                  : b === a.textNodeName
                  ? t(e.val, r[b], a)
                  : t(e.child[b], r[b], a)),
                (l = u(l, N));
            }
          }
          return l;
        }
        return s;
      },
      o = function (t) {
        switch (t) {
          case void 0:
            return n.missingPremitive;
          case null:
            return n.nilPremitive;
          case "":
            return n.emptyValue;
          default:
            return t;
        }
      },
      u = function (t, e) {
        return l(e[0]) || l(t[t.length - 1]) || (t += n.boundryChar), t + e;
      },
      l = function (t) {
        return -1 !== i.indexOf(t);
      };
    var d = r(1),
      c = r(0).buildOptions;
    e.convert2nimn = function (t, e, r) {
      return (r = c(r, d.defaultOptions, d.props)), s(t, e, r);
    };
  },
  function (t, e, r) {
    "use strict";
    var a = r(0),
      n = r(0).buildOptions,
      i = r(1),
      s = function t(e, r, n) {
        for (
          var i, s = "{", o = Object.keys(e.child), u = 0;
          u < o.length;
          u++
        ) {
          var l = o[u];
          if (e.child[l] && e.child[l].length > 1) {
            for (var d in ((s += '"' + l + '" : [ '), e.child[l]))
              s += t(e.child[l][d], r) + " , ";
            s = s.substr(0, s.length - 1) + " ] ";
          } else s += '"' + l + '" : ' + t(e.child[l][0], r) + " ,";
        }
        return (
          a.merge(s, e.attrsMap),
          a.isEmptyObject(s)
            ? a.isExist(e.val)
              ? e.val
              : ""
            : (a.isExist(e.val) &&
                ("string" != typeof e.val ||
                  ("" !== e.val && e.val !== r.cdataPositionChar)) &&
                (s +=
                  '"' +
                  r.textNodeName +
                  '" : ' +
                  (!0 !== (i = e.val) && !1 !== i && isNaN(i)
                    ? '"' + i + '"'
                    : i)),
              "," === s[s.length - 1] && (s = s.substr(0, s.length - 2)),
              s + "}")
        );
      };
    e.convertToJsonString = function (t, e) {
      return (
        ((e = n(e, i.defaultOptions, i.props)).indentBy = e.indentBy || ""),
        s(t, e, 0)
      );
    };
  },
  function (t, e, r) {
    "use strict";
    var a = r(0).buildOptions,
      n = {
        attributeNamePrefix: "@_",
        attrNodeName: !1,
        textNodeName: "#text",
        ignoreAttributes: !0,
        cdataTagName: !1,
        cdataPositionChar: "\\c",
        format: !1,
        indentBy: "  ",
        supressEmptyNode: !1,
        tagValueProcessor: function (t) {
          return t;
        },
        attrValueProcessor: function (t) {
          return t;
        },
      },
      i = [
        "attributeNamePrefix",
        "attrNodeName",
        "textNodeName",
        "ignoreAttributes",
        "cdataTagName",
        "cdataPositionChar",
        "format",
        "indentBy",
        "supressEmptyNode",
        "tagValueProcessor",
        "attrValueProcessor",
        "rootNodeName",
      ];
    function s(t) {
      (this.options = a(t, n, i)),
        this.options.ignoreAttributes || this.options.attrNodeName
          ? (this.isAttribute = function () {
              return !1;
            })
          : ((this.attrPrefixLen = this.options.attributeNamePrefix.length),
            (this.isAttribute = p)),
        this.options.cdataTagName
          ? (this.isCDATA = v)
          : (this.isCDATA = function () {
              return !1;
            }),
        (this.replaceCDATAstr = u),
        (this.replaceCDATAarr = l),
        (this.processTextOrObjNode = o),
        this.options.format
          ? ((this.indentate = g),
            (this.tagEndChar = ">\n"),
            (this.newLine = "\n"))
          : ((this.indentate = function () {
              return "";
            }),
            (this.tagEndChar = ">"),
            (this.newLine = "")),
        this.options.supressEmptyNode
          ? ((this.buildTextNode = h), (this.buildObjNode = c))
          : ((this.buildTextNode = f), (this.buildObjNode = d)),
        (this.buildTextValNode = f),
        (this.buildObjectNode = d);
    }
    function o(t, e, r) {
      var a = this.j2x(t, r + 1);
      return void 0 !== t[this.options.textNodeName] &&
        1 === Object.keys(t).length
        ? this.buildTextNode(a.val, e, a.attrStr, r)
        : this.buildObjNode(a.val, e, a.attrStr, r);
    }
    function u(t, e) {
      return (
        (t = this.options.tagValueProcessor("" + t)),
        "" === this.options.cdataPositionChar || "" === t
          ? t + "<![CDATA[" + e + "]]" + this.tagEndChar
          : t.replace(
              this.options.cdataPositionChar,
              "<![CDATA[" + e + "]]" + this.tagEndChar
            )
      );
    }
    function l(t, e) {
      if (
        ((t = this.options.tagValueProcessor("" + t)),
        "" === this.options.cdataPositionChar || "" === t)
      )
        return (
          t + "<![CDATA[" + e.join("]]><![CDATA[") + "]]" + this.tagEndChar
        );
      for (var r in e)
        t = t.replace(
          this.options.cdataPositionChar,
          "<![CDATA[" + e[r] + "]]>"
        );
      return t + this.newLine;
    }
    function d(t, e, r, a) {
      return r && -1 === t.indexOf("<")
        ? this.indentate(a) + "<" + e + r + ">" + t + "</" + e + this.tagEndChar
        : this.indentate(a) +
            "<" +
            e +
            r +
            this.tagEndChar +
            t +
            this.indentate(a) +
            "</" +
            e +
            this.tagEndChar;
    }
    function c(t, e, r, a) {
      return "" !== t
        ? this.buildObjectNode(t, e, r, a)
        : this.indentate(a) + "<" + e + r + "/" + this.tagEndChar;
    }
    function f(t, e, r, a) {
      return (
        this.indentate(a) +
        "<" +
        e +
        r +
        ">" +
        this.options.tagValueProcessor(t) +
        "</" +
        e +
        this.tagEndChar
      );
    }
    function h(t, e, r, a) {
      return "" !== t
        ? this.buildTextValNode(t, e, r, a)
        : this.indentate(a) + "<" + e + r + "/" + this.tagEndChar;
    }
    function g(t) {
      return this.options.indentBy.repeat(t);
    }
    function p(t) {
      return (
        !!t.startsWith(this.options.attributeNamePrefix) &&
        t.substr(this.attrPrefixLen)
      );
    }
    function v(t) {
      return t === this.options.cdataTagName;
    }
    (s.prototype.parse = function (t) {
      var e;
      Array.isArray(t) &&
        this.options.rootNodeName &&
        this.options.rootNodeName.length > 1 &&
        (((e = {})[this.options.rootNodeName] = t), (t = e));
      return this.j2x(t, 0).val;
    }),
      (s.prototype.j2x = function (t, e) {
        var r = "",
          a = "";
        for (var n in t)
          if (void 0 === t[n]);
          else if (null === t[n])
            a += this.indentate(e) + "<" + n + "/" + this.tagEndChar;
          else if (t[n] instanceof Date)
            a += this.buildTextNode(t[n], n, "", e);
          else if ("object" != typeof t[n]) {
            var i = this.isAttribute(n);
            i
              ? (r +=
                  " " +
                  i +
                  '="' +
                  this.options.attrValueProcessor("" + t[n]) +
                  '"')
              : this.isCDATA(n)
              ? t[this.options.textNodeName]
                ? (a += this.replaceCDATAstr(
                    t[this.options.textNodeName],
                    t[n]
                  ))
                : (a += this.replaceCDATAstr("", t[n]))
              : n === this.options.textNodeName
              ? t[this.options.cdataTagName] ||
                (a += this.options.tagValueProcessor("" + t[n]))
              : (a += this.buildTextNode(t[n], n, "", e));
          } else if (Array.isArray(t[n]))
            if (this.isCDATA(n))
              (a += this.indentate(e)),
                t[this.options.textNodeName]
                  ? (a += this.replaceCDATAarr(
                      t[this.options.textNodeName],
                      t[n]
                    ))
                  : (a += this.replaceCDATAarr("", t[n]));
            else
              for (var s = t[n].length, o = 0; o < s; o++) {
                var u = t[n][o];
                void 0 === u ||
                  (a +=
                    null === u
                      ? this.indentate(e) + "<" + n + "/" + this.tagEndChar
                      : "object" == typeof u
                      ? this.processTextOrObjNode(u, n, e)
                      : this.buildTextNode(u, n, "", e));
              }
          else if (this.options.attrNodeName && n === this.options.attrNodeName)
            for (var l = Object.keys(t[n]), d = l.length, c = 0; c < d; c++)
              r +=
                " " +
                l[c] +
                '="' +
                this.options.attrValueProcessor("" + t[n][l[c]]) +
                '"';
          else a += this.processTextOrObjNode(t[n], n, e);
        return { attrStr: r, val: a };
      }),
      (t.exports = s);
  },
]);
//# sourceMappingURL=parser.min.js.map
