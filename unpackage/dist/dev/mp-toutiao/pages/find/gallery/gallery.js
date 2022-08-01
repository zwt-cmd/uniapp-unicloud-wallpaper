(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/find/gallery/gallery"],{

/***/ 306:
/*!*********************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/main.js?{"page":"pages%2Ffind%2Fgallery%2Fgallery"} ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _gallery = _interopRequireDefault(__webpack_require__(/*! ./pages/find/gallery/gallery.vue */ 307));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_gallery.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 307:
/*!************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/find/gallery/gallery.vue ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gallery_vue_vue_type_template_id_e0d77490___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery.vue?vue&type=template&id=e0d77490& */ 308);
/* harmony import */ var _gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.vue?vue&type=script&lang=js& */ 310);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _gallery_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery.vue?vue&type=style&index=0&lang=scss& */ 317);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _gallery_vue_vue_type_template_id_e0d77490___WEBPACK_IMPORTED_MODULE_0__["render"],
  _gallery_vue_vue_type_template_id_e0d77490___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _gallery_vue_vue_type_template_id_e0d77490___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/find/gallery/gallery.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 308:
/*!*******************************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/find/gallery/gallery.vue?vue&type=template&id=e0d77490& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gallery_vue_vue_type_template_id_e0d77490___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./gallery.vue?vue&type=template&id=e0d77490& */ 309);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gallery_vue_vue_type_template_id_e0d77490___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gallery_vue_vue_type_template_id_e0d77490___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gallery_vue_vue_type_template_id_e0d77490___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gallery_vue_vue_type_template_id_e0d77490___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 309:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/find/gallery/gallery.vue?vue&type=template&id=e0d77490& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uIcon: function() {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-icon/u-icon */ "uview-ui/components/u-icon/u-icon").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-icon/u-icon.vue */ 379))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 310:
/*!*************************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/find/gallery/gallery.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./gallery.vue?vue&type=script&lang=js& */ 311);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 311:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/find/gallery/gallery.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

var t = __webpack_require__(/*! ../../utils/1.js */ 312),
e = t(__webpack_require__(/*! ../../utils/2.js */ 313)),
n = t(__webpack_require__(/*! ../../utils/3.js */ 315)),
a = __webpack_require__(/*! ../../utils/4.js */ 316);var _default =

{
  data: function data() {
    return {
      TabCur: 1,
      categoryList: [],
      photos: [],
      nextStart: 0,
      gglist: [] };

  },

  components: {},
  props: {},
  onLoad: function onLoad(t) {
    var e = this;
    this.getCategory().then(function (t) {
      var n = t.categoryList;
      e.setData({
        categoryList: n });

    }).catch(function (t) {
      console.error(t);
    }), this.prepareData();
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
  onPullDownRefresh: function onPullDownRefresh() {
    this.setData({
      nextStart: 0 }),
    this.prepareData();
  },
  onReachBottom: function onReachBottom() {
    var t = this,
    e = this.TabCur,
    n = this.nextStart;
    this.getPhotos(e, n).then(function (e) {
      t.setData({
        nextStart: e.nextStart,
        photos: t.photos.concat(e.list) });

    }).catch(function (t) {
      console.error(t);
    });
  },
  onShareAppMessage: function onShareAppMessage() {},
  methods: {
    fh: function fh() {
      uni.navigateBack();
    },
    prepareData: function prepareData() {
      var t = this,
      e = this.TabCur,
      n = this.nextStart;
      this.getPhotos(e, n).then(function (e) {
        console.log(e.list), t.setData({
          nextStart: e.nextStart,
          photos: e.list }),
        uni.stopPullDownRefresh();
      }).catch(function (t) {
        console.error(t), uni.stopPullDownRefresh();
      });
    },
    getCategory: function () {
      var t = (0, n.default)(e.default.mark(function t() {
        return e.default.wrap(function (t) {
          for (;;) {switch (t.prev = t.next) {
              case 0:
                return t.next = 2, new Promise(function (t, e) {
                  a.request("https://spare.maibaapp.com/bbs/newUgc/category/list/2").then(function (n) {
                    200 == n.statusCode && "request:ok" == n.errMsg && 0 == n.data.code && "success" == n.data.msg ? t(n.data.data) : e("获取分类失败");
                  }).catch(function (t) {
                    e("获取分类失败");
                  });
                });

              case 2:
                return t.abrupt("return", t.sent);

              case 3:
              case "end":
                return t.stop();}}

        }, t);
      }));
      return function () {
        return t.apply(this, arguments);
      };
    }(),
    getPhotos: function () {
      var t = (0, n.default)(e.default.mark(function t(n, r) {
        return e.default.wrap(function (t) {
          for (;;) {switch (t.prev = t.next) {
              case 0:
                return t.next = 2, new Promise(function (t, e) {
                  a.request("https://spare.maibaapp.com/bbs/newUgc/category/info/2/" + n + "/" + r + "/" + (r + 17)).then(function (n) {
                    200 == n.statusCode && "request:ok" == n.errMsg && 0 == n.data.code && "success" == n.data.msg ? t(n.data.data) : e("获取图片列表失败");
                  }).catch(function (t) {
                    e("获取图片列表失败");
                  });
                });

              case 2:
                return t.abrupt("return", t.sent);

              case 3:
              case "end":
                return t.stop();}}

        }, t);
      }));
      return function (e, n) {
        return t.apply(this, arguments);
      };
    }(),
    tabSelect: function tabSelect(t) {
      var e = t.currentTarget.dataset.cid;
      this.setData({
        TabCur: e,
        nextStart: 0 }),
      this.prepareData();
    },
    info: function info(t) {
      var e = t.currentTarget.dataset.item;
      uni.navigateTo({
        url: "../photo/photo?item=" + JSON.stringify(e),
        success: function success(t) {},
        fail: function fail(t) {},
        complete: function complete(t) {} });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 317:
/*!**********************************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/find/gallery/gallery.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gallery_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./gallery.vue?vue&type=style&index=0&lang=scss& */ 318);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gallery_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gallery_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gallery_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gallery_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gallery_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 318:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/find/gallery/gallery.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[306,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDov5aOBemhp5bqT5bCP56iL5bqPL3dhbGxwYXBlci9wYWdlcy9maW5kL2dhbGxlcnkvZ2FsbGVyeS52dWU/OGQ1MyIsIndlYnBhY2s6Ly8vRDov5aOBemhp5bqT5bCP56iL5bqPL3dhbGxwYXBlci9wYWdlcy9maW5kL2dhbGxlcnkvZ2FsbGVyeS52dWU/YWZmNSIsIndlYnBhY2s6Ly8vRDov5aOBemhp5bqT5bCP56iL5bqPL3dhbGxwYXBlci9wYWdlcy9maW5kL2dhbGxlcnkvZ2FsbGVyeS52dWU/MjAzMyIsIndlYnBhY2s6Ly8vRDov5aOBemhp5bqT5bCP56iL5bqPL3dhbGxwYXBlci9wYWdlcy9maW5kL2dhbGxlcnkvZ2FsbGVyeS52dWU/YzhhNyIsInVuaS1hcHA6Ly8vcGFnZXMvZmluZC9nYWxsZXJ5L2dhbGxlcnkudnVlIiwid2VicGFjazovLy9EOi/lo4F6aGnlupPlsI/nqIvluo8vd2FsbHBhcGVyL3BhZ2VzL2ZpbmQvZ2FsbGVyeS9nYWxsZXJ5LnZ1ZT8yNDkxIiwid2VicGFjazovLy9EOi/lo4F6aGnlupPlsI/nqIvluo8vd2FsbHBhcGVyL3BhZ2VzL2ZpbmQvZ2FsbGVyeS9nYWxsZXJ5LnZ1ZT9kNGE4Il0sIm5hbWVzIjpbInd4IiwiX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImNyZWF0ZVBhZ2UiLCJQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O3NEQUFBO0FBQ0E7QUFDQSx3Ryw2RkFGbUJBLEVBQUUsQ0FBQ0MsaUNBQUgsR0FBdUNDLG1CQUF2QztBQUduQkMsVUFBVSxDQUFDQyxnQkFBRCxDQUFWLEM7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0g7QUFDcEg7QUFDMkQ7QUFDTDtBQUNjOzs7QUFHcEU7QUFDcU07QUFDck0sZ0JBQWdCLDRNQUFVO0FBQzFCLEVBQUUsNkVBQU07QUFDUixFQUFFLGtGQUFNO0FBQ1IsRUFBRSwyRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzRkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx1TUFFTjtBQUNQO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQUE7QUFBQTtBQUFBO0FBQTh3QixDQUFnQiw0d0JBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3lDbHlCO0FBQ0EsdURBREE7QUFFQSx1REFGQTtBQUdBLG9EQUhBLEM7O0FBS0E7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSxlQURBO0FBRUEsc0JBRkE7QUFHQSxnQkFIQTtBQUlBLGtCQUpBO0FBS0EsZ0JBTEE7O0FBT0EsR0FUQTs7QUFXQSxnQkFYQTtBQVlBLFdBWkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBREE7O0FBR0EsS0FMQSxFQUtBLEtBTEEsQ0FLQTtBQUNBO0FBQ0EsS0FQQSxHQU9BLGtCQVBBO0FBUUE7QUFDQTtBQUNBLHlDQURBO0FBRUEsY0FGQTtBQUdBO0FBQ0EsMENBREEsQ0FDQTtBQURBLE9BSEE7OztBQVFBLGFBUkEsbUJBUUEsR0FSQSxFQVFBO0FBQ0E7QUFDQTtBQUNBLDBCQURBOztBQUdBLE9BYkE7OztBQWdCQSxHQXhDQTtBQXlDQSxnQ0F6Q0E7QUEwQ0EsOEJBMUNBO0FBMkNBLDhCQTNDQTtBQTRDQSxrQ0E1Q0E7QUE2Q0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsc0JBRkE7QUFHQSxHQWpEQTtBQWtEQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSxzQkFGQTtBQUdBO0FBQ0E7QUFDQSw4QkFEQTtBQUVBLHVDQUZBOztBQUlBLEtBTEEsRUFLQSxLQUxBLENBS0E7QUFDQTtBQUNBLEtBUEE7QUFRQSxHQTlEQTtBQStEQSxvREEvREE7QUFnRUE7QUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBLHdCQUZBO0FBR0E7QUFDQTtBQUNBLGdDQURBO0FBRUEsd0JBRkE7QUFHQSxpQ0FIQTtBQUlBLE9BTEEsRUFLQSxLQUxBLENBS0E7QUFDQTtBQUNBLE9BUEE7QUFRQSxLQWhCQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBRkEsRUFFQSxLQUZBLENBRUE7QUFDQTtBQUNBLG1CQUpBO0FBS0EsaUJBTkE7O0FBUUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBZkE7O0FBaUJBLFNBbEJBLEVBa0JBLENBbEJBO0FBbUJBLE9BcEJBO0FBcUJBO0FBQ0E7QUFDQSxPQUZBO0FBR0EsS0F6QkEsRUFqQkE7QUEyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUZBLEVBRUEsS0FGQSxDQUVBO0FBQ0E7QUFDQSxtQkFKQTtBQUtBLGlCQU5BOztBQVFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQWZBOztBQWlCQSxTQWxCQSxFQWtCQSxDQWxCQTtBQW1CQSxPQXBCQTtBQXFCQTtBQUNBO0FBQ0EsT0FGQTtBQUdBLEtBekJBLEVBM0NBO0FBcUVBO0FBQ0E7QUFDQTtBQUNBLGlCQURBO0FBRUEsb0JBRkE7QUFHQSx3QkFIQTtBQUlBLEtBM0VBO0FBNEVBO0FBQ0E7QUFDQTtBQUNBLHVEQURBO0FBRUEsdUNBRkE7QUFHQSxpQ0FIQTtBQUlBLHlDQUpBOztBQU1BLEtBcEZBLEVBaEVBLEU7Ozs7Ozs7Ozs7Ozs7QUM5Q0E7QUFBQTtBQUFBO0FBQUE7QUFBaThDLENBQWdCLHUzQ0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQXI5QztBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InBhZ2VzL2ZpbmQvZ2FsbGVyeS9nYWxsZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO3d4Ll9fd2VicGFja19yZXF1aXJlX1VOSV9NUF9QTFVHSU5fXyA9IF9fd2VicGFja19yZXF1aXJlX187XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvZmluZC9nYWxsZXJ5L2dhbGxlcnkudnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vZ2FsbGVyeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTBkNzc0OTAmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9nYWxsZXJ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZ2FsbGVyeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vZ2FsbGVyeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2ZpbmQvZ2FsbGVyeS9nYWxsZXJ5LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vZ2FsbGVyeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTBkNzc0OTAmXCIiLCJ2YXIgY29tcG9uZW50c1xudHJ5IHtcbiAgY29tcG9uZW50cyA9IHtcbiAgICB1SWNvbjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaW1wb3J0KFxuICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInV2aWV3LXVpL2NvbXBvbmVudHMvdS1pY29uL3UtaWNvblwiICovIFwiQC91dmlldy11aS9jb21wb25lbnRzL3UtaWNvbi91LWljb24udnVlXCJcbiAgICAgIClcbiAgICB9XG4gIH1cbn0gY2F0Y2ggKGUpIHtcbiAgaWYgKFxuICAgIGUubWVzc2FnZS5pbmRleE9mKFwiQ2Fubm90IGZpbmQgbW9kdWxlXCIpICE9PSAtMSAmJlxuICAgIGUubWVzc2FnZS5pbmRleE9mKFwiLnZ1ZVwiKSAhPT0gLTFcbiAgKSB7XG4gICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpXG4gICAgY29uc29sZS5lcnJvcihcIjEuIOaOkuafpee7hOS7tuWQjeensOaLvOWGmeaYr+WQpuato+ehrlwiKVxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBcIjIuIOaOkuafpee7hOS7tuaYr+WQpuespuWQiCBlYXN5Y29tIOinhOiMg++8jOaWh+aho++8mmh0dHBzOi8vdW5pYXBwLmRjbG91ZC5uZXQuY24vY29sbG9jYXRpb24vcGFnZXM/aWQ9ZWFzeWNvbVwiXG4gICAgKVxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBcIjMuIOiLpee7hOS7tuS4jeespuWQiCBlYXN5Y29tIOinhOiMg++8jOmcgOaJi+WKqOW8leWFpe+8jOW5tuWcqCBjb21wb25lbnRzIOS4reazqOWGjOivpee7hOS7tlwiXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHRocm93IGVcbiAgfVxufVxudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2dhbGxlcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vZ2FsbGVyeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcbjx2aWV3PlxyXG5cdFxyXG48c2Nyb2xsLXZpZXcgc2Nyb2xsLXggY2xhc3M9XCJiZy13aGl0ZSBuYXZcIj5cclxuICAgIDx2aWV3IGNsYXNzPVwiZmxleCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDx2aWV3IHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBjYXRlZ29yeUxpc3RcIiA6a2V5PVwiaW5kZXhcIiBAdGFwPVwidGFiU2VsZWN0XCIgOmNsYXNzPVwiJ2N1LWl0ZW0gZmxleC1zdWIgJyArIChpdGVtLmNpZD09VGFiQ3VyPyd0ZXh0LWN5YW4gY3VyJzonJylcIiA6ZGF0YS1jaWQ9XCJpdGVtLmNpZFwiPlxyXG4gICAgICAgICAgICB7e2l0ZW0udGl0bGV9fVxyXG4gICAgICAgIDwvdmlldz5cclxuICAgIDwvdmlldz5cclxuPC9zY3JvbGwtdmlldz5cclxuPGJsb2NrIHYtaWY9XCIhbG9hZEZsYWdcIj5cclxuICAgICAgPHZpZXcgOmNsYXNzPVwiWydib3R0b20nLGNzc1RyYW4/J2Nsb3NlQ3NzJzonb3BlbkNzcyddXCI+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJuYXYtYm94XCI+XHJcbiAgICAgICAgICA8dmlldyBjbGFzcz1cIm5hdi10YWJcIj5cclxuICAgICAgICAgICAgPHUtaWNvbiB2dWUtaWQ9XCIzZGIxNjUyMC01XCIgbmFtZT1cIi9zdGF0aWMvaWNvbi9iYWNrLnBuZ1wiIDpzaXplPVwiNDRcIiBAX19sPVwiX19sXCI+PC91LWljb24+XHJcbiAgICAgICAgICAgIDx0ZXh0Pui/lOWbnjwvdGV4dD48YnV0dG9uIEB0YXA9XCJmaFwiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b3BhY2l0eTowO1wiIG9wZW4tdHlwZT1cIm5hdmlnYXRlQmFja1wiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJuYXYtdGFiXCI+XHJcbiAgICAgICAgICAgIDx1LWljb24gdnVlLWlkPVwiM2RiMTY1MjAtNVwiIG5hbWU9XCIvc3RhdGljL2ljb24vc2hhcmVzLnBuZ1wiIDpzaXplPVwiNDRcIiBAX19sPVwiX19sXCI+PC91LWljb24+XHJcbiAgICAgICAgICAgIDx0ZXh0PuWIhuS6qzwvdGV4dD48YnV0dG9uIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b3BhY2l0eTowO1wiIG9wZW4tdHlwZT1cInNoYXJlXCI+PC9idXR0b24+XHJcbiAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICA8L3ZpZXc+XHJcbjwvYmxvY2s+XHJcbjx2aWV3IGNsYXNzPVwiY3UtY2FyZCBkeW5hbWljXCI+XHJcbiAgICA8dmlldyB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gcGhvdG9zXCIgOmtleT1cImluZGV4XCIgQHRhcD1cImluZm9cIiBjbGFzcz1cImN1LWl0ZW0gc2hhZG93XCIgOmRhdGEtaXRlbT1cIml0ZW1cIiBzdHlsZT1cImhlaWdodDoyNjBweDtcIj5cclxuICAgICAgICA8dmlldyBjbGFzcz1cImdyaWQgZmxleC1zdWIgY29sLTFcIj5cclxuICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJiZy1pbWcgb25seS1pbWdcIiA6c3R5bGU9XCInYmFja2dyb3VuZC1pbWFnZTp1cmwoJyArIGl0ZW0uY2FyZCArICcpO3RleHQtYWxpZ246Y2VudGVyJ1wiPlxyXG4gICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJjdS1hdmF0YXIgcm91bmQgbGdcIiA6c3R5bGU9XCInYmFja2dyb3VuZC1pbWFnZTp1cmwoJyArIGl0ZW0uYXZhdGFyICsgJyk7d2lkdGg6MTAwcHg7aGVpZ2h0OjEwMHB4O21hcmdpbi10b3A6MTAwcHgnXCI+PC92aWV3PlxyXG4gICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJjb250ZW50IGZsZXgtc3ViXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZpZXc+e3tpdGVtLm5hbWV9fTwvdmlldz5cclxuICAgICAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwidGV4dC1jb250ZW50XCI+e3tpdGVtLm1lbW99fTwvdmlldz5cclxuICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgIDwvdmlldz5cclxuPC92aWV3PlxyXG48L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG52YXIgdCA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy8xLmpzXCIpLFxyXG4gICAgZSA9IHQocmVxdWlyZShcIi4uLy4uL3V0aWxzLzIuanNcIikpLFxyXG4gICAgbiA9IHQocmVxdWlyZShcIi4uLy4uL3V0aWxzLzMuanNcIikpLFxyXG4gICAgYSA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy80LmpzXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBUYWJDdXI6IDEsXHJcbiAgICAgIGNhdGVnb3J5TGlzdDogW10sXHJcbiAgICAgIHBob3RvczogW10sXHJcbiAgICAgIG5leHRTdGFydDogMCxcclxuICAgICAgZ2dsaXN0OiBbXVxyXG4gICAgfTtcclxuICB9LFxyXG5cclxuICBjb21wb25lbnRzOiB7fSxcclxuICBwcm9wczoge30sXHJcbiAgb25Mb2FkOiBmdW5jdGlvbiAodCkge1xyXG4gICAgdmFyIGUgPSB0aGlzO1xyXG4gICAgdGhpcy5nZXRDYXRlZ29yeSgpLnRoZW4oZnVuY3Rpb24gKHQpIHtcclxuICAgICAgdmFyIG4gPSB0LmNhdGVnb3J5TGlzdDtcclxuICAgICAgZS5zZXREYXRhKHtcclxuICAgICAgICBjYXRlZ29yeUxpc3Q6IG5cclxuICAgICAgfSk7XHJcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAodCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKHQpO1xyXG4gICAgfSksIHRoaXMucHJlcGFyZURhdGEoKTtcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgIHVuaS5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiAnaHR0cHM6Ly93YWcucW1uaXkuY24vYXBpLnBocCcsXHJcbiAgICAgIGRhdGE6IHt9LFxyXG4gICAgICBoZWFkZXI6IHtcclxuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIC8vIOm7mOiupOWAvFxyXG5cclxuICAgICAgfSxcclxuXHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICAgIHRoYXQuc2V0RGF0YSh7XHJcbiAgICAgICAgICBnZ2xpc3Q6IHJlcy5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHt9LFxyXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge30sXHJcbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7fSxcclxuICBvblVubG9hZDogZnVuY3Rpb24gKCkge30sXHJcbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIG5leHRTdGFydDogMFxyXG4gICAgfSksIHRoaXMucHJlcGFyZURhdGEoKTtcclxuICB9LFxyXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB0ID0gdGhpcyxcclxuICAgICAgICBlID0gdGhpcy5UYWJDdXIsXHJcbiAgICAgICAgbiA9IHRoaXMubmV4dFN0YXJ0O1xyXG4gICAgdGhpcy5nZXRQaG90b3MoZSwgbikudGhlbihmdW5jdGlvbiAoZSkge1xyXG4gICAgICB0LnNldERhdGEoe1xyXG4gICAgICAgIG5leHRTdGFydDogZS5uZXh0U3RhcnQsXHJcbiAgICAgICAgcGhvdG9zOiB0LnBob3Rvcy5jb25jYXQoZS5saXN0KVxyXG4gICAgICB9KTtcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IodCk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbiAoKSB7fSxcclxuICBtZXRob2RzOiB7XHJcblx0ICBmaDogZnVuY3Rpb24gKCkge1xyXG5cdCAgICB1bmkubmF2aWdhdGVCYWNrKCk7XHJcblx0ICB9LFxyXG4gICAgcHJlcGFyZURhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHQgPSB0aGlzLFxyXG4gICAgICAgICAgZSA9IHRoaXMuVGFiQ3VyLFxyXG4gICAgICAgICAgbiA9IHRoaXMubmV4dFN0YXJ0O1xyXG4gICAgICB0aGlzLmdldFBob3RvcyhlLCBuKS50aGVuKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS5saXN0KSwgdC5zZXREYXRhKHtcclxuICAgICAgICAgIG5leHRTdGFydDogZS5uZXh0U3RhcnQsXHJcbiAgICAgICAgICBwaG90b3M6IGUubGlzdFxyXG4gICAgICAgIH0pLCB1bmkuc3RvcFB1bGxEb3duUmVmcmVzaCgpO1xyXG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IodCksIHVuaS5zdG9wUHVsbERvd25SZWZyZXNoKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGdldENhdGVnb3J5OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciB0ID0gKDAsIG4uZGVmYXVsdCkoZS5kZWZhdWx0Lm1hcmsoZnVuY3Rpb24gdCgpIHtcclxuICAgICAgICByZXR1cm4gZS5kZWZhdWx0LndyYXAoZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgIGZvciAoOzspIHN3aXRjaCAodC5wcmV2ID0gdC5uZXh0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICByZXR1cm4gdC5uZXh0ID0gMiwgbmV3IFByb21pc2UoZnVuY3Rpb24gKHQsIGUpIHtcclxuICAgICAgICAgICAgICAgIGEucmVxdWVzdChcImh0dHBzOi8vc3BhcmUubWFpYmFhcHAuY29tL2Jicy9uZXdVZ2MvY2F0ZWdvcnkvbGlzdC8yXCIpLnRoZW4oZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICAgICAgICAgICAgMjAwID09IG4uc3RhdHVzQ29kZSAmJiBcInJlcXVlc3Q6b2tcIiA9PSBuLmVyck1zZyAmJiAwID09IG4uZGF0YS5jb2RlICYmIFwic3VjY2Vzc1wiID09IG4uZGF0YS5tc2cgPyB0KG4uZGF0YS5kYXRhKSA6IGUoXCLojrflj5bliIbnsbvlpLHotKVcIik7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICAgICAgICBlKFwi6I635Y+W5YiG57G75aSx6LSlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHQuYWJydXB0KFwicmV0dXJuXCIsIHQuc2VudCk7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcclxuICAgICAgICAgICAgICByZXR1cm4gdC5zdG9wKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdCk7XHJcbiAgICAgIH0pKTtcclxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICB9O1xyXG4gICAgfSgpLFxyXG4gICAgZ2V0UGhvdG9zOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciB0ID0gKDAsIG4uZGVmYXVsdCkoZS5kZWZhdWx0Lm1hcmsoZnVuY3Rpb24gdChuLCByKSB7XHJcbiAgICAgICAgcmV0dXJuIGUuZGVmYXVsdC53cmFwKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICBmb3IgKDs7KSBzd2l0Y2ggKHQucHJldiA9IHQubmV4dCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHQubmV4dCA9IDIsIG5ldyBQcm9taXNlKGZ1bmN0aW9uICh0LCBlKSB7XHJcbiAgICAgICAgICAgICAgICBhLnJlcXVlc3QoXCJodHRwczovL3NwYXJlLm1haWJhYXBwLmNvbS9iYnMvbmV3VWdjL2NhdGVnb3J5L2luZm8vMi9cIiArIG4gKyBcIi9cIiArIHIgKyBcIi9cIiArIChyICsgMTcpKS50aGVuKGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgICAgICAgICAgIDIwMCA9PSBuLnN0YXR1c0NvZGUgJiYgXCJyZXF1ZXN0Om9rXCIgPT0gbi5lcnJNc2cgJiYgMCA9PSBuLmRhdGEuY29kZSAmJiBcInN1Y2Nlc3NcIiA9PSBuLmRhdGEubXNnID8gdChuLmRhdGEuZGF0YSkgOiBlKFwi6I635Y+W5Zu+54mH5YiX6KGo5aSx6LSlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgICAgICAgZShcIuiOt+WPluWbvueJh+WIl+ihqOWksei0pVwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgIHJldHVybiB0LmFicnVwdChcInJldHVyblwiLCB0LnNlbnQpO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICBjYXNlIFwiZW5kXCI6XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHQuc3RvcCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIHQpO1xyXG4gICAgICB9KSk7XHJcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZSwgbikge1xyXG4gICAgICAgIHJldHVybiB0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgIH07XHJcbiAgICB9KCksXHJcbiAgICB0YWJTZWxlY3Q6IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgIHZhciBlID0gdC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY2lkO1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFRhYkN1cjogZSxcclxuICAgICAgICBuZXh0U3RhcnQ6IDBcclxuICAgICAgfSksIHRoaXMucHJlcGFyZURhdGEoKTtcclxuICAgIH0sXHJcbiAgICBpbmZvOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICB2YXIgZSA9IHQuY3VycmVudFRhcmdldC5kYXRhc2V0Lml0ZW07XHJcbiAgICAgIHVuaS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6IFwiLi4vcGhvdG8vcGhvdG8/aXRlbT1cIiArIEpTT04uc3RyaW5naWZ5KGUpLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICh0KSB7fSxcclxuICAgICAgICBmYWlsOiBmdW5jdGlvbiAodCkge30sXHJcbiAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICh0KSB7fVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuXHQuYm90dG9tIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdGxlZnQ6IDQlO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHR3aWR0aDogOTIlO1xyXG5cdFx0aGVpZ2h0OiA1MnB4O1xyXG5cdFx0Ym94LXNoYWRvdzogMCAwcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOTQpO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNDlweDtcclxuXHRcdHotaW5kZXg6IDEwO1xyXG5cdFx0b3BhY2l0eTogMC44O1xyXG5cdFx0Lm51bXtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR0b3A6IC0yMHJweDtcclxuXHRcdFx0dG9wOiAtNzBycHg7XHJcblx0XHRcdGxlZnQ6IDQ0JTtcclxuXHRcdFx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjYpO1xyXG5cdFx0XHRjb2xvcjogI0ZGRjtcclxuXHRcdFx0cGFkZGluZzogNHJweCAyMHJweDtcclxuXHRcdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAzNnB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Lm5hdi10YWIge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDUycHg7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRjb2xvcjogI0Q4RDhEODtcclxuXHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cdC5uYXYtYm94IHtcclxuXHRcdC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0fVxyXG5cclxuXHQub3BlbkNzcyB7XHJcblx0XHRhbmltYXRpb24tbmFtZTogb3BlbkxpbmVhcjtcclxuXHRcdGFuaW1hdGlvbi1kdXJhdGlvbjogMC44cztcclxuXHRcdGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcblx0XHRib3R0b206IDQwcHg7XHJcblx0fVxyXG5cclxuXHRAa2V5ZnJhbWVzIG9wZW5MaW5lYXIge1xyXG5cdFx0MCUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOTJweCk7XHJcblx0XHR9XHJcblx0XHQxMDAlIHtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuY2xvc2VDc3Mge1xyXG5cdFx0YW5pbWF0aW9uLW5hbWU6IGNsb3NlTGluZWFyO1xyXG5cdFx0YW5pbWF0aW9uLWR1cmF0aW9uOiAwLjhzO1xyXG5cdFx0YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuXHRcdGJvdHRvbTogLTUycHg7XHJcblx0fVxyXG5cclxuXHRAa2V5ZnJhbWVzIGNsb3NlTGluZWFyIHtcclxuXHRcdDAlIHtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC05MnB4KTtcclxuXHRcdH1cclxuXHRcdDEwMCUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0LnUtaW5kaWNhdG9yLWl0ZW0tbnVtYmVyIHtcclxuXHRcdHBhZGRpbmc6IDZycHggMTZycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwMHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjZycHg7XHJcblx0XHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG5cdH1cclxuPC9zdHlsZT4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2dhbGxlcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2dhbGxlcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY1NTUyOTY2NTc5NFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9