(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4210],
  {
    62522: (e, t, r) => {
      "use strict";
      r.d(t, { o0: () => h });
      var a = r(87358),
        n = function (e, t, r) {
          if (r || 2 == arguments.length)
            for (var a, n = 0, s = t.length; n < s; n++)
              (!a && n in t) ||
                (a || (a = Array.prototype.slice.call(t, 0, n)), (a[n] = t[n]));
          return e.concat(a || Array.prototype.slice.call(t));
        },
        s = function (e, t, r) {
          (this.name = e),
            (this.version = t),
            (this.os = r),
            (this.type = "browser");
        },
        o = function (e) {
          (this.version = e),
            (this.type = "node"),
            (this.name = "node"),
            (this.os = a.platform);
        },
        i = function (e, t, r, a) {
          (this.name = e),
            (this.version = t),
            (this.os = r),
            (this.bot = a),
            (this.type = "bot-device");
        },
        l = function () {
          (this.type = "bot"),
            (this.bot = !0),
            (this.name = "bot"),
            (this.version = null),
            (this.os = null);
        },
        c = function () {
          (this.type = "react-native"),
            (this.name = "react-native"),
            (this.version = null),
            (this.os = null);
        },
        d =
          /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
        u = [
          ["aol", /AOLShield\/([0-9\._]+)/],
          ["edge", /Edge\/([0-9\._]+)/],
          ["edge-ios", /EdgiOS\/([0-9\._]+)/],
          ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
          ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
          ["samsung", /SamsungBrowser\/([0-9\.]+)/],
          ["silk", /\bSilk\/([0-9._-]+)\b/],
          ["miui", /MiuiBrowser\/([0-9\.]+)$/],
          ["beaker", /BeakerBrowser\/([0-9\.]+)/],
          ["edge-chromium", /EdgA?\/([0-9\.]+)/],
          [
            "chromium-webview",
            /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
          ],
          ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
          ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
          ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
          ["fxios", /FxiOS\/([0-9\.]+)/],
          ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
          ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
          ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
          ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
          [
            "pie",
            /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
          ],
          ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
          ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
          ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
          ["ie", /MSIE\s(7\.0)/],
          ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
          ["android", /Android\s([0-9\.]+)/],
          ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
          ["safari", /Version\/([0-9\._]+).*Safari/],
          ["facebook", /FB[AS]V\/([0-9\.]+)/],
          ["instagram", /Instagram\s([0-9\.]+)/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
          ["curl", /^curl\/([0-9\.]+)$/],
          [
            "searchbot",
            /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
          ],
        ],
        p = [
          ["iOS", /iP(hone|od|ad)/],
          ["Android OS", /Android/],
          ["BlackBerry OS", /BlackBerry|BB10/],
          ["Windows Mobile", /IEMobile/],
          ["Amazon OS", /Kindle/],
          ["Windows 3.11", /Win16/],
          ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
          ["Windows 98", /(Windows 98)|(Win98)/],
          ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
          ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
          ["Windows Server 2003", /(Windows NT 5.2)/],
          ["Windows Vista", /(Windows NT 6.0)/],
          ["Windows 7", /(Windows NT 6.1)/],
          ["Windows 8", /(Windows NT 6.2)/],
          ["Windows 8.1", /(Windows NT 6.3)/],
          ["Windows 10", /(Windows NT 10.0)/],
          ["Windows ME", /Windows ME/],
          ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
          ["Open BSD", /OpenBSD/],
          ["Sun OS", /SunOS/],
          ["Chrome OS", /CrOS/],
          ["Linux", /(Linux)|(X11)/],
          ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
          ["QNX", /QNX/],
          ["BeOS", /BeOS/],
          ["OS/2", /OS\/2/],
        ];
      function h(e) {
        return e
          ? m(e)
          : "undefined" == typeof document &&
            "undefined" != typeof navigator &&
            "ReactNative" === navigator.product
          ? new c()
          : "undefined" != typeof navigator
          ? m(navigator.userAgent)
          : void 0 !== a && a.version
          ? new o(a.version.slice(1))
          : null;
      }
      function m(e) {
        var t =
          "" !== e &&
          u.reduce(function (t, r) {
            var a = r[0],
              n = r[1];
            if (t) return t;
            var s = n.exec(e);
            return !!s && [a, s];
          }, !1);
        if (!t) return null;
        var r = t[0],
          a = t[1];
        if ("searchbot" === r) return new l();
        var o = a[1] && a[1].split(".").join("_").split("_").slice(0, 3);
        o
          ? o.length < 3 &&
            (o = n(
              n([], o, !0),
              (function (e) {
                for (var t = [], r = 0; r < e; r++) t.push("0");
                return t;
              })(3 - o.length),
              !0
            ))
          : (o = []);
        var c = o.join("."),
          h = (function (e) {
            for (var t = 0, r = p.length; t < r; t++) {
              var a = p[t],
                n = a[0];
              if (a[1].exec(e)) return n;
            }
            return null;
          })(e),
          m = d.exec(e);
        return m && m[1] ? new i(r, c, h, m[1]) : new s(r, c, h);
      }
    },
    45130: (e) => {
      "use strict";
      var t = {
        single_source_shortest_paths: function (e, r, a) {
          var n,
            s,
            o,
            i,
            l,
            c,
            d,
            u = {},
            p = {};
          p[r] = 0;
          var h = t.PriorityQueue.make();
          for (h.push(r, 0); !h.empty(); )
            for (o in ((s = (n = h.pop()).value),
            (i = n.cost),
            (l = e[s] || {})))
              l.hasOwnProperty(o) &&
                ((c = i + l[o]),
                (d = p[o]),
                (void 0 === p[o] || d > c) &&
                  ((p[o] = c), h.push(o, c), (u[o] = s)));
          if (void 0 !== a && void 0 === p[a])
            throw Error(
              ["Could not find a path from ", r, " to ", a, "."].join("")
            );
          return u;
        },
        extract_shortest_path_from_predecessor_list: function (e, t) {
          for (var r = [], a = t; a; ) r.push(a), e[a], (a = e[a]);
          return r.reverse(), r;
        },
        find_path: function (e, r, a) {
          var n = t.single_source_shortest_paths(e, r, a);
          return t.extract_shortest_path_from_predecessor_list(n, a);
        },
        PriorityQueue: {
          make: function (e) {
            var r,
              a = t.PriorityQueue,
              n = {};
            for (r in ((e = e || {}), a)) a.hasOwnProperty(r) && (n[r] = a[r]);
            return (n.queue = []), (n.sorter = e.sorter || a.default_sorter), n;
          },
          default_sorter: function (e, t) {
            return e.cost - t.cost;
          },
          push: function (e, t) {
            this.queue.push({ value: e, cost: t }),
              this.queue.sort(this.sorter);
          },
          pop: function () {
            return this.queue.shift();
          },
          empty: function () {
            return 0 === this.queue.length;
          },
        },
      };
      e.exports = t;
    },
    67401: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => u });
      var a = r(12115);
      let n = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        s = (e) =>
          e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) =>
            r ? r.toUpperCase() : t.toLowerCase()
          ),
        o = (e) => {
          let t = s(e);
          return t.charAt(0).toUpperCase() + t.slice(1);
        },
        i = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return t
            .filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t)
            .join(" ")
            .trim();
        },
        l = (e) => {
          for (let t in e)
            if (t.startsWith("aria-") || "role" === t || "title" === t)
              return !0;
        };
      var c = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      let d = (0, a.forwardRef)((e, t) => {
          let {
            color: r = "currentColor",
            size: n = 24,
            strokeWidth: s = 2,
            absoluteStrokeWidth: o,
            className: d = "",
            children: u,
            iconNode: p,
            ...h
          } = e;
          return (0, a.createElement)(
            "svg",
            {
              ref: t,
              ...c,
              width: n,
              height: n,
              stroke: r,
              strokeWidth: o ? (24 * Number(s)) / Number(n) : s,
              className: i("lucide", d),
              ...(!u && !l(h) && { "aria-hidden": "true" }),
              ...h,
            },
            [
              ...p.map((e) => {
                let [t, r] = e;
                return (0, a.createElement)(t, r);
              }),
              ...(Array.isArray(u) ? u : [u]),
            ]
          );
        }),
        u = (e, t) => {
          let r = (0, a.forwardRef)((r, s) => {
            let { className: l, ...c } = r;
            return (0, a.createElement)(d, {
              ref: s,
              iconNode: t,
              className: i("lucide-".concat(n(o(e))), "lucide-".concat(e), l),
              ...c,
            });
          });
          return (r.displayName = o(e)), r;
        };
    },
    79995: (e, t, r) => {
      let a = r(47685),
        n = r(77245),
        s = r(16383),
        o = r(40934);
      function i(e, t, r, s, o) {
        let i = [].slice.call(arguments, 1),
          l = i.length,
          c = "function" == typeof i[l - 1];
        if (!c && !a()) throw Error("Callback required as last argument");
        if (c) {
          if (l < 2) throw Error("Too few arguments provided");
          2 === l
            ? ((o = r), (r = t), (t = s = void 0))
            : 3 === l &&
              (t.getContext && void 0 === o
                ? ((o = s), (s = void 0))
                : ((o = s), (s = r), (r = t), (t = void 0)));
        } else {
          if (l < 1) throw Error("Too few arguments provided");
          return (
            1 === l
              ? ((r = t), (t = s = void 0))
              : 2 !== l || t.getContext || ((s = r), (r = t), (t = void 0)),
            new Promise(function (a, o) {
              try {
                let o = n.create(r, s);
                a(e(o, t, s));
              } catch (e) {
                o(e);
              }
            })
          );
        }
        try {
          let a = n.create(r, s);
          o(null, e(a, t, s));
        } catch (e) {
          o(e);
        }
      }
      (t.create = n.create),
        (t.toCanvas = i.bind(null, s.render)),
        (t.toDataURL = i.bind(null, s.renderToDataURL)),
        (t.toString = i.bind(null, function (e, t, r) {
          return o.render(e, r);
        }));
    },
    47685: (e) => {
      e.exports = function () {
        return (
          "function" == typeof Promise &&
          Promise.prototype &&
          Promise.prototype.then
        );
      };
    },
    863: (e, t, r) => {
      let a = r(56880).getSymbolSize;
      (t.getRowColCoords = function (e) {
        if (1 === e) return [];
        let t = Math.floor(e / 7) + 2,
          r = a(e),
          n = 145 === r ? 26 : 2 * Math.ceil((r - 13) / (2 * t - 2)),
          s = [r - 7];
        for (let e = 1; e < t - 1; e++) s[e] = s[e - 1] - n;
        return s.push(6), s.reverse();
      }),
        (t.getPositions = function (e) {
          let r = [],
            a = t.getRowColCoords(e),
            n = a.length;
          for (let e = 0; e < n; e++)
            for (let t = 0; t < n; t++)
              (0 !== e || 0 !== t) &&
                (0 !== e || t !== n - 1) &&
                (e !== n - 1 || 0 !== t) &&
                r.push([a[e], a[t]]);
          return r;
        });
    },
    22115: (e, t, r) => {
      let a = r(71932),
        n = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          " ",
          "$",
          "%",
          "*",
          "+",
          "-",
          ".",
          "/",
          ":",
        ];
      function s(e) {
        (this.mode = a.ALPHANUMERIC), (this.data = e);
      }
      (s.getBitsLength = function (e) {
        return 11 * Math.floor(e / 2) + (e % 2) * 6;
      }),
        (s.prototype.getLength = function () {
          return this.data.length;
        }),
        (s.prototype.getBitsLength = function () {
          return s.getBitsLength(this.data.length);
        }),
        (s.prototype.write = function (e) {
          let t;
          for (t = 0; t + 2 <= this.data.length; t += 2) {
            let r = 45 * n.indexOf(this.data[t]);
            (r += n.indexOf(this.data[t + 1])), e.put(r, 11);
          }
          this.data.length % 2 && e.put(n.indexOf(this.data[t]), 6);
        }),
        (e.exports = s);
    },
    48071: (e) => {
      function t() {
        (this.buffer = []), (this.length = 0);
      }
      (t.prototype = {
        get: function (e) {
          let t = Math.floor(e / 8);
          return ((this.buffer[t] >>> (7 - (e % 8))) & 1) == 1;
        },
        put: function (e, t) {
          for (let r = 0; r < t; r++)
            this.putBit(((e >>> (t - r - 1)) & 1) == 1);
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (e) {
          let t = Math.floor(this.length / 8);
          this.buffer.length <= t && this.buffer.push(0),
            e && (this.buffer[t] |= 128 >>> this.length % 8),
            this.length++;
        },
      }),
        (e.exports = t);
    },
    53972: (e) => {
      function t(e) {
        if (!e || e < 1)
          throw Error("BitMatrix size must be defined and greater than 0");
        (this.size = e),
          (this.data = new Uint8Array(e * e)),
          (this.reservedBit = new Uint8Array(e * e));
      }
      (t.prototype.set = function (e, t, r, a) {
        let n = e * this.size + t;
        (this.data[n] = r), a && (this.reservedBit[n] = !0);
      }),
        (t.prototype.get = function (e, t) {
          return this.data[e * this.size + t];
        }),
        (t.prototype.xor = function (e, t, r) {
          this.data[e * this.size + t] ^= r;
        }),
        (t.prototype.isReserved = function (e, t) {
          return this.reservedBit[e * this.size + t];
        }),
        (e.exports = t);
    },
    85688: (e, t, r) => {
      let a = r(71932);
      function n(e) {
        (this.mode = a.BYTE),
          "string" == typeof e
            ? (this.data = new TextEncoder().encode(e))
            : (this.data = new Uint8Array(e));
      }
      (n.getBitsLength = function (e) {
        return 8 * e;
      }),
        (n.prototype.getLength = function () {
          return this.data.length;
        }),
        (n.prototype.getBitsLength = function () {
          return n.getBitsLength(this.data.length);
        }),
        (n.prototype.write = function (e) {
          for (let t = 0, r = this.data.length; t < r; t++)
            e.put(this.data[t], 8);
        }),
        (e.exports = n);
    },
    93684: (e, t, r) => {
      let a = r(20865),
        n = [
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4,
          4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8,
          10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6,
          11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23,
          25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12,
          23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29,
          40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51,
          60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74,
          24, 47, 65, 77, 25, 49, 68, 81,
        ],
        s = [
          7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48,
          72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110,
          160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308,
          104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280,
          408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650,
          224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504,
          750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952,
          1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140,
          1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350,
          1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590,
          1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860,
          2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
        ];
      (t.getBlocksCount = function (e, t) {
        switch (t) {
          case a.L:
            return n[(e - 1) * 4 + 0];
          case a.M:
            return n[(e - 1) * 4 + 1];
          case a.Q:
            return n[(e - 1) * 4 + 2];
          case a.H:
            return n[(e - 1) * 4 + 3];
          default:
            return;
        }
      }),
        (t.getTotalCodewordsCount = function (e, t) {
          switch (t) {
            case a.L:
              return s[(e - 1) * 4 + 0];
            case a.M:
              return s[(e - 1) * 4 + 1];
            case a.Q:
              return s[(e - 1) * 4 + 2];
            case a.H:
              return s[(e - 1) * 4 + 3];
            default:
              return;
          }
        });
    },
    20865: (e, t) => {
      (t.L = { bit: 1 }),
        (t.M = { bit: 0 }),
        (t.Q = { bit: 3 }),
        (t.H = { bit: 2 }),
        (t.isValid = function (e) {
          return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4;
        }),
        (t.from = function (e, r) {
          if (t.isValid(e)) return e;
          try {
            return (function (e) {
              if ("string" != typeof e) throw Error("Param is not a string");
              switch (e.toLowerCase()) {
                case "l":
                case "low":
                  return t.L;
                case "m":
                case "medium":
                  return t.M;
                case "q":
                case "quartile":
                  return t.Q;
                case "h":
                case "high":
                  return t.H;
                default:
                  throw Error("Unknown EC Level: " + e);
              }
            })(e);
          } catch (e) {
            return r;
          }
        });
    },
    87428: (e, t, r) => {
      let a = r(56880).getSymbolSize;
      t.getPositions = function (e) {
        let t = a(e);
        return [
          [0, 0],
          [t - 7, 0],
          [0, t - 7],
        ];
      };
    },
    73335: (e, t, r) => {
      let a = r(56880),
        n = a.getBCHDigit(1335);
      t.getEncodedBits = function (e, t) {
        let r = (e.bit << 3) | t,
          s = r << 10;
        for (; a.getBCHDigit(s) - n >= 0; ) s ^= 1335 << (a.getBCHDigit(s) - n);
        return ((r << 10) | s) ^ 21522;
      };
    },
    3455: (e, t) => {
      let r = new Uint8Array(512),
        a = new Uint8Array(256);
      !(function () {
        let e = 1;
        for (let t = 0; t < 255; t++)
          (r[t] = e), (a[e] = t), 256 & (e <<= 1) && (e ^= 285);
        for (let e = 255; e < 512; e++) r[e] = r[e - 255];
      })(),
        (t.log = function (e) {
          if (e < 1) throw Error("log(" + e + ")");
          return a[e];
        }),
        (t.exp = function (e) {
          return r[e];
        }),
        (t.mul = function (e, t) {
          return 0 === e || 0 === t ? 0 : r[a[e] + a[t]];
        });
    },
    47873: (e, t, r) => {
      let a = r(71932),
        n = r(56880);
      function s(e) {
        (this.mode = a.KANJI), (this.data = e);
      }
      (s.getBitsLength = function (e) {
        return 13 * e;
      }),
        (s.prototype.getLength = function () {
          return this.data.length;
        }),
        (s.prototype.getBitsLength = function () {
          return s.getBitsLength(this.data.length);
        }),
        (s.prototype.write = function (e) {
          let t;
          for (t = 0; t < this.data.length; t++) {
            let r = n.toSJIS(this.data[t]);
            if (r >= 33088 && r <= 40956) r -= 33088;
            else if (r >= 57408 && r <= 60351) r -= 49472;
            else
              throw Error(
                "Invalid SJIS character: " +
                  this.data[t] +
                  "\nMake sure your charset is UTF-8"
              );
            (r = ((r >>> 8) & 255) * 192 + (255 & r)), e.put(r, 13);
          }
        }),
        (e.exports = s);
    },
    69616: (e, t) => {
      t.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
      };
      let r = { N1: 3, N2: 3, N3: 40, N4: 10 };
      (t.isValid = function (e) {
        return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7;
      }),
        (t.from = function (e) {
          return t.isValid(e) ? parseInt(e, 10) : void 0;
        }),
        (t.getPenaltyN1 = function (e) {
          let t = e.size,
            a = 0,
            n = 0,
            s = 0,
            o = null,
            i = null;
          for (let l = 0; l < t; l++) {
            (n = s = 0), (o = i = null);
            for (let c = 0; c < t; c++) {
              let t = e.get(l, c);
              t === o
                ? n++
                : (n >= 5 && (a += r.N1 + (n - 5)), (o = t), (n = 1)),
                (t = e.get(c, l)) === i
                  ? s++
                  : (s >= 5 && (a += r.N1 + (s - 5)), (i = t), (s = 1));
            }
            n >= 5 && (a += r.N1 + (n - 5)), s >= 5 && (a += r.N1 + (s - 5));
          }
          return a;
        }),
        (t.getPenaltyN2 = function (e) {
          let t = e.size,
            a = 0;
          for (let r = 0; r < t - 1; r++)
            for (let n = 0; n < t - 1; n++) {
              let t =
                e.get(r, n) +
                e.get(r, n + 1) +
                e.get(r + 1, n) +
                e.get(r + 1, n + 1);
              (4 === t || 0 === t) && a++;
            }
          return a * r.N2;
        }),
        (t.getPenaltyN3 = function (e) {
          let t = e.size,
            a = 0,
            n = 0,
            s = 0;
          for (let r = 0; r < t; r++) {
            n = s = 0;
            for (let o = 0; o < t; o++)
              (n = ((n << 1) & 2047) | e.get(r, o)),
                o >= 10 && (1488 === n || 93 === n) && a++,
                (s = ((s << 1) & 2047) | e.get(o, r)),
                o >= 10 && (1488 === s || 93 === s) && a++;
          }
          return a * r.N3;
        }),
        (t.getPenaltyN4 = function (e) {
          let t = 0,
            a = e.data.length;
          for (let r = 0; r < a; r++) t += e.data[r];
          return Math.abs(Math.ceil((100 * t) / a / 5) - 10) * r.N4;
        }),
        (t.applyMask = function (e, r) {
          let a = r.size;
          for (let n = 0; n < a; n++)
            for (let s = 0; s < a; s++)
              r.isReserved(s, n) ||
                r.xor(
                  s,
                  n,
                  (function (e, r, a) {
                    switch (e) {
                      case t.Patterns.PATTERN000:
                        return (r + a) % 2 == 0;
                      case t.Patterns.PATTERN001:
                        return r % 2 == 0;
                      case t.Patterns.PATTERN010:
                        return a % 3 == 0;
                      case t.Patterns.PATTERN011:
                        return (r + a) % 3 == 0;
                      case t.Patterns.PATTERN100:
                        return (Math.floor(r / 2) + Math.floor(a / 3)) % 2 == 0;
                      case t.Patterns.PATTERN101:
                        return ((r * a) % 2) + ((r * a) % 3) == 0;
                      case t.Patterns.PATTERN110:
                        return (((r * a) % 2) + ((r * a) % 3)) % 2 == 0;
                      case t.Patterns.PATTERN111:
                        return (((r * a) % 3) + ((r + a) % 2)) % 2 == 0;
                      default:
                        throw Error("bad maskPattern:" + e);
                    }
                  })(e, s, n)
                );
        }),
        (t.getBestMask = function (e, r) {
          let a = Object.keys(t.Patterns).length,
            n = 0,
            s = 1 / 0;
          for (let o = 0; o < a; o++) {
            r(o), t.applyMask(o, e);
            let a =
              t.getPenaltyN1(e) +
              t.getPenaltyN2(e) +
              t.getPenaltyN3(e) +
              t.getPenaltyN4(e);
            t.applyMask(o, e), a < s && ((s = a), (n = o));
          }
          return n;
        });
    },
    71932: (e, t, r) => {
      let a = r(35040),
        n = r(26734);
      (t.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
        (t.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }),
        (t.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
        (t.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
        (t.MIXED = { bit: -1 }),
        (t.getCharCountIndicator = function (e, t) {
          if (!e.ccBits) throw Error("Invalid mode: " + e);
          if (!a.isValid(t)) throw Error("Invalid version: " + t);
          return t >= 1 && t < 10
            ? e.ccBits[0]
            : t < 27
            ? e.ccBits[1]
            : e.ccBits[2];
        }),
        (t.getBestModeForData = function (e) {
          return n.testNumeric(e)
            ? t.NUMERIC
            : n.testAlphanumeric(e)
            ? t.ALPHANUMERIC
            : n.testKanji(e)
            ? t.KANJI
            : t.BYTE;
        }),
        (t.toString = function (e) {
          if (e && e.id) return e.id;
          throw Error("Invalid mode");
        }),
        (t.isValid = function (e) {
          return e && e.bit && e.ccBits;
        }),
        (t.from = function (e, r) {
          if (t.isValid(e)) return e;
          try {
            return (function (e) {
              if ("string" != typeof e) throw Error("Param is not a string");
              switch (e.toLowerCase()) {
                case "numeric":
                  return t.NUMERIC;
                case "alphanumeric":
                  return t.ALPHANUMERIC;
                case "kanji":
                  return t.KANJI;
                case "byte":
                  return t.BYTE;
                default:
                  throw Error("Unknown mode: " + e);
              }
            })(e);
          } catch (e) {
            return r;
          }
        });
    },
    53773: (e, t, r) => {
      let a = r(71932);
      function n(e) {
        (this.mode = a.NUMERIC), (this.data = e.toString());
      }
      (n.getBitsLength = function (e) {
        return 10 * Math.floor(e / 3) + (e % 3 ? (e % 3) * 3 + 1 : 0);
      }),
        (n.prototype.getLength = function () {
          return this.data.length;
        }),
        (n.prototype.getBitsLength = function () {
          return n.getBitsLength(this.data.length);
        }),
        (n.prototype.write = function (e) {
          let t, r;
          for (t = 0; t + 3 <= this.data.length; t += 3)
            (r = parseInt(this.data.substr(t, 3), 10)), e.put(r, 10);
          let a = this.data.length - t;
          a > 0 &&
            ((r = parseInt(this.data.substr(t), 10)), e.put(r, 3 * a + 1));
        }),
        (e.exports = n);
    },
    90177: (e, t, r) => {
      let a = r(3455);
      (t.mul = function (e, t) {
        let r = new Uint8Array(e.length + t.length - 1);
        for (let n = 0; n < e.length; n++)
          for (let s = 0; s < t.length; s++) r[n + s] ^= a.mul(e[n], t[s]);
        return r;
      }),
        (t.mod = function (e, t) {
          let r = new Uint8Array(e);
          for (; r.length - t.length >= 0; ) {
            let e = r[0];
            for (let n = 0; n < t.length; n++) r[n] ^= a.mul(t[n], e);
            let n = 0;
            for (; n < r.length && 0 === r[n]; ) n++;
            r = r.slice(n);
          }
          return r;
        }),
        (t.generateECPolynomial = function (e) {
          let r = new Uint8Array([1]);
          for (let n = 0; n < e; n++)
            r = t.mul(r, new Uint8Array([1, a.exp(n)]));
          return r;
        });
    },
    77245: (e, t, r) => {
      let a = r(56880),
        n = r(20865),
        s = r(48071),
        o = r(53972),
        i = r(863),
        l = r(87428),
        c = r(69616),
        d = r(93684),
        u = r(78928),
        p = r(54557),
        h = r(73335),
        m = r(71932),
        f = r(28181);
      function b(e, t, r) {
        let a, n;
        let s = e.size,
          o = h.getEncodedBits(t, r);
        for (a = 0; a < 15; a++)
          (n = ((o >> a) & 1) == 1),
            a < 6
              ? e.set(a, 8, n, !0)
              : a < 8
              ? e.set(a + 1, 8, n, !0)
              : e.set(s - 15 + a, 8, n, !0),
            a < 8
              ? e.set(8, s - a - 1, n, !0)
              : a < 9
              ? e.set(8, 15 - a - 1 + 1, n, !0)
              : e.set(8, 15 - a - 1, n, !0);
        e.set(s - 8, 8, 1, !0);
      }
      t.create = function (e, t) {
        let r, h;
        if (void 0 === e || "" === e) throw Error("No input text");
        let y = n.M;
        return (
          void 0 !== t &&
            ((y = n.from(t.errorCorrectionLevel, n.M)),
            (r = p.from(t.version)),
            (h = c.from(t.maskPattern)),
            t.toSJISFunc && a.setToSJISFunction(t.toSJISFunc)),
          (function (e, t, r, n) {
            let h;
            if (Array.isArray(e)) h = f.fromArray(e);
            else if ("string" == typeof e) {
              let a = t;
              if (!a) {
                let t = f.rawSplit(e);
                a = p.getBestVersionForData(t, r);
              }
              h = f.fromString(e, a || 40);
            } else throw Error("Invalid data");
            let y = p.getBestVersionForData(h, r);
            if (!y)
              throw Error(
                "The amount of data is too big to be stored in a QR Code"
              );
            if (t) {
              if (t < y)
                throw Error(
                  "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
                    y +
                    ".\n"
                );
            } else t = y;
            let x = (function (e, t, r) {
                let n = new s();
                r.forEach(function (t) {
                  n.put(t.mode.bit, 4),
                    n.put(t.getLength(), m.getCharCountIndicator(t.mode, e)),
                    t.write(n);
                });
                let o =
                  (a.getSymbolTotalCodewords(e) -
                    d.getTotalCodewordsCount(e, t)) *
                  8;
                for (
                  n.getLengthInBits() + 4 <= o && n.put(0, 4);
                  n.getLengthInBits() % 8 != 0;

                )
                  n.putBit(0);
                let i = (o - n.getLengthInBits()) / 8;
                for (let e = 0; e < i; e++) n.put(e % 2 ? 17 : 236, 8);
                return (function (e, t, r) {
                  let n, s;
                  let o = a.getSymbolTotalCodewords(t),
                    i = o - d.getTotalCodewordsCount(t, r),
                    l = d.getBlocksCount(t, r),
                    c = o % l,
                    p = l - c,
                    h = Math.floor(o / l),
                    m = Math.floor(i / l),
                    f = m + 1,
                    b = h - m,
                    y = new u(b),
                    x = 0,
                    v = Array(l),
                    g = Array(l),
                    E = 0,
                    k = new Uint8Array(e.buffer);
                  for (let e = 0; e < l; e++) {
                    let t = e < p ? m : f;
                    (v[e] = k.slice(x, x + t)),
                      (g[e] = y.encode(v[e])),
                      (x += t),
                      (E = Math.max(E, t));
                  }
                  let C = new Uint8Array(o),
                    w = 0;
                  for (n = 0; n < E; n++)
                    for (s = 0; s < l; s++)
                      n < v[s].length && (C[w++] = v[s][n]);
                  for (n = 0; n < b; n++)
                    for (s = 0; s < l; s++) C[w++] = g[s][n];
                  return C;
                })(n, e, t);
              })(t, r, h),
              v = new o(a.getSymbolSize(t));
            return (
              (function (e, t) {
                let r = e.size,
                  a = l.getPositions(t);
                for (let t = 0; t < a.length; t++) {
                  let n = a[t][0],
                    s = a[t][1];
                  for (let t = -1; t <= 7; t++)
                    if (!(n + t <= -1) && !(r <= n + t))
                      for (let a = -1; a <= 7; a++)
                        s + a <= -1 ||
                          r <= s + a ||
                          ((t >= 0 && t <= 6 && (0 === a || 6 === a)) ||
                          (a >= 0 && a <= 6 && (0 === t || 6 === t)) ||
                          (t >= 2 && t <= 4 && a >= 2 && a <= 4)
                            ? e.set(n + t, s + a, !0, !0)
                            : e.set(n + t, s + a, !1, !0));
                }
              })(v, t),
              (function (e) {
                let t = e.size;
                for (let r = 8; r < t - 8; r++) {
                  let t = r % 2 == 0;
                  e.set(r, 6, t, !0), e.set(6, r, t, !0);
                }
              })(v),
              (function (e, t) {
                let r = i.getPositions(t);
                for (let t = 0; t < r.length; t++) {
                  let a = r[t][0],
                    n = r[t][1];
                  for (let t = -2; t <= 2; t++)
                    for (let r = -2; r <= 2; r++)
                      -2 === t ||
                      2 === t ||
                      -2 === r ||
                      2 === r ||
                      (0 === t && 0 === r)
                        ? e.set(a + t, n + r, !0, !0)
                        : e.set(a + t, n + r, !1, !0);
                }
              })(v, t),
              b(v, r, 0),
              t >= 7 &&
                (function (e, t) {
                  let r, a, n;
                  let s = e.size,
                    o = p.getEncodedBits(t);
                  for (let t = 0; t < 18; t++)
                    (r = Math.floor(t / 3)),
                      (a = (t % 3) + s - 8 - 3),
                      (n = ((o >> t) & 1) == 1),
                      e.set(r, a, n, !0),
                      e.set(a, r, n, !0);
                })(v, t),
              (function (e, t) {
                let r = e.size,
                  a = -1,
                  n = r - 1,
                  s = 7,
                  o = 0;
                for (let i = r - 1; i > 0; i -= 2)
                  for (6 === i && i--; ; ) {
                    for (let r = 0; r < 2; r++)
                      if (!e.isReserved(n, i - r)) {
                        let a = !1;
                        o < t.length && (a = ((t[o] >>> s) & 1) == 1),
                          e.set(n, i - r, a),
                          -1 == --s && (o++, (s = 7));
                      }
                    if ((n += a) < 0 || r <= n) {
                      (n -= a), (a = -a);
                      break;
                    }
                  }
              })(v, x),
              isNaN(n) && (n = c.getBestMask(v, b.bind(null, v, r))),
              c.applyMask(n, v),
              b(v, r, n),
              {
                modules: v,
                version: t,
                errorCorrectionLevel: r,
                maskPattern: n,
                segments: h,
              }
            );
          })(e, r, y, h)
        );
      };
    },
    78928: (e, t, r) => {
      let a = r(90177);
      function n(e) {
        (this.genPoly = void 0),
          (this.degree = e),
          this.degree && this.initialize(this.degree);
      }
      (n.prototype.initialize = function (e) {
        (this.degree = e), (this.genPoly = a.generateECPolynomial(this.degree));
      }),
        (n.prototype.encode = function (e) {
          if (!this.genPoly) throw Error("Encoder not initialized");
          let t = new Uint8Array(e.length + this.degree);
          t.set(e);
          let r = a.mod(t, this.genPoly),
            n = this.degree - r.length;
          if (n > 0) {
            let e = new Uint8Array(this.degree);
            return e.set(r, n), e;
          }
          return r;
        }),
        (e.exports = n);
    },
    26734: (e, t) => {
      let r = "[0-9]+",
        a =
          "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
        n =
          "(?:(?![A-Z0-9 $%*+\\-./:]|" +
          (a = a.replace(/u/g, "\\u")) +
          ")(?:.|[\r\n]))+";
      (t.KANJI = RegExp(a, "g")),
        (t.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
        (t.BYTE = RegExp(n, "g")),
        (t.NUMERIC = RegExp(r, "g")),
        (t.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g"));
      let s = RegExp("^" + a + "$"),
        o = RegExp("^" + r + "$"),
        i = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      (t.testKanji = function (e) {
        return s.test(e);
      }),
        (t.testNumeric = function (e) {
          return o.test(e);
        }),
        (t.testAlphanumeric = function (e) {
          return i.test(e);
        });
    },
    28181: (e, t, r) => {
      let a = r(71932),
        n = r(53773),
        s = r(22115),
        o = r(85688),
        i = r(47873),
        l = r(26734),
        c = r(56880),
        d = r(45130);
      function u(e) {
        return unescape(encodeURIComponent(e)).length;
      }
      function p(e, t, r) {
        let a;
        let n = [];
        for (; null !== (a = e.exec(r)); )
          n.push({ data: a[0], index: a.index, mode: t, length: a[0].length });
        return n;
      }
      function h(e) {
        let t, r;
        let n = p(l.NUMERIC, a.NUMERIC, e),
          s = p(l.ALPHANUMERIC, a.ALPHANUMERIC, e);
        return (
          c.isKanjiModeEnabled()
            ? ((t = p(l.BYTE, a.BYTE, e)), (r = p(l.KANJI, a.KANJI, e)))
            : ((t = p(l.BYTE_KANJI, a.BYTE, e)), (r = [])),
          n
            .concat(s, t, r)
            .sort(function (e, t) {
              return e.index - t.index;
            })
            .map(function (e) {
              return { data: e.data, mode: e.mode, length: e.length };
            })
        );
      }
      function m(e, t) {
        switch (t) {
          case a.NUMERIC:
            return n.getBitsLength(e);
          case a.ALPHANUMERIC:
            return s.getBitsLength(e);
          case a.KANJI:
            return i.getBitsLength(e);
          case a.BYTE:
            return o.getBitsLength(e);
        }
      }
      function f(e, t) {
        let r;
        let l = a.getBestModeForData(e);
        if ((r = a.from(t, l)) !== a.BYTE && r.bit < l.bit)
          throw Error(
            '"' +
              e +
              '" cannot be encoded with mode ' +
              a.toString(r) +
              ".\n Suggested mode is: " +
              a.toString(l)
          );
        switch ((r !== a.KANJI || c.isKanjiModeEnabled() || (r = a.BYTE), r)) {
          case a.NUMERIC:
            return new n(e);
          case a.ALPHANUMERIC:
            return new s(e);
          case a.KANJI:
            return new i(e);
          case a.BYTE:
            return new o(e);
        }
      }
      (t.fromArray = function (e) {
        return e.reduce(function (e, t) {
          return (
            "string" == typeof t
              ? e.push(f(t, null))
              : t.data && e.push(f(t.data, t.mode)),
            e
          );
        }, []);
      }),
        (t.fromString = function (e, r) {
          let n = (function (e, t) {
              let r = {},
                n = { start: {} },
                s = ["start"];
              for (let o = 0; o < e.length; o++) {
                let i = e[o],
                  l = [];
                for (let e = 0; e < i.length; e++) {
                  let c = i[e],
                    d = "" + o + e;
                  l.push(d), (r[d] = { node: c, lastCount: 0 }), (n[d] = {});
                  for (let e = 0; e < s.length; e++) {
                    let o = s[e];
                    r[o] && r[o].node.mode === c.mode
                      ? ((n[o][d] =
                          m(r[o].lastCount + c.length, c.mode) -
                          m(r[o].lastCount, c.mode)),
                        (r[o].lastCount += c.length))
                      : (r[o] && (r[o].lastCount = c.length),
                        (n[o][d] =
                          m(c.length, c.mode) +
                          4 +
                          a.getCharCountIndicator(c.mode, t)));
                  }
                }
                s = l;
              }
              for (let e = 0; e < s.length; e++) n[s[e]].end = 0;
              return { map: n, table: r };
            })(
              (function (e) {
                let t = [];
                for (let r = 0; r < e.length; r++) {
                  let n = e[r];
                  switch (n.mode) {
                    case a.NUMERIC:
                      t.push([
                        n,
                        {
                          data: n.data,
                          mode: a.ALPHANUMERIC,
                          length: n.length,
                        },
                        { data: n.data, mode: a.BYTE, length: n.length },
                      ]);
                      break;
                    case a.ALPHANUMERIC:
                      t.push([
                        n,
                        { data: n.data, mode: a.BYTE, length: n.length },
                      ]);
                      break;
                    case a.KANJI:
                      t.push([
                        n,
                        { data: n.data, mode: a.BYTE, length: u(n.data) },
                      ]);
                      break;
                    case a.BYTE:
                      t.push([
                        { data: n.data, mode: a.BYTE, length: u(n.data) },
                      ]);
                  }
                }
                return t;
              })(h(e, c.isKanjiModeEnabled())),
              r
            ),
            s = d.find_path(n.map, "start", "end"),
            o = [];
          for (let e = 1; e < s.length - 1; e++) o.push(n.table[s[e]].node);
          return t.fromArray(
            o.reduce(function (e, t) {
              let r = e.length - 1 >= 0 ? e[e.length - 1] : null;
              return (
                r && r.mode === t.mode
                  ? (e[e.length - 1].data += t.data)
                  : e.push(t),
                e
              );
            }, [])
          );
        }),
        (t.rawSplit = function (e) {
          return t.fromArray(h(e, c.isKanjiModeEnabled()));
        });
    },
    56880: (e, t) => {
      let r;
      let a = [
        0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581,
        655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828,
        1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532,
        3706,
      ];
      (t.getSymbolSize = function (e) {
        if (!e) throw Error('"version" cannot be null or undefined');
        if (e < 1 || e > 40)
          throw Error('"version" should be in range from 1 to 40');
        return 4 * e + 17;
      }),
        (t.getSymbolTotalCodewords = function (e) {
          return a[e];
        }),
        (t.getBCHDigit = function (e) {
          let t = 0;
          for (; 0 !== e; ) t++, (e >>>= 1);
          return t;
        }),
        (t.setToSJISFunction = function (e) {
          if ("function" != typeof e)
            throw Error('"toSJISFunc" is not a valid function.');
          r = e;
        }),
        (t.isKanjiModeEnabled = function () {
          return void 0 !== r;
        }),
        (t.toSJIS = function (e) {
          return r(e);
        });
    },
    35040: (e, t) => {
      t.isValid = function (e) {
        return !isNaN(e) && e >= 1 && e <= 40;
      };
    },
    54557: (e, t, r) => {
      let a = r(56880),
        n = r(93684),
        s = r(20865),
        o = r(71932),
        i = r(35040),
        l = a.getBCHDigit(7973);
      function c(e, t) {
        return o.getCharCountIndicator(e, t) + 4;
      }
      (t.from = function (e, t) {
        return i.isValid(e) ? parseInt(e, 10) : t;
      }),
        (t.getCapacity = function (e, t, r) {
          if (!i.isValid(e)) throw Error("Invalid QR Code version");
          void 0 === r && (r = o.BYTE);
          let s =
            (a.getSymbolTotalCodewords(e) - n.getTotalCodewordsCount(e, t)) * 8;
          if (r === o.MIXED) return s;
          let l = s - c(r, e);
          switch (r) {
            case o.NUMERIC:
              return Math.floor((l / 10) * 3);
            case o.ALPHANUMERIC:
              return Math.floor((l / 11) * 2);
            case o.KANJI:
              return Math.floor(l / 13);
            case o.BYTE:
            default:
              return Math.floor(l / 8);
          }
        }),
        (t.getBestVersionForData = function (e, r) {
          let a;
          let n = s.from(r, s.M);
          if (Array.isArray(e)) {
            if (e.length > 1)
              return (function (e, r) {
                for (let a = 1; a <= 40; a++)
                  if (
                    (function (e, t) {
                      let r = 0;
                      return (
                        e.forEach(function (e) {
                          let a = c(e.mode, t);
                          r += a + e.getBitsLength();
                        }),
                        r
                      );
                    })(e, a) <= t.getCapacity(a, r, o.MIXED)
                  )
                    return a;
              })(e, n);
            if (0 === e.length) return 1;
            a = e[0];
          } else a = e;
          return (function (e, r, a) {
            for (let n = 1; n <= 40; n++)
              if (r <= t.getCapacity(n, a, e)) return n;
          })(a.mode, a.getLength(), n);
        }),
        (t.getEncodedBits = function (e) {
          if (!i.isValid(e) || e < 7) throw Error("Invalid QR Code version");
          let t = e << 12;
          for (; a.getBCHDigit(t) - l >= 0; )
            t ^= 7973 << (a.getBCHDigit(t) - l);
          return (e << 12) | t;
        });
    },
    16383: (e, t, r) => {
      let a = r(62172);
      (t.render = function (e, t, r) {
        var n;
        let s = r,
          o = t;
        void 0 !== s || (t && t.getContext) || ((s = t), (t = void 0)),
          t ||
            (o = (function () {
              try {
                return document.createElement("canvas");
              } catch (e) {
                throw Error("You need to specify a canvas element");
              }
            })()),
          (s = a.getOptions(s));
        let i = a.getImageWidth(e.modules.size, s),
          l = o.getContext("2d"),
          c = l.createImageData(i, i);
        return (
          a.qrToImageData(c.data, e, s),
          (n = o),
          l.clearRect(0, 0, n.width, n.height),
          n.style || (n.style = {}),
          (n.height = i),
          (n.width = i),
          (n.style.height = i + "px"),
          (n.style.width = i + "px"),
          l.putImageData(c, 0, 0),
          o
        );
      }),
        (t.renderToDataURL = function (e, r, a) {
          let n = a;
          void 0 !== n || (r && r.getContext) || ((n = r), (r = void 0)),
            n || (n = {});
          let s = t.render(e, r, n),
            o = n.type || "image/png",
            i = n.rendererOpts || {};
          return s.toDataURL(o, i.quality);
        });
    },
    40934: (e, t, r) => {
      let a = r(62172);
      function n(e, t) {
        let r = e.a / 255,
          a = t + '="' + e.hex + '"';
        return r < 1
          ? a + " " + t + '-opacity="' + r.toFixed(2).slice(1) + '"'
          : a;
      }
      function s(e, t, r) {
        let a = e + t;
        return void 0 !== r && (a += " " + r), a;
      }
      t.render = function (e, t, r) {
        let o = a.getOptions(t),
          i = e.modules.size,
          l = e.modules.data,
          c = i + 2 * o.margin,
          d = o.color.light.a
            ? "<path " +
              n(o.color.light, "fill") +
              ' d="M0 0h' +
              c +
              "v" +
              c +
              'H0z"/>'
            : "",
          u =
            "<path " +
            n(o.color.dark, "stroke") +
            ' d="' +
            (function (e, t, r) {
              let a = "",
                n = 0,
                o = !1,
                i = 0;
              for (let l = 0; l < e.length; l++) {
                let c = Math.floor(l % t),
                  d = Math.floor(l / t);
                c || o || (o = !0),
                  e[l]
                    ? (i++,
                      (l > 0 && c > 0 && e[l - 1]) ||
                        ((a += o ? s("M", c + r, 0.5 + d + r) : s("m", n, 0)),
                        (n = 0),
                        (o = !1)),
                      (c + 1 < t && e[l + 1]) || ((a += s("h", i)), (i = 0)))
                    : n++;
              }
              return a;
            })(l, i, o.margin) +
            '"/>',
          p =
            '<svg xmlns="http://www.w3.org/2000/svg" ' +
            (o.width
              ? 'width="' + o.width + '" height="' + o.width + '" '
              : "") +
            ('viewBox="0 0 ' + c) +
            " " +
            c +
            '" shape-rendering="crispEdges">' +
            d +
            u +
            "</svg>\n";
        return "function" == typeof r && r(null, p), p;
      };
    },
    62172: (e, t) => {
      function r(e) {
        if (("number" == typeof e && (e = e.toString()), "string" != typeof e))
          throw Error("Color should be defined as hex string");
        let t = e.slice().replace("#", "").split("");
        if (t.length < 3 || 5 === t.length || t.length > 8)
          throw Error("Invalid hex color: " + e);
        (3 === t.length || 4 === t.length) &&
          (t = Array.prototype.concat.apply(
            [],
            t.map(function (e) {
              return [e, e];
            })
          )),
          6 === t.length && t.push("F", "F");
        let r = parseInt(t.join(""), 16);
        return {
          r: (r >> 24) & 255,
          g: (r >> 16) & 255,
          b: (r >> 8) & 255,
          a: 255 & r,
          hex: "#" + t.slice(0, 6).join(""),
        };
      }
      (t.getOptions = function (e) {
        e || (e = {}), e.color || (e.color = {});
        let t =
            void 0 === e.margin || null === e.margin || e.margin < 0
              ? 4
              : e.margin,
          a = e.width && e.width >= 21 ? e.width : void 0,
          n = e.scale || 4;
        return {
          width: a,
          scale: a ? 4 : n,
          margin: t,
          color: {
            dark: r(e.color.dark || "#000000ff"),
            light: r(e.color.light || "#ffffffff"),
          },
          type: e.type,
          rendererOpts: e.rendererOpts || {},
        };
      }),
        (t.getScale = function (e, t) {
          return t.width && t.width >= e + 2 * t.margin
            ? t.width / (e + 2 * t.margin)
            : t.scale;
        }),
        (t.getImageWidth = function (e, r) {
          let a = t.getScale(e, r);
          return Math.floor((e + 2 * r.margin) * a);
        }),
        (t.qrToImageData = function (e, r, a) {
          let n = r.modules.size,
            s = r.modules.data,
            o = t.getScale(n, a),
            i = Math.floor((n + 2 * a.margin) * o),
            l = a.margin * o,
            c = [a.color.light, a.color.dark];
          for (let t = 0; t < i; t++)
            for (let r = 0; r < i; r++) {
              let d = (t * i + r) * 4,
                u = a.color.light;
              t >= l &&
                r >= l &&
                t < i - l &&
                r < i - l &&
                (u =
                  c[
                    s[Math.floor((t - l) / o) * n + Math.floor((r - l) / o)]
                      ? 1
                      : 0
                  ]),
                (e[d++] = u.r),
                (e[d++] = u.g),
                (e[d++] = u.b),
                (e[d] = u.a);
            }
        });
    },
    75191: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => i });
      var a = r(12115),
        n = [
          "preEnter",
          "entering",
          "entered",
          "preExit",
          "exiting",
          "exited",
          "unmounted",
        ],
        s = function (e) {
          return e ? 6 : 5;
        },
        o = function (e, t, r, a, s) {
          clearTimeout(a.current),
            t(e),
            (r.current = e),
            s && s({ state: n[e] });
        },
        i = function (e) {
          var t,
            r,
            i = void 0 === e ? {} : e,
            l = i.enter,
            c = void 0 === l || l,
            d = i.exit,
            u = void 0 === d || d,
            p = i.preEnter,
            h = i.preExit,
            m = i.timeout,
            f = i.initialEntered,
            b = i.mountOnEnter,
            y = i.unmountOnExit,
            x = i.onChange,
            v = (0, a.useState)(f ? 2 : s(b)),
            g = v[0],
            E = v[1],
            k = (0, a.useRef)(g),
            C = (0, a.useRef)();
          "object" == typeof m ? ((t = m.enter), (r = m.exit)) : (t = r = m);
          var w = (0, a.useCallback)(
              function () {
                var e;
                switch (k.current) {
                  case 1:
                  case 0:
                    e = 2;
                    break;
                  case 4:
                  case 3:
                    e = s(y);
                }
                void 0 !== e && o(e, E, k, C, x);
              },
              [x, y]
            ),
            T = (0, a.useCallback)(
              function (e) {
                var a = function e(a) {
                    switch ((o(a, E, k, C, x), a)) {
                      case 1:
                        t >= 0 && (C.current = setTimeout(w, t));
                        break;
                      case 4:
                        r >= 0 && (C.current = setTimeout(w, r));
                        break;
                      case 0:
                      case 3:
                        C.current = setTimeout(function () {
                          return e(a + 1);
                        }, 0);
                    }
                  },
                  n = k.current <= 2;
                "boolean" != typeof e && (e = !n),
                  e
                    ? n || a(c ? (p ? 0 : 1) : 2)
                    : n && a(u ? (h ? 3 : 4) : s(y));
              },
              [w, x, c, u, p, h, t, r, y]
            );
          return (
            (0, a.useEffect)(function () {
              return function () {
                return clearTimeout(C.current);
              };
            }, []),
            [n[g], T, w]
          );
        };
    },
    5973: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => k });
      var a = (function () {
          if ("undefined" != typeof Map) return Map;
          function e(e, t) {
            var r = -1;
            return (
              e.some(function (e, a) {
                return e[0] === t && ((r = a), !0);
              }),
              r
            );
          }
          return (function () {
            function t() {
              this.__entries__ = [];
            }
            return (
              Object.defineProperty(t.prototype, "size", {
                get: function () {
                  return this.__entries__.length;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.get = function (t) {
                var r = e(this.__entries__, t),
                  a = this.__entries__[r];
                return a && a[1];
              }),
              (t.prototype.set = function (t, r) {
                var a = e(this.__entries__, t);
                ~a
                  ? (this.__entries__[a][1] = r)
                  : this.__entries__.push([t, r]);
              }),
              (t.prototype.delete = function (t) {
                var r = this.__entries__,
                  a = e(r, t);
                ~a && r.splice(a, 1);
              }),
              (t.prototype.has = function (t) {
                return !!~e(this.__entries__, t);
              }),
              (t.prototype.clear = function () {
                this.__entries__.splice(0);
              }),
              (t.prototype.forEach = function (e, t) {
                void 0 === t && (t = null);
                for (var r = 0, a = this.__entries__; r < a.length; r++) {
                  var n = a[r];
                  e.call(t, n[1], n[0]);
                }
              }),
              t
            );
          })();
        })(),
        n =
          "undefined" != typeof window &&
          "undefined" != typeof document &&
          window.document === document,
        s =
          void 0 !== r.g && r.g.Math === Math
            ? r.g
            : "undefined" != typeof self && self.Math === Math
            ? self
            : "undefined" != typeof window && window.Math === Math
            ? window
            : Function("return this")(),
        o =
          "function" == typeof requestAnimationFrame
            ? requestAnimationFrame.bind(s)
            : function (e) {
                return setTimeout(function () {
                  return e(Date.now());
                }, 1e3 / 60);
              },
        i = [
          "top",
          "right",
          "bottom",
          "left",
          "width",
          "height",
          "size",
          "weight",
        ],
        l = "undefined" != typeof MutationObserver,
        c = (function () {
          function e() {
            (this.connected_ = !1),
              (this.mutationEventsAdded_ = !1),
              (this.mutationsObserver_ = null),
              (this.observers_ = []),
              (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
              (this.refresh = (function (e, t) {
                var r = !1,
                  a = !1,
                  n = 0;
                function s() {
                  r && ((r = !1), e()), a && l();
                }
                function i() {
                  o(s);
                }
                function l() {
                  var e = Date.now();
                  if (r) {
                    if (e - n < 2) return;
                    a = !0;
                  } else (r = !0), (a = !1), setTimeout(i, 20);
                  n = e;
                }
                return l;
              })(this.refresh.bind(this), 0));
          }
          return (
            (e.prototype.addObserver = function (e) {
              ~this.observers_.indexOf(e) || this.observers_.push(e),
                this.connected_ || this.connect_();
            }),
            (e.prototype.removeObserver = function (e) {
              var t = this.observers_,
                r = t.indexOf(e);
              ~r && t.splice(r, 1),
                !t.length && this.connected_ && this.disconnect_();
            }),
            (e.prototype.refresh = function () {
              this.updateObservers_() && this.refresh();
            }),
            (e.prototype.updateObservers_ = function () {
              var e = this.observers_.filter(function (e) {
                return e.gatherActive(), e.hasActive();
              });
              return (
                e.forEach(function (e) {
                  return e.broadcastActive();
                }),
                e.length > 0
              );
            }),
            (e.prototype.connect_ = function () {
              n &&
                !this.connected_ &&
                (document.addEventListener(
                  "transitionend",
                  this.onTransitionEnd_
                ),
                window.addEventListener("resize", this.refresh),
                l
                  ? ((this.mutationsObserver_ = new MutationObserver(
                      this.refresh
                    )),
                    this.mutationsObserver_.observe(document, {
                      attributes: !0,
                      childList: !0,
                      characterData: !0,
                      subtree: !0,
                    }))
                  : (document.addEventListener(
                      "DOMSubtreeModified",
                      this.refresh
                    ),
                    (this.mutationEventsAdded_ = !0)),
                (this.connected_ = !0));
            }),
            (e.prototype.disconnect_ = function () {
              n &&
                this.connected_ &&
                (document.removeEventListener(
                  "transitionend",
                  this.onTransitionEnd_
                ),
                window.removeEventListener("resize", this.refresh),
                this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                this.mutationEventsAdded_ &&
                  document.removeEventListener(
                    "DOMSubtreeModified",
                    this.refresh
                  ),
                (this.mutationsObserver_ = null),
                (this.mutationEventsAdded_ = !1),
                (this.connected_ = !1));
            }),
            (e.prototype.onTransitionEnd_ = function (e) {
              var t = e.propertyName,
                r = void 0 === t ? "" : t;
              i.some(function (e) {
                return !!~r.indexOf(e);
              }) && this.refresh();
            }),
            (e.getInstance = function () {
              return (
                this.instance_ || (this.instance_ = new e()), this.instance_
              );
            }),
            (e.instance_ = null),
            e
          );
        })(),
        d = function (e, t) {
          for (var r = 0, a = Object.keys(t); r < a.length; r++) {
            var n = a[r];
            Object.defineProperty(e, n, {
              value: t[n],
              enumerable: !1,
              writable: !1,
              configurable: !0,
            });
          }
          return e;
        },
        u = function (e) {
          return (e && e.ownerDocument && e.ownerDocument.defaultView) || s;
        },
        p = b(0, 0, 0, 0);
      function h(e) {
        return parseFloat(e) || 0;
      }
      function m(e) {
        for (var t = [], r = 1; r < arguments.length; r++)
          t[r - 1] = arguments[r];
        return t.reduce(function (t, r) {
          return t + h(e["border-" + r + "-width"]);
        }, 0);
      }
      var f =
        "undefined" != typeof SVGGraphicsElement
          ? function (e) {
              return e instanceof u(e).SVGGraphicsElement;
            }
          : function (e) {
              return (
                e instanceof u(e).SVGElement && "function" == typeof e.getBBox
              );
            };
      function b(e, t, r, a) {
        return { x: e, y: t, width: r, height: a };
      }
      var y = (function () {
          function e(e) {
            (this.broadcastWidth = 0),
              (this.broadcastHeight = 0),
              (this.contentRect_ = b(0, 0, 0, 0)),
              (this.target = e);
          }
          return (
            (e.prototype.isActive = function () {
              var e = (function (e) {
                if (!n) return p;
                if (f(e)) {
                  var t;
                  return b(0, 0, (t = e.getBBox()).width, t.height);
                }
                return (function (e) {
                  var t = e.clientWidth,
                    r = e.clientHeight;
                  if (!t && !r) return p;
                  var a = u(e).getComputedStyle(e),
                    n = (function (e) {
                      for (
                        var t = {},
                          r = 0,
                          a = ["top", "right", "bottom", "left"];
                        r < a.length;
                        r++
                      ) {
                        var n = a[r],
                          s = e["padding-" + n];
                        t[n] = h(s);
                      }
                      return t;
                    })(a),
                    s = n.left + n.right,
                    o = n.top + n.bottom,
                    i = h(a.width),
                    l = h(a.height);
                  if (
                    ("border-box" === a.boxSizing &&
                      (Math.round(i + s) !== t &&
                        (i -= m(a, "left", "right") + s),
                      Math.round(l + o) !== r &&
                        (l -= m(a, "top", "bottom") + o)),
                    e !== u(e).document.documentElement)
                  ) {
                    var c = Math.round(i + s) - t,
                      d = Math.round(l + o) - r;
                    1 !== Math.abs(c) && (i -= c),
                      1 !== Math.abs(d) && (l -= d);
                  }
                  return b(n.left, n.top, i, l);
                })(e);
              })(this.target);
              return (
                (this.contentRect_ = e),
                e.width !== this.broadcastWidth ||
                  e.height !== this.broadcastHeight
              );
            }),
            (e.prototype.broadcastRect = function () {
              var e = this.contentRect_;
              return (
                (this.broadcastWidth = e.width),
                (this.broadcastHeight = e.height),
                e
              );
            }),
            e
          );
        })(),
        x = function (e, t) {
          var r,
            a,
            n,
            s,
            o,
            i =
              ((r = t.x),
              (a = t.y),
              (n = t.width),
              (s = t.height),
              d(
                (o = Object.create(
                  ("undefined" != typeof DOMRectReadOnly
                    ? DOMRectReadOnly
                    : Object
                  ).prototype
                )),
                {
                  x: r,
                  y: a,
                  width: n,
                  height: s,
                  top: a,
                  right: r + n,
                  bottom: s + a,
                  left: r,
                }
              ),
              o);
          d(this, { target: e, contentRect: i });
        },
        v = (function () {
          function e(e, t, r) {
            if (
              ((this.activeObservations_ = []),
              (this.observations_ = new a()),
              "function" != typeof e)
            )
              throw TypeError(
                "The callback provided as parameter 1 is not a function."
              );
            (this.callback_ = e),
              (this.controller_ = t),
              (this.callbackCtx_ = r);
          }
          return (
            (e.prototype.observe = function (e) {
              if (!arguments.length)
                throw TypeError("1 argument required, but only 0 present.");
              if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(e instanceof u(e).Element))
                  throw TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) ||
                  (t.set(e, new y(e)),
                  this.controller_.addObserver(this),
                  this.controller_.refresh());
              }
            }),
            (e.prototype.unobserve = function (e) {
              if (!arguments.length)
                throw TypeError("1 argument required, but only 0 present.");
              if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(e instanceof u(e).Element))
                  throw TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) &&
                  (t.delete(e),
                  t.size || this.controller_.removeObserver(this));
              }
            }),
            (e.prototype.disconnect = function () {
              this.clearActive(),
                this.observations_.clear(),
                this.controller_.removeObserver(this);
            }),
            (e.prototype.gatherActive = function () {
              var e = this;
              this.clearActive(),
                this.observations_.forEach(function (t) {
                  t.isActive() && e.activeObservations_.push(t);
                });
            }),
            (e.prototype.broadcastActive = function () {
              if (this.hasActive()) {
                var e = this.callbackCtx_,
                  t = this.activeObservations_.map(function (e) {
                    return new x(e.target, e.broadcastRect());
                  });
                this.callback_.call(e, t, e), this.clearActive();
              }
            }),
            (e.prototype.clearActive = function () {
              this.activeObservations_.splice(0);
            }),
            (e.prototype.hasActive = function () {
              return this.activeObservations_.length > 0;
            }),
            e
          );
        })(),
        g = "undefined" != typeof WeakMap ? new WeakMap() : new a(),
        E = function e(t) {
          if (!(this instanceof e))
            throw TypeError("Cannot call a class as a function.");
          if (!arguments.length)
            throw TypeError("1 argument required, but only 0 present.");
          var r = new v(t, c.getInstance(), this);
          g.set(this, r);
        };
      ["observe", "unobserve", "disconnect"].forEach(function (e) {
        E.prototype[e] = function () {
          var t;
          return (t = g.get(this))[e].apply(t, arguments);
        };
      });
      let k = void 0 !== s.ResizeObserver ? s.ResizeObserver : E;
    },
    59725: (e) => {
      e.exports = function (e, t, r, a) {
        var n = r ? r.call(a, e, t) : void 0;
        if (void 0 !== n) return !!n;
        if (e === t) return !0;
        if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
        var s = Object.keys(e),
          o = Object.keys(t);
        if (s.length !== o.length) return !1;
        for (
          var i = Object.prototype.hasOwnProperty.bind(t), l = 0;
          l < s.length;
          l++
        ) {
          var c = s[l];
          if (!i(c)) return !1;
          var d = e[c],
            u = t[c];
          if (
            !1 === (n = r ? r.call(a, d, u, c) : void 0) ||
            (void 0 === n && d !== u)
          )
            return !1;
        }
        return !0;
      };
    },
    65285: (e, t, r) => {
      "use strict";
      r.d(t, { AH: () => tc, i7: () => tp, I4: () => tu });
      var a = function () {
        return (a =
          Object.assign ||
          function (e) {
            for (var t, r = 1, a = arguments.length; r < a; r++)
              for (var n in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
          }).apply(this, arguments);
      };
      function n(e, t, r) {
        if (r || 2 == arguments.length)
          for (var a, n = 0, s = t.length; n < s; n++)
            (!a && n in t) ||
              (a || (a = Array.prototype.slice.call(t, 0, n)), (a[n] = t[n]));
        return e.concat(a || Array.prototype.slice.call(t));
      }
      Object.create,
        Object.create,
        "function" == typeof SuppressedError && SuppressedError;
      var s = r(12115),
        o = r(59725),
        i = r.n(o),
        l = "-ms-",
        c = "-moz-",
        d = "-webkit-",
        u = "comm",
        p = "rule",
        h = "decl",
        m = "@keyframes",
        f = Math.abs,
        b = String.fromCharCode,
        y = Object.assign;
      function x(e, t) {
        return (e = t.exec(e)) ? e[0] : e;
      }
      function v(e, t, r) {
        return e.replace(t, r);
      }
      function g(e, t, r) {
        return e.indexOf(t, r);
      }
      function E(e, t) {
        return 0 | e.charCodeAt(t);
      }
      function k(e, t, r) {
        return e.slice(t, r);
      }
      function C(e) {
        return e.length;
      }
      function w(e, t) {
        return t.push(e), e;
      }
      function T(e, t) {
        return e.filter(function (e) {
          return !x(e, t);
        });
      }
      var S = 1,
        A = 1,
        U = 0,
        B = 0,
        M = 0,
        P = "";
      function D(e, t, r, a, n, s, o, i) {
        return {
          value: e,
          root: t,
          parent: r,
          type: a,
          props: n,
          children: s,
          line: S,
          column: A,
          length: o,
          return: "",
          siblings: i,
        };
      }
      function F(e, t) {
        return y(
          D("", null, null, "", null, null, 0, e.siblings),
          e,
          { length: -e.length },
          t
        );
      }
      function I(e) {
        for (; e.root; ) e = F(e.root, { children: [e] });
        w(e, e.siblings);
      }
      function O() {
        return (M = B < U ? E(P, B++) : 0), A++, 10 === M && ((A = 1), S++), M;
      }
      function R() {
        return E(P, B);
      }
      function L(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function N(e) {
        var t, r;
        return ((t = B - 1),
        (r = (function e(t) {
          for (; O(); )
            switch (M) {
              case t:
                return B;
              case 34:
              case 39:
                34 !== t && 39 !== t && e(M);
                break;
              case 40:
                41 === t && e(t);
                break;
              case 92:
                O();
            }
          return B;
        })(91 === e ? e + 2 : 40 === e ? e + 1 : e)),
        k(P, t, r)).trim();
      }
      function z(e, t) {
        for (var r = "", a = 0; a < e.length; a++) r += t(e[a], a, e, t) || "";
        return r;
      }
      function K(e, t, r, a) {
        switch (e.type) {
          case "@layer":
            if (e.children.length) break;
          case "@import":
          case h:
            return (e.return = e.return || e.value);
          case u:
            return "";
          case m:
            return (e.return = e.value + "{" + z(e.children, a) + "}");
          case p:
            if (!C((e.value = e.props.join(",")))) return "";
        }
        return C((r = z(e.children, a)))
          ? (e.return = e.value + "{" + r + "}")
          : "";
      }
      function V(e, t, r, a) {
        if (e.length > -1 && !e.return)
          switch (e.type) {
            case h:
              e.return = (function e(t, r, a) {
                var n;
                switch (
                  ((n = r),
                  45 ^ E(t, 0)
                    ? (((((((n << 2) ^ E(t, 0)) << 2) ^ E(t, 1)) << 2) ^
                        E(t, 2)) <<
                        2) ^
                      E(t, 3)
                    : 0)
                ) {
                  case 5103:
                    return d + "print-" + t + t;
                  case 5737:
                  case 4201:
                  case 3177:
                  case 3433:
                  case 1641:
                  case 4457:
                  case 2921:
                  case 5572:
                  case 6356:
                  case 5844:
                  case 3191:
                  case 6645:
                  case 3005:
                  case 6391:
                  case 5879:
                  case 5623:
                  case 6135:
                  case 4599:
                  case 4855:
                  case 4215:
                  case 6389:
                  case 5109:
                  case 5365:
                  case 5621:
                  case 3829:
                    return d + t + t;
                  case 4789:
                    return c + t + t;
                  case 5349:
                  case 4246:
                  case 4810:
                  case 6968:
                  case 2756:
                    return d + t + c + t + l + t + t;
                  case 5936:
                    switch (E(t, r + 11)) {
                      case 114:
                        return d + t + l + v(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
                      case 108:
                        return (
                          d + t + l + v(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t
                        );
                      case 45:
                        return d + t + l + v(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
                    }
                  case 6828:
                  case 4268:
                  case 2903:
                    return d + t + l + t + t;
                  case 6165:
                    return d + t + l + "flex-" + t + t;
                  case 5187:
                    return (
                      d +
                      t +
                      v(t, /(\w+).+(:[^]+)/, d + "box-$1$2" + l + "flex-$1$2") +
                      t
                    );
                  case 5443:
                    return (
                      d +
                      t +
                      l +
                      "flex-item-" +
                      v(t, /flex-|-self/g, "") +
                      (x(t, /flex-|baseline/)
                        ? ""
                        : l + "grid-row-" + v(t, /flex-|-self/g, "")) +
                      t
                    );
                  case 4675:
                    return (
                      d +
                      t +
                      l +
                      "flex-line-pack" +
                      v(t, /align-content|flex-|-self/g, "") +
                      t
                    );
                  case 5548:
                    return d + t + l + v(t, "shrink", "negative") + t;
                  case 5292:
                    return d + t + l + v(t, "basis", "preferred-size") + t;
                  case 6060:
                    return (
                      d +
                      "box-" +
                      v(t, "-grow", "") +
                      d +
                      t +
                      l +
                      v(t, "grow", "positive") +
                      t
                    );
                  case 4554:
                    return d + v(t, /([^-])(transform)/g, "$1" + d + "$2") + t;
                  case 6187:
                    return (
                      v(
                        v(
                          v(t, /(zoom-|grab)/, d + "$1"),
                          /(image-set)/,
                          d + "$1"
                        ),
                        t,
                        ""
                      ) + t
                    );
                  case 5495:
                  case 3959:
                    return v(t, /(image-set\([^]*)/, d + "$1$`$1");
                  case 4968:
                    return (
                      v(
                        v(
                          t,
                          /(.+:)(flex-)?(.*)/,
                          d + "box-pack:$3" + l + "flex-pack:$3"
                        ),
                        /s.+-b[^;]+/,
                        "justify"
                      ) +
                      d +
                      t +
                      t
                    );
                  case 4200:
                    if (!x(t, /flex-|baseline/))
                      return l + "grid-column-align" + k(t, r) + t;
                    break;
                  case 2592:
                  case 3360:
                    return l + v(t, "template-", "") + t;
                  case 4384:
                  case 3616:
                    if (
                      a &&
                      a.some(function (e, t) {
                        return (r = t), x(e.props, /grid-\w+-end/);
                      })
                    )
                      return ~g(t + (a = a[r].value), "span", 0)
                        ? t
                        : l +
                            v(t, "-start", "") +
                            t +
                            l +
                            "grid-row-span:" +
                            (~g(a, "span", 0)
                              ? x(a, /\d+/)
                              : +x(a, /\d+/) - +x(t, /\d+/)) +
                            ";";
                    return l + v(t, "-start", "") + t;
                  case 4896:
                  case 4128:
                    return a &&
                      a.some(function (e) {
                        return x(e.props, /grid-\w+-start/);
                      })
                      ? t
                      : l + v(v(t, "-end", "-span"), "span ", "") + t;
                  case 4095:
                  case 3583:
                  case 4068:
                  case 2532:
                    return v(t, /(.+)-inline(.+)/, d + "$1$2") + t;
                  case 8116:
                  case 7059:
                  case 5753:
                  case 5535:
                  case 5445:
                  case 5701:
                  case 4933:
                  case 4677:
                  case 5533:
                  case 5789:
                  case 5021:
                  case 4765:
                    if (C(t) - 1 - r > 6)
                      switch (E(t, r + 1)) {
                        case 109:
                          if (45 !== E(t, r + 4)) break;
                        case 102:
                          return (
                            v(
                              t,
                              /(.+:)(.+)-([^]+)/,
                              "$1" +
                                d +
                                "$2-$3$1" +
                                c +
                                (108 == E(t, r + 3) ? "$3" : "$2-$3")
                            ) + t
                          );
                        case 115:
                          return ~g(t, "stretch", 0)
                            ? e(v(t, "stretch", "fill-available"), r, a) + t
                            : t;
                      }
                    break;
                  case 5152:
                  case 5920:
                    return v(
                      t,
                      /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
                      function (e, r, a, n, s, o, i) {
                        return (
                          l +
                          r +
                          ":" +
                          a +
                          i +
                          (n ? l + r + "-span:" + (s ? o : +o - +a) + i : "") +
                          t
                        );
                      }
                    );
                  case 4949:
                    if (121 === E(t, r + 6)) return v(t, ":", ":" + d) + t;
                    break;
                  case 6444:
                    switch (E(t, 45 === E(t, 14) ? 18 : 11)) {
                      case 120:
                        return (
                          v(
                            t,
                            /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
                            "$1" +
                              d +
                              (45 === E(t, 14) ? "inline-" : "") +
                              "box$3$1" +
                              d +
                              "$2$3$1" +
                              l +
                              "$2box$3"
                          ) + t
                        );
                      case 100:
                        return v(t, ":", ":" + l) + t;
                    }
                    break;
                  case 5719:
                  case 2647:
                  case 2135:
                  case 3927:
                  case 2391:
                    return v(t, "scroll-", "scroll-snap-") + t;
                }
                return t;
              })(e.value, e.length, r);
              return;
            case m:
              return z([F(e, { value: v(e.value, "@", "@" + d) })], a);
            case p:
              if (e.length) {
                var n, s;
                return (
                  (n = r = e.props),
                  (s = function (t) {
                    switch (x(t, (a = /(::plac\w+|:read-\w+)/))) {
                      case ":read-only":
                      case ":read-write":
                        I(
                          F(e, { props: [v(t, /:(read-\w+)/, ":" + c + "$1")] })
                        ),
                          I(F(e, { props: [t] })),
                          y(e, { props: T(r, a) });
                        break;
                      case "::placeholder":
                        I(
                          F(e, {
                            props: [v(t, /:(plac\w+)/, ":" + d + "input-$1")],
                          })
                        ),
                          I(
                            F(e, {
                              props: [v(t, /:(plac\w+)/, ":" + c + "$1")],
                            })
                          ),
                          I(
                            F(e, {
                              props: [v(t, /:(plac\w+)/, l + "input-$1")],
                            })
                          ),
                          I(F(e, { props: [t] })),
                          y(e, { props: T(r, a) });
                    }
                    return "";
                  }),
                  n.map(s).join("")
                );
              }
          }
      }
      function H(e, t, r, a, n, s, o, i, l, c, d, u) {
        for (
          var h = n - 1,
            m = 0 === n ? s : [""],
            b = m.length,
            y = 0,
            x = 0,
            g = 0;
          y < a;
          ++y
        )
          for (
            var E = 0, C = k(e, h + 1, (h = f((x = o[y])))), w = e;
            E < b;
            ++E
          )
            (w = (x > 0 ? m[E] + " " + C : v(C, /&\f/g, m[E])).trim()) &&
              (l[g++] = w);
        return D(e, t, r, 0 === n ? p : i, l, c, d, u);
      }
      function j(e, t, r, a, n) {
        return D(e, t, r, h, k(e, 0, a), k(e, a + 1, -1), a, n);
      }
      var _ = {
          animationIterationCount: 1,
          aspectRatio: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        G = r(87358),
        W =
          (void 0 !== G &&
            void 0 !== G.env &&
            (G.env.REACT_APP_SC_ATTR || G.env.SC_ATTR)) ||
          "data-styled",
        q = "active",
        $ = "data-styled-version",
        X = "6.1.19",
        Z = "/*!sc*/\n",
        J = "undefined" != typeof window && "undefined" != typeof document,
        Y = !!("boolean" == typeof SC_DISABLE_SPEEDY
          ? SC_DISABLE_SPEEDY
          : void 0 !== G &&
            void 0 !== G.env &&
            void 0 !== G.env.REACT_APP_SC_DISABLE_SPEEDY &&
            "" !== G.env.REACT_APP_SC_DISABLE_SPEEDY
          ? "false" !== G.env.REACT_APP_SC_DISABLE_SPEEDY &&
            G.env.REACT_APP_SC_DISABLE_SPEEDY
          : void 0 !== G &&
            void 0 !== G.env &&
            void 0 !== G.env.SC_DISABLE_SPEEDY &&
            "" !== G.env.SC_DISABLE_SPEEDY &&
            "false" !== G.env.SC_DISABLE_SPEEDY &&
            G.env.SC_DISABLE_SPEEDY),
        Q = Object.freeze([]),
        ee = Object.freeze({}),
        et = new Set([
          "a",
          "abbr",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "base",
          "bdi",
          "bdo",
          "big",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "cite",
          "code",
          "col",
          "colgroup",
          "data",
          "datalist",
          "dd",
          "del",
          "details",
          "dfn",
          "dialog",
          "div",
          "dl",
          "dt",
          "em",
          "embed",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "keygen",
          "label",
          "legend",
          "li",
          "link",
          "main",
          "map",
          "mark",
          "menu",
          "menuitem",
          "meta",
          "meter",
          "nav",
          "noscript",
          "object",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "param",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "script",
          "section",
          "select",
          "small",
          "source",
          "span",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "tr",
          "track",
          "u",
          "ul",
          "use",
          "var",
          "video",
          "wbr",
          "circle",
          "clipPath",
          "defs",
          "ellipse",
          "foreignObject",
          "g",
          "image",
          "line",
          "linearGradient",
          "marker",
          "mask",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "stop",
          "svg",
          "text",
          "tspan",
        ]),
        er = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
        ea = /(^-|-$)/g;
      function en(e) {
        return e.replace(er, "-").replace(ea, "");
      }
      var es = /(a)(d)/gi,
        eo = function (e) {
          return String.fromCharCode(e + (e > 25 ? 39 : 97));
        };
      function ei(e) {
        var t,
          r = "";
        for (t = Math.abs(e); t > 52; t = (t / 52) | 0) r = eo(t % 52) + r;
        return (eo(t % 52) + r).replace(es, "$1-$2");
      }
      var el,
        ec = function (e, t) {
          for (var r = t.length; r; ) e = (33 * e) ^ t.charCodeAt(--r);
          return e;
        },
        ed = function (e) {
          return ec(5381, e);
        };
      function eu(e) {
        return "string" == typeof e;
      }
      var ep = "function" == typeof Symbol && Symbol.for,
        eh = ep ? Symbol.for("react.memo") : 60115,
        em = ep ? Symbol.for("react.forward_ref") : 60112,
        ef = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        eb = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        ey = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        ex =
          (((el = {})[em] = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
          }),
          (el[eh] = ey),
          el);
      function ev(e) {
        return ("type" in e && e.type.$$typeof) === eh
          ? ey
          : "$$typeof" in e
          ? ex[e.$$typeof]
          : ef;
      }
      var eg = Object.defineProperty,
        eE = Object.getOwnPropertyNames,
        ek = Object.getOwnPropertySymbols,
        eC = Object.getOwnPropertyDescriptor,
        ew = Object.getPrototypeOf,
        eT = Object.prototype;
      function eS(e) {
        return "function" == typeof e;
      }
      function eA(e) {
        return "object" == typeof e && "styledComponentId" in e;
      }
      function eU(e, t) {
        return e && t ? "".concat(e, " ").concat(t) : e || t || "";
      }
      function eB(e, t) {
        if (0 === e.length) return "";
        for (var r = e[0], a = 1; a < e.length; a++) r += t ? t + e[a] : e[a];
        return r;
      }
      function eM(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          e.constructor.name === Object.name &&
          !("props" in e && e.$$typeof)
        );
      }
      function eP(e, t) {
        Object.defineProperty(e, "toString", { value: t });
      }
      function eD(e) {
        for (var t = [], r = 1; r < arguments.length; r++)
          t[r - 1] = arguments[r];
        return Error(
          "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
            .concat(e, " for more information.")
            .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
        );
      }
      var eF = (function () {
          function e(e) {
            (this.groupSizes = new Uint32Array(512)),
              (this.length = 512),
              (this.tag = e);
          }
          return (
            (e.prototype.indexOfGroup = function (e) {
              for (var t = 0, r = 0; r < e; r++) t += this.groupSizes[r];
              return t;
            }),
            (e.prototype.insertRules = function (e, t) {
              if (e >= this.groupSizes.length) {
                for (var r = this.groupSizes, a = r.length, n = a; e >= n; )
                  if ((n <<= 1) < 0) throw eD(16, "".concat(e));
                (this.groupSizes = new Uint32Array(n)),
                  this.groupSizes.set(r),
                  (this.length = n);
                for (var s = a; s < n; s++) this.groupSizes[s] = 0;
              }
              for (
                var o = this.indexOfGroup(e + 1), i = ((s = 0), t.length);
                s < i;
                s++
              )
                this.tag.insertRule(o, t[s]) && (this.groupSizes[e]++, o++);
            }),
            (e.prototype.clearGroup = function (e) {
              if (e < this.length) {
                var t = this.groupSizes[e],
                  r = this.indexOfGroup(e),
                  a = r + t;
                this.groupSizes[e] = 0;
                for (var n = r; n < a; n++) this.tag.deleteRule(r);
              }
            }),
            (e.prototype.getGroup = function (e) {
              var t = "";
              if (e >= this.length || 0 === this.groupSizes[e]) return t;
              for (
                var r = this.groupSizes[e],
                  a = this.indexOfGroup(e),
                  n = a + r,
                  s = a;
                s < n;
                s++
              )
                t += "".concat(this.tag.getRule(s)).concat(Z);
              return t;
            }),
            e
          );
        })(),
        eI = new Map(),
        eO = new Map(),
        eR = 1,
        eL = function (e) {
          if (eI.has(e)) return eI.get(e);
          for (; eO.has(eR); ) eR++;
          var t = eR++;
          return eI.set(e, t), eO.set(t, e), t;
        },
        eN = function (e, t) {
          (eR = t + 1), eI.set(e, t), eO.set(t, e);
        },
        ez = "style[".concat(W, "][").concat($, '="').concat(X, '"]'),
        eK = new RegExp(
          "^".concat(W, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
        ),
        eV = function (e, t, r) {
          for (var a, n = r.split(","), s = 0, o = n.length; s < o; s++)
            (a = n[s]) && e.registerName(t, a);
        },
        eH = function (e, t) {
          for (
            var r,
              a = (null !== (r = t.textContent) && void 0 !== r ? r : "").split(
                Z
              ),
              n = [],
              s = 0,
              o = a.length;
            s < o;
            s++
          ) {
            var i = a[s].trim();
            if (i) {
              var l = i.match(eK);
              if (l) {
                var c = 0 | parseInt(l[1], 10),
                  d = l[2];
                0 !== c &&
                  (eN(d, c), eV(e, d, l[3]), e.getTag().insertRules(c, n)),
                  (n.length = 0);
              } else n.push(i);
            }
          }
        },
        ej = function (e) {
          for (
            var t = document.querySelectorAll(ez), r = 0, a = t.length;
            r < a;
            r++
          ) {
            var n = t[r];
            n &&
              n.getAttribute(W) !== q &&
              (eH(e, n), n.parentNode && n.parentNode.removeChild(n));
          }
        },
        e_ = function (e) {
          var t,
            a = document.head,
            n = e || a,
            s = document.createElement("style"),
            o = (t = Array.from(n.querySelectorAll("style[".concat(W, "]"))))[
              t.length - 1
            ],
            i = void 0 !== o ? o.nextSibling : null;
          s.setAttribute(W, q), s.setAttribute($, X);
          var l = r.nc;
          return l && s.setAttribute("nonce", l), n.insertBefore(s, i), s;
        },
        eG = (function () {
          function e(e) {
            (this.element = e_(e)),
              this.element.appendChild(document.createTextNode("")),
              (this.sheet = (function (e) {
                if (e.sheet) return e.sheet;
                for (
                  var t = document.styleSheets, r = 0, a = t.length;
                  r < a;
                  r++
                ) {
                  var n = t[r];
                  if (n.ownerNode === e) return n;
                }
                throw eD(17);
              })(this.element)),
              (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              try {
                return this.sheet.insertRule(t, e), this.length++, !0;
              } catch (e) {
                return !1;
              }
            }),
            (e.prototype.deleteRule = function (e) {
              this.sheet.deleteRule(e), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              var t = this.sheet.cssRules[e];
              return t && t.cssText ? t.cssText : "";
            }),
            e
          );
        })(),
        eW = (function () {
          function e(e) {
            (this.element = e_(e)),
              (this.nodes = this.element.childNodes),
              (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              if (e <= this.length && e >= 0) {
                var r = document.createTextNode(t);
                return (
                  this.element.insertBefore(r, this.nodes[e] || null),
                  this.length++,
                  !0
                );
              }
              return !1;
            }),
            (e.prototype.deleteRule = function (e) {
              this.element.removeChild(this.nodes[e]), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              return e < this.length ? this.nodes[e].textContent : "";
            }),
            e
          );
        })(),
        eq = (function () {
          function e(e) {
            (this.rules = []), (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              return (
                e <= this.length &&
                (this.rules.splice(e, 0, t), this.length++, !0)
              );
            }),
            (e.prototype.deleteRule = function (e) {
              this.rules.splice(e, 1), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              return e < this.length ? this.rules[e] : "";
            }),
            e
          );
        })(),
        e$ = J,
        eX = { isServer: !J, useCSSOMInjection: !Y },
        eZ = (function () {
          function e(e, t, r) {
            void 0 === e && (e = ee), void 0 === t && (t = {});
            var n = this;
            (this.options = a(a({}, eX), e)),
              (this.gs = t),
              (this.names = new Map(r)),
              (this.server = !!e.isServer),
              !this.server && J && e$ && ((e$ = !1), ej(this)),
              eP(this, function () {
                return (function (e) {
                  for (
                    var t = e.getTag(), r = t.length, a = "", n = 0;
                    n < r;
                    n++
                  )
                    (function (r) {
                      var n = eO.get(r);
                      if (void 0 !== n) {
                        var s = e.names.get(n),
                          o = t.getGroup(r);
                        if (void 0 !== s && s.size && 0 !== o.length) {
                          var i = ""
                              .concat(W, ".g")
                              .concat(r, '[id="')
                              .concat(n, '"]'),
                            l = "";
                          void 0 !== s &&
                            s.forEach(function (e) {
                              e.length > 0 && (l += "".concat(e, ","));
                            }),
                            (a += ""
                              .concat(o)
                              .concat(i, '{content:"')
                              .concat(l, '"}')
                              .concat(Z));
                        }
                      }
                    })(n);
                  return a;
                })(n);
              });
          }
          return (
            (e.registerId = function (e) {
              return eL(e);
            }),
            (e.prototype.rehydrate = function () {
              !this.server && J && ej(this);
            }),
            (e.prototype.reconstructWithOptions = function (t, r) {
              return (
                void 0 === r && (r = !0),
                new e(
                  a(a({}, this.options), t),
                  this.gs,
                  (r && this.names) || void 0
                )
              );
            }),
            (e.prototype.allocateGSInstance = function (e) {
              return (this.gs[e] = (this.gs[e] || 0) + 1);
            }),
            (e.prototype.getTag = function () {
              var e, t, r;
              return (
                this.tag ||
                (this.tag =
                  ((t = (e = this.options).useCSSOMInjection),
                  (r = e.target),
                  new eF(e.isServer ? new eq(r) : t ? new eG(r) : new eW(r))))
              );
            }),
            (e.prototype.hasNameForId = function (e, t) {
              return this.names.has(e) && this.names.get(e).has(t);
            }),
            (e.prototype.registerName = function (e, t) {
              if ((eL(e), this.names.has(e))) this.names.get(e).add(t);
              else {
                var r = new Set();
                r.add(t), this.names.set(e, r);
              }
            }),
            (e.prototype.insertRules = function (e, t, r) {
              this.registerName(e, t), this.getTag().insertRules(eL(e), r);
            }),
            (e.prototype.clearNames = function (e) {
              this.names.has(e) && this.names.get(e).clear();
            }),
            (e.prototype.clearRules = function (e) {
              this.getTag().clearGroup(eL(e)), this.clearNames(e);
            }),
            (e.prototype.clearTag = function () {
              this.tag = void 0;
            }),
            e
          );
        })(),
        eJ = /&/g,
        eY = /^\s*\/\/.*$/gm;
      function eQ(e) {
        var t,
          r,
          a,
          n = void 0 === e ? ee : e,
          s = n.options,
          o = void 0 === s ? ee : s,
          i = n.plugins,
          l = void 0 === i ? Q : i,
          c = function (e, a, n) {
            return n.startsWith(r) &&
              n.endsWith(r) &&
              n.replaceAll(r, "").length > 0
              ? ".".concat(t)
              : e;
          },
          d = l.slice();
        d.push(function (e) {
          e.type === p &&
            e.value.includes("&") &&
            (e.props[0] = e.props[0].replace(eJ, r).replace(a, c));
        }),
          o.prefix && d.push(V),
          d.push(K);
        var h = function (e, n, s, i) {
          void 0 === n && (n = ""),
            void 0 === s && (s = ""),
            void 0 === i && (i = "&"),
            (t = i),
            (r = n),
            (a = RegExp("\\".concat(r, "\\b"), "g"));
          var l,
            c,
            p,
            h,
            m,
            y,
            x = e.replace(eY, ""),
            T =
              ((m = (function e(t, r, a, n, s, o, i, l, c) {
                for (
                  var d,
                    p = 0,
                    h = 0,
                    m = i,
                    y = 0,
                    x = 0,
                    T = 0,
                    U = 1,
                    F = 1,
                    I = 1,
                    z = 0,
                    K = "",
                    V = s,
                    _ = o,
                    G = n,
                    W = K;
                  F;

                )
                  switch (((T = z), (z = O()))) {
                    case 40:
                      if (108 != T && 58 == E(W, m - 1)) {
                        -1 !=
                          g(
                            (W += v(N(z), "&", "&\f")),
                            "&\f",
                            f(p ? l[p - 1] : 0)
                          ) && (I = -1);
                        break;
                      }
                    case 34:
                    case 39:
                    case 91:
                      W += N(z);
                      break;
                    case 9:
                    case 10:
                    case 13:
                    case 32:
                      W += (function (e) {
                        for (; (M = R()); )
                          if (M < 33) O();
                          else break;
                        return L(e) > 2 || L(M) > 3 ? "" : " ";
                      })(T);
                      break;
                    case 92:
                      W += (function (e, t) {
                        for (
                          var r;
                          --t &&
                          O() &&
                          !(M < 48) &&
                          !(M > 102) &&
                          (!(M > 57) || !(M < 65)) &&
                          (!(M > 70) || !(M < 97));

                        );
                        return (
                          (r = B + (t < 6 && 32 == R() && 32 == O())),
                          k(P, e, r)
                        );
                      })(B - 1, 7);
                      continue;
                    case 47:
                      switch (R()) {
                        case 42:
                        case 47:
                          w(
                            D(
                              (d = (function (e, t) {
                                for (; O(); )
                                  if (e + M === 57) break;
                                  else if (e + M === 84 && 47 === R()) break;
                                return (
                                  "/*" +
                                  k(P, t, B - 1) +
                                  "*" +
                                  b(47 === e ? e : O())
                                );
                              })(O(), B)),
                              r,
                              a,
                              u,
                              b(M),
                              k(d, 2, -2),
                              0,
                              c
                            ),
                            c
                          );
                          break;
                        default:
                          W += "/";
                      }
                      break;
                    case 123 * U:
                      l[p++] = C(W) * I;
                    case 125 * U:
                    case 59:
                    case 0:
                      switch (z) {
                        case 0:
                        case 125:
                          F = 0;
                        case 59 + h:
                          -1 == I && (W = v(W, /\f/g, "")),
                            x > 0 &&
                              C(W) - m &&
                              w(
                                x > 32
                                  ? j(W + ";", n, a, m - 1, c)
                                  : j(v(W, " ", "") + ";", n, a, m - 2, c),
                                c
                              );
                          break;
                        case 59:
                          W += ";";
                        default:
                          if (
                            (w(
                              (G = H(
                                W,
                                r,
                                a,
                                p,
                                h,
                                s,
                                l,
                                K,
                                (V = []),
                                (_ = []),
                                m,
                                o
                              )),
                              o
                            ),
                            123 === z)
                          ) {
                            if (0 === h) e(W, r, G, G, V, o, m, l, _);
                            else
                              switch (99 === y && 110 === E(W, 3) ? 100 : y) {
                                case 100:
                                case 108:
                                case 109:
                                case 115:
                                  e(
                                    t,
                                    G,
                                    G,
                                    n &&
                                      w(
                                        H(
                                          t,
                                          G,
                                          G,
                                          0,
                                          0,
                                          s,
                                          l,
                                          K,
                                          s,
                                          (V = []),
                                          m,
                                          _
                                        ),
                                        _
                                      ),
                                    s,
                                    _,
                                    m,
                                    l,
                                    n ? V : _
                                  );
                                  break;
                                default:
                                  e(W, G, G, G, [""], _, 0, l, _);
                              }
                          }
                      }
                      (p = h = x = 0), (U = I = 1), (K = W = ""), (m = i);
                      break;
                    case 58:
                      (m = 1 + C(W)), (x = T);
                    default:
                      if (U < 1) {
                        if (123 == z) --U;
                        else if (
                          125 == z &&
                          0 == U++ &&
                          125 ==
                            ((M = B > 0 ? E(P, --B) : 0),
                            A--,
                            10 === M && ((A = 1), S--),
                            M)
                        )
                          continue;
                      }
                      switch (((W += b(z)), z * U)) {
                        case 38:
                          I = h > 0 ? 1 : ((W += "\f"), -1);
                          break;
                        case 44:
                          (l[p++] = (C(W) - 1) * I), (I = 1);
                          break;
                        case 64:
                          45 === R() && (W += N(O())),
                            (y = R()),
                            (h = m =
                              C(
                                (K = W +=
                                  (function (e) {
                                    for (; !L(R()); ) O();
                                    return k(P, e, B);
                                  })(B))
                              )),
                            z++;
                          break;
                        case 45:
                          45 === T && 2 == C(W) && (U = 0);
                      }
                  }
                return o;
              })(
                "",
                null,
                null,
                null,
                [""],
                ((p = h =
                  s || n
                    ? "".concat(s, " ").concat(n, " { ").concat(x, " }")
                    : x),
                (S = A = 1),
                (U = C((P = p))),
                (B = 0),
                (h = [])),
                0,
                [0],
                h
              )),
              (P = ""),
              m);
          o.namespace &&
            (T = (function e(t, r) {
              return t.map(function (t) {
                return (
                  "rule" === t.type &&
                    ((t.value = "".concat(r, " ").concat(t.value)),
                    (t.value = t.value.replaceAll(",", ",".concat(r, " "))),
                    (t.props = t.props.map(function (e) {
                      return "".concat(r, " ").concat(e);
                    }))),
                  Array.isArray(t.children) &&
                    "@keyframes" !== t.type &&
                    (t.children = e(t.children, r)),
                  t
                );
              });
            })(T, o.namespace));
          var F = [];
          return (
            z(
              T,
              ((c = (l = d.concat(
                ((y = function (e) {
                  return F.push(e);
                }),
                function (e) {
                  !e.root && (e = e.return) && y(e);
                })
              )).length),
              function (e, t, r, a) {
                for (var n = "", s = 0; s < c; s++) n += l[s](e, t, r, a) || "";
                return n;
              })
            ),
            F
          );
        };
        return (
          (h.hash = l.length
            ? l
                .reduce(function (e, t) {
                  return t.name || eD(15), ec(e, t.name);
                }, 5381)
                .toString()
            : ""),
          h
        );
      }
      var e0 = new eZ(),
        e1 = eQ(),
        e2 = s.createContext({
          shouldForwardProp: void 0,
          styleSheet: e0,
          stylis: e1,
        }),
        e3 = (e2.Consumer, s.createContext(void 0));
      function e7() {
        return (0, s.useContext)(e2);
      }
      function e6(e) {
        var t = (0, s.useState)(e.stylisPlugins),
          r = t[0],
          a = t[1],
          n = e7().styleSheet,
          o = (0, s.useMemo)(
            function () {
              var t = n;
              return (
                e.sheet
                  ? (t = e.sheet)
                  : e.target &&
                    (t = t.reconstructWithOptions({ target: e.target }, !1)),
                e.disableCSSOMInjection &&
                  (t = t.reconstructWithOptions({ useCSSOMInjection: !1 })),
                t
              );
            },
            [e.disableCSSOMInjection, e.sheet, e.target, n]
          ),
          l = (0, s.useMemo)(
            function () {
              return eQ({
                options: {
                  namespace: e.namespace,
                  prefix: e.enableVendorPrefixes,
                },
                plugins: r,
              });
            },
            [e.enableVendorPrefixes, e.namespace, r]
          );
        (0, s.useEffect)(
          function () {
            i()(r, e.stylisPlugins) || a(e.stylisPlugins);
          },
          [e.stylisPlugins]
        );
        var c = (0, s.useMemo)(
          function () {
            return {
              shouldForwardProp: e.shouldForwardProp,
              styleSheet: o,
              stylis: l,
            };
          },
          [e.shouldForwardProp, o, l]
        );
        return s.createElement(
          e2.Provider,
          { value: c },
          s.createElement(e3.Provider, { value: l }, e.children)
        );
      }
      var e8 = (function () {
        function e(e, t) {
          var r = this;
          (this.inject = function (e, t) {
            void 0 === t && (t = e1);
            var a = r.name + t.hash;
            e.hasNameForId(r.id, a) ||
              e.insertRules(r.id, a, t(r.rules, a, "@keyframes"));
          }),
            (this.name = e),
            (this.id = "sc-keyframes-".concat(e)),
            (this.rules = t),
            eP(this, function () {
              throw eD(12, String(r.name));
            });
        }
        return (
          (e.prototype.getName = function (e) {
            return void 0 === e && (e = e1), this.name + e.hash;
          }),
          e
        );
      })();
      function e5(e) {
        for (var t = "", r = 0; r < e.length; r++) {
          var a = e[r];
          if (1 === r && "-" === a && "-" === e[0]) return e;
          a >= "A" && a <= "Z" ? (t += "-" + a.toLowerCase()) : (t += a);
        }
        return t.startsWith("ms-") ? "-" + t : t;
      }
      var e9 = function (e) {
          return null == e || !1 === e || "" === e;
        },
        e4 = function (e) {
          var t = [];
          for (var r in e) {
            var a = e[r];
            e.hasOwnProperty(r) &&
              !e9(a) &&
              ((Array.isArray(a) && a.isCss) || eS(a)
                ? t.push("".concat(e5(r), ":"), a, ";")
                : eM(a)
                ? t.push.apply(
                    t,
                    n(n(["".concat(r, " {")], e4(a), !1), ["}"], !1)
                  )
                : t.push(
                    ""
                      .concat(e5(r), ": ")
                      .concat(
                        null == a || "boolean" == typeof a || "" === a
                          ? ""
                          : "number" != typeof a ||
                            0 === a ||
                            r in _ ||
                            r.startsWith("--")
                          ? String(a).trim()
                          : "".concat(a, "px"),
                        ";"
                      )
                  ));
          }
          return t;
        };
      function te(e, t, r, a) {
        return e9(e)
          ? []
          : eA(e)
          ? [".".concat(e.styledComponentId)]
          : eS(e)
          ? !eS(e) || (e.prototype && e.prototype.isReactComponent) || !t
            ? [e]
            : te(e(t), t, r, a)
          : e instanceof e8
          ? r
            ? (e.inject(r, a), [e.getName(a)])
            : [e]
          : eM(e)
          ? e4(e)
          : Array.isArray(e)
          ? Array.prototype.concat.apply(
              Q,
              e.map(function (e) {
                return te(e, t, r, a);
              })
            )
          : [e.toString()];
      }
      function tt(e) {
        for (var t = 0; t < e.length; t += 1) {
          var r = e[t];
          if (eS(r) && !eA(r)) return !1;
        }
        return !0;
      }
      var tr = ed(X),
        ta = (function () {
          function e(e, t, r) {
            (this.rules = e),
              (this.staticRulesId = ""),
              (this.isStatic = (void 0 === r || r.isStatic) && tt(e)),
              (this.componentId = t),
              (this.baseHash = ec(tr, t)),
              (this.baseStyle = r),
              eZ.registerId(t);
          }
          return (
            (e.prototype.generateAndInjectStyles = function (e, t, r) {
              var a = this.baseStyle
                ? this.baseStyle.generateAndInjectStyles(e, t, r)
                : "";
              if (this.isStatic && !r.hash) {
                if (
                  this.staticRulesId &&
                  t.hasNameForId(this.componentId, this.staticRulesId)
                )
                  a = eU(a, this.staticRulesId);
                else {
                  var n = eB(te(this.rules, e, t, r)),
                    s = ei(ec(this.baseHash, n) >>> 0);
                  if (!t.hasNameForId(this.componentId, s)) {
                    var o = r(n, ".".concat(s), void 0, this.componentId);
                    t.insertRules(this.componentId, s, o);
                  }
                  (a = eU(a, s)), (this.staticRulesId = s);
                }
              } else {
                for (
                  var i = ec(this.baseHash, r.hash), l = "", c = 0;
                  c < this.rules.length;
                  c++
                ) {
                  var d = this.rules[c];
                  if ("string" == typeof d) l += d;
                  else if (d) {
                    var u = eB(te(d, e, t, r));
                    (i = ec(i, u + c)), (l += u);
                  }
                }
                if (l) {
                  var p = ei(i >>> 0);
                  t.hasNameForId(this.componentId, p) ||
                    t.insertRules(
                      this.componentId,
                      p,
                      r(l, ".".concat(p), void 0, this.componentId)
                    ),
                    (a = eU(a, p));
                }
              }
              return a;
            }),
            e
          );
        })(),
        tn = s.createContext(void 0);
      tn.Consumer;
      var ts = {};
      function to(e, t, r) {
        var n,
          o,
          i,
          l,
          c = eA(e),
          d = !eu(e),
          u = t.attrs,
          p = void 0 === u ? Q : u,
          h = t.componentId,
          m =
            void 0 === h
              ? ((n = t.displayName),
                (o = t.parentComponentId),
                (ts[(i = "string" != typeof n ? "sc" : en(n))] =
                  (ts[i] || 0) + 1),
                (l = "".concat(i, "-").concat(ei(ed(X + i + ts[i]) >>> 0))),
                o ? "".concat(o, "-").concat(l) : l)
              : h,
          f = t.displayName,
          b =
            void 0 === f
              ? eu(e)
                ? "styled.".concat(e)
                : "Styled(".concat(e.displayName || e.name || "Component", ")")
              : f,
          y =
            t.displayName && t.componentId
              ? "".concat(en(t.displayName), "-").concat(t.componentId)
              : t.componentId || m,
          x = c && e.attrs ? e.attrs.concat(p).filter(Boolean) : p,
          v = t.shouldForwardProp;
        if (c && e.shouldForwardProp) {
          var g = e.shouldForwardProp;
          if (t.shouldForwardProp) {
            var E = t.shouldForwardProp;
            v = function (e, t) {
              return g(e, t) && E(e, t);
            };
          } else v = g;
        }
        var k = new ta(r, y, c ? e.componentStyle : void 0);
        function C(e, t) {
          return (function (e, t, r) {
            var n,
              o,
              i = e.attrs,
              l = e.componentStyle,
              c = e.defaultProps,
              d = e.foldedComponentIds,
              u = e.styledComponentId,
              p = e.target,
              h = s.useContext(tn),
              m = e7(),
              f = e.shouldForwardProp || m.shouldForwardProp,
              b =
                (void 0 === (n = c) && (n = ee),
                (t.theme !== n.theme && t.theme) || h || n.theme || ee),
              y = (function (e, t, r) {
                for (
                  var n,
                    s = a(a({}, t), { className: void 0, theme: r }),
                    o = 0;
                  o < e.length;
                  o += 1
                ) {
                  var i = eS((n = e[o])) ? n(s) : n;
                  for (var l in i)
                    s[l] =
                      "className" === l
                        ? eU(s[l], i[l])
                        : "style" === l
                        ? a(a({}, s[l]), i[l])
                        : i[l];
                }
                return (
                  t.className && (s.className = eU(s.className, t.className)), s
                );
              })(i, t, b),
              x = y.as || p,
              v = {};
            for (var g in y)
              void 0 === y[g] ||
                "$" === g[0] ||
                "as" === g ||
                ("theme" === g && y.theme === b) ||
                ("forwardedAs" === g
                  ? (v.as = y.forwardedAs)
                  : (f && !f(g, x)) || (v[g] = y[g]));
            var E =
                ((o = e7()),
                l.generateAndInjectStyles(y, o.styleSheet, o.stylis)),
              k = eU(d, u);
            return (
              E && (k += " " + E),
              y.className && (k += " " + y.className),
              (v[eu(x) && !et.has(x) ? "class" : "className"] = k),
              r && (v.ref = r),
              (0, s.createElement)(x, v)
            );
          })(w, e, t);
        }
        C.displayName = b;
        var w = s.forwardRef(C);
        return (
          (w.attrs = x),
          (w.componentStyle = k),
          (w.displayName = b),
          (w.shouldForwardProp = v),
          (w.foldedComponentIds = c
            ? eU(e.foldedComponentIds, e.styledComponentId)
            : ""),
          (w.styledComponentId = y),
          (w.target = c ? e.target : e),
          Object.defineProperty(w, "defaultProps", {
            get: function () {
              return this._foldedDefaultProps;
            },
            set: function (t) {
              this._foldedDefaultProps = c
                ? (function (e) {
                    for (var t = [], r = 1; r < arguments.length; r++)
                      t[r - 1] = arguments[r];
                    for (var a = 0; a < t.length; a++)
                      (function e(t, r, a) {
                        if (
                          (void 0 === a && (a = !1),
                          !a && !eM(t) && !Array.isArray(t))
                        )
                          return r;
                        if (Array.isArray(r))
                          for (var n = 0; n < r.length; n++)
                            t[n] = e(t[n], r[n]);
                        else if (eM(r)) for (var n in r) t[n] = e(t[n], r[n]);
                        return t;
                      })(e, t[a], !0);
                    return e;
                  })({}, e.defaultProps, t)
                : t;
            },
          }),
          eP(w, function () {
            return ".".concat(w.styledComponentId);
          }),
          d &&
            (function e(t, r, a) {
              if ("string" != typeof r) {
                if (eT) {
                  var n = ew(r);
                  n && n !== eT && e(t, n, a);
                }
                var s = eE(r);
                ek && (s = s.concat(ek(r)));
                for (var o = ev(t), i = ev(r), l = 0; l < s.length; ++l) {
                  var c = s[l];
                  if (
                    !(c in eb || (a && a[c]) || (i && c in i) || (o && c in o))
                  ) {
                    var d = eC(r, c);
                    try {
                      eg(t, c, d);
                    } catch (e) {}
                  }
                }
              }
              return t;
            })(w, e, {
              attrs: !0,
              componentStyle: !0,
              displayName: !0,
              foldedComponentIds: !0,
              shouldForwardProp: !0,
              styledComponentId: !0,
              target: !0,
            }),
          w
        );
      }
      function ti(e, t) {
        for (var r = [e[0]], a = 0, n = t.length; a < n; a += 1)
          r.push(t[a], e[a + 1]);
        return r;
      }
      var tl = function (e) {
        return Object.assign(e, { isCss: !0 });
      };
      function tc(e) {
        for (var t = [], r = 1; r < arguments.length; r++)
          t[r - 1] = arguments[r];
        return eS(e) || eM(e)
          ? tl(te(ti(Q, n([e], t, !0))))
          : 0 === t.length && 1 === e.length && "string" == typeof e[0]
          ? te(e)
          : tl(te(ti(e, t)));
      }
      var td = function (e) {
          return (function e(t, r, s) {
            if ((void 0 === s && (s = ee), !r)) throw eD(1, r);
            var o = function (e) {
              for (var a = [], o = 1; o < arguments.length; o++)
                a[o - 1] = arguments[o];
              return t(r, s, tc.apply(void 0, n([e], a, !1)));
            };
            return (
              (o.attrs = function (n) {
                return e(
                  t,
                  r,
                  a(a({}, s), {
                    attrs: Array.prototype.concat(s.attrs, n).filter(Boolean),
                  })
                );
              }),
              (o.withConfig = function (n) {
                return e(t, r, a(a({}, s), n));
              }),
              o
            );
          })(to, e);
        },
        tu = td;
      function tp(e) {
        for (var t = [], r = 1; r < arguments.length; r++)
          t[r - 1] = arguments[r];
        var a = eB(tc.apply(void 0, n([e], t, !1)));
        return new e8(ei(ed(a) >>> 0), a);
      }
      et.forEach(function (e) {
        tu[e] = td(e);
      }),
        (function () {
          function e(e, t) {
            (this.rules = e),
              (this.componentId = t),
              (this.isStatic = tt(e)),
              eZ.registerId(this.componentId + 1);
          }
          (e.prototype.createStyles = function (e, t, r, a) {
            var n = a(eB(te(this.rules, t, r, a)), ""),
              s = this.componentId + e;
            r.insertRules(s, s, n);
          }),
            (e.prototype.removeStyles = function (e, t) {
              t.clearRules(this.componentId + e);
            }),
            (e.prototype.renderStyles = function (e, t, r, a) {
              e > 2 && eZ.registerId(this.componentId + e),
                this.removeStyles(e, r),
                this.createStyles(e, t, r, a);
            });
        })(),
        (function () {
          function e() {
            var e = this;
            (this._emitSheetCSS = function () {
              var t = e.instance.toString();
              if (!t) return "";
              var a = r.nc,
                n = eB(
                  [
                    a && 'nonce="'.concat(a, '"'),
                    "".concat(W, '="true"'),
                    "".concat($, '="').concat(X, '"'),
                  ].filter(Boolean),
                  " "
                );
              return "<style ".concat(n, ">").concat(t, "</style>");
            }),
              (this.getStyleTags = function () {
                if (e.sealed) throw eD(2);
                return e._emitSheetCSS();
              }),
              (this.getStyleElement = function () {
                if (e.sealed) throw eD(2);
                var t,
                  n = e.instance.toString();
                if (!n) return [];
                var o =
                    (((t = {})[W] = ""),
                    (t[$] = X),
                    (t.dangerouslySetInnerHTML = { __html: n }),
                    t),
                  i = r.nc;
                return (
                  i && (o.nonce = i),
                  [s.createElement("style", a({}, o, { key: "sc-0-0" }))]
                );
              }),
              (this.seal = function () {
                e.sealed = !0;
              }),
              (this.instance = new eZ({ isServer: !0 })),
              (this.sealed = !1);
          }
          (e.prototype.collectStyles = function (e) {
            if (this.sealed) throw eD(2);
            return s.createElement(e6, { sheet: this.instance }, e);
          }),
            (e.prototype.interleaveWithNodeStream = function (e) {
              throw eD(3);
            });
        })();
    },
    44564: (e, t, r) => {
      "use strict";
      var a = r(12115),
        n = r(94236),
        s =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        o = n.useSyncExternalStore,
        i = a.useRef,
        l = a.useEffect,
        c = a.useMemo,
        d = a.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, r, a, n) {
        var u = i(null);
        if (null === u.current) {
          var p = { hasValue: !1, value: null };
          u.current = p;
        } else p = u.current;
        var h = o(
          e,
          (u = c(
            function () {
              function e(e) {
                if (!l) {
                  if (
                    ((l = !0), (o = e), (e = a(e)), void 0 !== n && p.hasValue)
                  ) {
                    var t = p.value;
                    if (n(t, e)) return (i = t);
                  }
                  return (i = e);
                }
                if (((t = i), s(o, e))) return t;
                var r = a(e);
                return void 0 !== n && n(t, r)
                  ? ((o = e), t)
                  : ((o = e), (i = r));
              }
              var o,
                i,
                l = !1,
                c = void 0 === r ? null : r;
              return [
                function () {
                  return e(t());
                },
                null === c
                  ? void 0
                  : function () {
                      return e(c());
                    },
              ];
            },
            [t, r, a, n]
          ))[0],
          u[1]
        );
        return (
          l(
            function () {
              (p.hasValue = !0), (p.value = h);
            },
            [h]
          ),
          d(h),
          h
        );
      };
    },
    18010: (e, t, r) => {
      "use strict";
      e.exports = r(44564);
    },
    79812: (e, t, r) => {
      "use strict";
      var a = r(12115),
        n =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        s = a.useState,
        o = a.useEffect,
        i = a.useLayoutEffect,
        l = a.useDebugValue;
      function c(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var r = t();
          return !n(e, r);
        } catch (e) {
          return !0;
        }
      }
      var d =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var r = t(),
                a = s({ inst: { value: r, getSnapshot: t } }),
                n = a[0].inst,
                d = a[1];
              return (
                i(
                  function () {
                    (n.value = r), (n.getSnapshot = t), c(n) && d({ inst: n });
                  },
                  [e, r, t]
                ),
                o(
                  function () {
                    return (
                      c(n) && d({ inst: n }),
                      e(function () {
                        c(n) && d({ inst: n });
                      })
                    );
                  },
                  [e]
                ),
                l(r),
                r
              );
            };
      t.useSyncExternalStore =
        void 0 !== a.useSyncExternalStore ? a.useSyncExternalStore : d;
    },
    84227: (e, t, r) => {
      "use strict";
      var a = r(12115),
        n = r(17687),
        s =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        o = n.useSyncExternalStore,
        i = a.useRef,
        l = a.useEffect,
        c = a.useMemo,
        d = a.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, r, a, n) {
        var u = i(null);
        if (null === u.current) {
          var p = { hasValue: !1, value: null };
          u.current = p;
        } else p = u.current;
        var h = o(
          e,
          (u = c(
            function () {
              function e(e) {
                if (!l) {
                  if (
                    ((l = !0), (o = e), (e = a(e)), void 0 !== n && p.hasValue)
                  ) {
                    var t = p.value;
                    if (n(t, e)) return (i = t);
                  }
                  return (i = e);
                }
                if (((t = i), s(o, e))) return t;
                var r = a(e);
                return void 0 !== n && n(t, r) ? t : ((o = e), (i = r));
              }
              var o,
                i,
                l = !1,
                c = void 0 === r ? null : r;
              return [
                function () {
                  return e(t());
                },
                null === c
                  ? void 0
                  : function () {
                      return e(c());
                    },
              ];
            },
            [t, r, a, n]
          ))[0],
          u[1]
        );
        return (
          l(
            function () {
              (p.hasValue = !0), (p.value = h);
            },
            [h]
          ),
          d(h),
          h
        );
      };
    },
    17687: (e, t, r) => {
      "use strict";
      e.exports = r(79812);
    },
    17281: (e, t, r) => {
      "use strict";
      e.exports = r(84227);
    },
    23587: (e, t, r) => {
      "use strict";
      r.d(t, { CC: () => s });
      var a = r(12115),
        n = Symbol("default");
      function s(e, t) {
        let r = (0, a.useContext)(e);
        if (null === t) return null;
        if (r && "object" == typeof r && "slots" in r && r.slots) {
          let e = new Intl.ListFormat().format(
            Object.keys(r.slots).map((e) => '"'.concat(e, '"'))
          );
          if (!t && !r.slots[n])
            throw Error(
              "A slot prop is required. Valid slot names are ".concat(e, ".")
            );
          let a = t || n;
          if (!r.slots[a])
            throw Error(
              'Invalid slot "'
                .concat(t, '". Valid slot names are ')
                .concat(e, ".")
            );
          return r.slots[a];
        }
        return r;
      }
    },
    45458: (e, t, r) => {
      "use strict";
      r.d(t, { c: () => n });
      var a = r(12115);
      r(95155);
      var n = (0, a.createContext)(null);
    },
    75905: (e, t, r) => {
      "use strict";
      r.d(t, { P: () => n });
      var a = r(69353);
      function n() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (e) => {
          t.forEach((t) =>
            (function (e, t) {
              if (null != e) {
                if ((0, a.Tn)(e)) {
                  e(t);
                  return;
                }
                try {
                  e.current = t;
                } catch (r) {
                  throw Error(
                    "Cannot assign value '"
                      .concat(t, "' to ref '")
                      .concat(e, "'")
                  );
                }
              }
            })(t, e)
          );
        };
      }
    },
    27526: (e, t, r) => {
      "use strict";
      r.d(t, { D: () => n });
      var a = r(95155),
        n = ({ strokeWidth: e = 1.5, ...t }) =>
          (0, a.jsx)("svg", {
            "aria-hidden": "true",
            fill: "none",
            focusable: "false",
            height: "1em",
            role: "presentation",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: e,
            viewBox: "0 0 24 24",
            width: "1em",
            ...t,
            children: (0, a.jsx)("path", { d: "m6 9 6 6 6-6" }),
          });
    },
    27582: (e, t, r) => {
      "use strict";
      r.d(t, { U: () => n });
      var a = r(12115),
        n = (null == globalThis ? void 0 : globalThis.document)
          ? a.useLayoutEffect
          : a.useEffect;
    },
    28050: (e, t, r) => {
      "use strict";
      r.d(t, { s: () => u, E: () => d });
      var a = r(45107),
        n = r(56433),
        s = r(76897);
      function o(e, t) {
        [...t].reverse().forEach((r) => {
          let a = e.getVariant(r);
          a && (0, n.U)(e, a),
            e.variantChildren &&
              e.variantChildren.forEach((e) => {
                o(e, t);
              });
        });
      }
      function i() {
        let e = !1,
          t = new Set(),
          r = {
            subscribe: (e) => (t.add(e), () => void t.delete(e)),
            start(r, n) {
              (0, a.V)(
                e,
                "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook."
              );
              let o = [];
              return (
                t.forEach((e) => {
                  o.push((0, s._)(e, r, { transitionOverride: n }));
                }),
                Promise.all(o)
              );
            },
            set: (r) => (
              (0, a.V)(
                e,
                "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."
              ),
              t.forEach((e) => {
                Array.isArray(r)
                  ? o(e, r)
                  : "string" == typeof r
                  ? o(e, [r])
                  : (0, n.U)(e, r);
              })
            ),
            stop() {
              t.forEach((e) => {
                !(function (e) {
                  e.values.forEach((e) => e.stop());
                })(e);
              });
            },
            mount: () => (
              (e = !0),
              () => {
                (e = !1), r.stop();
              }
            ),
          };
        return r;
      }
      var l = r(80970),
        c = r(24995);
      function d() {
        let e = (0, l.M)(i);
        return (0, c.E)(e.mount, []), e;
      }
      let u = d;
    },
    60604: (e, t, r) => {
      "use strict";
      r.d(t, { f: () => eS });
      var a = r(75713),
        n = r(40300),
        s = r(89811),
        o = r(46327);
      let i = { current: !1 };
      var l = r(26054);
      let c = (e, t, r) =>
        (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e;
      function d(e, t, r, a) {
        if (e === t && r === a) return l.l;
        let n = (t) =>
          (function (e, t, r, a, n) {
            let s, o;
            let i = 0;
            do (s = c((o = t + (r - t) / 2), a, n) - e) > 0 ? (r = o) : (t = o);
            while (Math.abs(s) > 1e-7 && ++i < 12);
            return o;
          })(t, 0, 1, e, r);
        return (e) => (0 === e || 1 === e ? e : c(n(e), t, a));
      }
      var u = r(18),
        p = r(39721);
      let h = d(0.33, 1.53, 0.69, 0.99),
        m = (0, p.G)(h),
        f = (0, u.V)(m),
        b = (e) =>
          (e *= 2) < 1 ? 0.5 * m(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
      var y = r(16663),
        x = r(61252),
        v = r(28797),
        g = r(27448),
        E = r(45107),
        k = r(76560);
      let C = (e, t) =>
          "zIndex" !== t &&
          !!(
            "number" == typeof e ||
            Array.isArray(e) ||
            ("string" == typeof e &&
              (k.f.test(e) || "0" === e) &&
              !e.startsWith("url("))
          ),
        w = (e) => null !== e;
      function T(e, { repeat: t, repeatType: r = "loop" }, a) {
        let n = e.filter(w),
          s = t && "loop" !== r && t % 2 == 1 ? 0 : n.length - 1;
        return s && void 0 !== a ? a : n[s];
      }
      class S {
        constructor({
          autoplay: e = !0,
          delay: t = 0,
          type: r = "keyframes",
          repeat: a = 0,
          repeatDelay: n = 0,
          repeatType: s = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = v.k.now()),
            (this.options = {
              autoplay: e,
              delay: t,
              type: r,
              repeat: a,
              repeatDelay: n,
              repeatType: s,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (0, g.q)(),
            this._resolved
          );
        }
        onKeyframesResolved(e, t) {
          (this.resolvedAt = v.k.now()), (this.hasAttemptedResolve = !0);
          let {
            name: r,
            type: n,
            velocity: s,
            delay: o,
            onComplete: l,
            onUpdate: c,
            isGenerator: d,
          } = this.options;
          if (
            !d &&
            !(function (e, t, r, n) {
              let s = e[0];
              if (null === s) return !1;
              if ("display" === t || "visibility" === t) return !0;
              let o = e[e.length - 1],
                i = C(s, t),
                l = C(o, t);
              return (
                (0, E.$)(
                  i === l,
                  `You are trying to animate ${t} from "${s}" to "${o}". ${s} is not an animatable value - to enable this animation set ${s} to a value animatable to ${o} via the \`style\` property.`
                ),
                !!i &&
                  !!l &&
                  ((function (e) {
                    let t = e[0];
                    if (1 === e.length) return !0;
                    for (let r = 0; r < e.length; r++)
                      if (e[r] !== t) return !0;
                  })(e) ||
                    (("spring" === r || (0, a.WH)(r)) && n))
              );
            })(e, r, n, s)
          ) {
            if (i.current || !o) {
              c && c(T(e, this.options, t)),
                l && l(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(e, t);
          !1 !== u &&
            ((this._resolved = { keyframes: e, finalKeyframe: t, ...u }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(e, t) {
          return this.currentFinishedPromise.then(e, t);
        }
        flatten() {
          (this.options.type = "keyframes"), (this.options.ease = "linear");
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((e) => {
            this.resolveFinishedPromise = e;
          });
        }
      }
      var A = r(11515),
        U = r(71618);
      function B(e, t, r) {
        return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6)
          ? e + (t - e) * 6 * r
          : r < 0.5
          ? t
          : r < 2 / 3
          ? e + (t - e) * (2 / 3 - r) * 6
          : e;
      }
      var M = r(79551),
        P = r(80864),
        D = r(30692);
      function F(e, t) {
        return (r) => (r > 0 ? t : e);
      }
      let I = (e, t, r) => {
          let a = e * e,
            n = r * (t * t - a) + a;
          return n < 0 ? 0 : Math.sqrt(n);
        },
        O = [M.u, P.B, D.V],
        R = (e) => O.find((t) => t.test(e));
      function L(e) {
        let t = R(e);
        if (
          ((0, E.$)(
            !!t,
            `'${e}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !t)
        )
          return !1;
        let r = t.parse(e);
        return (
          t === D.V &&
            (r = (function ({ hue: e, saturation: t, lightness: r, alpha: a }) {
              (e /= 360), (r /= 100);
              let n = 0,
                s = 0,
                o = 0;
              if ((t /= 100)) {
                let a = r < 0.5 ? r * (1 + t) : r + t - r * t,
                  i = 2 * r - a;
                (n = B(i, a, e + 1 / 3)),
                  (s = B(i, a, e)),
                  (o = B(i, a, e - 1 / 3));
              } else n = s = o = r;
              return {
                red: Math.round(255 * n),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: a,
              };
            })(r)),
          r
        );
      }
      let N = (e, t) => {
        let r = L(e),
          a = L(t);
        if (!r || !a) return F(e, t);
        let n = { ...r };
        return (e) => (
          (n.red = I(r.red, a.red, e)),
          (n.green = I(r.green, a.green, e)),
          (n.blue = I(r.blue, a.blue, e)),
          (n.alpha = (0, U.k)(r.alpha, a.alpha, e)),
          P.B.transform(n)
        );
      };
      var z = r(23348),
        K = r(38312),
        V = r(64151);
      let H = new Set(["none", "hidden"]);
      function j(e, t) {
        return (r) => (0, U.k)(e, t, r);
      }
      function _(e) {
        return "number" == typeof e
          ? j
          : "string" == typeof e
          ? (0, V.p)(e)
            ? F
            : K.y.test(e)
            ? N
            : q
          : Array.isArray(e)
          ? G
          : "object" == typeof e
          ? K.y.test(e)
            ? N
            : W
          : F;
      }
      function G(e, t) {
        let r = [...e],
          a = r.length,
          n = e.map((e, r) => _(e)(e, t[r]));
        return (e) => {
          for (let t = 0; t < a; t++) r[t] = n[t](e);
          return r;
        };
      }
      function W(e, t) {
        let r = { ...e, ...t },
          a = {};
        for (let n in r)
          void 0 !== e[n] && void 0 !== t[n] && (a[n] = _(e[n])(e[n], t[n]));
        return (e) => {
          for (let t in a) r[t] = a[t](e);
          return r;
        };
      }
      let q = (e, t) => {
        let r = k.f.createTransformer(t),
          a = (0, k.V)(e),
          n = (0, k.V)(t);
        return a.indexes.var.length === n.indexes.var.length &&
          a.indexes.color.length === n.indexes.color.length &&
          a.indexes.number.length >= n.indexes.number.length
          ? (H.has(e) && !n.values.length) || (H.has(t) && !a.values.length)
            ? (function (e, t) {
                return H.has(e)
                  ? (r) => (r <= 0 ? e : t)
                  : (r) => (r >= 1 ? t : e);
              })(e, t)
            : (0, z.F)(
                G(
                  (function (e, t) {
                    var r;
                    let a = [],
                      n = { color: 0, var: 0, number: 0 };
                    for (let s = 0; s < t.values.length; s++) {
                      let o = t.types[s],
                        i = e.indexes[o][n[o]],
                        l = null !== (r = e.values[i]) && void 0 !== r ? r : 0;
                      (a[s] = l), n[o]++;
                    }
                    return a;
                  })(a, n),
                  n.values
                ),
                r
              )
          : ((0, E.$)(
              !0,
              `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            F(e, t));
      };
      function $(e, t, r) {
        return "number" == typeof e &&
          "number" == typeof t &&
          "number" == typeof r
          ? (0, U.k)(e, t, r)
          : _(e)(e, t);
      }
      var X = r(87094);
      function Z(e, t, r) {
        let a = Math.max(t - 5, 0);
        return (0, X.f)(r - e(a), t - a);
      }
      let J = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      function Y(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      let Q = ["duration", "bounce"],
        ee = ["stiffness", "damping", "mass"];
      function et(e, t) {
        return t.some((t) => void 0 !== e[t]);
      }
      function er(e = J.visualDuration, t = J.bounce) {
        let r;
        let s =
            "object" != typeof e
              ? { visualDuration: e, keyframes: [0, 1], bounce: t }
              : e,
          { restSpeed: o, restDelta: i } = s,
          l = s.keyframes[0],
          c = s.keyframes[s.keyframes.length - 1],
          d = { done: !1, value: l },
          {
            stiffness: u,
            damping: p,
            mass: h,
            duration: m,
            velocity: f,
            isResolvedFromDuration: b,
          } = (function (e) {
            let t = {
              velocity: J.velocity,
              stiffness: J.stiffness,
              damping: J.damping,
              mass: J.mass,
              isResolvedFromDuration: !1,
              ...e,
            };
            if (!et(e, ee) && et(e, Q)) {
              if (e.visualDuration) {
                let r = (2 * Math.PI) / (1.2 * e.visualDuration),
                  a = r * r,
                  n = 2 * (0, A.q)(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(a);
                t = { ...t, mass: J.mass, stiffness: a, damping: n };
              } else {
                let r = (function ({
                  duration: e = J.duration,
                  bounce: t = J.bounce,
                  velocity: r = J.velocity,
                  mass: a = J.mass,
                }) {
                  let s, o;
                  (0, E.$)(
                    e <= (0, n.f)(J.maxDuration),
                    "Spring duration must be 10 seconds or less"
                  );
                  let i = 1 - t;
                  (i = (0, A.q)(J.minDamping, J.maxDamping, i)),
                    (e = (0, A.q)(J.minDuration, J.maxDuration, (0, n.X)(e))),
                    i < 1
                      ? ((s = (t) => {
                          let a = t * i,
                            n = a * e;
                          return 0.001 - ((a - r) / Y(t, i)) * Math.exp(-n);
                        }),
                        (o = (t) => {
                          let a = t * i * e,
                            n = Math.pow(i, 2) * Math.pow(t, 2) * e,
                            o = Math.exp(-a),
                            l = Y(Math.pow(t, 2), i);
                          return (
                            ((a * r + r - n) *
                              o *
                              (-s(t) + 0.001 > 0 ? -1 : 1)) /
                            l
                          );
                        }))
                      : ((s = (t) =>
                          -0.001 + Math.exp(-t * e) * ((t - r) * e + 1)),
                        (o = (t) => e * e * (r - t) * Math.exp(-t * e)));
                  let l = (function (e, t, r) {
                    let a = r;
                    for (let r = 1; r < 12; r++) a -= e(a) / t(a);
                    return a;
                  })(s, o, 5 / e);
                  if (((e = (0, n.f)(e)), isNaN(l)))
                    return {
                      stiffness: J.stiffness,
                      damping: J.damping,
                      duration: e,
                    };
                  {
                    let t = Math.pow(l, 2) * a;
                    return {
                      stiffness: t,
                      damping: 2 * i * Math.sqrt(a * t),
                      duration: e,
                    };
                  }
                })(e);
                (t = { ...t, ...r, mass: J.mass }).isResolvedFromDuration = !0;
              }
            }
            return t;
          })({ ...s, velocity: -(0, n.X)(s.velocity || 0) }),
          y = f || 0,
          x = p / (2 * Math.sqrt(u * h)),
          v = c - l,
          g = (0, n.X)(Math.sqrt(u / h)),
          k = 5 > Math.abs(v);
        if (
          (o || (o = k ? J.restSpeed.granular : J.restSpeed.default),
          i || (i = k ? J.restDelta.granular : J.restDelta.default),
          x < 1)
        ) {
          let e = Y(g, x);
          r = (t) =>
            c -
            Math.exp(-x * g * t) *
              (((y + x * g * v) / e) * Math.sin(e * t) + v * Math.cos(e * t));
        } else if (1 === x)
          r = (e) => c - Math.exp(-g * e) * (v + (y + g * v) * e);
        else {
          let e = g * Math.sqrt(x * x - 1);
          r = (t) => {
            let r = Math.exp(-x * g * t),
              a = Math.min(e * t, 300);
            return (
              c -
              (r * ((y + x * g * v) * Math.sinh(a) + e * v * Math.cosh(a))) / e
            );
          };
        }
        let C = {
          calculatedDuration: (b && m) || null,
          next: (e) => {
            let t = r(e);
            if (b) d.done = e >= m;
            else {
              let a = 0;
              x < 1 && (a = 0 === e ? (0, n.f)(y) : Z(r, e, t));
              let s = Math.abs(a) <= o,
                l = Math.abs(c - t) <= i;
              d.done = s && l;
            }
            return (d.value = d.done ? c : t), d;
          },
          toString: () => {
            let e = Math.min((0, a.tu)(C), a.YE),
              t = (0, a.KZ)((t) => C.next(e * t).value, e, 30);
            return e + "ms " + t;
          },
        };
        return C;
      }
      function ea({
        keyframes: e,
        velocity: t = 0,
        power: r = 0.8,
        timeConstant: a = 325,
        bounceDamping: n = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: i,
        max: l,
        restDelta: c = 0.5,
        restSpeed: d,
      }) {
        let u, p;
        let h = e[0],
          m = { done: !1, value: h },
          f = (e) => (void 0 !== i && e < i) || (void 0 !== l && e > l),
          b = (e) =>
            void 0 === i
              ? l
              : void 0 === l
              ? i
              : Math.abs(i - e) < Math.abs(l - e)
              ? i
              : l,
          y = r * t,
          x = h + y,
          v = void 0 === o ? x : o(x);
        v !== x && (y = v - h);
        let g = (e) => -y * Math.exp(-e / a),
          E = (e) => v + g(e),
          k = (e) => {
            let t = g(e),
              r = E(e);
            (m.done = Math.abs(t) <= c), (m.value = m.done ? v : r);
          },
          C = (e) => {
            f(m.value) &&
              ((u = e),
              (p = er({
                keyframes: [m.value, b(m.value)],
                velocity: Z(E, e, m.value),
                damping: n,
                stiffness: s,
                restDelta: c,
                restSpeed: d,
              })));
          };
        return (
          C(0),
          {
            calculatedDuration: null,
            next: (e) => {
              let t = !1;
              return (p || void 0 !== u || ((t = !0), k(e), C(e)),
              void 0 !== u && e >= u)
                ? p.next(e - u)
                : (t || k(e), m);
            },
          }
        );
      }
      let en = d(0.42, 0, 1, 1),
        es = d(0, 0, 0.58, 1),
        eo = d(0.42, 0, 0.58, 1),
        ei = (e) => Array.isArray(e) && "number" != typeof e[0],
        el = {
          linear: l.l,
          easeIn: en,
          easeInOut: eo,
          easeOut: es,
          circIn: y.po,
          circInOut: y.tn,
          circOut: y.yT,
          backIn: m,
          backInOut: f,
          backOut: h,
          anticipate: b,
        },
        ec = (e) => {
          if ((0, a.DW)(e)) {
            (0, E.V)(
              4 === e.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [t, r, a, n] = e;
            return d(t, r, a, n);
          }
          return "string" == typeof e
            ? ((0, E.V)(void 0 !== el[e], `Invalid easing type '${e}'`), el[e])
            : e;
        };
      var ed = r(19615);
      function eu({
        duration: e = 300,
        keyframes: t,
        times: r,
        ease: a = "easeInOut",
      }) {
        let n = ei(a) ? a.map(ec) : ec(a),
          s = { done: !1, value: t[0] },
          o = (function (e, t, { clamp: r = !0, ease: a, mixer: n } = {}) {
            let s = e.length;
            if (
              ((0, E.V)(
                s === t.length,
                "Both input and output ranges must be the same length"
              ),
              1 === s)
            )
              return () => t[0];
            if (2 === s && t[0] === t[1]) return () => t[1];
            let o = e[0] === e[1];
            e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
            let i = (function (e, t, r) {
                let a = [],
                  n = r || $,
                  s = e.length - 1;
                for (let r = 0; r < s; r++) {
                  let s = n(e[r], e[r + 1]);
                  if (t) {
                    let e = Array.isArray(t) ? t[r] || l.l : t;
                    s = (0, z.F)(e, s);
                  }
                  a.push(s);
                }
                return a;
              })(t, a, n),
              c = i.length,
              d = (r) => {
                if (o && r < e[0]) return t[0];
                let a = 0;
                if (c > 1) for (; a < e.length - 2 && !(r < e[a + 1]); a++);
                let n = (0, ed.q)(e[a], e[a + 1], r);
                return i[a](n);
              };
            return r ? (t) => d((0, A.q)(e[0], e[s - 1], t)) : d;
          })(
            (r && r.length === t.length
              ? r
              : (function (e) {
                  let t = [0];
                  return (
                    (function (e, t) {
                      let r = e[e.length - 1];
                      for (let a = 1; a <= t; a++) {
                        let n = (0, ed.q)(0, t, a);
                        e.push((0, U.k)(r, 1, n));
                      }
                    })(t, e.length - 1),
                    t
                  );
                })(t)
            ).map((t) => t * e),
            t,
            {
              ease: Array.isArray(n)
                ? n
                : t.map(() => n || eo).splice(0, t.length - 1),
            }
          );
        return {
          calculatedDuration: e,
          next: (t) => ((s.value = o(t)), (s.done = t >= e), s),
        };
      }
      let ep = (e) => {
          let t = ({ timestamp: t }) => e(t);
          return {
            start: () => s.Gt.update(t, !0),
            stop: () => (0, s.WG)(t),
            now: () => (s.uv.isProcessing ? s.uv.timestamp : v.k.now()),
          };
        },
        eh = { decay: ea, inertia: ea, tween: eu, keyframes: eu, spring: er },
        em = (e) => e / 100;
      class ef extends S {
        constructor(e) {
          super(e),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: e } = this.options;
              e && e();
            });
          let {
              name: t,
              motionValue: r,
              element: a,
              keyframes: n,
            } = this.options,
            s = (null == a ? void 0 : a.KeyframeResolver) || g.h;
          (this.resolver = new s(
            n,
            (e, t) => this.onKeyframesResolved(e, t),
            t,
            r,
            a
          )),
            this.resolver.scheduleResolve();
        }
        flatten() {
          super.flatten(),
            this._resolved &&
              Object.assign(
                this._resolved,
                this.initPlayback(this._resolved.keyframes)
              );
        }
        initPlayback(e) {
          let t, r;
          let {
              type: n = "keyframes",
              repeat: s = 0,
              repeatDelay: o = 0,
              repeatType: i,
              velocity: l = 0,
            } = this.options,
            c = (0, a.WH)(n) ? n : eh[n] || eu;
          c !== eu &&
            "number" != typeof e[0] &&
            ((t = (0, z.F)(em, $(e[0], e[1]))), (e = [0, 100]));
          let d = c({ ...this.options, keyframes: e });
          "mirror" === i &&
            (r = c({
              ...this.options,
              keyframes: [...e].reverse(),
              velocity: -l,
            })),
            null === d.calculatedDuration &&
              (d.calculatedDuration = (0, a.tu)(d));
          let { calculatedDuration: u } = d,
            p = u + o;
          return {
            generator: d,
            mirroredGenerator: r,
            mapPercentToKeyframes: t,
            calculatedDuration: u,
            resolvedDuration: p,
            totalDuration: p * (s + 1) - o,
          };
        }
        onPostResolved() {
          let { autoplay: e = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && e
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(e, t = !1) {
          let { resolved: r } = this;
          if (!r) {
            let { keyframes: e } = this.options;
            return { done: !0, value: e[e.length - 1] };
          }
          let {
            finalKeyframe: a,
            generator: n,
            mirroredGenerator: s,
            mapPercentToKeyframes: o,
            keyframes: i,
            calculatedDuration: l,
            totalDuration: c,
            resolvedDuration: d,
          } = r;
          if (null === this.startTime) return n.next(0);
          let {
            delay: u,
            repeat: p,
            repeatType: h,
            repeatDelay: m,
            onUpdate: f,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, e))
            : this.speed < 0 &&
              (this.startTime = Math.min(e - c / this.speed, this.startTime)),
            t
              ? (this.currentTime = e)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(e - this.startTime) * this.speed);
          let b = this.currentTime - u * (this.speed >= 0 ? 1 : -1),
            y = this.speed >= 0 ? b < 0 : b > c;
          (this.currentTime = Math.max(b, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = c);
          let x = this.currentTime,
            v = n;
          if (p) {
            let e = Math.min(this.currentTime, c) / d,
              t = Math.floor(e),
              r = e % 1;
            !r && e >= 1 && (r = 1),
              1 === r && t--,
              (t = Math.min(t, p + 1)) % 2 &&
                ("reverse" === h
                  ? ((r = 1 - r), m && (r -= m / d))
                  : "mirror" === h && (v = s)),
              (x = (0, A.q)(0, 1, r) * d);
          }
          let g = y ? { done: !1, value: i[0] } : v.next(x);
          o && (g.value = o(g.value));
          let { done: E } = g;
          y ||
            null === l ||
            (E =
              this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
          let k =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && E));
          return (
            k && void 0 !== a && (g.value = T(i, this.options, a)),
            f && f(g.value),
            k && this.finish(),
            g
          );
        }
        get duration() {
          let { resolved: e } = this;
          return e ? (0, n.X)(e.calculatedDuration) : 0;
        }
        get time() {
          return (0, n.X)(this.currentTime);
        }
        set time(e) {
          (e = (0, n.f)(e)),
            (this.currentTime = e),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = e)
              : this.driver &&
                (this.startTime = this.driver.now() - e / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(e) {
          let t = this.playbackSpeed !== e;
          (this.playbackSpeed = e),
            t && (this.time = (0, n.X)(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: e = ep, onPlay: t, startTime: r } = this.options;
          this.driver || (this.driver = e((e) => this.tick(e))), t && t();
          let a = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = a - this.holdTime)
            : this.startTime
            ? "finished" === this.state && (this.startTime = a)
            : (this.startTime = null != r ? r : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var e;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (e = this.currentTime) && void 0 !== e ? e : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: e } = this.options;
          e && e();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(e) {
          return (this.startTime = 0), this.tick(e, !0);
        }
      }
      let eb = new Set(["opacity", "clipPath", "filter", "transform"]),
        ey = (0, r(64996).p)(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate")
        ),
        ex = { anticipate: b, backInOut: f, circInOut: y.tn };
      class ev extends S {
        constructor(e) {
          super(e);
          let {
            name: t,
            motionValue: r,
            element: a,
            keyframes: n,
          } = this.options;
          (this.resolver = new x.K(
            n,
            (e, t) => this.onKeyframesResolved(e, t),
            t,
            r,
            a
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(e, t) {
          var r;
          let {
            duration: n = 300,
            times: s,
            ease: o,
            type: i,
            motionValue: l,
            name: c,
            startTime: d,
          } = this.options;
          if (!l.owner || !l.owner.current) return !1;
          if (
            ("string" == typeof o && (0, a.nL)() && o in ex && (o = ex[o]),
            (r = this.options),
            (0, a.WH)(r.type) || "spring" === r.type || !(0, a.yL)(r.ease))
          ) {
            let {
                onComplete: t,
                onUpdate: r,
                motionValue: a,
                element: l,
                ...c
              } = this.options,
              d = (function (e, t) {
                let r = new ef({
                    ...t,
                    keyframes: e,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  a = { done: !1, value: e[0] },
                  n = [],
                  s = 0;
                for (; !a.done && s < 2e4; )
                  n.push((a = r.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: n,
                  duration: s - 10,
                  ease: "linear",
                };
              })(e, c);
            1 === (e = d.keyframes).length && (e[1] = e[0]),
              (n = d.duration),
              (s = d.times),
              (o = d.ease),
              (i = "keyframes");
          }
          let u = (function (
            e,
            t,
            r,
            {
              delay: n = 0,
              duration: s = 300,
              repeat: o = 0,
              repeatType: i = "loop",
              ease: l = "easeInOut",
              times: c,
            } = {}
          ) {
            let d = { [t]: r };
            c && (d.offset = c);
            let u = (0, a.TU)(l, s);
            return (
              Array.isArray(u) && (d.easing = u),
              e.animate(d, {
                delay: n,
                duration: s,
                easing: Array.isArray(u) ? "linear" : u,
                fill: "both",
                iterations: o + 1,
                direction: "reverse" === i ? "alternate" : "normal",
              })
            );
          })(l.owner.current, c, e, {
            ...this.options,
            duration: n,
            times: s,
            ease: o,
          });
          return (
            (u.startTime = null != d ? d : this.calcStartTime()),
            this.pendingTimeline
              ? ((0, a.vG)(u, this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (u.onfinish = () => {
                  let { onComplete: r } = this.options;
                  l.set(T(e, this.options, t)),
                    r && r(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: u,
              duration: n,
              times: s,
              type: i,
              ease: o,
              keyframes: e,
            }
          );
        }
        get duration() {
          let { resolved: e } = this;
          if (!e) return 0;
          let { duration: t } = e;
          return (0, n.X)(t);
        }
        get time() {
          let { resolved: e } = this;
          if (!e) return 0;
          let { animation: t } = e;
          return (0, n.X)(t.currentTime || 0);
        }
        set time(e) {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: r } = t;
          r.currentTime = (0, n.f)(e);
        }
        get speed() {
          let { resolved: e } = this;
          if (!e) return 1;
          let { animation: t } = e;
          return t.playbackRate;
        }
        set speed(e) {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: r } = t;
          r.playbackRate = e;
        }
        get state() {
          let { resolved: e } = this;
          if (!e) return "idle";
          let { animation: t } = e;
          return t.playState;
        }
        get startTime() {
          let { resolved: e } = this;
          if (!e) return null;
          let { animation: t } = e;
          return t.startTime;
        }
        attachTimeline(e) {
          if (this._resolved) {
            let { resolved: t } = this;
            if (!t) return l.l;
            let { animation: r } = t;
            (0, a.vG)(r, e);
          } else this.pendingTimeline = e;
          return l.l;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: e } = this;
          if (!e) return;
          let { animation: t } = e;
          "finished" === t.playState && this.updateFinishedPromise(), t.play();
        }
        pause() {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: t } = e;
          t.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: e } = this;
          if (!e) return;
          let {
            animation: t,
            keyframes: r,
            duration: a,
            type: s,
            ease: o,
            times: i,
          } = e;
          if ("idle" === t.playState || "finished" === t.playState) return;
          if (this.time) {
            let {
                motionValue: e,
                onUpdate: t,
                onComplete: l,
                element: c,
                ...d
              } = this.options,
              u = new ef({
                ...d,
                keyframes: r,
                duration: a,
                type: s,
                ease: o,
                times: i,
                isGenerator: !0,
              }),
              p = (0, n.f)(this.time);
            e.setWithVelocity(u.sample(p - 10).value, u.sample(p).value, 10);
          }
          let { onStop: l } = this.options;
          l && l(), this.cancel();
        }
        complete() {
          let { resolved: e } = this;
          e && e.animation.finish();
        }
        cancel() {
          let { resolved: e } = this;
          e && e.animation.cancel();
        }
        static supports(e) {
          let {
            motionValue: t,
            name: r,
            repeatDelay: a,
            repeatType: n,
            damping: s,
            type: o,
          } = e;
          if (!t || !t.owner || !(t.owner.current instanceof HTMLElement))
            return !1;
          let { onUpdate: i, transformTemplate: l } = t.owner.getProps();
          return (
            ey() &&
            r &&
            eb.has(r) &&
            !i &&
            !l &&
            !a &&
            "mirror" !== n &&
            0 !== s &&
            "inertia" !== o
          );
        }
      }
      var eg = r(19696);
      let eE = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        ek = (e) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === e ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        eC = { type: "keyframes", duration: 0.8 },
        ew = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        eT = (e, { keyframes: t }) =>
          t.length > 2
            ? eC
            : eg.f.has(e)
            ? e.startsWith("scale")
              ? ek(t[1])
              : eE
            : ew,
        eS =
          (e, t, r, l = {}, c, d) =>
          (u) => {
            let p = (0, a.rU)(l, e) || {},
              h = p.delay || l.delay || 0,
              { elapsed: m = 0 } = l;
            m -= (0, n.f)(h);
            let f = {
              keyframes: Array.isArray(r) ? r : [null, r],
              ease: "easeOut",
              velocity: t.getVelocity(),
              ...p,
              delay: -m,
              onUpdate: (e) => {
                t.set(e), p.onUpdate && p.onUpdate(e);
              },
              onComplete: () => {
                u(), p.onComplete && p.onComplete();
              },
              name: e,
              motionValue: t,
              element: d ? void 0 : c,
            };
            !(function ({
              when: e,
              delay: t,
              delayChildren: r,
              staggerChildren: a,
              staggerDirection: n,
              repeat: s,
              repeatType: o,
              repeatDelay: i,
              from: l,
              elapsed: c,
              ...d
            }) {
              return !!Object.keys(d).length;
            })(p) && (f = { ...f, ...eT(e, f) }),
              f.duration && (f.duration = (0, n.f)(f.duration)),
              f.repeatDelay && (f.repeatDelay = (0, n.f)(f.repeatDelay)),
              void 0 !== f.from && (f.keyframes[0] = f.from);
            let b = !1;
            if (
              ((!1 !== f.type && (0 !== f.duration || f.repeatDelay)) ||
                ((f.duration = 0), 0 !== f.delay || (b = !0)),
              (i.current || o.W.skipAnimations) &&
                ((b = !0), (f.duration = 0), (f.delay = 0)),
              b && !d && void 0 !== t.get())
            ) {
              let e = T(f.keyframes, p);
              if (void 0 !== e)
                return (
                  s.Gt.update(() => {
                    f.onUpdate(e), f.onComplete();
                  }),
                  new a.P6([])
                );
            }
            return !d && ev.supports(f) ? new ev(f) : new ef(f);
          };
    },
    76897: (e, t, r) => {
      "use strict";
      r.d(t, { _: () => m });
      var a = r(37270),
        n = r(75713),
        s = r(71695),
        o = r(56433),
        i = r(56126),
        l = r(92077),
        c = r(60604),
        d = r(89811);
      function u(e, t, { delay: r = 0, transitionOverride: a, type: p } = {}) {
        var h;
        let {
          transition: m = e.getDefaultTransition(),
          transitionEnd: f,
          ...b
        } = t;
        a && (m = a);
        let y = [],
          x = p && e.animationState && e.animationState.getState()[p];
        for (let t in b) {
          let a = e.getValue(
              t,
              null !== (h = e.latestValues[t]) && void 0 !== h ? h : null
            ),
            o = b[t];
          if (
            void 0 === o ||
            (x &&
              (function ({ protectedKeys: e, needsAnimating: t }, r) {
                let a = e.hasOwnProperty(r) && !0 !== t[r];
                return (t[r] = !1), a;
              })(x, t))
          )
            continue;
          let u = { delay: r, ...(0, n.rU)(m || {}, t) },
            p = !1;
          if (window.MotionHandoffAnimation) {
            let r = (0, l.P)(e);
            if (r) {
              let e = window.MotionHandoffAnimation(r, t, d.Gt);
              null !== e && ((u.startTime = e), (p = !0));
            }
          }
          (0, i.g)(e, t),
            a.start(
              (0, c.f)(
                t,
                a,
                o,
                e.shouldReduceMotion && s.$.has(t) ? { type: !1 } : u,
                e,
                p
              )
            );
          let f = a.animation;
          f && y.push(f);
        }
        return (
          f &&
            Promise.all(y).then(() => {
              d.Gt.update(() => {
                f && (0, o.U)(e, f);
              });
            }),
          y
        );
      }
      function p(e, t, r = {}) {
        var n;
        let s = (0, a.K)(
            e,
            t,
            "exit" === r.type
              ? null === (n = e.presenceContext) || void 0 === n
                ? void 0
                : n.custom
              : void 0
          ),
          { transition: o = e.getDefaultTransition() || {} } = s || {};
        r.transitionOverride && (o = r.transitionOverride);
        let i = s ? () => Promise.all(u(e, s, r)) : () => Promise.resolve(),
          l =
            e.variantChildren && e.variantChildren.size
              ? (a = 0) => {
                  let {
                    delayChildren: n = 0,
                    staggerChildren: s,
                    staggerDirection: i,
                  } = o;
                  return (function (e, t, r = 0, a = 0, n = 1, s) {
                    let o = [],
                      i = (e.variantChildren.size - 1) * a,
                      l = 1 === n ? (e = 0) => e * a : (e = 0) => i - e * a;
                    return (
                      Array.from(e.variantChildren)
                        .sort(h)
                        .forEach((e, a) => {
                          e.notify("AnimationStart", t),
                            o.push(
                              p(e, t, { ...s, delay: r + l(a) }).then(() =>
                                e.notify("AnimationComplete", t)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(e, t, n + a, s, i, r);
                }
              : () => Promise.resolve(),
          { when: c } = o;
        if (!c) return Promise.all([i(), l(r.delay)]);
        {
          let [e, t] = "beforeChildren" === c ? [i, l] : [l, i];
          return e().then(() => t());
        }
      }
      function h(e, t) {
        return e.sortNodePosition(t);
      }
      function m(e, t, r = {}) {
        let n;
        if ((e.notify("AnimationStart", t), Array.isArray(t)))
          n = Promise.all(t.map((t) => p(e, t, r)));
        else if ("string" == typeof t) n = p(e, t, r);
        else {
          let s = "function" == typeof t ? (0, a.K)(e, t, r.custom) : t;
          n = Promise.all(u(e, s, r));
        }
        return n.then(() => {
          e.notify("AnimationComplete", t);
        });
      }
    },
    11131: (e, t, r) => {
      "use strict";
      r.d(t, { n: () => a });
      let a = "data-" + (0, r(69109).I)("framerAppearId");
    },
    92077: (e, t, r) => {
      "use strict";
      r.d(t, { P: () => n });
      var a = r(11131);
      function n(e) {
        return e.props[a.n];
      }
    },
    61027: (e, t, r) => {
      "use strict";
      r.d(t, { p: () => a });
      let a = (e) => Array.isArray(e);
    },
    76807: (e, t, r) => {
      "use strict";
      r.d(t, { N: () => y });
      var a = r(95155),
        n = r(12115),
        s = r(16046),
        o = r(80970),
        i = r(10800),
        l = r(17449);
      class c extends n.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            (e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function d(e) {
        let { children: t, isPresent: r } = e,
          s = (0, n.useId)(),
          o = (0, n.useRef)(null),
          i = (0, n.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: d } = (0, n.useContext)(l.Q);
        return (
          (0, n.useInsertionEffect)(() => {
            let { width: e, height: t, top: a, left: n } = i.current;
            if (r || !o.current || !e || !t) return;
            o.current.dataset.motionPopId = s;
            let l = document.createElement("style");
            return (
              d && (l.nonce = d),
              document.head.appendChild(l),
              l.sheet &&
                l.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      s,
                      '"] {\n            position: absolute !important;\n            width: '
                    )
                    .concat(e, "px !important;\n            height: ")
                    .concat(t, "px !important;\n            top: ")
                    .concat(a, "px !important;\n            left: ")
                    .concat(n, "px !important;\n          }\n        ")
                ),
              () => {
                document.head.removeChild(l);
              }
            );
          }, [r]),
          (0, a.jsx)(c, {
            isPresent: r,
            childRef: o,
            sizeRef: i,
            children: n.cloneElement(t, { ref: o }),
          })
        );
      }
      let u = (e) => {
        let {
            children: t,
            initial: r,
            isPresent: s,
            onExitComplete: l,
            custom: c,
            presenceAffectsLayout: u,
            mode: h,
          } = e,
          m = (0, o.M)(p),
          f = (0, n.useId)(),
          b = (0, n.useCallback)(
            (e) => {
              for (let t of (m.set(e, !0), m.values())) if (!t) return;
              l && l();
            },
            [m, l]
          ),
          y = (0, n.useMemo)(
            () => ({
              id: f,
              initial: r,
              isPresent: s,
              custom: c,
              onExitComplete: b,
              register: (e) => (m.set(e, !1), () => m.delete(e)),
            }),
            u ? [Math.random(), b] : [s, b]
          );
        return (
          (0, n.useMemo)(() => {
            m.forEach((e, t) => m.set(t, !1));
          }, [s]),
          n.useEffect(() => {
            s || m.size || !l || l();
          }, [s]),
          "popLayout" === h &&
            (t = (0, a.jsx)(d, { isPresent: s, children: t })),
          (0, a.jsx)(i.t.Provider, { value: y, children: t })
        );
      };
      function p() {
        return new Map();
      }
      var h = r(80407);
      let m = (e) => e.key || "";
      function f(e) {
        let t = [];
        return (
          n.Children.forEach(e, (e) => {
            (0, n.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      var b = r(24995);
      let y = (e) => {
        let {
            children: t,
            custom: r,
            initial: i = !0,
            onExitComplete: l,
            presenceAffectsLayout: c = !0,
            mode: d = "sync",
            propagate: p = !1,
          } = e,
          [y, x] = (0, h.xQ)(p),
          v = (0, n.useMemo)(() => f(t), [t]),
          g = p && !y ? [] : v.map(m),
          E = (0, n.useRef)(!0),
          k = (0, n.useRef)(v),
          C = (0, o.M)(() => new Map()),
          [w, T] = (0, n.useState)(v),
          [S, A] = (0, n.useState)(v);
        (0, b.E)(() => {
          (E.current = !1), (k.current = v);
          for (let e = 0; e < S.length; e++) {
            let t = m(S[e]);
            g.includes(t) ? C.delete(t) : !0 !== C.get(t) && C.set(t, !1);
          }
        }, [S, g.length, g.join("-")]);
        let U = [];
        if (v !== w) {
          let e = [...v];
          for (let t = 0; t < S.length; t++) {
            let r = S[t],
              a = m(r);
            g.includes(a) || (e.splice(t, 0, r), U.push(r));
          }
          "wait" === d && U.length && (e = U), A(f(e)), T(v);
          return;
        }
        let { forceRender: B } = (0, n.useContext)(s.L);
        return (0, a.jsx)(a.Fragment, {
          children: S.map((e) => {
            let t = m(e),
              n = (!p || !!y) && (v === S || g.includes(t));
            return (0, a.jsx)(
              u,
              {
                isPresent: n,
                initial: (!E.current || !!i) && void 0,
                custom: n ? void 0 : r,
                presenceAffectsLayout: c,
                mode: d,
                onExitComplete: n
                  ? void 0
                  : () => {
                      if (!C.has(t)) return;
                      C.set(t, !0);
                      let e = !0;
                      C.forEach((t) => {
                        t || (e = !1);
                      }),
                        e &&
                          (null == B || B(),
                          A(k.current),
                          p && (null == x || x()),
                          l && l());
                    },
                children: e,
              },
              t
            );
          }),
        });
      };
    },
    80407: (e, t, r) => {
      "use strict";
      r.d(t, { xQ: () => s });
      var a = r(12115),
        n = r(10800);
      function s(e = !0) {
        let t = (0, a.useContext)(n.t);
        if (null === t) return [!0, null];
        let { isPresent: r, onExitComplete: o, register: i } = t,
          l = (0, a.useId)();
        (0, a.useEffect)(() => {
          e && i(l);
        }, [e]);
        let c = (0, a.useCallback)(() => e && o && o(l), [l, o, e]);
        return !r && o ? [!1, c] : [!0];
      }
    },
    16046: (e, t, r) => {
      "use strict";
      r.d(t, { L: () => a });
      let a = (0, r(12115).createContext)({});
    },
    17449: (e, t, r) => {
      "use strict";
      r.d(t, { Q: () => a });
      let a = (0, r(12115).createContext)({
        transformPagePoint: (e) => e,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    10800: (e, t, r) => {
      "use strict";
      r.d(t, { t: () => a });
      let a = (0, r(12115).createContext)(null);
    },
    16663: (e, t, r) => {
      "use strict";
      r.d(t, { po: () => s, tn: () => i, yT: () => o });
      var a = r(18),
        n = r(39721);
      let s = (e) => 1 - Math.sin(Math.acos(e)),
        o = (0, n.G)(s),
        i = (0, a.V)(s);
    },
    18: (e, t, r) => {
      "use strict";
      r.d(t, { V: () => a });
      let a = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2;
    },
    39721: (e, t, r) => {
      "use strict";
      r.d(t, { G: () => a });
      let a = (e) => (t) => 1 - e(1 - t);
    },
    28911: (e, t, r) => {
      "use strict";
      r.d(t, { I: () => s });
      var a = r(46327);
      let n = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function s(e, t) {
        let r = !1,
          s = !0,
          o = { delta: 0, timestamp: 0, isProcessing: !1 },
          i = () => (r = !0),
          l = n.reduce(
            (e, t) => (
              (e[t] = (function (e) {
                let t = new Set(),
                  r = new Set(),
                  a = !1,
                  n = !1,
                  s = new WeakSet(),
                  o = { delta: 0, timestamp: 0, isProcessing: !1 };
                function i(t) {
                  s.has(t) && (l.schedule(t), e()), t(o);
                }
                let l = {
                  schedule: (e, n = !1, o = !1) => {
                    let i = o && a ? t : r;
                    return n && s.add(e), i.has(e) || i.add(e), e;
                  },
                  cancel: (e) => {
                    r.delete(e), s.delete(e);
                  },
                  process: (e) => {
                    if (((o = e), a)) {
                      n = !0;
                      return;
                    }
                    (a = !0),
                      ([t, r] = [r, t]),
                      t.forEach(i),
                      t.clear(),
                      (a = !1),
                      n && ((n = !1), l.process(e));
                  },
                };
                return l;
              })(i)),
              e
            ),
            {}
          ),
          {
            read: c,
            resolveKeyframes: d,
            update: u,
            preRender: p,
            render: h,
            postRender: m,
          } = l,
          f = () => {
            let n = a.W.useManualTiming ? o.timestamp : performance.now();
            (r = !1),
              (o.delta = s
                ? 1e3 / 60
                : Math.max(Math.min(n - o.timestamp, 40), 1)),
              (o.timestamp = n),
              (o.isProcessing = !0),
              c.process(o),
              d.process(o),
              u.process(o),
              p.process(o),
              h.process(o),
              m.process(o),
              (o.isProcessing = !1),
              r && t && ((s = !1), e(f));
          },
          b = () => {
            (r = !0), (s = !0), o.isProcessing || e(f);
          };
        return {
          schedule: n.reduce((e, t) => {
            let a = l[t];
            return (
              (e[t] = (e, t = !1, n = !1) => (r || b(), a.schedule(e, t, n))), e
            );
          }, {}),
          cancel: (e) => {
            for (let t = 0; t < n.length; t++) l[n[t]].cancel(e);
          },
          state: o,
          steps: l,
        };
      }
    },
    89811: (e, t, r) => {
      "use strict";
      r.d(t, { Gt: () => n, PP: () => i, WG: () => s, uv: () => o });
      var a = r(26054);
      let {
        schedule: n,
        cancel: s,
        state: o,
        steps: i,
      } = (0, r(28911).I)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : a.l,
        !0
      );
    },
    28797: (e, t, r) => {
      "use strict";
      let a;
      r.d(t, { k: () => i });
      var n = r(46327),
        s = r(89811);
      function o() {
        a = void 0;
      }
      let i = {
        now: () => (
          void 0 === a &&
            i.set(
              s.uv.isProcessing || n.W.useManualTiming
                ? s.uv.timestamp
                : performance.now()
            ),
          a
        ),
        set: (e) => {
          (a = e), queueMicrotask(o);
        },
      };
    },
    33624: (e, t, r) => {
      "use strict";
      function a(e) {
        return (
          null !== e && "object" == typeof e && "function" == typeof e.start
        );
      }
      r.d(t, { P: () => r1 });
      var n,
        s,
        o = r(61027);
      function i(e, t) {
        if (!Array.isArray(t)) return !1;
        let r = t.length;
        if (r !== e.length) return !1;
        for (let a = 0; a < r; a++) if (t[a] !== e[a]) return !1;
        return !0;
      }
      function l(e) {
        return "string" == typeof e || Array.isArray(e);
      }
      var c = r(37270);
      let d = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        u = ["initial", ...d];
      var p = r(76897);
      let h = u.length,
        m = [...d].reverse(),
        f = d.length;
      function b(e = !1) {
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function y() {
        return {
          animate: b(!0),
          whileInView: b(),
          whileHover: b(),
          whileTap: b(),
          whileDrag: b(),
          whileFocus: b(),
          exit: b(),
        };
      }
      class x {
        constructor(e) {
          (this.isMounted = !1), (this.node = e);
        }
        update() {}
      }
      class v extends x {
        constructor(e) {
          super(e),
            e.animationState ||
              (e.animationState = (function (e) {
                let t = (t) =>
                    Promise.all(
                      t.map(({ animation: t, options: r }) => (0, p._)(e, t, r))
                    ),
                  r = y(),
                  n = !0,
                  s = (t) => (r, a) => {
                    var n;
                    let s = (0, c.K)(
                      e,
                      a,
                      "exit" === t
                        ? null === (n = e.presenceContext) || void 0 === n
                          ? void 0
                          : n.custom
                        : void 0
                    );
                    if (s) {
                      let { transition: e, transitionEnd: t, ...a } = s;
                      r = { ...r, ...a, ...t };
                    }
                    return r;
                  };
                function d(c) {
                  let { props: d } = e,
                    p =
                      (function e(t) {
                        if (!t) return;
                        if (!t.isControllingVariants) {
                          let r = (t.parent && e(t.parent)) || {};
                          return (
                            void 0 !== t.props.initial &&
                              (r.initial = t.props.initial),
                            r
                          );
                        }
                        let r = {};
                        for (let e = 0; e < h; e++) {
                          let a = u[e],
                            n = t.props[a];
                          (l(n) || !1 === n) && (r[a] = n);
                        }
                        return r;
                      })(e.parent) || {},
                    b = [],
                    y = new Set(),
                    x = {},
                    v = 1 / 0;
                  for (let t = 0; t < f; t++) {
                    var g;
                    let u = m[t],
                      h = r[u],
                      f = void 0 !== d[u] ? d[u] : p[u],
                      E = l(f),
                      k = u === c ? h.isActive : null;
                    !1 === k && (v = t);
                    let C = f === p[u] && f !== d[u] && E;
                    if (
                      (C && n && e.manuallyAnimateOnMount && (C = !1),
                      (h.protectedKeys = { ...x }),
                      (!h.isActive && null === k) ||
                        (!f && !h.prevProp) ||
                        a(f) ||
                        "boolean" == typeof f)
                    )
                      continue;
                    let w =
                        ((g = h.prevProp),
                        "string" == typeof f
                          ? f !== g
                          : !!Array.isArray(f) && !i(f, g)),
                      T =
                        w || (u === c && h.isActive && !C && E) || (t > v && E),
                      S = !1,
                      A = Array.isArray(f) ? f : [f],
                      U = A.reduce(s(u), {});
                    !1 === k && (U = {});
                    let { prevResolvedValues: B = {} } = h,
                      M = { ...B, ...U },
                      P = (t) => {
                        (T = !0),
                          y.has(t) && ((S = !0), y.delete(t)),
                          (h.needsAnimating[t] = !0);
                        let r = e.getValue(t);
                        r && (r.liveStyle = !1);
                      };
                    for (let e in M) {
                      let t = U[e],
                        r = B[e];
                      if (!x.hasOwnProperty(e))
                        ((0, o.p)(t) && (0, o.p)(r) ? i(t, r) : t === r)
                          ? void 0 !== t && y.has(e)
                            ? P(e)
                            : (h.protectedKeys[e] = !0)
                          : null != t
                          ? P(e)
                          : y.add(e);
                    }
                    (h.prevProp = f),
                      (h.prevResolvedValues = U),
                      h.isActive && (x = { ...x, ...U }),
                      n && e.blockInitialAnimation && (T = !1);
                    let D = !(C && w) || S;
                    T &&
                      D &&
                      b.push(
                        ...A.map((e) => ({
                          animation: e,
                          options: { type: u },
                        }))
                      );
                  }
                  if (y.size) {
                    let t = {};
                    y.forEach((r) => {
                      let a = e.getBaseTarget(r),
                        n = e.getValue(r);
                      n && (n.liveStyle = !0), (t[r] = null != a ? a : null);
                    }),
                      b.push({ animation: t });
                  }
                  let E = !!b.length;
                  return (
                    n &&
                      (!1 === d.initial || d.initial === d.animate) &&
                      !e.manuallyAnimateOnMount &&
                      (E = !1),
                    (n = !1),
                    E ? t(b) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: d,
                  setActive: function (t, a) {
                    var n;
                    if (r[t].isActive === a) return Promise.resolve();
                    null === (n = e.variantChildren) ||
                      void 0 === n ||
                      n.forEach((e) => {
                        var r;
                        return null === (r = e.animationState) || void 0 === r
                          ? void 0
                          : r.setActive(t, a);
                      }),
                      (r[t].isActive = a);
                    let s = d(t);
                    for (let e in r) r[e].protectedKeys = {};
                    return s;
                  },
                  setAnimateFunction: function (r) {
                    t = r(e);
                  },
                  getState: () => r,
                  reset: () => {
                    (r = y()), (n = !0);
                  },
                };
              })(e));
        }
        updateAnimationControlsSubscription() {
          let { animate: e } = this.node.getProps();
          a(e) && (this.unmountControls = e.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: e } = this.node.getProps(),
            { animate: t } = this.node.prevProps || {};
          e !== t && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var e;
          this.node.animationState.reset(),
            null === (e = this.unmountControls) || void 0 === e || e.call(this);
        }
      }
      let g = 0;
      class E extends x {
        constructor() {
          super(...arguments), (this.id = g++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: r } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === r) return;
          let a = this.node.animationState.setActive("exit", !e);
          t && !e && a.then(() => t(this.id));
        }
        mount() {
          let { register: e } = this.node.presenceContext || {};
          e && (this.unmount = e(this.id));
        }
        unmount() {}
      }
      var k = r(26054),
        C = r(45107),
        w = r(75713),
        T = r(40300);
      function S(e, t, r, a = { passive: !0 }) {
        return e.addEventListener(t, r, a), () => e.removeEventListener(t, r);
      }
      function A(e) {
        return { point: { x: e.pageX, y: e.pageY } };
      }
      let U = (e) => (t) => (0, w.Mc)(t) && e(t, A(t));
      function B(e, t, r, a) {
        return S(e, t, U(r), a);
      }
      let M = (e, t) => Math.abs(e - t);
      var P = r(23348),
        D = r(89811);
      class F {
        constructor(
          e,
          t,
          {
            transformPagePoint: r,
            contextWindow: a,
            dragSnapToOrigin: n = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let e = R(this.lastMoveEventInfo, this.history),
                t = null !== this.startEvent,
                r =
                  (function (e, t) {
                    return Math.sqrt(M(e.x, t.x) ** 2 + M(e.y, t.y) ** 2);
                  })(e.offset, { x: 0, y: 0 }) >= 3;
              if (!t && !r) return;
              let { point: a } = e,
                { timestamp: n } = D.uv;
              this.history.push({ ...a, timestamp: n });
              let { onStart: s, onMove: o } = this.handlers;
              t ||
                (s && s(this.lastMoveEvent, e),
                (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, e);
            }),
            (this.handlePointerMove = (e, t) => {
              (this.lastMoveEvent = e),
                (this.lastMoveEventInfo = I(t, this.transformPagePoint)),
                D.Gt.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (e, t) => {
              this.end();
              let {
                onEnd: r,
                onSessionEnd: a,
                resumeAnimation: n,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && n && n(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = R(
                "pointercancel" === e.type
                  ? this.lastMoveEventInfo
                  : I(t, this.transformPagePoint),
                this.history
              );
              this.startEvent && r && r(e, s), a && a(e, s);
            }),
            !(0, w.Mc)(e))
          )
            return;
          (this.dragSnapToOrigin = n),
            (this.handlers = t),
            (this.transformPagePoint = r),
            (this.contextWindow = a || window);
          let s = I(A(e), this.transformPagePoint),
            { point: o } = s,
            { timestamp: i } = D.uv;
          this.history = [{ ...o, timestamp: i }];
          let { onSessionStart: l } = t;
          l && l(e, R(s, this.history)),
            (this.removeListeners = (0, P.F)(
              B(this.contextWindow, "pointermove", this.handlePointerMove),
              B(this.contextWindow, "pointerup", this.handlePointerUp),
              B(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(e) {
          this.handlers = e;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, D.WG)(this.updatePoint);
        }
      }
      function I(e, t) {
        return t ? { point: t(e.point) } : e;
      }
      function O(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function R({ point: e }, t) {
        return {
          point: e,
          delta: O(e, L(t)),
          offset: O(e, t[0]),
          velocity: (function (e, t) {
            if (e.length < 2) return { x: 0, y: 0 };
            let r = e.length - 1,
              a = null,
              n = L(e);
            for (
              ;
              r >= 0 &&
              ((a = e[r]), !(n.timestamp - a.timestamp > (0, T.f)(0.1)));

            )
              r--;
            if (!a) return { x: 0, y: 0 };
            let s = (0, T.X)(n.timestamp - a.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (n.x - a.x) / s, y: (n.y - a.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(t, 0),
        };
      }
      function L(e) {
        return e[e.length - 1];
      }
      function N(e) {
        return (
          e &&
          "object" == typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      var z = r(19615),
        K = r(71618);
      function V(e) {
        return e.max - e.min;
      }
      function H(e, t, r, a = 0.5) {
        (e.origin = a),
          (e.originPoint = (0, K.k)(t.min, t.max, e.origin)),
          (e.scale = V(r) / V(t)),
          (e.translate = (0, K.k)(r.min, r.max, e.origin) - e.originPoint),
          ((e.scale >= 0.9999 && e.scale <= 1.0001) || isNaN(e.scale)) &&
            (e.scale = 1),
          ((e.translate >= -0.01 && e.translate <= 0.01) ||
            isNaN(e.translate)) &&
            (e.translate = 0);
      }
      function j(e, t, r, a) {
        H(e.x, t.x, r.x, a ? a.originX : void 0),
          H(e.y, t.y, r.y, a ? a.originY : void 0);
      }
      function _(e, t, r) {
        (e.min = r.min + t.min), (e.max = e.min + V(t));
      }
      function G(e, t, r) {
        (e.min = t.min - r.min), (e.max = e.min + V(t));
      }
      function W(e, t, r) {
        G(e.x, t.x, r.x), G(e.y, t.y, r.y);
      }
      var q = r(11515);
      function $(e, t, r) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== r ? e.max + r - (e.max - e.min) : void 0,
        };
      }
      function X(e, t) {
        let r = t.min - e.min,
          a = t.max - e.max;
        return (
          t.max - t.min < e.max - e.min && ([r, a] = [a, r]), { min: r, max: a }
        );
      }
      function Z(e, t, r) {
        return { min: J(e, t), max: J(e, r) };
      }
      function J(e, t) {
        return "number" == typeof e ? e : e[t] || 0;
      }
      let Y = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        Q = () => ({ x: Y(), y: Y() }),
        ee = () => ({ min: 0, max: 0 }),
        et = () => ({ x: ee(), y: ee() });
      function er(e) {
        return [e("x"), e("y")];
      }
      function ea({ top: e, left: t, right: r, bottom: a }) {
        return { x: { min: t, max: r }, y: { min: e, max: a } };
      }
      function en(e) {
        return void 0 === e || 1 === e;
      }
      function es({ scale: e, scaleX: t, scaleY: r }) {
        return !en(e) || !en(t) || !en(r);
      }
      function eo(e) {
        return (
          es(e) ||
          ei(e) ||
          e.z ||
          e.rotate ||
          e.rotateX ||
          e.rotateY ||
          e.skewX ||
          e.skewY
        );
      }
      function ei(e) {
        var t, r;
        return ((t = e.x) && "0%" !== t) || ((r = e.y) && "0%" !== r);
      }
      function el(e, t, r, a, n) {
        return void 0 !== n && (e = a + n * (e - a)), a + r * (e - a) + t;
      }
      function ec(e, t = 0, r = 1, a, n) {
        (e.min = el(e.min, t, r, a, n)), (e.max = el(e.max, t, r, a, n));
      }
      function ed(e, { x: t, y: r }) {
        ec(e.x, t.translate, t.scale, t.originPoint),
          ec(e.y, r.translate, r.scale, r.originPoint);
      }
      function eu(e, t) {
        (e.min = e.min + t), (e.max = e.max + t);
      }
      function ep(e, t, r, a, n = 0.5) {
        let s = (0, K.k)(e.min, e.max, n);
        ec(e, t, r, s, a);
      }
      function eh(e, t) {
        ep(e.x, t.x, t.scaleX, t.scale, t.originX),
          ep(e.y, t.y, t.scaleY, t.scale, t.originY);
      }
      function em(e, t) {
        return ea(
          (function (e, t) {
            if (!t) return e;
            let r = t({ x: e.left, y: e.top }),
              a = t({ x: e.right, y: e.bottom });
            return { top: r.y, left: r.x, bottom: a.y, right: a.x };
          })(e.getBoundingClientRect(), t)
        );
      }
      var ef = r(29286),
        eb = r(60604);
      let ey = ({ current: e }) => (e ? e.ownerDocument.defaultView : null);
      var ex = r(56126);
      let ev = new WeakMap();
      class eg {
        constructor(e) {
          (this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = et()),
            (this.visualElement = e);
        }
        start(e, { snapToCursor: t = !1 } = {}) {
          let { presenceContext: r } = this.visualElement;
          if (r && !1 === r.isPresent) return;
          let { dragSnapToOrigin: a } = this.getProps();
          this.panSession = new F(
            e,
            {
              onSessionStart: (e) => {
                let { dragSnapToOrigin: r } = this.getProps();
                r ? this.pauseAnimation() : this.stopAnimation(),
                  t && this.snapToCursor(A(e).point);
              },
              onStart: (e, t) => {
                let {
                  drag: r,
                  dragPropagation: a,
                  onDragStart: n,
                } = this.getProps();
                if (
                  r &&
                  !a &&
                  (this.openDragLock && this.openDragLock(),
                  (this.openDragLock = (0, w.Wp)(r)),
                  !this.openDragLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  er((e) => {
                    let t = this.getAxisMotionValue(e).get() || 0;
                    if (ef.KN.test(t)) {
                      let { projection: r } = this.visualElement;
                      if (r && r.layout) {
                        let a = r.layout.layoutBox[e];
                        a && (t = V(a) * (parseFloat(t) / 100));
                      }
                    }
                    this.originPoint[e] = t;
                  }),
                  n && D.Gt.postRender(() => n(e, t)),
                  (0, ex.g)(this.visualElement, "transform");
                let { animationState: s } = this.visualElement;
                s && s.setActive("whileDrag", !0);
              },
              onMove: (e, t) => {
                let {
                  dragPropagation: r,
                  dragDirectionLock: a,
                  onDirectionLock: n,
                  onDrag: s,
                } = this.getProps();
                if (!r && !this.openDragLock) return;
                let { offset: o } = t;
                if (a && null === this.currentDirection) {
                  (this.currentDirection = (function (e, t = 10) {
                    let r = null;
                    return (
                      Math.abs(e.y) > t
                        ? (r = "y")
                        : Math.abs(e.x) > t && (r = "x"),
                      r
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      n &&
                      n(this.currentDirection);
                  return;
                }
                this.updateAxis("x", t.point, o),
                  this.updateAxis("y", t.point, o),
                  this.visualElement.render(),
                  s && s(e, t);
              },
              onSessionEnd: (e, t) => this.stop(e, t),
              resumeAnimation: () =>
                er((e) => {
                  var t;
                  return (
                    "paused" === this.getAnimationState(e) &&
                    (null === (t = this.getAxisMotionValue(e).animation) ||
                    void 0 === t
                      ? void 0
                      : t.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: a,
              contextWindow: ey(this.visualElement),
            }
          );
        }
        stop(e, t) {
          let r = this.isDragging;
          if ((this.cancel(), !r)) return;
          let { velocity: a } = t;
          this.startAnimation(a);
          let { onDragEnd: n } = this.getProps();
          n && D.Gt.postRender(() => n(e, t));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: e, animationState: t } = this.visualElement;
          e && (e.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: r } = this.getProps();
          !r &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            t && t.setActive("whileDrag", !1);
        }
        updateAxis(e, t, r) {
          let { drag: a } = this.getProps();
          if (!r || !eE(e, a, this.currentDirection)) return;
          let n = this.getAxisMotionValue(e),
            s = this.originPoint[e] + r[e];
          this.constraints &&
            this.constraints[e] &&
            (s = (function (e, { min: t, max: r }, a) {
              return (
                void 0 !== t && e < t
                  ? (e = a ? (0, K.k)(t, e, a.min) : Math.max(e, t))
                  : void 0 !== r &&
                    e > r &&
                    (e = a ? (0, K.k)(r, e, a.max) : Math.min(e, r)),
                e
              );
            })(s, this.constraints[e], this.elastic[e])),
            n.set(s);
        }
        resolveConstraints() {
          var e;
          let { dragConstraints: t, dragElastic: r } = this.getProps(),
            a =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (e = this.visualElement.projection) || void 0 === e
                ? void 0
                : e.layout,
            n = this.constraints;
          t && N(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && a
            ? (this.constraints = (function (
                e,
                { top: t, left: r, bottom: a, right: n }
              ) {
                return { x: $(e.x, r, n), y: $(e.y, t, a) };
              })(a.layoutBox, t))
            : (this.constraints = !1),
            (this.elastic = (function (e = 0.35) {
              return (
                !1 === e ? (e = 0) : !0 === e && (e = 0.35),
                { x: Z(e, "left", "right"), y: Z(e, "top", "bottom") }
              );
            })(r)),
            n !== this.constraints &&
              a &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              er((e) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(e) &&
                  (this.constraints[e] = (function (e, t) {
                    let r = {};
                    return (
                      void 0 !== t.min && (r.min = t.min - e.min),
                      void 0 !== t.max && (r.max = t.max - e.min),
                      r
                    );
                  })(a.layoutBox[e], this.constraints[e]));
              });
        }
        resolveRefConstraints() {
          var e;
          let { dragConstraints: t, onMeasureDragConstraints: r } =
            this.getProps();
          if (!t || !N(t)) return !1;
          let a = t.current;
          (0, C.V)(
            null !== a,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: n } = this.visualElement;
          if (!n || !n.layout) return !1;
          let s = (function (e, t, r) {
              let a = em(e, r),
                { scroll: n } = t;
              return n && (eu(a.x, n.offset.x), eu(a.y, n.offset.y)), a;
            })(a, n.root, this.visualElement.getTransformPagePoint()),
            o = { x: X((e = n.layout.layoutBox).x, s.x), y: X(e.y, s.y) };
          if (r) {
            let e = r(
              (function ({ x: e, y: t }) {
                return { top: t.min, right: e.max, bottom: t.max, left: e.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!e), e && (o = ea(e));
          }
          return o;
        }
        startAnimation(e) {
          let {
              drag: t,
              dragMomentum: r,
              dragElastic: a,
              dragTransition: n,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            i = this.constraints || {};
          return Promise.all(
            er((o) => {
              if (!eE(o, t, this.currentDirection)) return;
              let l = (i && i[o]) || {};
              s && (l = { min: 0, max: 0 });
              let c = {
                type: "inertia",
                velocity: r ? e[o] : 0,
                bounceStiffness: a ? 200 : 1e6,
                bounceDamping: a ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...n,
                ...l,
              };
              return this.startAxisValueAnimation(o, c);
            })
          ).then(o);
        }
        startAxisValueAnimation(e, t) {
          let r = this.getAxisMotionValue(e);
          return (
            (0, ex.g)(this.visualElement, e),
            r.start((0, eb.f)(e, r, 0, t, this.visualElement, !1))
          );
        }
        stopAnimation() {
          er((e) => this.getAxisMotionValue(e).stop());
        }
        pauseAnimation() {
          er((e) => {
            var t;
            return null === (t = this.getAxisMotionValue(e).animation) ||
              void 0 === t
              ? void 0
              : t.pause();
          });
        }
        getAnimationState(e) {
          var t;
          return null === (t = this.getAxisMotionValue(e).animation) ||
            void 0 === t
            ? void 0
            : t.state;
        }
        getAxisMotionValue(e) {
          let t = `_drag${e.toUpperCase()}`,
            r = this.visualElement.getProps();
          return (
            r[t] ||
            this.visualElement.getValue(
              e,
              (r.initial ? r.initial[e] : void 0) || 0
            )
          );
        }
        snapToCursor(e) {
          er((t) => {
            let { drag: r } = this.getProps();
            if (!eE(t, r, this.currentDirection)) return;
            let { projection: a } = this.visualElement,
              n = this.getAxisMotionValue(t);
            if (a && a.layout) {
              let { min: r, max: s } = a.layout.layoutBox[t];
              n.set(e[t] - (0, K.k)(r, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: e, dragConstraints: t } = this.getProps(),
            { projection: r } = this.visualElement;
          if (!N(t) || !r || !this.constraints) return;
          this.stopAnimation();
          let a = { x: 0, y: 0 };
          er((e) => {
            let t = this.getAxisMotionValue(e);
            if (t && !1 !== this.constraints) {
              let r = t.get();
              a[e] = (function (e, t) {
                let r = 0.5,
                  a = V(e),
                  n = V(t);
                return (
                  n > a
                    ? (r = (0, z.q)(t.min, t.max - a, e.min))
                    : a > n && (r = (0, z.q)(e.min, e.max - n, t.min)),
                  (0, q.q)(0, 1, r)
                );
              })({ min: r, max: r }, this.constraints[e]);
            }
          });
          let { transformTemplate: n } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = n ? n({}, "") : "none"),
            r.root && r.root.updateScroll(),
            r.updateLayout(),
            this.resolveConstraints(),
            er((t) => {
              if (!eE(t, e, null)) return;
              let r = this.getAxisMotionValue(t),
                { min: n, max: s } = this.constraints[t];
              r.set((0, K.k)(n, s, a[t]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          ev.set(this.visualElement, this);
          let e = B(this.visualElement.current, "pointerdown", (e) => {
              let { drag: t, dragListener: r = !0 } = this.getProps();
              t && r && this.start(e);
            }),
            t = () => {
              let { dragConstraints: e } = this.getProps();
              N(e) &&
                e.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: r } = this.visualElement,
            a = r.addEventListener("measure", t);
          r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()),
            D.Gt.read(t);
          let n = S(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            s = r.addEventListener(
              "didUpdate",
              ({ delta: e, hasLayoutChanged: t }) => {
                this.isDragging &&
                  t &&
                  (er((t) => {
                    let r = this.getAxisMotionValue(t);
                    r &&
                      ((this.originPoint[t] += e[t].translate),
                      r.set(r.get() + e[t].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            n(), e(), a(), s && s();
          };
        }
        getProps() {
          let e = this.visualElement.getProps(),
            {
              drag: t = !1,
              dragDirectionLock: r = !1,
              dragPropagation: a = !1,
              dragConstraints: n = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = e;
          return {
            ...e,
            drag: t,
            dragDirectionLock: r,
            dragPropagation: a,
            dragConstraints: n,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function eE(e, t, r) {
        return (!0 === t || t === e) && (null === r || r === e);
      }
      class ek extends x {
        constructor(e) {
          super(e),
            (this.removeGroupControls = k.l),
            (this.removeListeners = k.l),
            (this.controls = new eg(e));
        }
        mount() {
          let { dragControls: e } = this.node.getProps();
          e && (this.removeGroupControls = e.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || k.l);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let eC = (e) => (t, r) => {
        e && D.Gt.postRender(() => e(t, r));
      };
      class ew extends x {
        constructor() {
          super(...arguments), (this.removePointerDownListener = k.l);
        }
        onPointerDown(e) {
          this.session = new F(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: ey(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: e,
            onPanStart: t,
            onPan: r,
            onPanEnd: a,
          } = this.node.getProps();
          return {
            onSessionStart: eC(e),
            onStart: eC(t),
            onMove: r,
            onEnd: (e, t) => {
              delete this.session, a && D.Gt.postRender(() => a(e, t));
            },
          };
        }
        mount() {
          this.removePointerDownListener = B(
            this.node.current,
            "pointerdown",
            (e) => this.onPointerDown(e)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var eT = r(95155),
        eS = r(12115),
        eA = r(80407),
        eU = r(16046);
      let eB = (0, eS.createContext)({}),
        eM = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function eP(e, t) {
        return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
      }
      let eD = {
        correct: (e, t) => {
          if (!t.target) return e;
          if ("string" == typeof e) {
            if (!ef.px.test(e)) return e;
            e = parseFloat(e);
          }
          let r = eP(e, t.target.x),
            a = eP(e, t.target.y);
          return `${r}% ${a}%`;
        },
      };
      var eF = r(76560);
      let eI = {},
        { schedule: eO, cancel: eR } = (0, r(28911).I)(queueMicrotask, !1);
      class eL extends eS.Component {
        componentDidMount() {
          let {
              visualElement: e,
              layoutGroup: t,
              switchLayoutGroup: r,
              layoutId: a,
            } = this.props,
            { projection: n } = e;
          Object.assign(eI, ez),
            n &&
              (t.group && t.group.add(n),
              r && r.register && a && r.register(n),
              n.root.didUpdate(),
              n.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              n.setOptions({
                ...n.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (eM.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(e) {
          let {
              layoutDependency: t,
              visualElement: r,
              drag: a,
              isPresent: n,
            } = this.props,
            s = r.projection;
          return (
            s &&
              ((s.isPresent = n),
              a || e.layoutDependency !== t || void 0 === t
                ? s.willUpdate()
                : this.safeToRemove(),
              e.isPresent === n ||
                (n
                  ? s.promote()
                  : s.relegate() ||
                    D.Gt.postRender(() => {
                      let e = s.getStack();
                      (e && e.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: e } = this.props.visualElement;
          e &&
            (e.root.didUpdate(),
            eO.postRender(() => {
              !e.currentAnimation && e.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: e,
              layoutGroup: t,
              switchLayoutGroup: r,
            } = this.props,
            { projection: a } = e;
          a &&
            (a.scheduleCheckAfterUnmount(),
            t && t.group && t.group.remove(a),
            r && r.deregister && r.deregister(a));
        }
        safeToRemove() {
          let { safeToRemove: e } = this.props;
          e && e();
        }
        render() {
          return null;
        }
      }
      function eN(e) {
        let [t, r] = (0, eA.xQ)(),
          a = (0, eS.useContext)(eU.L);
        return (0, eT.jsx)(eL, {
          ...e,
          layoutGroup: a,
          switchLayoutGroup: (0, eS.useContext)(eB),
          isPresent: t,
          safeToRemove: r,
        });
      }
      let ez = {
        borderRadius: {
          ...eD,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: eD,
        borderTopRightRadius: eD,
        borderBottomLeftRadius: eD,
        borderBottomRightRadius: eD,
        boxShadow: {
          correct: (e, { treeScale: t, projectionDelta: r }) => {
            let a = eF.f.parse(e);
            if (a.length > 5) return e;
            let n = eF.f.createTransformer(e),
              s = "number" != typeof a[0] ? 1 : 0,
              o = r.x.scale * t.x,
              i = r.y.scale * t.y;
            (a[0 + s] /= o), (a[1 + s] /= i);
            let l = (0, K.k)(o, i, 0.5);
            return (
              "number" == typeof a[2 + s] && (a[2 + s] /= l),
              "number" == typeof a[3 + s] && (a[3 + s] /= l),
              n(a)
            );
          },
        },
      };
      var eK = r(63930),
        eV = r(47371),
        eH = r(92077),
        ej = r(28797),
        e_ = r(53605);
      let eG = (e, t) => e.depth - t.depth;
      class eW {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(e) {
          (0, e_.Kq)(this.children, e), (this.isDirty = !0);
        }
        remove(e) {
          (0, e_.Ai)(this.children, e), (this.isDirty = !0);
        }
        forEach(e) {
          this.isDirty && this.children.sort(eG),
            (this.isDirty = !1),
            this.children.forEach(e);
        }
      }
      var eq = r(74945),
        e$ = r(55614);
      function eX(e) {
        let t = (0, eV.S)(e) ? e.get() : e;
        return (0, e$.B)(t) ? t.toValue() : t;
      }
      var eZ = r(16663);
      let eJ = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        eY = eJ.length,
        eQ = (e) => ("string" == typeof e ? parseFloat(e) : e),
        e0 = (e) => "number" == typeof e || ef.px.test(e);
      function e1(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius;
      }
      let e2 = e7(0, 0.5, eZ.yT),
        e3 = e7(0.5, 0.95, k.l);
      function e7(e, t, r) {
        return (a) => (a < e ? 0 : a > t ? 1 : r((0, z.q)(e, t, a)));
      }
      function e6(e, t) {
        (e.min = t.min), (e.max = t.max);
      }
      function e8(e, t) {
        e6(e.x, t.x), e6(e.y, t.y);
      }
      function e5(e, t) {
        (e.translate = t.translate),
          (e.scale = t.scale),
          (e.originPoint = t.originPoint),
          (e.origin = t.origin);
      }
      function e9(e, t, r, a, n) {
        return (
          (e -= t),
          (e = a + (1 / r) * (e - a)),
          void 0 !== n && (e = a + (1 / n) * (e - a)),
          e
        );
      }
      function e4(e, t, [r, a, n], s, o) {
        !(function (e, t = 0, r = 1, a = 0.5, n, s = e, o = e) {
          if (
            (ef.KN.test(t) &&
              ((t = parseFloat(t)),
              (t = (0, K.k)(o.min, o.max, t / 100) - o.min)),
            "number" != typeof t)
          )
            return;
          let i = (0, K.k)(s.min, s.max, a);
          e === s && (i -= t),
            (e.min = e9(e.min, t, r, i, n)),
            (e.max = e9(e.max, t, r, i, n));
        })(e, t[r], t[a], t[n], t.scale, s, o);
      }
      let te = ["x", "scaleX", "originX"],
        tt = ["y", "scaleY", "originY"];
      function tr(e, t, r, a) {
        e4(e.x, t, te, r ? r.x : void 0, a ? a.x : void 0),
          e4(e.y, t, tt, r ? r.y : void 0, a ? a.y : void 0);
      }
      function ta(e) {
        return 0 === e.translate && 1 === e.scale;
      }
      function tn(e) {
        return ta(e.x) && ta(e.y);
      }
      function ts(e, t) {
        return e.min === t.min && e.max === t.max;
      }
      function to(e, t) {
        return (
          Math.round(e.min) === Math.round(t.min) &&
          Math.round(e.max) === Math.round(t.max)
        );
      }
      function ti(e, t) {
        return to(e.x, t.x) && to(e.y, t.y);
      }
      function tl(e) {
        return V(e.x) / V(e.y);
      }
      function tc(e, t) {
        return (
          e.translate === t.translate &&
          e.scale === t.scale &&
          e.originPoint === t.originPoint
        );
      }
      class td {
        constructor() {
          this.members = [];
        }
        add(e) {
          (0, e_.Kq)(this.members, e), e.scheduleRender();
        }
        remove(e) {
          if (
            ((0, e_.Ai)(this.members, e),
            e === this.prevLead && (this.prevLead = void 0),
            e === this.lead)
          ) {
            let e = this.members[this.members.length - 1];
            e && this.promote(e);
          }
        }
        relegate(e) {
          let t;
          let r = this.members.findIndex((t) => e === t);
          if (0 === r) return !1;
          for (let e = r; e >= 0; e--) {
            let r = this.members[e];
            if (!1 !== r.isPresent) {
              t = r;
              break;
            }
          }
          return !!t && (this.promote(t), !0);
        }
        promote(e, t) {
          let r = this.lead;
          if (e !== r && ((this.prevLead = r), (this.lead = e), e.show(), r)) {
            r.instance && r.scheduleRender(),
              e.scheduleRender(),
              (e.resumeFrom = r),
              t && (e.resumeFrom.preserveOpacity = !0),
              r.snapshot &&
                ((e.snapshot = r.snapshot),
                (e.snapshot.latestValues =
                  r.animationValues || r.latestValues)),
              e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            let { crossfade: a } = e.options;
            !1 === a && r.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((e) => {
            let { options: t, resumingFrom: r } = e;
            t.onExitComplete && t.onExitComplete(),
              r && r.options.onExitComplete && r.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((e) => {
            e.instance && e.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let tu = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        tp = "undefined" != typeof window && void 0 !== window.MotionDebug,
        th = ["", "X", "Y", "Z"],
        tm = { visibility: "hidden" },
        tf = 0;
      function tb(e, t, r, a) {
        let { latestValues: n } = t;
        n[e] && ((r[e] = n[e]), t.setStaticValue(e, 0), a && (a[e] = 0));
      }
      function ty({
        attachResizeListener: e,
        defaultParent: t,
        measureScroll: r,
        checkIsScrollRoot: a,
        resetTransform: n,
      }) {
        return class {
          constructor(e = {}, r = null == t ? void 0 : t()) {
            (this.id = tf++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  tp &&
                    (tu.totalNodes =
                      tu.resolvedTargetDeltas =
                      tu.recalculatedProjection =
                        0),
                  this.nodes.forEach(tg),
                  this.nodes.forEach(tA),
                  this.nodes.forEach(tU),
                  this.nodes.forEach(tE),
                  tp && window.MotionDebug.record(tu);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = e),
              (this.root = r ? r.root || r : this),
              (this.path = r ? [...r.path, r] : []),
              (this.parent = r),
              (this.depth = r ? r.depth + 1 : 0);
            for (let e = 0; e < this.path.length; e++)
              this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new eW());
          }
          addEventListener(e, t) {
            return (
              this.eventHandlers.has(e) ||
                this.eventHandlers.set(e, new eq.v()),
              this.eventHandlers.get(e).add(t)
            );
          }
          notifyListeners(e, ...t) {
            let r = this.eventHandlers.get(e);
            r && r.notify(...t);
          }
          hasListeners(e) {
            return this.eventHandlers.has(e);
          }
          mount(t, r = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = t instanceof SVGElement && "svg" !== t.tagName),
              (this.instance = t);
            let { layoutId: a, layout: n, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(t),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              r && (n || a) && (this.isLayoutDirty = !0),
              e)
            ) {
              let r;
              let a = () => (this.root.updateBlockedByResize = !1);
              e(t, () => {
                (this.root.updateBlockedByResize = !0),
                  r && r(),
                  (r = (function (e, t) {
                    let r = ej.k.now(),
                      a = ({ timestamp: t }) => {
                        let n = t - r;
                        n >= 250 && ((0, D.WG)(a), e(n - 250));
                      };
                    return D.Gt.read(a, !0), () => (0, D.WG)(a);
                  })(a, 250)),
                  eM.hasAnimatedSinceResize &&
                    ((eM.hasAnimatedSinceResize = !1), this.nodes.forEach(tS));
              });
            }
            a && this.root.registerSharedNode(a, this),
              !1 !== this.options.animate &&
                s &&
                (a || n) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: e,
                    hasLayoutChanged: t,
                    hasRelativeTargetChanged: r,
                    layout: a,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let n =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        tI,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: i,
                      } = s.getProps(),
                      l = !this.targetLayout || !ti(this.targetLayout, a) || r,
                      c = !t && r;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      c ||
                      (t && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(e, c);
                      let t = {
                        ...(0, w.rU)(n, "layout"),
                        onPlay: o,
                        onComplete: i,
                      };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((t.delay = 0), (t.type = !1)),
                        this.startAnimation(t);
                    } else
                      t || tS(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = a;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let e = this.getStack();
            e && e.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, D.WG)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(tB),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: e } = this.options;
            return e && e.getProps().transformTemplate;
          }
          willUpdate(e = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function e(t) {
                  if (((t.hasCheckedOptimisedAppear = !0), t.root === t))
                    return;
                  let { visualElement: r } = t.options;
                  if (!r) return;
                  let a = (0, eH.P)(r);
                  if (window.MotionHasOptimisedAnimation(a, "transform")) {
                    let { layout: e, layoutId: r } = t.options;
                    window.MotionCancelOptimisedAnimation(
                      a,
                      "transform",
                      D.Gt,
                      !(e || r)
                    );
                  }
                  let { parent: n } = t;
                  n && !n.hasCheckedOptimisedAppear && e(n);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let e = 0; e < this.path.length; e++) {
              let t = this.path[e];
              (t.shouldResetTransform = !0),
                t.updateScroll("snapshot"),
                t.options.layoutRoot && t.willUpdate(!1);
            }
            let { layoutId: t, layout: r } = this.options;
            if (void 0 === t && !r) return;
            let a = this.getTransformTemplate();
            (this.prevTransformTemplateValue = a
              ? a(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              e && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(tC);
              return;
            }
            this.isUpdating || this.nodes.forEach(tw),
              (this.isUpdating = !1),
              this.nodes.forEach(tT),
              this.nodes.forEach(tx),
              this.nodes.forEach(tv),
              this.clearAllSnapshots();
            let e = ej.k.now();
            (D.uv.delta = (0, q.q)(0, 1e3 / 60, e - D.uv.timestamp)),
              (D.uv.timestamp = e),
              (D.uv.isProcessing = !0),
              D.PP.update.process(D.uv),
              D.PP.preRender.process(D.uv),
              D.PP.render.process(D.uv),
              (D.uv.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), eO.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(tk), this.sharedNodes.forEach(tM);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              D.Gt.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            D.Gt.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let e = 0; e < this.path.length; e++)
                this.path[e].updateScroll();
            let e = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = et()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: t } = this.options;
            t &&
              t.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                e ? e.layoutBox : void 0
              );
          }
          updateScroll(e = "measure") {
            let t = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === e &&
                (t = !1),
              t)
            ) {
              let t = a(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: e,
                isRoot: t,
                offset: r(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : t,
              };
            }
          }
          resetTransform() {
            if (!n) return;
            let e =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              t = this.projectionDelta && !tn(this.projectionDelta),
              r = this.getTransformTemplate(),
              a = r ? r(this.latestValues, "") : void 0,
              s = a !== this.prevTransformTemplateValue;
            e &&
              (t || eo(this.latestValues) || s) &&
              (n(this.instance, a),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(e = !0) {
            var t;
            let r = this.measurePageBox(),
              a = this.removeElementScroll(r);
            return (
              e && (a = this.removeTransform(a)),
              tL((t = a).x),
              tL(t.y),
              {
                animationId: this.root.animationId,
                measuredBox: r,
                layoutBox: a,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var e;
            let { visualElement: t } = this.options;
            if (!t) return et();
            let r = t.measureViewportBox();
            if (
              !(
                (null === (e = this.scroll) || void 0 === e
                  ? void 0
                  : e.wasRoot) || this.path.some(tz)
              )
            ) {
              let { scroll: e } = this.root;
              e && (eu(r.x, e.offset.x), eu(r.y, e.offset.y));
            }
            return r;
          }
          removeElementScroll(e) {
            var t;
            let r = et();
            if (
              (e8(r, e),
              null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot)
            )
              return r;
            for (let t = 0; t < this.path.length; t++) {
              let a = this.path[t],
                { scroll: n, options: s } = a;
              a !== this.root &&
                n &&
                s.layoutScroll &&
                (n.wasRoot && e8(r, e),
                eu(r.x, n.offset.x),
                eu(r.y, n.offset.y));
            }
            return r;
          }
          applyTransform(e, t = !1) {
            let r = et();
            e8(r, e);
            for (let e = 0; e < this.path.length; e++) {
              let a = this.path[e];
              !t &&
                a.options.layoutScroll &&
                a.scroll &&
                a !== a.root &&
                eh(r, { x: -a.scroll.offset.x, y: -a.scroll.offset.y }),
                eo(a.latestValues) && eh(r, a.latestValues);
            }
            return eo(this.latestValues) && eh(r, this.latestValues), r;
          }
          removeTransform(e) {
            let t = et();
            e8(t, e);
            for (let e = 0; e < this.path.length; e++) {
              let r = this.path[e];
              if (!r.instance || !eo(r.latestValues)) continue;
              es(r.latestValues) && r.updateSnapshot();
              let a = et();
              e8(a, r.measurePageBox()),
                tr(
                  t,
                  r.latestValues,
                  r.snapshot ? r.snapshot.layoutBox : void 0,
                  a
                );
            }
            return eo(this.latestValues) && tr(t, this.latestValues), t;
          }
          setTargetDelta(e) {
            (this.targetDelta = e),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(e) {
            this.options = {
              ...this.options,
              ...e,
              crossfade: void 0 === e.crossfade || e.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== D.uv.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(e = !1) {
            var t, r, a, n;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s;
            if (
              !(
                e ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: i, layoutId: l } = this.options;
            if (this.layout && (i || l)) {
              if (
                ((this.resolvedRelativeTargetAt = D.uv.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let e = this.getClosestProjectingParent();
                e && e.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = e),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = et()),
                    (this.relativeTargetOrigin = et()),
                    W(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      e.layout.layoutBox
                    ),
                    e8(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = et()), (this.targetWithTransforms = et())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (r = this.target),
                      (a = this.relativeTarget),
                      (n = this.relativeParent.target),
                      _(r.x, a.x, n.x),
                      _(r.y, a.y, n.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : e8(this.target, this.layout.layoutBox),
                      ed(this.target, this.targetDelta))
                    : e8(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let e = this.getClosestProjectingParent();
                  e &&
                  !!e.resumingFrom == !!this.resumingFrom &&
                  !e.options.layoutScroll &&
                  e.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = e),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = et()),
                      (this.relativeTargetOrigin = et()),
                      W(this.relativeTargetOrigin, this.target, e.target),
                      e8(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                tp && tu.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              es(this.parent.latestValues) ||
              ei(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var e;
            let t = this.getLead(),
              r = !!this.resumingFrom || this !== t,
              a = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty)) &&
                (a = !1),
              r &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (a = !1),
              this.resolvedRelativeTargetAt === D.uv.timestamp && (a = !1),
              a)
            )
              return;
            let { layout: n, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(n || s))
            )
              return;
            e8(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              i = this.treeScale.y;
            !(function (e, t, r, a = !1) {
              let n, s;
              let o = r.length;
              if (o) {
                t.x = t.y = 1;
                for (let i = 0; i < o; i++) {
                  s = (n = r[i]).projectionDelta;
                  let { visualElement: o } = n.options;
                  (!o ||
                    !o.props.style ||
                    "contents" !== o.props.style.display) &&
                    (a &&
                      n.options.layoutScroll &&
                      n.scroll &&
                      n !== n.root &&
                      eh(e, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                    s && ((t.x *= s.x.scale), (t.y *= s.y.scale), ed(e, s)),
                    a && eo(n.latestValues) && eh(e, n.latestValues));
                }
                t.x < 1.0000000000001 && t.x > 0.999999999999 && (t.x = 1),
                  t.y < 1.0000000000001 && t.y > 0.999999999999 && (t.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, r),
              t.layout &&
                !t.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((t.target = t.layout.layoutBox),
                (t.targetWithTransforms = et()));
            let { target: l } = t;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (e5(this.prevProjectionDelta.x, this.projectionDelta.x),
                e5(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              j(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues
              ),
              (this.treeScale.x === o &&
                this.treeScale.y === i &&
                tc(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                tc(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              tp && tu.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(e = !0) {
            var t;
            if (
              (null === (t = this.options.visualElement) ||
                void 0 === t ||
                t.scheduleRender(),
              e)
            ) {
              let e = this.getStack();
              e && e.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = Q()),
              (this.projectionDelta = Q()),
              (this.projectionDeltaWithTransform = Q());
          }
          setAnimationOrigin(e, t = !1) {
            let r;
            let a = this.snapshot,
              n = a ? a.latestValues : {},
              s = { ...this.latestValues },
              o = Q();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !t);
            let i = et(),
              l =
                (a ? a.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              c = this.getStack(),
              d = !c || c.members.length <= 1,
              u = !!(
                l &&
                !d &&
                !0 === this.options.crossfade &&
                !this.path.some(tF)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (t) => {
                let a = t / 1e3;
                if (
                  (tP(o.x, e.x, a),
                  tP(o.y, e.y, a),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var c, p, h, m;
                  W(
                    i,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (h = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    tD(h.x, m.x, i.x, a),
                    tD(h.y, m.y, i.y, a),
                    r &&
                      ((c = this.relativeTarget),
                      (p = r),
                      ts(c.x, p.x) && ts(c.y, p.y)) &&
                      (this.isProjectionDirty = !1),
                    r || (r = et()),
                    e8(r, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = s),
                  (function (e, t, r, a, n, s) {
                    n
                      ? ((e.opacity = (0, K.k)(
                          0,
                          void 0 !== r.opacity ? r.opacity : 1,
                          e2(a)
                        )),
                        (e.opacityExit = (0, K.k)(
                          void 0 !== t.opacity ? t.opacity : 1,
                          0,
                          e3(a)
                        )))
                      : s &&
                        (e.opacity = (0, K.k)(
                          void 0 !== t.opacity ? t.opacity : 1,
                          void 0 !== r.opacity ? r.opacity : 1,
                          a
                        ));
                    for (let n = 0; n < eY; n++) {
                      let s = `border${eJ[n]}Radius`,
                        o = e1(t, s),
                        i = e1(r, s);
                      (void 0 !== o || void 0 !== i) &&
                        (o || (o = 0),
                        i || (i = 0),
                        0 === o || 0 === i || e0(o) === e0(i)
                          ? ((e[s] = Math.max((0, K.k)(eQ(o), eQ(i), a), 0)),
                            (ef.KN.test(i) || ef.KN.test(o)) && (e[s] += "%"))
                          : (e[s] = i));
                    }
                    (t.rotate || r.rotate) &&
                      (e.rotate = (0, K.k)(t.rotate || 0, r.rotate || 0, a));
                  })(s, n, this.latestValues, a, u, d)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = a);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(e) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, D.WG)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = D.Gt.update(() => {
                (eM.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (e, t, r) {
                    let a = (0, eV.S)(0) ? 0 : (0, eK.OQ)(0);
                    return a.start((0, eb.f)("", a, 1e3, r)), a.animation;
                  })(0, 0, {
                    ...e,
                    onUpdate: (t) => {
                      this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
                    },
                    onComplete: () => {
                      e.onComplete && e.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let e = this.getStack();
            e && e.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let e = this.getLead(),
              {
                targetWithTransforms: t,
                target: r,
                layout: a,
                latestValues: n,
              } = e;
            if (t && r && a) {
              if (
                this !== e &&
                this.layout &&
                a &&
                tN(
                  this.options.animationType,
                  this.layout.layoutBox,
                  a.layoutBox
                )
              ) {
                r = this.target || et();
                let t = V(this.layout.layoutBox.x);
                (r.x.min = e.target.x.min), (r.x.max = r.x.min + t);
                let a = V(this.layout.layoutBox.y);
                (r.y.min = e.target.y.min), (r.y.max = r.y.min + a);
              }
              e8(t, r),
                eh(t, n),
                j(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  t,
                  n
                );
            }
          }
          registerSharedNode(e, t) {
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new td()),
              this.sharedNodes.get(e).add(t);
            let r = t.options.initialPromotionConfig;
            t.promote({
              transition: r ? r.transition : void 0,
              preserveFollowOpacity:
                r && r.shouldPreserveFollowOpacity
                  ? r.shouldPreserveFollowOpacity(t)
                  : void 0,
            });
          }
          isLead() {
            let e = this.getStack();
            return !e || e.lead === this;
          }
          getLead() {
            var e;
            let { layoutId: t } = this.options;
            return (
              (t &&
                (null === (e = this.getStack()) || void 0 === e
                  ? void 0
                  : e.lead)) ||
              this
            );
          }
          getPrevLead() {
            var e;
            let { layoutId: t } = this.options;
            return t
              ? null === (e = this.getStack()) || void 0 === e
                ? void 0
                : e.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: e } = this.options;
            if (e) return this.root.sharedNodes.get(e);
          }
          promote({
            needsReset: e,
            transition: t,
            preserveFollowOpacity: r,
          } = {}) {
            let a = this.getStack();
            a && a.promote(this, r),
              e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              t && this.setOptions({ transition: t });
          }
          relegate() {
            let e = this.getStack();
            return !!e && e.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: e } = this.options;
            if (!e) return;
            let t = !1,
              { latestValues: r } = e;
            if (
              ((r.z ||
                r.rotate ||
                r.rotateX ||
                r.rotateY ||
                r.rotateZ ||
                r.skewX ||
                r.skewY) &&
                (t = !0),
              !t)
            )
              return;
            let a = {};
            r.z && tb("z", e, a, this.animationValues);
            for (let t = 0; t < th.length; t++)
              tb(`rotate${th[t]}`, e, a, this.animationValues),
                tb(`skew${th[t]}`, e, a, this.animationValues);
            for (let t in (e.render(), a))
              e.setStaticValue(t, a[t]),
                this.animationValues && (this.animationValues[t] = a[t]);
            e.scheduleRender();
          }
          getProjectionStyles(e) {
            var t, r;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return tm;
            let a = { visibility: "" },
              n = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (a.opacity = ""),
                (a.pointerEvents =
                  eX(null == e ? void 0 : e.pointerEvents) || ""),
                (a.transform = n ? n(this.latestValues, "") : "none"),
                a
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let t = {};
              return (
                this.options.layoutId &&
                  ((t.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (t.pointerEvents =
                    eX(null == e ? void 0 : e.pointerEvents) || "")),
                this.hasProjected &&
                  !eo(this.latestValues) &&
                  ((t.transform = n ? n({}, "") : "none"),
                  (this.hasProjected = !1)),
                t
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (a.transform = (function (e, t, r) {
                let a = "",
                  n = e.x.translate / t.x,
                  s = e.y.translate / t.y,
                  o = (null == r ? void 0 : r.z) || 0;
                if (
                  ((n || s || o) &&
                    (a = `translate3d(${n}px, ${s}px, ${o}px) `),
                  (1 !== t.x || 1 !== t.y) &&
                    (a += `scale(${1 / t.x}, ${1 / t.y}) `),
                  r)
                ) {
                  let {
                    transformPerspective: e,
                    rotate: t,
                    rotateX: n,
                    rotateY: s,
                    skewX: o,
                    skewY: i,
                  } = r;
                  e && (a = `perspective(${e}px) ${a}`),
                    t && (a += `rotate(${t}deg) `),
                    n && (a += `rotateX(${n}deg) `),
                    s && (a += `rotateY(${s}deg) `),
                    o && (a += `skewX(${o}deg) `),
                    i && (a += `skewY(${i}deg) `);
                }
                let i = e.x.scale * t.x,
                  l = e.y.scale * t.y;
                return (
                  (1 !== i || 1 !== l) && (a += `scale(${i}, ${l})`),
                  a || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, o)),
              n && (a.transform = n(o, a.transform));
            let { x: i, y: l } = this.projectionDelta;
            for (let e in ((a.transformOrigin = `${100 * i.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (a.opacity =
                  s === this
                    ? null !==
                        (r =
                          null !== (t = o.opacity) && void 0 !== t
                            ? t
                            : this.latestValues.opacity) && void 0 !== r
                      ? r
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (a.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            eI)) {
              if (void 0 === o[e]) continue;
              let { correct: t, applyTo: r } = eI[e],
                n = "none" === a.transform ? o[e] : t(o[e], s);
              if (r) {
                let e = r.length;
                for (let t = 0; t < e; t++) a[r[t]] = n;
              } else a[e] = n;
            }
            return (
              this.options.layoutId &&
                (a.pointerEvents =
                  s === this
                    ? eX(null == e ? void 0 : e.pointerEvents) || ""
                    : "none"),
              a
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((e) => {
              var t;
              return null === (t = e.currentAnimation) || void 0 === t
                ? void 0
                : t.stop();
            }),
              this.root.nodes.forEach(tC),
              this.root.sharedNodes.clear();
          }
        };
      }
      function tx(e) {
        e.updateLayout();
      }
      function tv(e) {
        var t;
        let r =
          (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) ||
          e.snapshot;
        if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
          let { layoutBox: t, measuredBox: a } = e.layout,
            { animationType: n } = e.options,
            s = r.source !== e.layout.source;
          "size" === n
            ? er((e) => {
                let a = s ? r.measuredBox[e] : r.layoutBox[e],
                  n = V(a);
                (a.min = t[e].min), (a.max = a.min + n);
              })
            : tN(n, r.layoutBox, t) &&
              er((a) => {
                let n = s ? r.measuredBox[a] : r.layoutBox[a],
                  o = V(t[a]);
                (n.max = n.min + o),
                  e.relativeTarget &&
                    !e.currentAnimation &&
                    ((e.isProjectionDirty = !0),
                    (e.relativeTarget[a].max = e.relativeTarget[a].min + o));
              });
          let o = Q();
          j(o, t, r.layoutBox);
          let i = Q();
          s
            ? j(i, e.applyTransform(a, !0), r.measuredBox)
            : j(i, t, r.layoutBox);
          let l = !tn(o),
            c = !1;
          if (!e.resumeFrom) {
            let a = e.getClosestProjectingParent();
            if (a && !a.resumeFrom) {
              let { snapshot: n, layout: s } = a;
              if (n && s) {
                let o = et();
                W(o, r.layoutBox, n.layoutBox);
                let i = et();
                W(i, t, s.layoutBox),
                  ti(o, i) || (c = !0),
                  a.options.layoutRoot &&
                    ((e.relativeTarget = i),
                    (e.relativeTargetOrigin = o),
                    (e.relativeParent = a));
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: t,
            snapshot: r,
            delta: i,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: c,
          });
        } else if (e.isLead()) {
          let { onExitComplete: t } = e.options;
          t && t();
        }
        e.options.transition = void 0;
      }
      function tg(e) {
        tp && tu.totalNodes++,
          e.parent &&
            (e.isProjecting() ||
              (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty ||
              (e.isSharedProjectionDirty = !!(
                e.isProjectionDirty ||
                e.parent.isProjectionDirty ||
                e.parent.isSharedProjectionDirty
              )),
            e.isTransformDirty ||
              (e.isTransformDirty = e.parent.isTransformDirty));
      }
      function tE(e) {
        e.isProjectionDirty =
          e.isSharedProjectionDirty =
          e.isTransformDirty =
            !1;
      }
      function tk(e) {
        e.clearSnapshot();
      }
      function tC(e) {
        e.clearMeasurements();
      }
      function tw(e) {
        e.isLayoutDirty = !1;
      }
      function tT(e) {
        let { visualElement: t } = e.options;
        t &&
          t.getProps().onBeforeLayoutMeasure &&
          t.notify("BeforeLayoutMeasure"),
          e.resetTransform();
      }
      function tS(e) {
        e.finishAnimation(),
          (e.targetDelta = e.relativeTarget = e.target = void 0),
          (e.isProjectionDirty = !0);
      }
      function tA(e) {
        e.resolveTargetDelta();
      }
      function tU(e) {
        e.calcProjection();
      }
      function tB(e) {
        e.resetSkewAndRotation();
      }
      function tM(e) {
        e.removeLeadSnapshot();
      }
      function tP(e, t, r) {
        (e.translate = (0, K.k)(t.translate, 0, r)),
          (e.scale = (0, K.k)(t.scale, 1, r)),
          (e.origin = t.origin),
          (e.originPoint = t.originPoint);
      }
      function tD(e, t, r, a) {
        (e.min = (0, K.k)(t.min, r.min, a)),
          (e.max = (0, K.k)(t.max, r.max, a));
      }
      function tF(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
      }
      let tI = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        tO = (e) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(e),
        tR = tO("applewebkit/") && !tO("chrome/") ? Math.round : k.l;
      function tL(e) {
        (e.min = tR(e.min)), (e.max = tR(e.max));
      }
      function tN(e, t, r) {
        return (
          "position" === e ||
          ("preserve-aspect" === e && !(0.2 >= Math.abs(tl(t) - tl(r))))
        );
      }
      function tz(e) {
        var t;
        return (
          e !== e.root &&
          (null === (t = e.scroll) || void 0 === t ? void 0 : t.wasRoot)
        );
      }
      let tK = ty({
          attachResizeListener: (e, t) => S(e, "resize", t),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        tV = { current: void 0 },
        tH = ty({
          measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
          defaultParent: () => {
            if (!tV.current) {
              let e = new tK({});
              e.mount(window),
                e.setOptions({ layoutScroll: !0 }),
                (tV.current = e);
            }
            return tV.current;
          },
          resetTransform: (e, t) => {
            e.style.transform = void 0 !== t ? t : "none";
          },
          checkIsScrollRoot: (e) =>
            "fixed" === window.getComputedStyle(e).position,
        });
      function tj(e, t, r) {
        let { props: a } = e;
        e.animationState &&
          a.whileHover &&
          e.animationState.setActive("whileHover", "Start" === r);
        let n = a["onHover" + r];
        n && D.Gt.postRender(() => n(t, A(t)));
      }
      class t_ extends x {
        mount() {
          let { current: e } = this.node;
          e &&
            (this.unmount = (0, w.PT)(
              e,
              (e) => (tj(this.node, e, "Start"), (e) => tj(this.node, e, "End"))
            ));
        }
        unmount() {}
      }
      class tG extends x {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let e = !1;
          try {
            e = this.node.current.matches(":focus-visible");
          } catch (t) {
            e = !0;
          }
          e &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, P.F)(
            S(this.node.current, "focus", () => this.onFocus()),
            S(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      function tW(e, t, r) {
        let { props: a } = e;
        e.animationState &&
          a.whileTap &&
          e.animationState.setActive("whileTap", "Start" === r);
        let n = a["onTap" + ("End" === r ? "" : r)];
        n && D.Gt.postRender(() => n(t, A(t)));
      }
      class tq extends x {
        mount() {
          let { current: e } = this.node;
          e &&
            (this.unmount = (0, w.c$)(
              e,
              (e) => (
                tW(this.node, e, "Start"),
                (e, { success: t }) => tW(this.node, e, t ? "End" : "Cancel")
              ),
              { useGlobalTarget: this.node.props.globalTapTarget }
            ));
        }
        unmount() {}
      }
      let t$ = new WeakMap(),
        tX = new WeakMap(),
        tZ = (e) => {
          let t = t$.get(e.target);
          t && t(e);
        },
        tJ = (e) => {
          e.forEach(tZ);
        },
        tY = { some: 0, all: 1 };
      class tQ extends x {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: e = {} } = this.node.getProps(),
            { root: t, margin: r, amount: a = "some", once: n } = e,
            s = {
              root: t ? t.current : void 0,
              rootMargin: r,
              threshold: "number" == typeof a ? a : tY[a],
            };
          return (function (e, t, r) {
            let a = (function ({ root: e, ...t }) {
              let r = e || document;
              tX.has(r) || tX.set(r, {});
              let a = tX.get(r),
                n = JSON.stringify(t);
              return (
                a[n] ||
                  (a[n] = new IntersectionObserver(tJ, { root: e, ...t })),
                a[n]
              );
            })(t);
            return (
              t$.set(e, r),
              a.observe(e),
              () => {
                t$.delete(e), a.unobserve(e);
              }
            );
          })(this.node.current, s, (e) => {
            let { isIntersecting: t } = e;
            if (
              this.isInView === t ||
              ((this.isInView = t), n && !t && this.hasEnteredView)
            )
              return;
            t && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", t);
            let { onViewportEnter: r, onViewportLeave: a } =
                this.node.getProps(),
              s = t ? r : a;
            s && s(e);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: e, prevProps: t } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: e = {} }, { viewport: t = {} } = {}) {
              return (r) => e[r] !== t[r];
            })(e, t)
          ) && this.startObserver();
        }
        unmount() {}
      }
      let t0 = (0, eS.createContext)({ strict: !1 });
      var t1 = r(17449);
      let t2 = (0, eS.createContext)({});
      function t3(e) {
        return a(e.animate) || u.some((t) => l(e[t]));
      }
      function t7(e) {
        return !!(t3(e) || e.variants);
      }
      function t6(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      var t8 = r(53791);
      let t5 = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        t9 = {};
      for (let e in t5) t9[e] = { isEnabled: (t) => t5[e].some((e) => !!t[e]) };
      let t4 = Symbol.for("motionComponentSymbol");
      var re = r(10800),
        rt = r(24995),
        rr = r(11131);
      let ra = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function rn(e) {
        if ("string" != typeof e || e.includes("-"));
        else if (ra.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
        return !1;
      }
      var rs = r(42738),
        ro = r(80970);
      let ri = (e) => (t, r) => {
        let n = (0, eS.useContext)(t2),
          s = (0, eS.useContext)(re.t),
          o = () =>
            (function (
              {
                scrapeMotionValuesFromProps: e,
                createRenderState: t,
                onUpdate: r,
              },
              n,
              s,
              o
            ) {
              let i = {
                latestValues: (function (e, t, r, n) {
                  let s = {},
                    o = n(e, {});
                  for (let e in o) s[e] = eX(o[e]);
                  let { initial: i, animate: l } = e,
                    c = t3(e),
                    d = t7(e);
                  t &&
                    d &&
                    !c &&
                    !1 !== e.inherit &&
                    (void 0 === i && (i = t.initial),
                    void 0 === l && (l = t.animate));
                  let u = !!r && !1 === r.initial,
                    p = (u = u || !1 === i) ? l : i;
                  if (p && "boolean" != typeof p && !a(p)) {
                    let t = Array.isArray(p) ? p : [p];
                    for (let r = 0; r < t.length; r++) {
                      let a = (0, rs.a)(e, t[r]);
                      if (a) {
                        let { transitionEnd: e, transition: t, ...r } = a;
                        for (let e in r) {
                          let t = r[e];
                          if (Array.isArray(t)) {
                            let e = u ? t.length - 1 : 0;
                            t = t[e];
                          }
                          null !== t && (s[e] = t);
                        }
                        for (let t in e) s[t] = e[t];
                      }
                    }
                  }
                  return s;
                })(n, s, o, e),
                renderState: t(),
              };
              return (
                r &&
                  ((i.onMount = (e) => r({ props: n, current: e, ...i })),
                  (i.onUpdate = (e) => r(e))),
                i
              );
            })(e, t, n, s);
        return r ? o() : (0, ro.M)(o);
      };
      var rl = r(19696),
        rc = r(64151);
      let rd = (e, t) => (t && "number" == typeof e ? t.transform(e) : e);
      var ru = r(22884);
      let rp = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        rh = rl.U.length;
      function rm(e, t, r) {
        let { style: a, vars: n, transformOrigin: s } = e,
          o = !1,
          i = !1;
        for (let e in t) {
          let r = t[e];
          if (rl.f.has(e)) {
            o = !0;
            continue;
          }
          if ((0, rc.j)(e)) {
            n[e] = r;
            continue;
          }
          {
            let t = rd(r, ru.W[e]);
            e.startsWith("origin") ? ((i = !0), (s[e] = t)) : (a[e] = t);
          }
        }
        if (
          (!t.transform &&
            (o || r
              ? (a.transform = (function (e, t, r) {
                  let a = "",
                    n = !0;
                  for (let s = 0; s < rh; s++) {
                    let o = rl.U[s],
                      i = e[o];
                    if (void 0 === i) continue;
                    let l = !0;
                    if (
                      !(l =
                        "number" == typeof i
                          ? i === (o.startsWith("scale") ? 1 : 0)
                          : 0 === parseFloat(i)) ||
                      r
                    ) {
                      let e = rd(i, ru.W[o]);
                      if (!l) {
                        n = !1;
                        let t = rp[o] || o;
                        a += `${t}(${e}) `;
                      }
                      r && (t[o] = e);
                    }
                  }
                  return (
                    (a = a.trim()),
                    r ? (a = r(t, n ? "" : a)) : n && (a = "none"),
                    a
                  );
                })(t, e.transform, r))
              : a.transform && (a.transform = "none")),
          i)
        ) {
          let { originX: e = "50%", originY: t = "50%", originZ: r = 0 } = s;
          a.transformOrigin = `${e} ${t} ${r}`;
        }
      }
      let rf = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        rb = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function ry(e, t, r) {
        return "string" == typeof e ? e : ef.px.transform(t + r * e);
      }
      function rx(
        e,
        {
          attrX: t,
          attrY: r,
          attrScale: a,
          originX: n,
          originY: s,
          pathLength: o,
          pathSpacing: i = 1,
          pathOffset: l = 0,
          ...c
        },
        d,
        u
      ) {
        if ((rm(e, c, u), d)) {
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
          return;
        }
        (e.attrs = e.style), (e.style = {});
        let { attrs: p, style: h, dimensions: m } = e;
        p.transform && (m && (h.transform = p.transform), delete p.transform),
          m &&
            (void 0 !== n || void 0 !== s || h.transform) &&
            (h.transformOrigin = (function (e, t, r) {
              let a = ry(t, e.x, e.width),
                n = ry(r, e.y, e.height);
              return `${a} ${n}`;
            })(m, void 0 !== n ? n : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== t && (p.x = t),
          void 0 !== r && (p.y = r),
          void 0 !== a && (p.scale = a),
          void 0 !== o &&
            (function (e, t, r = 1, a = 0, n = !0) {
              e.pathLength = 1;
              let s = n ? rf : rb;
              e[s.offset] = ef.px.transform(-a);
              let o = ef.px.transform(t),
                i = ef.px.transform(r);
              e[s.array] = `${o} ${i}`;
            })(p, o, i, l, !1);
      }
      let rv = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        rg = () => ({ ...rv(), attrs: {} }),
        rE = (e) => "string" == typeof e && "svg" === e.toLowerCase();
      var rk = r(69109);
      function rC(e, { style: t, vars: r }, a, n) {
        for (let s in (Object.assign(e.style, t, n && n.getProjectionStyles(a)),
        r))
          e.style.setProperty(s, r[s]);
      }
      let rw = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function rT(e, t, r, a) {
        for (let r in (rC(e, t, void 0, a), t.attrs))
          e.setAttribute(rw.has(r) ? r : (0, rk.I)(r), t.attrs[r]);
      }
      function rS(e, { layout: t, layoutId: r }) {
        return (
          rl.f.has(e) ||
          e.startsWith("origin") ||
          ((t || void 0 !== r) && (!!eI[e] || "opacity" === e))
        );
      }
      function rA(e, t, r) {
        var a;
        let { style: n } = e,
          s = {};
        for (let o in n)
          ((0, eV.S)(n[o]) ||
            (t.style && (0, eV.S)(t.style[o])) ||
            rS(o, e) ||
            (null === (a = null == r ? void 0 : r.getValue(o)) || void 0 === a
              ? void 0
              : a.liveStyle) !== void 0) &&
            (s[o] = n[o]);
        return s;
      }
      function rU(e, t, r) {
        let a = rA(e, t, r);
        for (let r in e)
          ((0, eV.S)(e[r]) || (0, eV.S)(t[r])) &&
            (a[
              -1 !== rl.U.indexOf(r)
                ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
                : r
            ] = e[r]);
        return a;
      }
      let rB = ["x", "y", "width", "height", "cx", "cy", "r"],
        rM = {
          useVisualState: ri({
            scrapeMotionValuesFromProps: rU,
            createRenderState: rg,
            onUpdate: ({
              props: e,
              prevProps: t,
              current: r,
              renderState: a,
              latestValues: n,
            }) => {
              if (!r) return;
              let s = !!e.drag;
              if (!s) {
                for (let e in n)
                  if (rl.f.has(e)) {
                    s = !0;
                    break;
                  }
              }
              if (!s) return;
              let o = !t;
              if (t)
                for (let r = 0; r < rB.length; r++) {
                  let a = rB[r];
                  e[a] !== t[a] && (o = !0);
                }
              o &&
                D.Gt.read(() => {
                  !(function (e, t) {
                    try {
                      t.dimensions =
                        "function" == typeof e.getBBox
                          ? e.getBBox()
                          : e.getBoundingClientRect();
                    } catch (e) {
                      t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                    }
                  })(r, a),
                    D.Gt.render(() => {
                      rx(a, n, rE(r.tagName), e.transformTemplate), rT(r, a);
                    });
                });
            },
          }),
        },
        rP = {
          useVisualState: ri({
            scrapeMotionValuesFromProps: rA,
            createRenderState: rv,
          }),
        };
      function rD(e, t, r) {
        for (let a in t) (0, eV.S)(t[a]) || rS(a, r) || (e[a] = t[a]);
      }
      let rF = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function rI(e) {
        return (
          e.startsWith("while") ||
          (e.startsWith("drag") && "draggable" !== e) ||
          e.startsWith("layout") ||
          e.startsWith("onTap") ||
          e.startsWith("onPan") ||
          e.startsWith("onLayout") ||
          rF.has(e)
        );
      }
      let rO = (e) => !rI(e);
      try {
        !(function (e) {
          e && (rO = (t) => (t.startsWith("on") ? !rI(t) : e(t)));
        })(require("@emotion/is-prop-valid").default);
      } catch (e) {}
      var rR = r(95955),
        rL = r(82423);
      let rN = { current: null },
        rz = { current: !1 };
      var rK = r(29027),
        rV = r(38312),
        rH = r(17533),
        rj = r(59150);
      let r_ = [...rH.T, rV.y, eF.f],
        rG = (e) => r_.find((0, rj.w)(e)),
        rW = new WeakMap();
      var rq = r(27448);
      let r$ = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
      ];
      class rX {
        scrapeMotionValuesFromProps(e, t, r) {
          return {};
        }
        constructor(
          {
            parent: e,
            props: t,
            presenceContext: r,
            reducedMotionConfig: a,
            blockInitialAnimation: n,
            visualState: s,
          },
          o = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = rq.h),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let e = ej.k.now();
              this.renderScheduledAt < e &&
                ((this.renderScheduledAt = e),
                D.Gt.render(this.render, !1, !0));
            });
          let { latestValues: i, renderState: l, onUpdate: c } = s;
          (this.onUpdate = c),
            (this.latestValues = i),
            (this.baseTarget = { ...i }),
            (this.initialValues = t.initial ? { ...i } : {}),
            (this.renderState = l),
            (this.parent = e),
            (this.props = t),
            (this.presenceContext = r),
            (this.depth = e ? e.depth + 1 : 0),
            (this.reducedMotionConfig = a),
            (this.options = o),
            (this.blockInitialAnimation = !!n),
            (this.isControllingVariants = t3(t)),
            (this.isVariantNode = t7(t)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(e && e.current));
          let { willChange: d, ...u } = this.scrapeMotionValuesFromProps(
            t,
            {},
            this
          );
          for (let e in u) {
            let t = u[e];
            void 0 !== i[e] && (0, eV.S)(t) && t.set(i[e], !1);
          }
        }
        mount(e) {
          (this.current = e),
            rW.set(e, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(e),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
            rz.current ||
              (function () {
                if (((rz.current = !0), t8.B)) {
                  if (window.matchMedia) {
                    let e = window.matchMedia("(prefers-reduced-motion)"),
                      t = () => (rN.current = e.matches);
                    e.addListener(t), t();
                  } else rN.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || rN.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let e in (rW.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, D.WG)(this.notifyUpdate),
          (0, D.WG)(this.render),
          this.valueSubscriptions.forEach((e) => e()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[e].clear();
          for (let e in this.features) {
            let t = this.features[e];
            t && (t.unmount(), (t.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(e, t) {
          let r;
          this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
          let a = rl.f.has(e),
            n = t.on("change", (t) => {
              (this.latestValues[e] = t),
                this.props.onUpdate && D.Gt.preRender(this.notifyUpdate),
                a && this.projection && (this.projection.isTransformDirty = !0);
            }),
            s = t.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (r = window.MotionCheckAppearSync(this, e, t)),
            this.valueSubscriptions.set(e, () => {
              n(), s(), r && r(), t.owner && t.stop();
            });
        }
        sortNodePosition(e) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === e.type
            ? this.sortInstanceNodePosition(this.current, e.current)
            : 0;
        }
        updateFeatures() {
          let e = "animation";
          for (e in t9) {
            let t = t9[e];
            if (!t) continue;
            let { isEnabled: r, Feature: a } = t;
            if (
              (!this.features[e] &&
                a &&
                r(this.props) &&
                (this.features[e] = new a(this)),
              this.features[e])
            ) {
              let t = this.features[e];
              t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : et();
        }
        getStaticValue(e) {
          return this.latestValues[e];
        }
        setStaticValue(e, t) {
          this.latestValues[e] = t;
        }
        update(e, t) {
          (e.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = e),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = t);
          for (let t = 0; t < r$.length; t++) {
            let r = r$[t];
            this.propEventSubscriptions[r] &&
              (this.propEventSubscriptions[r](),
              delete this.propEventSubscriptions[r]);
            let a = e["on" + r];
            a && (this.propEventSubscriptions[r] = this.on(r, a));
          }
          (this.prevMotionValues = (function (e, t, r) {
            for (let a in t) {
              let n = t[a],
                s = r[a];
              if ((0, eV.S)(n)) e.addValue(a, n);
              else if ((0, eV.S)(s)) e.addValue(a, (0, eK.OQ)(n, { owner: e }));
              else if (s !== n) {
                if (e.hasValue(a)) {
                  let t = e.getValue(a);
                  !0 === t.liveStyle ? t.jump(n) : t.hasAnimated || t.set(n);
                } else {
                  let t = e.getStaticValue(a);
                  e.addValue(a, (0, eK.OQ)(void 0 !== t ? t : n, { owner: e }));
                }
              }
            }
            for (let a in r) void 0 === t[a] && e.removeValue(a);
            return t;
          })(
            this,
            this.scrapeMotionValuesFromProps(e, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue(),
            this.onUpdate && this.onUpdate(this);
        }
        getProps() {
          return this.props;
        }
        getVariant(e) {
          return this.props.variants ? this.props.variants[e] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(e) {
          let t = this.getClosestVariantNode();
          if (t)
            return (
              t.variantChildren && t.variantChildren.add(e),
              () => t.variantChildren.delete(e)
            );
        }
        addValue(e, t) {
          let r = this.values.get(e);
          t !== r &&
            (r && this.removeValue(e),
            this.bindToMotionValue(e, t),
            this.values.set(e, t),
            (this.latestValues[e] = t.get()));
        }
        removeValue(e) {
          this.values.delete(e);
          let t = this.valueSubscriptions.get(e);
          t && (t(), this.valueSubscriptions.delete(e)),
            delete this.latestValues[e],
            this.removeValueFromRenderState(e, this.renderState);
        }
        hasValue(e) {
          return this.values.has(e);
        }
        getValue(e, t) {
          if (this.props.values && this.props.values[e])
            return this.props.values[e];
          let r = this.values.get(e);
          return (
            void 0 === r &&
              void 0 !== t &&
              ((r = (0, eK.OQ)(null === t ? void 0 : t, { owner: this })),
              this.addValue(e, r)),
            r
          );
        }
        readValue(e, t) {
          var r;
          let a =
            void 0 === this.latestValues[e] && this.current
              ? null !== (r = this.getBaseTargetFromProps(this.props, e)) &&
                void 0 !== r
                ? r
                : this.readValueFromInstance(this.current, e, this.options)
              : this.latestValues[e];
          return (
            null != a &&
              ("string" == typeof a && ((0, rR.i)(a) || (0, rL.$)(a))
                ? (a = parseFloat(a))
                : !rG(a) && eF.f.test(t) && (a = (0, rK.J)(e, t)),
              this.setBaseTarget(e, (0, eV.S)(a) ? a.get() : a)),
            (0, eV.S)(a) ? a.get() : a
          );
        }
        setBaseTarget(e, t) {
          this.baseTarget[e] = t;
        }
        getBaseTarget(e) {
          var t;
          let r;
          let { initial: a } = this.props;
          if ("string" == typeof a || "object" == typeof a) {
            let n = (0, rs.a)(
              this.props,
              a,
              null === (t = this.presenceContext) || void 0 === t
                ? void 0
                : t.custom
            );
            n && (r = n[e]);
          }
          if (a && void 0 !== r) return r;
          let n = this.getBaseTargetFromProps(this.props, e);
          return void 0 === n || (0, eV.S)(n)
            ? void 0 !== this.initialValues[e] && void 0 === r
              ? void 0
              : this.baseTarget[e]
            : n;
        }
        on(e, t) {
          return (
            this.events[e] || (this.events[e] = new eq.v()),
            this.events[e].add(t)
          );
        }
        notify(e, ...t) {
          this.events[e] && this.events[e].notify(...t);
        }
      }
      var rZ = r(61252);
      class rJ extends rX {
        constructor() {
          super(...arguments), (this.KeyframeResolver = rZ.K);
        }
        sortInstanceNodePosition(e, t) {
          return 2 & e.compareDocumentPosition(t) ? 1 : -1;
        }
        getBaseTargetFromProps(e, t) {
          return e.style ? e.style[t] : void 0;
        }
        removeValueFromRenderState(e, { vars: t, style: r }) {
          delete t[e], delete r[e];
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: e } = this.props;
          (0, eV.S)(e) &&
            (this.childSubscription = e.on("change", (e) => {
              this.current && (this.current.textContent = `${e}`);
            }));
        }
      }
      var rY = r(44588);
      class rQ extends rJ {
        constructor() {
          super(...arguments), (this.type = "html"), (this.renderInstance = rC);
        }
        readValueFromInstance(e, t) {
          if (rl.f.has(t)) {
            let e = (0, rY.D)(t);
            return (e && e.default) || 0;
          }
          {
            let r = window.getComputedStyle(e),
              a = ((0, rc.j)(t) ? r.getPropertyValue(t) : r[t]) || 0;
            return "string" == typeof a ? a.trim() : a;
          }
        }
        measureInstanceViewportBox(e, { transformPagePoint: t }) {
          return em(e, t);
        }
        build(e, t, r) {
          rm(e, t, r.transformTemplate);
        }
        scrapeMotionValuesFromProps(e, t, r) {
          return rA(e, t, r);
        }
      }
      class r0 extends rJ {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = et);
        }
        getBaseTargetFromProps(e, t) {
          return e[t];
        }
        readValueFromInstance(e, t) {
          if (rl.f.has(t)) {
            let e = (0, rY.D)(t);
            return (e && e.default) || 0;
          }
          return (t = rw.has(t) ? t : (0, rk.I)(t)), e.getAttribute(t);
        }
        scrapeMotionValuesFromProps(e, t, r) {
          return rU(e, t, r);
        }
        build(e, t, r) {
          rx(e, t, this.isSVGTag, r.transformTemplate);
        }
        renderInstance(e, t, r, a) {
          rT(e, t, r, a);
        }
        mount(e) {
          (this.isSVGTag = rE(e.tagName)), super.mount(e);
        }
      }
      let r1 = (function (e) {
        if ("undefined" == typeof Proxy) return e;
        let t = new Map();
        return new Proxy((...t) => e(...t), {
          get: (r, a) =>
            "create" === a ? e : (t.has(a) || t.set(a, e(a)), t.get(a)),
        });
      })(
        ((n = {
          animation: { Feature: v },
          exit: { Feature: E },
          inView: { Feature: tQ },
          tap: { Feature: tq },
          focus: { Feature: tG },
          hover: { Feature: t_ },
          pan: { Feature: ew },
          drag: { Feature: ek, ProjectionNode: tH, MeasureLayout: eN },
          layout: { ProjectionNode: tH, MeasureLayout: eN },
        }),
        (s = (e, t) =>
          rn(e)
            ? new r0(t)
            : new rQ(t, { allowProjection: e !== eS.Fragment })),
        function (e, { forwardMotionProps: t } = { forwardMotionProps: !1 }) {
          return (function (e) {
            var t, r;
            let {
              preloadedFeatures: a,
              createVisualElement: n,
              useRender: s,
              useVisualState: o,
              Component: i,
            } = e;
            function c(e, t) {
              var r;
              let a;
              let c = {
                  ...(0, eS.useContext)(t1.Q),
                  ...e,
                  layoutId: (function (e) {
                    let { layoutId: t } = e,
                      r = (0, eS.useContext)(eU.L).id;
                    return r && void 0 !== t ? r + "-" + t : t;
                  })(e),
                },
                { isStatic: d } = c,
                u = (function (e) {
                  let { initial: t, animate: r } = (function (e, t) {
                    if (t3(e)) {
                      let { initial: t, animate: r } = e;
                      return {
                        initial: !1 === t || l(t) ? t : void 0,
                        animate: l(r) ? r : void 0,
                      };
                    }
                    return !1 !== e.inherit ? t : {};
                  })(e, (0, eS.useContext)(t2));
                  return (0, eS.useMemo)(
                    () => ({ initial: t, animate: r }),
                    [t6(t), t6(r)]
                  );
                })(e),
                p = o(e, d);
              if (!d && t8.B) {
                (0, eS.useContext)(t0).strict;
                let e = (function (e) {
                  let { drag: t, layout: r } = t9;
                  if (!t && !r) return {};
                  let a = { ...t, ...r };
                  return {
                    MeasureLayout:
                      (null == t ? void 0 : t.isEnabled(e)) ||
                      (null == r ? void 0 : r.isEnabled(e))
                        ? a.MeasureLayout
                        : void 0,
                    ProjectionNode: a.ProjectionNode,
                  };
                })(c);
                (a = e.MeasureLayout),
                  (u.visualElement = (function (e, t, r, a, n) {
                    var s, o;
                    let { visualElement: i } = (0, eS.useContext)(t2),
                      l = (0, eS.useContext)(t0),
                      c = (0, eS.useContext)(re.t),
                      d = (0, eS.useContext)(t1.Q).reducedMotion,
                      u = (0, eS.useRef)(null);
                    (a = a || l.renderer),
                      !u.current &&
                        a &&
                        (u.current = a(e, {
                          visualState: t,
                          parent: i,
                          props: r,
                          presenceContext: c,
                          blockInitialAnimation: !!c && !1 === c.initial,
                          reducedMotionConfig: d,
                        }));
                    let p = u.current,
                      h = (0, eS.useContext)(eB);
                    p &&
                      !p.projection &&
                      n &&
                      ("html" === p.type || "svg" === p.type) &&
                      (function (e, t, r, a) {
                        let {
                          layoutId: n,
                          layout: s,
                          drag: o,
                          dragConstraints: i,
                          layoutScroll: l,
                          layoutRoot: c,
                        } = t;
                        (e.projection = new r(
                          e.latestValues,
                          t["data-framer-portal-id"]
                            ? void 0
                            : (function e(t) {
                                if (t)
                                  return !1 !== t.options.allowProjection
                                    ? t.projection
                                    : e(t.parent);
                              })(e.parent)
                        )),
                          e.projection.setOptions({
                            layoutId: n,
                            layout: s,
                            alwaysMeasureLayout: !!o || (i && N(i)),
                            visualElement: e,
                            animationType: "string" == typeof s ? s : "both",
                            initialPromotionConfig: a,
                            layoutScroll: l,
                            layoutRoot: c,
                          });
                      })(u.current, r, n, h);
                    let m = (0, eS.useRef)(!1);
                    (0, eS.useInsertionEffect)(() => {
                      p && m.current && p.update(r, c);
                    });
                    let f = r[rr.n],
                      b = (0, eS.useRef)(
                        !!f &&
                          !(null === (s = window.MotionHandoffIsComplete) ||
                          void 0 === s
                            ? void 0
                            : s.call(window, f)) &&
                          (null === (o = window.MotionHasOptimisedAnimation) ||
                          void 0 === o
                            ? void 0
                            : o.call(window, f))
                      );
                    return (
                      (0, rt.E)(() => {
                        p &&
                          ((m.current = !0),
                          (window.MotionIsMounted = !0),
                          p.updateFeatures(),
                          eO.render(p.render),
                          b.current &&
                            p.animationState &&
                            p.animationState.animateChanges());
                      }),
                      (0, eS.useEffect)(() => {
                        p &&
                          (!b.current &&
                            p.animationState &&
                            p.animationState.animateChanges(),
                          b.current &&
                            (queueMicrotask(() => {
                              var e;
                              null ===
                                (e = window.MotionHandoffMarkAsComplete) ||
                                void 0 === e ||
                                e.call(window, f);
                            }),
                            (b.current = !1)));
                      }),
                      p
                    );
                  })(i, p, c, n, e.ProjectionNode));
              }
              return (0, eT.jsxs)(t2.Provider, {
                value: u,
                children: [
                  a && u.visualElement
                    ? (0, eT.jsx)(a, { visualElement: u.visualElement, ...c })
                    : null,
                  s(
                    i,
                    e,
                    ((r = u.visualElement),
                    (0, eS.useCallback)(
                      (e) => {
                        e && p.onMount && p.onMount(e),
                          r && (e ? r.mount(e) : r.unmount()),
                          t &&
                            ("function" == typeof t
                              ? t(e)
                              : N(t) && (t.current = e));
                      },
                      [r]
                    )),
                    p,
                    d,
                    u.visualElement
                  ),
                ],
              });
            }
            a &&
              (function (e) {
                for (let t in e) t9[t] = { ...t9[t], ...e[t] };
              })(a),
              (c.displayName = "motion.".concat(
                "string" == typeof i
                  ? i
                  : "create(".concat(
                      null !==
                        (r =
                          null !== (t = i.displayName) && void 0 !== t
                            ? t
                            : i.name) && void 0 !== r
                        ? r
                        : "",
                      ")"
                    )
              ));
            let d = (0, eS.forwardRef)(c);
            return (d[t4] = i), d;
          })({
            ...(rn(e) ? rM : rP),
            preloadedFeatures: n,
            useRender: (function (e = !1) {
              return (t, r, a, { latestValues: n }, s) => {
                let o = (
                    rn(t)
                      ? function (e, t, r, a) {
                          let n = (0, eS.useMemo)(() => {
                            let r = rg();
                            return (
                              rx(r, t, rE(a), e.transformTemplate),
                              { ...r.attrs, style: { ...r.style } }
                            );
                          }, [t]);
                          if (e.style) {
                            let t = {};
                            rD(t, e.style, e), (n.style = { ...t, ...n.style });
                          }
                          return n;
                        }
                      : function (e, t) {
                          let r = {},
                            a = (function (e, t) {
                              let r = e.style || {},
                                a = {};
                              return (
                                rD(a, r, e),
                                Object.assign(
                                  a,
                                  (function ({ transformTemplate: e }, t) {
                                    return (0, eS.useMemo)(() => {
                                      let r = rv();
                                      return (
                                        rm(r, t, e),
                                        Object.assign({}, r.vars, r.style)
                                      );
                                    }, [t]);
                                  })(e, t)
                                ),
                                a
                              );
                            })(e, t);
                          return (
                            e.drag &&
                              !1 !== e.dragListener &&
                              ((r.draggable = !1),
                              (a.userSelect =
                                a.WebkitUserSelect =
                                a.WebkitTouchCallout =
                                  "none"),
                              (a.touchAction =
                                !0 === e.drag
                                  ? "none"
                                  : `pan-${"x" === e.drag ? "y" : "x"}`)),
                            void 0 === e.tabIndex &&
                              (e.onTap || e.onTapStart || e.whileTap) &&
                              (r.tabIndex = 0),
                            (r.style = a),
                            r
                          );
                        }
                  )(r, n, s, t),
                  i = (function (e, t, r) {
                    let a = {};
                    for (let n in e)
                      ("values" !== n || "object" != typeof e.values) &&
                        (rO(n) ||
                          (!0 === r && rI(n)) ||
                          (!t && !rI(n)) ||
                          (e.draggable && n.startsWith("onDrag"))) &&
                        (a[n] = e[n]);
                    return a;
                  })(r, "string" == typeof t, e),
                  l = t !== eS.Fragment ? { ...i, ...o, ref: a } : {},
                  { children: c } = r,
                  d = (0, eS.useMemo)(() => ((0, eV.S)(c) ? c.get() : c), [c]);
                return (0, eS.createElement)(t, { ...l, children: d });
              };
            })(t),
            createVisualElement: s,
            Component: e,
          });
        })
      );
    },
    61252: (e, t, r) => {
      "use strict";
      r.d(t, { K: () => f });
      var a = r(82423),
        n = r(71695),
        s = r(76560),
        o = r(29027);
      let i = new Set(["auto", "none", "0"]);
      var l = r(27448),
        c = r(45107),
        d = r(95955),
        u = r(64151);
      let p = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var h = r(58667),
        m = r(17533);
      class f extends l.h {
        constructor(e, t, r, a, n) {
          super(e, t, r, a, n, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: e, element: t, name: r } = this;
          if (!t || !t.current) return;
          super.readKeyframes();
          for (let r = 0; r < e.length; r++) {
            let a = e[r];
            if ("string" == typeof a && ((a = a.trim()), (0, u.p)(a))) {
              let n = (function e(t, r, a = 1) {
                (0, c.V)(
                  a <= 4,
                  `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
                );
                let [n, s] = (function (e) {
                  let t = p.exec(e);
                  if (!t) return [,];
                  let [, r, a, n] = t;
                  return [`--${null != r ? r : a}`, n];
                })(t);
                if (!n) return;
                let o = window.getComputedStyle(r).getPropertyValue(n);
                if (o) {
                  let e = o.trim();
                  return (0, d.i)(e) ? parseFloat(e) : e;
                }
                return (0, u.p)(s) ? e(s, r, a + 1) : s;
              })(a, t.current);
              void 0 !== n && (e[r] = n),
                r === e.length - 1 && (this.finalKeyframe = a);
            }
          }
          if ((this.resolveNoneKeyframes(), !n.$.has(r) || 2 !== e.length))
            return;
          let [a, s] = e,
            o = (0, m.n)(a),
            i = (0, m.n)(s);
          if (o !== i) {
            if ((0, h.E4)(o) && (0, h.E4)(i))
              for (let t = 0; t < e.length; t++) {
                let r = e[t];
                "string" == typeof r && (e[t] = parseFloat(r));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: e, name: t } = this,
            r = [];
          for (let t = 0; t < e.length; t++) {
            var n;
            ("number" == typeof (n = e[t])
              ? 0 === n
              : null === n || "none" === n || "0" === n || (0, a.$)(n)) &&
              r.push(t);
          }
          r.length &&
            (function (e, t, r) {
              let a,
                n = 0;
              for (; n < e.length && !a; ) {
                let t = e[n];
                "string" == typeof t &&
                  !i.has(t) &&
                  (0, s.V)(t).values.length &&
                  (a = e[n]),
                  n++;
              }
              if (a && r) for (let n of t) e[n] = (0, o.J)(r, a);
            })(e, r, t);
        }
        measureInitialState() {
          let { element: e, unresolvedKeyframes: t, name: r } = this;
          if (!e || !e.current) return;
          "height" === r && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = h.Hr[r](
              e.measureViewportBox(),
              window.getComputedStyle(e.current)
            )),
            (t[0] = this.measuredOrigin);
          let a = t[t.length - 1];
          void 0 !== a && e.getValue(r, a).jump(a, !1);
        }
        measureEndState() {
          var e;
          let { element: t, name: r, unresolvedKeyframes: a } = this;
          if (!t || !t.current) return;
          let n = t.getValue(r);
          n && n.jump(this.measuredOrigin, !1);
          let s = a.length - 1,
            o = a[s];
          (a[s] = h.Hr[r](
            t.measureViewportBox(),
            window.getComputedStyle(t.current)
          )),
            null !== o &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = o),
            (null === (e = this.removedTransforms) || void 0 === e
              ? void 0
              : e.length) &&
              this.removedTransforms.forEach(([e, r]) => {
                t.getValue(e).set(r);
              }),
            this.resolveNoneKeyframes();
        }
      }
    },
    69109: (e, t, r) => {
      "use strict";
      r.d(t, { I: () => a });
      let a = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
    },
    64151: (e, t, r) => {
      "use strict";
      r.d(t, { j: () => n, p: () => o });
      let a = (e) => (t) => "string" == typeof t && t.startsWith(e),
        n = a("--"),
        s = a("var(--"),
        o = (e) => !!s(e) && i.test(e.split("/*")[0].trim()),
        i =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    58667: (e, t, r) => {
      "use strict";
      r.d(t, { E4: () => o, Hr: () => p, W9: () => u });
      var a = r(68039),
        n = r(29286),
        s = r(19696);
      let o = (e) => e === a.ai || e === n.px,
        i = (e, t) => parseFloat(e.split(", ")[t]),
        l =
          (e, t) =>
          (r, { transform: a }) => {
            if ("none" === a || !a) return 0;
            let n = a.match(/^matrix3d\((.+)\)$/u);
            if (n) return i(n[1], t);
            {
              let t = a.match(/^matrix\((.+)\)$/u);
              return t ? i(t[1], e) : 0;
            }
          },
        c = new Set(["x", "y", "z"]),
        d = s.U.filter((e) => !c.has(e));
      function u(e) {
        let t = [];
        return (
          d.forEach((r) => {
            let a = e.getValue(r);
            void 0 !== a &&
              (t.push([r, a.get()]), a.set(r.startsWith("scale") ? 1 : 0));
          }),
          t
        );
      }
      let p = {
        width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) =>
          e.max - e.min - parseFloat(t) - parseFloat(r),
        height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) =>
          e.max - e.min - parseFloat(t) - parseFloat(r),
        top: (e, { top: t }) => parseFloat(t),
        left: (e, { left: t }) => parseFloat(t),
        bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
        right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
        x: l(4, 13),
        y: l(5, 14),
      };
      (p.translateX = p.x), (p.translateY = p.y);
    },
    29027: (e, t, r) => {
      "use strict";
      r.d(t, { J: () => o });
      var a = r(76560),
        n = r(72851),
        s = r(44588);
      function o(e, t) {
        let r = (0, s.D)(e);
        return (
          r !== n.p && (r = a.f),
          r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
        );
      }
    },
    44588: (e, t, r) => {
      "use strict";
      r.d(t, { D: () => o });
      var a = r(38312),
        n = r(72851);
      let s = {
          ...r(22884).W,
          color: a.y,
          backgroundColor: a.y,
          outlineColor: a.y,
          fill: a.y,
          stroke: a.y,
          borderColor: a.y,
          borderTopColor: a.y,
          borderRightColor: a.y,
          borderBottomColor: a.y,
          borderLeftColor: a.y,
          filter: n.p,
          WebkitFilter: n.p,
        },
        o = (e) => s[e];
    },
    17533: (e, t, r) => {
      "use strict";
      r.d(t, { T: () => o, n: () => i });
      var a = r(68039),
        n = r(29286),
        s = r(59150);
      let o = [
          a.ai,
          n.px,
          n.KN,
          n.uj,
          n.vw,
          n.vh,
          { test: (e) => "auto" === e, parse: (e) => e },
        ],
        i = (e) => o.find((0, s.w)(e));
    },
    22884: (e, t, r) => {
      "use strict";
      r.d(t, { W: () => l });
      var a = r(68039),
        n = r(29286);
      let s = {
          borderWidth: n.px,
          borderTopWidth: n.px,
          borderRightWidth: n.px,
          borderBottomWidth: n.px,
          borderLeftWidth: n.px,
          borderRadius: n.px,
          radius: n.px,
          borderTopLeftRadius: n.px,
          borderTopRightRadius: n.px,
          borderBottomRightRadius: n.px,
          borderBottomLeftRadius: n.px,
          width: n.px,
          maxWidth: n.px,
          height: n.px,
          maxHeight: n.px,
          top: n.px,
          right: n.px,
          bottom: n.px,
          left: n.px,
          padding: n.px,
          paddingTop: n.px,
          paddingRight: n.px,
          paddingBottom: n.px,
          paddingLeft: n.px,
          margin: n.px,
          marginTop: n.px,
          marginRight: n.px,
          marginBottom: n.px,
          marginLeft: n.px,
          backgroundPositionX: n.px,
          backgroundPositionY: n.px,
        },
        o = {
          rotate: n.uj,
          rotateX: n.uj,
          rotateY: n.uj,
          rotateZ: n.uj,
          scale: a.hs,
          scaleX: a.hs,
          scaleY: a.hs,
          scaleZ: a.hs,
          skew: n.uj,
          skewX: n.uj,
          skewY: n.uj,
          distance: n.px,
          translateX: n.px,
          translateY: n.px,
          translateZ: n.px,
          x: n.px,
          y: n.px,
          z: n.px,
          perspective: n.px,
          transformPerspective: n.px,
          opacity: a.X4,
          originX: n.gQ,
          originY: n.gQ,
          originZ: n.px,
        },
        i = { ...a.ai, transform: Math.round },
        l = {
          ...s,
          ...o,
          zIndex: i,
          size: n.px,
          fillOpacity: a.X4,
          strokeOpacity: a.X4,
          numOctaves: i,
        };
    },
    59150: (e, t, r) => {
      "use strict";
      r.d(t, { w: () => a });
      let a = (e) => (t) => t.test(e);
    },
    71695: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => a });
      let a = new Set([
        "width",
        "height",
        "top",
        "left",
        "right",
        "bottom",
        ...r(19696).U,
      ]);
    },
    19696: (e, t, r) => {
      "use strict";
      r.d(t, { U: () => a, f: () => n });
      let a = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        n = new Set(a);
    },
    27448: (e, t, r) => {
      "use strict";
      r.d(t, { h: () => u, q: () => d });
      var a = r(58667),
        n = r(89811);
      let s = new Set(),
        o = !1,
        i = !1;
      function l() {
        if (i) {
          let e = Array.from(s).filter((e) => e.needsMeasurement),
            t = new Set(e.map((e) => e.element)),
            r = new Map();
          t.forEach((e) => {
            let t = (0, a.W9)(e);
            t.length && (r.set(e, t), e.render());
          }),
            e.forEach((e) => e.measureInitialState()),
            t.forEach((e) => {
              e.render();
              let t = r.get(e);
              t &&
                t.forEach(([t, r]) => {
                  var a;
                  null === (a = e.getValue(t)) || void 0 === a || a.set(r);
                });
            }),
            e.forEach((e) => e.measureEndState()),
            e.forEach((e) => {
              void 0 !== e.suspendedScrollY &&
                window.scrollTo(0, e.suspendedScrollY);
            });
        }
        (i = !1), (o = !1), s.forEach((e) => e.complete()), s.clear();
      }
      function c() {
        s.forEach((e) => {
          e.readKeyframes(), e.needsMeasurement && (i = !0);
        });
      }
      function d() {
        c(), l();
      }
      class u {
        constructor(e, t, r, a, n, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...e]),
            (this.onComplete = t),
            (this.name = r),
            (this.motionValue = a),
            (this.element = n),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (s.add(this),
                o || ((o = !0), n.Gt.read(c), n.Gt.resolveKeyframes(l)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: e,
            name: t,
            element: r,
            motionValue: a,
          } = this;
          for (let n = 0; n < e.length; n++)
            if (null === e[n]) {
              if (0 === n) {
                let n = null == a ? void 0 : a.get(),
                  s = e[e.length - 1];
                if (void 0 !== n) e[0] = n;
                else if (r && t) {
                  let a = r.readValue(t, s);
                  null != a && (e[0] = a);
                }
                void 0 === e[0] && (e[0] = s), a && void 0 === n && a.set(e[0]);
              } else e[n] = e[n - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            s.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), s.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
    },
    37270: (e, t, r) => {
      "use strict";
      r.d(t, { K: () => n });
      var a = r(42738);
      function n(e, t, r) {
        let n = e.getProps();
        return (0, a.a)(n, t, void 0 !== r ? r : n.custom, e);
      }
    },
    42738: (e, t, r) => {
      "use strict";
      function a(e, t, r, a) {
        if (
          "function" == typeof t ||
          ("string" == typeof t && (t = e.variants && e.variants[t]),
          "function" == typeof t)
        ) {
          let [n, s] = (function (e) {
            let t = [{}, {}];
            return (
              null == e ||
                e.values.forEach((e, r) => {
                  (t[0][r] = e.get()), (t[1][r] = e.getVelocity());
                }),
              t
            );
          })(a);
          t = t(void 0 !== r ? r : e.custom, n, s);
        }
        return t;
      }
      r.d(t, { a: () => a });
    },
    56433: (e, t, r) => {
      "use strict";
      r.d(t, { U: () => o });
      var a = r(55614),
        n = r(63930),
        s = r(37270);
      function o(e, t) {
        let {
          transitionEnd: r = {},
          transition: o = {},
          ...i
        } = (0, s.K)(e, t) || {};
        for (let t in (i = { ...i, ...r })) {
          let r = (0, a.K)(i[t]);
          e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, (0, n.OQ)(r));
        }
      }
    },
    46327: (e, t, r) => {
      "use strict";
      r.d(t, { W: () => a });
      let a = { skipAnimations: !1, useManualTiming: !1 };
    },
    53605: (e, t, r) => {
      "use strict";
      function a(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function n(e, t) {
        let r = e.indexOf(t);
        r > -1 && e.splice(r, 1);
      }
      r.d(t, { Ai: () => n, Kq: () => a });
    },
    11515: (e, t, r) => {
      "use strict";
      r.d(t, { q: () => a });
      let a = (e, t, r) => (r > t ? t : r < e ? e : r);
    },
    53791: (e, t, r) => {
      "use strict";
      r.d(t, { B: () => a });
      let a = "undefined" != typeof window;
    },
    95955: (e, t, r) => {
      "use strict";
      r.d(t, { i: () => a });
      let a = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
    },
    82423: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => a });
      let a = (e) => /^0[^.\s]+$/u.test(e);
    },
    71618: (e, t, r) => {
      "use strict";
      r.d(t, { k: () => a });
      let a = (e, t, r) => e + (t - e) * r;
    },
    23348: (e, t, r) => {
      "use strict";
      r.d(t, { F: () => n });
      let a = (e, t) => (r) => t(e(r)),
        n = (...e) => e.reduce(a);
    },
    55614: (e, t, r) => {
      "use strict";
      r.d(t, { B: () => n, K: () => s });
      var a = r(61027);
      let n = (e) => !!(e && "object" == typeof e && e.mix && e.toValue),
        s = (e) => ((0, a.p)(e) ? e[e.length - 1] || 0 : e);
    },
    74945: (e, t, r) => {
      "use strict";
      r.d(t, { v: () => n });
      var a = r(53605);
      class n {
        constructor() {
          this.subscriptions = [];
        }
        add(e) {
          return (
            (0, a.Kq)(this.subscriptions, e),
            () => (0, a.Ai)(this.subscriptions, e)
          );
        }
        notify(e, t, r) {
          let a = this.subscriptions.length;
          if (a) {
            if (1 === a) this.subscriptions[0](e, t, r);
            else
              for (let n = 0; n < a; n++) {
                let a = this.subscriptions[n];
                a && a(e, t, r);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    80970: (e, t, r) => {
      "use strict";
      r.d(t, { M: () => n });
      var a = r(12115);
      function n(e) {
        let t = (0, a.useRef)(null);
        return null === t.current && (t.current = e()), t.current;
      }
    },
    24995: (e, t, r) => {
      "use strict";
      r.d(t, { E: () => n });
      var a = r(12115);
      let n = r(53791).B ? a.useLayoutEffect : a.useEffect;
    },
    87094: (e, t, r) => {
      "use strict";
      function a(e, t) {
        return t ? (1e3 / t) * e : 0;
      }
      r.d(t, { f: () => a });
    },
    63930: (e, t, r) => {
      "use strict";
      r.d(t, { OQ: () => d });
      var a = r(28797),
        n = r(74945),
        s = r(87094),
        o = r(89811);
      let i = (e) => !isNaN(parseFloat(e)),
        l = { current: void 0 };
      class c {
        constructor(e, t = {}) {
          (this.version = "11.18.2"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (e, t = !0) => {
              let r = a.k.now();
              this.updatedAt !== r && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(e),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                t &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(e),
            (this.owner = t.owner);
        }
        setCurrent(e) {
          (this.current = e),
            (this.updatedAt = a.k.now()),
            null === this.canTrackVelocity &&
              void 0 !== e &&
              (this.canTrackVelocity = i(this.current));
        }
        setPrevFrameValue(e = this.current) {
          (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(e) {
          return this.on("change", e);
        }
        on(e, t) {
          this.events[e] || (this.events[e] = new n.v());
          let r = this.events[e].add(t);
          return "change" === e
            ? () => {
                r(),
                  o.Gt.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : r;
        }
        clearListeners() {
          for (let e in this.events) this.events[e].clear();
        }
        attach(e, t) {
          (this.passiveEffect = e), (this.stopPassiveEffect = t);
        }
        set(e, t = !0) {
          t && this.passiveEffect
            ? this.passiveEffect(e, this.updateAndNotify)
            : this.updateAndNotify(e, t);
        }
        setWithVelocity(e, t, r) {
          this.set(t),
            (this.prev = void 0),
            (this.prevFrameValue = e),
            (this.prevUpdatedAt = this.updatedAt - r);
        }
        jump(e, t = !0) {
          this.updateAndNotify(e),
            (this.prev = e),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            t && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let e = a.k.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            e - this.updatedAt > 30
          )
            return 0;
          let t = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, s.f)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            t
          );
        }
        start(e) {
          return (
            this.stop(),
            new Promise((t) => {
              (this.hasAnimated = !0),
                (this.animation = e(t)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function d(e, t) {
        return new c(e, t);
      }
    },
    79551: (e, t, r) => {
      "use strict";
      r.d(t, { u: () => n });
      var a = r(80864);
      let n = {
        test: (0, r(71460).$)("#"),
        parse: function (e) {
          let t = "",
            r = "",
            a = "",
            n = "";
          return (
            e.length > 5
              ? ((t = e.substring(1, 3)),
                (r = e.substring(3, 5)),
                (a = e.substring(5, 7)),
                (n = e.substring(7, 9)))
              : ((t = e.substring(1, 2)),
                (r = e.substring(2, 3)),
                (a = e.substring(3, 4)),
                (n = e.substring(4, 5)),
                (t += t),
                (r += r),
                (a += a),
                (n += n)),
            {
              red: parseInt(t, 16),
              green: parseInt(r, 16),
              blue: parseInt(a, 16),
              alpha: n ? parseInt(n, 16) / 255 : 1,
            }
          );
        },
        transform: a.B.transform,
      };
    },
    30692: (e, t, r) => {
      "use strict";
      r.d(t, { V: () => i });
      var a = r(68039),
        n = r(29286),
        s = r(20973),
        o = r(71460);
      let i = {
        test: (0, o.$)("hsl", "hue"),
        parse: (0, o.q)("hue", "saturation", "lightness"),
        transform: ({ hue: e, saturation: t, lightness: r, alpha: o = 1 }) =>
          "hsla(" +
          Math.round(e) +
          ", " +
          n.KN.transform((0, s.a)(t)) +
          ", " +
          n.KN.transform((0, s.a)(r)) +
          ", " +
          (0, s.a)(a.X4.transform(o)) +
          ")",
      };
    },
    38312: (e, t, r) => {
      "use strict";
      r.d(t, { y: () => o });
      var a = r(79551),
        n = r(30692),
        s = r(80864);
      let o = {
        test: (e) => s.B.test(e) || a.u.test(e) || n.V.test(e),
        parse: (e) =>
          s.B.test(e)
            ? s.B.parse(e)
            : n.V.test(e)
            ? n.V.parse(e)
            : a.u.parse(e),
        transform: (e) =>
          "string" == typeof e
            ? e
            : e.hasOwnProperty("red")
            ? s.B.transform(e)
            : n.V.transform(e),
      };
    },
    80864: (e, t, r) => {
      "use strict";
      r.d(t, { B: () => c });
      var a = r(11515),
        n = r(68039),
        s = r(20973),
        o = r(71460);
      let i = (e) => (0, a.q)(0, 255, e),
        l = { ...n.ai, transform: (e) => Math.round(i(e)) },
        c = {
          test: (0, o.$)("rgb", "red"),
          parse: (0, o.q)("red", "green", "blue"),
          transform: ({ red: e, green: t, blue: r, alpha: a = 1 }) =>
            "rgba(" +
            l.transform(e) +
            ", " +
            l.transform(t) +
            ", " +
            l.transform(r) +
            ", " +
            (0, s.a)(n.X4.transform(a)) +
            ")",
        };
    },
    71460: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => s, q: () => o });
      var a = r(85166);
      let n =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        s = (e, t) => (r) =>
          !!(
            ("string" == typeof r && n.test(r) && r.startsWith(e)) ||
            (t && null != r && Object.prototype.hasOwnProperty.call(r, t))
          ),
        o = (e, t, r) => (n) => {
          if ("string" != typeof n) return n;
          let [s, o, i, l] = n.match(a.S);
          return {
            [e]: parseFloat(s),
            [t]: parseFloat(o),
            [r]: parseFloat(i),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    72851: (e, t, r) => {
      "use strict";
      r.d(t, { p: () => l });
      var a = r(76560),
        n = r(85166);
      let s = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function o(e) {
        let [t, r] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        let [a] = r.match(n.S) || [];
        if (!a) return e;
        let o = r.replace(a, ""),
          i = s.has(t) ? 1 : 0;
        return a !== r && (i *= 100), t + "(" + i + o + ")";
      }
      let i = /\b([a-z-]*)\(.*?\)/gu,
        l = {
          ...a.f,
          getAnimatableNone: (e) => {
            let t = e.match(i);
            return t ? t.map(o).join(" ") : e;
          },
        };
    },
    76560: (e, t, r) => {
      "use strict";
      r.d(t, { V: () => d, f: () => m });
      var a = r(38312);
      let n =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
      var s = r(85166),
        o = r(20973);
      let i = "number",
        l = "color",
        c =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function d(e) {
        let t = e.toString(),
          r = [],
          n = { color: [], number: [], var: [] },
          s = [],
          o = 0,
          d = t
            .replace(
              c,
              (e) => (
                a.y.test(e)
                  ? (n.color.push(o), s.push(l), r.push(a.y.parse(e)))
                  : e.startsWith("var(")
                  ? (n.var.push(o), s.push("var"), r.push(e))
                  : (n.number.push(o), s.push(i), r.push(parseFloat(e))),
                ++o,
                "${}"
              )
            )
            .split("${}");
        return { values: r, split: d, indexes: n, types: s };
      }
      function u(e) {
        return d(e).values;
      }
      function p(e) {
        let { split: t, types: r } = d(e),
          n = t.length;
        return (e) => {
          let s = "";
          for (let c = 0; c < n; c++)
            if (((s += t[c]), void 0 !== e[c])) {
              let t = r[c];
              t === i
                ? (s += (0, o.a)(e[c]))
                : t === l
                ? (s += a.y.transform(e[c]))
                : (s += e[c]);
            }
          return s;
        };
      }
      let h = (e) => ("number" == typeof e ? 0 : e),
        m = {
          test: function (e) {
            var t, r;
            return (
              isNaN(e) &&
              "string" == typeof e &&
              ((null === (t = e.match(s.S)) || void 0 === t
                ? void 0
                : t.length) || 0) +
                ((null === (r = e.match(n)) || void 0 === r
                  ? void 0
                  : r.length) || 0) >
                0
            );
          },
          parse: u,
          createTransformer: p,
          getAnimatableNone: function (e) {
            let t = u(e);
            return p(e)(t.map(h));
          },
        };
    },
    68039: (e, t, r) => {
      "use strict";
      r.d(t, { X4: () => s, ai: () => n, hs: () => o });
      var a = r(11515);
      let n = {
          test: (e) => "number" == typeof e,
          parse: parseFloat,
          transform: (e) => e,
        },
        s = { ...n, transform: (e) => (0, a.q)(0, 1, e) },
        o = { ...n, default: 1 };
    },
    29286: (e, t, r) => {
      "use strict";
      r.d(t, {
        KN: () => s,
        gQ: () => c,
        px: () => o,
        uj: () => n,
        vh: () => i,
        vw: () => l,
      });
      let a = (e) => ({
          test: (t) =>
            "string" == typeof t && t.endsWith(e) && 1 === t.split(" ").length,
          parse: parseFloat,
          transform: (t) => `${t}${e}`,
        }),
        n = a("deg"),
        s = a("%"),
        o = a("px"),
        i = a("vh"),
        l = a("vw"),
        c = {
          ...s,
          parse: (e) => s.parse(e) / 100,
          transform: (e) => s.transform(100 * e),
        };
    },
    85166: (e, t, r) => {
      "use strict";
      r.d(t, { S: () => a });
      let a = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    },
    20973: (e, t, r) => {
      "use strict";
      r.d(t, { a: () => a });
      let a = (e) => Math.round(1e5 * e) / 1e5;
    },
    56126: (e, t, r) => {
      "use strict";
      r.d(t, { g: () => n });
      var a = r(47371);
      function n(e, t) {
        let r = e.getValue("willChange");
        if ((0, a.S)(r) && r.add) return r.add(t);
      }
    },
    47371: (e, t, r) => {
      "use strict";
      r.d(t, { S: () => a });
      let a = (e) => !!(e && e.getVelocity);
    },
    68078: (e, t, r) => {
      "use strict";
      r.d(t, {
        Mu: () => cU,
        gf: () => cR,
        NO: () => cL,
        Wc: () => cO,
        GV: () => cI,
        ES: () => cF,
      });
      var a = {};
      r.r(a),
        r.d(a, {
          abey: () => s,
          abstract: () => $,
          abstractTestnet: () => X,
          acala: () => Z,
          acria: () => J,
          adf: () => Y,
          aioz: () => Q,
          alephZero: () => ee,
          alephZeroTestnet: () => et,
          alienx: () => er,
          alienxHalTestnet: () => ea,
          ancient8: () => el,
          ancient8Sepolia: () => ec,
          anvil: () => ed,
          apeChain: () => eu,
          apexTestnet: () => ep,
          arbitrum: () => eh,
          arbitrumGoerli: () => em,
          arbitrumNova: () => ef,
          arbitrumSepolia: () => eb,
          areonNetwork: () => ey,
          areonNetworkTestnet: () => ex,
          artelaTestnet: () => ev,
          arthera: () => eg,
          artheraTestnet: () => eE,
          assetChain: () => ek,
          assetChainTestnet: () => eC,
          astar: () => ew,
          astarZkEVM: () => eT,
          astarZkyoto: () => eS,
          atletaOlympia: () => eA,
          aurora: () => eU,
          auroraTestnet: () => eB,
          auroria: () => eM,
          avalanche: () => eP,
          avalancheFuji: () => eD,
          b3: () => eF,
          b3Sepolia: () => eI,
          bahamut: () => eO,
          base: () => eR,
          baseGoerli: () => eN,
          baseSepolia: () => ez,
          basecampTestnet: () => eL,
          beam: () => eK,
          beamTestnet: () => eV,
          bearNetworkChainMainnet: () => eH,
          bearNetworkChainTestnet: () => ej,
          berachain: () => e_,
          berachainBepolia: () => eG,
          berachainTestnet: () => eW,
          berachainTestnetbArtio: () => eq,
          bevmMainnet: () => e$,
          bifrost: () => eX,
          birdlayer: () => e7,
          bitTorrent: () => e2,
          bitTorrentTestnet: () => e3,
          bitgert: () => eZ,
          bitkub: () => eJ,
          bitkubTestnet: () => eY,
          bitlayer: () => eQ,
          bitlayerTestnet: () => e0,
          bitrock: () => e1,
          blast: () => e6,
          blastSepolia: () => e8,
          bob: () => e5,
          bobSepolia: () => te,
          boba: () => e9,
          bobaSepolia: () => e4,
          boolBetaMainnet: () => tt,
          botanixTestnet: () => tr,
          bounceBit: () => ta,
          bounceBitTestnet: () => tn,
          bronos: () => ts,
          bronosTestnet: () => to,
          bsc: () => ti.N,
          bscGreenfield: () => tl,
          bscTestnet: () => tc.c,
          bsquared: () => td,
          bsquaredTestnet: () => tu,
          btr: () => tp,
          btrTestnet: () => th,
          bxn: () => tm,
          bxnTestnet: () => tf,
          cannon: () => tb,
          canto: () => ty,
          celo: () => tT,
          celoAlfajores: () => tS,
          chang: () => tA,
          chiliz: () => tU,
          chips: () => tB,
          citreaTestnet: () => tM,
          classic: () => tP,
          coinbit: () => tD,
          coinex: () => tF,
          confluxESpace: () => tI,
          confluxESpaceTestnet: () => tO,
          coreDao: () => tR,
          coreTestnet1: () => tL,
          coreTestnet2: () => tN,
          corn: () => tz,
          cornTestnet: () => tK,
          crab: () => tV,
          creatorTestnet: () => tH,
          creditCoin3Mainnet: () => tj,
          creditCoin3Testnet: () => t_,
          cronos: () => tG,
          cronosTestnet: () => tW,
          cronoszkEVM: () => tq,
          cronoszkEVMTestnet: () => t$,
          crossbell: () => tX,
          curtis: () => tZ,
          cyber: () => tJ,
          cyberTestnet: () => tY,
          dailyNetwork: () => tQ,
          dailyNetworkTestnet: () => t0,
          darwinia: () => t1,
          dbkchain: () => t2,
          dchain: () => t3,
          dchainTestnet: () => t7,
          defichainEvm: () => t6,
          defichainEvmTestnet: () => t8,
          degen: () => t5,
          dfk: () => t9,
          diode: () => t4,
          disChain: () => re,
          dodochainTestnet: () => rt,
          dogechain: () => rr,
          donatuz: () => ra,
          dosChain: () => rn,
          dosChainTestnet: () => rs,
          dreyerxMainnet: () => ro,
          dreyerxTestnet: () => ri,
          dustboyIoT: () => rl,
          dymension: () => rc,
          edexa: () => ru,
          edexaTestnet: () => rd,
          edgeless: () => rp,
          edgelessTestnet: () => rh,
          edgeware: () => rm,
          edgewareTestnet: () => rf,
          eduChain: () => rb,
          eduChainTestnet: () => ry,
          ekta: () => rx,
          ektaTestnet: () => rv,
          elastos: () => rg,
          elastosTestnet: () => rE,
          electroneum: () => rk,
          electroneumTestnet: () => rC,
          elysiumTestnet: () => rw,
          energy: () => rT,
          enuls: () => rS,
          eon: () => rA,
          eos: () => rU,
          eosTestnet: () => rB,
          etherlink: () => rM,
          etherlinkTestnet: () => rP,
          ethernity: () => rD,
          etp: () => rF,
          evmos: () => rI,
          evmosTestnet: () => rO,
          excelonMainnet: () => rR,
          expanse: () => rL,
          exsat: () => rN,
          exsatTestnet: () => rz,
          fantom: () => rK,
          fantomSonicTestnet: () => rV,
          fantomTestnet: () => rH,
          fibo: () => rj,
          filecoin: () => r_,
          filecoinCalibration: () => rG,
          filecoinHyperspace: () => rW,
          fireChain: () => rq,
          flare: () => r$,
          flareTestnet: () => rX,
          flowMainnet: () => rZ,
          flowPreviewnet: () => rJ,
          flowTestnet: () => rY,
          fluence: () => rQ,
          fluenceStage: () => r0,
          fluenceTestnet: () => r1,
          fluentTestnet: () => r2,
          form: () => r7,
          formTestnet: () => r8,
          forma: () => r3,
          formicarium: () => r6,
          forta: () => r5,
          foundry: () => r9,
          fraxtal: () => r4,
          fraxtalTestnet: () => ae,
          funkiMainnet: () => at,
          funkiSepolia: () => ar,
          fuse: () => aa,
          fuseSparknet: () => an,
          fusion: () => as,
          fusionTestnet: () => ao,
          garnet: () => ai,
          geist: () => al,
          genesys: () => ac,
          glideL1Protocol: () => ad,
          glideL2Protocol: () => au,
          gnosis: () => ap,
          gnosisChiado: () => ah,
          goChain: () => ab,
          goat: () => am,
          gobi: () => af,
          godwoken: () => ay,
          goerli: () => ax,
          gravity: () => av,
          gunz: () => ag,
          guruNetwork: () => aE,
          guruTestnet: () => ak,
          ham: () => aC,
          happychainTestnet: () => aw,
          haqqMainnet: () => aT,
          haqqTestedge2: () => aS,
          hardhat: () => aA,
          harmonyOne: () => aU,
          hashkey: () => aB,
          hashkeyTestnet: () => aM,
          haustTestnet: () => aP,
          hedera: () => aD,
          hederaPreviewnet: () => aF,
          hederaTestnet: () => aI,
          hela: () => aO,
          hemi: () => aR,
          hemiSepolia: () => aL,
          holesky: () => aN,
          hoodi: () => az,
          hpb: () => aK,
          huddle01Mainnet: () => aV,
          huddle01Testnet: () => aH,
          humanode: () => aj,
          humanodeTestnet5: () => a_,
          hychain: () => aG,
          hychainTestnet: () => aW,
          iSunCoin: () => a6,
          idchain: () => aq,
          immutableZkEvm: () => a$,
          immutableZkEvmTestnet: () => aX,
          inEVM: () => aZ,
          initVerse: () => aJ,
          initVerseGenesis: () => aY,
          ink: () => aQ,
          inkSepolia: () => a0,
          iota: () => a1,
          iotaTestnet: () => a2,
          iotex: () => a3,
          iotexTestnet: () => a7,
          jbc: () => a8,
          jbcTestnet: () => a5,
          juneo: () => a9,
          juneoBCH1Chain: () => a4,
          juneoDAI1Chain: () => ne,
          juneoDOGE1Chain: () => nt,
          juneoEUR1Chain: () => nr,
          juneoGLD1Chain: () => na,
          juneoLINK1Chain: () => nn,
          juneoLTC1Chain: () => ns,
          juneoSGD1Chain: () => ni,
          juneoSocotraTestnet: () => nl,
          juneoUSD1Chain: () => nc,
          juneoUSDT1Chain: () => nd,
          juneomBTC1Chain: () => no,
          kaia: () => ng,
          kairos: () => nE,
          kakarotSepolia: () => np,
          kakarotStarknetSepolia: () => nh,
          kardiaChain: () => nm,
          karura: () => nu,
          kava: () => nf,
          kavaTestnet: () => nb,
          kcc: () => ny,
          kinto: () => nx,
          klaytn: () => nv,
          klaytnBaobab: () => nk,
          koi: () => nC,
          kroma: () => nw,
          kromaSepolia: () => nT,
          l3x: () => nS,
          l3xTestnet: () => nA,
          lavita: () => nU,
          lens: () => nB,
          lensTestnet: () => nM,
          lestnet: () => nP,
          lightlinkPegasus: () => nD,
          lightlinkPhoenix: () => nF,
          linea: () => nH,
          lineaGoerli: () => nj,
          lineaSepolia: () => n_,
          lineaTestnet: () => nG,
          lisk: () => nW,
          liskSepolia: () => nq,
          localhost: () => n$,
          loop: () => nX,
          lukso: () => nZ,
          luksoTestnet: () => nJ,
          lumiaMainnet: () => nY,
          lumiaTestnet: () => nQ,
          lumoz: () => n0,
          lumozTestnet: () => n1,
          lycan: () => n2,
          lyra: () => n3,
          mainnet: () => n7.r,
          mandala: () => n6,
          manta: () => n8,
          mantaSepoliaTestnet: () => n5,
          mantaTestnet: () => n9,
          mantle: () => n4,
          mantleSepoliaTestnet: () => se,
          mantleTestnet: () => st,
          mapProtocol: () => sr,
          matchain: () => sa,
          matchainTestnet: () => sn,
          mchVerse: () => ss,
          megaethTestnet: () => so,
          mekong: () => si,
          meld: () => sl,
          memecore: () => sc,
          merlin: () => sd,
          merlinErigonTestnet: () => su,
          metachain: () => sp,
          metachainIstanbul: () => sh,
          metadium: () => sm,
          metalL2: () => sf,
          meter: () => sb,
          meterTestnet: () => sy,
          metis: () => sx,
          metisGoerli: () => sg,
          metisSepolia: () => sv,
          mev: () => sE,
          mevTestnet: () => sk,
          mint: () => sC,
          mintSepoliaTestnet: () => sw,
          mitosisTestnet: () => sT,
          mode: () => sS,
          modeTestnet: () => sA,
          monadTestnet: () => sU,
          moonbaseAlpha: () => sB,
          moonbeam: () => sM,
          moonbeamDev: () => sP,
          moonriver: () => sD,
          morph: () => sF,
          morphHolesky: () => sI,
          morphSepolia: () => sO,
          nahmii: () => sR,
          nautilus: () => sL,
          near: () => sN,
          nearTestnet: () => sz,
          neonDevnet: () => sK,
          neonMainnet: () => sV,
          neoxMainnet: () => sH,
          neoxT4: () => sj,
          newton: () => s_,
          nexi: () => sG,
          nexilix: () => sW,
          nibiru: () => sq,
          oasisTestnet: () => s$,
          oasys: () => sX,
          odysseyTestnet: () => sZ,
          okc: () => sJ,
          omax: () => sY,
          oneWorld: () => sQ,
          oortMainnetDev: () => s0,
          opBNB: () => s1,
          opBNBTestnet: () => s2,
          optimism: () => s3,
          optimismGoerli: () => s7,
          optimismSepolia: () => s6,
          optopia: () => s8,
          optopiaTestnet: () => s5,
          orderly: () => s9,
          orderlySepolia: () => s4,
          otimDevnet: () => oe,
          palm: () => ot,
          palmTestnet: () => or,
          peaq: () => oa,
          pgn: () => on,
          pgnTestnet: () => os,
          phoenix: () => oo,
          planq: () => oi,
          playfiAlbireo: () => ol,
          plinga: () => oc,
          plume: () => od,
          plumeDevnet: () => ou,
          plumeMainnet: () => op,
          plumeSepolia: () => oh,
          plumeTestnet: () => om,
          polterTestnet: () => of,
          polygon: () => ob,
          polygonAmoy: () => oy,
          polygonMumbai: () => ox,
          polygonZkEvm: () => ov,
          polygonZkEvmCardona: () => og,
          polygonZkEvmTestnet: () => oE,
          polynomial: () => ok,
          polynomialSepolia: () => oC,
          premiumBlockTestnet: () => ow,
          pulsechain: () => oT,
          pulsechainV4: () => oS,
          pumpfiTestnet: () => oA,
          pyrope: () => oU,
          qMainnet: () => oM,
          qTestnet: () => oP,
          ql1: () => oB,
          real: () => oD,
          redbellyMainnet: () => oF,
          redbellyTestnet: () => oI,
          reddioSepolia: () => oN,
          redstone: () => oO,
          rei: () => oR,
          reyaNetwork: () => oL,
          rivalz: () => oz,
          rollux: () => oK,
          rolluxTestnet: () => oV,
          ronin: () => oH,
          root: () => oj,
          rootPorcini: () => o_,
          rootstock: () => oG,
          rootstockTestnet: () => oW,
          rss3: () => oq,
          rss3Sepolia: () => o$,
          saakuru: () => oX,
          saga: () => oZ,
          saigon: () => oJ,
          sanko: () => oY,
          sapphire: () => oQ,
          sapphireTestnet: () => o0,
          satoshiVM: () => o1,
          satoshiVMTestnet: () => o2,
          scroll: () => o3,
          scrollSepolia: () => o7,
          sei: () => o6,
          seiDevnet: () => o8,
          seiTestnet: () => o9,
          seismicDevnet: () => o5,
          sepolia: () => o4,
          shape: () => ie,
          shapeSepolia: () => it,
          shardeum: () => ir,
          shardeumSphinx: () => ia,
          shibarium: () => is,
          shibariumTestnet: () => io,
          shiden: () => ii,
          shimmer: () => il,
          shimmerTestnet: () => ic,
          sidraChain: () => id,
          silicon: () => iu,
          siliconSepolia: () => ip,
          sixProtocol: () => ih,
          skaleBlockBrawlers: () => im,
          skaleCalypso: () => ib,
          skaleCalypsoTestnet: () => iy,
          skaleCryptoBlades: () => ix,
          skaleCryptoColosseum: () => iv,
          skaleEuropa: () => ig,
          skaleEuropaTestnet: () => iE,
          skaleExorde: () => ik,
          skaleHumanProtocol: () => iC,
          skaleNebula: () => iw,
          skaleNebulaTestnet: () => iT,
          skaleRazor: () => iS,
          skaleTitan: () => iA,
          skaleTitanTestnet: () => iU,
          sketchpad: () => iB,
          snax: () => iM,
          snaxTestnet: () => iP,
          somniaTestnet: () => iD,
          soneium: () => iF,
          soneiumMinato: () => iI,
          songbird: () => iN,
          songbirdTestnet: () => iz,
          sonic: () => iO,
          sonicBlazeTestnet: () => iL,
          sonicTestnet: () => iR,
          sophon: () => iK,
          sophonTestnet: () => iV,
          spicy: () => iH,
          statusNetworkSepolia: () => ij,
          statusSepolia: () => ij,
          step: () => i_,
          story: () => iG,
          storyAeneid: () => iW,
          storyOdyssey: () => iq,
          storyTestnet: () => i$,
          stratis: () => iX,
          superlumio: () => iZ,
          superposition: () => iJ,
          superseed: () => iY,
          superseedSepolia: () => iQ,
          swan: () => i0,
          swanProximaTestnet: () => i1,
          swanSaturnTestnet: () => i2,
          swellchain: () => i3,
          swellchainTestnet: () => i7,
          swissdlt: () => i6,
          syscoin: () => i8,
          syscoinTestnet: () => i5,
          taiko: () => i9,
          taikoHekla: () => i4,
          taikoJolnir: () => le,
          taikoKatla: () => lt,
          taikoTestnetSepolia: () => lr,
          taraxa: () => la,
          taraxaTestnet: () => ln,
          telcoinTestnet: () => ls,
          telos: () => lo,
          telosTestnet: () => li,
          tenet: () => ll,
          ternoa: () => lc,
          thaiChain: () => ld,
          that: () => lu,
          theta: () => lp,
          thetaTestnet: () => lh,
          thunderCore: () => lm,
          thunderTestnet: () => lf,
          tiktrixTestnet: () => lb,
          tomb: () => ly,
          treasure: () => lx,
          treasureTopaz: () => lv,
          tron: () => lg,
          tronShasta: () => lE,
          ubiq: () => lk,
          ultra: () => lC,
          ultraTestnet: () => lw,
          ultron: () => lT,
          ultronTestnet: () => lS,
          unichain: () => lA,
          unichainSepolia: () => lU,
          unique: () => lB,
          uniqueOpal: () => lM,
          uniqueQuartz: () => lP,
          unreal: () => lD,
          vanar: () => lF,
          vechain: () => lI,
          velas: () => lO,
          viction: () => lR,
          victionTestnet: () => lL,
          vision: () => lN,
          visionTestnet: () => lz,
          wanchain: () => lK,
          wanchainTestnet: () => lV,
          weaveVMAlphanet: () => lH,
          wemix: () => lj,
          wemixTestnet: () => l_,
          westendAssetHub: () => lG,
          whitechain: () => lW,
          whitechainTestnet: () => lq,
          wmcTestnet: () => l$,
          worldLand: () => lJ,
          worldchain: () => lX,
          worldchainSepolia: () => lZ,
          x1Testnet: () => l3,
          xLayer: () => l2,
          xLayerTestnet: () => l3,
          xai: () => lY,
          xaiTestnet: () => lQ,
          xdc: () => l0,
          xdcTestnet: () => l1,
          xrOne: () => l7,
          xrSepolia: () => l5,
          xrplevmDevnet: () => l6,
          xrplevmTestnet: () => l8,
          yooldoVerse: () => l9,
          yooldoVerseTestnet: () => l4,
          zenchainTestnet: () => ce,
          zeniq: () => ct,
          zeroG: () => cr,
          zeroNetwork: () => ca,
          zetachain: () => cn,
          zetachainAthensTestnet: () => cs,
          zhejiang: () => co,
          zilliqa: () => ci,
          zilliqaTestnet: () => cl,
          zircuit: () => cc,
          zircuitGarfieldTestnet: () => cd,
          zircuitTestnet: () => cu,
          zkFair: () => cp,
          zkFairTestnet: () => ch,
          zkLinkNova: () => cm,
          zkLinkNovaSepoliaTestnet: () => cf,
          zkSync: () => cb,
          zkSyncInMemoryNode: () => cy,
          zkSyncLocalNode: () => cE,
          zkSyncSepoliaTestnet: () => ck,
          zksync: () => cb,
          zksyncInMemoryNode: () => cy,
          zksyncLocalCustomHyperchain: () => cx,
          zksyncLocalHyperchain: () => cv,
          zksyncLocalHyperchainL1: () => cg,
          zksyncLocalNode: () => cE,
          zksyncSepoliaTestnet: () => ck,
          zora: () => cC,
          zoraSepolia: () => cw,
          zoraTestnet: () => cT,
        });
      var n = r(68275);
      let s = (0, n.x)({
        id: 179,
        name: "ABEY Mainnet",
        nativeCurrency: { name: "ABEY", symbol: "ABEY", decimals: 18 },
        rpcUrls: { default: { http: ["https://rpc.abeychain.com"] } },
        blockExplorers: {
          default: { name: "Abey Scan", url: "https://abeyscan.com" },
        },
        testnet: !1,
      });
      var o = r(45732),
        i = r(76397),
        l = r(98979),
        c = r(55878),
        d = r(58981),
        u = r(6035),
        p = r(68613),
        h = r(53864),
        m = r(26542);
      let f = 32n * m.Au,
        b = {
          block: (0, c.R)({
            format(e) {
              let t = e.transactions?.map((e) => {
                if ("string" == typeof e) return e;
                let t = b.transaction?.format(e);
                return (
                  "0x71" === t.typeHex
                    ? (t.type = "eip712")
                    : "0xff" === t.typeHex && (t.type = "priority"),
                  t
                );
              });
              return {
                l1BatchNumber: e.l1BatchNumber
                  ? (0, o.uU)(e.l1BatchNumber)
                  : null,
                l1BatchTimestamp: e.l1BatchTimestamp
                  ? (0, o.uU)(e.l1BatchTimestamp)
                  : null,
                transactions: t,
              };
            },
          }),
          transaction: (0, u.gU)({
            format(e) {
              let t = {};
              return (
                "0x71" === e.type
                  ? (t.type = "eip712")
                  : "0xff" === e.type && (t.type = "priority"),
                {
                  ...t,
                  l1BatchNumber: e.l1BatchNumber
                    ? (0, o.uU)(e.l1BatchNumber)
                    : null,
                  l1BatchTxIndex: e.l1BatchTxIndex
                    ? (0, o.uU)(e.l1BatchTxIndex)
                    : null,
                }
              );
            },
          }),
          transactionReceipt: (0, p.WB)({
            format: (e) => ({
              l1BatchNumber: e.l1BatchNumber
                ? (0, o.uU)(e.l1BatchNumber)
                : null,
              l1BatchTxIndex: e.l1BatchTxIndex
                ? (0, o.uU)(e.l1BatchTxIndex)
                : null,
              logs: e.logs.map((e) => ({
                ...(0, d.e)(e),
                l1BatchNumber: e.l1BatchNumber
                  ? (0, o.uU)(e.l1BatchNumber)
                  : null,
                transactionLogIndex: (0, o.ME)(e.transactionLogIndex),
                logType: e.logType,
              })),
              l2ToL1Logs: e.l2ToL1Logs.map((e) => ({
                blockNumber: (0, o.uU)(e.blockHash),
                blockHash: e.blockHash,
                l1BatchNumber: e.l1BatchNumber
                  ? (0, o.uU)(e.l1BatchNumber)
                  : null,
                transactionIndex: (0, o.uU)(e.transactionIndex),
                shardId: (0, o.uU)(e.shardId),
                isService: e.isService,
                sender: e.sender,
                key: e.key,
                value: e.value,
                transactionHash: e.transactionHash,
                logIndex: (0, o.uU)(e.logIndex),
              })),
            }),
          }),
          transactionRequest: (0, h.bm)({
            exclude: [
              "customSignature",
              "factoryDeps",
              "gasPerPubdata",
              "paymaster",
              "paymasterInput",
            ],
            format: (e) =>
              e.gasPerPubdata ||
              (e.paymaster && e.paymasterInput) ||
              e.factoryDeps ||
              e.customSignature
                ? {
                    eip712Meta: {
                      ...(e.gasPerPubdata
                        ? { gasPerPubdata: (0, l.nj)(e.gasPerPubdata) }
                        : { gasPerPubdata: (0, l.nj)(50000n) }),
                      ...(e.paymaster && e.paymasterInput
                        ? {
                            paymasterParams: {
                              paymaster: e.paymaster,
                              paymasterInput: Array.from(
                                (0, i.aT)(e.paymasterInput)
                              ),
                            },
                          }
                        : {}),
                      ...(e.factoryDeps
                        ? {
                            factoryDeps: e.factoryDeps.map((e) =>
                              Array.from((0, i.aT)(e))
                            ),
                          }
                        : {}),
                      ...(e.customSignature
                        ? {
                            customSignature: Array.from(
                              (0, i.aT)(e.customSignature)
                            ),
                          }
                        : {}),
                    },
                    type: "0x71",
                  }
                : {},
          }),
        };
      var y = r(16704),
        x = r(15456),
        v = r(45757),
        g = r(73492),
        E = r(94949),
        k = r(53502),
        C = r(43279),
        w = r(67368),
        T = r(6999),
        S = r(61117),
        A = r(80477),
        U = r(20624),
        B = r(89780),
        M = r(87939),
        P = r(34354),
        D = r(91149),
        F = r(22162);
      function I(e) {
        let { chainId: t, maxPriorityFeePerGas: r, maxFeePerGas: a, to: n } = e;
        if (t <= 0) throw new B.qD({ chainId: t });
        if (n && !(0, P.P)(n)) throw new S.M({ address: n });
        if (a && a > m.Ao) throw new M.BG({ maxFeePerGas: a });
        if (r && a && r > a)
          throw new M.lN({ maxFeePerGas: a, maxPriorityFeePerGas: r });
      }
      var O = r(75086);
      function R(e) {
        if (!e || 0 === e.length) return [];
        let t = [];
        for (let r = 0; r < e.length; r++) {
          let { address: a, storageKeys: n } = e[r];
          for (let e = 0; e < n.length; e++)
            if (n[e].length - 2 != 64) throw new v.fZ({ storageKey: n[e] });
          if (!(0, P.P)(a, { strict: !1 })) throw new S.M({ address: a });
          t.push([a, n]);
        }
        return t;
      }
      function L(e, t) {
        let r = (0, O.L)(e);
        return "eip1559" === r
          ? (function (e, t) {
              let {
                chainId: r,
                gas: a,
                nonce: n,
                to: s,
                value: o,
                maxFeePerGas: i,
                maxPriorityFeePerGas: c,
                accessList: d,
                data: u,
              } = e;
              I(e);
              let p = R(d),
                h = [
                  (0, l.nj)(r),
                  n ? (0, l.nj)(n) : "0x",
                  c ? (0, l.nj)(c) : "0x",
                  i ? (0, l.nj)(i) : "0x",
                  a ? (0, l.nj)(a) : "0x",
                  s ?? "0x",
                  o ? (0, l.nj)(o) : "0x",
                  u ?? "0x",
                  p,
                  ...N(e, t),
                ];
              return (0, y.aP)(["0x02", (0, x.EQ)(h)]);
            })(e, t)
          : "eip2930" === r
          ? (function (e, t) {
              let {
                chainId: r,
                gas: a,
                data: n,
                nonce: s,
                to: o,
                value: i,
                accessList: c,
                gasPrice: d,
              } = e;
              !(function (e) {
                let {
                  chainId: t,
                  maxPriorityFeePerGas: r,
                  gasPrice: a,
                  maxFeePerGas: n,
                  to: s,
                } = e;
                if (t <= 0) throw new B.qD({ chainId: t });
                if (s && !(0, P.P)(s)) throw new S.M({ address: s });
                if (r || n)
                  throw new A.C(
                    "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute."
                  );
                if (a && a > m.Ao) throw new M.BG({ maxFeePerGas: a });
              })(e);
              let u = R(c),
                p = [
                  (0, l.nj)(r),
                  s ? (0, l.nj)(s) : "0x",
                  d ? (0, l.nj)(d) : "0x",
                  a ? (0, l.nj)(a) : "0x",
                  o ?? "0x",
                  i ? (0, l.nj)(i) : "0x",
                  n ?? "0x",
                  u,
                  ...N(e, t),
                ];
              return (0, y.aP)(["0x01", (0, x.EQ)(p)]);
            })(e, t)
          : "eip4844" === r
          ? (function (e, t) {
              let {
                chainId: r,
                gas: a,
                nonce: n,
                to: s,
                value: i,
                maxFeePerBlobGas: c,
                maxFeePerGas: d,
                maxPriorityFeePerGas: u,
                accessList: p,
                data: h,
              } = e;
              !(function (e) {
                let { blobVersionedHashes: t } = e;
                if (t) {
                  if (0 === t.length) throw new U.zF();
                  for (let e of t) {
                    let t = (0, D.E)(e),
                      r = (0, o.ME)((0, F.di)(e, 0, 1));
                    if (32 !== t) throw new U.uP({ hash: e, size: t });
                    if (r !== T.E) throw new U.PK({ hash: e, version: r });
                  }
                }
                I(e);
              })(e);
              let m = e.blobVersionedHashes,
                f = e.sidecars;
              if (e.blobs && (void 0 === m || void 0 === f)) {
                let t =
                    "string" == typeof e.blobs[0]
                      ? e.blobs
                      : e.blobs.map((e) => (0, l.My)(e)),
                  r = e.kzg,
                  a = (0, g.S)({ blobs: t, kzg: r });
                if (
                  (void 0 === m && (m = (0, k.d)({ commitments: a })),
                  void 0 === f)
                ) {
                  let e = (0, E.t)({ blobs: t, commitments: a, kzg: r });
                  f = (0, C.T)({ blobs: t, commitments: a, proofs: e });
                }
              }
              let b = R(p),
                v = [
                  (0, l.nj)(r),
                  n ? (0, l.nj)(n) : "0x",
                  u ? (0, l.nj)(u) : "0x",
                  d ? (0, l.nj)(d) : "0x",
                  a ? (0, l.nj)(a) : "0x",
                  s ?? "0x",
                  i ? (0, l.nj)(i) : "0x",
                  h ?? "0x",
                  b,
                  c ? (0, l.nj)(c) : "0x",
                  m ?? [],
                  ...N(e, t),
                ],
                w = [],
                S = [],
                A = [];
              if (f)
                for (let e = 0; e < f.length; e++) {
                  let { blob: t, commitment: r, proof: a } = f[e];
                  w.push(t), S.push(r), A.push(a);
                }
              return (0, y.aP)([
                "0x03",
                f ? (0, x.EQ)([v, w, S, A]) : (0, x.EQ)(v),
              ]);
            })(e, t)
          : "eip7702" === r
          ? (function (e, t) {
              let {
                authorizationList: r,
                chainId: a,
                gas: n,
                nonce: s,
                to: o,
                value: i,
                maxFeePerGas: c,
                maxPriorityFeePerGas: d,
                accessList: u,
                data: p,
              } = e;
              !(function (e) {
                let { authorizationList: t } = e;
                if (t)
                  for (let e of t) {
                    let { chainId: t } = e,
                      r = e.address;
                    if (!(0, P.P)(r)) throw new S.M({ address: r });
                    if (t < 0) throw new B.qD({ chainId: t });
                  }
                I(e);
              })(e);
              let h = R(u),
                m = (function (e) {
                  if (!e || 0 === e.length) return [];
                  let t = [];
                  for (let r of e) {
                    let { chainId: e, nonce: a, ...n } = r,
                      s = r.address;
                    t.push([
                      e ? (0, l.nj)(e) : "0x",
                      s,
                      a ? (0, l.nj)(a) : "0x",
                      ...N({}, n),
                    ]);
                  }
                  return t;
                })(r);
              return (0, y.aP)([
                "0x04",
                (0, x.EQ)([
                  (0, l.nj)(a),
                  s ? (0, l.nj)(s) : "0x",
                  d ? (0, l.nj)(d) : "0x",
                  c ? (0, l.nj)(c) : "0x",
                  n ? (0, l.nj)(n) : "0x",
                  o ?? "0x",
                  i ? (0, l.nj)(i) : "0x",
                  p ?? "0x",
                  h,
                  m,
                  ...N(e, t),
                ]),
              ]);
            })(e, t)
          : (function (e, t) {
              let {
                chainId: r = 0,
                gas: a,
                data: n,
                nonce: s,
                to: o,
                value: i,
                gasPrice: c,
              } = e;
              !(function (e) {
                let {
                  chainId: t,
                  maxPriorityFeePerGas: r,
                  gasPrice: a,
                  maxFeePerGas: n,
                  to: s,
                } = e;
                if (s && !(0, P.P)(s)) throw new S.M({ address: s });
                if (void 0 !== t && t <= 0) throw new B.qD({ chainId: t });
                if (r || n)
                  throw new A.C(
                    "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute."
                  );
                if (a && a > m.Ao) throw new M.BG({ maxFeePerGas: a });
              })(e);
              let d = [
                s ? (0, l.nj)(s) : "0x",
                c ? (0, l.nj)(c) : "0x",
                a ? (0, l.nj)(a) : "0x",
                o ?? "0x",
                i ? (0, l.nj)(i) : "0x",
                n ?? "0x",
              ];
              if (t) {
                let e = (() => {
                    if (t.v >= 35n)
                      return (t.v - 35n) / 2n > 0
                        ? t.v
                        : 27n + (35n === t.v ? 0n : 1n);
                    if (r > 0) return BigInt(2 * r) + BigInt(35n + t.v - 27n);
                    let e = 27n + (27n === t.v ? 0n : 1n);
                    if (t.v !== e) throw new v.zW({ v: t.v });
                    return e;
                  })(),
                  a = (0, w.B)(t.r),
                  n = (0, w.B)(t.s);
                d = [
                  ...d,
                  (0, l.nj)(e),
                  "0x00" === a ? "0x" : a,
                  "0x00" === n ? "0x" : n,
                ];
              } else r > 0 && (d = [...d, (0, l.nj)(r), "0x", "0x"]);
              return (0, x.EQ)(d);
            })(e, t);
      }
      function N(e, t) {
        let r = t ?? e,
          { v: a, yParity: n } = r;
        if (void 0 === r.r || void 0 === r.s || (void 0 === a && void 0 === n))
          return [];
        let s = (0, w.B)(r.r),
          o = (0, w.B)(r.s);
        return [
          "number" == typeof n
            ? n
              ? (0, l.nj)(1)
              : "0x"
            : 0n === a
            ? "0x"
            : 1n === a
            ? (0, l.nj)(1)
            : 27n === a
            ? "0x"
            : (0, l.nj)(1),
          "0x00" === s ? "0x" : s,
          "0x00" === o ? "0x" : o,
        ];
      }
      class z extends A.C {
        constructor() {
          super(
            'Transaction is not an EIP712 transaction.\n\nTransaction must:\n  - include `type: "eip712"`\n  - include one of the following: `customSignature`, `paymaster`, `paymasterInput`, `gasPerPubdata`, `factoryDeps`',
            { name: "InvalidEip712TransactionError" }
          );
        }
      }
      function K(e) {
        return (
          "eip712" === e.type ||
          ("customSignature" in e && !!e.customSignature) ||
          ("paymaster" in e && !!e.paymaster) ||
          ("paymasterInput" in e && !!e.paymasterInput) ||
          ("gasPerPubdata" in e && "bigint" == typeof e.gasPerPubdata) ||
          ("factoryDeps" in e && !!e.factoryDeps)
        );
      }
      function V(e) {
        let { chainId: t, to: r, from: a, paymaster: n, paymasterInput: s } = e;
        if (!K(e)) throw new z();
        if (!t || t <= 0) throw new B.qD({ chainId: t });
        if (r && !(0, P.P)(r)) throw new S.M({ address: r });
        if (a && !(0, P.P)(a)) throw new S.M({ address: a });
        if (n && !(0, P.P)(n)) throw new S.M({ address: n });
        if (n && !s)
          throw new A.C(
            "`paymasterInput` must be provided when `paymaster` is defined"
          );
        if (!n && s)
          throw new A.C(
            "`paymaster` must be provided when `paymasterInput` is defined"
          );
      }
      var H = r(33085),
        j = r(65479);
      class _ extends A.C {
        constructor({ givenLength: e, maxBytecodeSize: t }) {
          super(
            `Bytecode cannot be longer than ${t} bytes. Given length: ${e}`,
            { name: "BytecodeLengthExceedsMaxSizeError" }
          );
        }
      }
      class G extends A.C {
        constructor({ givenLengthInWords: e }) {
          super(
            `Bytecode length in 32-byte words must be odd. Given length in words: ${e}`,
            { name: "BytecodeLengthInWordsMustBeOddError" }
          );
        }
      }
      class W extends A.C {
        constructor({ givenLength: e }) {
          super(
            `The bytecode length in bytes must be divisible by 32. Given length: ${e}`,
            { name: "BytecodeLengthMustBeDivisibleBy32Error" }
          );
        }
      }
      let q = {
          formatters: b,
          serializers: {
            transaction: function (e, t) {
              return K(e)
                ? (function (e) {
                    let {
                      chainId: t,
                      gas: r,
                      nonce: a,
                      to: n,
                      from: s,
                      value: o,
                      maxFeePerGas: i,
                      maxPriorityFeePerGas: c,
                      customSignature: d,
                      factoryDeps: u,
                      paymaster: p,
                      paymasterInput: h,
                      gasPerPubdata: m,
                      data: f,
                    } = e;
                    V(e);
                    let b = [
                      a ? (0, l.nj)(a) : "0x",
                      c ? (0, l.nj)(c) : "0x",
                      i ? (0, l.nj)(i) : "0x",
                      r ? (0, l.nj)(r) : "0x",
                      n ?? "0x",
                      o ? (0, l.nj)(o) : "0x",
                      f ?? "0x",
                      (0, l.nj)(t),
                      (0, l.nj)(""),
                      (0, l.nj)(""),
                      (0, l.nj)(t),
                      s ?? "0x",
                      m ? (0, l.nj)(m) : (0, l.nj)(50000n),
                      u ?? [],
                      d ?? "0x",
                      p && h ? [p, h] : [],
                    ];
                    return (0, y.aP)(["0x71", (0, x.EQ)(b)]);
                  })(e)
                : L(e, t);
            },
          },
          custom: {
            getEip712Domain: (e) => {
              V(e);
              let t = (function (e) {
                let {
                  gas: t,
                  nonce: r,
                  to: a,
                  from: n,
                  value: s,
                  maxFeePerGas: o,
                  maxPriorityFeePerGas: c,
                  factoryDeps: d,
                  paymaster: u,
                  paymasterInput: p,
                  gasPerPubdata: h,
                  data: m,
                } = e;
                return {
                  txType: 113n,
                  from: BigInt(n),
                  to: a ? BigInt(a) : 0n,
                  gasLimit: t ?? 0n,
                  gasPerPubdataByteLimit: h ?? 50000n,
                  maxFeePerGas: o ?? 0n,
                  maxPriorityFeePerGas: c ?? 0n,
                  paymaster: u ? BigInt(u) : 0n,
                  nonce: r ? BigInt(r) : 0n,
                  value: s ?? 0n,
                  data: m || "0x0",
                  factoryDeps:
                    d?.map((e) =>
                      l.nj(
                        (function (e) {
                          let t = (0, i.ZJ)(e);
                          if (t.length % 32 != 0)
                            throw new W({ givenLength: t.length });
                          if (t.length > f)
                            throw new _({
                              givenLength: t.length,
                              maxBytecodeSize: f,
                            });
                          let r = (0, j.s)(t),
                            a = (0, i.ZJ)(r),
                            n = t.length / 32;
                          if (n % 2 == 0)
                            throw new G({ givenLengthInWords: n });
                          let s = (0, i.ZJ)(n),
                            o = (0, H.eV)(s, { size: 2 }),
                            l = new Uint8Array([1, 0]);
                          return a.set(l, 0), a.set(o, 2), a;
                        })(e)
                      )
                    ) ?? [],
                  paymasterInput: p || "0x",
                };
              })(e);
              return {
                domain: { name: "zkSync", version: "2", chainId: e.chainId },
                types: {
                  Transaction: [
                    { name: "txType", type: "uint256" },
                    { name: "from", type: "uint256" },
                    { name: "to", type: "uint256" },
                    { name: "gasLimit", type: "uint256" },
                    { name: "gasPerPubdataByteLimit", type: "uint256" },
                    { name: "maxFeePerGas", type: "uint256" },
                    { name: "maxPriorityFeePerGas", type: "uint256" },
                    { name: "paymaster", type: "uint256" },
                    { name: "nonce", type: "uint256" },
                    { name: "value", type: "uint256" },
                    { name: "data", type: "bytes" },
                    { name: "factoryDeps", type: "bytes32[]" },
                    { name: "paymasterInput", type: "bytes" },
                  ],
                },
                primaryType: "Transaction",
                message: t,
              };
            },
          },
        },
        $ = (0, n.x)({
          ...q,
          id: 2741,
          name: "Abstract",
          nativeCurrency: { decimals: 18, name: "ETH", symbol: "ETH" },
          rpcUrls: {
            default: {
              http: ["https://api.mainnet.abs.xyz"],
              webSocket: ["wss://api.mainnet.abs.xyz/ws"],
            },
          },
          blockExplorers: {
            default: { name: "Etherscan", url: "https://abscan.org" },
            native: {
              name: "Abstract Explorer",
              url: "https://explorer.mainnet.abs.xyz",
            },
          },
          contracts: {
            multicall3: {
              address: "0xAa4De41dba0Ca5dCBb288b7cC6b708F3aaC759E7",
              blockCreated: 5288,
            },
            universalSignatureVerifier: {
              address: "0xfB688330379976DA81eB64Fe4BF50d7401763B9C",
              blockCreated: 5263,
            },
          },
        }),
        X = (0, n.x)({
          ...q,
          id: 11124,
          name: "Abstract Testnet",
          nativeCurrency: { decimals: 18, name: "ETH", symbol: "ETH" },
          rpcUrls: { default: { http: ["https://api.testnet.abs.xyz"] } },
          blockExplorers: {
            default: { name: "Etherscan", url: "https://sepolia.abscan.org" },
            native: {
              name: "Abstract Explorer",
              url: "https://explorer.testnet.abs.xyz",
            },
          },
          testnet: !0,
          contracts: {
            multicall3: {
              address: "0xF9cda624FBC7e059355ce98a31693d299FACd963",
              blockCreated: 358349,
            },
            universalSignatureVerifier: {
              address: "0xfB688330379976DA81eB64Fe4BF50d7401763B9C",
              blockCreated: 431682,
            },
          },
        }),
        Z = (0, n.x)({
          id: 787,
          name: "Acala",
          network: "acala",
          nativeCurrency: { name: "Acala", symbol: "ACA", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://eth-rpc-acala.aca-api.network"],
              webSocket: ["wss://eth-rpc-acala.aca-api.network"],
            },
          },
          blockExplorers: {
            default: {
              name: "Acala Blockscout",
              url: "https://blockscout.acala.network",
              apiUrl: "https://blockscout.acala.network/api",
            },
          },
          testnet: !1,
        }),
        J = (0, n.x)({
          id: 47,
          name: "Acria IntelliChain",
          nativeCurrency: { decimals: 18, name: "ACRIA", symbol: "ACRIA" },
          rpcUrls: { default: { http: ["https://aic.acria.ai"] } },
          blockExplorers: {
            default: {
              name: "Acria Explorer",
              url: "https://explorer.acria.ai",
            },
          },
          testnet: !1,
        }),
        Y = (0, n.x)({
          id: 1215,
          name: "ADF Chain",
          nativeCurrency: { name: "ADDFILL", symbol: "ADF", decimals: 18 },
          rpcUrls: { default: { http: ["https://mainnet.adftechnology.com"] } },
          blockExplorers: {
            default: {
              name: "ADF Mainnet Explorer",
              url: "https://explorer.adftechnology.com",
            },
          },
          testnet: !1,
        }),
        Q = (0, n.x)({
          id: 168,
          name: "AIOZ Network",
          nativeCurrency: { decimals: 18, name: "AIOZ", symbol: "AIOZ" },
          rpcUrls: { default: { http: ["https://eth-dataseed.aioz.network"] } },
          blockExplorers: {
            default: {
              name: "AIOZ Explorer",
              url: "https://explorer.aioz.network",
            },
          },
          testnet: !1,
        }),
        ee = (0, n.x)({
          id: 41455,
          name: "Aleph Zero",
          nativeCurrency: { name: "Aleph Zero", symbol: "AZERO", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://rpc.alephzero.raas.gelato.cloud"] },
          },
          blockExplorers: {
            default: {
              name: "Aleph Zero EVM Explorer",
              url: "https://evm-explorer.alephzero.org",
              apiUrl: "https://evm-explorer.alephzero.org/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 4603377,
            },
          },
        }),
        et = (0, n.x)({
          id: 2039,
          name: "Aleph Zero Testnet",
          nativeCurrency: { name: "TZERO", symbol: "TZERO", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://rpc.alephzero-testnet.gelato.digital"],
              webSocket: ["wss://ws.alephzero-testnet.gelato.digital"],
            },
          },
          blockExplorers: {
            default: {
              name: "Aleph Zero EVM Testnet explorer",
              url: "https://evm-explorer-testnet.alephzero.org",
              apiUrl: "https://evm-explorer-testnet.alephzero.org/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 2861745,
            },
          },
          testnet: !0,
        }),
        er = (0, n.x)({
          id: 0x9c4400,
          name: "AlienX Mainnet",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.alienxchain.io/http"] } },
          blockExplorers: {
            default: {
              name: "AlienX Explorer",
              url: "https://explorer.alienxchain.io",
            },
          },
          testnet: !1,
        }),
        ea = (0, n.x)({
          id: 0x9c4401,
          name: "ALIENX Hal Testnet",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://hal-rpc.alienxchain.io/http"] },
          },
          blockExplorers: {
            default: {
              name: "AlienX Explorer",
              url: "https://hal-explorer.alienxchain.io",
            },
          },
          testnet: !0,
        }),
        en = {
          gasPriceOracle: {
            address: "0x420000000000000000000000000000000000000F",
          },
          l1Block: { address: "0x4200000000000000000000000000000000000015" },
          l2CrossDomainMessenger: {
            address: "0x4200000000000000000000000000000000000007",
          },
          l2Erc721Bridge: {
            address: "0x4200000000000000000000000000000000000014",
          },
          l2StandardBridge: {
            address: "0x4200000000000000000000000000000000000010",
          },
          l2ToL1MessagePasser: {
            address: "0x4200000000000000000000000000000000000016",
          },
        },
        es = {
          block: (0, c.R)({
            format: (e) => ({
              transactions: e.transactions?.map((e) => {
                if ("string" == typeof e) return e;
                let t = u.uP(e);
                return (
                  "0x7e" === t.typeHex &&
                    ((t.isSystemTx = e.isSystemTx),
                    (t.mint = e.mint ? o.uU(e.mint) : void 0),
                    (t.sourceHash = e.sourceHash),
                    (t.type = "deposit")),
                  t
                );
              }),
              stateRoot: e.stateRoot,
            }),
          }),
          transaction: (0, u.gU)({
            format(e) {
              let t = {};
              return (
                "0x7e" === e.type &&
                  ((t.isSystemTx = e.isSystemTx),
                  (t.mint = e.mint ? (0, o.uU)(e.mint) : void 0),
                  (t.sourceHash = e.sourceHash),
                  (t.type = "deposit")),
                t
              );
            },
          }),
          transactionReceipt: (0, p.WB)({
            format: (e) => ({
              l1GasPrice: e.l1GasPrice ? (0, o.uU)(e.l1GasPrice) : null,
              l1GasUsed: e.l1GasUsed ? (0, o.uU)(e.l1GasUsed) : null,
              l1Fee: e.l1Fee ? (0, o.uU)(e.l1Fee) : null,
              l1FeeScalar: e.l1FeeScalar ? Number(e.l1FeeScalar) : null,
            }),
          }),
        };
      function eo(e, t) {
        return "deposit" === e.type || void 0 !== e.sourceHash
          ? (function (e) {
              !(function (e) {
                let { from: t, to: r } = e;
                if (t && !(0, P.P)(t)) throw new S.M({ address: t });
                if (r && !(0, P.P)(r)) throw new S.M({ address: r });
              })(e);
              let {
                  sourceHash: t,
                  data: r,
                  from: a,
                  gas: n,
                  isSystemTx: s,
                  mint: o,
                  to: i,
                  value: c,
                } = e,
                d = [
                  t,
                  a,
                  i ?? "0x",
                  o ? (0, l.nj)(o) : "0x",
                  c ? (0, l.nj)(c) : "0x",
                  n ? (0, l.nj)(n) : "0x",
                  s ? "0x1" : "0x",
                  r ?? "0x",
                ];
              return (0, y.aP)(["0x7e", (0, x.EQ)(d)]);
            })(e)
          : L(e, t);
      }
      let ei = {
          contracts: en,
          formatters: es,
          serializers: { transaction: eo },
        },
        el = (0, n.x)({
          ...ei,
          id: 0x34fb5e38,
          name: "Ancient8",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.ancient8.gg"] } },
          blockExplorers: {
            default: {
              name: "Ancient8 explorer",
              url: "https://scan.ancient8.gg",
              apiUrl: "https://scan.ancient8.gg/api",
            },
          },
          contracts: {
            ...ei.contracts,
            l2OutputOracle: {
              1: { address: "0xB09DC08428C8b4EFB4ff9C0827386CDF34277996" },
            },
            portal: {
              1: {
                address: "0x639F2AECE398Aa76b07e59eF6abe2cFe32bacb68",
                blockCreated: 0x122fe6b,
              },
            },
            l1StandardBridge: {
              1: {
                address: "0xd5e3eDf5b68135D559D572E26bF863FBC1950033",
                blockCreated: 0x122fe6b,
              },
            },
          },
          sourceId: 1,
        }),
        ec = (0, n.x)({
          ...ei,
          id: 0x1ad1ba8,
          name: "Ancient8 Testnet",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpcv2-testnet.ancient8.gg"] } },
          blockExplorers: {
            default: {
              name: "Ancient8 Celestia Testnet explorer",
              url: "https://scanv2-testnet.ancient8.gg",
              apiUrl: "https://scanv2-testnet.ancient8.gg/api",
            },
          },
          contracts: {
            ...ei.contracts,
            l2OutputOracle: {
              0xaa36a7: {
                address: "0x942fD5017c0F60575930D8574Eaca13BEcD6e1bB",
              },
            },
            portal: {
              0xaa36a7: {
                address: "0xfa1d9E26A6aCD7b22115D27572c1221B9803c960",
                blockCreated: 4972908,
              },
            },
            l1StandardBridge: {
              0xaa36a7: {
                address: "0xF6Bc0146d3c74D48306e79Ae134A260E418C9335",
                blockCreated: 4972908,
              },
            },
          },
          sourceId: 0xaa36a7,
        }),
        ed = (0, n.x)({
          id: 31337,
          name: "Anvil",
          nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
          rpcUrls: {
            default: {
              http: ["http://127.0.0.1:8545"],
              webSocket: ["ws://127.0.0.1:8545"],
            },
          },
        }),
        eu = (0, n.x)({
          id: 33139,
          name: "Ape Chain",
          nativeCurrency: { name: "ApeCoin", symbol: "APE", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://rpc.apechain.com/http"],
              webSocket: ["wss://rpc.apechain.com/ws"],
            },
          },
          blockExplorers: {
            default: {
              name: "Apescan",
              url: "https://apescan.io",
              apiUrl: "https://api.apescan.io/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 20889,
            },
          },
          sourceId: 42161,
        }),
        ep = (0, n.x)({
          id: 3993,
          name: "APEX Testnet",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc-testnet.apexlayer.xyz"] } },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://exp-testnet.apexlayer.xyz",
              apiUrl: "https://exp-testnet.apexlayer.xyz/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xf7642be33a6b18D16a995657adb5a68CD0438aE2",
              blockCreated: 283775,
            },
          },
          testnet: !0,
        }),
        eh = (0, n.x)({
          id: 42161,
          name: "Arbitrum One",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://arb1.arbitrum.io/rpc"] } },
          blockExplorers: {
            default: {
              name: "Arbiscan",
              url: "https://arbiscan.io",
              apiUrl: "https://api.arbiscan.io/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 7654707,
            },
          },
        }),
        em = (0, n.x)({
          id: 421613,
          name: "Arbitrum Goerli",
          nativeCurrency: {
            name: "Arbitrum Goerli Ether",
            symbol: "ETH",
            decimals: 18,
          },
          rpcUrls: {
            default: { http: ["https://goerli-rollup.arbitrum.io/rpc"] },
          },
          blockExplorers: {
            default: { name: "Arbiscan", url: "https://goerli.arbiscan.io" },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 88114,
            },
          },
          testnet: !0,
        }),
        ef = (0, n.x)({
          id: 42170,
          name: "Arbitrum Nova",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://nova.arbitrum.io/rpc"] } },
          blockExplorers: {
            default: {
              name: "Arbiscan",
              url: "https://nova.arbiscan.io",
              apiUrl: "https://api-nova.arbiscan.io/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 1746963,
            },
          },
        }),
        eb = (0, n.x)({
          id: 421614,
          name: "Arbitrum Sepolia",
          nativeCurrency: {
            name: "Arbitrum Sepolia Ether",
            symbol: "ETH",
            decimals: 18,
          },
          rpcUrls: {
            default: { http: ["https://sepolia-rollup.arbitrum.io/rpc"] },
          },
          blockExplorers: {
            default: {
              name: "Arbiscan",
              url: "https://sepolia.arbiscan.io",
              apiUrl: "https://api-sepolia.arbiscan.io/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 81930,
            },
          },
          testnet: !0,
        }),
        ey = (0, n.x)({
          id: 463,
          name: "Areon Network",
          nativeCurrency: { decimals: 18, name: "AREA", symbol: "AREA" },
          rpcUrls: {
            default: {
              http: ["https://mainnet-rpc.areon.network"],
              webSocket: ["wss://mainnet-ws.areon.network"],
            },
          },
          blockExplorers: {
            default: { name: "Areonscan", url: "https://areonscan.com" },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 353286,
            },
          },
          testnet: !1,
        }),
        ex = (0, n.x)({
          id: 462,
          name: "Areon Network Testnet",
          nativeCurrency: { decimals: 18, name: "TAREA", symbol: "TAREA" },
          rpcUrls: {
            default: {
              http: ["https://testnet-rpc.areon.network"],
              webSocket: ["wss://testnet-ws.areon.network"],
            },
          },
          blockExplorers: {
            default: { name: "Areonscan", url: "https://areonscan.com" },
          },
          testnet: !0,
        }),
        ev = (0, n.x)({
          id: 11822,
          name: "Artela Testnet",
          nativeCurrency: { name: "ART", symbol: "ART", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://betanet-rpc1.artela.network"] },
          },
          blockExplorers: {
            default: {
              name: "Artela",
              url: "https://betanet-scan.artela.network",
              apiUrl: "https://betanet-scan.artela.network/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xd07c8635f76e8745Ee7092fbb6e8fbc5FeF09DD7",
              blockCreated: 7001871,
            },
          },
          testnet: !0,
        }),
        eg = (0, n.x)({
          id: 10242,
          name: "Arthera",
          nativeCurrency: { name: "Arthera", symbol: "AA", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.arthera.net"] } },
          blockExplorers: {
            default: {
              name: "Arthera EVM Explorer",
              url: "https://explorer.arthera.net",
              apiUrl: "https://explorer.arthera.net/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 4502791,
            },
          },
        }),
        eE = (0, n.x)({
          id: 10243,
          name: "Arthera Testnet",
          nativeCurrency: { name: "Arthera", symbol: "AA", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc-test.arthera.net"] } },
          blockExplorers: {
            default: {
              name: "Arthera EVM Explorer",
              url: "https://explorer-test.arthera.net",
              apiUrl: "https://explorer-test.arthera.net/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 22051,
            },
          },
        }),
        ek = (0, n.x)({
          id: 42420,
          name: "AssetChain Mainnet",
          nativeCurrency: {
            decimals: 18,
            name: "Real World Asset",
            symbol: "RWA",
          },
          rpcUrls: {
            default: { http: ["https://mainnet-rpc.assetchain.org"] },
          },
          blockExplorers: {
            default: {
              name: "Asset Chain Explorer",
              url: "https://scan.assetchain.org",
              apiUrl: "https://scan.assetchain.org/api",
            },
          },
          testnet: !1,
          contracts: {},
        }),
        eC = (0, n.x)({
          id: 42421,
          name: "AssetChain Testnet",
          nativeCurrency: {
            decimals: 18,
            name: "Real World Asset",
            symbol: "RWA",
          },
          rpcUrls: { default: { http: ["https://enugu-rpc.assetchain.org"] } },
          blockExplorers: {
            default: {
              name: "Asset Chain Testnet Explorer",
              url: "https://scan-testnet.assetchain.org",
              apiUrl: "https://scan-testnet.assetchain.org/api",
            },
          },
          testnet: !0,
          contracts: {
            multicall3: {
              address: "0x989F832D35988cb5e3eB001Fa2Fe789469EC31Ea",
              blockCreated: 17177,
            },
          },
        }),
        ew = (0, n.x)({
          id: 592,
          name: "Astar",
          network: "astar-mainnet",
          nativeCurrency: { name: "Astar", symbol: "ASTR", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://astar.api.onfinality.io/public"] },
          },
          blockExplorers: {
            default: { name: "Astar Subscan", url: "https://astar.subscan.io" },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 761794,
            },
          },
          testnet: !1,
        }),
        eT = (0, n.x)({
          id: 3776,
          name: "Astar zkEVM",
          network: "AstarZkEVM",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc-zkevm.astar.network"] } },
          blockExplorers: {
            default: {
              name: "Astar zkEVM Explorer",
              url: "https://astar-zkevm.explorer.startale.com",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 93528,
            },
          },
          testnet: !1,
        }),
        eS = (0, n.x)({
          id: 6038361,
          name: "Astar zkEVM Testnet zKyoto",
          network: "zKyoto",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.startale.com/zkyoto"] } },
          blockExplorers: {
            default: {
              name: "zKyoto Explorer",
              url: "https://zkyoto.explorer.startale.com",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 196153,
            },
          },
          testnet: !0,
        }),
        eA = (0, n.x)({
          id: 2340,
          name: "Atleta Olympia",
          nativeCurrency: { decimals: 18, name: "Atla", symbol: "ATLA" },
          rpcUrls: {
            default: {
              http: [
                "https://testnet-rpc.atleta.network:9944",
                "https://testnet-rpc.atleta.network",
              ],
              ws: ["wss://testnet-rpc.atleta.network:9944"],
            },
          },
          blockExplorers: {
            default: {
              name: "Atleta Olympia Explorer",
              url: "https://blockscout.atleta.network",
              apiUrl: "https://blockscout.atleta.network/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0x1472ec6392180fb84F345d2455bCC75B26577115",
              blockCreated: 1076473,
            },
          },
          testnet: !0,
        }),
        eU = (0, n.x)({
          id: 0x4e454152,
          name: "Aurora",
          nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
          rpcUrls: { default: { http: ["https://mainnet.aurora.dev"] } },
          blockExplorers: {
            default: {
              name: "Aurorascan",
              url: "https://aurorascan.dev",
              apiUrl: "https://aurorascan.dev/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0x3bfe5a8,
            },
          },
        }),
        eB = (0, n.x)({
          id: 0x4e454153,
          name: "Aurora Testnet",
          nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
          rpcUrls: { default: { http: ["https://testnet.aurora.dev"] } },
          blockExplorers: {
            default: {
              name: "Aurorascan",
              url: "https://testnet.aurorascan.dev",
              apiUrl: "https://testnet.aurorascan.dev/api",
            },
          },
          testnet: !0,
        }),
        eM = (0, n.x)({
          id: 205205,
          name: "Auroria Testnet",
          network: "auroria",
          nativeCurrency: {
            name: "Auroria Stratis",
            symbol: "tSTRAX",
            decimals: 18,
          },
          rpcUrls: {
            default: { http: ["https://auroria.rpc.stratisevm.com"] },
          },
          blockExplorers: {
            default: {
              name: "Auroria Testnet Explorer",
              url: "https://auroria.explorer.stratisevm.com",
            },
          },
          testnet: !0,
        }),
        eP = (0, n.x)({
          id: 43114,
          name: "Avalanche",
          nativeCurrency: { decimals: 18, name: "Avalanche", symbol: "AVAX" },
          rpcUrls: {
            default: { http: ["https://api.avax.network/ext/bc/C/rpc"] },
          },
          blockExplorers: {
            default: {
              name: "SnowTrace",
              url: "https://snowtrace.io",
              apiUrl: "https://api.snowtrace.io",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0xb5b35e,
            },
          },
        }),
        eD = (0, n.x)({
          id: 43113,
          name: "Avalanche Fuji",
          nativeCurrency: {
            decimals: 18,
            name: "Avalanche Fuji",
            symbol: "AVAX",
          },
          rpcUrls: {
            default: { http: ["https://api.avax-test.network/ext/bc/C/rpc"] },
          },
          blockExplorers: {
            default: {
              name: "SnowTrace",
              url: "https://testnet.snowtrace.io",
              apiUrl: "https://api-testnet.snowtrace.io",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 7096959,
            },
          },
          testnet: !0,
        }),
        eF = (0, n.x)({
          id: 8333,
          name: "B3",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://mainnet-rpc.b3.fun/http"] } },
          blockExplorers: {
            default: { name: "Blockscout", url: "https://explorer.b3.fun" },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0,
            },
          },
          sourceId: 8453,
        }),
        eI = (0, n.x)({
          id: 1993,
          name: "B3 Sepolia",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://sepolia.b3.fun/http"] } },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://sepolia.explorer.b3.fun",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0,
            },
          },
          testnet: !0,
          sourceId: 0xa0c71fd,
        }),
        eO = (0, n.x)({
          id: 5165,
          network: "bahamut",
          name: "Bahamut",
          nativeCurrency: { name: "Fasttoken", symbol: "FTN", decimals: 18 },
          rpcUrls: {
            default: {
              http: [
                "https://rpc1.bahamut.io",
                "https://bahamut-rpc.publicnode.com",
                "https://rpc2.bahamut.io",
              ],
              webSocket: [
                "wss://ws1.sahara.bahamutchain.com",
                "wss://bahamut-rpc.publicnode.com",
                "wss://ws2.sahara.bahamutchain.com",
              ],
            },
          },
          blockExplorers: {
            default: {
              name: "Ftnscan",
              url: "https://www.ftnscan.com",
              apiUrl: "https://www.ftnscan.com/api",
            },
          },
        }),
        eR = (0, n.x)({
          ...ei,
          id: 8453,
          name: "Base",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://mainnet.base.org"] } },
          blockExplorers: {
            default: {
              name: "Basescan",
              url: "https://basescan.org",
              apiUrl: "https://api.basescan.org/api",
            },
          },
          contracts: {
            ...ei.contracts,
            disputeGameFactory: {
              1: { address: "0x43edB88C4B80fDD2AdFF2412A7BebF9dF42cB40e" },
            },
            l2OutputOracle: {
              1: { address: "0x56315b90c40730925ec5485cf004d835058518A0" },
            },
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 5022,
            },
            portal: {
              1: {
                address: "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e",
                blockCreated: 0x10ac19f,
              },
            },
            l1StandardBridge: {
              1: {
                address: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35",
                blockCreated: 0x10ac19f,
              },
            },
          },
          sourceId: 1,
        }),
        eL = (0, n.x)({
          id: 0x1cbc67c35a,
          name: "Basecamp Testnet",
          nativeCurrency: { decimals: 18, name: "Camp", symbol: "CAMP" },
          rpcUrls: {
            default: { http: ["https://rpc.basecamp.t.raas.gelato.cloud"] },
          },
          blockExplorers: {
            default: {
              name: "basecamp",
              url: "https://basecamp.cloud.blockscout.com",
            },
          },
          testnet: !0,
        }),
        eN = (0, n.x)({
          ...ei,
          id: 84531,
          name: "Base Goerli",
          nativeCurrency: { name: "Goerli Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://goerli.base.org"] } },
          blockExplorers: {
            default: {
              name: "Basescan",
              url: "https://goerli.basescan.org",
              apiUrl: "https://goerli.basescan.org/api",
            },
          },
          contracts: {
            ...ei.contracts,
            l2OutputOracle: {
              5: { address: "0x2A35891ff30313CcFa6CE88dcf3858bb075A2298" },
            },
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 1376988,
            },
            portal: {
              5: { address: "0xe93c8cD0D409341205A592f8c4Ac1A5fe5585cfA" },
            },
            l1StandardBridge: {
              5: { address: "0xfA6D8Ee5BE770F84FC001D098C4bD604Fe01284a" },
            },
          },
          testnet: !0,
          sourceId: 5,
        }),
        ez = (0, n.x)({
          ...ei,
          id: 84532,
          network: "base-sepolia",
          name: "Base Sepolia",
          nativeCurrency: {
            name: "Sepolia Ether",
            symbol: "ETH",
            decimals: 18,
          },
          rpcUrls: { default: { http: ["https://sepolia.base.org"] } },
          blockExplorers: {
            default: {
              name: "Basescan",
              url: "https://sepolia.basescan.org",
              apiUrl: "https://api-sepolia.basescan.org/api",
            },
          },
          contracts: {
            ...ei.contracts,
            disputeGameFactory: {
              0xaa36a7: {
                address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1",
              },
            },
            l2OutputOracle: {
              0xaa36a7: {
                address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254",
              },
            },
            portal: {
              0xaa36a7: {
                address: "0x49f53e41452c74589e85ca1677426ba426459e85",
                blockCreated: 4446677,
              },
            },
            l1StandardBridge: {
              0xaa36a7: {
                address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120",
                blockCreated: 4446677,
              },
            },
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 1059647,
            },
          },
          testnet: !0,
          sourceId: 0xaa36a7,
        }),
        eK = (0, n.x)({
          id: 4337,
          name: "Beam",
          network: "beam",
          nativeCurrency: { decimals: 18, name: "Beam", symbol: "BEAM" },
          rpcUrls: {
            default: {
              http: ["https://build.onbeam.com/rpc"],
              webSocket: ["wss://build.onbeam.com/ws"],
            },
          },
          blockExplorers: {
            default: {
              name: "Beam Explorer",
              url: "https://subnets.avax.network/beam",
            },
          },
          contracts: {
            multicall3: {
              address: "0x4956f15efdc3dc16645e90cc356eafa65ffc65ec",
              blockCreated: 1,
            },
          },
        }),
        eV = (0, n.x)({
          id: 13337,
          name: "Beam Testnet",
          network: "beam",
          nativeCurrency: { decimals: 18, name: "Beam", symbol: "BEAM" },
          rpcUrls: {
            default: {
              http: ["https://build.onbeam.com/rpc/testnet"],
              webSocket: ["wss://build.onbeam.com/ws/testnet"],
            },
          },
          blockExplorers: {
            default: {
              name: "Beam Explorer",
              url: "https://subnets-test.avax.network/beam",
            },
          },
          contracts: {
            multicall3: {
              address: "0x9bf49b704ee2a095b95c1f2d4eb9010510c41c9e",
              blockCreated: 3,
            },
          },
          testnet: !0,
        }),
        eH = (0, n.x)({
          id: 641230,
          name: "Bear Network Chain Mainnet",
          nativeCurrency: {
            decimals: 18,
            name: "BearNetworkChain",
            symbol: "BRNKC",
          },
          rpcUrls: {
            default: { http: ["https://brnkc-mainnet.bearnetwork.net"] },
          },
          blockExplorers: {
            default: {
              name: "BrnkScan",
              url: "https://brnkscan.bearnetwork.net",
              apiUrl: "https://brnkscan.bearnetwork.net/api",
            },
          },
        }),
        ej = (0, n.x)({
          id: 751230,
          name: "Bear Network Chain Testnet",
          nativeCurrency: { decimals: 18, name: "tBRNKC", symbol: "tBRNKC" },
          rpcUrls: {
            default: { http: ["https://brnkc-test.bearnetwork.net"] },
          },
          blockExplorers: {
            default: {
              name: "BrnkTestScan",
              url: "https://brnktest-scan.bearnetwork.net",
              apiUrl: "https://brnktest-scan.bearnetwork.net/api",
            },
          },
          testnet: !0,
        }),
        e_ = (0, n.x)({
          id: 80094,
          name: "Berachain",
          nativeCurrency: { decimals: 18, name: "BERA Token", symbol: "BERA" },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 0,
            },
            ensRegistry: {
              address: "0x5b22280886a2f5e09a49bea7e320eab0e5320e28",
              blockCreated: 877007,
            },
            ensUniversalResolver: {
              address: "0xddfb18888a9466688235887dec2a10c4f5effee9",
              blockCreated: 877008,
            },
          },
          rpcUrls: { default: { http: ["https://rpc.berachain.com"] } },
          blockExplorers: {
            default: { name: "Berascan", url: "https://berascan.com" },
          },
          ensTlds: [".bera"],
          testnet: !1,
        }),
        eG = (0, n.x)({
          id: 80069,
          name: "Berachain Bepolia",
          nativeCurrency: { decimals: 18, name: "BERA Token", symbol: "BERA" },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 0,
            },
          },
          rpcUrls: { default: { http: ["https://bepolia.rpc.berachain.com"] } },
          blockExplorers: {
            default: { name: "Berascan", url: "https://bepolia.beratrail.io" },
          },
          testnet: !0,
        }),
        eW = (0, n.x)({
          id: 80085,
          name: "Berachain Artio",
          nativeCurrency: { decimals: 18, name: "BERA Token", symbol: "BERA" },
          rpcUrls: { default: { http: ["https://artio.rpc.berachain.com"] } },
          blockExplorers: {
            default: { name: "Berachain", url: "https://artio.beratrail.io" },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 866924,
            },
          },
          testnet: !0,
        }),
        eq = (0, n.x)({
          id: 80084,
          name: "Berachain bArtio",
          nativeCurrency: { decimals: 18, name: "BERA Token", symbol: "BERA" },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 109269,
            },
            ensRegistry: {
              address: "0xB0eef18971290b333450586D33dcA6cE122651D2",
              blockCreated: 7736794,
            },
            ensUniversalResolver: {
              address: "0x41692Ef1EA0C79E6b73077E4A67572D2BDbD7057",
              blockCreated: 7736795,
            },
          },
          ensTlds: [".bera"],
          rpcUrls: { default: { http: ["https://bartio.rpc.berachain.com"] } },
          blockExplorers: {
            default: {
              name: "Berachain bArtio Beratrail",
              url: "https://bartio.beratrail.io",
            },
          },
          testnet: !0,
        }),
        e$ = (0, n.x)({
          id: 11501,
          name: "BEVM Mainnet",
          nativeCurrency: { name: "Bitcoin", symbol: "BTC", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc-mainnet-1.bevm.io"] } },
          blockExplorers: {
            default: {
              name: "Bevmscan",
              url: "https://scan-mainnet.bevm.io",
              apiUrl: "https://scan-mainnet-api.bevm.io/api",
            },
          },
        }),
        eX = (0, n.x)({
          id: 3068,
          name: "Bifrost Mainnet",
          nativeCurrency: { name: "BFC", symbol: "BFC", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://public-01.mainnet.bifrostnetwork.com/rpc"],
            },
          },
          blockExplorers: {
            default: {
              name: "Bifrost Blockscout",
              url: "https://explorer.mainnet.bifrostnetwork.com",
            },
          },
          testnet: !1,
        }),
        eZ = (0, n.x)({
          id: 32520,
          name: "Bitgert Mainnet",
          nativeCurrency: { decimals: 18, name: "Brise", symbol: "Brise" },
          rpcUrls: {
            default: { http: ["https://rpc-bitgert.icecreamswap.com"] },
          },
          blockExplorers: {
            default: { name: "Bitgert Scan", url: "https://brisescan.com" },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 2118034,
            },
          },
          testnet: !1,
        }),
        eJ = (0, n.x)({
          id: 96,
          name: "Bitkub",
          nativeCurrency: { name: "Bitkub", symbol: "KUB", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.bitkubchain.io"] } },
          blockExplorers: {
            default: {
              name: "Bitkub Chain Mainnet Explorer",
              url: "https://www.bkcscan.com",
              apiUrl: "https://www.bkcscan.com/api",
            },
          },
        }),
        eY = (0, n.x)({
          id: 25925,
          name: "Bitkub Testnet",
          network: "Bitkub Testnet",
          nativeCurrency: { name: "Bitkub Test", symbol: "tKUB", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://rpc-testnet.bitkubchain.io"] },
          },
          blockExplorers: {
            default: {
              name: "Bitkub Chain Testnet Explorer",
              url: "https://testnet.bkcscan.com",
              apiUrl: "https://testnet.bkcscan.com/api",
            },
          },
          testnet: !0,
        }),
        eQ = (0, n.x)({
          id: 200901,
          name: "Bitlayer Mainnet",
          nativeCurrency: { name: "BTC", symbol: "BTC", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://rpc.bitlayer.org"],
              webSocket: ["wss://ws.bitlayer.org"],
            },
          },
          blockExplorers: {
            default: {
              name: "bitlayer mainnet scan",
              url: "https://www.btrscan.com",
            },
          },
          contracts: {
            multicall3: {
              address: "0x5B256fE9e993902eCe49D138a5b1162cBb529474",
              blockCreated: 2421963,
            },
          },
        }),
        e0 = (0, n.x)({
          id: 200810,
          name: "Bitlayer Testnet",
          nativeCurrency: { name: "BTC", symbol: "BTC", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://testnet-rpc.bitlayer.org"],
              webSocket: ["wss://testnet-ws.bitlayer.org"],
            },
          },
          blockExplorers: {
            default: {
              name: "bitlayer testnet scan",
              url: "https://testnet.btrscan.com",
            },
          },
          contracts: {
            multicall3: {
              address: "0x5B256fE9e993902eCe49D138a5b1162cBb529474",
              blockCreated: 4135671,
            },
          },
          testnet: !0,
        }),
        e1 = (0, n.x)({
          id: 7171,
          name: "Bitrock Mainnet",
          nativeCurrency: { name: "BROCK", symbol: "BROCK", decimals: 18 },
          rpcUrls: { default: { http: ["https://brockrpc.io"] } },
          blockExplorers: {
            default: {
              name: "Bitrock Explorer",
              url: "https://explorer.bit-rock.io",
            },
          },
          testnet: !1,
        }),
        e2 = (0, n.x)({
          id: 199,
          name: "BitTorrent",
          network: "bittorrent-chain-mainnet",
          nativeCurrency: { name: "BitTorrent", symbol: "BTT", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.bittorrentchain.io"] } },
          blockExplorers: {
            default: {
              name: "Bttcscan",
              url: "https://bttcscan.com",
              apiUrl: "https://api.bttcscan.com/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 0x1da3898,
            },
          },
        }),
        e3 = (0, n.x)({
          id: 1028,
          name: "BitTorrent Chain Testnet",
          network: "bittorrent-chain-testnet",
          nativeCurrency: { name: "BitTorrent", symbol: "BTT", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://testrpc.bittorrentchain.io"] },
          },
          blockExplorers: {
            default: {
              name: "Bttcscan",
              url: "https://testnet.bttcscan.com",
              apiUrl: "https://testnet.bttcscan.com/api",
            },
          },
          testnet: !0,
        }),
        e7 = (0, n.x)({
          id: 53456,
          name: "BirdLayer",
          nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
          rpcUrls: {
            default: {
              http: ["https://rpc.birdlayer.xyz", "https://rpc1.birdlayer.xyz"],
              webSocket: ["wss://rpc.birdlayer.xyz/ws"],
            },
          },
          blockExplorers: {
            default: {
              name: "BirdLayer Explorer",
              url: "https://scan.birdlayer.xyz",
            },
          },
        }),
        e6 = (0, n.x)({
          ...ei,
          id: 81457,
          name: "Blast",
          nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
          rpcUrls: { default: { http: ["https://rpc.blast.io"] } },
          blockExplorers: {
            default: {
              name: "Blastscan",
              url: "https://blastscan.io",
              apiUrl: "https://api.blastscan.io/api",
            },
          },
          contracts: {
            ...ei.contracts,
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 212929,
            },
          },
          sourceId: 1,
        }),
        e8 = (0, n.x)({
          id: 0xa0c71fd,
          name: "Blast Sepolia",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://sepolia.blast.io"] } },
          blockExplorers: {
            default: {
              name: "Blastscan",
              url: "https://sepolia.blastscan.io",
              apiUrl: "https://api-sepolia.blastscan.io/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 756690,
            },
          },
          testnet: !0,
          sourceId: 0xaa36a7,
        }),
        e5 = (0, n.x)({
          ...ei,
          id: 60808,
          name: "BOB",
          nativeCurrency: { decimals: 18, name: "ETH", symbol: "ETH" },
          rpcUrls: {
            default: {
              http: ["https://rpc.gobob.xyz"],
              webSocket: ["wss://rpc.gobob.xyz"],
            },
          },
          blockExplorers: {
            default: {
              name: "BOB Explorer",
              url: "https://explorer.gobob.xyz",
            },
          },
          contracts: {
            ...ei.contracts,
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 23131,
            },
            l2OutputOracle: {
              1: {
                address: "0xdDa53E23f8a32640b04D7256e651C1db98dB11C1",
                blockCreated: 4462615,
              },
            },
            portal: {
              1: {
                address: "0x8AdeE124447435fE03e3CD24dF3f4cAE32E65a3E",
                blockCreated: 4462615,
              },
            },
          },
          sourceId: 1,
        }),
        e9 = (0, n.x)({
          id: 288,
          name: "Boba Network",
          nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
          rpcUrls: { default: { http: ["https://mainnet.boba.network"] } },
          blockExplorers: {
            default: { name: "BOBAScan", url: "https://bobascan.com" },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 446859,
            },
          },
        }),
        e4 = (0, n.x)({
          id: 28882,
          name: "Boba Sepolia",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://sepolia.boba.network"] } },
          blockExplorers: {
            default: { name: "BOBAScan", url: "https://testnet.bobascan.com" },
          },
          testnet: !0,
        }),
        te = (0, n.x)({
          ...ei,
          id: 808813,
          name: "BOB Sepolia",
          nativeCurrency: { decimals: 18, name: "ETH", symbol: "ETH" },
          rpcUrls: {
            default: {
              http: ["https://bob-sepolia.rpc.gobob.xyz"],
              webSocket: ["wss://bob-sepolia.rpc.gobob.xyz"],
            },
          },
          blockExplorers: {
            default: {
              name: "BOB Sepolia Explorer",
              url: "https://bob-sepolia.explorer.gobob.xyz",
            },
          },
          contracts: {
            ...ei.contracts,
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 35677,
            },
            l2OutputOracle: {
              0xaa36a7: {
                address: "0x14D0069452b4AE2b250B395b8adAb771E4267d2f",
                blockCreated: 4462615,
              },
            },
            portal: {
              0xaa36a7: {
                address: "0x867B1Aa872b9C8cB5E9F7755feDC45BB24Ad0ae4",
                blockCreated: 4462615,
              },
            },
          },
          testnet: !0,
          sourceId: 0xaa36a7,
        }),
        tt = (0, n.x)({
          id: 11100,
          name: "Bool Beta Mainnet",
          nativeCurrency: { decimals: 18, name: "BOL", symbol: "BOL" },
          rpcUrls: {
            default: { http: ["https://beta-rpc-node-http.bool.network"] },
          },
          blockExplorers: {
            default: {
              name: "BoolScan",
              url: "https://beta-mainnet.boolscan.com/",
            },
          },
          testnet: !1,
        }),
        tr = (0, n.x)({
          id: 3636,
          name: "Botanix Testnet",
          nativeCurrency: { name: "Botanix", symbol: "BTC", decimals: 18 },
          rpcUrls: { default: { http: ["https://node.botanixlabs.dev"] } },
          blockExplorers: {
            default: {
              name: "Botanix Testnet Explorer",
              url: "https://testnet.botanixscan.io",
            },
          },
          testnet: !0,
        }),
        ta = (0, n.x)({
          id: 6001,
          name: "BounceBit Mainnet",
          nativeCurrency: { name: "BounceBit", symbol: "BB", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://fullnode-mainnet.bouncebitapi.com"] },
          },
          blockExplorers: {
            default: { name: "BB Scan", url: "https://bbscan.io" },
          },
          testnet: !1,
        }),
        tn = (0, n.x)({
          id: 6e3,
          name: "BounceBit Testnet",
          nativeCurrency: { name: "BounceBit", symbol: "BB", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://fullnode-testnet.bouncebitapi.com"] },
          },
          blockExplorers: {
            default: { name: "BB Scan", url: "https://testnet.bbscan.io" },
          },
          testnet: !0,
        }),
        ts = (0, n.x)({
          id: 1039,
          name: "Bronos",
          nativeCurrency: { decimals: 18, name: "BRO", symbol: "BRO" },
          rpcUrls: { default: { http: ["https://evm.bronos.org"] } },
          blockExplorers: {
            default: { name: "BronoScan", url: "https://broscan.bronos.org" },
          },
        }),
        to = (0, n.x)({
          id: 1038,
          name: "Bronos Testnet",
          nativeCurrency: { decimals: 18, name: "Bronos Coin", symbol: "tBRO" },
          rpcUrls: { default: { http: ["https://evm-testnet.bronos.org"] } },
          blockExplorers: {
            default: { name: "BronoScan", url: "https://tbroscan.bronos.org" },
          },
          testnet: !0,
        });
      var ti = r(53453);
      let tl = (0, n.x)({
        id: 1017,
        name: "BNB Greenfield Chain",
        nativeCurrency: { decimals: 18, name: "BNB", symbol: "BNB" },
        rpcUrls: {
          default: { http: ["https://greenfield-chain.bnbchain.org"] },
        },
        blockExplorers: {
          default: {
            name: "BNB Greenfield Mainnet Scan",
            url: "https://greenfieldscan.com",
          },
        },
        testnet: !1,
      });
      var tc = r(9736);
      let td = (0, n.x)({
          id: 223,
          name: "B2",
          nativeCurrency: { name: "Bitcoin", symbol: "BTC", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.bsquared.network"] } },
          blockExplorers: {
            default: {
              name: "blockscout",
              url: "https://explorer.bsquared.network",
            },
          },
        }),
        tu = (0, n.x)({
          id: 1123,
          name: "B2 Testnet",
          nativeCurrency: { name: "Bitcoin", symbol: "BTC", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://testnet-rpc.bsquared.network"] },
          },
          blockExplorers: {
            default: {
              name: "blockscout",
              url: "https://testnet-explorer.bsquared.network",
            },
          },
          testnet: !0,
        }),
        tp = (0, n.x)({
          id: 200901,
          name: "Bitlayer",
          nativeCurrency: { name: "Bitcoin", symbol: "BTC", decimals: 18 },
          rpcUrls: {
            default: {
              http: [
                "https://rpc.bitlayer.org",
                "https://rpc.bitlayer-rpc.com",
              ],
              webSocket: ["wss://ws.bitlayer.org", "wss://ws.bitlayer-rpc.com"],
            },
          },
          blockExplorers: {
            default: {
              name: "Bitlayer(BTR) Scan",
              url: "https://www.btrscan.com",
            },
          },
        }),
        th = (0, n.x)({
          id: 200810,
          name: "Bitlayer Testnet",
          nativeCurrency: { name: "Bitcoin", symbol: "BTC", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://testnet-rpc.bitlayer.org"],
              webSocket: [
                "wss://testnet-ws.bitlayer.org",
                "wss://testnet-ws.bitlayer-rpc.com",
              ],
            },
          },
          blockExplorers: {
            default: {
              name: "Bitlayer(BTR) Scan",
              url: "https://testnet.btrscan.com",
            },
          },
          testnet: !0,
        }),
        tm = (0, n.x)({
          id: 4999,
          name: "BlackFort Exchange Network",
          nativeCurrency: {
            name: "BlackFort Token",
            symbol: "BXN",
            decimals: 18,
          },
          rpcUrls: {
            default: { http: ["https://mainnet.blackfort.network/rpc"] },
          },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://explorer.blackfort.network",
              apiUrl: "https://explorer.blackfort.network/api",
            },
          },
        }),
        tf = (0, n.x)({
          id: 4777,
          name: "BlackFort Exchange Network Testnet",
          nativeCurrency: {
            name: "BlackFort Testnet Token",
            symbol: "TBXN",
            decimals: 18,
          },
          rpcUrls: {
            default: { http: ["https://testnet.blackfort.network/rpc"] },
          },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://testnet-explorer.blackfort.network",
              apiUrl: "https://testnet-explorer.blackfort.network/api",
            },
          },
          testnet: !0,
        }),
        tb = (0, n.x)({
          id: 13370,
          name: "Cannon",
          nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
          rpcUrls: { default: { http: ["http://127.0.0.1:8545"] } },
        }),
        ty = (0, n.x)({
          id: 7700,
          name: "Canto",
          nativeCurrency: { decimals: 18, name: "Canto", symbol: "CANTO" },
          rpcUrls: { default: { http: ["https://canto.gravitychain.io"] } },
          blockExplorers: {
            default: {
              name: "Tuber.Build (Blockscout)",
              url: "https://tuber.build",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 2905789,
            },
          },
        });
      async function tx(e, t) {
        return BigInt(await e.request({ method: "eth_gasPrice", params: [t] }));
      }
      async function tv(e, t) {
        return BigInt(
          await e.request({ method: "eth_maxPriorityFeePerGas", params: [t] })
        );
      }
      function tg(e) {
        return (
          0 === e ||
          0n === e ||
          null == e ||
          "0" === e ||
          "" === e ||
          ("string" == typeof e &&
            ("0x" === (0, w.B)(e).toLowerCase() ||
              "0x00" === (0, w.B)(e).toLowerCase()))
        );
      }
      function tE(e) {
        return (
          "cip64" === e.type ||
          (void 0 !== e.maxFeePerGas &&
            void 0 !== e.maxPriorityFeePerGas &&
            !tg(e.feeCurrency))
        );
      }
      let tk = {
          block: (0, c.R)({
            format: (e) => ({
              transactions: e.transactions?.map((e) =>
                "string" == typeof e
                  ? e
                  : {
                      ...u.uP(e),
                      ...(e.gatewayFee
                        ? {
                            gatewayFee: o.uU(e.gatewayFee),
                            gatewayFeeRecipient: e.gatewayFeeRecipient,
                          }
                        : {}),
                      feeCurrency: e.feeCurrency,
                    }
              ),
              ...(e.randomness ? { randomness: e.randomness } : {}),
            }),
          }),
          transaction: (0, u.gU)({
            format(e) {
              if ("0x7e" === e.type)
                return {
                  isSystemTx: e.isSystemTx,
                  mint: e.mint ? (0, o.uU)(e.mint) : void 0,
                  sourceHash: e.sourceHash,
                  type: "deposit",
                };
              let t = { feeCurrency: e.feeCurrency };
              return (
                "0x7b" === e.type
                  ? (t.type = "cip64")
                  : ("0x7c" === e.type && (t.type = "cip42"),
                    (t.gatewayFee = e.gatewayFee
                      ? (0, o.uU)(e.gatewayFee)
                      : null),
                    (t.gatewayFeeRecipient = e.gatewayFeeRecipient)),
                t
              );
            },
          }),
          transactionRequest: (0, h.bm)({
            format(e) {
              let t = {};
              return (
                e.feeCurrency && (t.feeCurrency = e.feeCurrency),
                tE(e) && (t.type = "0x7b"),
                t
              );
            },
          }),
        },
        tC = m.Ao,
        tw = {
          contracts: en,
          formatters: tk,
          serializers: {
            transaction: function (e, t) {
              return tE(e)
                ? (function (e, t) {
                    !(function (e) {
                      let {
                        chainId: t,
                        maxPriorityFeePerGas: r,
                        gasPrice: a,
                        maxFeePerGas: n,
                        to: s,
                        feeCurrency: o,
                      } = e;
                      if (t <= 0) throw new B.qD({ chainId: t });
                      if (s && !(0, P.P)(s)) throw new S.M({ address: s });
                      if (a)
                        throw new A.C(
                          "`gasPrice` is not a valid CIP-64 Transaction attribute."
                        );
                      if (!tg(n) && n > tC) throw new M.BG({ maxFeePerGas: n });
                      if (!tg(r) && !tg(n) && r > n)
                        throw new M.lN({
                          maxFeePerGas: n,
                          maxPriorityFeePerGas: r,
                        });
                      if (!tg(o) && !(0, P.P)(o))
                        throw new A.C(
                          "`feeCurrency` MUST be a token address for CIP-64 transactions."
                        );
                      if (tg(o))
                        throw new A.C(
                          "`feeCurrency` must be provided for CIP-64 transactions."
                        );
                    })(e);
                    let {
                        chainId: r,
                        gas: a,
                        nonce: n,
                        to: s,
                        value: o,
                        maxFeePerGas: i,
                        maxPriorityFeePerGas: c,
                        accessList: d,
                        feeCurrency: u,
                        data: p,
                      } = e,
                      h = [
                        (0, l.nj)(r),
                        n ? (0, l.nj)(n) : "0x",
                        c ? (0, l.nj)(c) : "0x",
                        i ? (0, l.nj)(i) : "0x",
                        a ? (0, l.nj)(a) : "0x",
                        s ?? "0x",
                        o ? (0, l.nj)(o) : "0x",
                        p ?? "0x",
                        R(d),
                        u,
                        ...N(e, t),
                      ];
                    return (0, y.aP)(["0x7b", (0, x.EQ)(h)]);
                  })(e, t)
                : eo(e, t);
            },
          },
          fees: {
            estimateFeesPerGas: async (e) => {
              if (!e.request?.feeCurrency) return null;
              let [t, r] = await Promise.all([
                tx(e.client, e.request.feeCurrency),
                tv(e.client, e.request.feeCurrency),
              ]);
              return {
                maxFeePerGas: e.multiply(t - r) + r,
                maxPriorityFeePerGas: r,
              };
            },
          },
        },
        tT = (0, n.x)({
          ...tw,
          id: 42220,
          name: "Celo",
          nativeCurrency: { decimals: 18, name: "CELO", symbol: "CELO" },
          rpcUrls: { default: { http: ["https://forno.celo.org"] } },
          blockExplorers: {
            default: {
              name: "Celo Explorer",
              url: "https://celoscan.io",
              apiUrl: "https://api.celoscan.io/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 0xc81517,
            },
          },
          testnet: !1,
        }),
        tS = (0, n.x)({
          ...tw,
          id: 44787,
          name: "Alfajores",
          nativeCurrency: { decimals: 18, name: "CELO", symbol: "A-CELO" },
          rpcUrls: {
            default: { http: ["https://alfajores-forno.celo-testnet.org"] },
          },
          blockExplorers: {
            default: {
              name: "Celo Alfajores Explorer",
              url: "https://celo-alfajores.blockscout.com",
              apiUrl: "https://celo-alfajores.blockscout.com/api",
            },
          },
          contracts: {
            ...tw.contracts,
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 0xde4e29,
            },
            portal: {
              17e3: {
                address: "0x82527353927d8D069b3B452904c942dA149BA381",
                blockCreated: 2411324,
              },
            },
            disputeGameFactory: {
              17e3: {
                address: "0xE28AAdcd9883746c0e5068F58f9ea06027b214cb",
                blockCreated: 2411324,
              },
            },
            l2OutputOracle: {
              17e3: {
                address: "0x4a2635e9e4f6e45817b1D402ac4904c1d1752438",
                blockCreated: 2411324,
              },
            },
            l1StandardBridge: {
              17e3: {
                address: "0xD1B0E0581973c9eB7f886967A606b9441A897037",
                blockCreated: 2411324,
              },
            },
          },
          testnet: !0,
        }),
        tA = (0, n.x)({
          id: 5858,
          name: "Chang Chain Foundation Mainnet",
          nativeCurrency: { decimals: 18, name: "CTH", symbol: "CTH" },
          rpcUrls: { default: { http: ["https://rpc.cthscan.com"] } },
          blockExplorers: {
            default: {
              name: "Chang Chain explorer",
              url: "https://cthscan.com",
            },
          },
        }),
        tU = (0, n.x)({
          id: 88888,
          name: "Chiliz Chain",
          network: "chiliz-chain",
          nativeCurrency: { decimals: 18, name: "CHZ", symbol: "CHZ" },
          rpcUrls: { default: { http: ["https://chiliz-rpc.publicnode.com"] } },
          blockExplorers: {
            default: {
              name: "Chiliz Explorer",
              url: "https://scan.chiliz.com",
              apiUrl: "https://scan.chiliz.com/api",
            },
          },
        }),
        tB = (0, n.x)({
          id: 2882,
          name: "Chips Network",
          network: "CHIPS",
          nativeCurrency: { decimals: 18, name: "IOTA", symbol: "IOTA" },
          rpcUrls: {
            default: {
              http: [
                "https://node.chips.ooo/wasp/api/v1/chains/iota1pp3d3mnap3ufmgqnjsnw344sqmf5svjh26y2khnmc89sv6788y3r207a8fn/evm",
              ],
            },
          },
        }),
        tM = (0, n.x)({
          id: 5115,
          name: "Citrea Testnet",
          nativeCurrency: { name: "cBTC", symbol: "cBTC", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.testnet.citrea.xyz"] } },
          blockExplorers: {
            default: {
              name: "Citrea Explorer",
              url: "https://explorer.testnet.citrea.xyz",
              apiUrl: "https://explorer.testnet.citrea.xyz/api",
            },
          },
          testnet: !0,
        }),
        tP = (0, n.x)({
          id: 61,
          name: "Ethereum Classic",
          nativeCurrency: { decimals: 18, name: "ETC", symbol: "ETC" },
          rpcUrls: { default: { http: ["https://etc.rivet.link"] } },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://blockscout.com/etc/mainnet",
            },
          },
        }),
        tD = (0, n.x)({
          id: 112,
          name: "Coinbit Mainnet",
          nativeCurrency: { name: "GIDR", symbol: "GIDR", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://coinbit-rpc-mainnet.chain.sbcrypto.app"],
            },
          },
          blockExplorers: {
            default: {
              name: "Coinbit Explorer",
              url: "https://coinbit-explorer.chain.sbcrypto.app",
            },
          },
          testnet: !1,
        }),
        tF = (0, n.x)({
          id: 52,
          name: "CoinEx Mainnet",
          nativeCurrency: { name: "cet", symbol: "cet", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.coinex.net"] } },
          blockExplorers: {
            default: { name: "CoinEx Explorer", url: "https://www.coinex.net" },
          },
          testnet: !1,
        }),
        tI = (0, n.x)({
          id: 1030,
          name: "Conflux eSpace",
          nativeCurrency: { name: "Conflux", symbol: "CFX", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://evm.confluxrpc.com"],
              webSocket: ["wss://evm.confluxrpc.com/ws"],
            },
          },
          blockExplorers: {
            default: {
              name: "ConfluxScan",
              url: "https://evm.confluxscan.org",
            },
          },
          contracts: {
            multicall3: {
              address: "0xEFf0078910f638cd81996cc117bccD3eDf2B072F",
              blockCreated: 0x416cc37,
            },
          },
        }),
        tO = (0, n.x)({
          id: 71,
          name: "Conflux eSpace Testnet",
          network: "cfx-espace-testnet",
          testnet: !0,
          nativeCurrency: { name: "Conflux", symbol: "CFX", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://evmtestnet.confluxrpc.com"],
              webSocket: ["wss://evmtestnet.confluxrpc.com/ws"],
            },
          },
          blockExplorers: {
            default: {
              name: "ConfluxScan",
              url: "https://evmtestnet.confluxscan.org",
            },
          },
          contracts: {
            multicall3: {
              address: "0xEFf0078910f638cd81996cc117bccD3eDf2B072F",
              blockCreated: 0x700e4aa,
            },
          },
        }),
        tR = (0, n.x)({
          id: 1116,
          name: "Core Dao",
          nativeCurrency: { decimals: 18, name: "Core", symbol: "CORE" },
          rpcUrls: { default: { http: ["https://rpc.coredao.org"] } },
          blockExplorers: {
            default: { name: "CoreDao", url: "https://scan.coredao.org" },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 0xb5b35e,
            },
          },
          testnet: !1,
        }),
        tL = (0, n.x)({
          id: 1115,
          name: "Core Testnet",
          nativeCurrency: { decimals: 18, name: "tCore", symbol: "TCORE" },
          rpcUrls: { default: { http: ["https://rpc.test.btcs.network"] } },
          blockExplorers: {
            default: {
              name: "Core Testnet",
              url: "https://scan.test.btcs.network",
              apiUrl: "https://api.test.btcs.network/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xCcddF20A1932537123C2E48Bd8e00b108B8f7569",
              blockCreated: 0x1bfda6d,
            },
          },
          testnet: !0,
        }),
        tN = (0, n.x)({
          id: 1114,
          name: "Core Testnet2",
          nativeCurrency: { decimals: 18, name: "tCore2", symbol: "TCORE2" },
          rpcUrls: { default: { http: ["https://rpc.test2.btcs.network"] } },
          blockExplorers: {
            default: {
              name: "Core Testnet2",
              url: "https://scan.test2.btcs.network",
              apiUrl: "https://api.test2.btcs.network/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0x3CB285ff3Cd5C7C7e570b1E7DE3De17A0f985e56",
              blockCreated: 3838600,
            },
          },
          testnet: !0,
        }),
        tz = (0, n.x)({
          id: 21e6,
          name: "Corn",
          nativeCurrency: { decimals: 18, name: "Bitcorn", symbol: "BTCN" },
          rpcUrls: { default: { http: ["https://21000000.rpc.thirdweb.com"] } },
          blockExplorers: {
            default: {
              name: "Corn Explorer",
              url: "https://cornscan.io",
              apiUrl:
                "https://api.routescan.io/v2/network/mainnet/evm/21000000/etherscan/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 3228,
            },
          },
          sourceId: 1,
        }),
        tK = (0, n.x)({
          id: 0x1406f41,
          name: "Corn Testnet",
          nativeCurrency: { decimals: 18, name: "Bitcorn", symbol: "BTCN" },
          rpcUrls: { default: { http: ["https://21000001.rpc.thirdweb.com"] } },
          blockExplorers: {
            default: {
              name: "Corn Testnet Explorer",
              url: "https://testnet.cornscan.io",
              apiUrl:
                "https://api.routescan.io/v2/network/testnet/evm/21000001/etherscan/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 4886,
            },
          },
          testnet: !0,
          sourceId: 0xaa36a7,
        }),
        tV = (0, n.x)({
          id: 44,
          name: "Crab Network",
          nativeCurrency: {
            decimals: 18,
            name: "Crab Network Native Token",
            symbol: "CRAB",
          },
          rpcUrls: {
            default: {
              http: ["https://crab-rpc.darwinia.network"],
              webSocket: ["wss://crab-rpc.darwinia.network"],
            },
          },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://crab-scan.darwinia.network",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 3032593,
            },
          },
        }),
        tH = (0, n.x)({
          id: 66665,
          name: "Creator",
          nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
          rpcUrls: { default: { http: ["https://rpc.creatorchain.io"] } },
          blockExplorers: {
            default: {
              name: "Explorer",
              url: "https://explorer.creatorchain.io",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
            },
          },
          testnet: !0,
        }),
        tj = (0, n.x)({
          id: 102030,
          name: "Creditcoin3 Mainnet",
          nativeCurrency: {
            name: "Creditcoin3 Mainnet",
            symbol: "CTC",
            decimals: 18,
          },
          rpcUrls: {
            default: {
              http: ["https://mainnet3.creditcoin.network"],
              webSocket: ["wss://mainnet3.creditcoin.network"],
            },
          },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://creditcoin.blockscout.com",
              apiUrl: "https://creditcoin.blockscout.com/api",
            },
          },
          testnet: !1,
        }),
        t_ = (0, n.x)({
          id: 102031,
          name: "Creditcoin3 Testnet",
          nativeCurrency: {
            name: "Creditcoin3 Testnet",
            symbol: "TCTC",
            decimals: 18,
          },
          rpcUrls: {
            default: {
              http: ["https://rpc.cc3-testnet.creditcoin.network"],
              webSocket: ["wss://rpc.cc3-testnet.creditcoin.network"],
            },
          },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://creditcoin-testnet.blockscout.com",
              apiUrl: "https://creditcoin-testnet.blockscout.com/api",
            },
          },
          testnet: !0,
        }),
        tG = (0, n.x)({
          id: 25,
          name: "Cronos Mainnet",
          nativeCurrency: { decimals: 18, name: "Cronos", symbol: "CRO" },
          rpcUrls: { default: { http: ["https://evm.cronos.org"] } },
          blockExplorers: {
            default: {
              name: "Cronos Explorer",
              url: "https://explorer.cronos.org",
              apiUrl: "https://explorer-api.cronos.org/mainnet/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 1963112,
            },
          },
        }),
        tW = (0, n.x)({
          id: 338,
          name: "Cronos Testnet",
          nativeCurrency: { decimals: 18, name: "CRO", symbol: "tCRO" },
          rpcUrls: { default: { http: ["https://evm-t3.cronos.org"] } },
          blockExplorers: {
            default: {
              name: "Cronos Explorer",
              url: "https://cronos.org/explorer/testnet3",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 0x9b8193,
            },
          },
          testnet: !0,
        }),
        tq = (0, n.x)({
          id: 388,
          name: "Cronos zkEVM Mainnet",
          nativeCurrency: {
            decimals: 18,
            name: "Cronos zkEVM CRO",
            symbol: "zkCRO",
          },
          rpcUrls: { default: { http: ["https://mainnet.zkevm.cronos.org"] } },
          blockExplorers: {
            default: {
              name: "Cronos zkEVM (Mainnet) Chain Explorer",
              url: "https://explorer.zkevm.cronos.org",
            },
          },
          contracts: {
            multicall3: {
              address: "0x06f4487d7c4a5983d2660db965cc6d2565e4cfaa",
              blockCreated: 72,
            },
          },
        }),
        t$ = (0, n.x)({
          id: 282,
          name: "Cronos zkEVM Testnet",
          nativeCurrency: {
            decimals: 18,
            name: "Cronos zkEVM Test Coin",
            symbol: "zkTCRO",
          },
          rpcUrls: { default: { http: ["https://testnet.zkevm.cronos.org"] } },
          blockExplorers: {
            default: {
              name: "Cronos zkEVM Testnet Explorer",
              url: "https://explorer.zkevm.cronos.org/testnet",
            },
          },
          testnet: !0,
        }),
        tX = (0, n.x)({
          id: 3737,
          name: "Crossbell",
          nativeCurrency: { decimals: 18, name: "CSB", symbol: "CSB" },
          rpcUrls: { default: { http: ["https://rpc.crossbell.io"] } },
          blockExplorers: {
            default: {
              name: "CrossScan",
              url: "https://scan.crossbell.io",
              apiUrl: "https://scan.crossbell.io/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 0x247968f,
            },
          },
        }),
        tZ = (0, n.x)({
          id: 33111,
          name: "Curtis",
          nativeCurrency: { name: "ApeCoin", symbol: "APE", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.curtis.apechain.com"] } },
          blockExplorers: {
            default: {
              name: "Curtis Explorer",
              url: "https://explorer.curtis.apechain.com",
            },
          },
          testnet: !0,
        }),
        tJ = (0, n.x)({
          id: 7560,
          name: "Cyber",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://cyber.alt.technology"] } },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://cyberscan.co",
              apiUrl: "https://cyberscan.co/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 0,
            },
          },
        }),
        tY = (0, n.x)({
          id: 0x6a63bb8,
          name: "Cyber Testnet",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://cyber-testnet.alt.technology"] },
          },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://testnet.cyberscan.co",
              apiUrl: "https://testnet.cyberscan.co/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xffc391F0018269d4758AEA1a144772E8FB99545E",
              blockCreated: 304545,
            },
          },
          testnet: !0,
        }),
        tQ = (0, n.x)({
          id: 824,
          name: "Daily Network Mainnet",
          nativeCurrency: { decimals: 18, name: "Daily", symbol: "DLY" },
          rpcUrls: {
            default: { http: ["https://rpc.mainnet.dailycrypto.net"] },
          },
          blockExplorers: {
            default: {
              name: "Daily Mainnet Explorer",
              url: "https://explorer.mainnet.dailycrypto.net",
            },
          },
          testnet: !1,
        }),
        t0 = (0, n.x)({
          id: 825,
          name: "Daily Network Testnet",
          nativeCurrency: { decimals: 18, name: "Daily", symbol: "DLY" },
          rpcUrls: {
            default: { http: ["https://rpc.testnet.dailycrypto.net"] },
          },
          blockExplorers: {
            default: {
              name: "Daily Testnet Explorer",
              url: "https://explorer.testnet.dailycrypto.net",
            },
          },
          testnet: !0,
        }),
        t1 = (0, n.x)({
          id: 46,
          name: "Darwinia Network",
          nativeCurrency: { decimals: 18, name: "RING", symbol: "RING" },
          rpcUrls: {
            default: {
              http: ["https://rpc.darwinia.network"],
              webSocket: ["wss://rpc.darwinia.network"],
            },
          },
          blockExplorers: {
            default: {
              name: "Explorer",
              url: "https://explorer.darwinia.network",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 69420,
            },
          },
        }),
        t2 = (0, n.x)({
          id: 0x134d8db,
          name: "DBK chain",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.mainnet.dbkchain.io"] } },
          blockExplorers: {
            default: {
              name: "DBK Chain Explorer",
              url: "https://scan.dbkchain.io",
            },
          },
          testnet: !1,
        }),
        t3 = (0, n.x)({
          ...ei,
          id: 2716446429837e3,
          name: "Dchain",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://dchain-2716446429837000-1.jsonrpc.sagarpc.io"],
            },
          },
          blockExplorers: {
            default: {
              name: "Dchain Explorer",
              url: "https://dchain-2716446429837000-1.sagaexplorer.io",
              apiUrl:
                "https://api-dchain-2716446429837000-1.sagaexplorer.io/api",
            },
          },
          contracts: { ...ei.contracts },
        }),
        t7 = (0, n.x)({
          ...ei,
          id: 2713017997578e3,
          name: "Dchain Testnet",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: {
              http: [
                "https://dchaintestnet-2713017997578000-1.jsonrpc.testnet.sagarpc.io",
              ],
            },
          },
          blockExplorers: {
            default: {
              name: "Dchain Explorer",
              url: "https://dchaintestnet-2713017997578000-1.testnet.sagaexplorer.io",
              apiUrl:
                "https://api-dchaintestnet-2713017997578000-1.testnet.sagaexplorer.io/api",
            },
          },
          contracts: { ...ei.contracts },
        }),
        t6 = (0, n.x)({
          id: 1130,
          network: "defichain-evm",
          name: "DeFiChain EVM Mainnet",
          nativeCurrency: { name: "DeFiChain", symbol: "DFI", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://eth.mainnet.ocean.jellyfishsdk.com"] },
          },
          blockExplorers: {
            default: { name: "DeFiScan", url: "https://meta.defiscan.live" },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 137852,
            },
          },
        }),
        t8 = (0, n.x)({
          id: 1131,
          network: "defichain-evm-testnet",
          name: "DeFiChain EVM Testnet",
          nativeCurrency: { name: "DeFiChain", symbol: "DFI", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://eth.testnet.ocean.jellyfishsdk.com"] },
          },
          blockExplorers: {
            default: {
              name: "DeFiScan",
              url: "https://meta.defiscan.live/?network=TestNet",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 156462,
            },
          },
          testnet: !0,
        }),
        t5 = (0, n.x)({
          id: 0x27bc86aa,
          name: "Degen",
          nativeCurrency: { decimals: 18, name: "Degen", symbol: "DEGEN" },
          rpcUrls: {
            default: {
              http: ["https://rpc.degen.tips"],
              webSocket: ["wss://rpc.degen.tips"],
            },
          },
          blockExplorers: {
            default: {
              name: "Degen Chain Explorer",
              url: "https://explorer.degen.tips",
              apiUrl: "https://explorer.degen.tips/api/v2",
            },
          },
        }),
        t9 = (0, n.x)({
          id: 53935,
          name: "DFK Chain",
          nativeCurrency: { decimals: 18, name: "Jewel", symbol: "JEWEL" },
          rpcUrls: {
            default: {
              http: [
                "https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc",
              ],
            },
          },
          blockExplorers: {
            default: {
              name: "DFKSubnetScan",
              url: "https://subnets.avax.network/defi-kingdoms",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0xe1af97,
            },
          },
        }),
        t4 = (0, n.x)({
          id: 15,
          name: "Diode Prenet",
          nativeCurrency: { decimals: 18, name: "DIODE", symbol: "DIODE" },
          rpcUrls: {
            default: {
              http: ["https://prenet.diode.io:8443"],
              webSocket: ["wss://prenet.diode.io:8443/ws"],
            },
          },
          blockExplorers: {
            default: { name: "Diode Explorer", url: "https://diode.io/prenet" },
          },
          testnet: !1,
        }),
        re = (0, n.x)({
          id: 513100,
          name: "DisChain",
          nativeCurrency: { decimals: 18, name: "DIS", symbol: "DIS" },
          rpcUrls: { default: { http: ["https://rpc.dischain.xyz"] } },
          blockExplorers: {
            default: {
              name: "DisChain Explorer",
              url: "https://www.oklink.com/dis",
            },
          },
        }),
        rt = (0, n.x)({
          id: 53457,
          name: "DODOchain Testnet",
          nativeCurrency: { decimals: 18, name: "DODO", symbol: "DODO" },
          rpcUrls: {
            default: {
              http: ["https://dodochain-testnet.alt.technology"],
              webSocket: ["wss://dodochain-testnet.alt.technology/ws"],
            },
          },
          blockExplorers: {
            default: {
              name: "DODOchain Testnet (Sepolia) Explorer",
              url: "https://testnet-scan.dodochain.com",
            },
          },
          testnet: !0,
        }),
        rr = (0, n.x)({
          id: 2e3,
          name: "Dogechain",
          nativeCurrency: {
            decimals: 18,
            name: "Wrapped Dogecoin",
            symbol: "WDOGE",
          },
          rpcUrls: { default: { http: ["https://rpc.dogechain.dog"] } },
          blockExplorers: {
            default: {
              name: "DogeChainExplorer",
              url: "https://explorer.dogechain.dog",
              apiUrl: "https://explorer.dogechain.dog/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0x68a8609a60a008EFA633dfdec592c03B030cC508",
              blockCreated: 0x183545f,
            },
          },
        }),
        ra = (0, n.x)({
          id: 42026,
          name: "Donatuz",
          nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
          rpcUrls: { default: { http: ["https://rpc.donatuz.com"] } },
          blockExplorers: {
            default: {
              name: "Donatuz Explorer",
              url: "https://explorer.donatuz.com",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0,
            },
          },
        }),
        rn = (0, n.x)({
          id: 7979,
          name: "DOS Chain",
          nativeCurrency: { decimals: 18, name: "DOS Chain", symbol: "DOS" },
          rpcUrls: { default: { http: ["https://main.doschain.com"] } },
          blockExplorers: {
            default: {
              name: "DOS Chain Explorer",
              url: "https://doscan.io",
              apiUrl: "https://api.doscan.io",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 161908,
            },
          },
        }),
        rs = (0, n.x)({
          id: 3939,
          name: "DOS Chain Testnet",
          nativeCurrency: {
            decimals: 18,
            name: "DOS Chain Testnet",
            symbol: "DOS",
          },
          rpcUrls: { default: { http: ["https://test.doschain.com"] } },
          blockExplorers: {
            default: {
              name: "DOS Chain Testnet Explorer",
              url: "https://test.doscan.io",
              apiUrl: "https://api-test.doscan.io",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 69623,
            },
          },
          testnet: !0,
        }),
        ro = (0, n.x)({
          id: 23451,
          name: "DreyerX Mainnet",
          nativeCurrency: { name: "DreyerX", symbol: "DRX", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.dreyerx.com"] } },
          blockExplorers: {
            default: { name: "DreyerX Scan", url: "https://scan.dreyerx.com" },
          },
        }),
        ri = (0, n.x)({
          id: 23452,
          name: "DreyerX Testnet",
          nativeCurrency: { name: "DreyerX", symbol: "DRX", decimals: 18 },
          rpcUrls: { default: { http: ["http://testnet-rpc.dreyerx.com"] } },
          blockExplorers: {
            default: {
              name: "DreyerX Testnet Scan",
              url: "https://testnet-scan.dreyerx.com",
            },
          },
          testnet: !0,
        }),
        rl = (0, n.x)({
          id: 555888,
          name: "DustBoy IoT",
          nativeCurrency: { name: "Ether", symbol: "DST", decimals: 18 },
          rpcUrls: { default: { http: ["https://dustboy-rpc.jibl2.com"] } },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://dustboy.jibl2.com",
              apiUrl: "https://dustboy.jibl2.com/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xFFD34aa2C62B2D52E00A361e466C229788f4eD6a",
              blockCreated: 526569,
            },
          },
          testnet: !1,
        }),
        rc = (0, n.x)({
          id: 1100,
          name: "Dymension",
          nativeCurrency: { name: "DYM", symbol: "DYM", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://dymension-evm-rpc.publicnode.com"],
              webSocket: ["wss://dymension-evm-rpc.publicnode.com"],
            },
          },
          blockExplorers: {
            default: { name: "Dym FYI", url: "https://dym.fyi" },
          },
          testnet: !1,
        }),
        rd = (0, n.x)({
          id: 1995,
          name: "edeXa Testnet",
          nativeCurrency: { name: "edeXa", symbol: "tEDX", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.testnet.edexa.network"] } },
          blockExplorers: {
            default: {
              name: "edeXa Testnet Explorer",
              url: "https://explorer.testnet.edexa.network",
              apiUrl: "https://explorer.testnet.edexa.network/api/v2",
            },
          },
          testnet: !0,
        }),
        ru = (0, n.x)({
          id: 5424,
          name: "edeXa",
          nativeCurrency: { name: "edeXa", symbol: "EDX", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.edexa.network"] } },
          blockExplorers: {
            default: {
              name: "edeXa Explorer",
              url: "https://explorer.edexa.network",
              apiUrl: "https://explorer.edexa.network/api/v2",
            },
          },
        }),
        rp = (0, n.x)({
          id: 2026,
          name: "Edgeless Network",
          nativeCurrency: {
            name: "Edgeless Wrapped ETH",
            symbol: "EwETH",
            decimals: 18,
          },
          rpcUrls: {
            default: {
              http: ["https://rpc.edgeless.network/http"],
              webSocket: ["wss://rpc.edgeless.network/ws"],
            },
          },
          blockExplorers: {
            default: {
              name: "Edgeless Explorer",
              url: "https://explorer.edgeless.network",
            },
          },
        }),
        rh = (0, n.x)({
          id: 202,
          name: "Edgeless Testnet",
          nativeCurrency: {
            name: "Edgeless Wrapped ETH",
            symbol: "EwETH",
            decimals: 18,
          },
          rpcUrls: {
            default: {
              http: ["https://edgeless-testnet.rpc.caldera.xyz/http"],
              webSocket: ["wss://edgeless-testnet.rpc.caldera.xyz/ws"],
            },
          },
          blockExplorers: {
            default: {
              name: "Edgeless Testnet Explorer",
              url: "https://testnet.explorer.edgeless.network",
            },
          },
        }),
        rm = (0, n.x)({
          id: 2021,
          name: "Edgeware EdgeEVM Mainnet",
          nativeCurrency: { decimals: 18, name: "Edgeware", symbol: "EDG" },
          rpcUrls: {
            default: { http: ["https://edgeware-evm.jelliedowl.net"] },
          },
          blockExplorers: {
            default: {
              name: "Edgscan by Bharathcoorg",
              url: "https://edgscan.live",
              apiUrl: "https://edgscan.live/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0x11474f0,
            },
          },
        }),
        rf = (0, n.x)({
          id: 2022,
          name: "Beresheet BereEVM Testnet",
          nativeCurrency: { decimals: 18, name: "Testnet EDG", symbol: "tEDG" },
          rpcUrls: {
            default: { http: ["https://beresheet-evm.jelliedowl.net"] },
          },
          blockExplorers: {
            default: {
              name: "Edgscan by Bharathcoorg",
              url: "https://testnet.edgscan.live",
              apiUrl: "https://testnet.edgscan.live/api",
            },
          },
        }),
        rb = (0, n.x)({
          id: 41923,
          name: "EDU Chain",
          nativeCurrency: { decimals: 18, name: "EDU", symbol: "EDU" },
          rpcUrls: {
            default: { http: ["https://rpc.edu-chain.raas.gelato.cloud"] },
          },
          blockExplorers: {
            default: {
              name: "EDU Chain Explorer",
              url: "https://educhain.blockscout.com/",
            },
          },
          testnet: !1,
        }),
        ry = (0, n.x)({
          id: 656476,
          name: "EDU Chain Testnet",
          nativeCurrency: { decimals: 18, name: "EDU", symbol: "EDU" },
          rpcUrls: {
            default: {
              http: ["https://rpc.open-campus-codex.gelato.digital/"],
              webSocket: ["wss://ws.open-campus-codex.gelato.digital"],
            },
          },
          blockExplorers: {
            default: {
              name: "EDU Chain Testnet Explorer",
              url: "https://opencampus-codex.blockscout.com",
              apiUrl: "https://opencampus-codex.blockscout.com/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 0xecba15,
            },
          },
          testnet: !0,
        }),
        rx = (0, n.x)({
          id: 1994,
          name: "Ekta",
          nativeCurrency: { decimals: 18, name: "EKTA", symbol: "EKTA" },
          rpcUrls: { default: { http: ["https://main.ekta.io"] } },
          blockExplorers: {
            default: {
              name: "Ektascan",
              url: "https://ektascan.io",
              apiUrl: "https://ektascan.io/api",
            },
          },
        }),
        rv = (0, n.x)({
          id: 1004,
          name: "Ekta Testnet",
          nativeCurrency: { decimals: 18, name: "EKTA", symbol: "EKTA" },
          rpcUrls: { default: { http: ["https://test.ekta.io:8545"] } },
          blockExplorers: {
            default: {
              name: "Test Ektascan",
              url: "https://test.ektascan.io",
              apiUrl: "https://test.ektascan.io/api",
            },
          },
          testnet: !0,
        }),
        rg = (0, n.x)({
          id: 20,
          name: "Elastos Smart Chain",
          nativeCurrency: { name: "ELA", symbol: "ELA", decimals: 18 },
          rpcUrls: { default: { http: ["https://api2.elastos.io/eth"] } },
          blockExplorers: {
            default: {
              name: "Elastos Explorer",
              url: "https://esc.elastos.io",
            },
          },
          testnet: !1,
        }),
        rE = (0, n.x)({
          id: 21,
          name: "Elastos Smart Chain Testnet",
          nativeCurrency: { name: "tELA", symbol: "tELA", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://api-testnet.elastos.io/eth"] },
          },
          blockExplorers: {
            default: {
              name: "Elastos Explorer",
              url: "https://esc-testnet.elastos.io",
            },
          },
          testnet: !0,
        }),
        rk = (0, n.x)({
          id: 52014,
          name: "Electroneum Mainnet",
          nativeCurrency: { name: "ETN", symbol: "ETN", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.electroneum.com"] } },
          blockExplorers: {
            default: {
              name: "Electroneum Block Explorer",
              url: "https://blockexplorer.electroneum.com",
            },
          },
          testnet: !1,
        }),
        rC = (0, n.x)({
          id: 5201420,
          name: "Electroneum Testnet",
          nativeCurrency: { name: "ETN", symbol: "ETN", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://testnet-rpc.electroneum.com"] },
          },
          blockExplorers: {
            default: {
              name: "Electroneum Block Explorer",
              url: "https://blockexplorer.thesecurityteam.rocks",
            },
          },
          testnet: !0,
        }),
        rw = (0, n.x)({
          ...ei,
          id: 1338,
          name: "Elysium Testnet",
          nativeCurrency: { decimals: 18, name: "LAVA", symbol: "LAVA" },
          rpcUrls: {
            default: { http: ["https://elysium-test-rpc.vulcanforged.com"] },
          },
          blockExplorers: {
            default: {
              name: "Elysium testnet explorer",
              url: "https://elysium-explorer.vulcanforged.com",
            },
          },
          testnet: !0,
        }),
        rT = (0, n.x)({
          id: 246,
          name: "Energy Mainnet",
          nativeCurrency: { name: "EWT", symbol: "EWT", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.energyweb.org"] } },
          blockExplorers: {
            default: {
              name: "EnergyWeb Explorer",
              url: "https://explorer.energyweb.org",
            },
          },
          testnet: !1,
        }),
        rS = (0, n.x)({
          id: 119,
          name: "ENULS Mainnet",
          nativeCurrency: { decimals: 18, name: "NULS", symbol: "NULS" },
          rpcUrls: { default: { http: ["https://evmapi2.nuls.io"] } },
          blockExplorers: {
            default: { name: "ENULS Explorer", url: "https://evmscan.nuls.io" },
          },
          testnet: !1,
        }),
        rA = (0, n.x)({
          id: 7332,
          name: "Horizen EON",
          nativeCurrency: { decimals: 18, name: "ZEN", symbol: "ZEN" },
          rpcUrls: {
            default: { http: ["https://eon-rpc.horizenlabs.io/ethv1"] },
          },
          blockExplorers: {
            default: {
              name: "EON Explorer",
              url: "https://eon-explorer.horizenlabs.io",
            },
          },
          contracts: {},
        }),
        rU = (0, n.x)({
          id: 17777,
          name: "EOS EVM",
          nativeCurrency: { decimals: 18, name: "EOS", symbol: "EOS" },
          rpcUrls: { default: { http: ["https://api.evm.eosnetwork.com"] } },
          blockExplorers: {
            default: {
              name: "EOS EVM Explorer",
              url: "https://explorer.evm.eosnetwork.com",
              apiUrl: "https://explorer.evm.eosnetwork.com/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 7943933,
            },
          },
        }),
        rB = (0, n.x)({
          id: 15557,
          name: "EOS EVM Testnet",
          nativeCurrency: { decimals: 18, name: "EOS", symbol: "EOS" },
          rpcUrls: {
            default: { http: ["https://api.testnet.evm.eosnetwork.com"] },
          },
          blockExplorers: {
            default: {
              name: "EOS EVM Testnet Explorer",
              url: "https://explorer.testnet.evm.eosnetwork.com",
              apiUrl: "https://explorer.testnet.evm.eosnetwork.com/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 9067940,
            },
          },
          testnet: !0,
        }),
        rM = (0, n.x)({
          id: 42793,
          name: "Etherlink",
          nativeCurrency: { decimals: 18, name: "Tez", symbol: "XTZ" },
          rpcUrls: {
            default: { http: ["https://node.mainnet.etherlink.com"] },
          },
          blockExplorers: {
            default: {
              name: "Etherlink",
              url: "https://explorer.etherlink.com",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 33899,
            },
          },
        }),
        rP = (0, n.x)({
          id: 128123,
          name: "Etherlink Testnet",
          nativeCurrency: { decimals: 18, name: "Tez", symbol: "XTZ" },
          rpcUrls: {
            default: { http: ["https://node.ghostnet.etherlink.com"] },
          },
          blockExplorers: {
            default: {
              name: "Etherlink Testnet",
              url: "https://testnet.explorer.etherlink.com",
            },
          },
          testnet: !0,
        }),
        rD = (0, n.x)({
          id: 183,
          name: "Ethernity",
          nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
          rpcUrls: { default: { http: ["https://mainnet.ethernitychain.io"] } },
          blockExplorers: {
            default: { name: "Ethernity Explorer", url: "https://ernscan.io" },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 0,
            },
          },
          testnet: !1,
        }),
        rF = (0, n.x)({
          id: 0x1351815,
          name: "ETP Mainnet",
          nativeCurrency: {
            decimals: 18,
            name: "ETP Chain Native Token",
            symbol: "ETP",
          },
          rpcUrls: { default: { http: ["https://rpc.etpscan.xyz"] } },
          blockExplorers: {
            default: { name: "ETP Scan", url: "https://etpscan.xyz" },
          },
        }),
        rI = (0, n.x)({
          id: 9001,
          name: "Evmos",
          nativeCurrency: { decimals: 18, name: "Evmos", symbol: "EVMOS" },
          rpcUrls: { default: { http: ["https://eth.bd.evmos.org:8545"] } },
          blockExplorers: {
            default: {
              name: "Evmos Block Explorer",
              url: "https://escan.live",
            },
          },
        }),
        rO = (0, n.x)({
          id: 9e3,
          name: "Evmos Testnet",
          nativeCurrency: { decimals: 18, name: "Evmos", symbol: "EVMOS" },
          rpcUrls: { default: { http: ["https://eth.bd.evmos.dev:8545"] } },
          blockExplorers: {
            default: {
              name: "Evmos Testnet Block Explorer",
              url: "https://evm.evmos.dev/",
            },
          },
        }),
        rR = (0, n.x)({
          id: 0x1507ca2,
          name: "Excelon Mainnet",
          network: "XLON",
          nativeCurrency: { decimals: 18, name: "Excelon", symbol: "xlon" },
          rpcUrls: { default: { http: ["https://edgewallet1.xlon.org"] } },
          blockExplorers: {
            default: {
              name: "Excelon explorer",
              url: "https://explorer.excelon.io",
            },
          },
        }),
        rL = (0, n.x)({
          id: 2,
          name: "Expanse Network",
          nativeCurrency: { decimals: 18, name: "EXP", symbol: "EXP" },
          rpcUrls: { default: { http: ["https://node.expanse.tech"] } },
          blockExplorers: {
            default: {
              name: "Expanse Explorer",
              url: "https://explorer.expanse.tech",
            },
          },
          testnet: !1,
        }),
        rN = (0, n.x)({
          id: 7200,
          name: "exSat Network",
          nativeCurrency: { decimals: 18, name: "BTC", symbol: "BTC" },
          rpcUrls: { default: { http: ["https://evm.exsat.network"] } },
          blockExplorers: {
            default: {
              name: "exSat Explorer",
              url: "https://scan.exsat.network",
              apiUrl: "https://scan.exsat.network/api",
            },
          },
        }),
        rz = (0, n.x)({
          id: 839999,
          name: "exSat Testnet",
          nativeCurrency: { decimals: 18, name: "BTC", symbol: "BTC" },
          rpcUrls: { default: { http: ["https://evm-tst3.exsat.network"] } },
          blockExplorers: {
            default: {
              name: "exSat Explorer",
              url: "https://scan-testnet.exsat.network",
              apiUrl: "https://scan-testnet.exsat.network/api",
            },
          },
        }),
        rK = (0, n.x)({
          id: 250,
          name: "Fantom",
          nativeCurrency: { decimals: 18, name: "Fantom", symbol: "FTM" },
          rpcUrls: { default: { http: ["https://250.rpc.thirdweb.com"] } },
          blockExplorers: {
            default: {
              name: "FTMScan",
              url: "https://ftmscan.com",
              apiUrl: "https://api.ftmscan.com/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0x1f79203,
            },
          },
        }),
        rV = (0, n.x)({
          id: 64240,
          name: "Fantom Sonic Open Testnet",
          network: "fantom-sonic-testnet",
          nativeCurrency: { decimals: 18, name: "Fantom", symbol: "FTM" },
          rpcUrls: {
            default: { http: ["https://rpcapi.sonic.fantom.network"] },
          },
          blockExplorers: {
            default: {
              name: "Fantom Sonic Open Testnet Explorer",
              url: "https://public-sonic.fantom.network",
            },
          },
          testnet: !0,
        }),
        rH = (0, n.x)({
          id: 4002,
          name: "Fantom Testnet",
          nativeCurrency: { decimals: 18, name: "Fantom", symbol: "FTM" },
          rpcUrls: {
            default: { http: ["https://rpc.testnet.fantom.network"] },
          },
          blockExplorers: {
            default: {
              name: "FTMScan",
              url: "https://testnet.ftmscan.com",
              apiUrl: "https://testnet.ftmscan.com/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 8328688,
            },
          },
          testnet: !0,
        }),
        rj = (0, n.x)({
          id: 12306,
          name: "Fibo Chain",
          nativeCurrency: { decimals: 18, name: "fibo", symbol: "FIBO" },
          rpcUrls: { default: { http: ["https://network.hzroc.art"] } },
          blockExplorers: {
            default: { name: "FiboScan", url: "https://scan.fibochain.org" },
          },
        }),
        r_ = (0, n.x)({
          id: 314,
          name: "Filecoin Mainnet",
          nativeCurrency: { decimals: 18, name: "filecoin", symbol: "FIL" },
          rpcUrls: { default: { http: ["https://api.node.glif.io/rpc/v1"] } },
          blockExplorers: {
            default: { name: "Filfox", url: "https://filfox.info/en" },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 3328594,
            },
          },
        }),
        rG = (0, n.x)({
          id: 314159,
          name: "Filecoin Calibration",
          nativeCurrency: {
            decimals: 18,
            name: "testnet filecoin",
            symbol: "tFIL",
          },
          rpcUrls: {
            default: { http: ["https://api.calibration.node.glif.io/rpc/v1"] },
          },
          blockExplorers: {
            default: { name: "Filscan", url: "https://calibration.filscan.io" },
          },
          testnet: !0,
        }),
        rW = (0, n.x)({
          id: 3141,
          name: "Filecoin Hyperspace",
          nativeCurrency: {
            decimals: 18,
            name: "testnet filecoin",
            symbol: "tFIL",
          },
          rpcUrls: {
            default: { http: ["https://api.hyperspace.node.glif.io/rpc/v1"] },
          },
          blockExplorers: {
            default: {
              name: "Filfox",
              url: "https://hyperspace.filfox.info/en",
            },
          },
          testnet: !0,
        }),
        rq = (0, n.x)({
          id: 995,
          name: "5ireChain",
          nativeCurrency: { name: "5ire Token", symbol: "5IRE", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.5ire.network"] } },
          blockExplorers: {
            default: {
              name: "5ireChain Mainnet Explorer",
              url: "https://5irescan.io/",
            },
          },
          testnet: !1,
        }),
        r$ = (0, n.x)({
          id: 14,
          name: "Flare Mainnet",
          nativeCurrency: { decimals: 18, name: "Flare", symbol: "FLR" },
          rpcUrls: {
            default: { http: ["https://flare-api.flare.network/ext/C/rpc"] },
          },
          blockExplorers: {
            default: {
              name: "Flare Explorer",
              url: "https://flare-explorer.flare.network",
              apiUrl: "https://flare-explorer.flare.network/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 3002461,
            },
          },
        }),
        rX = (0, n.x)({
          id: 114,
          name: "Flare Testnet Coston2",
          nativeCurrency: {
            decimals: 18,
            name: "Coston2 Flare",
            symbol: "C2FLR",
          },
          rpcUrls: {
            default: { http: ["https://coston2-api.flare.network/ext/C/rpc"] },
          },
          blockExplorers: {
            default: {
              name: "Coston2 Explorer",
              url: "https://coston2-explorer.flare.network",
              apiUrl: "https://coston2-explorer.flare.network/api",
            },
          },
          testnet: !0,
        }),
        rZ = (0, n.x)({
          id: 747,
          name: "Flow EVM Mainnet",
          nativeCurrency: { decimals: 18, name: "Flow", symbol: "FLOW" },
          rpcUrls: {
            default: { http: ["https://mainnet.evm.nodes.onflow.org"] },
          },
          blockExplorers: {
            default: {
              name: "Mainnet Explorer",
              url: "https://evm.flowscan.io",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 6205,
            },
          },
        }),
        rJ = (0, n.x)({
          id: 646,
          name: "Flow EVM Previewnet",
          nativeCurrency: { decimals: 18, name: "Flow", symbol: "FLOW" },
          rpcUrls: {
            default: { http: ["https://previewnet.evm.nodes.onflow.org"] },
          },
          blockExplorers: {
            default: {
              name: "Previewnet Explorer",
              url: "https://previewnet.flowdiver.io",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 6205,
            },
          },
        }),
        rY = (0, n.x)({
          id: 545,
          name: "Flow EVM Testnet",
          nativeCurrency: { decimals: 18, name: "Flow", symbol: "FLOW" },
          rpcUrls: {
            default: { http: ["https://testnet.evm.nodes.onflow.org"] },
          },
          blockExplorers: {
            default: {
              name: "Flow Diver",
              url: "https://evm-testnet.flowscan.io",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 137518,
            },
          },
          testnet: !0,
        }),
        rQ = (0, n.x)({
          id: 9999999,
          name: "Fluence",
          nativeCurrency: { name: "FLT", symbol: "FLT", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://rpc.mainnet.fluence.dev"],
              webSocket: ["wss://ws.mainnet.fluence.dev"],
            },
          },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://blockscout.mainnet.fluence.dev",
              apiUrl: "https://blockscout.mainnet.fluence.dev/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 207583,
            },
          },
        }),
        r0 = (0, n.x)({
          id: 0x1cbc67bfdc,
          name: "Fluence Stage",
          nativeCurrency: { name: "tFLT", symbol: "tFLT", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://rpc.stage.fluence.dev"],
              webSocket: ["wss://ws.stage.fluence.dev"],
            },
          },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://blockscout.stage.fluence.dev",
              apiUrl: "https://blockscout.stage.fluence.dev/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 83227,
            },
          },
          testnet: !0,
        }),
        r1 = (0, n.x)({
          id: 0x31bf8c3,
          name: "Fluence Testnet",
          nativeCurrency: { name: "tFLT", symbol: "tFLT", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://rpc.testnet.fluence.dev"],
              webSocket: ["wss://ws.testnet.fluence.dev"],
            },
          },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://blockscout.testnet.fluence.dev",
              apiUrl: "https://blockscout.testnet.fluence.dev/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 96424,
            },
          },
          testnet: !0,
        }),
        r2 = (0, n.x)({
          id: 20993,
          name: "Fluent Testnet",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.dev.gblend.xyz"] } },
          blockExplorers: {
            default: {
              name: "Fluent Explorer",
              url: "https://blockscout.dev.gblend.xyz",
            },
          },
          testnet: !0,
        }),
        r3 = (0, n.x)({
          id: 984122,
          name: "Forma",
          network: "forma",
          nativeCurrency: { symbol: "TIA", name: "TIA", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://rpc.forma.art"],
              webSocket: ["wss://ws.forma.art"],
            },
          },
          blockExplorers: {
            default: {
              name: "Forma Explorer",
              url: "https://explorer.forma.art",
            },
          },
          contracts: {
            multicall3: {
              address: "0xd53C6FFB123F7349A32980F87faeD8FfDc9ef079",
              blockCreated: 252705,
            },
          },
        }),
        r7 = (0, n.x)({
          id: 478,
          name: "Form Network",
          nativeCurrency: { decimals: 18, name: "Ethereum", symbol: "ETH" },
          rpcUrls: {
            default: {
              http: ["https://rpc.form.network/http"],
              webSocket: ["wss://rpc.form.network/ws"],
            },
          },
          blockExplorers: {
            default: {
              name: "Form Explorer",
              url: "https://explorer.form.network",
            },
          },
          contracts: {
            ...ei.contracts,
            addressManager: {
              1: { address: "0x15c249E46A2F924C2dB3A1560CF86729bAD1f07B" },
            },
            l1CrossDomainMessenger: {
              1: { address: "0xF333158DCCad1dF6C3F0a3aEe8BC31fA94d9eD5c" },
            },
            l2OutputOracle: {
              1: { address: "0x4ccAAF69F41c5810cA875183648B577CaCf1F67E" },
            },
            portal: {
              1: { address: "0x4E259Ee5F4136408908160dD32295A5031Fa426F" },
            },
            l1StandardBridge: {
              1: { address: "0xdc20aA63D3DE59574E065957190D8f24e0F7B8Ba" },
            },
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
            },
          },
          sourceId: 1,
        }),
        r6 = (0, n.x)({
          id: 43521,
          name: "Formicarium",
          nativeCurrency: { decimals: 18, name: "M", symbol: "M" },
          rpcUrls: {
            default: {
              http: ["https://rpc.formicarium.memecore.net"],
              webSocket: ["wss://ws.formicarium.memecore.net"],
            },
          },
          blockExplorers: {
            default: {
              name: "MemeCore Testnet Explorer",
              url: "https://formicarium.memecorescan.io",
            },
            okx: {
              name: "MemeCore Testnet Explorer",
              url: "https://web3.okx.com/explorer/formicarium-testnet",
            },
            memecore: {
              name: "MemeCore Testnet Explorer",
              url: "https://formicarium.blockscout.memecore.com",
              apiUrl: "https://formicarium.blockscout.memecore.com/api",
            },
          },
          testnet: !0,
        }),
        r8 = (0, n.x)({
          id: 132902,
          name: "Form Testnet",
          nativeCurrency: { decimals: 18, name: "Ethereum", symbol: "ETH" },
          rpcUrls: {
            default: {
              http: ["https://sepolia-rpc.form.network/http"],
              webSocket: ["wss://sepolia-rpc.form.network/ws"],
            },
          },
          blockExplorers: {
            default: {
              name: "Form Testnet Explorer",
              url: "https://sepolia-explorer.form.network",
            },
          },
          contracts: {
            ...ei.contracts,
            addressManager: {
              0xaa36a7: {
                address: "0xd5C38fa934f7fd7477D4800F4f38a1c5BFdF1373",
              },
            },
            l1CrossDomainMessenger: {
              0xaa36a7: {
                address: "0x37A68565c4BE9700b3E3Ec60cC4416cAC3052FAa",
              },
            },
            l2OutputOracle: {
              0xaa36a7: {
                address: "0x9eA2239E65a59EC9C7F1ED4C116dD58Da71Fc1e2",
              },
            },
            portal: {
              0xaa36a7: {
                address: "0x60377e3cE15dF4CCA24c4beF076b60314240b032",
              },
            },
            l1StandardBridge: {
              0xaa36a7: {
                address: "0xD4531f633942b2725896F47cD2aFd260b44Ab1F7",
              },
            },
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
            },
          },
          testnet: !0,
          sourceId: 0xaa36a7,
        }),
        r5 = (0, n.x)({
          id: 80931,
          name: "Forta Chain",
          nativeCurrency: { symbol: "FORT", name: "FORT", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://rpc-forta-chain-8gj1qndmfc.t.conduit.xyz"],
            },
          },
          blockExplorers: {
            default: {
              name: "Forta Explorer",
              url: "https://explorer.forta.org",
            },
          },
        }),
        r9 = (0, n.x)({
          id: 31337,
          name: "Foundry",
          nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
          rpcUrls: {
            default: {
              http: ["http://127.0.0.1:8545"],
              webSocket: ["ws://127.0.0.1:8545"],
            },
          },
        }),
        r4 = (0, n.x)({
          ...ei,
          id: 252,
          name: "Fraxtal",
          nativeCurrency: {
            name: "Frax Ether",
            symbol: "frxETH",
            decimals: 18,
          },
          rpcUrls: { default: { http: ["https://rpc.frax.com"] } },
          blockExplorers: {
            default: {
              name: "fraxscan",
              url: "https://fraxscan.com",
              apiUrl: "https://api.fraxscan.com/api",
            },
          },
          contracts: {
            ...ei.contracts,
            l2OutputOracle: {
              1: { address: "0x66CC916Ed5C6C2FA97014f7D1cD141528Ae171e4" },
            },
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
            },
            portal: {
              1: {
                address: "0x36cb65c1967A0Fb0EEE11569C51C2f2aA1Ca6f6D",
                blockCreated: 0x123fb5b,
              },
            },
            l1StandardBridge: {
              1: {
                address: "0x34C0bD5877A5Ee7099D0f5688D65F4bB9158BDE2",
                blockCreated: 0x123fb5b,
              },
            },
          },
          sourceId: 1,
        }),
        ae = (0, n.x)({
          ...ei,
          id: 2522,
          name: "Fraxtal Testnet",
          nativeCurrency: {
            name: "Frax Ether",
            symbol: "frxETH",
            decimals: 18,
          },
          rpcUrls: { default: { http: ["https://rpc.testnet.frax.com"] } },
          blockExplorers: {
            default: {
              name: "fraxscan testnet",
              url: "https://holesky.fraxscan.com",
              apiUrl: "https://api-holesky.fraxscan.com/api",
            },
          },
          contracts: {
            ...ei.contracts,
            l2OutputOracle: {
              17e3: { address: "0x715EA64DA13F4d0831ece4Ad3E8c1aa013167F32" },
            },
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
            },
            portal: {
              17e3: {
                address: "0xB9c64BfA498d5b9a8398Ed6f46eb76d90dE5505d",
                blockCreated: 318416,
              },
            },
            l1StandardBridge: {
              17e3: {
                address: "0x0BaafC217162f64930909aD9f2B27125121d6332",
                blockCreated: 318416,
              },
            },
          },
          sourceId: 17e3,
        }),
        at = (0, n.x)({
          ...ei,
          id: 33979,
          name: "Funki",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://rpc-mainnet.funkichain.com"] },
          },
          blockExplorers: {
            default: {
              name: "Funki Mainnet Explorer",
              url: "https://funkiscan.io",
            },
          },
          contracts: { ...ei.contracts },
          sourceId: 1,
        }),
        ar = (0, n.x)({
          ...ei,
          id: 3397901,
          network: "funkiSepolia",
          name: "Funki Sepolia Sandbox",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://funki-testnet.alt.technology"] },
          },
          blockExplorers: {
            default: {
              name: "Funki Sepolia Sandbox Explorer",
              url: "https://sepolia-sandbox.funkichain.com/",
            },
          },
          testnet: !0,
          contracts: {
            ...ei.contracts,
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 1620204,
            },
          },
          sourceId: 0xaa36a7,
        }),
        aa = (0, n.x)({
          id: 122,
          name: "Fuse",
          nativeCurrency: { name: "Fuse", symbol: "FUSE", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.fuse.io"] } },
          blockExplorers: {
            default: {
              name: "Fuse Explorer",
              url: "https://explorer.fuse.io",
              apiUrl: "https://explorer.fuse.io/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0xf660c4,
            },
          },
        }),
        an = (0, n.x)({
          id: 123,
          name: "Fuse Sparknet",
          nativeCurrency: { name: "Spark", symbol: "SPARK", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.fusespark.io"] } },
          blockExplorers: {
            default: {
              name: "Sparkent Explorer",
              url: "https://explorer.fusespark.io",
              apiUrl: "https://explorer.fusespark.io/api",
            },
          },
        }),
        as = (0, n.x)({
          id: 32659,
          name: "Fusion Mainnet",
          nativeCurrency: { name: "Fusion", symbol: "FSN", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://mainnet.fusionnetwork.io"],
              webSocket: ["wss://mainnet.fusionnetwork.io"],
            },
          },
          blockExplorers: {
            default: { name: "FSNscan", url: "https://fsnscan.com" },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0x9f5385,
            },
          },
          testnet: !1,
        }),
        ao = (0, n.x)({
          id: 46688,
          name: "Fusion Testnet",
          nativeCurrency: { name: "Fusion", symbol: "FSN", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://testnet.fusionnetwork.io"],
              webSocket: ["wss://testnet.fusionnetwork.io"],
            },
          },
          blockExplorers: {
            default: { name: "FSNscan", url: "https://testnet.fsnscan.com" },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0x9f1f95,
            },
          },
          testnet: !0,
        }),
        ai = (0, n.x)({
          ...ei,
          name: "Garnet Testnet",
          testnet: !0,
          id: 17069,
          sourceId: 17e3,
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://rpc.garnetchain.com"],
              webSocket: ["wss://rpc.garnetchain.com"],
            },
          },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://explorer.garnetchain.com",
            },
          },
          contracts: {
            ...ei.contracts,
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
            },
            portal: {
              17e3: {
                address: "0x57ee40586fbE286AfC75E67cb69511A6D9aF5909",
                blockCreated: 1274684,
              },
            },
            l2OutputOracle: {
              17e3: {
                address: "0xCb8E7AC561b8EF04F2a15865e9fbc0766FEF569B",
                blockCreated: 1274684,
              },
            },
            l1StandardBridge: {
              17e3: {
                address: "0x09bcDd311FE398F80a78BE37E489f5D440DB95DE",
                blockCreated: 1274684,
              },
            },
          },
        }),
        al = (0, n.x)({
          id: 63157,
          name: "Geist Mainnet",
          nativeCurrency: {
            decimals: 18,
            name: "Aavegotchi GHST Token",
            symbol: "GHST",
          },
          rpcUrls: {
            default: { http: ["https://geist-mainnet.g.alchemy.com/public"] },
          },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://geist-mainnet.explorer.alchemy.com",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 660735,
            },
          },
        }),
        ac = (0, n.x)({
          id: 16507,
          name: "Genesys Mainnet",
          nativeCurrency: { decimals: 18, name: "GSYS", symbol: "GSYS" },
          rpcUrls: { default: { http: ["https://rpc.genesys.network"] } },
          blockExplorers: {
            default: {
              name: "Genesys Explorer",
              url: "https://gchainexplorer.genesys.network",
            },
          },
          testnet: !1,
        }),
        ad = (0, n.x)({
          id: 251,
          name: "Glide L1 Protocol XP",
          nativeCurrency: { name: "GLXP", symbol: "GLXP", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://rpc-api.glideprotocol.xyz/l1-rpc"],
              webSocket: ["wss://rpc-api.glideprotocol.xyz/l1-rpc"],
            },
          },
          blockExplorers: {
            default: {
              name: "Glide Protocol Explore",
              url: "https://blockchain-explorer.glideprotocol.xyz",
            },
          },
          testnet: !1,
        }),
        au = (0, n.x)({
          id: 253,
          name: "Glide L2 Protocol XP",
          nativeCurrency: { name: "GLXP", symbol: "GLXP", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://rpc-api.glideprotocol.xyz/l2-rpc"],
              webSocket: ["wss://rpc-api.glideprotocol.xyz/l2-rpc"],
            },
          },
          blockExplorers: {
            default: {
              name: "Glide Protocol Explore",
              url: "https://blockchain-explorer.glideprotocol.xyz",
            },
          },
          testnet: !1,
        }),
        ap = (0, n.x)({
          id: 100,
          name: "Gnosis",
          nativeCurrency: { decimals: 18, name: "xDAI", symbol: "XDAI" },
          rpcUrls: {
            default: {
              http: ["https://rpc.gnosischain.com"],
              webSocket: ["wss://rpc.gnosischain.com/wss"],
            },
          },
          blockExplorers: {
            default: {
              name: "Gnosisscan",
              url: "https://gnosisscan.io",
              apiUrl: "https://api.gnosisscan.io/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0x140c71b,
            },
          },
        }),
        ah = (0, n.x)({
          id: 10200,
          name: "Gnosis Chiado",
          nativeCurrency: { decimals: 18, name: "Gnosis", symbol: "xDAI" },
          rpcUrls: {
            default: {
              http: ["https://rpc.chiadochain.net"],
              webSocket: ["wss://rpc.chiadochain.net/wss"],
            },
          },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://blockscout.chiadochain.net",
              apiUrl: "https://blockscout.chiadochain.net/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 4967313,
            },
          },
          testnet: !0,
        }),
        am = (0, n.x)({
          id: 2345,
          name: "GOAT",
          nativeCurrency: { decimals: 18, name: "Bitcoin", symbol: "BTC" },
          rpcUrls: { default: { http: ["https://rpc.goat.network"] } },
          blockExplorers: {
            default: {
              name: "Goat Explorer",
              url: "https://explorer.goat.network",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 0,
            },
          },
        }),
        af = (0, n.x)({
          id: 1663,
          name: "Horizen Gobi Testnet",
          nativeCurrency: { decimals: 18, name: "Test ZEN", symbol: "tZEN" },
          rpcUrls: {
            default: { http: ["https://gobi-testnet.horizenlabs.io/ethv1"] },
          },
          blockExplorers: {
            default: {
              name: "Gobi Explorer",
              url: "https://gobi-explorer.horizen.io",
            },
          },
          contracts: {},
          testnet: !0,
        }),
        ab = (0, n.x)({
          id: 60,
          name: "GoChain",
          nativeCurrency: { decimals: 18, name: "GO", symbol: "GO" },
          rpcUrls: { default: { http: ["https://rpc.gochain.io"] } },
          blockExplorers: {
            default: {
              name: "GoChain Explorer",
              url: "https://explorer.gochain.io",
            },
          },
          testnet: !1,
        }),
        ay = (0, n.x)({
          id: 71402,
          name: "Godwoken Mainnet",
          nativeCurrency: { decimals: 18, name: "pCKB", symbol: "pCKB" },
          rpcUrls: {
            default: { http: ["https://v1.mainnet.godwoken.io/rpc"] },
          },
          blockExplorers: {
            default: { name: "GW Scan", url: "https://v1.gwscan.com" },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 15034,
            },
          },
          testnet: !1,
        }),
        ax = (0, n.x)({
          id: 5,
          name: "Goerli",
          nativeCurrency: { name: "Goerli Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://5.rpc.thirdweb.com"] } },
          blockExplorers: {
            default: {
              name: "Etherscan",
              url: "https://goerli.etherscan.io",
              apiUrl: "https://api-goerli.etherscan.io/api",
            },
          },
          contracts: {
            ensRegistry: {
              address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            },
            ensUniversalResolver: {
              address: "0xfc4AC75C46C914aF5892d6d3eFFcebD7917293F1",
              blockCreated: 0x9dc386,
            },
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 6507670,
            },
          },
          testnet: !0,
        }),
        av = (0, n.x)({
          id: 1625,
          name: "Gravity Alpha Mainnet",
          nativeCurrency: { name: "G", symbol: "G", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.gravity.xyz"] } },
          blockExplorers: {
            default: {
              name: "Gravity Explorer",
              url: "https://explorer.gravity.xyz",
              apiUrl: "https://explorer.gravity.xyz/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xf8ac4BEB2F75d2cFFb588c63251347fdD629B92c",
              blockCreated: 16851,
            },
          },
        }),
        ag = (0, n.x)({
          id: 43419,
          name: "Gunz Mainnet",
          nativeCurrency: { name: "GUN", symbol: "GUN", decimals: 18 },
          rpcUrls: {
            default: {
              http: [
                "https://rpc.gunzchain.io/ext/bc/2M47TxWHGnhNtq6pM5zPXdATBtuqubxn5EPFgFmEawCQr9WFML/rpc",
              ],
            },
          },
          blockExplorers: {
            default: { name: "Gunz Explorer", url: "https://gunzscan.io/" },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 70502,
            },
          },
        }),
        aE = (0, n.x)({
          id: 260,
          name: "Guru Network Mainnet",
          nativeCurrency: { name: "GURU Token", symbol: "GURU", decimals: 18 },
          rpcUrls: {
            default: {
              http: [
                "https://rpc-main.gurunetwork.ai",
                "https://rpc.gurunetwork.ai/archive/260",
              ],
            },
          },
          blockExplorers: {
            default: { name: "Guruscan", url: "https://scan.gurunetwork.ai" },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 271691,
            },
          },
          testnet: !1,
        }),
        ak = (0, n.x)({
          id: 261,
          name: "Guru Network Testnet",
          nativeCurrency: {
            name: "tGURU Token",
            symbol: "tGURU",
            decimals: 18,
          },
          rpcUrls: {
            default: {
              http: [
                "https://rpc-test.gurunetwork.ai",
                "https://rpc.gurunetwork.ai/archive/261",
              ],
            },
          },
          blockExplorers: {
            default: {
              name: "Guruscan",
              url: "https://sepolia.gurunetwork.ai",
            },
          },
          testnet: !0,
        }),
        aC = (0, n.x)({
          id: 5112,
          name: "Ham",
          nativeCurrency: { decimals: 18, name: "Ham", symbol: "ETH" },
          rpcUrls: {
            default: {
              http: ["https://rpc.ham.fun"],
              webSocket: ["wss://rpc.ham.fun"],
            },
          },
          blockExplorers: {
            default: {
              name: "Ham Chain Explorer",
              url: "https://explorer.ham.fun",
              apiUrl: "https://explorer.ham.fun/api/v2",
            },
          },
        }),
        aw = (0, n.x)({
          id: 216,
          name: "Happychain Testnet",
          nativeCurrency: { symbol: "HAPPY", name: "HAPPY", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://rpc.testnet.happy.tech/http"],
              webSocket: ["wss://rpc.testnet.happy.tech/ws"],
            },
          },
          blockExplorers: {
            default: {
              name: "Happy Chain Testnet Explorer",
              url: "https://explorer.testnet.happy.tech",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 1,
            },
          },
          testnet: !0,
        }),
        aT = (0, n.x)({
          id: 11235,
          name: "HAQQ Mainnet",
          nativeCurrency: {
            decimals: 18,
            name: "Islamic Coin",
            symbol: "ISLM",
          },
          rpcUrls: { default: { http: ["https://rpc.eth.haqq.network"] } },
          blockExplorers: {
            default: {
              name: "HAQQ Explorer",
              url: "https://explorer.haqq.network",
              apiUrl: "https://explorer.haqq.network/api",
            },
          },
        }),
        aS = (0, n.x)({
          id: 54211,
          name: "HAQQ Testedge 2",
          nativeCurrency: {
            decimals: 18,
            name: "Islamic Coin",
            symbol: "ISLMT",
          },
          rpcUrls: {
            default: { http: ["https://rpc.eth.testedge2.haqq.network"] },
          },
          blockExplorers: {
            default: {
              name: "HAQQ Explorer",
              url: "https://explorer.testedge2.haqq.network",
              apiUrl: "https://explorer.testedge2.haqq.network/api",
            },
          },
        }),
        aA = (0, n.x)({
          id: 31337,
          name: "Hardhat",
          nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
          rpcUrls: { default: { http: ["http://127.0.0.1:8545"] } },
        }),
        aU = (0, n.x)({
          id: 16666e5,
          name: "Harmony One",
          nativeCurrency: { name: "Harmony", symbol: "ONE", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://1666600000.rpc.thirdweb.com"] },
          },
          blockExplorers: {
            default: {
              name: "Harmony Explorer",
              url: "https://explorer.harmony.one",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0x1710b99,
            },
          },
        }),
        aB = (0, n.x)({
          id: 177,
          name: "HashKey Chain",
          nativeCurrency: {
            decimals: 18,
            name: "HashKey EcoPoints",
            symbol: "HSK",
          },
          rpcUrls: { default: { http: ["https://mainnet.hsk.xyz"] } },
          blockExplorers: {
            default: {
              name: "HashKey Chain Explorer",
              url: "https://hashkey.blockscout.com",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0,
            },
          },
        }),
        aM = (0, n.x)({
          id: 133,
          name: "HashKey Chain Testnet",
          nativeCurrency: {
            decimals: 18,
            name: "HashKey EcoPoints",
            symbol: "HSK",
          },
          rpcUrls: {
            default: { http: ["https://hashkeychain-testnet.alt.technology"] },
          },
          blockExplorers: {
            default: {
              name: "HashKey Chain Explorer",
              url: "https://hashkeychain-testnet-explorer.alt.technology",
            },
          },
          testnet: !0,
        }),
        aP = (0, n.x)({
          id: 0x5ad4eb13,
          name: "Haust Network Testnet",
          nativeCurrency: { decimals: 18, name: "HAUST", symbol: "HAUST" },
          rpcUrls: { default: { http: ["https://rpc-testnet.haust.app"] } },
          blockExplorers: {
            default: {
              name: "Haust Network Testnet Explorer",
              url: "https://explorer-testnet.haust.app",
            },
          },
          testnet: !0,
        }),
        aD = (0, n.x)({
          id: 295,
          name: "Hedera Mainnet",
          network: "hedera-mainnet",
          nativeCurrency: { symbol: "HBAR", name: "HBAR", decimals: 18 },
          rpcUrls: { default: { http: ["https://mainnet.hashio.io/api"] } },
          blockExplorers: {
            default: { name: "Hashscan", url: "https://hashscan.io/mainnet" },
          },
          testnet: !1,
        }),
        aF = (0, n.x)({
          id: 297,
          name: "Hedera Previewnet",
          network: "hedera-previewnet",
          nativeCurrency: { symbol: "HBAR", name: "HBAR", decimals: 18 },
          rpcUrls: { default: { http: ["https://previewnet.hashio.io/api"] } },
          blockExplorers: {
            default: {
              name: "Hashscan",
              url: "https://hashscan.io/previewnet",
            },
          },
          testnet: !0,
        }),
        aI = (0, n.x)({
          id: 296,
          name: "Hedera Testnet",
          network: "hedera-testnet",
          nativeCurrency: { symbol: "HBAR", name: "HBAR", decimals: 18 },
          rpcUrls: { default: { http: ["https://testnet.hashio.io/api"] } },
          blockExplorers: {
            default: { name: "Hashscan", url: "https://hashscan.io/testnet" },
          },
          testnet: !0,
        }),
        aO = (0, n.x)({
          id: 8668,
          name: "Hela Mainnet",
          nativeCurrency: { name: "HLUSD", symbol: "HLUSD", decimals: 18 },
          rpcUrls: { default: { http: ["https://mainnet-rpc.helachain.com"] } },
          blockExplorers: {
            default: {
              name: "Hela explorer",
              url: "https://mainnet-blockexplorer.helachain.com",
            },
          },
          testnet: !1,
        }),
        aR = (0, n.x)({
          id: 43111,
          name: "Hemi",
          network: "Hemi",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.hemi.network/rpc"] } },
          blockExplorers: {
            default: { name: "blockscout", url: "https://explorer.hemi.xyz" },
          },
          testnet: !1,
        }),
        aL = (0, n.x)({
          id: 743111,
          name: "Hemi Sepolia",
          network: "Hemi Sepolia",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://testnet.rpc.hemi.network/rpc"] },
          },
          blockExplorers: {
            default: {
              name: "Hemi Sepolia explorer",
              url: "https://testnet.explorer.hemi.xyz",
            },
          },
          testnet: !0,
        }),
        aN = (0, n.x)({
          id: 17e3,
          name: "Holesky",
          nativeCurrency: {
            name: "Holesky Ether",
            symbol: "ETH",
            decimals: 18,
          },
          rpcUrls: {
            default: { http: ["https://ethereum-holesky-rpc.publicnode.com"] },
          },
          blockExplorers: {
            default: {
              name: "Etherscan",
              url: "https://holesky.etherscan.io",
              apiUrl: "https://api-holesky.etherscan.io/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 77,
            },
            ensRegistry: {
              address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
              blockCreated: 801613,
            },
            ensUniversalResolver: {
              address: "0xa6AC935D4971E3CD133b950aE053bECD16fE7f3b",
              blockCreated: 973484,
            },
          },
          testnet: !0,
        }),
        az = (0, n.x)({
          id: 560048,
          name: "Hoodi",
          nativeCurrency: { name: "Hoodi Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.hoodi.ethpandaops.io"] } },
          blockExplorers: {
            default: { name: "Etherscan", url: "https://hoodi.etherscan.io" },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 2589,
            },
          },
          testnet: !0,
        }),
        aK = (0, n.x)({
          id: 269,
          name: "High Performance Blockchain",
          nativeCurrency: { name: "HPB", symbol: "HPB", decimals: 18 },
          rpcUrls: { default: { http: ["https://hpbnode.com"] } },
          blockExplorers: {
            default: { name: "hpbScan", url: "https://hscan.org" },
          },
          testnet: !1,
        }),
        aV = (0, n.x)({
          id: 12323,
          name: "Huddle01 dRTC Chain",
          nativeCurrency: { name: "Ethereum", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://huddle01.calderachain.xyz/http"],
              webSocket: ["wss://huddle01.calderachain.xyz/ws"],
            },
          },
          blockExplorers: {
            default: {
              name: "Huddle01 Caldera Explorer",
              url: "https://huddle01.calderaexplorer.xyz",
              apiUrl: "https://huddle01.calderaexplorer.xyz/api",
            },
          },
          sourceId: 42161,
        }),
        aH = (0, n.x)({
          id: 2524852,
          name: "Huddle01 dRTC Chain Testnet",
          nativeCurrency: { name: "Ethereum", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://huddle-testnet.rpc.caldera.xyz/http"],
              webSocket: ["wss://huddle-testnet.rpc.caldera.xyz/ws"],
            },
          },
          blockExplorers: {
            default: {
              name: "Huddle01 Caldera Explorer",
              url: "https://huddle-testnet.explorer.caldera.xyz",
              apiUrl: "https://huddle-testnet.explorer.caldera.xyz/api",
            },
          },
          sourceId: 421614,
        }),
        aj = (0, n.x)({
          id: 5234,
          name: "Humanode",
          nativeCurrency: { name: "HMND", symbol: "HMND", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://explorer-rpc-http.mainnet.stages.humanode.io"],
              webSocket: ["wss://explorer-rpc-ws.mainnet.stages.humanode.io"],
            },
          },
          blockExplorers: {
            default: { name: "Subscan", url: "https://humanode.subscan.io" },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 4413097,
            },
          },
        }),
        a_ = (0, n.x)({
          id: 14853,
          name: "Humanode Testnet 5",
          nativeCurrency: { name: "HMND", symbol: "HMND", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://explorer-rpc-http.testnet5.stages.humanode.io"],
              webSocket: ["wss://explorer-rpc-ws.testnet5.stages.humanode.io"],
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
            },
          },
        }),
        aG = (0, n.x)({
          id: 2911,
          name: "HYCHAIN",
          nativeCurrency: { name: "HYTOPIA", symbol: "TOPIA", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.hychain.com/http"] } },
          blockExplorers: {
            default: {
              name: "HYCHAIN Explorer",
              url: "https://explorer.hychain.com",
            },
          },
          testnet: !1,
        }),
        aW = (0, n.x)({
          id: 29112,
          name: "HYCHAIN Testnet",
          nativeCurrency: { name: "HYTOPIA", symbol: "TOPIA", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.hychain.com/http"] } },
          blockExplorers: {
            default: {
              name: "HYCHAIN Explorer",
              url: "https://testnet-rpc.hychain.com/http",
            },
          },
          testnet: !0,
        }),
        aq = (0, n.x)({
          id: 74,
          name: "IDChain Mainnet",
          nativeCurrency: { decimals: 18, name: "EIDI", symbol: "EIDI" },
          rpcUrls: {
            default: {
              http: ["https://idchain.one/rpc"],
              webSocket: ["wss://idchain.one/ws"],
            },
          },
          blockExplorers: {
            default: {
              name: "IDChain Explorer",
              url: "https://explorer.idchain.one",
            },
          },
          testnet: !1,
        }),
        a$ = (0, n.x)({
          id: 13371,
          name: "Immutable zkEVM",
          nativeCurrency: {
            decimals: 18,
            name: "Immutable Coin",
            symbol: "IMX",
          },
          rpcUrls: { default: { http: ["https://rpc.immutable.com"] } },
          blockExplorers: {
            default: {
              name: "Immutable Explorer",
              url: "https://explorer.immutable.com",
              apiUrl: "https://explorer.immutable.com/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0x236bdA4589e44e6850f5aC6a74BfCa398a86c6c0",
              blockCreated: 4335972,
            },
          },
        }),
        aX = (0, n.x)({
          id: 13473,
          name: "Immutable zkEVM Testnet",
          nativeCurrency: {
            decimals: 18,
            name: "Immutable Coin",
            symbol: "IMX",
          },
          rpcUrls: { default: { http: ["https://rpc.testnet.immutable.com"] } },
          blockExplorers: {
            default: {
              name: "Immutable Testnet Explorer",
              url: "https://explorer.testnet.immutable.com/",
            },
          },
          contracts: {
            multicall3: {
              address: "0x2CC787Ed364600B0222361C4188308Fa8E68bA60",
              blockCreated: 5977391,
            },
          },
          testnet: !0,
        }),
        aZ = (0, n.x)({
          id: 2525,
          name: "inEVM Mainnet",
          nativeCurrency: { decimals: 18, name: "Injective", symbol: "INJ" },
          rpcUrls: {
            default: { http: ["https://mainnet.rpc.inevm.com/http"] },
          },
          blockExplorers: {
            default: {
              name: "inEVM Explorer",
              url: "https://inevm.calderaexplorer.xyz",
              apiUrl: "https://inevm.calderaexplorer.xyz/api/v2",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 118606,
            },
          },
        }),
        aJ = (0, n.x)({
          id: 7233,
          name: "InitVerse Mainnet",
          nativeCurrency: { decimals: 18, name: "InitVerse", symbol: "INI" },
          rpcUrls: { default: { http: ["https://rpc-mainnet.inichain.com"] } },
          blockExplorers: {
            default: {
              name: "InitVerseScan",
              url: "https://www.iniscan.com",
              apiUrl: "https://explorer-api.inichain.com/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0x83466BE48A067115FFF91f7b892Ed1726d032e47",
              blockCreated: 2318,
            },
          },
        }),
        aY = (0, n.x)({
          id: 7234,
          name: "InitVerse Genesis Testnet",
          nativeCurrency: { decimals: 18, name: "InitVerse", symbol: "INI" },
          rpcUrls: { default: { http: ["https://rpc-testnet.inichain.com"] } },
          blockExplorers: {
            default: {
              name: "InitVerseGenesisScan",
              url: "https://genesis-testnet.iniscan.com",
              apiUrl: "https://explorer-testnet-api.inichain.com/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0x0cF32CBDd6c437331EA4f85ed2d881A5379B5a6F",
              blockCreated: 16361,
            },
          },
          testnet: !0,
        }),
        aQ = (0, n.x)({
          ...ei,
          id: 57073,
          name: "Ink",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: {
              http: [
                "https://rpc-gel.inkonchain.com",
                "https://rpc-qnd.inkonchain.com",
              ],
              webSocket: [
                "wss://rpc-gel.inkonchain.com",
                "wss://rpc-qnd.inkonchain.com",
              ],
            },
          },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://explorer.inkonchain.com",
              apiUrl: "https://explorer.inkonchain.com/api/v2",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 0,
            },
            ...ei.contracts,
            disputeGameFactory: {
              1: { address: "0x10d7b35078d3baabb96dd45a9143b94be65b12cd" },
            },
            portal: {
              1: { address: "0x5d66c1782664115999c47c9fa5cd031f495d3e4f" },
            },
            l1StandardBridge: {
              1: { address: "0x88ff1e5b602916615391f55854588efcbb7663f0" },
            },
          },
          testnet: !1,
          sourceId: 1,
        }),
        a0 = (0, n.x)({
          ...ei,
          id: 763373,
          name: "Ink Sepolia",
          nativeCurrency: {
            name: "Sepolia Ether",
            symbol: "ETH",
            decimals: 18,
          },
          rpcUrls: {
            default: { http: ["https://rpc-gel-sepolia.inkonchain.com"] },
          },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://explorer-sepolia.inkonchain.com/",
              apiUrl: "https://explorer-sepolia.inkonchain.com/api/v2",
            },
          },
          contracts: {
            ...ei.contracts,
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 0,
            },
            disputeGameFactory: {
              0xaa36a7: {
                address: "0x860e626c700af381133d9f4af31412a2d1db3d5d",
              },
            },
            portal: {
              0xaa36a7: {
                address: "0x5c1d29c6c9c8b0800692acc95d700bcb4966a1d7",
              },
            },
            l1StandardBridge: {
              0xaa36a7: {
                address: "0x33f60714bbd74d62b66d79213c348614de51901c",
              },
            },
          },
          testnet: !0,
          sourceId: 0xaa36a7,
        }),
        a1 = (0, n.x)({
          id: 8822,
          name: "IOTA EVM",
          network: "iotaevm",
          nativeCurrency: { decimals: 18, name: "IOTA", symbol: "IOTA" },
          rpcUrls: {
            default: {
              http: ["https://json-rpc.evm.iotaledger.net"],
              webSocket: ["wss://ws.json-rpc.evm.iotaledger.net"],
            },
          },
          blockExplorers: {
            default: {
              name: "Explorer",
              url: "https://explorer.evm.iota.org",
              apiUrl: "https://explorer.evm.iota.org/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 25022,
            },
          },
        }),
        a2 = (0, n.x)({
          id: 1075,
          name: "IOTA EVM Testnet",
          network: "iotaevm-testnet",
          nativeCurrency: { decimals: 18, name: "IOTA", symbol: "IOTA" },
          rpcUrls: {
            default: {
              http: ["https://json-rpc.evm.testnet.iotaledger.net"],
              webSocket: ["wss://ws.json-rpc.evm.testnet.iotaledger.net"],
            },
          },
          blockExplorers: {
            default: {
              name: "Explorer",
              url: "https://explorer.evm.testnet.iotaledger.net",
              apiUrl: "https://explorer.evm.testnet.iotaledger.net/api",
            },
          },
          testnet: !0,
        }),
        a3 = (0, n.x)({
          id: 4689,
          name: "IoTeX",
          nativeCurrency: { decimals: 18, name: "IoTeX", symbol: "IOTX" },
          rpcUrls: {
            default: {
              http: ["https://babel-api.mainnet.iotex.io"],
              webSocket: ["wss://babel-api.mainnet.iotex.io"],
            },
          },
          blockExplorers: {
            default: { name: "IoTeXScan", url: "https://iotexscan.io" },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 0x15230d6,
            },
          },
        }),
        a7 = (0, n.x)({
          id: 4690,
          name: "IoTeX Testnet",
          nativeCurrency: { decimals: 18, name: "IoTeX", symbol: "IOTX" },
          rpcUrls: {
            default: {
              http: ["https://babel-api.testnet.iotex.io"],
              webSocket: ["wss://babel-api.testnet.iotex.io"],
            },
          },
          blockExplorers: {
            default: { name: "IoTeXScan", url: "https://testnet.iotexscan.io" },
          },
          contracts: {
            multicall3: {
              address: "0xb5cecD6894c6f473Ec726A176f1512399A2e355d",
              blockCreated: 0x17383c8,
            },
          },
          testnet: !0,
        }),
        a6 = (0, n.x)({
          id: 8017,
          name: "iSunCoin Mainnet",
          nativeCurrency: { decimals: 18, name: "ISC", symbol: "ISC" },
          rpcUrls: { default: { http: ["https://mainnet.isuncoin.com"] } },
          blockExplorers: {
            default: {
              name: "iSunCoin Explorer",
              url: "https://baifa.io/app/chains/8017",
            },
          },
        }),
        a8 = (0, n.x)({
          id: 8899,
          name: "JIBCHAIN L1",
          network: "jbc",
          nativeCurrency: { name: "JBC", symbol: "JBC", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc-l1.jibchain.net"] } },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://exp-l1.jibchain.net",
              apiUrl: "https://exp-l1.jibchain.net/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xc0C8C486D1466C57Efe13C2bf000d4c56F47CBdC",
              blockCreated: 2299048,
            },
          },
          testnet: !1,
        }),
        a5 = (0, n.x)({
          id: 88991,
          name: "Jibchain Testnet",
          nativeCurrency: { name: "tJBC", symbol: "tJBC", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.testnet.jibchain.net"] } },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://exp.testnet.jibchain.net",
              apiUrl: "https://exp.testnet.jibchain.net/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xa1a858ad9041B4741e620355a3F96B3c78e70ecE",
              blockCreated: 32848,
            },
          },
          testnet: !0,
        }),
        a9 = (0, n.x)({
          id: 45003,
          name: "Juneo JUNE-Chain",
          nativeCurrency: { decimals: 18, name: "JUNE-Chain", symbol: "JUNE" },
          rpcUrls: {
            default: {
              http: ["https://rpc.juneo-mainnet.network/ext/bc/JUNE/rpc"],
            },
          },
          blockExplorers: {
            default: {
              name: "Juneo Scan",
              url: "https://juneoscan.io/chain/2",
              apiUrl: "https://juneoscan.io/chain/2/api",
            },
          },
        }),
        a4 = (0, n.x)({
          id: 45013,
          name: "Juneo BCH1-Chain",
          nativeCurrency: {
            decimals: 18,
            name: "Juneo BCH1-Chain",
            symbol: "BCH1",
          },
          rpcUrls: {
            default: {
              http: ["https://rpc.juneo-mainnet.network/ext/bc/BCH1/rpc"],
            },
          },
          blockExplorers: {
            default: {
              name: "Juneo Scan",
              url: "https://juneoscan.io/chain/12",
              apiUrl: "https://juneoscan.io/chain/12/api",
            },
          },
        }),
        ne = (0, n.x)({
          id: 45004,
          name: "Juneo DAI1-Chain",
          nativeCurrency: {
            decimals: 18,
            name: "Juneo DAI1-Chain",
            symbol: "DAI1",
          },
          rpcUrls: {
            default: {
              http: ["https://rpc.juneo-mainnet.network/ext/bc/DAI1/rpc"],
            },
          },
          blockExplorers: {
            default: {
              name: "Juneo Scan",
              url: "https://juneoscan.io/chain/5",
              apiUrl: "https://juneoscan.io/chain/5/api",
            },
          },
        }),
        nt = (0, n.x)({
          id: 45010,
          name: "Juneo DOGE1-Chain",
          nativeCurrency: {
            decimals: 18,
            name: "Juneo DOGE1-Chain",
            symbol: "DOGE1",
          },
          rpcUrls: {
            default: {
              http: ["https://rpc.juneo-mainnet.network/ext/bc/DOGE1/rpc"],
            },
          },
          blockExplorers: {
            default: {
              name: "Juneo Scan",
              url: "https://juneoscan.io/chain/10",
              apiUrl: "https://juneoscan.io/chain/10/api",
            },
          },
        }),
        nr = (0, n.x)({
          id: 45011,
          name: "Juneo EUR1-Chain",
          nativeCurrency: {
            decimals: 18,
            name: "Juneo EUR1-Chain",
            symbol: "EUR1",
          },
          rpcUrls: {
            default: {
              http: ["https://rpc.juneo-mainnet.network/ext/bc/EUR1/rpc"],
            },
          },
          blockExplorers: {
            default: {
              name: "Juneo Scan",
              url: "https://juneoscan.io/chain/6",
              apiUrl: "https://juneoscan.io/chain/6/api",
            },
          },
        }),
        na = (0, n.x)({
          id: 45008,
          name: "Juneo GLD1-Chain",
          nativeCurrency: {
            decimals: 18,
            name: "Juneo GLD1-Chain",
            symbol: "GLD1",
          },
          rpcUrls: {
            default: {
              http: ["https://rpc.juneo-mainnet.network/ext/bc/GLD1/rpc"],
            },
          },
          blockExplorers: {
            default: {
              name: "Juneo Scan",
              url: "https://juneoscan.io/chain/8",
              apiUrl: "https://juneoscan.io/chain/8/api",
            },
          },
        }),
        nn = (0, n.x)({
          id: 45014,
          name: "Juneo LINK1-Chain",
          nativeCurrency: {
            decimals: 18,
            name: "Juneo LINK1-Chain",
            symbol: "LINK1",
          },
          rpcUrls: {
            default: {
              http: ["https://rpc.juneo-mainnet.network/ext/bc/LINK1/rpc"],
            },
          },
          blockExplorers: {
            default: {
              name: "Juneo Scan",
              url: "https://juneoscan.io/chain/13",
              apiUrl: "https://juneoscan.io/chain/13/api",
            },
          },
        }),
        ns = (0, n.x)({
          id: 45009,
          name: "Juneo LTC1-Chain",
          nativeCurrency: {
            decimals: 18,
            name: "Juneo LTC1-Chain",
            symbol: "LTC1",
          },
          rpcUrls: {
            default: {
              http: ["https://rpc.juneo-mainnet.network/ext/bc/LTC1/rpc"],
            },
          },
          blockExplorers: {
            default: {
              name: "Juneo Scan",
              url: "https://juneoscan.io/chain/11",
              apiUrl: "https://juneoscan.io/chain/11/api",
            },
          },
        }),
        no = (0, n.x)({
          id: 45007,
          name: "Juneo mBTC1-Chain",
          nativeCurrency: {
            decimals: 18,
            name: "Juneo mBTC1-Chain",
            symbol: "mBTC1",
          },
          rpcUrls: {
            default: {
              http: ["https://rpc.juneo-mainnet.network/ext/bc/mBTC1/rpc"],
            },
          },
          blockExplorers: {
            default: {
              name: "Juneo Scan",
              url: "https://juneoscan.io/chain/9",
              apiUrl: "https://juneoscan.io/chain/9/api",
            },
          },
        }),
        ni = (0, n.x)({
          id: 45012,
          name: "Juneo SGD1-Chain",
          nativeCurrency: {
            decimals: 18,
            name: "Juneo SGD1-Chain",
            symbol: "SGD1",
          },
          rpcUrls: {
            default: {
              http: ["https://rpc.juneo-mainnet.network/ext/bc/SGD1/rpc"],
            },
          },
          blockExplorers: {
            default: {
              name: "Juneo Scan",
              url: "https://juneoscan.io/chain/7",
              apiUrl: "https://juneoscan.io/chain/7/api",
            },
          },
        }),
        nl = (0, n.x)({
          id: 101003,
          name: "Socotra JUNE-Chain",
          nativeCurrency: {
            decimals: 18,
            name: "Socotra JUNE-Chain",
            symbol: "JUNE",
          },
          rpcUrls: {
            default: {
              http: ["https://rpc.socotra-testnet.network/ext/bc/JUNE/rpc"],
            },
          },
          blockExplorers: {
            default: {
              name: "Juneo Scan",
              url: "https://socotra.juneoscan.io/chain/2",
              apiUrl: "https://socotra.juneoscan.io/chain/2/api",
            },
          },
          testnet: !0,
        }),
        nc = (0, n.x)({
          id: 45006,
          name: "Juneo USD1-Chain",
          nativeCurrency: {
            decimals: 18,
            name: "Juneo USD1-Chain",
            symbol: "USD1",
          },
          rpcUrls: {
            default: {
              http: ["https://rpc.juneo-mainnet.network/ext/bc/USD1/rpc"],
            },
          },
          blockExplorers: {
            default: {
              name: "Juneo Scan",
              url: "https://juneoscan.io/chain/4",
              apiUrl: "https://juneoscan.io/chain/4/api",
            },
          },
        }),
        nd = (0, n.x)({
          id: 45005,
          name: "Juneo USDT1-Chain",
          nativeCurrency: {
            decimals: 18,
            name: "Juneo USDT1-Chain",
            symbol: "USDT1",
          },
          rpcUrls: {
            default: {
              http: ["https://rpc.juneo-mainnet.network/ext/bc/USDT1/rpc"],
            },
          },
          blockExplorers: {
            default: {
              name: "Juneo Scan",
              url: "https://juneoscan.io/chain/3",
              apiUrl: "https://juneoscan.io/chain/3/api",
            },
          },
        }),
        nu = (0, n.x)({
          id: 686,
          name: "Karura",
          network: "karura",
          nativeCurrency: { name: "Karura", symbol: "KAR", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://eth-rpc-karura.aca-api.network"],
              webSocket: ["wss://eth-rpc-karura.aca-api.network"],
            },
          },
          blockExplorers: {
            default: {
              name: "Karura Blockscout",
              url: "https://blockscout.karura.network",
              apiUrl: "https://blockscout.karura.network/api",
            },
          },
          testnet: !1,
        }),
        np = (0, n.x)({
          id: 0x6b6b7274,
          name: "Kakarot Sepolia",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://sepolia-rpc.kakarot.org"] } },
          blockExplorers: {
            default: {
              name: "Kakarot Scan",
              url: "https://sepolia.kakarotscan.org",
            },
          },
          testnet: !0,
        }),
        nh = (0, n.x)({
          id: 0x34550b76e4065,
          name: "Kakarot Starknet Sepolia",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://sepolia-rpc.kakarot.org"] } },
          blockExplorers: {
            default: {
              name: "Kakarot Scan",
              url: "https://sepolia.kakarotscan.org",
            },
          },
          testnet: !0,
        }),
        nm = (0, n.x)({
          id: 24,
          name: "KardiaChain Mainnet",
          nativeCurrency: { name: "KAI", symbol: "KAI", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.kardiachain.io"] } },
          blockExplorers: {
            default: {
              name: "KardiaChain Explorer",
              url: "https://explorer.kardiachain.io",
            },
          },
          testnet: !1,
        }),
        nf = (0, n.x)({
          id: 2222,
          name: "Kava EVM",
          network: "kava-mainnet",
          nativeCurrency: { name: "Kava", symbol: "KAVA", decimals: 18 },
          rpcUrls: { default: { http: ["https://evm.kava.io"] } },
          blockExplorers: {
            default: {
              name: "Kava EVM Explorer",
              url: "https://kavascan.com",
              apiUrl: "https://kavascan.com/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 3661165,
            },
          },
          testnet: !1,
        }),
        nb = (0, n.x)({
          id: 2221,
          name: "Kava EVM Testnet",
          network: "kava-testnet",
          nativeCurrency: { name: "Kava", symbol: "KAVA", decimals: 18 },
          rpcUrls: { default: { http: ["https://evm.testnet.kava.io"] } },
          blockExplorers: {
            default: {
              name: "Kava EVM Testnet Explorer",
              url: "https://testnet.kavascan.com/",
              apiUrl: "https://testnet.kavascan.com/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xDf1D724A7166261eEB015418fe8c7679BBEa7fd6",
              blockCreated: 7242179,
            },
          },
          testnet: !0,
        }),
        ny = (0, n.x)({
          id: 321,
          name: "KCC Mainnet",
          network: "KCC Mainnet",
          nativeCurrency: { decimals: 18, name: "KCS", symbol: "KCS" },
          rpcUrls: { default: { http: ["https://kcc-rpc.com"] } },
          blockExplorers: {
            default: { name: "KCC Explorer", url: "https://explorer.kcc.io" },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0xb3732e,
            },
          },
          testnet: !1,
        }),
        nx = (0, n.x)({
          id: 7887,
          name: "Kinto Mainnet",
          network: "Kinto Mainnet",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.kinto.xyz/http"] } },
          blockExplorers: {
            default: {
              name: "Kinto Explorer",
              url: "https://explorer.kinto.xyz",
            },
          },
          testnet: !1,
        }),
        nv = (0, n.x)({
          id: 8217,
          name: "Klaytn",
          nativeCurrency: { decimals: 18, name: "Klaytn", symbol: "KLAY" },
          rpcUrls: {
            default: { http: ["https://public-en-cypress.klaytn.net"] },
          },
          blockExplorers: {
            default: { name: "KlaytnScope", url: "https://scope.klaytn.com" },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 0x5b8e16f,
            },
          },
        }),
        ng = (0, n.x)({
          id: 8217,
          name: "Kaia",
          nativeCurrency: { decimals: 18, name: "Kaia", symbol: "KAIA" },
          rpcUrls: { default: { http: ["https://public-en.node.kaia.io"] } },
          blockExplorers: {
            default: {
              name: "KaiaScan",
              url: "https://kaiascan.io",
              apiUrl: "https://api-cypress.klaytnscope.com/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 0x5b8e16f,
            },
          },
        }),
        nE = (0, n.x)({
          id: 1001,
          name: "Kairos Testnet",
          network: "kairos",
          nativeCurrency: { decimals: 18, name: "Kairos KAIA", symbol: "KAIA" },
          rpcUrls: {
            default: { http: ["https://public-en-kairos.node.kaia.io"] },
          },
          blockExplorers: {
            default: { name: "KaiaScan", url: "https://kairos.kaiascan.io" },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 0x75aca81,
            },
          },
          testnet: !0,
        }),
        nk = (0, n.x)({
          id: 1001,
          name: "Klaytn Baobab Testnet",
          network: "klaytn-baobab",
          nativeCurrency: {
            decimals: 18,
            name: "Baobab Klaytn",
            symbol: "KLAY",
          },
          rpcUrls: {
            default: { http: ["https://public-en-baobab.klaytn.net"] },
          },
          blockExplorers: {
            default: {
              name: "KlaytnScope",
              url: "https://baobab.klaytnscope.com",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 0x75aca81,
            },
          },
          testnet: !0,
        }),
        nC = (0, n.x)({
          id: 701,
          name: "Koi Network",
          nativeCurrency: {
            decimals: 18,
            name: "Koi Network Native Token",
            symbol: "KRING",
          },
          rpcUrls: {
            default: {
              http: ["https://koi-rpc.darwinia.network"],
              webSocket: ["wss://koi-rpc.darwinia.network"],
            },
          },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://koi-scan.darwinia.network",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 180001,
            },
          },
          testnet: !0,
        }),
        nw = (0, n.x)({
          id: 255,
          name: "Kroma",
          nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://api.kroma.network"] } },
          blockExplorers: {
            default: {
              name: "Kroma Explorer",
              url: "https://blockscout.kroma.network",
              apiUrl: "https://blockscout.kroma.network/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 0xf4fa54,
            },
          },
          testnet: !1,
        }),
        nT = (0, n.x)({
          id: 2358,
          name: "Kroma Sepolia",
          nativeCurrency: {
            name: "Sepolia Ether",
            symbol: "ETH",
            decimals: 18,
          },
          rpcUrls: { default: { http: ["https://api.sepolia.kroma.network"] } },
          blockExplorers: {
            default: {
              name: "Kroma Sepolia Explorer",
              url: "https://blockscout.sepolia.kroma.network",
              apiUrl: "https://blockscout.sepolia.kroma.network/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 8900914,
            },
          },
          testnet: !0,
        }),
        nS = (0, n.x)({
          id: 12324,
          name: "L3X Protocol",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://rpc-mainnet.l3x.com"],
              webSocket: ["wss://rpc-mainnet.l3x.com"],
            },
          },
          blockExplorers: {
            default: {
              name: "L3X Mainnet Explorer",
              url: "https://explorer.l3x.com",
              apiUrl: "https://explorer.l3x.com/api/v2",
            },
          },
          testnet: !1,
        }),
        nA = (0, n.x)({
          id: 12325,
          name: "L3X Protocol Testnet",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://rpc-testnet.l3x.com"],
              webSocket: ["wss://rpc-testnet.l3x.com"],
            },
          },
          blockExplorers: {
            default: {
              name: "L3X Testnet Explorer",
              url: "https://explorer-testnet.l3x.com",
              apiUrl: "https://explorer-testnet.l3x.com/api/v2",
            },
          },
          testnet: !0,
        }),
        nU = (0, n.x)({
          id: 360890,
          name: "LAVITA Mainnet",
          nativeCurrency: { name: "vTFUEL", symbol: "vTFUEL", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://tsub360890-eth-rpc.thetatoken.org/rpc"],
            },
          },
          blockExplorers: {
            default: {
              name: "LAVITA Explorer",
              url: "https://tsub360890-explorer.thetatoken.org",
            },
          },
          testnet: !1,
        }),
        nB = (0, n.x)({
          id: 232,
          name: "Lens",
          nativeCurrency: { name: "GHO", symbol: "GHO", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.lens.xyz"] } },
          blockExplorers: {
            default: {
              name: "Lens Block Explorer",
              url: "https://explorer.lens.xyz",
              apiUrl: "https://explorer.lens.xyz/api",
            },
          },
        }),
        nM = (0, n.x)({
          id: 37111,
          name: "Lens Testnet",
          nativeCurrency: { name: "GRASS", symbol: "GRASS", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://rpc.testnet.lens.dev"],
              webSocket: ["wss://rpc.testnet.lens.dev/ws"],
            },
          },
          blockExplorers: {
            default: {
              name: "Lens Block Explorer",
              url: "https://block-explorer.testnet.lens.dev",
              apiUrl: "https://block-explorer-api.staging.lens.dev/api",
            },
          },
          testnet: !0,
        }),
        nP = (0, n.x)({
          id: 21363,
          name: "Lestnet",
          nativeCurrency: {
            name: "Lestnet Ether",
            symbol: "LETH",
            decimals: 18,
          },
          rpcUrls: { default: { http: ["https://service.lestnet.org"] } },
          blockExplorers: {
            default: {
              name: "Lestnet Explorer",
              url: "https://explore.lestnet.org",
            },
          },
          testnet: !0,
        }),
        nD = (0, n.x)({
          id: 1891,
          name: "LightLink Pegasus Testnet",
          network: "lightlink-pegasus",
          nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
          rpcUrls: {
            default: {
              http: ["https://replicator.pegasus.lightlink.io/rpc/v1"],
            },
          },
          blockExplorers: {
            default: {
              name: "LightLink Pegasus Explorer",
              url: "https://pegasus.lightlink.io",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0x794be34,
            },
          },
          testnet: !0,
        }),
        nF = (0, n.x)({
          id: 1890,
          name: "LightLink Phoenix Mainnet",
          network: "lightlink-phoenix",
          nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
          rpcUrls: {
            default: {
              http: ["https://replicator.phoenix.lightlink.io/rpc/v1"],
            },
          },
          blockExplorers: {
            default: {
              name: "LightLink Phoenix Explorer",
              url: "https://phoenix.lightlink.io",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0x77af730,
            },
          },
          testnet: !1,
        });
      var nI = r(98722),
        nO = r(66734),
        nR = r(14303),
        nL = r(24058),
        nN = r(41953);
      async function nz(e, t) {
        let { account: r = e.account } = t;
        if (!r) throw new nO.T();
        let a = (0, nI.J)(r);
        try {
          let {
              accessList: r,
              blockNumber: n,
              blockTag: s,
              data: o,
              gas: i,
              gasPrice: c,
              maxFeePerGas: d,
              maxPriorityFeePerGas: u,
              nonce: p,
              to: m,
              value: f,
              ...b
            } = t,
            y = (n ? (0, l.cK)(n) : void 0) || s;
          (0, nN.c)(t);
          let x = e.chain?.formatters?.transactionRequest?.format,
            v = (x || h.Bv)({
              ...(0, nL.o)(b, { format: x }),
              from: a?.address,
              accessList: r,
              data: o,
              gas: i,
              gasPrice: c,
              maxFeePerGas: d,
              maxPriorityFeePerGas: u,
              nonce: p,
              to: m,
              value: f,
            }),
            {
              baseFeePerGas: g,
              gasLimit: E,
              priorityFeePerGas: k,
            } = await e.request({
              method: "linea_estimateGas",
              params: y ? [v, y] : [v],
            });
          return {
            baseFeePerGas: BigInt(g),
            gasLimit: BigInt(E),
            priorityFeePerGas: BigInt(k),
          };
        } catch (r) {
          throw (0, nR.d)(r, { ...t, account: a, chain: e.chain });
        }
      }
      let nK = {
        fees: {
          estimateFeesPerGas: nV,
          async maxPriorityFeePerGas({ block: e, client: t, request: r }) {
            let a = await nV({
              block: e,
              client: t,
              multiply: (e) => e,
              request: r,
              type: "eip1559",
            });
            return a?.maxPriorityFeePerGas ? a.maxPriorityFeePerGas : null;
          },
        },
      };
      async function nV({ client: e, multiply: t, request: r, type: a }) {
        try {
          let n = await nz(e, { ...r, account: r?.account }),
            { priorityFeePerGas: s } = n,
            o = t(BigInt(n.baseFeePerGas)) + s;
          if ("legacy" === a) return { gasPrice: o };
          return { maxFeePerGas: o, maxPriorityFeePerGas: s };
        } catch {
          return null;
        }
      }
      let nH = (0, n.x)({
          ...nK,
          id: 59144,
          name: "Linea Mainnet",
          nativeCurrency: { name: "Linea Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://rpc.linea.build"],
              webSocket: ["wss://rpc.linea.build"],
            },
          },
          blockExplorers: {
            default: {
              name: "Etherscan",
              url: "https://lineascan.build",
              apiUrl: "https://api.lineascan.build/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 42,
            },
            ensRegistry: {
              address: "0x50130b669B28C339991d8676FA73CF122a121267",
              blockCreated: 6682888,
            },
            ensUniversalResolver: {
              address: "0x3aA974fb3f8C1E02796048BDCdeD79e9D53a6965",
              blockCreated: 6683e3,
            },
          },
          ensTlds: [".linea.eth"],
          testnet: !1,
        }),
        nj = (0, n.x)({
          id: 59140,
          name: "Linea Goerli Testnet",
          nativeCurrency: { name: "Linea Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://rpc.goerli.linea.build"],
              webSocket: ["wss://rpc.goerli.linea.build"],
            },
          },
          blockExplorers: {
            default: {
              name: "Etherscan",
              url: "https://goerli.lineascan.build",
              apiUrl: "https://api-goerli.lineascan.build/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 498623,
            },
          },
          testnet: !0,
        }),
        n_ = (0, n.x)({
          ...nK,
          id: 59141,
          name: "Linea Sepolia Testnet",
          nativeCurrency: { name: "Linea Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://rpc.sepolia.linea.build"],
              webSocket: ["wss://rpc.sepolia.linea.build"],
            },
          },
          blockExplorers: {
            default: {
              name: "Etherscan",
              url: "https://sepolia.lineascan.build",
              apiUrl: "https://api-sepolia.lineascan.build/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 227427,
            },
            ensRegistry: {
              address: "0x5B2636F0f2137B4aE722C01dd5122D7d3e9541f7",
              blockCreated: 2395094,
            },
            ensUniversalResolver: {
              address: "0x72560a31B3DAEE82B984a7F51c6b3b1bb7CC9F50",
              blockCreated: 2395255,
            },
          },
          ensTlds: [".linea.eth"],
          testnet: !0,
        }),
        nG = (0, n.x)({
          id: 59140,
          name: "Linea Goerli Testnet",
          nativeCurrency: { name: "Linea Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://rpc.goerli.linea.build"],
              webSocket: ["wss://rpc.goerli.linea.build"],
            },
          },
          blockExplorers: {
            default: {
              name: "Etherscan",
              url: "https://goerli.lineascan.build",
              apiUrl: "https://goerli.lineascan.build/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 498623,
            },
          },
          testnet: !0,
        }),
        nW = (0, n.x)({
          ...ei,
          id: 1135,
          name: "Lisk",
          network: "lisk",
          nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
          rpcUrls: { default: { http: ["https://rpc.api.lisk.com"] } },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://blockscout.lisk.com",
              apiUrl: "https://blockscout.lisk.com/api",
            },
          },
          contracts: {
            ...ei.contracts,
            multicall3: {
              address: "0xA9d71E1dd7ca26F26e656E66d6AA81ed7f745bf0",
            },
            l2OutputOracle: {
              1: { address: "0x113cB99283AF242Da0A0C54347667edF531Aa7d6" },
            },
            portal: {
              1: { address: "0x26dB93F8b8b4f7016240af62F7730979d353f9A7" },
            },
            l1StandardBridge: {
              1: { address: "0x2658723Bf70c7667De6B25F99fcce13A16D25d08" },
            },
          },
          sourceId: 1,
        }),
        nq = (0, n.x)({
          ...ei,
          id: 4202,
          network: "lisk-sepolia",
          name: "Lisk Sepolia",
          nativeCurrency: {
            name: "Sepolia Ether",
            symbol: "ETH",
            decimals: 18,
          },
          rpcUrls: { default: { http: ["https://rpc.sepolia-api.lisk.com"] } },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://sepolia-blockscout.lisk.com",
              apiUrl: "https://sepolia-blockscout.lisk.com/api",
            },
          },
          contracts: {
            ...ei.contracts,
            l2OutputOracle: {
              0xaa36a7: {
                address: "0xA0E35F56C318DE1bD5D9ca6A94Fe7e37C5663348",
              },
            },
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
            },
            portal: {
              0xaa36a7: {
                address: "0xe3d90F21490686Ec7eF37BE788E02dfC12787264",
              },
            },
            l1StandardBridge: {
              0xaa36a7: {
                address: "0x1Fb30e446eA791cd1f011675E5F3f5311b70faF5",
              },
            },
          },
          testnet: !0,
          sourceId: 0xaa36a7,
        }),
        n$ = (0, n.x)({
          id: 1337,
          name: "Localhost",
          nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
          rpcUrls: { default: { http: ["http://127.0.0.1:8545"] } },
        }),
        nX = (0, n.x)({
          id: 15551,
          name: "LoopNetwork Mainnet",
          nativeCurrency: { name: "LOOP", symbol: "LOOP", decimals: 18 },
          rpcUrls: { default: { http: ["https://api.mainnetloop.com"] } },
          blockExplorers: {
            default: {
              name: "LoopNetwork Blockchain Explorer",
              url: "https://explorer.mainnetloop.com/",
            },
          },
          testnet: !1,
        }),
        nZ = (0, n.x)({
          id: 42,
          network: "lukso",
          name: "LUKSO",
          nativeCurrency: { name: "LUKSO", symbol: "LYX", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://rpc.mainnet.lukso.network"],
              webSocket: ["wss://ws-rpc.mainnet.lukso.network"],
            },
          },
          blockExplorers: {
            default: {
              name: "LUKSO Mainnet Explorer",
              url: "https://explorer.execution.mainnet.lukso.network",
              apiUrl:
                "https://api.explorer.execution.mainnet.lukso.network/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 468183,
            },
          },
        }),
        nJ = (0, n.x)({
          id: 4201,
          name: "LUKSO Testnet",
          nativeCurrency: {
            decimals: 18,
            name: "LUKSO Testnet",
            symbol: "LYXt",
          },
          rpcUrls: {
            default: {
              http: ["https://rpc.testnet.lukso.network"],
              webSocket: ["wss://ws-rpc.testnet.lukso.network"],
            },
          },
          blockExplorers: {
            default: {
              name: "LUKSO Testnet Explorer",
              url: "https://explorer.execution.testnet.lukso.network",
              apiUrl:
                "https://api.explorer.execution.testnet.lukso.network/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 605348,
            },
          },
          testnet: !0,
        }),
        nY = (0, n.x)({
          id: 0x3b4c8eb9,
          name: "Lumia Mainnet",
          network: "LumiaMainnet",
          nativeCurrency: { name: "Lumia", symbol: "LUMIA", decimals: 18 },
          rpcUrls: { default: { http: ["https://mainnet-rpc.lumia.org"] } },
          blockExplorers: {
            default: {
              name: "Lumia Explorer",
              url: "https://explorer.lumia.org/",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 3975939,
            },
          },
          testnet: !1,
        }),
        nQ = (0, n.x)({
          id: 0x7467cbf8,
          name: "Lumia Testnet",
          network: "LumiaTestnet",
          nativeCurrency: { name: "Lumia", symbol: "LUMIA", decimals: 18 },
          rpcUrls: { default: { http: ["https://testnet-rpc.lumia.org"] } },
          blockExplorers: {
            default: {
              name: "Lumia Testnet Explorer",
              url: "https://testnet-explorer.lumia.org/",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 2235063,
            },
          },
          testnet: !0,
        }),
        n0 = (0, n.x)({
          id: 96370,
          name: "Lumoz",
          nativeCurrency: { decimals: 18, name: "Lumoz Token", symbol: "MOZ" },
          rpcUrls: { default: { http: ["https://rpc.lumoz.org"] } },
          blockExplorers: {
            default: { name: "Lumoz Scan", url: "https://scan.lumoz.info" },
          },
          testnet: !1,
        }),
        n1 = (0, n.x)({
          id: 105363,
          name: "Lumoz Testnet",
          nativeCurrency: {
            decimals: 18,
            name: "Lumoz Testnet Token",
            symbol: "MOZ",
          },
          rpcUrls: { default: { http: ["https://testnet-rpc.lumoz.org"] } },
          testnet: !0,
        }),
        n2 = (0, n.x)({
          id: 721,
          name: "Lycan",
          nativeCurrency: { decimals: 18, name: "Lycan", symbol: "LYC" },
          rpcUrls: {
            default: {
              http: [
                "https://rpc.lycanchain.com",
                "https://us-east.lycanchain.com",
                "https://us-west.lycanchain.com",
                "https://eu-north.lycanchain.com",
                "https://eu-west.lycanchain.com",
                "https://asia-southeast.lycanchain.com",
              ],
              webSocket: [
                "wss://rpc.lycanchain.com",
                "wss://us-east.lycanchain.com",
                "wss://us-west.lycanchain.com",
                "wss://eu-north.lycanchain.com",
                "wss://eu-west.lycanchain.com",
                "wss://asia-southeast.lycanchain.com",
              ],
            },
          },
          blockExplorers: {
            default: {
              name: "Lycan Explorer",
              url: "https://explorer.lycanchain.com",
            },
          },
        }),
        n3 = (0, n.x)({
          id: 957,
          name: "Lyra Chain",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.lyra.finance"] } },
          blockExplorers: {
            default: {
              name: "Lyra Explorer",
              url: "https://explorer.lyra.finance",
              apiUrl: "https://explorer.lyra.finance/api/v2",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 1935198,
            },
          },
        });
      var n7 = r(74325);
      let n6 = (0, n.x)({
          id: 595,
          name: "Mandala TC9",
          network: "mandala",
          nativeCurrency: { name: "Mandala", symbol: "mACA", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://eth-rpc-tc9.aca-staging.network"],
              webSocket: ["wss://eth-rpc-tc9.aca-staging.network"],
            },
          },
          blockExplorers: {
            default: {
              name: "Mandala Blockscout",
              url: "https://blockscout.mandala.aca-staging.network",
              apiUrl: "https://blockscout.mandala.aca-staging.network/api",
            },
          },
          testnet: !0,
        }),
        n8 = (0, n.x)({
          id: 169,
          name: "Manta Pacific Mainnet",
          network: "manta",
          nativeCurrency: { decimals: 18, name: "ETH", symbol: "ETH" },
          rpcUrls: {
            default: { http: ["https://pacific-rpc.manta.network/http"] },
          },
          blockExplorers: {
            default: {
              name: "Manta Explorer",
              url: "https://pacific-explorer.manta.network",
              apiUrl: "https://pacific-explorer.manta.network/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 332890,
            },
          },
        }),
        n5 = (0, n.x)({
          id: 3441006,
          name: "Manta Pacific Sepolia Testnet",
          network: "manta-sepolia",
          nativeCurrency: { decimals: 18, name: "ETH", symbol: "ETH" },
          rpcUrls: {
            default: {
              http: ["https://pacific-rpc.sepolia-testnet.manta.network/http"],
            },
          },
          blockExplorers: {
            default: {
              name: "Manta Sepolia Testnet Explorer",
              url: "https://pacific-explorer.sepolia-testnet.manta.network",
              apiUrl:
                "https://pacific-explorer.sepolia-testnet.manta.network/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca54918f7B525C8df894668846506767412b53E3",
              blockCreated: 479584,
            },
          },
          testnet: !0,
        }),
        n9 = (0, n.x)({
          id: 3441005,
          name: "Manta Pacific Testnet",
          network: "manta-testnet",
          nativeCurrency: { decimals: 18, name: "ETH", symbol: "ETH" },
          rpcUrls: {
            default: { http: ["https://manta-testnet.calderachain.xyz/http"] },
          },
          blockExplorers: {
            default: {
              name: "Manta Testnet Explorer",
              url: "https://pacific-explorer.testnet.manta.network",
              apiUrl: "https://pacific-explorer.testnet.manta.network/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0x211B1643b95Fe76f11eD8880EE810ABD9A4cf56C",
              blockCreated: 419915,
            },
          },
          testnet: !0,
        }),
        n4 = (0, n.x)({
          id: 5e3,
          name: "Mantle",
          nativeCurrency: { decimals: 18, name: "MNT", symbol: "MNT" },
          rpcUrls: { default: { http: ["https://rpc.mantle.xyz"] } },
          blockExplorers: {
            default: {
              name: "Mantle Explorer",
              url: "https://mantlescan.xyz/",
              apiUrl: "https://api.mantlescan.xyz/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 304717,
            },
          },
        }),
        se = (0, n.x)({
          id: 5003,
          name: "Mantle Sepolia Testnet",
          nativeCurrency: { decimals: 18, name: "MNT", symbol: "MNT" },
          rpcUrls: { default: { http: ["https://rpc.sepolia.mantle.xyz"] } },
          blockExplorers: {
            default: {
              name: "Mantle Testnet Explorer",
              url: "https://explorer.sepolia.mantle.xyz/",
              apiUrl: "https://explorer.sepolia.mantle.xyz/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 4584012,
            },
          },
          testnet: !0,
        }),
        st = (0, n.x)({
          id: 5001,
          name: "Mantle Testnet",
          nativeCurrency: { decimals: 18, name: "MNT", symbol: "MNT" },
          rpcUrls: { default: { http: ["https://rpc.testnet.mantle.xyz"] } },
          blockExplorers: {
            default: {
              name: "Mantle Testnet Explorer",
              url: "https://explorer.testnet.mantle.xyz",
              apiUrl: "https://explorer.testnet.mantle.xyz/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 561333,
            },
          },
          testnet: !0,
        }),
        sr = (0, n.x)({
          id: 22776,
          name: "MAP Protocol",
          nativeCurrency: { decimals: 18, name: "MAPO", symbol: "MAPO" },
          rpcUrls: { default: { http: ["https://rpc.maplabs.io"] } },
          blockExplorers: {
            default: { name: "MAPO Scan", url: "https://maposcan.io" },
          },
          testnet: !1,
        }),
        sa = (0, n.x)({
          id: 698,
          name: "Matchain",
          nativeCurrency: { name: "BNB", symbol: "BNB", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.matchain.io"] } },
          blockExplorers: {
            default: { name: "Matchain Scan", url: "https://matchscan.io" },
          },
        }),
        sn = (0, n.x)({
          id: 699,
          name: "Matchain Testnet",
          nativeCurrency: { name: "BNB", symbol: "BNB", decimals: 18 },
          rpcUrls: { default: { http: ["https://testnet-rpc.matchain.io"] } },
          blockExplorers: {
            default: {
              name: "Matchain Scan",
              url: "https://testnet.matchscan.io",
            },
          },
          testnet: !0,
        }),
        ss = (0, n.x)({
          id: 29548,
          name: "MCH Verse",
          nativeCurrency: { name: "Oasys", symbol: "OAS", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://rpc.oasys.mycryptoheroes.net"] },
          },
          blockExplorers: {
            default: {
              name: "MCH Verse Explorer",
              url: "https://explorer.oasys.mycryptoheroes.net",
              apiUrl: "https://explorer.oasys.mycryptoheroes.net/api",
            },
          },
          testnet: !1,
        }),
        so = (0, n.x)({
          id: 6342,
          name: "MegaETH Testnet",
          nativeCurrency: {
            name: "MegaETH Testnet Ether",
            symbol: "ETH",
            decimals: 18,
          },
          rpcUrls: {
            default: {
              http: ["https://carrot.megaeth.com/rpc"],
              webSocket: ["wss://carrot.megaeth.com/ws"],
            },
          },
          blockExplorers: {
            default: {
              name: "MegaETH Testnet Explorer",
              url: "https://www.megaexplorer.xyz/",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
            },
          },
          testnet: !0,
        }),
        si = (0, n.x)({
          id: 0x1a5ee289c,
          name: "Mekong Pectra Devnet",
          nativeCurrency: { name: "eth", symbol: "eth", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.mekong.ethpandaops.io"] } },
          blockExplorers: {
            default: {
              name: "Block Explorer",
              url: "https://explorer.mekong.ethpandaops.io",
            },
          },
          testnet: !0,
        }),
        sl = (0, n.x)({
          id: 0x13d92e8d,
          name: "Meld",
          nativeCurrency: { decimals: 18, name: "Meld", symbol: "MELD" },
          rpcUrls: { default: { http: ["https://rpc-1.meld.com"] } },
          blockExplorers: {
            default: { name: "MELDscan", url: "https://meldscan.io" },
          },
          contracts: {
            multicall3: {
              address: "0x769ee5a8e82c15c1b6e358f62ac8eb6e3abe8dc5",
              blockCreated: 360069,
            },
          },
        }),
        sc = (0, n.x)({
          id: 4352,
          name: "MemeCore",
          nativeCurrency: { decimals: 18, name: "M", symbol: "M" },
          rpcUrls: {
            default: {
              http: ["https://rpc.memecore.net"],
              webSocket: ["wss://ws.memecore.net"],
            },
          },
          blockExplorers: {
            default: {
              name: "MemeCore Explorer",
              url: "https://memecorescan.io",
              apiUrl: "https://api.memecorescan.io/api",
            },
            okx: {
              name: "MemeCore Explorer",
              url: "https://web3.okx.com/explorer/memecore",
            },
            memecore: {
              name: "MemeCore Explorer",
              url: "https://blockscout.memecore.com",
              apiUrl: "https://blockscout.memecore.com/api",
            },
          },
        }),
        sd = (0, n.x)({
          id: 4200,
          name: "Merlin",
          nativeCurrency: { name: "BTC", symbol: "BTC", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.merlinchain.io"] } },
          blockExplorers: {
            default: {
              name: "blockscout",
              url: "https://scan.merlinchain.io",
              apiUrl: "https://scan.merlinchain.io/api",
            },
          },
        }),
        su = (0, n.x)({
          id: 4203,
          name: "Merlin Erigon Testnet",
          nativeCurrency: { name: "BTC", symbol: "BTC", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://testnet-erigon-rpc.merlinchain.io"] },
          },
          blockExplorers: {
            default: {
              name: "blockscout",
              url: "https://testnet-erigon-scan.merlinchain.io",
              apiUrl: "https://testnet-erigon-scan.merlinchain.io/api",
            },
          },
          testnet: !0,
        }),
        sp = (0, n.x)({
          id: 571,
          name: "MetaChain Mainnet",
          nativeCurrency: {
            name: "Metatime Coin",
            symbol: "MTC",
            decimals: 18,
          },
          rpcUrls: { default: { http: ["https://rpc.metatime.com"] } },
          blockExplorers: {
            default: {
              name: "MetaExplorer",
              url: "https://explorer.metatime.com",
            },
          },
          contracts: {
            multicall3: {
              address: "0x0000000000000000000000000000000000003001",
              blockCreated: 0,
            },
          },
        }),
        sh = (0, n.x)({
          id: 1453,
          name: "MetaChain Istanbul",
          nativeCurrency: {
            name: "Metatime Coin",
            symbol: "MTC",
            decimals: 18,
          },
          rpcUrls: {
            default: { http: ["https://istanbul-rpc.metachain.dev"] },
          },
          blockExplorers: {
            default: {
              name: "MetaExplorer",
              url: "https://istanbul-explorer.metachain.dev",
            },
          },
          contracts: {
            multicall3: {
              address: "0x0000000000000000000000000000000000003001",
              blockCreated: 0,
            },
          },
          testnet: !0,
        }),
        sm = (0, n.x)({
          id: 11,
          name: "Metadium Network",
          nativeCurrency: { decimals: 18, name: "META", symbol: "META" },
          rpcUrls: { default: { http: ["https://api.metadium.com/prod"] } },
          blockExplorers: {
            default: {
              name: "Metadium Explorer",
              url: "https://explorer.metadium.com",
            },
          },
          testnet: !1,
        }),
        sf = (0, n.x)({
          ...ei,
          id: 1750,
          name: "Metal L2",
          nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
          rpcUrls: {
            default: {
              http: ["https://rpc.metall2.com"],
              webSocket: ["wss://rpc.metall2.com"],
            },
          },
          blockExplorers: {
            default: {
              name: "Explorer",
              url: "https://explorer.metall2.com",
              apiUrl: "https://explorer.metall2.com/api",
            },
          },
          contracts: {
            ...ei.contracts,
            l2OutputOracle: {
              1: { address: "0x3B1F7aDa0Fcc26B13515af752Dd07fB1CAc11426" },
            },
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 0,
            },
            portal: {
              1: { address: "0x3F37aBdE2C6b5B2ed6F8045787Df1ED1E3753956" },
            },
            l1StandardBridge: {
              1: { address: "0x6d0f65D59b55B0FEC5d2d15365154DcADC140BF3" },
            },
          },
          sourceId: 1,
        }),
        sb = (0, n.x)({
          id: 82,
          name: "Meter",
          nativeCurrency: { decimals: 18, name: "MTR", symbol: "MTR" },
          rpcUrls: { default: { http: ["https://rpc.meter.io"] } },
          blockExplorers: {
            default: { name: "MeterScan", url: "https://scan.meter.io" },
          },
        }),
        sy = (0, n.x)({
          id: 83,
          name: "Meter Testnet",
          nativeCurrency: { decimals: 18, name: "MTR", symbol: "MTR" },
          rpcUrls: { default: { http: ["https://rpctest.meter.io"] } },
          blockExplorers: {
            default: {
              name: "MeterTestnetScan",
              url: "https://scan-warringstakes.meter.io",
            },
          },
        }),
        sx = (0, n.x)({
          id: 1088,
          name: "Metis",
          nativeCurrency: { decimals: 18, name: "Metis", symbol: "METIS" },
          rpcUrls: {
            default: {
              http: [
                "https://metis.rpc.hypersync.xyz",
                "https://metis-pokt.nodies.app",
                "https://api.blockeden.xyz/metis/67nCBdZQSH9z3YqDDjdm",
                "https://metis-andromeda.rpc.thirdweb.com",
                "https://metis-andromeda.gateway.tenderly.co",
                "https://metis.api.onfinality.io/public",
                "https://andromeda.metis.io/?owner=1088",
                "https://metis-mainnet.public.blastapi.io",
              ],
              webSocket: [
                "wss://metis-rpc.publicnode.com",
                "wss://metis.drpc.org",
              ],
            },
          },
          blockExplorers: {
            default: {
              name: "Metis Explorer",
              url: "https://explorer.metis.io",
              apiUrl:
                "https://api.routescan.io/v2/network/mainnet/evm/1088/etherscan/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 2338552,
            },
          },
        }),
        sv = (0, n.x)({
          id: 59902,
          name: "Metis Sepolia",
          nativeCurrency: {
            decimals: 18,
            name: "Test Metis",
            symbol: "tMETIS",
          },
          rpcUrls: {
            default: {
              http: [
                "https://sepolia.metisdevops.link",
                "https://metis-sepolia-rpc.publicnode.com",
                "https://metis-sepolia.gateway.tenderly.co",
              ],
              webSocket: ["wss://metis-sepolia-rpc.publicnode.com"],
            },
          },
          blockExplorers: {
            default: {
              name: "Metis Sepolia Explorer",
              url: "https://sepolia-explorer.metisdevops.link",
              apiUrl: "https://sepolia-explorer.metisdevops.link/api-docs",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 224185,
            },
          },
        }),
        sg = (0, n.x)({
          id: 599,
          name: "Metis Goerli",
          nativeCurrency: {
            decimals: 18,
            name: "Metis Goerli",
            symbol: "METIS",
          },
          rpcUrls: {
            default: { http: ["https://goerli.gateway.metisdevops.link"] },
          },
          blockExplorers: {
            default: {
              name: "Metis Goerli Explorer",
              url: "https://goerli.explorer.metisdevops.link",
              apiUrl: "https://goerli.explorer.metisdevops.link/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 1006207,
            },
          },
        }),
        sE = (0, n.x)({
          id: 7518,
          name: "MEVerse Chain Mainnet",
          nativeCurrency: { decimals: 18, name: "MEVerse", symbol: "MEV" },
          rpcUrls: { default: { http: ["https://rpc.meversemainnet.io"] } },
          blockExplorers: {
            default: { name: "Explorer", url: "https://www.meversescan.io" },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0x52db43c,
            },
          },
        }),
        sk = (0, n.x)({
          id: 4759,
          name: "MEVerse Chain Testnet",
          nativeCurrency: { decimals: 18, name: "MEVerse", symbol: "MEV" },
          rpcUrls: { default: { http: ["https://rpc.meversetestnet.io"] } },
          blockExplorers: {
            default: {
              name: "Explorer",
              url: "https://testnet.meversescan.io/",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0x3d639ab,
            },
          },
          testnet: !0,
        }),
        sC = (0, n.x)({
          id: 185,
          name: "Mint Mainnet",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.mintchain.io"] } },
          blockExplorers: {
            default: {
              name: "Mintchain explorer",
              url: "https://explorer.mintchain.io",
            },
          },
          testnet: !1,
        }),
        sw = (0, n.x)({
          id: 1686,
          name: "Mint Sepolia Testnet",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://testnet-rpc.mintchain.io"] } },
          blockExplorers: {
            default: {
              name: "Mintchain Testnet explorer",
              url: "https://testnet-explorer.mintchain.io",
            },
          },
          testnet: !0,
        }),
        sT = (0, n.x)({
          id: 124832,
          name: "Mitosis Testnet",
          nativeCurrency: { name: "MITO", symbol: "MITO", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.testnet.mitosis.org"] } },
          blockExplorers: {
            default: {
              name: "Mitosis testnet explorer",
              url: "https://testnet.mitosiscan.xyz",
            },
          },
          testnet: !0,
        }),
        sS = (0, n.x)({
          ...ei,
          id: 34443,
          name: "Mode Mainnet",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://mainnet.mode.network"] } },
          blockExplorers: {
            default: { name: "Modescan", url: "https://modescan.io" },
          },
          contracts: {
            ...ei.contracts,
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 2465882,
            },
            l2OutputOracle: {
              1: { address: "0x4317ba146D4933D889518a3e5E11Fe7a53199b04" },
            },
            portal: {
              1: { address: "0x8B34b14c7c7123459Cf3076b8Cb929BE097d0C07" },
            },
            l1StandardBridge: {
              1: { address: "0x735aDBbE72226BD52e818E7181953f42E3b0FF21" },
            },
          },
          sourceId: 1,
        }),
        sA = (0, n.x)({
          ...ei,
          id: 919,
          name: "Mode Testnet",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://sepolia.mode.network"] } },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://sepolia.explorer.mode.network",
              apiUrl: "https://sepolia.explorer.mode.network/api",
            },
          },
          contracts: {
            ...ei.contracts,
            l2OutputOracle: {
              0xaa36a7: {
                address: "0x2634BD65ba27AB63811c74A63118ACb312701Bfa",
                blockCreated: 3778393,
              },
            },
            portal: {
              0xaa36a7: {
                address: "0x320e1580effF37E008F1C92700d1eBa47c1B23fD",
                blockCreated: 3778395,
              },
            },
            l1StandardBridge: {
              0xaa36a7: {
                address: "0xbC5C679879B2965296756CD959C3C739769995E2",
                blockCreated: 3778392,
              },
            },
            multicall3: {
              address: "0xBAba8373113Fb7a68f195deF18732e01aF8eDfCF",
              blockCreated: 3019007,
            },
          },
          testnet: !0,
          sourceId: 0xaa36a7,
        }),
        sU = (0, n.x)({
          id: 10143,
          name: "Monad Testnet",
          nativeCurrency: {
            name: "Testnet MON Token",
            symbol: "MON",
            decimals: 18,
          },
          rpcUrls: { default: { http: ["https://testnet-rpc.monad.xyz"] } },
          blockExplorers: {
            default: {
              name: "Monad Testnet explorer",
              url: "https://testnet.monadexplorer.com",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 251449,
            },
          },
          testnet: !0,
        }),
        sB = (0, n.x)({
          id: 1287,
          name: "Moonbase Alpha",
          nativeCurrency: { decimals: 18, name: "DEV", symbol: "DEV" },
          rpcUrls: {
            default: {
              http: ["https://rpc.api.moonbase.moonbeam.network"],
              webSocket: ["wss://wss.api.moonbase.moonbeam.network"],
            },
          },
          blockExplorers: {
            default: {
              name: "Moonscan",
              url: "https://moonbase.moonscan.io",
              apiUrl: "https://moonbase.moonscan.io/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 1850686,
            },
          },
          testnet: !0,
        }),
        sM = (0, n.x)({
          id: 1284,
          name: "Moonbeam",
          nativeCurrency: { decimals: 18, name: "GLMR", symbol: "GLMR" },
          rpcUrls: {
            default: {
              http: ["https://moonbeam.public.blastapi.io"],
              webSocket: ["wss://moonbeam.public.blastapi.io"],
            },
          },
          blockExplorers: {
            default: {
              name: "Moonscan",
              url: "https://moonscan.io",
              apiUrl: "https://api-moonbeam.moonscan.io/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 609002,
            },
          },
          testnet: !1,
        }),
        sP = (0, n.x)({
          id: 1281,
          name: "Moonbeam Development Node",
          nativeCurrency: { decimals: 18, name: "DEV", symbol: "DEV" },
          rpcUrls: {
            default: {
              http: ["http://127.0.0.1:9944"],
              webSocket: ["wss://127.0.0.1:9944"],
            },
          },
        }),
        sD = (0, n.x)({
          id: 1285,
          name: "Moonriver",
          nativeCurrency: { decimals: 18, name: "MOVR", symbol: "MOVR" },
          rpcUrls: {
            default: {
              http: ["https://moonriver.public.blastapi.io"],
              webSocket: ["wss://moonriver.public.blastapi.io"],
            },
          },
          blockExplorers: {
            default: {
              name: "Moonscan",
              url: "https://moonriver.moonscan.io",
              apiUrl: "https://api-moonriver.moonscan.io/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 1597904,
            },
          },
          testnet: !1,
        }),
        sF = (0, n.x)({
          id: 2818,
          name: "Morph",
          nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
          rpcUrls: {
            default: {
              http: ["https://rpc.morphl2.io"],
              webSocket: ["wss://rpc.morphl2.io:8443"],
            },
          },
          blockExplorers: {
            default: {
              name: "Morph Explorer",
              url: "https://explorer.morphl2.io",
            },
          },
          testnet: !1,
        }),
        sI = (0, n.x)({
          id: 2810,
          name: "Morph Holesky",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://rpc-quicknode-holesky.morphl2.io"],
              webSocket: ["wss://rpc-quicknode-holesky.morphl2.io"],
            },
          },
          blockExplorers: {
            default: {
              name: "Morph Holesky Explorer",
              url: "https://explorer-holesky.morphl2.io",
              apiUrl: "https://explorer-api-holesky.morphl2.io/api?",
            },
          },
          testnet: !0,
        }),
        sO = (0, n.x)({
          id: 2710,
          name: "Morph Sepolia",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc-testnet.morphl2.io"] } },
          blockExplorers: {
            default: {
              name: "Morph Testnet Explorer",
              url: "https://explorer-testnet.morphl2.io",
              apiUrl: "https://explorer-api-testnet.morphl2.io/api",
            },
          },
          testnet: !0,
        }),
        sR = (0, n.x)({
          id: 5551,
          name: "Nahmii 2 Mainnet",
          nativeCurrency: { decimals: 18, name: "ETH", symbol: "ETH" },
          rpcUrls: { default: { http: ["https://l2.nahmii.io"] } },
          blockExplorers: {
            default: {
              name: "Nahmii 2 Explorer",
              url: "https://explorer.n2.nahmii.io",
            },
          },
          testnet: !1,
        }),
        sL = (0, n.x)({
          id: 22222,
          name: "Nautilus Mainnet",
          nativeCurrency: { name: "ZBC", symbol: "ZBC", decimals: 9 },
          rpcUrls: {
            default: { http: ["https://api.nautilus.nautchain.xyz"] },
          },
          blockExplorers: {
            default: { name: "NautScan", url: "https://nautscan.com" },
          },
        }),
        sN = (0, n.x)({
          id: 397,
          name: "NEAR Protocol",
          nativeCurrency: { decimals: 18, name: "NEAR", symbol: "NEAR" },
          rpcUrls: { default: { http: ["https://eth-rpc.mainnet.near.org"] } },
          blockExplorers: {
            default: {
              name: "NEAR Explorer",
              url: "https://eth-explorer.near.org",
            },
          },
          testnet: !1,
        }),
        sz = (0, n.x)({
          id: 398,
          name: "NEAR Protocol Testnet",
          nativeCurrency: { decimals: 18, name: "NEAR", symbol: "NEAR" },
          rpcUrls: { default: { http: ["https://eth-rpc.testnet.near.org"] } },
          blockExplorers: {
            default: {
              name: "NEAR Explorer",
              url: "https://eth-explorer-testnet.near.org",
            },
          },
          testnet: !0,
        }),
        sK = (0, n.x)({
          id: 0xe9ac0ce,
          name: "Neon EVM DevNet",
          nativeCurrency: { name: "NEON", symbol: "NEON", decimals: 18 },
          rpcUrls: { default: { http: ["https://devnet.neonevm.org"] } },
          blockExplorers: {
            default: { name: "Neonscan", url: "https://devnet.neonscan.org" },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0xc3b3260,
            },
          },
          testnet: !0,
        }),
        sV = (0, n.x)({
          id: 0xe9ac0d6,
          network: "neonMainnet",
          name: "Neon EVM MainNet",
          nativeCurrency: { name: "NEON", symbol: "NEON", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://neon-proxy-mainnet.solana.p2p.org"] },
          },
          blockExplorers: {
            default: { name: "Neonscan", url: "https://neonscan.org" },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0xc4fa274,
            },
          },
          testnet: !1,
        }),
        sH = (0, n.x)({
          id: 47763,
          name: "Neo X Mainnet",
          nativeCurrency: { name: "Gas", symbol: "GAS", decimals: 18 },
          rpcUrls: {
            default: {
              http: [
                "https://mainnet-1.rpc.banelabs.org",
                "https://mainnet-2.rpc.banelabs.org",
              ],
            },
          },
          blockExplorers: {
            default: {
              name: "Neo X - Explorer",
              url: "https://xexplorer.neo.org",
            },
          },
          testnet: !1,
        }),
        sj = (0, n.x)({
          id: 0xba9304,
          name: "Neo X Testnet T4",
          nativeCurrency: { name: "Gas", symbol: "GAS", decimals: 18 },
          rpcUrls: { default: { http: ["https://testnet.rpc.banelabs.org/"] } },
          blockExplorers: {
            default: { name: "neox-scan", url: "https://xt4scan.ngd.network" },
          },
          testnet: !0,
        }),
        s_ = (0, n.x)({
          id: 1012,
          name: "Newton",
          nativeCurrency: { name: "Newton", symbol: "NEW", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://global.rpc.mainnet.newtonproject.org"] },
          },
          blockExplorers: {
            default: {
              name: "NewFi explorer",
              url: "https://explorer.newtonproject.org/",
            },
          },
          testnet: !1,
        }),
        sG = (0, n.x)({
          id: 4242,
          name: "Nexi",
          nativeCurrency: { name: "Nexi", symbol: "NEXI", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.chain.nexi.technology"] } },
          blockExplorers: {
            default: {
              name: "NexiScan",
              url: "https://www.nexiscan.com",
              apiUrl: "https://www.nexiscan.com/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0x0277A46Cc69A57eE3A6C8c158bA874832F718B8E",
              blockCreated: 0x18938b0,
            },
          },
        }),
        sW = (0, n.x)({
          id: 240,
          name: "Nexilix Smart Chain",
          nativeCurrency: { decimals: 18, name: "Nexilix", symbol: "NEXILIX" },
          rpcUrls: { default: { http: ["https://rpcurl.pos.nexilix.com"] } },
          blockExplorers: {
            default: { name: "NexilixScan", url: "https://scan.nexilix.com" },
          },
          contracts: {
            multicall3: {
              address: "0x58381c8e2BF9d0C2C4259cA14BdA9Afe02831244",
              blockCreated: 74448,
            },
          },
        }),
        sq = (0, n.x)({
          id: 6900,
          name: "Nibiru",
          nativeCurrency: { decimals: 18, name: "NIBI", symbol: "NIBI" },
          rpcUrls: { default: { http: ["https://evm-rpc.nibiru.fi"] } },
          blockExplorers: {
            default: { name: "NibiScan", url: "https://nibiscan.io" },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 0x12ae1f5,
            },
          },
        }),
        s$ = (0, n.x)({
          id: 4090,
          network: "oasis-testnet",
          name: "Oasis Testnet",
          nativeCurrency: { name: "Fasttoken", symbol: "FTN", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://rpc1.oasis.bahamutchain.com"] },
          },
          blockExplorers: {
            default: {
              name: "Ftnscan",
              url: "https://oasis.ftnscan.com",
              apiUrl: "https://oasis.ftnscan.com/api",
            },
          },
          testnet: !0,
        }),
        sX = (0, n.x)({
          id: 248,
          name: "Oasys",
          nativeCurrency: { name: "Oasys", symbol: "OAS", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.mainnet.oasys.games"] } },
          blockExplorers: {
            default: {
              name: "OasysScan",
              url: "https://scan.oasys.games",
              apiUrl: "https://scan.oasys.games/api",
            },
          },
        }),
        sZ = (0, n.x)({
          id: 911867,
          name: "Odyssey Testnet",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://odyssey.ithaca.xyz"] } },
          blockExplorers: {
            default: {
              name: "Odyssey Explorer",
              url: "https://odyssey-explorer.ithaca.xyz",
              apiUrl: "https://odyssey-explorer.ithaca.xyz/api",
            },
          },
          testnet: !0,
        }),
        sJ = (0, n.x)({
          id: 66,
          name: "OKC",
          nativeCurrency: { decimals: 18, name: "OKT", symbol: "OKT" },
          rpcUrls: { default: { http: ["https://exchainrpc.okex.org"] } },
          blockExplorers: {
            default: { name: "oklink", url: "https://www.oklink.com/okc" },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0x9e2778,
            },
          },
        }),
        sY = (0, n.x)({
          id: 311,
          name: "Omax Mainnet",
          nativeCurrency: { decimals: 18, name: "OMAX", symbol: "OMAX" },
          rpcUrls: { default: { http: ["https://mainapi.omaxray.com"] } },
          blockExplorers: {
            default: { name: "Omax Explorer", url: "https://omaxscan.com" },
          },
          testnet: !1,
        }),
        sQ = (0, n.x)({
          id: 309075,
          name: "One World Chain Mainnet",
          nativeCurrency: { decimals: 18, name: "OWCT", symbol: "OWCT" },
          rpcUrls: {
            default: { http: ["https://mainnet-rpc.oneworldchain.org"] },
          },
          blockExplorers: {
            default: {
              name: "One World Explorer",
              url: "https://mainnet.oneworldchain.org",
            },
          },
          testnet: !1,
        }),
        s0 = (0, n.x)({
          id: 9700,
          name: "OORT MainnetDev",
          nativeCurrency: { decimals: 18, name: "OORT", symbol: "OORT" },
          rpcUrls: { default: { http: ["https://dev-rpc.oortech.com"] } },
          blockExplorers: {
            default: {
              name: "OORT MainnetDev Explorer",
              url: "https://dev-scan.oortech.com",
            },
          },
        }),
        s1 = (0, n.x)({
          id: 204,
          name: "opBNB",
          nativeCurrency: { name: "BNB", symbol: "BNB", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://opbnb-mainnet-rpc.bnbchain.org"] },
          },
          blockExplorers: {
            default: {
              name: "opBNB (BSCScan)",
              url: "https://opbnb.bscscan.com",
              apiUrl: "https://api-opbnb.bscscan.com/api",
            },
          },
          contracts: {
            ...ei.contracts,
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 512881,
            },
            l2OutputOracle: {
              56: { address: "0x153CAB79f4767E2ff862C94aa49573294B13D169" },
            },
            portal: {
              56: { address: "0x1876EA7702C0ad0C6A2ae6036DE7733edfBca519" },
            },
            l1StandardBridge: {
              56: { address: "0xF05F0e4362859c3331Cb9395CBC201E3Fa6757Ea" },
            },
          },
          sourceId: 56,
        }),
        s2 = (0, n.x)({
          id: 5611,
          name: "opBNB Testnet",
          nativeCurrency: { decimals: 18, name: "tBNB", symbol: "tBNB" },
          rpcUrls: {
            default: { http: ["https://opbnb-testnet-rpc.bnbchain.org"] },
          },
          blockExplorers: {
            default: {
              name: "opbnbscan",
              url: "https://testnet.opbnbscan.com",
            },
          },
          contracts: {
            ...ei.contracts,
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 3705108,
            },
            l2OutputOracle: {
              97: { address: "0xFf2394Bb843012562f4349C6632a0EcB92fC8810" },
            },
            portal: {
              97: { address: "0x4386C8ABf2009aC0c263462Da568DD9d46e52a31" },
            },
            l1StandardBridge: {
              97: { address: "0x677311Fd2cCc511Bbc0f581E8d9a07B033D5E840" },
            },
          },
          testnet: !0,
          sourceId: 97,
        }),
        s3 = (0, n.x)({
          ...ei,
          id: 10,
          name: "OP Mainnet",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://mainnet.optimism.io"] } },
          blockExplorers: {
            default: {
              name: "Optimism Explorer",
              url: "https://optimistic.etherscan.io",
              apiUrl: "https://api-optimistic.etherscan.io/api",
            },
          },
          contracts: {
            ...ei.contracts,
            disputeGameFactory: {
              1: { address: "0xe5965Ab5962eDc7477C8520243A95517CD252fA9" },
            },
            l2OutputOracle: {
              1: { address: "0xdfe97868233d1aa22e815a266982f2cf17685a27" },
            },
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 4286263,
            },
            portal: {
              1: { address: "0xbEb5Fc579115071764c7423A4f12eDde41f106Ed" },
            },
            l1StandardBridge: {
              1: { address: "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1" },
            },
          },
          sourceId: 1,
        }),
        s7 = (0, n.x)({
          ...ei,
          id: 420,
          name: "Optimism Goerli",
          nativeCurrency: { name: "Goerli Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://goerli.optimism.io"] } },
          blockExplorers: {
            default: {
              name: "Etherscan",
              url: "https://goerli-optimism.etherscan.io",
              apiUrl: "https://goerli-optimism.etherscan.io/api",
            },
          },
          contracts: {
            ...ei.contracts,
            l2OutputOracle: {
              5: { address: "0xE6Dfba0953616Bacab0c9A8ecb3a9BBa77FC15c0" },
            },
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 49461,
            },
            portal: {
              5: { address: "0x5b47E1A08Ea6d985D6649300584e6722Ec4B1383" },
            },
            l1StandardBridge: {
              5: { address: "0x636Af16bf2f682dD3109e60102b8E1A089FedAa8" },
            },
          },
          testnet: !0,
          sourceId: 5,
        }),
        s6 = (0, n.x)({
          ...ei,
          id: 0xaa37dc,
          name: "OP Sepolia",
          nativeCurrency: {
            name: "Sepolia Ether",
            symbol: "ETH",
            decimals: 18,
          },
          rpcUrls: { default: { http: ["https://sepolia.optimism.io"] } },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://optimism-sepolia.blockscout.com",
              apiUrl: "https://optimism-sepolia.blockscout.com/api",
            },
          },
          contracts: {
            ...ei.contracts,
            disputeGameFactory: {
              0xaa36a7: {
                address: "0x05F9613aDB30026FFd634f38e5C4dFd30a197Fa1",
              },
            },
            l2OutputOracle: {
              0xaa36a7: {
                address: "0x90E9c4f8a994a250F6aEfd61CAFb4F2e895D458F",
              },
            },
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 1620204,
            },
            portal: {
              0xaa36a7: {
                address: "0x16Fc5058F25648194471939df75CF27A2fdC48BC",
              },
            },
            l1StandardBridge: {
              0xaa36a7: {
                address: "0xFBb0621E0B23b5478B630BD55a5f21f67730B0F1",
              },
            },
          },
          testnet: !0,
          sourceId: 0xaa36a7,
        }),
        s8 = (0, n.x)({
          id: 62050,
          name: "Optopia",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc-mainnet.optopia.ai"] } },
          blockExplorers: {
            default: {
              name: "Optopia Explorer",
              url: "https://scan.optopia.ai",
            },
          },
          testnet: !1,
        }),
        s5 = (0, n.x)({
          id: 62049,
          name: "Optopia Testnet",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc-testnet.optopia.ai"] } },
          blockExplorers: {
            default: {
              name: "Optopia Explorer",
              url: "https://scan-testnet.optopia.ai",
            },
          },
          testnet: !0,
        }),
        s9 = (0, n.x)({
          id: 291,
          name: "Orderly",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.orderly.network"] } },
          blockExplorers: {
            default: {
              name: "Orderly Explorer",
              url: "https://explorer.orderly.network",
            },
          },
          testnet: !1,
        }),
        s4 = (0, n.x)({
          id: 4460,
          name: "Orderly Sepolia",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: {
              http: [
                "https://l2-orderly-l2-4460-sepolia-8tc3sd7dvy.t.conduit.xyz",
              ],
            },
          },
          blockExplorers: {
            default: {
              name: "Orderly Explorer",
              url: "https://explorerl2new-orderly-l2-4460-sepolia-8tc3sd7dvy.t.conduit.xyz",
            },
          },
          testnet: !0,
        }),
        oe = (0, n.x)({
          id: 0x273cf32,
          name: "Otim Devnet",
          nativeCurrency: { decimals: 18, name: "ETH", symbol: "ETH" },
          rpcUrls: { default: { http: ["http://devnet.otim.xyz"] } },
          contracts: {
            batchInvoker: {
              address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
            },
          },
        }),
        ot = (0, n.x)({
          id: 0x2a15c308d,
          name: "Palm",
          nativeCurrency: { decimals: 18, name: "PALM", symbol: "PALM" },
          rpcUrls: {
            default: {
              http: ["https://palm-mainnet.public.blastapi.io"],
              webSocket: ["wss://palm-mainnet.public.blastapi.io"],
            },
          },
          blockExplorers: {
            default: { name: "Chainlens", url: "https://palm.chainlens.com" },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0xeb6e80,
            },
          },
        }),
        or = (0, n.x)({
          id: 0x2a15c3083,
          name: "Palm Testnet",
          nativeCurrency: { decimals: 18, name: "PALM", symbol: "PALM" },
          rpcUrls: {
            default: {
              http: ["https://palm-mainnet.public.blastapi.io"],
              webSocket: ["wss://palm-mainnet.public.blastapi.io"],
            },
          },
          blockExplorers: {
            default: { name: "Chainlens", url: "https://palm.chainlens.com" },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0xeb6e80,
            },
          },
          testnet: !0,
        }),
        oa = (0, n.x)({
          id: 3338,
          name: "Peaq",
          nativeCurrency: { decimals: 18, name: "peaq", symbol: "PEAQ" },
          rpcUrls: {
            default: {
              http: [
                "https://peaq-rpc.publicnode.com",
                "https://peaq.api.onfinality.io/public",
                "https://peaq-rpc.dwellir.com",
                "https://evm.peaq.network",
              ],
              webSocket: [
                "wss://peaq-rpc.publicnode.com",
                "wss://peaq.api.onfinality.io/public",
                "wss://peaq-rpc.dwellir.com",
              ],
            },
          },
          blockExplorers: {
            default: { name: "Subscan", url: "https://peaq.subscan.io" },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 3566354,
            },
          },
        }),
        on = (0, n.x)({
          id: 424,
          network: "pgn",
          name: "PGN",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.publicgoods.network"] } },
          blockExplorers: {
            default: {
              name: "PGN Explorer",
              url: "https://explorer.publicgoods.network",
              apiUrl: "https://explorer.publicgoods.network/api",
            },
          },
          contracts: {
            l2OutputOracle: {
              1: { address: "0x9E6204F750cD866b299594e2aC9eA824E2e5f95c" },
            },
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 3380209,
            },
            portal: {
              1: { address: "0xb26Fd985c5959bBB382BAFdD0b879E149e48116c" },
            },
            l1StandardBridge: {
              1: { address: "0xD0204B9527C1bA7bD765Fa5CCD9355d38338272b" },
            },
          },
          formatters: es,
          sourceId: 1,
        }),
        os = (0, n.x)({
          id: 58008,
          network: "pgn-testnet",
          name: "PGN ",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://sepolia.publicgoods.network"] },
          },
          blockExplorers: {
            default: {
              name: "PGN Testnet Explorer",
              url: "https://explorer.sepolia.publicgoods.network",
              apiUrl: "https://explorer.sepolia.publicgoods.network/api",
            },
          },
          contracts: {
            l2OutputOracle: {
              0xaa36a7: {
                address: "0xD5bAc3152ffC25318F848B3DD5dA6C85171BaEEe",
              },
            },
            portal: {
              0xaa36a7: {
                address: "0xF04BdD5353Bb0EFF6CA60CfcC78594278eBfE179",
              },
            },
            l1StandardBridge: {
              0xaa36a7: {
                address: "0xFaE6abCAF30D23e233AC7faF747F2fC3a5a6Bfa3",
              },
            },
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 3754925,
            },
          },
          formatters: es,
          sourceId: 0xaa36a7,
          testnet: !0,
        }),
        oo = (0, n.x)({
          id: 13381,
          name: "Phoenix Blockchain",
          nativeCurrency: { name: "Phoenix", symbol: "PHX", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.phoenixplorer.com"] } },
          blockExplorers: {
            default: {
              name: "Phoenixplorer",
              url: "https://phoenixplorer.com",
              apiUrl: "https://phoenixplorer.com/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0x498cF757a575cFF2c2Ed9f532f56Efa797f86442",
              blockCreated: 5620192,
            },
          },
        }),
        oi = (0, n.x)({
          id: 7070,
          name: "Planq Mainnet",
          nativeCurrency: { decimals: 18, name: "PLQ", symbol: "PLQ" },
          rpcUrls: {
            default: {
              http: [
                "https://planq-rpc.nodies.app",
                "https://evm-rpc.planq.network",
                "https://jsonrpc.planq.nodestake.top",
              ],
            },
          },
          blockExplorers: {
            default: {
              name: "Planq Explorer",
              url: "https://evm.planq.network",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 8470015,
            },
          },
          testnet: !1,
        }),
        ol = (0, n.x)({
          ...q,
          id: 1612127,
          name: "PlayFi Albireo Testnet",
          network: "albireo",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://albireo-rpc.playfi.ai"],
              webSocket: ["wss://albireo-rpc-ws.playfi.ai/ws"],
            },
          },
          blockExplorers: {
            default: {
              name: "PlayFi Albireo Explorer",
              url: "https://albireo-explorer.playfi.ai",
            },
          },
          contracts: {
            multicall3: {
              address: "0xF9cda624FBC7e059355ce98a31693d299FACd963",
            },
          },
          testnet: !0,
        }),
        oc = (0, n.x)({
          id: 242,
          name: "Plinga",
          nativeCurrency: { name: "Plinga", symbol: "PLINGA", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://rpcurl.mainnet.plgchain.com"] },
          },
          blockExplorers: {
            default: { name: "Plgscan", url: "https://www.plgscan.com" },
          },
          contracts: {
            multicall3: {
              address: "0x0989576160f2e7092908BB9479631b901060b6e4",
              blockCreated: 204489,
            },
          },
        }),
        od = (0, n.x)({
          id: 98865,
          name: "Plume (Legacy)",
          nativeCurrency: { name: "Plume Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://rpc.plumenetwork.xyz"],
              webSocket: ["wss://rpc.plumenetwork.xyz"],
            },
          },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://explorer.plumenetwork.xyz",
              apiUrl: "https://explorer.plumenetwork.xyz/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 48577,
            },
          },
          sourceId: 1,
        }),
        ou = (0, n.x)({
          id: 98864,
          name: "Plume Devnet (Legacy)",
          nativeCurrency: {
            name: "Plume Sepolia Ether",
            symbol: "ETH",
            decimals: 18,
          },
          rpcUrls: {
            default: {
              http: ["https://test-rpc.plumenetwork.xyz"],
              webSocket: ["wss://test-rpc.plumenetwork.xyz"],
            },
          },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://test-explorer.plumenetwork.xyz",
              apiUrl: "https://test-explorer.plumenetwork.xyz/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 481948,
            },
          },
          testnet: !0,
          sourceId: 0xaa36a7,
        }),
        op = (0, n.x)({
          id: 98866,
          name: "Plume",
          nativeCurrency: { name: "Plume", symbol: "PLUME", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://phoenix-rpc.plumenetwork.xyz"],
              webSocket: ["wss://phoenix-rpc.plumenetwork.xyz"],
            },
          },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://phoenix-explorer.plumenetwork.xyz",
              apiUrl: "https://phoenix-explorer.plumenetwork.xyz/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 39679,
            },
          },
          sourceId: 1,
        }),
        oh = (0, n.x)({
          id: 98867,
          name: "Plume Testnet",
          nativeCurrency: { name: "Plume", symbol: "PLUME", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://testnet-rpc.plumenetwork.xyz"],
              webSocket: ["wss://testnet-rpc.plumenetwork.xyz"],
            },
          },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://testnet-explorer.plumenetwork.xyz",
              apiUrl: "https://testnet-explorer.plumenetwork.xyz/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 199712,
            },
          },
          testnet: !0,
          sourceId: 0xaa36a7,
        }),
        om = (0, n.x)({
          id: 0x99c0a0f,
          name: "Plume Testnet (Legacy)",
          nativeCurrency: {
            name: "Plume Sepolia Ether",
            symbol: "ETH",
            decimals: 18,
          },
          rpcUrls: {
            default: {
              http: ["https://testnet-rpc.plumenetwork.xyz/http"],
              webSocket: ["wss://testnet-rpc.plumenetwork.xyz/ws"],
            },
          },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://testnet-explorer.plumenetwork.xyz",
              apiUrl: "https://testnet-explorer.plumenetwork.xyz/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 6022332,
            },
          },
          testnet: !0,
          sourceId: 0xaa36a7,
        }),
        of = (0, n.x)({
          id: 631571,
          name: "Polter Testnet",
          nativeCurrency: { decimals: 18, name: "Polter GHST", symbol: "GHST" },
          rpcUrls: {
            default: { http: ["https://geist-polter.g.alchemy.com/public"] },
          },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://polter-testnet.explorer.alchemy.com",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 11245,
            },
          },
          testnet: !0,
        }),
        ob = (0, n.x)({
          id: 137,
          name: "Polygon",
          nativeCurrency: { name: "POL", symbol: "POL", decimals: 18 },
          rpcUrls: { default: { http: ["https://polygon-rpc.com"] } },
          blockExplorers: {
            default: {
              name: "PolygonScan",
              url: "https://polygonscan.com",
              apiUrl: "https://api.polygonscan.com/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0x18938b0,
            },
          },
        }),
        oy = (0, n.x)({
          id: 80002,
          name: "Polygon Amoy",
          nativeCurrency: { name: "POL", symbol: "POL", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://rpc-amoy.polygon.technology"] },
          },
          blockExplorers: {
            default: {
              name: "PolygonScan",
              url: "https://amoy.polygonscan.com",
              apiUrl: "https://api-amoy.polygonscan.com/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 3127388,
            },
          },
          testnet: !0,
        }),
        ox = (0, n.x)({
          id: 80001,
          name: "Polygon Mumbai",
          nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
          rpcUrls: { default: { http: ["https://80001.rpc.thirdweb.com"] } },
          blockExplorers: {
            default: {
              name: "PolygonScan",
              url: "https://mumbai.polygonscan.com",
              apiUrl: "https://api-testnet.polygonscan.com/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0x18938b0,
            },
          },
          testnet: !0,
        }),
        ov = (0, n.x)({
          id: 1101,
          name: "Polygon zkEVM",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://zkevm-rpc.com"] } },
          blockExplorers: {
            default: {
              name: "PolygonScan",
              url: "https://zkevm.polygonscan.com",
              apiUrl: "https://api-zkevm.polygonscan.com/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 57746,
            },
          },
        }),
        og = (0, n.x)({
          id: 2442,
          name: "Polygon zkEVM Cardona",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.cardona.zkevm-rpc.com"] } },
          blockExplorers: {
            default: {
              name: "PolygonScan",
              url: "https://cardona-zkevm.polygonscan.com",
              apiUrl: "https://cardona-zkevm.polygonscan.com/api",
            },
          },
          testnet: !0,
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 114091,
            },
          },
        }),
        oE = (0, n.x)({
          id: 1442,
          name: "Polygon zkEVM Testnet",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.public.zkevm-test.net"] } },
          blockExplorers: {
            default: {
              name: "PolygonScan",
              url: "https://testnet-zkevm.polygonscan.com",
              apiUrl: "https://testnet-zkevm.polygonscan.com/api",
            },
          },
          testnet: !0,
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 525686,
            },
          },
        }),
        ok = (0, n.x)({
          id: 8008,
          name: "Polynomial",
          nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
          rpcUrls: { default: { http: ["https://rpc.polynomial.fi"] } },
          blockExplorers: {
            default: {
              name: "Polynomial Scan",
              url: "https://polynomialscan.io",
            },
          },
          testnet: !1,
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
            },
          },
        }),
        oC = (0, n.x)({
          id: 80008,
          name: "Polynomia Sepolia",
          nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
          rpcUrls: { default: { http: ["https://rpc.sepolia.polynomial.fi"] } },
          blockExplorers: {
            default: {
              name: "Polynomial Scan",
              url: "https://sepolia.polynomialscan.io",
            },
          },
          testnet: !0,
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
            },
          },
        }),
        ow = (0, n.x)({
          id: 23023,
          name: "PremiumBlock Testnet",
          nativeCurrency: {
            name: "Premium Block",
            symbol: "PBLK",
            decimals: 18,
          },
          rpcUrls: { default: { http: ["https://rpc.premiumblock.org"] } },
          blockExplorers: {
            default: {
              name: "PremiumBlocks Explorer",
              url: "https://scan.premiumblock.org",
            },
          },
          testnet: !0,
        }),
        oT = (0, n.x)({
          id: 369,
          name: "PulseChain",
          nativeCurrency: { name: "Pulse", symbol: "PLS", decimals: 18 },
          testnet: !1,
          rpcUrls: {
            default: {
              http: ["https://rpc.pulsechain.com"],
              webSocket: ["wss://ws.pulsechain.com"],
            },
          },
          blockExplorers: {
            default: {
              name: "PulseScan",
              url: "https://scan.pulsechain.com",
              apiUrl: "https://api.scan.pulsechain.com/api",
            },
          },
          contracts: {
            ensRegistry: {
              address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            },
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0xdb04c1,
            },
          },
        }),
        oS = (0, n.x)({
          id: 943,
          name: "PulseChain V4",
          testnet: !0,
          nativeCurrency: { name: "V4 Pulse", symbol: "v4PLS", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://rpc.v4.testnet.pulsechain.com"],
              webSocket: ["wss://ws.v4.testnet.pulsechain.com"],
            },
          },
          blockExplorers: {
            default: {
              name: "PulseScan",
              url: "https://scan.v4.testnet.pulsechain.com",
              apiUrl: "https://scan.v4.testnet.pulsechain.com/api",
            },
          },
          contracts: {
            ensRegistry: {
              address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            },
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0xdb04c1,
            },
          },
        }),
        oA = (0, n.x)({
          id: 490092,
          name: "Pumpfi Testnet",
          nativeCurrency: { decimals: 18, name: "PMPT", symbol: "PMPT" },
          rpcUrls: { default: { http: ["https://rpc1testnet.pumpfi.me"] } },
          blockExplorers: {
            default: {
              name: "Pumpfi Testnet Scan",
              url: "https://testnetscan.pumpfi.me",
            },
          },
          testnet: !0,
        }),
        oU = (0, n.x)({
          ...ei,
          name: "Pyrope Testnet",
          testnet: !0,
          id: 695569,
          sourceId: 0xaa36a7,
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://rpc.pyropechain.com"],
              webSocket: ["wss://rpc.pyropechain.com"],
            },
          },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://pyrope.blockscout.com",
            },
          },
          contracts: {
            ...ei.contracts,
            l1StandardBridge: {
              0xaa36a7: {
                address: "0xC24932c31D9621aE9e792576152B7ef010cFC2F8",
              },
            },
          },
        }),
        oB = (0, n.x)({
          id: 766,
          name: "QL1",
          nativeCurrency: { decimals: 18, name: "QOM", symbol: "QOM" },
          rpcUrls: { default: { http: ["https://rpc.qom.one"] } },
          blockExplorers: {
            default: { name: "Ql1 Explorer", url: "https://scan.qom.one" },
          },
          contracts: {
            multicall3: {
              address: "0x7A52370716ea730585884F5BDB0f6E60C39b8C64",
            },
          },
          testnet: !1,
        }),
        oM = (0, n.x)({
          id: 35441,
          name: "Q Mainnet",
          nativeCurrency: { decimals: 18, name: "Q", symbol: "Q" },
          rpcUrls: { default: { http: ["https://rpc.q.org"] } },
          blockExplorers: {
            default: {
              name: "Q Mainnet Explorer",
              url: "https://explorer.q.org",
              apiUrl: "https://explorer.q.org/api",
            },
          },
        }),
        oP = (0, n.x)({
          id: 35443,
          name: "Q Testnet",
          nativeCurrency: { decimals: 18, name: "Q", symbol: "Q" },
          rpcUrls: { default: { http: ["https://rpc.qtestnet.org"] } },
          blockExplorers: {
            default: {
              name: "Q Testnet Explorer",
              url: "https://explorer.qtestnet.org",
              apiUrl: "https://explorer.qtestnet.org/api",
            },
          },
          testnet: !0,
        }),
        oD = (0, n.x)({
          id: 111188,
          name: "re.al",
          nativeCurrency: { name: "reETH", decimals: 18, symbol: "reETH" },
          rpcUrls: {
            default: { http: ["https://rpc.realforreal.gelato.digital"] },
          },
          blockExplorers: {
            default: {
              name: "re.al Explorer",
              url: "https://explorer.re.al",
              apiUrl: "https://explorer.re.al/api/v2",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 695,
            },
          },
        }),
        oF = (0, n.x)({
          id: 151,
          name: "Redbelly Network Mainnet",
          nativeCurrency: {
            name: "Redbelly Native Coin",
            symbol: "RBNT",
            decimals: 18,
          },
          rpcUrls: {
            default: { http: ["https://governors.mainnet.redbelly.network"] },
          },
          blockExplorers: {
            default: {
              name: "Routescan",
              url: "https://redbelly.routescan.io",
              apiUrl:
                "https://api.routescan.io/v2/network/mainnet/evm/151/etherscan/api",
            },
          },
          testnet: !1,
        }),
        oI = (0, n.x)({
          id: 153,
          name: "Redbelly Network Testnet",
          nativeCurrency: {
            name: "Redbelly Native Coin",
            symbol: "RBNT",
            decimals: 18,
          },
          rpcUrls: {
            default: { http: ["https://governors.testnet.redbelly.network"] },
          },
          blockExplorers: {
            default: {
              name: "Routescan",
              url: "https://redbelly.testnet.routescan.io",
              apiUrl:
                "https://api.routescan.io/v2/network/testnet/evm/153_2/etherscan/api",
            },
          },
          testnet: !0,
        }),
        oO = (0, n.x)({
          ...ei,
          name: "Redstone",
          id: 690,
          sourceId: 1,
          nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
          rpcUrls: {
            default: {
              http: ["https://rpc.redstonechain.com"],
              webSocket: ["wss://rpc.redstonechain.com"],
            },
          },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://explorer.redstone.xyz",
            },
          },
          contracts: {
            ...ei.contracts,
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
            },
            portal: {
              1: {
                address: "0xC7bCb0e8839a28A1cFadd1CF716de9016CdA51ae",
                blockCreated: 0x12abdd9,
              },
            },
            l2OutputOracle: {
              1: {
                address: "0xa426A052f657AEEefc298b3B5c35a470e4739d69",
                blockCreated: 0x12abde1,
              },
            },
            l1StandardBridge: {
              1: {
                address: "0xc473ca7E02af24c129c2eEf51F2aDf0411c1Df69",
                blockCreated: 0x12abddb,
              },
            },
          },
        }),
        oR = (0, n.x)({
          id: 47805,
          name: "REI Mainnet",
          nativeCurrency: { decimals: 18, name: "REI", symbol: "REI" },
          rpcUrls: {
            default: {
              http: ["https://rpc.rei.network"],
              webSocket: ["wss://rpc.rei.network"],
            },
          },
          blockExplorers: {
            default: { name: "REI Scan", url: "https://scan.rei.network" },
          },
          testnet: !1,
        }),
        oL = (0, n.x)({
          id: 1729,
          name: "Reya Network",
          nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
          rpcUrls: {
            default: {
              http: ["https://rpc.reya.network"],
              webSocket: ["wss://ws.reya.network"],
            },
          },
          blockExplorers: {
            default: {
              name: "Reya Network Explorer",
              url: "https://explorer.reya.network",
            },
          },
          testnet: !1,
        }),
        oN = (0, n.x)({
          id: 50341,
          name: "Reddio Sepolia",
          nativeCurrency: { name: "Reddio", symbol: "RED", decimals: 18 },
          rpcUrls: { default: { http: ["https://reddio-dev.reddio.com"] } },
          blockExplorers: {
            default: {
              name: "Reddioscan",
              url: "https://reddio-devnet.l2scan.co",
              apiUrl: "https://reddio-devnet.l2scan.co/api",
            },
          },
          testnet: !0,
        }),
        oz = (0, n.x)({
          id: 753,
          name: "Rivalz",
          nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
          rpcUrls: {
            default: { http: ["https://rivalz.calderachain.xyz/http"] },
          },
          blockExplorers: {
            default: {
              name: "Rivalz Caldera Explorer",
              url: "https://rivalz.calderaexplorer.xyz",
            },
          },
          testnet: !1,
        }),
        oK = (0, n.x)({
          id: 570,
          name: "Rollux Mainnet",
          nativeCurrency: { decimals: 18, name: "Syscoin", symbol: "SYS" },
          rpcUrls: {
            default: {
              http: ["https://rpc.rollux.com"],
              webSocket: ["wss://rpc.rollux.com/wss"],
            },
          },
          blockExplorers: {
            default: {
              name: "RolluxExplorer",
              url: "https://explorer.rollux.com",
              apiUrl: "https://explorer.rollux.com/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 119222,
            },
          },
        }),
        oV = (0, n.x)({
          id: 57e3,
          name: "Rollux Testnet",
          nativeCurrency: { decimals: 18, name: "Syscoin", symbol: "SYS" },
          rpcUrls: {
            default: {
              http: ["https://rpc-tanenbaum.rollux.com/"],
              webSocket: ["wss://rpc-tanenbaum.rollux.com/wss"],
            },
          },
          blockExplorers: {
            default: {
              name: "RolluxTestnetExplorer",
              url: "https://rollux.tanenbaum.io",
              apiUrl: "https://rollux.tanenbaum.io/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 1813675,
            },
          },
        }),
        oH = (0, n.x)({
          id: 2020,
          name: "Ronin",
          nativeCurrency: { name: "RON", symbol: "RON", decimals: 18 },
          rpcUrls: { default: { http: ["https://api.roninchain.com/rpc"] } },
          blockExplorers: {
            default: {
              name: "Ronin Explorer",
              url: "https://app.roninchain.com",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0x18d166f,
            },
          },
        }),
        oj = (0, n.x)({
          id: 7668,
          name: "The Root Network",
          nativeCurrency: { decimals: 18, name: "XRP", symbol: "XRP" },
          rpcUrls: {
            default: {
              http: ["https://root.rootnet.live/archive"],
              webSocket: ["wss://root.rootnet.live/archive/ws"],
            },
          },
          blockExplorers: {
            default: { name: "Rootscan", url: "https://rootscan.io" },
          },
          contracts: {
            multicall3: {
              address: "0xc9C2E2429AeC354916c476B30d729deDdC94988d",
              blockCreated: 9218338,
            },
          },
        }),
        o_ = (0, n.x)({
          id: 7672,
          name: "The Root Network - Porcini",
          nativeCurrency: { decimals: 18, name: "XRP", symbol: "XRP" },
          rpcUrls: {
            default: {
              http: ["https://porcini.rootnet.app/archive"],
              webSocket: ["wss://porcini.rootnet.app/archive/ws"],
            },
          },
          blockExplorers: {
            default: { name: "Rootscan", url: "https://porcini.rootscan.io" },
          },
          contracts: {
            multicall3: {
              address: "0xc9C2E2429AeC354916c476B30d729deDdC94988d",
              blockCreated: 0xa1112c,
            },
          },
          testnet: !0,
        }),
        oG = (0, n.x)({
          id: 30,
          name: "Rootstock Mainnet",
          network: "rootstock",
          nativeCurrency: {
            decimals: 18,
            name: "Rootstock Bitcoin",
            symbol: "RBTC",
          },
          rpcUrls: { default: { http: ["https://public-node.rsk.co"] } },
          blockExplorers: {
            default: { name: "RSK Explorer", url: "https://explorer.rsk.co" },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 4249540,
            },
          },
        }),
        oW = (0, n.x)({
          id: 31,
          name: "Rootstock Testnet",
          network: "rootstock",
          nativeCurrency: {
            decimals: 18,
            name: "Rootstock Bitcoin",
            symbol: "tRBTC",
          },
          rpcUrls: {
            default: { http: ["https://public-node.testnet.rsk.co"] },
          },
          blockExplorers: {
            default: {
              name: "RSK Explorer",
              url: "https://explorer.testnet.rootstock.io",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 2771150,
            },
          },
          testnet: !0,
        }),
        oq = (0, n.x)({
          ...ei,
          id: 12553,
          name: "RSS3 VSL Mainnet",
          nativeCurrency: { name: "RSS3", symbol: "RSS3", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.rss3.io"] } },
          blockExplorers: {
            default: {
              name: "RSS3 VSL Mainnet Scan",
              url: "https://scan.rss3.io",
              apiUrl: "https://scan.rss3.io/api",
            },
          },
          contracts: {
            ...ei.contracts,
            l2OutputOracle: {
              1: { address: "0xE6f24d2C32B3109B18ed33cF08eFb490b1e09C10" },
            },
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 14193,
            },
            portal: {
              1: {
                address: "0x6A12432491bbbE8d3babf75F759766774C778Db4",
                blockCreated: 0x127d2b1,
              },
            },
            l1StandardBridge: {
              1: { address: "0x4cbab69108Aa72151EDa5A3c164eA86845f18438" },
            },
          },
          sourceId: 1,
        }),
        o$ = (0, n.x)({
          ...ei,
          id: 2331,
          name: "RSS3 VSL Sepolia Testnet",
          nativeCurrency: { name: "RSS3", symbol: "RSS3", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.testnet.rss3.io"] } },
          blockExplorers: {
            default: {
              name: "RSS3 VSL Sepolia Testnet Scan",
              url: "https://scan.testnet.rss3.io",
              apiUrl: "https://scan.testnet.rss3.io/api",
            },
          },
          contracts: {
            ...ei.contracts,
            l2OutputOracle: {
              0xaa36a7: {
                address: "0xDb5c46C3Eaa6Ed6aE8b2379785DF7dd029C0dC81",
              },
            },
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 55697,
            },
            portal: {
              0xaa36a7: {
                address: "0xcBD77E8E1E7F06B25baDe67142cdE82652Da7b57",
                blockCreated: 5345035,
              },
            },
            l1StandardBridge: {
              0xaa36a7: {
                address: "0xdDD29bb63B0839FB1cE0eE439Ff027738595D07B",
              },
            },
          },
          testnet: !0,
          sourceId: 0xaa36a7,
        }),
        oX = (0, n.x)({
          id: 7225878,
          name: "Saakuru Mainnet",
          nativeCurrency: { name: "OAS", symbol: "OAS", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.saakuru.network"] } },
          blockExplorers: {
            default: {
              name: "Saakuru Explorer",
              url: "https://explorer.saakuru.network",
            },
          },
          testnet: !1,
        }),
        oZ = (0, n.x)({
          id: 5464,
          name: "Saga",
          network: "saga",
          nativeCurrency: { decimals: 18, name: "gas", symbol: "GAS" },
          rpcUrls: {
            default: { http: ["https://sagaevm.jsonrpc.sagarpc.io"] },
          },
          blockExplorers: {
            default: {
              name: "Saga Explorer",
              url: "https://sagaevm.sagaexplorer.io",
            },
          },
          contracts: {
            multicall3: {
              address: "0x864DDc9B50B9A0dF676d826c9B9EDe9F8913a160",
              blockCreated: 467530,
            },
          },
        }),
        oJ = (0, n.x)({
          id: 2021,
          name: "Saigon Testnet",
          nativeCurrency: { name: "RON", symbol: "RON", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://saigon-testnet.roninchain.com/rpc"] },
          },
          blockExplorers: {
            default: {
              name: "Saigon Explorer",
              url: "https://saigon-app.roninchain.com",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0x11de6e7,
            },
          },
          testnet: !0,
        }),
        oY = (0, n.x)({
          id: 1996,
          name: "Sanko",
          nativeCurrency: { name: "DMT", symbol: "DMT", decimals: 18 },
          rpcUrls: { default: { http: ["https://mainnet.sanko.xyz"] } },
          blockExplorers: {
            default: {
              name: "Sanko Explorer",
              url: "https://explorer.sanko.xyz",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 37,
            },
          },
          testnet: !1,
        }),
        oQ = (0, n.x)({
          id: 23294,
          name: "Oasis Sapphire",
          network: "sapphire",
          nativeCurrency: {
            name: "Sapphire Rose",
            symbol: "ROSE",
            decimals: 18,
          },
          rpcUrls: {
            default: {
              http: ["https://sapphire.oasis.io"],
              webSocket: ["wss://sapphire.oasis.io/ws"],
            },
          },
          blockExplorers: {
            default: {
              name: "Oasis Explorer",
              url: "https://explorer.oasis.io/mainnet/sapphire",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 734531,
            },
          },
        }),
        o0 = (0, n.x)({
          id: 23295,
          name: "Oasis Sapphire Testnet",
          network: "sapphire-testnet",
          nativeCurrency: {
            name: "Sapphire Test Rose",
            symbol: "TEST",
            decimals: 18,
          },
          rpcUrls: {
            default: {
              http: ["https://testnet.sapphire.oasis.dev"],
              webSocket: ["wss://testnet.sapphire.oasis.dev/ws"],
            },
          },
          blockExplorers: {
            default: {
              name: "Oasis Explorer",
              url: "https://explorer.oasis.io/testnet/sapphire",
            },
          },
          testnet: !0,
        }),
        o1 = (0, n.x)({
          id: 3109,
          name: "SatoshiVM Alpha Mainnet",
          nativeCurrency: { name: "BTC", symbol: "BTC", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://alpha-rpc-node-http.svmscan.io"] },
          },
          blockExplorers: {
            default: {
              name: "blockscout",
              url: "https://svmscan.io",
              apiUrl: "https://svmscan.io/api",
            },
          },
        }),
        o2 = (0, n.x)({
          id: 3110,
          name: "SatoshiVM Testnet",
          nativeCurrency: { name: "BTC", symbol: "BTC", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://test-rpc-node-http.svmscan.io"] },
          },
          blockExplorers: {
            default: {
              name: "blockscout",
              url: "https://testnet.svmscan.io",
              apiUrl: "https://testnet.svmscan.io/api",
            },
          },
          testnet: !0,
        }),
        o3 = (0, n.x)({
          id: 534352,
          name: "Scroll",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://rpc.scroll.io"],
              webSocket: ["wss://wss-rpc.scroll.io/ws"],
            },
          },
          blockExplorers: {
            default: {
              name: "Scrollscan",
              url: "https://scrollscan.com",
              apiUrl: "https://api.scrollscan.com/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 14,
            },
          },
          testnet: !1,
        }),
        o7 = (0, n.x)({
          id: 534351,
          name: "Scroll Sepolia",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://sepolia-rpc.scroll.io"] } },
          blockExplorers: {
            default: {
              name: "Scrollscan",
              url: "https://sepolia.scrollscan.com",
              apiUrl: "https://api-sepolia.scrollscan.com/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 9473,
            },
          },
          testnet: !0,
        }),
        o6 = (0, n.x)({
          id: 1329,
          name: "Sei Network",
          nativeCurrency: { name: "Sei", symbol: "SEI", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://evm-rpc.sei-apis.com/"],
              webSocket: ["wss://evm-ws.sei-apis.com/"],
            },
          },
          blockExplorers: {
            default: {
              name: "Seitrace",
              url: "https://seitrace.com",
              apiUrl: "https://seitrace.com/pacific-1/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
            },
          },
        }),
        o8 = (0, n.x)({
          id: 713715,
          name: "Sei Devnet",
          nativeCurrency: { name: "Sei", symbol: "SEI", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://evm-rpc-arctic-1.sei-apis.com"] },
          },
          blockExplorers: {
            default: { name: "Seitrace", url: "https://seitrace.com" },
          },
          testnet: !0,
        }),
        o5 = (0, n.x)({
          id: 5124,
          name: "Seismic Devnet",
          nativeCurrency: {
            name: "Seismic Ether",
            symbol: "ETH",
            decimals: 18,
          },
          rpcUrls: { default: { http: ["https://node-2.seismicdev.net/rpc"] } },
          blockExplorers: {
            default: {
              name: "Seismic Devnet Explorer",
              url: "https://explorer-2.seismicdev.net",
            },
          },
          testnet: !0,
        }),
        o9 = (0, n.x)({
          id: 1328,
          name: "Sei Testnet",
          nativeCurrency: { name: "Sei", symbol: "SEI", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://evm-rpc-testnet.sei-apis.com"],
              webSocket: ["wss://evm-ws-testnet.sei-apis.com"],
            },
          },
          blockExplorers: {
            default: { name: "Seitrace", url: "https://seitrace.com" },
          },
          testnet: !0,
        }),
        o4 = (0, n.x)({
          id: 0xaa36a7,
          name: "Sepolia",
          nativeCurrency: {
            name: "Sepolia Ether",
            symbol: "ETH",
            decimals: 18,
          },
          rpcUrls: { default: { http: ["https://sepolia.drpc.org"] } },
          blockExplorers: {
            default: {
              name: "Etherscan",
              url: "https://sepolia.etherscan.io",
              apiUrl: "https://api-sepolia.etherscan.io/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 751532,
            },
            ensRegistry: {
              address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            },
            ensUniversalResolver: {
              address: "0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",
              blockCreated: 5317080,
            },
          },
          testnet: !0,
        }),
        ie = (0, n.x)({
          ...ei,
          id: 360,
          name: "Shape",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://mainnet.shape.network"] } },
          blockExplorers: {
            default: {
              name: "shapescan",
              url: "https://shapescan.xyz",
              apiUrl: "https://shapescan.xyz/api",
            },
          },
          contracts: {
            ...ei.contracts,
            l2OutputOracle: {
              1: {
                address: "0x6Ef8c69CfE4635d866e3E02732068022c06e724D",
                blockCreated: 0x136d214,
              },
            },
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 1,
            },
            portal: {
              1: {
                address: "0xEB06fFa16011B5628BaB98E29776361c83741dd3",
                blockCreated: 0x136d20d,
              },
            },
            l1StandardBridge: {
              1: {
                address: "0x62Edd5f4930Ea92dCa3fB81689bDD9b9d076b57B",
                blockCreated: 0x136d20f,
              },
            },
          },
          sourceId: 1,
        }),
        it = (0, n.x)({
          ...ei,
          id: 11011,
          name: "Shape Sepolia Testnet",
          nativeCurrency: {
            name: "Sepolia Ether",
            symbol: "ETH",
            decimals: 18,
          },
          rpcUrls: { default: { http: ["https://sepolia.shape.network"] } },
          blockExplorers: {
            default: {
              name: "blockscout",
              url: "https://explorer-sepolia.shape.network/",
              apiUrl: "https://explorer-sepolia.shape.network/api/v2",
            },
          },
          contracts: {
            ...ei.contracts,
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 1,
            },
          },
          testnet: !0,
          sourceId: 0xaa36a7,
        }),
        ir = (0, n.x)({
          id: 8118,
          name: "Shardeum",
          nativeCurrency: { name: "Shardeum", symbol: "SHM", decimals: 18 },
          rpcUrls: { default: { http: ["https://api.shardeum.org"] } },
          blockExplorers: {
            default: {
              name: "Shardeum Explorer",
              url: "https://explorer.shardeum.org",
            },
          },
          testnet: !1,
        }),
        ia = (0, n.x)({
          id: 8082,
          name: "Shardeum Sphinx",
          nativeCurrency: { name: "SHARDEUM", symbol: "SHM", decimals: 18 },
          rpcUrls: { default: { http: ["https://sphinx.shardeum.org"] } },
          blockExplorers: {
            default: {
              name: "Shardeum Explorer",
              url: "https://explorer-sphinx.shardeum.org",
            },
          },
          testnet: !0,
        }),
        is = (0, n.x)({
          id: 109,
          name: "Shibarium",
          network: "shibarium",
          nativeCurrency: { name: "Bone", symbol: "BONE", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.shibrpc.com"] } },
          blockExplorers: {
            default: { name: "Blockscout", url: "https://shibariumscan.io" },
          },
          contracts: {
            multicall3: {
              address: "0x864Bf681ADD6052395188A89101A1B37d3B4C961",
              blockCreated: 265900,
            },
          },
        }),
        io = (0, n.x)({
          id: 157,
          name: "Puppynet Shibarium",
          nativeCurrency: { decimals: 18, name: "Bone", symbol: "BONE" },
          rpcUrls: { default: { http: ["https://puppynet.shibrpc.com"] } },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://puppyscan.shib.io",
              apiUrl: "https://puppyscan.shib.io/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xA4029b74FBA366c926eDFA7Dd10B21C621170a4c",
              blockCreated: 3035769,
            },
          },
          testnet: !0,
        }),
        ii = (0, n.x)({
          id: 336,
          name: "Shiden",
          nativeCurrency: { decimals: 18, name: "SDN", symbol: "SDN" },
          rpcUrls: {
            default: {
              http: ["https://shiden.public.blastapi.io"],
              webSocket: ["wss://shiden-rpc.dwellir.com"],
            },
          },
          blockExplorers: {
            default: { name: "Shiden Scan", url: "https://shiden.subscan.io" },
          },
          testnet: !1,
        }),
        il = (0, n.x)({
          id: 148,
          name: "Shimmer",
          network: "shimmer",
          nativeCurrency: { decimals: 18, name: "Shimmer", symbol: "SMR" },
          rpcUrls: {
            default: { http: ["https://json-rpc.evm.shimmer.network"] },
          },
          blockExplorers: {
            default: {
              name: "Shimmer Network Explorer",
              url: "https://explorer.evm.shimmer.network",
              apiUrl: "https://explorer.evm.shimmer.network/api",
            },
          },
        }),
        ic = (0, n.x)({
          id: 1073,
          name: "Shimmer Testnet",
          network: "shimmer-testnet",
          nativeCurrency: { decimals: 18, name: "Shimmer", symbol: "SMR" },
          rpcUrls: {
            default: { http: ["https://json-rpc.evm.testnet.shimmer.network"] },
          },
          blockExplorers: {
            default: {
              name: "Shimmer Network Explorer",
              url: "https://explorer.evm.testnet.shimmer.network",
              apiUrl: "https://explorer.evm.testnet.shimmer.network/api",
            },
          },
          testnet: !0,
        }),
        id = (0, n.x)({
          id: 97453,
          name: "Sidra Chain",
          nativeCurrency: {
            decimals: 18,
            name: "Sidra Digital Asset",
            symbol: "SDA",
          },
          rpcUrls: { default: { http: ["https://node.sidrachain.com"] } },
          blockExplorers: {
            default: {
              name: "Sidra Chain Explorer",
              url: "https://ledger.sidrachain.com",
            },
          },
        }),
        iu = (0, n.x)({
          id: 2355,
          name: "Silicon zkEVM",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: {
              http: [
                "https://rpc.silicon.network",
                "https://silicon-mainnet.nodeinfra.com",
              ],
            },
          },
          blockExplorers: {
            default: {
              name: "SiliconScope",
              url: "https://scope.silicon.network",
            },
          },
        }),
        ip = (0, n.x)({
          id: 0x66ad6b08,
          name: "Silicon Sepolia zkEVM",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: {
              http: [
                "https://rpc-sepolia.silicon.network",
                "https://silicon-testnet.nodeinfra.com",
              ],
            },
          },
          blockExplorers: {
            default: {
              name: "SiliconSepoliaScope",
              url: "https://scope-sepolia.silicon.network",
            },
          },
          testnet: !0,
        }),
        ih = (0, n.x)({
          id: 98,
          name: "Six Protocol",
          nativeCurrency: { decimals: 18, name: "SIX", symbol: "SIX" },
          rpcUrls: {
            default: { http: ["https://sixnet-rpc-evm.sixprotocol.net"] },
          },
          blockExplorers: {
            default: {
              name: "Six Protocol Scan",
              url: "https://sixscan.io/sixnet",
            },
          },
          testnet: !1,
        }),
        im = (0, n.x)({
          id: 0x175b1806,
          name: "SKALE | Block Brawlers",
          nativeCurrency: { name: "BRAWL", symbol: "BRAWL", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://mainnet.skalenodes.com/v1/frayed-decent-antares"],
              webSocket: [
                "wss://mainnet.skalenodes.com/v1/ws/frayed-decent-antares",
              ],
            },
          },
          blockExplorers: {
            default: {
              name: "SKALE Explorer",
              url: "https://frayed-decent-antares.explorer.mainnet.skalenodes.com",
            },
          },
          contracts: {},
        }),
        ib = (0, n.x)({
          id: 0x5d456c62,
          name: "SKALE Calypso Hub",
          nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
          rpcUrls: {
            default: {
              http: [
                "https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague",
              ],
              webSocket: [
                "wss://mainnet.skalenodes.com/v1/ws/honorable-steel-rasalhague",
              ],
            },
          },
          blockExplorers: {
            default: {
              name: "SKALE Explorer",
              url: "https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 3107626,
            },
          },
        }),
        iy = (0, n.x)({
          id: 0x3a14269b,
          name: "SKALE Calypso Testnet",
          nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
          rpcUrls: {
            default: {
              http: [
                "https://testnet.skalenodes.com/v1/giant-half-dual-testnet",
              ],
              webSocket: [
                "wss://testnet.skalenodes.com/v1/ws/giant-half-dual-testnet",
              ],
            },
          },
          blockExplorers: {
            default: {
              name: "SKALE Explorer",
              url: "https://giant-half-dual-testnet.explorer.testnet.skalenodes.com",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 103220,
            },
          },
          testnet: !0,
        }),
        ix = (0, n.x)({
          id: 0x3d28774d,
          name: "SKALE | CryptoBlades",
          nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
          rpcUrls: {
            default: {
              http: [
                "https://mainnet.skalenodes.com/v1/affectionate-immediate-pollux",
              ],
              webSocket: [
                "wss://mainnet.skalenodes.com/v1/ws/affectionate-immediate-pollux",
              ],
            },
          },
          blockExplorers: {
            default: {
              name: "SKALE Explorer",
              url: "https://affectionate-immediate-pollux.explorer.mainnet.skalenodes.com",
            },
          },
          contracts: {},
        }),
        iv = (0, n.x)({
          id: 0x3d91725c,
          name: "SKALE | Crypto Colosseum",
          nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
          rpcUrls: {
            default: {
              http: [
                "https://mainnet.skalenodes.com/v1/haunting-devoted-deneb",
              ],
              webSocket: [
                "wss://mainnet.skalenodes.com/v1/ws/haunting-devoted-deneb",
              ],
            },
          },
          blockExplorers: {
            default: {
              name: "SKALE Explorer",
              url: "https://haunting-devoted-deneb.explorer.mainnet.skalenodes.com",
            },
          },
          contracts: {},
        }),
        ig = (0, n.x)({
          id: 0x79f99296,
          name: "SKALE Europa Hub",
          nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://mainnet.skalenodes.com/v1/elated-tan-skat"],
              webSocket: ["wss://mainnet.skalenodes.com/v1/ws/elated-tan-skat"],
            },
          },
          blockExplorers: {
            default: {
              name: "SKALE Explorer",
              url: "https://elated-tan-skat.explorer.mainnet.skalenodes.com",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 3113495,
            },
          },
        }),
        iE = (0, n.x)({
          id: 0x561bf78b,
          name: "SKALE Europa Testnet",
          nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
          rpcUrls: {
            default: {
              http: [
                "https://testnet.skalenodes.com/v1/juicy-low-small-testnet",
              ],
              webSocket: [
                "wss://testnet.skalenodes.com/v1/ws/juicy-low-small-testnet",
              ],
            },
          },
          blockExplorers: {
            default: {
              name: "SKALE Explorer",
              url: "https://juicy-low-small-testnet.explorer.testnet.skalenodes.com",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 110858,
            },
          },
          testnet: !0,
        }),
        ik = (0, n.x)({
          id: 0x7f8cb400,
          name: "Exorde Network",
          nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://mainnet.skalenodes.com/v1/light-vast-diphda"],
              webSocket: [
                "wss://mainnet.skalenodes.com/v1/ws/light-vast-diphda",
              ],
            },
          },
          blockExplorers: {
            default: {
              name: "SKALE Explorer",
              url: "https://light-vast-diphda.explorer.mainnet.skalenodes.com",
            },
          },
          contracts: {},
        }),
        iC = (0, n.x)({
          id: 0x4be3e8bd,
          name: "SKALE | Human Protocol",
          nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://mainnet.skalenodes.com/v1/wan-red-ain"],
              webSocket: ["wss://mainnet.skalenodes.com/v1/ws/wan-red-ain"],
            },
          },
          blockExplorers: {
            default: {
              name: "SKALE Explorer",
              url: "https://wan-red-ain.explorer.mainnet.skalenodes.com",
            },
          },
          contracts: {},
        }),
        iw = (0, n.x)({
          id: 0x585eb4b1,
          name: "SKALE Nebula Hub",
          nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://mainnet.skalenodes.com/v1/green-giddy-denebola"],
              webSocket: [
                "wss://mainnet.skalenodes.com/v1/ws/green-giddy-denebola",
              ],
            },
          },
          blockExplorers: {
            default: {
              name: "SKALE Explorer",
              url: "https://green-giddy-denebola.explorer.mainnet.skalenodes.com",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 2372986,
            },
          },
        }),
        iT = (0, n.x)({
          id: 0x235ddd0,
          name: "SKALE Nebula Testnet",
          nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
          rpcUrls: {
            default: {
              http: [
                "https://testnet.skalenodes.com/v1/lanky-ill-funny-testnet",
              ],
              webSocket: [
                "wss://testnet.skalenodes.com/v1/ws/lanky-ill-funny-testnet",
              ],
            },
          },
          blockExplorers: {
            default: {
              name: "SKALE Explorer",
              url: "https://lanky-ill-funny-testnet.explorer.testnet.skalenodes.com",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 105141,
            },
          },
          testnet: !0,
        }),
        iS = (0, n.x)({
          id: 0x109b4597,
          name: "SKALE | Razor Network",
          nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
          rpcUrls: {
            default: {
              http: [
                "https://mainnet.skalenodes.com/v1/turbulent-unique-scheat",
              ],
              webSocket: [
                "wss://mainnet.skalenodes.com/v1/ws/turbulent-unique-scheat",
              ],
            },
          },
          blockExplorers: {
            default: {
              name: "SKALE Explorer",
              url: "https://turbulent-unique-scheat.explorer.mainnet.skalenodes.com",
            },
          },
          contracts: {},
        }),
        iA = (0, n.x)({
          id: 0x507aaa2a,
          name: "SKALE Titan Hub",
          nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://mainnet.skalenodes.com/v1/parallel-stormy-spica"],
              webSocket: [
                "wss://mainnet.skalenodes.com/v1/ws/parallel-stormy-spica",
              ],
            },
          },
          blockExplorers: {
            default: {
              name: "SKALE Explorer",
              url: "https://parallel-stormy-spica.explorer.mainnet.skalenodes.com",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 2076458,
            },
          },
        }),
        iU = (0, n.x)({
          id: 0x3cd156dc,
          name: "SKALE Titan Testnet",
          nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
          rpcUrls: {
            default: {
              http: [
                "https://testnet.skalenodes.com/v1/aware-fake-trim-testnet",
              ],
              webSocket: [
                "wss://testnet.skalenodes.com/v1/ws/aware-fake-trim-testnet",
              ],
            },
          },
          blockExplorers: {
            default: {
              name: "SKALE Explorer",
              url: "https://aware-fake-trim-testnet.explorer.testnet.skalenodes.com",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 104072,
            },
          },
          testnet: !0,
        }),
        iB = (0, n.x)({
          id: 984123,
          name: "Forma Sketchpad",
          network: "sketchpad",
          nativeCurrency: { symbol: "TIA", name: "TIA", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://rpc.sketchpad-1.forma.art"],
              webSocket: ["wss://ws.sketchpad-1.forma.art"],
            },
          },
          blockExplorers: {
            default: {
              name: "Sketchpad Explorer",
              url: "https://explorer.sketchpad-1.forma.art",
            },
          },
          testnet: !0,
        }),
        iM = (0, n.x)({
          ...ei,
          id: 2192,
          network: "snaxchain-mainnet",
          name: "SnaxChain",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://mainnet.snaxchain.io"] } },
          blockExplorers: {
            default: {
              name: "Snax Explorer",
              url: "https://explorer.snaxchain.io",
              apiUrl: "https://explorer.snaxchain.io/api",
            },
          },
          contracts: {
            ...ei.contracts,
            disputeGameFactory: {
              1: { address: "0x472562Fcf26D6b2793f8E0b0fB660ba0E5e08A46" },
            },
            l2OutputOracle: {
              1: { address: "0x2172e492Fc807F5d5645D0E3543f139ECF539294" },
            },
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
            },
            portal: {
              1: { address: "0x79f446D024d74D0Bb6E699C131c703463c5D65E9" },
            },
            l1StandardBridge: {
              1: { address: "0x6534Bdb6b5c060d3e6aa833433333135eFE8E0aA" },
            },
          },
          sourceId: 1,
        }),
        iP = (0, n.x)({
          ...ei,
          id: 13001,
          network: "snaxchain-testnet",
          name: "SnaxChain Testnet",
          nativeCurrency: {
            name: "Sepolia Ether",
            symbol: "ETH",
            decimals: 18,
          },
          rpcUrls: { default: { http: ["https://testnet.snaxchain.io"] } },
          blockExplorers: {
            default: {
              name: "Snax Explorer",
              url: "https://testnet-explorer.snaxchain.io",
              apiUrl: "https://testnet-explorer.snaxchain.io/api",
            },
          },
          contracts: {
            ...ei.contracts,
            disputeGameFactory: {
              0xaa36a7: {
                address: "0x206a75d89d45F146C54020F132FF93bEDD09f55E",
              },
            },
            l2OutputOracle: {
              0xaa36a7: {
                address: "0x60e3A368a4cdCEf85ffB964e372726F56A46221e",
              },
            },
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
            },
            portal: {
              0xaa36a7: {
                address: "0xb5afdd0E8dDF081Ef90e8A3e0c7b5798e66E954E",
              },
            },
            l1StandardBridge: {
              0xaa36a7: {
                address: "0xbd37E1a59D4C00C9A46F75018dffd84061bC5f74",
              },
            },
          },
          testnet: !0,
          sourceId: 0xaa36a7,
        }),
        iD = (0, n.x)({
          id: 50312,
          name: "Somnia Testnet",
          nativeCurrency: { name: "STT", symbol: "STT", decimals: 18 },
          rpcUrls: { default: { http: ["https://dream-rpc.somnia.network"] } },
          blockExplorers: {
            default: {
              name: "Somnia Testnet Explorer",
              url: "https://somnia-testnet.socialscan.io",
              apiUrl: "https://shannon-explorer.somnia.network/api",
            },
          },
          testnet: !0,
        }),
        iF = (0, n.x)({
          ...ei,
          id: 1868,
          name: "Soneium Mainnet",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.soneium.org"] } },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://soneium.blockscout.com",
              apiUrl: "https://soneium.blockscout.com/api",
            },
          },
          contracts: {
            ...ei.contracts,
            disputeGameFactory: {
              1: { address: "0x512a3d2c7a43bd9261d2b8e8c9c70d4bd4d503c0" },
            },
            l2OutputOracle: {
              1: { address: "0x0000000000000000000000000000000000000000" },
            },
            portal: {
              1: {
                address: "0x88e529a6ccd302c948689cd5156c83d4614fae92",
                blockCreated: 7061266,
              },
            },
            l1StandardBridge: {
              1: {
                address: "0xeb9bf100225c214efc3e7c651ebbadcf85177607",
                blockCreated: 7061266,
              },
            },
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 1,
            },
          },
          sourceId: 1,
        }),
        iI = (0, n.x)({
          ...ei,
          id: 1946,
          name: "Soneium Minato Testnet",
          nativeCurrency: {
            name: "Sepolia Ether",
            symbol: "ETH",
            decimals: 18,
          },
          rpcUrls: { default: { http: ["https://rpc.minato.soneium.org"] } },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://soneium-minato.blockscout.com",
              apiUrl: "https://soneium-minato.blockscout.com/api",
            },
          },
          contracts: {
            ...ei.contracts,
            disputeGameFactory: {
              0xaa36a7: {
                address: "0xB3Ad2c38E6e0640d7ce6aA952AB3A60E81bf7a01",
              },
            },
            l2OutputOracle: {
              0xaa36a7: {
                address: "0x710e5286C746eC38beeB7538d0146f60D27be343",
              },
            },
            portal: {
              0xaa36a7: {
                address: "0x65ea1489741A5D72fFdD8e6485B216bBdcC15Af3",
                blockCreated: 6466136,
              },
            },
            l1StandardBridge: {
              0xaa36a7: {
                address: "0x5f5a404A5edabcDD80DB05E8e54A78c9EBF000C2",
                blockCreated: 6466136,
              },
            },
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 1,
            },
          },
          testnet: !0,
          sourceId: 0xaa36a7,
        }),
        iO = (0, n.x)({
          id: 146,
          name: "Sonic",
          nativeCurrency: { decimals: 18, name: "Sonic", symbol: "S" },
          rpcUrls: { default: { http: ["https://rpc.soniclabs.com"] } },
          blockExplorers: {
            default: { name: "Sonic Explorer", url: "https://sonicscan.org" },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 60,
            },
          },
          testnet: !1,
        }),
        iR = (0, n.x)({
          id: 64165,
          name: "Sonic Testnet",
          nativeCurrency: { decimals: 18, name: "Sonic", symbol: "S" },
          rpcUrls: { default: { http: ["https://rpc.testnet.soniclabs.com"] } },
          blockExplorers: {
            default: {
              name: "Sonic Testnet Explorer",
              url: "https://testnet.soniclabs.com/",
            },
          },
          testnet: !0,
        }),
        iL = (0, n.x)({
          id: 57054,
          name: "Sonic Blaze Testnet",
          nativeCurrency: { decimals: 18, name: "Sonic", symbol: "S" },
          rpcUrls: { default: { http: ["https://rpc.blaze.soniclabs.com"] } },
          blockExplorers: {
            default: {
              name: "Sonic Blaze Testnet Explorer",
              url: "https://testnet.sonicscan.org",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 1100,
            },
          },
          testnet: !0,
        }),
        iN = (0, n.x)({
          id: 19,
          name: "Songbird Canary-Network",
          nativeCurrency: { decimals: 18, name: "Songbird", symbol: "SGB" },
          rpcUrls: {
            default: { http: ["https://songbird-api.flare.network/ext/C/rpc"] },
          },
          blockExplorers: {
            default: {
              name: "Songbird Explorer",
              url: "https://songbird-explorer.flare.network",
              apiUrl: "https://songbird-explorer.flare.network/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 0xcc3368,
            },
          },
        }),
        iz = (0, n.x)({
          id: 16,
          name: "Songbird Testnet Coston",
          nativeCurrency: {
            decimals: 18,
            name: "Coston Flare",
            symbol: "CFLR",
          },
          rpcUrls: {
            default: { http: ["https://coston-api.flare.network/ext/C/rpc"] },
          },
          blockExplorers: {
            default: {
              name: "Coston Explorer",
              url: "https://coston-explorer.flare.network",
              apiUrl: "https://coston-explorer.flare.network/api",
            },
          },
          testnet: !0,
        }),
        iK = (0, n.x)({
          ...q,
          id: 50104,
          name: "Sophon",
          nativeCurrency: { decimals: 18, name: "Sophon", symbol: "SOPH" },
          rpcUrls: {
            default: {
              http: ["https://rpc.sophon.xyz"],
              webSocket: ["wss://rpc.sophon.xyz/ws"],
            },
          },
          blockExplorers: {
            default: {
              name: "Sophon Block Explorer",
              url: "https://explorer.sophon.xyz",
            },
          },
          contracts: {
            multicall3: {
              address: "0x5f4867441d2416cA88B1b3fd38f21811680CD2C8",
              blockCreated: 116,
            },
          },
          testnet: !1,
        }),
        iV = (0, n.x)({
          ...q,
          id: 0x1fa72e78,
          name: "Sophon Testnet",
          nativeCurrency: { decimals: 18, name: "Sophon", symbol: "SOPH" },
          rpcUrls: {
            default: {
              http: ["https://rpc.testnet.sophon.xyz"],
              webSocket: ["wss://rpc.testnet.sophon.xyz/ws"],
            },
          },
          blockExplorers: {
            default: {
              name: "Sophon Block Explorer",
              url: "https://explorer.testnet.sophon.xyz",
            },
          },
          contracts: {
            multicall3: {
              address: "0x83c04d112adedA2C6D9037bb6ecb42E7f0b108Af",
              blockCreated: 15642,
            },
          },
          testnet: !0,
        }),
        iH = (0, n.x)({
          id: 88882,
          name: "Chiliz Spicy Testnet",
          network: "chiliz-spicy-Testnet",
          nativeCurrency: { decimals: 18, name: "CHZ", symbol: "CHZ" },
          rpcUrls: {
            default: {
              http: [
                "https://spicy-rpc.chiliz.com",
                "https://chiliz-spicy-rpc.publicnode.com",
              ],
              webSocket: [
                "wss://spicy-rpc-ws.chiliz.com",
                "wss://chiliz-spicy-rpc.publicnode.com",
              ],
            },
          },
          blockExplorers: {
            default: {
              name: "Chiliz Explorer",
              url: "http://spicy-explorer.chiliz.com",
              apiUrl: "http://spicy-explorer.chiliz.com/api",
            },
          },
          testnet: !0,
        }),
        ij = (0, n.x)({
          ...nK,
          id: 0x6300b5ea,
          name: "Status Network Sepolia",
          nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
          rpcUrls: {
            default: {
              http: ["https://public.sepolia.rpc.status.network"],
              webSocket: ["wss://public.sepolia.rpc.status.network/ws"],
            },
          },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://sepoliascan.status.network",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 1578364,
            },
          },
          testnet: !0,
        }),
        i_ = (0, n.x)({
          id: 1234,
          name: "Step Network",
          nativeCurrency: { name: "FITFI", symbol: "FITFI", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.step.network"] } },
          blockExplorers: {
            default: { name: "Step Scan", url: "https://stepscan.io" },
          },
          testnet: !1,
        }),
        iG = (0, n.x)({
          id: 1514,
          name: "Story",
          nativeCurrency: { decimals: 18, name: "IP Token", symbol: "IP" },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 340998,
            },
            ensRegistry: {
              address: "0x5dc881dda4e4a8d312be3544ad13118d1a04cb17",
              blockCreated: 648924,
            },
            ensUniversalResolver: {
              address: "0xddfb18888a9466688235887dec2a10c4f5effee9",
              blockCreated: 649114,
            },
          },
          rpcUrls: { default: { http: ["https://mainnet.storyrpc.io"] } },
          blockExplorers: {
            default: {
              name: "Story explorer",
              url: "https://storyscan.xyz",
              apiUrl: "https://storyscan.xyz/api/v2",
            },
          },
          ensTlds: [".ip"],
          testnet: !1,
        }),
        iW = (0, n.x)({
          id: 1315,
          name: "Story Aeneid",
          network: "story-aeneid",
          nativeCurrency: { decimals: 18, name: "IP", symbol: "IP" },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 1792,
            },
            ensRegistry: {
              address: "0x5dC881dDA4e4a8d312be3544AD13118D1a04Cb17",
              blockCreated: 1322033,
            },
            ensUniversalResolver: {
              address: "0x6D3B3F99177FB2A5de7F9E928a9BD807bF7b5BAD",
              blockCreated: 1322097,
            },
          },
          rpcUrls: { default: { http: ["https://aeneid.storyrpc.io"] } },
          blockExplorers: {
            default: {
              name: "Story Aeneid Explorer",
              url: "https://aeneid.storyscan.xyz",
              apiUrl: "https://aeneid.storyscan.xyz/api/v2",
            },
          },
          ensTlds: [".ip"],
          testnet: !0,
        }),
        iq = (0, n.x)({
          id: 1516,
          name: "Story Odyssey",
          nativeCurrency: { decimals: 18, name: "IP", symbol: "IP" },
          rpcUrls: { default: { http: ["https://rpc.odyssey.storyrpc.io"] } },
          blockExplorers: {
            default: {
              name: "Story Odyssey Explorer",
              url: "https://odyssey.storyscan.xyz",
            },
          },
          testnet: !0,
        }),
        i$ = (0, n.x)({
          id: 1513,
          name: "Story Testnet",
          nativeCurrency: { decimals: 18, name: "IP", symbol: "IP" },
          rpcUrls: { default: { http: ["https://testnet.storyrpc.io"] } },
          blockExplorers: {
            default: {
              name: "Story Testnet Explorer",
              url: "https://testnet.storyscan.xyz",
            },
          },
          testnet: !0,
        }),
        iX = (0, n.x)({
          id: 105105,
          name: "Stratis Mainnet",
          network: "stratis",
          nativeCurrency: { name: "Stratis", symbol: "STRAX", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.stratisevm.com"] } },
          blockExplorers: {
            default: {
              name: "Stratis Explorer",
              url: "https://explorer.stratisevm.com",
            },
          },
        }),
        iZ = (0, n.x)({
          id: 8866,
          name: "SuperLumio",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://mainnet.lumio.io"] } },
          blockExplorers: {
            default: {
              name: "Lumio explorer",
              url: "https://explorer.lumio.io",
            },
          },
          testnet: !1,
        }),
        iJ = (0, n.x)({
          id: 55244,
          name: "Superposition",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.superposition.so"] } },
          blockExplorers: {
            default: {
              name: "Superposition Explorer",
              url: "https://explorer.superposition.so",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 39,
            },
          },
          testnet: !1,
        }),
        iY = (0, n.x)({
          ...ei,
          id: 5330,
          name: "Superseed",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://mainnet.superseed.xyz"] } },
          blockExplorers: {
            default: {
              name: "Superseed Explorer",
              url: "https://explorer.superseed.xyz",
              apiUrl: "https://explorer.superseed.xyz/api/v2",
            },
          },
          contracts: {
            ...ei.contracts,
            disputeGameFactory: {
              1: {
                address: "0x8b097CF1f9BbD9cbFD0DD561858a1FCbC8857Be0",
                blockCreated: 0x13c6dc9,
              },
            },
            l2OutputOracle: {
              1: {
                address: "0x693A0F8854F458D282DE3C5b69E8eE5EEE8aA949",
                blockCreated: 0x13c6dc9,
              },
            },
            portal: {
              1: {
                address: "0x2c2150aa5c75A24fB93d4fD2F2a895D618054f07",
                blockCreated: 0x13c6dc9,
              },
            },
            l1StandardBridge: {
              1: {
                address: "0x8b0576E39F1233679109F9b40cFcC2a7E0901Ede",
                blockCreated: 0x13c6dc9,
              },
            },
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
            },
          },
          sourceId: 1,
        }),
        iQ = (0, n.x)({
          ...ei,
          id: 53302,
          name: "Superseed Sepolia",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://sepolia.superseed.xyz"] } },
          blockExplorers: {
            default: {
              name: "Superseed Sepolia Explorer",
              url: "https://sepolia-explorer.superseed.xyz",
              apiUrl: "https://sepolia-explorer.superseed.xyz/api/v2",
            },
          },
          contracts: {
            ...ei.contracts,
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
            },
            portal: {
              0xaa36a7: {
                address: "0x7A0db8C51432d2C3eb4e8f360a2EeB26FF2809fB",
                blockCreated: 5523438,
              },
            },
            l1StandardBridge: {
              0xaa36a7: {
                address: "0x2B227A603fAAdB3De0ED050b63ADD232B5f2c28C",
                blockCreated: 5523442,
              },
            },
          },
          testnet: !0,
          sourceId: 0xaa36a7,
        }),
        i0 = (0, n.x)({
          id: 254,
          name: "Swan Chain Mainnet",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://mainnet-rpc.swanchain.org"] } },
          blockExplorers: {
            default: { name: "Swan Explorer", url: "https://swanscan.io" },
          },
          testnet: !1,
        }),
        i1 = (0, n.x)({
          id: 0x134daed,
          name: "Swan Proxima Testnet",
          nativeCurrency: { name: "Swan Ether", symbol: "sETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc-proxima.swanchain.io	"] } },
          blockExplorers: {
            default: {
              name: "Swan Explorer",
              url: "https://proxima-explorer.swanchain.io",
            },
          },
          testnet: !0,
        }),
        i2 = (0, n.x)({
          id: 2024,
          name: "Swan Saturn Testnet",
          nativeCurrency: { name: "Swan Ether", symbol: "sETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://saturn-rpc.swanchain.io"] } },
          blockExplorers: {
            default: {
              name: "Swan Explorer",
              url: "https://saturn-explorer.swanchain.io",
            },
          },
          testnet: !0,
        }),
        i3 = (0, n.x)({
          ...ei,
          id: 1923,
          name: "Swellchain",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://swell-mainnet.alt.technology"] },
          },
          blockExplorers: {
            default: {
              name: "Swell Explorer",
              url: "https://explorer.swellnetwork.io",
              apiUrl: "https://explorer.swellnetwork.io/api",
            },
          },
          contracts: {
            ...ei.contracts,
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 1,
            },
          },
        }),
        i7 = (0, n.x)({
          ...ei,
          id: 1924,
          name: "Swellchain Testnet",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://swell-testnet.alt.technology"] },
          },
          blockExplorers: {
            default: {
              name: "Swellchain Testnet Explorer",
              url: "https://swell-testnet-explorer.alt.technology",
              apiUrl: "https://swell-testnet-explorer.alt.technology/api",
            },
          },
          contracts: {
            ...ei.contracts,
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 1,
            },
          },
        }),
        i6 = (0, n.x)({
          id: 94,
          name: "SwissDLT Mainnet",
          nativeCurrency: { decimals: 18, name: "BCTS", symbol: "BCTS" },
          rpcUrls: { default: { http: ["https://rpc.swissdlt.ch"] } },
          blockExplorers: {
            default: {
              name: "SwissDLT Explorer",
              url: "https://explorer.swissdlt.ch",
            },
          },
          testnet: !1,
        }),
        i8 = (0, n.x)({
          id: 57,
          name: "Syscoin Mainnet",
          nativeCurrency: { decimals: 18, name: "Syscoin", symbol: "SYS" },
          rpcUrls: {
            default: {
              http: ["https://rpc.syscoin.org"],
              webSocket: ["wss://rpc.syscoin.org/wss"],
            },
          },
          blockExplorers: {
            default: {
              name: "SyscoinExplorer",
              url: "https://explorer.syscoin.org",
              apiUrl: "https://explorer.syscoin.org/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 287139,
            },
          },
        }),
        i5 = (0, n.x)({
          id: 5700,
          name: "Syscoin Tanenbaum Testnet",
          nativeCurrency: { decimals: 18, name: "Syscoin", symbol: "SYS" },
          rpcUrls: {
            default: {
              http: ["https://rpc.tanenbaum.io"],
              webSocket: ["wss://rpc.tanenbaum.io/wss"],
            },
          },
          blockExplorers: {
            default: {
              name: "SyscoinTestnetExplorer",
              url: "https://tanenbaum.io",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 271288,
            },
          },
        }),
        i9 = (0, n.x)({
          id: 167e3,
          name: "Taiko Mainnet",
          nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
          rpcUrls: {
            default: {
              http: ["https://rpc.mainnet.taiko.xyz"],
              webSocket: ["wss://ws.mainnet.taiko.xyz"],
            },
          },
          blockExplorers: {
            default: {
              name: "Taikoscan",
              url: "https://taikoscan.io",
              apiUrl: "https://api.taikoscan.io/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcb2436774C3e191c85056d248EF4260ce5f27A9D",
            },
          },
        }),
        i4 = (0, n.x)({
          id: 167009,
          name: "Taiko Hekla L2",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.hekla.taiko.xyz"] } },
          blockExplorers: {
            default: {
              name: "Taikoscan",
              url: "https://hekla.taikoscan.network",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 59757,
            },
          },
          testnet: !0,
        }),
        le = (0, n.x)({
          id: 167007,
          name: "Taiko Jolnir (Alpha-5 Testnet)",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.jolnir.taiko.xyz"] } },
          blockExplorers: {
            default: {
              name: "blockscout",
              url: "https://explorer.jolnir.taiko.xyz",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 732706,
            },
          },
          testnet: !0,
        }),
        lt = (0, n.x)({
          id: 167008,
          name: "Taiko Katla (Alpha-6 Testnet)",
          network: "tko-katla",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.katla.taiko.xyz"] } },
          blockExplorers: {
            default: {
              name: "blockscout",
              url: "https://explorer.katla.taiko.xyz",
            },
          },
        }),
        lr = (0, n.x)({
          id: 167005,
          name: "Taiko (Alpha-3 Testnet)",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.test.taiko.xyz"] } },
          blockExplorers: {
            default: {
              name: "blockscout",
              url: "https://explorer.test.taiko.xyz",
            },
          },
        }),
        la = (0, n.x)({
          id: 841,
          name: "Taraxa Mainnet",
          nativeCurrency: { name: "Tara", symbol: "TARA", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.mainnet.taraxa.io"] } },
          blockExplorers: {
            default: {
              name: "Taraxa Explorer",
              url: "https://explorer.mainnet.taraxa.io",
            },
          },
        }),
        ln = (0, n.x)({
          id: 842,
          name: "Taraxa Testnet",
          nativeCurrency: { name: "Tara", symbol: "TARA", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.testnet.taraxa.io"] } },
          blockExplorers: {
            default: {
              name: "Taraxa Explorer",
              url: "https://explorer.testnet.taraxa.io",
            },
          },
          testnet: !0,
        }),
        ls = (0, n.x)({
          id: 2017,
          name: "Telcoin Adiri Testnet",
          nativeCurrency: { name: "Telcoin", symbol: "TEL", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.telcoin.network"] } },
          blockExplorers: {
            default: { name: "telscan", url: "https://telscan.io" },
          },
          testnet: !0,
        }),
        lo = (0, n.x)({
          id: 40,
          name: "Telos",
          nativeCurrency: { decimals: 18, name: "Telos", symbol: "TLOS" },
          rpcUrls: { default: { http: ["https://rpc.telos.net"] } },
          blockExplorers: {
            default: { name: "Teloscan", url: "https://www.teloscan.io/" },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 0xeb1c295,
            },
          },
        }),
        li = (0, n.x)({
          id: 41,
          name: "Telos",
          nativeCurrency: { decimals: 18, name: "Telos", symbol: "TLOS" },
          rpcUrls: { default: { http: ["https://rpc.testnet.telos.net"] } },
          blockExplorers: {
            default: {
              name: "Teloscan (testnet)",
              url: "https://testnet.teloscan.io/",
            },
          },
          testnet: !0,
        }),
        ll = (0, n.x)({
          id: 1559,
          name: "Tenet",
          network: "tenet-mainnet",
          nativeCurrency: { name: "TENET", symbol: "TENET", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.tenet.org"] } },
          blockExplorers: {
            default: {
              name: "TenetScan Mainnet",
              url: "https://tenetscan.io",
              apiUrl: "https://tenetscan.io/api",
            },
          },
          testnet: !1,
        }),
        lc = (0, n.x)({
          id: 752025,
          name: "Ternoa",
          nativeCurrency: {
            name: "Capsule Coin",
            symbol: "CAPS",
            decimals: 18,
          },
          rpcUrls: {
            default: { http: ["https://rpc-mainnet.zkevm.ternoa.network"] },
          },
          blockExplorers: {
            default: {
              name: "Ternoa Explorer",
              url: "https://explorer-mainnet.zkevm.ternoa.network",
            },
          },
          testnet: !1,
        }),
        ld = (0, n.x)({
          id: 7,
          name: "ThaiChain",
          nativeCurrency: { name: "TCH", symbol: "TCH", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.thaichain.org"] } },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://exp.thaichain.org",
              apiUrl: "https://exp.thaichain.org/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0x0DaD6130e832c21719C5CE3bae93454E16A84826",
              blockCreated: 4806386,
            },
          },
          testnet: !1,
        }),
        lu = (0, n.x)({
          id: 8428,
          name: "THAT Mainnet",
          nativeCurrency: { name: "THAT", symbol: "THAT", decimals: 18 },
          rpcUrls: { default: { http: ["https://api.thatchain.io/mainnet"] } },
          blockExplorers: {
            default: { name: "Blockscout", url: "https://that.blockscout.com" },
          },
          testnet: !1,
        }),
        lp = (0, n.x)({
          id: 361,
          name: "Theta Mainnet",
          nativeCurrency: { name: "TFUEL", symbol: "TFUEL", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://eth-rpc-api.thetatoken.org/rpc"] },
          },
          blockExplorers: {
            default: {
              name: "Theta Explorer",
              url: "https://explorer.thetatoken.org",
            },
          },
          testnet: !1,
        }),
        lh = (0, n.x)({
          id: 365,
          name: "Theta Testnet",
          nativeCurrency: { name: "TFUEL", symbol: "TFUEL", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://eth-rpc-api-testnet.thetatoken.org/rpc"],
            },
          },
          blockExplorers: {
            default: {
              name: "Theta Explorer",
              url: "https://testnet-explorer.thetatoken.org",
            },
          },
          testnet: !0,
        }),
        lm = (0, n.x)({
          id: 108,
          name: "ThunderCore Mainnet",
          nativeCurrency: { name: "TT", symbol: "TT", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://mainnet-rpc.thundercore.com"] },
          },
          blockExplorers: {
            default: {
              name: "ThunderCore Explorer",
              url: "https://explorer-mainnet.thundercore.com",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 0,
            },
          },
          testnet: !1,
        }),
        lf = (0, n.x)({
          id: 997,
          name: "5ireChain Thunder Testnet",
          nativeCurrency: { name: "5ire Token", symbol: "5IRE", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.testnet.5ire.network"] } },
          blockExplorers: {
            default: {
              name: "5ireChain Thunder Explorer",
              url: "https://testnet.5irescan.io/",
            },
          },
          testnet: !0,
        }),
        lb = (0, n.x)({
          id: 62092,
          name: "TikTrix Testnet",
          nativeCurrency: { name: "tTTX", symbol: "tTTX", decimals: 18 },
          rpcUrls: { default: { http: ["https://tiktrix-rpc.xyz"] } },
          blockExplorers: {
            default: {
              name: "TikTrix Testnet Explorer",
              url: "https://tiktrix.xyz",
            },
          },
          testnet: !0,
        }),
        ly = (0, n.x)({
          id: 6969,
          name: "Tomb Mainnet",
          nativeCurrency: { name: "TOMB", symbol: "TOMB", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.tombchain.com"] } },
          blockExplorers: {
            default: { name: "Tomb Explorer", url: "https://tombscout.com" },
          },
          testnet: !1,
        }),
        lx = (0, n.x)({
          ...q,
          id: 61166,
          name: "Treasure",
          nativeCurrency: { decimals: 18, name: "MAGIC", symbol: "MAGIC" },
          rpcUrls: {
            default: {
              http: ["https://rpc.treasure.lol"],
              webSocket: ["wss://rpc.treasure.lol/ws"],
            },
          },
          blockExplorers: {
            default: {
              name: "Treasure Block Explorer",
              url: "https://treasurescan.io",
            },
          },
          contracts: {
            multicall3: {
              address: "0x2e29fe39496a56856D8698bD43e1dF4D0CE6266a",
              blockCreated: 101,
            },
          },
          testnet: !1,
        }),
        lv = (0, n.x)({
          ...q,
          id: 978658,
          name: "Treasure Topaz Testnet",
          nativeCurrency: { decimals: 18, name: "MAGIC", symbol: "MAGIC" },
          rpcUrls: {
            default: {
              http: ["https://rpc.topaz.treasure.lol"],
              webSocket: ["wss://rpc.topaz.treasure.lol/ws"],
            },
          },
          blockExplorers: {
            default: {
              name: "Treasure Topaz Block Explorer",
              url: "https://topaz.treasurescan.io",
            },
          },
          contracts: {
            multicall3: {
              address: "0xF9cda624FBC7e059355ce98a31693d299FACd963",
              blockCreated: 108112,
            },
          },
          testnet: !0,
        }),
        lg = (0, n.x)({
          id: 0x2b6653dc,
          name: "Tron",
          nativeCurrency: { name: "TRON", symbol: "TRX", decimals: 6 },
          rpcUrls: { default: { http: ["https://api.trongrid.io/jsonrpc"] } },
          blockExplorers: {
            default: {
              name: "Tronscan",
              url: "https://tronscan.org",
              apiUrl: "https://apilist.tronscanapi.com/api",
            },
          },
        }),
        lE = (0, n.x)({
          id: 0x94a9059e,
          name: "Tron Shasta",
          nativeCurrency: { name: "TRON", symbol: "TRX", decimals: 6 },
          rpcUrls: {
            default: { http: ["https://api.shasta.trongrid.io/jsonrpc"] },
          },
          blockExplorers: {
            default: { name: "Tronscan", url: "https://shasta.tronscan.org" },
          },
          testnet: !0,
        }),
        lk = (0, n.x)({
          id: 8,
          name: "Ubiq Mainnet",
          nativeCurrency: { name: "UBQ", symbol: "UBQ", decimals: 18 },
          rpcUrls: { default: { http: ["https://pyrus2.ubiqscan.io"] } },
          blockExplorers: {
            default: { name: "Ubiq Scan", url: "https://ubiqscan.io" },
          },
          testnet: !1,
        }),
        lC = (0, n.x)({
          id: 19991,
          name: "Ultra EVM",
          nativeCurrency: { decimals: 18, name: "Ultra Token", symbol: "UOS" },
          rpcUrls: { default: { http: ["https://evm.ultra.eosusa.io"] } },
          blockExplorers: {
            default: {
              name: "Ultra EVM Explorer",
              url: "https://evmexplorer.ultra.io",
            },
          },
        }),
        lw = (0, n.x)({
          id: 18881,
          name: "Ultra EVM Testnet",
          nativeCurrency: { decimals: 18, name: "Ultra Token", symbol: "UOS" },
          rpcUrls: { default: { http: ["https://evm.test.ultra.eosusa.io"] } },
          blockExplorers: {
            default: {
              name: "Ultra EVM Testnet Explorer",
              url: "https://evmexplorer.testnet.ultra.io",
            },
          },
          testnet: !0,
        }),
        lT = (0, n.x)({
          id: 1231,
          name: "Ultron Mainnet",
          nativeCurrency: { name: "ULX", symbol: "ULX", decimals: 18 },
          rpcUrls: { default: { http: ["https://ultron-rpc.net"] } },
          blockExplorers: {
            default: { name: "Ultron Scan", url: "https://ulxscan.com" },
          },
          testnet: !1,
        }),
        lS = (0, n.x)({
          id: 1230,
          name: "Ultron Testnet",
          nativeCurrency: { name: "ULX", symbol: "ULX", decimals: 18 },
          rpcUrls: { default: { http: ["https://ultron-dev.io"] } },
          blockExplorers: {
            default: {
              name: "Ultron Scan",
              url: "https://explorer.ultron-dev.io",
            },
          },
          testnet: !0,
        }),
        lA = (0, n.x)({
          ...ei,
          id: 130,
          name: "Unichain",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://mainnet.unichain.org/"] } },
          blockExplorers: {
            default: {
              name: "Uniscan",
              url: "https://uniscan.xyz",
              apiUrl: "https://api.uniscan.xyz/api",
            },
          },
          contracts: {
            ...ei.contracts,
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0,
            },
            disputeGameFactory: {
              1: { address: "0x2F12d621a16e2d3285929C9996f478508951dFe4" },
            },
            portal: {
              1: { address: "0x0bd48f6B86a26D3a217d0Fa6FfE2B491B956A7a2" },
            },
            l1StandardBridge: {
              1: { address: "0x81014F44b0a345033bB2b3B21C7a1A308B35fEeA" },
            },
          },
          sourceId: 1,
        }),
        lU = (0, n.x)({
          ...ei,
          id: 1301,
          name: "Unichain Sepolia",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://sepolia.unichain.org"] } },
          blockExplorers: {
            default: {
              name: "Uniscan",
              url: "https://sepolia.uniscan.xyz",
              apiUrl: "https://api-sepolia.uniscan.xyz/api",
            },
          },
          contracts: {
            ...ei.contracts,
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0,
            },
            portal: {
              0xaa36a7: {
                address: "0x0d83dab629f0e0F9d36c0Cbc89B69a489f0751bD",
              },
            },
            l1StandardBridge: {
              0xaa36a7: {
                address: "0xea58fcA6849d79EAd1f26608855c2D6407d54Ce2",
              },
            },
            disputeGameFactory: {
              0xaa36a7: {
                address: "0xeff73e5aa3B9AEC32c659Aa3E00444d20a84394b",
              },
            },
          },
          testnet: !0,
          sourceId: 0xaa36a7,
        }),
        lB = (0, n.x)({
          id: 8880,
          name: "Unique Mainnet",
          nativeCurrency: { decimals: 18, name: "UNQ", symbol: "UNQ" },
          rpcUrls: { default: { http: ["https://rpc.unique.network"] } },
          blockExplorers: {
            default: {
              name: "Unique Subscan",
              url: "https://unique.subscan.io/",
            },
          },
        }),
        lM = (0, n.x)({
          id: 8882,
          name: "Opal Testnet",
          nativeCurrency: { decimals: 18, name: "OPL", symbol: "OPL" },
          rpcUrls: { default: { http: ["https://rpc-opal.unique.network"] } },
          blockExplorers: {
            default: { name: "Opal Subscan", url: "https://opal.subscan.io/" },
          },
          testnet: !0,
        }),
        lP = (0, n.x)({
          id: 8881,
          name: "Quartz Mainnet",
          nativeCurrency: { decimals: 18, name: "QTZ", symbol: "QTZ" },
          rpcUrls: { default: { http: ["https://rpc-quartz.unique.network"] } },
          blockExplorers: {
            default: {
              name: "Quartz Subscan",
              url: "https://quartz.subscan.io/",
            },
          },
        }),
        lD = (0, n.x)({
          id: 18233,
          name: "Unreal",
          nativeCurrency: { name: "reETH", decimals: 18, symbol: "reETH" },
          rpcUrls: {
            default: { http: ["https://rpc.unreal-orbit.gelato.digital"] },
          },
          blockExplorers: {
            default: {
              name: "Unreal Explorer",
              url: "https://unreal.blockscout.com",
              apiUrl: "https://unreal.blockscout.com/api/v2",
            },
          },
          testnet: !0,
          contracts: {
            multicall3: {
              address: "0x8b6B0e60D8CD84898Ea8b981065A12F876eA5677",
              blockCreated: 1745,
            },
          },
        }),
        lF = (0, n.x)({
          id: 2040,
          name: "Vanar Mainnet",
          nativeCurrency: { name: "VANRY", symbol: "VANRY", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.vanarchain.com"] } },
          blockExplorers: {
            default: {
              name: "Vanar Mainnet Explorer",
              url: "https://explorer.vanarchain.com/",
            },
          },
          testnet: !1,
        }),
        lI = (0, n.x)({
          id: 100009,
          name: "Vechain",
          nativeCurrency: { name: "VeChain", symbol: "VET", decimals: 18 },
          rpcUrls: { default: { http: ["https://mainnet.vechain.org"] } },
          blockExplorers: {
            default: {
              name: "Vechain Explorer",
              url: "https://explore.vechain.org",
            },
            vechainStats: {
              name: "Vechain Stats",
              url: "https://vechainstats.com",
            },
          },
        }),
        lO = (0, n.x)({
          id: 106,
          name: "Velas EVM Mainnet",
          nativeCurrency: { name: "VLX", symbol: "VLX", decimals: 18 },
          rpcUrls: { default: { http: ["https://evmexplorer.velas.com/rpc"] } },
          blockExplorers: {
            default: {
              name: "Velas Explorer",
              url: "https://evmexplorer.velas.com",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 0x354b739,
            },
          },
          testnet: !1,
        }),
        lR = (0, n.x)({
          id: 88,
          name: "Viction",
          nativeCurrency: { name: "Viction", symbol: "VIC", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.viction.xyz"] } },
          blockExplorers: {
            default: { name: "VIC Scan", url: "https://vicscan.xyz" },
          },
          testnet: !1,
        }),
        lL = (0, n.x)({
          id: 89,
          name: "Viction Testnet",
          nativeCurrency: { name: "Viction", symbol: "VIC", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc-testnet.viction.xyz"] } },
          blockExplorers: {
            default: { name: "VIC Scan", url: "https://testnet.vicscan.xyz" },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 0xb9b3c3,
            },
          },
          testnet: !0,
        }),
        lN = (0, n.x)({
          id: 888888,
          name: "Vision",
          nativeCurrency: { name: "VISION", symbol: "VS", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://infragrid.v.network/ethereum/compatible"],
            },
          },
          blockExplorers: {
            default: { name: "Vision Scan", url: "https://visionscan.org" },
          },
          testnet: !1,
        }),
        lz = (0, n.x)({
          id: 666666,
          name: "Vision Testnet",
          nativeCurrency: { name: "VISION", symbol: "VS", decimals: 18 },
          rpcUrls: {
            default: {
              http: [
                "https://vpioneer.infragrid.v.network/ethereum/compatible",
              ],
            },
          },
          blockExplorers: {
            default: {
              name: "Vision Scan",
              url: "https://visionscan.org/?chain=vpioneer",
            },
          },
          testnet: !0,
        }),
        lK = (0, n.x)({
          id: 888,
          name: "Wanchain",
          nativeCurrency: { name: "WANCHAIN", symbol: "WAN", decimals: 18 },
          rpcUrls: {
            default: {
              http: [
                "https://gwan-ssl.wandevs.org:56891",
                "https://gwan2-ssl.wandevs.org",
              ],
            },
          },
          blockExplorers: {
            default: { name: "WanScan", url: "https://wanscan.org" },
          },
          contracts: {
            multicall3: {
              address: "0xcDF6A1566e78EB4594c86Fe73Fcdc82429e97fbB",
              blockCreated: 0x1823c86,
            },
          },
        }),
        lV = (0, n.x)({
          id: 999,
          name: "Wanchain Testnet",
          nativeCurrency: { name: "WANCHAIN", symbol: "WANt", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://gwan-ssl.wandevs.org:46891"] },
          },
          blockExplorers: {
            default: { name: "WanScanTest", url: "https://wanscan.org" },
          },
          contracts: {
            multicall3: {
              address: "0x11c89bF4496c39FB80535Ffb4c92715839CC5324",
              blockCreated: 0x1798e18,
            },
          },
          testnet: !0,
        }),
        lH = (0, n.x)({
          id: 9496,
          name: "WeaveVM Alphanet",
          nativeCurrency: {
            name: "Testnet WeaveVM",
            symbol: "tWVM",
            decimals: 18,
          },
          rpcUrls: { default: { http: ["https://testnet-rpc.wvm.dev"] } },
          blockExplorers: {
            default: {
              name: "WeaveVM Alphanet Explorer",
              url: "https://explorer.wvm.dev",
            },
          },
          testnet: !0,
        }),
        lj = (0, n.x)({
          id: 1111,
          name: "WEMIX",
          network: "wemix-mainnet",
          nativeCurrency: { name: "WEMIX", symbol: "WEMIX", decimals: 18 },
          rpcUrls: { default: { http: ["https://api.wemix.com"] } },
          blockExplorers: {
            default: {
              name: "wemixExplorer",
              url: "https://explorer.wemix.com",
            },
          },
        }),
        l_ = (0, n.x)({
          id: 1112,
          name: "WEMIX Testnet",
          network: "wemix-testnet",
          nativeCurrency: { name: "WEMIX", symbol: "tWEMIX", decimals: 18 },
          rpcUrls: { default: { http: ["https://api.test.wemix.com"] } },
          blockExplorers: {
            default: {
              name: "wemixExplorer",
              url: "https://testnet.wemixscan.com",
              apiUrl: "https://testnet.wemixscan.com/api",
            },
          },
          testnet: !0,
        }),
        lG = (0, n.x)({
          id: 0x190f1b45,
          name: "Westend Asset Hub",
          nativeCurrency: { decimals: 18, name: "Westies", symbol: "WND" },
          rpcUrls: {
            default: {
              http: ["https://westend-asset-hub-eth-rpc.polkadot.io"],
            },
          },
          blockExplorers: {
            default: {
              name: "subscan",
              url: "https://westend-asset-hub-eth-explorer.parity.io",
            },
          },
          testnet: !0,
        }),
        lW = (0, n.x)({
          testnet: !1,
          name: "Whitechain",
          blockExplorers: {
            default: {
              name: "Whitechain Explorer",
              url: "https://explorer.whitechain.io",
            },
          },
          id: 1875,
          rpcUrls: { default: { http: ["https://rpc.whitechain.io"] } },
          nativeCurrency: {
            decimals: 18,
            name: "WhiteBIT Coin",
            symbol: "WBT",
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 0x180b54d,
            },
          },
        }),
        lq = (0, n.x)({
          testnet: !0,
          name: "Whitechain Testnet",
          blockExplorers: {
            default: {
              name: "Whitechain Explorer",
              url: "https://testnet.whitechain.io",
            },
          },
          id: 2625,
          rpcUrls: { default: { http: ["https://rpc-testnet.whitechain.io"] } },
          nativeCurrency: {
            decimals: 18,
            name: "WhiteBIT Coin",
            symbol: "WBT",
          },
        }),
        l$ = (0, n.x)({
          id: 42070,
          name: "WMC Testnet",
          nativeCurrency: { name: "WMTx", symbol: "WMTx", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://rpc-testnet-base.worldmobile.net"] },
          },
          blockExplorers: {
            default: {
              name: "WMC Explorer",
              url: "https://explorer2-base-testnet.worldmobile.net",
            },
          },
          testnet: !0,
        }),
        lX = (0, n.x)({
          ...ei,
          id: 480,
          name: "World Chain",
          network: "worldchain",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://worldchain-mainnet.g.alchemy.com/public"],
            },
          },
          blockExplorers: {
            default: {
              name: "Worldscan",
              url: "https://worldscan.org",
              apiUrl: "https://api.worldscan.org/api",
            },
            blockscout: {
              name: "Blockscout",
              url: "https://worldchain-mainnet.explorer.alchemy.com",
              apiUrl: "https://worldchain-mainnet.explorer.alchemy.com/api",
            },
          },
          contracts: {
            ...ei.contracts,
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0,
            },
            disputeGameFactory: {
              1: { address: "0x069c4c579671f8c120b1327a73217D01Ea2EC5ea" },
            },
            l2OutputOracle: {
              1: { address: "0x19A6d1E9034596196295CF148509796978343c5D" },
            },
            portal: {
              1: { address: "0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C" },
            },
            l1StandardBridge: {
              1: { address: "0x470458C91978D2d929704489Ad730DC3E3001113" },
            },
          },
          testnet: !1,
          sourceId: 1,
        }),
        lZ = (0, n.x)({
          ...ei,
          id: 4801,
          name: "World Chain Sepolia",
          network: "worldchain-sepolia",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://worldchain-sepolia.g.alchemy.com/public"],
            },
          },
          blockExplorers: {
            default: {
              name: "Worldscan Sepolia",
              url: "https://sepolia.worldscan.org",
              apiUrl: "https://api-sepolia.worldscan.org/api",
            },
            blockscout: {
              name: "Blockscout",
              url: "https://worldchain-sepolia.explorer.alchemy.com",
              apiUrl: "https://worldchain-sepolia.explorer.alchemy.com/api",
            },
          },
          contracts: {
            ...ei.contracts,
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0,
            },
            disputeGameFactory: {
              0xaa36a7: {
                address: "0x8cF97Ee616C986a070F5020d973b456D0120C253",
              },
            },
            l2OutputOracle: {
              0xaa36a7: {
                address: "0xc8886f8BAb6Eaeb215aDB5f1c686BF699248300e",
              },
            },
            portal: {
              0xaa36a7: {
                address: "0xFf6EBa109271fe6d4237EeeD4bAb1dD9A77dD1A4",
              },
            },
            l1StandardBridge: {
              0xaa36a7: {
                address: "0xd7DF54b3989855eb66497301a4aAEc33Dbb3F8DE",
              },
            },
          },
          testnet: !0,
          sourceId: 0xaa36a7,
        }),
        lJ = (0, n.x)({
          id: 103,
          name: "WorldLand Mainnet",
          nativeCurrency: { decimals: 18, name: "WLC", symbol: "WLC" },
          rpcUrls: {
            default: { http: ["https://seoul.worldland.foundation"] },
          },
          blockExplorers: {
            default: {
              name: "WorldLand Scan",
              url: "https://scan.worldland.foundation",
            },
          },
          testnet: !1,
        }),
        lY = (0, n.x)({
          id: 660279,
          name: "Xai Mainnet",
          nativeCurrency: { name: "Xai", symbol: "XAI", decimals: 18 },
          rpcUrls: { default: { http: ["https://xai-chain.net/rpc"] } },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://explorer.xai-chain.net",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 222549,
            },
          },
          testnet: !1,
        }),
        lQ = (0, n.x)({
          id: 0x8c7f67225,
          name: "Xai Testnet",
          nativeCurrency: { name: "sXai", symbol: "sXAI", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://testnet-v2.xai-chain.net/rpc"] },
          },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://testnet-explorer-v2.xai-chain.net",
            },
          },
          testnet: !0,
        }),
        l0 = (0, n.x)({
          id: 50,
          name: "XDC Network",
          nativeCurrency: { decimals: 18, name: "XDC", symbol: "XDC" },
          rpcUrls: { default: { http: ["https://rpc.xdcrpc.com"] } },
          blockExplorers: {
            default: { name: "XDCScan", url: "https://xdcscan.com" },
          },
          contracts: {
            multicall3: {
              address: "0x0B1795ccA8E4eC4df02346a082df54D437F8D9aF",
              blockCreated: 0x485e5f4,
            },
          },
        }),
        l1 = (0, n.x)({
          id: 51,
          name: "Apothem Network",
          nativeCurrency: { decimals: 18, name: "TXDC", symbol: "TXDC" },
          rpcUrls: { default: { http: ["https://erpc.apothem.network"] } },
          blockExplorers: {
            default: { name: "XDCScan", url: "https://testnet.xdcscan.com" },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 0x38ff28d,
            },
          },
        }),
        l2 = (0, n.x)({
          id: 196,
          name: "X Layer Mainnet",
          nativeCurrency: { decimals: 18, name: "OKB", symbol: "OKB" },
          rpcUrls: { default: { http: ["https://rpc.xlayer.tech"] } },
          blockExplorers: {
            default: {
              name: "OKLink",
              url: "https://www.oklink.com/xlayer",
              apiUrl: "https://www.oklink.com/api/v5/explorer/xlayer/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 47416,
            },
          },
        }),
        l3 = (0, n.x)({
          id: 195,
          name: "X1 Testnet",
          nativeCurrency: { decimals: 18, name: "OKB", symbol: "OKB" },
          rpcUrls: { default: { http: ["https://xlayertestrpc.okx.com"] } },
          blockExplorers: {
            default: {
              name: "OKLink",
              url: "https://www.oklink.com/xlayer-test",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 624344,
            },
          },
          testnet: !0,
        }),
        l7 = (0, n.x)({
          id: 273,
          name: "XR One",
          nativeCurrency: { decimals: 18, name: "XR1", symbol: "XR1" },
          rpcUrls: {
            default: {
              http: ["https://xr1.calderachain.xyz/http"],
              webSocket: ["wss://xr1.calderachain.xyz/ws"],
            },
          },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://xr1.calderaexplorer.xyz",
            },
          },
          testnet: !1,
        }),
        l6 = (0, n.x)({
          id: 1440002,
          name: "XRPL EVM Devnet",
          nativeCurrency: { name: "XRP", symbol: "XRP", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://rpc.xrplevm.org/"] },
            public: { http: ["https://rpc.xrplevm.org/"] },
          },
          blockExplorers: {
            default: {
              name: "XRPLEVM Devnet Explorer",
              url: "https://explorer.xrplevm.org/",
            },
          },
          contracts: {
            multicall3: {
              address: "0x82Cc144D7d0AD4B1c27cb41420e82b82Ad6e9B31",
              blockCreated: 0xe880a6,
            },
          },
          testnet: !0,
        }),
        l8 = (0, n.x)({
          id: 1449e3,
          name: "XRPL EVM Testnet",
          nativeCurrency: { name: "XRP", symbol: "XRP", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.testnet.xrplevm.org"] } },
          blockExplorers: {
            default: {
              name: "blockscout",
              url: "https://explorer.testnet.xrplevm.org",
              apiUrl: "https://explorer.testnet.xrplevm.org/api/v2",
            },
          },
          contracts: {
            multicall3: {
              address: "0x82Cc144D7d0AD4B1c27cb41420e82b82Ad6e9B31",
              blockCreated: 492302,
            },
          },
          testnet: !0,
        }),
        l5 = (0, n.x)({
          id: 2730,
          name: "XR Sepolia",
          nativeCurrency: { decimals: 18, name: "tXR", symbol: "tXR" },
          rpcUrls: {
            default: {
              http: ["https://xr-sepolia-testnet.rpc.caldera.xyz/http"],
            },
          },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "https://xr-sepolia-testnet.explorer.caldera.xyz",
            },
          },
          testnet: !0,
        }),
        l9 = (0, n.x)({
          id: 50005,
          name: "Yooldo Verse",
          nativeCurrency: { name: "OAS", symbol: "OAS", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.yooldo-verse.xyz"] } },
          blockExplorers: {
            default: {
              name: "Yooldo Verse Explorer",
              url: "https://explorer.yooldo-verse.xyz",
            },
          },
        }),
        l4 = (0, n.x)({
          id: 50006,
          name: "Yooldo Verse Testnet",
          nativeCurrency: { name: "OAS", symbol: "OAS", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://rpc.testnet.yooldo-verse.xyz"] },
          },
          blockExplorers: {
            default: {
              name: "Yooldo Verse Testnet Explorer",
              url: "https://explorer.testnet.yooldo-verse.xyz",
            },
          },
          testnet: !0,
        }),
        ce = (0, n.x)({
          id: 8408,
          name: "ZenChain Testnet",
          nativeCurrency: { decimals: 18, name: "ZTC", symbol: "ZTC" },
          rpcUrls: {
            default: {
              http: ["https://zenchain-testnet.api.onfinality.io/public"],
              webSocket: ["wss://zenchain-testnet.api.onfinality.io/public-ws"],
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 230019,
            },
          },
          blockExplorers: {
            default: { name: "Zentrace", url: "https://zentrace.io" },
          },
          testnet: !0,
        }),
        ct = (0, n.x)({
          id: 0x59454e4951,
          name: "Zeniq Mainnet",
          nativeCurrency: { name: "ZENIQ", symbol: "ZENIQ", decimals: 18 },
          rpcUrls: { default: { http: ["https://api.zeniq.network"] } },
          blockExplorers: {
            default: { name: "Zeniq Explorer", url: "https://zeniqscan.com" },
          },
          testnet: !1,
        }),
        cr = (0, n.x)({
          id: 16600,
          name: "0G Newton Testnet",
          nativeCurrency: { name: "A0GI", symbol: "A0GI", decimals: 18 },
          rpcUrls: { default: { http: ["https://evmrpc-testnet.0g.ai"] } },
          blockExplorers: {
            default: {
              name: "0G BlockChain Explorer",
              url: "https://chainscan-newton.0g.ai",
            },
          },
          testnet: !0,
        }),
        ca = (0, n.x)({
          id: 543210,
          name: "Zero Network",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["https://rpc.zerion.io/v1/zero"] } },
          blockExplorers: {
            default: {
              name: "Zero Network Explorer",
              url: "https://explorer.zero.network",
            },
          },
          testnet: !1,
        }),
        cn = (0, n.x)({
          id: 7e3,
          name: "ZetaChain",
          nativeCurrency: { decimals: 18, name: "Zeta", symbol: "ZETA" },
          rpcUrls: {
            default: {
              http: ["https://zetachain-evm.blockpi.network/v1/rpc/public"],
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 1632781,
            },
          },
          blockExplorers: {
            default: {
              name: "ZetaScan",
              url: "https://explorer.zetachain.com",
            },
          },
          testnet: !1,
        }),
        cs = (0, n.x)({
          id: 7001,
          name: "ZetaChain Athens Testnet",
          nativeCurrency: { decimals: 18, name: "Zeta", symbol: "aZETA" },
          rpcUrls: {
            default: {
              http: [
                "https://zetachain-athens-evm.blockpi.network/v1/rpc/public",
              ],
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 2715217,
            },
          },
          blockExplorers: {
            default: {
              name: "ZetaScan",
              url: "https://athens.explorer.zetachain.com",
            },
          },
          testnet: !0,
        }),
        co = (0, n.x)({
          id: 1337803,
          name: "Zhejiang",
          nativeCurrency: {
            name: "Zhejiang Ether",
            symbol: "ZhejETH",
            decimals: 18,
          },
          rpcUrls: {
            default: { http: ["https://rpc.zhejiang.ethpandaops.io"] },
          },
          blockExplorers: {
            default: {
              name: "Beaconchain",
              url: "https://zhejiang.beaconcha.in",
            },
          },
          testnet: !0,
        }),
        ci = (0, n.x)({
          id: 32769,
          name: "Zilliqa",
          network: "zilliqa",
          nativeCurrency: { name: "Zilliqa", symbol: "ZIL", decimals: 18 },
          rpcUrls: { default: { http: ["https://api.zilliqa.com"] } },
          blockExplorers: {
            default: { name: "Ethernal", url: "https://evmx.zilliqa.com" },
          },
          testnet: !1,
        }),
        cl = (0, n.x)({
          id: 33101,
          name: "Zilliqa Testnet",
          network: "zilliqa-testnet",
          nativeCurrency: { name: "Zilliqa", symbol: "ZIL", decimals: 18 },
          rpcUrls: { default: { http: ["https://dev-api.zilliqa.com"] } },
          blockExplorers: {
            default: {
              name: "Ethernal",
              url: "https://evmx.testnet.zilliqa.com",
            },
          },
          testnet: !0,
        }),
        cc = (0, n.x)({
          ...ei,
          id: 48900,
          name: "Zircuit Mainnet",
          nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
          rpcUrls: {
            default: {
              http: [
                "https://mainnet.zircuit.com",
                "https://zircuit1-mainnet.liquify.com",
                "https://zircuit1-mainnet.p2pify.com",
                "https://zircuit-mainnet.drpc.org",
              ],
            },
          },
          blockExplorers: {
            default: {
              name: "Zircuit Explorer",
              url: "https://explorer.zircuit.com",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
            },
            l2OutputOracle: {
              1: { address: "0x92Ef6Af472b39F1b363da45E35530c24619245A4" },
            },
            portal: {
              1: { address: "0x17bfAfA932d2e23Bd9B909Fd5B4D2e2a27043fb1" },
            },
            l1StandardBridge: {
              1: { address: "0x386B76D9cA5F5Fb150B6BFB35CF5379B22B26dd8" },
            },
          },
          testnet: !1,
        }),
        cd = (0, n.x)({
          ...ei,
          id: 48898,
          name: "Zircuit Garfield Testnet",
          nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://garfield-testnet.zircuit.com/"] },
          },
          blockExplorers: {
            default: {
              name: "Zircuit Garfield Testnet Explorer",
              url: "https://explorer.garfield-testnet.zircuit.com",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
            },
            l2OutputOracle: {
              0xaa36a7: {
                address: "0xd69D3AC5CA686cCF94b258291772bc520FEAf211",
              },
            },
            portal: {
              0xaa36a7: {
                address: "0x4E21A71Ac3F7607Da5c06153A17B1DD20E702c21",
              },
            },
            l1StandardBridge: {
              0xaa36a7: {
                address: "0x87a7E2bCA9E35BA49282E832a28A6023904460D8",
              },
            },
          },
          testnet: !0,
        }),
        cu = (0, n.x)({
          ...ei,
          id: 48899,
          name: "Zircuit Testnet",
          nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: {
              http: [
                "https://testnet.zircuit.com",
                "https://zircuit1-testnet.p2pify.com",
                "https://zircuit1-testnet.liquify.com",
              ],
            },
          },
          blockExplorers: {
            default: {
              name: "Zircuit Testnet Explorer",
              url: "https://explorer.testnet.zircuit.com",
            },
          },
          contracts: {
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 6040287,
            },
            l2OutputOracle: {
              0xaa36a7: {
                address: "0x740C2dac453aEf7140809F80b72bf0e647af8148",
              },
            },
            portal: {
              0xaa36a7: {
                address: "0x787f1C8c5924178689E0560a43D848bF8E54b23e",
              },
            },
            l1StandardBridge: {
              0xaa36a7: {
                address: "0x0545c5fe980098C16fcD0eCB5E79753afa6d9af9",
              },
            },
          },
          testnet: !0,
        }),
        cp = (0, n.x)({
          id: 42766,
          name: "ZKFair Mainnet",
          network: "zkfair-mainnet",
          nativeCurrency: { decimals: 18, name: "USD Coin", symbol: "USDC" },
          rpcUrls: { default: { http: ["https://rpc.zkfair.io"] } },
          blockExplorers: {
            default: {
              name: "zkFair Explorer",
              url: "https://scan.zkfair.io",
              apiUrl: "https://scan.zkfair.io/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 6090959,
            },
          },
          testnet: !1,
        }),
        ch = (0, n.x)({
          id: 43851,
          name: "ZKFair Testnet",
          network: "zkfair-testnet",
          nativeCurrency: { decimals: 18, name: "USD Coin", symbol: "USDC" },
          rpcUrls: { default: { http: ["https://testnet-rpc.zkfair.io"] } },
          blockExplorers: {
            default: {
              name: "zkFair Explorer",
              url: "https://testnet-scan.zkfair.io",
            },
          },
          testnet: !0,
        }),
        cm = (0, n.x)({
          id: 810180,
          name: "zkLink Nova",
          nativeCurrency: { decimals: 18, name: "ETH", symbol: "ETH" },
          rpcUrls: { default: { http: ["https://rpc.zklink.io"] } },
          blockExplorers: {
            default: {
              name: "zkLink Nova Block Explorer",
              url: "https://explorer.zklink.io",
            },
          },
        }),
        cf = (0, n.x)({
          id: 810181,
          name: "zkLink Nova Sepolia Testnet",
          nativeCurrency: { decimals: 18, name: "ETH", symbol: "ETH" },
          rpcUrls: { default: { http: ["https://sepolia.rpc.zklink.io"] } },
          blockExplorers: {
            default: {
              name: "zkLink Nova Block Explorer",
              url: "https://sepolia.explorer.zklink.io",
            },
          },
        }),
        cb = (0, n.x)({
          ...q,
          id: 324,
          name: "ZKsync Era",
          network: "zksync-era",
          nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
          rpcUrls: {
            default: {
              http: ["https://mainnet.era.zksync.io"],
              webSocket: ["wss://mainnet.era.zksync.io/ws"],
            },
          },
          blockExplorers: {
            default: {
              name: "Etherscan",
              url: "https://era.zksync.network/",
              apiUrl: "https://api-era.zksync.network/api",
            },
            native: {
              name: "ZKsync Explorer",
              url: "https://explorer.zksync.io/",
              apiUrl: "https://block-explorer-api.mainnet.zksync.io/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xF9cda624FBC7e059355ce98a31693d299FACd963",
            },
            universalSignatureVerifier: {
              address: "0xfB688330379976DA81eB64Fe4BF50d7401763B9C",
              blockCreated: 0x2b8b4fc,
            },
          },
        }),
        cy = (0, n.x)({
          ...q,
          id: 260,
          name: "ZKsync InMemory Node",
          network: "zksync-in-memory-node",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["http://localhost:8011"] } },
          testnet: !0,
        }),
        cx = (0, n.x)({
          ...q,
          id: 272,
          name: "ZKsync CLI Local Custom Hyperchain",
          nativeCurrency: { name: "BAT", symbol: "BAT", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["http://localhost:15200"],
              webSocket: ["ws://localhost:15201"],
            },
          },
          blockExplorers: {
            default: {
              name: "ZKsync explorer",
              url: "http://localhost:15005/",
              apiUrl: "http://localhost:15005/api",
            },
          },
          testnet: !0,
        }),
        cv = (0, n.x)({
          ...q,
          id: 270,
          name: "ZKsync CLI Local Hyperchain",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["http://localhost:15100"],
              webSocket: ["ws://localhost:15101"],
            },
          },
          blockExplorers: {
            default: {
              name: "ZKsync explorer",
              url: "http://localhost:15005/",
              apiUrl: "http://localhost:15005/api",
            },
          },
          testnet: !0,
        }),
        cg = (0, n.x)({
          id: 9,
          name: "ZKsync CLI Local Hyperchain L1",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["http://localhost:15045"] } },
          blockExplorers: {
            default: {
              name: "Blockscout",
              url: "http://localhost:15001/",
              apiUrl: "http://localhost:15001/api/v2",
            },
          },
          testnet: !0,
        }),
        cE = (0, n.x)({
          ...q,
          id: 270,
          name: "ZKsync CLI Local Node",
          network: "zksync-cli-local-node",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: { default: { http: ["http://localhost:3050"] } },
          testnet: !0,
        }),
        ck = (0, n.x)({
          ...q,
          id: 300,
          name: "ZKsync Sepolia Testnet",
          network: "zksync-sepolia-testnet",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          rpcUrls: {
            default: {
              http: ["https://sepolia.era.zksync.dev"],
              webSocket: ["wss://sepolia.era.zksync.dev/ws"],
            },
          },
          blockExplorers: {
            default: {
              name: "Etherscan",
              url: "https://sepolia-era.zksync.network/",
              apiUrl: "https://api-sepolia-era.zksync.network/api",
            },
            native: {
              name: "ZKsync Explorer",
              url: "https://sepolia.explorer.zksync.io/",
              blockExplorerApi:
                "https://block-explorer-api.sepolia.zksync.dev/api",
            },
          },
          contracts: {
            multicall3: {
              address: "0xF9cda624FBC7e059355ce98a31693d299FACd963",
            },
            universalSignatureVerifier: {
              address: "0xfB688330379976DA81eB64Fe4BF50d7401763B9C",
              blockCreated: 3855712,
            },
          },
          testnet: !0,
        }),
        cC = (0, n.x)({
          ...ei,
          id: 7777777,
          name: "Zora",
          nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
          rpcUrls: {
            default: {
              http: ["https://rpc.zora.energy"],
              webSocket: ["wss://rpc.zora.energy"],
            },
          },
          blockExplorers: {
            default: {
              name: "Explorer",
              url: "https://explorer.zora.energy",
              apiUrl: "https://explorer.zora.energy/api",
            },
          },
          contracts: {
            ...ei.contracts,
            l2OutputOracle: {
              1: { address: "0x9E6204F750cD866b299594e2aC9eA824E2e5f95c" },
            },
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 5882,
            },
            portal: {
              1: { address: "0x1a0ad011913A150f69f6A19DF447A0CfD9551054" },
            },
            l1StandardBridge: {
              1: { address: "0x3e2Ea9B92B7E48A52296fD261dc26fd995284631" },
            },
          },
          sourceId: 1,
        }),
        cw = (0, n.x)({
          ...ei,
          id: 0x3b9ac9ff,
          name: "Zora Sepolia",
          network: "zora-sepolia",
          nativeCurrency: { decimals: 18, name: "Zora Sepolia", symbol: "ETH" },
          rpcUrls: {
            default: {
              http: ["https://sepolia.rpc.zora.energy"],
              webSocket: ["wss://sepolia.rpc.zora.energy"],
            },
          },
          blockExplorers: {
            default: {
              name: "Zora Sepolia Explorer",
              url: "https://sepolia.explorer.zora.energy/",
              apiUrl: "https://sepolia.explorer.zora.energy/api",
            },
          },
          contracts: {
            ...ei.contracts,
            l2OutputOracle: {
              0xaa36a7: {
                address: "0x2615B481Bd3E5A1C0C7Ca3Da1bdc663E8615Ade9",
              },
            },
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 83160,
            },
            portal: {
              0xaa36a7: {
                address: "0xeffE2C6cA9Ab797D418f0D91eA60807713f3536f",
              },
            },
            l1StandardBridge: {
              0xaa36a7: {
                address: "0x5376f1D543dcbB5BD416c56C189e4cB7399fCcCB",
              },
            },
          },
          sourceId: 0xaa36a7,
          testnet: !0,
        }),
        cT = (0, n.x)({
          ...ei,
          id: 999,
          name: "Zora Goerli Testnet",
          nativeCurrency: { decimals: 18, name: "Zora Goerli", symbol: "ETH" },
          rpcUrls: {
            default: {
              http: ["https://testnet.rpc.zora.energy"],
              webSocket: ["wss://testnet.rpc.zora.energy"],
            },
          },
          blockExplorers: {
            default: {
              name: "Explorer",
              url: "https://testnet.explorer.zora.energy",
              apiUrl: "https://testnet.explorer.zora.energy/api",
            },
          },
          contracts: {
            ...ei.contracts,
            multicall3: {
              address: "0xcA11bde05977b3631167028862bE2a173976CA11",
              blockCreated: 189123,
            },
            portal: {
              5: { address: "0xDb9F51790365e7dc196e7D072728df39Be958ACe" },
            },
          },
          sourceId: 5,
          testnet: !0,
        });
      var cS = Object.defineProperty,
        cA = (e, t, r) =>
          t in e
            ? cS(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        cU = (e, t, r) => (cA(e, "symbol" != typeof t ? t + "" : t, r), r),
        cB = {};
      ((e, t) => {
        for (var r in t) cS(e, r, { get: t[r], enumerable: !0 });
      })(cB, {
        solana: () => cM,
        solanaDevnet: () => cD,
        solanaTestnet: () => cP,
      });
      var cM = (0, n.x)({
          id: 101,
          name: "Solana",
          nativeCurrency: { decimals: 9, name: "Solana SOL", symbol: "SOL" },
          rpcUrls: {
            default: { http: ["https://api.mainnet-beta.solana.com"] },
          },
          blockExplorers: {
            default: { name: "Explorer", url: "https://solscan.io" },
          },
          custom: { chainType: "solana" },
        }),
        cP = (0, n.x)({
          id: 102,
          name: "Solana Testnet",
          nativeCurrency: { decimals: 9, name: "Testnet SOL", symbol: "SOL" },
          rpcUrls: { default: { http: ["https://api.testnet.solana.com"] } },
          blockExplorers: {
            default: { name: "Explorer", url: "https://solscan.io" },
          },
          testnet: !0,
          custom: { chainType: "solana" },
        }),
        cD = (0, n.x)({
          id: 103,
          name: "Solana Devnet",
          nativeCurrency: { decimals: 9, name: "Devnet SOL", symbol: "SOL" },
          rpcUrls: { default: { http: ["https://api.devnet.solana.com"] } },
          blockExplorers: {
            default: { name: "Explorer", url: "https://solscan.io" },
          },
          testnet: !0,
          custom: { chainType: "solana" },
        }),
        cF = (e) => {
          let t = "number" == typeof e ? e : e.id;
          return 101 === t || 102 === t || 103 === t;
        },
        cI = (e) => !cF(e),
        cO = (e) => (cI(e) ? "evm" : "solana"),
        cR = (e) => {
          for (let t of Object.values(cB))
            if ("id" in t && t.id === e) return t;
          for (let t of Object.values(a)) if ("id" in t && t.id === e) return t;
          throw Error(`Chain with id ${e} not found`);
        },
        cL = (e) => {
          if ("number" != typeof e && "string" == typeof e.custom?.icon)
            return e.custom?.icon;
          let t = "number" == typeof e ? e : e.id;
          return cF(t)
            ? `https://static.particle.network/chains/solana/icons/${t}.png`
            : `https://static.particle.network/chains/evm/icons/${t}.png`;
        };
    },
    83964: (e, t, r) => {
      "use strict";
      r.d(t, {
        Ld: () => c,
        ND: () => C,
        Pc: () => i,
        Qy: () => y,
        U$: () => o,
        VF: () => w,
        aj: () => k,
        cK: () => L,
        ch: () => O,
        fD: () => R,
        gC: () => E,
        nM: () => g,
        nk: () => v,
        uc: () => T,
        vx: () => B,
        wE: () => b,
        zj: () => u,
      });
      var a,
        n = r(68078),
        s = r(29761);
      function o(e) {
        return e;
      }
      function i(e) {
        return e;
      }
      var l = 256;
      function c(e = 11) {
        if (!a || l + e > 512) {
          (a = ""), (l = 0);
          for (let e = 0; e < 256; e++)
            a += ((256 + 256 * Math.random()) | 0).toString(16).substring(1);
        }
        return a.substring(l, l++ + e);
      }
      var d = class {
        constructor(e) {
          (this.uid = e), (0, n.Mu)(this, "_emitter", new s.b());
        }
        on(e, t) {
          this._emitter.on(e, t);
        }
        once(e, t) {
          this._emitter.once(e, t);
        }
        off(e, t) {
          this._emitter.off(e, t);
        }
        emit(e, ...t) {
          let r = t[0];
          this._emitter.emit(e, { uid: this.uid, ...r });
        }
        listenerCount(e) {
          return this._emitter.listenerCount(e);
        }
      };
      function u() {
        return new d(c());
      }
      function p(e, t) {
        return JSON.parse(e, (e, r) => {
          let a = r;
          return (
            a?.__type === "bigint" && (a = BigInt(a.value)),
            a?.__type === "Map" && (a = new Map(a.value)),
            t?.(e, a) ?? a
          );
        });
      }
      function h(e, t) {
        return e.slice(0, t).join(".") || ".";
      }
      function m(e, t) {
        let { length: r } = e;
        for (let a = 0; a < r; ++a) if (e[a] === t) return a + 1;
        return 0;
      }
      function f(e, t, r, a) {
        return JSON.stringify(
          e,
          (function (e, t) {
            let r = "function" == typeof e,
              a = "function" == typeof t,
              n = [],
              s = [];
            return function (o, i) {
              if ("object" == typeof i) {
                if (n.length) {
                  let e = m(n, this);
                  0 === e ? (n[n.length] = this) : (n.splice(e), s.splice(e)),
                    (s[s.length] = o);
                  let r = m(n, i);
                  if (0 !== r)
                    return a ? t.call(this, o, i, h(s, r)) : `[ref=${h(s, r)}]`;
                } else (n[0] = i), (s[0] = o);
              }
              return r ? e.call(this, o, i) : i;
            };
          })((e, r) => {
            let a = r;
            return (
              "bigint" == typeof a &&
                (a = { __type: "bigint", value: r.toString() }),
              a instanceof Map &&
                (a = { __type: "Map", value: Array.from(r.entries()) }),
              t?.(e, a) ?? a
            );
          }, a),
          r ?? void 0
        );
      }
      function b(e) {
        let {
          deserialize: t = p,
          key: r = "particle-connectkit",
          serialize: a = f,
          storage: n = y,
        } = e;
        function s(e) {
          return e instanceof Promise ? e.then((e) => e).catch(() => null) : e;
        }
        return {
          ...n,
          key: r,
          async getItem(e, a) {
            let o = n.getItem(`${r}.${e}`),
              i = await s(o);
            return i ? t(i) ?? null : a ?? null;
          },
          async setItem(e, t) {
            let o = `${r}.${e}`;
            null === t ? await s(n.removeItem(o)) : await s(n.setItem(o, a(t)));
          },
          async removeItem(e) {
            await s(n.removeItem(`${r}.${e}`));
          },
        };
      }
      var y = { getItem: () => null, setItem: () => {}, removeItem: () => {} },
        x = class extends Error {
          constructor(e, t = {}) {
            super(),
              (0, n.Mu)(this, "details"),
              (0, n.Mu)(this, "metaMessages"),
              (0, n.Mu)(this, "shortMessage"),
              (0, n.Mu)(this, "name", "ConnectorCoreError");
            let r =
              t.cause instanceof x
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details;
            (this.message = [
              e || "An error occurred.",
              "",
              ...(t.metaMessages ? [...t.metaMessages, ""] : []),
              ...(r ? [`Details: ${r}`] : []),
              `Version: ${this.version}`,
            ].join("\n")),
              t.cause && (this.cause = t.cause),
              (this.details = r),
              (this.metaMessages = t.metaMessages),
              (this.shortMessage = e);
          }
          get version() {
            return "1.0.1";
          }
        },
        v = class extends x {
          constructor() {
            super("Chain not configured."),
              (0, n.Mu)(this, "name", "ChainNotConfiguredError");
          }
        },
        g = class extends x {
          constructor() {
            super("Connector already connected."),
              (0, n.Mu)(this, "name", "ConnectorAlreadyConnectedError");
          }
        },
        E = class extends x {
          constructor() {
            super("Connector not connected."),
              (0, n.Mu)(this, "name", "ConnectorNotConnectedError");
          }
        },
        k = class extends x {
          constructor({ address: e, connector: t }) {
            super(`Account "${e}" not found for connector "${t.name}".`),
              (0, n.Mu)(this, "name", "ConnectorAccountNotFoundError");
          }
        },
        C = class extends x {
          constructor() {
            super("Provider not found."),
              (0, n.Mu)(this, "name", "ProviderNotFoundError");
          }
        },
        w = class extends x {
          constructor({ connector: e }) {
            super(`"${e.name}" does not support programmatic chain switching.`),
              (0, n.Mu)(this, "name", "SwitchChainNotSupportedError");
          }
        },
        T = class extends x {
          constructor() {
            super("Chain Type Error."),
              (0, n.Mu)(this, "name", "ChainTypeError");
          }
        },
        S = class extends x {
          constructor(e, { code: t, metaMessages: r, shortMessage: a }) {
            super(a, { cause: e, metaMessages: r || e?.metaMessages }),
              (0, n.Mu)(this, "name", "RpcError"),
              (0, n.Mu)(this, "code"),
              (this.name = e.name),
              (this.code = e.code || t || -1);
          }
        },
        A = class extends S {
          constructor(e, t) {
            super(e, t),
              (0, n.Mu)(this, "name", "ProviderRpcError"),
              (0, n.Mu)(this, "data"),
              (this.data = t.data);
          }
        },
        U = class extends A {
          constructor(e) {
            super(e, {
              code: U.code,
              shortMessage: "User rejected the request.",
            }),
              (0, n.Mu)(this, "name", "UserRejectedRequestError");
          }
        },
        B = U;
      (0, n.Mu)(B, "code", 4001);
      var M = class extends A {
        constructor(e) {
          super(e, {
            code: M.code,
            shortMessage:
              "The requested method and/or account has not been authorized by the user.",
          }),
            (0, n.Mu)(this, "name", "UnauthorizedProviderError");
        }
      };
      (0, n.Mu)(M, "code", 4100);
      var P = class extends A {
        constructor(e) {
          super(e, {
            code: P.code,
            shortMessage: "The Provider does not support the requested method.",
          }),
            (0, n.Mu)(this, "name", "UnsupportedProviderMethodError");
        }
      };
      (0, n.Mu)(P, "code", 4200);
      var D = class extends A {
        constructor(e) {
          super(e, {
            code: D.code,
            shortMessage: "The Provider is disconnected from all chains.",
          }),
            (0, n.Mu)(this, "name", "ProviderDisconnectedError");
        }
      };
      (0, n.Mu)(D, "code", 4900);
      var F = class extends A {
        constructor(e) {
          super(e, {
            code: F.code,
            shortMessage:
              "The Provider is not connected to the requested chain.",
          }),
            (0, n.Mu)(this, "name", "ChainDisconnectedError");
        }
      };
      (0, n.Mu)(F, "code", 4901);
      var I = class extends A {
          constructor(e) {
            super(e, {
              code: I.code,
              shortMessage:
                "An error occurred when attempting to switch chain.",
            }),
              (0, n.Mu)(this, "name", "SwitchChainError");
          }
        },
        O = I;
      (0, n.Mu)(O, "code", 4902);
      var R = async (e, t, r, a = {}) => {
          "version" in t ||
            ((t.feePayer = t.feePayer || e.publicKey),
            (t.recentBlockhash =
              t.recentBlockhash ||
              (
                await r.getLatestBlockhash({
                  commitment: a.preflightCommitment,
                  minContextSlot: a.minContextSlot,
                })
              ).blockhash)),
            (a.preflightCommitment = a.preflightCommitment || r.commitment);
          let n = await e.signTransaction(t);
          return { signature: await r.sendRawTransaction(n.serialize(), a) };
        },
        L = (e) => `0x${e.toString(16)}`;
    },
    94531: (e, t, r) => {
      "use strict";
      r.d(t, { X: () => i });
      var a = r(74055),
        n = r(12115),
        s = r(8858),
        o = r(52378);
      function i(e, t, r) {
        let { validationBehavior: i, focus: l } = e;
        (0, s.N)(() => {
          if (
            "native" === i &&
            (null == r ? void 0 : r.current) &&
            !r.current.disabled
          ) {
            var e;
            let a,
              n = t.realtimeValidation.isInvalid
                ? t.realtimeValidation.validationErrors.join(" ") ||
                  "Invalid value."
                : "";
            r.current.setCustomValidity(n),
              r.current.hasAttribute("title") || (r.current.title = ""),
              t.realtimeValidation.isInvalid ||
                t.updateValidation({
                  isInvalid: !(e = r.current).validity.valid,
                  validationDetails: {
                    badInput: (a = e.validity).badInput,
                    customError: a.customError,
                    patternMismatch: a.patternMismatch,
                    rangeOverflow: a.rangeOverflow,
                    rangeUnderflow: a.rangeUnderflow,
                    stepMismatch: a.stepMismatch,
                    tooLong: a.tooLong,
                    tooShort: a.tooShort,
                    typeMismatch: a.typeMismatch,
                    valueMissing: a.valueMissing,
                    valid: a.valid,
                  },
                  validationErrors: e.validationMessage
                    ? [e.validationMessage]
                    : [],
                });
          }
        });
        let c = (0, n.useRef)(!1),
          d = (0, o.J)(() => {
            c.current || t.resetValidation();
          }),
          u = (0, o.J)((e) => {
            var n, s;
            t.displayValidation.isInvalid || t.commitValidation();
            let o =
              null == r
                ? void 0
                : null === (n = r.current) || void 0 === n
                ? void 0
                : n.form;
            !e.defaultPrevented &&
              r &&
              o &&
              (function (e) {
                for (let t = 0; t < e.elements.length; t++) {
                  let r = e.elements[t];
                  if (!r.validity.valid) return r;
                }
                return null;
              })(o) === r.current &&
              (l ? l() : null === (s = r.current) || void 0 === s || s.focus(),
              (0, a.Cl)("keyboard")),
              e.preventDefault();
          }),
          p = (0, o.J)(() => {
            t.commitValidation();
          });
        (0, n.useEffect)(() => {
          let e = null == r ? void 0 : r.current;
          if (!e) return;
          let t = e.form,
            a = null == t ? void 0 : t.reset;
          return (
            t &&
              (t.reset = () => {
                (c.current =
                  !window.event ||
                  ("message" === window.event.type &&
                    window.event.target instanceof MessagePort)),
                  null == a || a.call(t),
                  (c.current = !1);
              }),
            e.addEventListener("invalid", u),
            e.addEventListener("change", p),
            null == t || t.addEventListener("reset", d),
            () => {
              e.removeEventListener("invalid", u),
                e.removeEventListener("change", p),
                null == t || t.removeEventListener("reset", d),
                t && (t.reset = a);
            }
          );
        }, [r, u, p, d, i]);
      }
    },
    32207: (e, t, r) => {
      "use strict";
      r.d(t, { Y: () => y });
      let a = new Set([
          "Arab",
          "Syrc",
          "Samr",
          "Mand",
          "Thaa",
          "Mend",
          "Nkoo",
          "Adlm",
          "Rohg",
          "Hebr",
        ]),
        n = new Set([
          "ae",
          "ar",
          "arc",
          "bcc",
          "bqi",
          "ckb",
          "dv",
          "fa",
          "glk",
          "he",
          "ku",
          "mzn",
          "nqo",
          "pnb",
          "ps",
          "sd",
          "ug",
          "ur",
          "yi",
        ]);
      var s = r(12115);
      let o = { prefix: String(Math.round(1e10 * Math.random())), current: 0 },
        i = (s.createContext(o), s.createContext(!1));
      function l() {
        return !1;
      }
      function c() {
        return !0;
      }
      function d(e) {
        return () => {};
      }
      "undefined" != typeof window &&
        window.document &&
        window.document.createElement,
        new WeakMap(),
        s.useId;
      let u = Symbol.for("react-aria.i18n.locale");
      function p() {
        let e =
          ("undefined" != typeof window && window[u]) ||
          ("undefined" != typeof navigator &&
            (navigator.language || navigator.userLanguage)) ||
          "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e]);
        } catch {
          e = "en-US";
        }
        return {
          locale: e,
          direction: !(function (e) {
            if (Intl.Locale) {
              let t = new Intl.Locale(e).maximize(),
                r =
                  "function" == typeof t.getTextInfo
                    ? t.getTextInfo()
                    : t.textInfo;
              if (r) return "rtl" === r.direction;
              if (t.script) return a.has(t.script);
            }
            let t = e.split("-")[0];
            return n.has(t);
          })(e)
            ? "ltr"
            : "rtl",
        };
      }
      let h = p(),
        m = new Set();
      function f() {
        for (let e of ((h = p()), m)) e(h);
      }
      let b = s.createContext(null);
      function y() {
        let e = (function () {
          let e =
              "function" == typeof s.useSyncExternalStore
                ? s.useSyncExternalStore(d, l, c)
                : (0, s.useContext)(i),
            [t, r] = (0, s.useState)(h);
          return ((0, s.useEffect)(
            () => (
              0 === m.size && window.addEventListener("languagechange", f),
              m.add(r),
              () => {
                m.delete(r),
                  0 === m.size &&
                    window.removeEventListener("languagechange", f);
              }
            ),
            []
          ),
          e)
            ? { locale: "en-US", direction: "ltr" }
            : t;
        })();
        return (0, s.useContext)(b) || e;
      }
    },
    424: (e, t, r) => {
      "use strict";
      r.d(t, { Q: () => s });
      var a = r(32207);
      let n = new Map();
      function s(e) {
        let { locale: t } = (0, a.Y)(),
          r =
            t +
            (e
              ? Object.entries(e)
                  .sort((e, t) => (e[0] < t[0] ? -1 : 1))
                  .join()
              : "");
        if (n.has(r)) return n.get(r);
        let s = new Intl.Collator(t, e);
        return n.set(r, s), s;
      }
    },
    38934: (e, t, r) => {
      "use strict";
      let a;
      r.d(t, { o: () => h });
      var n = r(32207);
      let s = Symbol.for("react-aria.i18n.locale"),
        o = Symbol.for("react-aria.i18n.strings");
      class i {
        getStringForLocale(e, t) {
          let r = this.getStringsForLocale(t)[e];
          if (!r)
            throw Error(`Could not find intl message ${e} in ${t} locale`);
          return r;
        }
        getStringsForLocale(e) {
          let t = this.strings[e];
          return (
            t ||
              ((t = (function (e, t, r = "en-US") {
                if (t[e]) return t[e];
                let a = Intl.Locale
                  ? new Intl.Locale(e).language
                  : e.split("-")[0];
                if (t[a]) return t[a];
                for (let e in t) if (e.startsWith(a + "-")) return t[e];
                return t[r];
              })(e, this.strings, this.defaultLocale)),
              (this.strings[e] = t)),
            t
          );
        }
        static getGlobalDictionaryForPackage(e) {
          if ("undefined" == typeof window) return null;
          let t = window[s];
          if (void 0 === a) {
            let e = window[o];
            if (!e) return null;
            for (let r in ((a = {}), e)) a[r] = new i({ [t]: e[r] }, t);
          }
          let r = null == a ? void 0 : a[e];
          if (!r)
            throw Error(
              `Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`
            );
          return r;
        }
        constructor(e, t = "en-US") {
          (this.strings = Object.fromEntries(
            Object.entries(e).filter(([, e]) => e)
          )),
            (this.defaultLocale = t);
        }
      }
      let l = new Map(),
        c = new Map();
      class d {
        format(e, t) {
          let r = this.strings.getStringForLocale(e, this.locale);
          return "function" == typeof r ? r(t, this) : r;
        }
        plural(e, t, r = "cardinal") {
          let a = t["=" + e];
          if (a) return "function" == typeof a ? a() : a;
          let n = this.locale + ":" + r,
            s = l.get(n);
          return (
            s ||
              ((s = new Intl.PluralRules(this.locale, { type: r })),
              l.set(n, s)),
            "function" == typeof (a = t[s.select(e)] || t.other) ? a() : a
          );
        }
        number(e) {
          let t = c.get(this.locale);
          return (
            t ||
              ((t = new Intl.NumberFormat(this.locale)), c.set(this.locale, t)),
            t.format(e)
          );
        }
        select(e, t) {
          let r = e[t] || e.other;
          return "function" == typeof r ? r() : r;
        }
        constructor(e, t) {
          (this.locale = e), (this.strings = t);
        }
      }
      var u = r(12115);
      let p = new WeakMap();
      function h(e, t) {
        let r,
          { locale: a } = (0, n.Y)(),
          s =
            (t && i.getGlobalDictionaryForPackage(t)) ||
            ((r = p.get(e)) || ((r = new i(e)), p.set(e, r)), r);
        return (0, u.useMemo)(() => new d(a, s), [a, s]);
      }
    },
    22167: (e, t, r) => {
      "use strict";
      r.d(t, { F: () => a });
      let a = r(12115).createContext({ register: () => {} });
      a.displayName = "PressResponderContext";
    },
    50312: (e, t, r) => {
      "use strict";
      r.d(t, { H: () => d });
      var a = r(42060),
        n = r(45839),
        s = r(80243),
        o = r(57651),
        i = r(2853),
        l = r(97262),
        c = r(12115);
      function d(e) {
        let {
            isDisabled: t,
            onLongPressStart: r,
            onLongPressEnd: d,
            onLongPress: u,
            threshold: p = 500,
            accessibilityDescription: h,
          } = e,
          m = (0, c.useRef)(void 0),
          { addGlobalListener: f, removeGlobalListener: b } = (0, n.A)(),
          { pressProps: y } = (0, a.d)({
            isDisabled: t,
            onPressStart(e) {
              if (
                (e.continuePropagation(),
                ("mouse" === e.pointerType || "touch" === e.pointerType) &&
                  (r && r({ ...e, type: "longpressstart" }),
                  (m.current = setTimeout(() => {
                    e.target.dispatchEvent(
                      new PointerEvent("pointercancel", { bubbles: !0 })
                    ),
                      (0, s.TW)(e.target).activeElement !== e.target &&
                        (0, o.e)(e.target),
                      u && u({ ...e, type: "longpress" }),
                      (m.current = void 0);
                  }, p)),
                  "touch" === e.pointerType))
              ) {
                let t = (e) => {
                  e.preventDefault();
                };
                f(e.target, "contextmenu", t, { once: !0 }),
                  f(
                    window,
                    "pointerup",
                    () => {
                      setTimeout(() => {
                        b(e.target, "contextmenu", t);
                      }, 30);
                    },
                    { once: !0 }
                  );
              }
            },
            onPressEnd(e) {
              m.current && clearTimeout(m.current),
                d &&
                  ("mouse" === e.pointerType || "touch" === e.pointerType) &&
                  d({ ...e, type: "longpressend" });
            },
          }),
          x = (0, i.I)(u && !t ? h : void 0);
        return { longPressProps: (0, l.v)(y, x) };
      }
    },
    42060: (e, t, r) => {
      "use strict";
      r.d(t, { d: () => M });
      var a = r(53721),
        n = r(3985),
        s = r(80243),
        o = r(67118);
      let i = "default",
        l = "",
        c = new WeakMap();
      function d(e) {
        if ((0, n.un)())
          "disabled" === i &&
            ((i = "restoring"),
            setTimeout(() => {
              (0, o.v)(() => {
                if ("restoring" === i) {
                  let t = (0, s.TW)(e);
                  "none" === t.documentElement.style.webkitUserSelect &&
                    (t.documentElement.style.webkitUserSelect = l || ""),
                    (l = ""),
                    (i = "default");
                }
              });
            }, 300));
        else if (
          (e instanceof HTMLElement || e instanceof SVGElement) &&
          e &&
          c.has(e)
        ) {
          let t = c.get(e),
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[r] && (e.style[r] = t),
            "" === e.getAttribute("style") && e.removeAttribute("style"),
            c.delete(e);
        }
      }
      var u = r(22167),
        p = r(97207),
        h = r(66025),
        m = r(14),
        f = r(97262),
        b = r(54807),
        y = r(45839),
        x = r(52378),
        v = r(71191),
        g = r(67093),
        E = r(90872),
        k = r(80283),
        C = r(57651);
      r(47650);
      var w = r(12115),
        T = new WeakMap();
      class S {
        continuePropagation() {
          (0, m._)(this, T, !1);
        }
        get shouldStopPropagation() {
          return (0, p._)(this, T);
        }
        constructor(e, t, r, a) {
          var n;
          (0, h._)(this, T, { writable: !0, value: void 0 }),
            (0, m._)(this, T, !0);
          let s =
              null !== (n = null == a ? void 0 : a.target) && void 0 !== n
                ? n
                : r.currentTarget,
            o = null == s ? void 0 : s.getBoundingClientRect(),
            i,
            l = 0,
            c,
            d = null;
          null != r.clientX &&
            null != r.clientY &&
            ((c = r.clientX), (d = r.clientY)),
            o &&
              (null != c && null != d
                ? ((i = c - o.left), (l = d - o.top))
                : ((i = o.width / 2), (l = o.height / 2))),
            (this.type = e),
            (this.pointerType = t),
            (this.target = r.currentTarget),
            (this.shiftKey = r.shiftKey),
            (this.metaKey = r.metaKey),
            (this.ctrlKey = r.ctrlKey),
            (this.altKey = r.altKey),
            (this.x = i),
            (this.y = l);
        }
      }
      let A = Symbol("linkClicked"),
        U = "react-aria-pressable-style",
        B = "data-react-aria-pressable";
      function M(e) {
        let {
            onPress: t,
            onPressChange: r,
            onPressStart: o,
            onPressEnd: p,
            onPressUp: h,
            onClick: m,
            isDisabled: T,
            isPressed: M,
            preventFocusOnPress: O,
            shouldCancelOnPointerExit: R,
            allowTextSelectionOnPress: L,
            ref: N,
            ...z
          } = (function (e) {
            let t = (0, w.useContext)(u.F);
            if (t) {
              let { register: r, ...a } = t;
              (e = (0, f.v)(a, e)), r();
            }
            return (0, b.w)(t, e.ref), e;
          })(e),
          [K, V] = (0, w.useState)(!1),
          H = (0, w.useRef)({
            isPressed: !1,
            ignoreEmulatedMouseEvents: !1,
            didFirePressStart: !1,
            isTriggeringEvent: !1,
            activePointerId: null,
            target: null,
            isOverTarget: !1,
            pointerType: null,
            disposables: [],
          }),
          { addGlobalListener: j, removeAllGlobalListeners: _ } = (0, y.A)(),
          G = (0, x.J)((e, t) => {
            let a = H.current;
            if (T || a.didFirePressStart) return !1;
            let n = !0;
            if (((a.isTriggeringEvent = !0), o)) {
              let r = new S("pressstart", t, e);
              o(r), (n = r.shouldStopPropagation);
            }
            return (
              r && r(!0),
              (a.isTriggeringEvent = !1),
              (a.didFirePressStart = !0),
              V(!0),
              n
            );
          }),
          W = (0, x.J)((e, a, n = !0) => {
            let s = H.current;
            if (!s.didFirePressStart) return !1;
            (s.didFirePressStart = !1), (s.isTriggeringEvent = !0);
            let o = !0;
            if (p) {
              let t = new S("pressend", a, e);
              p(t), (o = t.shouldStopPropagation);
            }
            if ((r && r(!1), V(!1), t && n && !T)) {
              let r = new S("press", a, e);
              t(r), o && (o = r.shouldStopPropagation);
            }
            return (s.isTriggeringEvent = !1), o;
          }),
          q = (0, x.J)((e, t) => {
            let r = H.current;
            if (T) return !1;
            if (h) {
              r.isTriggeringEvent = !0;
              let a = new S("pressup", t, e);
              return h(a), (r.isTriggeringEvent = !1), a.shouldStopPropagation;
            }
            return !0;
          }),
          $ = (0, x.J)((e) => {
            let t = H.current;
            if (t.isPressed && t.target) {
              for (let r of (t.didFirePressStart &&
                null != t.pointerType &&
                W(F(t.target, e), t.pointerType, !1),
              (t.isPressed = !1),
              (t.isOverTarget = !1),
              (t.activePointerId = null),
              (t.pointerType = null),
              _(),
              L || d(t.target),
              t.disposables))
                r();
              t.disposables = [];
            }
          }),
          X = (0, x.J)((e) => {
            R && $(e);
          }),
          Z = (0, x.J)((e) => {
            null == m || m(e);
          }),
          J = (0, x.J)((e, t) => {
            if (m) {
              let r = new MouseEvent("click", e);
              (0, a.o1)(r, t), m((0, a.eg)(r));
            }
          }),
          Y = (0, w.useMemo)(() => {
            let e = H.current,
              t = {
                onKeyDown(t) {
                  if (
                    D(t.nativeEvent, t.currentTarget) &&
                    (0, v.sD)(t.currentTarget, (0, v.wt)(t.nativeEvent))
                  ) {
                    var a;
                    I((0, v.wt)(t.nativeEvent), t.key) && t.preventDefault();
                    let o = !0;
                    if (!e.isPressed && !t.repeat) {
                      (e.target = t.currentTarget),
                        (e.isPressed = !0),
                        (e.pointerType = "keyboard"),
                        (o = G(t, "keyboard"));
                      let a = t.currentTarget;
                      j(
                        (0, s.TW)(t.currentTarget),
                        "keyup",
                        (0, g.c)((t) => {
                          D(t, a) &&
                            !t.repeat &&
                            (0, v.sD)(a, (0, v.wt)(t)) &&
                            e.target &&
                            q(F(e.target, t), "keyboard");
                        }, r),
                        !0
                      );
                    }
                    o && t.stopPropagation(),
                      t.metaKey &&
                        (0, n.cX)() &&
                        (null === (a = e.metaKeyEvents) ||
                          void 0 === a ||
                          a.set(t.key, t.nativeEvent));
                  } else "Meta" === t.key && (e.metaKeyEvents = new Map());
                },
                onClick(t) {
                  if (
                    (!t ||
                      (0, v.sD)(t.currentTarget, (0, v.wt)(t.nativeEvent))) &&
                    t &&
                    0 === t.button &&
                    !e.isTriggeringEvent &&
                    !E.Fe.isOpening
                  ) {
                    let r = !0;
                    if (
                      (T && t.preventDefault(),
                      !e.ignoreEmulatedMouseEvents &&
                        !e.isPressed &&
                        ("virtual" === e.pointerType ||
                          (0, k.Y)(t.nativeEvent)))
                    ) {
                      let e = G(t, "virtual"),
                        a = q(t, "virtual"),
                        n = W(t, "virtual");
                      Z(t), (r = e && a && n);
                    } else if (e.isPressed && "keyboard" !== e.pointerType) {
                      let a =
                          e.pointerType ||
                          t.nativeEvent.pointerType ||
                          "virtual",
                        n = q(F(t.currentTarget, t), a),
                        s = W(F(t.currentTarget, t), a, !0);
                      (r = n && s), (e.isOverTarget = !1), Z(t), $(t);
                    }
                    (e.ignoreEmulatedMouseEvents = !1),
                      r && t.stopPropagation();
                  }
                },
              },
              r = (t) => {
                var r, a, n;
                if (e.isPressed && e.target && D(t, e.target)) {
                  I((0, v.wt)(t), t.key) && t.preventDefault();
                  let r = (0, v.wt)(t),
                    n = (0, v.sD)(e.target, (0, v.wt)(t));
                  W(F(e.target, t), "keyboard", n),
                    n && J(t, e.target),
                    _(),
                    "Enter" !== t.key &&
                      P(e.target) &&
                      (0, v.sD)(e.target, r) &&
                      !t[A] &&
                      ((t[A] = !0), (0, E.Fe)(e.target, t, !1)),
                    (e.isPressed = !1),
                    null === (a = e.metaKeyEvents) ||
                      void 0 === a ||
                      a.delete(t.key);
                } else if (
                  "Meta" === t.key &&
                  (null === (r = e.metaKeyEvents) || void 0 === r
                    ? void 0
                    : r.size)
                ) {
                  let t = e.metaKeyEvents;
                  for (let r of ((e.metaKeyEvents = void 0), t.values()))
                    null === (n = e.target) ||
                      void 0 === n ||
                      n.dispatchEvent(new KeyboardEvent("keyup", r));
                }
              };
            if ("undefined" != typeof PointerEvent) {
              (t.onPointerDown = (t) => {
                if (
                  0 !== t.button ||
                  !(0, v.sD)(t.currentTarget, (0, v.wt)(t.nativeEvent))
                )
                  return;
                if ((0, k.P)(t.nativeEvent)) {
                  e.pointerType = "virtual";
                  return;
                }
                e.pointerType = t.pointerType;
                let a = !0;
                if (!e.isPressed) {
                  (e.isPressed = !0),
                    (e.isOverTarget = !0),
                    (e.activePointerId = t.pointerId),
                    (e.target = t.currentTarget),
                    L ||
                      (function (e) {
                        if ((0, n.un)()) {
                          if ("default" === i) {
                            let t = (0, s.TW)(e);
                            (l = t.documentElement.style.webkitUserSelect),
                              (t.documentElement.style.webkitUserSelect =
                                "none");
                          }
                          i = "disabled";
                        } else if (
                          e instanceof HTMLElement ||
                          e instanceof SVGElement
                        ) {
                          let t =
                            "userSelect" in e.style
                              ? "userSelect"
                              : "webkitUserSelect";
                          c.set(e, e.style[t]), (e.style[t] = "none");
                        }
                      })(e.target),
                    (a = G(t, e.pointerType));
                  let d = (0, v.wt)(t.nativeEvent);
                  "releasePointerCapture" in d &&
                    d.releasePointerCapture(t.pointerId),
                    j((0, s.TW)(t.currentTarget), "pointerup", r, !1),
                    j((0, s.TW)(t.currentTarget), "pointercancel", o, !1);
                }
                a && t.stopPropagation();
              }),
                (t.onMouseDown = (t) => {
                  if (
                    (0, v.sD)(t.currentTarget, (0, v.wt)(t.nativeEvent)) &&
                    0 === t.button
                  ) {
                    if (O) {
                      let r = (0, a.LE)(t.target);
                      r && e.disposables.push(r);
                    }
                    t.stopPropagation();
                  }
                }),
                (t.onPointerUp = (t) => {
                  (0, v.sD)(t.currentTarget, (0, v.wt)(t.nativeEvent)) &&
                    "virtual" !== e.pointerType &&
                    0 === t.button &&
                    !e.isPressed &&
                    q(t, e.pointerType || t.pointerType);
                }),
                (t.onPointerEnter = (t) => {
                  t.pointerId === e.activePointerId &&
                    e.target &&
                    !e.isOverTarget &&
                    null != e.pointerType &&
                    ((e.isOverTarget = !0), G(F(e.target, t), e.pointerType));
                }),
                (t.onPointerLeave = (t) => {
                  t.pointerId === e.activePointerId &&
                    e.target &&
                    e.isOverTarget &&
                    null != e.pointerType &&
                    ((e.isOverTarget = !1),
                    W(F(e.target, t), e.pointerType, !1),
                    X(t));
                });
              let r = (t) => {
                  if (
                    t.pointerId === e.activePointerId &&
                    e.isPressed &&
                    0 === t.button &&
                    e.target
                  ) {
                    if (
                      (0, v.sD)(e.target, (0, v.wt)(t)) &&
                      null != e.pointerType
                    ) {
                      let r = !1,
                        a = setTimeout(() => {
                          e.isPressed &&
                            e.target instanceof HTMLElement &&
                            (r ? $(t) : ((0, C.e)(e.target), e.target.click()));
                        }, 80);
                      j(t.currentTarget, "click", () => (r = !0), !0),
                        e.disposables.push(() => clearTimeout(a));
                    } else $(t);
                    e.isOverTarget = !1;
                  }
                },
                o = (e) => {
                  $(e);
                };
              t.onDragStart = (e) => {
                (0, v.sD)(e.currentTarget, (0, v.wt)(e.nativeEvent)) && $(e);
              };
            }
            return t;
          }, [j, T, O, _, L, $, X, W, G, q, Z, J]);
        return (
          (0, w.useEffect)(() => {
            if (!N) return;
            let e = (0, s.TW)(N.current);
            if (!e || !e.head || e.getElementById(U)) return;
            let t = e.createElement("style");
            (t.id = U),
              (t.textContent = `
@layer {
  [${B}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim()),
              e.head.prepend(t);
          }, [N]),
          (0, w.useEffect)(() => {
            let e = H.current;
            return () => {
              var t;
              for (let r of (L ||
                d(null !== (t = e.target) && void 0 !== t ? t : void 0),
              e.disposables))
                r();
              e.disposables = [];
            };
          }, [L]),
          { isPressed: M || K, pressProps: (0, f.v)(z, Y, { [B]: !0 }) }
        );
      }
      function P(e) {
        return "A" === e.tagName && e.hasAttribute("href");
      }
      function D(e, t) {
        let { key: r, code: a } = e,
          n = t.getAttribute("role");
        return (
          ("Enter" === r || " " === r || "Spacebar" === r || "Space" === a) &&
          !(
            (t instanceof (0, s.mD)(t).HTMLInputElement && !R(t, r)) ||
            t instanceof (0, s.mD)(t).HTMLTextAreaElement ||
            t.isContentEditable
          ) &&
          !(("link" === n || (!n && P(t))) && "Enter" !== r)
        );
      }
      function F(e, t) {
        let r = t.clientX,
          a = t.clientY;
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: r,
          clientY: a,
        };
      }
      function I(e, t) {
        return e instanceof HTMLInputElement
          ? !R(e, t)
          : !(e instanceof HTMLInputElement) &&
              (e instanceof HTMLButtonElement
                ? "submit" !== e.type && "reset" !== e.type
                : !P(e));
      }
      let O = new Set([
        "checkbox",
        "radio",
        "range",
        "color",
        "file",
        "image",
        "button",
        "submit",
        "reset",
      ]);
      function R(e, t) {
        return "checkbox" === e.type || "radio" === e.type
          ? " " === t
          : O.has(e.type);
      }
    },
    6390: (e, t, r) => {
      "use strict";
      r.d(t, { K: () => n });
      var a = r(78166);
      class n {
        getItemRect(e) {
          let t = this.ref.current;
          if (!t) return null;
          let r = null != e ? (0, a.au)(this.ref, e) : null;
          if (!r) return null;
          let n = t.getBoundingClientRect(),
            s = r.getBoundingClientRect();
          return {
            x: s.left - n.left + t.scrollLeft,
            y: s.top - n.top + t.scrollTop,
            width: s.width,
            height: s.height,
          };
        }
        getContentSize() {
          var e, t;
          let r = this.ref.current;
          return {
            width:
              null !== (e = null == r ? void 0 : r.scrollWidth) && void 0 !== e
                ? e
                : 0,
            height:
              null !== (t = null == r ? void 0 : r.scrollHeight) && void 0 !== t
                ? t
                : 0,
          };
        }
        getVisibleRect() {
          var e, t, r, a;
          let n = this.ref.current;
          return {
            x:
              null !== (e = null == n ? void 0 : n.scrollLeft) && void 0 !== e
                ? e
                : 0,
            y:
              null !== (t = null == n ? void 0 : n.scrollTop) && void 0 !== t
                ? t
                : 0,
            width:
              null !== (r = null == n ? void 0 : n.offsetWidth) && void 0 !== r
                ? r
                : 0,
            height:
              null !== (a = null == n ? void 0 : n.offsetHeight) && void 0 !== a
                ? a
                : 0,
          };
        }
        constructor(e) {
          this.ref = e;
        }
      }
    },
    3611: (e, t, r) => {
      "use strict";
      r.d(t, { y: () => S });
      var a = r(78166),
        n = r(12115),
        s = r(90872),
        o = r(77355),
        i = r(57651),
        l = r(52378);
      function c(e, t, r, a) {
        let s = (0, l.J)(r),
          o = null == r;
        (0, n.useEffect)(() => {
          if (o || !e.current) return;
          let r = e.current;
          return (
            r.addEventListener(t, s, a),
            () => {
              r.removeEventListener(t, s, a);
            }
          );
        }, [e, t, a, o, s]);
      }
      var d = r(65506),
        u = r(71191),
        p = r(8858);
      function h(e, t) {
        let r = (0, n.useRef)(!0),
          a = (0, n.useRef)(null);
        (0, p.N)(
          () => (
            (r.current = !0),
            () => {
              r.current = !1;
            }
          ),
          []
        ),
          (0, p.N)(() => {
            r.current
              ? (r.current = !1)
              : (!a.current || t.some((e, t) => !Object.is(e, a[t]))) && e(),
              (a.current = t);
          }, t);
      }
      var m = r(97262),
        f = r(80243),
        b = r(56143),
        y = r(62886);
      function x(e, t) {
        return !!e && !!t && t.some((t) => t.contains(e));
      }
      class v {
        get size() {
          return this.fastMap.size;
        }
        getTreeNode(e) {
          return this.fastMap.get(e);
        }
        addTreeNode(e, t, r) {
          let a = this.fastMap.get(null != t ? t : null);
          if (!a) return;
          let n = new g({ scopeRef: e });
          a.addChild(n),
            (n.parent = a),
            this.fastMap.set(e, n),
            r && (n.nodeToRestore = r);
        }
        addNode(e) {
          this.fastMap.set(e.scopeRef, e);
        }
        removeTreeNode(e) {
          if (null === e) return;
          let t = this.fastMap.get(e);
          if (!t) return;
          let r = t.parent;
          for (let e of this.traverse())
            e !== t &&
              t.nodeToRestore &&
              e.nodeToRestore &&
              t.scopeRef &&
              t.scopeRef.current &&
              x(e.nodeToRestore, t.scopeRef.current) &&
              (e.nodeToRestore = t.nodeToRestore);
          let a = t.children;
          r &&
            (r.removeChild(t),
            a.size > 0 && a.forEach((e) => r && r.addChild(e))),
            this.fastMap.delete(t.scopeRef);
        }
        *traverse(e = this.root) {
          if ((null != e.scopeRef && (yield e), e.children.size > 0))
            for (let t of e.children) yield* this.traverse(t);
        }
        clone() {
          var e, t;
          let r = new v();
          for (let a of this.traverse())
            r.addTreeNode(
              a.scopeRef,
              null !==
                (t =
                  null === (e = a.parent) || void 0 === e
                    ? void 0
                    : e.scopeRef) && void 0 !== t
                ? t
                : null,
              a.nodeToRestore
            );
          return r;
        }
        constructor() {
          (this.fastMap = new Map()),
            (this.root = new g({ scopeRef: null })),
            this.fastMap.set(null, this.root);
        }
      }
      class g {
        addChild(e) {
          this.children.add(e), (e.parent = this);
        }
        removeChild(e) {
          this.children.delete(e), (e.parent = void 0);
        }
        constructor(e) {
          (this.children = new Set()),
            (this.contain = !1),
            (this.scopeRef = e.scopeRef);
        }
      }
      new v();
      var E = r(9282),
        k = r(47650),
        C = r(74055),
        w = r(8748),
        T = r(32207);
      function S(e) {
        let t,
          {
            selectionManager: r,
            keyboardDelegate: p,
            ref: x,
            autoFocus: v = !1,
            shouldFocusWrap: g = !1,
            disallowEmptySelection: S = !1,
            disallowSelectAll: A = !1,
            escapeKeyBehavior: U = "clearSelection",
            selectOnFocus: B = "replace" === r.selectionBehavior,
            disallowTypeAhead: M = !1,
            shouldUseVirtualFocus: P,
            allowsTabNavigation: D = !1,
            isVirtualized: F,
            scrollRef: I = x,
            linkBehavior: O = "action",
          } = e,
          { direction: R } = (0, T.Y)(),
          L = (0, s.rd)(),
          N = (0, n.useRef)({ top: 0, left: 0 });
        c(
          I,
          "scroll",
          F
            ? void 0
            : () => {
                var e, t, r, a;
                N.current = {
                  top:
                    null !==
                      (r =
                        null === (e = I.current) || void 0 === e
                          ? void 0
                          : e.scrollTop) && void 0 !== r
                      ? r
                      : 0,
                  left:
                    null !==
                      (a =
                        null === (t = I.current) || void 0 === t
                          ? void 0
                          : t.scrollLeft) && void 0 !== a
                      ? a
                      : 0,
                };
              }
        );
        let z = (0, n.useRef)(!1);
        c(
          x,
          "react-aria-focus",
          P
            ? (e) => {
                let { detail: t } = e;
                e.stopPropagation(),
                  r.setFocused(!0),
                  (null == t ? void 0 : t.focusStrategy) === "first" &&
                    (z.current = !0);
              }
            : void 0
        );
        let K = (0, l.J)(() => {
          var e, t;
          let a =
            null !==
              (t =
                null === (e = p.getFirstKey) || void 0 === e
                  ? void 0
                  : e.call(p)) && void 0 !== t
              ? t
              : null;
          if (null == a) {
            let e = (0, u.bq)();
            (0, E.vX)(x.current),
              (0, E.Ig)(e, null),
              r.collection.size > 0 && (z.current = !1);
          } else r.setFocusedKey(a), (z.current = !1);
        });
        h(() => {
          z.current && K();
        }, [r.collection, K]);
        let V = (0, l.J)(() => {
          r.collection.size > 0 && (z.current = !1);
        });
        h(() => {
          V();
        }, [r.focusedKey, V]),
          c(
            x,
            "react-aria-clear-focus",
            P
              ? (e) => {
                  var t;
                  e.stopPropagation(),
                    r.setFocused(!1),
                    (null === (t = e.detail) || void 0 === t
                      ? void 0
                      : t.clearFocusKey) && r.setFocusedKey(null);
                }
              : void 0
          );
        let H = (0, n.useRef)(v),
          j = (0, n.useRef)(!1);
        (0, n.useEffect)(() => {
          if (H.current) {
            var e, t, a, n;
            let s = null;
            "first" === v &&
              (s =
                null !==
                  (a =
                    null === (e = p.getFirstKey) || void 0 === e
                      ? void 0
                      : e.call(p)) && void 0 !== a
                  ? a
                  : null),
              "last" === v &&
                (s =
                  null !==
                    (n =
                      null === (t = p.getLastKey) || void 0 === t
                        ? void 0
                        : t.call(p)) && void 0 !== n
                    ? n
                    : null);
            let o = r.selectedKeys;
            if (o.size) {
              for (let e of o)
                if (r.canSelectItem(e)) {
                  s = e;
                  break;
                }
            }
            r.setFocused(!0),
              r.setFocusedKey(s),
              null == s && !P && x.current && (0, w.l)(x.current),
              r.collection.size > 0 && ((H.current = !1), (j.current = !0));
          }
        });
        let _ = (0, n.useRef)(r.focusedKey),
          G = (0, n.useRef)(null);
        (0, n.useEffect)(() => {
          if (
            r.isFocused &&
            null != r.focusedKey &&
            (r.focusedKey !== _.current || j.current) &&
            I.current &&
            x.current
          ) {
            let e = (0, C.ME)(),
              t = (0, a.au)(x, r.focusedKey);
            if (!(t instanceof HTMLElement)) return;
            ("keyboard" === e || j.current) &&
              (G.current && cancelAnimationFrame(G.current),
              (G.current = requestAnimationFrame(() => {
                I.current &&
                  ((0, d.R)(I.current, t),
                  "virtual" !== e &&
                    (0, d.o)(t, { containingElement: x.current }));
              })));
          }
          !P &&
            r.isFocused &&
            null == r.focusedKey &&
            null != _.current &&
            x.current &&
            (0, w.l)(x.current),
            (_.current = r.focusedKey),
            (j.current = !1);
        }),
          (0, n.useEffect)(
            () => () => {
              G.current && cancelAnimationFrame(G.current);
            },
            []
          ),
          c(x, "react-aria-focus-scope-restore", (e) => {
            e.preventDefault(), r.setFocused(!0);
          });
        let W = {
            onKeyDown: (e) => {
              var t, n, s, l, c, d, u, h, m, v, E, C, w, T, M, P;
              if (
                (e.altKey && "Tab" === e.key && e.preventDefault(),
                !(null === (t = x.current) || void 0 === t
                  ? void 0
                  : t.contains(e.target)))
              )
                return;
              let F = (t, n) => {
                if (null != t) {
                  if (r.isLink(t) && "selection" === O && B && !(0, a.N9)(e)) {
                    (0, k.flushSync)(() => {
                      r.setFocusedKey(t, n);
                    });
                    let s = (0, a.au)(x, t),
                      o = r.getItemProps(t);
                    s && L.open(s, e, o.href, o.routerOptions);
                    return;
                  }
                  r.setFocusedKey(t, n),
                    (r.isLink(t) && "override" === O) ||
                      (e.shiftKey && "multiple" === r.selectionMode
                        ? r.extendSelection(t)
                        : B && !(0, a.N9)(e) && r.replaceSelection(t));
                }
              };
              switch (e.key) {
                case "ArrowDown":
                  if (p.getKeyBelow) {
                    let t =
                      null != r.focusedKey
                        ? null === (n = p.getKeyBelow) || void 0 === n
                          ? void 0
                          : n.call(p, r.focusedKey)
                        : null === (s = p.getFirstKey) || void 0 === s
                        ? void 0
                        : s.call(p);
                    null == t &&
                      g &&
                      (t =
                        null === (l = p.getFirstKey) || void 0 === l
                          ? void 0
                          : l.call(p, r.focusedKey)),
                      null != t && (e.preventDefault(), F(t));
                  }
                  break;
                case "ArrowUp":
                  if (p.getKeyAbove) {
                    let t =
                      null != r.focusedKey
                        ? null === (c = p.getKeyAbove) || void 0 === c
                          ? void 0
                          : c.call(p, r.focusedKey)
                        : null === (d = p.getLastKey) || void 0 === d
                        ? void 0
                        : d.call(p);
                    null == t &&
                      g &&
                      (t =
                        null === (u = p.getLastKey) || void 0 === u
                          ? void 0
                          : u.call(p, r.focusedKey)),
                      null != t && (e.preventDefault(), F(t));
                  }
                  break;
                case "ArrowLeft":
                  if (p.getKeyLeftOf) {
                    let t =
                      null != r.focusedKey
                        ? null === (h = p.getKeyLeftOf) || void 0 === h
                          ? void 0
                          : h.call(p, r.focusedKey)
                        : null;
                    null == t &&
                      g &&
                      (t =
                        "rtl" === R
                          ? null === (m = p.getFirstKey) || void 0 === m
                            ? void 0
                            : m.call(p, r.focusedKey)
                          : null === (v = p.getLastKey) || void 0 === v
                          ? void 0
                          : v.call(p, r.focusedKey)),
                      null != t &&
                        (e.preventDefault(),
                        F(t, "rtl" === R ? "first" : "last"));
                  }
                  break;
                case "ArrowRight":
                  if (p.getKeyRightOf) {
                    let t =
                      null != r.focusedKey
                        ? null === (E = p.getKeyRightOf) || void 0 === E
                          ? void 0
                          : E.call(p, r.focusedKey)
                        : null;
                    null == t &&
                      g &&
                      (t =
                        "rtl" === R
                          ? null === (C = p.getLastKey) || void 0 === C
                            ? void 0
                            : C.call(p, r.focusedKey)
                          : null === (w = p.getFirstKey) || void 0 === w
                          ? void 0
                          : w.call(p, r.focusedKey)),
                      null != t &&
                        (e.preventDefault(),
                        F(t, "rtl" === R ? "last" : "first"));
                  }
                  break;
                case "Home":
                  if (p.getFirstKey) {
                    if (null === r.focusedKey && e.shiftKey) return;
                    e.preventDefault();
                    let t = p.getFirstKey(r.focusedKey, (0, o.B)(e));
                    r.setFocusedKey(t),
                      null != t &&
                        ((0, o.B)(e) &&
                        e.shiftKey &&
                        "multiple" === r.selectionMode
                          ? r.extendSelection(t)
                          : B && r.replaceSelection(t));
                  }
                  break;
                case "End":
                  if (p.getLastKey) {
                    if (null === r.focusedKey && e.shiftKey) return;
                    e.preventDefault();
                    let t = p.getLastKey(r.focusedKey, (0, o.B)(e));
                    r.setFocusedKey(t),
                      null != t &&
                        ((0, o.B)(e) &&
                        e.shiftKey &&
                        "multiple" === r.selectionMode
                          ? r.extendSelection(t)
                          : B && r.replaceSelection(t));
                  }
                  break;
                case "PageDown":
                  if (p.getKeyPageBelow && null != r.focusedKey) {
                    let t = p.getKeyPageBelow(r.focusedKey);
                    null != t && (e.preventDefault(), F(t));
                  }
                  break;
                case "PageUp":
                  if (p.getKeyPageAbove && null != r.focusedKey) {
                    let t = p.getKeyPageAbove(r.focusedKey);
                    null != t && (e.preventDefault(), F(t));
                  }
                  break;
                case "a":
                  (0, o.B)(e) &&
                    "multiple" === r.selectionMode &&
                    !0 !== A &&
                    (e.preventDefault(), r.selectAll());
                  break;
                case "Escape":
                  "clearSelection" !== U ||
                    S ||
                    0 === r.selectedKeys.size ||
                    (e.stopPropagation(),
                    e.preventDefault(),
                    r.clearSelection());
                  break;
                case "Tab":
                  if (!D) {
                    if (e.shiftKey) x.current.focus();
                    else {
                      let e, t, r, a;
                      let n,
                        s,
                        o =
                          ((T = x.current),
                          (M = { tabbable: !0 }),
                          (e = M.tabbable ? b.A : b.t),
                          (t =
                            (null == T ? void 0 : T.nodeType) ===
                            Node.ELEMENT_NODE
                              ? T
                              : null),
                          (r = (0, f.TW)(t)),
                          (a = (0, y.H)(r, T || r, NodeFilter.SHOW_ELEMENT, {
                            acceptNode(t) {
                              var r;
                              return (null == M
                                ? void 0
                                : null === (r = M.from) || void 0 === r
                                ? void 0
                                : r.contains(t)) ||
                                ((null == M ? void 0 : M.tabbable) &&
                                  "INPUT" === t.tagName &&
                                  "radio" === t.getAttribute("type") &&
                                  (!(function (e) {
                                    if (e.checked) return !0;
                                    let t = [];
                                    if (e.form) {
                                      var r, a;
                                      let n =
                                        null === (a = e.form) || void 0 === a
                                          ? void 0
                                          : null === (r = a.elements) ||
                                            void 0 === r
                                          ? void 0
                                          : r.namedItem(e.name);
                                      t = [...(null != n ? n : [])];
                                    } else
                                      t = [
                                        ...(0, f.TW)(e).querySelectorAll(
                                          `input[type="radio"][name="${CSS.escape(
                                            e.name
                                          )}"]`
                                        ),
                                      ].filter((e) => !e.form);
                                    return !!t && !t.some((e) => e.checked);
                                  })(t) ||
                                    ("INPUT" === a.currentNode.tagName &&
                                      "radio" === a.currentNode.type &&
                                      a.currentNode.name === t.name)))
                                ? NodeFilter.FILTER_REJECT
                                : e(t) &&
                                  (!(null == M ? void 0 : M.accept) ||
                                    M.accept(t))
                                ? NodeFilter.FILTER_ACCEPT
                                : NodeFilter.FILTER_SKIP;
                            },
                          })),
                          (null == M ? void 0 : M.from) &&
                            (a.currentNode = M.from),
                          a);
                      do (s = o.lastChild()) && (n = s);
                      while (s);
                      n && !n.contains(document.activeElement) && (0, i.e)(n);
                    }
                  }
              }
            },
            onFocus: (e) => {
              if (r.isFocused) {
                e.currentTarget.contains(e.target) || r.setFocused(!1);
                return;
              }
              if (e.currentTarget.contains(e.target)) {
                if ((r.setFocused(!0), null == r.focusedKey)) {
                  var t, n, s, o;
                  let a = (e) => {
                      null != e &&
                        (r.setFocusedKey(e),
                        B && !r.isSelected(e) && r.replaceSelection(e));
                    },
                    i = e.relatedTarget;
                  i &&
                  e.currentTarget.compareDocumentPosition(i) &
                    Node.DOCUMENT_POSITION_FOLLOWING
                    ? a(
                        null !== (s = r.lastSelectedKey) && void 0 !== s
                          ? s
                          : null === (t = p.getLastKey) || void 0 === t
                          ? void 0
                          : t.call(p)
                      )
                    : a(
                        null !== (o = r.firstSelectedKey) && void 0 !== o
                          ? o
                          : null === (n = p.getFirstKey) || void 0 === n
                          ? void 0
                          : n.call(p)
                      );
                } else
                  !F &&
                    I.current &&
                    ((I.current.scrollTop = N.current.top),
                    (I.current.scrollLeft = N.current.left));
                if (null != r.focusedKey && I.current) {
                  let e = (0, a.au)(x, r.focusedKey);
                  e instanceof HTMLElement &&
                    (e.contains(document.activeElement) || P || (0, i.e)(e),
                    "keyboard" === (0, C.ME)() &&
                      (0, d.o)(e, { containingElement: x.current }));
                }
              }
            },
            onBlur: (e) => {
              e.currentTarget.contains(e.relatedTarget) || r.setFocused(!1);
            },
            onMouseDown(e) {
              I.current === e.target && e.preventDefault();
            },
          },
          { typeSelectProps: q } = (function (e) {
            let {
                keyboardDelegate: t,
                selectionManager: r,
                onTypeSelect: a,
              } = e,
              s = (0, n.useRef)({ search: "", timeout: void 0 }).current;
            return {
              typeSelectProps: {
                onKeyDownCapture: t.getKeyForSearch
                  ? (e) => {
                      var n;
                      let o =
                        1 !== (n = e.key).length && /^[A-Z]/i.test(n) ? "" : n;
                      if (
                        o &&
                        !e.ctrlKey &&
                        !e.metaKey &&
                        e.currentTarget.contains(e.target) &&
                        (0 !== s.search.length || " " !== o)
                      ) {
                        if (
                          (" " !== o ||
                            !(s.search.trim().length > 0) ||
                            (e.preventDefault(),
                            "continuePropagation" in e || e.stopPropagation()),
                          (s.search += o),
                          null != t.getKeyForSearch)
                        ) {
                          let e = t.getKeyForSearch(s.search, r.focusedKey);
                          null == e && (e = t.getKeyForSearch(s.search)),
                            null != e && (r.setFocusedKey(e), a && a(e));
                        }
                        clearTimeout(s.timeout),
                          (s.timeout = setTimeout(() => {
                            s.search = "";
                          }, 1e3));
                      }
                    }
                  : void 0,
              },
            };
          })({ keyboardDelegate: p, selectionManager: r });
        M || (W = (0, m.v)(q, W)), P || (t = null == r.focusedKey ? 0 : -1);
        let $ = (0, a.j5)(r.collection);
        return {
          collectionProps: (0, m.v)(W, { tabIndex: t, "data-collection": $ }),
        };
      }
    },
    1089: (e, t, r) => {
      "use strict";
      r.d(t, { p: () => m });
      var a = r(78166),
        n = r(90872),
        s = r(27249),
        o = r(77355),
        i = r(97262),
        l = r(67093),
        c = r(8748),
        d = r(42060),
        u = r(50312),
        p = r(9282),
        h = r(12115);
      function m(e) {
        let {
            id: t,
            selectionManager: r,
            key: m,
            ref: y,
            shouldSelectOnPressUp: x,
            shouldUseVirtualFocus: v,
            focus: g,
            isDisabled: E,
            onAction: k,
            allowsDifferentPressOrigin: C,
            linkBehavior: w = "action",
          } = e,
          T = (0, n.rd)();
        t = (0, s.Bi)(t);
        let S = (e) => {
          if ("keyboard" === e.pointerType && (0, a.N9)(e))
            r.toggleSelection(m);
          else {
            if ("none" === r.selectionMode) return;
            if (r.isLink(m)) {
              if ("selection" === w && y.current) {
                let t = r.getItemProps(m);
                T.open(y.current, e, t.href, t.routerOptions),
                  r.setSelectedKeys(r.selectedKeys);
                return;
              }
              if ("override" === w || "none" === w) return;
            }
            "single" === r.selectionMode
              ? r.isSelected(m) && !r.disallowEmptySelection
                ? r.toggleSelection(m)
                : r.replaceSelection(m)
              : e && e.shiftKey
              ? r.extendSelection(m)
              : "toggle" === r.selectionBehavior ||
                (e &&
                  ((0, o.B)(e) ||
                    "touch" === e.pointerType ||
                    "virtual" === e.pointerType))
              ? r.toggleSelection(m)
              : r.replaceSelection(m);
          }
        };
        (0, h.useEffect)(() => {
          m === r.focusedKey &&
            r.isFocused &&
            (v
              ? (0, p.vX)(y.current)
              : g
              ? g()
              : document.activeElement !== y.current &&
                y.current &&
                (0, c.l)(y.current));
        }, [y, m, r.focusedKey, r.childFocusStrategy, r.isFocused, v]),
          (E = E || r.isDisabled(m));
        let A = {};
        v || E
          ? E &&
            (A.onMouseDown = (e) => {
              e.preventDefault();
            })
          : (A = {
              tabIndex: m === r.focusedKey ? 0 : -1,
              onFocus(e) {
                e.target === y.current && r.setFocusedKey(m);
              },
            });
        let U = r.isLink(m) && "override" === w,
          B = r.isLink(m) && "selection" !== w && "none" !== w,
          M = !E && r.canSelectItem(m) && !U,
          P = (k || B) && !E,
          D = P && ("replace" === r.selectionBehavior ? !M : !M || r.isEmpty),
          F = P && M && "replace" === r.selectionBehavior,
          I = D || F,
          O = (0, h.useRef)(null),
          R = I && M,
          L = (0, h.useRef)(!1),
          N = (0, h.useRef)(!1),
          z = r.getItemProps(m),
          K = (e) => {
            k && k(),
              B && y.current && T.open(y.current, e, z.href, z.routerOptions);
          },
          V = { ref: y };
        if (
          (x
            ? ((V.onPressStart = (e) => {
                (O.current = e.pointerType),
                  (L.current = R),
                  "keyboard" === e.pointerType && (!I || b()) && S(e);
              }),
              C
                ? ((V.onPressUp = D
                    ? void 0
                    : (e) => {
                        "mouse" === e.pointerType && M && S(e);
                      }),
                  (V.onPress = D
                    ? K
                    : (e) => {
                        "keyboard" !== e.pointerType &&
                          "mouse" !== e.pointerType &&
                          M &&
                          S(e);
                      }))
                : (V.onPress = (e) => {
                    D || (F && "mouse" !== e.pointerType)
                      ? ("keyboard" !== e.pointerType || f()) && K(e)
                      : "keyboard" !== e.pointerType && M && S(e);
                  }))
            : ((V.onPressStart = (e) => {
                (O.current = e.pointerType),
                  (L.current = R),
                  (N.current = D),
                  M &&
                    (("mouse" === e.pointerType && !D) ||
                      ("keyboard" === e.pointerType && (!P || b()))) &&
                    S(e);
              }),
              (V.onPress = (e) => {
                ("touch" === e.pointerType ||
                  "pen" === e.pointerType ||
                  "virtual" === e.pointerType ||
                  ("keyboard" === e.pointerType && I && f()) ||
                  ("mouse" === e.pointerType && N.current)) &&
                  (I ? K(e) : M && S(e));
              })),
          (A["data-collection"] = (0, a.EG)(r.collection)),
          (A["data-key"] = m),
          (V.preventFocusOnPress = v),
          v &&
            (V = (0, i.v)(V, {
              onPressStart(e) {
                "touch" !== e.pointerType &&
                  (r.setFocused(!0), r.setFocusedKey(m));
              },
              onPress(e) {
                "touch" === e.pointerType &&
                  (r.setFocused(!0), r.setFocusedKey(m));
              },
            })),
          z)
        )
          for (let e of [
            "onPressStart",
            "onPressEnd",
            "onPressChange",
            "onPress",
            "onPressUp",
            "onClick",
          ])
            z[e] && (V[e] = (0, l.c)(V[e], z[e]));
        let { pressProps: H, isPressed: j } = (0, d.d)(V),
          _ = F
            ? (e) => {
                "mouse" === O.current &&
                  (e.stopPropagation(), e.preventDefault(), K(e));
              }
            : void 0,
          { longPressProps: G } = (0, u.H)({
            isDisabled: !R,
            onLongPress(e) {
              "touch" === e.pointerType &&
                (S(e), r.setSelectionBehavior("toggle"));
            },
          }),
          W =
            "none" !== w && r.isLink(m)
              ? (e) => {
                  n.Fe.isOpening || e.preventDefault();
                }
              : void 0;
        return {
          itemProps: (0, i.v)(
            A,
            M || D || (v && !E) ? H : {},
            R ? G : {},
            {
              onDoubleClick: _,
              onDragStartCapture: (e) => {
                "touch" === O.current && L.current && e.preventDefault();
              },
              onClick: W,
              id: t,
            },
            v ? { onMouseDown: (e) => e.preventDefault() } : void 0
          ),
          isPressed: j,
          isSelected: r.isSelected(m),
          isFocused: r.isFocused && r.focusedKey === m,
          isDisabled: E,
          allowsSelection: M,
          hasAction: I,
        };
      }
      function f() {
        let e = window.event;
        return (null == e ? void 0 : e.key) === "Enter";
      }
      function b() {
        let e = window.event;
        return (
          (null == e ? void 0 : e.key) === " " ||
          (null == e ? void 0 : e.code) === "Space"
        );
      }
    },
    78166: (e, t, r) => {
      "use strict";
      r.d(t, { EG: () => c, N9: () => s, au: () => o, j5: () => l });
      var a = r(3985),
        n = r(27249);
      function s(e) {
        return (0, a.lg)() ? e.altKey : e.ctrlKey;
      }
      function o(e, t) {
        var r, a;
        let n = `[data-key="${CSS.escape(String(t))}"]`,
          s =
            null === (r = e.current) || void 0 === r
              ? void 0
              : r.dataset.collection;
        return (
          s && (n = `[data-collection="${CSS.escape(s)}"]${n}`),
          null === (a = e.current) || void 0 === a ? void 0 : a.querySelector(n)
        );
      }
      let i = new WeakMap();
      function l(e) {
        let t = (0, n.Bi)();
        return i.set(e, t), t;
      }
      function c(e) {
        return i.get(e);
      }
    },
    9282: (e, t, r) => {
      "use strict";
      r.d(t, { Ig: () => o, vX: () => s });
      var a = r(80243),
        n = r(71191);
      function s(e) {
        var t;
        let r, s;
        let i =
          ((t = (0, a.TW)(e)),
          ((s =
            null == (r = (0, n.bq)(t))
              ? void 0
              : r.getAttribute("aria-activedescendant")) &&
            t.getElementById(s)) ||
            r);
        i !== e &&
          (i &&
            (i.dispatchEvent(new FocusEvent("blur", { relatedTarget: e })),
            i.dispatchEvent(
              new FocusEvent("focusout", { bubbles: !0, relatedTarget: e })
            )),
          e && o(e, i));
      }
      function o(e, t) {
        e.dispatchEvent(new FocusEvent("focus", { relatedTarget: t })),
          e.dispatchEvent(
            new FocusEvent("focusin", { bubbles: !0, relatedTarget: t })
          );
      }
    },
    72474: (e, t, r) => {
      "use strict";
      r.d(t, { e: () => l });
      var a = r(97262),
        n = r(53220),
        s = r(8456),
        o = r(42060),
        i = r(46175);
      function l(e, t, r) {
        let {
            isDisabled: l = !1,
            isReadOnly: c = !1,
            value: d,
            name: u,
            form: p,
            children: h,
            "aria-label": m,
            "aria-labelledby": f,
            validationState: b = "valid",
            isInvalid: y,
            onPressStart: x,
            onPressEnd: v,
            onPressChange: g,
            onPress: E,
            onPressUp: k,
            onClick: C,
          } = e,
          { pressProps: w, isPressed: T } = (0, o.d)({
            onPressStart: x,
            onPressEnd: v,
            onPressChange: g,
            onPress: E,
            onPressUp: k,
            onClick: C,
            isDisabled: l,
          }),
          { pressProps: S, isPressed: A } = (0, o.d)({
            onPressStart: x,
            onPressEnd: v,
            onPressChange: g,
            onPressUp: k,
            onClick: C,
            onPress(e) {
              var a;
              null == E || E(e),
                t.toggle(),
                null === (a = r.current) || void 0 === a || a.focus();
            },
            isDisabled: l || c,
          }),
          { focusableProps: U } = (0, i.Wc)(e, r),
          B = (0, a.v)(w, U),
          M = (0, n.$)(e, { labelable: !0 });
        return (
          (0, s.F)(r, t.defaultSelected, t.setSelected),
          {
            labelProps: (0, a.v)(S, { onClick: (e) => e.preventDefault() }),
            inputProps: (0, a.v)(M, {
              "aria-invalid": y || "invalid" === b || void 0,
              "aria-errormessage": e["aria-errormessage"],
              "aria-controls": e["aria-controls"],
              "aria-readonly": c || void 0,
              onChange: (e) => {
                e.stopPropagation(), t.setSelected(e.target.checked);
              },
              disabled: l,
              ...(null == d ? {} : { value: d }),
              name: u,
              form: p,
              type: "checkbox",
              ...B,
            }),
            isSelected: t.isSelected,
            isPressed: T || A,
            isDisabled: l,
            isReadOnly: c,
            isInvalid: y || "invalid" === b,
          }
        );
      }
    },
    62886: (e, t, r) => {
      "use strict";
      r.d(t, { H: () => o });
      var a = r(71191),
        n = r(99124);
      class s {
        get currentNode() {
          return this._currentNode;
        }
        set currentNode(e) {
          if (!(0, a.sD)(this.root, e))
            throw Error(
              "Cannot set currentNode to a node that is not contained by the root node."
            );
          let t = [],
            r = e,
            n = e;
          for (this._currentNode = e; r && r !== this.root; )
            if (r.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              let e = r,
                a = this._doc.createTreeWalker(e, this.whatToShow, {
                  acceptNode: this._acceptNode,
                });
              t.push(a),
                (a.currentNode = n),
                this._currentSetFor.add(a),
                (r = n = e.host);
            } else r = r.parentNode;
          let s = this._doc.createTreeWalker(this.root, this.whatToShow, {
            acceptNode: this._acceptNode,
          });
          t.push(s),
            (s.currentNode = n),
            this._currentSetFor.add(s),
            (this._walkerStack = t);
        }
        get doc() {
          return this._doc;
        }
        firstChild() {
          let e = this.currentNode,
            t = this.nextNode();
          return (0, a.sD)(e, t)
            ? (t && (this.currentNode = t), t)
            : ((this.currentNode = e), null);
        }
        lastChild() {
          let e = this._walkerStack[0].lastChild();
          return e && (this.currentNode = e), e;
        }
        nextNode() {
          let e = this._walkerStack[0].nextNode();
          if (e) {
            if (e.shadowRoot) {
              var t;
              let r;
              if (
                ("function" == typeof this.filter
                  ? (r = this.filter(e))
                  : (null === (t = this.filter) || void 0 === t
                      ? void 0
                      : t.acceptNode) && (r = this.filter.acceptNode(e)),
                r === NodeFilter.FILTER_ACCEPT)
              )
                return (this.currentNode = e), e;
              let a = this.nextNode();
              return a && (this.currentNode = a), a;
            }
            return e && (this.currentNode = e), e;
          }
          if (!(this._walkerStack.length > 1)) return null;
          {
            this._walkerStack.shift();
            let e = this.nextNode();
            return e && (this.currentNode = e), e;
          }
        }
        previousNode() {
          let e = this._walkerStack[0];
          if (e.currentNode === e.root) {
            if (
              this._currentSetFor.has(e) &&
              (this._currentSetFor.delete(e), this._walkerStack.length > 1)
            ) {
              this._walkerStack.shift();
              let e = this.previousNode();
              return e && (this.currentNode = e), e;
            }
            return null;
          }
          let t = e.previousNode();
          if (t) {
            if (t.shadowRoot) {
              var r;
              let e;
              if (
                ("function" == typeof this.filter
                  ? (e = this.filter(t))
                  : (null === (r = this.filter) || void 0 === r
                      ? void 0
                      : r.acceptNode) && (e = this.filter.acceptNode(t)),
                e === NodeFilter.FILTER_ACCEPT)
              )
                return t && (this.currentNode = t), t;
              let a = this.lastChild();
              return a && (this.currentNode = a), a;
            }
            return t && (this.currentNode = t), t;
          }
          if (!(this._walkerStack.length > 1)) return null;
          {
            this._walkerStack.shift();
            let e = this.previousNode();
            return e && (this.currentNode = e), e;
          }
        }
        nextSibling() {
          return null;
        }
        previousSibling() {
          return null;
        }
        parentNode() {
          return null;
        }
        constructor(e, t, r, a) {
          (this._walkerStack = []),
            (this._currentSetFor = new Set()),
            (this._acceptNode = (e) => {
              if (e.nodeType === Node.ELEMENT_NODE) {
                var t;
                let r = e.shadowRoot;
                if (r) {
                  let e = this._doc.createTreeWalker(r, this.whatToShow, {
                    acceptNode: this._acceptNode,
                  });
                  return this._walkerStack.unshift(e), NodeFilter.FILTER_ACCEPT;
                }
                if ("function" == typeof this.filter) return this.filter(e);
                if (
                  null === (t = this.filter) || void 0 === t
                    ? void 0
                    : t.acceptNode
                )
                  return this.filter.acceptNode(e);
                if (null === this.filter) return NodeFilter.FILTER_ACCEPT;
              }
              return NodeFilter.FILTER_SKIP;
            }),
            (this._doc = e),
            (this.root = t),
            (this.filter = null != a ? a : null),
            (this.whatToShow = null != r ? r : NodeFilter.SHOW_ALL),
            (this._currentNode = t),
            this._walkerStack.unshift(
              e.createTreeWalker(t, r, this._acceptNode)
            );
          let n = t.shadowRoot;
          if (n) {
            let e = this._doc.createTreeWalker(n, this.whatToShow, {
              acceptNode: this._acceptNode,
            });
            this._walkerStack.unshift(e);
          }
        }
      }
      function o(e, t, r, a) {
        return (0, n.Nf)() ? new s(e, t, r, a) : e.createTreeWalker(t, r, a);
      }
    },
    53220: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => c });
      let a = new Set(["id"]),
        n = new Set([
          "aria-label",
          "aria-labelledby",
          "aria-describedby",
          "aria-details",
        ]),
        s = new Set([
          "href",
          "hrefLang",
          "target",
          "rel",
          "download",
          "ping",
          "referrerPolicy",
        ]),
        o = new Set(["dir", "lang", "hidden", "inert", "translate"]),
        i = new Set([
          "onClick",
          "onAuxClick",
          "onContextMenu",
          "onDoubleClick",
          "onMouseDown",
          "onMouseEnter",
          "onMouseLeave",
          "onMouseMove",
          "onMouseOut",
          "onMouseOver",
          "onMouseUp",
          "onTouchCancel",
          "onTouchEnd",
          "onTouchMove",
          "onTouchStart",
          "onPointerDown",
          "onPointerMove",
          "onPointerUp",
          "onPointerCancel",
          "onPointerEnter",
          "onPointerLeave",
          "onPointerOver",
          "onPointerOut",
          "onGotPointerCapture",
          "onLostPointerCapture",
          "onScroll",
          "onWheel",
          "onAnimationStart",
          "onAnimationEnd",
          "onAnimationIteration",
          "onTransitionCancel",
          "onTransitionEnd",
          "onTransitionRun",
          "onTransitionStart",
        ]),
        l = /^(data-.*)$/;
      function c(e, t = {}) {
        let {
            labelable: r,
            isLink: d,
            global: u,
            events: p = u,
            propNames: h,
          } = t,
          m = {};
        for (let t in e)
          Object.prototype.hasOwnProperty.call(e, t) &&
            (a.has(t) ||
              (r && n.has(t)) ||
              (d && s.has(t)) ||
              (u && o.has(t)) ||
              (p && i.has(t)) ||
              (t.endsWith("Capture") && i.has(t.slice(0, -7))) ||
              (null == h ? void 0 : h.has(t)) ||
              l.test(t)) &&
            (m[t] = e[t]);
        return m;
      }
    },
    61813: (e, t, r) => {
      "use strict";
      r.d(t, { m: () => n });
      var a = r(68459);
      function n(e, t) {
        let r = e;
        for ((0, a.o)(r, t) && (r = r.parentElement); r && !(0, a.o)(r, t); )
          r = r.parentElement;
        return r || document.scrollingElement || document.documentElement;
      }
    },
    68459: (e, t, r) => {
      "use strict";
      function a(e, t) {
        if (!e) return !1;
        let r = window.getComputedStyle(e),
          a = /(auto|scroll)/.test(r.overflow + r.overflowX + r.overflowY);
        return (
          a &&
            t &&
            (a =
              e.scrollHeight !== e.clientHeight ||
              e.scrollWidth !== e.clientWidth),
          a
        );
      }
      r.d(t, { o: () => a });
    },
    77355: (e, t, r) => {
      "use strict";
      r.d(t, { B: () => n });
      var a = r(3985);
      function n(e) {
        return (0, a.cX)() ? e.metaKey : e.ctrlKey;
      }
    },
    90872: (e, t, r) => {
      "use strict";
      r.d(t, { Fe: () => l, HI: () => c, _h: () => d, rd: () => i });
      var a = r(57651),
        n = r(3985),
        s = r(12115);
      let o = (0, s.createContext)({
        isNative: !0,
        open: function (e, t) {
          !(function (e, t) {
            if (e instanceof HTMLAnchorElement) t(e);
            else if (e.hasAttribute("data-href")) {
              let r = document.createElement("a");
              (r.href = e.getAttribute("data-href")),
                e.hasAttribute("data-target") &&
                  (r.target = e.getAttribute("data-target")),
                e.hasAttribute("data-rel") &&
                  (r.rel = e.getAttribute("data-rel")),
                e.hasAttribute("data-download") &&
                  (r.download = e.getAttribute("data-download")),
                e.hasAttribute("data-ping") &&
                  (r.ping = e.getAttribute("data-ping")),
                e.hasAttribute("data-referrer-policy") &&
                  (r.referrerPolicy = e.getAttribute("data-referrer-policy")),
                e.appendChild(r),
                t(r),
                e.removeChild(r);
            }
          })(e, (e) => l(e, t));
        },
        useHref: (e) => e,
      });
      function i() {
        return (0, s.useContext)(o);
      }
      function l(e, t, r = !0) {
        var s, o;
        let { metaKey: i, ctrlKey: c, altKey: d, shiftKey: u } = t;
        (0, n.gm)() &&
          (null === (o = window.event) || void 0 === o
            ? void 0
            : null === (s = o.type) || void 0 === s
            ? void 0
            : s.startsWith("key")) &&
          "_blank" === e.target &&
          ((0, n.cX)() ? (i = !0) : (c = !0));
        let p =
          (0, n.Tc)() && (0, n.cX)() && !(0, n.bh)()
            ? new KeyboardEvent("keydown", {
                keyIdentifier: "Enter",
                metaKey: i,
                ctrlKey: c,
                altKey: d,
                shiftKey: u,
              })
            : new MouseEvent("click", {
                metaKey: i,
                ctrlKey: c,
                altKey: d,
                shiftKey: u,
                bubbles: !0,
                cancelable: !0,
              });
        (l.isOpening = r), (0, a.e)(e), e.dispatchEvent(p), (l.isOpening = !1);
      }
      function c(e) {
        var t;
        let r = i().useHref(null !== (t = e.href) && void 0 !== t ? t : "");
        return {
          "data-href": e.href ? r : void 0,
          "data-target": e.target,
          "data-rel": e.rel,
          "data-download": e.download,
          "data-ping": e.ping,
          "data-referrer-policy": e.referrerPolicy,
        };
      }
      function d(e) {
        var t;
        let r = i().useHref(
          null !== (t = null == e ? void 0 : e.href) && void 0 !== t ? t : ""
        );
        return {
          href: (null == e ? void 0 : e.href) ? r : void 0,
          target: null == e ? void 0 : e.target,
          rel: null == e ? void 0 : e.rel,
          download: null == e ? void 0 : e.download,
          ping: null == e ? void 0 : e.ping,
          referrerPolicy: null == e ? void 0 : e.referrerPolicy,
        };
      }
      l.isOpening = !1;
    },
    65506: (e, t, r) => {
      "use strict";
      r.d(t, { R: () => n, o: () => o });
      var a = r(68459);
      function n(e, t) {
        let r = s(e, t, "left"),
          a = s(e, t, "top"),
          n = t.offsetWidth,
          o = t.offsetHeight,
          i = e.scrollLeft,
          l = e.scrollTop,
          {
            borderTopWidth: c,
            borderLeftWidth: d,
            scrollPaddingTop: u,
            scrollPaddingRight: p,
            scrollPaddingBottom: h,
            scrollPaddingLeft: m,
          } = getComputedStyle(e),
          f = i + parseInt(d, 10),
          b = l + parseInt(c, 10),
          y = f + e.clientWidth,
          x = b + e.clientHeight,
          v = parseInt(u, 10) || 0,
          g = parseInt(h, 10) || 0,
          E = parseInt(p, 10) || 0,
          k = parseInt(m, 10) || 0;
        r <= i + k
          ? (i = r - parseInt(d, 10) - k)
          : r + n > y - E && (i += r + n - y + E),
          a <= b + v
            ? (l = a - parseInt(c, 10) - v)
            : a + o > x - g && (l += a + o - x + g),
          (e.scrollLeft = i),
          (e.scrollTop = l);
      }
      function s(e, t, r) {
        let a = "left" === r ? "offsetLeft" : "offsetTop",
          n = 0;
        for (; t.offsetParent && ((n += t[a]), t.offsetParent !== e); ) {
          if (t.offsetParent.contains(e)) {
            n -= e[a];
            break;
          }
          t = t.offsetParent;
        }
        return n;
      }
      function o(e, t) {
        if (e && document.contains(e)) {
          let l = document.scrollingElement || document.documentElement;
          if ("hidden" === window.getComputedStyle(l).overflow)
            for (let t of (function (e, t) {
              let r = [];
              for (; e && e !== document.documentElement; )
                (0, a.o)(e, void 0) && r.push(e), (e = e.parentElement);
              return r;
            })(e))
              n(t, e);
          else {
            var r, s, o, i;
            let { left: a, top: n } = e.getBoundingClientRect();
            null == e ||
              null === (r = e.scrollIntoView) ||
              void 0 === r ||
              r.call(e, { block: "nearest" });
            let { left: l, top: c } = e.getBoundingClientRect();
            (Math.abs(a - l) > 1 || Math.abs(n - c) > 1) &&
              (null == t ||
                null === (o = t.containingElement) ||
                void 0 === o ||
                null === (s = o.scrollIntoView) ||
                void 0 === s ||
                s.call(o, { block: "center", inline: "center" }),
              null === (i = e.scrollIntoView) ||
                void 0 === i ||
                i.call(e, { block: "nearest" }));
          }
        }
      }
    },
    2853: (e, t, r) => {
      "use strict";
      r.d(t, { I: () => i });
      var a = r(8858),
        n = r(12115);
      let s = 0,
        o = new Map();
      function i(e) {
        let [t, r] = (0, n.useState)();
        return (
          (0, a.N)(() => {
            if (!e) return;
            let t = o.get(e);
            if (t) r(t.element.id);
            else {
              let a = `react-aria-description-${s++}`;
              r(a);
              let n = document.createElement("div");
              (n.id = a),
                (n.style.display = "none"),
                (n.textContent = e),
                document.body.appendChild(n),
                (t = { refCount: 0, element: n }),
                o.set(e, t);
            }
            return (
              t.refCount++,
              () => {
                t && 0 == --t.refCount && (t.element.remove(), o.delete(e));
              }
            );
          }, [e]),
          { "aria-describedby": e ? t : void 0 }
        );
      }
    },
    8456: (e, t, r) => {
      "use strict";
      r.d(t, { F: () => s });
      var a = r(52378),
        n = r(12115);
      function s(e, t, r) {
        let s = (0, a.J)(() => {
          r && r(t);
        });
        (0, n.useEffect)(() => {
          var t;
          let r =
            null == e
              ? void 0
              : null === (t = e.current) || void 0 === t
              ? void 0
              : t.form;
          return (
            null == r || r.addEventListener("reset", s),
            () => {
              null == r || r.removeEventListener("reset", s);
            }
          );
        }, [e, s]);
      }
    },
    25712: (e, t, r) => {
      "use strict";
      function a(e, t) {
        return "function" == typeof t.getChildren
          ? t.getChildren(e.key)
          : e.childNodes;
      }
      function n(e) {
        return s(e, 0);
      }
      function s(e, t) {
        if (t < 0) return;
        let r = 0;
        for (let a of e) {
          if (r === t) return a;
          r++;
        }
      }
      function o(e) {
        let t;
        for (let r of e) t = r;
        return t;
      }
      function i(e, t, r) {
        if (t.parentKey === r.parentKey) return t.index - r.index;
        let a = [...l(e, t), t],
          n = [...l(e, r), r],
          s = a.slice(0, n.length).findIndex((e, t) => e !== n[t]);
        return -1 !== s
          ? ((t = a[s]), (r = n[s]), t.index - r.index)
          : a.findIndex((e) => e === r) >= 0
          ? 1
          : (n.findIndex((e) => e === t), -1);
      }
      function l(e, t) {
        let r = [],
          a = t;
        for (; (null == a ? void 0 : a.parentKey) != null; )
          (a = e.getItem(a.parentKey)) && r.unshift(a);
        return r;
      }
      r.d(t, {
        W: () => o,
        cj: () => s,
        iQ: () => a,
        o3: () => i,
        ue: () => n,
      });
    },
    97810: (e, t, r) => {
      "use strict";
      r.d(t, { G: () => i });
      var a = r(12115);
      class n {
        build(e, t) {
          return (this.context = t), s(() => this.iterateCollection(e));
        }
        *iterateCollection(e) {
          let { children: t, items: r } = e;
          if (a.isValidElement(t) && t.type === a.Fragment)
            yield* this.iterateCollection({
              children: t.props.children,
              items: r,
            });
          else if ("function" == typeof t) {
            if (!r)
              throw Error(
                "props.children was a function but props.items is missing"
              );
            let e = 0;
            for (let a of r)
              yield* this.getFullNode({ value: a, index: e }, { renderer: t }),
                e++;
          } else {
            let e = [];
            a.Children.forEach(t, (t) => {
              t && e.push(t);
            });
            let r = 0;
            for (let t of e)
              for (let e of this.getFullNode({ element: t, index: r }, {}))
                r++, yield e;
          }
        }
        getKey(e, t, r, a) {
          if (null != e.key) return e.key;
          if ("cell" === t.type && null != t.key) return `${a}${t.key}`;
          let n = t.value;
          if (null != n) {
            var s;
            let e = null !== (s = n.key) && void 0 !== s ? s : n.id;
            if (null == e) throw Error("No key found for item");
            return e;
          }
          return a ? `${a}.${t.index}` : `$.${t.index}`;
        }
        getChildState(e, t) {
          return { renderer: t.renderer || e.renderer };
        }
        *getFullNode(e, t, r, n) {
          var i, l, c, d, u, p, h, m;
          if (a.isValidElement(e.element) && e.element.type === a.Fragment) {
            let s = [];
            a.Children.forEach(e.element.props.children, (e) => {
              s.push(e);
            });
            let o = null !== (i = e.index) && void 0 !== i ? i : 0;
            for (let e of s)
              yield* this.getFullNode({ element: e, index: o++ }, t, r, n);
            return;
          }
          let f = e.element;
          if (!f && e.value && t && t.renderer) {
            let r = this.cache.get(e.value);
            if (
              r &&
              (!r.shouldInvalidate || !r.shouldInvalidate(this.context))
            ) {
              (r.index = e.index), (r.parentKey = n ? n.key : null), yield r;
              return;
            }
            f = t.renderer(e.value);
          }
          if (a.isValidElement(f)) {
            let a = f.type;
            if (
              "function" != typeof a &&
              "function" != typeof a.getCollectionNode
            ) {
              let e = f.type;
              throw Error(`Unknown element <${e}> in collection.`);
            }
            let s = a.getCollectionNode(f.props, this.context),
              i = null !== (l = e.index) && void 0 !== l ? l : 0,
              h = s.next();
            for (; !h.done && h.value; ) {
              let a = h.value;
              e.index = i;
              let l = null !== (c = a.key) && void 0 !== c ? c : null;
              null == l && (l = a.element ? null : this.getKey(f, e, t, r));
              let m = [
                ...this.getFullNode(
                  {
                    ...a,
                    key: l,
                    index: i,
                    wrapper: (function (e, t) {
                      return e && t ? (r) => e(t(r)) : e || t || void 0;
                    })(e.wrapper, a.wrapper),
                  },
                  this.getChildState(t, a),
                  r ? `${r}${f.key}` : f.key,
                  n
                ),
              ];
              for (let t of m) {
                if (
                  ((t.value =
                    null !==
                      (u =
                        null !== (d = a.value) && void 0 !== d ? d : e.value) &&
                    void 0 !== u
                      ? u
                      : null),
                  t.value && this.cache.set(t.value, t),
                  e.type && t.type !== e.type)
                )
                  throw Error(
                    `Unsupported type <${o(t.type)}> in <${o(
                      null !== (p = null == n ? void 0 : n.type) && void 0 !== p
                        ? p
                        : "unknown parent type"
                    )}>. Only <${o(e.type)}> is supported.`
                  );
                i++, yield t;
              }
              h = s.next(m);
            }
            return;
          }
          if (null == e.key || null == e.type) return;
          let b = this,
            y = {
              type: e.type,
              props: e.props,
              key: e.key,
              parentKey: n ? n.key : null,
              value: null !== (h = e.value) && void 0 !== h ? h : null,
              level: n ? n.level + 1 : 0,
              index: e.index,
              rendered: e.rendered,
              textValue: null !== (m = e.textValue) && void 0 !== m ? m : "",
              "aria-label": e["aria-label"],
              wrapper: e.wrapper,
              shouldInvalidate: e.shouldInvalidate,
              hasChildNodes: e.hasChildNodes || !1,
              childNodes: s(function* () {
                if (!e.hasChildNodes || !e.childNodes) return;
                let r = 0;
                for (let a of e.childNodes())
                  for (let e of (null != a.key && (a.key = `${y.key}${a.key}`),
                  b.getFullNode(
                    { ...a, index: r },
                    b.getChildState(t, a),
                    y.key,
                    y
                  )))
                    r++, yield e;
              }),
            };
          yield y;
        }
        constructor() {
          this.cache = new WeakMap();
        }
      }
      function s(e) {
        let t = [],
          r = null;
        return {
          *[Symbol.iterator]() {
            for (let e of t) yield e;
            for (let a of (r || (r = e()), r)) t.push(a), yield a;
          },
        };
      }
      function o(e) {
        return e[0].toUpperCase() + e.slice(1);
      }
      function i(e, t, r) {
        let s = (0, a.useMemo)(() => new n(), []),
          { children: o, items: i, collection: l } = e;
        return (0, a.useMemo)(
          () => l || t(s.build({ children: o, items: i }, r)),
          [s, o, i, l, r, t]
        );
      }
    },
    26947: (e, t, r) => {
      "use strict";
      r.d(t, { KZ: () => c, Lf: () => l, YD: () => o });
      var a = r(12115);
      let n = {
          badInput: !1,
          customError: !1,
          patternMismatch: !1,
          rangeOverflow: !1,
          rangeUnderflow: !1,
          stepMismatch: !1,
          tooLong: !1,
          tooShort: !1,
          typeMismatch: !1,
          valueMissing: !1,
          valid: !0,
        },
        s = { ...n, customError: !0, valid: !1 },
        o = { isInvalid: !1, validationDetails: n, validationErrors: [] },
        i = (0, a.createContext)({}),
        l = "__formValidationState" + Date.now();
      function c(e) {
        if (e[l]) {
          let {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: a,
            resetValidation: n,
            commitValidation: s,
          } = e[l];
          return {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: a,
            resetValidation: n,
            commitValidation: s,
          };
        }
        return (function (e) {
          let {
            isInvalid: t,
            validationState: r,
            name: n,
            value: l,
            builtinValidation: c,
            validate: h,
            validationBehavior: m = "aria",
          } = e;
          r && (t || (t = "invalid" === r));
          let f =
              void 0 !== t
                ? { isInvalid: t, validationErrors: [], validationDetails: s }
                : null,
            b = (0, a.useMemo)(
              () =>
                h && null != l
                  ? u(
                      (function (e, t) {
                        if ("function" == typeof e) {
                          let r = e(t);
                          if (r && "boolean" != typeof r) return d(r);
                        }
                        return [];
                      })(h, l)
                    )
                  : null,
              [h, l]
            );
          (null == c ? void 0 : c.validationDetails.valid) && (c = void 0);
          let y = (0, a.useContext)(i),
            x = (0, a.useMemo)(
              () =>
                n
                  ? Array.isArray(n)
                    ? n.flatMap((e) => d(y[e]))
                    : d(y[n])
                  : [],
              [y, n]
            ),
            [v, g] = (0, a.useState)(y),
            [E, k] = (0, a.useState)(!1);
          y !== v && (g(y), k(!1));
          let C = (0, a.useMemo)(() => u(E ? [] : x), [E, x]),
            w = (0, a.useRef)(o),
            [T, S] = (0, a.useState)(o),
            A = (0, a.useRef)(o),
            [U, B] = (0, a.useState)(!1);
          return (
            (0, a.useEffect)(() => {
              if (!U) return;
              B(!1);
              let e = b || c || w.current;
              p(e, A.current) || ((A.current = e), S(e));
            }),
            {
              realtimeValidation: f || C || b || c || o,
              displayValidation:
                "native" === m ? f || C || T : f || C || b || c || T,
              updateValidation(e) {
                "aria" !== m || p(T, e) ? (w.current = e) : S(e);
              },
              resetValidation() {
                p(o, A.current) || ((A.current = o), S(o)),
                  "native" === m && B(!1),
                  k(!0);
              },
              commitValidation() {
                "native" === m && B(!0), k(!0);
              },
            }
          );
        })(e);
      }
      function d(e) {
        return e ? (Array.isArray(e) ? e : [e]) : [];
      }
      function u(e) {
        return e.length
          ? { isInvalid: !0, validationErrors: e, validationDetails: s }
          : null;
      }
      function p(e, t) {
        return (
          e === t ||
          (!!e &&
            !!t &&
            e.isInvalid === t.isInvalid &&
            e.validationErrors.length === t.validationErrors.length &&
            e.validationErrors.every((e, r) => e === t.validationErrors[r]) &&
            Object.entries(e.validationDetails).every(
              ([e, r]) => t.validationDetails[e] === r
            ))
        );
      }
    },
    37292: (e, t, r) => {
      "use strict";
      r.d(t, { L: () => a });
      class a extends Set {
        constructor(e, t, r) {
          super(e),
            e instanceof a
              ? ((this.anchorKey = null != t ? t : e.anchorKey),
                (this.currentKey = null != r ? r : e.currentKey))
              : ((this.anchorKey = null != t ? t : null),
                (this.currentKey = null != r ? r : null));
        }
      }
    },
    40879: (e, t, r) => {
      "use strict";
      r.d(t, { Y: () => s });
      var a = r(37292),
        n = r(25712);
      class s {
        get selectionMode() {
          return this.state.selectionMode;
        }
        get disallowEmptySelection() {
          return this.state.disallowEmptySelection;
        }
        get selectionBehavior() {
          return this.state.selectionBehavior;
        }
        setSelectionBehavior(e) {
          this.state.setSelectionBehavior(e);
        }
        get isFocused() {
          return this.state.isFocused;
        }
        setFocused(e) {
          this.state.setFocused(e);
        }
        get focusedKey() {
          return this.state.focusedKey;
        }
        get childFocusStrategy() {
          return this.state.childFocusStrategy;
        }
        setFocusedKey(e, t) {
          (null == e || this.collection.getItem(e)) &&
            this.state.setFocusedKey(e, t);
        }
        get selectedKeys() {
          return "all" === this.state.selectedKeys
            ? new Set(this.getSelectAllKeys())
            : this.state.selectedKeys;
        }
        get rawSelection() {
          return this.state.selectedKeys;
        }
        isSelected(e) {
          if ("none" === this.state.selectionMode) return !1;
          let t = this.getKey(e);
          return (
            null != t &&
            ("all" === this.state.selectedKeys
              ? this.canSelectItem(t)
              : this.state.selectedKeys.has(t))
          );
        }
        get isEmpty() {
          return (
            "all" !== this.state.selectedKeys &&
            0 === this.state.selectedKeys.size
          );
        }
        get isSelectAll() {
          if (this.isEmpty) return !1;
          if ("all" === this.state.selectedKeys) return !0;
          if (null != this._isSelectAll) return this._isSelectAll;
          let e = this.getSelectAllKeys(),
            t = this.state.selectedKeys;
          return (
            (this._isSelectAll = e.every((e) => t.has(e))), this._isSelectAll
          );
        }
        get firstSelectedKey() {
          var e;
          let t = null;
          for (let e of this.state.selectedKeys) {
            let r = this.collection.getItem(e);
            (!t || (r && 0 > (0, n.o3)(this.collection, r, t))) && (t = r);
          }
          return null !== (e = null == t ? void 0 : t.key) && void 0 !== e
            ? e
            : null;
        }
        get lastSelectedKey() {
          var e;
          let t = null;
          for (let e of this.state.selectedKeys) {
            let r = this.collection.getItem(e);
            (!t || (r && (0, n.o3)(this.collection, r, t) > 0)) && (t = r);
          }
          return null !== (e = null == t ? void 0 : t.key) && void 0 !== e
            ? e
            : null;
        }
        get disabledKeys() {
          return this.state.disabledKeys;
        }
        get disabledBehavior() {
          return this.state.disabledBehavior;
        }
        extendSelection(e) {
          let t;
          if ("none" === this.selectionMode) return;
          if ("single" === this.selectionMode) {
            this.replaceSelection(e);
            return;
          }
          let r = this.getKey(e);
          if (null != r) {
            if ("all" === this.state.selectedKeys) t = new a.L([r], r, r);
            else {
              var n, s;
              let e = this.state.selectedKeys,
                o = null !== (n = e.anchorKey) && void 0 !== n ? n : r;
              for (let n of ((t = new a.L(e, o, r)),
              this.getKeyRange(
                o,
                null !== (s = e.currentKey) && void 0 !== s ? s : r
              )))
                t.delete(n);
              for (let e of this.getKeyRange(r, o))
                this.canSelectItem(e) && t.add(e);
            }
            this.state.setSelectedKeys(t);
          }
        }
        getKeyRange(e, t) {
          let r = this.collection.getItem(e),
            a = this.collection.getItem(t);
          return r && a
            ? 0 >= (0, n.o3)(this.collection, r, a)
              ? this.getKeyRangeInternal(e, t)
              : this.getKeyRangeInternal(t, e)
            : [];
        }
        getKeyRangeInternal(e, t) {
          var r;
          if (
            null === (r = this.layoutDelegate) || void 0 === r
              ? void 0
              : r.getKeyRange
          )
            return this.layoutDelegate.getKeyRange(e, t);
          let a = [],
            n = e;
          for (; null != n; ) {
            let e = this.collection.getItem(n);
            if (
              (e &&
                ("item" === e.type ||
                  ("cell" === e.type && this.allowsCellSelection)) &&
                a.push(n),
              n === t)
            )
              return a;
            n = this.collection.getKeyAfter(n);
          }
          return [];
        }
        getKey(e) {
          let t = this.collection.getItem(e);
          if (!t || ("cell" === t.type && this.allowsCellSelection)) return e;
          for (; t && "item" !== t.type && null != t.parentKey; )
            t = this.collection.getItem(t.parentKey);
          return t && "item" === t.type ? t.key : null;
        }
        toggleSelection(e) {
          if ("none" === this.selectionMode) return;
          if ("single" === this.selectionMode && !this.isSelected(e)) {
            this.replaceSelection(e);
            return;
          }
          let t = this.getKey(e);
          if (null == t) return;
          let r = new a.L(
            "all" === this.state.selectedKeys
              ? this.getSelectAllKeys()
              : this.state.selectedKeys
          );
          r.has(t)
            ? r.delete(t)
            : this.canSelectItem(t) &&
              (r.add(t), (r.anchorKey = t), (r.currentKey = t)),
            (this.disallowEmptySelection && 0 === r.size) ||
              this.state.setSelectedKeys(r);
        }
        replaceSelection(e) {
          if ("none" === this.selectionMode) return;
          let t = this.getKey(e);
          if (null == t) return;
          let r = this.canSelectItem(t) ? new a.L([t], t, t) : new a.L();
          this.state.setSelectedKeys(r);
        }
        setSelectedKeys(e) {
          if ("none" === this.selectionMode) return;
          let t = new a.L();
          for (let r of e) {
            let e = this.getKey(r);
            if (null != e && (t.add(e), "single" === this.selectionMode)) break;
          }
          this.state.setSelectedKeys(t);
        }
        getSelectAllKeys() {
          let e = [],
            t = (r) => {
              for (; null != r; ) {
                if (this.canSelectItem(r)) {
                  var a, s;
                  let o = this.collection.getItem(r);
                  (null == o ? void 0 : o.type) === "item" && e.push(r),
                    (null == o ? void 0 : o.hasChildNodes) &&
                      (this.allowsCellSelection || "item" !== o.type) &&
                      t(
                        null !==
                          (s =
                            null ===
                              (a = (0, n.ue)((0, n.iQ)(o, this.collection))) ||
                            void 0 === a
                              ? void 0
                              : a.key) && void 0 !== s
                          ? s
                          : null
                      );
                }
                r = this.collection.getKeyAfter(r);
              }
            };
          return t(this.collection.getFirstKey()), e;
        }
        selectAll() {
          this.isSelectAll ||
            "multiple" !== this.selectionMode ||
            this.state.setSelectedKeys("all");
        }
        clearSelection() {
          !this.disallowEmptySelection &&
            ("all" === this.state.selectedKeys ||
              this.state.selectedKeys.size > 0) &&
            this.state.setSelectedKeys(new a.L());
        }
        toggleSelectAll() {
          this.isSelectAll ? this.clearSelection() : this.selectAll();
        }
        select(e, t) {
          "none" !== this.selectionMode &&
            ("single" === this.selectionMode
              ? this.isSelected(e) && !this.disallowEmptySelection
                ? this.toggleSelection(e)
                : this.replaceSelection(e)
              : "toggle" === this.selectionBehavior ||
                (t &&
                  ("touch" === t.pointerType || "virtual" === t.pointerType))
              ? this.toggleSelection(e)
              : this.replaceSelection(e));
        }
        isSelectionEqual(e) {
          if (e === this.state.selectedKeys) return !0;
          let t = this.selectedKeys;
          if (e.size !== t.size) return !1;
          for (let r of e) if (!t.has(r)) return !1;
          for (let r of t) if (!e.has(r)) return !1;
          return !0;
        }
        canSelectItem(e) {
          var t;
          if (
            "none" === this.state.selectionMode ||
            this.state.disabledKeys.has(e)
          )
            return !1;
          let r = this.collection.getItem(e);
          return (
            !!r &&
            (null == r ||
              null === (t = r.props) ||
              void 0 === t ||
              !t.isDisabled) &&
            ("cell" !== r.type || !!this.allowsCellSelection)
          );
        }
        isDisabled(e) {
          var t, r;
          return (
            "all" === this.state.disabledBehavior &&
            (this.state.disabledKeys.has(e) ||
              !!(null === (r = this.collection.getItem(e)) || void 0 === r
                ? void 0
                : null === (t = r.props) || void 0 === t
                ? void 0
                : t.isDisabled))
          );
        }
        isLink(e) {
          var t, r;
          return !!(null === (r = this.collection.getItem(e)) || void 0 === r
            ? void 0
            : null === (t = r.props) || void 0 === t
            ? void 0
            : t.href);
        }
        getItemProps(e) {
          var t;
          return null === (t = this.collection.getItem(e)) || void 0 === t
            ? void 0
            : t.props;
        }
        withCollection(e) {
          return new s(e, this.state, {
            allowsCellSelection: this.allowsCellSelection,
            layoutDelegate: this.layoutDelegate || void 0,
          });
        }
        constructor(e, t, r) {
          var a;
          (this.collection = e),
            (this.state = t),
            (this.allowsCellSelection =
              null !== (a = null == r ? void 0 : r.allowsCellSelection) &&
              void 0 !== a &&
              a),
            (this._isSelectAll = null),
            (this.layoutDelegate =
              (null == r ? void 0 : r.layoutDelegate) || null);
        }
      }
    },
    87594: (e, t, r) => {
      "use strict";
      r.d(t, { R: () => o });
      var a = r(37292),
        n = r(53335),
        s = r(12115);
      function o(e) {
        let {
            selectionMode: t = "none",
            disallowEmptySelection: r = !1,
            allowDuplicateSelectionEvents: o,
            selectionBehavior: l = "toggle",
            disabledBehavior: c = "all",
          } = e,
          d = (0, s.useRef)(!1),
          [, u] = (0, s.useState)(!1),
          p = (0, s.useRef)(null),
          h = (0, s.useRef)(null),
          [, m] = (0, s.useState)(null),
          f = (0, s.useMemo)(() => i(e.selectedKeys), [e.selectedKeys]),
          b = (0, s.useMemo)(
            () => i(e.defaultSelectedKeys, new a.L()),
            [e.defaultSelectedKeys]
          ),
          [y, x] = (0, n.P)(f, b, e.onSelectionChange),
          v = (0, s.useMemo)(
            () => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()),
            [e.disabledKeys]
          ),
          [g, E] = (0, s.useState)(l);
        "replace" === l &&
          "toggle" === g &&
          "object" == typeof y &&
          0 === y.size &&
          E("replace");
        let k = (0, s.useRef)(l);
        return (
          (0, s.useEffect)(() => {
            l !== k.current && (E(l), (k.current = l));
          }, [l]),
          {
            selectionMode: t,
            disallowEmptySelection: r,
            selectionBehavior: g,
            setSelectionBehavior: E,
            get isFocused() {
              return d.current;
            },
            setFocused(e) {
              (d.current = e), u(e);
            },
            get focusedKey() {
              return p.current;
            },
            get childFocusStrategy() {
              return h.current;
            },
            setFocusedKey(e, t = "first") {
              (p.current = e), (h.current = t), m(e);
            },
            selectedKeys: y,
            setSelectedKeys(e) {
              (o ||
                !(function (e, t) {
                  if (e.size !== t.size) return !1;
                  for (let r of e) if (!t.has(r)) return !1;
                  return !0;
                })(e, y)) &&
                x(e);
            },
            disabledKeys: v,
            disabledBehavior: c,
          }
        );
      }
      function i(e, t) {
        return e ? ("all" === e ? "all" : new a.L(e)) : t;
      }
    },
    53335: (e, t, r) => {
      "use strict";
      r.d(t, { P: () => n });
      var a = r(12115);
      function n(e, t, r) {
        let [n, s] = (0, a.useState)(e || t),
          o = (0, a.useRef)(void 0 !== e),
          i = void 0 !== e;
        (0, a.useEffect)(() => {
          o.current, (o.current = i);
        }, [i]);
        let l = i ? e : n,
          c = (0, a.useCallback)(
            (e, ...t) => {
              let a = (e, ...t) => {
                r && !Object.is(l, e) && r(e, ...t), i || (l = e);
              };
              "function" == typeof e
                ? s((r, ...n) => {
                    let s = e(i ? l : r, ...n);
                    return (a(s, ...t), i) ? r : s;
                  })
                : (i || s(e), a(e, ...t));
            },
            [i, l, r]
          );
        return [l, c];
      }
    },
    87267: (e, t, r) => {
      "use strict";
      r.d(t, { Te: () => g });
      var a = r(12115),
        n = r(47650);
      function s(e, t, r) {
        let a,
          n = r.initialDeps ?? [];
        return () => {
          var s, o, i, l;
          let c, d;
          r.key &&
            (null == (s = r.debug) ? void 0 : s.call(r)) &&
            (c = Date.now());
          let u = e();
          if (!(u.length !== n.length || u.some((e, t) => n[t] !== e)))
            return a;
          if (
            ((n = u),
            r.key &&
              (null == (o = r.debug) ? void 0 : o.call(r)) &&
              (d = Date.now()),
            (a = t(...u)),
            r.key && (null == (i = r.debug) ? void 0 : i.call(r)))
          ) {
            let e = Math.round((Date.now() - c) * 100) / 100,
              t = Math.round((Date.now() - d) * 100) / 100,
              a = t / 16,
              n = (e, t) => {
                for (e = String(e); e.length < t; ) e = " " + e;
                return e;
              };
            console.info(
              `%c⏱ ${n(t, 5)} /${n(e, 5)} ms`,
              `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
              0,
              Math.min(120 - 120 * a, 120)
            )}deg 100% 31%);`,
              null == r ? void 0 : r.key
            );
          }
          return (
            null == (l = null == r ? void 0 : r.onChange) || l.call(r, a), a
          );
        };
      }
      function o(e, t) {
        if (void 0 !== e) return e;
        throw Error(`Unexpected undefined${t ? `: ${t}` : ""}`);
      }
      let i = (e, t) => 1 > Math.abs(e - t),
        l = (e, t, r) => {
          let a;
          return function (...n) {
            e.clearTimeout(a), (a = e.setTimeout(() => t.apply(this, n), r));
          };
        },
        c = (e) => e,
        d = (e) => {
          let t = Math.max(e.startIndex - e.overscan, 0),
            r = Math.min(e.endIndex + e.overscan, e.count - 1),
            a = [];
          for (let e = t; e <= r; e++) a.push(e);
          return a;
        },
        u = (e, t) => {
          let r = e.scrollElement;
          if (!r) return;
          let a = e.targetWindow;
          if (!a) return;
          let n = (e) => {
            let { width: r, height: a } = e;
            t({ width: Math.round(r), height: Math.round(a) });
          };
          if ((n(r.getBoundingClientRect()), !a.ResizeObserver))
            return () => {};
          let s = new a.ResizeObserver((e) => {
            let t = e[0];
            if (null == t ? void 0 : t.borderBoxSize) {
              let e = t.borderBoxSize[0];
              if (e) {
                n({ width: e.inlineSize, height: e.blockSize });
                return;
              }
            }
            n(r.getBoundingClientRect());
          });
          return (
            s.observe(r, { box: "border-box" }),
            () => {
              s.unobserve(r);
            }
          );
        },
        p = { passive: !0 },
        h = "undefined" == typeof window || "onscrollend" in window,
        m = (e, t) => {
          let r = e.scrollElement;
          if (!r) return;
          let a = e.targetWindow;
          if (!a) return;
          let n = 0,
            s =
              e.options.useScrollendEvent && h
                ? () => void 0
                : l(
                    a,
                    () => {
                      t(n, !1);
                    },
                    e.options.isScrollingResetDelay
                  ),
            o = (a) => () => {
              let { horizontal: o, isRtl: i } = e.options;
              (n = o ? r.scrollLeft * ((i && -1) || 1) : r.scrollTop),
                s(),
                t(n, a);
            },
            i = o(!0),
            c = o(!1);
          return (
            c(),
            r.addEventListener("scroll", i, p),
            r.addEventListener("scrollend", c, p),
            () => {
              r.removeEventListener("scroll", i),
                r.removeEventListener("scrollend", c);
            }
          );
        },
        f = (e, t, r) => {
          if (null == t ? void 0 : t.borderBoxSize) {
            let e = t.borderBoxSize[0];
            if (e)
              return Math.round(
                e[r.options.horizontal ? "inlineSize" : "blockSize"]
              );
          }
          return Math.round(
            e.getBoundingClientRect()[r.options.horizontal ? "width" : "height"]
          );
        },
        b = (e, { adjustments: t = 0, behavior: r }, a) => {
          var n, s;
          null == (s = null == (n = a.scrollElement) ? void 0 : n.scrollTo) ||
            s.call(n, {
              [a.options.horizontal ? "left" : "top"]: e + t,
              behavior: r,
            });
        };
      class y {
        constructor(e) {
          (this.unsubs = []),
            (this.scrollElement = null),
            (this.targetWindow = null),
            (this.isScrolling = !1),
            (this.scrollToIndexTimeoutId = null),
            (this.measurementsCache = []),
            (this.itemSizeCache = new Map()),
            (this.pendingMeasuredCacheIndexes = []),
            (this.scrollRect = null),
            (this.scrollOffset = null),
            (this.scrollDirection = null),
            (this.scrollAdjustments = 0),
            (this.elementsCache = new Map()),
            (this.observer = (() => {
              let e = null,
                t = () =>
                  e ||
                  (this.targetWindow && this.targetWindow.ResizeObserver
                    ? (e = new this.targetWindow.ResizeObserver((e) => {
                        e.forEach((e) => {
                          this._measureElement(e.target, e);
                        });
                      }))
                    : null);
              return {
                disconnect: () => {
                  var r;
                  null == (r = t()) || r.disconnect(), (e = null);
                },
                observe: (e) => {
                  var r;
                  return null == (r = t())
                    ? void 0
                    : r.observe(e, { box: "border-box" });
                },
                unobserve: (e) => {
                  var r;
                  return null == (r = t()) ? void 0 : r.unobserve(e);
                },
              };
            })()),
            (this.range = null),
            (this.setOptions = (e) => {
              Object.entries(e).forEach(([t, r]) => {
                void 0 === r && delete e[t];
              }),
                (this.options = {
                  debug: !1,
                  initialOffset: 0,
                  overscan: 1,
                  paddingStart: 0,
                  paddingEnd: 0,
                  scrollPaddingStart: 0,
                  scrollPaddingEnd: 0,
                  horizontal: !1,
                  getItemKey: c,
                  rangeExtractor: d,
                  onChange: () => {},
                  measureElement: f,
                  initialRect: { width: 0, height: 0 },
                  scrollMargin: 0,
                  gap: 0,
                  indexAttribute: "data-index",
                  initialMeasurementsCache: [],
                  lanes: 1,
                  isScrollingResetDelay: 150,
                  enabled: !0,
                  isRtl: !1,
                  useScrollendEvent: !0,
                  ...e,
                });
            }),
            (this.notify = (e) => {
              var t, r;
              null == (r = (t = this.options).onChange) || r.call(t, this, e);
            }),
            (this.maybeNotify = s(
              () => (
                this.calculateRange(),
                [
                  this.isScrolling,
                  this.range ? this.range.startIndex : null,
                  this.range ? this.range.endIndex : null,
                ]
              ),
              (e) => {
                this.notify(e);
              },
              {
                key: !1,
                debug: () => this.options.debug,
                initialDeps: [
                  this.isScrolling,
                  this.range ? this.range.startIndex : null,
                  this.range ? this.range.endIndex : null,
                ],
              }
            )),
            (this.cleanup = () => {
              this.unsubs.filter(Boolean).forEach((e) => e()),
                (this.unsubs = []),
                this.observer.disconnect(),
                (this.scrollElement = null),
                (this.targetWindow = null);
            }),
            (this._didMount = () => () => {
              this.cleanup();
            }),
            (this._willUpdate = () => {
              var e;
              let t = this.options.enabled
                ? this.options.getScrollElement()
                : null;
              if (this.scrollElement !== t) {
                if ((this.cleanup(), !t)) {
                  this.maybeNotify();
                  return;
                }
                (this.scrollElement = t),
                  this.scrollElement && "ownerDocument" in this.scrollElement
                    ? (this.targetWindow =
                        this.scrollElement.ownerDocument.defaultView)
                    : (this.targetWindow =
                        (null == (e = this.scrollElement)
                          ? void 0
                          : e.window) ?? null),
                  this.elementsCache.forEach((e) => {
                    this.observer.observe(e);
                  }),
                  this._scrollToOffset(this.getScrollOffset(), {
                    adjustments: void 0,
                    behavior: void 0,
                  }),
                  this.unsubs.push(
                    this.options.observeElementRect(this, (e) => {
                      (this.scrollRect = e), this.maybeNotify();
                    })
                  ),
                  this.unsubs.push(
                    this.options.observeElementOffset(this, (e, t) => {
                      (this.scrollAdjustments = 0),
                        (this.scrollDirection = t
                          ? this.getScrollOffset() < e
                            ? "forward"
                            : "backward"
                          : null),
                        (this.scrollOffset = e),
                        (this.isScrolling = t),
                        this.maybeNotify();
                    })
                  );
              }
            }),
            (this.getSize = () =>
              this.options.enabled
                ? ((this.scrollRect =
                    this.scrollRect ?? this.options.initialRect),
                  this.scrollRect[this.options.horizontal ? "width" : "height"])
                : ((this.scrollRect = null), 0)),
            (this.getScrollOffset = () =>
              this.options.enabled
                ? ((this.scrollOffset =
                    this.scrollOffset ??
                    ("function" == typeof this.options.initialOffset
                      ? this.options.initialOffset()
                      : this.options.initialOffset)),
                  this.scrollOffset)
                : ((this.scrollOffset = null), 0)),
            (this.getFurthestMeasurement = (e, t) => {
              let r = new Map(),
                a = new Map();
              for (let n = t - 1; n >= 0; n--) {
                let t = e[n];
                if (r.has(t.lane)) continue;
                let s = a.get(t.lane);
                if (
                  (null == s || t.end > s.end
                    ? a.set(t.lane, t)
                    : t.end < s.end && r.set(t.lane, !0),
                  r.size === this.options.lanes)
                )
                  break;
              }
              return a.size === this.options.lanes
                ? Array.from(a.values()).sort((e, t) =>
                    e.end === t.end ? e.index - t.index : e.end - t.end
                  )[0]
                : void 0;
            }),
            (this.getMeasurementOptions = s(
              () => [
                this.options.count,
                this.options.paddingStart,
                this.options.scrollMargin,
                this.options.getItemKey,
                this.options.enabled,
              ],
              (e, t, r, a, n) => (
                (this.pendingMeasuredCacheIndexes = []),
                {
                  count: e,
                  paddingStart: t,
                  scrollMargin: r,
                  getItemKey: a,
                  enabled: n,
                }
              ),
              { key: !1 }
            )),
            (this.getMeasurements = s(
              () => [this.getMeasurementOptions(), this.itemSizeCache],
              (
                {
                  count: e,
                  paddingStart: t,
                  scrollMargin: r,
                  getItemKey: a,
                  enabled: n,
                },
                s
              ) => {
                if (!n)
                  return (
                    (this.measurementsCache = []),
                    this.itemSizeCache.clear(),
                    []
                  );
                0 === this.measurementsCache.length &&
                  ((this.measurementsCache =
                    this.options.initialMeasurementsCache),
                  this.measurementsCache.forEach((e) => {
                    this.itemSizeCache.set(e.key, e.size);
                  }));
                let o =
                  this.pendingMeasuredCacheIndexes.length > 0
                    ? Math.min(...this.pendingMeasuredCacheIndexes)
                    : 0;
                this.pendingMeasuredCacheIndexes = [];
                let i = this.measurementsCache.slice(0, o);
                for (let n = o; n < e; n++) {
                  let e = a(n),
                    o =
                      1 === this.options.lanes
                        ? i[n - 1]
                        : this.getFurthestMeasurement(i, n),
                    l = o ? o.end + this.options.gap : t + r,
                    c = s.get(e),
                    d = "number" == typeof c ? c : this.options.estimateSize(n),
                    u = l + d,
                    p = o ? o.lane : n % this.options.lanes;
                  i[n] = {
                    index: n,
                    start: l,
                    size: d,
                    end: u,
                    key: e,
                    lane: p,
                  };
                }
                return (this.measurementsCache = i), i;
              },
              { key: !1, debug: () => this.options.debug }
            )),
            (this.calculateRange = s(
              () => [
                this.getMeasurements(),
                this.getSize(),
                this.getScrollOffset(),
              ],
              (e, t, r) =>
                (this.range =
                  e.length > 0 && t > 0
                    ? (function ({
                        measurements: e,
                        outerSize: t,
                        scrollOffset: r,
                      }) {
                        let a = e.length - 1,
                          n = x(0, a, (t) => e[t].start, r),
                          s = n;
                        for (; s < a && e[s].end < r + t; ) s++;
                        return { startIndex: n, endIndex: s };
                      })({ measurements: e, outerSize: t, scrollOffset: r })
                    : null),
              { key: !1, debug: () => this.options.debug }
            )),
            (this.getIndexes = s(
              () => {
                let e = null,
                  t = null,
                  r = this.calculateRange();
                return (
                  r && ((e = r.startIndex), (t = r.endIndex)),
                  [
                    this.options.rangeExtractor,
                    this.options.overscan,
                    this.options.count,
                    e,
                    t,
                  ]
                );
              },
              (e, t, r, a, n) =>
                null === a || null === n
                  ? []
                  : e({ startIndex: a, endIndex: n, overscan: t, count: r }),
              { key: !1, debug: () => this.options.debug }
            )),
            (this.indexFromElement = (e) => {
              let t = this.options.indexAttribute,
                r = e.getAttribute(t);
              return r
                ? parseInt(r, 10)
                : (console.warn(
                    `Missing attribute name '${t}={index}' on measured element.`
                  ),
                  -1);
            }),
            (this._measureElement = (e, t) => {
              let r = this.indexFromElement(e),
                a = this.measurementsCache[r];
              if (!a) return;
              let n = a.key,
                s = this.elementsCache.get(n);
              s !== e &&
                (s && this.observer.unobserve(s),
                this.observer.observe(e),
                this.elementsCache.set(n, e)),
                e.isConnected &&
                  this.resizeItem(r, this.options.measureElement(e, t, this));
            }),
            (this.resizeItem = (e, t) => {
              let r = this.measurementsCache[e];
              if (!r) return;
              let a = t - (this.itemSizeCache.get(r.key) ?? r.size);
              0 !== a &&
                ((void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange
                  ? this.shouldAdjustScrollPositionOnItemSizeChange(r, a, this)
                  : r.start <
                    this.getScrollOffset() + this.scrollAdjustments) &&
                  this._scrollToOffset(this.getScrollOffset(), {
                    adjustments: (this.scrollAdjustments += a),
                    behavior: void 0,
                  }),
                this.pendingMeasuredCacheIndexes.push(r.index),
                (this.itemSizeCache = new Map(
                  this.itemSizeCache.set(r.key, t)
                )),
                this.notify(!1));
            }),
            (this.measureElement = (e) => {
              if (!e) {
                this.elementsCache.forEach((e, t) => {
                  e.isConnected ||
                    (this.observer.unobserve(e), this.elementsCache.delete(t));
                });
                return;
              }
              this._measureElement(e, void 0);
            }),
            (this.getVirtualItems = s(
              () => [this.getIndexes(), this.getMeasurements()],
              (e, t) => {
                let r = [];
                for (let a = 0, n = e.length; a < n; a++) {
                  let n = t[e[a]];
                  r.push(n);
                }
                return r;
              },
              { key: !1, debug: () => this.options.debug }
            )),
            (this.getVirtualItemForOffset = (e) => {
              let t = this.getMeasurements();
              if (0 !== t.length)
                return o(t[x(0, t.length - 1, (e) => o(t[e]).start, e)]);
            }),
            (this.getOffsetForAlignment = (e, t) => {
              let r = this.getSize(),
                a = this.getScrollOffset();
              "auto" === t && e >= a + r && (t = "end"),
                "end" === t && (e -= r);
              let n = this.options.horizontal ? "scrollWidth" : "scrollHeight";
              return Math.max(
                Math.min(
                  (this.scrollElement
                    ? "document" in this.scrollElement
                      ? this.scrollElement.document.documentElement[n]
                      : this.scrollElement[n]
                    : 0) - r,
                  e
                ),
                0
              );
            }),
            (this.getOffsetForIndex = (e, t = "auto") => {
              e = Math.max(0, Math.min(e, this.options.count - 1));
              let r = this.measurementsCache[e];
              if (!r) return;
              let a = this.getSize(),
                n = this.getScrollOffset();
              if ("auto" === t) {
                if (r.end >= n + a - this.options.scrollPaddingEnd) t = "end";
                else {
                  if (!(r.start <= n + this.options.scrollPaddingStart))
                    return [n, t];
                  t = "start";
                }
              }
              let s =
                r.start - this.options.scrollPaddingStart + (r.size - a) / 2;
              switch (t) {
                case "center":
                  return [this.getOffsetForAlignment(s, t), t];
                case "end":
                  return [
                    this.getOffsetForAlignment(
                      r.end + this.options.scrollPaddingEnd,
                      t
                    ),
                    t,
                  ];
                default:
                  return [
                    this.getOffsetForAlignment(
                      r.start - this.options.scrollPaddingStart,
                      t
                    ),
                    t,
                  ];
              }
            }),
            (this.isDynamicMode = () => this.elementsCache.size > 0),
            (this.cancelScrollToIndex = () => {
              null !== this.scrollToIndexTimeoutId &&
                this.targetWindow &&
                (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId),
                (this.scrollToIndexTimeoutId = null));
            }),
            (this.scrollToOffset = (
              e,
              { align: t = "start", behavior: r } = {}
            ) => {
              this.cancelScrollToIndex(),
                "smooth" === r &&
                  this.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size."
                  ),
                this._scrollToOffset(this.getOffsetForAlignment(e, t), {
                  adjustments: void 0,
                  behavior: r,
                });
            }),
            (this.scrollToIndex = (
              e,
              { align: t = "auto", behavior: r } = {}
            ) => {
              (e = Math.max(0, Math.min(e, this.options.count - 1))),
                this.cancelScrollToIndex(),
                "smooth" === r &&
                  this.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size."
                  );
              let a = this.getOffsetForIndex(e, t);
              if (!a) return;
              let [n, s] = a;
              this._scrollToOffset(n, { adjustments: void 0, behavior: r }),
                "smooth" !== r &&
                  this.isDynamicMode() &&
                  this.targetWindow &&
                  (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(
                    () => {
                      if (
                        ((this.scrollToIndexTimeoutId = null),
                        this.elementsCache.has(this.options.getItemKey(e)))
                      ) {
                        let [t] = o(this.getOffsetForIndex(e, s));
                        i(t, this.getScrollOffset()) ||
                          this.scrollToIndex(e, { align: s, behavior: r });
                      } else this.scrollToIndex(e, { align: s, behavior: r });
                    }
                  ));
            }),
            (this.scrollBy = (e, { behavior: t } = {}) => {
              this.cancelScrollToIndex(),
                "smooth" === t &&
                  this.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size."
                  ),
                this._scrollToOffset(this.getScrollOffset() + e, {
                  adjustments: void 0,
                  behavior: t,
                });
            }),
            (this.getTotalSize = () => {
              var e;
              let t = this.getMeasurements();
              return Math.max(
                (0 === t.length
                  ? this.options.paddingStart
                  : 1 === this.options.lanes
                  ? (null == (e = t[t.length - 1]) ? void 0 : e.end) ?? 0
                  : Math.max(
                      ...t.slice(-this.options.lanes).map((e) => e.end)
                    )) -
                  this.options.scrollMargin +
                  this.options.paddingEnd,
                0
              );
            }),
            (this._scrollToOffset = (e, { adjustments: t, behavior: r }) => {
              this.options.scrollToFn(e, { behavior: r, adjustments: t }, this);
            }),
            (this.measure = () => {
              (this.itemSizeCache = new Map()), this.notify(!1);
            }),
            this.setOptions(e);
        }
      }
      let x = (e, t, r, a) => {
          for (; e <= t; ) {
            let n = ((e + t) / 2) | 0,
              s = r(n);
            if (s < a) e = n + 1;
            else {
              if (!(s > a)) return n;
              t = n - 1;
            }
          }
          return e > 0 ? e - 1 : 0;
        },
        v = "undefined" != typeof document ? a.useLayoutEffect : a.useEffect;
      function g(e) {
        return (function (e) {
          let t = a.useReducer(() => ({}), {})[1],
            r = {
              ...e,
              onChange: (r, a) => {
                var s;
                a ? (0, n.flushSync)(t) : t(),
                  null == (s = e.onChange) || s.call(e, r, a);
              },
            },
            [s] = a.useState(() => new y(r));
          return (
            s.setOptions(r),
            v(() => s._didMount(), []),
            v(() => s._willUpdate()),
            s
          );
        })({
          observeElementRect: u,
          observeElementOffset: m,
          scrollToFn: b,
          ...e,
        });
      }
    },
    88178: (e, t, r) => {
      "use strict";
      function a(e) {
        return n(e[0]) + n(e[1]);
      }
      function n(e) {
        return String.fromCodePoint(127397 + e.toUpperCase().charCodeAt(0));
      }
      r.d(t, { A: () => a });
    },
    64461: (e, t, r) => {
      "use strict";
      function a(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      r.d(t, { _: () => a });
    },
    74325: (e, t, r) => {
      "use strict";
      r.d(t, { r: () => a });
      let a = (0, r(68275).x)({
        id: 1,
        name: "Ethereum",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://eth.merkle.io"] } },
        blockExplorers: {
          default: {
            name: "Etherscan",
            url: "https://etherscan.io",
            apiUrl: "https://api.etherscan.io/api",
          },
        },
        contracts: {
          ensRegistry: {
            address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          },
          ensUniversalResolver: {
            address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67",
            blockCreated: 0x125db65,
          },
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 0xdb04c1,
          },
        },
      });
    },
    3794: (e, t, r) => {
      "use strict";
      r.d(t, { D: () => er });
      var a = r(30733),
        n = r(98979);
      async function s(e, { chain: t }) {
        let {
          id: r,
          name: a,
          nativeCurrency: s,
          rpcUrls: o,
          blockExplorers: i,
        } = t;
        await e.request(
          {
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: (0, n.cK)(r),
                chainName: a,
                nativeCurrency: s,
                rpcUrls: o.default.http,
                blockExplorerUrls: i
                  ? Object.values(i).map(({ url: e }) => e)
                  : void 0,
              },
            ],
          },
          { dedupe: !0, retryCount: 0 }
        );
      }
      var o = r(62937),
        i = r(98722),
        l = r(66734),
        c = r(80477),
        d = r(11007),
        u = r(89780);
      function p({ chain: e, currentChainId: t }) {
        if (!e) throw new u.jF();
        if (t !== e.id) throw new u.EH({ chain: e, currentChainId: t });
      }
      var h = r(87939),
        m = r(45757),
        f = r(90563);
      function b(e, { docsPath: t, ...r }) {
        let a = (() => {
          let t = (0, f.l)(e, r);
          return t instanceof h.RM ? e : t;
        })();
        return new m.$s(a, { docsPath: t, ...r });
      }
      var y = r(24058),
        x = r(53864),
        v = r(72447),
        g = r(46140),
        E = r(41953),
        k = r(23721),
        C = r(29665);
      let w = new g.A(128);
      async function T(e, t) {
        let {
          account: r = e.account,
          chain: n = e.chain,
          accessList: s,
          authorizationList: o,
          blobs: u,
          data: h,
          gas: m,
          gasPrice: f,
          maxFeePerBlobGas: g,
          maxFeePerGas: T,
          maxPriorityFeePerGas: S,
          nonce: A,
          value: U,
          ...B
        } = t;
        if (void 0 === r)
          throw new l.T({ docsPath: "/docs/actions/wallet/sendTransaction" });
        let M = r ? (0, i.J)(r) : null;
        try {
          (0, E.c)(t);
          let r = await (async () =>
            t.to
              ? t.to
              : null !== t.to && o && o.length > 0
              ? await (0, d.g)({ authorization: o[0] }).catch(() => {
                  throw new c.C(
                    "`to` is required. Could not infer from `authorizationList`."
                  );
                })
              : void 0)();
          if (M?.type === "json-rpc" || null === M) {
            let t;
            null !== n &&
              ((t = await (0, v.T)(e, a.T, "getChainId")({})),
              p({ currentChainId: t, chain: n }));
            let i = e.chain?.formatters?.transactionRequest?.format,
              l = (i || x.Bv)({
                ...(0, y.o)(B, { format: i }),
                accessList: s,
                authorizationList: o,
                blobs: u,
                chainId: t,
                data: h,
                from: M?.address,
                gas: m,
                gasPrice: f,
                maxFeePerBlobGas: g,
                maxFeePerGas: T,
                maxPriorityFeePerGas: S,
                nonce: A,
                to: r,
                value: U,
              }),
              c = w.get(e.uid);
            try {
              return await e.request(
                {
                  method: c ? "wallet_sendTransaction" : "eth_sendTransaction",
                  params: [l],
                },
                { retryCount: 0 }
              );
            } catch (t) {
              if (!1 === c) throw t;
              if (
                "InvalidInputRpcError" === t.name ||
                "InvalidParamsRpcError" === t.name ||
                "MethodNotFoundRpcError" === t.name ||
                "MethodNotSupportedRpcError" === t.name
              )
                return await e
                  .request(
                    { method: "wallet_sendTransaction", params: [l] },
                    { retryCount: 0 }
                  )
                  .then((t) => (w.set(e.uid, !0), t))
                  .catch((r) => {
                    if (
                      "MethodNotFoundRpcError" === r.name ||
                      "MethodNotSupportedRpcError" === r.name
                    )
                      throw (w.set(e.uid, !1), t);
                    throw r;
                  });
              throw t;
            }
          }
          if (M?.type === "local") {
            let t = await (0, v.T)(
                e,
                k.ft,
                "prepareTransactionRequest"
              )({
                account: M,
                accessList: s,
                authorizationList: o,
                blobs: u,
                chain: n,
                data: h,
                gas: m,
                gasPrice: f,
                maxFeePerBlobGas: g,
                maxFeePerGas: T,
                maxPriorityFeePerGas: S,
                nonce: A,
                nonceManager: M.nonceManager,
                parameters: [...k.MM, "sidecars"],
                value: U,
                ...B,
                to: r,
              }),
              a = n?.serializers?.transaction,
              i = await M.signTransaction(t, { serializer: a });
            return await (0, v.T)(
              e,
              C.L,
              "sendRawTransaction"
            )({ serializedTransaction: i });
          }
          if (M?.type === "smart")
            throw new l.Z({
              metaMessages: [
                "Consider using the `sendUserOperation` Action instead.",
              ],
              docsPath: "/docs/actions/bundler/sendUserOperation",
              type: "smart",
            });
          throw new l.Z({
            docsPath: "/docs/actions/wallet/sendTransaction",
            type: M?.type,
          });
        } catch (e) {
          if (e instanceof l.Z) throw e;
          throw b(e, { ...t, account: M, chain: t.chain || void 0 });
        }
      }
      var S = r(40814);
      async function A(e) {
        return e.account?.type === "local"
          ? [e.account.address]
          : (await e.request({ method: "eth_accounts" }, { dedupe: !0 })).map(
              (e) => (0, S.o)(e)
            );
      }
      var U = r(45732),
        B = r(68613);
      async function M(e, t) {
        let {
            atomic: r = !1,
            chainId: a,
            receipts: n,
            version: s = "2.0.0",
            ...o
          } = await e.request({
            method: "wallet_getCallsStatus",
            params: [t.id],
          }),
          [i, l] = (() => {
            let e = o.status;
            return e >= 100 && e < 200
              ? ["pending", e]
              : e >= 200 && e < 300
              ? ["success", e]
              : e >= 300 && e < 700
              ? ["failure", e]
              : "CONFIRMED" === e
              ? ["success", 200]
              : "PENDING" === e
              ? ["pending", 100]
              : [void 0, e];
          })();
        return {
          ...o,
          atomic: r,
          chainId: a ? (0, U.ME)(a) : void 0,
          receipts:
            n?.map((e) => ({
              ...e,
              blockNumber: U.uU(e.blockNumber),
              gasUsed: U.uU(e.gasUsed),
              status: B.Lj[e.status],
            })) ?? [],
          statusCode: l,
          status: i,
          version: s,
        };
      }
      async function P(e, t = {}) {
        let { account: r = e.account, chainId: a } = t,
          n = r ? (0, i.J)(r) : void 0,
          s = await e.request({
            method: "wallet_getCapabilities",
            params: [n?.address],
          }),
          o = {};
        for (let [e, t] of Object.entries(s)) o[Number(e)] = t;
        return "number" == typeof a ? o[a] : o;
      }
      async function D(e) {
        return await e.request(
          { method: "wallet_getPermissions" },
          { dedupe: !0 }
        );
      }
      var F = r(81770),
        I = r(77184);
      async function O(e, t) {
        let { account: r = e.account, chainId: n, nonce: s } = t;
        if (!r)
          throw new l.T({ docsPath: "/docs/eip7702/prepareAuthorization" });
        let o = (0, i.J)(r),
          c = (() => {
            if (t.executor)
              return "self" === t.executor ? t.executor : (0, i.J)(t.executor);
          })(),
          d = { address: t.contractAddress ?? t.address, chainId: n, nonce: s };
        return (
          void 0 === d.chainId &&
            (d.chainId =
              e.chain?.id ?? (await (0, v.T)(e, a.T, "getChainId")({}))),
          void 0 === d.nonce &&
            ((d.nonce = await (0, v.T)(
              e,
              I.y,
              "getTransactionCount"
            )({ address: o.address, blockTag: "pending" })),
            ("self" === c || (c?.address && (0, F.h)(c.address, o.address))) &&
              (d.nonce += 1)),
          d
        );
      }
      async function R(e) {
        return (
          await e.request(
            { method: "eth_requestAccounts" },
            { dedupe: !0, retryCount: 0 }
          )
        ).map((e) => (0, S.b)(e));
      }
      async function L(e, t) {
        return e.request(
          { method: "wallet_requestPermissions", params: [t] },
          { retryCount: 0 }
        );
      }
      var N = r(74046);
      async function z(e, t) {
        let {
          account: r = e.account,
          capabilities: a,
          chain: s = e.chain,
          forceAtomic: o = !1,
          id: c,
          version: d = "2.0.0",
        } = t;
        if (void 0 === r)
          throw new l.T({ docsPath: "/docs/actions/wallet/sendCalls" });
        let u = r ? (0, i.J)(r) : null,
          p = t.calls.map((e) => ({
            data: e.abi
              ? (0, N.p)({
                  abi: e.abi,
                  functionName: e.functionName,
                  args: e.args,
                })
              : e.data,
            to: e.to,
            value: e.value ? (0, n.cK)(e.value) : void 0,
          }));
        try {
          let t = await e.request(
            {
              method: "wallet_sendCalls",
              params: [
                {
                  atomicRequired: o,
                  calls: p,
                  capabilities: a,
                  chainId: (0, n.cK)(s.id),
                  from: u?.address,
                  id: c,
                  version: d,
                },
              ],
            },
            { retryCount: 0 }
          );
          if ("string" == typeof t) return { id: t };
          return t;
        } catch (e) {
          throw b(e, { ...t, account: u, chain: t.chain });
        }
      }
      async function K(e, t) {
        let { id: r } = t;
        await e.request({ method: "wallet_showCallsStatus", params: [r] });
      }
      async function V(e, t) {
        let { account: r = e.account } = t;
        if (!r) throw new l.T({ docsPath: "/docs/eip7702/signAuthorization" });
        let a = (0, i.J)(r);
        if (!a.signAuthorization)
          throw new l.Z({
            docsPath: "/docs/eip7702/signAuthorization",
            metaMessages: [
              "The `signAuthorization` Action does not support JSON-RPC Accounts.",
            ],
            type: a.type,
          });
        let n = await O(e, t);
        return a.signAuthorization(n);
      }
      async function H(e, { account: t = e.account, message: r }) {
        if (!t) throw new l.T({ docsPath: "/docs/actions/wallet/signMessage" });
        let a = (0, i.J)(t);
        if (a.signMessage) return a.signMessage({ message: r });
        let s =
          "string" == typeof r
            ? (0, n.i3)(r)
            : r.raw instanceof Uint8Array
            ? (0, n.nj)(r.raw)
            : r.raw;
        return e.request(
          { method: "personal_sign", params: [s, a.address] },
          { retryCount: 0 }
        );
      }
      async function j(e, t) {
        let { account: r = e.account, chain: s = e.chain, ...o } = t;
        if (!r)
          throw new l.T({ docsPath: "/docs/actions/wallet/signTransaction" });
        let c = (0, i.J)(r);
        (0, E.c)({ account: c, ...t });
        let d = await (0, v.T)(e, a.T, "getChainId")({});
        null !== s && p({ currentChainId: d, chain: s });
        let u = s?.formatters || e.chain?.formatters,
          h = u?.transactionRequest?.format || x.Bv;
        return c.signTransaction
          ? c.signTransaction(
              { ...o, chainId: d },
              { serializer: e.chain?.serializers?.transaction }
            )
          : await e.request(
              {
                method: "eth_signTransaction",
                params: [{ ...h(o), chainId: (0, n.cK)(d), from: c.address }],
              },
              { retryCount: 0 }
            );
      }
      var _ = r(37939);
      async function G(e, t) {
        let {
          account: r = e.account,
          domain: a,
          message: n,
          primaryType: s,
        } = t;
        if (!r)
          throw new l.T({ docsPath: "/docs/actions/wallet/signTypedData" });
        let o = (0, i.J)(r),
          c = { EIP712Domain: (0, _.H4)({ domain: a }), ...t.types };
        if (
          ((0, _.$$)({ domain: a, message: n, primaryType: s, types: c }),
          o.signTypedData)
        )
          return o.signTypedData({
            domain: a,
            message: n,
            primaryType: s,
            types: c,
          });
        let d = (0, _.v8)({ domain: a, message: n, primaryType: s, types: c });
        return e.request(
          { method: "eth_signTypedData_v4", params: [o.address, d] },
          { retryCount: 0 }
        );
      }
      async function W(e, { id: t }) {
        await e.request(
          {
            method: "wallet_switchEthereumChain",
            params: [{ chainId: (0, n.cK)(t) }],
          },
          { retryCount: 0 }
        );
      }
      var q = r(88429),
        $ = r(92342),
        X = r(30400),
        Z = r(66692);
      async function J(e, t) {
        let r;
        let {
            id: a,
            pollingInterval: n = e.pollingInterval,
            status: s = ({ statusCode: e }) => e >= 200,
            timeout: o = 6e4,
          } = t,
          i = (0, Z.A)(["waitForCallsStatus", e.uid, a]),
          { promise: l, resolve: c, reject: d } = (0, X.Y)(),
          u = (0, q.lB)(i, { resolve: c, reject: d }, (t) => {
            let o = (0, $.w)(
              async () => {
                let n = (e) => {
                  clearTimeout(r), o(), e(), u();
                };
                try {
                  let r = await M(e, { id: a });
                  if (!s(r)) return;
                  n(() => t.resolve(r));
                } catch (e) {
                  n(() => t.reject(e));
                }
              },
              { interval: n, emitOnBegin: !0 }
            );
            return o;
          });
        return (
          (r = o
            ? setTimeout(() => {
                u(), clearTimeout(r), d(new Y({ id: a }));
              }, o)
            : void 0),
          await l
        );
      }
      class Y extends c.C {
        constructor({ id: e }) {
          super(
            `Timed out while waiting for call bundle with id "${e}" to be confirmed.`,
            { name: "WaitForCallsStatusTimeoutError" }
          );
        }
      }
      async function Q(e, t) {
        return await e.request(
          { method: "wallet_watchAsset", params: t },
          { retryCount: 0 }
        );
      }
      var ee = r(80305);
      async function et(e, t) {
        let {
          abi: r,
          account: a = e.account,
          address: n,
          args: s,
          dataSuffix: o,
          functionName: c,
          ...d
        } = t;
        if (void 0 === a)
          throw new l.T({ docsPath: "/docs/contract/writeContract" });
        let u = a ? (0, i.J)(a) : null,
          p = (0, N.p)({ abi: r, args: s, functionName: c });
        try {
          return await (0, v.T)(
            e,
            T,
            "sendTransaction"
          )({
            data: `${p}${o ? o.replace("0x", "") : ""}`,
            to: n,
            account: u,
            ...d,
          });
        } catch (e) {
          throw (0, ee.j)(e, {
            abi: r,
            address: n,
            args: s,
            docsPath: "/docs/contract/writeContract",
            functionName: c,
            sender: u?.address,
          });
        }
      }
      function er(e) {
        return {
          addChain: (t) => s(e, t),
          deployContract: (t) =>
            (function (e, t) {
              let { abi: r, args: a, bytecode: n, ...s } = t,
                i = (0, o.m)({ abi: r, args: a, bytecode: n });
              return T(e, {
                ...s,
                ...(s.authorizationList ? { to: null } : {}),
                data: i,
              });
            })(e, t),
          getAddresses: () => A(e),
          getCallsStatus: (t) => M(e, t),
          getCapabilities: () => P(e),
          getChainId: () => (0, a.T)(e),
          getPermissions: () => D(e),
          prepareAuthorization: (t) => O(e, t),
          prepareTransactionRequest: (t) => (0, k.ft)(e, t),
          requestAddresses: () => R(e),
          requestPermissions: (t) => L(e, t),
          sendCalls: (t) => z(e, t),
          sendRawTransaction: (t) => (0, C.L)(e, t),
          sendTransaction: (t) => T(e, t),
          showCallsStatus: (t) => K(e, t),
          signAuthorization: (t) => V(e, t),
          signMessage: (t) => H(e, t),
          signTransaction: (t) => j(e, t),
          signTypedData: (t) => G(e, t),
          switchChain: (t) => W(e, t),
          waitForCallsStatus: (t) => J(e, t),
          watchAsset: (t) => Q(e, t),
          writeContract: (t) => et(e, t),
        };
      }
    },
    99652: (e, t, r) => {
      "use strict";
      r.d(t, { I: () => n });
      var a = r(67128);
      function n(e, t = {}) {
        let {
          key: r = "custom",
          methods: s,
          name: o = "Custom Provider",
          retryDelay: i,
        } = t;
        return ({ retryCount: n }) =>
          (0, a.o)({
            key: r,
            methods: s,
            name: o,
            request: e.request.bind(e),
            retryCount: t.retryCount ?? n,
            retryDelay: i,
            type: "custom",
          });
      }
    },
    66734: (e, t, r) => {
      "use strict";
      r.d(t, { T: () => n, Z: () => s });
      var a = r(80477);
      class n extends a.C {
        constructor({ docsPath: e } = {}) {
          super(
            "Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.",
            { docsPath: e, docsSlug: "account", name: "AccountNotFoundError" }
          );
        }
      }
      class s extends a.C {
        constructor({ docsPath: e, metaMessages: t, type: r }) {
          super(`Account type "${r}" is not supported.`, {
            docsPath: e,
            metaMessages: t,
            name: "AccountTypeNotSupportedError",
          });
        }
      }
    },
    32081: (e, t, r) => {
      "use strict";
      r.d(t, { vt: () => l });
      var a = r(79124),
        n = r(12115);
      let { useSyncExternalStoreWithSelector: s } = r(17281),
        o = !1,
        i = (e) => {
          "function" != typeof e &&
            console.warn(
              "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
            );
          let t = "function" == typeof e ? (0, a.y)(e) : e,
            r = (e, r) =>
              (function (e, t = e.getState, r) {
                r &&
                  !o &&
                  (console.warn(
                    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
                  ),
                  (o = !0));
                let a = s(
                  e.subscribe,
                  e.getState,
                  e.getServerState || e.getState,
                  t,
                  r
                );
                return (0, n.useDebugValue)(a), a;
              })(t, e, r);
          return Object.assign(r, t), r;
        },
        l = (e) => (e ? i(e) : i);
    },
    60709: (e, t, r) => {
      "use strict";
      r.d(t, { Zr: () => i, eh: () => a });
      let a = (e) => (t, r, a) => {
          let n = a.subscribe;
          return (
            (a.subscribe = (e, t, r) => {
              let s = e;
              if (t) {
                let n = (null == r ? void 0 : r.equalityFn) || Object.is,
                  o = e(a.getState());
                (s = (r) => {
                  let a = e(r);
                  if (!n(o, a)) {
                    let e = o;
                    t((o = a), e);
                  }
                }),
                  (null == r ? void 0 : r.fireImmediately) && t(o, o);
              }
              return n(s);
            }),
            e(t, r, a)
          );
        },
        n = (e) => (t) => {
          try {
            let r = e(t);
            if (r instanceof Promise) return r;
            return {
              then: (e) => n(e)(r),
              catch(e) {
                return this;
              },
            };
          } catch (e) {
            return {
              then(e) {
                return this;
              },
              catch: (t) => n(t)(e),
            };
          }
        },
        s = (e, t) => (r, a, s) => {
          let o,
            i,
            l = {
              getStorage: () => localStorage,
              serialize: JSON.stringify,
              deserialize: JSON.parse,
              partialize: (e) => e,
              version: 0,
              merge: (e, t) => ({ ...t, ...e }),
              ...t,
            },
            c = !1,
            d = new Set(),
            u = new Set();
          try {
            o = l.getStorage();
          } catch (e) {}
          if (!o)
            return e(
              (...e) => {
                console.warn(
                  `[zustand persist middleware] Unable to update item '${l.name}', the given storage is currently unavailable.`
                ),
                  r(...e);
              },
              a,
              s
            );
          let p = n(l.serialize),
            h = () => {
              let e;
              let t = p({ state: l.partialize({ ...a() }), version: l.version })
                .then((e) => o.setItem(l.name, e))
                .catch((t) => {
                  e = t;
                });
              if (e) throw e;
              return t;
            },
            m = s.setState;
          s.setState = (e, t) => {
            m(e, t), h();
          };
          let f = e(
              (...e) => {
                r(...e), h();
              },
              a,
              s
            ),
            b = () => {
              var e;
              if (!o) return;
              (c = !1), d.forEach((e) => e(a()));
              let t =
                (null == (e = l.onRehydrateStorage)
                  ? void 0
                  : e.call(l, a())) || void 0;
              return n(o.getItem.bind(o))(l.name)
                .then((e) => {
                  if (e) return l.deserialize(e);
                })
                .then((e) => {
                  if (e) {
                    if ("number" != typeof e.version || e.version === l.version)
                      return e.state;
                    if (l.migrate) return l.migrate(e.state, e.version);
                    console.error(
                      "State loaded from storage couldn't be migrated since no migrate function was provided"
                    );
                  }
                })
                .then((e) => {
                  var t;
                  return (
                    r((i = l.merge(e, null != (t = a()) ? t : f)), !0), h()
                  );
                })
                .then(() => {
                  null == t || t(i, void 0), (c = !0), u.forEach((e) => e(i));
                })
                .catch((e) => {
                  null == t || t(void 0, e);
                });
            };
          return (
            (s.persist = {
              setOptions: (e) => {
                (l = { ...l, ...e }), e.getStorage && (o = e.getStorage());
              },
              clearStorage: () => {
                null == o || o.removeItem(l.name);
              },
              getOptions: () => l,
              rehydrate: () => b(),
              hasHydrated: () => c,
              onHydrate: (e) => (
                d.add(e),
                () => {
                  d.delete(e);
                }
              ),
              onFinishHydration: (e) => (
                u.add(e),
                () => {
                  u.delete(e);
                }
              ),
            }),
            b(),
            i || f
          );
        },
        o = (e, t) => (r, a, s) => {
          let o,
            i = {
              storage: (function (e, t) {
                let r;
                try {
                  r = e();
                } catch (e) {
                  return;
                }
                return {
                  getItem: (e) => {
                    var t;
                    let a = (e) => (null === e ? null : JSON.parse(e, void 0)),
                      n = null != (t = r.getItem(e)) ? t : null;
                    return n instanceof Promise ? n.then(a) : a(n);
                  },
                  setItem: (e, t) => r.setItem(e, JSON.stringify(t, void 0)),
                  removeItem: (e) => r.removeItem(e),
                };
              })(() => localStorage),
              partialize: (e) => e,
              version: 0,
              merge: (e, t) => ({ ...t, ...e }),
              ...t,
            },
            l = !1,
            c = new Set(),
            d = new Set(),
            u = i.storage;
          if (!u)
            return e(
              (...e) => {
                console.warn(
                  `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
                ),
                  r(...e);
              },
              a,
              s
            );
          let p = () => {
              let e = i.partialize({ ...a() });
              return u.setItem(i.name, { state: e, version: i.version });
            },
            h = s.setState;
          s.setState = (e, t) => {
            h(e, t), p();
          };
          let m = e(
              (...e) => {
                r(...e), p();
              },
              a,
              s
            ),
            f = () => {
              var e, t;
              if (!u) return;
              (l = !1),
                c.forEach((e) => {
                  var t;
                  return e(null != (t = a()) ? t : m);
                });
              let s =
                (null == (t = i.onRehydrateStorage)
                  ? void 0
                  : t.call(i, null != (e = a()) ? e : m)) || void 0;
              return n(u.getItem.bind(u))(i.name)
                .then((e) => {
                  if (e) {
                    if ("number" != typeof e.version || e.version === i.version)
                      return e.state;
                    if (i.migrate) return i.migrate(e.state, e.version);
                    console.error(
                      "State loaded from storage couldn't be migrated since no migrate function was provided"
                    );
                  }
                })
                .then((e) => {
                  var t;
                  return (
                    r((o = i.merge(e, null != (t = a()) ? t : m)), !0), p()
                  );
                })
                .then(() => {
                  null == s || s(o, void 0),
                    (o = a()),
                    (l = !0),
                    d.forEach((e) => e(o));
                })
                .catch((e) => {
                  null == s || s(void 0, e);
                });
            };
          return (
            (s.persist = {
              setOptions: (e) => {
                (i = { ...i, ...e }), e.storage && (u = e.storage);
              },
              clearStorage: () => {
                null == u || u.removeItem(i.name);
              },
              getOptions: () => i,
              rehydrate: () => f(),
              hasHydrated: () => l,
              onHydrate: (e) => (
                c.add(e),
                () => {
                  c.delete(e);
                }
              ),
              onFinishHydration: (e) => (
                d.add(e),
                () => {
                  d.delete(e);
                }
              ),
            }),
            i.skipHydration || f(),
            o || m
          );
        },
        i = (e, t) =>
          "getStorage" in t || "serialize" in t || "deserialize" in t
            ? (console.warn(
                "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
              ),
              s(e, t))
            : o(e, t);
    },
    79124: (e, t, r) => {
      "use strict";
      r.d(t, { y: () => n });
      let a = (e) => {
          let t;
          let r = new Set(),
            a = (e, a) => {
              let n = "function" == typeof e ? e(t) : e;
              if (!Object.is(n, t)) {
                let e = t;
                (t = (null != a ? a : "object" != typeof n)
                  ? n
                  : Object.assign({}, t, n)),
                  r.forEach((r) => r(t, e));
              }
            },
            n = () => t,
            s = {
              setState: a,
              getState: n,
              subscribe: (e) => (r.add(e), () => r.delete(e)),
              destroy: () => {
                console.warn(
                  "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
                ),
                  r.clear();
              },
            };
          return (t = e(a, n, s)), s;
        },
        n = (e) => (e ? a(e) : a);
    },
  },
]);
