var app = getApp(),
    t = require("./6.js");

module.exports = {
  fetch: function (o) {
    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return arguments.length > 2 && void 0 !== arguments[2] && arguments[2], arguments.length > 3 && void 0 !== arguments[3] && arguments[3], a.appId = app.globalData.appId, t.formParmas(a), new Promise(function (n, i) {
      uni.request({
        url: app.globalData.apiDomain + o,
        method: "post",
        header: {
          "content-type": "application/x-www-form-urlencoded",
          DevINfo: t.getDevInfo()
        },
        data: a,
        success: function (e) {
          n(e);
        },
        fail: function (e) {
          i(e);
        }
      });
    });
  }
};