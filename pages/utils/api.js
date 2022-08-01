var e = "7a719f1bdd3ec5b9",
    a = "305420",
    d = "Config",
    t = "qEXN111A",
    n = require("./Bmob-2.2.5.min.js"),
    app = getApp();

module.exports = {
  getConfig: function (o) {
    uni.showLoading({
      title: "正在拼命加载中..."
    }), app.globalData.objectId ? o() : (n.initialize(e, a), n.Query(d).get(t).then(function (e) {
      console.log(e), app.globalData.objectId = e.objectId, app.globalData.isShenHe = e.isShenHe, o();
    }).catch(function (e) {
      console.log(e);
    }));
  },
  getRecommendVideo: function (e, a, d) {
    uni.request({
      url: "https://api.hyhuo.com/home/list",
      method: "POST",
      data: {
        last_id: "0",
        page: e,
        channel: "appstore",
        source: "iOS",
        device_code: "107997BA-421F-49EE-8FBC-49AF8CABEAF9",
        device_name: "iPhone 6s Plus",
        device_w_h: "414*736",
        system_version: "14.4",
        lan: "zh-Hans-CN",
        is_new: "1",
        version_code: "9.3.6",
        uuid: "3b903b7a4b43a7cfeccde37d905dbfb2",
        udid: "3b903b7a4b43a7cfeccde37d905dbfb2",
        uid: "0",
        token: "68d64a6ffc3f205fac640de6668ca69e",
        timestamp: "1617157517",
        nonce: "161715751702717"
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: function (e) {
        uni.hideLoading(), e.data && e.data.data ? a(e.data.data.data_list) : d(e.data.errMsg);
      },
      fail: function (e) {
        uni.hideLoading(), d(0);
      }
    });
  },
  getTabVideo: function (e, a, d, t) {
    var n, c;
    "每日精选" == a ? (n = "每日精选", c = "4") : "60帧超清" == a ? (n = "60帧", c = "4") : "情侣壁纸" == a && (n = "235", c = "3"), uni.request({
      url: "https://api.hyhuo.com/find/banner_info",
      method: "POST",
      data: {
        banner_jump_type: "0",
        banner_keyword: n,
        banner_title: a,
        banner_type: c,
        page: e,
        channel: "appstore",
        source: "iOS",
        device_code: "107997BA-421F-49EE-8FBC-49AF8CABEAF9",
        device_name: "iPhone 6s Plus",
        device_w_h: "414*736",
        system_version: "14.4",
        lan: "zh-Hans-CN",
        is_new: "1",
        version_code: "9.3.6",
        uuid: "3b903b7a4b43a7cfeccde37d905dbfb2",
        udid: "3b903b7a4b43a7cfeccde37d905dbfb2",
        uid: "0",
        token: "68d64a6ffc3f205fac640de6668ca69e",
        timestamp: "1617157517",
        nonce: "161715751702717"
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: function (e) {
        console.log(e), uni.hideLoading(), e.data && e.data.data ? d(e.data.data.data_list) : t(e.data.errMsg);
      },
      fail: function (e) {
        uni.hideLoading(), t(0);
      }
    });
  },
  getSearchVideo: function (e, a, d, t) {
    uni.request({
      url: "https://search.hyhuo.com/so",
      method: "POST",
      data: {
        keyword: e,
        type: "title",
        show_locate: 0,
        page: a,
        channel: "appstore",
        source: "iOS",
        device_code: "107997BA-421F-49EE-8FBC-49AF8CABEAF9",
        device_name: "iPhone 6s Plus",
        device_w_h: "414*736",
        system_version: "14.4",
        lan: "zh-Hans-CN",
        is_new: "1",
        version_code: "9.3.6",
        uuid: "3b903b7a4b43a7cfeccde37d905dbfb2",
        udid: "3b903b7a4b43a7cfeccde37d905dbfb2",
        uid: "0",
        token: "68d64a6ffc3f205fac640de6668ca69e",
        timestamp: "1617157517",
        nonce: "161715751702717"
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: function (e) {
        uni.hideLoading(), e.data && e.data.data ? d(e.data.data.data_list) : t(e.data.errMsg);
      },
      fail: function (e) {
        uni.hideLoading(), t(0);
      }
    });
  },
  getRecommendImg: function (e, a, d) {
    uni.request({
      url: "https://api.hyhuo.com/home/img_recommend",
      method: "POST",
      data: {
        keyword: "推荐",
        search_type: "5",
        sort: "hot",
        page: e,
        channel: "appstore",
        source: "iOS",
        device_code: "107997BA-421F-49EE-8FBC-49AF8CABEAF9",
        device_name: "iPhone 6s Plus",
        device_w_h: "414*736",
        system_version: "14.4",
        lan: "zh-Hans-CN",
        is_new: "1",
        version_code: "9.3.6",
        uuid: "3b903b7a4b43a7cfeccde37d905dbfb2",
        udid: "3b903b7a4b43a7cfeccde37d905dbfb2",
        uid: "0",
        token: "68d64a6ffc3f205fac640de6668ca69e",
        timestamp: "1617157517",
        nonce: "161715751702717"
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: function (e) {
        uni.hideLoading(), e.data && e.data.data ? a(e.data.data.data_list) : d(e.data.errMsg);
      },
      fail: function (e) {
        uni.hideLoading(), d(0);
      }
    });
  },
  getTabImg: function (e, a, d, t) {
    uni.request({
      url: "https://search.hyhuo.com/search/image_tag",
      method: "POST",
      data: {
        banner_jump_type: "1",
        banner_keyword: a,
        banner_title: a,
        banner_type: "4",
        page: e,
        channel: "appstore",
        source: "iOS",
        device_code: "107997BA-421F-49EE-8FBC-49AF8CABEAF9",
        device_name: "iPhone 6s Plus",
        device_w_h: "414*736",
        system_version: "14.4",
        lan: "zh-Hans-CN",
        is_new: "1",
        version_code: "9.3.6",
        uuid: "3b903b7a4b43a7cfeccde37d905dbfb2",
        udid: "3b903b7a4b43a7cfeccde37d905dbfb2",
        uid: "0",
        token: "68d64a6ffc3f205fac640de6668ca69e",
        timestamp: "1617157517",
        nonce: "161715751702717"
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: function (e) {
        uni.hideLoading(), e.data && e.data.data ? d(e.data.data.data_list) : t(e.data.errMsg);
      },
      fail: function (e) {
        uni.hideLoading(), t(0);
      }
    });
  },
  getSearchImg: function (e, a, d, t) {
    uni.request({
      url: "https://search.hyhuo.com/search/image_tag",
      method: "POST",
      data: {
        keyword: e,
        search_type: "4",
        sort: "hot",
        page: a,
        channel: "appstore",
        source: "iOS",
        device_code: "107997BA-421F-49EE-8FBC-49AF8CABEAF9",
        device_name: "iPhone 6s Plus",
        device_w_h: "414*736",
        system_version: "14.4",
        lan: "zh-Hans-CN",
        is_new: "1",
        version_code: "9.3.6",
        uuid: "3b903b7a4b43a7cfeccde37d905dbfb2",
        udid: "3b903b7a4b43a7cfeccde37d905dbfb2",
        uid: "0",
        token: "68d64a6ffc3f205fac640de6668ca69e",
        timestamp: "1617157517",
        nonce: "161715751702717"
      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: function (e) {
        uni.hideLoading(), e.data && e.data.data ? d(e.data.data.data_list) : t(e.data.errMsg);
      },
      fail: function (e) {
        uni.hideLoading(), t(0);
      }
    });
  }
};