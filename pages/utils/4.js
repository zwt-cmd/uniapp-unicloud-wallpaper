Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.alert = function (e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return new Promise(function (n, s) {
    uni.showToast(Object.assign({
      title: e,
      success: n,
      fail: s
    }, t));
  });
}, exports.request = function (e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return new Promise(function (n, s) {
    uni.request(Object.assign({}, t, {
      url: e,
      success: function (e) {
        n(e);
      },
      fail: function () {
        s(new Error("微信接口调用失败"));
      }
    }));
  });
}, exports.setStorage = function (e, t) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  return new Promise(function (s, o) {
    uni.setStorage(Object.assign({}, n, {
      key: e,
      data: t,
      success: function () {
        s(!0);
      },
      fail: function () {
        o(new Error("微信接口调用失败"));
      }
    }));
  });
}, exports.getSystemInfo = function () {
  return new Promise(function (e, t) {
    uni.getSystemInfo({
      success: function (t) {
        e(t);
      },
      fail: t
    });
  });
}, exports.getSystemInfoSync = function () {
  return uni.getSystemInfoSync();
};