function n(n, t, r, e, o, i, u) {
  try {
    var c = n[i](u),
        s = c.value;
  } catch (n) {
    return void r(n);
  }

  c.done ? t(s) : Promise.resolve(s).then(e, o);
}

module.exports = function (t) {
  return function () {
    var r = this,
        e = arguments;
    return new Promise(function (o, i) {
      function u(t) {
        n(s, o, i, u, c, "next", t);
      }

      function c(t) {
        n(s, o, i, u, c, "throw", t);
      }

      var s = t.apply(r, e);
      u(void 0);
    });
  };
};