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
___CSS_LOADER_EXPORT___.push([module.id, ".taskListGrid {\n    width: 100%;\n    min-width: 600px;\n    background-color: lightgray;\n    row-gap: 10px;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: max-content;\n    grid-auto-rows: 45px;\n    justify-items: stretch;\n    align-items: stretch;\n}\n\n.task > *,\n.taskListHeaders > * {\n    margin: 0;\n}\n\n.taskListHeaders h4,\n.task input,\n.options,\n.priorityFlag {\n    padding: 5px 15px;\n}\n\n.task input {\n    border: 1px dotted transparent;\n    background-color: transparent;\n    max-width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    cursor: e-resize;\n}\n\n.task input::selection {\n    pointer-events: none;\n}\n\n.task,\n.taskListHeaders {\n    width: 100%;\n    min-width: max-content;\n    display: grid;\n    grid-template-columns: 18% 25% 10% 15% 10% 11% 1fr;\n    justify-content: stretch;\n    align-items: center;\n}\n\n.taskListGrid > * {\n    background-color: white;\n    margin: 0px;\n}\n\n@keyframes animate {\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n}\n\n\n.addBtn {\n\tposition: relative;\n\tz-index: 0;\n\tborder-radius: 6px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.addBtn:hover {\n    cursor: pointer;\n}\n\n.addBtn::before {\n    content: '';\n    position: absolute;\n    z-index: -2;\n    height: 100%;\n    width : 100%;\n\tborder-radius: 6px;\n    background: #1CFF70;\n    background-size: 600% 600%;\n}\n\n.addBtn::after {\n    content: '';\n    position: absolute;\n    z-index: -1;\n    left: 3px;\n    top: 3px;\n    width: calc(100% - 6px);\n    height: calc(100% - 6px);\n    background: white;\n    border-radius: 5px;\n}\n\n\t\n.addBtn:hover::before {\n    content: '';\n    position: absolute;\n    z-index: -2;\n    height: 100%;\n    width : 100%;\n\tborder-radius: 6px;\n    background: linear-gradient(45deg, #10e8a7, #bde810, #08c875);\n    background-size: 600% 600%;\n    animation: animate 4s ease infinite;\n}\n\n.addBtn:hover::after {\n    content: '';\n    position: absolute;\n    z-index: -1;\n    left: 3px;\n    top: 3px;\n    width: calc(100% - 6px);\n    height: calc(100% - 6px);\n    background: white;\n    border-radius: 5px;\n}\n\n.options img {\n    height: 20px;\n    width: auto;\n}\n\n.options img:hover {\n    cursor: pointer;\n}\n\n.priorityFlag {\n    height: 30px;\n    width: auto;\n}\n\n.taskBoardHeader {\n    display: flex;\n    justify-content: space-between ;\n}\n\n.flagsChart {\n    display: flex;\n    gap: 10px;\n    font-size: 10px;\n    background-color: white;\n    align-items: center;\n    height: fit-content;\n    padding: 5px;\n    \n}\n\n.flagsChart > div {\n    display: flex;\n    gap: 5px;\n    align-items: center;\n}\n\n.flagsChart img {\n    height: 20px;\n    width: auto;\n}\n\n.flagsChart p {\n    margin: 0;\n}\n\n.task{\n    position: relative;\n}\n\n.stateColorPoint {\n    height: 20px;\n    width: auto;\n}\n\n.stateContainer {\n    display: flex;\n    align-items: center;\n}\n\n", "",{"version":3,"sources":["webpack://./src/css/TaskBoard.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,gBAAgB;IAChB,2BAA2B;IAC3B,aAAa;IACb,aAAa;IACb,0BAA0B;IAC1B,+BAA+B;IAC/B,oBAAoB;IACpB,sBAAsB;IACtB,oBAAoB;AACxB;;AAEA;;IAEI,SAAS;AACb;;AAEA;;;;IAII,iBAAiB;AACrB;;AAEA;IACI,8BAA8B;IAC9B,6BAA6B;IAC7B,eAAe;IACf,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;;IAEI,WAAW;IACX,sBAAsB;IACtB,aAAa;IACb,kDAAkD;IAClD,wBAAwB;IACxB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,WAAW;AACf;;AAEA;CACC;EACC,2BAA2B;CAC5B;CACA;EACC,6BAA6B;CAC9B;CACA;EACC,2BAA2B;CAC5B;AACD;;;AAGA;CACC,kBAAkB;CAClB,UAAU;CACV,kBAAkB;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,YAAY;CACf,kBAAkB;IACf,mBAAmB;IACnB,0BAA0B;AAC9B;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,QAAQ;IACR,uBAAuB;IACvB,wBAAwB;IACxB,iBAAiB;IACjB,kBAAkB;AACtB;;;AAGA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,YAAY;CACf,kBAAkB;IACf,6DAA6D;IAC7D,0BAA0B;IAC1B,mCAAmC;AACvC;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,QAAQ;IACR,uBAAuB;IACvB,wBAAwB;IACxB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,SAAS;IACT,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;;AAEhB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB","sourcesContent":[".taskListGrid {\n    width: 100%;\n    min-width: 600px;\n    background-color: lightgray;\n    row-gap: 10px;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: max-content;\n    grid-auto-rows: 45px;\n    justify-items: stretch;\n    align-items: stretch;\n}\n\n.task > *,\n.taskListHeaders > * {\n    margin: 0;\n}\n\n.taskListHeaders h4,\n.task input,\n.options,\n.priorityFlag {\n    padding: 5px 15px;\n}\n\n.task input {\n    border: 1px dotted transparent;\n    background-color: transparent;\n    max-width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    cursor: e-resize;\n}\n\n.task input::selection {\n    pointer-events: none;\n}\n\n.task,\n.taskListHeaders {\n    width: 100%;\n    min-width: max-content;\n    display: grid;\n    grid-template-columns: 18% 25% 10% 15% 10% 11% 1fr;\n    justify-content: stretch;\n    align-items: center;\n}\n\n.taskListGrid > * {\n    background-color: white;\n    margin: 0px;\n}\n\n@keyframes animate {\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n}\n\n\n.addBtn {\n\tposition: relative;\n\tz-index: 0;\n\tborder-radius: 6px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.addBtn:hover {\n    cursor: pointer;\n}\n\n.addBtn::before {\n    content: '';\n    position: absolute;\n    z-index: -2;\n    height: 100%;\n    width : 100%;\n\tborder-radius: 6px;\n    background: #1CFF70;\n    background-size: 600% 600%;\n}\n\n.addBtn::after {\n    content: '';\n    position: absolute;\n    z-index: -1;\n    left: 3px;\n    top: 3px;\n    width: calc(100% - 6px);\n    height: calc(100% - 6px);\n    background: white;\n    border-radius: 5px;\n}\n\n\t\n.addBtn:hover::before {\n    content: '';\n    position: absolute;\n    z-index: -2;\n    height: 100%;\n    width : 100%;\n\tborder-radius: 6px;\n    background: linear-gradient(45deg, #10e8a7, #bde810, #08c875);\n    background-size: 600% 600%;\n    animation: animate 4s ease infinite;\n}\n\n.addBtn:hover::after {\n    content: '';\n    position: absolute;\n    z-index: -1;\n    left: 3px;\n    top: 3px;\n    width: calc(100% - 6px);\n    height: calc(100% - 6px);\n    background: white;\n    border-radius: 5px;\n}\n\n.options img {\n    height: 20px;\n    width: auto;\n}\n\n.options img:hover {\n    cursor: pointer;\n}\n\n.priorityFlag {\n    height: 30px;\n    width: auto;\n}\n\n.taskBoardHeader {\n    display: flex;\n    justify-content: space-between ;\n}\n\n.flagsChart {\n    display: flex;\n    gap: 10px;\n    font-size: 10px;\n    background-color: white;\n    align-items: center;\n    height: fit-content;\n    padding: 5px;\n    \n}\n\n.flagsChart > div {\n    display: flex;\n    gap: 5px;\n    align-items: center;\n}\n\n.flagsChart img {\n    height: 20px;\n    width: auto;\n}\n\n.flagsChart p {\n    margin: 0;\n}\n\n.task{\n    position: relative;\n}\n\n.stateColorPoint {\n    height: 20px;\n    width: auto;\n}\n\n.stateContainer {\n    display: flex;\n    align-items: center;\n}\n\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "\n\n#projectName {\n    background-color: transparent;\n    border-width: 0px;\n    border-bottom: 2px solid #1CFF70;\n    color: white;\n    flex-grow: 1;\n}\n\n.addProject {\n    width: 30px;\n    height: 30px;\n   border-radius: 50%;\n   border: none;\n   background-color: #1CFF70;\n   color: white;\n   font-weight: 900;\n   cursor: pointer;\n   position: relative;\n}\n\n.addProject:hover{\n    transform: rotate(-180deg);\n    transition: 0.5s;\n    bottom: 2px;\n    \n}\n\n.addProject img {\n    width: 55%;\n    height: auto;\n    position: absolute;\n    top: 50%; right: 50%;\n    transform: translate(50%,-50%);\n}\n\n.addProjectContainer {\n    display: flex;\n    gap: 10px;\n}\n\nli {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-radius: 8px;\n    padding: 8px 15px;\n    margin-bottom: 10px;\n    border: 1px solid transparent;\n}\n\nli h4 {\n    flex-grow: 1;\n    margin: 0;\n}\n\n.projectSection li:hover {\n    cursor: pointer;\n    border: 1px solid #1CFF70;\n\n}\n\nli img {\n    height: 22px;\n    width: auto;\n}\n\n#projectList {\n    padding: 0px;\n}", "",{"version":3,"sources":["webpack://./src/css/projectBoard.css"],"names":[],"mappings":";;AAEA;IACI,6BAA6B;IAC7B,iBAAiB;IACjB,gCAAgC;IAChC,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;GACb,kBAAkB;GAClB,YAAY;GACZ,yBAAyB;GACzB,YAAY;GACZ,gBAAgB;GAChB,eAAe;GACf,kBAAkB;AACrB;;AAEA;IACI,0BAA0B;IAC1B,gBAAgB;IAChB,WAAW;;AAEf;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,QAAQ,EAAE,UAAU;IACpB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,eAAe;IACf,yBAAyB;;AAE7B;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,YAAY;AAChB","sourcesContent":["\n\n#projectName {\n    background-color: transparent;\n    border-width: 0px;\n    border-bottom: 2px solid #1CFF70;\n    color: white;\n    flex-grow: 1;\n}\n\n.addProject {\n    width: 30px;\n    height: 30px;\n   border-radius: 50%;\n   border: none;\n   background-color: #1CFF70;\n   color: white;\n   font-weight: 900;\n   cursor: pointer;\n   position: relative;\n}\n\n.addProject:hover{\n    transform: rotate(-180deg);\n    transition: 0.5s;\n    bottom: 2px;\n    \n}\n\n.addProject img {\n    width: 55%;\n    height: auto;\n    position: absolute;\n    top: 50%; right: 50%;\n    transform: translate(50%,-50%);\n}\n\n.addProjectContainer {\n    display: flex;\n    gap: 10px;\n}\n\nli {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-radius: 8px;\n    padding: 8px 15px;\n    margin-bottom: 10px;\n    border: 1px solid transparent;\n}\n\nli h4 {\n    flex-grow: 1;\n    margin: 0;\n}\n\n.projectSection li:hover {\n    cursor: pointer;\n    border: 1px solid #1CFF70;\n\n}\n\nli img {\n    height: 22px;\n    width: auto;\n}\n\n#projectList {\n    padding: 0px;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "firstProject": () => (/* binding */ firstProject),
/* harmony export */   "setStartingProject": () => (/* binding */ setStartingProject)
/* harmony export */ });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/functionnalities/Task.js");
/* harmony import */ var _view_ihm_ProjectBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view  ihm/ProjectBoard */ "./src/view  ihm/ProjectBoard.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./src/index.js");




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

    set taskList(value) {
        this._taskList = value;
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
        populateProjectStorage()
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
    return project
}

function setStartingProject(){
    ProjectList.currentProject = firstProject('First Project - Start here');
    _view_ihm_ProjectBoard__WEBPACK_IMPORTED_MODULE_1__.ProjectBoard.highlightCurrentProject(_view_ihm_ProjectBoard__WEBPACK_IMPORTED_MODULE_1__.ProjectBoard.selectProjectBoardCurrentProject());
}





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

    const printList = ()=> {
        console.log(list);
    }

    return {
        getList,
        addTask,
        deleteTask, 
        editTask,
        printList
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
        form.clearInputsValues();
    }
    const activateCloseBtn = (()=> {
        closeModalBtn.addEventListener('click', ()=> {
            closeModal();
        })
    })()
    return {
        openModal,
        closeModal,
        closeModalBtn
    }
})()

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

    const isEveryInputInvalid = ()=> {
        return INPUTS.every(input => {
            return input.value !== '';
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
        isEveryInputInvalid,
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
                (form.isEveryInputInvalid()) ? SUBMIT_CHANGES_BTN.disabled = false : 
                    SUBMIT_CHANGES_BTN.disabled = true;
                })
            })
    }

    const fillFormInputsWithCurrentValues = (currentValues) => {
        form.INPUTS.forEach((input) => {
            let currentValue;
            if (input.id === 'state') {
                currentValue = currentValues.filter((element)=> { 
                    return element.className === 'stateContainer';
                }) 
                currentValue = currentValue[0].lastChild.value;
            }
            else {
                currentValue = currentValues.filter((element)=> {
                    return element.className === `_${input.id}`;
                })
                currentValue = currentValue[0].value
            }
            input.value = currentValue;
        }) 
    }

    const validateChanges = (e, inputs, stateColorPoint, flag)=> {
            let editedTask = new _functionnalities_Task__WEBPACK_IMPORTED_MODULE_0__.Task(...form.getTaskDetailsValues());
            _functionnalities_Project__WEBPACK_IMPORTED_MODULE_2__.ProjectList.currentProject.taskList.editTask(e.target.parentElement.parentElement.getAttribute('data-index'), editedTask);
            const taskContainer = e.target.parentElement.parentElement;
            _view_ihm_TaskBoard__WEBPACK_IMPORTED_MODULE_1__.editButton.displayEditedTask(editedTask, inputs, stateColorPoint, flag, taskContainer);
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "populateProjectStorage": () => (/* binding */ populateProjectStorage),
/* harmony export */   "populateTaskStorage": () => (/* binding */ populateTaskStorage)
/* harmony export */ });
/* harmony import */ var _css_initPageLoad_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/initPageLoad.css */ "./src/css/initPageLoad.css");
/* harmony import */ var _css_modal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/modal.css */ "./src/css/modal.css");
/* harmony import */ var _css_projectBoard_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/projectBoard.css */ "./src/css/projectBoard.css");
/* harmony import */ var _functionnalities_Task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functionnalities/Task */ "./src/functionnalities/Task.js");
/* harmony import */ var _view_ihm_TaskBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view  ihm/TaskBoard */ "./src/view  ihm/TaskBoard.js");
/* harmony import */ var _functionnalities_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functionnalities/modal */ "./src/functionnalities/modal.js");
/* harmony import */ var _view_ihm_ProjectBoard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view  ihm/ProjectBoard */ "./src/view  ihm/ProjectBoard.js");
/* harmony import */ var _functionnalities_Project__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functionnalities/Project */ "./src/functionnalities/Project.js");









_view_ihm_TaskBoard__WEBPACK_IMPORTED_MODULE_4__.ADDTASKBTN.addEventListener('click', ()=> {
    _functionnalities_modal__WEBPACK_IMPORTED_MODULE_5__.modalContainer.openModal()
});

function manageTaskCreation() {
    const brandNewTask = new _functionnalities_Task__WEBPACK_IMPORTED_MODULE_3__.Task(..._functionnalities_modal__WEBPACK_IMPORTED_MODULE_5__.form.getTaskDetailsValues());
    _functionnalities_Project__WEBPACK_IMPORTED_MODULE_7__.ProjectList.currentProject.taskList.addTask(brandNewTask);
    _view_ihm_TaskBoard__WEBPACK_IMPORTED_MODULE_4__.newTask.display();
}

_functionnalities_modal__WEBPACK_IMPORTED_MODULE_5__.form.SUBMIT_BTN.addEventListener('click', ()=> {
    if (_functionnalities_modal__WEBPACK_IMPORTED_MODULE_5__.form.isEveryInputInvalid()){
        if (_functionnalities_modal__WEBPACK_IMPORTED_MODULE_5__.form.SUBMIT_BTN.id === 'submit'){
            manageTaskCreation();
            (0,_functionnalities_modal__WEBPACK_IMPORTED_MODULE_5__.manageModalReset)();
            populateTaskListStorage()
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
        console.log(_functionnalities_Project__WEBPACK_IMPORTED_MODULE_7__.ProjectList.getList()[0].taskList.getList());
        populateProjectStorage();
    }
})

const localStoragedProjects = JSON.parse(localStorage.getItem('savedProjectList'));

function populateProjectStorage() {
    localStorage.setItem('savedProjectList', JSON.stringify(_functionnalities_Project__WEBPACK_IMPORTED_MODULE_7__.ProjectList.getList()));
}

function populateTaskStorage(project) {
    localStorage.setItem(project._title, JSON.stringify(project.taskList.getList()));
}

function populateTaskListStorage() {
    localStorage.setItem('savedTasksLists', JSON.stringify(_functionnalities_Project__WEBPACK_IMPORTED_MODULE_7__.ProjectList.getList().map(project => {
        return project.taskList.getList()
    })))
    console.log(JSON.parse(localStorage.getItem('savedTasksLists')));
}

function retrieveSavedProjects() {
    for (const projectKey in localStoragedProjects) {
        const retrievedProject = new _functionnalities_Project__WEBPACK_IMPORTED_MODULE_7__.Project(localStoragedProjects[projectKey]._title);
        _functionnalities_Project__WEBPACK_IMPORTED_MODULE_7__.ProjectList.addProject(retrievedProject);
    }
}

function retrievedCurrentProject() {
    const savedCurrentProject = JSON.parse(localStorage.getItem('currentProject'));
    _functionnalities_Project__WEBPACK_IMPORTED_MODULE_7__.ProjectList.currentProject = _functionnalities_Project__WEBPACK_IMPORTED_MODULE_7__.ProjectList.getList().filter(project => project.title === savedCurrentProject._title)[0];
}

function retrieveSavedTaskLists() {
    const savedTaskLists = JSON.parse(localStorage.getItem('savedTasksLists'));
    let i = 0;
    for (const taskListKey in savedTaskLists) {
        for (const task in savedTaskLists[taskListKey]) {
            const taskToRetrieve = savedTaskLists[taskListKey][task];
            const arrInfosOfTaskToRetrieve = Object.keys(taskToRetrieve).map(key => taskToRetrieve[key]);
            const newTask = new _functionnalities_Task__WEBPACK_IMPORTED_MODULE_3__.Task(...arrInfosOfTaskToRetrieve);
            _functionnalities_Project__WEBPACK_IMPORTED_MODULE_7__.ProjectList.getList()[i].taskList.addTask(newTask);
            console.log(newTask);
        }
        i++
    }
}

function displayLocalStoragedCurrentProjectTaskList() {

}

if (localStorage.length === 0) {
    (0,_functionnalities_Project__WEBPACK_IMPORTED_MODULE_7__.setStartingProject)();
    _view_ihm_TaskBoard__WEBPACK_IMPORTED_MODULE_4__.TaskBoard.displayProjectTitle(_functionnalities_Project__WEBPACK_IMPORTED_MODULE_7__.ProjectList.currentProject.title);
    localStorage.setItem('currentProject', JSON.stringify(_functionnalities_Project__WEBPACK_IMPORTED_MODULE_7__.ProjectList.currentProject));
    populateProjectStorage()
    localStorage.setItem('savedTaskLists', [[]]);
}

else {
    retrieveSavedProjects()
    retrievedCurrentProject()
    retrieveSavedTaskLists();
    let i = 0;
    _functionnalities_Project__WEBPACK_IMPORTED_MODULE_7__.ProjectList.currentProject.taskList.getList().forEach((task)=> {
        _view_ihm_TaskBoard__WEBPACK_IMPORTED_MODULE_4__.newTask.displayEachTask(i);
        i = i+1;
        }) 
    ;(0,_view_ihm_ProjectBoard__WEBPACK_IMPORTED_MODULE_6__.displayLocalStoragedProjects)();
    displayLocalStoragedCurrentProjectTaskList();
    _view_ihm_ProjectBoard__WEBPACK_IMPORTED_MODULE_6__.ProjectBoard.highlightCurrentProject(_view_ihm_ProjectBoard__WEBPACK_IMPORTED_MODULE_6__.ProjectBoard.selectProjectBoardCurrentProject())
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
/* harmony export */   "displayLocalStoragedProjects": () => (/* binding */ displayLocalStoragedProjects),
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
            localStorage.setItem('currentProject', JSON.stringify(_functionnalities_Project__WEBPACK_IMPORTED_MODULE_0__.ProjectList.currentProject));
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
        removeHighlight,
        highlightCurrentProject,
        selectProjectBoardCurrentProject
    }
})()

const displayLocalStoragedProjects = (()=> {
    console.log(_functionnalities_Project__WEBPACK_IMPORTED_MODULE_0__.ProjectList.getList());
    _functionnalities_Project__WEBPACK_IMPORTED_MODULE_0__.ProjectList.getList().forEach(project => {
        ProjectBoard.displayNewProject(project.title);
    })
})



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
/* harmony import */ var _functionnalities_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functionnalities/modal */ "./src/functionnalities/modal.js");
/* harmony import */ var _functionnalities_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functionnalities/Project */ "./src/functionnalities/Project.js");




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

   /*  const displayFirstProjectTitle = (() => {
        displayProjectTitle(ProjectList.currentProject.title);
    })() */
    
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
            _functionnalities_Project__WEBPACK_IMPORTED_MODULE_2__.ProjectList.currentProject.taskList.deleteTask(e.target.parentElement.parentElement.getAttribute('data-index'));
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
            _functionnalities_Project__WEBPACK_IMPORTED_MODULE_2__.ProjectList.currentProject.taskList.printList();
            const inputs = Array.from(e.target.parentElement.parentElement.children);
            const flag = inputs.filter(element => {
               return element.classList.contains('priorityFlag');
            });
            const stateColorPoint = inputs.filter(element => {
                return element.classList.contains('stateContainer');
            })[0].firstChild;
            _functionnalities_modal__WEBPACK_IMPORTED_MODULE_1__.formEditMode.open(inputs);
            _functionnalities_modal__WEBPACK_IMPORTED_MODULE_1__.formEditMode.inputsValidation();
            _functionnalities_modal__WEBPACK_IMPORTED_MODULE_1__.formEditMode.SUBMIT_CHANGES_BTN.addEventListener('click', ()=> {
                    _functionnalities_modal__WEBPACK_IMPORTED_MODULE_1__.formEditMode.validateChanges(e, inputs, stateColorPoint , flag[0]);
            }, {once : true})
        })
}

    const displayEditedTask = (editedTask, inputs, stateColorPoint, priorityFlag, taskContainer)=> {
        for (const detail in editedTask){
            let valueToUpdate;
            if (detail === '_state'){
                valueToUpdate = inputs.filter((element) => {
                    return element.className === 'stateContainer';
                })
                valueToUpdate = valueToUpdate[0].lastChild;
            }
            else {
                valueToUpdate = inputs.filter((element) => {
                    return element.className === `${detail}`;
                })
                valueToUpdate = valueToUpdate[0];
            }
            valueToUpdate.value = editedTask[detail];
        }
        stateColorPoint.setAttribute('src', `../src/${editedTask.state}.png`);
        priorityFlag.setAttribute('src', `../src/flag_${editedTask.priority}.png`);
        (editedTask.state === 'done') ? taskContainer.style.opacity = 0.7 : taskContainer.style.opacity = 1;
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
        stateColorPoint,
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
        const list = _functionnalities_Project__WEBPACK_IMPORTED_MODULE_2__.ProjectList.currentProject.taskList.getList();
        return list[list.length-1];
    }

    const createNewTaskContainer = ()=> {
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task');
        taskContainer.setAttribute('data-index', _functionnalities_Project__WEBPACK_IMPORTED_MODULE_2__.ProjectList.currentProject.taskList.getList().length-1);
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
    
    const displayTasks = (newTask)=> {
        const taskContainer = createNewTaskContainer();
            for (const detail in newTask){
                const detailToDisplay = createTaskDetail(detail, newTask);
                if (detail === '_state'){
                    const stateContainer = document.createElement('div');
                    stateContainer.classList.add('stateContainer');
                    appendTaskDetail(taskContainer, stateContainer);
                    appendTaskDetail(stateContainer, detailToDisplay);
                    const taskStatePoint = taskState();
                    stateContainer.insertBefore(taskStatePoint.stateColorPoint, stateContainer.firstChild)
                    taskStatePoint.createStateColorPoint(newTask);
                }
                else {
                    appendTaskDetail(taskContainer, detailToDisplay);
                }
            }
            newTask.state === 'done' ? taskContainer.style.opacity = 0.7 : taskContainer.style.opacity = 1;
            const flag = taskPriority();
            taskContainer.appendChild(flag.createPriorityDiv(newTask));
            taskContainer.appendChild(taskOptions.optionsDivSetUp());
        }

    return {
        display : ()=> {
            const newTask = getNewTask();
            displayTasks(newTask);
        }
        ,
        displayEachTask : (i)=> {
            const newTask = _functionnalities_Project__WEBPACK_IMPORTED_MODULE_2__.ProjectList.currentProject.taskList.getList()[i];
            displayTasks(newTask);
            const taskContainers = Array.from(document.querySelectorAll('div[data-index]'));
        if (taskContainers.length>0){
            taskContainers[0].setAttribute('data-index', 0);
            for (let i=0 ; i<taskContainers.length-1; i++){
                taskContainers[i+1].setAttribute('data-index', parseInt(taskContainers[i].getAttribute('data-index'))+1);
            }
        }
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPOzs7Ozs7Ozs7Ozs7Ozs7O0FDdExpQztBQUNpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2Nzcy9UYXNrQm9hcmQuY3NzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvY3NzL2luaXRQYWdlTG9hZC5jc3MiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9jc3MvbW9kYWwuY3NzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvY3NzL3Byb2plY3RCb2FyZC5jc3MiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0FmdGVyL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzQmVmb3JlL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZUlTTy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2Nzcy9UYXNrQm9hcmQuY3NzPzNlYTgiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9jc3MvaW5pdFBhZ2VMb2FkLmNzcz9iZjBiIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvY3NzL21vZGFsLmNzcz9mMzgxIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvY3NzL3Byb2plY3RCb2FyZC5jc3M/MDMxMSIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvZnVuY3Rpb25uYWxpdGllcy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvZnVuY3Rpb25uYWxpdGllcy9UYXNrLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvZnVuY3Rpb25uYWxpdGllcy9tb2RhbC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvdmlldyAgaWhtL1Byb2plY3RCb2FyZC5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL3ZpZXcgIGlobS9UYXNrQm9hcmQuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudGFza0xpc3RHcmlkIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi13aWR0aDogNjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gICAgcm93LWdhcDogMTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQ7XFxuICAgIGdyaWQtYXV0by1yb3dzOiA0NXB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdHJldGNoO1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG59XFxuXFxuLnRhc2sgPiAqLFxcbi50YXNrTGlzdEhlYWRlcnMgPiAqIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4udGFza0xpc3RIZWFkZXJzIGg0LFxcbi50YXNrIGlucHV0LFxcbi5vcHRpb25zLFxcbi5wcmlvcml0eUZsYWcge1xcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXG59XFxuXFxuLnRhc2sgaW5wdXQge1xcbiAgICBib3JkZXI6IDFweCBkb3R0ZWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBjdXJzb3I6IGUtcmVzaXplO1xcbn1cXG5cXG4udGFzayBpbnB1dDo6c2VsZWN0aW9uIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi50YXNrLFxcbi50YXNrTGlzdEhlYWRlcnMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxOCUgMjUlIDEwJSAxNSUgMTAlIDExJSAxZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2tMaXN0R3JpZCA+ICoge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XFxuXFx0MCUge1xcblxcdFxcdGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcXG5cXHR9XFxuXFx0NTAlIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcXG5cXHR9XFxuXFx0MTAwJSB7XFxuXFx0XFx0YmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcblxcdH1cXG59XFxuXFxuXFxuLmFkZEJ0biB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHotaW5kZXg6IDA7XFxuXFx0Ym9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZEJ0bjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZEJ0bjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogLTI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGggOiAxMDAlO1xcblxcdGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYmFja2dyb3VuZDogIzFDRkY3MDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA2MDAlIDYwMCU7XFxufVxcblxcbi5hZGRCdG46OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIGxlZnQ6IDNweDtcXG4gICAgdG9wOiAzcHg7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2cHgpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDZweCk7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcblxcdFxcbi5hZGRCdG46aG92ZXI6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IC0yO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoIDogMTAwJTtcXG5cXHRib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzEwZThhNywgI2JkZTgxMCwgIzA4Yzg3NSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNjAwJSA2MDAlO1xcbiAgICBhbmltYXRpb246IGFuaW1hdGUgNHMgZWFzZSBpbmZpbml0ZTtcXG59XFxuXFxuLmFkZEJ0bjpob3Zlcjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgbGVmdDogM3B4O1xcbiAgICB0b3A6IDNweDtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDZweCk7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNnB4KTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm9wdGlvbnMgaW1nIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuLm9wdGlvbnMgaW1nOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJpb3JpdHlGbGFnIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuLnRhc2tCb2FyZEhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiA7XFxufVxcblxcbi5mbGFnc0NoYXJ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIFxcbn1cXG5cXG4uZmxhZ3NDaGFydCA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZmxhZ3NDaGFydCBpbWcge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4uZmxhZ3NDaGFydCBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4udGFza3tcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc3RhdGVDb2xvclBvaW50IHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuLnN0YXRlQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9UYXNrQm9hcmQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsK0JBQStCO0lBQy9CLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJLFNBQVM7QUFDYjs7QUFFQTs7OztJQUlJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrREFBa0Q7SUFDbEQsd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7O0FBRUE7Q0FDQztFQUNDLDJCQUEyQjtDQUM1QjtDQUNBO0VBQ0MsNkJBQTZCO0NBQzlCO0NBQ0E7RUFDQywyQkFBMkI7Q0FDNUI7QUFDRDs7O0FBR0E7Q0FDQyxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLGtCQUFrQjtJQUNmLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0NBQ2Ysa0JBQWtCO0lBQ2YsbUJBQW1CO0lBQ25CLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxRQUFRO0lBQ1IsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0NBQ2Ysa0JBQWtCO0lBQ2YsNkRBQTZEO0lBQzdELDBCQUEwQjtJQUMxQixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsUUFBUTtJQUNSLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50YXNrTGlzdEdyaWQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLXdpZHRoOiA2MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgICByb3ctZ2FwOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudDtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDQ1cHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cXG5cXG4udGFzayA+ICosXFxuLnRhc2tMaXN0SGVhZGVycyA+ICoge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi50YXNrTGlzdEhlYWRlcnMgaDQsXFxuLnRhc2sgaW5wdXQsXFxuLm9wdGlvbnMsXFxuLnByaW9yaXR5RmxhZyB7XFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcbn1cXG5cXG4udGFzayBpbnB1dCB7XFxuICAgIGJvcmRlcjogMXB4IGRvdHRlZCB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIGN1cnNvcjogZS1yZXNpemU7XFxufVxcblxcbi50YXNrIGlucHV0OjpzZWxlY3Rpb24ge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnRhc2ssXFxuLnRhc2tMaXN0SGVhZGVycyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE4JSAyNSUgMTAlIDE1JSAxMCUgMTElIDFmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFza0xpc3RHcmlkID4gKiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuQGtleWZyYW1lcyBhbmltYXRlIHtcXG5cXHQwJSB7XFxuXFx0XFx0YmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcblxcdH1cXG5cXHQ1MCUge1xcblxcdFxcdGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xcblxcdH1cXG5cXHQxMDAlIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XFxuXFx0fVxcbn1cXG5cXG5cXG4uYWRkQnRuIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ei1pbmRleDogMDtcXG5cXHRib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkQnRuOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkQnRuOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAtMjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aCA6IDEwMCU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMUNGRjcwO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDYwMCUgNjAwJTtcXG59XFxuXFxuLmFkZEJ0bjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgbGVmdDogM3B4O1xcbiAgICB0b3A6IDNweDtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDZweCk7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNnB4KTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuXFx0XFxuLmFkZEJ0bjpob3Zlcjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogLTI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGggOiAxMDAlO1xcblxcdGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMTBlOGE3LCAjYmRlODEwLCAjMDhjODc1KTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA2MDAlIDYwMCU7XFxuICAgIGFuaW1hdGlvbjogYW5pbWF0ZSA0cyBlYXNlIGluZmluaXRlO1xcbn1cXG5cXG4uYWRkQnRuOmhvdmVyOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBsZWZ0OiAzcHg7XFxuICAgIHRvcDogM3B4O1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNnB4KTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2cHgpO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ub3B0aW9ucyBpbWcge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4ub3B0aW9ucyBpbWc6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcmlvcml0eUZsYWcge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4udGFza0JvYXJkSGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuIDtcXG59XFxuXFxuLmZsYWdzQ2hhcnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgXFxufVxcblxcbi5mbGFnc0NoYXJ0ID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mbGFnc0NoYXJ0IGltZyB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5mbGFnc0NoYXJ0IHAge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi50YXNre1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zdGF0ZUNvbG9yUG9pbnQge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4uc3RhdGVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2xvZ29Gb250LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL21haW4udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2xvZ29Gb250JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKVxcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdtYWluJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdHJldGNoO1xcbiAgICBmb250LWZhbWlseTogJ21haW4nO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgY29sb3I6ICMzMzMzMzM7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCBsaWdodGdyZXksIDJweCAycHggNHB4IGxpZ2h0Z3JheTtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAtMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLmhlYWRlciA+IGgzIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5zaWRlYmFyID4gKiB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIC0xIC8gMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIC0xIC8gLTE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLmxvZ29Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDA0MDtcXG59XFxuXFxuI2xvZ29UZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdsb2dvRm9udCc7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgY29sb3I6ICMxQ0ZGNzA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI3Rhc2tJbWcge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbiNwcm9maWxlUGljdHVyZSB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnByb2plY3RTZWN0aW9uID4gaDIge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaW5pdFBhZ2VMb2FkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QjtBQUNKOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLCtEQUF3QztBQUM1Qzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx3REFBd0Q7SUFDeEQseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGNBQWM7SUFDZCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdsb2dvRm9udCc7XFxuICAgIHNyYzogdXJsKCcuLi9sb2dvRm9udC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJylcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnbWFpbic7XFxuICAgIHNyYzogdXJsKC4uL21haW4udHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmcjtcXG4gICAganVzdGlmeS1pdGVtczogc3RyZXRjaDtcXG4gICAgZm9udC1mYW1pbHk6ICdtYWluJztcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggbGlnaHRncmV5LCAycHggMnB4IDRweCBsaWdodGdyYXk7XFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gLTE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5oZWFkZXIgPiBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4uc2lkZWJhciA+ICoge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAtMSAvIDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxubWFpbiB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAtMSAvIC0xO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5sb2dvQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDQwNDA7XFxufVxcblxcbiNsb2dvVGV4dCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnbG9nb0ZvbnQnO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGNvbG9yOiAjMUNGRjcwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiN0YXNrSW1nIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4jcHJvZmlsZVBpY3R1cmUge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5wcm9qZWN0U2VjdGlvbiA+IGgyIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubW9kYWxDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMCwyMjAsMjIwLCAwLjcpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xcbn1cXG5cXG4ubW9kYWxDb250YWluZXIuc2hvd24ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCA1cHggM3B4IGxpZ2h0Z3JheTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbiNjbG9zZU1vZGFsIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jZWRpdE1vZGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDIwcHg7XFxufVxcblxcbiNzdWJtaXQ6ZGlzYWJsZWQge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbiNzdWJtaXQsXFxuI2VkaXRNb2RlIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzFDRkY3MDtcXG4gICAgY29sb3I6ICMxQ0ZGNzA7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA4cHggMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAycHggNXB4IDNweCBsaWdodGdyYXk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDBweDtcXG4gICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXM7XFxufVxcblxcbiNzdWJtaXQ6aG92ZXIsXFxuI2VkaXRNb2RlOmhvdmVyIHtcXG4gICAgYm90dG9tOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQ0ZGNzA7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2VkaXRNb2RlOmRpc2FibGVkIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uZm9ybUZpZWxkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZm9ybUZpZWxkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmZvcm1GaWVsZCBsYWJlbCB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLmZvcm1GaWVsZCBpbnB1dCxcXG4uZm9ybUZpZWxkIHNlbGVjdCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAyMjBweDtcXG59XFxuXFxuLmZvcm1GaWVsZCBpbnB1dDpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjogIzFDRkY3MDtcXG59XFxuXFxuZm9ybSBidXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG4uZm9ybUZpZWxkIGlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZS1jb2xvcjogIzFDRkY3MDtcXG59XFxuXFxuLmZvcm1GaWVsZCBpbnB1dFtyZXF1aXJlZF0gKyBzcGFue1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmZvcm1GaWVsZCBpbnB1dFtyZXF1aXJlZF0gKyBzcGFuOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAncmVxdWlyZWQnO1xcbiAgICBmb250LXNpemU6IDlweDtcXG4gICAgcGFkZGluZzogMC4xdnc7XFxuICAgIGNvbG9yOiAjMzMzMzMzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUNGRjcwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTEuNWVtO1xcbiAgICByaWdodDogMS4yZW07XFxuICAgIHBhZGRpbmc6IDFweCA4cHg7XFxufVxcblxcbmlucHV0W3JlcXVpcmVkXTppbnZhbGlkOnBsYWNlaG9sZGVyLXNob3duICsgc3Bhbjo6YWZ0ZXIge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbmlucHV0W3JlcXVpcmVkXTppbnZhbGlkOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgc3Bhbjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAneCc7XFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDJweDtcXG4gICAgcmlnaHQ6IC0ycHg7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbmlucHV0W3JlcXVpcmVkXTp2YWxpZCArIHNwYW46OmFmdGVyIHtcXG4gICAgY29udGVudDogJyDwn5e4JztcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICBjb2xvcjogZ3JlZW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAycHg7XFxuICAgIHJpZ2h0OiAtMnB4O1xcbn1cXG5cXG4jY2xvc2VNb2RhbCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL21vZGFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixhQUFhO0lBQ2Isd0NBQXdDO0lBQ3hDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubW9kYWxDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMCwyMjAsMjIwLCAwLjcpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xcbn1cXG5cXG4ubW9kYWxDb250YWluZXIuc2hvd24ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCA1cHggM3B4IGxpZ2h0Z3JheTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbiNjbG9zZU1vZGFsIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jZWRpdE1vZGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDIwcHg7XFxufVxcblxcbiNzdWJtaXQ6ZGlzYWJsZWQge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbiNzdWJtaXQsXFxuI2VkaXRNb2RlIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzFDRkY3MDtcXG4gICAgY29sb3I6ICMxQ0ZGNzA7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA4cHggMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAycHggNXB4IDNweCBsaWdodGdyYXk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDBweDtcXG4gICAgdHJhbnNpdGlvbjogYm90dG9tIDAuMXM7XFxufVxcblxcbiNzdWJtaXQ6aG92ZXIsXFxuI2VkaXRNb2RlOmhvdmVyIHtcXG4gICAgYm90dG9tOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQ0ZGNzA7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2VkaXRNb2RlOmRpc2FibGVkIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uZm9ybUZpZWxkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZm9ybUZpZWxkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmZvcm1GaWVsZCBsYWJlbCB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLmZvcm1GaWVsZCBpbnB1dCxcXG4uZm9ybUZpZWxkIHNlbGVjdCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAyMjBweDtcXG59XFxuXFxuLmZvcm1GaWVsZCBpbnB1dDpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjogIzFDRkY3MDtcXG59XFxuXFxuZm9ybSBidXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG4uZm9ybUZpZWxkIGlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZS1jb2xvcjogIzFDRkY3MDtcXG59XFxuXFxuLmZvcm1GaWVsZCBpbnB1dFtyZXF1aXJlZF0gKyBzcGFue1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmZvcm1GaWVsZCBpbnB1dFtyZXF1aXJlZF0gKyBzcGFuOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAncmVxdWlyZWQnO1xcbiAgICBmb250LXNpemU6IDlweDtcXG4gICAgcGFkZGluZzogMC4xdnc7XFxuICAgIGNvbG9yOiAjMzMzMzMzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUNGRjcwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTEuNWVtO1xcbiAgICByaWdodDogMS4yZW07XFxuICAgIHBhZGRpbmc6IDFweCA4cHg7XFxufVxcblxcbmlucHV0W3JlcXVpcmVkXTppbnZhbGlkOnBsYWNlaG9sZGVyLXNob3duICsgc3Bhbjo6YWZ0ZXIge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbmlucHV0W3JlcXVpcmVkXTppbnZhbGlkOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgc3Bhbjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAneCc7XFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDJweDtcXG4gICAgcmlnaHQ6IC0ycHg7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbmlucHV0W3JlcXVpcmVkXTp2YWxpZCArIHNwYW46OmFmdGVyIHtcXG4gICAgY29udGVudDogJyDwn5e4JztcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICBjb2xvcjogZ3JlZW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAycHg7XFxuICAgIHJpZ2h0OiAtMnB4O1xcbn1cXG5cXG4jY2xvc2VNb2RhbCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG4jcHJvamVjdE5hbWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMUNGRjcwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLmFkZFByb2plY3Qge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICBib3JkZXI6IG5vbmU7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogIzFDRkY3MDtcXG4gICBjb2xvcjogd2hpdGU7XFxuICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYWRkUHJvamVjdDpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxuICAgIGJvdHRvbTogMnB4O1xcbiAgICBcXG59XFxuXFxuLmFkZFByb2plY3QgaW1nIHtcXG4gICAgd2lkdGg6IDU1JTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlOyByaWdodDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsLTUwJSk7XFxufVxcblxcbi5hZGRQcm9qZWN0Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5saSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbmxpIGg0IHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5wcm9qZWN0U2VjdGlvbiBsaTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzFDRkY3MDtcXG5cXG59XFxuXFxubGkgaW1nIHtcXG4gICAgaGVpZ2h0OiAyMnB4O1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuI3Byb2plY3RMaXN0IHtcXG4gICAgcGFkZGluZzogMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Byb2plY3RCb2FyZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7R0FDYixrQkFBa0I7R0FDbEIsWUFBWTtHQUNaLHlCQUF5QjtHQUN6QixZQUFZO0dBQ1osZ0JBQWdCO0dBQ2hCLGVBQWU7R0FDZixrQkFBa0I7QUFDckI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLFdBQVc7O0FBRWY7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRLEVBQUUsVUFBVTtJQUNwQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7O0FBRTdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuI3Byb2plY3ROYW1lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci13aWR0aDogMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzFDRkY3MDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5hZGRQcm9qZWN0IHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgYm9yZGVyOiBub25lO1xcbiAgIGJhY2tncm91bmQtY29sb3I6ICMxQ0ZGNzA7XFxuICAgY29sb3I6IHdoaXRlO1xcbiAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmFkZFByb2plY3Q6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgICBib3R0b206IDJweDtcXG4gICAgXFxufVxcblxcbi5hZGRQcm9qZWN0IGltZyB7XFxuICAgIHdpZHRoOiA1NSU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTsgcmlnaHQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLC01MCUpO1xcbn1cXG5cXG4uYWRkUHJvamVjdENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxubGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG5saSBoNCB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ucHJvamVjdFNlY3Rpb24gbGk6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxQ0ZGNzA7XFxuXFxufVxcblxcbmxpIGltZyB7XFxuICAgIGhlaWdodDogMjJweDtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblxcbiNwcm9qZWN0TGlzdCB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG4vKipcbiAqIERheXMgaW4gMSB5ZWFyXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqXG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuLyoqXG4gKiBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuLyoqXG4gKiBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWluVGltZSA9IC1tYXhUaW1lO1xuLyoqXG4gKiBNaW51dGVzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW51dGVzSW5Ib3VyID0gNjA7XG4vKipcbiAqIE1vbnRocyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblF1YXJ0ZXIgPSAzO1xuLyoqXG4gKiBNb250aHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5ZZWFyID0gMTI7XG4vKipcbiAqIFF1YXJ0ZXJzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgcXVhcnRlcnNJblllYXIgPSA0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgZGF5XG4gKlxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgd2Vla1xuICpcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcbi8qKlxuICogU2Vjb25kcyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtb250aFxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0FmdGVyXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBmaXJzdCBkYXRlIGFmdGVyIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGZpcnN0IGRhdGUgYWZ0ZXIgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRoYXQgc2hvdWxkIGJlIGFmdGVyIHRoZSBvdGhlciBvbmUgdG8gcmV0dXJuIHRydWVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVUb0NvbXBhcmUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSXMgMTAgSnVseSAxOTg5IGFmdGVyIDExIEZlYnJ1YXJ5IDE5ODc/XG4gKiBjb25zdCByZXN1bHQgPSBpc0FmdGVyKG5ldyBEYXRlKDE5ODksIDYsIDEwKSwgbmV3IERhdGUoMTk4NywgMSwgMTEpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNBZnRlcihkaXJ0eURhdGUsIGRpcnR5RGF0ZVRvQ29tcGFyZSkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGlydHlEYXRlVG9Db21wYXJlKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpID4gZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0JlZm9yZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRoYXQgc2hvdWxkIGJlIGJlZm9yZSB0aGUgb3RoZXIgb25lIHRvIHJldHVybiB0cnVlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlVG9Db21wYXJlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAxMCBKdWx5IDE5ODkgYmVmb3JlIDExIEZlYnJ1YXJ5IDE5ODc/XG4gKiBjb25zdCByZXN1bHQgPSBpc0JlZm9yZShuZXcgRGF0ZSgxOTg5LCA2LCAxMCksIG5ldyBEYXRlKDE5ODcsIDEsIDExKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0JlZm9yZShkaXJ0eURhdGUsIGRpcnR5RGF0ZVRvQ29tcGFyZSkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGlydHlEYXRlVG9Db21wYXJlKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIDwgZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkhvdXIsIG1pbGxpc2Vjb25kc0luTWludXRlIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHBhcnNlSVNPXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFBhcnNlIElTTyBzdHJpbmdcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBhcnNlIHRoZSBnaXZlbiBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0IGFuZCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBGdW5jdGlvbiBhY2NlcHRzIGNvbXBsZXRlIElTTyA4NjAxIGZvcm1hdHMgYXMgd2VsbCBhcyBwYXJ0aWFsIGltcGxlbWVudGF0aW9ucy5cbiAqIElTTyA4NjAxOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzbid0IGEgc3RyaW5nLCB0aGUgZnVuY3Rpb24gY2Fubm90IHBhcnNlIHRoZSBzdHJpbmcgb3JcbiAqIHRoZSB2YWx1ZXMgYXJlIGludmFsaWQsIGl0IHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcyMDE0LTAyLTExVDExOjMwOjMwJyB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJzIwMTQtMDItMTFUMTE6MzA6MzAnKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJyswMjAxNDEwMScgdG8gZGF0ZSxcbiAqIC8vIGlmIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0IGlzIDE6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnKzAyMDE0MTAxJywgeyBhZGRpdGlvbmFsRGlnaXRzOiAxIH0pXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBvcHRpb25zKSB7XG4gIHZhciBfb3B0aW9ucyRhZGRpdGlvbmFsRGk7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhZGRpdGlvbmFsRGlnaXRzID0gdG9JbnRlZ2VyKChfb3B0aW9ucyRhZGRpdGlvbmFsRGkgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cykgIT09IG51bGwgJiYgX29wdGlvbnMkYWRkaXRpb25hbERpICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgOiAyKTtcblxuICBpZiAoYWRkaXRpb25hbERpZ2l0cyAhPT0gMiAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAxICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignYWRkaXRpb25hbERpZ2l0cyBtdXN0IGJlIDAsIDEgb3IgMicpO1xuICB9XG5cbiAgaWYgKCEodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpID09PSAnW29iamVjdCBTdHJpbmddJykpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciBkYXRlU3RyaW5ncyA9IHNwbGl0RGF0ZVN0cmluZyhhcmd1bWVudCk7XG4gIHZhciBkYXRlO1xuXG4gIGlmIChkYXRlU3RyaW5ncy5kYXRlKSB7XG4gICAgdmFyIHBhcnNlWWVhclJlc3VsdCA9IHBhcnNlWWVhcihkYXRlU3RyaW5ncy5kYXRlLCBhZGRpdGlvbmFsRGlnaXRzKTtcbiAgICBkYXRlID0gcGFyc2VEYXRlKHBhcnNlWWVhclJlc3VsdC5yZXN0RGF0ZVN0cmluZywgcGFyc2VZZWFyUmVzdWx0LnllYXIpO1xuICB9XG5cbiAgaWYgKCFkYXRlIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgdGltZSA9IDA7XG4gIHZhciBvZmZzZXQ7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWUpIHtcbiAgICB0aW1lID0gcGFyc2VUaW1lKGRhdGVTdHJpbmdzLnRpbWUpO1xuXG4gICAgaWYgKGlzTmFOKHRpbWUpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICBvZmZzZXQgPSBwYXJzZVRpbWV6b25lKGRhdGVTdHJpbmdzLnRpbWV6b25lKTtcblxuICAgIGlmIChpc05hTihvZmZzZXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRpcnR5RGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUpOyAvLyBqcyBwYXJzZWQgc3RyaW5nIGFzc3VtaW5nIGl0J3MgaW4gVVRDIHRpbWV6b25lXG4gICAgLy8gYnV0IHdlIG5lZWQgaXQgdG8gYmUgcGFyc2VkIGluIG91ciB0aW1lem9uZVxuICAgIC8vIHNvIHdlIHVzZSB1dGMgdmFsdWVzIHRvIGJ1aWxkIGRhdGUgaW4gb3VyIHRpbWV6b25lLlxuICAgIC8vIFllYXIgdmFsdWVzIGZyb20gMCB0byA5OSBtYXAgdG8gdGhlIHllYXJzIDE5MDAgdG8gMTk5OVxuICAgIC8vIHNvIHNldCB5ZWFyIGV4cGxpY2l0bHkgd2l0aCBzZXRGdWxsWWVhci5cblxuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0ZSgwKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoZGlydHlEYXRlLmdldFVUQ0Z1bGxZZWFyKCksIGRpcnR5RGF0ZS5nZXRVVENNb250aCgpLCBkaXJ0eURhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICByZXN1bHQuc2V0SG91cnMoZGlydHlEYXRlLmdldFVUQ0hvdXJzKCksIGRpcnR5RGF0ZS5nZXRVVENNaW51dGVzKCksIGRpcnR5RGF0ZS5nZXRVVENTZWNvbmRzKCksIGRpcnR5RGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KTtcbn1cbnZhciBwYXR0ZXJucyA9IHtcbiAgZGF0ZVRpbWVEZWxpbWl0ZXI6IC9bVCBdLyxcbiAgdGltZVpvbmVEZWxpbWl0ZXI6IC9bWiBdL2ksXG4gIHRpbWV6b25lOiAvKFtaKy1dLiopJC9cbn07XG52YXIgZGF0ZVJlZ2V4ID0gL14tPyg/OihcXGR7M30pfChcXGR7Mn0pKD86LT8oXFxkezJ9KSk/fFcoXFxkezJ9KSg/Oi0/KFxcZHsxfSkpP3wpJC87XG52YXIgdGltZVJlZ2V4ID0gL14oXFxkezJ9KD86Wy4sXVxcZCopPykoPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/KD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyQvO1xudmFyIHRpbWV6b25lUmVnZXggPSAvXihbKy1dKShcXGR7Mn0pKD86Oj8oXFxkezJ9KSk/JC87XG5cbmZ1bmN0aW9uIHNwbGl0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gIHZhciBkYXRlU3RyaW5ncyA9IHt9O1xuICB2YXIgYXJyYXkgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLmRhdGVUaW1lRGVsaW1pdGVyKTtcbiAgdmFyIHRpbWVTdHJpbmc7IC8vIFRoZSByZWdleCBtYXRjaCBzaG91bGQgb25seSByZXR1cm4gYXQgbWF4aW11bSB0d28gYXJyYXkgZWxlbWVudHMuXG4gIC8vIFtkYXRlXSwgW3RpbWVdLCBvciBbZGF0ZSwgdGltZV0uXG5cbiAgaWYgKGFycmF5Lmxlbmd0aCA+IDIpIHtcbiAgICByZXR1cm4gZGF0ZVN0cmluZ3M7XG4gIH1cblxuICBpZiAoLzovLnRlc3QoYXJyYXlbMF0pKSB7XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzBdO1xuICB9IGVsc2Uge1xuICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBhcnJheVswXTtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMV07XG5cbiAgICBpZiAocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIudGVzdChkYXRlU3RyaW5ncy5kYXRlKSkge1xuICAgICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIpWzBdO1xuICAgICAgdGltZVN0cmluZyA9IGRhdGVTdHJpbmcuc3Vic3RyKGRhdGVTdHJpbmdzLmRhdGUubGVuZ3RoLCBkYXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRpbWVTdHJpbmcpIHtcbiAgICB2YXIgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZS5leGVjKHRpbWVTdHJpbmcpO1xuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZy5yZXBsYWNlKHRva2VuWzFdLCAnJyk7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lem9uZSA9IHRva2VuWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0ZVN0cmluZ3M7XG59XG5cbmZ1bmN0aW9uIHBhcnNlWWVhcihkYXRlU3RyaW5nLCBhZGRpdGlvbmFsRGlnaXRzKSB7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ14oPzooXFxcXGR7NH18WystXVxcXFxkeycgKyAoNCArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pfChcXFxcZHsyfXxbKy1dXFxcXGR7JyArICgyICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSkkKScpO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKHJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4ge1xuICAgIHllYXI6IE5hTixcbiAgICByZXN0RGF0ZVN0cmluZzogJydcbiAgfTtcbiAgdmFyIHllYXIgPSBjYXB0dXJlc1sxXSA/IHBhcnNlSW50KGNhcHR1cmVzWzFdKSA6IG51bGw7XG4gIHZhciBjZW50dXJ5ID0gY2FwdHVyZXNbMl0gPyBwYXJzZUludChjYXB0dXJlc1syXSkgOiBudWxsOyAvLyBlaXRoZXIgeWVhciBvciBjZW50dXJ5IGlzIG51bGwsIG5vdCBib3RoXG5cbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiBjZW50dXJ5ID09PSBudWxsID8geWVhciA6IGNlbnR1cnkgKiAxMDAsXG4gICAgcmVzdERhdGVTdHJpbmc6IGRhdGVTdHJpbmcuc2xpY2UoKGNhcHR1cmVzWzFdIHx8IGNhcHR1cmVzWzJdKS5sZW5ndGgpXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcbiAgdmFyIGRheU9mWWVhciA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIHZhciBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcbiAgdmFyIHdlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzRdKTtcbiAgdmFyIGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcblxuICBpZiAoaXNXZWVrRGF0ZSkge1xuICAgIGlmICghdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXlPZldlZWspKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF5T2ZJU09XZWVrWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspO1xuICB9IGVsc2Uge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG5cbiAgICBpZiAoIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fCAhdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIE1hdGgubWF4KGRheU9mWWVhciwgZGF5KSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBOYU47IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB0aW1lXG5cbiAgdmFyIGhvdXJzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtaW51dGVzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1syXSk7XG4gIHZhciBzZWNvbmRzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1szXSk7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSArIHNlY29uZHMgKiAxMDAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoJywnLCAnLicpKSB8fCAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWV6b25lKHRpbWV6b25lU3RyaW5nKSB7XG4gIGlmICh0aW1lem9uZVN0cmluZyA9PT0gJ1onKSByZXR1cm4gMDtcbiAgdmFyIGNhcHR1cmVzID0gdGltZXpvbmVTdHJpbmcubWF0Y2godGltZXpvbmVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiAwO1xuICB2YXIgc2lnbiA9IGNhcHR1cmVzWzFdID09PSAnKycgPyAtMSA6IDE7XG4gIHZhciBob3VycyA9IHBhcnNlSW50KGNhcHR1cmVzWzJdKTtcbiAgdmFyIG1pbnV0ZXMgPSBjYXB0dXJlc1szXSAmJiBwYXJzZUludChjYXB0dXJlc1szXSkgfHwgMDtcblxuICBpZiAoIXZhbGlkYXRlVGltZXpvbmUoaG91cnMsIG1pbnV0ZXMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBzaWduICogKGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlKTtcbn1cblxuZnVuY3Rpb24gZGF5T2ZJU09XZWVrWWVhcihpc29XZWVrWWVhciwgd2VlaywgZGF5KSB7XG4gIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5RGF5ID0gZGF0ZS5nZXRVVENEYXkoKSB8fCA3O1xuICB2YXIgZGlmZiA9ICh3ZWVrIC0gMSkgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheTtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlO1xufSAvLyBWYWxpZGF0aW9uIGZ1bmN0aW9uc1xuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG5cblxudmFyIGRheXNJbk1vbnRocyA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuXG5mdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgcmV0dXJuIG1vbnRoID49IDAgJiYgbW9udGggPD0gMTEgJiYgZGF0ZSA+PSAxICYmIGRhdGUgPD0gKGRheXNJbk1vbnRoc1ttb250aF0gfHwgKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDI5IDogMjgpKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgaWYgKGhvdXJzID09PSAyNCkge1xuICAgIHJldHVybiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDA7XG4gIH1cblxuICByZXR1cm4gc2Vjb25kcyA+PSAwICYmIHNlY29uZHMgPCA2MCAmJiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8IDYwICYmIGhvdXJzID49IDAgJiYgaG91cnMgPCAyNTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lem9uZShfaG91cnMsIG1pbnV0ZXMpIHtcbiAgcmV0dXJuIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDw9IDU5O1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vVGFza0JvYXJkLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vVGFza0JvYXJkLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbml0UGFnZUxvYWQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbml0UGFnZUxvYWQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3RCb2FyZC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3RCb2FyZC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgVGFza0xpc3QgfSBmcm9tIFwiLi9UYXNrXCI7XG5pbXBvcnQgeyBQcm9qZWN0Qm9hcmQgfSBmcm9tIFwiLi4vdmlldyAgaWhtL1Byb2plY3RCb2FyZFwiO1xuaW1wb3J0IHsgcG9wdWxhdGVTdG9yYWdlIH0gZnJvbSAnLi4vaW5kZXgnO1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLl90YXNrTGlzdCA9IFRhc2tMaXN0KCk7XG4gICAgfVxuICAgIFxuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlXG4gICAgfVxuXG4gICAgc2V0IHRpdGxlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IHRhc2tMaXN0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3Rhc2tMaXN0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHRhc2tMaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGFza0xpc3Q7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgUHJvamVjdExpc3QgPSAoKCk9PiB7XG5cbiAgICBsZXQgY3VycmVudFByb2plY3Q7XG5cbiAgICBjb25zdCBsaXN0ID0gW107XG5cbiAgICBjb25zdCBnZXRMaXN0ID0gKCk9PiB7XG4gICAgICAgICAgICByZXR1cm4gbGlzdDtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKG5ld1Byb2plY3QpPT4ge1xuICAgICAgICBsaXN0LnB1c2gobmV3UHJvamVjdCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0SW5kZXgpID0+IHtcbiAgICAgICAgbGlzdC5zcGxpY2UocHJvamVjdEluZGV4ICwgMSk7XG4gICAgICAgIHBvcHVsYXRlUHJvamVjdFN0b3JhZ2UoKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LFxuICAgICAgICBnZXRMaXN0LFxuICAgICAgICBhZGRQcm9qZWN0LFxuICAgICAgICBkZWxldGVQcm9qZWN0XG4gICAgfVxufSkoKVxuXG5leHBvcnQgY29uc3QgZmlyc3RQcm9qZWN0ID0gKHRpdGxlKT0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUpO1xuICAgIFByb2plY3RMaXN0LmFkZFByb2plY3QocHJvamVjdCk7XG4gICAgUHJvamVjdEJvYXJkLmRpc3BsYXlOZXdQcm9qZWN0KHByb2plY3QudGl0bGUpO1xuICAgIHJldHVybiBwcm9qZWN0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdGFydGluZ1Byb2plY3QoKXtcbiAgICBQcm9qZWN0TGlzdC5jdXJyZW50UHJvamVjdCA9IGZpcnN0UHJvamVjdCgnRmlyc3QgUHJvamVjdCAtIFN0YXJ0IGhlcmUnKTtcbiAgICBQcm9qZWN0Qm9hcmQuaGlnaGxpZ2h0Q3VycmVudFByb2plY3QoUHJvamVjdEJvYXJkLnNlbGVjdFByb2plY3RCb2FyZEN1cnJlbnRQcm9qZWN0KCkpO1xufVxuXG5cblxuIiwiaW1wb3J0IHsgaXNBZnRlciwgaXNCZWZvcmUsIGlzU2FtZURheSwgcGFyc2VJU08gfSBmcm9tIFwiZGF0ZS1mbnNcIlxuXG5leHBvcnQgY2xhc3MgVGFzayB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGNhdGVnb3J5LCBzdGF0ZSkge1xuICAgICAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLl9kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5fY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGVcbiAgICB9XG5cbiAgICBzZXQgdGl0bGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvblxuICAgIH1cblxuICAgIHNldCBkZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBkdWVEYXRlKCkge1xuICAgICAgICByZXR1cm4gcGFyc2VJU08odGhpcy5fZHVlRGF0ZSk7XG4gICAgfVxuXG4gICAgc2V0IGR1ZURhdGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZHVlRGF0ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBjYXRlZ29yeSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhdGVnb3J5XG4gICAgfVxuXG4gICAgc2V0IGNhdGVnb3J5KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2NhdGVnb3J5ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfVxuXG4gICAgc2V0IHN0YXRlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHByaW9yaXR5KCkge1xuICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBpZiAoaXNTYW1lRGF5KHRoaXMuZHVlRGF0ZSwgdG9kYXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2R1ZVRvZGF5JztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNBZnRlcih0b2RheSwgdGhpcy5kdWVEYXRlKSkge1xuICAgICAgICAgICAgcmV0dXJuICdsYXRlJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNCZWZvcmUodG9kYXksIHRoaXMuZHVlRGF0ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAnb25UaW1lJztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IFRhc2tMaXN0ID0gKCk9PiB7XG4gICAgY29uc3QgbGlzdCA9IFtdO1xuXG4gICAgY29uc3QgZ2V0TGlzdCA9ICgpPT4ge1xuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRUYXNrID0gKG5ld1Rhc2spPT4ge1xuICAgICAgICBsaXN0LnB1c2gobmV3VGFzayk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlVGFzayA9ICh0YXNrSW5kZXgpID0+IHtcbiAgICAgICAgbGlzdC5zcGxpY2UodGFza0luZGV4ICwgMSk7XG4gICAgfVxuXG4gICAgY29uc3QgZWRpdFRhc2sgPSAodGFza0luZGV4LCBlZGl0ZWRUYXNrKSA9PiB7XG4gICAgICAgIGxpc3Quc3BsaWNlKHRhc2tJbmRleCwgMSwgZWRpdGVkVGFzayk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJpbnRMaXN0ID0gKCk9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGxpc3QpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldExpc3QsXG4gICAgICAgIGFkZFRhc2ssXG4gICAgICAgIGRlbGV0ZVRhc2ssIFxuICAgICAgICBlZGl0VGFzayxcbiAgICAgICAgcHJpbnRMaXN0XG4gICAgfVxufVxuXG5cblxuIiwiaW1wb3J0IHtUYXNrLCBUYXNrTGlzdH0gZnJvbSAnLi4vZnVuY3Rpb25uYWxpdGllcy9UYXNrJztcbmltcG9ydCB7IGVkaXRCdXR0b24gfSBmcm9tICcuLi92aWV3ICBpaG0vVGFza0JvYXJkJztcbmltcG9ydCB7IFByb2plY3RMaXN0IH0gZnJvbSAnLi4vZnVuY3Rpb25uYWxpdGllcy9Qcm9qZWN0JztcblxuZXhwb3J0IGNvbnN0IG1vZGFsQ29udGFpbmVyID0gKCgpPT4ge1xuICAgIGNvbnN0IE1PREFMX0NPTlRBSU5FUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbENvbnRhaW5lcicpO1xuICAgIGNvbnN0IGNsb3NlTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2VNb2RhbCcpO1xuICAgIGNvbnN0IG9wZW5Nb2RhbCA9ICgpPT4ge1xuICAgICAgICBNT0RBTF9DT05UQUlORVIuY2xhc3NMaXN0LmFkZCgnc2hvd24nKTtcbiAgICB9XG4gICAgY29uc3QgY2xvc2VNb2RhbCA9ICgpPT4ge1xuICAgICAgICBNT0RBTF9DT05UQUlORVIuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd24nKTtcbiAgICAgICAgZm9ybS5jbGVhcklucHV0c1ZhbHVlcygpO1xuICAgIH1cbiAgICBjb25zdCBhY3RpdmF0ZUNsb3NlQnRuID0gKCgpPT4ge1xuICAgICAgICBjbG9zZU1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgIH0pXG4gICAgfSkoKVxuICAgIHJldHVybiB7XG4gICAgICAgIG9wZW5Nb2RhbCxcbiAgICAgICAgY2xvc2VNb2RhbCxcbiAgICAgICAgY2xvc2VNb2RhbEJ0blxuICAgIH1cbn0pKClcblxuZXhwb3J0IGNvbnN0IGZvcm0gPSAoKCk9PiB7XG4gICAgY29uc3QgSU5QVVRTID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwgaW5wdXRbaWRdJykpO1xuICAgIGNvbnN0IFNVQk1JVF9CVE4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0Jyk7XG4gICAgY29uc3QgUkVRVUlSRURfSU5QVVRTID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtyZXF1aXJlZF0nKSk7XG5cbiAgICBjb25zdCByZW1vdmVQbGFjZWhvbGRlckFmdGVySW5wdXRVc2UgPSAoKCk9PiB7XG4gICAgICAgIFJFUVVJUkVEX0lOUFVUUy5mb3JFYWNoKHJlcXVpcmVkSW5wdXQgPT4ge1xuICAgICAgICAgICAgcmVxdWlyZWRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkSW5wdXQucmVtb3ZlQXR0cmlidXRlKCdwbGFjZWhvbGRlcicpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9KSgpXG5cbiAgICBjb25zdCBhZGRTdGF0ZVZhbHVlID0gKCk9PiB7XG4gICAgICAgIElOUFVUUy5wdXNoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCBzZWxlY3QnKSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VGFza0RldGFpbHNWYWx1ZXMgPSAoKT0+IHtcbiAgICAgICAgYWRkU3RhdGVWYWx1ZSgpO1xuICAgICAgICByZXR1cm4gIElOUFVUUy5tYXAoaW5wdXQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0LnZhbHVlO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGlzRXZlcnlJbnB1dEludmFsaWQgPSAoKT0+IHtcbiAgICAgICAgcmV0dXJuIElOUFVUUy5ldmVyeShpbnB1dCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQudmFsdWUgIT09ICcnO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGNsZWFySW5wdXRzVmFsdWVzID0gKCk9PiB7XG4gICAgICAgIElOUFVUUy5mb3JFYWNoKGlucHV0ID0+IGlucHV0LnZhbHVlID0gJycpO1xuICAgICAgICBSRVFVSVJFRF9JTlBVVFMuZm9yRWFjaChyZXF1aXJlZElucHV0ID0+IHtcbiAgICAgICAgICAgIHJlcXVpcmVkSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICcgJylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXJJbnZhbGlkSW5wdXRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnZhbGlkSW5wdXRzID0gSU5QVVRTLmZpbHRlcihpbnB1dCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQudmFsdWUgPT0gJydcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGludmFsaWRJbnB1dHNcbiAgICB9XG5cbiAgICBjb25zdCBlcnJvckRpc3BsYXkgPSAoKSA9PiB7XG4gICAgICAgIGZpbHRlckludmFsaWRJbnB1dHMoKS5mb3JFYWNoKGludmFsaWRJbnB1dCA9PiB7XG4gICAgICAgICAgICBpbnZhbGlkSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdlbnRlciBhIHZhbGlkIHZhbHVlJyk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgSU5QVVRTLFxuICAgICAgICBnZXRUYXNrRGV0YWlsc1ZhbHVlcyxcbiAgICAgICAgaXNFdmVyeUlucHV0SW52YWxpZCxcbiAgICAgICAgY2xlYXJJbnB1dHNWYWx1ZXMsXG4gICAgICAgIFNVQk1JVF9CVE4sXG4gICAgICAgIGVycm9yRGlzcGxheVxuICAgIH1cbn0pKClcblxuZXhwb3J0IGNvbnN0IGZvcm1FZGl0TW9kZSA9ICgoKT0+IHtcbiAgICBjb25zdCBTVUJNSVRfQ0hBTkdFU19CVE4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdE1vZGUnKTtcblxuICAgIGNvbnN0IG9wZW4gPSAoY3VycmVudElucHV0cyk9PiB7XG4gICAgICAgIGZvcm0uU1VCTUlUX0JUTi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIFNVQk1JVF9DSEFOR0VTX0JUTi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBmaWxsRm9ybUlucHV0c1dpdGhDdXJyZW50VmFsdWVzKGN1cnJlbnRJbnB1dHMpO1xuICAgICAgICBtb2RhbENvbnRhaW5lci5vcGVuTW9kYWwoKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgaW5wdXRzVmFsaWRhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgZm9ybS5JTlBVVFMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKT0+IHtcbiAgICAgICAgICAgICAgICAoZm9ybS5pc0V2ZXJ5SW5wdXRJbnZhbGlkKCkpID8gU1VCTUlUX0NIQU5HRVNfQlROLmRpc2FibGVkID0gZmFsc2UgOiBcbiAgICAgICAgICAgICAgICAgICAgU1VCTUlUX0NIQU5HRVNfQlROLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBmaWxsRm9ybUlucHV0c1dpdGhDdXJyZW50VmFsdWVzID0gKGN1cnJlbnRWYWx1ZXMpID0+IHtcbiAgICAgICAgZm9ybS5JTlBVVFMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50VmFsdWU7XG4gICAgICAgICAgICBpZiAoaW5wdXQuaWQgPT09ICdzdGF0ZScpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWUgPSBjdXJyZW50VmFsdWVzLmZpbHRlcigoZWxlbWVudCk9PiB7IFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jbGFzc05hbWUgPT09ICdzdGF0ZUNvbnRhaW5lcic7XG4gICAgICAgICAgICAgICAgfSkgXG4gICAgICAgICAgICAgICAgY3VycmVudFZhbHVlID0gY3VycmVudFZhbHVlWzBdLmxhc3RDaGlsZC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSA9IGN1cnJlbnRWYWx1ZXMuZmlsdGVyKChlbGVtZW50KT0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NOYW1lID09PSBgXyR7aW5wdXQuaWR9YDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSA9IGN1cnJlbnRWYWx1ZVswXS52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBjdXJyZW50VmFsdWU7XG4gICAgICAgIH0pIFxuICAgIH1cblxuICAgIGNvbnN0IHZhbGlkYXRlQ2hhbmdlcyA9IChlLCBpbnB1dHMsIHN0YXRlQ29sb3JQb2ludCwgZmxhZyk9PiB7XG4gICAgICAgICAgICBsZXQgZWRpdGVkVGFzayA9IG5ldyBUYXNrKC4uLmZvcm0uZ2V0VGFza0RldGFpbHNWYWx1ZXMoKSk7XG4gICAgICAgICAgICBQcm9qZWN0TGlzdC5jdXJyZW50UHJvamVjdC50YXNrTGlzdC5lZGl0VGFzayhlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JyksIGVkaXRlZFRhc2spO1xuICAgICAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGVkaXRCdXR0b24uZGlzcGxheUVkaXRlZFRhc2soZWRpdGVkVGFzaywgaW5wdXRzLCBzdGF0ZUNvbG9yUG9pbnQsIGZsYWcsIHRhc2tDb250YWluZXIpO1xuICAgICAgICAgICAgbWFuYWdlTW9kYWxSZXNldCgpO1xuICAgICAgICAgICAgZm9ybS5TVUJNSVRfQlROLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICBTVUJNSVRfQ0hBTkdFU19CVE4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB7IFxuICAgICAgICBpbnB1dHNWYWxpZGF0aW9uLFxuICAgICAgICBmaWxsRm9ybUlucHV0c1dpdGhDdXJyZW50VmFsdWVzLFxuICAgICAgICBTVUJNSVRfQ0hBTkdFU19CVE4sIFxuICAgICAgICBvcGVuLFxuICAgICAgICB2YWxpZGF0ZUNoYW5nZXNcbiAgICB9XG59KSgpXG5cbmV4cG9ydCBmdW5jdGlvbiBtYW5hZ2VNb2RhbFJlc2V0KCkge1xuICAgIG1vZGFsQ29udGFpbmVyLmNsb3NlTW9kYWwoKTtcbiAgICBmb3JtLmNsZWFySW5wdXRzVmFsdWVzKCk7XG59XG5cblxuXG5cblxuXG4iLCJpbXBvcnQgJy4vY3NzL2luaXRQYWdlTG9hZC5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9tb2RhbC5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9wcm9qZWN0Qm9hcmQuY3NzJztcbmltcG9ydCB7VGFza30gZnJvbSAnLi9mdW5jdGlvbm5hbGl0aWVzL1Rhc2snO1xuaW1wb3J0IHtuZXdUYXNrLCBBRERUQVNLQlROLCBUYXNrQm9hcmQgfSBmcm9tICcuL3ZpZXcgIGlobS9UYXNrQm9hcmQnO1xuaW1wb3J0IHsgbW9kYWxDb250YWluZXIsIGZvcm0sIG1hbmFnZU1vZGFsUmVzZXQgfSBmcm9tICcuL2Z1bmN0aW9ubmFsaXRpZXMvbW9kYWwnO1xuaW1wb3J0IHsgYWRkUHJvamVjdEJ0biwgcHJvamVjdE5hbWVJbnB1dCwgUHJvamVjdEJvYXJkLCBkaXNwbGF5TG9jYWxTdG9yYWdlZFByb2plY3RzLCBoaWdobGlnaHRDdXJyZW50UHJvamVjdCwgc2VsZWN0UHJvamVjdEJvYXJkQ3VycmVudFByb2plY3QgfSBmcm9tICcuL3ZpZXcgIGlobS9Qcm9qZWN0Qm9hcmQnO1xuaW1wb3J0IHsgUHJvamVjdCwgUHJvamVjdExpc3QsIHNldFN0YXJ0aW5nUHJvamVjdCB9IGZyb20gJy4vZnVuY3Rpb25uYWxpdGllcy9Qcm9qZWN0JztcblxuQUREVEFTS0JUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgIG1vZGFsQ29udGFpbmVyLm9wZW5Nb2RhbCgpXG59KTtcblxuZnVuY3Rpb24gbWFuYWdlVGFza0NyZWF0aW9uKCkge1xuICAgIGNvbnN0IGJyYW5kTmV3VGFzayA9IG5ldyBUYXNrKC4uLmZvcm0uZ2V0VGFza0RldGFpbHNWYWx1ZXMoKSk7XG4gICAgUHJvamVjdExpc3QuY3VycmVudFByb2plY3QudGFza0xpc3QuYWRkVGFzayhicmFuZE5ld1Rhc2spO1xuICAgIG5ld1Rhc2suZGlzcGxheSgpO1xufVxuXG5mb3JtLlNVQk1JVF9CVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICBpZiAoZm9ybS5pc0V2ZXJ5SW5wdXRJbnZhbGlkKCkpe1xuICAgICAgICBpZiAoZm9ybS5TVUJNSVRfQlROLmlkID09PSAnc3VibWl0Jyl7XG4gICAgICAgICAgICBtYW5hZ2VUYXNrQ3JlYXRpb24oKTtcbiAgICAgICAgICAgIG1hbmFnZU1vZGFsUmVzZXQoKTtcbiAgICAgICAgICAgIHBvcHVsYXRlVGFza0xpc3RTdG9yYWdlKClcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9ybS5lcnJvckRpc3BsYXkoKVxuICAgIH1cbn0pXG5cbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICBpZiAocHJvamVjdE5hbWVJbnB1dC52YWx1ZSAhPT0gJycpe1xuICAgICAgICBjb25zdCBicmFuZE5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZUlucHV0LnZhbHVlKTtcbiAgICAgICAgUHJvamVjdExpc3QuYWRkUHJvamVjdChicmFuZE5ld1Byb2plY3QpO1xuICAgICAgICBQcm9qZWN0Qm9hcmQuZGlzcGxheU5ld1Byb2plY3QoYnJhbmROZXdQcm9qZWN0LnRpdGxlKTtcbiAgICAgICAgUHJvamVjdEJvYXJkLmNsZWFyUHJvamVjdE5hbWVJbnB1dCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhQcm9qZWN0TGlzdC5nZXRMaXN0KClbMF0udGFza0xpc3QuZ2V0TGlzdCgpKTtcbiAgICAgICAgcG9wdWxhdGVQcm9qZWN0U3RvcmFnZSgpO1xuICAgIH1cbn0pXG5cbmNvbnN0IGxvY2FsU3RvcmFnZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NhdmVkUHJvamVjdExpc3QnKSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZVByb2plY3RTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzYXZlZFByb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkoUHJvamVjdExpc3QuZ2V0TGlzdCgpKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZVRhc2tTdG9yYWdlKHByb2plY3QpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0Ll90aXRsZSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdC50YXNrTGlzdC5nZXRMaXN0KCkpKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVUYXNrTGlzdFN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NhdmVkVGFza3NMaXN0cycsIEpTT04uc3RyaW5naWZ5KFByb2plY3RMaXN0LmdldExpc3QoKS5tYXAocHJvamVjdCA9PiB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0LnRhc2tMaXN0LmdldExpc3QoKVxuICAgIH0pKSlcbiAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzYXZlZFRhc2tzTGlzdHMnKSkpO1xufVxuXG5mdW5jdGlvbiByZXRyaWV2ZVNhdmVkUHJvamVjdHMoKSB7XG4gICAgZm9yIChjb25zdCBwcm9qZWN0S2V5IGluIGxvY2FsU3RvcmFnZWRQcm9qZWN0cykge1xuICAgICAgICBjb25zdCByZXRyaWV2ZWRQcm9qZWN0ID0gbmV3IFByb2plY3QobG9jYWxTdG9yYWdlZFByb2plY3RzW3Byb2plY3RLZXldLl90aXRsZSk7XG4gICAgICAgIFByb2plY3RMaXN0LmFkZFByb2plY3QocmV0cmlldmVkUHJvamVjdCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZXRyaWV2ZWRDdXJyZW50UHJvamVjdCgpIHtcbiAgICBjb25zdCBzYXZlZEN1cnJlbnRQcm9qZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFByb2plY3QnKSk7XG4gICAgUHJvamVjdExpc3QuY3VycmVudFByb2plY3QgPSBQcm9qZWN0TGlzdC5nZXRMaXN0KCkuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC50aXRsZSA9PT0gc2F2ZWRDdXJyZW50UHJvamVjdC5fdGl0bGUpWzBdO1xufVxuXG5mdW5jdGlvbiByZXRyaWV2ZVNhdmVkVGFza0xpc3RzKCkge1xuICAgIGNvbnN0IHNhdmVkVGFza0xpc3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2F2ZWRUYXNrc0xpc3RzJykpO1xuICAgIGxldCBpID0gMDtcbiAgICBmb3IgKGNvbnN0IHRhc2tMaXN0S2V5IGluIHNhdmVkVGFza0xpc3RzKSB7XG4gICAgICAgIGZvciAoY29uc3QgdGFzayBpbiBzYXZlZFRhc2tMaXN0c1t0YXNrTGlzdEtleV0pIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tUb1JldHJpZXZlID0gc2F2ZWRUYXNrTGlzdHNbdGFza0xpc3RLZXldW3Rhc2tdO1xuICAgICAgICAgICAgY29uc3QgYXJySW5mb3NPZlRhc2tUb1JldHJpZXZlID0gT2JqZWN0LmtleXModGFza1RvUmV0cmlldmUpLm1hcChrZXkgPT4gdGFza1RvUmV0cmlldmVba2V5XSk7XG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2soLi4uYXJySW5mb3NPZlRhc2tUb1JldHJpZXZlKTtcbiAgICAgICAgICAgIFByb2plY3RMaXN0LmdldExpc3QoKVtpXS50YXNrTGlzdC5hZGRUYXNrKG5ld1Rhc2spO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3VGFzayk7XG4gICAgICAgIH1cbiAgICAgICAgaSsrXG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5TG9jYWxTdG9yYWdlZEN1cnJlbnRQcm9qZWN0VGFza0xpc3QoKSB7XG5cbn1cblxuaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPT09IDApIHtcbiAgICBzZXRTdGFydGluZ1Byb2plY3QoKTtcbiAgICBUYXNrQm9hcmQuZGlzcGxheVByb2plY3RUaXRsZShQcm9qZWN0TGlzdC5jdXJyZW50UHJvamVjdC50aXRsZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRQcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkoUHJvamVjdExpc3QuY3VycmVudFByb2plY3QpKTtcbiAgICBwb3B1bGF0ZVByb2plY3RTdG9yYWdlKClcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2F2ZWRUYXNrTGlzdHMnLCBbW11dKTtcbn1cblxuZWxzZSB7XG4gICAgcmV0cmlldmVTYXZlZFByb2plY3RzKClcbiAgICByZXRyaWV2ZWRDdXJyZW50UHJvamVjdCgpXG4gICAgcmV0cmlldmVTYXZlZFRhc2tMaXN0cygpO1xuICAgIGxldCBpID0gMDtcbiAgICBQcm9qZWN0TGlzdC5jdXJyZW50UHJvamVjdC50YXNrTGlzdC5nZXRMaXN0KCkuZm9yRWFjaCgodGFzayk9PiB7XG4gICAgICAgIG5ld1Rhc2suZGlzcGxheUVhY2hUYXNrKGkpO1xuICAgICAgICBpID0gaSsxO1xuICAgICAgICB9KSBcbiAgICBkaXNwbGF5TG9jYWxTdG9yYWdlZFByb2plY3RzKCk7XG4gICAgZGlzcGxheUxvY2FsU3RvcmFnZWRDdXJyZW50UHJvamVjdFRhc2tMaXN0KCk7XG4gICAgUHJvamVjdEJvYXJkLmhpZ2hsaWdodEN1cnJlbnRQcm9qZWN0KFByb2plY3RCb2FyZC5zZWxlY3RQcm9qZWN0Qm9hcmRDdXJyZW50UHJvamVjdCgpKVxufVxuXG5cbiAgXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0IHsgUHJvamVjdExpc3QgfSBmcm9tIFwiLi4vZnVuY3Rpb25uYWxpdGllcy9Qcm9qZWN0XCI7XG5pbXBvcnQgeyBuZXdUYXNrLCBUYXNrQm9hcmQgfSBmcm9tIFwiLi9UYXNrQm9hcmRcIjtcblxuZXhwb3J0IGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdCcpO1xuZXhwb3J0IGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdE5hbWUnKTtcblxuZXhwb3J0IGNvbnN0IFByb2plY3RCb2FyZCA9ICgoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdExpc3QnKTtcblxuICAgIGNvbnN0IGNsZWFyUHJvamVjdE5hbWVJbnB1dCA9ICgpPT4ge1xuICAgICAgICBwcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlTmV3UHJvamVjdENvbnRhaW5lciA9ICgpPT4ge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQobmV3UHJvamVjdENvbnRhaW5lcik7XG4gICAgICAgIHJldHVybiBuZXdQcm9qZWN0Q29udGFpbmVyO1xuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlOZXdQcm9qZWN0VGl0bGUgPSAocHJvamVjdE5hbWUsIG5ld1Byb2plY3RDb250YWluZXIpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgbmV3UHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgICAgIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdFRpdGxlKTtcbiAgICAgICAgc2VsZWN0VGhlUHJvamVjdChuZXdQcm9qZWN0VGl0bGUpOyAgIFxuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlOZXdQcm9qZWN0RGVsZXRlQnRuID0gKG5ld1Byb2plY3RDb250YWluZXIpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdERlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBuZXdQcm9qZWN0RGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9kZWxldGVQcm9qZWN0LnBuZycpO1xuICAgICAgICBuZXdQcm9qZWN0RGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIFByb2plY3RMaXN0LmdldExpc3QoKS5sZW5ndGgtMSk7IFxuICAgICAgICBuZXdQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3REZWxldGVCdG4pO1xuICAgICAgICByZXR1cm4gbmV3UHJvamVjdERlbGV0ZUJ0bjtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RUaGVQcm9qZWN0ID0gKGNsaWNrYWJsZVNlY3Rpb24pPT4ge1xuICAgICAgICBjbGlja2FibGVTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT4ge1xuICAgICAgICAgICAgaWYgKFByb2plY3RMaXN0LmdldExpc3QoKS5pbmNsdWRlcyhQcm9qZWN0TGlzdC5jdXJyZW50UHJvamVjdCkpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVIaWdobGlnaHQoc2VsZWN0UHJvamVjdEJvYXJkQ3VycmVudFByb2plY3QoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBQcm9qZWN0TGlzdC5jdXJyZW50UHJvamVjdCA9IFByb2plY3RMaXN0LmdldExpc3QoKVtlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JyldO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRQcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkoUHJvamVjdExpc3QuY3VycmVudFByb2plY3QpKTtcbiAgICAgICAgICAgIFRhc2tCb2FyZC5jbGVhclRhc2tzKCk7XG4gICAgICAgICAgICBoaWdobGlnaHRDdXJyZW50UHJvamVjdChzZWxlY3RQcm9qZWN0Qm9hcmRDdXJyZW50UHJvamVjdCgpKTtcbiAgICAgICAgICAgIFRhc2tCb2FyZC5kaXNwbGF5UHJvamVjdFRpdGxlKFByb2plY3RMaXN0LmN1cnJlbnRQcm9qZWN0LnRpdGxlKTtcbiAgICAgICAgICAgIGxldCBpPTA7XG4gICAgICAgICAgICBQcm9qZWN0TGlzdC5jdXJyZW50UHJvamVjdC50YXNrTGlzdC5nZXRMaXN0KCkuZm9yRWFjaCgodGFzayk9PiB7XG4gICAgICAgICAgICAgICAgbmV3VGFzay5kaXNwbGF5RWFjaFRhc2soaSk7XG4gICAgICAgICAgICAgICAgaSA9IGkrMTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZURhdGFJbmRleCA9ICgpPT4ge1xuICAgICAgICBjb25zdCBkZWxldEJ0bnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZ1tkYXRhLWluZGV4XScpKTtcbiAgICAgICAgaWYgKGRlbGV0QnRucy5sZW5ndGg+MCl7XG4gICAgICAgICAgICBkZWxldEJ0bnNbMF0uc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgMCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTAgOyBpPGRlbGV0QnRucy5sZW5ndGgtMTsgaSsrKXtcbiAgICAgICAgICAgICAgICBkZWxldEJ0bnNbaSsxXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBwYXJzZUludChkZWxldEJ0bnNbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpKzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGVEZWxldGVCdG4gPSAoZGVsZXRlQnRuKSA9PiB7XG4gICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcbiAgICAgICAgICAgIGlmIChQcm9qZWN0TGlzdC5jdXJyZW50UHJvamVjdCA9PT0gUHJvamVjdExpc3QuZ2V0TGlzdCgpW2UudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpXSl7XG4gICAgICAgICAgICAgICAgVGFza0JvYXJkLmNsZWFyVGFza3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFByb2plY3RMaXN0LmRlbGV0ZVByb2plY3QoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpO1xuICAgICAgICAgICAgcHJvamVjdExpc3QucmVtb3ZlQ2hpbGQoZS50YXJnZXQucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICB1cGRhdGVEYXRhSW5kZXgoKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlOZXdQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RDb250YWluZXIgPSBjcmVhdGVOZXdQcm9qZWN0Q29udGFpbmVyKCk7XG4gICAgICAgIGRpc3BsYXlOZXdQcm9qZWN0VGl0bGUocHJvamVjdE5hbWUsIG5ld1Byb2plY3RDb250YWluZXIpO1xuICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBkaXNwbGF5TmV3UHJvamVjdERlbGV0ZUJ0bihuZXdQcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgICAgYWN0aXZhdGVEZWxldGVCdG4oZGVsZXRlQnRuKTtcbiAgICAgICAgdXBkYXRlRGF0YUluZGV4KCk7XG4gICAgfVxuXG4gICAgY29uc3QgaGlnaGxpZ2h0Q3VycmVudFByb2plY3QgPSAocHJvamVjdEJvYXJkQ3VycmVudFByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdEJvYXJkQ3VycmVudFByb2plY3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMjU1LDI1NSwyNTUsIDAuMyknO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUhpZ2hsaWdodCA9IChwcm9qZWN0Qm9hcmRDdXJyZW50UHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0Qm9hcmRDdXJyZW50UHJvamVjdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdFByb2plY3RCb2FyZEN1cnJlbnRQcm9qZWN0ID0gKCk9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0SW5kZXggPSBQcm9qZWN0TGlzdC5nZXRMaXN0KCkuaW5kZXhPZihQcm9qZWN0TGlzdC5jdXJyZW50UHJvamVjdCkudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGltZ1tkYXRhLWluZGV4ID0gJyR7Y3VycmVudFByb2plY3RJbmRleH0nXWApLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGlzcGxheU5ld1Byb2plY3QsXG4gICAgICAgIGNsZWFyUHJvamVjdE5hbWVJbnB1dCxcbiAgICAgICAgcmVtb3ZlSGlnaGxpZ2h0LFxuICAgICAgICBoaWdobGlnaHRDdXJyZW50UHJvamVjdCxcbiAgICAgICAgc2VsZWN0UHJvamVjdEJvYXJkQ3VycmVudFByb2plY3RcbiAgICB9XG59KSgpXG5cbmV4cG9ydCBjb25zdCBkaXNwbGF5TG9jYWxTdG9yYWdlZFByb2plY3RzID0gKCgpPT4ge1xuICAgIGNvbnNvbGUubG9nKFByb2plY3RMaXN0LmdldExpc3QoKSk7XG4gICAgUHJvamVjdExpc3QuZ2V0TGlzdCgpLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIFByb2plY3RCb2FyZC5kaXNwbGF5TmV3UHJvamVjdChwcm9qZWN0LnRpdGxlKTtcbiAgICB9KVxufSlcblxuIiwiaW1wb3J0ICcuLi9jc3MvVGFza0JvYXJkLmNzcyc7XG5pbXBvcnQgeyBmb3JtRWRpdE1vZGUgfSBmcm9tICcuLi9mdW5jdGlvbm5hbGl0aWVzL21vZGFsJztcbmltcG9ydCB7IFByb2plY3RMaXN0IH0gZnJvbSAnLi4vZnVuY3Rpb25uYWxpdGllcy9Qcm9qZWN0JztcblxuZXhwb3J0IGNvbnN0IFRBU0tHUklEID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tMaXN0R3JpZCcpO1xuZXhwb3J0IGNvbnN0IEFERFRBU0tCVE4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkQnRuJyk7XG5cbmV4cG9ydCBjb25zdCBUYXNrQm9hcmQgPSAoKCk9PiB7XG4gICAgY29uc3QgY2xlYXJUYXNrcyA9ICgpPT4ge1xuICAgICAgICBjb25zdCB0YXNrcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKSk7XG4gICAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICB0YXNrLnJlbW92ZSgpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlQcm9qZWN0VGl0bGUgPSAodGl0bGUpPT4ge1xuICAgICAgICBjb25zdCB0YXNrQm9hcmRQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0JvYXJkUHJvamVjdFRpdGxlJyk7XG4gICAgICAgIHRhc2tCb2FyZFByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGBUYXNrQm9hcmQgfiBTZWxlY3RlZCBwcm9qZWN0IDogJHt0aXRsZX1gO1xuICAgIH1cblxuICAgLyogIGNvbnN0IGRpc3BsYXlGaXJzdFByb2plY3RUaXRsZSA9ICgoKSA9PiB7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0VGl0bGUoUHJvamVjdExpc3QuY3VycmVudFByb2plY3QudGl0bGUpO1xuICAgIH0pKCkgKi9cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBjbGVhclRhc2tzLFxuICAgICAgICBkaXNwbGF5UHJvamVjdFRpdGxlXG4gICAgfVxufSkoKVxuXG5jb25zdCBkZWxldGVCdXR0b24gPSAoKCk9PiB7XG4gICAgY29uc3QgY3JlYXRlID0gKCk9PiB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZGVsZXRlVGFzay5jbGFzc0xpc3QuYWRkKCdkZWxldGVUYXNrJyk7XG4gICAgICAgIGRlbGV0ZVRhc2suc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2RlbGV0ZS5zdmcnKTtcbiAgICAgICAgbWFuYWdlRGVsZXRlVGFzayhkZWxldGVUYXNrKTtcbiAgICAgICAgY2hhbmdlVXJsT25Ib3ZlcihkZWxldGVUYXNrKVxuICAgICAgICByZXR1cm4gZGVsZXRlVGFzaztcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVEYXRhSW5kZXggPSAoKT0+IHtcbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lcnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdltkYXRhLWluZGV4XScpKTtcbiAgICAgICAgaWYgKHRhc2tDb250YWluZXJzLmxlbmd0aD4wKXtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXJzWzBdLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIDApO1xuICAgICAgICAgICAgZm9yIChsZXQgaT0wIDsgaTx0YXNrQ29udGFpbmVycy5sZW5ndGgtMTsgaSsrKXtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyc1tpKzFdLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIHBhcnNlSW50KHRhc2tDb250YWluZXJzW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKSsxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG1hbmFnZURlbGV0ZVRhc2sgPSAoZGVsZXRlQnRuKT0+IHtcbiAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIFByb2plY3RMaXN0LmN1cnJlbnRQcm9qZWN0LnRhc2tMaXN0LmRlbGV0ZVRhc2soZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKTtcbiAgICAgICAgICAgIFRBU0tHUklELnJlbW92ZUNoaWxkKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICB1cGRhdGVEYXRhSW5kZXgoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBjaGFuZ2VVcmxPbkhvdmVyID0gKGRlbGV0ZUJ0bikgPT4ge1xuICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCk9PiB7XG4gICAgICAgICAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2RlbGV0ZUhvdmVyLnBuZycpXG4gICAgICAgIH0pXG4gICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpPT4ge1xuICAgICAgICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9kZWxldGUuc3ZnJylcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlXG4gICAgfVxufSkoKSBcblxuZXhwb3J0IGNvbnN0IGVkaXRCdXR0b24gPSAoKCk9PiB7XG4gICAgY29uc3QgY3JlYXRlID0gKCk9PiB7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGVkaXRUYXNrLmNsYXNzTGlzdC5hZGQoJ2VkaXRUYXNrJyk7XG4gICAgICAgIGVkaXRUYXNrLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9lZGl0LnN2ZycpO1xuICAgICAgICBtYW5hZ2VFZGl0VGFzayhlZGl0VGFzayk7XG4gICAgICAgIGNoYW5nZVVybE9uSG92ZXIoZWRpdFRhc2spXG4gICAgICAgIHJldHVybiBlZGl0VGFzaztcbiAgICB9XG5cbiAgICBjb25zdCBtYW5hZ2VFZGl0VGFzayA9IChlZGl0QnRuKT0+IHtcbiAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcbiAgICAgICAgICAgIFByb2plY3RMaXN0LmN1cnJlbnRQcm9qZWN0LnRhc2tMaXN0LnByaW50TGlzdCgpO1xuICAgICAgICAgICAgY29uc3QgaW5wdXRzID0gQXJyYXkuZnJvbShlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW4pO1xuICAgICAgICAgICAgY29uc3QgZmxhZyA9IGlucHV0cy5maWx0ZXIoZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3ByaW9yaXR5RmxhZycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZUNvbG9yUG9pbnQgPSBpbnB1dHMuZmlsdGVyKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc3RhdGVDb250YWluZXInKTtcbiAgICAgICAgICAgIH0pWzBdLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICBmb3JtRWRpdE1vZGUub3BlbihpbnB1dHMpO1xuICAgICAgICAgICAgZm9ybUVkaXRNb2RlLmlucHV0c1ZhbGlkYXRpb24oKTtcbiAgICAgICAgICAgIGZvcm1FZGl0TW9kZS5TVUJNSVRfQ0hBTkdFU19CVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybUVkaXRNb2RlLnZhbGlkYXRlQ2hhbmdlcyhlLCBpbnB1dHMsIHN0YXRlQ29sb3JQb2ludCAsIGZsYWdbMF0pO1xuICAgICAgICAgICAgfSwge29uY2UgOiB0cnVlfSlcbiAgICAgICAgfSlcbn1cblxuICAgIGNvbnN0IGRpc3BsYXlFZGl0ZWRUYXNrID0gKGVkaXRlZFRhc2ssIGlucHV0cywgc3RhdGVDb2xvclBvaW50LCBwcmlvcml0eUZsYWcsIHRhc2tDb250YWluZXIpPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGRldGFpbCBpbiBlZGl0ZWRUYXNrKXtcbiAgICAgICAgICAgIGxldCB2YWx1ZVRvVXBkYXRlO1xuICAgICAgICAgICAgaWYgKGRldGFpbCA9PT0gJ19zdGF0ZScpe1xuICAgICAgICAgICAgICAgIHZhbHVlVG9VcGRhdGUgPSBpbnB1dHMuZmlsdGVyKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gJ3N0YXRlQ29udGFpbmVyJztcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHZhbHVlVG9VcGRhdGUgPSB2YWx1ZVRvVXBkYXRlWzBdLmxhc3RDaGlsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlVG9VcGRhdGUgPSBpbnB1dHMuZmlsdGVyKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gYCR7ZGV0YWlsfWA7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB2YWx1ZVRvVXBkYXRlID0gdmFsdWVUb1VwZGF0ZVswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlVG9VcGRhdGUudmFsdWUgPSBlZGl0ZWRUYXNrW2RldGFpbF07XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGVDb2xvclBvaW50LnNldEF0dHJpYnV0ZSgnc3JjJywgYC4uL3NyYy8ke2VkaXRlZFRhc2suc3RhdGV9LnBuZ2ApO1xuICAgICAgICBwcmlvcml0eUZsYWcuc2V0QXR0cmlidXRlKCdzcmMnLCBgLi4vc3JjL2ZsYWdfJHtlZGl0ZWRUYXNrLnByaW9yaXR5fS5wbmdgKTtcbiAgICAgICAgKGVkaXRlZFRhc2suc3RhdGUgPT09ICdkb25lJykgPyB0YXNrQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAwLjcgOiB0YXNrQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIH1cblxuICAgIGNvbnN0IGNoYW5nZVVybE9uSG92ZXIgPSAoZWRpdEJ0bikgPT4ge1xuICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpPT4ge1xuICAgICAgICAgICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9zcmMvZWRpdEhvdmVyLnBuZycpXG4gICAgICAgIH0pXG4gICAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKT0+IHtcbiAgICAgICAgICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2VkaXQuc3ZnJylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGUsXG4gICAgICAgIGRpc3BsYXlFZGl0ZWRUYXNrXG4gICAgfVxufSkoKSBcblxuZXhwb3J0IGNvbnN0IHRhc2tPcHRpb25zID0gKCgpPT4ge1xuICAgIGNvbnN0IGNyZWF0ZU9wdGlvbnNEaXYgPSAoKT0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBvcHRpb25zLmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMnKTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9uc0RpdlNldFVwID0gKCk9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnNEaXYgPSBjcmVhdGVPcHRpb25zRGl2KCk7XG4gICAgICAgIG9wdGlvbnNEaXYuYXBwZW5kKGVkaXRCdXR0b24uY3JlYXRlKCksIGRlbGV0ZUJ1dHRvbi5jcmVhdGUoKSk7XG4gICAgICAgIHJldHVybiBvcHRpb25zRGl2XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgb3B0aW9uc0RpdlNldFVwXG4gICAgfVxufSkoKVxuXG5jb25zdCB0YXNrU3RhdGUgPSAodGFzayk9PiB7XG4gICAgY29uc3Qgc3RhdGVDb2xvclBvaW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBjb25zdCBjcmVhdGVTdGF0ZUNvbG9yUG9pbnQgPSAodGFzayk9PiB7XG4gICAgICAgIHN0YXRlQ29sb3JQb2ludC5jbGFzc0xpc3QuYWRkKCdzdGF0ZUNvbG9yUG9pbnQnKTtcbiAgICAgICAgc3RhdGVDb2xvclBvaW50LnNldEF0dHJpYnV0ZSgnc3JjJywgYC4uL3NyYy8ke3Rhc2suc3RhdGV9LnBuZ2ApO1xuICAgICAgICByZXR1cm4gc3RhdGVDb2xvclBvaW50O1xuICAgIH1cblxuICAgIGNvbnN0IGVkaXRDb2xvciA9ICh0YXNrKT0+IHtcbiAgICAgICAgc3RhdGVDb2xvclBvaW50LnNldEF0dHJpYnV0ZSgnc3JjJywgYC4uL3NyYy8ke3Rhc2suc3RhdGV9LnBuZ2ApXG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tJZkRvbmUgPSAodGFzayk9PiB7XG4gICAgICAgIHJldHVybiB0YXNrLnN0YXRlID09PSAnZG9uZSc7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHN0YXRlQ29sb3JQb2ludCxcbiAgICAgICAgY3JlYXRlU3RhdGVDb2xvclBvaW50LFxuICAgICAgICBlZGl0Q29sb3IsIFxuICAgICAgICBjaGVja0lmRG9uZVxuICAgIH1cbn1cblxuY29uc3QgdGFza1ByaW9yaXR5ID0gKCk9PiB7XG4gICAgY29uc3QgcHJpb3JpdHlGbGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBjb25zdCBjcmVhdGVQcmlvcml0eURpdiA9ICh0YXNrKT0+IHtcbiAgICAgICAgcHJpb3JpdHlGbGFnLnNldEF0dHJpYnV0ZSgnc3JjJywgYC4uL3NyYy9mbGFnXyR7dGFzay5wcmlvcml0eX0ucG5nYCk7XG4gICAgICAgIHByaW9yaXR5RmxhZy5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eUZsYWcnKTtcbiAgICAgICAgcmV0dXJuIHByaW9yaXR5RmxhZztcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0Q29sb3IgPSAodGFzayk9PiB7XG4gICAgICAgIHByaW9yaXR5RmxhZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAuLi9zcmMvZmxhZ18ke3Rhc2sucHJpb3JpdHl9LnBuZ2ApO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVQcmlvcml0eURpdixcbiAgICAgICAgZWRpdENvbG9yXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgbmV3VGFzayA9ICgoKT0+IHtcbiAgICBjb25zdCBnZXROZXdUYXNrID0gKCk9PiB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBQcm9qZWN0TGlzdC5jdXJyZW50UHJvamVjdC50YXNrTGlzdC5nZXRMaXN0KCk7XG4gICAgICAgIHJldHVybiBsaXN0W2xpc3QubGVuZ3RoLTFdO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZU5ld1Rhc2tDb250YWluZXIgPSAoKT0+IHtcbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBQcm9qZWN0TGlzdC5jdXJyZW50UHJvamVjdC50YXNrTGlzdC5nZXRMaXN0KCkubGVuZ3RoLTEpO1xuICAgICAgICBUQVNLR1JJRC5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcbiAgICAgICAgcmV0dXJuIHRhc2tDb250YWluZXI7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlVGFza0RldGFpbCA9IChkZXRhaWwsIG5ld1Rhc2spPT4ge1xuICAgICAgICBjb25zdCBkZXRhaWxUb0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkZXRhaWxUb0Rpc3BsYXkucmVhZE9ubHkgPSB0cnVlO1xuICAgICAgICBkZXRhaWxUb0Rpc3BsYXkuY2xhc3NMaXN0LmFkZChkZXRhaWwpO1xuICAgICAgICBkZXRhaWxUb0Rpc3BsYXkudmFsdWUgPSBuZXdUYXNrW2RldGFpbF07XG4gICAgICAgIHJldHVybiBkZXRhaWxUb0Rpc3BsYXk7XG4gICAgfVxuXG4gICAgY29uc3QgYXBwZW5kVGFza0RldGFpbCA9ICh0YXNrQ29udGFpbmVyLCBkZXRhaWxUb0Rpc3BsYXkpPT4ge1xuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbFRvRGlzcGxheSk7XG4gICAgfSBcbiAgICBcbiAgICBjb25zdCBkaXNwbGF5VGFza3MgPSAobmV3VGFzayk9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBjcmVhdGVOZXdUYXNrQ29udGFpbmVyKCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRldGFpbCBpbiBuZXdUYXNrKXtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXRhaWxUb0Rpc3BsYXkgPSBjcmVhdGVUYXNrRGV0YWlsKGRldGFpbCwgbmV3VGFzayk7XG4gICAgICAgICAgICAgICAgaWYgKGRldGFpbCA9PT0gJ19zdGF0ZScpe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdGF0ZUNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgICAgICBhcHBlbmRUYXNrRGV0YWlsKHRhc2tDb250YWluZXIsIHN0YXRlQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgYXBwZW5kVGFza0RldGFpbChzdGF0ZUNvbnRhaW5lciwgZGV0YWlsVG9EaXNwbGF5KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza1N0YXRlUG9pbnQgPSB0YXNrU3RhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVDb250YWluZXIuaW5zZXJ0QmVmb3JlKHRhc2tTdGF0ZVBvaW50LnN0YXRlQ29sb3JQb2ludCwgc3RhdGVDb250YWluZXIuZmlyc3RDaGlsZClcbiAgICAgICAgICAgICAgICAgICAgdGFza1N0YXRlUG9pbnQuY3JlYXRlU3RhdGVDb2xvclBvaW50KG5ld1Rhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwZW5kVGFza0RldGFpbCh0YXNrQ29udGFpbmVyLCBkZXRhaWxUb0Rpc3BsYXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld1Rhc2suc3RhdGUgPT09ICdkb25lJyA/IHRhc2tDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IDAuNyA6IHRhc2tDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICBjb25zdCBmbGFnID0gdGFza1ByaW9yaXR5KCk7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGZsYWcuY3JlYXRlUHJpb3JpdHlEaXYobmV3VGFzaykpO1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrT3B0aW9ucy5vcHRpb25zRGl2U2V0VXAoKSk7XG4gICAgICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGRpc3BsYXkgOiAoKT0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBnZXROZXdUYXNrKCk7XG4gICAgICAgICAgICBkaXNwbGF5VGFza3MobmV3VGFzayk7XG4gICAgICAgIH1cbiAgICAgICAgLFxuICAgICAgICBkaXNwbGF5RWFjaFRhc2sgOiAoaSk9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrID0gUHJvamVjdExpc3QuY3VycmVudFByb2plY3QudGFza0xpc3QuZ2V0TGlzdCgpW2ldO1xuICAgICAgICAgICAgZGlzcGxheVRhc2tzKG5ld1Rhc2spO1xuICAgICAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lcnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdltkYXRhLWluZGV4XScpKTtcbiAgICAgICAgaWYgKHRhc2tDb250YWluZXJzLmxlbmd0aD4wKXtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXJzWzBdLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIDApO1xuICAgICAgICAgICAgZm9yIChsZXQgaT0wIDsgaTx0YXNrQ29udGFpbmVycy5sZW5ndGgtMTsgaSsrKXtcbiAgICAgICAgICAgICAgICB0YXNrQ29udGFpbmVyc1tpKzFdLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIHBhcnNlSW50KHRhc2tDb250YWluZXJzW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKSsxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSkoKSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==