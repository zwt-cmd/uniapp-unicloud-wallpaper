var r = require("./7.js"),
    app = getApp();

module.exports = {
  getDevInfo: function () {
    var r = 0,
        n = 0,
        e = "4G";

    try {
      var i = uni.getSystemInfoSync();
      i.model, r = i.windowWidth, n = i.windowHeight, i.version, e = 1 == i.wifiEnabled ? "WIFI" : "4G";
    } catch (r) {}

    return '{"width":' + r + ',"height":' + n + ',"network":"' + e + '","uuid":" ","jPushId":" ","cpu":" ","model":" ","platform":8,"osVersion":" ","version":"' + app.globalData.versionCode + '"}';
  },
  formParmas: function () {
    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = [];

    for (var n in r) t.push(n);

    t = t.sort();

    for (var e = "", i = 0; i < t.length; i++) {
      var o = t[i],
          s = r[o];
      0 == this.isEmpty(s) && "SIGN" != o.toUpperCase() && (e += o + "=" + s + "&");
    }

    var a = this.signEncryption(e.substring(0, e.length - 1));
    return r.sign = a, r;
  },
  isEmpty: function (r) {
    for (var t in r) return !1;

    return !0;
  },
  signEncryption: function (n) {
    var e = n + "&key=" + app.globalData.apiKey;
    return r(e).toUpperCase();
  }
};