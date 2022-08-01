(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/find/photo/photo"],{

/***/ 337:
/*!*****************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/main.js?{"page":"pages%2Ffind%2Fphoto%2Fphoto"} ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _photo = _interopRequireDefault(__webpack_require__(/*! ./pages/find/photo/photo.vue */ 338));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_photo.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 338:
/*!********************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/find/photo/photo.vue ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _photo_vue_vue_type_template_id_757f5db8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photo.vue?vue&type=template&id=757f5db8& */ 339);
/* harmony import */ var _photo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photo.vue?vue&type=script&lang=js& */ 341);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _photo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _photo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _photo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photo.vue?vue&type=style&index=0&lang=css& */ 343);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _photo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _photo_vue_vue_type_template_id_757f5db8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _photo_vue_vue_type_template_id_757f5db8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _photo_vue_vue_type_template_id_757f5db8___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/find/photo/photo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 339:
/*!***************************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/find/photo/photo.vue?vue&type=template&id=757f5db8& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photo_vue_vue_type_template_id_757f5db8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./photo.vue?vue&type=template&id=757f5db8& */ 340);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photo_vue_vue_type_template_id_757f5db8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photo_vue_vue_type_template_id_757f5db8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photo_vue_vue_type_template_id_757f5db8___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photo_vue_vue_type_template_id_757f5db8___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 340:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/find/photo/photo.vue?vue&type=template&id=757f5db8& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 341:
/*!*********************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/find/photo/photo.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./photo.vue?vue&type=script&lang=js& */ 342);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 342:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/find/photo/photo.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var t = null;var _default =

{
  data: function data() {
    return {
      src: "",
      item: "",
      gglist: [] };

  },

  components: {},
  props: {},
  onLoad: function onLoad(n) {
    uni.createRewardedVideoAd && ((t = uni.createRewardedVideoAd({
      adUnitId: "adunit-4e000ac349350b1d" })).
    onError(function (t) {}), t.onClose(function (t) {
      t && t.isEnded;
    }));
    var o = n.src;

    if (null != o && this.setData({
      src: o }),
    null != n.item) {
      var c = JSON.parse(n.item);
      this.setData({
        item: c });

    }

    var that = this;
    uni.request({
      url: 'https://wag.qmniy.cn/api.php',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },


      success: function success(res) {
        console.log(res.data);
        that.setData({
          gglist: res.data });

      } });


  },
  onReady: function onReady() {},
  onShow: function onShow() {},
  onHide: function onHide() {},
  onUnload: function onUnload() {},
  onPullDownRefresh: function onPullDownRefresh() {},
  onReachBottom: function onReachBottom() {},
  onShareAppMessage: function onShareAppMessage() {
    return "" != this.src ? {
      title: "你觉得这个头像怎么样？",
      path: "/pages/photo/photo?src=" + this.src,
      imageUrl: this.src } :
    "" != this.item ? {
      path: "/pages/photo/photo?item=" + JSON.stringify(this.item) } :
    void 0;
  },
  methods: {
    fh: function fh() {
      uni.navigateBack();
    },
    saveImg: function saveImg(n) {
      t && t.show().catch(function () {
        t.load().then(function () {
          return t.show();
        }).catch(function (t) {
          console.log("激励视频 广告显示失败");
        });
      });
      var o = n.currentTarget.dataset.avatar;
      null != o && (o = o.replace("http", "https"));
      var c = n.currentTarget.dataset.card;
      null != c && (c = c.replace("http", "https"));
      var e = n.currentTarget.dataset.src;
      null != e && (e = e.replace("http", "https")), uni.getSetting({
        success: function success(t) {
          t.authSetting["scope.writePhotosAlbum"] ? (null != o && null != c && (uni.getImageInfo({
            src: o,
            success: function success(t) {
              uni.saveImageToPhotosAlbum({
                filePath: t.path,
                success: function success(t) {
                  uni.showToast({
                    title: "下载成功",
                    icon: "success",
                    image: "",
                    duration: 1e3,
                    mask: !0,
                    success: function success(t) {},
                    fail: function fail(t) {},
                    complete: function complete(t) {} });

                },
                fail: function fail(t) {},
                complete: function complete(t) {} });

            },
            fail: function fail(t) {},
            complete: function complete(t) {} }),
          uni.getImageInfo({
            src: c,
            success: function success(t) {
              uni.saveImageToPhotosAlbum({
                filePath: t.path,
                success: function success(t) {
                  uni.showToast({
                    title: "下载成功",
                    icon: "success",
                    image: "",
                    duration: 1e3,
                    mask: !0,
                    success: function success(t) {},
                    fail: function fail(t) {},
                    complete: function complete(t) {} });

                },
                fail: function fail(t) {},
                complete: function complete(t) {} });

            },
            fail: function fail(t) {},
            complete: function complete(t) {} })),
          null != e && uni.getImageInfo({
            src: e,
            success: function success(t) {
              uni.saveImageToPhotosAlbum({
                filePath: t.path,
                success: function success(t) {
                  uni.showToast({
                    title: "下载成功",
                    icon: "success",
                    image: "",
                    duration: 1e3,
                    mask: !0,
                    success: function success(t) {},
                    fail: function fail(t) {},
                    complete: function complete(t) {} });

                },
                fail: function fail(t) {},
                complete: function complete(t) {} });

            },
            fail: function fail(t) {},
            complete: function complete(t) {} })) :
          uni.authorize({
            scope: "scope.writePhotosAlbum",
            success: function success() {
              null != o && null != c && (uni.getImageInfo({
                src: o,
                success: function success(t) {
                  uni.saveImageToPhotosAlbum({
                    filePath: t.path,
                    success: function success(t) {
                      uni.showToast({
                        title: "下载成功",
                        icon: "success",
                        image: "",
                        duration: 1e3,
                        mask: !0,
                        success: function success(t) {},
                        fail: function fail(t) {},
                        complete: function complete(t) {} });

                    },
                    fail: function fail(t) {},
                    complete: function complete(t) {} });

                },
                fail: function fail(t) {},
                complete: function complete(t) {} }),
              uni.getImageInfo({
                src: c,
                success: function success(t) {
                  uni.saveImageToPhotosAlbum({
                    filePath: t.path,
                    success: function success(t) {
                      uni.showToast({
                        title: "下载成功",
                        icon: "success",
                        image: "",
                        duration: 1e3,
                        mask: !0,
                        success: function success(t) {},
                        fail: function fail(t) {},
                        complete: function complete(t) {} });

                    },
                    fail: function fail(t) {},
                    complete: function complete(t) {} });

                },
                fail: function fail(t) {},
                complete: function complete(t) {} })),
              null != e && uni.getImageInfo({
                src: e,
                success: function success(t) {
                  uni.saveImageToPhotosAlbum({
                    filePath: t.path,
                    success: function success(t) {
                      uni.showToast({
                        title: "下载成功",
                        icon: "success",
                        image: "",
                        duration: 1e3,
                        mask: !0,
                        success: function success(t) {},
                        fail: function fail(t) {},
                        complete: function complete(t) {} });

                    },
                    fail: function fail(t) {},
                    complete: function complete(t) {} });

                },
                fail: function fail(t) {},
                complete: function complete(t) {} });

            },
            fail: function fail() {
              uni.showModal({
                title: "未授权",
                content: "请授权",
                showCancel: !0,
                cancelText: "取消",
                cancelColor: "",
                confirmText: "确定",
                confirmColor: "",
                success: function success(t) {},
                fail: function fail(t) {},
                complete: function complete(t) {} });

            } });

        } });

    },
    copy: function copy(t) {
      var n = t.currentTarget.dataset.content;
      uni.setClipboardData({
        data: n,
        success: function success(t) {
          uni.showToast({
            title: "复制完成",
            icon: "success",
            image: "",
            duration: 1e3,
            mask: !0,
            success: function success(t) {},
            fail: function fail(t) {},
            complete: function complete(t) {} });

        },
        fail: function fail(t) {},
        complete: function complete(t) {} });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 343:
/*!*****************************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/find/photo/photo.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./photo.vue?vue&type=style&index=0&lang=css& */ 344);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_photo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 344:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/find/photo/photo.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[337,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDov5aOBemhp5bqT5bCP56iL5bqPL3dhbGxwYXBlci9wYWdlcy9maW5kL3Bob3RvL3Bob3RvLnZ1ZT80ODczIiwid2VicGFjazovLy9EOi/lo4F6aGnlupPlsI/nqIvluo8vd2FsbHBhcGVyL3BhZ2VzL2ZpbmQvcGhvdG8vcGhvdG8udnVlPzBiY2MiLCJ3ZWJwYWNrOi8vL0Q6L+WjgXpoaeW6k+Wwj+eoi+W6jy93YWxscGFwZXIvcGFnZXMvZmluZC9waG90by9waG90by52dWU/YmVlYiIsIndlYnBhY2s6Ly8vRDov5aOBemhp5bqT5bCP56iL5bqPL3dhbGxwYXBlci9wYWdlcy9maW5kL3Bob3RvL3Bob3RvLnZ1ZT8zZTI5IiwidW5pLWFwcDovLy9wYWdlcy9maW5kL3Bob3RvL3Bob3RvLnZ1ZSIsIndlYnBhY2s6Ly8vRDov5aOBemhp5bqT5bCP56iL5bqPL3dhbGxwYXBlci9wYWdlcy9maW5kL3Bob3RvL3Bob3RvLnZ1ZT84ZGVmIiwid2VicGFjazovLy9EOi/lo4F6aGnlupPlsI/nqIvluo8vd2FsbHBhcGVyL3BhZ2VzL2ZpbmQvcGhvdG8vcGhvdG8udnVlP2UyOTAiXSwibmFtZXMiOlsid3giLCJfX3dlYnBhY2tfcmVxdWlyZV9VTklfTVBfUExVR0lOX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7c0RBQUE7QUFDQTtBQUNBLGtHLDZGQUZtQkEsRUFBRSxDQUFDQyxpQ0FBSCxHQUF1Q0MsbUJBQXZDO0FBR25CQyxVQUFVLENBQUNDLGNBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtIO0FBQ2xIO0FBQ3lEO0FBQ0w7QUFDYTs7O0FBR2pFO0FBQ3FNO0FBQ3JNLGdCQUFnQiw0TUFBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZB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Q0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQXZuQztBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InBhZ2VzL2ZpbmQvcGhvdG8vcGhvdG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7d3guX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy9maW5kL3Bob3RvL3Bob3RvLnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3Bob3RvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NTdmNWRiOCZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Bob3RvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vcGhvdG8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3Bob3RvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9maW5kL3Bob3RvL3Bob3RvLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vcGhvdG8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc1N2Y1ZGI4JlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9waG90by52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9waG90by52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcbjx2aWV3PlxyXG48YmxvY2sgdi1pZj1cIml0ZW09PScnXCI+XHJcbiAgICA8dmlldyBjbGFzcz1cImN1LWNhcmQgY2FzZVwiPlxyXG4gICAgICAgIDx2aWV3IGNsYXNzPVwiY3UtaXRlbSBzaGFkb3dcIj5cclxuICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPGltYWdlIG1vZGU9XCJhc3BlY3RGaXRcIiA6c3JjPVwic3JjXCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgIDwvdmlldz5cclxuICAgIDx2aWV3IHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBnZ2xpc3RcIiA6a2V5PVwiaW5kZXhcIj5cclxuICAgIDxhZCA6dW5pdElkPVwiaXRlbS55c1wiPjwvYWQ+XHJcbiAgICA8L3ZpZXc+XHJcbiAgICA8dmlldyBjbGFzcz1cIndldWktZm9vdGVyX2ZpeGVkLWJvdHRvbVwiPlxyXG4gICAgICAgIDx2aWV3IGNsYXNzPVwicGFkZGluZyBmbGV4IGZsZXgtZGlyZWN0aW9uXCI+XHJcblx0XHRcdDxhZCB1bml0LWlkPVwiYWR1bml0LTgwNjcwMmRlODA0YTkyMWRcIiBhZC10eXBlPVwidmlkZW9cIiBhZC10aGVtZT1cIndoaXRlXCI+PC9hZD5cclxuXHRcdFx0PGJ1dHRvbiBAdGFwPVwiXCIgY2xhc3M9XCJjdS1idG4gYmcteWVsbG93IGxnXCIgOmRhdGEtY29udGVudD1cIml0ZW0ubmFtZVwiPua4qemmqOaPkOekuu+8muingueci+W5v+WRiuS4i+i9veWktOWDjzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIEB0YXA9XCJzYXZlSW1nXCIgY2xhc3M9XCJjdS1idG4gYmctYmx1ZSBtYXJnaW4tdGItc20gbGdcIiA6ZGF0YS1zcmM9XCJzcmNcIj7ngrnlh7vkuIvovb08L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvbiBAdGFwPVwiZmhcIiBjbGFzcz1cImN1LWJ0biBiZy1yZWQgbWFyZ2luLXRiLXNtIGxnXCIgOmRhdGEtYXZhdGFyPVwiaXRlbS5hdmF0YXJcIiA6ZGF0YS1jYXJkPVwiaXRlbS5jYXJkXCI+6L+U5ZuePC9idXR0b24+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgPC92aWV3PlxyXG48L2Jsb2NrPlxyXG48YmxvY2sgdi1lbHNlPlxyXG4gICAgPHZpZXcgY2xhc3M9XCJjdS1jYXJkIGR5bmFtaWNcIj5cclxuICAgICAgICA8dmlldyBjbGFzcz1cImN1LWl0ZW0gc2hhZG93XCIgc3R5bGU9XCJoZWlnaHQ6MjYwcHg7XCI+XHJcbiAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiZ3JpZCBmbGV4LXN1YiBjb2wtMVwiPlxyXG4gICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJiZy1pbWcgb25seS1pbWdcIiA6c3R5bGU9XCInYmFja2dyb3VuZC1pbWFnZTp1cmwoJyArIGl0ZW0uY2FyZCArICcpO3RleHQtYWxpZ246Y2VudGVyJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiY3UtYXZhdGFyIHJvdW5kIGxnXCIgOnN0eWxlPVwiJ2JhY2tncm91bmQtaW1hZ2U6dXJsKCcgKyBpdGVtLmF2YXRhciArICcpO3dpZHRoOjEwMHB4O2hlaWdodDoxMDBweDttYXJnaW4tdG9wOjEwMHB4J1wiPjwvdmlldz5cclxuICAgICAgICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cImNvbnRlbnQgZmxleC1zdWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZpZXc+e3tpdGVtLm5hbWV9fTwvdmlldz5cclxuICAgICAgICAgICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJ0ZXh0LWNvbnRlbnRcIj57e2l0ZW0ubWVtb319PC92aWV3PlxyXG4gICAgICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgPC92aWV3PlxyXG4gICAgPHZpZXcgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGdnbGlzdFwiIDprZXk9XCJpbmRleFwiPlxyXG4gICAgPGFkIDp1bml0SWQ9XCJpdGVtLmd6XCI+PC9hZD5cclxuICAgIDwvdmlldz5cclxuICAgIDx2aWV3IGNsYXNzPVwid2V1aS1mb290ZXJfZml4ZWQtYm90dG9tXCI+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJwYWRkaW5nIGZsZXggZmxleC1kaXJlY3Rpb25cIj5cclxuXHRcdFx0PGFkLWN1c3RvbSB1bml0LWlkPVwiYWR1bml0LThhYmEzNzAyZWFhNDgwNGZcIj48L2FkLWN1c3RvbT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBAdGFwPVwiY29weVwiIGNsYXNzPVwiY3UtYnRuIGJnLWJsdWUgbGdcIiA6ZGF0YS1jb250ZW50PVwiaXRlbS5uYW1lXCI+5aSN5Yi2572R5ZCNPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gQHRhcD1cImNvcHlcIiBjbGFzcz1cImN1LWJ0biBiZy1ncmVlbiBtYXJnaW4tdGItc20gbGdcIiA6ZGF0YS1jb250ZW50PVwiaXRlbS5tZW1vXCI+5aSN5Yi2562+5ZCNPC9idXR0b24+XHJcblx0XHRcdDxidXR0b24gQHRhcD1cIlwiIGNsYXNzPVwiY3UtYnRuIGJnLXllbGxvdyBsZ1wiIDpkYXRhLWNvbnRlbnQ9XCJpdGVtLm5hbWVcIj7muKnppqjmj5DnpLrvvJrop4LnnIvlub/lkYrkuIvovb3lpZflm748L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBAdGFwPVwic2F2ZUltZ1wiIGNsYXNzPVwiY3UtYnRuIGJnLXBpbmsgbWFyZ2luLXRiLXNtIGxnXCIgOmRhdGEtYXZhdGFyPVwiaXRlbS5hdmF0YXJcIiA6ZGF0YS1jYXJkPVwiaXRlbS5jYXJkXCI+5LiL6L295aWX5Zu+PC9idXR0b24+XHJcblx0XHRcdDxidXR0b24gQHRhcD1cImZoXCIgY2xhc3M9XCJjdS1idG4gYmctcmVkIG1hcmdpbi10Yi1zbSBsZ1wiIDpkYXRhLWF2YXRhcj1cIml0ZW0uYXZhdGFyXCIgOmRhdGEtY2FyZD1cIml0ZW0uY2FyZFwiPui/lOWbnjwvYnV0dG9uPlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgIDwvdmlldz5cclxuPC9ibG9jaz5cclxuPC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxudmFyIHQgPSBudWxsO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzcmM6IFwiXCIsXHJcbiAgICAgIGl0ZW06IFwiXCIsXHJcbiAgICAgIGdnbGlzdDogW11cclxuICAgIH07XHJcbiAgfSxcclxuXHJcbiAgY29tcG9uZW50czoge30sXHJcbiAgcHJvcHM6IHt9LFxyXG4gIG9uTG9hZDogZnVuY3Rpb24gKG4pIHtcclxuICAgIHVuaS5jcmVhdGVSZXdhcmRlZFZpZGVvQWQgJiYgKCh0ID0gdW5pLmNyZWF0ZVJld2FyZGVkVmlkZW9BZCh7XHJcbiAgICAgIGFkVW5pdElkOiBcImFkdW5pdC00ZTAwMGFjMzQ5MzUwYjFkXCJcclxuICAgIH0pKS5vbkVycm9yKGZ1bmN0aW9uICh0KSB7fSksIHQub25DbG9zZShmdW5jdGlvbiAodCkge1xyXG4gICAgICB0ICYmIHQuaXNFbmRlZDtcclxuICAgIH0pKTtcclxuICAgIHZhciBvID0gbi5zcmM7XHJcblxyXG4gICAgaWYgKG51bGwgIT0gbyAmJiB0aGlzLnNldERhdGEoe1xyXG4gICAgICBzcmM6IG9cclxuICAgIH0pLCBudWxsICE9IG4uaXRlbSkge1xyXG4gICAgICB2YXIgYyA9IEpTT04ucGFyc2Uobi5pdGVtKTtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBpdGVtOiBjXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgIHVuaS5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiAnaHR0cHM6Ly93YWcucW1uaXkuY24vYXBpLnBocCcsXHJcbiAgICAgIGRhdGE6IHt9LFxyXG4gICAgICBoZWFkZXI6IHtcclxuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIC8vIOm7mOiupOWAvFxyXG5cclxuICAgICAgfSxcclxuXHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIHRoYXQuc2V0RGF0YSh7XHJcbiAgICAgICAgICBnZ2xpc3Q6IHJlcy5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHt9LFxyXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge30sXHJcbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7fSxcclxuICBvblVubG9hZDogZnVuY3Rpb24gKCkge30sXHJcbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHt9LFxyXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHt9LFxyXG4gIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gXCJcIiAhPSB0aGlzLnNyYyA/IHtcclxuICAgICAgdGl0bGU6IFwi5L2g6KeJ5b6X6L+Z5Liq5aS05YOP5oCO5LmI5qC377yfXCIsXHJcbiAgICAgIHBhdGg6IFwiL3BhZ2VzL3Bob3RvL3Bob3RvP3NyYz1cIiArIHRoaXMuc3JjLFxyXG4gICAgICBpbWFnZVVybDogdGhpcy5zcmNcclxuICAgIH0gOiBcIlwiICE9IHRoaXMuaXRlbSA/IHtcclxuICAgICAgcGF0aDogXCIvcGFnZXMvcGhvdG8vcGhvdG8/aXRlbT1cIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuaXRlbSlcclxuICAgIH0gOiB2b2lkIDA7XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcblx0ICBmaDogZnVuY3Rpb24gKCkge1xyXG5cdCAgICB1bmkubmF2aWdhdGVCYWNrKCk7XHJcblx0ICB9LFxyXG4gICAgc2F2ZUltZzogZnVuY3Rpb24gKG4pIHtcclxuICAgICAgdCAmJiB0LnNob3coKS5jYXRjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdC5sb2FkKCkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4gdC5zaG93KCk7XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwi5r+A5Yqx6KeG6aKRIOW5v+WRiuaYvuekuuWksei0pVwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHZhciBvID0gbi5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuYXZhdGFyO1xyXG4gICAgICBudWxsICE9IG8gJiYgKG8gPSBvLnJlcGxhY2UoXCJodHRwXCIsIFwiaHR0cHNcIikpO1xyXG4gICAgICB2YXIgYyA9IG4uY3VycmVudFRhcmdldC5kYXRhc2V0LmNhcmQ7XHJcbiAgICAgIG51bGwgIT0gYyAmJiAoYyA9IGMucmVwbGFjZShcImh0dHBcIiwgXCJodHRwc1wiKSk7XHJcbiAgICAgIHZhciBlID0gbi5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuc3JjO1xyXG4gICAgICBudWxsICE9IGUgJiYgKGUgPSBlLnJlcGxhY2UoXCJodHRwXCIsIFwiaHR0cHNcIikpLCB1bmkuZ2V0U2V0dGluZyh7XHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgIHQuYXV0aFNldHRpbmdbXCJzY29wZS53cml0ZVBob3Rvc0FsYnVtXCJdID8gKG51bGwgIT0gbyAmJiBudWxsICE9IGMgJiYgKHVuaS5nZXRJbWFnZUluZm8oe1xyXG4gICAgICAgICAgICBzcmM6IG8sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgICAgdW5pLnNhdmVJbWFnZVRvUGhvdG9zQWxidW0oe1xyXG4gICAgICAgICAgICAgICAgZmlsZVBhdGg6IHQucGF0aCxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIuS4i+i9veaIkOWKn1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxZTMsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFzazogITAsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHQpIHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICh0KSB7fSxcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKHQpIHt9XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICh0KSB7fSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAodCkge31cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHQpIHt9LFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKHQpIHt9XHJcbiAgICAgICAgICB9KSwgdW5pLmdldEltYWdlSW5mbyh7XHJcbiAgICAgICAgICAgIHNyYzogYyxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgICB1bmkuc2F2ZUltYWdlVG9QaG90b3NBbGJ1bSh7XHJcbiAgICAgICAgICAgICAgICBmaWxlUGF0aDogdC5wYXRoLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgICAgICAgdW5pLnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwi5LiL6L295oiQ5YqfXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDFlMyxcclxuICAgICAgICAgICAgICAgICAgICBtYXNrOiAhMCxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAodCkge30sXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHQpIHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAodCkge31cclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHQpIHt9LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICh0KSB7fVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAodCkge30sXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAodCkge31cclxuICAgICAgICAgIH0pKSwgbnVsbCAhPSBlICYmIHVuaS5nZXRJbWFnZUluZm8oe1xyXG4gICAgICAgICAgICBzcmM6IGUsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgICAgdW5pLnNhdmVJbWFnZVRvUGhvdG9zQWxidW0oe1xyXG4gICAgICAgICAgICAgICAgZmlsZVBhdGg6IHQucGF0aCxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIuS4i+i9veaIkOWKn1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxZTMsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFzazogITAsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHQpIHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICh0KSB7fSxcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKHQpIHt9XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICh0KSB7fSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAodCkge31cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHQpIHt9LFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKHQpIHt9XHJcbiAgICAgICAgICB9KSkgOiB1bmkuYXV0aG9yaXplKHtcclxuICAgICAgICAgICAgc2NvcGU6IFwic2NvcGUud3JpdGVQaG90b3NBbGJ1bVwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgbnVsbCAhPSBvICYmIG51bGwgIT0gYyAmJiAodW5pLmdldEltYWdlSW5mbyh7XHJcbiAgICAgICAgICAgICAgICBzcmM6IG8sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICAgICAgICB1bmkuc2F2ZUltYWdlVG9QaG90b3NBbGJ1bSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZVBhdGg6IHQucGF0aCxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdW5pLnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIuS4i+i9veaIkOWKn1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxZTMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6ICEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAodCkge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICh0KSB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICh0KSB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAodCkge30sXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICh0KSB7fVxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAodCkge30sXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKHQpIHt9XHJcbiAgICAgICAgICAgICAgfSksIHVuaS5nZXRJbWFnZUluZm8oe1xyXG4gICAgICAgICAgICAgICAgc3JjOiBjLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgICAgICAgdW5pLnNhdmVJbWFnZVRvUGhvdG9zQWxidW0oe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVQYXRoOiB0LnBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCLkuIvovb3miJDlip9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMWUzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiAhMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHQpIHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAodCkge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAodCkge31cclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHQpIHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAodCkge31cclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHQpIHt9LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICh0KSB7fVxyXG4gICAgICAgICAgICAgIH0pKSwgbnVsbCAhPSBlICYmIHVuaS5nZXRJbWFnZUluZm8oe1xyXG4gICAgICAgICAgICAgICAgc3JjOiBlLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgICAgICAgdW5pLnNhdmVJbWFnZVRvUGhvdG9zQWxidW0oe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVQYXRoOiB0LnBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCLkuIvovb3miJDlip9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMWUzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiAhMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHQpIHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAodCkge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAodCkge31cclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHQpIHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAodCkge31cclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHQpIHt9LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICh0KSB7fVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgdW5pLnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLmnKrmjojmnYNcIixcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwi6K+35o6I5p2DXCIsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiAhMCxcclxuICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ6IFwi5Y+W5raIXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxDb2xvcjogXCJcIixcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiBcIuehruWumlwiLFxyXG4gICAgICAgICAgICAgICAgY29uZmlybUNvbG9yOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHQpIHt9LFxyXG4gICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHQpIHt9LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICh0KSB7fVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGNvcHk6IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgIHZhciBuID0gdC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY29udGVudDtcclxuICAgICAgdW5pLnNldENsaXBib2FyZERhdGEoe1xyXG4gICAgICAgIGRhdGE6IG4sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCLlpI3liLblrozmiJBcIixcclxuICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIlwiLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMWUzLFxyXG4gICAgICAgICAgICBtYXNrOiAhMCxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHQpIHt9LFxyXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAodCkge30sXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAodCkge31cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbDogZnVuY3Rpb24gKHQpIHt9LFxyXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAodCkge31cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlPlxyXG4ud2V1aS1mb290ZXIge1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi53ZXVpLWZvb3Rlcl9maXhlZC1ib3R0b20ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAuNTJlbTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxufVxyXG5cclxuLndldWktZm9vdGVyX19saW5rcyB7XHJcbiAgICBmb250LXNpemU6IDA7XHJcbn1cclxuXHJcbi53ZXVpLWZvb3Rlcl9fbGluayB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgbWFyZ2luOiAwIC42MmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM1ODZjOTQ7XHJcbn1cclxuXHJcbi53ZXVpLWZvb3Rlcl9fbGluazpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcnB4IHNvbGlkICNjN2M3Yzc7XHJcbiAgICBjb2xvcjogI2M3YzdjNztcclxuICAgIGxlZnQ6IC0uNjVlbTtcclxuICAgIHRvcDogLjM2ZW07XHJcbiAgICBib3R0b206IC4zNmVtO1xyXG59XHJcblxyXG4ud2V1aS1mb290ZXJfX2xpbms6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi53ZXVpLWZvb3Rlcl9fdGV4dCB7XHJcbiAgICBwYWRkaW5nOiAwIC4zNGVtO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbjwvc3R5bGU+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vcGhvdG8udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3Bob3RvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY1NTUyOTY2NDEwNlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9