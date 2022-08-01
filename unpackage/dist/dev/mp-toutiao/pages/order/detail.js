(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/order/detail"],{

/***/ 188:
/*!***********************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/main.js?{"page":"pages%2Forder%2Fdetail"} ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _detail = _interopRequireDefault(__webpack_require__(/*! ./pages/order/detail.vue */ 189));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 189:
/*!****************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/order/detail.vue ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_57d42baa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=57d42baa& */ 190);
/* harmony import */ var _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js& */ 192);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.vue?vue&type=style&index=0&lang=scss& */ 194);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_57d42baa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_57d42baa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _detail_vue_vue_type_template_id_57d42baa___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/order/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 190:
/*!***********************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/order/detail.vue?vue&type=template&id=57d42baa& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_57d42baa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=template&id=57d42baa& */ 191);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_57d42baa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_57d42baa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_57d42baa___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_57d42baa___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 191:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/order/detail.vue?vue&type=template&id=57d42baa& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    uNavbar: function() {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-navbar/u-navbar */ "uview-ui/components/u-navbar/u-navbar").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-navbar/u-navbar.vue */ 421))
    },
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
  var g0 = _vm.$u.timeFormat(_vm.order.time, "yyyy-mm-dd hh:MM:ss")

  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      _vm.adShow = false
    }

    _vm.e1 = function($event) {
      _vm.adShow = false
    }
  }

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 192:
/*!*****************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/order/detail.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=script&lang=js& */ 193);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 193:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/order/detail.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uniCloud, uni, wx) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var models = function models() {__webpack_require__.e(/*! require.ensure | components/model/model */ "components/model/model").then((function () {return resolve(__webpack_require__(/*! @/components/model/model.vue */ 414));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =




























































{
  components: {
    models: models },

  data: function data() {
    return {
      navbarBackground: {
        background: 'rgba(0,0,0,0)' },

      order: {},
      adShow: false };

  },
  onLoad: function onLoad(_ref) {var id = _ref.id;
    this.getOrder(id);
  },
  methods: {
    getOrder: function getOrder(id) {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var detail;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                  uniCloud.callFunction({
                    name: 'query_map',
                    data: {
                      dbName: "wx_order",
                      id: id } }));case 2:detail = _context.sent;


                _this.order = detail.result;case 4:case "end":return _context.stop();}}}, _callee);}))();
    },
    previewImage: function previewImage(image) {
      uni.previewImage({
        current: image,
        urls: [image] });

    },
    downClick: function downClick(url) {
      var that = this;

      var extension = url.substring(url.lastIndexOf('.') + 1);
      var fileName = new Date().valueOf();
      uni.downloadFile({
        url: url,
        filePath: wx.env.USER_DATA_PATH + '/' + fileName + '.' + extension,
        success: function success(res) {
          var benUrl = res.filePath;
          //图片保存到本地相册
          uni.saveImageToPhotosAlbum({
            filePath: benUrl,
            //授权成功，保存图片
            success: function success(data) {
              uni.hideLoading();
              that.adShow = true;
            },
            //授权失败
            fail: function fail(err) {
              if (err.errMsg) {
                //重新授权弹框确认
                uni.showModal({
                  title: '提示',
                  content: '无权限，请打开下载权限后再试！',
                  showCancel: false,
                  success: function success(res) {
                    if (res.confirm) {
                      //重新授权弹框用户点击了确定
                      uni.openSetting({
                        //进入小程序授权设置页面
                        success: function success(settingdata) {
                          if (settingdata.authSetting['scope.writePhotosAlbum']) {
                            //用户打开了保存图片授权开关
                            uni.saveImageToPhotosAlbum({
                              filePath: benUrl,
                              success: function success(data) {
                                uni.hideLoading();
                                that.adShow = true;
                              } });

                          } else {
                            //用户未打开保存图片到相册的授权开关
                            uni.showModal({
                              title: '温馨提示',
                              content: '授权失败，请稍后重新获取',
                              showCancel: false });

                          }
                        } });

                    }
                  } });

              }
              uni.hideLoading();
            } });

        },
        fail: function fail(error) {
          console.log(error);
        } });

    } },

  onShareAppMessage: function onShareAppMessage(res) {
    var that = this;
    setTimeout(function () {
      that.adShow = false;
    }, 2000);
    return {
      title: '送你一张超级好看的壁纸~',
      imageUrl: that.order.image,
      path: '/pages/index/index?userId=' + that.vuex_user._id + '&detailId=' + that.order.cover_id + '&index=' + that.order.current };

  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 9)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 194:
/*!**************************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/order/detail.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=style&index=0&lang=scss& */ 195);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 195:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/order/detail.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[188,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDov5aOBemhp5bqT5bCP56iL5bqPL3dhbGxwYXBlci9wYWdlcy9vcmRlci9kZXRhaWwudnVlP2JlNzgiLCJ3ZWJwYWNrOi8vL0Q6L+WjgXpoaeW6k+Wwj+eoi+W6jy93YWxscGFwZXIvcGFnZXMvb3JkZXIvZGV0YWlsLnZ1ZT83MzJiIiwid2VicGFjazovLy9EOi/lo4F6aGnlupPlsI/nqIvluo8vd2FsbHBhcGVyL3BhZ2VzL29yZGVyL2RldGFpbC52dWU/YzZiOSIsIndlYnBhY2s6Ly8vRDov5aOBemhp5bqT5bCP56iL5bqPL3dhbGxwYXBlci9wYWdlcy9vcmRlci9kZXRhaWwudnVlP2I4MjMiLCJ1bmktYXBwOi8vL3BhZ2VzL29yZGVyL2RldGFpbC52dWUiLCJ3ZWJwYWNrOi8vL0Q6L+WjgXpoaeW6k+Wwj+eoi+W6jy93YWxscGFwZXIvcGFnZXMvb3JkZXIvZGV0YWlsLnZ1ZT85MzY0Iiwid2VicGFjazovLy9EOi/lo4F6aGnlupPlsI/nqIvluo8vd2FsbHBhcGVyL3BhZ2VzL29yZGVyL2RldGFpbC52dWU/MzM0ZiJdLCJuYW1lcyI6WyJ3eCIsIl9fd2VicGFja19yZXF1aXJlX1VOSV9NUF9QTFVHSU5fXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJjcmVhdGVQYWdlIiwiUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztzREFBQTtBQUNBO0FBQ0EsK0YsNkZBRm1CQSxFQUFFLENBQUNDLGlDQUFILEdBQXVDQyxtQkFBdkM7QUFHbkJDLFVBQVUsQ0FBQ0MsZUFBRCxDQUFWLEM7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUg7QUFDbkg7QUFDMEQ7QUFDTDtBQUNjOzs7QUFHbkU7QUFDa007QUFDbE0sZ0JBQWdCLDRNQUFVO0FBQzFCLEVBQUUsNEVBQU07QUFDUixFQUFFLGlGQUFNO0FBQ1IsRUFBRSwwRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxRkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtTkFFTjtBQUNQLEtBQUs7QUFDTDtBQUNBLGFBQWEsdU1BRU47QUFDUDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUFBO0FBQUE7QUFBQTtBQUE4dkIsQ0FBZ0IsMndCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzZEbHhCO0FBQ0E7QUFDQSxrQkFEQSxFQURBOztBQUlBLE1BSkEsa0JBSUE7QUFDQTtBQUNBO0FBQ0EsbUNBREEsRUFEQTs7QUFJQSxlQUpBO0FBS0EsbUJBTEE7O0FBT0EsR0FaQTtBQWFBLFFBYkEsd0JBYUE7QUFDQTtBQUNBLEdBZkE7QUFnQkE7QUFDQSxZQURBLG9CQUNBLEVBREEsRUFDQTtBQUNBO0FBQ0EscUNBREE7QUFFQTtBQUNBLHdDQURBO0FBRUEsNEJBRkEsRUFGQSxHQURBLFNBQ0EsTUFEQTs7O0FBUUEsNENBUkE7QUFTQSxLQVZBO0FBV0EsZ0JBWEEsd0JBV0EsS0FYQSxFQVdBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLHFCQUZBOztBQUlBLEtBaEJBO0FBaUJBLGFBakJBLHFCQWlCQSxHQWpCQSxFQWlCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQURBO0FBRUEsMEVBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQU5BO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQURBO0FBRUEsNENBRkE7QUFHQSxtQ0FIQTtBQUlBLHlCQUpBLG1CQUlBLEdBSkEsRUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBRkEsbUJBRUEsV0FGQSxFQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFMQTs7QUFPQSwyQkFUQSxNQVNBO0FBQ0E7QUFDQTtBQUNBLDJDQURBO0FBRUEscURBRkE7QUFHQSwrQ0FIQTs7QUFLQTtBQUNBLHlCQXBCQTs7QUFzQkE7QUFDQSxtQkE5QkE7O0FBZ0NBO0FBQ0E7QUFDQSxhQTdDQTs7QUErQ0EsU0FyREE7QUFzREE7QUFDQTtBQUNBLFNBeERBOztBQTBEQSxLQWhGQSxFQWhCQTs7QUFrR0EsbUJBbEdBLDZCQWtHQSxHQWxHQSxFQWtHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBRkEsRUFFQSxJQUZBO0FBR0E7QUFDQSwyQkFEQTtBQUVBLGdDQUZBO0FBR0EsbUlBSEE7O0FBS0EsR0E1R0EsRTs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQUE7QUFBQTtBQUFxNkMsQ0FBZ0IsczNDQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBejdDO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoicGFnZXMvb3JkZXIvZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO3d4Ll9fd2VicGFja19yZXF1aXJlX1VOSV9NUF9QTFVHSU5fXyA9IF9fd2VicGFja19yZXF1aXJlX187XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvb3JkZXIvZGV0YWlsLnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2RldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTdkNDJiYWEmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL29yZGVyL2RldGFpbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2RldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTdkNDJiYWEmXCIiLCJ2YXIgY29tcG9uZW50c1xudHJ5IHtcbiAgY29tcG9uZW50cyA9IHtcbiAgICB1TmF2YmFyOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwidXZpZXctdWkvY29tcG9uZW50cy91LW5hdmJhci91LW5hdmJhclwiICovIFwiQC91dmlldy11aS9jb21wb25lbnRzL3UtbmF2YmFyL3UtbmF2YmFyLnZ1ZVwiXG4gICAgICApXG4gICAgfSxcbiAgICB1SWNvbjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaW1wb3J0KFxuICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInV2aWV3LXVpL2NvbXBvbmVudHMvdS1pY29uL3UtaWNvblwiICovIFwiQC91dmlldy11aS9jb21wb25lbnRzL3UtaWNvbi91LWljb24udnVlXCJcbiAgICAgIClcbiAgICB9XG4gIH1cbn0gY2F0Y2ggKGUpIHtcbiAgaWYgKFxuICAgIGUubWVzc2FnZS5pbmRleE9mKFwiQ2Fubm90IGZpbmQgbW9kdWxlXCIpICE9PSAtMSAmJlxuICAgIGUubWVzc2FnZS5pbmRleE9mKFwiLnZ1ZVwiKSAhPT0gLTFcbiAgKSB7XG4gICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpXG4gICAgY29uc29sZS5lcnJvcihcIjEuIOaOkuafpee7hOS7tuWQjeensOaLvOWGmeaYr+WQpuato+ehrlwiKVxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBcIjIuIOaOkuafpee7hOS7tuaYr+WQpuespuWQiCBlYXN5Y29tIOinhOiMg++8jOaWh+aho++8mmh0dHBzOi8vdW5pYXBwLmRjbG91ZC5uZXQuY24vY29sbG9jYXRpb24vcGFnZXM/aWQ9ZWFzeWNvbVwiXG4gICAgKVxuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBcIjMuIOiLpee7hOS7tuS4jeespuWQiCBlYXN5Y29tIOinhOiMg++8jOmcgOaJi+WKqOW8leWFpe+8jOW5tuWcqCBjb21wb25lbnRzIOS4reazqOWGjOivpee7hOS7tlwiXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHRocm93IGVcbiAgfVxufVxudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHZhciBnMCA9IF92bS4kdS50aW1lRm9ybWF0KF92bS5vcmRlci50aW1lLCBcInl5eXktbW0tZGQgaGg6TU06c3NcIilcblxuICBpZiAoIV92bS5faXNNb3VudGVkKSB7XG4gICAgX3ZtLmUwID0gZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICBfdm0uYWRTaG93ID0gZmFsc2VcbiAgICB9XG5cbiAgICBfdm0uZTEgPSBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgIF92bS5hZFNob3cgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIF92bS4kbXAuZGF0YSA9IE9iamVjdC5hc3NpZ24oXG4gICAge30sXG4gICAge1xuICAgICAgJHJvb3Q6IHtcbiAgICAgICAgZzA6IGcwXG4gICAgICB9XG4gICAgfVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3PlxyXG5cdFx0PHUtbmF2YmFyXHJcblx0XHQ6aXMtYmFjaz1cInRydWVcIiBcclxuXHRcdHRpdGxlPVwiIFwiIFxyXG5cdFx0dGl0bGUtd2lkdGg9XCIzMjVcIiBcclxuXHRcdHRpdGxlLWNvbG9yPVwiIzMzMzMzM1wiIFxyXG5cdFx0dGl0bGUtc2l6ZT1cIjI4XCIgXHJcblx0XHQ6YmFja2dyb3VuZD1cIm5hdmJhckJhY2tncm91bmRcIlxyXG5cdFx0OmJvcmRlci1ib3R0b209XCJmYWxzZVwiXHJcblx0XHQ+PC91LW5hdmJhcj5cclxuXHRcdDx2aWV3IGNsYXNzPVwiYmdcIj48L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInRvcCB1LXAtbC00MCB1LXAtdC0xMFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlXCI+5LiL6L295oiQ5YqfPC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImZfdGl0bGUgdS1wLXQtMTAgdS1wLWwtNVwiPuWjgee6uC/lpLTlg4/lt7LkuIvovb3miJDlip88L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImthcGlhbiB1LW0tNDBcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJiZy13aGl0ZSB1LWZsZXggdS1yb3ctY2VudGVyIHUtcC10LTMwXCIgIHN0eWxlPVwiYm9yZGVyLXJhZGl1czogMjRycHggMjRycHggMCAwO1wiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGFiXCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cIm9yZGVyLmltYWdlXCIgc3R5bGU9XCJ3aWR0aDogMjE1cnB4O2hlaWdodDogMzUwcnB4O1wiIG1vZGU9XCJhc3BlY3RGaWxsXCIgQGNsaWNrPVwicHJldmlld0ltYWdlKG9yZGVyLmltYWdlKVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImRvd25cIiBAY2xpY2s9XCJkb3duQ2xpY2sob3JkZXIuaW1hZ2UpXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1mbGV4IHUtcm93LWNlbnRlciB1LWNvbC1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dS1pY29uIG5hbWU9XCIvc3RhdGljL2ljb24vZHVpaHVhbi5wbmdcIiA6c2l6ZT1cIjQyXCI+PC91LWljb24+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy90YWJzLnBuZ1wiIHN0eWxlPVwid2lkdGg6IDEwMCU7aGVpZ2h0OiAzMnJweDtkaXNwbGF5OiBibG9jaztcIj48L2ltYWdlPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJnLXdoaXRlIHUtcC1sLTQwIHUtcC1yLTQwIHUtcC10LTIwIHUtcC1iLTIwXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LWZsZXggdS1yb3ctYmV0d2VlbiB1LXAtdC0yMCB1LXAtYi0yMFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJcIj7miaPpmaTnp6/liIY8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtdGlwcy1jb2xvciB1LWZvbnQtMTJcIj57e29yZGVyLmludGVncmFsfX3np6/liIY8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidS1mbGV4IHUtcm93LWJldHdlZW4gdS1wLXQtMjAgdS1wLWItMjBcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCI+5LiL6L295pe26Ze0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LXRpcHMtY29sb3IgdS1mb250LTEyXCI+e3skdS50aW1lRm9ybWF0KG9yZGVyLnRpbWUsICd5eXl5LW1tLWRkIGhoOk1NOnNzJyl9fTwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy90YWJzLnBuZ1wiIHN0eWxlPVwid2lkdGg6IDEwMCU7aGVpZ2h0OiAzMnJweDtkaXNwbGF5OiBibG9jaztcIj48L2ltYWdlPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInpodXlpIGJnLXdoaXRlIHUtcC1sLTQwIHUtcC1yLTQwIHUtcC1iLTQwIHUtcC10LTIwXCIgc3R5bGU9XCJib3JkZXItcmFkaXVzOiAwIDAgMjRycHggMjRycHg7XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LW1haW4tY29sb3IgdS10ZXh0LWNlbnRlciB1LXAtYi0xMFwiPuazqOaEj+S6i+mhuTwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtdGlwcy1jb2xvciB1LWZvbnQtMTJcIj7kuIvovb3miJDlip/ml7blsIblkIzmraXmiaPpmaTmiYDpnIDnp6/liIbjgII8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LXRpcHMtY29sb3IgdS1mb250LTEyXCI+5LiL6L295oiQ5Yqf5ZCO5bCG6Ieq5Yqo5L+d5a2Y5Zu+54mH5Yiw55u45YaM44CCPC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidS10aXBzLWNvbG9yIHUtZm9udC0xMlwiPumcgOimgeiHquihjOWwhuWbvueJh+iuvue9ruS4uuWjgee6uOaIluiAheWktOWDj+OAgjwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtdGlwcy1jb2xvciB1LWZvbnQtMTJcIj7kuIvovb3ov4fnmoTlm77niYflho3mrKHkuIvovb3kuI3miaPpmaTnp6/liIbjgII8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdFx0PG1vZGVscyB2LXNob3c9XCJhZFNob3dcIlxyXG5cdFx0OmF1dGhvcml6ZT1cImZhbHNlXCIgXHJcblx0XHQ6YWQ9XCJ0cnVlXCIgXHJcblx0XHR0aXRsZT1cIuW3suaIkOWKn+S/neWtmOWIsOebuOWGjO+8jOWIq+W/mOS6huWIhuS6q+e7meaci+WPi+WTpu+8gVwiXHJcblx0XHRidG5UZXh0PVwi5YiG5Lqr57uZ5aW95Y+LXCIgXHJcblx0XHRjbG9zZVRleHQ9XCLmmoLml7bkuI3nlKhcIiBcclxuXHRcdEBzYXZlPVwiYWRTaG93ID0gZmFsc2VcIlxyXG5cdFx0QGNsb3NlPVwiYWRTaG93ID0gZmFsc2VcIj48L21vZGVscz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBtb2RlbHMgZnJvbSAnQC9jb21wb25lbnRzL21vZGVsL21vZGVsLnZ1ZSdcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdG1vZGVsc1xyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0bmF2YmFyQmFja2dyb3VuZDoge1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogJ3JnYmEoMCwwLDAsMCknXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRvcmRlcjoge30sXHJcblx0XHRcdFx0YWRTaG93OiBmYWxzZSxcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZCh7aWR9KSB7XHJcblx0XHRcdHRoaXMuZ2V0T3JkZXIoaWQpXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRhc3luYyBnZXRPcmRlcihpZCl7XHJcblx0XHRcdFx0bGV0IGRldGFpbCA9IGF3YWl0IHVuaUNsb3VkLmNhbGxGdW5jdGlvbih7XHJcblx0XHRcdFx0XHRuYW1lOiAncXVlcnlfbWFwJyxcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0ZGJOYW1lOiBcInd4X29yZGVyXCIsXHJcblx0XHRcdFx0XHRcdGlkOiBpZCxcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHRoaXMub3JkZXIgPSBkZXRhaWwucmVzdWx0XHJcblx0XHRcdH0sXHJcblx0XHRcdHByZXZpZXdJbWFnZShpbWFnZSl7XHJcblx0XHRcdFx0dW5pLnByZXZpZXdJbWFnZSh7XHJcblx0XHRcdFx0XHRjdXJyZW50OiBpbWFnZSxcclxuXHRcdFx0XHRcdHVybHM6IFtpbWFnZV1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkb3duQ2xpY2sodXJsKXtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR2YXIgZXh0ZW5zaW9uID0gdXJsLnN1YnN0cmluZyh1cmwubGFzdEluZGV4T2YoJy4nKSArIDEpXHJcblx0XHRcdFx0bGV0IGZpbGVOYW1lID0gbmV3IERhdGUoKS52YWx1ZU9mKCk7XHJcblx0XHRcdFx0dW5pLmRvd25sb2FkRmlsZSh7XHJcblx0XHRcdFx0XHR1cmw6IHVybCxcclxuXHRcdFx0XHRcdGZpbGVQYXRoOiB3eC5lbnYuVVNFUl9EQVRBX1BBVEggKyAnLycgKyBmaWxlTmFtZSArICcuJyArIGV4dGVuc2lvbixcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0dmFyIGJlblVybCA9IHJlcy5maWxlUGF0aFxyXG5cdFx0XHRcdFx0XHQvL+WbvueJh+S/neWtmOWIsOacrOWcsOebuOWGjFxyXG5cdFx0XHRcdFx0XHR1bmkuc2F2ZUltYWdlVG9QaG90b3NBbGJ1bSh7XHJcblx0XHRcdFx0XHRcdFx0ZmlsZVBhdGg6IGJlblVybCxcclxuXHRcdFx0XHRcdFx0XHQvL+aOiOadg+aIkOWKn++8jOS/neWtmOWbvueJh1xyXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LmFkU2hvdyA9IHRydWVcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdC8v5o6I5p2D5aSx6LSlXHJcblx0XHRcdFx0XHRcdFx0ZmFpbDogZnVuY3Rpb24oZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoZXJyLmVyck1zZykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvL+mHjeaWsOaOiOadg+W8ueahhuehruiupFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+aPkOekuicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJ+aXoOadg+mZkO+8jOivt+aJk+W8gOS4i+i9veadg+mZkOWQjuWGjeivle+8gScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChyZXMuY29uZmlybSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvL+mHjeaWsOaOiOadg+W8ueahhueUqOaIt+eCueWHu+S6huehruWumlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkub3BlblNldHRpbmcoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8v6L+b5YWl5bCP56iL5bqP5o6I5p2D6K6+572u6aG16Z2iXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzcyhzZXR0aW5nZGF0YSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHNldHRpbmdkYXRhLmF1dGhTZXR0aW5nWydzY29wZS53cml0ZVBob3Rvc0FsYnVtJ10pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly/nlKjmiLfmiZPlvIDkuobkv53lrZjlm77niYfmjojmnYPlvIDlhbNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNhdmVJbWFnZVRvUGhvdG9zQWxidW0oe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGVQYXRoOiBiZW5VcmwsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuYWRTaG93ID0gdHJ1ZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvL+eUqOaIt+acquaJk+W8gOS/neWtmOWbvueJh+WIsOebuOWGjOeahOaOiOadg+W8gOWFs1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+a4qemmqOaPkOekuicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJ+aOiOadg+Wksei0pe+8jOivt+eojeWQjumHjeaWsOiOt+WPlicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKClcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZhaWw6IChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25TaGFyZUFwcE1lc3NhZ2UocmVzKSB7XHJcblx0XHRcdHZhciB0aGF0ID0gdGhpc1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0dGhhdC5hZFNob3cgPSBmYWxzZVxyXG5cdFx0XHR9LDIwMDApXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dGl0bGU6ICfpgIHkvaDkuIDlvKDotoXnuqflpb3nnIvnmoTlo4Hnurh+JyxcclxuXHRcdFx0XHRpbWFnZVVybDogdGhhdC5vcmRlci5pbWFnZSxcclxuXHRcdFx0XHRwYXRoOiAnL3BhZ2VzL2luZGV4L2luZGV4P3VzZXJJZD0nK3RoYXQudnVleF91c2VyLl9pZCsnJmRldGFpbElkPScrdGhhdC5vcmRlci5jb3Zlcl9pZCsnJmluZGV4PScrdGhhdC5vcmRlci5jdXJyZW50XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5cdC5iZ3tcclxuXHRcdHdpZHRoOiAxMDB2dztcclxuXHRcdGhlaWdodDogNjB2aDtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjRjhEMjQ2LCAjRjhEMjQ2LCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHRvcDogMDtcclxuXHR9XHJcblx0LnRhYntcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdG1hcmdpbi1yaWdodDogMTVycHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxNXJweDtcclxuXHRcdGltYWdle1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAxNnJweDtcclxuXHRcdH1cclxuXHRcdC5kb3due1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRoZWlnaHQ6IDUwcnB4O1xyXG5cdFx0XHRib3R0b206IDEwcnB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMzgpO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAwIDAgMTZycHggMTZycHg7XHJcblx0XHR9XHJcblx0fVxyXG5cdC50b3B7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHQudGl0bGV7XHJcblx0XHRcdGZvbnQtc2l6ZTogMjJweDtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDU1MDtcclxuXHRcdH1cclxuXHR9XHJcblx0LmthcGlhbntcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDI0cnB4O1xyXG5cdFx0Ym94LXNoYWRvdzogMHB4IDlweCAxOHB4ICNFOEU4RTg7XHJcblx0fVxyXG5cdC5iZy13aGl0ZXtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cdC56aHV5aXtcclxuXHRcdGxpbmUtaGVpZ2h0OiA0OHJweDtcclxuXHR9XHJcbjwvc3R5bGU+XHJcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vZGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IS4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY1NTUyOTY2NTk2MlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9