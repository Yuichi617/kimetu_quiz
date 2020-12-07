webpackHotUpdate_N_E("pages/_app",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initStore\", function() { return initStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist */ \"./node_modules/redux-persist/es/index.js\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist/lib/storage */ \"./node_modules/redux-persist/lib/storage/index.js\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n\n\n\n //ステート初期化\n\nvar info = {\n  q_no: [],\n  question: null,\n  i: 0,\n  correct: 0,\n  incorrect: 0,\n  select: 0\n}; //レデューサ\n\nfunction counterReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : info;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'SETINFO':\n      return {\n        q_no: action.rand_arr,\n        question: action.question,\n        i: state.i,\n        correct: state.correct,\n        incorrect: state.incorrect,\n        select: state.select\n      };\n\n    case 'CORRECT':\n      return {\n        q_no: state.q_no,\n        question: state.question,\n        i: state.i + 1,\n        correct: state.correct + 1,\n        incorrect: state.incorrect,\n        select: 0\n      };\n\n    case 'INCORRECT':\n      return {\n        q_no: state.q_no,\n        question: state.question,\n        i: state.i + 1,\n        correct: state.correct,\n        incorrect: state.incorrect + 1,\n        select: 0\n      };\n\n    case 'UPDATE1':\n      return {\n        q_no: state.q_no,\n        question: state.question,\n        i: state.i,\n        correct: state.correct,\n        incorrect: state.incorrect,\n        select: 1\n      };\n\n    case 'UPDATE2':\n      return {\n        q_no: state.q_no,\n        question: state.question,\n        i: state.i,\n        correct: state.correct,\n        incorrect: state.incorrect,\n        select: 2\n      };\n\n    case 'UPDATE3':\n      return {\n        q_no: state.q_no,\n        question: state.question,\n        i: state.i,\n        correct: state.correct,\n        incorrect: state.incorrect,\n        select: 3\n      };\n\n    default:\n      return state;\n  }\n} //Redux Persistの設定\n\n\nvar persistConfig = {\n  key: 'root',\n  storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default.a\n}; //パーシストレデューサの作成\n\nvar persistedReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_1__[\"persistReducer\"])(persistConfig, counterReducer); //ストア、パーシスターの作成\n\nvar store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(persistedReducer, info, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3__[\"default\"]));\nvar pstore = Object(redux_persist__WEBPACK_IMPORTED_MODULE_1__[\"persistStore\"])(store); //initStore関数\n\nfunction initStore() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : info;\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(counterReducer, state, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3__[\"default\"]));\n} //export function initStore(state=info){\n//    return persistStore(createStore(persistedReducer, state, applyMiddleware(thunkMiddleware)))\n//}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUuanM/MDU3MSJdLCJuYW1lcyI6WyJpbmZvIiwicV9ubyIsInF1ZXN0aW9uIiwiaSIsImNvcnJlY3QiLCJpbmNvcnJlY3QiLCJzZWxlY3QiLCJjb3VudGVyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInJhbmRfYXJyIiwicGVyc2lzdENvbmZpZyIsImtleSIsInN0b3JhZ2UiLCJwZXJzaXN0ZWRSZWR1Y2VyIiwicGVyc2lzdFJlZHVjZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmtNaWRkbGV3YXJlIiwicHN0b3JlIiwicGVyc2lzdFN0b3JlIiwiaW5pdFN0b3JlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtDQUdBOztBQUNBLElBQU1BLElBQUksR0FBRztBQUNUQyxNQUFJLEVBQUcsRUFERTtBQUVUQyxVQUFRLEVBQUcsSUFGRjtBQUdUQyxHQUFDLEVBQUcsQ0FISztBQUlUQyxTQUFPLEVBQUUsQ0FKQTtBQUtUQyxXQUFTLEVBQUUsQ0FMRjtBQU1UQyxRQUFNLEVBQUU7QUFOQyxDQUFiLEMsQ0FTQTs7QUFDQSxTQUFTQyxjQUFULEdBQThDO0FBQUEsTUFBckJDLEtBQXFCLHVFQUFiUixJQUFhO0FBQUEsTUFBUFMsTUFBTzs7QUFDMUMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBSyxTQUFMO0FBQ0ksYUFBTTtBQUNGVCxZQUFJLEVBQUdRLE1BQU0sQ0FBQ0UsUUFEWjtBQUVGVCxnQkFBUSxFQUFHTyxNQUFNLENBQUNQLFFBRmhCO0FBR0ZDLFNBQUMsRUFBR0ssS0FBSyxDQUFDTCxDQUhSO0FBSUZDLGVBQU8sRUFBR0ksS0FBSyxDQUFDSixPQUpkO0FBS0ZDLGlCQUFTLEVBQUdHLEtBQUssQ0FBQ0gsU0FMaEI7QUFNRkMsY0FBTSxFQUFFRSxLQUFLLENBQUNGO0FBTlosT0FBTjs7QUFRSixTQUFLLFNBQUw7QUFDSSxhQUFNO0FBQ0ZMLFlBQUksRUFBR08sS0FBSyxDQUFDUCxJQURYO0FBRUZDLGdCQUFRLEVBQUdNLEtBQUssQ0FBQ04sUUFGZjtBQUdGQyxTQUFDLEVBQUdLLEtBQUssQ0FBQ0wsQ0FBTixHQUFVLENBSFo7QUFJRkMsZUFBTyxFQUFHSSxLQUFLLENBQUNKLE9BQU4sR0FBZ0IsQ0FKeEI7QUFLRkMsaUJBQVMsRUFBR0csS0FBSyxDQUFDSCxTQUxoQjtBQU1GQyxjQUFNLEVBQUU7QUFOTixPQUFOOztBQVFKLFNBQUssV0FBTDtBQUNJLGFBQU07QUFDRkwsWUFBSSxFQUFHTyxLQUFLLENBQUNQLElBRFg7QUFFRkMsZ0JBQVEsRUFBR00sS0FBSyxDQUFDTixRQUZmO0FBR0ZDLFNBQUMsRUFBR0ssS0FBSyxDQUFDTCxDQUFOLEdBQVUsQ0FIWjtBQUlGQyxlQUFPLEVBQUdJLEtBQUssQ0FBQ0osT0FKZDtBQUtGQyxpQkFBUyxFQUFHRyxLQUFLLENBQUNILFNBQU4sR0FBa0IsQ0FMNUI7QUFNRkMsY0FBTSxFQUFFO0FBTk4sT0FBTjs7QUFRSixTQUFLLFNBQUw7QUFDSSxhQUFNO0FBQ0ZMLFlBQUksRUFBR08sS0FBSyxDQUFDUCxJQURYO0FBRUZDLGdCQUFRLEVBQUdNLEtBQUssQ0FBQ04sUUFGZjtBQUdGQyxTQUFDLEVBQUdLLEtBQUssQ0FBQ0wsQ0FIUjtBQUlGQyxlQUFPLEVBQUdJLEtBQUssQ0FBQ0osT0FKZDtBQUtGQyxpQkFBUyxFQUFHRyxLQUFLLENBQUNILFNBTGhCO0FBTUZDLGNBQU0sRUFBRTtBQU5OLE9BQU47O0FBUUosU0FBSyxTQUFMO0FBQ0ksYUFBTTtBQUNGTCxZQUFJLEVBQUdPLEtBQUssQ0FBQ1AsSUFEWDtBQUVGQyxnQkFBUSxFQUFHTSxLQUFLLENBQUNOLFFBRmY7QUFHRkMsU0FBQyxFQUFHSyxLQUFLLENBQUNMLENBSFI7QUFJRkMsZUFBTyxFQUFHSSxLQUFLLENBQUNKLE9BSmQ7QUFLRkMsaUJBQVMsRUFBR0csS0FBSyxDQUFDSCxTQUxoQjtBQU1GQyxjQUFNLEVBQUU7QUFOTixPQUFOOztBQVFKLFNBQUssU0FBTDtBQUNJLGFBQU07QUFDRkwsWUFBSSxFQUFHTyxLQUFLLENBQUNQLElBRFg7QUFFRkMsZ0JBQVEsRUFBR00sS0FBSyxDQUFDTixRQUZmO0FBR0ZDLFNBQUMsRUFBR0ssS0FBSyxDQUFDTCxDQUhSO0FBSUZDLGVBQU8sRUFBR0ksS0FBSyxDQUFDSixPQUpkO0FBS0ZDLGlCQUFTLEVBQUdHLEtBQUssQ0FBQ0gsU0FMaEI7QUFNRkMsY0FBTSxFQUFFO0FBTk4sT0FBTjs7QUFRSjtBQUNJLGFBQU9FLEtBQVA7QUF4RFI7QUEwREgsQyxDQUVEOzs7QUFDQSxJQUFNSSxhQUFhLEdBQUc7QUFDbEJDLEtBQUcsRUFBRSxNQURhO0FBRWxCQyxTQUFPLEVBQVBBLGdFQUFPQTtBQUZXLENBQXRCLEMsQ0FLQTs7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBR0Msb0VBQWMsQ0FBQ0osYUFBRCxFQUFnQkwsY0FBaEIsQ0FBdkMsQyxDQUVBOztBQUNBLElBQUlVLEtBQUssR0FBR0MseURBQVcsQ0FBQ0gsZ0JBQUQsRUFBbUJmLElBQW5CLEVBQXlCbUIsNkRBQWUsQ0FBQ0MsbURBQUQsQ0FBeEMsQ0FBdkI7QUFDQSxJQUFJQyxNQUFNLEdBQUdDLGtFQUFZLENBQUNMLEtBQUQsQ0FBekIsQyxDQUVBOztBQUNPLFNBQVNNLFNBQVQsR0FBOEI7QUFBQSxNQUFYZixLQUFXLHVFQUFMUixJQUFLO0FBQ2pDLFNBQU9rQix5REFBVyxDQUFDWCxjQUFELEVBQWlCQyxLQUFqQixFQUF3QlcsNkRBQWUsQ0FBQ0MsbURBQUQsQ0FBdkMsQ0FBbEI7QUFDSCxDLENBRUQ7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBwZXJzaXN0U3RvcmUsIHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSAncmVkdXgtcGVyc2lzdCc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuXG4vL+OCueODhuODvOODiOWIneacn+WMllxuY29uc3QgaW5mbyA9IHtcbiAgICBxX25vIDogW10sXG4gICAgcXVlc3Rpb24gOiBudWxsLFxuICAgIGkgOiAwLFxuICAgIGNvcnJlY3Q6IDAsXG4gICAgaW5jb3JyZWN0OiAwLFxuICAgIHNlbGVjdDogMFxufVxuXG4vL+ODrOODh+ODpeODvOOCtVxuZnVuY3Rpb24gY291bnRlclJlZHVjZXIgKHN0YXRlID0gaW5mbywgYWN0aW9uKXtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcbiAgICAgICAgY2FzZSAnU0VUSU5GTyc6XG4gICAgICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAgICAgcV9ubyA6IGFjdGlvbi5yYW5kX2FycixcbiAgICAgICAgICAgICAgICBxdWVzdGlvbiA6IGFjdGlvbi5xdWVzdGlvbixcbiAgICAgICAgICAgICAgICBpIDogc3RhdGUuaSxcbiAgICAgICAgICAgICAgICBjb3JyZWN0IDogc3RhdGUuY29ycmVjdCxcbiAgICAgICAgICAgICAgICBpbmNvcnJlY3QgOiBzdGF0ZS5pbmNvcnJlY3QsXG4gICAgICAgICAgICAgICAgc2VsZWN0OiBzdGF0ZS5zZWxlY3RcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgJ0NPUlJFQ1QnOlxuICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgIHFfbm8gOiBzdGF0ZS5xX25vLFxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uIDogc3RhdGUucXVlc3Rpb24sXG4gICAgICAgICAgICAgICAgaSA6IHN0YXRlLmkgKyAxLFxuICAgICAgICAgICAgICAgIGNvcnJlY3QgOiBzdGF0ZS5jb3JyZWN0ICsgMSxcbiAgICAgICAgICAgICAgICBpbmNvcnJlY3QgOiBzdGF0ZS5pbmNvcnJlY3QsXG4gICAgICAgICAgICAgICAgc2VsZWN0OiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdJTkNPUlJFQ1QnOlxuICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgIHFfbm8gOiBzdGF0ZS5xX25vLFxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uIDogc3RhdGUucXVlc3Rpb24sXG4gICAgICAgICAgICAgICAgaSA6IHN0YXRlLmkgKyAxLFxuICAgICAgICAgICAgICAgIGNvcnJlY3QgOiBzdGF0ZS5jb3JyZWN0LFxuICAgICAgICAgICAgICAgIGluY29ycmVjdCA6IHN0YXRlLmluY29ycmVjdCArIDEsXG4gICAgICAgICAgICAgICAgc2VsZWN0OiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdVUERBVEUxJzpcbiAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICBxX25vIDogc3RhdGUucV9ubyxcbiAgICAgICAgICAgICAgICBxdWVzdGlvbiA6IHN0YXRlLnF1ZXN0aW9uLFxuICAgICAgICAgICAgICAgIGkgOiBzdGF0ZS5pLFxuICAgICAgICAgICAgICAgIGNvcnJlY3QgOiBzdGF0ZS5jb3JyZWN0LFxuICAgICAgICAgICAgICAgIGluY29ycmVjdCA6IHN0YXRlLmluY29ycmVjdCxcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IDFcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgJ1VQREFURTInOlxuICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgIHFfbm8gOiBzdGF0ZS5xX25vLFxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uIDogc3RhdGUucXVlc3Rpb24sXG4gICAgICAgICAgICAgICAgaSA6IHN0YXRlLmksXG4gICAgICAgICAgICAgICAgY29ycmVjdCA6IHN0YXRlLmNvcnJlY3QsXG4gICAgICAgICAgICAgICAgaW5jb3JyZWN0IDogc3RhdGUuaW5jb3JyZWN0LFxuICAgICAgICAgICAgICAgIHNlbGVjdDogMlxuICAgICAgICAgICAgfTsgICAgXG4gICAgICAgIGNhc2UgJ1VQREFURTMnOlxuICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgIHFfbm8gOiBzdGF0ZS5xX25vLFxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uIDogc3RhdGUucXVlc3Rpb24sXG4gICAgICAgICAgICAgICAgaSA6IHN0YXRlLmksXG4gICAgICAgICAgICAgICAgY29ycmVjdCA6IHN0YXRlLmNvcnJlY3QsXG4gICAgICAgICAgICAgICAgaW5jb3JyZWN0IDogc3RhdGUuaW5jb3JyZWN0LFxuICAgICAgICAgICAgICAgIHNlbGVjdDogM1xuICAgICAgICAgICAgfTsgXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG4vL1JlZHV4IFBlcnNpc3Tjga7oqK3lrppcbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XG4gICAga2V5OiAncm9vdCcsXG4gICAgc3RvcmFnZSAsXG59XG5cbi8v44OR44O844K344K544OI44Os44OH44Ol44O844K144Gu5L2c5oiQXG5jb25zdCBwZXJzaXN0ZWRSZWR1Y2VyID0gcGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZywgY291bnRlclJlZHVjZXIpXG5cbi8v44K544OI44Ki44CB44OR44O844K344K544K/44O844Gu5L2c5oiQXG5sZXQgc3RvcmUgPSBjcmVhdGVTdG9yZShwZXJzaXN0ZWRSZWR1Y2VyLCBpbmZvLCBhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKSlcbmxldCBwc3RvcmUgPSBwZXJzaXN0U3RvcmUoc3RvcmUpXG5cbi8vaW5pdFN0b3Jl6Zai5pWwXG5leHBvcnQgZnVuY3Rpb24gaW5pdFN0b3JlKHN0YXRlPWluZm8pe1xuICAgIHJldHVybiBjcmVhdGVTdG9yZShjb3VudGVyUmVkdWNlciwgc3RhdGUsIGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpKVxufVxuXG4vL2V4cG9ydCBmdW5jdGlvbiBpbml0U3RvcmUoc3RhdGU9aW5mbyl7XG4vLyAgICByZXR1cm4gcGVyc2lzdFN0b3JlKGNyZWF0ZVN0b3JlKHBlcnNpc3RlZFJlZHVjZXIsIHN0YXRlLCBhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKSkpXG4vL30iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store.js\n");

/***/ })

})