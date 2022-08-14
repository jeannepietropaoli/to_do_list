/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/TaskBoard.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/TaskBoard.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".taskListGrid {\n    width: 100%;\n    min-width: 600px;\n    background-color: lightgray;\n    row-gap: 10px;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: max-content;\n    grid-auto-rows: 45px;\n    justify-items: stretch;\n    align-items: stretch;\n}\n\n.task > *,\n.taskListHeaders > * {\n    margin: 0;\n}\n\n.taskListHeaders h4,\n.task input,\n.options,\n.priorityFlag {\n    padding: 5px 15px;\n}\n\n.task input {\n    border: 1px dotted transparent;\n    background-color: transparent;\n    max-width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    cursor: e-resize;\n}\n\n.task input::selection {\n    pointer-events: none;\n}\n\n.task,\n.taskListHeaders {\n    width: 100%;\n    min-width: max-content;\n    display: grid;\n    grid-template-columns: 18% 25% 10% 15% 10% 11% 1fr;\n    justify-content: stretch;\n    align-items: center;\n}\n\n.taskListGrid > * {\n    background-color: white;\n    margin: 0px;\n}\n\n@keyframes animate {\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n}\n\n\n.addBtn {\n\tposition: relative;\n\tz-index: 0;\n\tborder-radius: 6px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.addBtn:hover {\n    cursor: pointer;\n}\n\n.addBtn::before {\n    content: '';\n    position: absolute;\n    z-index: -2;\n    height: 100%;\n    width : 100%;\n\tborder-radius: 6px;\n    background: #1CFF70;\n    background-size: 600% 600%;\n}\n\n.addBtn::after {\n    content: '';\n    position: absolute;\n    z-index: -1;\n    left: 3px;\n    top: 3px;\n    width: calc(100% - 6px);\n    height: calc(100% - 6px);\n    background: white;\n    border-radius: 5px;\n}\n\n\t\n.addBtn:hover::before {\n    content: '';\n    position: absolute;\n    z-index: -2;\n    height: 100%;\n    width : 100%;\n\tborder-radius: 6px;\n    background: linear-gradient(45deg, #10e8a7, #bde810, #08c875);\n    background-size: 600% 600%;\n    animation: animate 4s ease infinite;\n}\n\n.addBtn:hover::after {\n    content: '';\n    position: absolute;\n    z-index: -1;\n    left: 3px;\n    top: 3px;\n    width: calc(100% - 6px);\n    height: calc(100% - 6px);\n    background: white;\n    border-radius: 5px;\n}\n\n.options img {\n    height: 20px;\n    width: auto;\n}\n\n.options img:hover {\n    cursor: pointer;\n}\n\n.priorityFlag {\n    height: 30px;\n    width: auto;\n}\n\n.taskBoardHeader {\n    display: flex;\n    justify-content: space-between ;\n}\n\n.flagsChart {\n    display: flex;\n    gap: 10px;\n    font-size: 10px;\n    background-color: white;\n    align-items: center;\n    height: fit-content;\n    padding: 5px;\n    \n}\n\n.flagsChart > div {\n    display: flex;\n    gap: 5px;\n    align-items: center;\n}\n\n.flagsChart img {\n    height: 20px;\n    width: auto;\n}\n\n.flagsChart p {\n    margin: 0;\n}\n\n.task{\n    position: relative;\n}\n\n.stateColorPoint {\n    position: absolute;\n    right: 15px;\n    bottom: 12px;\n    height: 20px;\n    width: auto;\n}\n\n", "",{"version":3,"sources":["webpack://./src/css/TaskBoard.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,gBAAgB;IAChB,2BAA2B;IAC3B,aAAa;IACb,aAAa;IACb,0BAA0B;IAC1B,+BAA+B;IAC/B,oBAAoB;IACpB,sBAAsB;IACtB,oBAAoB;AACxB;;AAEA;;IAEI,SAAS;AACb;;AAEA;;;;IAII,iBAAiB;AACrB;;AAEA;IACI,8BAA8B;IAC9B,6BAA6B;IAC7B,eAAe;IACf,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;;IAEI,WAAW;IACX,sBAAsB;IACtB,aAAa;IACb,kDAAkD;IAClD,wBAAwB;IACxB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,WAAW;AACf;;AAEA;CACC;EACC,2BAA2B;CAC5B;CACA;EACC,6BAA6B;CAC9B;CACA;EACC,2BAA2B;CAC5B;AACD;;;AAGA;CACC,kBAAkB;CAClB,UAAU;CACV,kBAAkB;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,YAAY;CACf,kBAAkB;IACf,mBAAmB;IACnB,0BAA0B;AAC9B;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,QAAQ;IACR,uBAAuB;IACvB,wBAAwB;IACxB,iBAAiB;IACjB,kBAAkB;AACtB;;;AAGA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,YAAY;CACf,kBAAkB;IACf,6DAA6D;IAC7D,0BAA0B;IAC1B,mCAAmC;AACvC;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,QAAQ;IACR,uBAAuB;IACvB,wBAAwB;IACxB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,SAAS;IACT,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;;AAEhB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,WAAW;AACf","sourcesContent":[".taskListGrid {\n    width: 100%;\n    min-width: 600px;\n    background-color: lightgray;\n    row-gap: 10px;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: max-content;\n    grid-auto-rows: 45px;\n    justify-items: stretch;\n    align-items: stretch;\n}\n\n.task > *,\n.taskListHeaders > * {\n    margin: 0;\n}\n\n.taskListHeaders h4,\n.task input,\n.options,\n.priorityFlag {\n    padding: 5px 15px;\n}\n\n.task input {\n    border: 1px dotted transparent;\n    background-color: transparent;\n    max-width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    cursor: e-resize;\n}\n\n.task input::selection {\n    pointer-events: none;\n}\n\n.task,\n.taskListHeaders {\n    width: 100%;\n    min-width: max-content;\n    display: grid;\n    grid-template-columns: 18% 25% 10% 15% 10% 11% 1fr;\n    justify-content: stretch;\n    align-items: center;\n}\n\n.taskListGrid > * {\n    background-color: white;\n    margin: 0px;\n}\n\n@keyframes animate {\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n}\n\n\n.addBtn {\n\tposition: relative;\n\tz-index: 0;\n\tborder-radius: 6px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.addBtn:hover {\n    cursor: pointer;\n}\n\n.addBtn::before {\n    content: '';\n    position: absolute;\n    z-index: -2;\n    height: 100%;\n    width : 100%;\n\tborder-radius: 6px;\n    background: #1CFF70;\n    background-size: 600% 600%;\n}\n\n.addBtn::after {\n    content: '';\n    position: absolute;\n    z-index: -1;\n    left: 3px;\n    top: 3px;\n    width: calc(100% - 6px);\n    height: calc(100% - 6px);\n    background: white;\n    border-radius: 5px;\n}\n\n\t\n.addBtn:hover::before {\n    content: '';\n    position: absolute;\n    z-index: -2;\n    height: 100%;\n    width : 100%;\n\tborder-radius: 6px;\n    background: linear-gradient(45deg, #10e8a7, #bde810, #08c875);\n    background-size: 600% 600%;\n    animation: animate 4s ease infinite;\n}\n\n.addBtn:hover::after {\n    content: '';\n    position: absolute;\n    z-index: -1;\n    left: 3px;\n    top: 3px;\n    width: calc(100% - 6px);\n    height: calc(100% - 6px);\n    background: white;\n    border-radius: 5px;\n}\n\n.options img {\n    height: 20px;\n    width: auto;\n}\n\n.options img:hover {\n    cursor: pointer;\n}\n\n.priorityFlag {\n    height: 30px;\n    width: auto;\n}\n\n.taskBoardHeader {\n    display: flex;\n    justify-content: space-between ;\n}\n\n.flagsChart {\n    display: flex;\n    gap: 10px;\n    font-size: 10px;\n    background-color: white;\n    align-items: center;\n    height: fit-content;\n    padding: 5px;\n    \n}\n\n.flagsChart > div {\n    display: flex;\n    gap: 5px;\n    align-items: center;\n}\n\n.flagsChart img {\n    height: 20px;\n    width: auto;\n}\n\n.flagsChart p {\n    margin: 0;\n}\n\n.task{\n    position: relative;\n}\n\n.stateColorPoint {\n    position: absolute;\n    right: 15px;\n    bottom: 12px;\n    height: 20px;\n    width: auto;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/initPageLoad.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/initPageLoad.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../logoFont.ttf */ "./src/logoFont.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../main.ttf */ "./src/main.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'logoFont';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype')\n}\n\n@font-face {\n    font-family: 'main';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 10fr;\n    justify-items: stretch;\n    font-family: 'main';\n    font-size: 0.8rem;\n    color: #333333;\n}\n\n.header {\n    box-shadow: 1px 1px 3px lightgrey, 2px 2px 4px lightgray;\n    grid-area: 1 / 2 / 2 / -1;\n    display: flex;\n    justify-content: end;\n    align-items: center;\n    gap: 15px;\n}\n\n.header > h3 {\n    font-size: 0.8rem;\n}\n\n.sidebar > * {\n    padding: 10px;\n}\n\n.sidebar {\n    grid-area: 1 / 1 / -1 / 2;\n    background-color: #333333;\n    color: white;\n}\n\nmain {\n    grid-area: 2 / 2 / -1 / -1;\n    background-color: lightgrey;\n    padding: 15px;\n}\n\n.logoContainer {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    background-color: #404040;\n}\n\n#logoText {\n    font-family: 'logoFont';\n    font-size: 18px;\n    color: #1CFF70;\n    margin: 0;\n}\n\n#taskImg {\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n}\n\n#profilePicture {\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n}\n\n.projectSection > h2 {\n    font-size: 1rem;\n}\n", "",{"version":3,"sources":["webpack://./src/css/initPageLoad.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB;AACJ;;AAEA;IACI,mBAAmB;IACnB,+DAAwC;AAC5C;;AAEA;IACI,SAAS;IACT,UAAU;IACV,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,4BAA4B;IAC5B,sBAAsB;IACtB,mBAAmB;IACnB,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,wDAAwD;IACxD,yBAAyB;IACzB,aAAa;IACb,oBAAoB;IACpB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,0BAA0B;IAC1B,2BAA2B;IAC3B,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,yBAAyB;AAC7B;;AAEA;IACI,uBAAuB;IACvB,eAAe;IACf,cAAc;IACd,SAAS;AACb;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB","sourcesContent":["@font-face {\n    font-family: 'logoFont';\n    src: url('../logoFont.ttf') format('truetype')\n}\n\n@font-face {\n    font-family: 'main';\n    src: url(../main.ttf) format('truetype');\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1fr 10fr;\n    justify-items: stretch;\n    font-family: 'main';\n    font-size: 0.8rem;\n    color: #333333;\n}\n\n.header {\n    box-shadow: 1px 1px 3px lightgrey, 2px 2px 4px lightgray;\n    grid-area: 1 / 2 / 2 / -1;\n    display: flex;\n    justify-content: end;\n    align-items: center;\n    gap: 15px;\n}\n\n.header > h3 {\n    font-size: 0.8rem;\n}\n\n.sidebar > * {\n    padding: 10px;\n}\n\n.sidebar {\n    grid-area: 1 / 1 / -1 / 2;\n    background-color: #333333;\n    color: white;\n}\n\nmain {\n    grid-area: 2 / 2 / -1 / -1;\n    background-color: lightgrey;\n    padding: 15px;\n}\n\n.logoContainer {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    background-color: #404040;\n}\n\n#logoText {\n    font-family: 'logoFont';\n    font-size: 18px;\n    color: #1CFF70;\n    margin: 0;\n}\n\n#taskImg {\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n}\n\n#profilePicture {\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n}\n\n.projectSection > h2 {\n    font-size: 1rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/modal.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modalContainer {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(220,220,220, 0.7);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 0.5s ease;\n}\n\n.modalContainer.shown {\n    opacity: 1;\n    pointer-events: auto;\n}\n\n.modal {\n    position: relative;\n    width: 500px;\n    max-width: 100%;\n    border: none;\n    border-radius: 8px;\n    box-shadow: 2px 5px 3px lightgray;\n    padding: 20px;\n    background-color: white;\n}\n\n#closeModal {\n    cursor: pointer;\n}\n\n#editMode {\n    position: absolute;\n    left: 20px;\n}\n\n#submit:disabled {\n    visibility: hidden;\n}\n\n#submit,\n#editMode {\n    border: 2px solid #1CFF70;\n    color: #1CFF70;\n    font-weight: 900;\n    background-color: white;\n    padding: 8px 25px;\n    border-radius: 5px;\n    box-shadow: 2px 5px 3px lightgray;\n    cursor: pointer;\n    position: relative;\n    bottom: 0px;\n    transition: bottom 0.1s;\n}\n\n#submit:hover,\n#editMode:hover {\n    bottom: 5px;\n    background-color: #1CFF70;\n    border-color: transparent;\n    color: white;\n}\n\n#editMode:disabled {\n    visibility: hidden;\n}\n\n.formField {\n    display: flex;\n    gap: 10px;\n}\n\n.formFields {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.formField label {\n    width: 100px;\n}\n\n.formField input,\n.formField select {\n    box-sizing: border-box;\n    width: 220px;\n}\n\n.formField input:hover {\n    border-color: #1CFF70;\n}\n\nform button {\n    margin-top: 15px;\n}\n\n.formField input:focus {\n    outline-color: #1CFF70;\n}\n\n.formField input[required] + span{\n    position: relative;\n    display: inline;\n}\n\n.formField input[required] + span::before {\n    content: 'required';\n    font-size: 9px;\n    padding: 0.1vw;\n    color: #333333;\n    background-color: #1CFF70;\n    position: absolute;\n    top: -1.5em;\n    right: 1.2em;\n    padding: 1px 8px;\n}\n\ninput[required]:invalid:placeholder-shown + span::after {\n    visibility: hidden;\n}\n\ninput[required]:invalid:not(:placeholder-shown) + span::after {\n    content: 'x';\n    font-size: 11px;\n    color: red;\n    position: absolute;\n    top: 2px;\n    right: -2px;\n    visibility: visible;\n}\n\ninput[required]:valid + span::after {\n    content: ' 🗸';\n    font-size: 11px;\n    color: green;\n    position: absolute;\n    top: 2px;\n    right: -2px;\n}\n\n#closeModal {\n    display: inline-block;\n    width: min-content;\n}\n", "",{"version":3,"sources":["webpack://./src/css/modal.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,YAAY;IACZ,aAAa;IACb,wCAAwC;IACxC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;IACV,oBAAoB;IACpB,6BAA6B;AACjC;;AAEA;IACI,UAAU;IACV,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,iCAAiC;IACjC,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;IAEI,yBAAyB;IACzB,cAAc;IACd,gBAAgB;IAChB,uBAAuB;IACvB,iBAAiB;IACjB,kBAAkB;IAClB,iCAAiC;IACjC,eAAe;IACf,kBAAkB;IAClB,WAAW;IACX,uBAAuB;AAC3B;;AAEA;;IAEI,WAAW;IACX,yBAAyB;IACzB,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,cAAc;IACd,cAAc;IACd,cAAc;IACd,yBAAyB;IACzB,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,UAAU;IACV,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,QAAQ;IACR,WAAW;AACf;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;AACtB","sourcesContent":[".modalContainer {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(220,220,220, 0.7);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 0.5s ease;\n}\n\n.modalContainer.shown {\n    opacity: 1;\n    pointer-events: auto;\n}\n\n.modal {\n    position: relative;\n    width: 500px;\n    max-width: 100%;\n    border: none;\n    border-radius: 8px;\n    box-shadow: 2px 5px 3px lightgray;\n    padding: 20px;\n    background-color: white;\n}\n\n#closeModal {\n    cursor: pointer;\n}\n\n#editMode {\n    position: absolute;\n    left: 20px;\n}\n\n#submit:disabled {\n    visibility: hidden;\n}\n\n#submit,\n#editMode {\n    border: 2px solid #1CFF70;\n    color: #1CFF70;\n    font-weight: 900;\n    background-color: white;\n    padding: 8px 25px;\n    border-radius: 5px;\n    box-shadow: 2px 5px 3px lightgray;\n    cursor: pointer;\n    position: relative;\n    bottom: 0px;\n    transition: bottom 0.1s;\n}\n\n#submit:hover,\n#editMode:hover {\n    bottom: 5px;\n    background-color: #1CFF70;\n    border-color: transparent;\n    color: white;\n}\n\n#editMode:disabled {\n    visibility: hidden;\n}\n\n.formField {\n    display: flex;\n    gap: 10px;\n}\n\n.formFields {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.formField label {\n    width: 100px;\n}\n\n.formField input,\n.formField select {\n    box-sizing: border-box;\n    width: 220px;\n}\n\n.formField input:hover {\n    border-color: #1CFF70;\n}\n\nform button {\n    margin-top: 15px;\n}\n\n.formField input:focus {\n    outline-color: #1CFF70;\n}\n\n.formField input[required] + span{\n    position: relative;\n    display: inline;\n}\n\n.formField input[required] + span::before {\n    content: 'required';\n    font-size: 9px;\n    padding: 0.1vw;\n    color: #333333;\n    background-color: #1CFF70;\n    position: absolute;\n    top: -1.5em;\n    right: 1.2em;\n    padding: 1px 8px;\n}\n\ninput[required]:invalid:placeholder-shown + span::after {\n    visibility: hidden;\n}\n\ninput[required]:invalid:not(:placeholder-shown) + span::after {\n    content: 'x';\n    font-size: 11px;\n    color: red;\n    position: absolute;\n    top: 2px;\n    right: -2px;\n    visibility: visible;\n}\n\ninput[required]:valid + span::after {\n    content: ' 🗸';\n    font-size: 11px;\n    color: green;\n    position: absolute;\n    top: 2px;\n    right: -2px;\n}\n\n#closeModal {\n    display: inline-block;\n    width: min-content;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/projectBoard.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/projectBoard.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n#projectName {\n    background-color: transparent;\n    border-width: 0px;\n    border-bottom: 2px solid #1CFF70;\n    color: white;\n    flex-grow: 1;\n}\n\n.addProject {\n    width: 30px;\n    height: 30px;\n   border-radius: 50%;\n   border: none;\n   background-color: #1CFF70;\n   color: white;\n   font-weight: 900;\n   cursor: pointer;\n   position: relative;\n}\n\n.addProject:hover{\n    transform: rotate(-180deg);\n    transition: 0.5s;\n    bottom: 2px;\n    \n}\n\n.addProject img {\n    width: 55%;\n    height: auto;\n    position: absolute;\n    top: 50%; right: 50%;\n    transform: translate(50%,-50%);\n}\n\n.addProjectContainer {\n    display: flex;\n    gap: 10px;\n}\n\nli {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-radius: 8px;\n    padding: 8px 15px;\n    margin-bottom: 10px;\n    border: 1px solid transparent;\n}\n\nli h4 {\n    flex-grow: 1;\n    margin: 0;\n}\n\n.projectSection li:hover {\n    cursor: pointer;\n    border: 1px solid #1CFF70;\n\n}\n\nli img {\n    height: 22px;\n    width: auto;\n}\n\n#projectList {\n    padding: 0px;\n}\n\n.projectSection {\n\n}", "",{"version":3,"sources":["webpack://./src/css/projectBoard.css"],"names":[],"mappings":";;AAEA;IACI,6BAA6B;IAC7B,iBAAiB;IACjB,gCAAgC;IAChC,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;GACb,kBAAkB;GAClB,YAAY;GACZ,yBAAyB;GACzB,YAAY;GACZ,gBAAgB;GAChB,eAAe;GACf,kBAAkB;AACrB;;AAEA;IACI,0BAA0B;IAC1B,gBAAgB;IAChB,WAAW;;AAEf;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,QAAQ,EAAE,UAAU;IACpB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,eAAe;IACf,yBAAyB;;AAE7B;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;;AAEA","sourcesContent":["\n\n#projectName {\n    background-color: transparent;\n    border-width: 0px;\n    border-bottom: 2px solid #1CFF70;\n    color: white;\n    flex-grow: 1;\n}\n\n.addProject {\n    width: 30px;\n    height: 30px;\n   border-radius: 50%;\n   border: none;\n   background-color: #1CFF70;\n   color: white;\n   font-weight: 900;\n   cursor: pointer;\n   position: relative;\n}\n\n.addProject:hover{\n    transform: rotate(-180deg);\n    transition: 0.5s;\n    bottom: 2px;\n    \n}\n\n.addProject img {\n    width: 55%;\n    height: auto;\n    position: absolute;\n    top: 50%; right: 50%;\n    transform: translate(50%,-50%);\n}\n\n.addProjectContainer {\n    display: flex;\n    gap: 10px;\n}\n\nli {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-radius: 8px;\n    padding: 8px 15px;\n    margin-bottom: 10px;\n    border: 1px solid transparent;\n}\n\nli h4 {\n    flex-grow: 1;\n    margin: 0;\n}\n\n.projectSection li:hover {\n    cursor: pointer;\n    border: 1px solid #1CFF70;\n\n}\n\nli img {\n    height: 22px;\n    width: auto;\n}\n\n#projectList {\n    padding: 0px;\n}\n\n.projectSection {\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInDay": () => (/* binding */ secondsInDay),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute),
/* harmony export */   "secondsInMonth": () => (/* binding */ secondsInMonth),
/* harmony export */   "secondsInQuarter": () => (/* binding */ secondsInQuarter),
/* harmony export */   "secondsInWeek": () => (/* binding */ secondsInWeek),
/* harmony export */   "secondsInYear": () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */

var daysInYear = 365.2425;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;
/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */

var secondsInDay = secondsInHour * 24;
/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */

var secondsInWeek = secondsInDay * 7;
/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */

var secondsInYear = secondsInDay * daysInYear;
/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */

var secondsInMonth = secondsInYear / 12;
/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/isAfter/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isAfter/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAfter)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|Number} date - the date that should be after the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */

function isAfter(dirtyDate, dirtyDateToCompare) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dateToCompare = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isBefore/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/isBefore/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isBefore)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param {Date|Number} date - the date that should be before the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is before the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */

function isBefore(dirtyDate, dirtyDateToCompare) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dateToCompare = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateToCompare);
  return date.getTime() < dateToCompare.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, options) {
  var _options$additionalDi;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/css/TaskBoard.css":
/*!*******************************!*\
  !*** ./src/css/TaskBoard.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_TaskBoard_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./TaskBoard.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/TaskBoard.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_TaskBoard_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_TaskBoard_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_TaskBoard_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_TaskBoard_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/initPageLoad.css":
/*!**********************************!*\
  !*** ./src/css/initPageLoad.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_initPageLoad_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./initPageLoad.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/initPageLoad.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_initPageLoad_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_initPageLoad_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_initPageLoad_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_initPageLoad_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/modal.css":
/*!***************************!*\
  !*** ./src/css/modal.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/projectBoard.css":
/*!**********************************!*\
  !*** ./src/css/projectBoard.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_projectBoard_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./projectBoard.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/projectBoard.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_projectBoard_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_projectBoard_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_projectBoard_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_projectBoard_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/functionnalities/Project.js":
/*!*****************************************!*\
  !*** ./src/functionnalities/Project.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "ProjectList": () => (/* binding */ ProjectList),
/* harmony export */   "firstProject": () => (/* binding */ firstProject)
/* harmony export */ });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/functionnalities/Task.js");
/* harmony import */ var _view_ihm_ProjectBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view  ihm/ProjectBoard */ "./src/view  ihm/ProjectBoard.js");
/* harmony import */ var _view_ihm_TaskBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view  ihm/TaskBoard */ "./src/view  ihm/TaskBoard.js");




class Project {

    constructor(title) {
        this._title = title;
        this._taskList = (0,_Task__WEBPACK_IMPORTED_MODULE_0__.TaskList)();
    }
    
    get title() {
        return this._title
    }

    set title(value) {
        this._title = value;
    }

    get taskList() {
        return this._taskList;
    }
}

const ProjectList = (()=> {

    let currentProject;

    const list = [];

    const getList = ()=> {
        return list;
    }

    const addProject = (newProject)=> {
        list.push(newProject);
    }

    const deleteProject = (projectIndex) => {
        list.splice(projectIndex , 1);
    }

    return {
        currentProject,
        getList,
        addProject,
        deleteProject
    }
})()

const firstProject = (title)=> {
    const project = new Project(title);
    ProjectList.addProject(project);
    _view_ihm_ProjectBoard__WEBPACK_IMPORTED_MODULE_1__.ProjectBoard.displayNewProject(project.title);
    /* TaskBoard.displayProjectTitle(project.title) */
    return project
}

ProjectList.currentProject = firstProject('First Project - Start here');
_view_ihm_ProjectBoard__WEBPACK_IMPORTED_MODULE_1__.ProjectBoard.highlightCurrentProject(_view_ihm_ProjectBoard__WEBPACK_IMPORTED_MODULE_1__.ProjectBoard.selectProjectBoardCurrentProject());






/***/ }),

/***/ "./src/functionnalities/Task.js":
/*!**************************************!*\
  !*** ./src/functionnalities/Task.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "TaskList": () => (/* binding */ TaskList)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isAfter/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isBefore/index.js");


class Task {

    constructor(title, description, dueDate, category, state) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._category = category;
        this._state = state;
    }
    
    get title() {
        return this._title
    }

    set title(value) {
        this._title = value;
    }

    get description() {
        return this._description
    }

    set description(value) {
        this._description = value;
    }

    get dueDate() {
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(this._dueDate);
    }

    set dueDate(value) {
        this._dueDate = value;
    }

    get category() {
        return this._category
    }

    set category(value) {
        this._category = value;
    }

    get state() {
        return this._state;
    }

    set state(value) {
        this._state = value;
    }

    get priority() {
        let today = new Date();
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(this.dueDate, today)) {
            return 'dueToday';
        }
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(today, this.dueDate)) {
            return 'late';
        }
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(today, this.dueDate)) {
            return 'onTime';
        }
    }
}

const TaskList = ()=> {
    const list = [];

    const getList = ()=> {
        return list;
    }

    const addTask = (newTask)=> {
        list.push(newTask);
    }

    const deleteTask = (taskIndex) => {
        list.splice(taskIndex , 1);
    }

    const editTask = (taskIndex, editedTask) => {
        list.splice(taskIndex, 1, editedTask);
    }

    return {
        getList,
        addTask,
        deleteTask, 
        editTask
    }
}





/***/ }),

/***/ "./src/functionnalities/modal.js":
/*!***************************************!*\
  !*** ./src/functionnalities/modal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "form": () => (/* binding */ form),
/* harmony export */   "formEditMode": () => (/* binding */ formEditMode),
/* harmony export */   "manageModalReset": () => (/* binding */ manageModalReset),
/* harmony export */   "modalContainer": () => (/* binding */ modalContainer)
/* harmony export */ });
/* harmony import */ var _functionnalities_Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functionnalities/Task */ "./src/functionnalities/Task.js");
/* harmony import */ var _view_ihm_TaskBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view  ihm/TaskBoard */ "./src/view  ihm/TaskBoard.js");
/* harmony import */ var _functionnalities_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functionnalities/Project */ "./src/functionnalities/Project.js");




const modalContainer = (()=> {
    const MODAL_CONTAINER = document.querySelector('.modalContainer');
    const closeModalBtn = document.querySelector('#closeModal');
    const openModal = ()=> {
        MODAL_CONTAINER.classList.add('shown');
    }
    const closeModal = ()=> {
        MODAL_CONTAINER.classList.remove('shown');
    }
    return {
        openModal,
        closeModal,
        closeModalBtn
    }
})()

modalContainer.closeModalBtn.addEventListener('click', ()=> {
    modalContainer.closeModal();
    form.clearInputsValues();
});

const form = (()=> {
    const INPUTS = Array.from(document.querySelectorAll('.modal input[id]'));
    const SUBMIT_BTN = document.querySelector('#submit');
    const REQUIRED_INPUTS = Array.from(document.querySelectorAll('input[required]'));

    const removePlaceholderAfterInputUse = (()=> {
        REQUIRED_INPUTS.forEach(requiredInput => {
            requiredInput.addEventListener('click', ()=> {
                requiredInput.removeAttribute('placeholder');
            })
        })
    })()

    const addStateValue = ()=> {
        INPUTS.push(document.querySelector('.modal select'));
    }

    const getTaskDetailsValues = ()=> {
        addStateValue();
        return  INPUTS.map(input => {
            return input.value;
        })
    }

    const isOneInputInvalid = ()=> {
        return INPUTS.some(input => {
            return input == '';
        })
    }

    const clearInputsValues = ()=> {
        INPUTS.forEach(input => input.value = '');
        REQUIRED_INPUTS.forEach(requiredInput => {
            requiredInput.setAttribute('placeholder', ' ')
        })
    }

    const filterInvalidInputs = () => {
        const invalidInputs = INPUTS.filter(input => {
            return input.value == ''
        })
        return invalidInputs
    }

    const errorDisplay = () => {
        filterInvalidInputs().forEach(invalidInput => {
            invalidInput.setAttribute('placeholder', 'enter a valid value');
        })
    }

    return {
        INPUTS,
        getTaskDetailsValues,
        isOneInputInvalid,
        clearInputsValues,
        SUBMIT_BTN,
        errorDisplay
    }
})()

const formEditMode = (()=> {
    const SUBMIT_CHANGES_BTN = document.querySelector('#editMode');

    const open = (currentInputs)=> {
        form.SUBMIT_BTN.disabled = true;
        SUBMIT_CHANGES_BTN.disabled = false;
        fillFormInputsWithCurrentValues(currentInputs);
        modalContainer.openModal();
    }
    
    const inputsValidation = () => {
        form.INPUTS.forEach(input => {
            input.addEventListener('change', ()=> {
                (!form.isOneInputInvalid()) ? SUBMIT_CHANGES_BTN.disabled = false : 
                    SUBMIT_CHANGES_BTN.disabled = true;
                })
            })
    }

    const fillFormInputsWithCurrentValues = (currentValues) => {
        form.INPUTS.forEach((input) => {
            const currentValue = currentValues.filter((element)=> {
                return element.className === `_${input.id}`;
            }) 
            input.value = currentValue[0].value;
        }) 
    }

    const validateChanges = (e, inputs, stateColorPoint, flag)=> {
            let editedTask = new _functionnalities_Task__WEBPACK_IMPORTED_MODULE_0__.Task(...form.getTaskDetailsValues());
            _functionnalities_Project__WEBPACK_IMPORTED_MODULE_2__.ProjectList.currentProject.taskList.editTask(e.target.parentElement.parentElement.getAttribute('data-index'), editedTask);
            _view_ihm_TaskBoard__WEBPACK_IMPORTED_MODULE_1__.editButton.displayEditedTask(editedTask, inputs, stateColorPoint, flag);
            manageModalReset();
            form.SUBMIT_BTN.disabled = false;
            SUBMIT_CHANGES_BTN.disabled = true;
    }

    return { 
        inputsValidation,
        fillFormInputsWithCurrentValues,
        SUBMIT_CHANGES_BTN, 
        open,
        validateChanges
    }
})()

function manageModalReset() {
    modalContainer.closeModal();
    form.clearInputsValues();
}








/***/ }),

/***/ "./src/view  ihm/ProjectBoard.js":
/*!***************************************!*\
  !*** ./src/view  ihm/ProjectBoard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectBoard": () => (/* binding */ ProjectBoard),
/* harmony export */   "addProjectBtn": () => (/* binding */ addProjectBtn),
/* harmony export */   "projectNameInput": () => (/* binding */ projectNameInput)
/* harmony export */ });
/* harmony import */ var _functionnalities_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functionnalities/Project */ "./src/functionnalities/Project.js");
/* harmony import */ var _TaskBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskBoard */ "./src/view  ihm/TaskBoard.js");




const addProjectBtn = document.querySelector('.addProject');
const projectNameInput = document.querySelector('#projectName');

const ProjectBoard = (() => {
    const projectList = document.querySelector('#projectList');

    const clearProjectNameInput = ()=> {
        projectNameInput.value = '';
    }

    const createNewProjectContainer = ()=> {
        const newProjectContainer = document.createElement('li');
        projectList.appendChild(newProjectContainer);
        return newProjectContainer;
    }
    
    const displayNewProjectTitle = (projectName, newProjectContainer) => {
        const newProjectTitle = document.createElement('h4');
        newProjectTitle.textContent = projectName;
        newProjectContainer.appendChild(newProjectTitle);
        selectTheProject(newProjectTitle);
    }

    const displayNewProjectDeleteBtn = (newProjectContainer) => {
        const newProjectDeleteBtn = document.createElement('img');
        newProjectDeleteBtn.setAttribute('src', '../src/deleteProject.png');
        newProjectDeleteBtn.setAttribute('data-index', _functionnalities_Project__WEBPACK_IMPORTED_MODULE_0__.ProjectList.getList().length-1); 
        newProjectContainer.appendChild(newProjectDeleteBtn);
        return newProjectDeleteBtn;
    }

    const selectTheProject = (clickableSection)=> {
        clickableSection.addEventListener('click', (e)=> {
            if (_functionnalities_Project__WEBPACK_IMPORTED_MODULE_0__.ProjectList.getList().includes(_functionnalities_Project__WEBPACK_IMPORTED_MODULE_0__.ProjectList.currentProject)) {
                removeHighlight(selectProjectBoardCurrentProject());
            }
            _functionnalities_Project__WEBPACK_IMPORTED_MODULE_0__.ProjectList.currentProject = _functionnalities_Project__WEBPACK_IMPORTED_MODULE_0__.ProjectList.getList()[e.target.nextElementSibling.getAttribute('data-index')];
            _TaskBoard__WEBPACK_IMPORTED_MODULE_1__.TaskBoard.clearTasks();
            highlightCurrentProject(selectProjectBoardCurrentProject());
            _TaskBoard__WEBPACK_IMPORTED_MODULE_1__.TaskBoard.displayProjectTitle(_functionnalities_Project__WEBPACK_IMPORTED_MODULE_0__.ProjectList.currentProject.title);
            let i=0;
            _functionnalities_Project__WEBPACK_IMPORTED_MODULE_0__.ProjectList.currentProject.taskList.getList().forEach((task)=> {
                _TaskBoard__WEBPACK_IMPORTED_MODULE_1__.newTask.displayEachTask(i);
                i = i+1;
                })
        })
    }

    const updateDataIndex = ()=> {
        const deletBtns = Array.from(document.querySelectorAll('img[data-index]'));
        console.log(deletBtns)
        if (deletBtns.length>0){
            deletBtns[0].setAttribute('data-index', 0);
            for (let i=0 ; i<deletBtns.length-1; i++){
                deletBtns[i+1].setAttribute('data-index', parseInt(deletBtns[i].getAttribute('data-index'))+1);
            }
        }
    }

    const activateDeleteBtn = (deleteBtn) => {
        deleteBtn.addEventListener('click', (e)=> {
            if (_functionnalities_Project__WEBPACK_IMPORTED_MODULE_0__.ProjectList.currentProject === _functionnalities_Project__WEBPACK_IMPORTED_MODULE_0__.ProjectList.getList()[e.target.getAttribute('data-index')]){
                _TaskBoard__WEBPACK_IMPORTED_MODULE_1__.TaskBoard.clearTasks();
            }
            _functionnalities_Project__WEBPACK_IMPORTED_MODULE_0__.ProjectList.deleteProject(e.target.getAttribute('data-index'));
            projectList.removeChild(e.target.parentElement);
            updateDataIndex();
            
        })
    }

    const displayNewProject = (projectName) => {
        const newProjectContainer = createNewProjectContainer();
        displayNewProjectTitle(projectName, newProjectContainer);
        const deleteBtn = displayNewProjectDeleteBtn(newProjectContainer);
        activateDeleteBtn(deleteBtn);
        updateDataIndex();
    }

    const highlightCurrentProject = (projectBoardCurrentProject) => {
        projectBoardCurrentProject.style.backgroundColor = 'rgba(255,255,255, 0.3)';
    }

    const removeHighlight = (projectBoardCurrentProject) => {
        projectBoardCurrentProject.style.backgroundColor = 'transparent';
    }

    const selectProjectBoardCurrentProject = ()=> {
        const currentProjectIndex = _functionnalities_Project__WEBPACK_IMPORTED_MODULE_0__.ProjectList.getList().indexOf(_functionnalities_Project__WEBPACK_IMPORTED_MODULE_0__.ProjectList.currentProject).toString();
        return document.querySelector(`img[data-index = '${currentProjectIndex}']`).parentElement;
    }

    return {
        displayNewProject,
        clearProjectNameInput,
        highlightCurrentProject,
        selectProjectBoardCurrentProject
    }
})()


/***/ }),

/***/ "./src/view  ihm/TaskBoard.js":
/*!************************************!*\
  !*** ./src/view  ihm/TaskBoard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADDTASKBTN": () => (/* binding */ ADDTASKBTN),
/* harmony export */   "TASKGRID": () => (/* binding */ TASKGRID),
/* harmony export */   "TaskBoard": () => (/* binding */ TaskBoard),
/* harmony export */   "editButton": () => (/* binding */ editButton),
/* harmony export */   "newTask": () => (/* binding */ newTask),
/* harmony export */   "taskOptions": () => (/* binding */ taskOptions)
/* harmony export */ });
/* harmony import */ var _css_TaskBoard_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/TaskBoard.css */ "./src/css/TaskBoard.css");
/* harmony import */ var _functionnalities_Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functionnalities/Task */ "./src/functionnalities/Task.js");
/* harmony import */ var _functionnalities_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functionnalities/modal */ "./src/functionnalities/modal.js");
/* harmony import */ var _functionnalities_Project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functionnalities/Project */ "./src/functionnalities/Project.js");





const TASKGRID = document.querySelector('.taskListGrid');
const ADDTASKBTN = document.querySelector('.addBtn');

const TaskBoard = (()=> {
    const clearTasks = ()=> {
        const tasks = Array.from(document.querySelectorAll('.task'));
        tasks.forEach(task => {
            task.remove();
        })
    }

    const displayProjectTitle = (title)=> {
        const taskBoardProjectTitle = document.querySelector('#taskBoardProjectTitle');
        taskBoardProjectTitle.textContent = `TaskBoard ~ Selected project : ${title}`;
    }

    const displayFirstProjectTitle = (() => {
        displayProjectTitle(_functionnalities_Project__WEBPACK_IMPORTED_MODULE_3__.ProjectList.currentProject.title);
    })()
    
    return {
        clearTasks,
        displayProjectTitle
    }
})()

const deleteButton = (()=> {
    const create = ()=> {
        const deleteTask = document.createElement('img');
        deleteTask.classList.add('deleteTask');
        deleteTask.setAttribute('src', '../src/delete.svg');
        manageDeleteTask(deleteTask);
        changeUrlOnHover(deleteTask)
        return deleteTask;
    }

    const updateDataIndex = ()=> {
        const taskContainers = Array.from(document.querySelectorAll('div[data-index]'));
        if (taskContainers.length>0){
            taskContainers[0].setAttribute('data-index', 0);
            for (let i=0 ; i<taskContainers.length-1; i++){
                taskContainers[i+1].setAttribute('data-index', parseInt(taskContainers[i].getAttribute('data-index'))+1);
            }
        }
    }

    const manageDeleteTask = (deleteBtn)=> {
        deleteBtn.addEventListener('click', (e) => {
            _functionnalities_Project__WEBPACK_IMPORTED_MODULE_3__.ProjectList.currentProject.taskList.deleteTask(e.target.parentElement.parentElement.getAttribute('data-index'));
            TASKGRID.removeChild(e.target.parentElement.parentElement);
            updateDataIndex();
        })
    }

    const changeUrlOnHover = (deleteBtn) => {
        deleteBtn.addEventListener('mouseover', ()=> {
            deleteBtn.setAttribute('src', '../src/deleteHover.png')
        })
        deleteBtn.addEventListener('mouseout', ()=> {
            deleteBtn.setAttribute('src', '../src/delete.svg')
        })
    }
    
    return {
        create
    }
})() 

const editButton = (()=> {
    const create = ()=> {
        const editTask = document.createElement('img');
        editTask.classList.add('editTask');
        editTask.setAttribute('src', '../src/edit.svg');
        manageEditTask(editTask);
        changeUrlOnHover(editTask)
        return editTask;
    }

    const manageEditTask = (editBtn)=> {
        editBtn.addEventListener('click', (e)=> {
            const inputs = Array.from(e.target.parentElement.parentElement.children);
            const flag = inputs.filter(element => {
               return element.classList.contains('priorityFlag');
            });
            const stateColorPoint = inputs.filter(element => {
                return element.classList.contains('stateColorPoint');
            });
            _functionnalities_modal__WEBPACK_IMPORTED_MODULE_2__.formEditMode.open(inputs);
            _functionnalities_modal__WEBPACK_IMPORTED_MODULE_2__.formEditMode.inputsValidation();
            _functionnalities_modal__WEBPACK_IMPORTED_MODULE_2__.formEditMode.SUBMIT_CHANGES_BTN.addEventListener('click', ()=> {
                    _functionnalities_modal__WEBPACK_IMPORTED_MODULE_2__.formEditMode.validateChanges(e, inputs, stateColorPoint[0] , flag[0]);
            }, {once : true})
        })
}

    const displayEditedTask = (editedTask, inputs, stateColorPoint, priorityFlag)=> {
        for (const detail in editedTask){
            let valueToUpdate = inputs.filter((element) => {
                return element.className === `${detail}`;
            })
            valueToUpdate[0].value= editedTask[detail];
        }

        stateColorPoint.setAttribute('src', `../src/${editedTask.state}.png`);
        priorityFlag.setAttribute('src', `../src/flag_${editedTask.priority}.png`);
        /* taskState.editColor(editedTask); */
        /* taskPriority.editColor(editedTask); */
       /*  taskState.checkIfDone(editedTask); */
    }

    const changeUrlOnHover = (editBtn) => {
        editBtn.addEventListener('mouseover', ()=> {
            editBtn.setAttribute('src', '../src/editHover.png')
        })
        editBtn.addEventListener('mouseout', ()=> {
            editBtn.setAttribute('src', '../src/edit.svg')
        })
    }

    return {
        create,
        displayEditedTask
    }
})() 

const taskOptions = (()=> {
    const createOptionsDiv = ()=> {
        const options = document.createElement('div');
        options.classList.add('options');
        return options;
    }

    const optionsDivSetUp = ()=> {
        const optionsDiv = createOptionsDiv();
        optionsDiv.append(editButton.create(), deleteButton.create());
        return optionsDiv
    }

    return {
        optionsDivSetUp
    }
})()

const taskState = (task)=> {
    const stateColorPoint = document.createElement('img');

    const createStateColorPoint = (task)=> {
        stateColorPoint.classList.add('stateColorPoint');
        stateColorPoint.setAttribute('src', `../src/${task.state}.png`);
        return stateColorPoint;
    }

    const editColor = (task)=> {
        stateColorPoint.setAttribute('src', `../src/${task.state}.png`)
    }

    const checkIfDone = (task)=> {
        return task.state === 'done';
    }
    return {
        createStateColorPoint,
        editColor, 
        checkIfDone
    }
}

const taskPriority = ()=> {
    const priorityFlag = document.createElement('img');

    const createPriorityDiv = (task)=> {
        priorityFlag.setAttribute('src', `../src/flag_${task.priority}.png`);
        priorityFlag.classList.add('priorityFlag');
        return priorityFlag;
    }

    const editColor = (task)=> {
        priorityFlag.setAttribute('src', `../src/flag_${task.priority}.png`);
    }
    return {
        createPriorityDiv,
        editColor
    }
}

const newTask = (()=> {
    const getNewTask = ()=> {
        const list = _functionnalities_Project__WEBPACK_IMPORTED_MODULE_3__.ProjectList.currentProject.taskList.getList();
        return list[list.length-1];
    }

    const createNewTaskContainer = ()=> {
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task');
        taskContainer.setAttribute('data-index', _functionnalities_Project__WEBPACK_IMPORTED_MODULE_3__.ProjectList.currentProject.taskList.getList().length-1);
        TASKGRID.appendChild(taskContainer);
        return taskContainer;
    }

    const createTaskDetail = (detail, newTask)=> {
        const detailToDisplay = document.createElement('input');
        detailToDisplay.readOnly = true;
        detailToDisplay.classList.add(detail);
        detailToDisplay.value = newTask[detail];
        return detailToDisplay;
    }

    const appendTaskDetail = (taskContainer, detailToDisplay)=> {
        taskContainer.appendChild(detailToDisplay);
    } 
    
    return {
        display : ()=> {
            const newTask = getNewTask();
            const taskContainer = createNewTaskContainer();
            for (const detail in newTask){
                const detailToDisplay = createTaskDetail(detail, newTask);
                appendTaskDetail(taskContainer, detailToDisplay);
            }
            const flag = taskPriority();
            taskContainer.appendChild(flag.createPriorityDiv(newTask));
            taskContainer.appendChild(taskOptions.optionsDivSetUp());
            const stateColorPoint = taskState(); 
            taskContainer.appendChild(stateColorPoint.createStateColorPoint(newTask));
            if (stateColorPoint.checkIfDone(newTask)) {
                taskContainer.style.opacity = 0.7;
            };
        }
        ,
        displayEachTask : (i)=> {
            const newTask = _functionnalities_Project__WEBPACK_IMPORTED_MODULE_3__.ProjectList.currentProject.taskList.getList()[i]
            const taskContainer = createNewTaskContainer();
            for (const detail in newTask){
                const detailToDisplay = createTaskDetail(detail, newTask);
                appendTaskDetail(taskContainer, detailToDisplay);
            }
            const flag = taskPriority();
            taskContainer.appendChild(flag.createPriorityDiv(newTask));
            taskContainer.appendChild(taskOptions.optionsDivSetUp());
            const stateColorPoint = taskState(); 
            taskContainer.appendChild(stateColorPoint.createStateColorPoint(newTask));
            if (stateColorPoint.checkIfDone(newTask)) {
                taskContainer.style.opacity = 0.7;
            };
        }
    }
})()

/***/ }),

/***/ "./src/logoFont.ttf":
/*!**************************!*\
  !*** ./src/logoFont.ttf ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1258d94610bfa4200be7.ttf";

/***/ }),

/***/ "./src/main.ttf":
/*!**********************!*\
  !*** ./src/main.ttf ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_initPageLoad_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/initPageLoad.css */ "./src/css/initPageLoad.css");
/* harmony import */ var _css_modal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/modal.css */ "./src/css/modal.css");
/* harmony import */ var _css_projectBoard_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/projectBoard.css */ "./src/css/projectBoard.css");
/* harmony import */ var _functionnalities_Task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functionnalities/Task */ "./src/functionnalities/Task.js");
/* harmony import */ var _view_ihm_TaskBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view  ihm/TaskBoard */ "./src/view  ihm/TaskBoard.js");
/* harmony import */ var _functionnalities_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functionnalities/modal */ "./src/functionnalities/modal.js");
/* harmony import */ var _view_ihm_ProjectBoard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view  ihm/ProjectBoard */ "./src/view  ihm/ProjectBoard.js");
/* harmony import */ var _functionnalities_Project__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functionnalities/Project */ "./src/functionnalities/Project.js");









_view_ihm_TaskBoard__WEBPACK_IMPORTED_MODULE_4__.ADDTASKBTN.addEventListener('click', ()=> {_functionnalities_modal__WEBPACK_IMPORTED_MODULE_5__.modalContainer.openModal()});

function manageTaskCreation() {
    const brandNewTask = new _functionnalities_Task__WEBPACK_IMPORTED_MODULE_3__.Task(..._functionnalities_modal__WEBPACK_IMPORTED_MODULE_5__.form.getTaskDetailsValues());
    console.log(brandNewTask);
    console.log(brandNewTask.priority);
    _functionnalities_Project__WEBPACK_IMPORTED_MODULE_7__.ProjectList.currentProject.taskList.addTask(brandNewTask);
    _view_ihm_TaskBoard__WEBPACK_IMPORTED_MODULE_4__.newTask.display();
}

_functionnalities_modal__WEBPACK_IMPORTED_MODULE_5__.form.SUBMIT_BTN.addEventListener('click', ()=> {
    if (!_functionnalities_modal__WEBPACK_IMPORTED_MODULE_5__.form.isOneInputInvalid()){
        if (_functionnalities_modal__WEBPACK_IMPORTED_MODULE_5__.form.SUBMIT_BTN.id === 'submit'){
            manageTaskCreation();
            (0,_functionnalities_modal__WEBPACK_IMPORTED_MODULE_5__.manageModalReset)();
        }
    }
    else {
        _functionnalities_modal__WEBPACK_IMPORTED_MODULE_5__.form.errorDisplay()
    }
})


_view_ihm_ProjectBoard__WEBPACK_IMPORTED_MODULE_6__.addProjectBtn.addEventListener('click', ()=> {
    if (_view_ihm_ProjectBoard__WEBPACK_IMPORTED_MODULE_6__.projectNameInput.value !== ''){
        const brandNewProject = new _functionnalities_Project__WEBPACK_IMPORTED_MODULE_7__.Project(_view_ihm_ProjectBoard__WEBPACK_IMPORTED_MODULE_6__.projectNameInput.value);
        _functionnalities_Project__WEBPACK_IMPORTED_MODULE_7__.ProjectList.addProject(brandNewProject);
        _view_ihm_ProjectBoard__WEBPACK_IMPORTED_MODULE_6__.ProjectBoard.displayNewProject(brandNewProject.title);
        _view_ihm_ProjectBoard__WEBPACK_IMPORTED_MODULE_6__.ProjectBoard.clearProjectNameInput();
    }
})














})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RMaUM7QUFDaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBLElBQUksa0dBQTJDO0FBQy9DLElBQUksZ0VBQWU7QUFDbkI7O0FBRUEscUZBQWdDO0FBQ2hDLFNBQVMsMkVBQXNCO0FBQy9CLFlBQVksdUVBQWtCO0FBQzlCO0FBQ0EsWUFBWSx5RUFBZ0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzRUFBaUI7QUFDekI7QUFDQSxDQUFDOzs7QUFHRCxrRkFBOEI7QUFDOUIsUUFBUSwwRUFBc0I7QUFDOUIsb0NBQW9DLDhEQUFPLENBQUMsMEVBQXNCO0FBQ2xFLFFBQVEsNkVBQXNCO0FBQzlCLFFBQVEsa0ZBQThCO0FBQ3RDLFFBQVEsc0ZBQWtDO0FBQzFDO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvY3NzL1Rhc2tCb2FyZC5jc3MiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9jc3MvaW5pdFBhZ2VMb2FkLmNzcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2Nzcy9tb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9jc3MvcHJvamVjdEJvYXJkLmNzcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzQWZ0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNCZWZvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlSVNPL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvY3NzL1Rhc2tCb2FyZC5jc3M/M2VhOCIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2Nzcy9pbml0UGFnZUxvYWQuY3NzP2JmMGIiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9jc3MvbW9kYWwuY3NzP2YzODEiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9jc3MvcHJvamVjdEJvYXJkLmNzcz8wMzExIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9mdW5jdGlvbm5hbGl0aWVzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9mdW5jdGlvbm5hbGl0aWVzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9mdW5jdGlvbm5hbGl0aWVzL21vZGFsLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvdmlldyAgaWhtL1Byb2plY3RCb2FyZC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL3ZpZXcgIGlobS9UYXNrQm9hcmQuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnRhc2tMaXN0R3JpZCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4td2lkdGg6IDYwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICAgIHJvdy1nYXA6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50O1xcbiAgICBncmlkLWF1dG8tcm93czogNDVweDtcXG4gICAganVzdGlmeS1pdGVtczogc3RyZXRjaDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcblxcbi50YXNrID4gKixcXG4udGFza0xpc3RIZWFkZXJzID4gKiB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnRhc2tMaXN0SGVhZGVycyBoNCxcXG4udGFzayBpbnB1dCxcXG4ub3B0aW9ucyxcXG4ucHJpb3JpdHlGbGFnIHtcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XFxufVxcblxcbi50YXNrIGlucHV0IHtcXG4gICAgYm9yZGVyOiAxcHggZG90dGVkIHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgY3Vyc29yOiBlLXJlc2l6ZTtcXG59XFxuXFxuLnRhc2sgaW5wdXQ6OnNlbGVjdGlvbiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4udGFzayxcXG4udGFza0xpc3RIZWFkZXJzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTglIDI1JSAxMCUgMTUlIDEwJSAxMSUgMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrTGlzdEdyaWQgPiAqIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xcblxcdDAlIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XFxuXFx0fVxcblxcdDUwJSB7XFxuXFx0XFx0YmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XFxuXFx0fVxcblxcdDEwMCUge1xcblxcdFxcdGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcXG5cXHR9XFxufVxcblxcblxcbi5hZGRCdG4ge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR6LWluZGV4OiAwO1xcblxcdGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGRCdG46aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGRCdG46OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IC0yO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoIDogMTAwJTtcXG5cXHRib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJhY2tncm91bmQ6ICMxQ0ZGNzA7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNjAwJSA2MDAlO1xcbn1cXG5cXG4uYWRkQnRuOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBsZWZ0OiAzcHg7XFxuICAgIHRvcDogM3B4O1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNnB4KTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2cHgpO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5cXHRcXG4uYWRkQnRuOmhvdmVyOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAtMjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aCA6IDEwMCU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMxMGU4YTcsICNiZGU4MTAsICMwOGM4NzUpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDYwMCUgNjAwJTtcXG4gICAgYW5pbWF0aW9uOiBhbmltYXRlIDRzIGVhc2UgaW5maW5pdGU7XFxufVxcblxcbi5hZGRCdG46aG92ZXI6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIGxlZnQ6IDNweDtcXG4gICAgdG9wOiAzcHg7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2cHgpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDZweCk7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5vcHRpb25zIGltZyB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5vcHRpb25zIGltZzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByaW9yaXR5RmxhZyB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblxcbi50YXNrQm9hcmRIZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gO1xcbn1cXG5cXG4uZmxhZ3NDaGFydCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBcXG59XFxuXFxuLmZsYWdzQ2hhcnQgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZsYWdzQ2hhcnQgaW1nIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuLmZsYWdzQ2hhcnQgcCB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnRhc2t7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnN0YXRlQ29sb3JQb2ludCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDE1cHg7XFxuICAgIGJvdHRvbTogMTJweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9UYXNrQm9hcmQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsK0JBQStCO0lBQy9CLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJLFNBQVM7QUFDYjs7QUFFQTs7OztJQUlJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrREFBa0Q7SUFDbEQsd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7O0FBRUE7Q0FDQztFQUNDLDJCQUEyQjtDQUM1QjtDQUNBO0VBQ0MsNkJBQTZCO0NBQzlCO0NBQ0E7RUFDQywyQkFBMkI7Q0FDNUI7QUFDRDs7O0FBR0E7Q0FDQyxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLGtCQUFrQjtJQUNmLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0NBQ2Ysa0JBQWtCO0lBQ2YsbUJBQW1CO0lBQ25CLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxRQUFRO0lBQ1IsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0NBQ2Ysa0JBQWtCO0lBQ2YsNkRBQTZEO0lBQzdELDBCQUEwQjtJQUMxQixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsUUFBUTtJQUNSLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRhc2tMaXN0R3JpZCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4td2lkdGg6IDYwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICAgIHJvdy1nYXA6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50O1xcbiAgICBncmlkLWF1dG8tcm93czogNDVweDtcXG4gICAganVzdGlmeS1pdGVtczogc3RyZXRjaDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcblxcbi50YXNrID4gKixcXG4udGFza0xpc3RIZWFkZXJzID4gKiB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnRhc2tMaXN0SGVhZGVycyBoNCxcXG4udGFzayBpbnB1dCxcXG4ub3B0aW9ucyxcXG4ucHJpb3JpdHlGbGFnIHtcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XFxufVxcblxcbi50YXNrIGlucHV0IHtcXG4gICAgYm9yZGVyOiAxcHggZG90dGVkIHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgY3Vyc29yOiBlLXJlc2l6ZTtcXG59XFxuXFxuLnRhc2sgaW5wdXQ6OnNlbGVjdGlvbiB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4udGFzayxcXG4udGFza0xpc3RIZWFkZXJzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTglIDI1JSAxMCUgMTUlIDEwJSAxMSUgMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrTGlzdEdyaWQgPiAqIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xcblxcdDAlIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XFxuXFx0fVxcblxcdDUwJSB7XFxuXFx0XFx0YmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XFxuXFx0fVxcblxcdDEwMCUge1xcblxcdFxcdGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcXG5cXHR9XFxufVxcblxcblxcbi5hZGRCdG4ge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR6LWluZGV4OiAwO1xcblxcdGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGRCdG46aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGRCdG46OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IC0yO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoIDogMTAwJTtcXG5cXHRib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJhY2tncm91bmQ6ICMxQ0ZGNzA7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNjAwJSA2MDAlO1xcbn1cXG5cXG4uYWRkQnRuOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBsZWZ0OiAzcHg7XFxuICAgIHRvcDogM3B4O1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNnB4KTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2cHgpO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5cXHRcXG4uYWRkQnRuOmhvdmVyOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAtMjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aCA6IDEwMCU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMxMGU4YTcsICNiZGU4MTAsICMwOGM4NzUpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDYwMCUgNjAwJTtcXG4gICAgYW5pbWF0aW9uOiBhbmltYXRlIDRzIGVhc2UgaW5maW5pdGU7XFxufVxcblxcbi5hZGRCdG46aG92ZXI6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIGxlZnQ6IDNweDtcXG4gICAgdG9wOiAzcHg7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2cHgpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDZweCk7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5vcHRpb25zIGltZyB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5vcHRpb25zIGltZzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByaW9yaXR5RmxhZyB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblxcbi50YXNrQm9hcmRIZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gO1xcbn1cXG5cXG4uZmxhZ3NDaGFydCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBcXG59XFxuXFxuLmZsYWdzQ2hhcnQgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZsYWdzQ2hhcnQgaW1nIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuLmZsYWdzQ2hhcnQgcCB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnRhc2t7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnN0YXRlQ29sb3JQb2ludCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDE1cHg7XFxuICAgIGJvdHRvbTogMTJweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9sb2dvRm9udC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9tYWluLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdsb2dvRm9udCc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJylcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnbWFpbic7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmcjtcXG4gICAganVzdGlmeS1pdGVtczogc3RyZXRjaDtcXG4gICAgZm9udC1mYW1pbHk6ICdtYWluJztcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggbGlnaHRncmV5LCAycHggMnB4IDRweCBsaWdodGdyYXk7XFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gLTE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5oZWFkZXIgPiBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4uc2lkZWJhciA+ICoge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAtMSAvIDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxubWFpbiB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAtMSAvIC0xO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5sb2dvQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDQwNDA7XFxufVxcblxcbiNsb2dvVGV4dCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnbG9nb0ZvbnQnO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGNvbG9yOiAjMUNGRjcwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiN0YXNrSW1nIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4jcHJvZmlsZVBpY3R1cmUge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5wcm9qZWN0U2VjdGlvbiA+IGgyIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2luaXRQYWdlTG9hZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiwrREFBd0M7QUFDNUM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGFBQWE7SUFDYixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksd0RBQXdEO0lBQ3hELHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixjQUFjO0lBQ2QsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnbG9nb0ZvbnQnO1xcbiAgICBzcmM6IHVybCgnLi4vbG9nb0ZvbnQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpXFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ21haW4nO1xcbiAgICBzcmM6IHVybCguLi9tYWluLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XFxuICAgIGZvbnQtZmFtaWx5OiAnbWFpbic7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBjb2xvcjogIzMzMzMzMztcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IGxpZ2h0Z3JleSwgMnB4IDJweCA0cHggbGlnaHRncmF5O1xcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIC0xO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uaGVhZGVyID4gaDMge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLnNpZGViYXIgPiAqIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gLTEgLyAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbm1haW4ge1xcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gLTEgLyAtMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4ubG9nb0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0MDQwO1xcbn1cXG5cXG4jbG9nb1RleHQge1xcbiAgICBmb250LWZhbWlseTogJ2xvZ29Gb250JztcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBjb2xvcjogIzFDRkY3MDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jdGFza0ltZyB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuI3Byb2ZpbGVQaWN0dXJlIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ucHJvamVjdFNlY3Rpb24gPiBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vZGFsQ29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjAsMjIwLDIyMCwgMC43KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZTtcXG59XFxuXFxuLm1vZGFsQ29udGFpbmVyLnNob3duIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3gtc2hhZG93OiAycHggNXB4IDNweCBsaWdodGdyYXk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jY2xvc2VNb2RhbCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2VkaXRNb2RlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAyMHB4O1xcbn1cXG5cXG4jc3VibWl0OmRpc2FibGVkIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4jc3VibWl0LFxcbiNlZGl0TW9kZSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxQ0ZGNzA7XFxuICAgIGNvbG9yOiAjMUNGRjcwO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogOHB4IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDVweCAzcHggbGlnaHRncmF5O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAwcHg7XFxuICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjFzO1xcbn1cXG5cXG4jc3VibWl0OmhvdmVyLFxcbiNlZGl0TW9kZTpob3ZlciB7XFxuICAgIGJvdHRvbTogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUNGRjcwO1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNlZGl0TW9kZTpkaXNhYmxlZCB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmZvcm1GaWVsZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmZvcm1GaWVsZHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5mb3JtRmllbGQgbGFiZWwge1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi5mb3JtRmllbGQgaW5wdXQsXFxuLmZvcm1GaWVsZCBzZWxlY3Qge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMjIwcHg7XFxufVxcblxcbi5mb3JtRmllbGQgaW5wdXQ6aG92ZXIge1xcbiAgICBib3JkZXItY29sb3I6ICMxQ0ZGNzA7XFxufVxcblxcbmZvcm0gYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuLmZvcm1GaWVsZCBpbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmUtY29sb3I6ICMxQ0ZGNzA7XFxufVxcblxcbi5mb3JtRmllbGQgaW5wdXRbcmVxdWlyZWRdICsgc3BhbntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5mb3JtRmllbGQgaW5wdXRbcmVxdWlyZWRdICsgc3Bhbjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJ3JlcXVpcmVkJztcXG4gICAgZm9udC1zaXplOiA5cHg7XFxuICAgIHBhZGRpbmc6IDAuMXZ3O1xcbiAgICBjb2xvcjogIzMzMzMzMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFDRkY3MDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0xLjVlbTtcXG4gICAgcmlnaHQ6IDEuMmVtO1xcbiAgICBwYWRkaW5nOiAxcHggOHB4O1xcbn1cXG5cXG5pbnB1dFtyZXF1aXJlZF06aW52YWxpZDpwbGFjZWhvbGRlci1zaG93biArIHNwYW46OmFmdGVyIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG5pbnB1dFtyZXF1aXJlZF06aW52YWxpZDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIHNwYW46OmFmdGVyIHtcXG4gICAgY29udGVudDogJ3gnO1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAycHg7XFxuICAgIHJpZ2h0OiAtMnB4O1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG5pbnB1dFtyZXF1aXJlZF06dmFsaWQgKyBzcGFuOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcg8J+XuCc7XFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgY29sb3I6IGdyZWVuO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMnB4O1xcbiAgICByaWdodDogLTJweDtcXG59XFxuXFxuI2Nsb3NlTW9kYWwge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9tb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osYUFBYTtJQUNiLHdDQUF3QztJQUN4QyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1vZGFsQ29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjAsMjIwLDIyMCwgMC43KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZTtcXG59XFxuXFxuLm1vZGFsQ29udGFpbmVyLnNob3duIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3gtc2hhZG93OiAycHggNXB4IDNweCBsaWdodGdyYXk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jY2xvc2VNb2RhbCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2VkaXRNb2RlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAyMHB4O1xcbn1cXG5cXG4jc3VibWl0OmRpc2FibGVkIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4jc3VibWl0LFxcbiNlZGl0TW9kZSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxQ0ZGNzA7XFxuICAgIGNvbG9yOiAjMUNGRjcwO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogOHB4IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDVweCAzcHggbGlnaHRncmF5O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAwcHg7XFxuICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjFzO1xcbn1cXG5cXG4jc3VibWl0OmhvdmVyLFxcbiNlZGl0TW9kZTpob3ZlciB7XFxuICAgIGJvdHRvbTogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUNGRjcwO1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNlZGl0TW9kZTpkaXNhYmxlZCB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmZvcm1GaWVsZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmZvcm1GaWVsZHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5mb3JtRmllbGQgbGFiZWwge1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi5mb3JtRmllbGQgaW5wdXQsXFxuLmZvcm1GaWVsZCBzZWxlY3Qge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMjIwcHg7XFxufVxcblxcbi5mb3JtRmllbGQgaW5wdXQ6aG92ZXIge1xcbiAgICBib3JkZXItY29sb3I6ICMxQ0ZGNzA7XFxufVxcblxcbmZvcm0gYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuLmZvcm1GaWVsZCBpbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmUtY29sb3I6ICMxQ0ZGNzA7XFxufVxcblxcbi5mb3JtRmllbGQgaW5wdXRbcmVxdWlyZWRdICsgc3BhbntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5mb3JtRmllbGQgaW5wdXRbcmVxdWlyZWRdICsgc3Bhbjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJ3JlcXVpcmVkJztcXG4gICAgZm9udC1zaXplOiA5cHg7XFxuICAgIHBhZGRpbmc6IDAuMXZ3O1xcbiAgICBjb2xvcjogIzMzMzMzMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFDRkY3MDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0xLjVlbTtcXG4gICAgcmlnaHQ6IDEuMmVtO1xcbiAgICBwYWRkaW5nOiAxcHggOHB4O1xcbn1cXG5cXG5pbnB1dFtyZXF1aXJlZF06aW52YWxpZDpwbGFjZWhvbGRlci1zaG93biArIHNwYW46OmFmdGVyIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG5pbnB1dFtyZXF1aXJlZF06aW52YWxpZDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIHNwYW46OmFmdGVyIHtcXG4gICAgY29udGVudDogJ3gnO1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAycHg7XFxuICAgIHJpZ2h0OiAtMnB4O1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG5pbnB1dFtyZXF1aXJlZF06dmFsaWQgKyBzcGFuOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcg8J+XuCc7XFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgY29sb3I6IGdyZWVuO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMnB4O1xcbiAgICByaWdodDogLTJweDtcXG59XFxuXFxuI2Nsb3NlTW9kYWwge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuI3Byb2plY3ROYW1lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci13aWR0aDogMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzFDRkY3MDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5hZGRQcm9qZWN0IHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgYm9yZGVyOiBub25lO1xcbiAgIGJhY2tncm91bmQtY29sb3I6ICMxQ0ZGNzA7XFxuICAgY29sb3I6IHdoaXRlO1xcbiAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmFkZFByb2plY3Q6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgICBib3R0b206IDJweDtcXG4gICAgXFxufVxcblxcbi5hZGRQcm9qZWN0IGltZyB7XFxuICAgIHdpZHRoOiA1NSU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTsgcmlnaHQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLC01MCUpO1xcbn1cXG5cXG4uYWRkUHJvamVjdENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxubGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG5saSBoNCB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ucHJvamVjdFNlY3Rpb24gbGk6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxQ0ZGNzA7XFxuXFxufVxcblxcbmxpIGltZyB7XFxuICAgIGhlaWdodDogMjJweDtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblxcbiNwcm9qZWN0TGlzdCB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuLnByb2plY3RTZWN0aW9uIHtcXG5cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9wcm9qZWN0Qm9hcmQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0dBQ2Isa0JBQWtCO0dBQ2xCLFlBQVk7R0FDWix5QkFBeUI7R0FDekIsWUFBWTtHQUNaLGdCQUFnQjtHQUNoQixlQUFlO0dBQ2Ysa0JBQWtCO0FBQ3JCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixXQUFXOztBQUVmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUSxFQUFFLFVBQVU7SUFDcEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCOztBQUU3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOztBQUVBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcblxcbiNwcm9qZWN0TmFtZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItd2lkdGg6IDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxQ0ZGNzA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4uYWRkUHJvamVjdCB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgIGJvcmRlcjogbm9uZTtcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUNGRjcwO1xcbiAgIGNvbG9yOiB3aGl0ZTtcXG4gICBmb250LXdlaWdodDogOTAwO1xcbiAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5hZGRQcm9qZWN0OmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG4gICAgYm90dG9tOiAycHg7XFxuICAgIFxcbn1cXG5cXG4uYWRkUHJvamVjdCBpbWcge1xcbiAgICB3aWR0aDogNTUlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7IHJpZ2h0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwtNTAlKTtcXG59XFxuXFxuLmFkZFByb2plY3RDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbmxpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxubGkgaDQge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnByb2plY3RTZWN0aW9uIGxpOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMUNGRjcwO1xcblxcbn1cXG5cXG5saSBpbWcge1xcbiAgICBoZWlnaHQ6IDIycHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4jcHJvamVjdExpc3Qge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbi5wcm9qZWN0U2VjdGlvbiB7XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiLyoqXG4gKiBEYXlzIGluIDEgd2Vlay5cbiAqXG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIGRheXNJbldlZWsgPSA3O1xuLyoqXG4gKiBEYXlzIGluIDEgeWVhclxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKlxuICogQG5hbWUgZGF5c0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIGRheXNJblllYXIgPSAzNjUuMjQyNTtcbi8qKlxuICogTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWF4VGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcbi8qKlxuICogTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWluVGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pblRpbWUgPSAtbWF4VGltZTtcbi8qKlxuICogTWludXRlcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWludXRlc0luSG91ciA9IDYwO1xuLyoqXG4gKiBNb250aHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5RdWFydGVyID0gMztcbi8qKlxuICogTW9udGhzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luWWVhciA9IDEyO1xuLyoqXG4gKiBRdWFydGVycyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHF1YXJ0ZXJzSW5ZZWFyID0gNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luSG91ciA9IDM2MDA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5NaW51dGUgPSA2MDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGRheVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIHdlZWtcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG4vKipcbiAqIFNlY29uZHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbW9udGhcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzOyIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNBZnRlclxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBhZnRlciB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBmaXJzdCBkYXRlIGFmdGVyIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0aGF0IHNob3VsZCBiZSBhZnRlciB0aGUgb3RoZXIgb25lIHRvIHJldHVybiB0cnVlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlVG9Db21wYXJlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBhZnRlciAxMSBGZWJydWFyeSAxOTg3P1xuICogY29uc3QgcmVzdWx0ID0gaXNBZnRlcihuZXcgRGF0ZSgxOTg5LCA2LCAxMCksIG5ldyBEYXRlKDE5ODcsIDEsIDExKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQWZ0ZXIoZGlydHlEYXRlLCBkaXJ0eURhdGVUb0NvbXBhcmUpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXRlVG9Db21wYXJlID0gdG9EYXRlKGRpcnR5RGF0ZVRvQ29tcGFyZSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSA+IGRhdGVUb0NvbXBhcmUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNCZWZvcmVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGZpcnN0IGRhdGUgYmVmb3JlIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGZpcnN0IGRhdGUgYmVmb3JlIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0aGF0IHNob3VsZCBiZSBiZWZvcmUgdGhlIG90aGVyIG9uZSB0byByZXR1cm4gdHJ1ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVRvQ29tcGFyZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSXMgMTAgSnVseSAxOTg5IGJlZm9yZSAxMSBGZWJydWFyeSAxOTg3P1xuICogY29uc3QgcmVzdWx0ID0gaXNCZWZvcmUobmV3IERhdGUoMTk4OSwgNiwgMTApLCBuZXcgRGF0ZSgxOTg3LCAxLCAxMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNCZWZvcmUoZGlydHlEYXRlLCBkaXJ0eURhdGVUb0NvbXBhcmUpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXRlVG9Db21wYXJlID0gdG9EYXRlKGRpcnR5RGF0ZVRvQ29tcGFyZSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSA8IGRhdGVUb0NvbXBhcmUuZ2V0VGltZSgpO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyLCBtaWxsaXNlY29uZHNJbk1pbnV0ZSB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcyMDE0LTAyLTExVDExOjMwOjMwJylcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcrMDIwMTQxMDEnIHRvIGRhdGUsXG4gKiAvLyBpZiB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdCBpcyAxOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJyswMjAxNDEwMScsIHsgYWRkaXRpb25hbERpZ2l0czogMSB9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUlTTyhhcmd1bWVudCwgb3B0aW9ucykge1xuICB2YXIgX29wdGlvbnMkYWRkaXRpb25hbERpO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IHRvSW50ZWdlcigoX29wdGlvbnMkYWRkaXRpb25hbERpID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpICE9PSBudWxsICYmIF9vcHRpb25zJGFkZGl0aW9uYWxEaSAhPT0gdm9pZCAwID8gX29wdGlvbnMkYWRkaXRpb25hbERpIDogMik7XG5cbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2FkZGl0aW9uYWxEaWdpdHMgbXVzdCBiZSAwLCAxIG9yIDInKTtcbiAgfVxuXG4gIGlmICghKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuICB2YXIgZGF0ZTtcblxuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuXG4gIGlmICghZGF0ZSB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcblxuICAgIGlmIChpc05hTih0aW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG5cbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTsgLy8ganMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRpcnR5RGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSwgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmVzdWx0LnNldEhvdXJzKGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLCBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLCBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLCBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCk7XG59XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuXG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgdmFyIGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIHZhciB0aW1lU3RyaW5nOyAvLyBUaGUgcmVnZXggbWF0Y2ggc2hvdWxkIG9ubHkgcmV0dXJuIGF0IG1heGltdW0gdHdvIGFycmF5IGVsZW1lbnRzLlxuICAvLyBbZGF0ZV0sIFt0aW1lXSwgb3IgW2RhdGUsIHRpbWVdLlxuXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG5cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuXG4gICAgaWYgKHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyLnRlc3QoZGF0ZVN0cmluZ3MuZGF0ZSkpIHtcbiAgICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyKVswXTtcbiAgICAgIHRpbWVTdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cihkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCwgZGF0ZVN0cmluZy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGVTdHJpbmdzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeKD86KFxcXFxkezR9fFsrLV1cXFxcZHsnICsgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KXwoXFxcXGR7Mn18WystXVxcXFxkeycgKyAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pJCknKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHtcbiAgICB5ZWFyOiBOYU4sXG4gICAgcmVzdERhdGVTdHJpbmc6ICcnXG4gIH07XG4gIHZhciB5ZWFyID0gY2FwdHVyZXNbMV0gPyBwYXJzZUludChjYXB0dXJlc1sxXSkgOiBudWxsO1xuICB2YXIgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDsgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKVxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2goZGF0ZVJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHN0cmluZ1xuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIHZhciBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICB2YXIgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIHZhciB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIHZhciBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG5cbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuXG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHwgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gcGFyc2VJbnQodmFsdWUpIDogMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgdmFyIGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUgKyBzZWNvbmRzICogMTAwMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09ICdaJykgcmV0dXJuIDA7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcbiAgdmFyIHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gJysnID8gLTEgOiAxO1xuICB2YXIgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHZhciBtaW51dGVzID0gY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pIHx8IDA7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgdmFyIGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn0gLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxuXG5cbnZhciBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcblxuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiBtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIGRhdGUgPj0gMSAmJiBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpIHtcbiAgcmV0dXJuIGRheU9mWWVhciA+PSAxICYmIGRheU9mWWVhciA8PSAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMzY2IDogMzY1KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIHNlY29uZHMgPj0gMCAmJiBzZWNvbmRzIDwgNjAgJiYgbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPCA2MCAmJiBob3VycyA+PSAwICYmIGhvdXJzIDwgMjU7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1Rhc2tCb2FyZC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1Rhc2tCb2FyZC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5pdFBhZ2VMb2FkLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5pdFBhZ2VMb2FkLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2RhbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0Qm9hcmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0Qm9hcmQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFRhc2tMaXN0IH0gZnJvbSBcIi4vVGFza1wiO1xuaW1wb3J0IHsgUHJvamVjdEJvYXJkIH0gZnJvbSBcIi4uL3ZpZXcgIGlobS9Qcm9qZWN0Qm9hcmRcIjtcbmltcG9ydCB7IFRhc2tCb2FyZCB9IGZyb20gXCIuLi92aWV3ICBpaG0vVGFza0JvYXJkXCI7XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuX3Rhc2tMaXN0ID0gVGFza0xpc3QoKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGVcbiAgICB9XG5cbiAgICBzZXQgdGl0bGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgdGFza0xpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90YXNrTGlzdDtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0TGlzdCA9ICgoKT0+IHtcblxuICAgIGxldCBjdXJyZW50UHJvamVjdDtcblxuICAgIGNvbnN0IGxpc3QgPSBbXTtcblxuICAgIGNvbnN0IGdldExpc3QgPSAoKT0+IHtcbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChuZXdQcm9qZWN0KT0+IHtcbiAgICAgICAgbGlzdC5wdXNoKG5ld1Byb2plY3QpO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdEluZGV4KSA9PiB7XG4gICAgICAgIGxpc3Quc3BsaWNlKHByb2plY3RJbmRleCAsIDEpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LFxuICAgICAgICBnZXRMaXN0LFxuICAgICAgICBhZGRQcm9qZWN0LFxuICAgICAgICBkZWxldGVQcm9qZWN0XG4gICAgfVxufSkoKVxuXG5leHBvcnQgY29uc3QgZmlyc3RQcm9qZWN0ID0gKHRpdGxlKT0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUpO1xuICAgIFByb2plY3RMaXN0LmFkZFByb2plY3QocHJvamVjdCk7XG4gICAgUHJvamVjdEJvYXJkLmRpc3BsYXlOZXdQcm9qZWN0KHByb2plY3QudGl0bGUpO1xuICAgIC8qIFRhc2tCb2FyZC5kaXNwbGF5UHJvamVjdFRpdGxlKHByb2plY3QudGl0bGUpICovXG4gICAgcmV0dXJuIHByb2plY3Rcbn1cblxuUHJvamVjdExpc3QuY3VycmVudFByb2plY3QgPSBmaXJzdFByb2plY3QoJ0ZpcnN0IFByb2plY3QgLSBTdGFydCBoZXJlJyk7XG5Qcm9qZWN0Qm9hcmQuaGlnaGxpZ2h0Q3VycmVudFByb2plY3QoUHJvamVjdEJvYXJkLnNlbGVjdFByb2plY3RCb2FyZEN1cnJlbnRQcm9qZWN0KCkpO1xuXG5cblxuXG4iLCJpbXBvcnQgeyBpc0FmdGVyLCBpc0JlZm9yZSwgaXNTYW1lRGF5LCBwYXJzZUlTTywgYWRkRGF5cyB9IGZyb20gXCJkYXRlLWZuc1wiXG5cbmV4cG9ydCBjbGFzcyBUYXNrIHtcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgY2F0ZWdvcnksIHN0YXRlKSB7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuX2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLl9jYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xuICAgIH1cbiAgICBcbiAgICBnZXQgdGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZVxuICAgIH1cblxuICAgIHNldCB0aXRsZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGR1ZURhdGUoKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUlTTyh0aGlzLl9kdWVEYXRlKTtcbiAgICB9XG5cbiAgICBzZXQgZHVlRGF0ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9kdWVEYXRlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGNhdGVnb3J5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2F0ZWdvcnlcbiAgICB9XG5cbiAgICBzZXQgY2F0ZWdvcnkodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fY2F0ZWdvcnkgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgc3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgICB9XG5cbiAgICBzZXQgc3RhdGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGlmIChpc1NhbWVEYXkodGhpcy5kdWVEYXRlLCB0b2RheSkpIHtcbiAgICAgICAgICAgIHJldHVybiAnZHVlVG9kYXknO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0FmdGVyKHRvZGF5LCB0aGlzLmR1ZURhdGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2xhdGUnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0JlZm9yZSh0b2RheSwgdGhpcy5kdWVEYXRlKSkge1xuICAgICAgICAgICAgcmV0dXJuICdvblRpbWUnO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgVGFza0xpc3QgPSAoKT0+IHtcbiAgICBjb25zdCBsaXN0ID0gW107XG5cbiAgICBjb25zdCBnZXRMaXN0ID0gKCk9PiB7XG4gICAgICAgIHJldHVybiBsaXN0O1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFRhc2sgPSAobmV3VGFzayk9PiB7XG4gICAgICAgIGxpc3QucHVzaChuZXdUYXNrKTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVUYXNrID0gKHRhc2tJbmRleCkgPT4ge1xuICAgICAgICBsaXN0LnNwbGljZSh0YXNrSW5kZXggLCAxKTtcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0VGFzayA9ICh0YXNrSW5kZXgsIGVkaXRlZFRhc2spID0+IHtcbiAgICAgICAgbGlzdC5zcGxpY2UodGFza0luZGV4LCAxLCBlZGl0ZWRUYXNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRMaXN0LFxuICAgICAgICBhZGRUYXNrLFxuICAgICAgICBkZWxldGVUYXNrLCBcbiAgICAgICAgZWRpdFRhc2tcbiAgICB9XG59XG5cblxuXG4iLCJpbXBvcnQge1Rhc2ssIFRhc2tMaXN0fSBmcm9tICcuLi9mdW5jdGlvbm5hbGl0aWVzL1Rhc2snO1xuaW1wb3J0IHsgZWRpdEJ1dHRvbiB9IGZyb20gJy4uL3ZpZXcgIGlobS9UYXNrQm9hcmQnO1xuaW1wb3J0IHsgUHJvamVjdExpc3QgfSBmcm9tICcuLi9mdW5jdGlvbm5hbGl0aWVzL1Byb2plY3QnO1xuXG5leHBvcnQgY29uc3QgbW9kYWxDb250YWluZXIgPSAoKCk9PiB7XG4gICAgY29uc3QgTU9EQUxfQ09OVEFJTkVSID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsQ29udGFpbmVyJyk7XG4gICAgY29uc3QgY2xvc2VNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZU1vZGFsJyk7XG4gICAgY29uc3Qgb3Blbk1vZGFsID0gKCk9PiB7XG4gICAgICAgIE1PREFMX0NPTlRBSU5FUi5jbGFzc0xpc3QuYWRkKCdzaG93bicpO1xuICAgIH1cbiAgICBjb25zdCBjbG9zZU1vZGFsID0gKCk9PiB7XG4gICAgICAgIE1PREFMX0NPTlRBSU5FUi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93bicpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBvcGVuTW9kYWwsXG4gICAgICAgIGNsb3NlTW9kYWwsXG4gICAgICAgIGNsb3NlTW9kYWxCdG5cbiAgICB9XG59KSgpXG5cbm1vZGFsQ29udGFpbmVyLmNsb3NlTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICBtb2RhbENvbnRhaW5lci5jbG9zZU1vZGFsKCk7XG4gICAgZm9ybS5jbGVhcklucHV0c1ZhbHVlcygpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBmb3JtID0gKCgpPT4ge1xuICAgIGNvbnN0IElOUFVUUyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsIGlucHV0W2lkXScpKTtcbiAgICBjb25zdCBTVUJNSVRfQlROID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdCcpO1xuICAgIGNvbnN0IFJFUVVJUkVEX0lOUFVUUyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbcmVxdWlyZWRdJykpO1xuXG4gICAgY29uc3QgcmVtb3ZlUGxhY2Vob2xkZXJBZnRlcklucHV0VXNlID0gKCgpPT4ge1xuICAgICAgICBSRVFVSVJFRF9JTlBVVFMuZm9yRWFjaChyZXF1aXJlZElucHV0ID0+IHtcbiAgICAgICAgICAgIHJlcXVpcmVkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZElucHV0LnJlbW92ZUF0dHJpYnV0ZSgncGxhY2Vob2xkZXInKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSkoKVxuXG4gICAgY29uc3QgYWRkU3RhdGVWYWx1ZSA9ICgpPT4ge1xuICAgICAgICBJTlBVVFMucHVzaChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwgc2VsZWN0JykpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFRhc2tEZXRhaWxzVmFsdWVzID0gKCk9PiB7XG4gICAgICAgIGFkZFN0YXRlVmFsdWUoKTtcbiAgICAgICAgcmV0dXJuICBJTlBVVFMubWFwKGlucHV0ID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC52YWx1ZTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBpc09uZUlucHV0SW52YWxpZCA9ICgpPT4ge1xuICAgICAgICByZXR1cm4gSU5QVVRTLnNvbWUoaW5wdXQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0ID09ICcnO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGNsZWFySW5wdXRzVmFsdWVzID0gKCk9PiB7XG4gICAgICAgIElOUFVUUy5mb3JFYWNoKGlucHV0ID0+IGlucHV0LnZhbHVlID0gJycpO1xuICAgICAgICBSRVFVSVJFRF9JTlBVVFMuZm9yRWFjaChyZXF1aXJlZElucHV0ID0+IHtcbiAgICAgICAgICAgIHJlcXVpcmVkSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICcgJylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXJJbnZhbGlkSW5wdXRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnZhbGlkSW5wdXRzID0gSU5QVVRTLmZpbHRlcihpbnB1dCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQudmFsdWUgPT0gJydcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGludmFsaWRJbnB1dHNcbiAgICB9XG5cbiAgICBjb25zdCBlcnJvckRpc3BsYXkgPSAoKSA9PiB7XG4gICAgICAgIGZpbHRlckludmFsaWRJbnB1dHMoKS5mb3JFYWNoKGludmFsaWRJbnB1dCA9PiB7XG4gICAgICAgICAgICBpbnZhbGlkSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdlbnRlciBhIHZhbGlkIHZhbHVlJyk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgSU5QVVRTLFxuICAgICAgICBnZXRUYXNrRGV0YWlsc1ZhbHVlcyxcbiAgICAgICAgaXNPbmVJbnB1dEludmFsaWQsXG4gICAgICAgIGNsZWFySW5wdXRzVmFsdWVzLFxuICAgICAgICBTVUJNSVRfQlROLFxuICAgICAgICBlcnJvckRpc3BsYXlcbiAgICB9XG59KSgpXG5cbmV4cG9ydCBjb25zdCBmb3JtRWRpdE1vZGUgPSAoKCk9PiB7XG4gICAgY29uc3QgU1VCTUlUX0NIQU5HRVNfQlROID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRNb2RlJyk7XG5cbiAgICBjb25zdCBvcGVuID0gKGN1cnJlbnRJbnB1dHMpPT4ge1xuICAgICAgICBmb3JtLlNVQk1JVF9CVE4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBTVUJNSVRfQ0hBTkdFU19CVE4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgZmlsbEZvcm1JbnB1dHNXaXRoQ3VycmVudFZhbHVlcyhjdXJyZW50SW5wdXRzKTtcbiAgICAgICAgbW9kYWxDb250YWluZXIub3Blbk1vZGFsKCk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGlucHV0c1ZhbGlkYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIGZvcm0uSU5QVVRTLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCk9PiB7XG4gICAgICAgICAgICAgICAgKCFmb3JtLmlzT25lSW5wdXRJbnZhbGlkKCkpID8gU1VCTUlUX0NIQU5HRVNfQlROLmRpc2FibGVkID0gZmFsc2UgOiBcbiAgICAgICAgICAgICAgICAgICAgU1VCTUlUX0NIQU5HRVNfQlROLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBmaWxsRm9ybUlucHV0c1dpdGhDdXJyZW50VmFsdWVzID0gKGN1cnJlbnRWYWx1ZXMpID0+IHtcbiAgICAgICAgZm9ybS5JTlBVVFMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGN1cnJlbnRWYWx1ZXMuZmlsdGVyKChlbGVtZW50KT0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jbGFzc05hbWUgPT09IGBfJHtpbnB1dC5pZH1gO1xuICAgICAgICAgICAgfSkgXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGN1cnJlbnRWYWx1ZVswXS52YWx1ZTtcbiAgICAgICAgfSkgXG4gICAgfVxuXG4gICAgY29uc3QgdmFsaWRhdGVDaGFuZ2VzID0gKGUsIGlucHV0cywgc3RhdGVDb2xvclBvaW50LCBmbGFnKT0+IHtcbiAgICAgICAgICAgIGxldCBlZGl0ZWRUYXNrID0gbmV3IFRhc2soLi4uZm9ybS5nZXRUYXNrRGV0YWlsc1ZhbHVlcygpKTtcbiAgICAgICAgICAgIFByb2plY3RMaXN0LmN1cnJlbnRQcm9qZWN0LnRhc2tMaXN0LmVkaXRUYXNrKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSwgZWRpdGVkVGFzayk7XG4gICAgICAgICAgICBlZGl0QnV0dG9uLmRpc3BsYXlFZGl0ZWRUYXNrKGVkaXRlZFRhc2ssIGlucHV0cywgc3RhdGVDb2xvclBvaW50LCBmbGFnKTtcbiAgICAgICAgICAgIG1hbmFnZU1vZGFsUmVzZXQoKTtcbiAgICAgICAgICAgIGZvcm0uU1VCTUlUX0JUTi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgU1VCTUlUX0NIQU5HRVNfQlROLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBcbiAgICAgICAgaW5wdXRzVmFsaWRhdGlvbixcbiAgICAgICAgZmlsbEZvcm1JbnB1dHNXaXRoQ3VycmVudFZhbHVlcyxcbiAgICAgICAgU1VCTUlUX0NIQU5HRVNfQlROLCBcbiAgICAgICAgb3BlbixcbiAgICAgICAgdmFsaWRhdGVDaGFuZ2VzXG4gICAgfVxufSkoKVxuXG5leHBvcnQgZnVuY3Rpb24gbWFuYWdlTW9kYWxSZXNldCgpIHtcbiAgICBtb2RhbENvbnRhaW5lci5jbG9zZU1vZGFsKCk7XG4gICAgZm9ybS5jbGVhcklucHV0c1ZhbHVlcygpO1xufVxuXG5cblxuXG5cblxuIiwiaW1wb3J0IHsgUHJvamVjdExpc3QgfSBmcm9tIFwiLi4vZnVuY3Rpb25uYWxpdGllcy9Qcm9qZWN0XCI7XG5pbXBvcnQgeyBwcm9qZWN0TGlzdCB9IGZyb20gJy4uL2Z1bmN0aW9ubmFsaXRpZXMvUHJvamVjdCc7XG5pbXBvcnQgeyBuZXdUYXNrLCBUYXNrQm9hcmQgfSBmcm9tIFwiLi9UYXNrQm9hcmRcIjtcblxuZXhwb3J0IGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdCcpO1xuZXhwb3J0IGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdE5hbWUnKTtcblxuZXhwb3J0IGNvbnN0IFByb2plY3RCb2FyZCA9ICgoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdExpc3QnKTtcblxuICAgIGNvbnN0IGNsZWFyUHJvamVjdE5hbWVJbnB1dCA9ICgpPT4ge1xuICAgICAgICBwcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlTmV3UHJvamVjdENvbnRhaW5lciA9ICgpPT4ge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQobmV3UHJvamVjdENvbnRhaW5lcik7XG4gICAgICAgIHJldHVybiBuZXdQcm9qZWN0Q29udGFpbmVyO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBkaXNwbGF5TmV3UHJvamVjdFRpdGxlID0gKHByb2plY3ROYW1lLCBuZXdQcm9qZWN0Q29udGFpbmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgIG5ld1Byb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgICAgICBuZXdQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RUaXRsZSk7XG4gICAgICAgIHNlbGVjdFRoZVByb2plY3QobmV3UHJvamVjdFRpdGxlKTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5TmV3UHJvamVjdERlbGV0ZUJ0biA9IChuZXdQcm9qZWN0Q29udGFpbmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3REZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgbmV3UHJvamVjdERlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9zcmMvZGVsZXRlUHJvamVjdC5wbmcnKTtcbiAgICAgICAgbmV3UHJvamVjdERlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBQcm9qZWN0TGlzdC5nZXRMaXN0KCkubGVuZ3RoLTEpOyBcbiAgICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0RGVsZXRlQnRuKTtcbiAgICAgICAgcmV0dXJuIG5ld1Byb2plY3REZWxldGVCdG47XG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0VGhlUHJvamVjdCA9IChjbGlja2FibGVTZWN0aW9uKT0+IHtcbiAgICAgICAgY2xpY2thYmxlU2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcbiAgICAgICAgICAgIGlmIChQcm9qZWN0TGlzdC5nZXRMaXN0KCkuaW5jbHVkZXMoUHJvamVjdExpc3QuY3VycmVudFByb2plY3QpKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlSGlnaGxpZ2h0KHNlbGVjdFByb2plY3RCb2FyZEN1cnJlbnRQcm9qZWN0KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUHJvamVjdExpc3QuY3VycmVudFByb2plY3QgPSBQcm9qZWN0TGlzdC5nZXRMaXN0KClbZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpXTtcbiAgICAgICAgICAgIFRhc2tCb2FyZC5jbGVhclRhc2tzKCk7XG4gICAgICAgICAgICBoaWdobGlnaHRDdXJyZW50UHJvamVjdChzZWxlY3RQcm9qZWN0Qm9hcmRDdXJyZW50UHJvamVjdCgpKTtcbiAgICAgICAgICAgIFRhc2tCb2FyZC5kaXNwbGF5UHJvamVjdFRpdGxlKFByb2plY3RMaXN0LmN1cnJlbnRQcm9qZWN0LnRpdGxlKTtcbiAgICAgICAgICAgIGxldCBpPTA7XG4gICAgICAgICAgICBQcm9qZWN0TGlzdC5jdXJyZW50UHJvamVjdC50YXNrTGlzdC5nZXRMaXN0KCkuZm9yRWFjaCgodGFzayk9PiB7XG4gICAgICAgICAgICAgICAgbmV3VGFzay5kaXNwbGF5RWFjaFRhc2soaSk7XG4gICAgICAgICAgICAgICAgaSA9IGkrMTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZURhdGFJbmRleCA9ICgpPT4ge1xuICAgICAgICBjb25zdCBkZWxldEJ0bnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZ1tkYXRhLWluZGV4XScpKTtcbiAgICAgICAgY29uc29sZS5sb2coZGVsZXRCdG5zKVxuICAgICAgICBpZiAoZGVsZXRCdG5zLmxlbmd0aD4wKXtcbiAgICAgICAgICAgIGRlbGV0QnRuc1swXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCAwKTtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MCA7IGk8ZGVsZXRCdG5zLmxlbmd0aC0xOyBpKyspe1xuICAgICAgICAgICAgICAgIGRlbGV0QnRuc1tpKzFdLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIHBhcnNlSW50KGRlbGV0QnRuc1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSkrMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0ZURlbGV0ZUJ0biA9IChkZWxldGVCdG4pID0+IHtcbiAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT4ge1xuICAgICAgICAgICAgaWYgKFByb2plY3RMaXN0LmN1cnJlbnRQcm9qZWN0ID09PSBQcm9qZWN0TGlzdC5nZXRMaXN0KClbZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JyldKXtcbiAgICAgICAgICAgICAgICBUYXNrQm9hcmQuY2xlYXJUYXNrcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUHJvamVjdExpc3QuZGVsZXRlUHJvamVjdChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5yZW1vdmVDaGlsZChlLnRhcmdldC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgIHVwZGF0ZURhdGFJbmRleCgpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheU5ld1Byb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdENvbnRhaW5lciA9IGNyZWF0ZU5ld1Byb2plY3RDb250YWluZXIoKTtcbiAgICAgICAgZGlzcGxheU5ld1Byb2plY3RUaXRsZShwcm9qZWN0TmFtZSwgbmV3UHJvamVjdENvbnRhaW5lcik7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRpc3BsYXlOZXdQcm9qZWN0RGVsZXRlQnRuKG5ld1Byb2plY3RDb250YWluZXIpO1xuICAgICAgICBhY3RpdmF0ZURlbGV0ZUJ0bihkZWxldGVCdG4pO1xuICAgICAgICB1cGRhdGVEYXRhSW5kZXgoKTtcbiAgICB9XG5cbiAgICBjb25zdCBoaWdobGlnaHRDdXJyZW50UHJvamVjdCA9IChwcm9qZWN0Qm9hcmRDdXJyZW50UHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0Qm9hcmRDdXJyZW50UHJvamVjdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgyNTUsMjU1LDI1NSwgMC4zKSc7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlSGlnaGxpZ2h0ID0gKHByb2plY3RCb2FyZEN1cnJlbnRQcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3RCb2FyZEN1cnJlbnRQcm9qZWN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0UHJvamVjdEJvYXJkQ3VycmVudFByb2plY3QgPSAoKT0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3RJbmRleCA9IFByb2plY3RMaXN0LmdldExpc3QoKS5pbmRleE9mKFByb2plY3RMaXN0LmN1cnJlbnRQcm9qZWN0KS50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW1nW2RhdGEtaW5kZXggPSAnJHtjdXJyZW50UHJvamVjdEluZGV4fSddYCkucGFyZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkaXNwbGF5TmV3UHJvamVjdCxcbiAgICAgICAgY2xlYXJQcm9qZWN0TmFtZUlucHV0LFxuICAgICAgICBoaWdobGlnaHRDdXJyZW50UHJvamVjdCxcbiAgICAgICAgc2VsZWN0UHJvamVjdEJvYXJkQ3VycmVudFByb2plY3RcbiAgICB9XG59KSgpXG4iLCJpbXBvcnQgJy4uL2Nzcy9UYXNrQm9hcmQuY3NzJztcbmltcG9ydCB7VGFzaywgVGFza0xpc3R9IGZyb20gJy4uL2Z1bmN0aW9ubmFsaXRpZXMvVGFzayc7XG5pbXBvcnQgeyBtb2RhbENvbnRhaW5lciwgZm9ybSwgbWFuYWdlTW9kYWxSZXNldCwgZm9ybUVkaXRNb2RlIH0gZnJvbSAnLi4vZnVuY3Rpb25uYWxpdGllcy9tb2RhbCc7XG5pbXBvcnQgeyBQcm9qZWN0TGlzdCB9IGZyb20gJy4uL2Z1bmN0aW9ubmFsaXRpZXMvUHJvamVjdCc7XG5cbmV4cG9ydCBjb25zdCBUQVNLR1JJRCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrTGlzdEdyaWQnKTtcbmV4cG9ydCBjb25zdCBBRERUQVNLQlROID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZEJ0bicpO1xuXG5leHBvcnQgY29uc3QgVGFza0JvYXJkID0gKCgpPT4ge1xuICAgIGNvbnN0IGNsZWFyVGFza3MgPSAoKT0+IHtcbiAgICAgICAgY29uc3QgdGFza3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJykpO1xuICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgdGFzay5yZW1vdmUoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5UHJvamVjdFRpdGxlID0gKHRpdGxlKT0+IHtcbiAgICAgICAgY29uc3QgdGFza0JvYXJkUHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tCb2FyZFByb2plY3RUaXRsZScpO1xuICAgICAgICB0YXNrQm9hcmRQcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBgVGFza0JvYXJkIH4gU2VsZWN0ZWQgcHJvamVjdCA6ICR7dGl0bGV9YDtcbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5Rmlyc3RQcm9qZWN0VGl0bGUgPSAoKCkgPT4ge1xuICAgICAgICBkaXNwbGF5UHJvamVjdFRpdGxlKFByb2plY3RMaXN0LmN1cnJlbnRQcm9qZWN0LnRpdGxlKTtcbiAgICB9KSgpXG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2xlYXJUYXNrcyxcbiAgICAgICAgZGlzcGxheVByb2plY3RUaXRsZVxuICAgIH1cbn0pKClcblxuY29uc3QgZGVsZXRlQnV0dG9uID0gKCgpPT4ge1xuICAgIGNvbnN0IGNyZWF0ZSA9ICgpPT4ge1xuICAgICAgICBjb25zdCBkZWxldGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGRlbGV0ZVRhc2suY2xhc3NMaXN0LmFkZCgnZGVsZXRlVGFzaycpO1xuICAgICAgICBkZWxldGVUYXNrLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9kZWxldGUuc3ZnJyk7XG4gICAgICAgIG1hbmFnZURlbGV0ZVRhc2soZGVsZXRlVGFzayk7XG4gICAgICAgIGNoYW5nZVVybE9uSG92ZXIoZGVsZXRlVGFzaylcbiAgICAgICAgcmV0dXJuIGRlbGV0ZVRhc2s7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlRGF0YUluZGV4ID0gKCk9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXZbZGF0YS1pbmRleF0nKSk7XG4gICAgICAgIGlmICh0YXNrQ29udGFpbmVycy5sZW5ndGg+MCl7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyc1swXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCAwKTtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MCA7IGk8dGFza0NvbnRhaW5lcnMubGVuZ3RoLTE7IGkrKyl7XG4gICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lcnNbaSsxXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBwYXJzZUludCh0YXNrQ29udGFpbmVyc1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSkrMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBtYW5hZ2VEZWxldGVUYXNrID0gKGRlbGV0ZUJ0bik9PiB7XG4gICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBQcm9qZWN0TGlzdC5jdXJyZW50UHJvamVjdC50YXNrTGlzdC5kZWxldGVUYXNrKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSk7XG4gICAgICAgICAgICBUQVNLR1JJRC5yZW1vdmVDaGlsZChlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgdXBkYXRlRGF0YUluZGV4KCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlVXJsT25Ib3ZlciA9IChkZWxldGVCdG4pID0+IHtcbiAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpPT4ge1xuICAgICAgICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9kZWxldGVIb3Zlci5wbmcnKVxuICAgICAgICB9KVxuICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKT0+IHtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9zcmMvZGVsZXRlLnN2ZycpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZVxuICAgIH1cbn0pKCkgXG5cbmV4cG9ydCBjb25zdCBlZGl0QnV0dG9uID0gKCgpPT4ge1xuICAgIGNvbnN0IGNyZWF0ZSA9ICgpPT4ge1xuICAgICAgICBjb25zdCBlZGl0VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBlZGl0VGFzay5jbGFzc0xpc3QuYWRkKCdlZGl0VGFzaycpO1xuICAgICAgICBlZGl0VGFzay5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9zcmMvZWRpdC5zdmcnKTtcbiAgICAgICAgbWFuYWdlRWRpdFRhc2soZWRpdFRhc2spO1xuICAgICAgICBjaGFuZ2VVcmxPbkhvdmVyKGVkaXRUYXNrKVxuICAgICAgICByZXR1cm4gZWRpdFRhc2s7XG4gICAgfVxuXG4gICAgY29uc3QgbWFuYWdlRWRpdFRhc2sgPSAoZWRpdEJ0bik9PiB7XG4gICAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dHMgPSBBcnJheS5mcm9tKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlbik7XG4gICAgICAgICAgICBjb25zdCBmbGFnID0gaW5wdXRzLmZpbHRlcihlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncHJpb3JpdHlGbGFnJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlQ29sb3JQb2ludCA9IGlucHV0cy5maWx0ZXIoZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGF0ZUNvbG9yUG9pbnQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZm9ybUVkaXRNb2RlLm9wZW4oaW5wdXRzKTtcbiAgICAgICAgICAgIGZvcm1FZGl0TW9kZS5pbnB1dHNWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICBmb3JtRWRpdE1vZGUuU1VCTUlUX0NIQU5HRVNfQlROLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1FZGl0TW9kZS52YWxpZGF0ZUNoYW5nZXMoZSwgaW5wdXRzLCBzdGF0ZUNvbG9yUG9pbnRbMF0gLCBmbGFnWzBdKTtcbiAgICAgICAgICAgIH0sIHtvbmNlIDogdHJ1ZX0pXG4gICAgICAgIH0pXG59XG5cbiAgICBjb25zdCBkaXNwbGF5RWRpdGVkVGFzayA9IChlZGl0ZWRUYXNrLCBpbnB1dHMsIHN0YXRlQ29sb3JQb2ludCwgcHJpb3JpdHlGbGFnKT0+IHtcbiAgICAgICAgZm9yIChjb25zdCBkZXRhaWwgaW4gZWRpdGVkVGFzayl7XG4gICAgICAgICAgICBsZXQgdmFsdWVUb1VwZGF0ZSA9IGlucHV0cy5maWx0ZXIoKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jbGFzc05hbWUgPT09IGAke2RldGFpbH1gO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHZhbHVlVG9VcGRhdGVbMF0udmFsdWU9IGVkaXRlZFRhc2tbZGV0YWlsXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlQ29sb3JQb2ludC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAuLi9zcmMvJHtlZGl0ZWRUYXNrLnN0YXRlfS5wbmdgKTtcbiAgICAgICAgcHJpb3JpdHlGbGFnLnNldEF0dHJpYnV0ZSgnc3JjJywgYC4uL3NyYy9mbGFnXyR7ZWRpdGVkVGFzay5wcmlvcml0eX0ucG5nYCk7XG4gICAgICAgIC8qIHRhc2tTdGF0ZS5lZGl0Q29sb3IoZWRpdGVkVGFzayk7ICovXG4gICAgICAgIC8qIHRhc2tQcmlvcml0eS5lZGl0Q29sb3IoZWRpdGVkVGFzayk7ICovXG4gICAgICAgLyogIHRhc2tTdGF0ZS5jaGVja0lmRG9uZShlZGl0ZWRUYXNrKTsgKi9cbiAgICB9XG5cbiAgICBjb25zdCBjaGFuZ2VVcmxPbkhvdmVyID0gKGVkaXRCdG4pID0+IHtcbiAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKT0+IHtcbiAgICAgICAgICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2VkaXRIb3Zlci5wbmcnKVxuICAgICAgICB9KVxuICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCk9PiB7XG4gICAgICAgICAgICBlZGl0QnRuLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9lZGl0LnN2ZycpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlLFxuICAgICAgICBkaXNwbGF5RWRpdGVkVGFza1xuICAgIH1cbn0pKCkgXG5cbmV4cG9ydCBjb25zdCB0YXNrT3B0aW9ucyA9ICgoKT0+IHtcbiAgICBjb25zdCBjcmVhdGVPcHRpb25zRGl2ID0gKCk9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgb3B0aW9ucy5jbGFzc0xpc3QuYWRkKCdvcHRpb25zJyk7XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnNEaXZTZXRVcCA9ICgpPT4ge1xuICAgICAgICBjb25zdCBvcHRpb25zRGl2ID0gY3JlYXRlT3B0aW9uc0RpdigpO1xuICAgICAgICBvcHRpb25zRGl2LmFwcGVuZChlZGl0QnV0dG9uLmNyZWF0ZSgpLCBkZWxldGVCdXR0b24uY3JlYXRlKCkpO1xuICAgICAgICByZXR1cm4gb3B0aW9uc0RpdlxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG9wdGlvbnNEaXZTZXRVcFxuICAgIH1cbn0pKClcblxuY29uc3QgdGFza1N0YXRlID0gKHRhc2spPT4ge1xuICAgIGNvbnN0IHN0YXRlQ29sb3JQb2ludCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgY29uc3QgY3JlYXRlU3RhdGVDb2xvclBvaW50ID0gKHRhc2spPT4ge1xuICAgICAgICBzdGF0ZUNvbG9yUG9pbnQuY2xhc3NMaXN0LmFkZCgnc3RhdGVDb2xvclBvaW50Jyk7XG4gICAgICAgIHN0YXRlQ29sb3JQb2ludC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAuLi9zcmMvJHt0YXNrLnN0YXRlfS5wbmdgKTtcbiAgICAgICAgcmV0dXJuIHN0YXRlQ29sb3JQb2ludDtcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0Q29sb3IgPSAodGFzayk9PiB7XG4gICAgICAgIHN0YXRlQ29sb3JQb2ludC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAuLi9zcmMvJHt0YXNrLnN0YXRlfS5wbmdgKVxuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrSWZEb25lID0gKHRhc2spPT4ge1xuICAgICAgICByZXR1cm4gdGFzay5zdGF0ZSA9PT0gJ2RvbmUnO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVTdGF0ZUNvbG9yUG9pbnQsXG4gICAgICAgIGVkaXRDb2xvciwgXG4gICAgICAgIGNoZWNrSWZEb25lXG4gICAgfVxufVxuXG5jb25zdCB0YXNrUHJpb3JpdHkgPSAoKT0+IHtcbiAgICBjb25zdCBwcmlvcml0eUZsYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIGNvbnN0IGNyZWF0ZVByaW9yaXR5RGl2ID0gKHRhc2spPT4ge1xuICAgICAgICBwcmlvcml0eUZsYWcuc2V0QXR0cmlidXRlKCdzcmMnLCBgLi4vc3JjL2ZsYWdfJHt0YXNrLnByaW9yaXR5fS5wbmdgKTtcbiAgICAgICAgcHJpb3JpdHlGbGFnLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5RmxhZycpO1xuICAgICAgICByZXR1cm4gcHJpb3JpdHlGbGFnO1xuICAgIH1cblxuICAgIGNvbnN0IGVkaXRDb2xvciA9ICh0YXNrKT0+IHtcbiAgICAgICAgcHJpb3JpdHlGbGFnLnNldEF0dHJpYnV0ZSgnc3JjJywgYC4uL3NyYy9mbGFnXyR7dGFzay5wcmlvcml0eX0ucG5nYCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZVByaW9yaXR5RGl2LFxuICAgICAgICBlZGl0Q29sb3JcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBuZXdUYXNrID0gKCgpPT4ge1xuICAgIGNvbnN0IGdldE5ld1Rhc2sgPSAoKT0+IHtcbiAgICAgICAgY29uc3QgbGlzdCA9IFByb2plY3RMaXN0LmN1cnJlbnRQcm9qZWN0LnRhc2tMaXN0LmdldExpc3QoKTtcbiAgICAgICAgcmV0dXJuIGxpc3RbbGlzdC5sZW5ndGgtMV07XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlTmV3VGFza0NvbnRhaW5lciA9ICgpPT4ge1xuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIFByb2plY3RMaXN0LmN1cnJlbnRQcm9qZWN0LnRhc2tMaXN0LmdldExpc3QoKS5sZW5ndGgtMSk7XG4gICAgICAgIFRBU0tHUklELmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICAgICAgICByZXR1cm4gdGFza0NvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUYXNrRGV0YWlsID0gKGRldGFpbCwgbmV3VGFzayk9PiB7XG4gICAgICAgIGNvbnN0IGRldGFpbFRvRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRldGFpbFRvRGlzcGxheS5yZWFkT25seSA9IHRydWU7XG4gICAgICAgIGRldGFpbFRvRGlzcGxheS5jbGFzc0xpc3QuYWRkKGRldGFpbCk7XG4gICAgICAgIGRldGFpbFRvRGlzcGxheS52YWx1ZSA9IG5ld1Rhc2tbZGV0YWlsXTtcbiAgICAgICAgcmV0dXJuIGRldGFpbFRvRGlzcGxheTtcbiAgICB9XG5cbiAgICBjb25zdCBhcHBlbmRUYXNrRGV0YWlsID0gKHRhc2tDb250YWluZXIsIGRldGFpbFRvRGlzcGxheSk9PiB7XG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsVG9EaXNwbGF5KTtcbiAgICB9IFxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIGRpc3BsYXkgOiAoKT0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBnZXROZXdUYXNrKCk7XG4gICAgICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gY3JlYXRlTmV3VGFza0NvbnRhaW5lcigpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBkZXRhaWwgaW4gbmV3VGFzayl7XG4gICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsVG9EaXNwbGF5ID0gY3JlYXRlVGFza0RldGFpbChkZXRhaWwsIG5ld1Rhc2spO1xuICAgICAgICAgICAgICAgIGFwcGVuZFRhc2tEZXRhaWwodGFza0NvbnRhaW5lciwgZGV0YWlsVG9EaXNwbGF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZsYWcgPSB0YXNrUHJpb3JpdHkoKTtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZmxhZy5jcmVhdGVQcmlvcml0eURpdihuZXdUYXNrKSk7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tPcHRpb25zLm9wdGlvbnNEaXZTZXRVcCgpKTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlQ29sb3JQb2ludCA9IHRhc2tTdGF0ZSgpOyBcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhdGVDb2xvclBvaW50LmNyZWF0ZVN0YXRlQ29sb3JQb2ludChuZXdUYXNrKSk7XG4gICAgICAgICAgICBpZiAoc3RhdGVDb2xvclBvaW50LmNoZWNrSWZEb25lKG5ld1Rhc2spKSB7XG4gICAgICAgICAgICAgICAgdGFza0NvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gMC43O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAsXG4gICAgICAgIGRpc3BsYXlFYWNoVGFzayA6IChpKT0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBQcm9qZWN0TGlzdC5jdXJyZW50UHJvamVjdC50YXNrTGlzdC5nZXRMaXN0KClbaV1cbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBjcmVhdGVOZXdUYXNrQ29udGFpbmVyKCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRldGFpbCBpbiBuZXdUYXNrKXtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXRhaWxUb0Rpc3BsYXkgPSBjcmVhdGVUYXNrRGV0YWlsKGRldGFpbCwgbmV3VGFzayk7XG4gICAgICAgICAgICAgICAgYXBwZW5kVGFza0RldGFpbCh0YXNrQ29udGFpbmVyLCBkZXRhaWxUb0Rpc3BsYXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZmxhZyA9IHRhc2tQcmlvcml0eSgpO1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChmbGFnLmNyZWF0ZVByaW9yaXR5RGl2KG5ld1Rhc2spKTtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza09wdGlvbnMub3B0aW9uc0RpdlNldFVwKCkpO1xuICAgICAgICAgICAgY29uc3Qgc3RhdGVDb2xvclBvaW50ID0gdGFza1N0YXRlKCk7IFxuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdGF0ZUNvbG9yUG9pbnQuY3JlYXRlU3RhdGVDb2xvclBvaW50KG5ld1Rhc2spKTtcbiAgICAgICAgICAgIGlmIChzdGF0ZUNvbG9yUG9pbnQuY2hlY2tJZkRvbmUobmV3VGFzaykpIHtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAwLjc7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufSkoKSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vY3NzL2luaXRQYWdlTG9hZC5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9tb2RhbC5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9wcm9qZWN0Qm9hcmQuY3NzJztcbmltcG9ydCB7VGFza0xpc3QsIFRhc2t9IGZyb20gJy4vZnVuY3Rpb25uYWxpdGllcy9UYXNrJztcbmltcG9ydCB7bmV3VGFzaywgdGFza09wdGlvbnMsIEFERFRBU0tCVE4sIGZ1bGxUYXNrfSBmcm9tICcuL3ZpZXcgIGlobS9UYXNrQm9hcmQnO1xuaW1wb3J0IHsgbW9kYWxDb250YWluZXIsIGZvcm0sIG1hbmFnZU1vZGFsUmVzZXQsIGZvcm1FZGl0TW9kZSB9IGZyb20gJy4vZnVuY3Rpb25uYWxpdGllcy9tb2RhbCc7XG5pbXBvcnQgeyBhZGRQcm9qZWN0QnRuLCBwcm9qZWN0TmFtZUlucHV0LCBQcm9qZWN0Qm9hcmQgfSBmcm9tICcuL3ZpZXcgIGlobS9Qcm9qZWN0Qm9hcmQnO1xuaW1wb3J0IHsgUHJvamVjdCwgUHJvamVjdExpc3QsIGZpcnN0UHJvamVjdCB9IGZyb20gJy4vZnVuY3Rpb25uYWxpdGllcy9Qcm9qZWN0JztcblxuQUREVEFTS0JUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge21vZGFsQ29udGFpbmVyLm9wZW5Nb2RhbCgpfSk7XG5cbmZ1bmN0aW9uIG1hbmFnZVRhc2tDcmVhdGlvbigpIHtcbiAgICBjb25zdCBicmFuZE5ld1Rhc2sgPSBuZXcgVGFzayguLi5mb3JtLmdldFRhc2tEZXRhaWxzVmFsdWVzKCkpO1xuICAgIGNvbnNvbGUubG9nKGJyYW5kTmV3VGFzayk7XG4gICAgY29uc29sZS5sb2coYnJhbmROZXdUYXNrLnByaW9yaXR5KTtcbiAgICBQcm9qZWN0TGlzdC5jdXJyZW50UHJvamVjdC50YXNrTGlzdC5hZGRUYXNrKGJyYW5kTmV3VGFzayk7XG4gICAgbmV3VGFzay5kaXNwbGF5KCk7XG59XG5cbmZvcm0uU1VCTUlUX0JUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgIGlmICghZm9ybS5pc09uZUlucHV0SW52YWxpZCgpKXtcbiAgICAgICAgaWYgKGZvcm0uU1VCTUlUX0JUTi5pZCA9PT0gJ3N1Ym1pdCcpe1xuICAgICAgICAgICAgbWFuYWdlVGFza0NyZWF0aW9uKCk7XG4gICAgICAgICAgICBtYW5hZ2VNb2RhbFJlc2V0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZvcm0uZXJyb3JEaXNwbGF5KClcbiAgICB9XG59KVxuXG5cbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICBpZiAocHJvamVjdE5hbWVJbnB1dC52YWx1ZSAhPT0gJycpe1xuICAgICAgICBjb25zdCBicmFuZE5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZUlucHV0LnZhbHVlKTtcbiAgICAgICAgUHJvamVjdExpc3QuYWRkUHJvamVjdChicmFuZE5ld1Byb2plY3QpO1xuICAgICAgICBQcm9qZWN0Qm9hcmQuZGlzcGxheU5ld1Byb2plY3QoYnJhbmROZXdQcm9qZWN0LnRpdGxlKTtcbiAgICAgICAgUHJvamVjdEJvYXJkLmNsZWFyUHJvamVjdE5hbWVJbnB1dCgpO1xuICAgIH1cbn0pXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==