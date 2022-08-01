(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/system/user/userList"],{

/***/ 220:
/*!*********************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/main.js?{"page":"pages%2Fsystem%2Fuser%2FuserList"} ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _userList = _interopRequireDefault(__webpack_require__(/*! ./pages/system/user/userList.vue */ 221));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_userList.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 221:
/*!************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/system/user/userList.vue ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _userList_vue_vue_type_template_id_0ad5cb34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userList.vue?vue&type=template&id=0ad5cb34& */ 222);
/* harmony import */ var _userList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userList.vue?vue&type=script&lang=js& */ 224);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _userList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _userList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _userList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userList.vue?vue&type=style&index=0&lang=scss& */ 226);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _userList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _userList_vue_vue_type_template_id_0ad5cb34___WEBPACK_IMPORTED_MODULE_0__["render"],
  _userList_vue_vue_type_template_id_0ad5cb34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _userList_vue_vue_type_template_id_0ad5cb34___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/system/user/userList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 222:
/*!*******************************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/system/user/userList.vue?vue&type=template&id=0ad5cb34& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_userList_vue_vue_type_template_id_0ad5cb34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./userList.vue?vue&type=template&id=0ad5cb34& */ 223);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_userList_vue_vue_type_template_id_0ad5cb34___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_userList_vue_vue_type_template_id_0ad5cb34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_userList_vue_vue_type_template_id_0ad5cb34___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_userList_vue_vue_type_template_id_0ad5cb34___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 223:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/system/user/userList.vue?vue&type=template&id=0ad5cb34& ***!
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
    uTabs: function() {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-tabs/u-tabs */ "uview-ui/components/u-tabs/u-tabs").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-tabs/u-tabs.vue */ 509))
    },
    uLoadmore: function() {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-loadmore/u-loadmore */ "uview-ui/components/u-loadmore/u-loadmore").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-loadmore/u-loadmore.vue */ 400))
    },
    uActionSheet: function() {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-action-sheet/u-action-sheet */ "uview-ui/components/u-action-sheet/u-action-sheet").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-action-sheet/u-action-sheet.vue */ 442))
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

/***/ 224:
/*!*************************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/system/user/userList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_userList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./userList.vue?vue&type=script&lang=js& */ 225);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_userList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_userList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_userList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_userList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_userList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 225:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/system/user/userList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uniCloud, uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} //
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
var _default =
{
  data: function data() {
    return {
      tagCurrent: 0,
      tagList: [{
        name: '正常' },
      {
        name: '封禁' }],

      sheetList: [],
      userId: '',
      // 用户列表
      userList: [],
      sheetShow: false,
      // 无数据
      noData: false,
      // 分页
      pageIndex: 0,
      loadStatus: 'loadmore' };

  },
  onLoad: function onLoad() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var that;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              that = _this;_context.next = 3;return (
                that.getUserList(1));case 3:case "end":return _context.stop();}}}, _callee);}))();
  },
  methods: {
    getUserList: function getUserList(on) {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var that, newList, filter, list;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                that = _this2;
                that.loadStatus = 'loading';
                newList = that.userList;
                if (on == 1) {
                  that.userList = [];
                  newList = [];
                  that.pageIndex = 0;
                }

                that.pageIndex = that.pageIndex + 1;
                filter = {};
                if (that.tagCurrent == 1) filter = { 'status': 2 };else
                filter = { 'status': 1 };_context2.next = 9;return (
                  uniCloud.callFunction({
                    name: 'query_list',
                    data: {
                      dbName: "wx_user",
                      filter: filter,
                      order: {
                        name: 'time',
                        type: 'desc' },

                      pageIndex: that.pageIndex,
                      pageSize: 15 } }));case 9:list = _context2.sent;



                if (list.result.hasMore) that.loadStatus = 'loadmore';else
                that.loadStatus = 'nomore';

                newList = newList.concat(list.result.data);
                that.userList = newList;

                if (that.userList.length == 0) that.noData = true;else
                that.noData = false;case 14:case "end":return _context2.stop();}}}, _callee2);}))();
    },
    cateClick: function cateClick(e) {
      if (e == this.tagCurrent) return;
      this.tagCurrent = e;
      this.getUserList(1);
    },
    moreClick: function moreClick(id, status) {
      var that = this;
      that.userId = id;
      if (status === 1) {
        that.sheetList = [{
          text: '他的作品' },
        {
          text: '他的下载' },
        {
          text: '他的出售' },
        {
          text: '他的积分' },
        {
          text: '封禁账户' }];

      }
      if (status === 2) {
        that.sheetList = [{
          text: '他的作品' },
        {
          text: '他的订单' },
        {
          text: '他的出售' },
        {
          text: '他的积分' },
        {
          text: '解除封禁' }];

      }
      that.sheetShow = true;
    },
    sheetClick: function sheetClick(index) {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var that, text, status, msg;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                that = _this3;
                text = that.sheetList[index].text;
                if (text === '封禁账户' || text === '解除封禁') {

                  status = 1, msg = "确定解除封禁状态吗？";
                  if (text === '封禁账户') status = 2, msg = "确定封禁当前账户吗？";

                  uni.showModal({
                    title: '封禁提示',
                    content: msg,
                    confirmText: '封禁',
                    confirmColor: '#fcc600',
                    success: function () {var _success = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(res) {var query;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:if (!
                                res.confirm) {_context3.next = 7;break;}
                                uni.showLoading({
                                  mask: true,
                                  title: '正在拼命加载中...' });_context3.next = 4;return (

                                  uniCloud.callFunction({
                                    name: 'query_edit',
                                    data: {
                                      dbName: 'wx_user',
                                      filter: {
                                        '_id': that.userId },

                                      upData: {
                                        status: status } } }));case 4:query = _context3.sent;



                                if (query.result.success) {
                                  that.getUserList(1);
                                }
                                uni.showToast({
                                  icon: 'none',
                                  title: query.result.msg,
                                  mask: true,
                                  duration: 1000 });case 7:case "end":return _context3.stop();}}}, _callee3);}));function success(_x) {return _success.apply(this, arguments);}return success;}() });




                } else if (text === '他的作品') {
                  uni.navigateTo({
                    url: '/pages/system/cover/coverList?userId=' + that.userId });

                } else if (text === '他的订单') {
                  uni.navigateTo({
                    url: '/pages/order/order?userId=' + that.userId });

                } else if (text === '他的出售') {
                  uni.navigateTo({
                    url: '/pages/order/order?authorId=' + that.userId });

                } else if (text === '他的积分') {
                  uni.navigateTo({
                    url: '/pages/integral/record?userId=' + that.userId });

                }case 3:case "end":return _context4.stop();}}}, _callee4);}))();
    },
    editClick: function editClick(id) {
      uni.navigateTo({
        url: '/pages/write/edit?id=' + id });

    },
    stockClick: function stockClick(id) {
      uni.navigateTo({
        url: '/pages/write/stock?id=' + id });

    } },

  onReachBottom: function onReachBottom() {
    var that = this;
    if (that.loadStatus == 'nomore') return;
    that.getUserList();
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 9)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 226:
/*!**********************************************************************************************!*\
  !*** D:/壁zhi库小程序/wallpaper/pages/system/user/userList.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_userList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.3.11.20220209.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./userList.vue?vue&type=style&index=0&lang=scss& */ 227);
/* harmony import */ var _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_userList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_userList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_userList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_userList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_3_11_20220209_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_userList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 227:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/壁zhi库小程序/wallpaper/pages/system/user/userList.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[220,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDov5aOBemhp5bqT5bCP56iL5bqPL3dhbGxwYXBlci9wYWdlcy9zeXN0ZW0vdXNlci91c2VyTGlzdC52dWU/NzJkYSIsIndlYnBhY2s6Ly8vRDov5aOBemhp5bqT5bCP56iL5bqPL3dhbGxwYXBlci9wYWdlcy9zeXN0ZW0vdXNlci91c2VyTGlzdC52dWU/YTEzNyIsIndlYnBhY2s6Ly8vRDov5aOBemhp5bqT5bCP56iL5bqPL3dhbGxwYXBlci9wYWdlcy9zeXN0ZW0vdXNlci91c2VyTGlzdC52dWU/NjE1ZSIsIndlYnBhY2s6Ly8vRDov5aOBemhp5bqT5bCP56iL5bqPL3dhbGxwYXBlci9wYWdlcy9zeXN0ZW0vdXNlci91c2VyTGlzdC52dWU/YTM1OCIsInVuaS1hcHA6Ly8vcGFnZXMvc3lzdGVtL3VzZXIvdXNlckxpc3QudnVlIiwid2VicGFjazovLy9EOi/lo4F6aGnlupPlsI/nqIvluo8vd2FsbHBhcGVyL3BhZ2VzL3N5c3RlbS91c2VyL3VzZXJMaXN0LnZ1ZT9lNWUxIiwid2VicGFjazovLy9EOi/lo4F6aGnlupPlsI/nqIvluo8vd2FsbHBhcGVyL3BhZ2VzL3N5c3RlbS91c2VyL3VzZXJMaXN0LnZ1ZT81MTlhIl0sIm5hbWVzIjpbInd4IiwiX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImNyZWF0ZVBhZ2UiLCJQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O3NEQUFBO0FBQ0E7QUFDQSx5Ryw2RkFGbUJBLEVBQUUsQ0FBQ0MsaUNBQUgsR0FBdUNDLG1CQUF2QztBQUduQkMsVUFBVSxDQUFDQyxpQkFBRCxDQUFWLEM7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUg7QUFDckg7QUFDNEQ7QUFDTDtBQUNjOzs7QUFHckU7QUFDcU07QUFDck0sZ0JBQWdCLDRNQUFVO0FBQzFCLEVBQUUsOEVBQU07QUFDUixFQUFFLG1GQUFNO0FBQ1IsRUFBRSw0RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1RkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx1TUFFTjtBQUNQLEtBQUs7QUFDTDtBQUNBLGFBQWEsK05BRU47QUFDUCxLQUFLO0FBQ0w7QUFDQSxhQUFhLHVQQUVOO0FBQ1A7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFBQTtBQUFBO0FBQUE7QUFBK3dCLENBQWdCLDZ3QkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDK0NueUI7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBO0FBQ0Esa0JBREE7QUFFQTtBQUNBLGtCQURBLEVBRkEsQ0FGQTs7QUFPQSxtQkFQQTtBQVFBLGdCQVJBO0FBU0E7QUFDQSxrQkFWQTtBQVdBLHNCQVhBO0FBWUE7QUFDQSxtQkFiQTtBQWNBO0FBQ0Esa0JBZkE7QUFnQkEsNEJBaEJBOztBQWtCQSxHQXBCQTtBQXFCQSxRQXJCQSxvQkFxQkE7QUFDQSxrQkFEQSxHQUNBLEtBREE7QUFFQSxtQ0FGQTtBQUdBLEdBeEJBO0FBeUJBO0FBQ0EsZUFEQSx1QkFDQSxFQURBLEVBQ0E7QUFDQSxvQkFEQSxHQUNBLE1BREE7QUFFQTtBQUNBLHVCQUhBLEdBR0EsYUFIQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFYQSxHQVdBLEVBWEE7QUFZQTtBQUNBLHlDQWJBO0FBY0E7QUFDQSxzQ0FEQTtBQUVBO0FBQ0EsdUNBREE7QUFFQSxvQ0FGQTtBQUdBO0FBQ0Esb0NBREE7QUFFQSxvQ0FGQSxFQUhBOztBQU9BLCtDQVBBO0FBUUEsa0NBUkEsRUFGQSxHQWRBLFNBY0EsSUFkQTs7OztBQTRCQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FuQ0E7QUFvQ0EsS0FyQ0E7QUFzQ0EsYUF0Q0EscUJBc0NBLENBdENBLEVBc0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0ExQ0E7QUEyQ0EsYUEzQ0EscUJBMkNBLEVBM0NBLEVBMkNBLE1BM0NBLEVBMkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBO0FBQ0Esc0JBREEsRUFGQTtBQUlBO0FBQ0Esc0JBREEsRUFKQTtBQU1BO0FBQ0Esc0JBREEsRUFOQTtBQVFBO0FBQ0Esc0JBREEsRUFSQTs7QUFXQTtBQUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBO0FBQ0Esc0JBREEsRUFGQTtBQUlBO0FBQ0Esc0JBREEsRUFKQTtBQU1BO0FBQ0Esc0JBREEsRUFOQTtBQVFBO0FBQ0Esc0JBREEsRUFSQTs7QUFXQTtBQUNBO0FBQ0EsS0F6RUE7QUEwRUEsY0ExRUEsc0JBMEVBLEtBMUVBLEVBMEVBO0FBQ0Esb0JBREEsR0FDQSxNQURBO0FBRUEsb0JBRkEsR0FFQSwwQkFGQTtBQUdBOztBQUVBLHdCQUZBLEdBRUEsQ0FGQSxFQUVBLEdBRkEsR0FFQSxZQUZBO0FBR0E7O0FBRUE7QUFDQSxpQ0FEQTtBQUVBLGdDQUZBO0FBR0EscUNBSEE7QUFJQSwyQ0FKQTtBQUtBO0FBQ0EsMkNBREE7QUFFQTtBQUNBLDRDQURBO0FBRUEscURBRkEsSUFGQTs7QUFNQTtBQUNBLHNEQURBO0FBRUE7QUFDQSx1REFEQTtBQUVBO0FBQ0EsMERBREEsRUFGQTs7QUFLQTtBQUNBLHNEQURBLEVBTEEsRUFGQSxHQU5BLFNBTUEsS0FOQTs7OztBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQURBO0FBRUEseURBRkE7QUFHQSw0Q0FIQTtBQUlBLGdEQUpBLElBckJBLDZJQUxBOzs7OztBQW1DQSxpQkF4Q0EsTUF3Q0E7QUFDQTtBQUNBLDhFQURBOztBQUdBLGlCQUpBLE1BSUE7QUFDQTtBQUNBLG1FQURBOztBQUdBLGlCQUpBLE1BSUE7QUFDQTtBQUNBLHFFQURBOztBQUdBLGlCQUpBLE1BSUE7QUFDQTtBQUNBLHVFQURBOztBQUdBLGlCQTNEQTtBQTREQSxLQXRJQTtBQXVJQSxhQXZJQSxxQkF1SUEsRUF2SUEsRUF1SUE7QUFDQTtBQUNBLHlDQURBOztBQUdBLEtBM0lBO0FBNElBLGNBNUlBLHNCQTRJQSxFQTVJQSxFQTRJQTtBQUNBO0FBQ0EsMENBREE7O0FBR0EsS0FoSkEsRUF6QkE7O0FBMktBLGVBM0tBLDJCQTJLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBL0tBLEU7Ozs7Ozs7Ozs7Ozs7QUMvQ0E7QUFBQTtBQUFBO0FBQUE7QUFBazhDLENBQWdCLHczQ0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQXQ5QztBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InBhZ2VzL3N5c3RlbS91c2VyL3VzZXJMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO3d4Ll9fd2VicGFja19yZXF1aXJlX1VOSV9NUF9QTFVHSU5fXyA9IF9fd2VicGFja19yZXF1aXJlX187XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvc3lzdGVtL3VzZXIvdXNlckxpc3QudnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdXNlckxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBhZDVjYjM0JlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdXNlckxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91c2VyTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vdXNlckxpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9zeXN0ZW0vdXNlci91c2VyTGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3VzZXJMaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYWQ1Y2IzNCZcIiIsInZhciBjb21wb25lbnRzXG50cnkge1xuICBjb21wb25lbnRzID0ge1xuICAgIHVUYWJzOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwidXZpZXctdWkvY29tcG9uZW50cy91LXRhYnMvdS10YWJzXCIgKi8gXCJAL3V2aWV3LXVpL2NvbXBvbmVudHMvdS10YWJzL3UtdGFicy52dWVcIlxuICAgICAgKVxuICAgIH0sXG4gICAgdUxvYWRtb3JlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwidXZpZXctdWkvY29tcG9uZW50cy91LWxvYWRtb3JlL3UtbG9hZG1vcmVcIiAqLyBcIkAvdXZpZXctdWkvY29tcG9uZW50cy91LWxvYWRtb3JlL3UtbG9hZG1vcmUudnVlXCJcbiAgICAgIClcbiAgICB9LFxuICAgIHVBY3Rpb25TaGVldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaW1wb3J0KFxuICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInV2aWV3LXVpL2NvbXBvbmVudHMvdS1hY3Rpb24tc2hlZXQvdS1hY3Rpb24tc2hlZXRcIiAqLyBcIkAvdXZpZXctdWkvY29tcG9uZW50cy91LWFjdGlvbi1zaGVldC91LWFjdGlvbi1zaGVldC52dWVcIlxuICAgICAgKVxuICAgIH1cbiAgfVxufSBjYXRjaCAoZSkge1xuICBpZiAoXG4gICAgZS5tZXNzYWdlLmluZGV4T2YoXCJDYW5ub3QgZmluZCBtb2R1bGVcIikgIT09IC0xICYmXG4gICAgZS5tZXNzYWdlLmluZGV4T2YoXCIudnVlXCIpICE9PSAtMVxuICApIHtcbiAgICBjb25zb2xlLmVycm9yKGUubWVzc2FnZSlcbiAgICBjb25zb2xlLmVycm9yKFwiMS4g5o6S5p+l57uE5Lu25ZCN56ew5ou85YaZ5piv5ZCm5q2j56GuXCIpXG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwiMi4g5o6S5p+l57uE5Lu25piv5ZCm56ym5ZCIIGVhc3ljb20g6KeE6IyD77yM5paH5qGj77yaaHR0cHM6Ly91bmlhcHAuZGNsb3VkLm5ldC5jbi9jb2xsb2NhdGlvbi9wYWdlcz9pZD1lYXN5Y29tXCJcbiAgICApXG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwiMy4g6Iul57uE5Lu25LiN56ym5ZCIIGVhc3ljb20g6KeE6IyD77yM6ZyA5omL5Yqo5byV5YWl77yM5bm25ZyoIGNvbXBvbmVudHMg5Lit5rOo5YaM6K+l57uE5Lu2XCJcbiAgICApXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgZVxuICB9XG59XG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdXNlckxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdXNlckxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJtZW51IHUtbS1sLTMwIHUtbS1yLTMwXCI+XHJcblx0XHRcdDx1LXRhYnMgOmxpc3Q9XCJ0YWdMaXN0XCIgOmlzLXNjcm9sbD1cImZhbHNlXCIgYWN0aXZlLWNvbG9yPVwiI2ZmYzEwNlwiIDpjdXJyZW50PVwidGFnQ3VycmVudFwiIEBjaGFuZ2U9XCJjYXRlQ2xpY2tcIj48L3UtdGFicz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiXCIgc3R5bGU9XCJwYWRkaW5nLXRvcDogODBycHg7XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiXCIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHVzZXJMaXN0XCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0PCEtLSA8dS1nYXAgaGVpZ2h0PVwiMTVcIiBiZy1jb2xvcj1cIiNGNUY2RjhcIj48L3UtZ2FwPiAtLT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtZmxleCB1LXJvdy1sZWZ0IHUtY29sLXRvcCB1LXAtbC00MCB1LXAtci00MCB1LXAtdC0yMCB1LXAtYi0yMCBib3JkZXItdG9wXCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJhdmF0YXJcIiA6c3JjPVwiaXRlbS5hdmF0YXJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJidG5zIHUtZmxleCB1LXJvdy1iZXR3ZWVuIHUtcC1sLTIwIHUtcC10LTEwXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZSB1LWZvbnQtMTAgdS1saW5lLTFcIj5cclxuXHRcdFx0XHRcdFx0XHRcdHt7aXRlbS5uYW1lfX1cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LXRpcHMtY29sb3IgdS1wLXQtMTAgdS1mb250LTEyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHTnp6/liIbvvJp7e2l0ZW0uaW50ZWdyYWx9fVxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRhZ3NfIHRhZy1hY3RpdmVfXCIgQGNsaWNrPVwibW9yZUNsaWNrKGl0ZW0uX2lkLCBpdGVtLnN0YXR1cylcIj7mk43kvZw8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyB2LWlmPVwibm9EYXRhXCJcclxuXHRcdGNsYXNzPVwidS1mbGV4IHUtZmxleC1jb2wgdS1jb2wtY2VudGVyXCJcclxuXHRcdHN0eWxlPVwid2lkdGg6IDEwMHZ3O2hlaWdodDogNTB2aDtwYWRkaW5nLXRvcDogMjAwcnB4O2JhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiXCI+XHJcblx0XHRcdFx0PGltYWdlIHN0eWxlPVwid2lkdGg6IDMwMHJweDtoZWlnaHQ6IDMwMHJweDtcIiBzcmM9XCIvc3RhdGljL25vZGF0YS5wbmdcIj48L2ltYWdlPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidS10aXBzLWNvbG9yIHUtZm9udC0xMiB1LXAtdC0zMFwiPlxyXG5cdFx0XHRcdOayoeacieaVsOaNruWTpn5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0XHJcblx0XHQ8dmlldyBjbGFzcz1cIlwiIHYtaWY9XCIhbm9EYXRhXCI+XHJcblx0XHRcdDx1LWxvYWRtb3JlIDpzdGF0dXM9XCJsb2FkU3RhdHVzXCIgOmZvbnQtc2l6ZT1cIjI0XCIgOm1hcmdpbi10b3A9XCIzMFwiIDptYXJnaW4tYm90dG9tPVwiMzBcIiBjb2xvcj1cIiNCOEI4QjhcIi8+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInNhZmUtYXJlYS1pbnNldC1ib3R0b21cIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJcIiBzdHlsZT1cImhlaWdodDogMXB4O1wiPjwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdFx0PHUtYWN0aW9uLXNoZWV0IDpsaXN0PVwic2hlZXRMaXN0XCIgOnNhZmUtYXJlYS1pbnNldC1ib3R0b209XCJ0cnVlXCIgdi1tb2RlbD1cInNoZWV0U2hvd1wiICBAY2xpY2s9XCJzaGVldENsaWNrXCI+PC91LWFjdGlvbi1zaGVldD5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dGFnQ3VycmVudDogMCxcclxuXHRcdFx0XHR0YWdMaXN0OiBbe1xyXG5cdFx0XHRcdFx0bmFtZTogJ+ato+W4uCdcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRuYW1lOiAn5bCB56aBJ1xyXG5cdFx0XHRcdH1dLFxyXG5cdFx0XHRcdHNoZWV0TGlzdDogW10sXHJcblx0XHRcdFx0dXNlcklkOiAnJyxcclxuXHRcdFx0XHQvLyDnlKjmiLfliJfooahcclxuXHRcdFx0XHR1c2VyTGlzdDogW10sXHJcblx0XHRcdFx0c2hlZXRTaG93OiBmYWxzZSxcclxuXHRcdFx0XHQvLyDml6DmlbDmja5cclxuXHRcdFx0XHRub0RhdGE6IGZhbHNlLFxyXG5cdFx0XHRcdC8vIOWIhumhtVxyXG5cdFx0XHRcdHBhZ2VJbmRleDogMCxcclxuXHRcdFx0XHRsb2FkU3RhdHVzOiAnbG9hZG1vcmUnLFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0YXN5bmMgb25Mb2FkKCkge1xyXG5cdFx0XHR2YXIgdGhhdCA9IHRoaXNcclxuXHRcdFx0YXdhaXQgdGhhdC5nZXRVc2VyTGlzdCgxKVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0YXN5bmMgZ2V0VXNlckxpc3Qob24pe1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdHRoYXQubG9hZFN0YXR1cyA9J2xvYWRpbmcnXHJcblx0XHRcdFx0dmFyIG5ld0xpc3QgPSB0aGF0LnVzZXJMaXN0XHJcblx0XHRcdFx0aWYob24gPT0gMSl7XHJcblx0XHRcdFx0XHR0aGF0LnVzZXJMaXN0ID0gW11cclxuXHRcdFx0XHRcdG5ld0xpc3QgPSBbXVxyXG5cdFx0XHRcdFx0dGhhdC5wYWdlSW5kZXggPSAwXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoYXQucGFnZUluZGV4ID0gdGhhdC5wYWdlSW5kZXggKyAxXHJcblx0XHRcdFx0dmFyIGZpbHRlciA9IHt9XHJcblx0XHRcdFx0aWYodGhhdC50YWdDdXJyZW50ID09IDEpIGZpbHRlciA9IHsnc3RhdHVzJzogMn1cclxuXHRcdFx0XHRlbHNlIGZpbHRlciA9IHsnc3RhdHVzJzogMX1cclxuXHRcdFx0XHRsZXQgbGlzdCA9IGF3YWl0IHVuaUNsb3VkLmNhbGxGdW5jdGlvbih7XHJcblx0XHRcdFx0XHRuYW1lOiAncXVlcnlfbGlzdCcsXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdGRiTmFtZTogXCJ3eF91c2VyXCIsXHJcblx0XHRcdFx0XHRcdGZpbHRlcjogZmlsdGVyLFxyXG5cdFx0XHRcdFx0XHRvcmRlcjoge1xyXG5cdFx0XHRcdFx0XHRcdG5hbWU6ICd0aW1lJyxcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnZGVzYydcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0cGFnZUluZGV4OiB0aGF0LnBhZ2VJbmRleCxcclxuXHRcdFx0XHRcdFx0cGFnZVNpemU6IDE1XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYobGlzdC5yZXN1bHQuaGFzTW9yZSkgdGhhdC5sb2FkU3RhdHVzID0gJ2xvYWRtb3JlJ1xyXG5cdFx0XHRcdGVsc2UgdGhhdC5sb2FkU3RhdHVzID0gJ25vbW9yZSdcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRuZXdMaXN0ID0gbmV3TGlzdC5jb25jYXQobGlzdC5yZXN1bHQuZGF0YSlcclxuXHRcdFx0XHR0aGF0LnVzZXJMaXN0ID0gbmV3TGlzdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmKHRoYXQudXNlckxpc3QubGVuZ3RoID09IDApIHRoYXQubm9EYXRhID0gdHJ1ZVxyXG5cdFx0XHRcdGVsc2UgdGhhdC5ub0RhdGEgPSBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjYXRlQ2xpY2soZSl7XHJcblx0XHRcdFx0aWYoZSA9PSB0aGlzLnRhZ0N1cnJlbnQpIHJldHVyblxyXG5cdFx0XHRcdHRoaXMudGFnQ3VycmVudCA9IGVcclxuXHRcdFx0XHR0aGlzLmdldFVzZXJMaXN0KDEpXHJcblx0XHRcdH0sXHJcblx0XHRcdG1vcmVDbGljayhpZCwgc3RhdHVzKXtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHR0aGF0LnVzZXJJZCA9IGlkXHJcblx0XHRcdFx0aWYoc3RhdHVzID09PSAxKXtcclxuXHRcdFx0XHRcdHRoYXQuc2hlZXRMaXN0ID0gW3tcclxuXHRcdFx0XHRcdFx0dGV4dDogJ+S7lueahOS9nOWTgScgXHJcblx0XHRcdFx0XHR9LHtcclxuXHRcdFx0XHRcdFx0dGV4dDogJ+S7lueahOS4i+i9vScgXHJcblx0XHRcdFx0XHR9LHtcclxuXHRcdFx0XHRcdFx0dGV4dDogJ+S7lueahOWHuuWUricgXHJcblx0XHRcdFx0XHR9LHtcclxuXHRcdFx0XHRcdFx0dGV4dDogJ+S7lueahOenr+WIhicgXHJcblx0XHRcdFx0XHR9LHtcclxuXHRcdFx0XHRcdFx0dGV4dDogJ+Wwgeemgei0puaItycgXHJcblx0XHRcdFx0XHR9XVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZihzdGF0dXMgPT09IDIpe1xyXG5cdFx0XHRcdFx0dGhhdC5zaGVldExpc3QgPSBbe1xyXG5cdFx0XHRcdFx0XHR0ZXh0OiAn5LuW55qE5L2c5ZOBJyBcclxuXHRcdFx0XHRcdH0se1xyXG5cdFx0XHRcdFx0XHR0ZXh0OiAn5LuW55qE6K6i5Y2VJyBcclxuXHRcdFx0XHRcdH0se1xyXG5cdFx0XHRcdFx0XHR0ZXh0OiAn5LuW55qE5Ye65ZSuJyBcclxuXHRcdFx0XHRcdH0se1xyXG5cdFx0XHRcdFx0XHR0ZXh0OiAn5LuW55qE56ev5YiGJyBcclxuXHRcdFx0XHRcdH0se1xyXG5cdFx0XHRcdFx0XHR0ZXh0OiAn6Kej6Zmk5bCB56aBJyBcclxuXHRcdFx0XHRcdH1dXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQuc2hlZXRTaG93ID0gdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhc3luYyBzaGVldENsaWNrKGluZGV4KXtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHR2YXIgdGV4dCA9IHRoYXQuc2hlZXRMaXN0W2luZGV4XS50ZXh0XHJcblx0XHRcdFx0aWYodGV4dCA9PT0gJ+Wwgeemgei0puaItycgfHwgdGV4dCA9PT0gJ+ino+mZpOWwgeemgScpe1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR2YXIgc3RhdHVzID0gMSwgbXNnID0gXCLnoa7lrprop6PpmaTlsIHnpoHnirbmgIHlkJfvvJ9cIlxyXG5cdFx0XHRcdFx0aWYodGV4dCA9PT0gJ+Wwgeemgei0puaItycpIHN0YXR1cyA9IDIsIG1zZyA9IFwi56Gu5a6a5bCB56aB5b2T5YmN6LSm5oi35ZCX77yfXCJcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5bCB56aB5o+Q56S6JyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDogbXNnLFxyXG5cdFx0XHRcdFx0XHRjb25maXJtVGV4dDogJ+WwgeemgScsXHJcblx0XHRcdFx0XHRcdGNvbmZpcm1Db2xvcjogJyNmY2M2MDAnLFxyXG5cdFx0XHRcdFx0XHRzdWNjZXNzOiBhc3luYyBmdW5jdGlvbiAocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRtYXNrOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+ato+WcqOaLvOWRveWKoOi9veS4rS4uLidcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHRsZXQgcXVlcnkgPSBhd2FpdCB1bmlDbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lOiAncXVlcnlfZWRpdCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkYk5hbWU6ICd3eF91c2VyJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmaWx0ZXI6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdfaWQnOiB0aGF0LnVzZXJJZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dXBEYXRhOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdGF0dXM6IHN0YXR1c1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHRpZihxdWVyeS5yZXN1bHQuc3VjY2Vzcyl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuZ2V0VXNlckxpc3QoMSlcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBxdWVyeS5yZXN1bHQubXNnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRtYXNrOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMTAwMFxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fWVsc2UgaWYodGV4dCA9PT0gJ+S7lueahOS9nOWTgScpe1xyXG5cdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvc3lzdGVtL2NvdmVyL2NvdmVyTGlzdD91c2VySWQ9Jyt0aGF0LnVzZXJJZFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9ZWxzZSBpZih0ZXh0ID09PSAn5LuW55qE6K6i5Y2VJyl7XHJcblx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdHVybDogJy9wYWdlcy9vcmRlci9vcmRlcj91c2VySWQ9Jyt0aGF0LnVzZXJJZFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9ZWxzZSBpZih0ZXh0ID09PSAn5LuW55qE5Ye65ZSuJyl7XHJcblx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdHVybDogJy9wYWdlcy9vcmRlci9vcmRlcj9hdXRob3JJZD0nK3RoYXQudXNlcklkXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1lbHNlIGlmKHRleHQgPT09ICfku5bnmoTnp6/liIYnKXtcclxuXHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2ludGVncmFsL3JlY29yZD91c2VySWQ9Jyt0aGF0LnVzZXJJZFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGVkaXRDbGljayhpZCl7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL3dyaXRlL2VkaXQ/aWQ9JytpZFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdHN0b2NrQ2xpY2soaWQpe1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogJy9wYWdlcy93cml0ZS9zdG9jaz9pZD0nK2lkXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uUmVhY2hCb3R0b20oKXtcclxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRpZih0aGF0LmxvYWRTdGF0dXMgPT0gJ25vbW9yZScpIHJldHVyblxyXG5cdFx0XHR0aGF0LmdldFVzZXJMaXN0KClcclxuXHRcdH0sXHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5cdC5tZW51e1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHdpZHRoOiBjYWxjKDEwMCUgLSA2MHJweCk7XHJcblx0XHR6LWluZGV4OiA5OTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cdFxyXG5cdC50YWdzX3tcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdGNvbG9yOiAjOTA5Mzk5O1xyXG5cdFx0Ym9yZGVyOiAxcnB4IHNvbGlkICNCOEI4Qjg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA4cnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDQ2cnB4O1xyXG5cdFx0cGFkZGluZzogMCAyMHJweDtcclxuXHR9XHJcblx0XHJcblx0LnRhZy1hY3RpdmVfe1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmNmYzQ0ICwgI2Y4YzkzYyk7XHJcblx0XHRjb2xvcjogIzNhMTgwMDtcclxuXHRcdC8vIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjZmZmOGFiO1xyXG5cdFx0YW5pbWF0aW9uOiB0aWFvYmlnIDAuOHMgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlIGluZmluaXRlO1xyXG5cdFx0YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDoxO1xyXG5cdFx0Ym9yZGVyOiBub25lO1xyXG5cdH1cclxuXHRcclxuXHQuYXZhdGFye1xyXG5cdFx0d2lkdGg6IDkwcnB4O1xyXG5cdFx0aGVpZ2h0OiA5MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDkwcnB4O1xyXG5cdH1cclxuXHQuYnRuc3tcclxuXHRcdHdpZHRoOiA1ODBycHg7XHJcblx0XHQudGl0bGV7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA1NTA7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5ib3JkZXItdG9we1xyXG5cdFx0Ym9yZGVyLXRvcDogMXJweCBzb2xpZCAjRjNGNEY2O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHRAa2V5ZnJhbWVzIHRpYW9iaWcge1xyXG5cdFx0MCUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDAuOTIpO1xyXG5cdFx0fVxyXG5cdFx0MjUlIHtcclxuXHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcclxuXHRcdH1cclxuXHRcdDUwJSB7XHJcblx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMC45Nik7XHJcblx0XHR9XHJcblx0XHQ3NSUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMDYpO1xyXG5cdFx0fVxyXG5cdFx0MTAwJSB7XHJcblx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMC45NCk7XHJcblx0XHR9XHJcblx0fVxyXG48L3N0eWxlPiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdXNlckxpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy4zLjExLjIwMjIwMjA5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjMuMTEuMjAyMjAyMDkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3VzZXJMaXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2NTU1Mjk2NjU4MDhcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiRDovSEJ1aWxkZXJYLjMuMy4xMS4yMDIyMDIwOS5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==