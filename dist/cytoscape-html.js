/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/collection/renderHTMLLabelsOverlay.ts":
/*!***************************************************!*\
  !*** ./src/collection/renderHTMLLabelsOverlay.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderHTMLLabelsOverlay)\n/* harmony export */ });\n// TODO: use proper types\r\nfunction renderHTMLLabelsOverlay(options) {\r\n    console.log(\"LABELS!!\");\r\n    const cyto = this.cy();\r\n    const cytoContainer = cyto.container();\r\n    const labelHtmlContainer = document.createElement(\"div\");\r\n    const namespace = \"__cytoscape-html__\";\r\n    const createNode = (node) => {\r\n        var _a;\r\n        const id = node.id();\r\n        const html = (_a = node.data()) === null || _a === void 0 ? void 0 : _a.htmlLabel;\r\n        if (!html)\r\n            return;\r\n        const internalLabelId = `${namespace}_label-${id}`;\r\n        const position = node.renderedPosition();\r\n        const posX = position.x.toFixed(2);\r\n        const posY = position.y.toFixed(2);\r\n        const newLabel = document.createElement(\"div\");\r\n        const existingLabel = labelHtmlContainer.querySelector(\"#\" + internalLabelId);\r\n        const labelTranslation = `translate(${posX}px, ${posY}px)`;\r\n        const labelScale = `scale(${cyto.zoom()})`;\r\n        const transform = `translate(-50%, -50%) ${labelTranslation} ${labelScale}`;\r\n        newLabel.id = internalLabelId;\r\n        newLabel.style.position = \"absolute\";\r\n        newLabel.style.transform = transform;\r\n        newLabel.style.zIndex = \"2\";\r\n        newLabel.innerHTML = html;\r\n        console.log({ internalLabelId, existingLabel, html });\r\n        if (existingLabel)\r\n            labelHtmlContainer.removeChild(existingLabel);\r\n        labelHtmlContainer.appendChild(newLabel);\r\n        if (options.hideOriginal)\r\n            // Hide the original node\r\n            node.style({ \"background-opacity\": 0 });\r\n    };\r\n    function handleMovement() {\r\n        cyto.nodes().forEach((node) => createNode(node));\r\n    }\r\n    // TODO: DECONFLICT -- THIS ISN\"T FIRING BECAUSE OF THE NODES FUNCTION\r\n    if (!document.getElementById(namespace)) {\r\n        const canvas = cytoContainer.querySelector(\"canvas\");\r\n        labelHtmlContainer.id = namespace;\r\n        labelHtmlContainer.style.width = canvas.style.width;\r\n        labelHtmlContainer.style.height = canvas.style.height;\r\n        labelHtmlContainer.style.zIndex = \"1\";\r\n        canvas.parentNode.appendChild(labelHtmlContainer);\r\n        cyto.on(\"add\", \"node\", (e) => createNode(e.target));\r\n        cyto.on(\"drag\", \"node\", (e) => createNode(e.target));\r\n        cyto.on(\"pan resize\", handleMovement);\r\n    }\r\n    return cyto.nodes();\r\n}\r\n\n\n//# sourceURL=webpack://cytoscape-html/./src/collection/renderHTMLLabelsOverlay.ts?");

/***/ }),

/***/ "./src/collection/renderHTMLNodesOverlay.ts":
/*!**************************************************!*\
  !*** ./src/collection/renderHTMLNodesOverlay.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderHTML)\n/* harmony export */ });\n// TODO: use proper types\r\nfunction renderHTML(options) {\r\n    const cyto = this.cy();\r\n    const cytoContainer = cyto.container();\r\n    const nodeHtmlContainer = document.createElement(\"div\");\r\n    const internalId = \"__cytoscape-html__\";\r\n    const createNode = (node) => {\r\n        var _a;\r\n        const id = node.id();\r\n        const html = (_a = node.data()) === null || _a === void 0 ? void 0 : _a.html;\r\n        if (!html)\r\n            return;\r\n        const namespace = \"__cytoscape-html\";\r\n        const internalNodeId = `${namespace}_node-${id}`;\r\n        const position = node.renderedPosition();\r\n        const posX = position.x.toFixed(2);\r\n        const posY = position.y.toFixed(2);\r\n        const newNode = document.createElement(\"div\");\r\n        const existingNode = nodeHtmlContainer.querySelector(\"#\" + internalNodeId);\r\n        const nodeTranslation = `translate(${posX}px, ${posY}px)`;\r\n        const nodeScale = `scale(${cyto.zoom()})`;\r\n        const transform = `translate(-50%, -50%) ${nodeTranslation} ${nodeScale}`;\r\n        newNode.id = internalNodeId;\r\n        newNode.style.position = \"absolute\";\r\n        newNode.style.transform = transform;\r\n        newNode.style.zIndex = \"2\";\r\n        newNode.innerHTML = html;\r\n        if (existingNode)\r\n            nodeHtmlContainer.removeChild(existingNode);\r\n        nodeHtmlContainer.appendChild(newNode);\r\n        if (options.hideOriginal)\r\n            // Hide the original node\r\n            node.style({ \"background-opacity\": 0 });\r\n    };\r\n    function handleMovement() {\r\n        cyto.nodes().forEach((node) => createNode(node));\r\n    }\r\n    if (!document.getElementById(internalId)) {\r\n        const canvas = cytoContainer.querySelector(\"canvas\");\r\n        nodeHtmlContainer.id = internalId;\r\n        canvas.parentNode.appendChild(nodeHtmlContainer);\r\n        nodeHtmlContainer.style.width = canvas.style.width;\r\n        nodeHtmlContainer.style.height = canvas.style.height;\r\n        nodeHtmlContainer.style.zIndex = \"1\";\r\n        cyto.on(\"add\", \"node\", (e) => createNode(e.target));\r\n        cyto.on(\"drag\", \"node\", (e) => createNode(e.target));\r\n        cyto.on(\"pan resize\", handleMovement);\r\n    }\r\n    return cyto.nodes();\r\n}\r\n\n\n//# sourceURL=webpack://cytoscape-html/./src/collection/renderHTMLNodesOverlay.ts?");

/***/ }),

/***/ "./src/core/renderNodesHTML.ts":
/*!*************************************!*\
  !*** ./src/core/renderNodesHTML.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ init)\n/* harmony export */ });\n// TODO: Take in Node HTML, convert to background image, and apply to node style\r\nfunction init(options) {\r\n    const cyto = this;\r\n    cyto.style().selector(\"node\").style(\"background-image\", renderHTML);\r\n    return this;\r\n}\r\nfunction renderHTML(node) {\r\n    const data = node.data();\r\n    const html = data === null || data === void 0 ? void 0 : data.html;\r\n    const nodeSize = (data === null || data === void 0 ? void 0 : data.size) || 18;\r\n    if (!html) {\r\n        console.warn(`cytoscape-html: node with id '${node.id()}' does not have a property 'html'`);\r\n        return;\r\n    }\r\n    const renderable = createSVGFromHtmL(html, nodeSize);\r\n    console.log(renderable);\r\n    return renderable;\r\n}\r\nfunction createSVGFromHtmL(html, size) {\r\n    const svg = `<svg width=\"${size}\" height=\"${size}\" xmlns=\"http://www.w3.org/2000/svg\">\r\n    <foreignObject width=\"100%\" height=\"100%\">\r\n      <div\r\n        style=\"width:100%;height:100%\"\r\n        xmlns=\"http://www.w3.org/1999/xhtml\"\r\n      >\r\n        ${html}\r\n      </div>\r\n    </foreignObject>\r\n  </svg>`;\r\n    return `url(\"data:image/svg+xml;utf8,${encodeURI(svg)})`;\r\n}\r\n//   const convertComponentToBackgroundImage = (component, size = 18) => {\r\n//     return generateBackgroundImageFromComponent(\r\n// ,\r\n//     );\r\n//   };\r\n\n\n//# sourceURL=webpack://cytoscape-html/./src/core/renderNodesHTML.ts?");

/***/ }),

/***/ "./src/cytoscape-html.ts":
/*!*******************************!*\
  !*** ./src/cytoscape-html.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ register)\n/* harmony export */ });\n/* harmony import */ var _collection_renderHTMLNodesOverlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection/renderHTMLNodesOverlay */ \"./src/collection/renderHTMLNodesOverlay.ts\");\n/* harmony import */ var _collection_renderHTMLLabelsOverlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collection/renderHTMLLabelsOverlay */ \"./src/collection/renderHTMLLabelsOverlay.ts\");\n/* harmony import */ var _core_renderNodesHTML__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/renderNodesHTML */ \"./src/core/renderNodesHTML.ts\");\n\r\n\r\n\r\n// registers the extension on a cytoscape lib ref\r\nfunction register(cytoscape) {\r\n    // can't register if cytoscape unspecified\r\n    if (!cytoscape) {\r\n        return;\r\n    }\r\n    // register with cytoscape.js\r\n    cytoscape(\"collection\", \"__renderHTMLNodesOverlayOverlay\", _collection_renderHTMLNodesOverlay__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n    cytoscape(\"collection\", \"__renderHTMLLabelsOverlayOverlay\", _collection_renderHTMLLabelsOverlay__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n    cytoscape(\"core\", \"renderNodesHTML\", _core_renderNodesHTML__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n}\r\nif (typeof window.cytoscape !== \"undefined\") {\r\n    register(window.cytoscape);\r\n}\r\n\n\n//# sourceURL=webpack://cytoscape-html/./src/cytoscape-html.ts?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/cytoscape-html.ts");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;