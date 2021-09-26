/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// ref: https://github.com/tc39/proposal-global\nvar getGlobal = function () {\n\t// the only reliable means to get the global object is\n\t// `Function('return this')()`\n\t// However, this causes CSP violations in Chrome apps.\n\tif (typeof self !== 'undefined') { return self; }\n\tif (typeof window !== 'undefined') { return window; }\n\tif (typeof global !== 'undefined') { return global; }\n\tthrow new Error('unable to locate global object');\n}\n\nvar global = getGlobal();\n\nmodule.exports = exports = global.fetch;\n\n// Needed for TypeScript and Webpack.\nexports.default = global.fetch.bind(global);\n\nexports.Headers = global.Headers;\nexports.Request = global.Request;\nexports.Response = global.Response;\n\n//# sourceURL=webpack:///./node_modules/node-fetch/browser.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//Run \"npm run dev\" for compiling any changes\nwindow.onload = function () {\n  const submit = document.querySelector(\".chat-submit\");\n  const chatBx = document.querySelector(\".chat-box\");\n  const chatInp = document.querySelector(\".chat-input\");\n  document.getElementById(\"sub\").focus();\n\n  function chattemp(botOrhuman) {\n    return `\n        <div class=\"bot-human-container\">\n          <div class=\"${botOrhuman.class}\">\n            <p>${botOrhuman.text}</p>\n          </div>\n          <span class=\"${botOrhuman.class}-date\">${botOrhuman.date}</span>\n        </div>\n      `;\n  }\n\n  function callfun() {\n    if (chatInp.value != \"\") {\n      document.getElementById(\"sub\").disabled = true;\n      appendchatBx(true, chatInp.value);\n      setTimeout(function () {\n        document.getElementById(\"sub\").disabled = false;\n        document.getElementById(\"sub\").focus();\n      }, 2000);\n    }\n  }\n\n  submit.addEventListener(\"click\", function (e) {\n    callfun();\n  });\n  document.addEventListener(\"keypress\", function (e) {\n    if (e.keyCode == \"13\") callfun();\n  });\n\n  async function appendchatBx(fromhuman, input) {\n    const date = new Date();\n    if (!fromhuman) date.setSeconds(date.getSeconds() + 2);\n    if (fromhuman && !chatInp.value.trim()) return;\n    const timestamp = date.toLocaleTimeString();\n    const newChatDiv = chattemp({\n      class: fromhuman ? \"human\" : \"bot\",\n      text: fromhuman ? chatInp.value.trim() : await botResponse(input),\n      date: timestamp\n    });\n\n    if (!fromhuman) {\n      setTimeout(function () {\n        chatBx.innerHTML += newChatDiv;\n        chatBx.scrollTop = chatBx.scrollHeight;\n      }, 2000);\n    } else {\n      chatBx.innerHTML += newChatDiv;\n      chatBx.scrollTop = chatBx.scrollHeight;\n    }\n\n    if (fromhuman) {\n      chatInp.value = \"\";\n      appendchatBx(false, input);\n    }\n  }\n\n  async function botResponse(text) {\n    console.log(\"call https \" + text);\n    const response = await https_request(text);\n    console.log(\"Test Response: \" + response.body.response);\n    return response.body.response;\n  }\n\n  function https_request(text) {\n    console.log(\"https start\");\n\n    const https = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\"); // const url = \"https://sharadjain1999.pythonanywhere.com/Bot-response-function\";\n\n\n    const url = \"http://127.0.0.1:5000/Bot-response-function\";\n    return new Promise(function (resolve, reject) {\n      fetch(url, {\n        \"method\": \"POST\",\n        headers: {\n          \"content-type\": \"application/json\"\n        },\n        body: JSON.stringify({\n          \"user-input\": text,\n          \"response\": \"\"\n        })\n      }).then(response => response.json()).then(response => {\n        console.log(\"String \" + JSON.stringify(response));\n        resolve(response);\n      }).catch(err => {\n        console.log(err);\n        reject(err);\n      });\n    });\n  }\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });