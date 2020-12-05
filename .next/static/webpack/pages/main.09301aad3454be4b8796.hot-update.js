webpackHotUpdate_N_E("pages/main",{

/***/ "./static/Style.js":
/*!*************************!*\
  !*** ./static/Style.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/sugiyamayuichi/Desktop/\\u958B\\u767A/kimetu_quiz/static/Style.js\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"style\", {\n  children: \"\\nbody {\\n    text-align: center;\\n    min-width: 320px;\\n    color: black;\\n    background-color: #FFF;\\n    font-size: 14px;\\n  }\\n\\n/*\\u30D8\\u30C3\\u30C0\\u30FC*/\\n.site-header .site_name {\\n    font-size: 25px;\\n    font-weight: bold;\\n    padding-top: 20px;\\n}\\n\\n/*\\u30E1\\u30A4\\u30F3*/\\n.main-screen {\\n    width: 70%;\\n    margin: 0 auto;\\n    margin-top: 20px;\\n    border: solid 2px #000000;\\n    border-radius: 5px;\\n    padding: 20px;\\n}\\n\\n.main-screen .text1 {\\n    font-size: 20px;\\n    margin-bottom: 20px;\\n}\\n\\n.main-screen .start_btn {\\n    width: 20%;\\n    color: white;\\n    margin: 0 auto;\\n    font-size: 20px;\\n    font-weight: bold;\\n    background-color: #808080;\\n    border-radius: 5px;\\n    padding: 5px 5px; \\n    cursor: pointer;\\n}\\n\\n.main-screen .question_box {\\n    width: 90%;\\n    margin: 0 auto;\\n    background-color: #dcdcdc;\\n    padding: 20px;\\n    margin-bottom: 20px;\\n}\\n\\n.main-screen .choice_box {\\n    width: 90%;\\n    margin: 0 auto;\\n    background-color: #dcdcdc;\\n    padding: 20px;\\n    margin-bottom: 20px;\\n}\\n\\n.main-screen .ans_btn {\\n    width: 20%;\\n    color: white;\\n    margin: 0 auto;\\n    font-size: 20px;\\n    font-weight: bold;\\n    background-color: #808080;\\n    border-radius: 5px;\\n    padding: 5px 5px; \\n    cursor: pointer;\\n}\\n\\n.main-screen .timeup_text{\\n    font-size: 20px;\\n}\\n\\n.main-screen .result_text1{\\n    font-size: 18px;\\n}\\n\\n.main-screen .result_text2{\\n    font-size: 30px;\\n}\\n\\n.main-screen .hierarchie_pic{\\n    width:60%;\\n    margin:0 auto;\\n    background-color: darkgreen;\\n    margin-bottom: 20px;\\n}\\n\\n.main-screen .retry_btn {\\n    width: 20%;\\n    color: white;\\n    margin: 0 auto;\\n    font-size: 20px;\\n    font-weight: bold;\\n    background-color: #808080;\\n    border-radius: 5px;\\n    padding: 5px 5px; \\n    cursor: pointer;\\n}\\n\\n.choice_box .options .option{\\n    display: block; /* \\u7E26\\u4E26\\u3073\\u306B */\\n    width: 90%;\\n    margin: 0.5em 0;\\n    float: left;\\n    cursor: pointer;\\n    user-select: none;\\n}\\n    \"\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 1,\n  columnNumber: 16\n}, undefined));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhdGljL1N0eWxlLmpzPzcxYTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFmIiwiZmlsZSI6Ii4vc3RhdGljL1N0eWxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgPHN0eWxlPntgXG5ib2R5IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuLyrjg5jjg4Pjg4Djg7wqL1xuLnNpdGUtaGVhZGVyIC5zaXRlX25hbWUge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLyrjg6HjgqTjg7MqL1xuLm1haW4tc2NyZWVuIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgYm9yZGVyOiBzb2xpZCAycHggIzAwMDAwMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLm1haW4tc2NyZWVuIC50ZXh0MSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5tYWluLXNjcmVlbiAuc3RhcnRfYnRuIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwODA4MDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogNXB4IDVweDsgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWFpbi1zY3JlZW4gLnF1ZXN0aW9uX2JveCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkY2RjO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLm1haW4tc2NyZWVuIC5jaG9pY2VfYm94IHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2RjZGM7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubWFpbi1zY3JlZW4gLmFuc19idG4ge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiA1cHggNXB4OyBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYWluLXNjcmVlbiAudGltZXVwX3RleHR7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubWFpbi1zY3JlZW4gLnJlc3VsdF90ZXh0MXtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5tYWluLXNjcmVlbiAucmVzdWx0X3RleHQye1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLm1haW4tc2NyZWVuIC5oaWVyYXJjaGllX3BpY3tcbiAgICB3aWR0aDo2MCU7XG4gICAgbWFyZ2luOjAgYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLm1haW4tc2NyZWVuIC5yZXRyeV9idG4ge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiA1cHggNXB4OyBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaG9pY2VfYm94IC5vcHRpb25zIC5vcHRpb257XG4gICAgZGlzcGxheTogYmxvY2s7IC8qIOe4puS4puOBs+OBqyAqL1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAwLjVlbSAwO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbiAgICBgfTwvc3R5bGU+OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./static/Style.js\n");

/***/ })

})