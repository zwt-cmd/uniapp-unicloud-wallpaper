var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
  return typeof t;
} : function (t) {
  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
},
    r = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function (r) {
  return void 0 === r ? "undefined" : t(r);
} : function (r) {
  return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : void 0 === r ? "undefined" : t(r);
},
    e = "function" == typeof Symbol && "symbol" == r(Symbol.iterator) ? function (t) {
  return void 0 === t ? "undefined" : r(t);
} : function (t) {
  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : r(t);
};
!function (t) {
  function r(t, r, e, i) {
    var a = r && r.prototype instanceof o ? r : o,
        u = Object.create(a.prototype),
        c = new h(i || []);
    return u._invoke = function (t, r, e) {
      var o = S;
      return function (i, a) {
        if (o === j) throw new Error("Generator is already running");

        if (o === O) {
          if ("throw" === i) throw a;
          return p();
        }

        for (e.method = i, e.arg = a;;) {
          var u = e.delegate;

          if (u) {
            var c = f(u, e);

            if (c) {
              if (c === k) continue;
              return c;
            }
          }

          if ("next" === e.method) e.sent = e._sent = e.arg;else if ("throw" === e.method) {
            if (o === S) throw o = O, e.arg;
            e.dispatchException(e.arg);
          } else "return" === e.method && e.abrupt("return", e.arg);
          o = j;
          var l = n(t, r, e);

          if ("normal" === l.type) {
            if (o = e.done ? O : _, l.arg === k) continue;
            return {
              value: l.arg,
              done: e.done
            };
          }

          "throw" === l.type && (o = O, e.method = "throw", e.arg = l.arg);
        }
      };
    }(t, e, c), u;
  }

  function n(t, r, e) {
    try {
      return {
        type: "normal",
        arg: t.call(r, e)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }

  function o() {}

  function i() {}

  function a() {}

  function u(t) {
    ["next", "throw", "return"].forEach(function (r) {
      t[r] = function (t) {
        return this._invoke(r, t);
      };
    });
  }

  function c(t) {
    var r;

    this._invoke = function (o, i) {
      function a() {
        return new Promise(function (r, a) {
          !function r(o, i, a, u) {
            var c = n(t[o], t, i);

            if ("throw" !== c.type) {
              var f = c.arg,
                  l = f.value;
              return l && "object" == (void 0 === l ? "undefined" : e(l)) && v.call(l, "__await") ? Promise.resolve(l.__await).then(function (t) {
                r("next", t, a, u);
              }, function (t) {
                r("throw", t, a, u);
              }) : Promise.resolve(l).then(function (t) {
                f.value = t, a(f);
              }, function (t) {
                return r("throw", t, a, u);
              });
            }

            u(c.arg);
          }(o, i, r, a);
        });
      }

      return r = r ? r.then(a, a) : a();
    };
  }

  function f(t, r) {
    var e = t.iterator[r.method];

    if (e === d) {
      if (r.delegate = null, "throw" === r.method) {
        if (t.iterator.return && (r.method = "return", r.arg = d, f(t, r), "throw" === r.method)) return k;
        r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return k;
    }

    var o = n(e, t.iterator, r.arg);
    if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, k;
    var i = o.arg;
    return i ? i.done ? (r[t.resultName] = i.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = d), r.delegate = null, k) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, k);
  }

  function l(t) {
    var r = {
      tryLoc: t[0]
    };
    1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), this.tryEntries.push(r);
  }

  function s(t) {
    var r = t.completion || {};
    r.type = "normal", delete r.arg, t.completion = r;
  }

  function h(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(l, this), this.reset(!0);
  }

  function y(t) {
    if (t) {
      var r = t[w];
      if (r) return r.call(t);
      if ("function" == typeof t.next) return t;

      if (!isNaN(t.length)) {
        var e = -1,
            n = function r() {
          for (; ++e < t.length;) if (v.call(t, e)) return r.value = t[e], r.done = !1, r;

          return r.value = d, r.done = !0, r;
        };

        return n.next = n;
      }
    }

    return {
      next: p
    };
  }

  function p() {
    return {
      value: d,
      done: !0
    };
  }

  var d,
      m = Object.prototype,
      v = m.hasOwnProperty,
      g = "function" == typeof Symbol ? Symbol : {},
      w = g.iterator || "@@iterator",
      b = g.asyncIterator || "@@asyncIterator",
      L = g.toStringTag || "@@toStringTag",
      x = "object" == ("undefined" == typeof module ? "undefined" : e(module)),
      E = t.regeneratorRuntime;
  if (E) x && (module.exports = E);else {
    (E = t.regeneratorRuntime = x ? module.exports : {}).wrap = r;
    var S = "suspendedStart",
        _ = "suspendedYield",
        j = "executing",
        O = "completed",
        k = {},
        G = {};

    G[w] = function () {
      return this;
    };

    var N = Object.getPrototypeOf,
        P = N && N(N(y([])));
    P && P !== m && v.call(P, w) && (G = P);
    var F = a.prototype = o.prototype = Object.create(G);
    i.prototype = F.constructor = a, a.constructor = i, a[L] = i.displayName = "GeneratorFunction", E.isGeneratorFunction = function (t) {
      var r = "function" == typeof t && t.constructor;
      return !!r && (r === i || "GeneratorFunction" === (r.displayName || r.name));
    }, E.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, a) : (t.__proto__ = a, L in t || (t[L] = "GeneratorFunction")), t.prototype = Object.create(F), t;
    }, E.awrap = function (t) {
      return {
        __await: t
      };
    }, u(c.prototype), c.prototype[b] = function () {
      return this;
    }, E.AsyncIterator = c, E.async = function (t, e, n, o) {
      var i = new c(r(t, e, n, o));
      return E.isGeneratorFunction(e) ? i : i.next().then(function (t) {
        return t.done ? t.value : i.next();
      });
    }, u(F), F[L] = "Generator", F[w] = function () {
      return this;
    }, F.toString = function () {
      return "[object Generator]";
    }, E.keys = function (t) {
      var r = [];

      for (var e in t) r.push(e);

      return r.reverse(), function e() {
        for (; r.length;) {
          var n = r.pop();
          if (n in t) return e.value = n, e.done = !1, e;
        }

        return e.done = !0, e;
      };
    }, E.values = y, h.prototype = {
      constructor: h,
      reset: function (t) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = d, this.done = !1, this.delegate = null, this.method = "next", this.arg = d, this.tryEntries.forEach(s), !t) for (var r in this) "t" === r.charAt(0) && v.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = d);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (t) {
        function r(r, n) {
          return i.type = "throw", i.arg = t, e.next = r, n && (e.method = "next", e.arg = d), !!n;
        }

        if (this.done) throw t;

        for (var e = this, n = this.tryEntries.length - 1; n >= 0; --n) {
          var o = this.tryEntries[n],
              i = o.completion;
          if ("root" === o.tryLoc) return r("end");

          if (o.tryLoc <= this.prev) {
            var a = v.call(o, "catchLoc"),
                u = v.call(o, "finallyLoc");

            if (a && u) {
              if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
              if (this.prev < o.finallyLoc) return r(o.finallyLoc);
            } else if (a) {
              if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
            } else {
              if (!u) throw new Error("try statement without catch or finally");
              if (this.prev < o.finallyLoc) return r(o.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, r) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var n = this.tryEntries[e];

          if (n.tryLoc <= this.prev && v.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
            var o = n;
            break;
          }
        }

        o && ("break" === t || "continue" === t) && o.tryLoc <= r && r <= o.finallyLoc && (o = null);
        var i = o ? o.completion : {};
        return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o.finallyLoc, k) : this.complete(i);
      },
      complete: function (t, r) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), k;
      },
      finish: function (t) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var e = this.tryEntries[r];
          if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), s(e), k;
        }
      },
      catch: function (t) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var e = this.tryEntries[r];

          if (e.tryLoc === t) {
            var n = e.completion;

            if ("throw" === n.type) {
              var o = n.arg;
              s(e);
            }

            return o;
          }
        }

        throw new Error("illegal catch attempt");
      },
      delegateYield: function (t, r, e) {
        return this.delegate = {
          iterator: y(t),
          resultName: r,
          nextLoc: e
        }, "next" === this.method && (this.arg = d), k;
      }
    };
  }
}(function () {
  return this || "object" == ("undefined" == typeof self ? "undefined" : e(self)) && self;
}() || Function("return this")());