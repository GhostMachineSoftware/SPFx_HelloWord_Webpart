define("a83b7602-5be0-44fa-87cd-74ba3fd639fd_0.0.1", ["@microsoft/sp-core-library","@microsoft/sp-http","@microsoft/sp-lodash-subset","@microsoft/sp-webpart-base","HelloWorldWebPartStrings"], function(__WEBPACK_EXTERNAL_MODULE__microsoft_sp_core_library__, __WEBPACK_EXTERNAL_MODULE__microsoft_sp_http__, __WEBPACK_EXTERNAL_MODULE__microsoft_sp_lodash_subset__, __WEBPACK_EXTERNAL_MODULE__microsoft_sp_webpart_base__, __WEBPACK_EXTERNAL_MODULE_HelloWorldWebPartStrings__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/webparts/helloWorld/HelloWorldWebPart.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/webparts/helloWorld/HelloWorldWebPart.js":
/*!******************************************************!*\
  !*** ./lib/webparts/helloWorld/HelloWorldWebPart.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "@microsoft/sp-core-library");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "@microsoft/sp-webpart-base");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "@microsoft/sp-lodash-subset");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _HelloWorldWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HelloWorldWebPart.module.scss */ "./lib/webparts/helloWorld/HelloWorldWebPart.module.scss.js");
/* harmony import */ var HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! HelloWorldWebPartStrings */ "HelloWorldWebPartStrings");
/* harmony import */ var HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _MockHttpClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MockHttpClient */ "./lib/webparts/helloWorld/MockHttpClient.js");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/sp-http */ "@microsoft/sp-http");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_6__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var HelloWorldWebPart = /** @class */ (function (_super) {
    __extends(HelloWorldWebPart, _super);
    function HelloWorldWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloWorldWebPart.prototype.render = function () {
        var title = '';
        var subTitle = '';
        var siteTabTitle = '';
        if (this._teamsContext) {
            // We have teams context for the web part
            title = "Welcome to Teams!";
            subTitle = "Building custom enterprise tabs for your business.";
            siteTabTitle = "We are in the context of following Team: " + this._teamsContext.teamName;
        }
        else {
            // We are rendered in normal SharePoint context
            title = "Welcome to SharePoint!";
            subTitle = "Customize SharePoint experiences using Web Parts.";
            siteTabTitle = "We are in the context of following site: " + this.context.pageContext.web.title;
        }
        this.domElement.innerHTML = "\n    <div class=\"" + _HelloWorldWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].helloWorld + "\">\n      <div class=\"" + _HelloWorldWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].container + "\">\n        <div class=\"" + _HelloWorldWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].row + "\">\n          <div class=\"" + _HelloWorldWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].column + "\">\n            <span class=\"" + _HelloWorldWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].title + "\">Welcome to SharePoint!</span>\n            <p class=\"" + _HelloWorldWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].subTitle + "\">Customize SharePoint experiences using web parts.</p>\n            <p class=\"" + _HelloWorldWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].description + "\">" + Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__["escape"])(this.properties.description) + "</p>\n            <p class=\"" + _HelloWorldWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].description + "\">" + Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__["escape"])(this.properties.test) + "</p>\n            <p class=\"" + _HelloWorldWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].description + "\">Loading from " + Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_2__["escape"])(this.context.pageContext.web.title) + "</p>\n            <a href=\"https://aka.ms/spfx\" class=\"" + _HelloWorldWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].button + "\">\n              <span class=\"" + _HelloWorldWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].label + "\">Learn more</span>\n            </a>\n          </div>\n        </div>\n        <div id=\"spListContainer\" />\n      </div>\n    </div>";
        this._renderListAsync();
    };
    HelloWorldWebPart.prototype.onInit = function () {
        var _this = this;
        var retVal = Promise.resolve();
        if (this.context.microsoftTeams) {
            retVal = new Promise(function (resolve, reject) {
                _this.context.microsoftTeams.getContext(function (context) {
                    _this._teamsContext = context;
                    resolve();
                });
            });
        }
        return retVal;
    };
    HelloWorldWebPart.prototype._getMockListData = function () {
        return _MockHttpClient__WEBPACK_IMPORTED_MODULE_5__["default"].get()
            .then(function (data) {
            var listData = { value: data };
            return listData;
        });
    };
    HelloWorldWebPart.prototype._getListData = function () {
        return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + "/_api/web/lists?$filter=Hidden eq false", _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_6__["SPHttpClient"].configurations.v1)
            .then(function (response) {
            return response.json();
        });
    };
    HelloWorldWebPart.prototype._renderList = function (items) {
        var html = '';
        items.forEach(function (item) {
            html += "\n    <ul class=\"" + _HelloWorldWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].list + "\">\n      <li class=\"" + _HelloWorldWebPart_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].listItem + "\">\n        <span class=\"ms-font-l\">" + item.Title + "</span>\n      </li>\n    </ul>";
        });
        var listContainer = this.domElement.querySelector('#spListContainer');
        listContainer.innerHTML = html;
    };
    HelloWorldWebPart.prototype._renderListAsync = function () {
        var _this = this;
        // Local environment
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Environment"].type === _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["EnvironmentType"].Local) {
            this._getMockListData().then(function (response) {
                _this._renderList(response.value);
            });
        }
        else if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Environment"].type == _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["EnvironmentType"].SharePoint ||
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Environment"].type == _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["EnvironmentType"].ClassicSharePoint) {
            this._getListData()
                .then(function (response) {
                _this._renderList(response.value);
            });
        }
    };
    Object.defineProperty(HelloWorldWebPart.prototype, "dataVersion", {
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Version"].parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    HelloWorldWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_4__["PropertyPaneDescription"]
                    },
                    groups: [
                        {
                            groupName: HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_4__["BasicGroupName"],
                            groupFields: [
                                Object(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1__["PropertyPaneTextField"])('description', {
                                    label: 'Description'
                                }),
                                Object(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1__["PropertyPaneTextField"])('test', {
                                    label: 'Multi-line Text Field',
                                    multiline: true
                                }),
                                Object(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1__["PropertyPaneCheckbox"])('test1', {
                                    text: 'Checkbox'
                                }),
                                Object(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1__["PropertyPaneDropdown"])('test2', {
                                    label: 'Dropdown',
                                    options: [
                                        { key: '1', text: 'One' },
                                        { key: '2', text: 'Two' },
                                        { key: '3', text: 'Three' },
                                        { key: '4', text: 'Four' }
                                    ]
                                }),
                                Object(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1__["PropertyPaneToggle"])('test3', {
                                    label: 'Toggle',
                                    onText: 'On',
                                    offText: 'Off'
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return HelloWorldWebPart;
}(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_1__["BaseClientSideWebPart"]));
/* harmony default export */ __webpack_exports__["default"] = (HelloWorldWebPart);


/***/ }),

/***/ "./lib/webparts/helloWorld/HelloWorldWebPart.module.css":
/*!**************************************************************!*\
  !*** ./lib/webparts/helloWorld/HelloWorldWebPart.module.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!./HelloWorldWebPart.module.css */ "./node_modules/css-loader/index.js?!./lib/webparts/helloWorld/HelloWorldWebPart.module.css");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js */ "./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "./lib/webparts/helloWorld/HelloWorldWebPart.module.scss.js":
/*!******************************************************************!*\
  !*** ./lib/webparts/helloWorld/HelloWorldWebPart.module.scss.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./HelloWorldWebPart.module.css */ "./lib/webparts/helloWorld/HelloWorldWebPart.module.css");
var styles = {
    helloWorld: 'helloWorld_e0247e8d',
    container: 'container_e0247e8d',
    row: 'row_e0247e8d',
    column: 'column_e0247e8d',
    'ms-Grid': 'ms-Grid_e0247e8d',
    title: 'title_e0247e8d',
    subTitle: 'subTitle_e0247e8d',
    description: 'description_e0247e8d',
    button: 'button_e0247e8d',
    label: 'label_e0247e8d',
    list: 'list_e0247e8d',
    listItem: 'listItem_e0247e8d'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "./lib/webparts/helloWorld/MockHttpClient.js":
/*!***************************************************!*\
  !*** ./lib/webparts/helloWorld/MockHttpClient.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var MockHttpClient = /** @class */ (function () {
    function MockHttpClient() {
    }
    MockHttpClient.get = function () {
        return new Promise(function (resolve) {
            resolve(MockHttpClient._items);
        });
    };
    MockHttpClient._items = [{ Title: 'Mock List', Id: '1' },
        { Title: 'Mock List 2', Id: '2' },
        { Title: 'Mock List 3', Id: '3' }];
    return MockHttpClient;
}());
/* harmony default export */ __webpack_exports__["default"] = (MockHttpClient);


/***/ }),

/***/ "./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
 * to use if that slot is not specified by the theme.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this
// value will initialize as undefined, and later will be set once on first loadStyles injection.
var _injectStylesWithCssText;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
var _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
// tslint:disable-next-line:max-line-length
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
/** Maximum style text length, for supporting IE style restrictions. */
var MAX_STYLE_CONTENT_SIZE = 10000;
var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign({}, (state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign({}, (state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        if (_injectStylesWithCssText === undefined) {
            _injectStylesWithCssText = shouldUseCssText();
        }
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        _injectStylesWithCssText ?
            registerStylesIE(stylesArray, styleRecord) :
            registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @param option - specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme && !themedValue && console && !(themeSlot in theme) && "boolean" !== 'undefined' && true) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0; // tslint:disable-line:no-null-keyword
        while (tokenMatch = _themeTokenRegex.exec(styles)) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.type = 'text/css';
    if (_styleNonce) {
        styleElement.setAttribute('nonce', _styleNonce);
    }
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
/**
 * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need
 * to register slightly differently.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStylesIE(styleArray, styleRecord) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var registeredStyles = _themeState.registeredStyles;
    var lastStyleElement = _themeState.lastStyleElement;
    var stylesheet = lastStyleElement ? lastStyleElement.styleSheet : undefined;
    var lastStyleContent = stylesheet ? stylesheet.cssText : '';
    var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];
    var resolvedStyleText = resolveThemableArray(styleArray).styleString;
    if (!lastStyleElement || (lastStyleContent.length + resolvedStyleText.length) > MAX_STYLE_CONTENT_SIZE) {
        lastStyleElement = document.createElement('style');
        lastStyleElement.type = 'text/css';
        if (styleRecord) {
            head.replaceChild(lastStyleElement, styleRecord.styleElement);
            styleRecord.styleElement = lastStyleElement;
        }
        else {
            head.appendChild(lastStyleElement);
        }
        if (!styleRecord) {
            lastRegisteredStyle = {
                styleElement: lastStyleElement,
                themableStyle: styleArray
            };
            registeredStyles.push(lastRegisteredStyle);
        }
    }
    lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);
    Array.prototype.push.apply(lastRegisteredStyle.themableStyle, styleArray); // concat in-place
    // Preserve the theme state.
    _themeState.lastStyleElement = lastStyleElement;
}
/**
 * Checks to see if styleSheet exists as a property off of a style element.
 * This will determine if style registration should be done via cssText (<= IE9) or not
 */
function shouldUseCssText() {
    var useCSSText = false;
    if (typeof document !== 'undefined') {
        var emptyStyle = document.createElement('style');
        emptyStyle.type = 'text/css';
        useCSSText = !!emptyStyle.styleSheet;
    }
    return useCSSText;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./lib/webparts/helloWorld/HelloWorldWebPart.module.css":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./lib/webparts/helloWorld/HelloWorldWebPart.module.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".helloWorld_e0247e8d .container_e0247e8d{max-width:700px;margin:0 auto;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1);box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.helloWorld_e0247e8d .row_e0247e8d{margin:0 -8px;-webkit-box-sizing:border-box;box-sizing:border-box;color:\"[theme:white, default: #ffffff]\";background-color:\"[theme:themeDark, default: #005a9e]\";padding:20px}.helloWorld_e0247e8d .row_e0247e8d:after,.helloWorld_e0247e8d .row_e0247e8d:before{display:table;content:\"\";line-height:0}.helloWorld_e0247e8d .row_e0247e8d:after{clear:both}.helloWorld_e0247e8d .column_e0247e8d{position:relative;min-height:1px;padding-left:8px;padding-right:8px;-webkit-box-sizing:border-box;box-sizing:border-box}[dir=ltr] .helloWorld_e0247e8d .column_e0247e8d{float:left}[dir=rtl] .helloWorld_e0247e8d .column_e0247e8d{float:right}.helloWorld_e0247e8d .column_e0247e8d .ms-Grid_e0247e8d{padding:0}@media (min-width:640px){.helloWorld_e0247e8d .column_e0247e8d{width:83.33333333333334%}}@media (min-width:1024px){.helloWorld_e0247e8d .column_e0247e8d{width:66.66666666666666%}}@media (min-width:1024px){[dir=ltr] .helloWorld_e0247e8d .column_e0247e8d{left:16.66667%}[dir=rtl] .helloWorld_e0247e8d .column_e0247e8d{right:16.66667%}}@media (min-width:640px){[dir=ltr] .helloWorld_e0247e8d .column_e0247e8d{left:8.33333%}[dir=rtl] .helloWorld_e0247e8d .column_e0247e8d{right:8.33333%}}.helloWorld_e0247e8d .title_e0247e8d{font-size:21px;font-weight:100;color:\"[theme:white, default: #ffffff]\"}.helloWorld_e0247e8d .description_e0247e8d,.helloWorld_e0247e8d .subTitle_e0247e8d{font-size:17px;font-weight:300;color:\"[theme:white, default: #ffffff]\"}.helloWorld_e0247e8d .button_e0247e8d{text-decoration:none;height:32px;min-width:80px;background-color:\"[theme:themePrimary, default: #0078d4]\";border-color:\"[theme:themePrimary, default: #0078d4]\";color:\"[theme:white, default: #ffffff]\";outline:transparent;position:relative;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;border-width:0;text-align:center;cursor:pointer;display:inline-block;padding:0 16px}.helloWorld_e0247e8d .button_e0247e8d .label_e0247e8d{font-weight:600;font-size:14px;height:32px;line-height:32px;margin:0 4px;vertical-align:top;display:inline-block}.helloWorld_e0247e8d .list_e0247e8d{margin:10;padding:10;line-height:50px;list-style-type:none;-webkit-box-shadow:0 4px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1);box-shadow:0 4px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.helloWorld_e0247e8d .list_e0247e8d,.helloWorld_e0247e8d .listItem_e0247e8d{color:#333;font-family:Segoe UI Regular WestEuropean,Segoe UI,Tahoma,Arial,sans-serif;font-size:14px;font-weight:400;-webkit-box-sizing:border-box;box-sizing:border-box}.helloWorld_e0247e8d .listItem_e0247e8d{vertical-align:center;margin:0;padding:0;-webkit-box-shadow:none;box-shadow:none;padding:9px 28px 3px;position:relative}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "@microsoft/sp-core-library":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__microsoft_sp_core_library__;

/***/ }),

/***/ "@microsoft/sp-http":
/*!*************************************!*\
  !*** external "@microsoft/sp-http" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__microsoft_sp_http__;

/***/ }),

/***/ "@microsoft/sp-lodash-subset":
/*!**********************************************!*\
  !*** external "@microsoft/sp-lodash-subset" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__microsoft_sp_lodash_subset__;

/***/ }),

/***/ "@microsoft/sp-webpart-base":
/*!*********************************************!*\
  !*** external "@microsoft/sp-webpart-base" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__microsoft_sp_webpart_base__;

/***/ }),

/***/ "HelloWorldWebPartStrings":
/*!*******************************************!*\
  !*** external "HelloWorldWebPartStrings" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_HelloWorldWebPartStrings__;

/***/ })

/******/ })});;
//# sourceMappingURL=hello-world-web-part.js.map