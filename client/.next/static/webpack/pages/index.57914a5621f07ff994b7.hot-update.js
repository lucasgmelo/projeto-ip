/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Chart/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Chart/index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.modern.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/lucasmelo/cc/ip/projeto-ip/client/src/components/Chart/index.tsx\",\n    _this = undefined;\n\n\n\n\nvar Chart = function Chart(_ref) {\n  var chartData = _ref.chartData;\n  console.log(chartData);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      children: chartData.titleChart\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, _this), chartData.type === \"bar\" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Bar, {\n      data: {\n        labels: chartData.labels,\n        datasets: [{\n          label: chartData.titleChart,\n          data: chartData.values,\n          backgroundColor: [\"#b47df290\", \"#7146EA90\"],\n          borderColor: [\"#b47df2\", \"#7146EA\"],\n          borderWidth: 1\n        }]\n      },\n      options: {\n        scales: {\n          yAxes: [{\n            ticks: {\n              beginAtZero: true\n            }\n          }]\n        }\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_c = Chart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chart);\n\nvar _c;\n\n$RefreshReg$(_c, \"Chart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvaW5kZXgudHN4P2E4M2MiXSwibmFtZXMiOlsiQ2hhcnQiLCJjaGFydERhdGEiLCJjb25zb2xlIiwibG9nIiwidGl0bGVDaGFydCIsInR5cGUiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiZGF0YSIsInZhbHVlcyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJzY2FsZXMiLCJ5QXhlcyIsInRpY2tzIiwiYmVnaW5BdFplcm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQW1CO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUMvQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLFNBQVo7QUFFQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsZ0JBQU9BLFNBQVMsQ0FBQ0c7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBR0dILFNBQVMsQ0FBQ0ksSUFBVixLQUFtQixLQUFuQixpQkFDQyw4REFBQyxnREFBRDtBQUNFLFVBQUksRUFBRTtBQUNKQyxjQUFNLEVBQUVMLFNBQVMsQ0FBQ0ssTUFEZDtBQUVKQyxnQkFBUSxFQUFFLENBQ1I7QUFDRUMsZUFBSyxFQUFFUCxTQUFTLENBQUNHLFVBRG5CO0FBRUVLLGNBQUksRUFBRVIsU0FBUyxDQUFDUyxNQUZsQjtBQUdFQyx5QkFBZSxFQUFFLENBQUMsV0FBRCxFQUFjLFdBQWQsQ0FIbkI7QUFJRUMscUJBQVcsRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaLENBSmY7QUFLRUMscUJBQVcsRUFBRTtBQUxmLFNBRFE7QUFGTixPQURSO0FBYUUsYUFBTyxFQUFFO0FBQ1BDLGNBQU0sRUFBRTtBQUNOQyxlQUFLLEVBQUUsQ0FDTDtBQUNFQyxpQkFBSyxFQUFFO0FBQ0xDLHlCQUFXLEVBQUU7QUFEUjtBQURULFdBREs7QUFERDtBQUREO0FBYlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKO0FBQUEsa0JBREY7QUFpQ0QsQ0FwQ0Q7O0tBQU1qQixLO0FBcUNOLCtEQUFlQSxLQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQmFyLCBEb3VnaG51dCB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcblxuY29uc3QgQ2hhcnQgPSAoeyBjaGFydERhdGEgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhjaGFydERhdGEpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzcGFuPntjaGFydERhdGEudGl0bGVDaGFydH08L3NwYW4+XG4gICAgICBcbiAgICAgIHtjaGFydERhdGEudHlwZSA9PT0gXCJiYXJcIiAmJiAoXG4gICAgICAgIDxCYXJcbiAgICAgICAgICBkYXRhPXt7XG4gICAgICAgICAgICBsYWJlbHM6IGNoYXJ0RGF0YS5sYWJlbHMsXG4gICAgICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IGNoYXJ0RGF0YS50aXRsZUNoYXJ0LFxuICAgICAgICAgICAgICAgIGRhdGE6IGNoYXJ0RGF0YS52YWx1ZXMsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXCIjYjQ3ZGYyOTBcIiwgXCIjNzE0NkVBOTBcIl0sXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFtcIiNiNDdkZjJcIiwgXCIjNzE0NkVBXCJdLFxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgIHNjYWxlczoge1xuICAgICAgICAgICAgICB5QXhlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDaGFydDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Chart/index.tsx\n");

/***/ })

});