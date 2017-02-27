/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(41);
module.exports.default = module.exports;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(40);
module.exports.default = module.exports;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shouldUpdate_js__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__shouldUpdate_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__withHandlers_js__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__withHandlers_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__withMiddleState_js__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__withMiddleState_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__withPropsOnChange_js__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__withPropsOnChange_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__withScrollProps_js__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__withScrollProps_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__withPinnableColumns_js__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__withPinnableColumns_js__["a"]; });







/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const defaultMinWidth = 60;
/* harmony export (immutable) */ __webpack_exports__["b"] = defaultMinWidth;

const defaultBorder = '1px solid #d4d4d4';
/* harmony export (immutable) */ __webpack_exports__["c"] = defaultBorder;

const defaultActiveBorder = '1px solid #000';
/* harmony export (immutable) */ __webpack_exports__["d"] = defaultActiveBorder;

const defaultHeaderBackground = 'linear-gradient(to top, #eeeeee, #ffffff)';
/* harmony export (immutable) */ __webpack_exports__["e"] = defaultHeaderBackground;


const headerZindex = 1;
/* harmony export (immutable) */ __webpack_exports__["f"] = headerZindex;

const pinnedZindex = 2;
/* harmony export (immutable) */ __webpack_exports__["a"] = pinnedZindex;

const resizeGhostZindex = 3;
/* harmony export (immutable) */ __webpack_exports__["g"] = resizeGhostZindex;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose_js__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__compose_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getKeysByIndex_js__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__getKeysByIndex_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getVisibleRows_js__ = __webpack_require__(37);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__getVisibleRows_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bisectColumns_js__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__bisectColumns_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trimColumnWidth_js__ = __webpack_require__(39);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__trimColumnWidth_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectGridData_js__ = __webpack_require__(38);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__selectGridData_js__["a"]; });







/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(42);
module.exports.default = module.exports;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const markMoveDest = (name, left, right) => ({
    type: 'MARK_MOVE_DEST',
    name,
    left,
    right
});
/* harmony export (immutable) */ __webpack_exports__["f"] = markMoveDest;


const moveColumn = (name, left, right) => ({
    type: 'MOVE_COLUMN',
    name,
    left,
    right
});
/* harmony export (immutable) */ __webpack_exports__["g"] = moveColumn;


const moveResizeGhost = (name, position) => ({
    type: 'MOVE_RESIZE_GHOST',
    name,
    position
});
/* harmony export (immutable) */ __webpack_exports__["d"] = moveResizeGhost;


const resizeColumn = (name, size) => ({
    type: 'RESIZE_COLUMN',
    name,
    size
});
/* harmony export (immutable) */ __webpack_exports__["e"] = resizeColumn;


const filterColumn = (name, value) => ({
    type: 'FILTER_COLUMN',
    name,
    value
});
/* harmony export (immutable) */ __webpack_exports__["c"] = filterColumn;


const sortColumn = name => ({
    type: 'SORT_COLUMN',
    name
});
/* harmony export (immutable) */ __webpack_exports__["b"] = sortColumn;


const selectRow = rowIndex => ({
    type: 'SELECT_ROW',
    rowIndex
});
/* harmony export (immutable) */ __webpack_exports__["a"] = selectRow;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hoc_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__params_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionCreators_js__ = __webpack_require__(6);





const getBorderLeft = (column, index, ghost) => index === 0 || ghost ? column.moveLeft ? __WEBPACK_IMPORTED_MODULE_2__params_js__["d" /* defaultActiveBorder */] : __WEBPACK_IMPORTED_MODULE_2__params_js__["c" /* defaultBorder */] : '';

const getBorderRight = column => column.moveRight ? __WEBPACK_IMPORTED_MODULE_2__params_js__["d" /* defaultActiveBorder */] : __WEBPACK_IMPORTED_MODULE_2__params_js__["c" /* defaultBorder */];

const getOpacity = ghost => ghost ? .8 : 1;

const getColumnStyle = (column, index, ghost) => ({
    height: 60,
    boxSizing: 'border-box',
    padding: '0 8px',
    overflow: 'hidden',
    borderTop: __WEBPACK_IMPORTED_MODULE_2__params_js__["c" /* defaultBorder */],
    borderBottom: __WEBPACK_IMPORTED_MODULE_2__params_js__["c" /* defaultBorder */],
    borderLeft: getBorderLeft(column, index, ghost),
    borderRight: getBorderRight(column, index, ghost),
    background: __WEBPACK_IMPORTED_MODULE_2__params_js__["e" /* defaultHeaderBackground */],
    opacity: getOpacity(ghost)
});

const getInputStyle = () => ({
    width: '100%',
    boxSizing: 'border-box',
    padding: '0 8px',
    border: 0,
    borderBottom: __WEBPACK_IMPORTED_MODULE_2__params_js__["c" /* defaultBorder */],
    marginBottom: 8
});

const Arrow = ({ direction }) => __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()('div', { style: {
        [direction === 'asc' ? 'borderBottom' : 'borderTop']: '4px solid',
        borderLeft: '4px solid transparent',
        borderRight: '4px solid transparent'
    } });

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__hoc_index_js__["b" /* withHandlers */])({
    onSortClink: props => props.callback(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actionCreators_js__["b" /* sortColumn */])(props.column.name)),
    onFilterInput: (props, event) => props.callback(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actionCreators_js__["c" /* filterColumn */])(props.column.name, event.target.value))
})(props => __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(
    'div',
    { style: getColumnStyle(props.column, props.index, props.ghost) },
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(
        'div',
        { style: { display: 'flex', alignItems: 'center', height: 30 }, onClick: props.onSortClink },
        props.column.displayName || props.column.name,
        props.column.sort && __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(Arrow, { direction: props.column.sort })
    ),
    props.column.enableFiltering && __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()('input', { style: getInputStyle(),
        placeholder: props.column.placeholder,
        value: props.column.value,
        onInput: props.onFilterInput })
));

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__params_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hoc_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionCreators_js__ = __webpack_require__(6);





const getRowStyle = (state, index) => ({
    display: 'flex',
    height: 'inherit',
    cursor: 'default',
    background: state.selectedIndex === index ? '#c9dde1' : index % 2 === 0 ? '#fff' : '#f3f3f3'
});

const getColumnStyle = (column, index) => ({
    display: 'flex',
    alignItems: 'center',
    width: column.width,
    padding: '0 8px',
    boxSizing: 'border-box',
    borderLeft: index === 0 ? __WEBPACK_IMPORTED_MODULE_1__params_js__["c" /* defaultBorder */] : '',
    borderRight: __WEBPACK_IMPORTED_MODULE_1__params_js__["c" /* defaultBorder */]
});

const DefaultRow = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__hoc_index_js__["b" /* withHandlers */])({
    selectRow: props => props.callback(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actionCreators_js__["a" /* selectRow */])(props.index))
})(props => __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(
    'div',
    { style: getRowStyle(props.state, props.index), onClick: props.selectRow },
    props.columns.map((item, columnIndex) => __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(
        'div',
        { style: getColumnStyle(item, columnIndex) },
        __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(
            'div',
            { style: { overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' } },
            props.datum[item.name]
        )
    ))
));

/* harmony default export */ __webpack_exports__["a"] = DefaultRow;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hoc_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_index_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Container_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RowWrapper_js__ = __webpack_require__(25);






/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_index_js__["a" /* compose */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__hoc_index_js__["c" /* withMiddleState */])((props, state = {}) => {
    const [start, end] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_index_js__["b" /* getVisibleRows */])({
        scrollTop: props.scrollTop,
        viewportHeight: props.viewportHeight,
        rowHeight: props.rowHeight,
        rowsCount: props.data.length
    });
    return {
        start,
        end,
        keys: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_index_js__["c" /* getKeysByIndex */])(state.keys, start, end)
    };
}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__hoc_index_js__["d" /* shouldUpdate */])((props, nextProps) => props.start !== nextProps.start || props.end !== nextProps.end || props.data !== nextProps.data || props.rowHeight !== nextProps.rowHeight || props.component !== nextProps.component))(({ data, rowHeight, component, start, end, keys }) => __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(
    __WEBPACK_IMPORTED_MODULE_3__Container_js__["a" /* default */],
    { height: data.length * rowHeight, renderedTop: start * rowHeight },
    data.slice(start, end + 1).map((datum, index) => __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(__WEBPACK_IMPORTED_MODULE_4__RowWrapper_js__["a" /* default */], {
        key: keys[start + index],
        height: rowHeight,
        index: start + index,
        datum: datum,
        component: component
    }))
));

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inferno_component__);



/* harmony default export */ __webpack_exports__["a"] = (mappedKeys, mapProps) => BaseComponent => class extends __WEBPACK_IMPORTED_MODULE_1_inferno_component___default.a {
    constructor(props) {
        super(props);
        this.state = mapProps(props);
    }

    componentWillReceiveProps(nextProps) {
        if (mappedKeys.some(key => this.props[key] !== nextProps[key])) {
            this.setState(mapProps(nextProps));
        }
    }

    render(props, state) {
        return __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(BaseComponent, Object.assign({}, props, state));
    }
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Grid_js__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__Grid_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__List_index_js__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__List_index_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DefaultColumn_js__ = __webpack_require__(7);
/* unused harmony reexport DefaultColumn */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DefaultRow_js__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__DefaultRow_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers_index_js__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__reducers_index_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_index_js__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__utils_index_js__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hoc_index_js__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__hoc_index_js__["a"]; });








/***/ }),
/* 12 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inferno_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_js__ = __webpack_require__(11);




const TrackedGrid = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__index_js__["a" /* withScrollProps */])(__WEBPACK_IMPORTED_MODULE_2__index_js__["d" /* Grid */]);

const data = Array(100000).fill(0).map((item, i) => ({
    col11: `Pinned left ${i}`,
    col1: i,
    col2: `Title ${i}`,
    col21: `Pinned right ${i}`,
    col3: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
}));

class Viewport extends __WEBPACK_IMPORTED_MODULE_1_inferno_component___default.a {
    constructor() {
        super();

        this.state = {
            gridState: {
                columns: [{
                    name: 'col1',
                    enableSorting: true
                }, {
                    name: 'col11',
                    width: 120,
                    pinnedLeft: true
                }, {
                    name: 'col2',
                    minWidth: 60,
                    enableFiltering: true,
                    width: 150,
                    resizing: true
                }, {
                    name: 'col21',
                    width: 120,
                    pinnedRight: true
                }, {
                    name: 'col3',
                    displayName: 'Column 3',
                    width: 200,
                    maxWidth: 300,
                    moving: true
                }],
                rowState: {
                    selectedIndex: 0
                }
            },
            data,
            originalData: data
        };

        this.callback = this.callback.bind(this);
    }

    callback(action) {
        console.log(action);
        switch (action.type) {
            case 'FILTER_COLUMN':
            case 'SORT_COLUMN':
                {
                    const gridState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__index_js__["e" /* reducer */])(this.state.gridState, action);
                    this.setState({
                        gridState,
                        data: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__index_js__["f" /* selectGridData */])(gridState, this.state.originalData)
                    });
                    break;
                }

            default:
                this.setState({
                    gridState: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__index_js__["e" /* reducer */])(this.state.gridState, action)
                });
                break;
        }
    }

    render({}, { gridState, data }) {
        return __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(
                'h2',
                null,
                'Grid example'
            ),
            __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(TrackedGrid, {
                viewportWidth: 600,
                viewportHeight: 360,
                headerHeight: 60,
                rowHeight: 30,
                columnComponent: undefined,
                rowComponent: undefined,
                state: gridState,
                data: data,
                callback: this.callback
            })
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Viewport;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_js__ = __webpack_require__(11);



const TrackedList = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index_js__["a" /* withScrollProps */])(__WEBPACK_IMPORTED_MODULE_1__index_js__["b" /* List */]);

const columns = [{
    name: 'col1',
    width: 100
}, {
    name: 'col2',
    width: 150
}, {
    name: 'col3',
    width: 200
}];

const data = Array(100000).fill(0).map((item, index) => ({
    col1: index,
    col2: `Title ${index}`,
    col3: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
}));

const Row = ({ datum, index }) => __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(__WEBPACK_IMPORTED_MODULE_1__index_js__["c" /* DefaultRow */], { state: {}, columns: columns, datum: datum, index: index });

/* harmony default export */ __webpack_exports__["a"] = () => __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(
        'h2',
        null,
        'List example'
    ),
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(TrackedList, {
        viewportWidth: 600,
        viewportHeight: 360,
        rowHeight: 30,
        data: data,
        component: Row
    })
);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inferno_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_index_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__List_index_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DefaultColumn_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DefaultRow_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hoc_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_index_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actionCreators_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__params_js__ = __webpack_require__(3);











const defaultState = {};

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils_index_js__["a" /* compose */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__hoc_index_js__["e" /* withPropsOnChange */])(['state'], ({ state }) => ({
    columns: state.columns,
    columnState: state.columnState || defaultState,
    rowState: state.rowState || defaultState
})), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__hoc_index_js__["e" /* withPropsOnChange */])(['columns'], ({ columns }) => ({
    columns: columns.map(column => Object.assign({}, column, {
        width: column.width || column.minWidth || __WEBPACK_IMPORTED_MODULE_9__params_js__["b" /* defaultMinWidth */]
    }))
})), __WEBPACK_IMPORTED_MODULE_6__hoc_index_js__["f" /* withPinnableColumns */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__hoc_index_js__["e" /* withPropsOnChange */])(['columns'], ({ columns }) => ({
    tableWidth: columns.reduce((acc, item) => acc + item.width, 0)
})), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__hoc_index_js__["e" /* withPropsOnChange */])(['columnState', 'callback', 'columnComponent'], ({ columnState, callback, columnComponent: Column = __WEBPACK_IMPORTED_MODULE_4__DefaultColumn_js__["a" /* default */] }) => ({
    columnComponent: ({ column, index, ghost }) => __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(Column, { state: columnState, column: column, index: index, ghost: ghost, callback: callback })
})), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__hoc_index_js__["e" /* withPropsOnChange */])(['rowState', 'columns', 'callback', 'rowComponent'], ({ rowState, columns, callback, rowComponent: Row = __WEBPACK_IMPORTED_MODULE_5__DefaultRow_js__["a" /* default */] }) => ({
    rowComponent: ({ datum, index }) => __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(Row, { state: rowState, columns: columns, datum: datum, index: index, callback: callback })
})))(class GridWrapper extends __WEBPACK_IMPORTED_MODULE_1_inferno_component___default.a {
    constructor(props) {
        super(props);
        this.state = {
            dragging: false,
            ghost: false,
            ghostX: 0
        };
        this.onResizing = this.onResizing.bind(this);
        this.onResize = this.onResize.bind(this);
        this.onMoving = this.onMoving.bind(this);
        this.onMove = this.onMove.bind(this);
    }

    onResizing(name, ghostPosition) {
        if (name !== this.state.resizingName || ghostPosition !== this.state.ghostX) {
            this.setState({
                dragging: true,
                ghost: true,
                resizingName: name,
                ghostX: ghostPosition
            });
            this.props.callback(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__actionCreators_js__["d" /* moveResizeGhost */])(name, ghostPosition));
        }
    }

    onResize(name, columnWidth) {
        this.setState({
            dragging: false,
            ghost: false
        });
        this.props.callback(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__actionCreators_js__["e" /* resizeColumn */])(name, columnWidth));
    }

    onMoving(name, left, right) {
        if (name !== this.state.movingName || left !== this.state.movingLeft || right !== this.state.movingRight) {
            this.setState({
                dragging: true,
                movingName: name,
                movingLeft: left,
                movingRight: right
            });
            this.props.callback(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__actionCreators_js__["f" /* markMoveDest */])(name, left, right));
        }
    }

    onMove(name, left, right) {
        this.setState({
            dragging: false,
            movingName: null,
            movingLeft: null,
            movingRight: null
        });
        this.props.callback(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__actionCreators_js__["g" /* moveColumn */])(name, left, right));
    }

    render(props, { dragging, ghost, ghostX }) {
        return __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(
            'div',
            { style: {
                    position: 'relative',
                    flexShrink: 0,
                    pointerEvents: dragging ? 'none' : '',
                    userSelect: dragging ? 'none' : '',
                    width: props.tableWidth
                } },
            Boolean(props.headerHeight) && __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(
                'div',
                { style: { position: 'sticky', zIndex: __WEBPACK_IMPORTED_MODULE_9__params_js__["f" /* headerZindex */], top: 0, height: props.headerHeight } },
                __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(__WEBPACK_IMPORTED_MODULE_2__Header_index_js__["a" /* default */], {
                    columns: props.columns,
                    component: props.columnComponent,
                    onMove: this.onMove,
                    onMoving: this.onMoving,
                    onResize: this.onResize,
                    onResizing: this.onResizing })
            ),
            __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(__WEBPACK_IMPORTED_MODULE_3__List_index_js__["a" /* default */], {
                data: props.data,
                scrollTop: props.scrollTop - props.headerHeight,
                viewportHeight: props.viewportHeight - props.headerHeight,
                rowHeight: props.rowHeight,
                component: props.rowComponent }),
            ghost && __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(__WEBPACK_IMPORTED_MODULE_2__Header_index_js__["b" /* ResizeGhost */], { x: ghostX })
        );
    }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);


/* harmony default export */ __webpack_exports__["a"] = ({ x, children }) => __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(
    'div',
    { style: { position: 'absolute', left: 0, top: 0, bottom: 0, transform: `translateX(${x}px)` } },
    children
);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);


/* harmony default export */ __webpack_exports__["a"] = ({ column, index, ghost, component: Column, callback }) => __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(
    'div',
    { style: { width: column.width } },
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(Column, { column: column, index: index, ghost: ghost, callback: callback })
);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);


/* harmony default export */ __webpack_exports__["a"] = ({ children }) => __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(
    'div',
    { style: { display: 'flex', position: 'relative', height: 'inherit' } },
    children
);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hoc_index_js__ = __webpack_require__(2);



const minOffset = 3;

const Draggable = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__hoc_index_js__["b" /* withHandlers */])({
    onMouseDown: (props, downEvent) => {
        const elementX = downEvent.currentTarget.getBoundingClientRect().left;
        const start = downEvent.clientX - elementX;
        let moved = false;
        const onMouseMove = moveEvent => {
            const pos = moveEvent.clientX - elementX;
            if (Math.abs(pos - start) > minOffset || moved) {
                moved = true;
                props.onDrag(moveEvent, pos);
            }
        };
        const onMouseUp = upEvent => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            const pos = upEvent.clientX - elementX;
            if (Math.abs(pos - start) > minOffset || moved) {
                props.onEnd(upEvent, upEvent.clientX - elementX);
            }
        };
        props.onStart(downEvent, start);
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }
})(props => __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(
    'div',
    { onMouseDown: props.onMouseDown, style: { position: 'relative' } },
    props.children
));

/* harmony default export */ __webpack_exports__["a"] = Draggable;

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inferno_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Draggable_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Resizer_js__ = __webpack_require__(22);





class DraggableColumn extends __WEBPACK_IMPORTED_MODULE_1_inferno_component___default.a {
    constructor() {
        super();
        this.refResizer = element => this.resizer = element;
        let name;
        let enabled;
        this.onStart = (e, pos) => {
            name = e.target === this.resizer ? 'resize' : 'move';
            enabled = name === 'resize' || name === 'move' && this.props.column.moving;
            this.props.onStart(name, this.props.column.name, pos);
        };
        this.onDrag = (e, pos) => enabled && this.props.onDrag(name, this.props.column.name, pos);
        this.onEnd = (e, pos) => enabled && this.props.onEnd(name, this.props.column.name, pos);
    }

    render({ children }) {
        return __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(
            __WEBPACK_IMPORTED_MODULE_2__Draggable_js__["a" /* default */],
            {
                onStart: this.onStart,
                onDrag: this.onDrag,
                onEnd: this.onEnd },
            children,
            this.props.column.resizing && __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(__WEBPACK_IMPORTED_MODULE_3__Resizer_js__["a" /* default */], { onComponentDidMount: this.refResizer })
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DraggableColumn;


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__params_js__ = __webpack_require__(3);



const ResizeGhost = ({ x }) => __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()('div', { style: {
        position: 'absolute',
        zIndex: __WEBPACK_IMPORTED_MODULE_1__params_js__["g" /* resizeGhostZindex */],
        top: 0,
        bottom: 0,
        left: 0,
        borderLeft: '1px dotted #000',
        pointerEvents: 'none',
        transform: `translateX(${x}px)`
    } });

/* harmony default export */ __webpack_exports__["a"] = ResizeGhost;

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);


/* harmony default export */ __webpack_exports__["a"] = () => __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()('div', { style: {
        position: 'absolute',
        zIndex: 2,
        top: 0,
        bottom: 0,
        right: -3,
        width: 6,
        cursor: 'col-resize'
    } });

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inferno_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_index_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Container_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ColumnGhost_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ColumnWrapper_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DraggableColumn_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ResizeGhost_js__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__ResizeGhost_js__["a"]; });










class HeaderWrapper extends __WEBPACK_IMPORTED_MODULE_1_inferno_component___default.a {
    constructor() {
        super();
        this.onStart = this.onStart.bind(this);
        this.onDrag = this.onDrag.bind(this);
        this.onEnd = this.onEnd.bind(this);
    }

    onStart(type, name, start) {
        const columns = this.props.columns;
        const currentIndex = columns.findIndex(d => d.name === name);
        const currentColumn = columns[currentIndex];
        const currentLeft = columns.slice(0, currentIndex).reduce((acc, d) => acc + d.width, 0);
        this.currentLeft = currentLeft;
        this.startMovingPosition = currentLeft - start;
        this.currentIndex = currentIndex;
        this.currentColumn = currentColumn;
    }

    onDrag(type, name, position) {
        if (type === 'resize') {
            this.props.onResizing(name, this.currentLeft + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_index_js__["d" /* trimColumnWidth */])(this.currentColumn, position));
        } else {
            const [leftIndex, rightIndex] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_index_js__["e" /* bisectColumns */])(this.props.columns, this.startMovingPosition + position);
            const leftName = leftIndex === -1 ? null : this.props.columns[leftIndex].name;
            const rightName = rightIndex === -1 ? null : this.props.columns[rightIndex].name;
            this.props.onMoving(name, leftName, rightName);
        }
        this.setState({
            position: this.startMovingPosition + position,
            moving: type === 'move'
        });
    }

    onEnd(type, name, position) {
        if (type === 'resize') {
            this.props.onResize(name, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_index_js__["d" /* trimColumnWidth */])(this.currentColumn, position));
        } else {
            const [leftIndex, rightIndex] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_index_js__["e" /* bisectColumns */])(this.props.columns, this.startMovingPosition + position);
            const leftName = leftIndex === -1 ? null : this.props.columns[leftIndex].name;
            const rightName = rightIndex === -1 ? null : this.props.columns[rightIndex].name;
            this.props.onMove(name, leftName, rightName);
        }
        this.setState({
            moving: false
        });
    }

    render({ columns, component, callback }, { moving, position }) {
        return __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(
            __WEBPACK_IMPORTED_MODULE_3__Container_js__["a" /* default */],
            null,
            columns.map((column, index) => __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(
                __WEBPACK_IMPORTED_MODULE_6__DraggableColumn_js__["a" /* default */],
                {
                    key: column.name,
                    column: column,
                    onStart: this.onStart,
                    onDrag: this.onDrag,
                    onEnd: this.onEnd },
                __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(__WEBPACK_IMPORTED_MODULE_5__ColumnWrapper_js__["a" /* default */], {
                    column: column,
                    index: index,
                    ghost: false,
                    component: component,
                    callback: callback })
            )),
            moving && __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(
                __WEBPACK_IMPORTED_MODULE_4__ColumnGhost_js__["a" /* default */],
                { x: position },
                __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(__WEBPACK_IMPORTED_MODULE_5__ColumnWrapper_js__["a" /* default */], {
                    column: this.currentColumn,
                    index: this.currentIndex,
                    ghost: true,
                    component: component })
            )
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HeaderWrapper;


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);


/* harmony default export */ __webpack_exports__["a"] = ({ height, renderedTop, children }) => __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(
    'div',
    { style: { position: 'relative', height } },
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(
        'div',
        { style: { position: 'absolute', left: 0, right: 0, top: renderedTop } },
        children
    )
);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hoc_index_js__ = __webpack_require__(2);



/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__hoc_index_js__["d" /* shouldUpdate */])((props, nextProps) => props.height !== nextProps.height || props.component !== nextProps.component || props.datum !== nextProps.datum)(({ height, datum, index, component: Row }) => __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(
    'div',
    { style: { height } },
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(Row, { datum: datum, index: index })
));

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inferno_component__);



/* harmony default export */ __webpack_exports__["a"] = test => BaseComponent => class extends __WEBPACK_IMPORTED_MODULE_1_inferno_component___default.a {
    shouldComponentUpdate(nextProps) {
        return test(this.props, nextProps);
    }

    render(props) {
        return __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(BaseComponent, props);
    }
};

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inferno_component__);



/* harmony default export */ __webpack_exports__["a"] = handlers => BaseComponent => class extends __WEBPACK_IMPORTED_MODULE_1_inferno_component___default.a {
    constructor(props) {
        super(props);
        this.handlers = Object.keys(handlers).reduce((acc, name) => {
            acc[name] = (...args) => handlers[name](this.props, ...args);
            return acc;
        }, {});
    }

    render(props) {
        return __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(BaseComponent, Object.assign({}, props, this.handlers));
    }
};

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inferno_component__);



/* harmony default export */ __webpack_exports__["a"] = reducer => BaseComponent => class extends __WEBPACK_IMPORTED_MODULE_1_inferno_component___default.a {
    constructor(props) {
        super(props);
        this.state = reducer(props);
    }

    componentWillReceiveProps(nextProps) {
        this.setState(reducer(nextProps, this.state));
    }

    render(props, state) {
        return __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(BaseComponent, Object.assign({}, props, state));
    }
};

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__withPropsOnChange_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__params_js__ = __webpack_require__(3);




/* harmony default export */ __webpack_exports__["a"] = BaseComponent => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__withPropsOnChange_js__["a" /* default */])(['columns'], ({ columns }) => ({
    leftColumns: columns.filter(column => column.pinnedLeft),
    centerColumns: columns.filter(column => !column.pinnedLeft && !column.pinnedRight),
    rightColumns: columns.filter(column => column.pinnedRight)
}))(props => __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(
    'div',
    { style: { display: 'flex' } },
    props.leftColumns.length !== 0 && __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(
        'div',
        { style: { position: 'sticky', zIndex: __WEBPACK_IMPORTED_MODULE_2__params_js__["a" /* pinnedZindex */], left: 0 } },
        __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(BaseComponent, Object.assign({}, props, { columns: props.leftColumns }))
    ),
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(BaseComponent, Object.assign({}, props, { columns: props.centerColumns })),
    props.rightColumns.length !== 0 && __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(
        'div',
        { style: { position: 'sticky', zIndex: __WEBPACK_IMPORTED_MODULE_2__params_js__["a" /* pinnedZindex */], right: 0 } },
        __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(BaseComponent, Object.assign({}, props, { columns: props.rightColumns }))
    )
));

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inferno_component__);



/* harmony default export */ __webpack_exports__["a"] = BaseComponent => class extends __WEBPACK_IMPORTED_MODULE_1_inferno_component___default.a {
    constructor(props) {
        super(props);
        this.state = {
            scrollTop: 0,
            scrollLeft: 0
        };
        this.onScroll = e => this.setState({
            scrollTop: e.target.scrollTop,
            scrollLeft: e.target.scrollLeft
        });
    }

    render(props, { scrollTop, scrollLeft }) {
        return __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(
            'div',
            { style: { width: props.viewportWidth, height: props.viewportHeight, overflow: 'auto' },
                onScroll: this.onScroll },
            __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(BaseComponent, Object.assign({}, props, { scrollTop: scrollTop, scrollLeft: scrollLeft }))
        );
    }
};

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (state = [], action) => {
    switch (action.type) {
        case 'MARK_MOVE_DEST':
            return state.map(item => {
                if (item.name === action.left) {
                    return Object.assign({}, item, {
                        moveLeft: false,
                        moveRight: true
                    });
                }
                if (item.name === action.right) {
                    return Object.assign({}, item, {
                        moveLeft: true,
                        moveRight: false
                    });
                }
                if (item.moveLeft || item.moveRight) {
                    return Object.assign({}, item, {
                        moveLeft: false,
                        moveRight: false
                    });
                }
                return item;
            });

        case 'MOVE_COLUMN':
            const columns = state.map(item => {
                if (item.moveLeft || item.moveRight) {
                    return Object.assign({}, item, {
                        moveLeft: false,
                        moveRight: false
                    });
                }
                return item;
            });
            if (action.left || action.right) {
                const index = action.left ? columns.findIndex(item => item.name === action.left) + 1 : columns.findIndex(item => item.name === action.right);
                return [...columns.slice(0, index).filter(item => item.name !== action.name), ...columns.filter(item => item.name === action.name), ...columns.slice(index).filter(item => item.name !== action.name)];
            }
            return columns;

        case 'RESIZE_COLUMN':
            return state.map(item => {
                if (item.name === action.name) {
                    return Object.assign({}, item, {
                        width: action.size
                    });
                }
                return item;
            });

        case 'FILTER_COLUMN':
            return state.map(item => {
                if (item.name === action.name) {
                    return Object.assign({}, item, {
                        value: action.value
                    });
                }
                return item;
            });

        case 'SORT_COLUMN':
            return state.map(item => {
                if (item.name === action.name) {
                    return Object.assign({}, item, {
                        sort: !item.sort && 'asc' || item.sort === 'asc' && 'desc' || item.sort === 'desc' && null
                    });
                }
                if (item.sort) {
                    return Object.assign({}, item, {
                        sort: null
                    });
                }
                return item;
            });

        default:
            return state;
    }
};

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__columns_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rowState_js__ = __webpack_require__(33);



/* harmony default export */ __webpack_exports__["a"] = (state = {}, action) => Object.assign({}, state, {
    columns: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__columns_js__["a" /* default */])(state.columns, action),
    rowState: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__rowState_js__["a" /* default */])(state.rowState, action)
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (state = {}, action) => {
    switch (action.type) {
        case 'SELECT_ROW':
            return Object.assign({}, state, {
                selectedIndex: action.rowIndex
            });

        default:
            return state;
    }
};

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (columns, position) => {
    if (columns.length < 2) {
        return [-1, 0];
    }
    let last = 0;
    return columns.reduce((acc, { width }, index) => {
        const left = last;
        const relative = position - left;
        const half = width / 2;
        last = left + width;
        if (index === 0 && relative < half) {
            return [-1, index];
        }
        if (index === columns.length - 1 && half <= relative) {
            return [index, -1];
        }
        if (half <= relative && relative <= width) {
            return [index, index + 1];
        }
        if (0 <= relative && relative <= half) {
            return [index - 1, index];
        }
        return acc;
    }, []);
};

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
function compose(...funcs) {
    if (funcs.length === 0) {
        return arg => arg;
    }

    if (funcs.length === 1) {
        return funcs[0];
    }

    return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const empty = () => Object.create(null);

const invert = obj => Object.keys(obj).reduce((acc, key) => (acc[obj[key]] = key, acc), empty());

const createFreeKeyGenerator = indexes => {
    let lastPointer = 0;
    return () => {
        while (true) {
            const key = `key_${lastPointer}`;
            lastPointer += 1;
            if (!(key in indexes)) {
                return key;
            }
        }
    };
};

const getRecoveredKeys = (lastKeys, start, end) => {
    const keys = empty();
    for (let i = start; i < end + 1; i += 1) {
        if (i in lastKeys) {
            keys[i] = lastKeys[i];
        }
    }
    return keys;
};

const generateKeys = (lastKeys, start, end) => {
    const keys = empty();
    const generateKey = createFreeKeyGenerator(invert(lastKeys));
    for (let i = start; i < end + 1; i += 1) {
        if (!(i in lastKeys)) {
            keys[i] = generateKey();
        }
    }
    return keys;
};

/* harmony default export */ __webpack_exports__["a"] = (lastKeys = empty(), start, end) => {
    const recovered = getRecoveredKeys(lastKeys, start, end);
    const generated = generateKeys(recovered, start, end);
    return Object.assign(empty(), recovered, generated);
};

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({ scrollTop, viewportHeight, rowHeight, rowsCount }) => {
    const clusterSize = Math.ceil(viewportHeight / rowHeight);
    const topCluster = Math.floor(Math.floor(Math.max(0, scrollTop) / rowHeight) / clusterSize);
    const end = Math.min(rowsCount, (topCluster + 2) * clusterSize);
    // count of visible rows is always the same then focus never be lost
    const start = Math.max(0, end - clusterSize * 2);
    return [start, end];
};

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const filterRowByColumns = (row, columns) => columns.every(column => row[column.name].toLowerCase().indexOf(column.value) !== -1);

const sortRowsByColumns = (a, b, column) => {
    if (a[column.name] === b[column.name]) {
        return 0;
    }
    if (column.sort === 'asc') {
        return a[column.name] < b[column.name] ? -1 : 1;
    }
    return a[column.name] > b[column.name] ? -1 : 1;
};

/* harmony default export */ __webpack_exports__["a"] = (gridState, data) => {
    const filteredColumns = gridState.columns.filter(column => column.value);
    const sortedColumn = gridState.columns.find(column => column.sort === 'asc' || column.sort === 'desc');
    const filtered = filteredColumns.length ? data.filter(datum => filterRowByColumns(datum, filteredColumns)) : data;
    const sorted = sortedColumn ? filtered.slice().sort((a, b) => sortRowsByColumns(a, b, sortedColumn)) : filtered;
    return sorted;
};

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__params_js__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = (column, width) => Math.min(Math.max(column.minWidth || __WEBPACK_IMPORTED_MODULE_0__params_js__["b" /* defaultMinWidth */], width), column.maxWidth || Infinity);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/*!
 * inferno-component v1.2.2
 * (c) 2017 Dominic Gannaway
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory(__webpack_require__(5)) :
	typeof define === 'function' && define.amd ? define(['inferno'], factory) :
	(global.Inferno = global.Inferno || {}, global.Inferno.Component = factory(global.Inferno));
}(this, (function (inferno) { 'use strict';

var ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';
var isBrowser = typeof window !== 'undefined' && window.document;

// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though
var isArray = Array.isArray;

function isStringOrNumber(obj) {
    var type = typeof obj;
    return type === 'string' || type === 'number';
}
function isNullOrUndef(obj) {
    return isUndefined(obj) || isNull(obj);
}
function isInvalid(obj) {
    return isNull(obj) || obj === false || isTrue(obj) || isUndefined(obj);
}
function isFunction(obj) {
    return typeof obj === 'function';
}



function isNull(obj) {
    return obj === null;
}
function isTrue(obj) {
    return obj === true;
}
function isUndefined(obj) {
    return obj === undefined;
}

function throwError(message) {
    if (!message) {
        message = ERROR_MSG;
    }
    throw new Error(("Inferno Error: " + message));
}

var Lifecycle = function Lifecycle() {
    this.listeners = [];
    this.fastUnmount = true;
};
Lifecycle.prototype.addListener = function addListener (callback) {
    this.listeners.push(callback);
};
Lifecycle.prototype.trigger = function trigger () {
        var this$1 = this;

    for (var i = 0; i < this.listeners.length; i++) {
        this$1.listeners[i]();
    }
};

var noOp = ERROR_MSG;
if (process.env.NODE_ENV !== 'production') {
    noOp = 'Inferno Error: Can only update a mounted or mounting component. This usually means you called setState() or forceUpdate() on an unmounted component. This is a no-op.';
}
var componentCallbackQueue = new Map();
// when a components root VNode is also a component, we can run into issues
// this will recursively look for vNode.parentNode if the VNode is a component
function updateParentComponentVNodes(vNode, dom) {
    if (vNode.flags & 28 /* Component */) {
        var parentVNode = vNode.parentVNode;
        if (parentVNode) {
            parentVNode.dom = dom;
            updateParentComponentVNodes(parentVNode, dom);
        }
    }
}
// this is in shapes too, but we don't want to import from shapes as it will pull in a duplicate of createVNode
function createVoidVNode() {
    return inferno.createVNode(4096 /* Void */);
}
function createTextVNode(text) {
    return inferno.createVNode(1 /* Text */, null, null, text);
}
function addToQueue(component, force, callback) {
    // TODO this function needs to be revised and improved on
    var queue = componentCallbackQueue.get(component);
    if (!queue) {
        queue = [];
        componentCallbackQueue.set(component, queue);
        Promise.resolve().then(function () {
            componentCallbackQueue.delete(component);
            applyState(component, force, function () {
                for (var i = 0; i < queue.length; i++) {
                    queue[i]();
                }
            });
        });
    }
    if (callback) {
        queue.push(callback);
    }
}
function queueStateChanges(component, newState, callback, sync) {
    if (isFunction(newState)) {
        newState = newState(component.state, component.props, component.context);
    }
    for (var stateKey in newState) {
        component._pendingState[stateKey] = newState[stateKey];
    }
    if (!component._pendingSetState && isBrowser) {
        if (sync || component._blockRender) {
            component._pendingSetState = true;
            applyState(component, false, callback);
        }
        else {
            addToQueue(component, false, callback);
        }
    }
    else {
        component.state = Object.assign({}, component.state, component._pendingState);
        component._pendingState = {};
    }
}
function applyState(component, force, callback) {
    if ((!component._deferSetState || force) && !component._blockRender && !component._unmounted) {
        component._pendingSetState = false;
        var pendingState = component._pendingState;
        var prevState = component.state;
        var nextState = Object.assign({}, prevState, pendingState);
        var props = component.props;
        var context = component.context;
        component._pendingState = {};
        var nextInput = component._updateComponent(prevState, nextState, props, props, context, force, true);
        var didUpdate = true;
        if (isInvalid(nextInput)) {
            nextInput = createVoidVNode();
        }
        else if (nextInput === inferno.NO_OP) {
            nextInput = component._lastInput;
            didUpdate = false;
        }
        else if (isStringOrNumber(nextInput)) {
            nextInput = createTextVNode(nextInput);
        }
        else if (isArray(nextInput)) {
            if (process.env.NODE_ENV !== 'production') {
                throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
            }
            throwError();
        }
        var lastInput = component._lastInput;
        var vNode = component._vNode;
        var parentDom = (lastInput.dom && lastInput.dom.parentNode) || (lastInput.dom = vNode.dom);
        component._lastInput = nextInput;
        if (didUpdate) {
            var subLifecycle = component._lifecycle;
            if (!subLifecycle) {
                subLifecycle = new Lifecycle();
            }
            else {
                subLifecycle.listeners = [];
            }
            component._lifecycle = subLifecycle;
            var childContext = component.getChildContext();
            if (!isNullOrUndef(childContext)) {
                childContext = Object.assign({}, context, component._childContext, childContext);
            }
            else {
                childContext = Object.assign({}, context, component._childContext);
            }
            component._patch(lastInput, nextInput, parentDom, subLifecycle, childContext, component._isSVG, false);
            subLifecycle.trigger();
            component.componentDidUpdate(props, prevState);
            inferno.options.afterUpdate && inferno.options.afterUpdate(vNode);
        }
        var dom = vNode.dom = nextInput.dom;
        var componentToDOMNodeMap = component._componentToDOMNodeMap;
        componentToDOMNodeMap && componentToDOMNodeMap.set(component, nextInput.dom);
        updateParentComponentVNodes(vNode, dom);
        if (!isNullOrUndef(callback)) {
            callback();
        }
    }
    else if (!isNullOrUndef(callback)) {
        callback();
    }
}
var Component$1 = function Component(props, context) {
    this.state = {};
    this.refs = {};
    this._blockRender = false;
    this._ignoreSetState = false;
    this._blockSetState = false;
    this._deferSetState = false;
    this._pendingSetState = false;
    this._pendingState = {};
    this._lastInput = null;
    this._vNode = null;
    this._unmounted = true;
    this._lifecycle = null;
    this._childContext = null;
    this._patch = null;
    this._isSVG = false;
    this._componentToDOMNodeMap = null;
    /** @type {object} */
    this.props = props || inferno.EMPTY_OBJ;
    /** @type {object} */
    this.context = context || {};
};
Component$1.prototype.render = function render (nextProps, nextState, nextContext) {
};
Component$1.prototype.forceUpdate = function forceUpdate (callback) {
    if (this._unmounted) {
        return;
    }
    isBrowser && applyState(this, true, callback);
};
Component$1.prototype.setState = function setState (newState, callback) {
    if (this._unmounted) {
        return;
    }
    if (!this._blockSetState) {
        if (!this._ignoreSetState) {
            queueStateChanges(this, newState, callback, false);
        }
    }
    else {
        if (process.env.NODE_ENV !== 'production') {
            throwError('cannot update state via setState() in componentWillUpdate().');
        }
        throwError();
    }
};
Component$1.prototype.setStateSync = function setStateSync (newState) {
    if (this._unmounted) {
        return;
    }
    if (!this._blockSetState) {
        if (!this._ignoreSetState) {
            queueStateChanges(this, newState, null, true);
        }
    }
    else {
        if (process.env.NODE_ENV !== 'production') {
            throwError('cannot update state via setState() in componentWillUpdate().');
        }
        throwError();
    }
};
Component$1.prototype.componentWillMount = function componentWillMount () {
};
Component$1.prototype.componentDidUpdate = function componentDidUpdate (prevProps, prevState, prevContext) {
};
Component$1.prototype.shouldComponentUpdate = function shouldComponentUpdate (nextProps, nextState, context) {
    return true;
};
Component$1.prototype.componentWillReceiveProps = function componentWillReceiveProps (nextProps, context) {
};
Component$1.prototype.componentWillUpdate = function componentWillUpdate (nextProps, nextState, nextContext) {
};
Component$1.prototype.getChildContext = function getChildContext () {
};
Component$1.prototype._updateComponent = function _updateComponent (prevState, nextState, prevProps, nextProps, context, force, fromSetState) {
    if (this._unmounted === true) {
        if (process.env.NODE_ENV !== 'production') {
            throwError(noOp);
        }
        throwError();
    }
    if ((prevProps !== nextProps || nextProps === inferno.EMPTY_OBJ) || prevState !== nextState || force) {
        if (prevProps !== nextProps || nextProps === inferno.EMPTY_OBJ) {
            if (!fromSetState) {
                this._blockRender = true;
                this.componentWillReceiveProps(nextProps, context);
                this._blockRender = false;
            }
            if (this._pendingSetState) {
                nextState = Object.assign({}, nextState, this._pendingState);
                this._pendingSetState = false;
                this._pendingState = {};
            }
        }
        var shouldUpdate = this.shouldComponentUpdate(nextProps, nextState, context);
        if (shouldUpdate !== false || force) {
            this._blockSetState = true;
            this.componentWillUpdate(nextProps, nextState, context);
            this._blockSetState = false;
            this.props = nextProps;
            var state = this.state = nextState;
            this.context = context;
            inferno.options.beforeRender && inferno.options.beforeRender(this);
            var render = this.render(nextProps, state, context);
            inferno.options.afterRender && inferno.options.afterRender(this);
            return render;
        }
    }
    return inferno.NO_OP;
};

return Component$1;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * inferno-create-element v1.2.2
 * (c) 2017 Dominic Gannaway
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory(__webpack_require__(5)) :
	typeof define === 'function' && define.amd ? define(['inferno'], factory) :
	(global.Inferno = global.Inferno || {}, global.Inferno.createElement = factory(global.Inferno));
}(this, (function (inferno) { 'use strict';

// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though

function isStatefulComponent(o) {
    return !isUndefined(o.prototype) && !isUndefined(o.prototype.render);
}

function isNullOrUndef(obj) {
    return isUndefined(obj) || isNull(obj);
}
function isInvalid(obj) {
    return isNull(obj) || obj === false || isTrue(obj) || isUndefined(obj);
}

function isAttrAnEvent(attr) {
    return attr[0] === 'o' && attr[1] === 'n' && attr.length > 3;
}
function isString(obj) {
    return typeof obj === 'string';
}

function isNull(obj) {
    return obj === null;
}
function isTrue(obj) {
    return obj === true;
}
function isUndefined(obj) {
    return obj === undefined;
}
function isObject(o) {
    return typeof o === 'object';
}

var componentHooks = {
    onComponentWillMount: true,
    onComponentDidMount: true,
    onComponentWillUnmount: true,
    onComponentShouldUpdate: true,
    onComponentWillUpdate: true,
    onComponentDidUpdate: true
};
function createElement$1(name, props) {
    var _children = [], len = arguments.length - 2;
    while ( len-- > 0 ) _children[ len ] = arguments[ len + 2 ];

    if (isInvalid(name) || isObject(name)) {
        throw new Error('Inferno Error: createElement() name parameter cannot be undefined, null, false or true, It must be a string, class or function.');
    }
    var children = _children;
    var ref = null;
    var key = null;
    var events = null;
    var flags = 0;
    if (_children) {
        if (_children.length === 1) {
            children = _children[0];
        }
        else if (_children.length === 0) {
            children = undefined;
        }
    }
    if (isString(name)) {
        flags = 2 /* HtmlElement */;
        switch (name) {
            case 'svg':
                flags = 128 /* SvgElement */;
                break;
            case 'input':
                flags = 512 /* InputElement */;
                break;
            case 'textarea':
                flags = 1024 /* TextareaElement */;
                break;
            case 'select':
                flags = 2048 /* SelectElement */;
                break;
            default:
        }
        /*
         This fixes de-optimisation:
         uses object Keys for looping props to avoid deleting props of looped object
         */
        if (!isNullOrUndef(props)) {
            var propKeys = Object.keys(props);
            for (var i = 0; i < propKeys.length; i++) {
                var propKey = propKeys[i];
                if (propKey === 'key') {
                    key = props.key;
                    delete props.key;
                }
                else if (propKey === 'children' && isUndefined(children)) {
                    children = props.children; // always favour children args, default to props
                }
                else if (propKey === 'ref') {
                    ref = props.ref;
                }
                else if (isAttrAnEvent(propKey)) {
                    if (!events) {
                        events = {};
                    }
                    events[propKey] = props[propKey];
                    delete props[propKey];
                }
            }
        }
    }
    else {
        flags = isStatefulComponent(name) ? 4 /* ComponentClass */ : 8 /* ComponentFunction */;
        if (!isUndefined(children)) {
            if (!props) {
                props = {};
            }
            props.children = children;
            children = null;
        }
        if (!isNullOrUndef(props)) {
            /*
             This fixes de-optimisation:
             uses object Keys for looping props to avoid deleting props of looped object
             */
            var propKeys$1 = Object.keys(props);
            for (var i$1 = 0; i$1 < propKeys$1.length; i$1++) {
                var propKey$1 = propKeys$1[i$1];
                if (componentHooks[propKey$1]) {
                    if (!ref) {
                        ref = {};
                    }
                    ref[propKey$1] = props[propKey$1];
                }
                else if (propKey$1 === 'key') {
                    key = props.key;
                    delete props.key;
                }
            }
        }
    }
    return inferno.createVNode(flags, name, props, children, events, key, ref);
}

return createElement$1;

})));


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/*!
 * inferno v1.2.2
 * (c) 2017 Dominic Gannaway
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.Inferno = global.Inferno || {})));
}(this, (function (exports) { 'use strict';

var NO_OP = '$NO_OP';
var ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';
var isBrowser = typeof window !== 'undefined' && window.document;

// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though
var isArray = Array.isArray;
function isStatefulComponent(o) {
    return !isUndefined(o.prototype) && !isUndefined(o.prototype.render);
}
function isStringOrNumber(obj) {
    var type = typeof obj;
    return type === 'string' || type === 'number';
}
function isNullOrUndef(obj) {
    return isUndefined(obj) || isNull(obj);
}
function isInvalid(obj) {
    return isNull(obj) || obj === false || isTrue(obj) || isUndefined(obj);
}
function isFunction(obj) {
    return typeof obj === 'function';
}
function isAttrAnEvent(attr) {
    return attr[0] === 'o' && attr[1] === 'n' && attr.length > 3;
}
function isString(obj) {
    return typeof obj === 'string';
}
function isNumber(obj) {
    return typeof obj === 'number';
}
function isNull(obj) {
    return obj === null;
}
function isTrue(obj) {
    return obj === true;
}
function isUndefined(obj) {
    return obj === undefined;
}
function isObject(o) {
    return typeof o === 'object';
}
function throwError(message) {
    if (!message) {
        message = ERROR_MSG;
    }
    throw new Error(("Inferno Error: " + message));
}
function warning(message) {
    console.warn(message);
}
var EMPTY_OBJ = {};

function applyKey(key, vNode) {
    vNode.key = key;
    return vNode;
}
function applyKeyIfMissing(key, vNode) {
    if (isNumber(key)) {
        key = "." + key;
    }
    if (isNull(vNode.key) || vNode.key[0] === '.') {
        return applyKey(key, vNode);
    }
    return vNode;
}
function applyKeyPrefix(key, vNode) {
    vNode.key = key + vNode.key;
    return vNode;
}
function _normalizeVNodes(nodes, result, index, currentKey) {
    for (; index < nodes.length; index++) {
        var n = nodes[index];
        var key = currentKey + "." + index;
        if (!isInvalid(n)) {
            if (isArray(n)) {
                _normalizeVNodes(n, result, 0, key);
            }
            else {
                if (isStringOrNumber(n)) {
                    n = createTextVNode(n);
                }
                else if (isVNode(n) && n.dom || (n.key && n.key[0] === '.')) {
                    n = cloneVNode(n);
                }
                if (isNull(n.key) || n.key[0] === '.') {
                    n = applyKey(key, n);
                }
                else {
                    n = applyKeyPrefix(currentKey, n);
                }
                result.push(n);
            }
        }
    }
}
function normalizeVNodes(nodes) {
    var newNodes;
    // we assign $ which basically means we've flagged this array for future note
    // if it comes back again, we need to clone it, as people are using it
    // in an immutable way
    // tslint:disable
    if (nodes['$']) {
        nodes = nodes.slice();
    }
    else {
        nodes['$'] = true;
    }
    // tslint:enable
    for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        if (isInvalid(n) || isArray(n)) {
            var result = (newNodes || nodes).slice(0, i);
            _normalizeVNodes(nodes, result, i, "");
            return result;
        }
        else if (isStringOrNumber(n)) {
            if (!newNodes) {
                newNodes = nodes.slice(0, i);
            }
            newNodes.push(applyKeyIfMissing(i, createTextVNode(n)));
        }
        else if ((isVNode(n) && n.dom) || (isNull(n.key) && !(n.flags & 64 /* HasNonKeyedChildren */))) {
            if (!newNodes) {
                newNodes = nodes.slice(0, i);
            }
            newNodes.push(applyKeyIfMissing(i, cloneVNode(n)));
        }
        else if (newNodes) {
            newNodes.push(applyKeyIfMissing(i, cloneVNode(n)));
        }
    }
    return newNodes || nodes;
}
function normalizeChildren(children) {
    if (isArray(children)) {
        return normalizeVNodes(children);
    }
    else if (isVNode(children) && children.dom) {
        return cloneVNode(children);
    }
    return children;
}
function normalizeProps(vNode, props, children) {
    if (!(vNode.flags & 28 /* Component */) && isNullOrUndef(children) && !isNullOrUndef(props.children)) {
        vNode.children = props.children;
    }
    if (props.ref) {
        vNode.ref = props.ref;
        delete props.ref;
    }
    if (props.events) {
        vNode.events = props.events;
    }
    if (!isNullOrUndef(props.key)) {
        vNode.key = props.key;
        delete props.key;
    }
}
function copyPropsTo(copyFrom, copyTo) {
    for (var prop in copyFrom) {
        if (isUndefined(copyTo[prop])) {
            copyTo[prop] = copyFrom[prop];
        }
    }
}
function normalizeElement(type, vNode) {
    if (type === 'svg') {
        vNode.flags = 128 /* SvgElement */;
    }
    else if (type === 'input') {
        vNode.flags = 512 /* InputElement */;
    }
    else if (type === 'select') {
        vNode.flags = 2048 /* SelectElement */;
    }
    else if (type === 'textarea') {
        vNode.flags = 1024 /* TextareaElement */;
    }
    else if (type === 'media') {
        vNode.flags = 256 /* MediaElement */;
    }
    else {
        vNode.flags = 2 /* HtmlElement */;
    }
}
function normalize(vNode) {
    var props = vNode.props;
    var hasProps = !isNull(props);
    var type = vNode.type;
    var children = vNode.children;
    // convert a wrongly created type back to element
    if (isString(type) && (vNode.flags & 28 /* Component */)) {
        normalizeElement(type, vNode);
        if (hasProps && props.children) {
            vNode.children = props.children;
            children = props.children;
        }
    }
    if (hasProps) {
        normalizeProps(vNode, props, children);
    }
    if (!isInvalid(children)) {
        vNode.children = normalizeChildren(children);
    }
    if (hasProps && !isInvalid(props.children)) {
        props.children = normalizeChildren(props.children);
    }
    if (process.env.NODE_ENV !== 'production') {
        // This code will be stripped out from production CODE
        // It will help users to track errors in their applications.
        var verifyKeys = function (vNodes) {
            var keyValues = vNodes.map(function (vnode) { return vnode.key; });
            keyValues.some(function (item, idx) {
                var hasDuplicate = keyValues.indexOf(item) !== idx;
                if (hasDuplicate) {
                    warning('Inferno normalisation(...): Encountered two children with same key, all keys must be unique within its siblings. Duplicated key is:' + item);
                }
                return hasDuplicate;
            });
        };
        if (vNode.children && Array.isArray(vNode.children)) {
            verifyKeys(vNode.children);
        }
    }
}

var options = {
    recyclingEnabled: true,
    findDOMNodeEnabled: false,
    roots: null,
    createVNode: null,
    beforeRender: null,
    afterRender: null,
    afterMount: null,
    afterUpdate: null,
    beforeUnmount: null
};

function createVNode(flags, type, props, children, events, key, ref, noNormalise) {
    if (flags & 16 /* ComponentUnknown */) {
        flags = isStatefulComponent(type) ? 4 /* ComponentClass */ : 8 /* ComponentFunction */;
    }
    var vNode = {
        children: isUndefined(children) ? null : children,
        dom: null,
        events: events || null,
        flags: flags,
        key: isUndefined(key) ? null : key,
        props: props || null,
        ref: ref || null,
        type: type
    };
    if (!noNormalise) {
        normalize(vNode);
    }
    if (options.createVNode) {
        options.createVNode(vNode);
    }
    return vNode;
}
function cloneVNode(vNodeToClone, props) {
    var _children = [], len = arguments.length - 2;
    while ( len-- > 0 ) _children[ len ] = arguments[ len + 2 ];

    var children = _children;
    if (_children.length > 0 && !isNull(_children[0])) {
        if (!props) {
            props = {};
        }
        if (_children.length === 1) {
            children = _children[0];
        }
        if (isUndefined(props.children)) {
            props.children = children;
        }
        else {
            if (isArray(children)) {
                if (isArray(props.children)) {
                    props.children = props.children.concat(children);
                }
                else {
                    props.children = [props.children].concat(children);
                }
            }
            else {
                if (isArray(props.children)) {
                    props.children.push(children);
                }
                else {
                    props.children = [props.children];
                    props.children.push(children);
                }
            }
        }
    }
    children = null;
    var newVNode;
    if (isArray(vNodeToClone)) {
        var tmpArray = [];
        for (var i = 0; i < vNodeToClone.length; i++) {
            tmpArray.push(cloneVNode(vNodeToClone[i]));
        }
        newVNode = tmpArray;
    }
    else {
        var flags = vNodeToClone.flags;
        var events = vNodeToClone.events || (props && props.events) || null;
        var key = !isNullOrUndef(vNodeToClone.key) ? vNodeToClone.key : (props ? props.key : null);
        var ref = vNodeToClone.ref || (props ? props.ref : null);
        if (flags & 28 /* Component */) {
            newVNode = createVNode(flags, vNodeToClone.type, Object.assign({}, vNodeToClone.props, props), null, events, key, ref, true);
            var newProps = newVNode.props;
            if (newProps) {
                var newChildren = newProps.children;
                // we need to also clone component children that are in props
                // as the children may also have been hoisted
                if (newChildren) {
                    if (isArray(newChildren)) {
                        for (var i$1 = 0; i$1 < newChildren.length; i$1++) {
                            var child = newChildren[i$1];
                            if (!isInvalid(child) && isVNode(child)) {
                                newProps.children[i$1] = cloneVNode(child);
                            }
                        }
                    }
                    else if (isVNode(newChildren)) {
                        newProps.children = cloneVNode(newChildren);
                    }
                }
            }
            newVNode.children = null;
        }
        else if (flags & 3970 /* Element */) {
            children = (props && props.children) || vNodeToClone.children;
            newVNode = createVNode(flags, vNodeToClone.type, Object.assign({}, vNodeToClone.props, props), children, events, key, ref, !children);
        }
        else if (flags & 1 /* Text */) {
            newVNode = createTextVNode(vNodeToClone.children);
        }
    }
    return newVNode;
}
function createVoidVNode() {
    return createVNode(4096 /* Void */);
}
function createTextVNode(text) {
    return createVNode(1 /* Text */, null, null, text, null, null, null, true);
}
function isVNode(o) {
    return !!o.flags;
}

function constructDefaults(string, object, value) {
    /* eslint no-return-assign: 0 */
    string.split(',').forEach(function (i) { return object[i] = value; });
}
var xlinkNS = 'http://www.w3.org/1999/xlink';
var xmlNS = 'http://www.w3.org/XML/1998/namespace';
var svgNS = 'http://www.w3.org/2000/svg';
var strictProps = {};
var booleanProps = {};
var namespaces = {};
var isUnitlessNumber = {};
var skipProps = {};
var dehyphenProps = {
    httpEquiv: 'http-equiv',
    acceptCharset: 'accept-charset'
};
var probablyKebabProps = /^(accentH|arabicF|capH|font[FSVW]|glyph[NO]|horiz[AO]|panose1|renderingI|strikethrough[PT]|underline[PT]|v[AHIM]|vert[AO]|xH|alignmentB|baselineS|clip[PR]|color[IPR]|dominantB|enableB|fill[OR]|flood[COF]|imageR|letterS|lightingC|marker[EMS]|pointerE|shapeR|stop[CO]|stroke[DLMOW]|text[ADR]|unicodeB|wordS|writingM).*/;
function kebabize(str, smallLetter, largeLetter) {
    return (smallLetter + "-" + (largeLetter.toLowerCase()));
}
var delegatedProps = {};
constructDefaults('xlink:href,xlink:arcrole,xlink:actuate,xlink:role,xlink:titlef,xlink:type', namespaces, xlinkNS);
constructDefaults('xml:base,xml:lang,xml:space', namespaces, xmlNS);
constructDefaults('volume,defaultValue,defaultChecked', strictProps, true);
constructDefaults('children,childrenType,ref,key,selected,checked,multiple', skipProps, true);
constructDefaults('onClick,onMouseDown,onMouseUp,onMouseMove,onSubmit,onDblClick,onKeyDown,onKeyUp,onKeyPress', delegatedProps, true);
constructDefaults('muted,scoped,loop,open,checked,default,capture,disabled,readOnly,required,autoplay,controls,seamless,reversed,allowfullscreen,novalidate,hidden', booleanProps, true);
constructDefaults('animationIterationCount,borderImageOutset,borderImageSlice,borderImageWidth,boxFlex,boxFlexGroup,boxOrdinalGroup,columnCount,flex,flexGrow,flexPositive,flexShrink,flexNegative,flexOrder,gridRow,gridColumn,fontWeight,lineClamp,lineHeight,opacity,order,orphans,tabSize,widows,zIndex,zoom,fillOpacity,floodOpacity,stopOpacity,strokeDasharray,strokeDashoffset,strokeMiterlimit,strokeOpacity,strokeWidth,', isUnitlessNumber, true);

var Lifecycle = function Lifecycle() {
    this.listeners = [];
    this.fastUnmount = true;
};
Lifecycle.prototype.addListener = function addListener (callback) {
    this.listeners.push(callback);
};
Lifecycle.prototype.trigger = function trigger () {
        var this$1 = this;

    for (var i = 0; i < this.listeners.length; i++) {
        this$1.listeners[i]();
    }
};

var isiOS = isBrowser && !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
var delegatedEvents = new Map();
function handleEvent(name, lastEvent, nextEvent, dom) {
    var delegatedRoots = delegatedEvents.get(name);
    if (nextEvent) {
        if (!delegatedRoots) {
            delegatedRoots = { items: new Map(), count: 0, docEvent: null };
            var docEvent = attachEventToDocument(name, delegatedRoots);
            delegatedRoots.docEvent = docEvent;
            delegatedEvents.set(name, delegatedRoots);
        }
        if (!lastEvent) {
            delegatedRoots.count++;
            if (isiOS && name === 'onClick') {
                trapClickOnNonInteractiveElement(dom);
            }
        }
        delegatedRoots.items.set(dom, nextEvent);
    }
    else if (delegatedRoots) {
        if (delegatedRoots.items.has(dom)) {
            delegatedRoots.count--;
            delegatedRoots.items.delete(dom);
            if (delegatedRoots.count === 0) {
                document.removeEventListener(normalizeEventName(name), delegatedRoots.docEvent);
                delegatedEvents.delete(name);
            }
        }
    }
}
function dispatchEvent(event, dom, items, count, eventData) {
    var eventsToTrigger = items.get(dom);
    if (eventsToTrigger) {
        count--;
        // linkEvent object
        eventData.dom = dom;
        if (eventsToTrigger.event) {
            eventsToTrigger.event(eventsToTrigger.data, event);
        }
        else {
            eventsToTrigger(event);
        }
        if (eventData.stopPropagation) {
            return;
        }
    }
    if (count > 0) {
        var parentDom = dom.parentNode;
        if (parentDom || parentDom === document.body) {
            dispatchEvent(event, parentDom, items, count, eventData);
        }
    }
}
function normalizeEventName(name) {
    return name.substr(2).toLowerCase();
}
function attachEventToDocument(name, delegatedRoots) {
    var docEvent = function (event) {
        var eventData = {
            stopPropagation: false,
            dom: document
        };
        // we have to do this as some browsers recycle the same Event between calls
        // so we need to make the property configurable
        Object.defineProperty(event, 'currentTarget', {
            configurable: true,
            get: function get() {
                return eventData.dom;
            }
        });
        event.stopPropagation = function () {
            eventData.stopPropagation = true;
        };
        var count = delegatedRoots.count;
        if (count > 0) {
            dispatchEvent(event, event.target, delegatedRoots.items, count, eventData);
        }
    };
    document.addEventListener(normalizeEventName(name), docEvent);
    return docEvent;
}
function emptyFn() { }
function trapClickOnNonInteractiveElement(dom) {
    // Mobile Safari does not fire properly bubble click events on
    // non-interactive elements, which means delegated click listeners do not
    // fire. The workaround for this bug involves attaching an empty click
    // listener on the target node.
    // http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
    // Just set it using the onclick property so that we don't have to manage any
    // bookkeeping for it. Not sure if we need to clear it when the listener is
    // removed.
    // TODO: Only do this for the relevant Safaris maybe?
    dom.onclick = emptyFn;
}

var componentPools = new Map();
var elementPools = new Map();
function recycleElement(vNode, lifecycle, context, isSVG) {
    var tag = vNode.type;
    var key = vNode.key;
    var pools = elementPools.get(tag);
    if (!isUndefined(pools)) {
        var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
        if (!isUndefined(pool)) {
            var recycledVNode = pool.pop();
            if (!isUndefined(recycledVNode)) {
                patchElement(recycledVNode, vNode, null, lifecycle, context, isSVG, true);
                return vNode.dom;
            }
        }
    }
    return null;
}
function poolElement(vNode) {
    var tag = vNode.type;
    var key = vNode.key;
    var pools = elementPools.get(tag);
    if (isUndefined(pools)) {
        pools = {
            nonKeyed: [],
            keyed: new Map()
        };
        elementPools.set(tag, pools);
    }
    if (isNull(key)) {
        pools.nonKeyed.push(vNode);
    }
    else {
        var pool = pools.keyed.get(key);
        if (isUndefined(pool)) {
            pool = [];
            pools.keyed.set(key, pool);
        }
        pool.push(vNode);
    }
}
function recycleComponent(vNode, lifecycle, context, isSVG) {
    var type = vNode.type;
    var key = vNode.key;
    var pools = componentPools.get(type);
    if (!isUndefined(pools)) {
        var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
        if (!isUndefined(pool)) {
            var recycledVNode = pool.pop();
            if (!isUndefined(recycledVNode)) {
                var flags = vNode.flags;
                var failed = patchComponent(recycledVNode, vNode, null, lifecycle, context, isSVG, flags & 4 /* ComponentClass */, true);
                if (!failed) {
                    return vNode.dom;
                }
            }
        }
    }
    return null;
}
function poolComponent(vNode) {
    var type = vNode.type;
    var key = vNode.key;
    var hooks = vNode.ref;
    var nonRecycleHooks = hooks && (hooks.onComponentWillMount ||
        hooks.onComponentWillUnmount ||
        hooks.onComponentDidMount ||
        hooks.onComponentWillUpdate ||
        hooks.onComponentDidUpdate);
    if (nonRecycleHooks) {
        return;
    }
    var pools = componentPools.get(type);
    if (isUndefined(pools)) {
        pools = {
            nonKeyed: [],
            keyed: new Map()
        };
        componentPools.set(type, pools);
    }
    if (isNull(key)) {
        pools.nonKeyed.push(vNode);
    }
    else {
        var pool = pools.keyed.get(key);
        if (isUndefined(pool)) {
            pool = [];
            pools.keyed.set(key, pool);
        }
        pool.push(vNode);
    }
}

function unmount(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    var flags = vNode.flags;
    if (flags & 28 /* Component */) {
        unmountComponent(vNode, parentDom, lifecycle, canRecycle, isRecycling);
    }
    else if (flags & 3970 /* Element */) {
        unmountElement(vNode, parentDom, lifecycle, canRecycle, isRecycling);
    }
    else if (flags & (1 /* Text */ | 4096 /* Void */)) {
        unmountVoidOrText(vNode, parentDom);
    }
}
function unmountVoidOrText(vNode, parentDom) {
    if (parentDom) {
        removeChild(parentDom, vNode.dom);
    }
}
var alreadyUnmounted = new WeakMap();
function unmountComponent(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    var instance = vNode.children;
    var flags = vNode.flags;
    var isStatefulComponent$$1 = flags & 4;
    var ref = vNode.ref;
    var dom = vNode.dom;
    if (alreadyUnmounted.has(vNode) && !isRecycling && !parentDom) {
        return;
    }
    alreadyUnmounted.set(vNode);
    if (!isRecycling) {
        if (isStatefulComponent$$1) {
            if (!instance._unmounted) {
                instance._ignoreSetState = true;
                options.beforeUnmount && options.beforeUnmount(vNode);
                instance.componentWillUnmount && instance.componentWillUnmount();
                if (ref && !isRecycling) {
                    ref(null);
                }
                instance._unmounted = true;
                options.findDOMNodeEnabled && componentToDOMNodeMap.delete(instance);
                var subLifecycle = instance._lifecycle;
                if (!subLifecycle.fastUnmount) {
                    unmount(instance._lastInput, null, subLifecycle, false, isRecycling);
                }
            }
        }
        else {
            if (!isNullOrUndef(ref)) {
                if (!isNullOrUndef(ref.onComponentWillUnmount)) {
                    ref.onComponentWillUnmount(dom);
                }
            }
            if (!lifecycle.fastUnmount) {
                unmount(instance, null, lifecycle, false, isRecycling);
            }
        }
    }
    if (parentDom) {
        var lastInput = instance._lastInput;
        if (isNullOrUndef(lastInput)) {
            lastInput = instance;
        }
        removeChild(parentDom, dom);
    }
    if (options.recyclingEnabled && !isStatefulComponent$$1 && (parentDom || canRecycle)) {
        poolComponent(vNode);
    }
}
function unmountElement(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    var dom = vNode.dom;
    var ref = vNode.ref;
    var events = vNode.events;
    if (alreadyUnmounted.has(vNode) && !isRecycling && !parentDom) {
        return;
    }
    alreadyUnmounted.set(vNode);
    if (!lifecycle.fastUnmount) {
        if (ref && !isRecycling) {
            unmountRef(ref);
        }
        var children = vNode.children;
        if (!isNullOrUndef(children)) {
            unmountChildren$1(children, lifecycle, isRecycling);
        }
    }
    if (!isNull(events)) {
        for (var name in events) {
            // do not add a hasOwnProperty check here, it affects performance
            patchEvent(name, events[name], null, dom);
            events[name] = null;
        }
    }
    if (parentDom) {
        removeChild(parentDom, dom);
    }
    if (options.recyclingEnabled && (parentDom || canRecycle)) {
        poolElement(vNode);
    }
}
function unmountChildren$1(children, lifecycle, isRecycling) {
    if (isArray(children)) {
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (!isInvalid(child) && isObject(child)) {
                unmount(child, null, lifecycle, false, isRecycling);
            }
        }
    }
    else if (isObject(children)) {
        unmount(children, null, lifecycle, false, isRecycling);
    }
}
function unmountRef(ref) {
    if (isFunction(ref)) {
        ref(null);
    }
    else {
        if (isInvalid(ref)) {
            return;
        }
        if (process.env.NODE_ENV !== 'production') {
            throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
        }
        throwError();
    }
}

function createClassComponentInstance(vNode, Component, props, context, isSVG) {
    if (isUndefined(context)) {
        context = {};
    }
    var instance = new Component(props, context);
    instance.context = context;
    if (instance.props === EMPTY_OBJ) {
        instance.props = props;
    }
    instance._patch = patch;
    if (options.findDOMNodeEnabled) {
        instance._componentToDOMNodeMap = componentToDOMNodeMap;
    }
    instance._unmounted = false;
    instance._pendingSetState = true;
    instance._isSVG = isSVG;
    if (isFunction(instance.componentWillMount)) {
        instance.componentWillMount();
    }
    var childContext = instance.getChildContext();
    if (!isNullOrUndef(childContext)) {
        instance._childContext = Object.assign({}, context, childContext);
    }
    else {
        instance._childContext = context;
    }
    options.beforeRender && options.beforeRender(instance);
    var input = instance.render(props, instance.state, context);
    options.afterRender && options.afterRender(instance);
    if (isArray(input)) {
        if (process.env.NODE_ENV !== 'production') {
            throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
        }
        throwError();
    }
    else if (isInvalid(input)) {
        input = createVoidVNode();
    }
    else if (isStringOrNumber(input)) {
        input = createTextVNode(input);
    }
    else {
        if (input.dom) {
            input = cloneVNode(input);
        }
        if (input.flags & 28 /* Component */) {
            // if we have an input that is also a component, we run into a tricky situation
            // where the root vNode needs to always have the correct DOM entry
            // so we break monomorphism on our input and supply it our vNode as parentVNode
            // we can optimise this in the future, but this gets us out of a lot of issues
            input.parentVNode = vNode;
        }
    }
    instance._pendingSetState = false;
    instance._lastInput = input;
    return instance;
}
function replaceLastChildAndUnmount(lastInput, nextInput, parentDom, lifecycle, context, isSVG, isRecycling) {
    replaceVNode(parentDom, mount(nextInput, null, lifecycle, context, isSVG), lastInput, lifecycle, isRecycling);
}
function replaceVNode(parentDom, dom, vNode, lifecycle, isRecycling) {
    var shallowUnmount = false;
    // we cannot cache nodeType here as vNode might be re-assigned below
    if (vNode.flags & 28 /* Component */) {
        // if we are accessing a stateful or stateless component, we want to access their last rendered input
        // accessing their DOM node is not useful to us here
        unmount(vNode, null, lifecycle, false, isRecycling);
        vNode = vNode.children._lastInput || vNode.children;
        shallowUnmount = true;
    }
    replaceChild(parentDom, dom, vNode.dom);
    unmount(vNode, null, lifecycle, false, isRecycling);
}
function createFunctionalComponentInput(vNode, component, props, context) {
    var input = component(props, context);
    if (isArray(input)) {
        if (process.env.NODE_ENV !== 'production') {
            throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
        }
        throwError();
    }
    else if (isInvalid(input)) {
        input = createVoidVNode();
    }
    else if (isStringOrNumber(input)) {
        input = createTextVNode(input);
    }
    else {
        if (input.dom) {
            input = cloneVNode(input);
        }
        if (input.flags & 28 /* Component */) {
            // if we have an input that is also a component, we run into a tricky situation
            // where the root vNode needs to always have the correct DOM entry
            // so we break monomorphism on our input and supply it our vNode as parentVNode
            // we can optimise this in the future, but this gets us out of a lot of issues
            input.parentVNode = vNode;
        }
    }
    return input;
}
function setTextContent(dom, text) {
    if (text !== '') {
        dom.textContent = text;
    }
    else {
        dom.appendChild(document.createTextNode(''));
    }
}
function updateTextContent(dom, text) {
    dom.firstChild.nodeValue = text;
}
function appendChild(parentDom, dom) {
    parentDom.appendChild(dom);
}
function insertOrAppend(parentDom, newNode, nextNode) {
    if (isNullOrUndef(nextNode)) {
        appendChild(parentDom, newNode);
    }
    else {
        parentDom.insertBefore(newNode, nextNode);
    }
}
function documentCreateElement(tag, isSVG) {
    if (isSVG === true) {
        return document.createElementNS(svgNS, tag);
    }
    else {
        return document.createElement(tag);
    }
}
function replaceWithNewNode(lastNode, nextNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    unmount(lastNode, null, lifecycle, false, isRecycling);
    var dom = mount(nextNode, null, lifecycle, context, isSVG);
    nextNode.dom = dom;
    replaceChild(parentDom, dom, lastNode.dom);
}
function replaceChild(parentDom, nextDom, lastDom) {
    if (!parentDom) {
        parentDom = lastDom.parentNode;
    }
    parentDom.replaceChild(nextDom, lastDom);
}
function removeChild(parentDom, dom) {
    parentDom.removeChild(dom);
}
function removeAllChildren(dom, children, lifecycle, isRecycling) {
    dom.textContent = '';
    if (!lifecycle.fastUnmount || (lifecycle.fastUnmount && options.recyclingEnabled && !isRecycling)) {
        removeChildren(null, children, lifecycle, isRecycling);
    }
}
function removeChildren(dom, children, lifecycle, isRecycling) {
    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (!isInvalid(child)) {
            unmount(child, dom, lifecycle, true, isRecycling);
        }
    }
}
function isKeyed(lastChildren, nextChildren) {
    return nextChildren.length && !isNullOrUndef(nextChildren[0]) && !isNullOrUndef(nextChildren[0].key)
        && lastChildren.length && !isNullOrUndef(lastChildren[0]) && !isNullOrUndef(lastChildren[0].key);
}

function isCheckedType(type) {
    return type === 'checkbox' || type === 'radio';
}
function isControlled(props) {
    var usesChecked = isCheckedType(props.type);
    return usesChecked ? !isNullOrUndef(props.checked) : !isNullOrUndef(props.value);
}
function onTextInputChange(e) {
    var vNode = this.vNode;
    var events = vNode.events || EMPTY_OBJ;
    var dom = vNode.dom;
    if (events.onInput) {
        var event = events.onInput;
        if (event.event) {
            event.event(event.data, e);
        }
        else {
            event(e);
        }
    }
    else if (events.oninput) {
        events.oninput(e);
    }
    // the user may have updated the vNode from the above onInput events
    // so we need to get it from the context of `this` again
    applyValue(this.vNode, dom);
}
function wrappedOnChange(e) {
    var vNode = this.vNode;
    var events = vNode.events || EMPTY_OBJ;
    var event = events.onChange;
    if (event.event) {
        event.event(event.data, e);
    }
    else {
        event(e);
    }
}
function onCheckboxChange(e) {
    var vNode = this.vNode;
    var events = vNode.events || EMPTY_OBJ;
    var dom = vNode.dom;
    if (events.onClick) {
        var event = events.onClick;
        if (event.event) {
            event.event(event.data, e);
        }
        else {
            event(e);
        }
    }
    else if (events.onclick) {
        events.onclick(e);
    }
    // the user may have updated the vNode from the above onClick events
    // so we need to get it from the context of `this` again
    applyValue(this.vNode, dom);
}
function handleAssociatedRadioInputs(name) {
    var inputs = document.querySelectorAll(("input[type=\"radio\"][name=\"" + name + "\"]"));
    [].forEach.call(inputs, function (dom) {
        var inputWrapper = wrappers.get(dom);
        if (inputWrapper) {
            var props = inputWrapper.vNode.props;
            if (props) {
                dom.checked = inputWrapper.vNode.props.checked;
            }
        }
    });
}
function processInput(vNode, dom) {
    var props = vNode.props || EMPTY_OBJ;
    applyValue(vNode, dom);
    if (isControlled(props)) {
        var inputWrapper = wrappers.get(dom);
        if (!inputWrapper) {
            inputWrapper = {
                vNode: vNode
            };
            if (isCheckedType(props.type)) {
                dom.onclick = onCheckboxChange.bind(inputWrapper);
                dom.onclick.wrapped = true;
            }
            else {
                dom.oninput = onTextInputChange.bind(inputWrapper);
                dom.oninput.wrapped = true;
            }
            if (props.onChange) {
                dom.onchange = wrappedOnChange.bind(inputWrapper);
                dom.onchange.wrapped = true;
            }
            wrappers.set(dom, inputWrapper);
        }
        inputWrapper.vNode = vNode;
        return true;
    }
    return false;
}
function applyValue(vNode, dom) {
    var props = vNode.props || EMPTY_OBJ;
    var type = props.type;
    var value = props.value;
    var checked = props.checked;
    var multiple = props.multiple;
    if (type && type !== dom.type) {
        dom.type = type;
    }
    if (multiple && multiple !== dom.multiple) {
        dom.multiple = multiple;
    }
    if (isCheckedType(type)) {
        if (!isNullOrUndef(value)) {
            dom.value = value;
        }
        dom.checked = checked;
        if (type === 'radio' && props.name) {
            handleAssociatedRadioInputs(props.name);
        }
    }
    else {
        if (!isNullOrUndef(value) && dom.value !== value) {
            dom.value = value;
        }
        else if (!isNullOrUndef(checked)) {
            dom.checked = checked;
        }
    }
}

function isControlled$1(props) {
    return !isNullOrUndef(props.value);
}
function updateChildOptionGroup(vNode, value) {
    var type = vNode.type;
    if (type === 'optgroup') {
        var children = vNode.children;
        if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
                updateChildOption(children[i], value);
            }
        }
        else if (isVNode(children)) {
            updateChildOption(children, value);
        }
    }
    else {
        updateChildOption(vNode, value);
    }
}
function updateChildOption(vNode, value) {
    var props = vNode.props || EMPTY_OBJ;
    var dom = vNode.dom;
    // we do this as multiple may have changed
    dom.value = props.value;
    if ((isArray(value) && value.indexOf(props.value) !== -1) || props.value === value) {
        dom.selected = true;
    }
    else {
        dom.selected = props.selected || false;
    }
}
function onSelectChange(e) {
    var vNode = this.vNode;
    var events = vNode.events || EMPTY_OBJ;
    var dom = vNode.dom;
    if (events.onChange) {
        var event = events.onChange;
        if (event.event) {
            event.event(event.data, e);
        }
        else {
            event(e);
        }
    }
    else if (events.onchange) {
        events.onchange(e);
    }
    // the user may have updated the vNode from the above onChange events
    // so we need to get it from the context of `this` again
    applyValue$1(this.vNode, dom);
}
function processSelect(vNode, dom) {
    var props = vNode.props || EMPTY_OBJ;
    applyValue$1(vNode, dom);
    if (isControlled$1(props)) {
        var selectWrapper = wrappers.get(dom);
        if (!selectWrapper) {
            selectWrapper = {
                vNode: vNode
            };
            dom.onchange = onSelectChange.bind(selectWrapper);
            dom.onchange.wrapped = true;
            wrappers.set(dom, selectWrapper);
        }
        selectWrapper.vNode = vNode;
        return true;
    }
    return false;
}
function applyValue$1(vNode, dom) {
    var props = vNode.props || EMPTY_OBJ;
    if (props.multiple !== dom.multiple) {
        dom.multiple = props.multiple;
    }
    var children = vNode.children;
    if (!isInvalid(children)) {
        var value = props.value;
        if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
                updateChildOptionGroup(children[i], value);
            }
        }
        else if (isVNode(children)) {
            updateChildOptionGroup(children, value);
        }
    }
}

function isControlled$2(props) {
    return !isNullOrUndef(props.value);
}
function wrappedOnChange$1(e) {
    var vNode = this.vNode;
    var events = vNode.events || EMPTY_OBJ;
    var event = events.onChange;
    if (event.event) {
        event.event(event.data, e);
    }
    else {
        event(e);
    }
}
function onTextareaInputChange(e) {
    var vNode = this.vNode;
    var events = vNode.events || EMPTY_OBJ;
    var dom = vNode.dom;
    if (events.onInput) {
        var event = events.onInput;
        if (event.event) {
            event.event(event.data, e);
        }
        else {
            event(e);
        }
    }
    else if (events.oninput) {
        events.oninput(e);
    }
    // the user may have updated the vNode from the above onInput events
    // so we need to get it from the context of `this` again
    applyValue$2(this.vNode, dom);
}
function processTextarea(vNode, dom) {
    var props = vNode.props || EMPTY_OBJ;
    applyValue$2(vNode, dom);
    var textareaWrapper = wrappers.get(dom);
    if (isControlled$2(props)) {
        if (!textareaWrapper) {
            textareaWrapper = {
                vNode: vNode
            };
            dom.oninput = onTextareaInputChange.bind(textareaWrapper);
            dom.oninput.wrapped = true;
            if (props.onChange) {
                dom.onchange = wrappedOnChange$1.bind(textareaWrapper);
                dom.onchange.wrapped = true;
            }
            wrappers.set(dom, textareaWrapper);
        }
        textareaWrapper.vNode = vNode;
        return true;
    }
    return false;
}
function applyValue$2(vNode, dom) {
    var props = vNode.props || EMPTY_OBJ;
    var value = props.value;
    var domValue = dom.value;
    if (domValue !== value) {
        if (!isNullOrUndef(value)) {
            dom.value = value;
        }
        else if (domValue !== '') {
            dom.value = '';
        }
    }
}

var wrappers = new Map();
function processElement(flags, vNode, dom) {
    if (flags & 512 /* InputElement */) {
        return processInput(vNode, dom);
    }
    if (flags & 2048 /* SelectElement */) {
        return processSelect(vNode, dom);
    }
    if (flags & 1024 /* TextareaElement */) {
        return processTextarea(vNode, dom);
    }
    return false;
}

function patch(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    if (lastVNode !== nextVNode) {
        var lastFlags = lastVNode.flags;
        var nextFlags = nextVNode.flags;
        if (nextFlags & 28 /* Component */) {
            if (lastFlags & 28 /* Component */) {
                patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, nextFlags & 4 /* ComponentClass */, isRecycling);
            }
            else {
                replaceVNode(parentDom, mountComponent(nextVNode, null, lifecycle, context, isSVG, nextFlags & 4 /* ComponentClass */), lastVNode, lifecycle, isRecycling);
            }
        }
        else if (nextFlags & 3970 /* Element */) {
            if (lastFlags & 3970 /* Element */) {
                patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
            }
            else {
                replaceVNode(parentDom, mountElement(nextVNode, null, lifecycle, context, isSVG), lastVNode, lifecycle, isRecycling);
            }
        }
        else if (nextFlags & 1 /* Text */) {
            if (lastFlags & 1 /* Text */) {
                patchText(lastVNode, nextVNode);
            }
            else {
                replaceVNode(parentDom, mountText(nextVNode, null), lastVNode, lifecycle, isRecycling);
            }
        }
        else if (nextFlags & 4096 /* Void */) {
            if (lastFlags & 4096 /* Void */) {
                patchVoid(lastVNode, nextVNode);
            }
            else {
                replaceVNode(parentDom, mountVoid(nextVNode, null), lastVNode, lifecycle, isRecycling);
            }
        }
        else {
            // Error case: mount new one replacing old one
            replaceLastChildAndUnmount(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
        }
    }
}
function unmountChildren(children, dom, lifecycle, isRecycling) {
    if (isVNode(children)) {
        unmount(children, dom, lifecycle, true, isRecycling);
    }
    else if (isArray(children)) {
        removeAllChildren(dom, children, lifecycle, isRecycling);
    }
    else {
        dom.textContent = '';
    }
}
function patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    var nextTag = nextVNode.type;
    var lastTag = lastVNode.type;
    if (lastTag !== nextTag) {
        replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
    }
    else {
        var dom = lastVNode.dom;
        var lastProps = lastVNode.props;
        var nextProps = nextVNode.props;
        var lastChildren = lastVNode.children;
        var nextChildren = nextVNode.children;
        var lastFlags = lastVNode.flags;
        var nextFlags = nextVNode.flags;
        var lastRef = lastVNode.ref;
        var nextRef = nextVNode.ref;
        var lastEvents = lastVNode.events;
        var nextEvents = nextVNode.events;
        nextVNode.dom = dom;
        if (isSVG || (nextFlags & 128 /* SvgElement */)) {
            isSVG = true;
        }
        if (lastChildren !== nextChildren) {
            patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        }
        var hasControlledValue = false;
        if (!(nextFlags & 2 /* HtmlElement */)) {
            hasControlledValue = processElement(nextFlags, nextVNode, dom);
        }
        // inlined patchProps  -- starts --
        if (lastProps !== nextProps) {
            var lastPropsOrEmpty = lastProps || EMPTY_OBJ;
            var nextPropsOrEmpty = nextProps || EMPTY_OBJ;
            if (nextPropsOrEmpty !== EMPTY_OBJ) {
                for (var prop in nextPropsOrEmpty) {
                    // do not add a hasOwnProperty check here, it affects performance
                    var nextValue = nextPropsOrEmpty[prop];
                    var lastValue = lastPropsOrEmpty[prop];
                    if (isNullOrUndef(nextValue)) {
                        removeProp(prop, nextValue, dom);
                    }
                    else {
                        patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue);
                    }
                }
            }
            if (lastPropsOrEmpty !== EMPTY_OBJ) {
                for (var prop$1 in lastPropsOrEmpty) {
                    // do not add a hasOwnProperty check here, it affects performance
                    if (isNullOrUndef(nextPropsOrEmpty[prop$1])) {
                        removeProp(prop$1, lastPropsOrEmpty[prop$1], dom);
                    }
                }
            }
        }
        // inlined patchProps  -- ends --
        if (lastEvents !== nextEvents) {
            patchEvents(lastEvents, nextEvents, dom);
        }
        if (nextRef) {
            if (lastRef !== nextRef || isRecycling) {
                mountRef(dom, nextRef, lifecycle);
            }
        }
    }
}
function patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling) {
    var patchArray = false;
    var patchKeyed = false;
    if (nextFlags & 64 /* HasNonKeyedChildren */) {
        patchArray = true;
    }
    else if ((lastFlags & 32 /* HasKeyedChildren */) && (nextFlags & 32 /* HasKeyedChildren */)) {
        patchKeyed = true;
        patchArray = true;
    }
    else if (isInvalid(nextChildren)) {
        unmountChildren(lastChildren, dom, lifecycle, isRecycling);
    }
    else if (isInvalid(lastChildren)) {
        if (isStringOrNumber(nextChildren)) {
            setTextContent(dom, nextChildren);
        }
        else {
            if (isArray(nextChildren)) {
                mountArrayChildren(nextChildren, dom, lifecycle, context, isSVG);
            }
            else {
                mount(nextChildren, dom, lifecycle, context, isSVG);
            }
        }
    }
    else if (isStringOrNumber(nextChildren)) {
        if (isStringOrNumber(lastChildren)) {
            updateTextContent(dom, nextChildren);
        }
        else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            setTextContent(dom, nextChildren);
        }
    }
    else if (isArray(nextChildren)) {
        if (isArray(lastChildren)) {
            patchArray = true;
            if (isKeyed(lastChildren, nextChildren)) {
                patchKeyed = true;
            }
        }
        else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            mountArrayChildren(nextChildren, dom, lifecycle, context, isSVG);
        }
    }
    else if (isArray(lastChildren)) {
        removeAllChildren(dom, lastChildren, lifecycle, isRecycling);
        mount(nextChildren, dom, lifecycle, context, isSVG);
    }
    else if (isVNode(nextChildren)) {
        if (isVNode(lastChildren)) {
            patch(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        }
        else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            mount(nextChildren, dom, lifecycle, context, isSVG);
        }
    }
    if (patchArray) {
        if (patchKeyed) {
            patchKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        }
        else {
            patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        }
    }
}
function patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isClass, isRecycling) {
    var lastType = lastVNode.type;
    var nextType = nextVNode.type;
    var nextProps = nextVNode.props || EMPTY_OBJ;
    var lastKey = lastVNode.key;
    var nextKey = nextVNode.key;
    var defaultProps = nextType.defaultProps;
    if (!isUndefined(defaultProps)) {
        copyPropsTo(defaultProps, nextProps);
        nextVNode.props = nextProps;
    }
    if (lastType !== nextType) {
        if (isClass) {
            replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
        }
        else {
            var lastInput = lastVNode.children._lastInput || lastVNode.children;
            var nextInput = createFunctionalComponentInput(nextVNode, nextType, nextProps, context);
            unmount(lastVNode, null, lifecycle, false, isRecycling);
            patch(lastInput, nextInput, parentDom, lifecycle, context, isSVG, isRecycling);
            var dom = nextVNode.dom = nextInput.dom;
            nextVNode.children = nextInput;
            mountFunctionalComponentCallbacks(nextVNode.ref, dom, lifecycle);
        }
    }
    else {
        if (isClass) {
            if (lastKey !== nextKey) {
                replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
                return false;
            }
            var instance = lastVNode.children;
            if (instance._unmounted) {
                if (isNull(parentDom)) {
                    return true;
                }
                replaceChild(parentDom, mountComponent(nextVNode, null, lifecycle, context, isSVG, nextVNode.flags & 4 /* ComponentClass */), lastVNode.dom);
            }
            else {
                var lastState = instance.state;
                var nextState = instance.state;
                var lastProps = instance.props;
                var childContext = instance.getChildContext();
                nextVNode.children = instance;
                instance._isSVG = isSVG;
                if (!isNullOrUndef(childContext)) {
                    childContext = Object.assign({}, context, childContext);
                }
                else {
                    childContext = context;
                }
                var lastInput$1 = instance._lastInput;
                var nextInput$1 = instance._updateComponent(lastState, nextState, lastProps, nextProps, context, false, false);
                var didUpdate = true;
                instance._childContext = childContext;
                if (isInvalid(nextInput$1)) {
                    nextInput$1 = createVoidVNode();
                }
                else if (nextInput$1 === NO_OP) {
                    nextInput$1 = lastInput$1;
                    didUpdate = false;
                }
                else if (isStringOrNumber(nextInput$1)) {
                    nextInput$1 = createTextVNode(nextInput$1);
                }
                else if (isArray(nextInput$1)) {
                    if (process.env.NODE_ENV !== 'production') {
                        throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
                    }
                    throwError();
                }
                else if (isObject(nextInput$1) && nextInput$1.dom) {
                    nextInput$1 = cloneVNode(nextInput$1);
                }
                if (nextInput$1.flags & 28 /* Component */) {
                    nextInput$1.parentVNode = nextVNode;
                }
                else if (lastInput$1.flags & 28 /* Component */) {
                    lastInput$1.parentVNode = nextVNode;
                }
                instance._lastInput = nextInput$1;
                instance._vNode = nextVNode;
                if (didUpdate) {
                    var fastUnmount = lifecycle.fastUnmount;
                    var subLifecycle = instance._lifecycle;
                    lifecycle.fastUnmount = subLifecycle.fastUnmount;
                    patch(lastInput$1, nextInput$1, parentDom, lifecycle, childContext, isSVG, isRecycling);
                    subLifecycle.fastUnmount = lifecycle.fastUnmount;
                    lifecycle.fastUnmount = fastUnmount;
                    instance.componentDidUpdate(lastProps, lastState);
                    options.afterUpdate && options.afterUpdate(nextVNode);
                    options.findDOMNodeEnabled && componentToDOMNodeMap.set(instance, nextInput$1.dom);
                }
                nextVNode.dom = nextInput$1.dom;
            }
        }
        else {
            var shouldUpdate = true;
            var lastProps$1 = lastVNode.props;
            var nextHooks = nextVNode.ref;
            var nextHooksDefined = !isNullOrUndef(nextHooks);
            var lastInput$2 = lastVNode.children;
            var nextInput$2 = lastInput$2;
            nextVNode.dom = lastVNode.dom;
            nextVNode.children = lastInput$2;
            if (lastKey !== nextKey) {
                shouldUpdate = true;
            }
            else {
                if (nextHooksDefined && !isNullOrUndef(nextHooks.onComponentShouldUpdate)) {
                    shouldUpdate = nextHooks.onComponentShouldUpdate(lastProps$1, nextProps);
                }
            }
            if (shouldUpdate !== false) {
                if (nextHooksDefined && !isNullOrUndef(nextHooks.onComponentWillUpdate)) {
                    nextHooks.onComponentWillUpdate(lastProps$1, nextProps);
                }
                nextInput$2 = nextType(nextProps, context);
                if (isInvalid(nextInput$2)) {
                    nextInput$2 = createVoidVNode();
                }
                else if (isStringOrNumber(nextInput$2) && nextInput$2 !== NO_OP) {
                    nextInput$2 = createTextVNode(nextInput$2);
                }
                else if (isArray(nextInput$2)) {
                    if (process.env.NODE_ENV !== 'production') {
                        throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
                    }
                    throwError();
                }
                else if (isObject(nextInput$2) && nextInput$2.dom) {
                    nextInput$2 = cloneVNode(nextInput$2);
                }
                if (nextInput$2 !== NO_OP) {
                    patch(lastInput$2, nextInput$2, parentDom, lifecycle, context, isSVG, isRecycling);
                    nextVNode.children = nextInput$2;
                    if (nextHooksDefined && !isNullOrUndef(nextHooks.onComponentDidUpdate)) {
                        nextHooks.onComponentDidUpdate(lastProps$1, nextProps);
                    }
                    nextVNode.dom = nextInput$2.dom;
                }
            }
            if (nextInput$2.flags & 28 /* Component */) {
                nextInput$2.parentVNode = nextVNode;
            }
            else if (lastInput$2.flags & 28 /* Component */) {
                lastInput$2.parentVNode = nextVNode;
            }
        }
    }
    return false;
}
function patchText(lastVNode, nextVNode) {
    var nextText = nextVNode.children;
    var dom = lastVNode.dom;
    nextVNode.dom = dom;
    if (lastVNode.children !== nextText) {
        dom.nodeValue = nextText;
    }
}
function patchVoid(lastVNode, nextVNode) {
    nextVNode.dom = lastVNode.dom;
}
function patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling) {
    var lastChildrenLength = lastChildren.length;
    var nextChildrenLength = nextChildren.length;
    var commonLength = lastChildrenLength > nextChildrenLength ? nextChildrenLength : lastChildrenLength;
    var i = 0;
    for (; i < commonLength; i++) {
        var nextChild = nextChildren[i];
        if (nextChild.dom) {
            nextChild = nextChildren[i] = cloneVNode(nextChild);
        }
        patch(lastChildren[i], nextChild, dom, lifecycle, context, isSVG, isRecycling);
    }
    if (lastChildrenLength < nextChildrenLength) {
        for (i = commonLength; i < nextChildrenLength; i++) {
            var nextChild$1 = nextChildren[i];
            if (nextChild$1.dom) {
                nextChild$1 = nextChildren[i] = cloneVNode(nextChild$1);
            }
            appendChild(dom, mount(nextChild$1, null, lifecycle, context, isSVG));
        }
    }
    else if (nextChildrenLength === 0) {
        removeAllChildren(dom, lastChildren, lifecycle, isRecycling);
    }
    else if (lastChildrenLength > nextChildrenLength) {
        for (i = commonLength; i < lastChildrenLength; i++) {
            unmount(lastChildren[i], dom, lifecycle, false, isRecycling);
        }
    }
}
function patchKeyedChildren(a, b, dom, lifecycle, context, isSVG, isRecycling) {
    var aLength = a.length;
    var bLength = b.length;
    var aEnd = aLength - 1;
    var bEnd = bLength - 1;
    var aStart = 0;
    var bStart = 0;
    var i;
    var j;
    var aNode;
    var bNode;
    var nextNode;
    var nextPos;
    var node;
    if (aLength === 0) {
        if (bLength !== 0) {
            mountArrayChildren(b, dom, lifecycle, context, isSVG);
        }
        return;
    }
    else if (bLength === 0) {
        removeAllChildren(dom, a, lifecycle, isRecycling);
        return;
    }
    var aStartNode = a[aStart];
    var bStartNode = b[bStart];
    var aEndNode = a[aEnd];
    var bEndNode = b[bEnd];
    if (bStartNode.dom) {
        b[bStart] = bStartNode = cloneVNode(bStartNode);
    }
    if (bEndNode.dom) {
        b[bEnd] = bEndNode = cloneVNode(bEndNode);
    }
    // Step 1
    /* eslint no-constant-condition: 0 */
    outer: while (true) {
        // Sync nodes with the same key at the beginning.
        while (aStartNode.key === bStartNode.key) {
            patch(aStartNode, bStartNode, dom, lifecycle, context, isSVG, isRecycling);
            aStart++;
            bStart++;
            if (aStart > aEnd || bStart > bEnd) {
                break outer;
            }
            aStartNode = a[aStart];
            bStartNode = b[bStart];
            if (bStartNode.dom) {
                b[bStart] = bStartNode = cloneVNode(bStartNode);
            }
        }
        // Sync nodes with the same key at the end.
        while (aEndNode.key === bEndNode.key) {
            patch(aEndNode, bEndNode, dom, lifecycle, context, isSVG, isRecycling);
            aEnd--;
            bEnd--;
            if (aStart > aEnd || bStart > bEnd) {
                break outer;
            }
            aEndNode = a[aEnd];
            bEndNode = b[bEnd];
            if (bEndNode.dom) {
                b[bEnd] = bEndNode = cloneVNode(bEndNode);
            }
        }
        // Move and sync nodes from right to left.
        if (aEndNode.key === bStartNode.key) {
            patch(aEndNode, bStartNode, dom, lifecycle, context, isSVG, isRecycling);
            insertOrAppend(dom, bStartNode.dom, aStartNode.dom);
            aEnd--;
            bStart++;
            aEndNode = a[aEnd];
            bStartNode = b[bStart];
            if (bStartNode.dom) {
                b[bStart] = bStartNode = cloneVNode(bStartNode);
            }
            continue;
        }
        // Move and sync nodes from left to right.
        if (aStartNode.key === bEndNode.key) {
            patch(aStartNode, bEndNode, dom, lifecycle, context, isSVG, isRecycling);
            nextPos = bEnd + 1;
            nextNode = nextPos < b.length ? b[nextPos].dom : null;
            insertOrAppend(dom, bEndNode.dom, nextNode);
            aStart++;
            bEnd--;
            aStartNode = a[aStart];
            bEndNode = b[bEnd];
            if (bEndNode.dom) {
                b[bEnd] = bEndNode = cloneVNode(bEndNode);
            }
            continue;
        }
        break;
    }
    if (aStart > aEnd) {
        if (bStart <= bEnd) {
            nextPos = bEnd + 1;
            nextNode = nextPos < b.length ? b[nextPos].dom : null;
            while (bStart <= bEnd) {
                node = b[bStart];
                if (node.dom) {
                    b[bStart] = node = cloneVNode(node);
                }
                bStart++;
                insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextNode);
            }
        }
    }
    else if (bStart > bEnd) {
        while (aStart <= aEnd) {
            unmount(a[aStart++], dom, lifecycle, false, isRecycling);
        }
    }
    else {
        aLength = aEnd - aStart + 1;
        bLength = bEnd - bStart + 1;
        var aNullable = a;
        var sources = new Array(bLength);
        // Mark all nodes as inserted.
        for (i = 0; i < bLength; i++) {
            sources[i] = -1;
        }
        var moved = false;
        var pos = 0;
        var patched = 0;
        if ((bLength <= 4) || (aLength * bLength <= 16)) {
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLength) {
                    for (j = bStart; j <= bEnd; j++) {
                        bNode = b[j];
                        if (aNode.key === bNode.key) {
                            sources[j - bStart] = i;
                            if (pos > j) {
                                moved = true;
                            }
                            else {
                                pos = j;
                            }
                            if (bNode.dom) {
                                b[j] = bNode = cloneVNode(bNode);
                            }
                            patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
                            patched++;
                            aNullable[i] = null;
                            break;
                        }
                    }
                }
            }
        }
        else {
            var keyIndex = new Map();
            for (i = bStart; i <= bEnd; i++) {
                node = b[i];
                keyIndex.set(node.key, i);
            }
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLength) {
                    j = keyIndex.get(aNode.key);
                    if (!isUndefined(j)) {
                        bNode = b[j];
                        sources[j - bStart] = i;
                        if (pos > j) {
                            moved = true;
                        }
                        else {
                            pos = j;
                        }
                        if (bNode.dom) {
                            b[j] = bNode = cloneVNode(bNode);
                        }
                        patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
                        patched++;
                        aNullable[i] = null;
                    }
                }
            }
        }
        if (aLength === a.length && patched === 0) {
            removeAllChildren(dom, a, lifecycle, isRecycling);
            while (bStart < bLength) {
                node = b[bStart];
                if (node.dom) {
                    b[bStart] = node = cloneVNode(node);
                }
                bStart++;
                insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), null);
            }
        }
        else {
            i = aLength - patched;
            while (i > 0) {
                aNode = aNullable[aStart++];
                if (!isNull(aNode)) {
                    unmount(aNode, dom, lifecycle, true, isRecycling);
                    i--;
                }
            }
            if (moved) {
                var seq = lis_algorithm(sources);
                j = seq.length - 1;
                for (i = bLength - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        if (node.dom) {
                            b[pos] = node = cloneVNode(node);
                        }
                        nextPos = pos + 1;
                        nextNode = nextPos < b.length ? b[nextPos].dom : null;
                        insertOrAppend(dom, mount(node, dom, lifecycle, context, isSVG), nextNode);
                    }
                    else {
                        if (j < 0 || i !== seq[j]) {
                            pos = i + bStart;
                            node = b[pos];
                            nextPos = pos + 1;
                            nextNode = nextPos < b.length ? b[nextPos].dom : null;
                            insertOrAppend(dom, node.dom, nextNode);
                        }
                        else {
                            j--;
                        }
                    }
                }
            }
            else if (patched !== bLength) {
                for (i = bLength - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        if (node.dom) {
                            b[pos] = node = cloneVNode(node);
                        }
                        nextPos = pos + 1;
                        nextNode = nextPos < b.length ? b[nextPos].dom : null;
                        insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextNode);
                    }
                }
            }
        }
    }
}
// // https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function lis_algorithm(a) {
    var p = a.slice(0);
    var result = [0];
    var i;
    var j;
    var u;
    var v;
    var c;
    for (i = 0; i < a.length; i++) {
        if (a[i] === -1) {
            continue;
        }
        j = result[result.length - 1];
        if (a[j] < a[i]) {
            p[i] = j;
            result.push(i);
            continue;
        }
        u = 0;
        v = result.length - 1;
        while (u < v) {
            c = ((u + v) / 2) | 0;
            if (a[result[c]] < a[i]) {
                u = c + 1;
            }
            else {
                v = c;
            }
        }
        if (a[i] < a[result[u]]) {
            if (u > 0) {
                p[i] = result[u - 1];
            }
            result[u] = i;
        }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
        result[u] = v;
        v = p[v];
    }
    return result;
}
function patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue) {
    if (skipProps[prop] || hasControlledValue && prop === 'value') {
        return;
    }
    if (booleanProps[prop]) {
        dom[prop] = !!nextValue;
    }
    else if (strictProps[prop]) {
        var value = isNullOrUndef(nextValue) ? '' : nextValue;
        if (dom[prop] !== value) {
            dom[prop] = value;
        }
    }
    else if (lastValue !== nextValue) {
        if (isAttrAnEvent(prop)) {
            patchEvent(prop, lastValue, nextValue, dom);
        }
        else if (isNullOrUndef(nextValue)) {
            dom.removeAttribute(prop);
        }
        else if (prop === 'className') {
            if (isSVG) {
                dom.setAttribute('class', nextValue);
            }
            else {
                dom.className = nextValue;
            }
        }
        else if (prop === 'style') {
            patchStyle(lastValue, nextValue, dom);
        }
        else if (prop === 'dangerouslySetInnerHTML') {
            var lastHtml = lastValue && lastValue.__html;
            var nextHtml = nextValue && nextValue.__html;
            if (lastHtml !== nextHtml) {
                if (!isNullOrUndef(nextHtml)) {
                    dom.innerHTML = nextHtml;
                }
            }
        }
        else {
            var dehyphenProp;
            if (dehyphenProps[prop]) {
                dehyphenProp = dehyphenProps[prop];
            }
            else if (isSVG && prop.match(probablyKebabProps)) {
                dehyphenProp = prop.replace(/([a-z])([A-Z]|1)/g, kebabize);
                dehyphenProps[prop] = dehyphenProp;
            }
            else {
                dehyphenProp = prop;
            }
            var ns = namespaces[prop];
            if (ns) {
                dom.setAttributeNS(ns, dehyphenProp, nextValue);
            }
            else {
                dom.setAttribute(dehyphenProp, nextValue);
            }
        }
    }
}
function patchEvents(lastEvents, nextEvents, dom) {
    lastEvents = lastEvents || EMPTY_OBJ;
    nextEvents = nextEvents || EMPTY_OBJ;
    if (nextEvents !== EMPTY_OBJ) {
        for (var name in nextEvents) {
            // do not add a hasOwnProperty check here, it affects performance
            patchEvent(name, lastEvents[name], nextEvents[name], dom);
        }
    }
    if (lastEvents !== EMPTY_OBJ) {
        for (var name$1 in lastEvents) {
            // do not add a hasOwnProperty check here, it affects performance
            if (isNullOrUndef(nextEvents[name$1])) {
                patchEvent(name$1, lastEvents[name$1], null, dom);
            }
        }
    }
}
function patchEvent(name, lastValue, nextValue, dom) {
    if (lastValue !== nextValue) {
        var nameLowerCase = name.toLowerCase();
        var domEvent = dom[nameLowerCase];
        // if the function is wrapped, that means it's been controlled by a wrapper
        if (domEvent && domEvent.wrapped) {
            return;
        }
        if (delegatedProps[name]) {
            handleEvent(name, lastValue, nextValue, dom);
        }
        else {
            if (lastValue !== nextValue) {
                if (!isFunction(nextValue) && !isNullOrUndef(nextValue)) {
                    var linkEvent = nextValue.event;
                    if (linkEvent && isFunction(linkEvent)) {
                        if (!dom._data) {
                            dom[nameLowerCase] = function (e) {
                                linkEvent(e.currentTarget._data, e);
                            };
                        }
                        dom._data = nextValue.data;
                    }
                    else {
                        if (process.env.NODE_ENV !== 'production') {
                            throwError(("an event on a VNode \"" + name + "\". was not a function or a valid linkEvent."));
                        }
                        throwError();
                    }
                }
                else {
                    dom[nameLowerCase] = nextValue;
                }
            }
        }
    }
}
// We are assuming here that we come from patchProp routine
// -nextAttrValue cannot be null or undefined
function patchStyle(lastAttrValue, nextAttrValue, dom) {
    if (isString(nextAttrValue)) {
        dom.style.cssText = nextAttrValue;
        return;
    }
    for (var style in nextAttrValue) {
        // do not add a hasOwnProperty check here, it affects performance
        var value = nextAttrValue[style];
        if (isNumber(value) && !isUnitlessNumber[style]) {
            dom.style[style] = value + 'px';
        }
        else {
            dom.style[style] = value;
        }
    }
    if (!isNullOrUndef(lastAttrValue)) {
        for (var style$1 in lastAttrValue) {
            if (isNullOrUndef(nextAttrValue[style$1])) {
                dom.style[style$1] = '';
            }
        }
    }
}
function removeProp(prop, lastValue, dom) {
    if (prop === 'className') {
        dom.removeAttribute('class');
    }
    else if (prop === 'value') {
        dom.value = '';
    }
    else if (prop === 'style') {
        dom.removeAttribute('style');
    }
    else if (isAttrAnEvent(prop)) {
        handleEvent(name, lastValue, null, dom);
    }
    else {
        dom.removeAttribute(prop);
    }
}

function mount(vNode, parentDom, lifecycle, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 3970 /* Element */) {
        return mountElement(vNode, parentDom, lifecycle, context, isSVG);
    }
    else if (flags & 28 /* Component */) {
        return mountComponent(vNode, parentDom, lifecycle, context, isSVG, flags & 4 /* ComponentClass */);
    }
    else if (flags & 4096 /* Void */) {
        return mountVoid(vNode, parentDom);
    }
    else if (flags & 1 /* Text */) {
        return mountText(vNode, parentDom);
    }
    else {
        if (process.env.NODE_ENV !== 'production') {
            if (typeof vNode === 'object') {
                throwError(("mount() received an object that's not a valid VNode, you should stringify it first. Object: \"" + (JSON.stringify(vNode)) + "\"."));
            }
            else {
                throwError(("mount() expects a valid VNode, instead it received an object with the type \"" + (typeof vNode) + "\"."));
            }
        }
        throwError();
    }
}
function mountText(vNode, parentDom) {
    var dom = document.createTextNode(vNode.children);
    vNode.dom = dom;
    if (parentDom) {
        appendChild(parentDom, dom);
    }
    return dom;
}
function mountVoid(vNode, parentDom) {
    var dom = document.createTextNode('');
    vNode.dom = dom;
    if (parentDom) {
        appendChild(parentDom, dom);
    }
    return dom;
}
function mountElement(vNode, parentDom, lifecycle, context, isSVG) {
    if (options.recyclingEnabled) {
        var dom$1 = recycleElement(vNode, lifecycle, context, isSVG);
        if (!isNull(dom$1)) {
            if (!isNull(parentDom)) {
                appendChild(parentDom, dom$1);
            }
            return dom$1;
        }
    }
    var tag = vNode.type;
    var flags = vNode.flags;
    if (isSVG || (flags & 128 /* SvgElement */)) {
        isSVG = true;
    }
    var dom = documentCreateElement(tag, isSVG);
    var children = vNode.children;
    var props = vNode.props;
    var events = vNode.events;
    var ref = vNode.ref;
    vNode.dom = dom;
    if (!isNull(children)) {
        if (isStringOrNumber(children)) {
            setTextContent(dom, children);
        }
        else if (isArray(children)) {
            mountArrayChildren(children, dom, lifecycle, context, isSVG);
        }
        else if (isVNode(children)) {
            mount(children, dom, lifecycle, context, isSVG);
        }
    }
    var hasControlledValue = false;
    if (!(flags & 2 /* HtmlElement */)) {
        hasControlledValue = processElement(flags, vNode, dom);
    }
    if (!isNull(props)) {
        for (var prop in props) {
            // do not add a hasOwnProperty check here, it affects performance
            patchProp(prop, null, props[prop], dom, isSVG, hasControlledValue);
        }
    }
    if (!isNull(events)) {
        for (var name in events) {
            // do not add a hasOwnProperty check here, it affects performance
            patchEvent(name, null, events[name], dom);
        }
    }
    if (!isNull(ref)) {
        mountRef(dom, ref, lifecycle);
    }
    if (!isNull(parentDom)) {
        appendChild(parentDom, dom);
    }
    return dom;
}
function mountArrayChildren(children, dom, lifecycle, context, isSVG) {
    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        // TODO: Verify can string/number be here. might cause de-opt
        if (!isInvalid(child)) {
            if (child.dom) {
                children[i] = child = cloneVNode(child);
            }
            mount(children[i], dom, lifecycle, context, isSVG);
        }
    }
}
function mountComponent(vNode, parentDom, lifecycle, context, isSVG, isClass) {
    if (options.recyclingEnabled) {
        var dom$1 = recycleComponent(vNode, lifecycle, context, isSVG);
        if (!isNull(dom$1)) {
            if (!isNull(parentDom)) {
                appendChild(parentDom, dom$1);
            }
            return dom$1;
        }
    }
    var type = vNode.type;
    var props = vNode.props || EMPTY_OBJ;
    var defaultProps = type.defaultProps;
    var ref = vNode.ref;
    var dom;
    if (!isUndefined(defaultProps)) {
        copyPropsTo(defaultProps, props);
        vNode.props = props;
    }
    if (isClass) {
        var instance = createClassComponentInstance(vNode, type, props, context, isSVG);
        // If instance does not have componentWillUnmount specified we can enable fastUnmount
        var input = instance._lastInput;
        var prevFastUnmount = lifecycle.fastUnmount;
        // we store the fastUnmount value, but we set it back to true on the lifecycle
        // we do this so we can determine if the component render has a fastUnmount or not
        lifecycle.fastUnmount = true;
        instance._vNode = vNode;
        vNode.dom = dom = mount(input, null, lifecycle, instance._childContext, isSVG);
        // we now create a lifecycle for this component and store the fastUnmount value
        var subLifecycle = instance._lifecycle = new Lifecycle();
        // children lifecycle can fastUnmount if itself does need unmount callback and within its cycle there was none
        subLifecycle.fastUnmount = isUndefined(instance.componentWillUnmount) && lifecycle.fastUnmount;
        // higher lifecycle can fastUnmount only if previously it was able to and this children doesnt have any
        lifecycle.fastUnmount = prevFastUnmount && subLifecycle.fastUnmount;
        if (!isNull(parentDom)) {
            appendChild(parentDom, dom);
        }
        mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
        options.findDOMNodeEnabled && componentToDOMNodeMap.set(instance, dom);
        vNode.children = instance;
    }
    else {
        var input$1 = createFunctionalComponentInput(vNode, type, props, context);
        vNode.dom = dom = mount(input$1, null, lifecycle, context, isSVG);
        vNode.children = input$1;
        mountFunctionalComponentCallbacks(ref, dom, lifecycle);
        if (!isNull(parentDom)) {
            appendChild(parentDom, dom);
        }
    }
    return dom;
}
function mountClassComponentCallbacks(vNode, ref, instance, lifecycle) {
    if (ref) {
        if (isFunction(ref)) {
            ref(instance);
        }
        else {
            if (process.env.NODE_ENV !== 'production') {
                if (isStringOrNumber(ref)) {
                    throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
                }
                else if (isObject(ref) && (vNode.flags & 4 /* ComponentClass */)) {
                    throwError('functional component lifecycle events are not supported on ES2015 class components.');
                }
                else {
                    throwError(("a bad value for \"ref\" was used on component: \"" + (JSON.stringify(ref)) + "\""));
                }
            }
            throwError();
        }
    }
    var cDM = instance.componentDidMount;
    var afterMount = options.afterMount;
    if (!isUndefined(cDM) || !isNull(afterMount)) {
        lifecycle.addListener(function () {
            afterMount && afterMount(vNode);
            cDM && instance.componentDidMount();
        });
    }
}
function mountFunctionalComponentCallbacks(ref, dom, lifecycle) {
    if (ref) {
        if (!isNullOrUndef(ref.onComponentWillMount)) {
            ref.onComponentWillMount();
        }
        if (!isNullOrUndef(ref.onComponentDidMount)) {
            lifecycle.addListener(function () { return ref.onComponentDidMount(dom); });
        }
        if (!isNullOrUndef(ref.onComponentWillUnmount)) {
            lifecycle.fastUnmount = false;
        }
    }
}
function mountRef(dom, value, lifecycle) {
    if (isFunction(value)) {
        lifecycle.fastUnmount = false;
        lifecycle.addListener(function () { return value(dom); });
    }
    else {
        if (isInvalid(value)) {
            return;
        }
        if (process.env.NODE_ENV !== 'production') {
            throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
        }
        throwError();
    }
}

function normalizeChildNodes(parentDom) {
    var dom = parentDom.firstChild;
    while (dom) {
        if (dom.nodeType === 8) {
            if (dom.data === '!') {
                var placeholder = document.createTextNode('');
                parentDom.replaceChild(placeholder, dom);
                dom = dom.nextSibling;
            }
            else {
                var lastDom = dom.previousSibling;
                parentDom.removeChild(dom);
                dom = lastDom || parentDom.firstChild;
            }
        }
        else {
            dom = dom.nextSibling;
        }
    }
}
function hydrateComponent(vNode, dom, lifecycle, context, isSVG, isClass) {
    var type = vNode.type;
    var props = vNode.props || EMPTY_OBJ;
    var ref = vNode.ref;
    vNode.dom = dom;
    if (isClass) {
        var _isSVG = dom.namespaceURI === svgNS;
        var defaultProps = type.defaultProps;
        if (!isUndefined(defaultProps)) {
            copyPropsTo(defaultProps, props);
            vNode.props = props;
        }
        var instance = createClassComponentInstance(vNode, type, props, context, _isSVG);
        // If instance does not have componentWillUnmount specified we can enable fastUnmount
        var prevFastUnmount = lifecycle.fastUnmount;
        var input = instance._lastInput;
        // we store the fastUnmount value, but we set it back to true on the lifecycle
        // we do this so we can determine if the component render has a fastUnmount or not
        lifecycle.fastUnmount = true;
        instance._vComponent = vNode;
        instance._vNode = vNode;
        hydrate(input, dom, lifecycle, instance._childContext, _isSVG);
        // we now create a lifecycle for this component and store the fastUnmount value
        var subLifecycle = instance._lifecycle = new Lifecycle();
        // children lifecycle can fastUnmount if itself does need unmount callback and within its cycle there was none
        subLifecycle.fastUnmount = isUndefined(instance.componentWillUnmount) && lifecycle.fastUnmount;
        // higher lifecycle can fastUnmount only if previously it was able to and this children doesnt have any
        lifecycle.fastUnmount = prevFastUnmount && subLifecycle.fastUnmount;
        mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
        options.findDOMNodeEnabled && componentToDOMNodeMap.set(instance, dom);
        vNode.children = instance;
    }
    else {
        var input$1 = createFunctionalComponentInput(vNode, type, props, context);
        hydrate(input$1, dom, lifecycle, context, isSVG);
        vNode.children = input$1;
        vNode.dom = input$1.dom;
        mountFunctionalComponentCallbacks(ref, dom, lifecycle);
    }
    return dom;
}
function hydrateElement(vNode, dom, lifecycle, context, isSVG) {
    var tag = vNode.type;
    var children = vNode.children;
    var props = vNode.props;
    var events = vNode.events;
    var flags = vNode.flags;
    var ref = vNode.ref;
    if (isSVG || (flags & 128 /* SvgElement */)) {
        isSVG = true;
    }
    if (dom.nodeType !== 1 || dom.tagName.toLowerCase() !== tag) {
        if (process.env.NODE_ENV !== 'production') {
            warning('Inferno hydration: Server-side markup doesn\'t match client-side markup or Initial render target is not empty');
        }
        var newDom = mountElement(vNode, null, lifecycle, context, isSVG);
        vNode.dom = newDom;
        replaceChild(dom.parentNode, newDom, dom);
        return newDom;
    }
    vNode.dom = dom;
    if (children) {
        hydrateChildren(children, dom, lifecycle, context, isSVG);
    }
    var hasControlledValue = false;
    if (!(flags & 2 /* HtmlElement */)) {
        hasControlledValue = processElement(flags, vNode, dom);
    }
    if (props) {
        for (var prop in props) {
            patchProp(prop, null, props[prop], dom, isSVG, hasControlledValue);
        }
    }
    if (events) {
        for (var name in events) {
            patchEvent(name, null, events[name], dom);
        }
    }
    if (ref) {
        mountRef(dom, ref, lifecycle);
    }
    return dom;
}
function hydrateChildren(children, parentDom, lifecycle, context, isSVG) {
    normalizeChildNodes(parentDom);
    var dom = parentDom.firstChild;
    if (isArray(children)) {
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (!isNull(child) && isObject(child)) {
                if (dom) {
                    dom = hydrate(child, dom, lifecycle, context, isSVG);
                    dom = dom.nextSibling;
                }
                else {
                    mount(child, parentDom, lifecycle, context, isSVG);
                }
            }
        }
    }
    else if (isStringOrNumber(children)) {
        if (dom && dom.nodeType === 3) {
            if (dom.nodeValue !== children) {
                dom.nodeValue = children;
            }
        }
        else if (children) {
            parentDom.textContent = children;
        }
        dom = dom.nextSibling;
    }
    else if (isObject(children)) {
        hydrate(children, dom, lifecycle, context, isSVG);
        dom = dom.nextSibling;
    }
    // clear any other DOM nodes, there should be only a single entry for the root
    while (dom) {
        var nextSibling = dom.nextSibling;
        parentDom.removeChild(dom);
        dom = nextSibling;
    }
}
function hydrateText(vNode, dom) {
    if (dom.nodeType !== 3) {
        var newDom = mountText(vNode, null);
        vNode.dom = newDom;
        replaceChild(dom.parentNode, newDom, dom);
        return newDom;
    }
    var text = vNode.children;
    if (dom.nodeValue !== text) {
        dom.nodeValue = text;
    }
    vNode.dom = dom;
    return dom;
}
function hydrateVoid(vNode, dom) {
    vNode.dom = dom;
    return dom;
}
function hydrate(vNode, dom, lifecycle, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 28 /* Component */) {
        return hydrateComponent(vNode, dom, lifecycle, context, isSVG, flags & 4 /* ComponentClass */);
    }
    else if (flags & 3970 /* Element */) {
        return hydrateElement(vNode, dom, lifecycle, context, isSVG);
    }
    else if (flags & 1 /* Text */) {
        return hydrateText(vNode, dom);
    }
    else if (flags & 4096 /* Void */) {
        return hydrateVoid(vNode, dom);
    }
    else {
        if (process.env.NODE_ENV !== 'production') {
            throwError(("hydrate() expects a valid VNode, instead it received an object with the type \"" + (typeof vNode) + "\"."));
        }
        throwError();
    }
}
function hydrateRoot(input, parentDom, lifecycle) {
    var dom = parentDom && parentDom.firstChild;
    if (dom) {
        hydrate(input, dom, lifecycle, {}, false);
        dom = parentDom.firstChild;
        // clear any other DOM nodes, there should be only a single entry for the root
        while (dom = dom.nextSibling) {
            parentDom.removeChild(dom);
        }
        return true;
    }
    return false;
}

// rather than use a Map, like we did before, we can use an array here
// given there shouldn't be THAT many roots on the page, the difference
// in performance is huge: https://esbench.com/bench/5802a691330ab09900a1a2da
var roots = [];
var componentToDOMNodeMap = new Map();
options.roots = roots;
function findDOMNode(ref) {
    if (!options.findDOMNodeEnabled) {
        if (process.env.NODE_ENV !== 'production') {
            throwError('findDOMNode() has been disabled, use Inferno.options.findDOMNodeEnabled = true; enabled findDOMNode(). Warning this can significantly impact performance!');
        }
        throwError();
    }
    var dom = ref && ref.nodeType ? ref : null;
    return componentToDOMNodeMap.get(ref) || dom;
}
function getRoot(dom) {
    for (var i = 0; i < roots.length; i++) {
        var root = roots[i];
        if (root.dom === dom) {
            return root;
        }
    }
    return null;
}
function setRoot(dom, input, lifecycle) {
    var root = {
        dom: dom,
        input: input,
        lifecycle: lifecycle
    };
    roots.push(root);
    return root;
}
function removeRoot(root) {
    for (var i = 0; i < roots.length; i++) {
        if (roots[i] === root) {
            roots.splice(i, 1);
            return;
        }
    }
}
if (process.env.NODE_ENV !== 'production') {
    if (isBrowser && document.body === null) {
        warning('Inferno warning: you cannot initialize inferno without "document.body". Wait on "DOMContentLoaded" event, add script to bottom of body, or use async/defer attributes on script tag.');
    }
}
var documentBody = isBrowser ? document.body : null;
function render(input, parentDom) {
    if (documentBody === parentDom) {
        if (process.env.NODE_ENV !== 'production') {
            throwError('you cannot render() to the "document.body". Use an empty element as a container instead.');
        }
        throwError();
    }
    if (input === NO_OP) {
        return;
    }
    var root = getRoot(parentDom);
    if (isNull(root)) {
        var lifecycle = new Lifecycle();
        if (!isInvalid(input)) {
            if (input.dom) {
                input = cloneVNode(input);
            }
            if (!hydrateRoot(input, parentDom, lifecycle)) {
                mount(input, parentDom, lifecycle, {}, false);
            }
            root = setRoot(parentDom, input, lifecycle);
            lifecycle.trigger();
        }
    }
    else {
        var lifecycle$1 = root.lifecycle;
        lifecycle$1.listeners = [];
        if (isNullOrUndef(input)) {
            unmount(root.input, parentDom, lifecycle$1, false, false);
            removeRoot(root);
        }
        else {
            if (input.dom) {
                input = cloneVNode(input);
            }
            patch(root.input, input, parentDom, lifecycle$1, {}, false, false);
        }
        lifecycle$1.trigger();
        root.input = input;
    }
    if (root) {
        var rootInput = root.input;
        if (rootInput && (rootInput.flags & 28 /* Component */)) {
            return rootInput.children;
        }
    }
}
function createRenderer(_parentDom) {
    var parentDom = _parentDom || null;
    return function renderer(lastInput, nextInput) {
        if (!parentDom) {
            parentDom = lastInput;
        }
        render(nextInput, parentDom);
    };
}

function linkEvent(data, event) {
    return { data: data, event: event };
}

if (process.env.NODE_ENV !== 'production') {
	Object.freeze(EMPTY_OBJ);
	var testFunc = function testFn() {};
	if ((testFunc.name || testFunc.toString()).indexOf('testFn') === -1) {
		warning(('It looks like you\'re using a minified copy of the development build ' +
				'of Inferno. When deploying Inferno apps to production, make sure to use ' +
				'the production build which skips development warnings and is faster. ' +
				'See http://infernojs.org for more details.'
		));
	}
}

// This will be replaced by rollup
var version = '1.2.2';

// we duplicate it so it plays nicely with different module loading systems
var index = {
	linkEvent: linkEvent,
	// core shapes
	createVNode: createVNode,

	// cloning
	cloneVNode: cloneVNode,

	// used to shared common items between Inferno libs
	NO_OP: NO_OP,
	EMPTY_OBJ: EMPTY_OBJ,

	// DOM
	render: render,
	findDOMNode: findDOMNode,
	createRenderer: createRenderer,
	options: options,
	version: version
};

exports['default'] = index;
exports.linkEvent = linkEvent;
exports.createVNode = createVNode;
exports.cloneVNode = cloneVNode;
exports.NO_OP = NO_OP;
exports.EMPTY_OBJ = EMPTY_OBJ;
exports.render = render;
exports.findDOMNode = findDOMNode;
exports.createRenderer = createRenderer;
exports.options = options;
exports.version = version;

Object.defineProperty(exports, '__esModule', { value: true });

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ListDemo_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GridDemo_js__ = __webpack_require__(13);





const container = document.createElement('div');
container.classList.add('app');
document.body.appendChild(container);

__WEBPACK_IMPORTED_MODULE_0_inferno___default.a.render(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element___default()(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_1_inferno_create_element___default()(__WEBPACK_IMPORTED_MODULE_3__GridDemo_js__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_1_inferno_create_element___default()('div', { style: { height: 30 } }),
    __WEBPACK_IMPORTED_MODULE_1_inferno_create_element___default()(__WEBPACK_IMPORTED_MODULE_2__ListDemo_js__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_1_inferno_create_element___default()('div', { style: { height: 30 } })
), container);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGIwODg3MjFhZWJmZDI4ZjI1MTciLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vLWNyZWF0ZS1lbGVtZW50L2luZmVybm8tY3JlYXRlLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vLWNvbXBvbmVudC9pbmZlcm5vLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9jL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wYXJhbXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vaW5mZXJuby9pbmZlcm5vLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25DcmVhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVmYXVsdENvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVmYXVsdFJvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9jL3dpdGhQcm9wc09uQ2hhbmdlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZXMvR3JpZERlbW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGVzL0xpc3REZW1vLmpzIiwid2VicGFjazovLy8uL3NyYy9HcmlkLmpzIiwid2VicGFjazovLy8uL3NyYy9IZWFkZXIvQ29sdW1uR2hvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0hlYWRlci9Db2x1bW5XcmFwcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9IZWFkZXIvQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9IZWFkZXIvRHJhZ2dhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9IZWFkZXIvRHJhZ2dhYmxlQ29sdW1uLmpzIiwid2VicGFjazovLy8uL3NyYy9IZWFkZXIvUmVzaXplR2hvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0hlYWRlci9SZXNpemVyLmpzIiwid2VicGFjazovLy8uL3NyYy9IZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xpc3QvQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9MaXN0L1Jvd1dyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvYy9zaG91bGRVcGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvYy93aXRoSGFuZGxlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvYy93aXRoTWlkZGxlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvYy93aXRoUGlubmFibGVDb2x1bW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9ob2Mvd2l0aFNjcm9sbFByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9jb2x1bW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvcm93U3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2Jpc2VjdENvbHVtbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvbXBvc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2dldEtleXNCeUluZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9nZXRWaXNpYmxlUm93cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2VsZWN0R3JpZERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3RyaW1Db2x1bW5XaWR0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC9pbmZlcm5vLWNvbXBvbmVudC5ub2RlLmpzIiwid2VicGFjazovLy8uL34vaW5mZXJuby9kaXN0L2luZmVybm8tY3JlYXRlLWVsZW1lbnQubm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC9pbmZlcm5vLm5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGVzL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHRNaW5XaWR0aCIsImRlZmF1bHRCb3JkZXIiLCJkZWZhdWx0QWN0aXZlQm9yZGVyIiwiZGVmYXVsdEhlYWRlckJhY2tncm91bmQiLCJoZWFkZXJaaW5kZXgiLCJwaW5uZWRaaW5kZXgiLCJyZXNpemVHaG9zdFppbmRleCIsIm1hcmtNb3ZlRGVzdCIsIm5hbWUiLCJsZWZ0IiwicmlnaHQiLCJ0eXBlIiwibW92ZUNvbHVtbiIsIm1vdmVSZXNpemVHaG9zdCIsInBvc2l0aW9uIiwicmVzaXplQ29sdW1uIiwic2l6ZSIsImZpbHRlckNvbHVtbiIsInZhbHVlIiwic29ydENvbHVtbiIsInNlbGVjdFJvdyIsInJvd0luZGV4IiwiZ2V0Qm9yZGVyTGVmdCIsImNvbHVtbiIsImluZGV4IiwiZ2hvc3QiLCJtb3ZlTGVmdCIsImdldEJvcmRlclJpZ2h0IiwibW92ZVJpZ2h0IiwiZ2V0T3BhY2l0eSIsImdldENvbHVtblN0eWxlIiwiaGVpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsIm92ZXJmbG93IiwiYm9yZGVyVG9wIiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyTGVmdCIsImJvcmRlclJpZ2h0IiwiYmFja2dyb3VuZCIsIm9wYWNpdHkiLCJnZXRJbnB1dFN0eWxlIiwid2lkdGgiLCJib3JkZXIiLCJtYXJnaW5Cb3R0b20iLCJBcnJvdyIsImRpcmVjdGlvbiIsIndpdGhIYW5kbGVycyIsIm9uU29ydENsaW5rIiwicHJvcHMiLCJjYWxsYmFjayIsIm9uRmlsdGVySW5wdXQiLCJldmVudCIsInRhcmdldCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZGlzcGxheU5hbWUiLCJzb3J0IiwiZW5hYmxlRmlsdGVyaW5nIiwicGxhY2Vob2xkZXIiLCJnZXRSb3dTdHlsZSIsInN0YXRlIiwiY3Vyc29yIiwic2VsZWN0ZWRJbmRleCIsIkRlZmF1bHRSb3ciLCJjb2x1bW5zIiwibWFwIiwiaXRlbSIsImNvbHVtbkluZGV4Iiwid2hpdGVTcGFjZSIsInRleHRPdmVyZmxvdyIsImRhdHVtIiwiY29tcG9zZSIsIndpdGhNaWRkbGVTdGF0ZSIsInN0YXJ0IiwiZW5kIiwiZ2V0VmlzaWJsZVJvd3MiLCJzY3JvbGxUb3AiLCJ2aWV3cG9ydEhlaWdodCIsInJvd0hlaWdodCIsInJvd3NDb3VudCIsImRhdGEiLCJsZW5ndGgiLCJrZXlzIiwiZ2V0S2V5c0J5SW5kZXgiLCJzaG91bGRVcGRhdGUiLCJuZXh0UHJvcHMiLCJjb21wb25lbnQiLCJzbGljZSIsIm1hcHBlZEtleXMiLCJtYXBQcm9wcyIsIkJhc2VDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJzb21lIiwia2V5Iiwic2V0U3RhdGUiLCJyZW5kZXIiLCJUcmFja2VkR3JpZCIsIndpdGhTY3JvbGxQcm9wcyIsIkFycmF5IiwiZmlsbCIsImkiLCJjb2wxMSIsImNvbDEiLCJjb2wyIiwiY29sMjEiLCJjb2wzIiwiVmlld3BvcnQiLCJncmlkU3RhdGUiLCJlbmFibGVTb3J0aW5nIiwicGlubmVkTGVmdCIsIm1pbldpZHRoIiwicmVzaXppbmciLCJwaW5uZWRSaWdodCIsIm1heFdpZHRoIiwibW92aW5nIiwicm93U3RhdGUiLCJvcmlnaW5hbERhdGEiLCJiaW5kIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInJlZHVjZXIiLCJzZWxlY3RHcmlkRGF0YSIsInVuZGVmaW5lZCIsIlRyYWNrZWRMaXN0IiwiUm93IiwiZGVmYXVsdFN0YXRlIiwid2l0aFByb3BzT25DaGFuZ2UiLCJjb2x1bW5TdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsInRhYmxlV2lkdGgiLCJyZWR1Y2UiLCJhY2MiLCJjb2x1bW5Db21wb25lbnQiLCJDb2x1bW4iLCJyb3dDb21wb25lbnQiLCJHcmlkV3JhcHBlciIsImRyYWdnaW5nIiwiZ2hvc3RYIiwib25SZXNpemluZyIsIm9uUmVzaXplIiwib25Nb3ZpbmciLCJvbk1vdmUiLCJnaG9zdFBvc2l0aW9uIiwicmVzaXppbmdOYW1lIiwiY29sdW1uV2lkdGgiLCJtb3ZpbmdOYW1lIiwibW92aW5nTGVmdCIsIm1vdmluZ1JpZ2h0IiwiZmxleFNocmluayIsInBvaW50ZXJFdmVudHMiLCJ1c2VyU2VsZWN0IiwiQm9vbGVhbiIsImhlYWRlckhlaWdodCIsInpJbmRleCIsInRvcCIsIngiLCJjaGlsZHJlbiIsImJvdHRvbSIsInRyYW5zZm9ybSIsIm1pbk9mZnNldCIsIkRyYWdnYWJsZSIsIm9uTW91c2VEb3duIiwiZG93bkV2ZW50IiwiZWxlbWVudFgiLCJjdXJyZW50VGFyZ2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsIm1vdmVkIiwib25Nb3VzZU1vdmUiLCJtb3ZlRXZlbnQiLCJwb3MiLCJNYXRoIiwiYWJzIiwib25EcmFnIiwib25Nb3VzZVVwIiwidXBFdmVudCIsImRvY3VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uRW5kIiwib25TdGFydCIsImFkZEV2ZW50TGlzdGVuZXIiLCJEcmFnZ2FibGVDb2x1bW4iLCJyZWZSZXNpemVyIiwiZWxlbWVudCIsInJlc2l6ZXIiLCJlbmFibGVkIiwiZSIsIlJlc2l6ZUdob3N0IiwiSGVhZGVyV3JhcHBlciIsImN1cnJlbnRJbmRleCIsImZpbmRJbmRleCIsImQiLCJjdXJyZW50Q29sdW1uIiwiY3VycmVudExlZnQiLCJzdGFydE1vdmluZ1Bvc2l0aW9uIiwidHJpbUNvbHVtbldpZHRoIiwibGVmdEluZGV4IiwicmlnaHRJbmRleCIsImJpc2VjdENvbHVtbnMiLCJsZWZ0TmFtZSIsInJpZ2h0TmFtZSIsInJlbmRlcmVkVG9wIiwidGVzdCIsInNob3VsZENvbXBvbmVudFVwZGF0ZSIsImhhbmRsZXJzIiwiYXJncyIsImxlZnRDb2x1bW5zIiwiZmlsdGVyIiwiY2VudGVyQ29sdW1ucyIsInJpZ2h0Q29sdW1ucyIsInNjcm9sbExlZnQiLCJvblNjcm9sbCIsInZpZXdwb3J0V2lkdGgiLCJjb2x1bW5zUmVkdWNlciIsInJvd1N0YXRlUmVkdWNlciIsImxhc3QiLCJyZWxhdGl2ZSIsImhhbGYiLCJmdW5jcyIsImFyZyIsImEiLCJiIiwiZW1wdHkiLCJjcmVhdGUiLCJpbnZlcnQiLCJvYmoiLCJjcmVhdGVGcmVlS2V5R2VuZXJhdG9yIiwiaW5kZXhlcyIsImxhc3RQb2ludGVyIiwiZ2V0UmVjb3ZlcmVkS2V5cyIsImxhc3RLZXlzIiwiZ2VuZXJhdGVLZXlzIiwiZ2VuZXJhdGVLZXkiLCJyZWNvdmVyZWQiLCJnZW5lcmF0ZWQiLCJjbHVzdGVyU2l6ZSIsImNlaWwiLCJ0b3BDbHVzdGVyIiwiZmxvb3IiLCJtYXgiLCJtaW4iLCJmaWx0ZXJSb3dCeUNvbHVtbnMiLCJyb3ciLCJldmVyeSIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsInNvcnRSb3dzQnlDb2x1bW5zIiwiZmlsdGVyZWRDb2x1bW5zIiwic29ydGVkQ29sdW1uIiwiZmluZCIsImZpbHRlcmVkIiwic29ydGVkIiwiSW5maW5pdHkiLCJjb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYm9keSIsImFwcGVuZENoaWxkIiwiSW5mZXJubyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RFQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUM7Ozs7Ozs7O0FDblREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsQ0FBQyw0QkFBNEI7O0FBRTdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix5QkFBeUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7OztBQ3pKRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hELENBQUMsNEJBQTRCOztBQUU3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHNCQUFzQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELGtCQUFrQixFQUFFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlCQUF5QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QywwQkFBMEI7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEMsMEJBQTBCLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiwyQkFBMkI7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGtCQUFrQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix3QkFBd0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix3QkFBd0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsYUFBYTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsV0FBVztBQUN2QztBQUNBO0FBQ0Esb0NBQW9DLFdBQVc7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixXQUFXO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixXQUFXO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxRQUFRO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFFBQVE7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MscUNBQXFDLEVBQUU7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1CQUFtQixFQUFFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVHQUF1RztBQUN2RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Q0FBOEMsY0FBYzs7QUFFNUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RpRkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUMsWUFBWTdFLFNBQVM4RSxhQUFULENBQXVCLEtBQXZCLENBQWxCO0FBQ0FELFVBQVVFLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLEtBQXhCO0FBQ0FoRixTQUFTaUYsSUFBVCxDQUFjQyxXQUFkLENBQTBCTCxTQUExQjs7QUFFQSwrQ0FBQU0sQ0FBUXRLLE1BQVIsQ0FDSTtBQUFBO0FBQUE7QUFDSSxtRUFBQyw2REFBRCxPQURKO0FBRUksNEVBQUssT0FBTyxFQUFFbEUsUUFBUSxFQUFWLEVBQVosR0FGSjtBQUdJLG1FQUFDLDZEQUFELE9BSEo7QUFJSSw0RUFBSyxPQUFPLEVBQUVBLFFBQVEsRUFBVixFQUFaO0FBSkosQ0FESixFQU9Ja08sU0FQSixFIiwiZmlsZSI6ImV4YW1wbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0Myk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGIwODg3MjFhZWJmZDI4ZjI1MTciLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ2luZmVybm8vZGlzdC9pbmZlcm5vLWNyZWF0ZS1lbGVtZW50Lm5vZGUnKTtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBtb2R1bGUuZXhwb3J0cztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5mZXJuby1jcmVhdGUtZWxlbWVudC9pbmZlcm5vLWNyZWF0ZS1lbGVtZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnaW5mZXJuby9kaXN0L2luZmVybm8tY29tcG9uZW50Lm5vZGUnKTtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBtb2R1bGUuZXhwb3J0cztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5mZXJuby1jb21wb25lbnQvaW5mZXJuby1jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBzaG91bGRVcGRhdGUgfSBmcm9tICcuL3Nob3VsZFVwZGF0ZS5qcyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aEhhbmRsZXJzIH0gZnJvbSAnLi93aXRoSGFuZGxlcnMuanMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhNaWRkbGVTdGF0ZSB9IGZyb20gJy4vd2l0aE1pZGRsZVN0YXRlLmpzJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUHJvcHNPbkNoYW5nZSB9IGZyb20gJy4vd2l0aFByb3BzT25DaGFuZ2UuanMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhTY3JvbGxQcm9wcyB9IGZyb20gJy4vd2l0aFNjcm9sbFByb3BzLmpzJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUGlubmFibGVDb2x1bW5zIH0gZnJvbSAnLi93aXRoUGlubmFibGVDb2x1bW5zLmpzJztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hvYy9pbmRleC5qcyIsImV4cG9ydCBjb25zdCBkZWZhdWx0TWluV2lkdGggPSA2MDtcclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRCb3JkZXIgPSAnMXB4IHNvbGlkICNkNGQ0ZDQnO1xyXG5leHBvcnQgY29uc3QgZGVmYXVsdEFjdGl2ZUJvcmRlciA9ICcxcHggc29saWQgIzAwMCc7XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0SGVhZGVyQmFja2dyb3VuZCA9ICdsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZWVlZWVlLCAjZmZmZmZmKSc7XHJcblxyXG5leHBvcnQgY29uc3QgaGVhZGVyWmluZGV4ID0gMTtcclxuZXhwb3J0IGNvbnN0IHBpbm5lZFppbmRleCA9IDI7XHJcbmV4cG9ydCBjb25zdCByZXNpemVHaG9zdFppbmRleCA9IDM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wYXJhbXMuanMiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNvbXBvc2UgfSBmcm9tICcuL2NvbXBvc2UuanMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGdldEtleXNCeUluZGV4IH0gZnJvbSAnLi9nZXRLZXlzQnlJbmRleC5qcyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0VmlzaWJsZVJvd3MgfSBmcm9tICcuL2dldFZpc2libGVSb3dzLmpzJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBiaXNlY3RDb2x1bW5zIH0gZnJvbSAnLi9iaXNlY3RDb2x1bW5zLmpzJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB0cmltQ29sdW1uV2lkdGggfSBmcm9tICcuL3RyaW1Db2x1bW5XaWR0aC5qcyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2VsZWN0R3JpZERhdGEgfSBmcm9tICcuL3NlbGVjdEdyaWREYXRhLmpzJztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvaW5mZXJuby5ub2RlJyk7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gbW9kdWxlLmV4cG9ydHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2luZmVybm8vaW5mZXJuby5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgbWFya01vdmVEZXN0ID0gKG5hbWUsIGxlZnQsIHJpZ2h0KSA9PiAoe1xyXG4gICAgdHlwZTogJ01BUktfTU9WRV9ERVNUJyxcclxuICAgIG5hbWUsXHJcbiAgICBsZWZ0LFxyXG4gICAgcmlnaHRcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbW92ZUNvbHVtbiA9IChuYW1lLCBsZWZ0LCByaWdodCkgPT4gKHtcclxuICAgIHR5cGU6ICdNT1ZFX0NPTFVNTicsXHJcbiAgICBuYW1lLFxyXG4gICAgbGVmdCxcclxuICAgIHJpZ2h0XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1vdmVSZXNpemVHaG9zdCA9IChuYW1lLCBwb3NpdGlvbikgPT4gKHtcclxuICAgIHR5cGU6ICdNT1ZFX1JFU0laRV9HSE9TVCcsXHJcbiAgICBuYW1lLFxyXG4gICAgcG9zaXRpb25cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVzaXplQ29sdW1uID0gKG5hbWUsIHNpemUpID0+ICh7XHJcbiAgICB0eXBlOiAnUkVTSVpFX0NPTFVNTicsXHJcbiAgICBuYW1lLFxyXG4gICAgc2l6ZVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmaWx0ZXJDb2x1bW4gPSAobmFtZSwgdmFsdWUpID0+ICh7XHJcbiAgICB0eXBlOiAnRklMVEVSX0NPTFVNTicsXHJcbiAgICBuYW1lLFxyXG4gICAgdmFsdWVcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc29ydENvbHVtbiA9IG5hbWUgPT4gKHtcclxuICAgIHR5cGU6ICdTT1JUX0NPTFVNTicsXHJcbiAgICBuYW1lXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdFJvdyA9IHJvd0luZGV4ID0+ICh7XHJcbiAgICB0eXBlOiAnU0VMRUNUX1JPVycsXHJcbiAgICByb3dJbmRleFxyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FjdGlvbkNyZWF0b3JzLmpzIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnaW5mZXJuby1jcmVhdGUtZWxlbWVudCc7XHJcbmltcG9ydCB7IHdpdGhIYW5kbGVycyB9IGZyb20gJy4vaG9jL2luZGV4LmpzJztcclxuaW1wb3J0IHsgZGVmYXVsdEJvcmRlciwgZGVmYXVsdEFjdGl2ZUJvcmRlciwgZGVmYXVsdEhlYWRlckJhY2tncm91bmQgfSBmcm9tICcuL3BhcmFtcy5qcyc7XHJcbmltcG9ydCB7IGZpbHRlckNvbHVtbiwgc29ydENvbHVtbiB9IGZyb20gJy4vYWN0aW9uQ3JlYXRvcnMuanMnO1xyXG5cclxuY29uc3QgZ2V0Qm9yZGVyTGVmdCA9IChjb2x1bW4sIGluZGV4LCBnaG9zdCkgPT5cclxuICAgIGluZGV4ID09PSAwIHx8IGdob3N0ID8gKGNvbHVtbi5tb3ZlTGVmdCA/IGRlZmF1bHRBY3RpdmVCb3JkZXIgOiBkZWZhdWx0Qm9yZGVyKSA6ICcnO1xyXG5cclxuY29uc3QgZ2V0Qm9yZGVyUmlnaHQgPSBjb2x1bW4gPT5cclxuICAgIGNvbHVtbi5tb3ZlUmlnaHQgPyBkZWZhdWx0QWN0aXZlQm9yZGVyIDogZGVmYXVsdEJvcmRlcjtcclxuXHJcbmNvbnN0IGdldE9wYWNpdHkgPSBnaG9zdCA9PiBnaG9zdCA/IC44IDogMTtcclxuXHJcbmNvbnN0IGdldENvbHVtblN0eWxlID0gKGNvbHVtbiwgaW5kZXgsIGdob3N0KSA9PiAoe1xyXG4gICAgaGVpZ2h0OiA2MCxcclxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgcGFkZGluZzogJzAgOHB4JyxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGJvcmRlclRvcDogZGVmYXVsdEJvcmRlcixcclxuICAgIGJvcmRlckJvdHRvbTogZGVmYXVsdEJvcmRlcixcclxuICAgIGJvcmRlckxlZnQ6IGdldEJvcmRlckxlZnQoY29sdW1uLCBpbmRleCwgZ2hvc3QpLFxyXG4gICAgYm9yZGVyUmlnaHQ6IGdldEJvcmRlclJpZ2h0KGNvbHVtbiwgaW5kZXgsIGdob3N0KSxcclxuICAgIGJhY2tncm91bmQ6IGRlZmF1bHRIZWFkZXJCYWNrZ3JvdW5kLFxyXG4gICAgb3BhY2l0eTogZ2V0T3BhY2l0eShnaG9zdClcclxufSk7XHJcblxyXG5jb25zdCBnZXRJbnB1dFN0eWxlID0gKCkgPT4gKHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgIHBhZGRpbmc6ICcwIDhweCcsXHJcbiAgICBib3JkZXI6IDAsXHJcbiAgICBib3JkZXJCb3R0b206IGRlZmF1bHRCb3JkZXIsXHJcbiAgICBtYXJnaW5Cb3R0b206IDhcclxufSk7XHJcblxyXG5jb25zdCBBcnJvdyA9ICh7IGRpcmVjdGlvbiB9KSA9PiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgW2RpcmVjdGlvbiA9PT0gJ2FzYycgPyAnYm9yZGVyQm90dG9tJyA6ICdib3JkZXJUb3AnXTogJzRweCBzb2xpZCcsXHJcbiAgICAgICAgYm9yZGVyTGVmdDogJzRweCBzb2xpZCB0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgYm9yZGVyUmlnaHQ6ICc0cHggc29saWQgdHJhbnNwYXJlbnQnXHJcbiAgICB9fT5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEhhbmRsZXJzKHtcclxuICAgIG9uU29ydENsaW5rOiBwcm9wcyA9PiBwcm9wcy5jYWxsYmFjayhzb3J0Q29sdW1uKHByb3BzLmNvbHVtbi5uYW1lKSksXHJcbiAgICBvbkZpbHRlcklucHV0OiAocHJvcHMsIGV2ZW50KSA9PiBwcm9wcy5jYWxsYmFjayhmaWx0ZXJDb2x1bW4ocHJvcHMuY29sdW1uLm5hbWUsIGV2ZW50LnRhcmdldC52YWx1ZSkpXHJcbn0pKHByb3BzID0+XHJcbiAgICA8ZGl2IHN0eWxlPXtnZXRDb2x1bW5TdHlsZShwcm9wcy5jb2x1bW4sIHByb3BzLmluZGV4LCBwcm9wcy5naG9zdCl9PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgaGVpZ2h0OiAzMCwgfX0gb25DbGljaz17cHJvcHMub25Tb3J0Q2xpbmt9PlxyXG4gICAgICAgICAgICB7cHJvcHMuY29sdW1uLmRpc3BsYXlOYW1lIHx8IHByb3BzLmNvbHVtbi5uYW1lfVxyXG4gICAgICAgICAgICB7cHJvcHMuY29sdW1uLnNvcnQgJiZcclxuICAgICAgICAgICAgICAgIDxBcnJvdyBkaXJlY3Rpb249e3Byb3BzLmNvbHVtbi5zb3J0fSAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3Byb3BzLmNvbHVtbi5lbmFibGVGaWx0ZXJpbmcgJiZcclxuICAgICAgICAgICAgPGlucHV0IHN0eWxlPXtnZXRJbnB1dFN0eWxlKCl9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMuY29sdW1uLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmNvbHVtbi52YWx1ZX1cclxuICAgICAgICAgICAgICAgIG9uSW5wdXQ9e3Byb3BzLm9uRmlsdGVySW5wdXR9IC8+XHJcbiAgICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9EZWZhdWx0Q29sdW1uLmpzIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnaW5mZXJuby1jcmVhdGUtZWxlbWVudCc7XHJcbmltcG9ydCB7IGRlZmF1bHRCb3JkZXIgfSBmcm9tICcuL3BhcmFtcy5qcyc7XHJcbmltcG9ydCB7IHdpdGhIYW5kbGVycyB9IGZyb20gJy4vaG9jL2luZGV4LmpzJztcclxuaW1wb3J0IHsgc2VsZWN0Um93IH0gZnJvbSAnLi9hY3Rpb25DcmVhdG9ycy5qcyc7XHJcblxyXG5jb25zdCBnZXRSb3dTdHlsZSA9IChzdGF0ZSwgaW5kZXgpID0+ICh7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBoZWlnaHQ6ICdpbmhlcml0JyxcclxuICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxyXG4gICAgYmFja2dyb3VuZDogc3RhdGUuc2VsZWN0ZWRJbmRleCA9PT0gaW5kZXggPyAnI2M5ZGRlMScgOiBpbmRleCAlIDIgPT09IDAgPyAnI2ZmZicgOiAnI2YzZjNmMydcclxufSk7XHJcblxyXG5jb25zdCBnZXRDb2x1bW5TdHlsZSA9IChjb2x1bW4sIGluZGV4KSA9PiAoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICB3aWR0aDogY29sdW1uLndpZHRoLFxyXG4gICAgcGFkZGluZzogJzAgOHB4JyxcclxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgYm9yZGVyTGVmdDogaW5kZXggPT09IDAgPyBkZWZhdWx0Qm9yZGVyIDogJycsXHJcbiAgICBib3JkZXJSaWdodDogZGVmYXVsdEJvcmRlclxyXG59KTtcclxuXHJcbmNvbnN0IERlZmF1bHRSb3cgPSB3aXRoSGFuZGxlcnMoe1xyXG4gICAgc2VsZWN0Um93OiBwcm9wcyA9PiBwcm9wcy5jYWxsYmFjayhzZWxlY3RSb3cocHJvcHMuaW5kZXgpKVxyXG59KShwcm9wcyA9PlxyXG4gICAgPGRpdiBzdHlsZT17Z2V0Um93U3R5bGUocHJvcHMuc3RhdGUsIHByb3BzLmluZGV4KX0gb25DbGljaz17cHJvcHMuc2VsZWN0Um93fT5cclxuICAgICAgICB7cHJvcHMuY29sdW1ucy5tYXAoKGl0ZW0sIGNvbHVtbkluZGV4KSA9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtnZXRDb2x1bW5TdHlsZShpdGVtLCBjb2x1bW5JbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBvdmVyZmxvdzogJ2hpZGRlbicsIHdoaXRlU3BhY2U6ICdub3dyYXAnLCB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRhdHVtW2l0ZW0ubmFtZV19XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdFJvdztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0RlZmF1bHRSb3cuanMiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICdpbmZlcm5vLWNyZWF0ZS1lbGVtZW50JztcclxuaW1wb3J0IHsgc2hvdWxkVXBkYXRlLCB3aXRoTWlkZGxlU3RhdGUgfSBmcm9tICcuLi9ob2MvaW5kZXguanMnO1xyXG5pbXBvcnQgeyBjb21wb3NlLCBnZXRWaXNpYmxlUm93cywgZ2V0S2V5c0J5SW5kZXggfSBmcm9tICcuLi91dGlscy9pbmRleC5qcyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi9Db250YWluZXIuanMnO1xyXG5pbXBvcnQgUm93V3JhcHBlciBmcm9tICcuL1Jvd1dyYXBwZXIuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcclxuICAgIHdpdGhNaWRkbGVTdGF0ZSgocHJvcHMsIHN0YXRlID0ge30pID0+IHtcclxuICAgICAgICBjb25zdCBbc3RhcnQsIGVuZF0gPSBnZXRWaXNpYmxlUm93cyh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogcHJvcHMuc2Nyb2xsVG9wLFxyXG4gICAgICAgICAgICB2aWV3cG9ydEhlaWdodDogcHJvcHMudmlld3BvcnRIZWlnaHQsXHJcbiAgICAgICAgICAgIHJvd0hlaWdodDogcHJvcHMucm93SGVpZ2h0LFxyXG4gICAgICAgICAgICByb3dzQ291bnQ6IHByb3BzLmRhdGEubGVuZ3RoXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RhcnQsXHJcbiAgICAgICAgICAgIGVuZCxcclxuICAgICAgICAgICAga2V5czogZ2V0S2V5c0J5SW5kZXgoc3RhdGUua2V5cywgc3RhcnQsIGVuZClcclxuICAgICAgICB9O1xyXG4gICAgfSksXHJcbiAgICBzaG91bGRVcGRhdGUoKHByb3BzLCBuZXh0UHJvcHMpID0+XHJcbiAgICAgICAgcHJvcHMuc3RhcnQgIT09IG5leHRQcm9wcy5zdGFydCB8fFxyXG4gICAgICAgIHByb3BzLmVuZCAhPT0gbmV4dFByb3BzLmVuZCB8fFxyXG4gICAgICAgIHByb3BzLmRhdGEgIT09IG5leHRQcm9wcy5kYXRhIHx8XHJcbiAgICAgICAgcHJvcHMucm93SGVpZ2h0ICE9PSBuZXh0UHJvcHMucm93SGVpZ2h0IHx8XHJcbiAgICAgICAgcHJvcHMuY29tcG9uZW50ICE9PSBuZXh0UHJvcHMuY29tcG9uZW50XHJcbiAgICApXHJcbikoKHsgZGF0YSwgcm93SGVpZ2h0LCBjb21wb25lbnQsIHN0YXJ0LCBlbmQsIGtleXMgfSkgPT5cclxuICAgIDxDb250YWluZXIgaGVpZ2h0PXtkYXRhLmxlbmd0aCAqIHJvd0hlaWdodH0gcmVuZGVyZWRUb3A9e3N0YXJ0ICogcm93SGVpZ2h0fT5cclxuICAgICAgICB7ZGF0YS5zbGljZShzdGFydCwgZW5kICsgMSkubWFwKChkYXR1bSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgIDxSb3dXcmFwcGVyXHJcbiAgICAgICAgICAgICAgICBrZXk9e2tleXNbc3RhcnQgKyBpbmRleF19XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9e3Jvd0hlaWdodH1cclxuICAgICAgICAgICAgICAgIGluZGV4PXtzdGFydCArIGluZGV4fVxyXG4gICAgICAgICAgICAgICAgZGF0dW09e2RhdHVtfVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgIDwvQ29udGFpbmVyPlxyXG4pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGlzdC9pbmRleC5qcyIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJ2luZmVybm8tY3JlYXRlLWVsZW1lbnQnO1xyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ2luZmVybm8tY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChtYXBwZWRLZXlzLCBtYXBQcm9wcykgPT4gQmFzZUNvbXBvbmVudCA9PiBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gbWFwUHJvcHMocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgaWYgKG1hcHBlZEtleXMuc29tZShrZXkgPT4gdGhpcy5wcm9wc1trZXldICE9PSBuZXh0UHJvcHNba2V5XSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShtYXBQcm9wcyhuZXh0UHJvcHMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHByb3BzLCBzdGF0ZSkge1xyXG4gICAgICAgIHJldHVybiA8QmFzZUNvbXBvbmVudCB7Li4ucHJvcHN9IHsuLi5zdGF0ZX0gLz47XHJcbiAgICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ob2Mvd2l0aFByb3BzT25DaGFuZ2UuanMiLCJleHBvcnQgeyBkZWZhdWx0IGFzIEdyaWQgfSBmcm9tICcuL0dyaWQuanMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIExpc3QgfSBmcm9tICcuL0xpc3QvaW5kZXguanMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIERlZmF1bHRDb2x1bW4gfSBmcm9tICcuL0RlZmF1bHRDb2x1bW4uanMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIERlZmF1bHRSb3cgfSBmcm9tICcuL0RlZmF1bHRSb3cuanMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXJzL2luZGV4LmpzJztcclxuZXhwb3J0IHsgc2VsZWN0R3JpZERhdGEgfSBmcm9tICcuL3V0aWxzL2luZGV4LmpzJztcclxuZXhwb3J0IHsgd2l0aFNjcm9sbFByb3BzIH0gZnJvbSAnLi9ob2MvaW5kZXguanMnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnaW5mZXJuby1jcmVhdGUtZWxlbWVudCc7XHJcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnaW5mZXJuby1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHcmlkLCByZWR1Y2VyLCBzZWxlY3RHcmlkRGF0YSwgd2l0aFNjcm9sbFByb3BzIH0gZnJvbSAnLi4vaW5kZXguanMnO1xyXG5cclxuY29uc3QgVHJhY2tlZEdyaWQgPSB3aXRoU2Nyb2xsUHJvcHMoR3JpZCk7XHJcblxyXG5jb25zdCBkYXRhID0gQXJyYXkoMTAwMDAwKS5maWxsKDApLm1hcCgoaXRlbSwgaSkgPT4gKHtcclxuICAgIGNvbDExOiBgUGlubmVkIGxlZnQgJHtpfWAsXHJcbiAgICBjb2wxOiBpLFxyXG4gICAgY29sMjogYFRpdGxlICR7aX1gLFxyXG4gICAgY29sMjE6IGBQaW5uZWQgcmlnaHQgJHtpfWAsXHJcbiAgICBjb2wzOiAnTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4nXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdwb3J0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGdyaWRTdGF0ZToge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NvbDEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVTb3J0aW5nOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjb2wxMScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpbm5lZExlZnQ6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NvbDInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogNjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZUZpbHRlcmluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXppbmc6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NvbDIxJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGlubmVkUmlnaHQ6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NvbDMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0NvbHVtbiAzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDMwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92aW5nOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHJvd1N0YXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleDogMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICBvcmlnaW5hbERhdGE6IGRhdGFcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gdGhpcy5jYWxsYmFjay5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxiYWNrKGFjdGlvbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbik7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdGSUxURVJfQ09MVU1OJzpcclxuICAgICAgICAgICAgY2FzZSAnU09SVF9DT0xVTU4nOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBncmlkU3RhdGUgPSByZWR1Y2VyKHRoaXMuc3RhdGUuZ3JpZFN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHNlbGVjdEdyaWREYXRhKGdyaWRTdGF0ZSwgdGhpcy5zdGF0ZS5vcmlnaW5hbERhdGEpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFN0YXRlOiByZWR1Y2VyKHRoaXMuc3RhdGUuZ3JpZFN0YXRlLCBhY3Rpb24pXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoe30sIHsgZ3JpZFN0YXRlLCBkYXRhIH0pIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyPkdyaWQgZXhhbXBsZTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8VHJhY2tlZEdyaWRcclxuICAgICAgICAgICAgICAgICAgICB2aWV3cG9ydFdpZHRoPXs2MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld3BvcnRIZWlnaHQ9ezM2MH1cclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJIZWlnaHQ9ezYwfVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd0hlaWdodD17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uQ29tcG9uZW50PXt1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgcm93Q29tcG9uZW50PXt1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU9e2dyaWRTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrPXt0aGlzLmNhbGxiYWNrfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXhhbXBsZXMvR3JpZERlbW8uanMiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICdpbmZlcm5vLWNyZWF0ZS1lbGVtZW50JztcclxuaW1wb3J0IHsgTGlzdCwgRGVmYXVsdFJvdywgd2l0aFNjcm9sbFByb3BzIH0gZnJvbSAnLi4vaW5kZXguanMnO1xyXG5cclxuY29uc3QgVHJhY2tlZExpc3QgPSB3aXRoU2Nyb2xsUHJvcHMoTGlzdCk7XHJcblxyXG5jb25zdCBjb2x1bW5zID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdjb2wxJyxcclxuICAgICAgICB3aWR0aDogMTAwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdjb2wyJyxcclxuICAgICAgICB3aWR0aDogMTUwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdjb2wzJyxcclxuICAgICAgICB3aWR0aDogMjAwXHJcbiAgICB9XHJcbl07XHJcblxyXG5jb25zdCBkYXRhID0gQXJyYXkoMTAwMDAwKS5maWxsKDApLm1hcCgoaXRlbSwgaW5kZXgpID0+ICh7XHJcbiAgICBjb2wxOiBpbmRleCxcclxuICAgIGNvbDI6IGBUaXRsZSAke2luZGV4fWAsXHJcbiAgICBjb2wzOiAnTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4nXHJcbn0pKTtcclxuXHJcbmNvbnN0IFJvdyA9ICh7IGRhdHVtLCBpbmRleCB9KSA9PiAoXHJcbiAgICA8RGVmYXVsdFJvdyBzdGF0ZT17e319IGNvbHVtbnM9e2NvbHVtbnN9IGRhdHVtPXtkYXR1bX0gaW5kZXg9e2luZGV4fSAvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDI+TGlzdCBleGFtcGxlPC9oMj5cclxuICAgICAgICA8VHJhY2tlZExpc3RcclxuICAgICAgICAgICAgdmlld3BvcnRXaWR0aD17NjAwfVxyXG4gICAgICAgICAgICB2aWV3cG9ydEhlaWdodD17MzYwfVxyXG4gICAgICAgICAgICByb3dIZWlnaHQ9ezMwfVxyXG4gICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICBjb21wb25lbnQ9e1Jvd31cclxuICAgICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXhhbXBsZXMvTGlzdERlbW8uanMiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICdpbmZlcm5vLWNyZWF0ZS1lbGVtZW50JztcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tICdpbmZlcm5vLWNvbXBvbmVudCc7XHJcbmltcG9ydCBIZWFkZXIsIHsgUmVzaXplR2hvc3QgfSBmcm9tICcuL0hlYWRlci9pbmRleC5qcyc7XHJcbmltcG9ydCBMaXN0IGZyb20gJy4vTGlzdC9pbmRleC5qcyc7XHJcbmltcG9ydCBEZWZhdWx0Q29sdW1uIGZyb20gJy4vRGVmYXVsdENvbHVtbi5qcyc7XHJcbmltcG9ydCBEZWZhdWx0Um93IGZyb20gJy4vRGVmYXVsdFJvdy5qcyc7XHJcbmltcG9ydCB7IHdpdGhQcm9wc09uQ2hhbmdlLCB3aXRoUGlubmFibGVDb2x1bW5zIH0gZnJvbSAnLi9ob2MvaW5kZXguanMnO1xyXG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAnLi91dGlscy9pbmRleC5qcyc7XHJcbmltcG9ydCB7IG1hcmtNb3ZlRGVzdCwgbW92ZUNvbHVtbiwgbW92ZVJlc2l6ZUdob3N0LCByZXNpemVDb2x1bW4gfSBmcm9tICcuL2FjdGlvbkNyZWF0b3JzLmpzJztcclxuaW1wb3J0IHsgaGVhZGVyWmluZGV4LCBkZWZhdWx0TWluV2lkdGggfSBmcm9tICcuL3BhcmFtcy5qcyc7XHJcblxyXG5jb25zdCBkZWZhdWx0U3RhdGUgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXHJcbiAgICB3aXRoUHJvcHNPbkNoYW5nZShcclxuICAgICAgICBbJ3N0YXRlJ10sXHJcbiAgICAgICAgKHsgc3RhdGUgfSkgPT4gKHtcclxuICAgICAgICAgICAgY29sdW1uczogc3RhdGUuY29sdW1ucyxcclxuICAgICAgICAgICAgY29sdW1uU3RhdGU6IHN0YXRlLmNvbHVtblN0YXRlIHx8IGRlZmF1bHRTdGF0ZSxcclxuICAgICAgICAgICAgcm93U3RhdGU6IHN0YXRlLnJvd1N0YXRlIHx8IGRlZmF1bHRTdGF0ZVxyXG4gICAgICAgIH0pXHJcbiAgICApLFxyXG4gICAgd2l0aFByb3BzT25DaGFuZ2UoXHJcbiAgICAgICAgWydjb2x1bW5zJ10sXHJcbiAgICAgICAgKHsgY29sdW1ucyB9KSA9PiAoe1xyXG4gICAgICAgICAgICBjb2x1bW5zOiBjb2x1bW5zLm1hcChjb2x1bW4gPT4gT2JqZWN0LmFzc2lnbih7fSwgY29sdW1uLCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogY29sdW1uLndpZHRoIHx8IGNvbHVtbi5taW5XaWR0aCB8fCBkZWZhdWx0TWluV2lkdGhcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfSlcclxuICAgICksXHJcbiAgICB3aXRoUGlubmFibGVDb2x1bW5zLFxyXG4gICAgd2l0aFByb3BzT25DaGFuZ2UoXHJcbiAgICAgICAgWydjb2x1bW5zJ10sXHJcbiAgICAgICAgKHsgY29sdW1ucyB9KSA9PiAoe1xyXG4gICAgICAgICAgICB0YWJsZVdpZHRoOiBjb2x1bW5zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiBhY2MgKyBpdGVtLndpZHRoLCAwKVxyXG4gICAgICAgIH0pXHJcbiAgICApLFxyXG4gICAgd2l0aFByb3BzT25DaGFuZ2UoXHJcbiAgICAgICAgWydjb2x1bW5TdGF0ZScsICdjYWxsYmFjaycsICdjb2x1bW5Db21wb25lbnQnXSxcclxuICAgICAgICAoeyBjb2x1bW5TdGF0ZSwgY2FsbGJhY2ssIGNvbHVtbkNvbXBvbmVudDogQ29sdW1uID0gRGVmYXVsdENvbHVtbiB9KSA9PiAoe1xyXG4gICAgICAgICAgICBjb2x1bW5Db21wb25lbnQ6ICh7IGNvbHVtbiwgaW5kZXgsIGdob3N0IH0pID0+IChcclxuICAgICAgICAgICAgICAgIDxDb2x1bW4gc3RhdGU9e2NvbHVtblN0YXRlfSBjb2x1bW49e2NvbHVtbn0gaW5kZXg9e2luZGV4fSBnaG9zdD17Z2hvc3R9IGNhbGxiYWNrPXtjYWxsYmFja30gLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcbiAgICApLFxyXG4gICAgd2l0aFByb3BzT25DaGFuZ2UoXHJcbiAgICAgICAgWydyb3dTdGF0ZScsICdjb2x1bW5zJywgJ2NhbGxiYWNrJywgJ3Jvd0NvbXBvbmVudCddLFxyXG4gICAgICAgICh7IHJvd1N0YXRlLCBjb2x1bW5zLCAgY2FsbGJhY2ssIHJvd0NvbXBvbmVudDogUm93ID0gRGVmYXVsdFJvdyB9KSA9PiAoe1xyXG4gICAgICAgICAgICByb3dDb21wb25lbnQ6ICh7IGRhdHVtLCBpbmRleCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8Um93IHN0YXRlPXtyb3dTdGF0ZX0gY29sdW1ucz17Y29sdW1uc30gZGF0dW09e2RhdHVtfSBpbmRleD17aW5kZXh9IGNhbGxiYWNrPXtjYWxsYmFja30gLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcbiAgICApXHJcbikoY2xhc3MgR3JpZFdyYXBwZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBnaG9zdDogZmFsc2UsXHJcbiAgICAgICAgICAgIGdob3N0WDogMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vblJlc2l6aW5nID0gdGhpcy5vblJlc2l6aW5nLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblJlc2l6ZSA9IHRoaXMub25SZXNpemUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uTW92aW5nID0gdGhpcy5vbk1vdmluZy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25Nb3ZlID0gdGhpcy5vbk1vdmUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvblJlc2l6aW5nKG5hbWUsIGdob3N0UG9zaXRpb24pIHtcclxuICAgICAgICBpZiAobmFtZSAhPT0gdGhpcy5zdGF0ZS5yZXNpemluZ05hbWUgfHwgZ2hvc3RQb3NpdGlvbiAhPT0gdGhpcy5zdGF0ZS5naG9zdFgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkcmFnZ2luZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGdob3N0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcmVzaXppbmdOYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgZ2hvc3RYOiBnaG9zdFBvc2l0aW9uXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNhbGxiYWNrKG1vdmVSZXNpemVHaG9zdChuYW1lLCBnaG9zdFBvc2l0aW9uKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uUmVzaXplKG5hbWUsIGNvbHVtbldpZHRoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRyYWdnaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgZ2hvc3Q6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jYWxsYmFjayhyZXNpemVDb2x1bW4obmFtZSwgY29sdW1uV2lkdGgpKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdmluZyhuYW1lLCBsZWZ0LCByaWdodCkge1xyXG4gICAgICAgIGlmIChuYW1lICE9PSB0aGlzLnN0YXRlLm1vdmluZ05hbWUgfHwgbGVmdCAhPT0gdGhpcy5zdGF0ZS5tb3ZpbmdMZWZ0IHx8IHJpZ2h0ICE9PSB0aGlzLnN0YXRlLm1vdmluZ1JpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZHJhZ2dpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtb3ZpbmdOYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgbW92aW5nTGVmdDogbGVmdCxcclxuICAgICAgICAgICAgICAgIG1vdmluZ1JpZ2h0OiByaWdodFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jYWxsYmFjayhtYXJrTW92ZURlc3QobmFtZSwgbGVmdCwgcmlnaHQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3ZlKG5hbWUsIGxlZnQsIHJpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRyYWdnaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgbW92aW5nTmFtZTogbnVsbCxcclxuICAgICAgICAgICAgbW92aW5nTGVmdDogbnVsbCxcclxuICAgICAgICAgICAgbW92aW5nUmlnaHQ6IG51bGxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnByb3BzLmNhbGxiYWNrKG1vdmVDb2x1bW4obmFtZSwgbGVmdCwgcmlnaHQpKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocHJvcHMsIHsgZHJhZ2dpbmcsIGdob3N0LCBnaG9zdFggfSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgZmxleFNocmluazogMCxcclxuICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6IGRyYWdnaW5nID8gJ25vbmUnIDogJycsXHJcbiAgICAgICAgICAgICAgICB1c2VyU2VsZWN0OiBkcmFnZ2luZyA/ICdub25lJyA6ICcnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHByb3BzLnRhYmxlV2lkdGhcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICB7Qm9vbGVhbihwcm9wcy5oZWFkZXJIZWlnaHQpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3N0aWNreScsIHpJbmRleDogaGVhZGVyWmluZGV4LCB0b3A6IDAsIGhlaWdodDogcHJvcHMuaGVhZGVySGVpZ2h0IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtwcm9wcy5jb2x1bW5zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtwcm9wcy5jb2x1bW5Db21wb25lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdmU9e3RoaXMub25Nb3ZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3Zpbmc9e3RoaXMub25Nb3Zpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlc2l6ZT17dGhpcy5vblJlc2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVzaXppbmc9e3RoaXMub25SZXNpemluZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17cHJvcHMuZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A9e3Byb3BzLnNjcm9sbFRvcCAtIHByb3BzLmhlYWRlckhlaWdodH1cclxuICAgICAgICAgICAgICAgICAgICB2aWV3cG9ydEhlaWdodD17cHJvcHMudmlld3BvcnRIZWlnaHQgLSBwcm9wcy5oZWFkZXJIZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgcm93SGVpZ2h0PXtwcm9wcy5yb3dIZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtwcm9wcy5yb3dDb21wb25lbnR9IC8+XHJcbiAgICAgICAgICAgICAgICB7Z2hvc3QgJiYgPFJlc2l6ZUdob3N0IHg9e2dob3N0WH0gLz59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvR3JpZC5qcyIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJ2luZmVybm8tY3JlYXRlLWVsZW1lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgeCwgY2hpbGRyZW4gfSkgPT4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogMCwgdG9wOiAwLCBib3R0b206IDAsIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHt4fXB4KWAgfX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9IZWFkZXIvQ29sdW1uR2hvc3QuanMiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICdpbmZlcm5vLWNyZWF0ZS1lbGVtZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IGNvbHVtbiwgaW5kZXgsIGdob3N0LCBjb21wb25lbnQ6IENvbHVtbiwgY2FsbGJhY2sgfSkgPT4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyB3aWR0aDogY29sdW1uLndpZHRoIH19PlxyXG4gICAgICAgIDxDb2x1bW4gY29sdW1uPXtjb2x1bW59IGluZGV4PXtpbmRleH0gZ2hvc3Q9e2dob3N0fSBjYWxsYmFjaz17Y2FsbGJhY2t9IC8+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0hlYWRlci9Db2x1bW5XcmFwcGVyLmpzIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnaW5mZXJuby1jcmVhdGUtZWxlbWVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgcG9zaXRpb246ICdyZWxhdGl2ZScsIGhlaWdodDogJ2luaGVyaXQnIH19PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSGVhZGVyL0NvbnRhaW5lci5qcyIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJ2luZmVybm8tY3JlYXRlLWVsZW1lbnQnO1xyXG5pbXBvcnQgeyB3aXRoSGFuZGxlcnMgfSBmcm9tICcuLi9ob2MvaW5kZXguanMnO1xyXG5cclxuY29uc3QgbWluT2Zmc2V0ID0gMztcclxuXHJcbmNvbnN0IERyYWdnYWJsZSA9IHdpdGhIYW5kbGVycyh7XHJcbiAgICBvbk1vdXNlRG93bjogKHByb3BzLCBkb3duRXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50WCA9IGRvd25FdmVudC5jdXJyZW50VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBkb3duRXZlbnQuY2xpZW50WCAtIGVsZW1lbnRYO1xyXG4gICAgICAgIGxldCBtb3ZlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IG9uTW91c2VNb3ZlID0gbW92ZUV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcG9zID0gbW92ZUV2ZW50LmNsaWVudFggLSBlbGVtZW50WDtcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHBvcyAtIHN0YXJ0KSA+IG1pbk9mZnNldCB8fCBtb3ZlZCkge1xyXG4gICAgICAgICAgICAgICAgbW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcHJvcHMub25EcmFnKG1vdmVFdmVudCwgcG9zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3Qgb25Nb3VzZVVwID0gdXBFdmVudCA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IHVwRXZlbnQuY2xpZW50WCAtIGVsZW1lbnRYO1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMocG9zIC0gc3RhcnQpID4gbWluT2Zmc2V0IHx8IG1vdmVkKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5vbkVuZCh1cEV2ZW50LCB1cEV2ZW50LmNsaWVudFggLSBlbGVtZW50WCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHByb3BzLm9uU3RhcnQoZG93bkV2ZW50LCBzdGFydCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG4gICAgfVxyXG59KShwcm9wcyA9PlxyXG4gICAgPGRpdiBvbk1vdXNlRG93bj17cHJvcHMub25Nb3VzZURvd259IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJhZ2dhYmxlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSGVhZGVyL0RyYWdnYWJsZS5qcyIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJ2luZmVybm8tY3JlYXRlLWVsZW1lbnQnO1xyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ2luZmVybm8tY29tcG9uZW50JztcclxuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL0RyYWdnYWJsZS5qcyc7XHJcbmltcG9ydCBSZXNpemVyIGZyb20gJy4vUmVzaXplci5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnZ2FibGVDb2x1bW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnJlZlJlc2l6ZXIgPSBlbGVtZW50ID0+IHRoaXMucmVzaXplciA9IGVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IG5hbWU7XHJcbiAgICAgICAgbGV0IGVuYWJsZWQ7XHJcbiAgICAgICAgdGhpcy5vblN0YXJ0ID0gKGUsIHBvcykgPT4ge1xyXG4gICAgICAgICAgICBuYW1lID0gZS50YXJnZXQgPT09IHRoaXMucmVzaXplciA/ICdyZXNpemUnIDogJ21vdmUnO1xyXG4gICAgICAgICAgICBlbmFibGVkID0gbmFtZSA9PT0gJ3Jlc2l6ZScgfHwgbmFtZSA9PT0gJ21vdmUnICYmIHRoaXMucHJvcHMuY29sdW1uLm1vdmluZztcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblN0YXJ0KG5hbWUsIHRoaXMucHJvcHMuY29sdW1uLm5hbWUsIHBvcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9uRHJhZyA9IChlLCBwb3MpID0+IGVuYWJsZWQgJiYgdGhpcy5wcm9wcy5vbkRyYWcobmFtZSwgdGhpcy5wcm9wcy5jb2x1bW4ubmFtZSwgcG9zKTtcclxuICAgICAgICB0aGlzLm9uRW5kID0gKGUsIHBvcykgPT4gZW5hYmxlZCAmJiB0aGlzLnByb3BzLm9uRW5kKG5hbWUsIHRoaXMucHJvcHMuY29sdW1uLm5hbWUsIHBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxEcmFnZ2FibGVcclxuICAgICAgICAgICAgICAgIG9uU3RhcnQ9e3RoaXMub25TdGFydH1cclxuICAgICAgICAgICAgICAgIG9uRHJhZz17dGhpcy5vbkRyYWd9XHJcbiAgICAgICAgICAgICAgICBvbkVuZD17dGhpcy5vbkVuZH0+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb2x1bW4ucmVzaXppbmcgJiZcclxuICAgICAgICAgICAgICAgICAgICA8UmVzaXplciBvbkNvbXBvbmVudERpZE1vdW50PXt0aGlzLnJlZlJlc2l6ZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0hlYWRlci9EcmFnZ2FibGVDb2x1bW4uanMiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICdpbmZlcm5vLWNyZWF0ZS1lbGVtZW50JztcclxuaW1wb3J0IHsgcmVzaXplR2hvc3RaaW5kZXggfSBmcm9tICcuLi9wYXJhbXMuanMnO1xyXG5cclxuY29uc3QgUmVzaXplR2hvc3QgPSAoeyB4IH0pID0+IChcclxuICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICB6SW5kZXg6IHJlc2l6ZUdob3N0WmluZGV4LFxyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICBib3JkZXJMZWZ0OiAnMXB4IGRvdHRlZCAjMDAwJyxcclxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke3h9cHgpYFxyXG4gICAgfX0+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2l6ZUdob3N0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSGVhZGVyL1Jlc2l6ZUdob3N0LmpzIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnaW5mZXJuby1jcmVhdGUtZWxlbWVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgekluZGV4OiAyLFxyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgcmlnaHQ6IC0zLFxyXG4gICAgICAgIHdpZHRoOiA2LFxyXG4gICAgICAgIGN1cnNvcjogJ2NvbC1yZXNpemUnXHJcbiAgICB9fT5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSGVhZGVyL1Jlc2l6ZXIuanMiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICdpbmZlcm5vLWNyZWF0ZS1lbGVtZW50JztcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tICdpbmZlcm5vLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHRyaW1Db2x1bW5XaWR0aCwgYmlzZWN0Q29sdW1ucyB9IGZyb20gJy4uL3V0aWxzL2luZGV4LmpzJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL0NvbnRhaW5lci5qcyc7XHJcbmltcG9ydCBDb2x1bW5HaG9zdCBmcm9tICcuL0NvbHVtbkdob3N0LmpzJztcclxuaW1wb3J0IENvbHVtbldyYXBwZXIgZnJvbSAnLi9Db2x1bW5XcmFwcGVyLmpzJztcclxuaW1wb3J0IERyYWdnYWJsZUNvbHVtbiBmcm9tICcuL0RyYWdnYWJsZUNvbHVtbi5qcyc7XHJcblxyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlc2l6ZUdob3N0IH0gZnJvbSAnLi9SZXNpemVHaG9zdC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJXcmFwcGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5vblN0YXJ0ID0gdGhpcy5vblN0YXJ0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkRyYWcgPSB0aGlzLm9uRHJhZy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25FbmQgPSB0aGlzLm9uRW5kLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdGFydCh0eXBlLCBuYW1lLCBzdGFydCkge1xyXG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSB0aGlzLnByb3BzLmNvbHVtbnM7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gY29sdW1ucy5maW5kSW5kZXgoZCA9PiBkLm5hbWUgPT09IG5hbWUpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb2x1bW4gPSBjb2x1bW5zW2N1cnJlbnRJbmRleF07XHJcbiAgICAgICAgY29uc3QgY3VycmVudExlZnQgPSBjb2x1bW5zLnNsaWNlKDAsIGN1cnJlbnRJbmRleCkucmVkdWNlKChhY2MsIGQpID0+IGFjYyArIGQud2lkdGgsIDApO1xyXG4gICAgICAgIHRoaXMuY3VycmVudExlZnQgPSBjdXJyZW50TGVmdDtcclxuICAgICAgICB0aGlzLnN0YXJ0TW92aW5nUG9zaXRpb24gPSBjdXJyZW50TGVmdCAtIHN0YXJ0O1xyXG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gY3VycmVudEluZGV4O1xyXG4gICAgICAgIHRoaXMuY3VycmVudENvbHVtbiA9IGN1cnJlbnRDb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgb25EcmFnKHR5cGUsIG5hbWUsIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdyZXNpemUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25SZXNpemluZyhuYW1lLCB0aGlzLmN1cnJlbnRMZWZ0ICsgdHJpbUNvbHVtbldpZHRoKHRoaXMuY3VycmVudENvbHVtbiwgcG9zaXRpb24pKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBbbGVmdEluZGV4LCByaWdodEluZGV4XSA9IGJpc2VjdENvbHVtbnModGhpcy5wcm9wcy5jb2x1bW5zLCB0aGlzLnN0YXJ0TW92aW5nUG9zaXRpb24gKyBwb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGxlZnROYW1lID0gbGVmdEluZGV4ID09PSAtMSA/IG51bGwgOiB0aGlzLnByb3BzLmNvbHVtbnNbbGVmdEluZGV4XS5uYW1lO1xyXG4gICAgICAgICAgICBjb25zdCByaWdodE5hbWUgPSByaWdodEluZGV4ID09PSAtMSA/IG51bGwgOiB0aGlzLnByb3BzLmNvbHVtbnNbcmlnaHRJbmRleF0ubmFtZTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk1vdmluZyhuYW1lLCBsZWZ0TmFtZSwgcmlnaHROYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnN0YXJ0TW92aW5nUG9zaXRpb24gKyBwb3NpdGlvbixcclxuICAgICAgICAgICAgbW92aW5nOiB0eXBlID09PSAnbW92ZSdcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuZCh0eXBlLCBuYW1lLCBwb3NpdGlvbikge1xyXG4gICAgICAgIGlmICh0eXBlID09PSAncmVzaXplJykge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uUmVzaXplKG5hbWUsIHRyaW1Db2x1bW5XaWR0aCh0aGlzLmN1cnJlbnRDb2x1bW4sIHBvc2l0aW9uKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgW2xlZnRJbmRleCwgcmlnaHRJbmRleF0gPSBiaXNlY3RDb2x1bW5zKHRoaXMucHJvcHMuY29sdW1ucywgdGhpcy5zdGFydE1vdmluZ1Bvc2l0aW9uICsgcG9zaXRpb24pO1xyXG4gICAgICAgICAgICBjb25zdCBsZWZ0TmFtZSA9IGxlZnRJbmRleCA9PT0gLTEgPyBudWxsIDogdGhpcy5wcm9wcy5jb2x1bW5zW2xlZnRJbmRleF0ubmFtZTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHROYW1lID0gcmlnaHRJbmRleCA9PT0gLTEgPyBudWxsIDogdGhpcy5wcm9wcy5jb2x1bW5zW3JpZ2h0SW5kZXhdLm5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Nb3ZlKG5hbWUsIGxlZnROYW1lLCByaWdodE5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbW92aW5nOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih7IGNvbHVtbnMsIGNvbXBvbmVudCwgY2FsbGJhY2sgfSwgeyBtb3ZpbmcsIHBvc2l0aW9uIH0pIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAge2NvbHVtbnMubWFwKChjb2x1bW4sIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGVDb2x1bW5cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uPXtjb2x1bW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3RhcnQ9e3RoaXMub25TdGFydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnPXt0aGlzLm9uRHJhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25FbmQ9e3RoaXMub25FbmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sdW1uV3JhcHBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uPXtjb2x1bW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaG9zdD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e2NvbXBvbmVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrPXtjYWxsYmFja30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZUNvbHVtbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7bW92aW5nICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbkdob3N0IHg9e3Bvc2l0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbHVtbldyYXBwZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbj17dGhpcy5jdXJyZW50Q29sdW1ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e3RoaXMuY3VycmVudEluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2hvc3Q9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e2NvbXBvbmVudH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbHVtbkdob3N0PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9IZWFkZXIvaW5kZXguanMiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICdpbmZlcm5vLWNyZWF0ZS1lbGVtZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IGhlaWdodCwgcmVuZGVyZWRUb3AsIGNoaWxkcmVuIH0pID0+IChcclxuICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGhlaWdodCB9fT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAwLCByaWdodDogMCwgdG9wOiByZW5kZXJlZFRvcCB9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MaXN0L0NvbnRhaW5lci5qcyIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJ2luZmVybm8tY3JlYXRlLWVsZW1lbnQnO1xyXG5pbXBvcnQgeyBzaG91bGRVcGRhdGUgfSBmcm9tICcuLi9ob2MvaW5kZXguanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvdWxkVXBkYXRlKChwcm9wcywgbmV4dFByb3BzKSA9PlxyXG4gICAgcHJvcHMuaGVpZ2h0ICE9PSBuZXh0UHJvcHMuaGVpZ2h0IHx8XHJcbiAgICBwcm9wcy5jb21wb25lbnQgIT09IG5leHRQcm9wcy5jb21wb25lbnQgfHxcclxuICAgIHByb3BzLmRhdHVtICE9PSBuZXh0UHJvcHMuZGF0dW1cclxuKSgoeyBoZWlnaHQsIGRhdHVtLCBpbmRleCwgY29tcG9uZW50OiBSb3cgfSkgPT5cclxuICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0IH19PlxyXG4gICAgICAgIDxSb3cgZGF0dW09e2RhdHVtfSBpbmRleD17aW5kZXh9IC8+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xpc3QvUm93V3JhcHBlci5qcyIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJ2luZmVybm8tY3JlYXRlLWVsZW1lbnQnO1xyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ2luZmVybm8tY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRlc3QgPT4gQmFzZUNvbXBvbmVudCA9PiBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRlc3QodGhpcy5wcm9wcywgbmV4dFByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocHJvcHMpIHtcclxuICAgICAgICByZXR1cm4gPEJhc2VDb21wb25lbnQgey4uLnByb3BzfSAvPjtcclxuICAgIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hvYy9zaG91bGRVcGRhdGUuanMiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICdpbmZlcm5vLWNyZWF0ZS1lbGVtZW50JztcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tICdpbmZlcm5vLWNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVycyA9PiBCYXNlQ29tcG9uZW50ID0+IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSBPYmplY3Qua2V5cyhoYW5kbGVycykucmVkdWNlKChhY2MsIG5hbWUpID0+IHtcclxuICAgICAgICAgICAgYWNjW25hbWVdID0gKC4uLmFyZ3MpID0+IGhhbmRsZXJzW25hbWVdKHRoaXMucHJvcHMsIC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgIH0sIHt9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocHJvcHMpIHtcclxuICAgICAgICByZXR1cm4gPEJhc2VDb21wb25lbnQgey4uLnByb3BzfSB7Li4udGhpcy5oYW5kbGVyc30gLz47XHJcbiAgICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ob2Mvd2l0aEhhbmRsZXJzLmpzIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnaW5mZXJuby1jcmVhdGUtZWxlbWVudCc7XHJcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnaW5mZXJuby1jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciA9PiBCYXNlQ29tcG9uZW50ID0+IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSByZWR1Y2VyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUocmVkdWNlcihuZXh0UHJvcHMsIHRoaXMuc3RhdGUpKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIocHJvcHMsIHN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIDxCYXNlQ29tcG9uZW50IHsuLi5wcm9wc30gey4uLnN0YXRlfSAvPjtcclxuICAgIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hvYy93aXRoTWlkZGxlU3RhdGUuanMiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICdpbmZlcm5vLWNyZWF0ZS1lbGVtZW50JztcclxuaW1wb3J0IHdpdGhQcm9wc09uQ2hhbmdlIGZyb20gJy4vd2l0aFByb3BzT25DaGFuZ2UuanMnO1xyXG5pbXBvcnQgeyBwaW5uZWRaaW5kZXggfSBmcm9tICcuLi9wYXJhbXMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFzZUNvbXBvbmVudCA9PiB3aXRoUHJvcHNPbkNoYW5nZShbJ2NvbHVtbnMnXSwgKHsgY29sdW1ucyB9KSA9PiAoe1xyXG4gICAgbGVmdENvbHVtbnM6IGNvbHVtbnMuZmlsdGVyKGNvbHVtbiA9PiBjb2x1bW4ucGlubmVkTGVmdCksXHJcbiAgICBjZW50ZXJDb2x1bW5zOiBjb2x1bW5zLmZpbHRlcihjb2x1bW4gPT4gIWNvbHVtbi5waW5uZWRMZWZ0ICYmICFjb2x1bW4ucGlubmVkUmlnaHQpLFxyXG4gICAgcmlnaHRDb2x1bW5zOiBjb2x1bW5zLmZpbHRlcihjb2x1bW4gPT4gY29sdW1uLnBpbm5lZFJpZ2h0KVxyXG59KSkocHJvcHMgPT4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAge3Byb3BzLmxlZnRDb2x1bW5zLmxlbmd0aCAhPT0gMCAmJlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnc3RpY2t5JywgekluZGV4OiBwaW5uZWRaaW5kZXgsIGxlZnQ6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICA8QmFzZUNvbXBvbmVudCB7Li4ucHJvcHN9IGNvbHVtbnM9e3Byb3BzLmxlZnRDb2x1bW5zfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgICAgPEJhc2VDb21wb25lbnQgey4uLnByb3BzfSBjb2x1bW5zPXtwcm9wcy5jZW50ZXJDb2x1bW5zfSAvPlxyXG4gICAgICAgIHtwcm9wcy5yaWdodENvbHVtbnMubGVuZ3RoICE9PSAwICYmXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdzdGlja3knLCB6SW5kZXg6IHBpbm5lZFppbmRleCwgcmlnaHQ6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICA8QmFzZUNvbXBvbmVudCB7Li4ucHJvcHN9IGNvbHVtbnM9e3Byb3BzLnJpZ2h0Q29sdW1uc30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbikpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaG9jL3dpdGhQaW5uYWJsZUNvbHVtbnMuanMiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICdpbmZlcm5vLWNyZWF0ZS1lbGVtZW50JztcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tICdpbmZlcm5vLWNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNlQ29tcG9uZW50ID0+IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcclxuICAgICAgICAgICAgc2Nyb2xsTGVmdDogMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vblNjcm9sbCA9IGUgPT4gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogZS50YXJnZXQuc2Nyb2xsVG9wLFxyXG4gICAgICAgICAgICBzY3JvbGxMZWZ0OiBlLnRhcmdldC5zY3JvbGxMZWZ0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHByb3BzLCB7IHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCB9KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogcHJvcHMudmlld3BvcnRXaWR0aCwgaGVpZ2h0OiBwcm9wcy52aWV3cG9ydEhlaWdodCwgb3ZlcmZsb3c6ICdhdXRvJyB9fVxyXG4gICAgICAgICAgICAgICAgb25TY3JvbGw9e3RoaXMub25TY3JvbGx9PlxyXG4gICAgICAgICAgICAgICAgPEJhc2VDb21wb25lbnQgey4uLnByb3BzfSBzY3JvbGxUb3A9e3Njcm9sbFRvcH0gc2Nyb2xsTGVmdD17c2Nyb2xsTGVmdH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hvYy93aXRoU2Nyb2xsUHJvcHMuanMiLCJleHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnTUFSS19NT1ZFX0RFU1QnOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gYWN0aW9uLmxlZnQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlTGVmdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVSaWdodDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gYWN0aW9uLnJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZUxlZnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVSaWdodDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLm1vdmVMZWZ0IHx8IGl0ZW0ubW92ZVJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZUxlZnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlUmlnaHQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhc2UgJ01PVkVfQ09MVU1OJzpcclxuICAgICAgICAgICAgY29uc3QgY29sdW1ucyA9IHN0YXRlLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLm1vdmVMZWZ0IHx8IGl0ZW0ubW92ZVJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZUxlZnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlUmlnaHQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24ubGVmdCB8fCBhY3Rpb24ucmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgPSBhY3Rpb24ubGVmdFxyXG4gICAgICAgICAgICAgICAgICAgID8gY29sdW1ucy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLm5hbWUgPT09IGFjdGlvbi5sZWZ0KSArIDFcclxuICAgICAgICAgICAgICAgICAgICA6IGNvbHVtbnMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5uYW1lID09PSBhY3Rpb24ucmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgICAgICAuLi5jb2x1bW5zLnNsaWNlKDAsIGluZGV4KS5maWx0ZXIoaXRlbSA9PiBpdGVtLm5hbWUgIT09IGFjdGlvbi5uYW1lKSxcclxuICAgICAgICAgICAgICAgICAgICAuLi5jb2x1bW5zLmZpbHRlcihpdGVtID0+IGl0ZW0ubmFtZSA9PT0gYWN0aW9uLm5hbWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLmNvbHVtbnMuc2xpY2UoaW5kZXgpLmZpbHRlcihpdGVtID0+IGl0ZW0ubmFtZSAhPT0gYWN0aW9uLm5hbWUpXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zO1xyXG5cclxuICAgICAgICBjYXNlICdSRVNJWkVfQ09MVU1OJzpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09IGFjdGlvbi5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGFjdGlvbi5zaXplXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhc2UgJ0ZJTFRFUl9DT0xVTU4nOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gYWN0aW9uLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYWN0aW9uLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhc2UgJ1NPUlRfQ09MVU1OJzpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09IGFjdGlvbi5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydDogIWl0ZW0uc29ydCAmJiAnYXNjJyB8fCBpdGVtLnNvcnQgPT09ICdhc2MnICYmICdkZXNjJyB8fCBpdGVtLnNvcnQgPT09ICdkZXNjJyAmJiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5zb3J0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1Y2Vycy9jb2x1bW5zLmpzIiwiaW1wb3J0IGNvbHVtbnNSZWR1Y2VyIGZyb20gJy4vY29sdW1ucy5qcyc7XHJcbmltcG9ydCByb3dTdGF0ZVJlZHVjZXIgZnJvbSAnLi9yb3dTdGF0ZS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgY29sdW1uczogY29sdW1uc1JlZHVjZXIoc3RhdGUuY29sdW1ucywgYWN0aW9uKSxcclxuICAgIHJvd1N0YXRlOiByb3dTdGF0ZVJlZHVjZXIoc3RhdGUucm93U3RhdGUsIGFjdGlvbilcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1Y2Vycy9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdTRUxFQ1RfUk9XJzpcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4OiBhY3Rpb24ucm93SW5kZXhcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHVjZXJzL3Jvd1N0YXRlLmpzIiwiZXhwb3J0IGRlZmF1bHQgKGNvbHVtbnMsIHBvc2l0aW9uKSA9PiB7XHJcbiAgICBpZiAoY29sdW1ucy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgcmV0dXJuIFstMSwgMF07XHJcbiAgICB9XHJcbiAgICBsZXQgbGFzdCA9IDA7XHJcbiAgICByZXR1cm4gY29sdW1ucy5yZWR1Y2UoKGFjYywgeyB3aWR0aCB9LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxlZnQgPSBsYXN0O1xyXG4gICAgICAgIGNvbnN0IHJlbGF0aXZlID0gcG9zaXRpb24gLSBsZWZ0O1xyXG4gICAgICAgIGNvbnN0IGhhbGYgPSB3aWR0aCAvIDI7XHJcbiAgICAgICAgbGFzdCA9IGxlZnQgKyB3aWR0aDtcclxuICAgICAgICBpZiAoaW5kZXggPT09IDAgJiYgcmVsYXRpdmUgPCBoYWxmKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbLTEsIGluZGV4XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGluZGV4ID09PSBjb2x1bW5zLmxlbmd0aCAtIDEgJiYgaGFsZiA8PSByZWxhdGl2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW2luZGV4LCAtMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChoYWxmIDw9IHJlbGF0aXZlICYmIHJlbGF0aXZlIDw9IHdpZHRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbaW5kZXgsIGluZGV4ICsgMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgwIDw9IHJlbGF0aXZlICYmIHJlbGF0aXZlIDw9IGhhbGYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtpbmRleCAtIDEsIGluZGV4XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIFtdKTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2Jpc2VjdENvbHVtbnMuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wb3NlKC4uLmZ1bmNzKSB7XHJcbiAgICBpZiAoZnVuY3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGFyZyA9PiBhcmc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jc1swXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZnVuY3MucmVkdWNlKChhLCBiKSA9PiAoLi4uYXJncykgPT4gYShiKC4uLmFyZ3MpKSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2NvbXBvc2UuanMiLCJjb25zdCBlbXB0eSA9ICgpID0+IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcblxyXG5jb25zdCBpbnZlcnQgPSBvYmogPT4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKGFjYywga2V5KSA9PiAoYWNjW29ialtrZXldXSA9IGtleSwgYWNjKSwgZW1wdHkoKSk7XHJcblxyXG5jb25zdCBjcmVhdGVGcmVlS2V5R2VuZXJhdG9yID0gKGluZGV4ZXMpID0+IHtcclxuICAgIGxldCBsYXN0UG9pbnRlciA9IDA7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGBrZXlfJHtsYXN0UG9pbnRlcn1gO1xyXG4gICAgICAgICAgICBsYXN0UG9pbnRlciArPSAxO1xyXG4gICAgICAgICAgICBpZiAoIShrZXkgaW4gaW5kZXhlcykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UmVjb3ZlcmVkS2V5cyA9IChsYXN0S2V5cywgc3RhcnQsIGVuZCkgPT4ge1xyXG4gICAgY29uc3Qga2V5cyA9IGVtcHR5KCk7XHJcbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQgKyAxOyBpICs9IDEpIHtcclxuICAgICAgICBpZiAoaSBpbiBsYXN0S2V5cykge1xyXG4gICAgICAgICAgICBrZXlzW2ldID0gbGFzdEtleXNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGtleXM7XHJcbn07XHJcblxyXG5jb25zdCBnZW5lcmF0ZUtleXMgPSAobGFzdEtleXMsIHN0YXJ0LCBlbmQpID0+IHtcclxuICAgIGNvbnN0IGtleXMgPSBlbXB0eSgpO1xyXG4gICAgY29uc3QgZ2VuZXJhdGVLZXkgPSBjcmVhdGVGcmVlS2V5R2VuZXJhdG9yKGludmVydChsYXN0S2V5cykpO1xyXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kICsgMTsgaSArPSAxKSB7XHJcbiAgICAgICAgaWYgKCEoaSBpbiBsYXN0S2V5cykpIHtcclxuICAgICAgICAgICAga2V5c1tpXSA9IGdlbmVyYXRlS2V5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGtleXM7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCAobGFzdEtleXMgPSBlbXB0eSgpLCBzdGFydCwgZW5kKSA9PiB7XHJcbiAgICBjb25zdCByZWNvdmVyZWQgPSBnZXRSZWNvdmVyZWRLZXlzKGxhc3RLZXlzLCBzdGFydCwgZW5kKTtcclxuICAgIGNvbnN0IGdlbmVyYXRlZCA9IGdlbmVyYXRlS2V5cyhyZWNvdmVyZWQsIHN0YXJ0LCBlbmQpO1xyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZW1wdHkoKSwgcmVjb3ZlcmVkLCBnZW5lcmF0ZWQpO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvZ2V0S2V5c0J5SW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCAoeyBzY3JvbGxUb3AsIHZpZXdwb3J0SGVpZ2h0LCByb3dIZWlnaHQsIHJvd3NDb3VudCB9KSA9PiB7XHJcbiAgICBjb25zdCBjbHVzdGVyU2l6ZSA9IE1hdGguY2VpbCh2aWV3cG9ydEhlaWdodCAvIHJvd0hlaWdodCk7XHJcbiAgICBjb25zdCB0b3BDbHVzdGVyID0gTWF0aC5mbG9vcihNYXRoLmZsb29yKE1hdGgubWF4KDAsIHNjcm9sbFRvcCkgLyByb3dIZWlnaHQpIC8gY2x1c3RlclNpemUpO1xyXG4gICAgY29uc3QgZW5kID0gTWF0aC5taW4ocm93c0NvdW50LCAodG9wQ2x1c3RlciArIDIpICogY2x1c3RlclNpemUpO1xyXG4gICAgLy8gY291bnQgb2YgdmlzaWJsZSByb3dzIGlzIGFsd2F5cyB0aGUgc2FtZSB0aGVuIGZvY3VzIG5ldmVyIGJlIGxvc3RcclxuICAgIGNvbnN0IHN0YXJ0ID0gTWF0aC5tYXgoMCwgZW5kIC0gY2x1c3RlclNpemUgKiAyKTtcclxuICAgIHJldHVybiBbc3RhcnQsIGVuZF07XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9nZXRWaXNpYmxlUm93cy5qcyIsImNvbnN0IGZpbHRlclJvd0J5Q29sdW1ucyA9IChyb3csIGNvbHVtbnMpID0+XHJcbiAgICBjb2x1bW5zLmV2ZXJ5KGNvbHVtbiA9PiByb3dbY29sdW1uLm5hbWVdLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihjb2x1bW4udmFsdWUpICE9PSAtMSk7XHJcblxyXG5jb25zdCBzb3J0Um93c0J5Q29sdW1ucyA9IChhLCBiLCBjb2x1bW4pID0+IHtcclxuICAgIGlmIChhW2NvbHVtbi5uYW1lXSA9PT0gYltjb2x1bW4ubmFtZV0pIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIGlmIChjb2x1bW4uc29ydCA9PT0gJ2FzYycpIHtcclxuICAgICAgICByZXR1cm4gYVtjb2x1bW4ubmFtZV0gPCBiW2NvbHVtbi5uYW1lXSA/IC0xIDogMTtcclxuICAgIH1cclxuICAgIHJldHVybiBhW2NvbHVtbi5uYW1lXSA+IGJbY29sdW1uLm5hbWVdID8gLTEgOiAxO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGdyaWRTdGF0ZSwgZGF0YSkgPT4ge1xyXG4gICAgY29uc3QgZmlsdGVyZWRDb2x1bW5zID0gZ3JpZFN0YXRlLmNvbHVtbnMuZmlsdGVyKGNvbHVtbiA9PiBjb2x1bW4udmFsdWUpO1xyXG4gICAgY29uc3Qgc29ydGVkQ29sdW1uID0gZ3JpZFN0YXRlLmNvbHVtbnMuZmluZChjb2x1bW4gPT4gY29sdW1uLnNvcnQgPT09ICdhc2MnIHx8IGNvbHVtbi5zb3J0ID09PSAnZGVzYycpO1xyXG4gICAgY29uc3QgZmlsdGVyZWRcclxuICAgICAgICA9IGZpbHRlcmVkQ29sdW1ucy5sZW5ndGhcclxuICAgICAgICA/IGRhdGEuZmlsdGVyKGRhdHVtID0+IGZpbHRlclJvd0J5Q29sdW1ucyhkYXR1bSwgZmlsdGVyZWRDb2x1bW5zKSlcclxuICAgICAgICA6IGRhdGE7XHJcbiAgICBjb25zdCBzb3J0ZWRcclxuICAgICAgICA9IHNvcnRlZENvbHVtblxyXG4gICAgICAgID8gZmlsdGVyZWQuc2xpY2UoKS5zb3J0KChhLCBiKSA9PiBzb3J0Um93c0J5Q29sdW1ucyhhLCBiLCBzb3J0ZWRDb2x1bW4pKVxyXG4gICAgICAgIDogZmlsdGVyZWQ7XHJcbiAgICByZXR1cm4gc29ydGVkO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvc2VsZWN0R3JpZERhdGEuanMiLCJpbXBvcnQgeyBkZWZhdWx0TWluV2lkdGggfSBmcm9tICcuLi9wYXJhbXMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGNvbHVtbiwgd2lkdGgpID0+XHJcbiAgICBNYXRoLm1pbihNYXRoLm1heChjb2x1bW4ubWluV2lkdGggfHwgZGVmYXVsdE1pbldpZHRoLCB3aWR0aCksIGNvbHVtbi5tYXhXaWR0aCB8fCBJbmZpbml0eSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy90cmltQ29sdW1uV2lkdGguanMiLCIvKiFcbiAqIGluZmVybm8tY29tcG9uZW50IHYxLjIuMlxuICogKGMpIDIwMTcgRG9taW5pYyBHYW5uYXdheVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnaW5mZXJubycpKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2luZmVybm8nXSwgZmFjdG9yeSkgOlxuXHQoZ2xvYmFsLkluZmVybm8gPSBnbG9iYWwuSW5mZXJubyB8fCB7fSwgZ2xvYmFsLkluZmVybm8uQ29tcG9uZW50ID0gZmFjdG9yeShnbG9iYWwuSW5mZXJubykpO1xufSh0aGlzLCAoZnVuY3Rpb24gKGluZmVybm8pIHsgJ3VzZSBzdHJpY3QnO1xuXG52YXIgRVJST1JfTVNHID0gJ2EgcnVudGltZSBlcnJvciBvY2N1cmVkISBVc2UgSW5mZXJubyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudCB0byBmaW5kIHRoZSBlcnJvci4nO1xudmFyIGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudDtcblxuLy8gdGhpcyBpcyBNVUNIIGZhc3RlciB0aGFuIC5jb25zdHJ1Y3RvciA9PT0gQXJyYXkgYW5kIGluc3RhbmNlb2YgQXJyYXlcbi8vIGluIE5vZGUgNyBhbmQgdGhlIGxhdGVyIHZlcnNpb25zIG9mIFY4LCBzbG93ZXIgaW4gb2xkZXIgdmVyc2lvbnMgdGhvdWdoXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nT3JOdW1iZXIob2JqKSB7XG4gICAgdmFyIHR5cGUgPSB0eXBlb2Ygb2JqO1xuICAgIHJldHVybiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlID09PSAnbnVtYmVyJztcbn1cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWYob2JqKSB7XG4gICAgcmV0dXJuIGlzVW5kZWZpbmVkKG9iaikgfHwgaXNOdWxsKG9iaik7XG59XG5mdW5jdGlvbiBpc0ludmFsaWQob2JqKSB7XG4gICAgcmV0dXJuIGlzTnVsbChvYmopIHx8IG9iaiA9PT0gZmFsc2UgfHwgaXNUcnVlKG9iaikgfHwgaXNVbmRlZmluZWQob2JqKTtcbn1cbmZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbic7XG59XG5cblxuXG5mdW5jdGlvbiBpc051bGwob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gbnVsbDtcbn1cbmZ1bmN0aW9uIGlzVHJ1ZShvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB0cnVlO1xufVxuZnVuY3Rpb24gaXNVbmRlZmluZWQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB0aHJvd0Vycm9yKG1lc3NhZ2UpIHtcbiAgICBpZiAoIW1lc3NhZ2UpIHtcbiAgICAgICAgbWVzc2FnZSA9IEVSUk9SX01TRztcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKChcIkluZmVybm8gRXJyb3I6IFwiICsgbWVzc2FnZSkpO1xufVxuXG52YXIgTGlmZWN5Y2xlID0gZnVuY3Rpb24gTGlmZWN5Y2xlKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgdGhpcy5mYXN0VW5tb3VudCA9IHRydWU7XG59O1xuTGlmZWN5Y2xlLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyIChjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xufTtcbkxpZmVjeWNsZS5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uIHRyaWdnZXIgKCkge1xuICAgICAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcyQxLmxpc3RlbmVyc1tpXSgpO1xuICAgIH1cbn07XG5cbnZhciBub09wID0gRVJST1JfTVNHO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBub09wID0gJ0luZmVybm8gRXJyb3I6IENhbiBvbmx5IHVwZGF0ZSBhIG1vdW50ZWQgb3IgbW91bnRpbmcgY29tcG9uZW50LiBUaGlzIHVzdWFsbHkgbWVhbnMgeW91IGNhbGxlZCBzZXRTdGF0ZSgpIG9yIGZvcmNlVXBkYXRlKCkgb24gYW4gdW5tb3VudGVkIGNvbXBvbmVudC4gVGhpcyBpcyBhIG5vLW9wLic7XG59XG52YXIgY29tcG9uZW50Q2FsbGJhY2tRdWV1ZSA9IG5ldyBNYXAoKTtcbi8vIHdoZW4gYSBjb21wb25lbnRzIHJvb3QgVk5vZGUgaXMgYWxzbyBhIGNvbXBvbmVudCwgd2UgY2FuIHJ1biBpbnRvIGlzc3Vlc1xuLy8gdGhpcyB3aWxsIHJlY3Vyc2l2ZWx5IGxvb2sgZm9yIHZOb2RlLnBhcmVudE5vZGUgaWYgdGhlIFZOb2RlIGlzIGEgY29tcG9uZW50XG5mdW5jdGlvbiB1cGRhdGVQYXJlbnRDb21wb25lbnRWTm9kZXModk5vZGUsIGRvbSkge1xuICAgIGlmICh2Tm9kZS5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICB2YXIgcGFyZW50Vk5vZGUgPSB2Tm9kZS5wYXJlbnRWTm9kZTtcbiAgICAgICAgaWYgKHBhcmVudFZOb2RlKSB7XG4gICAgICAgICAgICBwYXJlbnRWTm9kZS5kb20gPSBkb207XG4gICAgICAgICAgICB1cGRhdGVQYXJlbnRDb21wb25lbnRWTm9kZXMocGFyZW50Vk5vZGUsIGRvbSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyB0aGlzIGlzIGluIHNoYXBlcyB0b28sIGJ1dCB3ZSBkb24ndCB3YW50IHRvIGltcG9ydCBmcm9tIHNoYXBlcyBhcyBpdCB3aWxsIHB1bGwgaW4gYSBkdXBsaWNhdGUgb2YgY3JlYXRlVk5vZGVcbmZ1bmN0aW9uIGNyZWF0ZVZvaWRWTm9kZSgpIHtcbiAgICByZXR1cm4gaW5mZXJuby5jcmVhdGVWTm9kZSg0MDk2IC8qIFZvaWQgKi8pO1xufVxuZnVuY3Rpb24gY3JlYXRlVGV4dFZOb2RlKHRleHQpIHtcbiAgICByZXR1cm4gaW5mZXJuby5jcmVhdGVWTm9kZSgxIC8qIFRleHQgKi8sIG51bGwsIG51bGwsIHRleHQpO1xufVxuZnVuY3Rpb24gYWRkVG9RdWV1ZShjb21wb25lbnQsIGZvcmNlLCBjYWxsYmFjaykge1xuICAgIC8vIFRPRE8gdGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSByZXZpc2VkIGFuZCBpbXByb3ZlZCBvblxuICAgIHZhciBxdWV1ZSA9IGNvbXBvbmVudENhbGxiYWNrUXVldWUuZ2V0KGNvbXBvbmVudCk7XG4gICAgaWYgKCFxdWV1ZSkge1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICBjb21wb25lbnRDYWxsYmFja1F1ZXVlLnNldChjb21wb25lbnQsIHF1ZXVlKTtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb21wb25lbnRDYWxsYmFja1F1ZXVlLmRlbGV0ZShjb21wb25lbnQpO1xuICAgICAgICAgICAgYXBwbHlTdGF0ZShjb21wb25lbnQsIGZvcmNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBxdWV1ZVtpXSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIHF1ZXVlLnB1c2goY2FsbGJhY2spO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHF1ZXVlU3RhdGVDaGFuZ2VzKGNvbXBvbmVudCwgbmV3U3RhdGUsIGNhbGxiYWNrLCBzeW5jKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24obmV3U3RhdGUpKSB7XG4gICAgICAgIG5ld1N0YXRlID0gbmV3U3RhdGUoY29tcG9uZW50LnN0YXRlLCBjb21wb25lbnQucHJvcHMsIGNvbXBvbmVudC5jb250ZXh0KTtcbiAgICB9XG4gICAgZm9yICh2YXIgc3RhdGVLZXkgaW4gbmV3U3RhdGUpIHtcbiAgICAgICAgY29tcG9uZW50Ll9wZW5kaW5nU3RhdGVbc3RhdGVLZXldID0gbmV3U3RhdGVbc3RhdGVLZXldO1xuICAgIH1cbiAgICBpZiAoIWNvbXBvbmVudC5fcGVuZGluZ1NldFN0YXRlICYmIGlzQnJvd3Nlcikge1xuICAgICAgICBpZiAoc3luYyB8fCBjb21wb25lbnQuX2Jsb2NrUmVuZGVyKSB7XG4gICAgICAgICAgICBjb21wb25lbnQuX3BlbmRpbmdTZXRTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICBhcHBseVN0YXRlKGNvbXBvbmVudCwgZmFsc2UsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFkZFRvUXVldWUoY29tcG9uZW50LCBmYWxzZSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb21wb25lbnQuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBjb21wb25lbnQuc3RhdGUsIGNvbXBvbmVudC5fcGVuZGluZ1N0YXRlKTtcbiAgICAgICAgY29tcG9uZW50Ll9wZW5kaW5nU3RhdGUgPSB7fTtcbiAgICB9XG59XG5mdW5jdGlvbiBhcHBseVN0YXRlKGNvbXBvbmVudCwgZm9yY2UsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCghY29tcG9uZW50Ll9kZWZlclNldFN0YXRlIHx8IGZvcmNlKSAmJiAhY29tcG9uZW50Ll9ibG9ja1JlbmRlciAmJiAhY29tcG9uZW50Ll91bm1vdW50ZWQpIHtcbiAgICAgICAgY29tcG9uZW50Ll9wZW5kaW5nU2V0U3RhdGUgPSBmYWxzZTtcbiAgICAgICAgdmFyIHBlbmRpbmdTdGF0ZSA9IGNvbXBvbmVudC5fcGVuZGluZ1N0YXRlO1xuICAgICAgICB2YXIgcHJldlN0YXRlID0gY29tcG9uZW50LnN0YXRlO1xuICAgICAgICB2YXIgbmV4dFN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgcHJldlN0YXRlLCBwZW5kaW5nU3RhdGUpO1xuICAgICAgICB2YXIgcHJvcHMgPSBjb21wb25lbnQucHJvcHM7XG4gICAgICAgIHZhciBjb250ZXh0ID0gY29tcG9uZW50LmNvbnRleHQ7XG4gICAgICAgIGNvbXBvbmVudC5fcGVuZGluZ1N0YXRlID0ge307XG4gICAgICAgIHZhciBuZXh0SW5wdXQgPSBjb21wb25lbnQuX3VwZGF0ZUNvbXBvbmVudChwcmV2U3RhdGUsIG5leHRTdGF0ZSwgcHJvcHMsIHByb3BzLCBjb250ZXh0LCBmb3JjZSwgdHJ1ZSk7XG4gICAgICAgIHZhciBkaWRVcGRhdGUgPSB0cnVlO1xuICAgICAgICBpZiAoaXNJbnZhbGlkKG5leHRJbnB1dCkpIHtcbiAgICAgICAgICAgIG5leHRJbnB1dCA9IGNyZWF0ZVZvaWRWTm9kZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5leHRJbnB1dCA9PT0gaW5mZXJuby5OT19PUCkge1xuICAgICAgICAgICAgbmV4dElucHV0ID0gY29tcG9uZW50Ll9sYXN0SW5wdXQ7XG4gICAgICAgICAgICBkaWRVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1N0cmluZ09yTnVtYmVyKG5leHRJbnB1dCkpIHtcbiAgICAgICAgICAgIG5leHRJbnB1dCA9IGNyZWF0ZVRleHRWTm9kZShuZXh0SW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQXJyYXkobmV4dElucHV0KSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKCdhIHZhbGlkIEluZmVybm8gVk5vZGUgKG9yIG51bGwpIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBhIGNvbXBvbmVudCByZW5kZXIuIFlvdSBtYXkgaGF2ZSByZXR1cm5lZCBhbiBhcnJheSBvciBhbiBpbnZhbGlkIG9iamVjdC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93RXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGFzdElucHV0ID0gY29tcG9uZW50Ll9sYXN0SW5wdXQ7XG4gICAgICAgIHZhciB2Tm9kZSA9IGNvbXBvbmVudC5fdk5vZGU7XG4gICAgICAgIHZhciBwYXJlbnREb20gPSAobGFzdElucHV0LmRvbSAmJiBsYXN0SW5wdXQuZG9tLnBhcmVudE5vZGUpIHx8IChsYXN0SW5wdXQuZG9tID0gdk5vZGUuZG9tKTtcbiAgICAgICAgY29tcG9uZW50Ll9sYXN0SW5wdXQgPSBuZXh0SW5wdXQ7XG4gICAgICAgIGlmIChkaWRVcGRhdGUpIHtcbiAgICAgICAgICAgIHZhciBzdWJMaWZlY3ljbGUgPSBjb21wb25lbnQuX2xpZmVjeWNsZTtcbiAgICAgICAgICAgIGlmICghc3ViTGlmZWN5Y2xlKSB7XG4gICAgICAgICAgICAgICAgc3ViTGlmZWN5Y2xlID0gbmV3IExpZmVjeWNsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3ViTGlmZWN5Y2xlLmxpc3RlbmVycyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29tcG9uZW50Ll9saWZlY3ljbGUgPSBzdWJMaWZlY3ljbGU7XG4gICAgICAgICAgICB2YXIgY2hpbGRDb250ZXh0ID0gY29tcG9uZW50LmdldENoaWxkQ29udGV4dCgpO1xuICAgICAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKGNoaWxkQ29udGV4dCkpIHtcbiAgICAgICAgICAgICAgICBjaGlsZENvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LCBjb21wb25lbnQuX2NoaWxkQ29udGV4dCwgY2hpbGRDb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoaWxkQ29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQsIGNvbXBvbmVudC5fY2hpbGRDb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbXBvbmVudC5fcGF0Y2gobGFzdElucHV0LCBuZXh0SW5wdXQsIHBhcmVudERvbSwgc3ViTGlmZWN5Y2xlLCBjaGlsZENvbnRleHQsIGNvbXBvbmVudC5faXNTVkcsIGZhbHNlKTtcbiAgICAgICAgICAgIHN1YkxpZmVjeWNsZS50cmlnZ2VyKCk7XG4gICAgICAgICAgICBjb21wb25lbnQuY29tcG9uZW50RGlkVXBkYXRlKHByb3BzLCBwcmV2U3RhdGUpO1xuICAgICAgICAgICAgaW5mZXJuby5vcHRpb25zLmFmdGVyVXBkYXRlICYmIGluZmVybm8ub3B0aW9ucy5hZnRlclVwZGF0ZSh2Tm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRvbSA9IHZOb2RlLmRvbSA9IG5leHRJbnB1dC5kb207XG4gICAgICAgIHZhciBjb21wb25lbnRUb0RPTU5vZGVNYXAgPSBjb21wb25lbnQuX2NvbXBvbmVudFRvRE9NTm9kZU1hcDtcbiAgICAgICAgY29tcG9uZW50VG9ET01Ob2RlTWFwICYmIGNvbXBvbmVudFRvRE9NTm9kZU1hcC5zZXQoY29tcG9uZW50LCBuZXh0SW5wdXQuZG9tKTtcbiAgICAgICAgdXBkYXRlUGFyZW50Q29tcG9uZW50Vk5vZGVzKHZOb2RlLCBkb20pO1xuICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKCFpc051bGxPclVuZGVmKGNhbGxiYWNrKSkge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH1cbn1cbnZhciBDb21wb25lbnQkMSA9IGZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCkge1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB0aGlzLnJlZnMgPSB7fTtcbiAgICB0aGlzLl9ibG9ja1JlbmRlciA9IGZhbHNlO1xuICAgIHRoaXMuX2lnbm9yZVNldFN0YXRlID0gZmFsc2U7XG4gICAgdGhpcy5fYmxvY2tTZXRTdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2RlZmVyU2V0U3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLl9wZW5kaW5nU2V0U3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLl9wZW5kaW5nU3RhdGUgPSB7fTtcbiAgICB0aGlzLl9sYXN0SW5wdXQgPSBudWxsO1xuICAgIHRoaXMuX3ZOb2RlID0gbnVsbDtcbiAgICB0aGlzLl91bm1vdW50ZWQgPSB0cnVlO1xuICAgIHRoaXMuX2xpZmVjeWNsZSA9IG51bGw7XG4gICAgdGhpcy5fY2hpbGRDb250ZXh0ID0gbnVsbDtcbiAgICB0aGlzLl9wYXRjaCA9IG51bGw7XG4gICAgdGhpcy5faXNTVkcgPSBmYWxzZTtcbiAgICB0aGlzLl9jb21wb25lbnRUb0RPTU5vZGVNYXAgPSBudWxsO1xuICAgIC8qKiBAdHlwZSB7b2JqZWN0fSAqL1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcyB8fCBpbmZlcm5vLkVNUFRZX09CSjtcbiAgICAvKiogQHR5cGUge29iamVjdH0gKi9cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0IHx8IHt9O1xufTtcbkNvbXBvbmVudCQxLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIgKG5leHRQcm9wcywgbmV4dFN0YXRlLCBuZXh0Q29udGV4dCkge1xufTtcbkNvbXBvbmVudCQxLnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIGZvcmNlVXBkYXRlIChjYWxsYmFjaykge1xuICAgIGlmICh0aGlzLl91bm1vdW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpc0Jyb3dzZXIgJiYgYXBwbHlTdGF0ZSh0aGlzLCB0cnVlLCBjYWxsYmFjayk7XG59O1xuQ29tcG9uZW50JDEucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gc2V0U3RhdGUgKG5ld1N0YXRlLCBjYWxsYmFjaykge1xuICAgIGlmICh0aGlzLl91bm1vdW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX2Jsb2NrU2V0U3RhdGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pZ25vcmVTZXRTdGF0ZSkge1xuICAgICAgICAgICAgcXVldWVTdGF0ZUNoYW5nZXModGhpcywgbmV3U3RhdGUsIGNhbGxiYWNrLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKCdjYW5ub3QgdXBkYXRlIHN0YXRlIHZpYSBzZXRTdGF0ZSgpIGluIGNvbXBvbmVudFdpbGxVcGRhdGUoKS4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxufTtcbkNvbXBvbmVudCQxLnByb3RvdHlwZS5zZXRTdGF0ZVN5bmMgPSBmdW5jdGlvbiBzZXRTdGF0ZVN5bmMgKG5ld1N0YXRlKSB7XG4gICAgaWYgKHRoaXMuX3VubW91bnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5fYmxvY2tTZXRTdGF0ZSkge1xuICAgICAgICBpZiAoIXRoaXMuX2lnbm9yZVNldFN0YXRlKSB7XG4gICAgICAgICAgICBxdWV1ZVN0YXRlQ2hhbmdlcyh0aGlzLCBuZXdTdGF0ZSwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKCdjYW5ub3QgdXBkYXRlIHN0YXRlIHZpYSBzZXRTdGF0ZSgpIGluIGNvbXBvbmVudFdpbGxVcGRhdGUoKS4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxufTtcbkNvbXBvbmVudCQxLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQgKCkge1xufTtcbkNvbXBvbmVudCQxLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUgKHByZXZQcm9wcywgcHJldlN0YXRlLCBwcmV2Q29udGV4dCkge1xufTtcbkNvbXBvbmVudCQxLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUgKG5leHRQcm9wcywgbmV4dFN0YXRlLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIHRydWU7XG59O1xuQ29tcG9uZW50JDEucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXh0UHJvcHMsIGNvbnRleHQpIHtcbn07XG5Db21wb25lbnQkMS5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVcGRhdGUgKG5leHRQcm9wcywgbmV4dFN0YXRlLCBuZXh0Q29udGV4dCkge1xufTtcbkNvbXBvbmVudCQxLnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQgKCkge1xufTtcbkNvbXBvbmVudCQxLnByb3RvdHlwZS5fdXBkYXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gX3VwZGF0ZUNvbXBvbmVudCAocHJldlN0YXRlLCBuZXh0U3RhdGUsIHByZXZQcm9wcywgbmV4dFByb3BzLCBjb250ZXh0LCBmb3JjZSwgZnJvbVNldFN0YXRlKSB7XG4gICAgaWYgKHRoaXMuX3VubW91bnRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3dFcnJvcihub09wKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxuICAgIGlmICgocHJldlByb3BzICE9PSBuZXh0UHJvcHMgfHwgbmV4dFByb3BzID09PSBpbmZlcm5vLkVNUFRZX09CSikgfHwgcHJldlN0YXRlICE9PSBuZXh0U3RhdGUgfHwgZm9yY2UpIHtcbiAgICAgICAgaWYgKHByZXZQcm9wcyAhPT0gbmV4dFByb3BzIHx8IG5leHRQcm9wcyA9PT0gaW5mZXJuby5FTVBUWV9PQkopIHtcbiAgICAgICAgICAgIGlmICghZnJvbVNldFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tSZW5kZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2NrUmVuZGVyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fcGVuZGluZ1NldFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgbmV4dFN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgbmV4dFN0YXRlLCB0aGlzLl9wZW5kaW5nU3RhdGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3BlbmRpbmdTZXRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3BlbmRpbmdTdGF0ZSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBzaG91bGRVcGRhdGUgPSB0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSwgY29udGV4dCk7XG4gICAgICAgIGlmIChzaG91bGRVcGRhdGUgIT09IGZhbHNlIHx8IGZvcmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9ibG9ja1NldFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSwgY29udGV4dCk7XG4gICAgICAgICAgICB0aGlzLl9ibG9ja1NldFN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnByb3BzID0gbmV4dFByb3BzO1xuICAgICAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgICAgICBpbmZlcm5vLm9wdGlvbnMuYmVmb3JlUmVuZGVyICYmIGluZmVybm8ub3B0aW9ucy5iZWZvcmVSZW5kZXIodGhpcyk7XG4gICAgICAgICAgICB2YXIgcmVuZGVyID0gdGhpcy5yZW5kZXIobmV4dFByb3BzLCBzdGF0ZSwgY29udGV4dCk7XG4gICAgICAgICAgICBpbmZlcm5vLm9wdGlvbnMuYWZ0ZXJSZW5kZXIgJiYgaW5mZXJuby5vcHRpb25zLmFmdGVyUmVuZGVyKHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIHJlbmRlcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW5mZXJuby5OT19PUDtcbn07XG5cbnJldHVybiBDb21wb25lbnQkMTtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pbmZlcm5vL2Rpc3QvaW5mZXJuby1jb21wb25lbnQubm9kZS5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBpbmZlcm5vLWNyZWF0ZS1lbGVtZW50IHYxLjIuMlxuICogKGMpIDIwMTcgRG9taW5pYyBHYW5uYXdheVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnaW5mZXJubycpKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2luZmVybm8nXSwgZmFjdG9yeSkgOlxuXHQoZ2xvYmFsLkluZmVybm8gPSBnbG9iYWwuSW5mZXJubyB8fCB7fSwgZ2xvYmFsLkluZmVybm8uY3JlYXRlRWxlbWVudCA9IGZhY3RvcnkoZ2xvYmFsLkluZmVybm8pKTtcbn0odGhpcywgKGZ1bmN0aW9uIChpbmZlcm5vKSB7ICd1c2Ugc3RyaWN0JztcblxuLy8gdGhpcyBpcyBNVUNIIGZhc3RlciB0aGFuIC5jb25zdHJ1Y3RvciA9PT0gQXJyYXkgYW5kIGluc3RhbmNlb2YgQXJyYXlcbi8vIGluIE5vZGUgNyBhbmQgdGhlIGxhdGVyIHZlcnNpb25zIG9mIFY4LCBzbG93ZXIgaW4gb2xkZXIgdmVyc2lvbnMgdGhvdWdoXG5cbmZ1bmN0aW9uIGlzU3RhdGVmdWxDb21wb25lbnQobykge1xuICAgIHJldHVybiAhaXNVbmRlZmluZWQoby5wcm90b3R5cGUpICYmICFpc1VuZGVmaW5lZChvLnByb3RvdHlwZS5yZW5kZXIpO1xufVxuXG5mdW5jdGlvbiBpc051bGxPclVuZGVmKG9iaikge1xuICAgIHJldHVybiBpc1VuZGVmaW5lZChvYmopIHx8IGlzTnVsbChvYmopO1xufVxuZnVuY3Rpb24gaXNJbnZhbGlkKG9iaikge1xuICAgIHJldHVybiBpc051bGwob2JqKSB8fCBvYmogPT09IGZhbHNlIHx8IGlzVHJ1ZShvYmopIHx8IGlzVW5kZWZpbmVkKG9iaik7XG59XG5cbmZ1bmN0aW9uIGlzQXR0ckFuRXZlbnQoYXR0cikge1xuICAgIHJldHVybiBhdHRyWzBdID09PSAnbycgJiYgYXR0clsxXSA9PT0gJ24nICYmIGF0dHIubGVuZ3RoID4gMztcbn1cbmZ1bmN0aW9uIGlzU3RyaW5nKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJztcbn1cblxuZnVuY3Rpb24gaXNOdWxsKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IG51bGw7XG59XG5mdW5jdGlvbiBpc1RydWUob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzT2JqZWN0KG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnO1xufVxuXG52YXIgY29tcG9uZW50SG9va3MgPSB7XG4gICAgb25Db21wb25lbnRXaWxsTW91bnQ6IHRydWUsXG4gICAgb25Db21wb25lbnREaWRNb3VudDogdHJ1ZSxcbiAgICBvbkNvbXBvbmVudFdpbGxVbm1vdW50OiB0cnVlLFxuICAgIG9uQ29tcG9uZW50U2hvdWxkVXBkYXRlOiB0cnVlLFxuICAgIG9uQ29tcG9uZW50V2lsbFVwZGF0ZTogdHJ1ZSxcbiAgICBvbkNvbXBvbmVudERpZFVwZGF0ZTogdHJ1ZVxufTtcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQkMShuYW1lLCBwcm9wcykge1xuICAgIHZhciBfY2hpbGRyZW4gPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG4gICAgd2hpbGUgKCBsZW4tLSA+IDAgKSBfY2hpbGRyZW5bIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gKyAyIF07XG5cbiAgICBpZiAoaXNJbnZhbGlkKG5hbWUpIHx8IGlzT2JqZWN0KG5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW5mZXJubyBFcnJvcjogY3JlYXRlRWxlbWVudCgpIG5hbWUgcGFyYW1ldGVyIGNhbm5vdCBiZSB1bmRlZmluZWQsIG51bGwsIGZhbHNlIG9yIHRydWUsIEl0IG11c3QgYmUgYSBzdHJpbmcsIGNsYXNzIG9yIGZ1bmN0aW9uLicpO1xuICAgIH1cbiAgICB2YXIgY2hpbGRyZW4gPSBfY2hpbGRyZW47XG4gICAgdmFyIHJlZiA9IG51bGw7XG4gICAgdmFyIGtleSA9IG51bGw7XG4gICAgdmFyIGV2ZW50cyA9IG51bGw7XG4gICAgdmFyIGZsYWdzID0gMDtcbiAgICBpZiAoX2NoaWxkcmVuKSB7XG4gICAgICAgIGlmIChfY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IF9jaGlsZHJlblswXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChfY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNTdHJpbmcobmFtZSkpIHtcbiAgICAgICAgZmxhZ3MgPSAyIC8qIEh0bWxFbGVtZW50ICovO1xuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N2Zyc6XG4gICAgICAgICAgICAgICAgZmxhZ3MgPSAxMjggLyogU3ZnRWxlbWVudCAqLztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgICAgICAgICAgICBmbGFncyA9IDUxMiAvKiBJbnB1dEVsZW1lbnQgKi87XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgICAgICAgICAgZmxhZ3MgPSAxMDI0IC8qIFRleHRhcmVhRWxlbWVudCAqLztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgICAgICAgICAgZmxhZ3MgPSAyMDQ4IC8qIFNlbGVjdEVsZW1lbnQgKi87XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICB9XG4gICAgICAgIC8qXG4gICAgICAgICBUaGlzIGZpeGVzIGRlLW9wdGltaXNhdGlvbjpcbiAgICAgICAgIHVzZXMgb2JqZWN0IEtleXMgZm9yIGxvb3BpbmcgcHJvcHMgdG8gYXZvaWQgZGVsZXRpbmcgcHJvcHMgb2YgbG9vcGVkIG9iamVjdFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKHByb3BzKSkge1xuICAgICAgICAgICAgdmFyIHByb3BLZXlzID0gT2JqZWN0LmtleXMocHJvcHMpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wS2V5ID0gcHJvcEtleXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKHByb3BLZXkgPT09ICdrZXknKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IHByb3BzLmtleTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHByb3BzLmtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvcEtleSA9PT0gJ2NoaWxkcmVuJyAmJiBpc1VuZGVmaW5lZChjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjsgLy8gYWx3YXlzIGZhdm91ciBjaGlsZHJlbiBhcmdzLCBkZWZhdWx0IHRvIHByb3BzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3BLZXkgPT09ICdyZWYnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZiA9IHByb3BzLnJlZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNBdHRyQW5FdmVudChwcm9wS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRzID0ge307XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzW3Byb3BLZXldID0gcHJvcHNbcHJvcEtleV07XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwcm9wc1twcm9wS2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZsYWdzID0gaXNTdGF0ZWZ1bENvbXBvbmVudChuYW1lKSA/IDQgLyogQ29tcG9uZW50Q2xhc3MgKi8gOiA4IC8qIENvbXBvbmVudEZ1bmN0aW9uICovO1xuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgaWYgKCFwcm9wcykge1xuICAgICAgICAgICAgICAgIHByb3BzID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgY2hpbGRyZW4gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNOdWxsT3JVbmRlZihwcm9wcykpIHtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgVGhpcyBmaXhlcyBkZS1vcHRpbWlzYXRpb246XG4gICAgICAgICAgICAgdXNlcyBvYmplY3QgS2V5cyBmb3IgbG9vcGluZyBwcm9wcyB0byBhdm9pZCBkZWxldGluZyBwcm9wcyBvZiBsb29wZWQgb2JqZWN0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhciBwcm9wS2V5cyQxID0gT2JqZWN0LmtleXMocHJvcHMpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSQxID0gMDsgaSQxIDwgcHJvcEtleXMkMS5sZW5ndGg7IGkkMSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3BLZXkkMSA9IHByb3BLZXlzJDFbaSQxXTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50SG9va3NbcHJvcEtleSQxXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmID0ge307XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVmW3Byb3BLZXkkMV0gPSBwcm9wc1twcm9wS2V5JDFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9wS2V5JDEgPT09ICdrZXknKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IHByb3BzLmtleTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHByb3BzLmtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGluZmVybm8uY3JlYXRlVk5vZGUoZmxhZ3MsIG5hbWUsIHByb3BzLCBjaGlsZHJlbiwgZXZlbnRzLCBrZXksIHJlZik7XG59XG5cbnJldHVybiBjcmVhdGVFbGVtZW50JDE7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5mZXJuby9kaXN0L2luZmVybm8tY3JlYXRlLWVsZW1lbnQubm9kZS5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBpbmZlcm5vIHYxLjIuMlxuICogKGMpIDIwMTcgRG9taW5pYyBHYW5uYXdheVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KSA6XG5cdChmYWN0b3J5KChnbG9iYWwuSW5mZXJubyA9IGdsb2JhbC5JbmZlcm5vIHx8IHt9KSkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKGV4cG9ydHMpIHsgJ3VzZSBzdHJpY3QnO1xuXG52YXIgTk9fT1AgPSAnJE5PX09QJztcbnZhciBFUlJPUl9NU0cgPSAnYSBydW50aW1lIGVycm9yIG9jY3VyZWQhIFVzZSBJbmZlcm5vIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50IHRvIGZpbmQgdGhlIGVycm9yLic7XG52YXIgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50O1xuXG4vLyB0aGlzIGlzIE1VQ0ggZmFzdGVyIHRoYW4gLmNvbnN0cnVjdG9yID09PSBBcnJheSBhbmQgaW5zdGFuY2VvZiBBcnJheVxuLy8gaW4gTm9kZSA3IGFuZCB0aGUgbGF0ZXIgdmVyc2lvbnMgb2YgVjgsIHNsb3dlciBpbiBvbGRlciB2ZXJzaW9ucyB0aG91Z2hcbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbmZ1bmN0aW9uIGlzU3RhdGVmdWxDb21wb25lbnQobykge1xuICAgIHJldHVybiAhaXNVbmRlZmluZWQoby5wcm90b3R5cGUpICYmICFpc1VuZGVmaW5lZChvLnByb3RvdHlwZS5yZW5kZXIpO1xufVxuZnVuY3Rpb24gaXNTdHJpbmdPck51bWJlcihvYmopIHtcbiAgICB2YXIgdHlwZSA9IHR5cGVvZiBvYmo7XG4gICAgcmV0dXJuIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGUgPT09ICdudW1iZXInO1xufVxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZihvYmopIHtcbiAgICByZXR1cm4gaXNVbmRlZmluZWQob2JqKSB8fCBpc051bGwob2JqKTtcbn1cbmZ1bmN0aW9uIGlzSW52YWxpZChvYmopIHtcbiAgICByZXR1cm4gaXNOdWxsKG9iaikgfHwgb2JqID09PSBmYWxzZSB8fCBpc1RydWUob2JqKSB8fCBpc1VuZGVmaW5lZChvYmopO1xufVxuZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJztcbn1cbmZ1bmN0aW9uIGlzQXR0ckFuRXZlbnQoYXR0cikge1xuICAgIHJldHVybiBhdHRyWzBdID09PSAnbycgJiYgYXR0clsxXSA9PT0gJ24nICYmIGF0dHIubGVuZ3RoID4gMztcbn1cbmZ1bmN0aW9uIGlzU3RyaW5nKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJztcbn1cbmZ1bmN0aW9uIGlzTnVtYmVyKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnbnVtYmVyJztcbn1cbmZ1bmN0aW9uIGlzTnVsbChvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBudWxsO1xufVxuZnVuY3Rpb24gaXNUcnVlKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHRydWU7XG59XG5mdW5jdGlvbiBpc1VuZGVmaW5lZChvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc09iamVjdChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvID09PSAnb2JqZWN0Jztcbn1cbmZ1bmN0aW9uIHRocm93RXJyb3IobWVzc2FnZSkge1xuICAgIGlmICghbWVzc2FnZSkge1xuICAgICAgICBtZXNzYWdlID0gRVJST1JfTVNHO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoKFwiSW5mZXJubyBFcnJvcjogXCIgKyBtZXNzYWdlKSk7XG59XG5mdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG59XG52YXIgRU1QVFlfT0JKID0ge307XG5cbmZ1bmN0aW9uIGFwcGx5S2V5KGtleSwgdk5vZGUpIHtcbiAgICB2Tm9kZS5rZXkgPSBrZXk7XG4gICAgcmV0dXJuIHZOb2RlO1xufVxuZnVuY3Rpb24gYXBwbHlLZXlJZk1pc3Npbmcoa2V5LCB2Tm9kZSkge1xuICAgIGlmIChpc051bWJlcihrZXkpKSB7XG4gICAgICAgIGtleSA9IFwiLlwiICsga2V5O1xuICAgIH1cbiAgICBpZiAoaXNOdWxsKHZOb2RlLmtleSkgfHwgdk5vZGUua2V5WzBdID09PSAnLicpIHtcbiAgICAgICAgcmV0dXJuIGFwcGx5S2V5KGtleSwgdk5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gdk5vZGU7XG59XG5mdW5jdGlvbiBhcHBseUtleVByZWZpeChrZXksIHZOb2RlKSB7XG4gICAgdk5vZGUua2V5ID0ga2V5ICsgdk5vZGUua2V5O1xuICAgIHJldHVybiB2Tm9kZTtcbn1cbmZ1bmN0aW9uIF9ub3JtYWxpemVWTm9kZXMobm9kZXMsIHJlc3VsdCwgaW5kZXgsIGN1cnJlbnRLZXkpIHtcbiAgICBmb3IgKDsgaW5kZXggPCBub2Rlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIG4gPSBub2Rlc1tpbmRleF07XG4gICAgICAgIHZhciBrZXkgPSBjdXJyZW50S2V5ICsgXCIuXCIgKyBpbmRleDtcbiAgICAgICAgaWYgKCFpc0ludmFsaWQobikpIHtcbiAgICAgICAgICAgIGlmIChpc0FycmF5KG4pKSB7XG4gICAgICAgICAgICAgICAgX25vcm1hbGl6ZVZOb2RlcyhuLCByZXN1bHQsIDAsIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNTdHJpbmdPck51bWJlcihuKSkge1xuICAgICAgICAgICAgICAgICAgICBuID0gY3JlYXRlVGV4dFZOb2RlKG4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc1ZOb2RlKG4pICYmIG4uZG9tIHx8IChuLmtleSAmJiBuLmtleVswXSA9PT0gJy4nKSkge1xuICAgICAgICAgICAgICAgICAgICBuID0gY2xvbmVWTm9kZShuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzTnVsbChuLmtleSkgfHwgbi5rZXlbMF0gPT09ICcuJykge1xuICAgICAgICAgICAgICAgICAgICBuID0gYXBwbHlLZXkoa2V5LCBuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG4gPSBhcHBseUtleVByZWZpeChjdXJyZW50S2V5LCBuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBub3JtYWxpemVWTm9kZXMobm9kZXMpIHtcbiAgICB2YXIgbmV3Tm9kZXM7XG4gICAgLy8gd2UgYXNzaWduICQgd2hpY2ggYmFzaWNhbGx5IG1lYW5zIHdlJ3ZlIGZsYWdnZWQgdGhpcyBhcnJheSBmb3IgZnV0dXJlIG5vdGVcbiAgICAvLyBpZiBpdCBjb21lcyBiYWNrIGFnYWluLCB3ZSBuZWVkIHRvIGNsb25lIGl0LCBhcyBwZW9wbGUgYXJlIHVzaW5nIGl0XG4gICAgLy8gaW4gYW4gaW1tdXRhYmxlIHdheVxuICAgIC8vIHRzbGludDpkaXNhYmxlXG4gICAgaWYgKG5vZGVzWyckJ10pIHtcbiAgICAgICAgbm9kZXMgPSBub2Rlcy5zbGljZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbm9kZXNbJyQnXSA9IHRydWU7XG4gICAgfVxuICAgIC8vIHRzbGludDplbmFibGVcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBuID0gbm9kZXNbaV07XG4gICAgICAgIGlmIChpc0ludmFsaWQobikgfHwgaXNBcnJheShuKSkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IChuZXdOb2RlcyB8fCBub2Rlcykuc2xpY2UoMCwgaSk7XG4gICAgICAgICAgICBfbm9ybWFsaXplVk5vZGVzKG5vZGVzLCByZXN1bHQsIGksIFwiXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1N0cmluZ09yTnVtYmVyKG4pKSB7XG4gICAgICAgICAgICBpZiAoIW5ld05vZGVzKSB7XG4gICAgICAgICAgICAgICAgbmV3Tm9kZXMgPSBub2Rlcy5zbGljZSgwLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld05vZGVzLnB1c2goYXBwbHlLZXlJZk1pc3NpbmcoaSwgY3JlYXRlVGV4dFZOb2RlKG4pKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKGlzVk5vZGUobikgJiYgbi5kb20pIHx8IChpc051bGwobi5rZXkpICYmICEobi5mbGFncyAmIDY0IC8qIEhhc05vbktleWVkQ2hpbGRyZW4gKi8pKSkge1xuICAgICAgICAgICAgaWYgKCFuZXdOb2Rlcykge1xuICAgICAgICAgICAgICAgIG5ld05vZGVzID0gbm9kZXMuc2xpY2UoMCwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdOb2Rlcy5wdXNoKGFwcGx5S2V5SWZNaXNzaW5nKGksIGNsb25lVk5vZGUobikpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXdOb2Rlcykge1xuICAgICAgICAgICAgbmV3Tm9kZXMucHVzaChhcHBseUtleUlmTWlzc2luZyhpLCBjbG9uZVZOb2RlKG4pKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld05vZGVzIHx8IG5vZGVzO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplQ2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZVZOb2RlcyhjaGlsZHJlbik7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzVk5vZGUoY2hpbGRyZW4pICYmIGNoaWxkcmVuLmRvbSkge1xuICAgICAgICByZXR1cm4gY2xvbmVWTm9kZShjaGlsZHJlbik7XG4gICAgfVxuICAgIHJldHVybiBjaGlsZHJlbjtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVByb3BzKHZOb2RlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgICBpZiAoISh2Tm9kZS5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykgJiYgaXNOdWxsT3JVbmRlZihjaGlsZHJlbikgJiYgIWlzTnVsbE9yVW5kZWYocHJvcHMuY2hpbGRyZW4pKSB7XG4gICAgICAgIHZOb2RlLmNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG4gICAgfVxuICAgIGlmIChwcm9wcy5yZWYpIHtcbiAgICAgICAgdk5vZGUucmVmID0gcHJvcHMucmVmO1xuICAgICAgICBkZWxldGUgcHJvcHMucmVmO1xuICAgIH1cbiAgICBpZiAocHJvcHMuZXZlbnRzKSB7XG4gICAgICAgIHZOb2RlLmV2ZW50cyA9IHByb3BzLmV2ZW50cztcbiAgICB9XG4gICAgaWYgKCFpc051bGxPclVuZGVmKHByb3BzLmtleSkpIHtcbiAgICAgICAgdk5vZGUua2V5ID0gcHJvcHMua2V5O1xuICAgICAgICBkZWxldGUgcHJvcHMua2V5O1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNvcHlQcm9wc1RvKGNvcHlGcm9tLCBjb3B5VG8pIHtcbiAgICBmb3IgKHZhciBwcm9wIGluIGNvcHlGcm9tKSB7XG4gICAgICAgIGlmIChpc1VuZGVmaW5lZChjb3B5VG9bcHJvcF0pKSB7XG4gICAgICAgICAgICBjb3B5VG9bcHJvcF0gPSBjb3B5RnJvbVtwcm9wXTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZUVsZW1lbnQodHlwZSwgdk5vZGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ3N2ZycpIHtcbiAgICAgICAgdk5vZGUuZmxhZ3MgPSAxMjggLyogU3ZnRWxlbWVudCAqLztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICB2Tm9kZS5mbGFncyA9IDUxMiAvKiBJbnB1dEVsZW1lbnQgKi87XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgIHZOb2RlLmZsYWdzID0gMjA0OCAvKiBTZWxlY3RFbGVtZW50ICovO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAndGV4dGFyZWEnKSB7XG4gICAgICAgIHZOb2RlLmZsYWdzID0gMTAyNCAvKiBUZXh0YXJlYUVsZW1lbnQgKi87XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdtZWRpYScpIHtcbiAgICAgICAgdk5vZGUuZmxhZ3MgPSAyNTYgLyogTWVkaWFFbGVtZW50ICovO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdk5vZGUuZmxhZ3MgPSAyIC8qIEh0bWxFbGVtZW50ICovO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZSh2Tm9kZSkge1xuICAgIHZhciBwcm9wcyA9IHZOb2RlLnByb3BzO1xuICAgIHZhciBoYXNQcm9wcyA9ICFpc051bGwocHJvcHMpO1xuICAgIHZhciB0eXBlID0gdk5vZGUudHlwZTtcbiAgICB2YXIgY2hpbGRyZW4gPSB2Tm9kZS5jaGlsZHJlbjtcbiAgICAvLyBjb252ZXJ0IGEgd3JvbmdseSBjcmVhdGVkIHR5cGUgYmFjayB0byBlbGVtZW50XG4gICAgaWYgKGlzU3RyaW5nKHR5cGUpICYmICh2Tm9kZS5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykpIHtcbiAgICAgICAgbm9ybWFsaXplRWxlbWVudCh0eXBlLCB2Tm9kZSk7XG4gICAgICAgIGlmIChoYXNQcm9wcyAmJiBwcm9wcy5jaGlsZHJlbikge1xuICAgICAgICAgICAgdk5vZGUuY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGhhc1Byb3BzKSB7XG4gICAgICAgIG5vcm1hbGl6ZVByb3BzKHZOb2RlLCBwcm9wcywgY2hpbGRyZW4pO1xuICAgIH1cbiAgICBpZiAoIWlzSW52YWxpZChjaGlsZHJlbikpIHtcbiAgICAgICAgdk5vZGUuY2hpbGRyZW4gPSBub3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbik7XG4gICAgfVxuICAgIGlmIChoYXNQcm9wcyAmJiAhaXNJbnZhbGlkKHByb3BzLmNoaWxkcmVuKSkge1xuICAgICAgICBwcm9wcy5jaGlsZHJlbiA9IG5vcm1hbGl6ZUNoaWxkcmVuKHByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgLy8gVGhpcyBjb2RlIHdpbGwgYmUgc3RyaXBwZWQgb3V0IGZyb20gcHJvZHVjdGlvbiBDT0RFXG4gICAgICAgIC8vIEl0IHdpbGwgaGVscCB1c2VycyB0byB0cmFjayBlcnJvcnMgaW4gdGhlaXIgYXBwbGljYXRpb25zLlxuICAgICAgICB2YXIgdmVyaWZ5S2V5cyA9IGZ1bmN0aW9uICh2Tm9kZXMpIHtcbiAgICAgICAgICAgIHZhciBrZXlWYWx1ZXMgPSB2Tm9kZXMubWFwKGZ1bmN0aW9uICh2bm9kZSkgeyByZXR1cm4gdm5vZGUua2V5OyB9KTtcbiAgICAgICAgICAgIGtleVZhbHVlcy5zb21lKGZ1bmN0aW9uIChpdGVtLCBpZHgpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGFzRHVwbGljYXRlID0ga2V5VmFsdWVzLmluZGV4T2YoaXRlbSkgIT09IGlkeDtcbiAgICAgICAgICAgICAgICBpZiAoaGFzRHVwbGljYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHdhcm5pbmcoJ0luZmVybm8gbm9ybWFsaXNhdGlvbiguLi4pOiBFbmNvdW50ZXJlZCB0d28gY2hpbGRyZW4gd2l0aCBzYW1lIGtleSwgYWxsIGtleXMgbXVzdCBiZSB1bmlxdWUgd2l0aGluIGl0cyBzaWJsaW5ncy4gRHVwbGljYXRlZCBrZXkgaXM6JyArIGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaGFzRHVwbGljYXRlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh2Tm9kZS5jaGlsZHJlbiAmJiBBcnJheS5pc0FycmF5KHZOb2RlLmNoaWxkcmVuKSkge1xuICAgICAgICAgICAgdmVyaWZ5S2V5cyh2Tm9kZS5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnZhciBvcHRpb25zID0ge1xuICAgIHJlY3ljbGluZ0VuYWJsZWQ6IHRydWUsXG4gICAgZmluZERPTU5vZGVFbmFibGVkOiBmYWxzZSxcbiAgICByb290czogbnVsbCxcbiAgICBjcmVhdGVWTm9kZTogbnVsbCxcbiAgICBiZWZvcmVSZW5kZXI6IG51bGwsXG4gICAgYWZ0ZXJSZW5kZXI6IG51bGwsXG4gICAgYWZ0ZXJNb3VudDogbnVsbCxcbiAgICBhZnRlclVwZGF0ZTogbnVsbCxcbiAgICBiZWZvcmVVbm1vdW50OiBudWxsXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVWTm9kZShmbGFncywgdHlwZSwgcHJvcHMsIGNoaWxkcmVuLCBldmVudHMsIGtleSwgcmVmLCBub05vcm1hbGlzZSkge1xuICAgIGlmIChmbGFncyAmIDE2IC8qIENvbXBvbmVudFVua25vd24gKi8pIHtcbiAgICAgICAgZmxhZ3MgPSBpc1N0YXRlZnVsQ29tcG9uZW50KHR5cGUpID8gNCAvKiBDb21wb25lbnRDbGFzcyAqLyA6IDggLyogQ29tcG9uZW50RnVuY3Rpb24gKi87XG4gICAgfVxuICAgIHZhciB2Tm9kZSA9IHtcbiAgICAgICAgY2hpbGRyZW46IGlzVW5kZWZpbmVkKGNoaWxkcmVuKSA/IG51bGwgOiBjaGlsZHJlbixcbiAgICAgICAgZG9tOiBudWxsLFxuICAgICAgICBldmVudHM6IGV2ZW50cyB8fCBudWxsLFxuICAgICAgICBmbGFnczogZmxhZ3MsXG4gICAgICAgIGtleTogaXNVbmRlZmluZWQoa2V5KSA/IG51bGwgOiBrZXksXG4gICAgICAgIHByb3BzOiBwcm9wcyB8fCBudWxsLFxuICAgICAgICByZWY6IHJlZiB8fCBudWxsLFxuICAgICAgICB0eXBlOiB0eXBlXG4gICAgfTtcbiAgICBpZiAoIW5vTm9ybWFsaXNlKSB7XG4gICAgICAgIG5vcm1hbGl6ZSh2Tm9kZSk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmNyZWF0ZVZOb2RlKSB7XG4gICAgICAgIG9wdGlvbnMuY3JlYXRlVk5vZGUodk5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gdk5vZGU7XG59XG5mdW5jdGlvbiBjbG9uZVZOb2RlKHZOb2RlVG9DbG9uZSwgcHJvcHMpIHtcbiAgICB2YXIgX2NoaWxkcmVuID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuICAgIHdoaWxlICggbGVuLS0gPiAwICkgX2NoaWxkcmVuWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMiBdO1xuXG4gICAgdmFyIGNoaWxkcmVuID0gX2NoaWxkcmVuO1xuICAgIGlmIChfY2hpbGRyZW4ubGVuZ3RoID4gMCAmJiAhaXNOdWxsKF9jaGlsZHJlblswXSkpIHtcbiAgICAgICAgaWYgKCFwcm9wcykge1xuICAgICAgICAgICAgcHJvcHMgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX2NoaWxkcmVuLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgY2hpbGRyZW4gPSBfY2hpbGRyZW5bMF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzVW5kZWZpbmVkKHByb3BzLmNoaWxkcmVuKSkge1xuICAgICAgICAgICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIGlmIChpc0FycmF5KHByb3BzLmNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLmNvbmNhdChjaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGlsZHJlbiA9IFtwcm9wcy5jaGlsZHJlbl0uY29uY2F0KGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNBcnJheShwcm9wcy5jaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2hpbGRyZW4ucHVzaChjaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGlsZHJlbiA9IFtwcm9wcy5jaGlsZHJlbl07XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuLnB1c2goY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGlsZHJlbiA9IG51bGw7XG4gICAgdmFyIG5ld1ZOb2RlO1xuICAgIGlmIChpc0FycmF5KHZOb2RlVG9DbG9uZSkpIHtcbiAgICAgICAgdmFyIHRtcEFycmF5ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdk5vZGVUb0Nsb25lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0bXBBcnJheS5wdXNoKGNsb25lVk5vZGUodk5vZGVUb0Nsb25lW2ldKSk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3Vk5vZGUgPSB0bXBBcnJheTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBmbGFncyA9IHZOb2RlVG9DbG9uZS5mbGFncztcbiAgICAgICAgdmFyIGV2ZW50cyA9IHZOb2RlVG9DbG9uZS5ldmVudHMgfHwgKHByb3BzICYmIHByb3BzLmV2ZW50cykgfHwgbnVsbDtcbiAgICAgICAgdmFyIGtleSA9ICFpc051bGxPclVuZGVmKHZOb2RlVG9DbG9uZS5rZXkpID8gdk5vZGVUb0Nsb25lLmtleSA6IChwcm9wcyA/IHByb3BzLmtleSA6IG51bGwpO1xuICAgICAgICB2YXIgcmVmID0gdk5vZGVUb0Nsb25lLnJlZiB8fCAocHJvcHMgPyBwcm9wcy5yZWYgOiBudWxsKTtcbiAgICAgICAgaWYgKGZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICBuZXdWTm9kZSA9IGNyZWF0ZVZOb2RlKGZsYWdzLCB2Tm9kZVRvQ2xvbmUudHlwZSwgT2JqZWN0LmFzc2lnbih7fSwgdk5vZGVUb0Nsb25lLnByb3BzLCBwcm9wcyksIG51bGwsIGV2ZW50cywga2V5LCByZWYsIHRydWUpO1xuICAgICAgICAgICAgdmFyIG5ld1Byb3BzID0gbmV3Vk5vZGUucHJvcHM7XG4gICAgICAgICAgICBpZiAobmV3UHJvcHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3Q2hpbGRyZW4gPSBuZXdQcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGFsc28gY2xvbmUgY29tcG9uZW50IGNoaWxkcmVuIHRoYXQgYXJlIGluIHByb3BzXG4gICAgICAgICAgICAgICAgLy8gYXMgdGhlIGNoaWxkcmVuIG1heSBhbHNvIGhhdmUgYmVlbiBob2lzdGVkXG4gICAgICAgICAgICAgICAgaWYgKG5ld0NoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0FycmF5KG5ld0NoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSQxID0gMDsgaSQxIDwgbmV3Q2hpbGRyZW4ubGVuZ3RoOyBpJDErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IG5ld0NoaWxkcmVuW2kkMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0ludmFsaWQoY2hpbGQpICYmIGlzVk5vZGUoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb3BzLmNoaWxkcmVuW2kkMV0gPSBjbG9uZVZOb2RlKGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNWTm9kZShuZXdDaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb3BzLmNoaWxkcmVuID0gY2xvbmVWTm9kZShuZXdDaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdWTm9kZS5jaGlsZHJlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZmxhZ3MgJiAzOTcwIC8qIEVsZW1lbnQgKi8pIHtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gKHByb3BzICYmIHByb3BzLmNoaWxkcmVuKSB8fCB2Tm9kZVRvQ2xvbmUuY2hpbGRyZW47XG4gICAgICAgICAgICBuZXdWTm9kZSA9IGNyZWF0ZVZOb2RlKGZsYWdzLCB2Tm9kZVRvQ2xvbmUudHlwZSwgT2JqZWN0LmFzc2lnbih7fSwgdk5vZGVUb0Nsb25lLnByb3BzLCBwcm9wcyksIGNoaWxkcmVuLCBldmVudHMsIGtleSwgcmVmLCAhY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZsYWdzICYgMSAvKiBUZXh0ICovKSB7XG4gICAgICAgICAgICBuZXdWTm9kZSA9IGNyZWF0ZVRleHRWTm9kZSh2Tm9kZVRvQ2xvbmUuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXdWTm9kZTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVZvaWRWTm9kZSgpIHtcbiAgICByZXR1cm4gY3JlYXRlVk5vZGUoNDA5NiAvKiBWb2lkICovKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVRleHRWTm9kZSh0ZXh0KSB7XG4gICAgcmV0dXJuIGNyZWF0ZVZOb2RlKDEgLyogVGV4dCAqLywgbnVsbCwgbnVsbCwgdGV4dCwgbnVsbCwgbnVsbCwgbnVsbCwgdHJ1ZSk7XG59XG5mdW5jdGlvbiBpc1ZOb2RlKG8pIHtcbiAgICByZXR1cm4gISFvLmZsYWdzO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3REZWZhdWx0cyhzdHJpbmcsIG9iamVjdCwgdmFsdWUpIHtcbiAgICAvKiBlc2xpbnQgbm8tcmV0dXJuLWFzc2lnbjogMCAqL1xuICAgIHN0cmluZy5zcGxpdCgnLCcpLmZvckVhY2goZnVuY3Rpb24gKGkpIHsgcmV0dXJuIG9iamVjdFtpXSA9IHZhbHVlOyB9KTtcbn1cbnZhciB4bGlua05TID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnO1xudmFyIHhtbE5TID0gJ2h0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZSc7XG52YXIgc3ZnTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xudmFyIHN0cmljdFByb3BzID0ge307XG52YXIgYm9vbGVhblByb3BzID0ge307XG52YXIgbmFtZXNwYWNlcyA9IHt9O1xudmFyIGlzVW5pdGxlc3NOdW1iZXIgPSB7fTtcbnZhciBza2lwUHJvcHMgPSB7fTtcbnZhciBkZWh5cGhlblByb3BzID0ge1xuICAgIGh0dHBFcXVpdjogJ2h0dHAtZXF1aXYnLFxuICAgIGFjY2VwdENoYXJzZXQ6ICdhY2NlcHQtY2hhcnNldCdcbn07XG52YXIgcHJvYmFibHlLZWJhYlByb3BzID0gL14oYWNjZW50SHxhcmFiaWNGfGNhcEh8Zm9udFtGU1ZXXXxnbHlwaFtOT118aG9yaXpbQU9dfHBhbm9zZTF8cmVuZGVyaW5nSXxzdHJpa2V0aHJvdWdoW1BUXXx1bmRlcmxpbmVbUFRdfHZbQUhJTV18dmVydFtBT118eEh8YWxpZ25tZW50QnxiYXNlbGluZVN8Y2xpcFtQUl18Y29sb3JbSVBSXXxkb21pbmFudEJ8ZW5hYmxlQnxmaWxsW09SXXxmbG9vZFtDT0ZdfGltYWdlUnxsZXR0ZXJTfGxpZ2h0aW5nQ3xtYXJrZXJbRU1TXXxwb2ludGVyRXxzaGFwZVJ8c3RvcFtDT118c3Ryb2tlW0RMTU9XXXx0ZXh0W0FEUl18dW5pY29kZUJ8d29yZFN8d3JpdGluZ00pLiovO1xuZnVuY3Rpb24ga2ViYWJpemUoc3RyLCBzbWFsbExldHRlciwgbGFyZ2VMZXR0ZXIpIHtcbiAgICByZXR1cm4gKHNtYWxsTGV0dGVyICsgXCItXCIgKyAobGFyZ2VMZXR0ZXIudG9Mb3dlckNhc2UoKSkpO1xufVxudmFyIGRlbGVnYXRlZFByb3BzID0ge307XG5jb25zdHJ1Y3REZWZhdWx0cygneGxpbms6aHJlZix4bGluazphcmNyb2xlLHhsaW5rOmFjdHVhdGUseGxpbms6cm9sZSx4bGluazp0aXRsZWYseGxpbms6dHlwZScsIG5hbWVzcGFjZXMsIHhsaW5rTlMpO1xuY29uc3RydWN0RGVmYXVsdHMoJ3htbDpiYXNlLHhtbDpsYW5nLHhtbDpzcGFjZScsIG5hbWVzcGFjZXMsIHhtbE5TKTtcbmNvbnN0cnVjdERlZmF1bHRzKCd2b2x1bWUsZGVmYXVsdFZhbHVlLGRlZmF1bHRDaGVja2VkJywgc3RyaWN0UHJvcHMsIHRydWUpO1xuY29uc3RydWN0RGVmYXVsdHMoJ2NoaWxkcmVuLGNoaWxkcmVuVHlwZSxyZWYsa2V5LHNlbGVjdGVkLGNoZWNrZWQsbXVsdGlwbGUnLCBza2lwUHJvcHMsIHRydWUpO1xuY29uc3RydWN0RGVmYXVsdHMoJ29uQ2xpY2ssb25Nb3VzZURvd24sb25Nb3VzZVVwLG9uTW91c2VNb3ZlLG9uU3VibWl0LG9uRGJsQ2xpY2ssb25LZXlEb3duLG9uS2V5VXAsb25LZXlQcmVzcycsIGRlbGVnYXRlZFByb3BzLCB0cnVlKTtcbmNvbnN0cnVjdERlZmF1bHRzKCdtdXRlZCxzY29wZWQsbG9vcCxvcGVuLGNoZWNrZWQsZGVmYXVsdCxjYXB0dXJlLGRpc2FibGVkLHJlYWRPbmx5LHJlcXVpcmVkLGF1dG9wbGF5LGNvbnRyb2xzLHNlYW1sZXNzLHJldmVyc2VkLGFsbG93ZnVsbHNjcmVlbixub3ZhbGlkYXRlLGhpZGRlbicsIGJvb2xlYW5Qcm9wcywgdHJ1ZSk7XG5jb25zdHJ1Y3REZWZhdWx0cygnYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQsYm9yZGVySW1hZ2VPdXRzZXQsYm9yZGVySW1hZ2VTbGljZSxib3JkZXJJbWFnZVdpZHRoLGJveEZsZXgsYm94RmxleEdyb3VwLGJveE9yZGluYWxHcm91cCxjb2x1bW5Db3VudCxmbGV4LGZsZXhHcm93LGZsZXhQb3NpdGl2ZSxmbGV4U2hyaW5rLGZsZXhOZWdhdGl2ZSxmbGV4T3JkZXIsZ3JpZFJvdyxncmlkQ29sdW1uLGZvbnRXZWlnaHQsbGluZUNsYW1wLGxpbmVIZWlnaHQsb3BhY2l0eSxvcmRlcixvcnBoYW5zLHRhYlNpemUsd2lkb3dzLHpJbmRleCx6b29tLGZpbGxPcGFjaXR5LGZsb29kT3BhY2l0eSxzdG9wT3BhY2l0eSxzdHJva2VEYXNoYXJyYXksc3Ryb2tlRGFzaG9mZnNldCxzdHJva2VNaXRlcmxpbWl0LHN0cm9rZU9wYWNpdHksc3Ryb2tlV2lkdGgsJywgaXNVbml0bGVzc051bWJlciwgdHJ1ZSk7XG5cbnZhciBMaWZlY3ljbGUgPSBmdW5jdGlvbiBMaWZlY3ljbGUoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICB0aGlzLmZhc3RVbm1vdW50ID0gdHJ1ZTtcbn07XG5MaWZlY3ljbGUucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIgKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG59O1xuTGlmZWN5Y2xlLnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24gdHJpZ2dlciAoKSB7XG4gICAgICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzJDEubGlzdGVuZXJzW2ldKCk7XG4gICAgfVxufTtcblxudmFyIGlzaU9TID0gaXNCcm93c2VyICYmICEhbmF2aWdhdG9yLnBsYXRmb3JtICYmIC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSk7XG52YXIgZGVsZWdhdGVkRXZlbnRzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gaGFuZGxlRXZlbnQobmFtZSwgbGFzdEV2ZW50LCBuZXh0RXZlbnQsIGRvbSkge1xuICAgIHZhciBkZWxlZ2F0ZWRSb290cyA9IGRlbGVnYXRlZEV2ZW50cy5nZXQobmFtZSk7XG4gICAgaWYgKG5leHRFdmVudCkge1xuICAgICAgICBpZiAoIWRlbGVnYXRlZFJvb3RzKSB7XG4gICAgICAgICAgICBkZWxlZ2F0ZWRSb290cyA9IHsgaXRlbXM6IG5ldyBNYXAoKSwgY291bnQ6IDAsIGRvY0V2ZW50OiBudWxsIH07XG4gICAgICAgICAgICB2YXIgZG9jRXZlbnQgPSBhdHRhY2hFdmVudFRvRG9jdW1lbnQobmFtZSwgZGVsZWdhdGVkUm9vdHMpO1xuICAgICAgICAgICAgZGVsZWdhdGVkUm9vdHMuZG9jRXZlbnQgPSBkb2NFdmVudDtcbiAgICAgICAgICAgIGRlbGVnYXRlZEV2ZW50cy5zZXQobmFtZSwgZGVsZWdhdGVkUm9vdHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbGFzdEV2ZW50KSB7XG4gICAgICAgICAgICBkZWxlZ2F0ZWRSb290cy5jb3VudCsrO1xuICAgICAgICAgICAgaWYgKGlzaU9TICYmIG5hbWUgPT09ICdvbkNsaWNrJykge1xuICAgICAgICAgICAgICAgIHRyYXBDbGlja09uTm9uSW50ZXJhY3RpdmVFbGVtZW50KGRvbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGVsZWdhdGVkUm9vdHMuaXRlbXMuc2V0KGRvbSwgbmV4dEV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZGVsZWdhdGVkUm9vdHMpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlZFJvb3RzLml0ZW1zLmhhcyhkb20pKSB7XG4gICAgICAgICAgICBkZWxlZ2F0ZWRSb290cy5jb3VudC0tO1xuICAgICAgICAgICAgZGVsZWdhdGVkUm9vdHMuaXRlbXMuZGVsZXRlKGRvbSk7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVkUm9vdHMuY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG5vcm1hbGl6ZUV2ZW50TmFtZShuYW1lKSwgZGVsZWdhdGVkUm9vdHMuZG9jRXZlbnQpO1xuICAgICAgICAgICAgICAgIGRlbGVnYXRlZEV2ZW50cy5kZWxldGUobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGV2ZW50LCBkb20sIGl0ZW1zLCBjb3VudCwgZXZlbnREYXRhKSB7XG4gICAgdmFyIGV2ZW50c1RvVHJpZ2dlciA9IGl0ZW1zLmdldChkb20pO1xuICAgIGlmIChldmVudHNUb1RyaWdnZXIpIHtcbiAgICAgICAgY291bnQtLTtcbiAgICAgICAgLy8gbGlua0V2ZW50IG9iamVjdFxuICAgICAgICBldmVudERhdGEuZG9tID0gZG9tO1xuICAgICAgICBpZiAoZXZlbnRzVG9UcmlnZ2VyLmV2ZW50KSB7XG4gICAgICAgICAgICBldmVudHNUb1RyaWdnZXIuZXZlbnQoZXZlbnRzVG9UcmlnZ2VyLmRhdGEsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50c1RvVHJpZ2dlcihldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50RGF0YS5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgIHZhciBwYXJlbnREb20gPSBkb20ucGFyZW50Tm9kZTtcbiAgICAgICAgaWYgKHBhcmVudERvbSB8fCBwYXJlbnREb20gPT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZXZlbnQsIHBhcmVudERvbSwgaXRlbXMsIGNvdW50LCBldmVudERhdGEpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gbm9ybWFsaXplRXZlbnROYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZS5zdWJzdHIoMikudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIGF0dGFjaEV2ZW50VG9Eb2N1bWVudChuYW1lLCBkZWxlZ2F0ZWRSb290cykge1xuICAgIHZhciBkb2NFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgZXZlbnREYXRhID0ge1xuICAgICAgICAgICAgc3RvcFByb3BhZ2F0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgIGRvbTogZG9jdW1lbnRcbiAgICAgICAgfTtcbiAgICAgICAgLy8gd2UgaGF2ZSB0byBkbyB0aGlzIGFzIHNvbWUgYnJvd3NlcnMgcmVjeWNsZSB0aGUgc2FtZSBFdmVudCBiZXR3ZWVuIGNhbGxzXG4gICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gbWFrZSB0aGUgcHJvcGVydHkgY29uZmlndXJhYmxlXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldmVudCwgJ2N1cnJlbnRUYXJnZXQnLCB7XG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnREYXRhLmRvbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGV2ZW50RGF0YS5zdG9wUHJvcGFnYXRpb24gPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgY291bnQgPSBkZWxlZ2F0ZWRSb290cy5jb3VudDtcbiAgICAgICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChldmVudCwgZXZlbnQudGFyZ2V0LCBkZWxlZ2F0ZWRSb290cy5pdGVtcywgY291bnQsIGV2ZW50RGF0YSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobm9ybWFsaXplRXZlbnROYW1lKG5hbWUpLCBkb2NFdmVudCk7XG4gICAgcmV0dXJuIGRvY0V2ZW50O1xufVxuZnVuY3Rpb24gZW1wdHlGbigpIHsgfVxuZnVuY3Rpb24gdHJhcENsaWNrT25Ob25JbnRlcmFjdGl2ZUVsZW1lbnQoZG9tKSB7XG4gICAgLy8gTW9iaWxlIFNhZmFyaSBkb2VzIG5vdCBmaXJlIHByb3Blcmx5IGJ1YmJsZSBjbGljayBldmVudHMgb25cbiAgICAvLyBub24taW50ZXJhY3RpdmUgZWxlbWVudHMsIHdoaWNoIG1lYW5zIGRlbGVnYXRlZCBjbGljayBsaXN0ZW5lcnMgZG8gbm90XG4gICAgLy8gZmlyZS4gVGhlIHdvcmthcm91bmQgZm9yIHRoaXMgYnVnIGludm9sdmVzIGF0dGFjaGluZyBhbiBlbXB0eSBjbGlja1xuICAgIC8vIGxpc3RlbmVyIG9uIHRoZSB0YXJnZXQgbm9kZS5cbiAgICAvLyBodHRwOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxMC8wOS9jbGlja19ldmVudF9kZWwuaHRtbFxuICAgIC8vIEp1c3Qgc2V0IGl0IHVzaW5nIHRoZSBvbmNsaWNrIHByb3BlcnR5IHNvIHRoYXQgd2UgZG9uJ3QgaGF2ZSB0byBtYW5hZ2UgYW55XG4gICAgLy8gYm9va2tlZXBpbmcgZm9yIGl0LiBOb3Qgc3VyZSBpZiB3ZSBuZWVkIHRvIGNsZWFyIGl0IHdoZW4gdGhlIGxpc3RlbmVyIGlzXG4gICAgLy8gcmVtb3ZlZC5cbiAgICAvLyBUT0RPOiBPbmx5IGRvIHRoaXMgZm9yIHRoZSByZWxldmFudCBTYWZhcmlzIG1heWJlP1xuICAgIGRvbS5vbmNsaWNrID0gZW1wdHlGbjtcbn1cblxudmFyIGNvbXBvbmVudFBvb2xzID0gbmV3IE1hcCgpO1xudmFyIGVsZW1lbnRQb29scyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIHJlY3ljbGVFbGVtZW50KHZOb2RlLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSB7XG4gICAgdmFyIHRhZyA9IHZOb2RlLnR5cGU7XG4gICAgdmFyIGtleSA9IHZOb2RlLmtleTtcbiAgICB2YXIgcG9vbHMgPSBlbGVtZW50UG9vbHMuZ2V0KHRhZyk7XG4gICAgaWYgKCFpc1VuZGVmaW5lZChwb29scykpIHtcbiAgICAgICAgdmFyIHBvb2wgPSBrZXkgPT09IG51bGwgPyBwb29scy5ub25LZXllZCA6IHBvb2xzLmtleWVkLmdldChrZXkpO1xuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKHBvb2wpKSB7XG4gICAgICAgICAgICB2YXIgcmVjeWNsZWRWTm9kZSA9IHBvb2wucG9wKCk7XG4gICAgICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKHJlY3ljbGVkVk5vZGUpKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hFbGVtZW50KHJlY3ljbGVkVk5vZGUsIHZOb2RlLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdk5vZGUuZG9tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gcG9vbEVsZW1lbnQodk5vZGUpIHtcbiAgICB2YXIgdGFnID0gdk5vZGUudHlwZTtcbiAgICB2YXIga2V5ID0gdk5vZGUua2V5O1xuICAgIHZhciBwb29scyA9IGVsZW1lbnRQb29scy5nZXQodGFnKTtcbiAgICBpZiAoaXNVbmRlZmluZWQocG9vbHMpKSB7XG4gICAgICAgIHBvb2xzID0ge1xuICAgICAgICAgICAgbm9uS2V5ZWQ6IFtdLFxuICAgICAgICAgICAga2V5ZWQ6IG5ldyBNYXAoKVxuICAgICAgICB9O1xuICAgICAgICBlbGVtZW50UG9vbHMuc2V0KHRhZywgcG9vbHMpO1xuICAgIH1cbiAgICBpZiAoaXNOdWxsKGtleSkpIHtcbiAgICAgICAgcG9vbHMubm9uS2V5ZWQucHVzaCh2Tm9kZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgcG9vbCA9IHBvb2xzLmtleWVkLmdldChrZXkpO1xuICAgICAgICBpZiAoaXNVbmRlZmluZWQocG9vbCkpIHtcbiAgICAgICAgICAgIHBvb2wgPSBbXTtcbiAgICAgICAgICAgIHBvb2xzLmtleWVkLnNldChrZXksIHBvb2wpO1xuICAgICAgICB9XG4gICAgICAgIHBvb2wucHVzaCh2Tm9kZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gcmVjeWNsZUNvbXBvbmVudCh2Tm9kZSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIHZhciB0eXBlID0gdk5vZGUudHlwZTtcbiAgICB2YXIga2V5ID0gdk5vZGUua2V5O1xuICAgIHZhciBwb29scyA9IGNvbXBvbmVudFBvb2xzLmdldCh0eXBlKTtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHBvb2xzKSkge1xuICAgICAgICB2YXIgcG9vbCA9IGtleSA9PT0gbnVsbCA/IHBvb2xzLm5vbktleWVkIDogcG9vbHMua2V5ZWQuZ2V0KGtleSk7XG4gICAgICAgIGlmICghaXNVbmRlZmluZWQocG9vbCkpIHtcbiAgICAgICAgICAgIHZhciByZWN5Y2xlZFZOb2RlID0gcG9vbC5wb3AoKTtcbiAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQocmVjeWNsZWRWTm9kZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmxhZ3MgPSB2Tm9kZS5mbGFncztcbiAgICAgICAgICAgICAgICB2YXIgZmFpbGVkID0gcGF0Y2hDb21wb25lbnQocmVjeWNsZWRWTm9kZSwgdk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGZsYWdzICYgNCAvKiBDb21wb25lbnRDbGFzcyAqLywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFmYWlsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZOb2RlLmRvbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBwb29sQ29tcG9uZW50KHZOb2RlKSB7XG4gICAgdmFyIHR5cGUgPSB2Tm9kZS50eXBlO1xuICAgIHZhciBrZXkgPSB2Tm9kZS5rZXk7XG4gICAgdmFyIGhvb2tzID0gdk5vZGUucmVmO1xuICAgIHZhciBub25SZWN5Y2xlSG9va3MgPSBob29rcyAmJiAoaG9va3Mub25Db21wb25lbnRXaWxsTW91bnQgfHxcbiAgICAgICAgaG9va3Mub25Db21wb25lbnRXaWxsVW5tb3VudCB8fFxuICAgICAgICBob29rcy5vbkNvbXBvbmVudERpZE1vdW50IHx8XG4gICAgICAgIGhvb2tzLm9uQ29tcG9uZW50V2lsbFVwZGF0ZSB8fFxuICAgICAgICBob29rcy5vbkNvbXBvbmVudERpZFVwZGF0ZSk7XG4gICAgaWYgKG5vblJlY3ljbGVIb29rcykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBwb29scyA9IGNvbXBvbmVudFBvb2xzLmdldCh0eXBlKTtcbiAgICBpZiAoaXNVbmRlZmluZWQocG9vbHMpKSB7XG4gICAgICAgIHBvb2xzID0ge1xuICAgICAgICAgICAgbm9uS2V5ZWQ6IFtdLFxuICAgICAgICAgICAga2V5ZWQ6IG5ldyBNYXAoKVxuICAgICAgICB9O1xuICAgICAgICBjb21wb25lbnRQb29scy5zZXQodHlwZSwgcG9vbHMpO1xuICAgIH1cbiAgICBpZiAoaXNOdWxsKGtleSkpIHtcbiAgICAgICAgcG9vbHMubm9uS2V5ZWQucHVzaCh2Tm9kZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgcG9vbCA9IHBvb2xzLmtleWVkLmdldChrZXkpO1xuICAgICAgICBpZiAoaXNVbmRlZmluZWQocG9vbCkpIHtcbiAgICAgICAgICAgIHBvb2wgPSBbXTtcbiAgICAgICAgICAgIHBvb2xzLmtleWVkLnNldChrZXksIHBvb2wpO1xuICAgICAgICB9XG4gICAgICAgIHBvb2wucHVzaCh2Tm9kZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1bm1vdW50KHZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY2FuUmVjeWNsZSwgaXNSZWN5Y2xpbmcpIHtcbiAgICB2YXIgZmxhZ3MgPSB2Tm9kZS5mbGFncztcbiAgICBpZiAoZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgdW5tb3VudENvbXBvbmVudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNhblJlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxhZ3MgJiAzOTcwIC8qIEVsZW1lbnQgKi8pIHtcbiAgICAgICAgdW5tb3VudEVsZW1lbnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjYW5SZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWdzICYgKDEgLyogVGV4dCAqLyB8IDQwOTYgLyogVm9pZCAqLykpIHtcbiAgICAgICAgdW5tb3VudFZvaWRPclRleHQodk5vZGUsIHBhcmVudERvbSk7XG4gICAgfVxufVxuZnVuY3Rpb24gdW5tb3VudFZvaWRPclRleHQodk5vZGUsIHBhcmVudERvbSkge1xuICAgIGlmIChwYXJlbnREb20pIHtcbiAgICAgICAgcmVtb3ZlQ2hpbGQocGFyZW50RG9tLCB2Tm9kZS5kb20pO1xuICAgIH1cbn1cbnZhciBhbHJlYWR5VW5tb3VudGVkID0gbmV3IFdlYWtNYXAoKTtcbmZ1bmN0aW9uIHVubW91bnRDb21wb25lbnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjYW5SZWN5Y2xlLCBpc1JlY3ljbGluZykge1xuICAgIHZhciBpbnN0YW5jZSA9IHZOb2RlLmNoaWxkcmVuO1xuICAgIHZhciBmbGFncyA9IHZOb2RlLmZsYWdzO1xuICAgIHZhciBpc1N0YXRlZnVsQ29tcG9uZW50JCQxID0gZmxhZ3MgJiA0O1xuICAgIHZhciByZWYgPSB2Tm9kZS5yZWY7XG4gICAgdmFyIGRvbSA9IHZOb2RlLmRvbTtcbiAgICBpZiAoYWxyZWFkeVVubW91bnRlZC5oYXModk5vZGUpICYmICFpc1JlY3ljbGluZyAmJiAhcGFyZW50RG9tKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWxyZWFkeVVubW91bnRlZC5zZXQodk5vZGUpO1xuICAgIGlmICghaXNSZWN5Y2xpbmcpIHtcbiAgICAgICAgaWYgKGlzU3RhdGVmdWxDb21wb25lbnQkJDEpIHtcbiAgICAgICAgICAgIGlmICghaW5zdGFuY2UuX3VubW91bnRlZCkge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLl9pZ25vcmVTZXRTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5iZWZvcmVVbm1vdW50ICYmIG9wdGlvbnMuYmVmb3JlVW5tb3VudCh2Tm9kZSk7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuY29tcG9uZW50V2lsbFVubW91bnQgJiYgaW5zdGFuY2UuY29tcG9uZW50V2lsbFVubW91bnQoKTtcbiAgICAgICAgICAgICAgICBpZiAocmVmICYmICFpc1JlY3ljbGluZykge1xuICAgICAgICAgICAgICAgICAgICByZWYobnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluc3RhbmNlLl91bm1vdW50ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuZmluZERPTU5vZGVFbmFibGVkICYmIGNvbXBvbmVudFRvRE9NTm9kZU1hcC5kZWxldGUoaW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgIHZhciBzdWJMaWZlY3ljbGUgPSBpbnN0YW5jZS5fbGlmZWN5Y2xlO1xuICAgICAgICAgICAgICAgIGlmICghc3ViTGlmZWN5Y2xlLmZhc3RVbm1vdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHVubW91bnQoaW5zdGFuY2UuX2xhc3RJbnB1dCwgbnVsbCwgc3ViTGlmZWN5Y2xlLCBmYWxzZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICghaXNOdWxsT3JVbmRlZihyZWYpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKHJlZi5vbkNvbXBvbmVudFdpbGxVbm1vdW50KSkge1xuICAgICAgICAgICAgICAgICAgICByZWYub25Db21wb25lbnRXaWxsVW5tb3VudChkb20pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbGlmZWN5Y2xlLmZhc3RVbm1vdW50KSB7XG4gICAgICAgICAgICAgICAgdW5tb3VudChpbnN0YW5jZSwgbnVsbCwgbGlmZWN5Y2xlLCBmYWxzZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwYXJlbnREb20pIHtcbiAgICAgICAgdmFyIGxhc3RJbnB1dCA9IGluc3RhbmNlLl9sYXN0SW5wdXQ7XG4gICAgICAgIGlmIChpc051bGxPclVuZGVmKGxhc3RJbnB1dCkpIHtcbiAgICAgICAgICAgIGxhc3RJbnB1dCA9IGluc3RhbmNlO1xuICAgICAgICB9XG4gICAgICAgIHJlbW92ZUNoaWxkKHBhcmVudERvbSwgZG9tKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMucmVjeWNsaW5nRW5hYmxlZCAmJiAhaXNTdGF0ZWZ1bENvbXBvbmVudCQkMSAmJiAocGFyZW50RG9tIHx8IGNhblJlY3ljbGUpKSB7XG4gICAgICAgIHBvb2xDb21wb25lbnQodk5vZGUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVubW91bnRFbGVtZW50KHZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY2FuUmVjeWNsZSwgaXNSZWN5Y2xpbmcpIHtcbiAgICB2YXIgZG9tID0gdk5vZGUuZG9tO1xuICAgIHZhciByZWYgPSB2Tm9kZS5yZWY7XG4gICAgdmFyIGV2ZW50cyA9IHZOb2RlLmV2ZW50cztcbiAgICBpZiAoYWxyZWFkeVVubW91bnRlZC5oYXModk5vZGUpICYmICFpc1JlY3ljbGluZyAmJiAhcGFyZW50RG9tKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWxyZWFkeVVubW91bnRlZC5zZXQodk5vZGUpO1xuICAgIGlmICghbGlmZWN5Y2xlLmZhc3RVbm1vdW50KSB7XG4gICAgICAgIGlmIChyZWYgJiYgIWlzUmVjeWNsaW5nKSB7XG4gICAgICAgICAgICB1bm1vdW50UmVmKHJlZik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdk5vZGUuY2hpbGRyZW47XG4gICAgICAgIGlmICghaXNOdWxsT3JVbmRlZihjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIHVubW91bnRDaGlsZHJlbiQxKGNoaWxkcmVuLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWlzTnVsbChldmVudHMpKSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gZXZlbnRzKSB7XG4gICAgICAgICAgICAvLyBkbyBub3QgYWRkIGEgaGFzT3duUHJvcGVydHkgY2hlY2sgaGVyZSwgaXQgYWZmZWN0cyBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgcGF0Y2hFdmVudChuYW1lLCBldmVudHNbbmFtZV0sIG51bGwsIGRvbSk7XG4gICAgICAgICAgICBldmVudHNbbmFtZV0gPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwYXJlbnREb20pIHtcbiAgICAgICAgcmVtb3ZlQ2hpbGQocGFyZW50RG9tLCBkb20pO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5yZWN5Y2xpbmdFbmFibGVkICYmIChwYXJlbnREb20gfHwgY2FuUmVjeWNsZSkpIHtcbiAgICAgICAgcG9vbEVsZW1lbnQodk5vZGUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVubW91bnRDaGlsZHJlbiQxKGNoaWxkcmVuLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKSB7XG4gICAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKCFpc0ludmFsaWQoY2hpbGQpICYmIGlzT2JqZWN0KGNoaWxkKSkge1xuICAgICAgICAgICAgICAgIHVubW91bnQoY2hpbGQsIG51bGwsIGxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc09iamVjdChjaGlsZHJlbikpIHtcbiAgICAgICAgdW5tb3VudChjaGlsZHJlbiwgbnVsbCwgbGlmZWN5Y2xlLCBmYWxzZSwgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVubW91bnRSZWYocmVmKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24ocmVmKSkge1xuICAgICAgICByZWYobnVsbCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoaXNJbnZhbGlkKHJlZikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3dFcnJvcignc3RyaW5nIFwicmVmc1wiIGFyZSBub3Qgc3VwcG9ydGVkIGluIEluZmVybm8gMS4wLiBVc2UgY2FsbGJhY2sgXCJyZWZzXCIgaW5zdGVhZC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVDbGFzc0NvbXBvbmVudEluc3RhbmNlKHZOb2RlLCBDb21wb25lbnQsIHByb3BzLCBjb250ZXh0LCBpc1NWRykge1xuICAgIGlmIChpc1VuZGVmaW5lZChjb250ZXh0KSkge1xuICAgICAgICBjb250ZXh0ID0ge307XG4gICAgfVxuICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDb21wb25lbnQocHJvcHMsIGNvbnRleHQpO1xuICAgIGluc3RhbmNlLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIGlmIChpbnN0YW5jZS5wcm9wcyA9PT0gRU1QVFlfT0JKKSB7XG4gICAgICAgIGluc3RhbmNlLnByb3BzID0gcHJvcHM7XG4gICAgfVxuICAgIGluc3RhbmNlLl9wYXRjaCA9IHBhdGNoO1xuICAgIGlmIChvcHRpb25zLmZpbmRET01Ob2RlRW5hYmxlZCkge1xuICAgICAgICBpbnN0YW5jZS5fY29tcG9uZW50VG9ET01Ob2RlTWFwID0gY29tcG9uZW50VG9ET01Ob2RlTWFwO1xuICAgIH1cbiAgICBpbnN0YW5jZS5fdW5tb3VudGVkID0gZmFsc2U7XG4gICAgaW5zdGFuY2UuX3BlbmRpbmdTZXRTdGF0ZSA9IHRydWU7XG4gICAgaW5zdGFuY2UuX2lzU1ZHID0gaXNTVkc7XG4gICAgaWYgKGlzRnVuY3Rpb24oaW5zdGFuY2UuY29tcG9uZW50V2lsbE1vdW50KSkge1xuICAgICAgICBpbnN0YW5jZS5jb21wb25lbnRXaWxsTW91bnQoKTtcbiAgICB9XG4gICAgdmFyIGNoaWxkQ29udGV4dCA9IGluc3RhbmNlLmdldENoaWxkQ29udGV4dCgpO1xuICAgIGlmICghaXNOdWxsT3JVbmRlZihjaGlsZENvbnRleHQpKSB7XG4gICAgICAgIGluc3RhbmNlLl9jaGlsZENvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LCBjaGlsZENvbnRleHQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaW5zdGFuY2UuX2NoaWxkQ29udGV4dCA9IGNvbnRleHQ7XG4gICAgfVxuICAgIG9wdGlvbnMuYmVmb3JlUmVuZGVyICYmIG9wdGlvbnMuYmVmb3JlUmVuZGVyKGluc3RhbmNlKTtcbiAgICB2YXIgaW5wdXQgPSBpbnN0YW5jZS5yZW5kZXIocHJvcHMsIGluc3RhbmNlLnN0YXRlLCBjb250ZXh0KTtcbiAgICBvcHRpb25zLmFmdGVyUmVuZGVyICYmIG9wdGlvbnMuYWZ0ZXJSZW5kZXIoaW5zdGFuY2UpO1xuICAgIGlmIChpc0FycmF5KGlucHV0KSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3dFcnJvcignYSB2YWxpZCBJbmZlcm5vIFZOb2RlIChvciBudWxsKSBtdXN0IGJlIHJldHVybmVkIGZyb20gYSBjb21wb25lbnQgcmVuZGVyLiBZb3UgbWF5IGhhdmUgcmV0dXJuZWQgYW4gYXJyYXkgb3IgYW4gaW52YWxpZCBvYmplY3QuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0ludmFsaWQoaW5wdXQpKSB7XG4gICAgICAgIGlucHV0ID0gY3JlYXRlVm9pZFZOb2RlKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXIoaW5wdXQpKSB7XG4gICAgICAgIGlucHV0ID0gY3JlYXRlVGV4dFZOb2RlKGlucHV0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChpbnB1dC5kb20pIHtcbiAgICAgICAgICAgIGlucHV0ID0gY2xvbmVWTm9kZShpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlucHV0LmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICAvLyBpZiB3ZSBoYXZlIGFuIGlucHV0IHRoYXQgaXMgYWxzbyBhIGNvbXBvbmVudCwgd2UgcnVuIGludG8gYSB0cmlja3kgc2l0dWF0aW9uXG4gICAgICAgICAgICAvLyB3aGVyZSB0aGUgcm9vdCB2Tm9kZSBuZWVkcyB0byBhbHdheXMgaGF2ZSB0aGUgY29ycmVjdCBET00gZW50cnlcbiAgICAgICAgICAgIC8vIHNvIHdlIGJyZWFrIG1vbm9tb3JwaGlzbSBvbiBvdXIgaW5wdXQgYW5kIHN1cHBseSBpdCBvdXIgdk5vZGUgYXMgcGFyZW50Vk5vZGVcbiAgICAgICAgICAgIC8vIHdlIGNhbiBvcHRpbWlzZSB0aGlzIGluIHRoZSBmdXR1cmUsIGJ1dCB0aGlzIGdldHMgdXMgb3V0IG9mIGEgbG90IG9mIGlzc3Vlc1xuICAgICAgICAgICAgaW5wdXQucGFyZW50Vk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbnN0YW5jZS5fcGVuZGluZ1NldFN0YXRlID0gZmFsc2U7XG4gICAgaW5zdGFuY2UuX2xhc3RJbnB1dCA9IGlucHV0O1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cbmZ1bmN0aW9uIHJlcGxhY2VMYXN0Q2hpbGRBbmRVbm1vdW50KGxhc3RJbnB1dCwgbmV4dElucHV0LCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKSB7XG4gICAgcmVwbGFjZVZOb2RlKHBhcmVudERvbSwgbW91bnQobmV4dElucHV0LCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSwgbGFzdElucHV0LCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbn1cbmZ1bmN0aW9uIHJlcGxhY2VWTm9kZShwYXJlbnREb20sIGRvbSwgdk5vZGUsIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpIHtcbiAgICB2YXIgc2hhbGxvd1VubW91bnQgPSBmYWxzZTtcbiAgICAvLyB3ZSBjYW5ub3QgY2FjaGUgbm9kZVR5cGUgaGVyZSBhcyB2Tm9kZSBtaWdodCBiZSByZS1hc3NpZ25lZCBiZWxvd1xuICAgIGlmICh2Tm9kZS5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgYWNjZXNzaW5nIGEgc3RhdGVmdWwgb3Igc3RhdGVsZXNzIGNvbXBvbmVudCwgd2Ugd2FudCB0byBhY2Nlc3MgdGhlaXIgbGFzdCByZW5kZXJlZCBpbnB1dFxuICAgICAgICAvLyBhY2Nlc3NpbmcgdGhlaXIgRE9NIG5vZGUgaXMgbm90IHVzZWZ1bCB0byB1cyBoZXJlXG4gICAgICAgIHVubW91bnQodk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgdk5vZGUgPSB2Tm9kZS5jaGlsZHJlbi5fbGFzdElucHV0IHx8IHZOb2RlLmNoaWxkcmVuO1xuICAgICAgICBzaGFsbG93VW5tb3VudCA9IHRydWU7XG4gICAgfVxuICAgIHJlcGxhY2VDaGlsZChwYXJlbnREb20sIGRvbSwgdk5vZGUuZG9tKTtcbiAgICB1bm1vdW50KHZOb2RlLCBudWxsLCBsaWZlY3ljbGUsIGZhbHNlLCBpc1JlY3ljbGluZyk7XG59XG5mdW5jdGlvbiBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50SW5wdXQodk5vZGUsIGNvbXBvbmVudCwgcHJvcHMsIGNvbnRleHQpIHtcbiAgICB2YXIgaW5wdXQgPSBjb21wb25lbnQocHJvcHMsIGNvbnRleHQpO1xuICAgIGlmIChpc0FycmF5KGlucHV0KSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3dFcnJvcignYSB2YWxpZCBJbmZlcm5vIFZOb2RlIChvciBudWxsKSBtdXN0IGJlIHJldHVybmVkIGZyb20gYSBjb21wb25lbnQgcmVuZGVyLiBZb3UgbWF5IGhhdmUgcmV0dXJuZWQgYW4gYXJyYXkgb3IgYW4gaW52YWxpZCBvYmplY3QuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0ludmFsaWQoaW5wdXQpKSB7XG4gICAgICAgIGlucHV0ID0gY3JlYXRlVm9pZFZOb2RlKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXIoaW5wdXQpKSB7XG4gICAgICAgIGlucHV0ID0gY3JlYXRlVGV4dFZOb2RlKGlucHV0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChpbnB1dC5kb20pIHtcbiAgICAgICAgICAgIGlucHV0ID0gY2xvbmVWTm9kZShpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlucHV0LmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICAvLyBpZiB3ZSBoYXZlIGFuIGlucHV0IHRoYXQgaXMgYWxzbyBhIGNvbXBvbmVudCwgd2UgcnVuIGludG8gYSB0cmlja3kgc2l0dWF0aW9uXG4gICAgICAgICAgICAvLyB3aGVyZSB0aGUgcm9vdCB2Tm9kZSBuZWVkcyB0byBhbHdheXMgaGF2ZSB0aGUgY29ycmVjdCBET00gZW50cnlcbiAgICAgICAgICAgIC8vIHNvIHdlIGJyZWFrIG1vbm9tb3JwaGlzbSBvbiBvdXIgaW5wdXQgYW5kIHN1cHBseSBpdCBvdXIgdk5vZGUgYXMgcGFyZW50Vk5vZGVcbiAgICAgICAgICAgIC8vIHdlIGNhbiBvcHRpbWlzZSB0aGlzIGluIHRoZSBmdXR1cmUsIGJ1dCB0aGlzIGdldHMgdXMgb3V0IG9mIGEgbG90IG9mIGlzc3Vlc1xuICAgICAgICAgICAgaW5wdXQucGFyZW50Vk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW5wdXQ7XG59XG5mdW5jdGlvbiBzZXRUZXh0Q29udGVudChkb20sIHRleHQpIHtcbiAgICBpZiAodGV4dCAhPT0gJycpIHtcbiAgICAgICAgZG9tLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRvbS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZVRleHRDb250ZW50KGRvbSwgdGV4dCkge1xuICAgIGRvbS5maXJzdENoaWxkLm5vZGVWYWx1ZSA9IHRleHQ7XG59XG5mdW5jdGlvbiBhcHBlbmRDaGlsZChwYXJlbnREb20sIGRvbSkge1xuICAgIHBhcmVudERvbS5hcHBlbmRDaGlsZChkb20pO1xufVxuZnVuY3Rpb24gaW5zZXJ0T3JBcHBlbmQocGFyZW50RG9tLCBuZXdOb2RlLCBuZXh0Tm9kZSkge1xuICAgIGlmIChpc051bGxPclVuZGVmKG5leHROb2RlKSkge1xuICAgICAgICBhcHBlbmRDaGlsZChwYXJlbnREb20sIG5ld05vZGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcGFyZW50RG9tLmluc2VydEJlZm9yZShuZXdOb2RlLCBuZXh0Tm9kZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gZG9jdW1lbnRDcmVhdGVFbGVtZW50KHRhZywgaXNTVkcpIHtcbiAgICBpZiAoaXNTVkcgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgdGFnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gcmVwbGFjZVdpdGhOZXdOb2RlKGxhc3ROb2RlLCBuZXh0Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZykge1xuICAgIHVubW91bnQobGFzdE5vZGUsIG51bGwsIGxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbiAgICB2YXIgZG9tID0gbW91bnQobmV4dE5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgIG5leHROb2RlLmRvbSA9IGRvbTtcbiAgICByZXBsYWNlQ2hpbGQocGFyZW50RG9tLCBkb20sIGxhc3ROb2RlLmRvbSk7XG59XG5mdW5jdGlvbiByZXBsYWNlQ2hpbGQocGFyZW50RG9tLCBuZXh0RG9tLCBsYXN0RG9tKSB7XG4gICAgaWYgKCFwYXJlbnREb20pIHtcbiAgICAgICAgcGFyZW50RG9tID0gbGFzdERvbS5wYXJlbnROb2RlO1xuICAgIH1cbiAgICBwYXJlbnREb20ucmVwbGFjZUNoaWxkKG5leHREb20sIGxhc3REb20pO1xufVxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGQocGFyZW50RG9tLCBkb20pIHtcbiAgICBwYXJlbnREb20ucmVtb3ZlQ2hpbGQoZG9tKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkcmVuKGRvbSwgY2hpbGRyZW4sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpIHtcbiAgICBkb20udGV4dENvbnRlbnQgPSAnJztcbiAgICBpZiAoIWxpZmVjeWNsZS5mYXN0VW5tb3VudCB8fCAobGlmZWN5Y2xlLmZhc3RVbm1vdW50ICYmIG9wdGlvbnMucmVjeWNsaW5nRW5hYmxlZCAmJiAhaXNSZWN5Y2xpbmcpKSB7XG4gICAgICAgIHJlbW92ZUNoaWxkcmVuKG51bGwsIGNoaWxkcmVuLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiByZW1vdmVDaGlsZHJlbihkb20sIGNoaWxkcmVuLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgaWYgKCFpc0ludmFsaWQoY2hpbGQpKSB7XG4gICAgICAgICAgICB1bm1vdW50KGNoaWxkLCBkb20sIGxpZmVjeWNsZSwgdHJ1ZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gaXNLZXllZChsYXN0Q2hpbGRyZW4sIG5leHRDaGlsZHJlbikge1xuICAgIHJldHVybiBuZXh0Q2hpbGRyZW4ubGVuZ3RoICYmICFpc051bGxPclVuZGVmKG5leHRDaGlsZHJlblswXSkgJiYgIWlzTnVsbE9yVW5kZWYobmV4dENoaWxkcmVuWzBdLmtleSlcbiAgICAgICAgJiYgbGFzdENoaWxkcmVuLmxlbmd0aCAmJiAhaXNOdWxsT3JVbmRlZihsYXN0Q2hpbGRyZW5bMF0pICYmICFpc051bGxPclVuZGVmKGxhc3RDaGlsZHJlblswXS5rZXkpO1xufVxuXG5mdW5jdGlvbiBpc0NoZWNrZWRUeXBlKHR5cGUpIHtcbiAgICByZXR1cm4gdHlwZSA9PT0gJ2NoZWNrYm94JyB8fCB0eXBlID09PSAncmFkaW8nO1xufVxuZnVuY3Rpb24gaXNDb250cm9sbGVkKHByb3BzKSB7XG4gICAgdmFyIHVzZXNDaGVja2VkID0gaXNDaGVja2VkVHlwZShwcm9wcy50eXBlKTtcbiAgICByZXR1cm4gdXNlc0NoZWNrZWQgPyAhaXNOdWxsT3JVbmRlZihwcm9wcy5jaGVja2VkKSA6ICFpc051bGxPclVuZGVmKHByb3BzLnZhbHVlKTtcbn1cbmZ1bmN0aW9uIG9uVGV4dElucHV0Q2hhbmdlKGUpIHtcbiAgICB2YXIgdk5vZGUgPSB0aGlzLnZOb2RlO1xuICAgIHZhciBldmVudHMgPSB2Tm9kZS5ldmVudHMgfHwgRU1QVFlfT0JKO1xuICAgIHZhciBkb20gPSB2Tm9kZS5kb207XG4gICAgaWYgKGV2ZW50cy5vbklucHV0KSB7XG4gICAgICAgIHZhciBldmVudCA9IGV2ZW50cy5vbklucHV0O1xuICAgICAgICBpZiAoZXZlbnQuZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LmV2ZW50KGV2ZW50LmRhdGEsIGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZlbnQoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnRzLm9uaW5wdXQpIHtcbiAgICAgICAgZXZlbnRzLm9uaW5wdXQoZSk7XG4gICAgfVxuICAgIC8vIHRoZSB1c2VyIG1heSBoYXZlIHVwZGF0ZWQgdGhlIHZOb2RlIGZyb20gdGhlIGFib3ZlIG9uSW5wdXQgZXZlbnRzXG4gICAgLy8gc28gd2UgbmVlZCB0byBnZXQgaXQgZnJvbSB0aGUgY29udGV4dCBvZiBgdGhpc2AgYWdhaW5cbiAgICBhcHBseVZhbHVlKHRoaXMudk5vZGUsIGRvbSk7XG59XG5mdW5jdGlvbiB3cmFwcGVkT25DaGFuZ2UoZSkge1xuICAgIHZhciB2Tm9kZSA9IHRoaXMudk5vZGU7XG4gICAgdmFyIGV2ZW50cyA9IHZOb2RlLmV2ZW50cyB8fCBFTVBUWV9PQko7XG4gICAgdmFyIGV2ZW50ID0gZXZlbnRzLm9uQ2hhbmdlO1xuICAgIGlmIChldmVudC5ldmVudCkge1xuICAgICAgICBldmVudC5ldmVudChldmVudC5kYXRhLCBlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGV2ZW50KGUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG9uQ2hlY2tib3hDaGFuZ2UoZSkge1xuICAgIHZhciB2Tm9kZSA9IHRoaXMudk5vZGU7XG4gICAgdmFyIGV2ZW50cyA9IHZOb2RlLmV2ZW50cyB8fCBFTVBUWV9PQko7XG4gICAgdmFyIGRvbSA9IHZOb2RlLmRvbTtcbiAgICBpZiAoZXZlbnRzLm9uQ2xpY2spIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gZXZlbnRzLm9uQ2xpY2s7XG4gICAgICAgIGlmIChldmVudC5ldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuZXZlbnQoZXZlbnQuZGF0YSwgZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldmVudChlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChldmVudHMub25jbGljaykge1xuICAgICAgICBldmVudHMub25jbGljayhlKTtcbiAgICB9XG4gICAgLy8gdGhlIHVzZXIgbWF5IGhhdmUgdXBkYXRlZCB0aGUgdk5vZGUgZnJvbSB0aGUgYWJvdmUgb25DbGljayBldmVudHNcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIGdldCBpdCBmcm9tIHRoZSBjb250ZXh0IG9mIGB0aGlzYCBhZ2FpblxuICAgIGFwcGx5VmFsdWUodGhpcy52Tm9kZSwgZG9tKTtcbn1cbmZ1bmN0aW9uIGhhbmRsZUFzc29jaWF0ZWRSYWRpb0lucHV0cyhuYW1lKSB7XG4gICAgdmFyIGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoKFwiaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXVtuYW1lPVxcXCJcIiArIG5hbWUgKyBcIlxcXCJdXCIpKTtcbiAgICBbXS5mb3JFYWNoLmNhbGwoaW5wdXRzLCBmdW5jdGlvbiAoZG9tKSB7XG4gICAgICAgIHZhciBpbnB1dFdyYXBwZXIgPSB3cmFwcGVycy5nZXQoZG9tKTtcbiAgICAgICAgaWYgKGlucHV0V3JhcHBlcikge1xuICAgICAgICAgICAgdmFyIHByb3BzID0gaW5wdXRXcmFwcGVyLnZOb2RlLnByb3BzO1xuICAgICAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgZG9tLmNoZWNrZWQgPSBpbnB1dFdyYXBwZXIudk5vZGUucHJvcHMuY2hlY2tlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gcHJvY2Vzc0lucHV0KHZOb2RlLCBkb20pIHtcbiAgICB2YXIgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgYXBwbHlWYWx1ZSh2Tm9kZSwgZG9tKTtcbiAgICBpZiAoaXNDb250cm9sbGVkKHByb3BzKSkge1xuICAgICAgICB2YXIgaW5wdXRXcmFwcGVyID0gd3JhcHBlcnMuZ2V0KGRvbSk7XG4gICAgICAgIGlmICghaW5wdXRXcmFwcGVyKSB7XG4gICAgICAgICAgICBpbnB1dFdyYXBwZXIgPSB7XG4gICAgICAgICAgICAgICAgdk5vZGU6IHZOb2RlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGlzQ2hlY2tlZFR5cGUocHJvcHMudHlwZSkpIHtcbiAgICAgICAgICAgICAgICBkb20ub25jbGljayA9IG9uQ2hlY2tib3hDaGFuZ2UuYmluZChpbnB1dFdyYXBwZXIpO1xuICAgICAgICAgICAgICAgIGRvbS5vbmNsaWNrLndyYXBwZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9tLm9uaW5wdXQgPSBvblRleHRJbnB1dENoYW5nZS5iaW5kKGlucHV0V3JhcHBlcik7XG4gICAgICAgICAgICAgICAgZG9tLm9uaW5wdXQud3JhcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBkb20ub25jaGFuZ2UgPSB3cmFwcGVkT25DaGFuZ2UuYmluZChpbnB1dFdyYXBwZXIpO1xuICAgICAgICAgICAgICAgIGRvbS5vbmNoYW5nZS53cmFwcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdyYXBwZXJzLnNldChkb20sIGlucHV0V3JhcHBlcik7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXRXcmFwcGVyLnZOb2RlID0gdk5vZGU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBhcHBseVZhbHVlKHZOb2RlLCBkb20pIHtcbiAgICB2YXIgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgdmFyIHR5cGUgPSBwcm9wcy50eXBlO1xuICAgIHZhciB2YWx1ZSA9IHByb3BzLnZhbHVlO1xuICAgIHZhciBjaGVja2VkID0gcHJvcHMuY2hlY2tlZDtcbiAgICB2YXIgbXVsdGlwbGUgPSBwcm9wcy5tdWx0aXBsZTtcbiAgICBpZiAodHlwZSAmJiB0eXBlICE9PSBkb20udHlwZSkge1xuICAgICAgICBkb20udHlwZSA9IHR5cGU7XG4gICAgfVxuICAgIGlmIChtdWx0aXBsZSAmJiBtdWx0aXBsZSAhPT0gZG9tLm11bHRpcGxlKSB7XG4gICAgICAgIGRvbS5tdWx0aXBsZSA9IG11bHRpcGxlO1xuICAgIH1cbiAgICBpZiAoaXNDaGVja2VkVHlwZSh0eXBlKSkge1xuICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYodmFsdWUpKSB7XG4gICAgICAgICAgICBkb20udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBkb20uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgICAgIGlmICh0eXBlID09PSAncmFkaW8nICYmIHByb3BzLm5hbWUpIHtcbiAgICAgICAgICAgIGhhbmRsZUFzc29jaWF0ZWRSYWRpb0lucHV0cyhwcm9wcy5uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKHZhbHVlKSAmJiBkb20udmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBkb20udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghaXNOdWxsT3JVbmRlZihjaGVja2VkKSkge1xuICAgICAgICAgICAgZG9tLmNoZWNrZWQgPSBjaGVja2VkO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc0NvbnRyb2xsZWQkMShwcm9wcykge1xuICAgIHJldHVybiAhaXNOdWxsT3JVbmRlZihwcm9wcy52YWx1ZSk7XG59XG5mdW5jdGlvbiB1cGRhdGVDaGlsZE9wdGlvbkdyb3VwKHZOb2RlLCB2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gdk5vZGUudHlwZTtcbiAgICBpZiAodHlwZSA9PT0gJ29wdGdyb3VwJykge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSB2Tm9kZS5jaGlsZHJlbjtcbiAgICAgICAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlQ2hpbGRPcHRpb24oY2hpbGRyZW5baV0sIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1ZOb2RlKGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgdXBkYXRlQ2hpbGRPcHRpb24oY2hpbGRyZW4sIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdXBkYXRlQ2hpbGRPcHRpb24odk5vZGUsIHZhbHVlKTtcbiAgICB9XG59XG5mdW5jdGlvbiB1cGRhdGVDaGlsZE9wdGlvbih2Tm9kZSwgdmFsdWUpIHtcbiAgICB2YXIgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgdmFyIGRvbSA9IHZOb2RlLmRvbTtcbiAgICAvLyB3ZSBkbyB0aGlzIGFzIG11bHRpcGxlIG1heSBoYXZlIGNoYW5nZWRcbiAgICBkb20udmFsdWUgPSBwcm9wcy52YWx1ZTtcbiAgICBpZiAoKGlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmluZGV4T2YocHJvcHMudmFsdWUpICE9PSAtMSkgfHwgcHJvcHMudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgIGRvbS5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkb20uc2VsZWN0ZWQgPSBwcm9wcy5zZWxlY3RlZCB8fCBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBvblNlbGVjdENoYW5nZShlKSB7XG4gICAgdmFyIHZOb2RlID0gdGhpcy52Tm9kZTtcbiAgICB2YXIgZXZlbnRzID0gdk5vZGUuZXZlbnRzIHx8IEVNUFRZX09CSjtcbiAgICB2YXIgZG9tID0gdk5vZGUuZG9tO1xuICAgIGlmIChldmVudHMub25DaGFuZ2UpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gZXZlbnRzLm9uQ2hhbmdlO1xuICAgICAgICBpZiAoZXZlbnQuZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LmV2ZW50KGV2ZW50LmRhdGEsIGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZlbnQoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnRzLm9uY2hhbmdlKSB7XG4gICAgICAgIGV2ZW50cy5vbmNoYW5nZShlKTtcbiAgICB9XG4gICAgLy8gdGhlIHVzZXIgbWF5IGhhdmUgdXBkYXRlZCB0aGUgdk5vZGUgZnJvbSB0aGUgYWJvdmUgb25DaGFuZ2UgZXZlbnRzXG4gICAgLy8gc28gd2UgbmVlZCB0byBnZXQgaXQgZnJvbSB0aGUgY29udGV4dCBvZiBgdGhpc2AgYWdhaW5cbiAgICBhcHBseVZhbHVlJDEodGhpcy52Tm9kZSwgZG9tKTtcbn1cbmZ1bmN0aW9uIHByb2Nlc3NTZWxlY3Qodk5vZGUsIGRvbSkge1xuICAgIHZhciBwcm9wcyA9IHZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcbiAgICBhcHBseVZhbHVlJDEodk5vZGUsIGRvbSk7XG4gICAgaWYgKGlzQ29udHJvbGxlZCQxKHByb3BzKSkge1xuICAgICAgICB2YXIgc2VsZWN0V3JhcHBlciA9IHdyYXBwZXJzLmdldChkb20pO1xuICAgICAgICBpZiAoIXNlbGVjdFdyYXBwZXIpIHtcbiAgICAgICAgICAgIHNlbGVjdFdyYXBwZXIgPSB7XG4gICAgICAgICAgICAgICAgdk5vZGU6IHZOb2RlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZG9tLm9uY2hhbmdlID0gb25TZWxlY3RDaGFuZ2UuYmluZChzZWxlY3RXcmFwcGVyKTtcbiAgICAgICAgICAgIGRvbS5vbmNoYW5nZS53cmFwcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHdyYXBwZXJzLnNldChkb20sIHNlbGVjdFdyYXBwZXIpO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdFdyYXBwZXIudk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGFwcGx5VmFsdWUkMSh2Tm9kZSwgZG9tKSB7XG4gICAgdmFyIHByb3BzID0gdk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIGlmIChwcm9wcy5tdWx0aXBsZSAhPT0gZG9tLm11bHRpcGxlKSB7XG4gICAgICAgIGRvbS5tdWx0aXBsZSA9IHByb3BzLm11bHRpcGxlO1xuICAgIH1cbiAgICB2YXIgY2hpbGRyZW4gPSB2Tm9kZS5jaGlsZHJlbjtcbiAgICBpZiAoIWlzSW52YWxpZChjaGlsZHJlbikpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcHJvcHMudmFsdWU7XG4gICAgICAgIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUNoaWxkT3B0aW9uR3JvdXAoY2hpbGRyZW5baV0sIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1ZOb2RlKGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgdXBkYXRlQ2hpbGRPcHRpb25Hcm91cChjaGlsZHJlbiwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc0NvbnRyb2xsZWQkMihwcm9wcykge1xuICAgIHJldHVybiAhaXNOdWxsT3JVbmRlZihwcm9wcy52YWx1ZSk7XG59XG5mdW5jdGlvbiB3cmFwcGVkT25DaGFuZ2UkMShlKSB7XG4gICAgdmFyIHZOb2RlID0gdGhpcy52Tm9kZTtcbiAgICB2YXIgZXZlbnRzID0gdk5vZGUuZXZlbnRzIHx8IEVNUFRZX09CSjtcbiAgICB2YXIgZXZlbnQgPSBldmVudHMub25DaGFuZ2U7XG4gICAgaWYgKGV2ZW50LmV2ZW50KSB7XG4gICAgICAgIGV2ZW50LmV2ZW50KGV2ZW50LmRhdGEsIGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZXZlbnQoZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gb25UZXh0YXJlYUlucHV0Q2hhbmdlKGUpIHtcbiAgICB2YXIgdk5vZGUgPSB0aGlzLnZOb2RlO1xuICAgIHZhciBldmVudHMgPSB2Tm9kZS5ldmVudHMgfHwgRU1QVFlfT0JKO1xuICAgIHZhciBkb20gPSB2Tm9kZS5kb207XG4gICAgaWYgKGV2ZW50cy5vbklucHV0KSB7XG4gICAgICAgIHZhciBldmVudCA9IGV2ZW50cy5vbklucHV0O1xuICAgICAgICBpZiAoZXZlbnQuZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LmV2ZW50KGV2ZW50LmRhdGEsIGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZlbnQoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnRzLm9uaW5wdXQpIHtcbiAgICAgICAgZXZlbnRzLm9uaW5wdXQoZSk7XG4gICAgfVxuICAgIC8vIHRoZSB1c2VyIG1heSBoYXZlIHVwZGF0ZWQgdGhlIHZOb2RlIGZyb20gdGhlIGFib3ZlIG9uSW5wdXQgZXZlbnRzXG4gICAgLy8gc28gd2UgbmVlZCB0byBnZXQgaXQgZnJvbSB0aGUgY29udGV4dCBvZiBgdGhpc2AgYWdhaW5cbiAgICBhcHBseVZhbHVlJDIodGhpcy52Tm9kZSwgZG9tKTtcbn1cbmZ1bmN0aW9uIHByb2Nlc3NUZXh0YXJlYSh2Tm9kZSwgZG9tKSB7XG4gICAgdmFyIHByb3BzID0gdk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIGFwcGx5VmFsdWUkMih2Tm9kZSwgZG9tKTtcbiAgICB2YXIgdGV4dGFyZWFXcmFwcGVyID0gd3JhcHBlcnMuZ2V0KGRvbSk7XG4gICAgaWYgKGlzQ29udHJvbGxlZCQyKHByb3BzKSkge1xuICAgICAgICBpZiAoIXRleHRhcmVhV3JhcHBlcikge1xuICAgICAgICAgICAgdGV4dGFyZWFXcmFwcGVyID0ge1xuICAgICAgICAgICAgICAgIHZOb2RlOiB2Tm9kZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRvbS5vbmlucHV0ID0gb25UZXh0YXJlYUlucHV0Q2hhbmdlLmJpbmQodGV4dGFyZWFXcmFwcGVyKTtcbiAgICAgICAgICAgIGRvbS5vbmlucHV0LndyYXBwZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgZG9tLm9uY2hhbmdlID0gd3JhcHBlZE9uQ2hhbmdlJDEuYmluZCh0ZXh0YXJlYVdyYXBwZXIpO1xuICAgICAgICAgICAgICAgIGRvbS5vbmNoYW5nZS53cmFwcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdyYXBwZXJzLnNldChkb20sIHRleHRhcmVhV3JhcHBlcik7XG4gICAgICAgIH1cbiAgICAgICAgdGV4dGFyZWFXcmFwcGVyLnZOb2RlID0gdk5vZGU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBhcHBseVZhbHVlJDIodk5vZGUsIGRvbSkge1xuICAgIHZhciBwcm9wcyA9IHZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcbiAgICB2YXIgdmFsdWUgPSBwcm9wcy52YWx1ZTtcbiAgICB2YXIgZG9tVmFsdWUgPSBkb20udmFsdWU7XG4gICAgaWYgKGRvbVZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYodmFsdWUpKSB7XG4gICAgICAgICAgICBkb20udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkb21WYWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgIGRvbS52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgfVxufVxuXG52YXIgd3JhcHBlcnMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBwcm9jZXNzRWxlbWVudChmbGFncywgdk5vZGUsIGRvbSkge1xuICAgIGlmIChmbGFncyAmIDUxMiAvKiBJbnB1dEVsZW1lbnQgKi8pIHtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NJbnB1dCh2Tm9kZSwgZG9tKTtcbiAgICB9XG4gICAgaWYgKGZsYWdzICYgMjA0OCAvKiBTZWxlY3RFbGVtZW50ICovKSB7XG4gICAgICAgIHJldHVybiBwcm9jZXNzU2VsZWN0KHZOb2RlLCBkb20pO1xuICAgIH1cbiAgICBpZiAoZmxhZ3MgJiAxMDI0IC8qIFRleHRhcmVhRWxlbWVudCAqLykge1xuICAgICAgICByZXR1cm4gcHJvY2Vzc1RleHRhcmVhKHZOb2RlLCBkb20pO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHBhdGNoKGxhc3RWTm9kZSwgbmV4dFZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKSB7XG4gICAgaWYgKGxhc3RWTm9kZSAhPT0gbmV4dFZOb2RlKSB7XG4gICAgICAgIHZhciBsYXN0RmxhZ3MgPSBsYXN0Vk5vZGUuZmxhZ3M7XG4gICAgICAgIHZhciBuZXh0RmxhZ3MgPSBuZXh0Vk5vZGUuZmxhZ3M7XG4gICAgICAgIGlmIChuZXh0RmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgICAgIGlmIChsYXN0RmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgICAgICAgICBwYXRjaENvbXBvbmVudChsYXN0Vk5vZGUsIG5leHRWTm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBuZXh0RmxhZ3MgJiA0IC8qIENvbXBvbmVudENsYXNzICovLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXBsYWNlVk5vZGUocGFyZW50RG9tLCBtb3VudENvbXBvbmVudChuZXh0Vk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIG5leHRGbGFncyAmIDQgLyogQ29tcG9uZW50Q2xhc3MgKi8pLCBsYXN0Vk5vZGUsIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5leHRGbGFncyAmIDM5NzAgLyogRWxlbWVudCAqLykge1xuICAgICAgICAgICAgaWYgKGxhc3RGbGFncyAmIDM5NzAgLyogRWxlbWVudCAqLykge1xuICAgICAgICAgICAgICAgIHBhdGNoRWxlbWVudChsYXN0Vk5vZGUsIG5leHRWTm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXBsYWNlVk5vZGUocGFyZW50RG9tLCBtb3VudEVsZW1lbnQobmV4dFZOb2RlLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSwgbGFzdFZOb2RlLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXh0RmxhZ3MgJiAxIC8qIFRleHQgKi8pIHtcbiAgICAgICAgICAgIGlmIChsYXN0RmxhZ3MgJiAxIC8qIFRleHQgKi8pIHtcbiAgICAgICAgICAgICAgICBwYXRjaFRleHQobGFzdFZOb2RlLCBuZXh0Vk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVwbGFjZVZOb2RlKHBhcmVudERvbSwgbW91bnRUZXh0KG5leHRWTm9kZSwgbnVsbCksIGxhc3RWTm9kZSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV4dEZsYWdzICYgNDA5NiAvKiBWb2lkICovKSB7XG4gICAgICAgICAgICBpZiAobGFzdEZsYWdzICYgNDA5NiAvKiBWb2lkICovKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hWb2lkKGxhc3RWTm9kZSwgbmV4dFZOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlcGxhY2VWTm9kZShwYXJlbnREb20sIG1vdW50Vm9pZChuZXh0Vk5vZGUsIG51bGwpLCBsYXN0Vk5vZGUsIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gRXJyb3IgY2FzZTogbW91bnQgbmV3IG9uZSByZXBsYWNpbmcgb2xkIG9uZVxuICAgICAgICAgICAgcmVwbGFjZUxhc3RDaGlsZEFuZFVubW91bnQobGFzdFZOb2RlLCBuZXh0Vk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gdW5tb3VudENoaWxkcmVuKGNoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpIHtcbiAgICBpZiAoaXNWTm9kZShjaGlsZHJlbikpIHtcbiAgICAgICAgdW5tb3VudChjaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIHRydWUsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGRyZW4oZG9tLCBjaGlsZHJlbiwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkb20udGV4dENvbnRlbnQgPSAnJztcbiAgICB9XG59XG5mdW5jdGlvbiBwYXRjaEVsZW1lbnQobGFzdFZOb2RlLCBuZXh0Vk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpIHtcbiAgICB2YXIgbmV4dFRhZyA9IG5leHRWTm9kZS50eXBlO1xuICAgIHZhciBsYXN0VGFnID0gbGFzdFZOb2RlLnR5cGU7XG4gICAgaWYgKGxhc3RUYWcgIT09IG5leHRUYWcpIHtcbiAgICAgICAgcmVwbGFjZVdpdGhOZXdOb2RlKGxhc3RWTm9kZSwgbmV4dFZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBkb20gPSBsYXN0Vk5vZGUuZG9tO1xuICAgICAgICB2YXIgbGFzdFByb3BzID0gbGFzdFZOb2RlLnByb3BzO1xuICAgICAgICB2YXIgbmV4dFByb3BzID0gbmV4dFZOb2RlLnByb3BzO1xuICAgICAgICB2YXIgbGFzdENoaWxkcmVuID0gbGFzdFZOb2RlLmNoaWxkcmVuO1xuICAgICAgICB2YXIgbmV4dENoaWxkcmVuID0gbmV4dFZOb2RlLmNoaWxkcmVuO1xuICAgICAgICB2YXIgbGFzdEZsYWdzID0gbGFzdFZOb2RlLmZsYWdzO1xuICAgICAgICB2YXIgbmV4dEZsYWdzID0gbmV4dFZOb2RlLmZsYWdzO1xuICAgICAgICB2YXIgbGFzdFJlZiA9IGxhc3RWTm9kZS5yZWY7XG4gICAgICAgIHZhciBuZXh0UmVmID0gbmV4dFZOb2RlLnJlZjtcbiAgICAgICAgdmFyIGxhc3RFdmVudHMgPSBsYXN0Vk5vZGUuZXZlbnRzO1xuICAgICAgICB2YXIgbmV4dEV2ZW50cyA9IG5leHRWTm9kZS5ldmVudHM7XG4gICAgICAgIG5leHRWTm9kZS5kb20gPSBkb207XG4gICAgICAgIGlmIChpc1NWRyB8fCAobmV4dEZsYWdzICYgMTI4IC8qIFN2Z0VsZW1lbnQgKi8pKSB7XG4gICAgICAgICAgICBpc1NWRyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxhc3RDaGlsZHJlbiAhPT0gbmV4dENoaWxkcmVuKSB7XG4gICAgICAgICAgICBwYXRjaENoaWxkcmVuKGxhc3RGbGFncywgbmV4dEZsYWdzLCBsYXN0Q2hpbGRyZW4sIG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhhc0NvbnRyb2xsZWRWYWx1ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoIShuZXh0RmxhZ3MgJiAyIC8qIEh0bWxFbGVtZW50ICovKSkge1xuICAgICAgICAgICAgaGFzQ29udHJvbGxlZFZhbHVlID0gcHJvY2Vzc0VsZW1lbnQobmV4dEZsYWdzLCBuZXh0Vk5vZGUsIGRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW5saW5lZCBwYXRjaFByb3BzICAtLSBzdGFydHMgLS1cbiAgICAgICAgaWYgKGxhc3RQcm9wcyAhPT0gbmV4dFByb3BzKSB7XG4gICAgICAgICAgICB2YXIgbGFzdFByb3BzT3JFbXB0eSA9IGxhc3RQcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgICAgICAgICB2YXIgbmV4dFByb3BzT3JFbXB0eSA9IG5leHRQcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgICAgICAgICBpZiAobmV4dFByb3BzT3JFbXB0eSAhPT0gRU1QVFlfT0JKKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBuZXh0UHJvcHNPckVtcHR5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRvIG5vdCBhZGQgYSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBoZXJlLCBpdCBhZmZlY3RzIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXh0VmFsdWUgPSBuZXh0UHJvcHNPckVtcHR5W3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGFzdFZhbHVlID0gbGFzdFByb3BzT3JFbXB0eVtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTnVsbE9yVW5kZWYobmV4dFZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUHJvcChwcm9wLCBuZXh0VmFsdWUsIGRvbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRjaFByb3AocHJvcCwgbGFzdFZhbHVlLCBuZXh0VmFsdWUsIGRvbSwgaXNTVkcsIGhhc0NvbnRyb2xsZWRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGFzdFByb3BzT3JFbXB0eSAhPT0gRU1QVFlfT0JKKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcHJvcCQxIGluIGxhc3RQcm9wc09yRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZG8gbm90IGFkZCBhIGhhc093blByb3BlcnR5IGNoZWNrIGhlcmUsIGl0IGFmZmVjdHMgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTnVsbE9yVW5kZWYobmV4dFByb3BzT3JFbXB0eVtwcm9wJDFdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUHJvcChwcm9wJDEsIGxhc3RQcm9wc09yRW1wdHlbcHJvcCQxXSwgZG9tKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpbmxpbmVkIHBhdGNoUHJvcHMgIC0tIGVuZHMgLS1cbiAgICAgICAgaWYgKGxhc3RFdmVudHMgIT09IG5leHRFdmVudHMpIHtcbiAgICAgICAgICAgIHBhdGNoRXZlbnRzKGxhc3RFdmVudHMsIG5leHRFdmVudHMsIGRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5leHRSZWYpIHtcbiAgICAgICAgICAgIGlmIChsYXN0UmVmICE9PSBuZXh0UmVmIHx8IGlzUmVjeWNsaW5nKSB7XG4gICAgICAgICAgICAgICAgbW91bnRSZWYoZG9tLCBuZXh0UmVmLCBsaWZlY3ljbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gcGF0Y2hDaGlsZHJlbihsYXN0RmxhZ3MsIG5leHRGbGFncywgbGFzdENoaWxkcmVuLCBuZXh0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpIHtcbiAgICB2YXIgcGF0Y2hBcnJheSA9IGZhbHNlO1xuICAgIHZhciBwYXRjaEtleWVkID0gZmFsc2U7XG4gICAgaWYgKG5leHRGbGFncyAmIDY0IC8qIEhhc05vbktleWVkQ2hpbGRyZW4gKi8pIHtcbiAgICAgICAgcGF0Y2hBcnJheSA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKChsYXN0RmxhZ3MgJiAzMiAvKiBIYXNLZXllZENoaWxkcmVuICovKSAmJiAobmV4dEZsYWdzICYgMzIgLyogSGFzS2V5ZWRDaGlsZHJlbiAqLykpIHtcbiAgICAgICAgcGF0Y2hLZXllZCA9IHRydWU7XG4gICAgICAgIHBhdGNoQXJyYXkgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0ludmFsaWQobmV4dENoaWxkcmVuKSkge1xuICAgICAgICB1bm1vdW50Q2hpbGRyZW4obGFzdENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0ludmFsaWQobGFzdENoaWxkcmVuKSkge1xuICAgICAgICBpZiAoaXNTdHJpbmdPck51bWJlcihuZXh0Q2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBzZXRUZXh0Q29udGVudChkb20sIG5leHRDaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNBcnJheShuZXh0Q2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgbW91bnRBcnJheUNoaWxkcmVuKG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vdW50KG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc1N0cmluZ09yTnVtYmVyKG5leHRDaGlsZHJlbikpIHtcbiAgICAgICAgaWYgKGlzU3RyaW5nT3JOdW1iZXIobGFzdENoaWxkcmVuKSkge1xuICAgICAgICAgICAgdXBkYXRlVGV4dENvbnRlbnQoZG9tLCBuZXh0Q2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdW5tb3VudENoaWxkcmVuKGxhc3RDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIHNldFRleHRDb250ZW50KGRvbSwgbmV4dENoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc0FycmF5KG5leHRDaGlsZHJlbikpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkobGFzdENoaWxkcmVuKSkge1xuICAgICAgICAgICAgcGF0Y2hBcnJheSA9IHRydWU7XG4gICAgICAgICAgICBpZiAoaXNLZXllZChsYXN0Q2hpbGRyZW4sIG5leHRDaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBwYXRjaEtleWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHVubW91bnRDaGlsZHJlbihsYXN0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICBtb3VudEFycmF5Q2hpbGRyZW4obmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzQXJyYXkobGFzdENoaWxkcmVuKSkge1xuICAgICAgICByZW1vdmVBbGxDaGlsZHJlbihkb20sIGxhc3RDaGlsZHJlbiwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIG1vdW50KG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNWTm9kZShuZXh0Q2hpbGRyZW4pKSB7XG4gICAgICAgIGlmIChpc1ZOb2RlKGxhc3RDaGlsZHJlbikpIHtcbiAgICAgICAgICAgIHBhdGNoKGxhc3RDaGlsZHJlbiwgbmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHVubW91bnRDaGlsZHJlbihsYXN0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICBtb3VudChuZXh0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhdGNoQXJyYXkpIHtcbiAgICAgICAgaWYgKHBhdGNoS2V5ZWQpIHtcbiAgICAgICAgICAgIHBhdGNoS2V5ZWRDaGlsZHJlbihsYXN0Q2hpbGRyZW4sIG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXRjaE5vbktleWVkQ2hpbGRyZW4obGFzdENoaWxkcmVuLCBuZXh0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gcGF0Y2hDb21wb25lbnQobGFzdFZOb2RlLCBuZXh0Vk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNDbGFzcywgaXNSZWN5Y2xpbmcpIHtcbiAgICB2YXIgbGFzdFR5cGUgPSBsYXN0Vk5vZGUudHlwZTtcbiAgICB2YXIgbmV4dFR5cGUgPSBuZXh0Vk5vZGUudHlwZTtcbiAgICB2YXIgbmV4dFByb3BzID0gbmV4dFZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcbiAgICB2YXIgbGFzdEtleSA9IGxhc3RWTm9kZS5rZXk7XG4gICAgdmFyIG5leHRLZXkgPSBuZXh0Vk5vZGUua2V5O1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSBuZXh0VHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgaWYgKCFpc1VuZGVmaW5lZChkZWZhdWx0UHJvcHMpKSB7XG4gICAgICAgIGNvcHlQcm9wc1RvKGRlZmF1bHRQcm9wcywgbmV4dFByb3BzKTtcbiAgICAgICAgbmV4dFZOb2RlLnByb3BzID0gbmV4dFByb3BzO1xuICAgIH1cbiAgICBpZiAobGFzdFR5cGUgIT09IG5leHRUeXBlKSB7XG4gICAgICAgIGlmIChpc0NsYXNzKSB7XG4gICAgICAgICAgICByZXBsYWNlV2l0aE5ld05vZGUobGFzdFZOb2RlLCBuZXh0Vk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGxhc3RJbnB1dCA9IGxhc3RWTm9kZS5jaGlsZHJlbi5fbGFzdElucHV0IHx8IGxhc3RWTm9kZS5jaGlsZHJlbjtcbiAgICAgICAgICAgIHZhciBuZXh0SW5wdXQgPSBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50SW5wdXQobmV4dFZOb2RlLCBuZXh0VHlwZSwgbmV4dFByb3BzLCBjb250ZXh0KTtcbiAgICAgICAgICAgIHVubW91bnQobGFzdFZOb2RlLCBudWxsLCBsaWZlY3ljbGUsIGZhbHNlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICBwYXRjaChsYXN0SW5wdXQsIG5leHRJbnB1dCwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB2YXIgZG9tID0gbmV4dFZOb2RlLmRvbSA9IG5leHRJbnB1dC5kb207XG4gICAgICAgICAgICBuZXh0Vk5vZGUuY2hpbGRyZW4gPSBuZXh0SW5wdXQ7XG4gICAgICAgICAgICBtb3VudEZ1bmN0aW9uYWxDb21wb25lbnRDYWxsYmFja3MobmV4dFZOb2RlLnJlZiwgZG9tLCBsaWZlY3ljbGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoaXNDbGFzcykge1xuICAgICAgICAgICAgaWYgKGxhc3RLZXkgIT09IG5leHRLZXkpIHtcbiAgICAgICAgICAgICAgICByZXBsYWNlV2l0aE5ld05vZGUobGFzdFZOb2RlLCBuZXh0Vk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IGxhc3RWTm9kZS5jaGlsZHJlbjtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5fdW5tb3VudGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTnVsbChwYXJlbnREb20pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXBsYWNlQ2hpbGQocGFyZW50RG9tLCBtb3VudENvbXBvbmVudChuZXh0Vk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIG5leHRWTm9kZS5mbGFncyAmIDQgLyogQ29tcG9uZW50Q2xhc3MgKi8pLCBsYXN0Vk5vZGUuZG9tKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBsYXN0U3RhdGUgPSBpbnN0YW5jZS5zdGF0ZTtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dFN0YXRlID0gaW5zdGFuY2Uuc3RhdGU7XG4gICAgICAgICAgICAgICAgdmFyIGxhc3RQcm9wcyA9IGluc3RhbmNlLnByb3BzO1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZENvbnRleHQgPSBpbnN0YW5jZS5nZXRDaGlsZENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICBuZXh0Vk5vZGUuY2hpbGRyZW4gPSBpbnN0YW5jZTtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5faXNTVkcgPSBpc1NWRztcbiAgICAgICAgICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYoY2hpbGRDb250ZXh0KSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LCBjaGlsZENvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRDb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGxhc3RJbnB1dCQxID0gaW5zdGFuY2UuX2xhc3RJbnB1dDtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dElucHV0JDEgPSBpbnN0YW5jZS5fdXBkYXRlQ29tcG9uZW50KGxhc3RTdGF0ZSwgbmV4dFN0YXRlLCBsYXN0UHJvcHMsIG5leHRQcm9wcywgY29udGV4dCwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB2YXIgZGlkVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5fY2hpbGRDb250ZXh0ID0gY2hpbGRDb250ZXh0O1xuICAgICAgICAgICAgICAgIGlmIChpc0ludmFsaWQobmV4dElucHV0JDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbnB1dCQxID0gY3JlYXRlVm9pZFZOb2RlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5leHRJbnB1dCQxID09PSBOT19PUCkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SW5wdXQkMSA9IGxhc3RJbnB1dCQxO1xuICAgICAgICAgICAgICAgICAgICBkaWRVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNTdHJpbmdPck51bWJlcihuZXh0SW5wdXQkMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dElucHV0JDEgPSBjcmVhdGVUZXh0Vk5vZGUobmV4dElucHV0JDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc0FycmF5KG5leHRJbnB1dCQxKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcignYSB2YWxpZCBJbmZlcm5vIFZOb2RlIChvciBudWxsKSBtdXN0IGJlIHJldHVybmVkIGZyb20gYSBjb21wb25lbnQgcmVuZGVyLiBZb3UgbWF5IGhhdmUgcmV0dXJuZWQgYW4gYXJyYXkgb3IgYW4gaW52YWxpZCBvYmplY3QuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc09iamVjdChuZXh0SW5wdXQkMSkgJiYgbmV4dElucHV0JDEuZG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbnB1dCQxID0gY2xvbmVWTm9kZShuZXh0SW5wdXQkMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChuZXh0SW5wdXQkMS5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SW5wdXQkMS5wYXJlbnRWTm9kZSA9IG5leHRWTm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobGFzdElucHV0JDEuZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdElucHV0JDEucGFyZW50Vk5vZGUgPSBuZXh0Vk5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluc3RhbmNlLl9sYXN0SW5wdXQgPSBuZXh0SW5wdXQkMTtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5fdk5vZGUgPSBuZXh0Vk5vZGU7XG4gICAgICAgICAgICAgICAgaWYgKGRpZFVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZmFzdFVubW91bnQgPSBsaWZlY3ljbGUuZmFzdFVubW91bnQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdWJMaWZlY3ljbGUgPSBpbnN0YW5jZS5fbGlmZWN5Y2xlO1xuICAgICAgICAgICAgICAgICAgICBsaWZlY3ljbGUuZmFzdFVubW91bnQgPSBzdWJMaWZlY3ljbGUuZmFzdFVubW91bnQ7XG4gICAgICAgICAgICAgICAgICAgIHBhdGNoKGxhc3RJbnB1dCQxLCBuZXh0SW5wdXQkMSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNoaWxkQ29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgc3ViTGlmZWN5Y2xlLmZhc3RVbm1vdW50ID0gbGlmZWN5Y2xlLmZhc3RVbm1vdW50O1xuICAgICAgICAgICAgICAgICAgICBsaWZlY3ljbGUuZmFzdFVubW91bnQgPSBmYXN0VW5tb3VudDtcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuY29tcG9uZW50RGlkVXBkYXRlKGxhc3RQcm9wcywgbGFzdFN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5hZnRlclVwZGF0ZSAmJiBvcHRpb25zLmFmdGVyVXBkYXRlKG5leHRWTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZmluZERPTU5vZGVFbmFibGVkICYmIGNvbXBvbmVudFRvRE9NTm9kZU1hcC5zZXQoaW5zdGFuY2UsIG5leHRJbnB1dCQxLmRvbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5leHRWTm9kZS5kb20gPSBuZXh0SW5wdXQkMS5kb207XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgc2hvdWxkVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBsYXN0UHJvcHMkMSA9IGxhc3RWTm9kZS5wcm9wcztcbiAgICAgICAgICAgIHZhciBuZXh0SG9va3MgPSBuZXh0Vk5vZGUucmVmO1xuICAgICAgICAgICAgdmFyIG5leHRIb29rc0RlZmluZWQgPSAhaXNOdWxsT3JVbmRlZihuZXh0SG9va3MpO1xuICAgICAgICAgICAgdmFyIGxhc3RJbnB1dCQyID0gbGFzdFZOb2RlLmNoaWxkcmVuO1xuICAgICAgICAgICAgdmFyIG5leHRJbnB1dCQyID0gbGFzdElucHV0JDI7XG4gICAgICAgICAgICBuZXh0Vk5vZGUuZG9tID0gbGFzdFZOb2RlLmRvbTtcbiAgICAgICAgICAgIG5leHRWTm9kZS5jaGlsZHJlbiA9IGxhc3RJbnB1dCQyO1xuICAgICAgICAgICAgaWYgKGxhc3RLZXkgIT09IG5leHRLZXkpIHtcbiAgICAgICAgICAgICAgICBzaG91bGRVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG5leHRIb29rc0RlZmluZWQgJiYgIWlzTnVsbE9yVW5kZWYobmV4dEhvb2tzLm9uQ29tcG9uZW50U2hvdWxkVXBkYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBzaG91bGRVcGRhdGUgPSBuZXh0SG9va3Mub25Db21wb25lbnRTaG91bGRVcGRhdGUobGFzdFByb3BzJDEsIG5leHRQcm9wcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAobmV4dEhvb2tzRGVmaW5lZCAmJiAhaXNOdWxsT3JVbmRlZihuZXh0SG9va3Mub25Db21wb25lbnRXaWxsVXBkYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SG9va3Mub25Db21wb25lbnRXaWxsVXBkYXRlKGxhc3RQcm9wcyQxLCBuZXh0UHJvcHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXh0SW5wdXQkMiA9IG5leHRUeXBlKG5leHRQcm9wcywgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzSW52YWxpZChuZXh0SW5wdXQkMikpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dElucHV0JDIgPSBjcmVhdGVWb2lkVk5vZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNTdHJpbmdPck51bWJlcihuZXh0SW5wdXQkMikgJiYgbmV4dElucHV0JDIgIT09IE5PX09QKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbnB1dCQyID0gY3JlYXRlVGV4dFZOb2RlKG5leHRJbnB1dCQyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNBcnJheShuZXh0SW5wdXQkMikpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93RXJyb3IoJ2EgdmFsaWQgSW5mZXJubyBWTm9kZSAob3IgbnVsbCkgbXVzdCBiZSByZXR1cm5lZCBmcm9tIGEgY29tcG9uZW50IHJlbmRlci4gWW91IG1heSBoYXZlIHJldHVybmVkIGFuIGFycmF5IG9yIGFuIGludmFsaWQgb2JqZWN0LicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93RXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNPYmplY3QobmV4dElucHV0JDIpICYmIG5leHRJbnB1dCQyLmRvbSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SW5wdXQkMiA9IGNsb25lVk5vZGUobmV4dElucHV0JDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobmV4dElucHV0JDIgIT09IE5PX09QKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGNoKGxhc3RJbnB1dCQyLCBuZXh0SW5wdXQkMiwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICAgICAgICAgIG5leHRWTm9kZS5jaGlsZHJlbiA9IG5leHRJbnB1dCQyO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dEhvb2tzRGVmaW5lZCAmJiAhaXNOdWxsT3JVbmRlZihuZXh0SG9va3Mub25Db21wb25lbnREaWRVcGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0SG9va3Mub25Db21wb25lbnREaWRVcGRhdGUobGFzdFByb3BzJDEsIG5leHRQcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbmV4dFZOb2RlLmRvbSA9IG5leHRJbnB1dCQyLmRvbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV4dElucHV0JDIuZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgICAgICAgICBuZXh0SW5wdXQkMi5wYXJlbnRWTm9kZSA9IG5leHRWTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGxhc3RJbnB1dCQyLmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICAgICAgbGFzdElucHV0JDIucGFyZW50Vk5vZGUgPSBuZXh0Vk5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gcGF0Y2hUZXh0KGxhc3RWTm9kZSwgbmV4dFZOb2RlKSB7XG4gICAgdmFyIG5leHRUZXh0ID0gbmV4dFZOb2RlLmNoaWxkcmVuO1xuICAgIHZhciBkb20gPSBsYXN0Vk5vZGUuZG9tO1xuICAgIG5leHRWTm9kZS5kb20gPSBkb207XG4gICAgaWYgKGxhc3RWTm9kZS5jaGlsZHJlbiAhPT0gbmV4dFRleHQpIHtcbiAgICAgICAgZG9tLm5vZGVWYWx1ZSA9IG5leHRUZXh0O1xuICAgIH1cbn1cbmZ1bmN0aW9uIHBhdGNoVm9pZChsYXN0Vk5vZGUsIG5leHRWTm9kZSkge1xuICAgIG5leHRWTm9kZS5kb20gPSBsYXN0Vk5vZGUuZG9tO1xufVxuZnVuY3Rpb24gcGF0Y2hOb25LZXllZENoaWxkcmVuKGxhc3RDaGlsZHJlbiwgbmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKSB7XG4gICAgdmFyIGxhc3RDaGlsZHJlbkxlbmd0aCA9IGxhc3RDaGlsZHJlbi5sZW5ndGg7XG4gICAgdmFyIG5leHRDaGlsZHJlbkxlbmd0aCA9IG5leHRDaGlsZHJlbi5sZW5ndGg7XG4gICAgdmFyIGNvbW1vbkxlbmd0aCA9IGxhc3RDaGlsZHJlbkxlbmd0aCA+IG5leHRDaGlsZHJlbkxlbmd0aCA/IG5leHRDaGlsZHJlbkxlbmd0aCA6IGxhc3RDaGlsZHJlbkxlbmd0aDtcbiAgICB2YXIgaSA9IDA7XG4gICAgZm9yICg7IGkgPCBjb21tb25MZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgbmV4dENoaWxkID0gbmV4dENoaWxkcmVuW2ldO1xuICAgICAgICBpZiAobmV4dENoaWxkLmRvbSkge1xuICAgICAgICAgICAgbmV4dENoaWxkID0gbmV4dENoaWxkcmVuW2ldID0gY2xvbmVWTm9kZShuZXh0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHBhdGNoKGxhc3RDaGlsZHJlbltpXSwgbmV4dENoaWxkLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG4gICAgaWYgKGxhc3RDaGlsZHJlbkxlbmd0aCA8IG5leHRDaGlsZHJlbkxlbmd0aCkge1xuICAgICAgICBmb3IgKGkgPSBjb21tb25MZW5ndGg7IGkgPCBuZXh0Q2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG5leHRDaGlsZCQxID0gbmV4dENoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKG5leHRDaGlsZCQxLmRvbSkge1xuICAgICAgICAgICAgICAgIG5leHRDaGlsZCQxID0gbmV4dENoaWxkcmVuW2ldID0gY2xvbmVWTm9kZShuZXh0Q2hpbGQkMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcHBlbmRDaGlsZChkb20sIG1vdW50KG5leHRDaGlsZCQxLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobmV4dENoaWxkcmVuTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlbW92ZUFsbENoaWxkcmVuKGRvbSwgbGFzdENoaWxkcmVuLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobGFzdENoaWxkcmVuTGVuZ3RoID4gbmV4dENoaWxkcmVuTGVuZ3RoKSB7XG4gICAgICAgIGZvciAoaSA9IGNvbW1vbkxlbmd0aDsgaSA8IGxhc3RDaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB1bm1vdW50KGxhc3RDaGlsZHJlbltpXSwgZG9tLCBsaWZlY3ljbGUsIGZhbHNlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBwYXRjaEtleWVkQ2hpbGRyZW4oYSwgYiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZykge1xuICAgIHZhciBhTGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgdmFyIGJMZW5ndGggPSBiLmxlbmd0aDtcbiAgICB2YXIgYUVuZCA9IGFMZW5ndGggLSAxO1xuICAgIHZhciBiRW5kID0gYkxlbmd0aCAtIDE7XG4gICAgdmFyIGFTdGFydCA9IDA7XG4gICAgdmFyIGJTdGFydCA9IDA7XG4gICAgdmFyIGk7XG4gICAgdmFyIGo7XG4gICAgdmFyIGFOb2RlO1xuICAgIHZhciBiTm9kZTtcbiAgICB2YXIgbmV4dE5vZGU7XG4gICAgdmFyIG5leHRQb3M7XG4gICAgdmFyIG5vZGU7XG4gICAgaWYgKGFMZW5ndGggPT09IDApIHtcbiAgICAgICAgaWYgKGJMZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIG1vdW50QXJyYXlDaGlsZHJlbihiLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSBpZiAoYkxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZW1vdmVBbGxDaGlsZHJlbihkb20sIGEsIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBhU3RhcnROb2RlID0gYVthU3RhcnRdO1xuICAgIHZhciBiU3RhcnROb2RlID0gYltiU3RhcnRdO1xuICAgIHZhciBhRW5kTm9kZSA9IGFbYUVuZF07XG4gICAgdmFyIGJFbmROb2RlID0gYltiRW5kXTtcbiAgICBpZiAoYlN0YXJ0Tm9kZS5kb20pIHtcbiAgICAgICAgYltiU3RhcnRdID0gYlN0YXJ0Tm9kZSA9IGNsb25lVk5vZGUoYlN0YXJ0Tm9kZSk7XG4gICAgfVxuICAgIGlmIChiRW5kTm9kZS5kb20pIHtcbiAgICAgICAgYltiRW5kXSA9IGJFbmROb2RlID0gY2xvbmVWTm9kZShiRW5kTm9kZSk7XG4gICAgfVxuICAgIC8vIFN0ZXAgMVxuICAgIC8qIGVzbGludCBuby1jb25zdGFudC1jb25kaXRpb246IDAgKi9cbiAgICBvdXRlcjogd2hpbGUgKHRydWUpIHtcbiAgICAgICAgLy8gU3luYyBub2RlcyB3aXRoIHRoZSBzYW1lIGtleSBhdCB0aGUgYmVnaW5uaW5nLlxuICAgICAgICB3aGlsZSAoYVN0YXJ0Tm9kZS5rZXkgPT09IGJTdGFydE5vZGUua2V5KSB7XG4gICAgICAgICAgICBwYXRjaChhU3RhcnROb2RlLCBiU3RhcnROb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIGFTdGFydCsrO1xuICAgICAgICAgICAgYlN0YXJ0Kys7XG4gICAgICAgICAgICBpZiAoYVN0YXJ0ID4gYUVuZCB8fCBiU3RhcnQgPiBiRW5kKSB7XG4gICAgICAgICAgICAgICAgYnJlYWsgb3V0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhU3RhcnROb2RlID0gYVthU3RhcnRdO1xuICAgICAgICAgICAgYlN0YXJ0Tm9kZSA9IGJbYlN0YXJ0XTtcbiAgICAgICAgICAgIGlmIChiU3RhcnROb2RlLmRvbSkge1xuICAgICAgICAgICAgICAgIGJbYlN0YXJ0XSA9IGJTdGFydE5vZGUgPSBjbG9uZVZOb2RlKGJTdGFydE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFN5bmMgbm9kZXMgd2l0aCB0aGUgc2FtZSBrZXkgYXQgdGhlIGVuZC5cbiAgICAgICAgd2hpbGUgKGFFbmROb2RlLmtleSA9PT0gYkVuZE5vZGUua2V5KSB7XG4gICAgICAgICAgICBwYXRjaChhRW5kTm9kZSwgYkVuZE5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgYUVuZC0tO1xuICAgICAgICAgICAgYkVuZC0tO1xuICAgICAgICAgICAgaWYgKGFTdGFydCA+IGFFbmQgfHwgYlN0YXJ0ID4gYkVuZCkge1xuICAgICAgICAgICAgICAgIGJyZWFrIG91dGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYUVuZE5vZGUgPSBhW2FFbmRdO1xuICAgICAgICAgICAgYkVuZE5vZGUgPSBiW2JFbmRdO1xuICAgICAgICAgICAgaWYgKGJFbmROb2RlLmRvbSkge1xuICAgICAgICAgICAgICAgIGJbYkVuZF0gPSBiRW5kTm9kZSA9IGNsb25lVk5vZGUoYkVuZE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIE1vdmUgYW5kIHN5bmMgbm9kZXMgZnJvbSByaWdodCB0byBsZWZ0LlxuICAgICAgICBpZiAoYUVuZE5vZGUua2V5ID09PSBiU3RhcnROb2RlLmtleSkge1xuICAgICAgICAgICAgcGF0Y2goYUVuZE5vZGUsIGJTdGFydE5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgaW5zZXJ0T3JBcHBlbmQoZG9tLCBiU3RhcnROb2RlLmRvbSwgYVN0YXJ0Tm9kZS5kb20pO1xuICAgICAgICAgICAgYUVuZC0tO1xuICAgICAgICAgICAgYlN0YXJ0Kys7XG4gICAgICAgICAgICBhRW5kTm9kZSA9IGFbYUVuZF07XG4gICAgICAgICAgICBiU3RhcnROb2RlID0gYltiU3RhcnRdO1xuICAgICAgICAgICAgaWYgKGJTdGFydE5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgYltiU3RhcnRdID0gYlN0YXJ0Tm9kZSA9IGNsb25lVk5vZGUoYlN0YXJ0Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBNb3ZlIGFuZCBzeW5jIG5vZGVzIGZyb20gbGVmdCB0byByaWdodC5cbiAgICAgICAgaWYgKGFTdGFydE5vZGUua2V5ID09PSBiRW5kTm9kZS5rZXkpIHtcbiAgICAgICAgICAgIHBhdGNoKGFTdGFydE5vZGUsIGJFbmROb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIG5leHRQb3MgPSBiRW5kICsgMTtcbiAgICAgICAgICAgIG5leHROb2RlID0gbmV4dFBvcyA8IGIubGVuZ3RoID8gYltuZXh0UG9zXS5kb20gOiBudWxsO1xuICAgICAgICAgICAgaW5zZXJ0T3JBcHBlbmQoZG9tLCBiRW5kTm9kZS5kb20sIG5leHROb2RlKTtcbiAgICAgICAgICAgIGFTdGFydCsrO1xuICAgICAgICAgICAgYkVuZC0tO1xuICAgICAgICAgICAgYVN0YXJ0Tm9kZSA9IGFbYVN0YXJ0XTtcbiAgICAgICAgICAgIGJFbmROb2RlID0gYltiRW5kXTtcbiAgICAgICAgICAgIGlmIChiRW5kTm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICBiW2JFbmRdID0gYkVuZE5vZGUgPSBjbG9uZVZOb2RlKGJFbmROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoYVN0YXJ0ID4gYUVuZCkge1xuICAgICAgICBpZiAoYlN0YXJ0IDw9IGJFbmQpIHtcbiAgICAgICAgICAgIG5leHRQb3MgPSBiRW5kICsgMTtcbiAgICAgICAgICAgIG5leHROb2RlID0gbmV4dFBvcyA8IGIubGVuZ3RoID8gYltuZXh0UG9zXS5kb20gOiBudWxsO1xuICAgICAgICAgICAgd2hpbGUgKGJTdGFydCA8PSBiRW5kKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IGJbYlN0YXJ0XTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICAgICAgYltiU3RhcnRdID0gbm9kZSA9IGNsb25lVk5vZGUobm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJTdGFydCsrO1xuICAgICAgICAgICAgICAgIGluc2VydE9yQXBwZW5kKGRvbSwgbW91bnQobm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyksIG5leHROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChiU3RhcnQgPiBiRW5kKSB7XG4gICAgICAgIHdoaWxlIChhU3RhcnQgPD0gYUVuZCkge1xuICAgICAgICAgICAgdW5tb3VudChhW2FTdGFydCsrXSwgZG9tLCBsaWZlY3ljbGUsIGZhbHNlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFMZW5ndGggPSBhRW5kIC0gYVN0YXJ0ICsgMTtcbiAgICAgICAgYkxlbmd0aCA9IGJFbmQgLSBiU3RhcnQgKyAxO1xuICAgICAgICB2YXIgYU51bGxhYmxlID0gYTtcbiAgICAgICAgdmFyIHNvdXJjZXMgPSBuZXcgQXJyYXkoYkxlbmd0aCk7XG4gICAgICAgIC8vIE1hcmsgYWxsIG5vZGVzIGFzIGluc2VydGVkLlxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYkxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzb3VyY2VzW2ldID0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1vdmVkID0gZmFsc2U7XG4gICAgICAgIHZhciBwb3MgPSAwO1xuICAgICAgICB2YXIgcGF0Y2hlZCA9IDA7XG4gICAgICAgIGlmICgoYkxlbmd0aCA8PSA0KSB8fCAoYUxlbmd0aCAqIGJMZW5ndGggPD0gMTYpKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSBhU3RhcnQ7IGkgPD0gYUVuZDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYU5vZGUgPSBhW2ldO1xuICAgICAgICAgICAgICAgIGlmIChwYXRjaGVkIDwgYkxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSBiU3RhcnQ7IGogPD0gYkVuZDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiTm9kZSA9IGJbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYU5vZGUua2V5ID09PSBiTm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VzW2ogLSBiU3RhcnRdID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zID4gaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MgPSBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYk5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJbal0gPSBiTm9kZSA9IGNsb25lVk5vZGUoYk5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRjaChhTm9kZSwgYk5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGNoZWQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhTnVsbGFibGVbaV0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGtleUluZGV4ID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgZm9yIChpID0gYlN0YXJ0OyBpIDw9IGJFbmQ7IGkrKykge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBiW2ldO1xuICAgICAgICAgICAgICAgIGtleUluZGV4LnNldChub2RlLmtleSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGkgPSBhU3RhcnQ7IGkgPD0gYUVuZDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYU5vZGUgPSBhW2ldO1xuICAgICAgICAgICAgICAgIGlmIChwYXRjaGVkIDwgYkxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBqID0ga2V5SW5kZXguZ2V0KGFOb2RlLmtleSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQoaikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJOb2RlID0gYltqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZXNbaiAtIGJTdGFydF0gPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvcyA+IGopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MgPSBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJOb2RlLmRvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJbal0gPSBiTm9kZSA9IGNsb25lVk5vZGUoYk5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0Y2goYU5vZGUsIGJOb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGNoZWQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGFOdWxsYWJsZVtpXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFMZW5ndGggPT09IGEubGVuZ3RoICYmIHBhdGNoZWQgPT09IDApIHtcbiAgICAgICAgICAgIHJlbW92ZUFsbENoaWxkcmVuKGRvbSwgYSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB3aGlsZSAoYlN0YXJ0IDwgYkxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBiW2JTdGFydF07XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIGJbYlN0YXJ0XSA9IG5vZGUgPSBjbG9uZVZOb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBiU3RhcnQrKztcbiAgICAgICAgICAgICAgICBpbnNlcnRPckFwcGVuZChkb20sIG1vdW50KG5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpLCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGkgPSBhTGVuZ3RoIC0gcGF0Y2hlZDtcbiAgICAgICAgICAgIHdoaWxlIChpID4gMCkge1xuICAgICAgICAgICAgICAgIGFOb2RlID0gYU51bGxhYmxlW2FTdGFydCsrXTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTnVsbChhTm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5tb3VudChhTm9kZSwgZG9tLCBsaWZlY3ljbGUsIHRydWUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtb3ZlZCkge1xuICAgICAgICAgICAgICAgIHZhciBzZXEgPSBsaXNfYWxnb3JpdGhtKHNvdXJjZXMpO1xuICAgICAgICAgICAgICAgIGogPSBzZXEubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBiTGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZXNbaV0gPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3MgPSBpICsgYlN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGJbcG9zXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmRvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJbcG9zXSA9IG5vZGUgPSBjbG9uZVZOb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBvcyA9IHBvcyArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0Tm9kZSA9IG5leHRQb3MgPCBiLmxlbmd0aCA/IGJbbmV4dFBvc10uZG9tIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydE9yQXBwZW5kKGRvbSwgbW91bnQobm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSwgbmV4dE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogPCAwIHx8IGkgIT09IHNlcVtqXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcyA9IGkgKyBiU3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGJbcG9zXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UG9zID0gcG9zICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0Tm9kZSA9IG5leHRQb3MgPCBiLmxlbmd0aCA/IGJbbmV4dFBvc10uZG9tIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRPckFwcGVuZChkb20sIG5vZGUuZG9tLCBuZXh0Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqLS07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwYXRjaGVkICE9PSBiTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gYkxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2VzW2ldID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gaSArIGJTdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgPSBiW3Bvc107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiW3Bvc10gPSBub2RlID0gY2xvbmVWTm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQb3MgPSBwb3MgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE5vZGUgPSBuZXh0UG9zIDwgYi5sZW5ndGggPyBiW25leHRQb3NdLmRvbSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRPckFwcGVuZChkb20sIG1vdW50KG5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpLCBuZXh0Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyAvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Mb25nZXN0X2luY3JlYXNpbmdfc3Vic2VxdWVuY2VcbmZ1bmN0aW9uIGxpc19hbGdvcml0aG0oYSkge1xuICAgIHZhciBwID0gYS5zbGljZSgwKTtcbiAgICB2YXIgcmVzdWx0ID0gWzBdO1xuICAgIHZhciBpO1xuICAgIHZhciBqO1xuICAgIHZhciB1O1xuICAgIHZhciB2O1xuICAgIHZhciBjO1xuICAgIGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhW2ldID09PSAtMSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaiA9IHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmIChhW2pdIDwgYVtpXSkge1xuICAgICAgICAgICAgcFtpXSA9IGo7XG4gICAgICAgICAgICByZXN1bHQucHVzaChpKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHUgPSAwO1xuICAgICAgICB2ID0gcmVzdWx0Lmxlbmd0aCAtIDE7XG4gICAgICAgIHdoaWxlICh1IDwgdikge1xuICAgICAgICAgICAgYyA9ICgodSArIHYpIC8gMikgfCAwO1xuICAgICAgICAgICAgaWYgKGFbcmVzdWx0W2NdXSA8IGFbaV0pIHtcbiAgICAgICAgICAgICAgICB1ID0gYyArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2ID0gYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYVtpXSA8IGFbcmVzdWx0W3VdXSkge1xuICAgICAgICAgICAgaWYgKHUgPiAwKSB7XG4gICAgICAgICAgICAgICAgcFtpXSA9IHJlc3VsdFt1IC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHRbdV0gPSBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHUgPSByZXN1bHQubGVuZ3RoO1xuICAgIHYgPSByZXN1bHRbdSAtIDFdO1xuICAgIHdoaWxlICh1LS0gPiAwKSB7XG4gICAgICAgIHJlc3VsdFt1XSA9IHY7XG4gICAgICAgIHYgPSBwW3ZdO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gcGF0Y2hQcm9wKHByb3AsIGxhc3RWYWx1ZSwgbmV4dFZhbHVlLCBkb20sIGlzU1ZHLCBoYXNDb250cm9sbGVkVmFsdWUpIHtcbiAgICBpZiAoc2tpcFByb3BzW3Byb3BdIHx8IGhhc0NvbnRyb2xsZWRWYWx1ZSAmJiBwcm9wID09PSAndmFsdWUnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGJvb2xlYW5Qcm9wc1twcm9wXSkge1xuICAgICAgICBkb21bcHJvcF0gPSAhIW5leHRWYWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc3RyaWN0UHJvcHNbcHJvcF0pIHtcbiAgICAgICAgdmFyIHZhbHVlID0gaXNOdWxsT3JVbmRlZihuZXh0VmFsdWUpID8gJycgOiBuZXh0VmFsdWU7XG4gICAgICAgIGlmIChkb21bcHJvcF0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBkb21bcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChsYXN0VmFsdWUgIT09IG5leHRWYWx1ZSkge1xuICAgICAgICBpZiAoaXNBdHRyQW5FdmVudChwcm9wKSkge1xuICAgICAgICAgICAgcGF0Y2hFdmVudChwcm9wLCBsYXN0VmFsdWUsIG5leHRWYWx1ZSwgZG9tKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc051bGxPclVuZGVmKG5leHRWYWx1ZSkpIHtcbiAgICAgICAgICAgIGRvbS5yZW1vdmVBdHRyaWJ1dGUocHJvcCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvcCA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICAgICAgICAgIGlmIChpc1NWRykge1xuICAgICAgICAgICAgICAgIGRvbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgbmV4dFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvbS5jbGFzc05hbWUgPSBuZXh0VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvcCA9PT0gJ3N0eWxlJykge1xuICAgICAgICAgICAgcGF0Y2hTdHlsZShsYXN0VmFsdWUsIG5leHRWYWx1ZSwgZG9tKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wID09PSAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnKSB7XG4gICAgICAgICAgICB2YXIgbGFzdEh0bWwgPSBsYXN0VmFsdWUgJiYgbGFzdFZhbHVlLl9faHRtbDtcbiAgICAgICAgICAgIHZhciBuZXh0SHRtbCA9IG5leHRWYWx1ZSAmJiBuZXh0VmFsdWUuX19odG1sO1xuICAgICAgICAgICAgaWYgKGxhc3RIdG1sICE9PSBuZXh0SHRtbCkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOdWxsT3JVbmRlZihuZXh0SHRtbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tLmlubmVySFRNTCA9IG5leHRIdG1sO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBkZWh5cGhlblByb3A7XG4gICAgICAgICAgICBpZiAoZGVoeXBoZW5Qcm9wc1twcm9wXSkge1xuICAgICAgICAgICAgICAgIGRlaHlwaGVuUHJvcCA9IGRlaHlwaGVuUHJvcHNbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc1NWRyAmJiBwcm9wLm1hdGNoKHByb2JhYmx5S2ViYWJQcm9wcykpIHtcbiAgICAgICAgICAgICAgICBkZWh5cGhlblByb3AgPSBwcm9wLnJlcGxhY2UoLyhbYS16XSkoW0EtWl18MSkvZywga2ViYWJpemUpO1xuICAgICAgICAgICAgICAgIGRlaHlwaGVuUHJvcHNbcHJvcF0gPSBkZWh5cGhlblByb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWh5cGhlblByb3AgPSBwcm9wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG5zID0gbmFtZXNwYWNlc1twcm9wXTtcbiAgICAgICAgICAgIGlmIChucykge1xuICAgICAgICAgICAgICAgIGRvbS5zZXRBdHRyaWJ1dGVOUyhucywgZGVoeXBoZW5Qcm9wLCBuZXh0VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9tLnNldEF0dHJpYnV0ZShkZWh5cGhlblByb3AsIG5leHRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBwYXRjaEV2ZW50cyhsYXN0RXZlbnRzLCBuZXh0RXZlbnRzLCBkb20pIHtcbiAgICBsYXN0RXZlbnRzID0gbGFzdEV2ZW50cyB8fCBFTVBUWV9PQko7XG4gICAgbmV4dEV2ZW50cyA9IG5leHRFdmVudHMgfHwgRU1QVFlfT0JKO1xuICAgIGlmIChuZXh0RXZlbnRzICE9PSBFTVBUWV9PQkopIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBuZXh0RXZlbnRzKSB7XG4gICAgICAgICAgICAvLyBkbyBub3QgYWRkIGEgaGFzT3duUHJvcGVydHkgY2hlY2sgaGVyZSwgaXQgYWZmZWN0cyBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgcGF0Y2hFdmVudChuYW1lLCBsYXN0RXZlbnRzW25hbWVdLCBuZXh0RXZlbnRzW25hbWVdLCBkb20pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChsYXN0RXZlbnRzICE9PSBFTVBUWV9PQkopIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSQxIGluIGxhc3RFdmVudHMpIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdCBhZGQgYSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBoZXJlLCBpdCBhZmZlY3RzIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICBpZiAoaXNOdWxsT3JVbmRlZihuZXh0RXZlbnRzW25hbWUkMV0pKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hFdmVudChuYW1lJDEsIGxhc3RFdmVudHNbbmFtZSQxXSwgbnVsbCwgZG9tKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHBhdGNoRXZlbnQobmFtZSwgbGFzdFZhbHVlLCBuZXh0VmFsdWUsIGRvbSkge1xuICAgIGlmIChsYXN0VmFsdWUgIT09IG5leHRWYWx1ZSkge1xuICAgICAgICB2YXIgbmFtZUxvd2VyQ2FzZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdmFyIGRvbUV2ZW50ID0gZG9tW25hbWVMb3dlckNhc2VdO1xuICAgICAgICAvLyBpZiB0aGUgZnVuY3Rpb24gaXMgd3JhcHBlZCwgdGhhdCBtZWFucyBpdCdzIGJlZW4gY29udHJvbGxlZCBieSBhIHdyYXBwZXJcbiAgICAgICAgaWYgKGRvbUV2ZW50ICYmIGRvbUV2ZW50LndyYXBwZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVsZWdhdGVkUHJvcHNbbmFtZV0pIHtcbiAgICAgICAgICAgIGhhbmRsZUV2ZW50KG5hbWUsIGxhc3RWYWx1ZSwgbmV4dFZhbHVlLCBkb20pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGxhc3RWYWx1ZSAhPT0gbmV4dFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc0Z1bmN0aW9uKG5leHRWYWx1ZSkgJiYgIWlzTnVsbE9yVW5kZWYobmV4dFZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGlua0V2ZW50ID0gbmV4dFZhbHVlLmV2ZW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAobGlua0V2ZW50ICYmIGlzRnVuY3Rpb24obGlua0V2ZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkb20uX2RhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21bbmFtZUxvd2VyQ2FzZV0gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rRXZlbnQoZS5jdXJyZW50VGFyZ2V0Ll9kYXRhLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tLl9kYXRhID0gbmV4dFZhbHVlLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93RXJyb3IoKFwiYW4gZXZlbnQgb24gYSBWTm9kZSBcXFwiXCIgKyBuYW1lICsgXCJcXFwiLiB3YXMgbm90IGEgZnVuY3Rpb24gb3IgYSB2YWxpZCBsaW5rRXZlbnQuXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93RXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tW25hbWVMb3dlckNhc2VdID0gbmV4dFZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIFdlIGFyZSBhc3N1bWluZyBoZXJlIHRoYXQgd2UgY29tZSBmcm9tIHBhdGNoUHJvcCByb3V0aW5lXG4vLyAtbmV4dEF0dHJWYWx1ZSBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWRcbmZ1bmN0aW9uIHBhdGNoU3R5bGUobGFzdEF0dHJWYWx1ZSwgbmV4dEF0dHJWYWx1ZSwgZG9tKSB7XG4gICAgaWYgKGlzU3RyaW5nKG5leHRBdHRyVmFsdWUpKSB7XG4gICAgICAgIGRvbS5zdHlsZS5jc3NUZXh0ID0gbmV4dEF0dHJWYWx1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKHZhciBzdHlsZSBpbiBuZXh0QXR0clZhbHVlKSB7XG4gICAgICAgIC8vIGRvIG5vdCBhZGQgYSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBoZXJlLCBpdCBhZmZlY3RzIHBlcmZvcm1hbmNlXG4gICAgICAgIHZhciB2YWx1ZSA9IG5leHRBdHRyVmFsdWVbc3R5bGVdO1xuICAgICAgICBpZiAoaXNOdW1iZXIodmFsdWUpICYmICFpc1VuaXRsZXNzTnVtYmVyW3N0eWxlXSkge1xuICAgICAgICAgICAgZG9tLnN0eWxlW3N0eWxlXSA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRvbS5zdHlsZVtzdHlsZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWlzTnVsbE9yVW5kZWYobGFzdEF0dHJWYWx1ZSkpIHtcbiAgICAgICAgZm9yICh2YXIgc3R5bGUkMSBpbiBsYXN0QXR0clZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoaXNOdWxsT3JVbmRlZihuZXh0QXR0clZhbHVlW3N0eWxlJDFdKSkge1xuICAgICAgICAgICAgICAgIGRvbS5zdHlsZVtzdHlsZSQxXSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gcmVtb3ZlUHJvcChwcm9wLCBsYXN0VmFsdWUsIGRvbSkge1xuICAgIGlmIChwcm9wID09PSAnY2xhc3NOYW1lJykge1xuICAgICAgICBkb20ucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wID09PSAndmFsdWUnKSB7XG4gICAgICAgIGRvbS52YWx1ZSA9ICcnO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wID09PSAnc3R5bGUnKSB7XG4gICAgICAgIGRvbS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzQXR0ckFuRXZlbnQocHJvcCkpIHtcbiAgICAgICAgaGFuZGxlRXZlbnQobmFtZSwgbGFzdFZhbHVlLCBudWxsLCBkb20pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZG9tLnJlbW92ZUF0dHJpYnV0ZShwcm9wKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1vdW50KHZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpIHtcbiAgICB2YXIgZmxhZ3MgPSB2Tm9kZS5mbGFncztcbiAgICBpZiAoZmxhZ3MgJiAzOTcwIC8qIEVsZW1lbnQgKi8pIHtcbiAgICAgICAgcmV0dXJuIG1vdW50RWxlbWVudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgcmV0dXJuIG1vdW50Q29tcG9uZW50KHZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGZsYWdzICYgNCAvKiBDb21wb25lbnRDbGFzcyAqLyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWdzICYgNDA5NiAvKiBWb2lkICovKSB7XG4gICAgICAgIHJldHVybiBtb3VudFZvaWQodk5vZGUsIHBhcmVudERvbSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWdzICYgMSAvKiBUZXh0ICovKSB7XG4gICAgICAgIHJldHVybiBtb3VudFRleHQodk5vZGUsIHBhcmVudERvbSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2Tm9kZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKChcIm1vdW50KCkgcmVjZWl2ZWQgYW4gb2JqZWN0IHRoYXQncyBub3QgYSB2YWxpZCBWTm9kZSwgeW91IHNob3VsZCBzdHJpbmdpZnkgaXQgZmlyc3QuIE9iamVjdDogXFxcIlwiICsgKEpTT04uc3RyaW5naWZ5KHZOb2RlKSkgKyBcIlxcXCIuXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93RXJyb3IoKFwibW91bnQoKSBleHBlY3RzIGEgdmFsaWQgVk5vZGUsIGluc3RlYWQgaXQgcmVjZWl2ZWQgYW4gb2JqZWN0IHdpdGggdGhlIHR5cGUgXFxcIlwiICsgKHR5cGVvZiB2Tm9kZSkgKyBcIlxcXCIuXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxufVxuZnVuY3Rpb24gbW91bnRUZXh0KHZOb2RlLCBwYXJlbnREb20pIHtcbiAgICB2YXIgZG9tID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodk5vZGUuY2hpbGRyZW4pO1xuICAgIHZOb2RlLmRvbSA9IGRvbTtcbiAgICBpZiAocGFyZW50RG9tKSB7XG4gICAgICAgIGFwcGVuZENoaWxkKHBhcmVudERvbSwgZG9tKTtcbiAgICB9XG4gICAgcmV0dXJuIGRvbTtcbn1cbmZ1bmN0aW9uIG1vdW50Vm9pZCh2Tm9kZSwgcGFyZW50RG9tKSB7XG4gICAgdmFyIGRvbSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICB2Tm9kZS5kb20gPSBkb207XG4gICAgaWYgKHBhcmVudERvbSkge1xuICAgICAgICBhcHBlbmRDaGlsZChwYXJlbnREb20sIGRvbSk7XG4gICAgfVxuICAgIHJldHVybiBkb207XG59XG5mdW5jdGlvbiBtb3VudEVsZW1lbnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIGlmIChvcHRpb25zLnJlY3ljbGluZ0VuYWJsZWQpIHtcbiAgICAgICAgdmFyIGRvbSQxID0gcmVjeWNsZUVsZW1lbnQodk5vZGUsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICBpZiAoIWlzTnVsbChkb20kMSkpIHtcbiAgICAgICAgICAgIGlmICghaXNOdWxsKHBhcmVudERvbSkpIHtcbiAgICAgICAgICAgICAgICBhcHBlbmRDaGlsZChwYXJlbnREb20sIGRvbSQxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkb20kMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgdGFnID0gdk5vZGUudHlwZTtcbiAgICB2YXIgZmxhZ3MgPSB2Tm9kZS5mbGFncztcbiAgICBpZiAoaXNTVkcgfHwgKGZsYWdzICYgMTI4IC8qIFN2Z0VsZW1lbnQgKi8pKSB7XG4gICAgICAgIGlzU1ZHID0gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIGRvbSA9IGRvY3VtZW50Q3JlYXRlRWxlbWVudCh0YWcsIGlzU1ZHKTtcbiAgICB2YXIgY2hpbGRyZW4gPSB2Tm9kZS5jaGlsZHJlbjtcbiAgICB2YXIgcHJvcHMgPSB2Tm9kZS5wcm9wcztcbiAgICB2YXIgZXZlbnRzID0gdk5vZGUuZXZlbnRzO1xuICAgIHZhciByZWYgPSB2Tm9kZS5yZWY7XG4gICAgdk5vZGUuZG9tID0gZG9tO1xuICAgIGlmICghaXNOdWxsKGNoaWxkcmVuKSkge1xuICAgICAgICBpZiAoaXNTdHJpbmdPck51bWJlcihjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIHNldFRleHRDb250ZW50KGRvbSwgY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBtb3VudEFycmF5Q2hpbGRyZW4oY2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNWTm9kZShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIG1vdW50KGNoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBoYXNDb250cm9sbGVkVmFsdWUgPSBmYWxzZTtcbiAgICBpZiAoIShmbGFncyAmIDIgLyogSHRtbEVsZW1lbnQgKi8pKSB7XG4gICAgICAgIGhhc0NvbnRyb2xsZWRWYWx1ZSA9IHByb2Nlc3NFbGVtZW50KGZsYWdzLCB2Tm9kZSwgZG9tKTtcbiAgICB9XG4gICAgaWYgKCFpc051bGwocHJvcHMpKSB7XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdCBhZGQgYSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBoZXJlLCBpdCBhZmZlY3RzIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICBwYXRjaFByb3AocHJvcCwgbnVsbCwgcHJvcHNbcHJvcF0sIGRvbSwgaXNTVkcsIGhhc0NvbnRyb2xsZWRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFpc051bGwoZXZlbnRzKSkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIGV2ZW50cykge1xuICAgICAgICAgICAgLy8gZG8gbm90IGFkZCBhIGhhc093blByb3BlcnR5IGNoZWNrIGhlcmUsIGl0IGFmZmVjdHMgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgIHBhdGNoRXZlbnQobmFtZSwgbnVsbCwgZXZlbnRzW25hbWVdLCBkb20pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghaXNOdWxsKHJlZikpIHtcbiAgICAgICAgbW91bnRSZWYoZG9tLCByZWYsIGxpZmVjeWNsZSk7XG4gICAgfVxuICAgIGlmICghaXNOdWxsKHBhcmVudERvbSkpIHtcbiAgICAgICAgYXBwZW5kQ2hpbGQocGFyZW50RG9tLCBkb20pO1xuICAgIH1cbiAgICByZXR1cm4gZG9tO1xufVxuZnVuY3Rpb24gbW91bnRBcnJheUNoaWxkcmVuKGNoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAvLyBUT0RPOiBWZXJpZnkgY2FuIHN0cmluZy9udW1iZXIgYmUgaGVyZS4gbWlnaHQgY2F1c2UgZGUtb3B0XG4gICAgICAgIGlmICghaXNJbnZhbGlkKGNoaWxkKSkge1xuICAgICAgICAgICAgaWYgKGNoaWxkLmRvbSkge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuW2ldID0gY2hpbGQgPSBjbG9uZVZOb2RlKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1vdW50KGNoaWxkcmVuW2ldLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gbW91bnRDb21wb25lbnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNDbGFzcykge1xuICAgIGlmIChvcHRpb25zLnJlY3ljbGluZ0VuYWJsZWQpIHtcbiAgICAgICAgdmFyIGRvbSQxID0gcmVjeWNsZUNvbXBvbmVudCh2Tm9kZSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIGlmICghaXNOdWxsKGRvbSQxKSkge1xuICAgICAgICAgICAgaWYgKCFpc051bGwocGFyZW50RG9tKSkge1xuICAgICAgICAgICAgICAgIGFwcGVuZENoaWxkKHBhcmVudERvbSwgZG9tJDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRvbSQxO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciB0eXBlID0gdk5vZGUudHlwZTtcbiAgICB2YXIgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuICAgIHZhciByZWYgPSB2Tm9kZS5yZWY7XG4gICAgdmFyIGRvbTtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKGRlZmF1bHRQcm9wcykpIHtcbiAgICAgICAgY29weVByb3BzVG8oZGVmYXVsdFByb3BzLCBwcm9wcyk7XG4gICAgICAgIHZOb2RlLnByb3BzID0gcHJvcHM7XG4gICAgfVxuICAgIGlmIChpc0NsYXNzKSB7XG4gICAgICAgIHZhciBpbnN0YW5jZSA9IGNyZWF0ZUNsYXNzQ29tcG9uZW50SW5zdGFuY2Uodk5vZGUsIHR5cGUsIHByb3BzLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIC8vIElmIGluc3RhbmNlIGRvZXMgbm90IGhhdmUgY29tcG9uZW50V2lsbFVubW91bnQgc3BlY2lmaWVkIHdlIGNhbiBlbmFibGUgZmFzdFVubW91bnRcbiAgICAgICAgdmFyIGlucHV0ID0gaW5zdGFuY2UuX2xhc3RJbnB1dDtcbiAgICAgICAgdmFyIHByZXZGYXN0VW5tb3VudCA9IGxpZmVjeWNsZS5mYXN0VW5tb3VudDtcbiAgICAgICAgLy8gd2Ugc3RvcmUgdGhlIGZhc3RVbm1vdW50IHZhbHVlLCBidXQgd2Ugc2V0IGl0IGJhY2sgdG8gdHJ1ZSBvbiB0aGUgbGlmZWN5Y2xlXG4gICAgICAgIC8vIHdlIGRvIHRoaXMgc28gd2UgY2FuIGRldGVybWluZSBpZiB0aGUgY29tcG9uZW50IHJlbmRlciBoYXMgYSBmYXN0VW5tb3VudCBvciBub3RcbiAgICAgICAgbGlmZWN5Y2xlLmZhc3RVbm1vdW50ID0gdHJ1ZTtcbiAgICAgICAgaW5zdGFuY2UuX3ZOb2RlID0gdk5vZGU7XG4gICAgICAgIHZOb2RlLmRvbSA9IGRvbSA9IG1vdW50KGlucHV0LCBudWxsLCBsaWZlY3ljbGUsIGluc3RhbmNlLl9jaGlsZENvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgLy8gd2Ugbm93IGNyZWF0ZSBhIGxpZmVjeWNsZSBmb3IgdGhpcyBjb21wb25lbnQgYW5kIHN0b3JlIHRoZSBmYXN0VW5tb3VudCB2YWx1ZVxuICAgICAgICB2YXIgc3ViTGlmZWN5Y2xlID0gaW5zdGFuY2UuX2xpZmVjeWNsZSA9IG5ldyBMaWZlY3ljbGUoKTtcbiAgICAgICAgLy8gY2hpbGRyZW4gbGlmZWN5Y2xlIGNhbiBmYXN0VW5tb3VudCBpZiBpdHNlbGYgZG9lcyBuZWVkIHVubW91bnQgY2FsbGJhY2sgYW5kIHdpdGhpbiBpdHMgY3ljbGUgdGhlcmUgd2FzIG5vbmVcbiAgICAgICAgc3ViTGlmZWN5Y2xlLmZhc3RVbm1vdW50ID0gaXNVbmRlZmluZWQoaW5zdGFuY2UuY29tcG9uZW50V2lsbFVubW91bnQpICYmIGxpZmVjeWNsZS5mYXN0VW5tb3VudDtcbiAgICAgICAgLy8gaGlnaGVyIGxpZmVjeWNsZSBjYW4gZmFzdFVubW91bnQgb25seSBpZiBwcmV2aW91c2x5IGl0IHdhcyBhYmxlIHRvIGFuZCB0aGlzIGNoaWxkcmVuIGRvZXNudCBoYXZlIGFueVxuICAgICAgICBsaWZlY3ljbGUuZmFzdFVubW91bnQgPSBwcmV2RmFzdFVubW91bnQgJiYgc3ViTGlmZWN5Y2xlLmZhc3RVbm1vdW50O1xuICAgICAgICBpZiAoIWlzTnVsbChwYXJlbnREb20pKSB7XG4gICAgICAgICAgICBhcHBlbmRDaGlsZChwYXJlbnREb20sIGRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgbW91bnRDbGFzc0NvbXBvbmVudENhbGxiYWNrcyh2Tm9kZSwgcmVmLCBpbnN0YW5jZSwgbGlmZWN5Y2xlKTtcbiAgICAgICAgb3B0aW9ucy5maW5kRE9NTm9kZUVuYWJsZWQgJiYgY29tcG9uZW50VG9ET01Ob2RlTWFwLnNldChpbnN0YW5jZSwgZG9tKTtcbiAgICAgICAgdk5vZGUuY2hpbGRyZW4gPSBpbnN0YW5jZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBpbnB1dCQxID0gY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudElucHV0KHZOb2RlLCB0eXBlLCBwcm9wcywgY29udGV4dCk7XG4gICAgICAgIHZOb2RlLmRvbSA9IGRvbSA9IG1vdW50KGlucHV0JDEsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICB2Tm9kZS5jaGlsZHJlbiA9IGlucHV0JDE7XG4gICAgICAgIG1vdW50RnVuY3Rpb25hbENvbXBvbmVudENhbGxiYWNrcyhyZWYsIGRvbSwgbGlmZWN5Y2xlKTtcbiAgICAgICAgaWYgKCFpc051bGwocGFyZW50RG9tKSkge1xuICAgICAgICAgICAgYXBwZW5kQ2hpbGQocGFyZW50RG9tLCBkb20pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkb207XG59XG5mdW5jdGlvbiBtb3VudENsYXNzQ29tcG9uZW50Q2FsbGJhY2tzKHZOb2RlLCByZWYsIGluc3RhbmNlLCBsaWZlY3ljbGUpIHtcbiAgICBpZiAocmVmKSB7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKHJlZikpIHtcbiAgICAgICAgICAgIHJlZihpbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmIChpc1N0cmluZ09yTnVtYmVyKHJlZikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcignc3RyaW5nIFwicmVmc1wiIGFyZSBub3Qgc3VwcG9ydGVkIGluIEluZmVybm8gMS4wLiBVc2UgY2FsbGJhY2sgXCJyZWZzXCIgaW5zdGVhZC4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNPYmplY3QocmVmKSAmJiAodk5vZGUuZmxhZ3MgJiA0IC8qIENvbXBvbmVudENsYXNzICovKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKCdmdW5jdGlvbmFsIGNvbXBvbmVudCBsaWZlY3ljbGUgZXZlbnRzIGFyZSBub3Qgc3VwcG9ydGVkIG9uIEVTMjAxNSBjbGFzcyBjb21wb25lbnRzLicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcigoXCJhIGJhZCB2YWx1ZSBmb3IgXFxcInJlZlxcXCIgd2FzIHVzZWQgb24gY29tcG9uZW50OiBcXFwiXCIgKyAoSlNPTi5zdHJpbmdpZnkocmVmKSkgKyBcIlxcXCJcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93RXJyb3IoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgY0RNID0gaW5zdGFuY2UuY29tcG9uZW50RGlkTW91bnQ7XG4gICAgdmFyIGFmdGVyTW91bnQgPSBvcHRpb25zLmFmdGVyTW91bnQ7XG4gICAgaWYgKCFpc1VuZGVmaW5lZChjRE0pIHx8ICFpc051bGwoYWZ0ZXJNb3VudCkpIHtcbiAgICAgICAgbGlmZWN5Y2xlLmFkZExpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFmdGVyTW91bnQgJiYgYWZ0ZXJNb3VudCh2Tm9kZSk7XG4gICAgICAgICAgICBjRE0gJiYgaW5zdGFuY2UuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gbW91bnRGdW5jdGlvbmFsQ29tcG9uZW50Q2FsbGJhY2tzKHJlZiwgZG9tLCBsaWZlY3ljbGUpIHtcbiAgICBpZiAocmVmKSB7XG4gICAgICAgIGlmICghaXNOdWxsT3JVbmRlZihyZWYub25Db21wb25lbnRXaWxsTW91bnQpKSB7XG4gICAgICAgICAgICByZWYub25Db21wb25lbnRXaWxsTW91bnQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYocmVmLm9uQ29tcG9uZW50RGlkTW91bnQpKSB7XG4gICAgICAgICAgICBsaWZlY3ljbGUuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVmLm9uQ29tcG9uZW50RGlkTW91bnQoZG9tKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKHJlZi5vbkNvbXBvbmVudFdpbGxVbm1vdW50KSkge1xuICAgICAgICAgICAgbGlmZWN5Y2xlLmZhc3RVbm1vdW50ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBtb3VudFJlZihkb20sIHZhbHVlLCBsaWZlY3ljbGUpIHtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgbGlmZWN5Y2xlLmZhc3RVbm1vdW50ID0gZmFsc2U7XG4gICAgICAgIGxpZmVjeWNsZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7IHJldHVybiB2YWx1ZShkb20pOyB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChpc0ludmFsaWQodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3IoJ3N0cmluZyBcInJlZnNcIiBhcmUgbm90IHN1cHBvcnRlZCBpbiBJbmZlcm5vIDEuMC4gVXNlIGNhbGxiYWNrIFwicmVmc1wiIGluc3RlYWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplQ2hpbGROb2RlcyhwYXJlbnREb20pIHtcbiAgICB2YXIgZG9tID0gcGFyZW50RG9tLmZpcnN0Q2hpbGQ7XG4gICAgd2hpbGUgKGRvbSkge1xuICAgICAgICBpZiAoZG9tLm5vZGVUeXBlID09PSA4KSB7XG4gICAgICAgICAgICBpZiAoZG9tLmRhdGEgPT09ICchJykge1xuICAgICAgICAgICAgICAgIHZhciBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICAgICAgICAgICAgICBwYXJlbnREb20ucmVwbGFjZUNoaWxkKHBsYWNlaG9sZGVyLCBkb20pO1xuICAgICAgICAgICAgICAgIGRvbSA9IGRvbS5uZXh0U2libGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBsYXN0RG9tID0gZG9tLnByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgICAgICBwYXJlbnREb20ucmVtb3ZlQ2hpbGQoZG9tKTtcbiAgICAgICAgICAgICAgICBkb20gPSBsYXN0RG9tIHx8IHBhcmVudERvbS5maXJzdENoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZG9tID0gZG9tLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gaHlkcmF0ZUNvbXBvbmVudCh2Tm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc0NsYXNzKSB7XG4gICAgdmFyIHR5cGUgPSB2Tm9kZS50eXBlO1xuICAgIHZhciBwcm9wcyA9IHZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcbiAgICB2YXIgcmVmID0gdk5vZGUucmVmO1xuICAgIHZOb2RlLmRvbSA9IGRvbTtcbiAgICBpZiAoaXNDbGFzcykge1xuICAgICAgICB2YXIgX2lzU1ZHID0gZG9tLm5hbWVzcGFjZVVSSSA9PT0gc3ZnTlM7XG4gICAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChkZWZhdWx0UHJvcHMpKSB7XG4gICAgICAgICAgICBjb3B5UHJvcHNUbyhkZWZhdWx0UHJvcHMsIHByb3BzKTtcbiAgICAgICAgICAgIHZOb2RlLnByb3BzID0gcHJvcHM7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluc3RhbmNlID0gY3JlYXRlQ2xhc3NDb21wb25lbnRJbnN0YW5jZSh2Tm9kZSwgdHlwZSwgcHJvcHMsIGNvbnRleHQsIF9pc1NWRyk7XG4gICAgICAgIC8vIElmIGluc3RhbmNlIGRvZXMgbm90IGhhdmUgY29tcG9uZW50V2lsbFVubW91bnQgc3BlY2lmaWVkIHdlIGNhbiBlbmFibGUgZmFzdFVubW91bnRcbiAgICAgICAgdmFyIHByZXZGYXN0VW5tb3VudCA9IGxpZmVjeWNsZS5mYXN0VW5tb3VudDtcbiAgICAgICAgdmFyIGlucHV0ID0gaW5zdGFuY2UuX2xhc3RJbnB1dDtcbiAgICAgICAgLy8gd2Ugc3RvcmUgdGhlIGZhc3RVbm1vdW50IHZhbHVlLCBidXQgd2Ugc2V0IGl0IGJhY2sgdG8gdHJ1ZSBvbiB0aGUgbGlmZWN5Y2xlXG4gICAgICAgIC8vIHdlIGRvIHRoaXMgc28gd2UgY2FuIGRldGVybWluZSBpZiB0aGUgY29tcG9uZW50IHJlbmRlciBoYXMgYSBmYXN0VW5tb3VudCBvciBub3RcbiAgICAgICAgbGlmZWN5Y2xlLmZhc3RVbm1vdW50ID0gdHJ1ZTtcbiAgICAgICAgaW5zdGFuY2UuX3ZDb21wb25lbnQgPSB2Tm9kZTtcbiAgICAgICAgaW5zdGFuY2UuX3ZOb2RlID0gdk5vZGU7XG4gICAgICAgIGh5ZHJhdGUoaW5wdXQsIGRvbSwgbGlmZWN5Y2xlLCBpbnN0YW5jZS5fY2hpbGRDb250ZXh0LCBfaXNTVkcpO1xuICAgICAgICAvLyB3ZSBub3cgY3JlYXRlIGEgbGlmZWN5Y2xlIGZvciB0aGlzIGNvbXBvbmVudCBhbmQgc3RvcmUgdGhlIGZhc3RVbm1vdW50IHZhbHVlXG4gICAgICAgIHZhciBzdWJMaWZlY3ljbGUgPSBpbnN0YW5jZS5fbGlmZWN5Y2xlID0gbmV3IExpZmVjeWNsZSgpO1xuICAgICAgICAvLyBjaGlsZHJlbiBsaWZlY3ljbGUgY2FuIGZhc3RVbm1vdW50IGlmIGl0c2VsZiBkb2VzIG5lZWQgdW5tb3VudCBjYWxsYmFjayBhbmQgd2l0aGluIGl0cyBjeWNsZSB0aGVyZSB3YXMgbm9uZVxuICAgICAgICBzdWJMaWZlY3ljbGUuZmFzdFVubW91bnQgPSBpc1VuZGVmaW5lZChpbnN0YW5jZS5jb21wb25lbnRXaWxsVW5tb3VudCkgJiYgbGlmZWN5Y2xlLmZhc3RVbm1vdW50O1xuICAgICAgICAvLyBoaWdoZXIgbGlmZWN5Y2xlIGNhbiBmYXN0VW5tb3VudCBvbmx5IGlmIHByZXZpb3VzbHkgaXQgd2FzIGFibGUgdG8gYW5kIHRoaXMgY2hpbGRyZW4gZG9lc250IGhhdmUgYW55XG4gICAgICAgIGxpZmVjeWNsZS5mYXN0VW5tb3VudCA9IHByZXZGYXN0VW5tb3VudCAmJiBzdWJMaWZlY3ljbGUuZmFzdFVubW91bnQ7XG4gICAgICAgIG1vdW50Q2xhc3NDb21wb25lbnRDYWxsYmFja3Modk5vZGUsIHJlZiwgaW5zdGFuY2UsIGxpZmVjeWNsZSk7XG4gICAgICAgIG9wdGlvbnMuZmluZERPTU5vZGVFbmFibGVkICYmIGNvbXBvbmVudFRvRE9NTm9kZU1hcC5zZXQoaW5zdGFuY2UsIGRvbSk7XG4gICAgICAgIHZOb2RlLmNoaWxkcmVuID0gaW5zdGFuY2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgaW5wdXQkMSA9IGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnRJbnB1dCh2Tm9kZSwgdHlwZSwgcHJvcHMsIGNvbnRleHQpO1xuICAgICAgICBoeWRyYXRlKGlucHV0JDEsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIHZOb2RlLmNoaWxkcmVuID0gaW5wdXQkMTtcbiAgICAgICAgdk5vZGUuZG9tID0gaW5wdXQkMS5kb207XG4gICAgICAgIG1vdW50RnVuY3Rpb25hbENvbXBvbmVudENhbGxiYWNrcyhyZWYsIGRvbSwgbGlmZWN5Y2xlKTtcbiAgICB9XG4gICAgcmV0dXJuIGRvbTtcbn1cbmZ1bmN0aW9uIGh5ZHJhdGVFbGVtZW50KHZOb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpIHtcbiAgICB2YXIgdGFnID0gdk5vZGUudHlwZTtcbiAgICB2YXIgY2hpbGRyZW4gPSB2Tm9kZS5jaGlsZHJlbjtcbiAgICB2YXIgcHJvcHMgPSB2Tm9kZS5wcm9wcztcbiAgICB2YXIgZXZlbnRzID0gdk5vZGUuZXZlbnRzO1xuICAgIHZhciBmbGFncyA9IHZOb2RlLmZsYWdzO1xuICAgIHZhciByZWYgPSB2Tm9kZS5yZWY7XG4gICAgaWYgKGlzU1ZHIHx8IChmbGFncyAmIDEyOCAvKiBTdmdFbGVtZW50ICovKSkge1xuICAgICAgICBpc1NWRyA9IHRydWU7XG4gICAgfVxuICAgIGlmIChkb20ubm9kZVR5cGUgIT09IDEgfHwgZG9tLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gdGFnKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB3YXJuaW5nKCdJbmZlcm5vIGh5ZHJhdGlvbjogU2VydmVyLXNpZGUgbWFya3VwIGRvZXNuXFwndCBtYXRjaCBjbGllbnQtc2lkZSBtYXJrdXAgb3IgSW5pdGlhbCByZW5kZXIgdGFyZ2V0IGlzIG5vdCBlbXB0eScpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuZXdEb20gPSBtb3VudEVsZW1lbnQodk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICB2Tm9kZS5kb20gPSBuZXdEb207XG4gICAgICAgIHJlcGxhY2VDaGlsZChkb20ucGFyZW50Tm9kZSwgbmV3RG9tLCBkb20pO1xuICAgICAgICByZXR1cm4gbmV3RG9tO1xuICAgIH1cbiAgICB2Tm9kZS5kb20gPSBkb207XG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgIGh5ZHJhdGVDaGlsZHJlbihjaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICB9XG4gICAgdmFyIGhhc0NvbnRyb2xsZWRWYWx1ZSA9IGZhbHNlO1xuICAgIGlmICghKGZsYWdzICYgMiAvKiBIdG1sRWxlbWVudCAqLykpIHtcbiAgICAgICAgaGFzQ29udHJvbGxlZFZhbHVlID0gcHJvY2Vzc0VsZW1lbnQoZmxhZ3MsIHZOb2RlLCBkb20pO1xuICAgIH1cbiAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBwcm9wcykge1xuICAgICAgICAgICAgcGF0Y2hQcm9wKHByb3AsIG51bGwsIHByb3BzW3Byb3BdLCBkb20sIGlzU1ZHLCBoYXNDb250cm9sbGVkVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChldmVudHMpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBldmVudHMpIHtcbiAgICAgICAgICAgIHBhdGNoRXZlbnQobmFtZSwgbnVsbCwgZXZlbnRzW25hbWVdLCBkb20pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChyZWYpIHtcbiAgICAgICAgbW91bnRSZWYoZG9tLCByZWYsIGxpZmVjeWNsZSk7XG4gICAgfVxuICAgIHJldHVybiBkb207XG59XG5mdW5jdGlvbiBoeWRyYXRlQ2hpbGRyZW4oY2hpbGRyZW4sIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIG5vcm1hbGl6ZUNoaWxkTm9kZXMocGFyZW50RG9tKTtcbiAgICB2YXIgZG9tID0gcGFyZW50RG9tLmZpcnN0Q2hpbGQ7XG4gICAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKCFpc051bGwoY2hpbGQpICYmIGlzT2JqZWN0KGNoaWxkKSkge1xuICAgICAgICAgICAgICAgIGlmIChkb20pIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tID0gaHlkcmF0ZShjaGlsZCwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgICAgICAgICAgICAgZG9tID0gZG9tLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbW91bnQoY2hpbGQsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXIoY2hpbGRyZW4pKSB7XG4gICAgICAgIGlmIChkb20gJiYgZG9tLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgICAgICBpZiAoZG9tLm5vZGVWYWx1ZSAhPT0gY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBkb20ubm9kZVZhbHVlID0gY2hpbGRyZW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHBhcmVudERvbS50ZXh0Q29udGVudCA9IGNoaWxkcmVuO1xuICAgICAgICB9XG4gICAgICAgIGRvbSA9IGRvbS5uZXh0U2libGluZztcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYmplY3QoY2hpbGRyZW4pKSB7XG4gICAgICAgIGh5ZHJhdGUoY2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIGRvbSA9IGRvbS5uZXh0U2libGluZztcbiAgICB9XG4gICAgLy8gY2xlYXIgYW55IG90aGVyIERPTSBub2RlcywgdGhlcmUgc2hvdWxkIGJlIG9ubHkgYSBzaW5nbGUgZW50cnkgZm9yIHRoZSByb290XG4gICAgd2hpbGUgKGRvbSkge1xuICAgICAgICB2YXIgbmV4dFNpYmxpbmcgPSBkb20ubmV4dFNpYmxpbmc7XG4gICAgICAgIHBhcmVudERvbS5yZW1vdmVDaGlsZChkb20pO1xuICAgICAgICBkb20gPSBuZXh0U2libGluZztcbiAgICB9XG59XG5mdW5jdGlvbiBoeWRyYXRlVGV4dCh2Tm9kZSwgZG9tKSB7XG4gICAgaWYgKGRvbS5ub2RlVHlwZSAhPT0gMykge1xuICAgICAgICB2YXIgbmV3RG9tID0gbW91bnRUZXh0KHZOb2RlLCBudWxsKTtcbiAgICAgICAgdk5vZGUuZG9tID0gbmV3RG9tO1xuICAgICAgICByZXBsYWNlQ2hpbGQoZG9tLnBhcmVudE5vZGUsIG5ld0RvbSwgZG9tKTtcbiAgICAgICAgcmV0dXJuIG5ld0RvbTtcbiAgICB9XG4gICAgdmFyIHRleHQgPSB2Tm9kZS5jaGlsZHJlbjtcbiAgICBpZiAoZG9tLm5vZGVWYWx1ZSAhPT0gdGV4dCkge1xuICAgICAgICBkb20ubm9kZVZhbHVlID0gdGV4dDtcbiAgICB9XG4gICAgdk5vZGUuZG9tID0gZG9tO1xuICAgIHJldHVybiBkb207XG59XG5mdW5jdGlvbiBoeWRyYXRlVm9pZCh2Tm9kZSwgZG9tKSB7XG4gICAgdk5vZGUuZG9tID0gZG9tO1xuICAgIHJldHVybiBkb207XG59XG5mdW5jdGlvbiBoeWRyYXRlKHZOb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpIHtcbiAgICB2YXIgZmxhZ3MgPSB2Tm9kZS5mbGFncztcbiAgICBpZiAoZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgcmV0dXJuIGh5ZHJhdGVDb21wb25lbnQodk5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgZmxhZ3MgJiA0IC8qIENvbXBvbmVudENsYXNzICovKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxhZ3MgJiAzOTcwIC8qIEVsZW1lbnQgKi8pIHtcbiAgICAgICAgcmV0dXJuIGh5ZHJhdGVFbGVtZW50KHZOb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChmbGFncyAmIDEgLyogVGV4dCAqLykge1xuICAgICAgICByZXR1cm4gaHlkcmF0ZVRleHQodk5vZGUsIGRvbSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWdzICYgNDA5NiAvKiBWb2lkICovKSB7XG4gICAgICAgIHJldHVybiBoeWRyYXRlVm9pZCh2Tm9kZSwgZG9tKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKChcImh5ZHJhdGUoKSBleHBlY3RzIGEgdmFsaWQgVk5vZGUsIGluc3RlYWQgaXQgcmVjZWl2ZWQgYW4gb2JqZWN0IHdpdGggdGhlIHR5cGUgXFxcIlwiICsgKHR5cGVvZiB2Tm9kZSkgKyBcIlxcXCIuXCIpKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxufVxuZnVuY3Rpb24gaHlkcmF0ZVJvb3QoaW5wdXQsIHBhcmVudERvbSwgbGlmZWN5Y2xlKSB7XG4gICAgdmFyIGRvbSA9IHBhcmVudERvbSAmJiBwYXJlbnREb20uZmlyc3RDaGlsZDtcbiAgICBpZiAoZG9tKSB7XG4gICAgICAgIGh5ZHJhdGUoaW5wdXQsIGRvbSwgbGlmZWN5Y2xlLCB7fSwgZmFsc2UpO1xuICAgICAgICBkb20gPSBwYXJlbnREb20uZmlyc3RDaGlsZDtcbiAgICAgICAgLy8gY2xlYXIgYW55IG90aGVyIERPTSBub2RlcywgdGhlcmUgc2hvdWxkIGJlIG9ubHkgYSBzaW5nbGUgZW50cnkgZm9yIHRoZSByb290XG4gICAgICAgIHdoaWxlIChkb20gPSBkb20ubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgIHBhcmVudERvbS5yZW1vdmVDaGlsZChkb20pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIHJhdGhlciB0aGFuIHVzZSBhIE1hcCwgbGlrZSB3ZSBkaWQgYmVmb3JlLCB3ZSBjYW4gdXNlIGFuIGFycmF5IGhlcmVcbi8vIGdpdmVuIHRoZXJlIHNob3VsZG4ndCBiZSBUSEFUIG1hbnkgcm9vdHMgb24gdGhlIHBhZ2UsIHRoZSBkaWZmZXJlbmNlXG4vLyBpbiBwZXJmb3JtYW5jZSBpcyBodWdlOiBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzU4MDJhNjkxMzMwYWIwOTkwMGExYTJkYVxudmFyIHJvb3RzID0gW107XG52YXIgY29tcG9uZW50VG9ET01Ob2RlTWFwID0gbmV3IE1hcCgpO1xub3B0aW9ucy5yb290cyA9IHJvb3RzO1xuZnVuY3Rpb24gZmluZERPTU5vZGUocmVmKSB7XG4gICAgaWYgKCFvcHRpb25zLmZpbmRET01Ob2RlRW5hYmxlZCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3dFcnJvcignZmluZERPTU5vZGUoKSBoYXMgYmVlbiBkaXNhYmxlZCwgdXNlIEluZmVybm8ub3B0aW9ucy5maW5kRE9NTm9kZUVuYWJsZWQgPSB0cnVlOyBlbmFibGVkIGZpbmRET01Ob2RlKCkuIFdhcm5pbmcgdGhpcyBjYW4gc2lnbmlmaWNhbnRseSBpbXBhY3QgcGVyZm9ybWFuY2UhJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgIH1cbiAgICB2YXIgZG9tID0gcmVmICYmIHJlZi5ub2RlVHlwZSA/IHJlZiA6IG51bGw7XG4gICAgcmV0dXJuIGNvbXBvbmVudFRvRE9NTm9kZU1hcC5nZXQocmVmKSB8fCBkb207XG59XG5mdW5jdGlvbiBnZXRSb290KGRvbSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm9vdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHJvb3QgPSByb290c1tpXTtcbiAgICAgICAgaWYgKHJvb3QuZG9tID09PSBkb20pIHtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gc2V0Um9vdChkb20sIGlucHV0LCBsaWZlY3ljbGUpIHtcbiAgICB2YXIgcm9vdCA9IHtcbiAgICAgICAgZG9tOiBkb20sXG4gICAgICAgIGlucHV0OiBpbnB1dCxcbiAgICAgICAgbGlmZWN5Y2xlOiBsaWZlY3ljbGVcbiAgICB9O1xuICAgIHJvb3RzLnB1c2gocm9vdCk7XG4gICAgcmV0dXJuIHJvb3Q7XG59XG5mdW5jdGlvbiByZW1vdmVSb290KHJvb3QpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChyb290c1tpXSA9PT0gcm9vdCkge1xuICAgICAgICAgICAgcm9vdHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxufVxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoaXNCcm93c2VyICYmIGRvY3VtZW50LmJvZHkgPT09IG51bGwpIHtcbiAgICAgICAgd2FybmluZygnSW5mZXJubyB3YXJuaW5nOiB5b3UgY2Fubm90IGluaXRpYWxpemUgaW5mZXJubyB3aXRob3V0IFwiZG9jdW1lbnQuYm9keVwiLiBXYWl0IG9uIFwiRE9NQ29udGVudExvYWRlZFwiIGV2ZW50LCBhZGQgc2NyaXB0IHRvIGJvdHRvbSBvZiBib2R5LCBvciB1c2UgYXN5bmMvZGVmZXIgYXR0cmlidXRlcyBvbiBzY3JpcHQgdGFnLicpO1xuICAgIH1cbn1cbnZhciBkb2N1bWVudEJvZHkgPSBpc0Jyb3dzZXIgPyBkb2N1bWVudC5ib2R5IDogbnVsbDtcbmZ1bmN0aW9uIHJlbmRlcihpbnB1dCwgcGFyZW50RG9tKSB7XG4gICAgaWYgKGRvY3VtZW50Qm9keSA9PT0gcGFyZW50RG9tKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKCd5b3UgY2Fubm90IHJlbmRlcigpIHRvIHRoZSBcImRvY3VtZW50LmJvZHlcIi4gVXNlIGFuIGVtcHR5IGVsZW1lbnQgYXMgYSBjb250YWluZXIgaW5zdGVhZC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxuICAgIGlmIChpbnB1dCA9PT0gTk9fT1ApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgcm9vdCA9IGdldFJvb3QocGFyZW50RG9tKTtcbiAgICBpZiAoaXNOdWxsKHJvb3QpKSB7XG4gICAgICAgIHZhciBsaWZlY3ljbGUgPSBuZXcgTGlmZWN5Y2xlKCk7XG4gICAgICAgIGlmICghaXNJbnZhbGlkKGlucHV0KSkge1xuICAgICAgICAgICAgaWYgKGlucHV0LmRvbSkge1xuICAgICAgICAgICAgICAgIGlucHV0ID0gY2xvbmVWTm9kZShpbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWh5ZHJhdGVSb290KGlucHV0LCBwYXJlbnREb20sIGxpZmVjeWNsZSkpIHtcbiAgICAgICAgICAgICAgICBtb3VudChpbnB1dCwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIHt9LCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByb290ID0gc2V0Um9vdChwYXJlbnREb20sIGlucHV0LCBsaWZlY3ljbGUpO1xuICAgICAgICAgICAgbGlmZWN5Y2xlLnRyaWdnZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGxpZmVjeWNsZSQxID0gcm9vdC5saWZlY3ljbGU7XG4gICAgICAgIGxpZmVjeWNsZSQxLmxpc3RlbmVycyA9IFtdO1xuICAgICAgICBpZiAoaXNOdWxsT3JVbmRlZihpbnB1dCkpIHtcbiAgICAgICAgICAgIHVubW91bnQocm9vdC5pbnB1dCwgcGFyZW50RG9tLCBsaWZlY3ljbGUkMSwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgIHJlbW92ZVJvb3Qocm9vdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaW5wdXQuZG9tKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBjbG9uZVZOb2RlKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhdGNoKHJvb3QuaW5wdXQsIGlucHV0LCBwYXJlbnREb20sIGxpZmVjeWNsZSQxLCB7fSwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBsaWZlY3ljbGUkMS50cmlnZ2VyKCk7XG4gICAgICAgIHJvb3QuaW5wdXQgPSBpbnB1dDtcbiAgICB9XG4gICAgaWYgKHJvb3QpIHtcbiAgICAgICAgdmFyIHJvb3RJbnB1dCA9IHJvb3QuaW5wdXQ7XG4gICAgICAgIGlmIChyb290SW5wdXQgJiYgKHJvb3RJbnB1dC5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykpIHtcbiAgICAgICAgICAgIHJldHVybiByb290SW5wdXQuY2hpbGRyZW47XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBjcmVhdGVSZW5kZXJlcihfcGFyZW50RG9tKSB7XG4gICAgdmFyIHBhcmVudERvbSA9IF9wYXJlbnREb20gfHwgbnVsbDtcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVuZGVyZXIobGFzdElucHV0LCBuZXh0SW5wdXQpIHtcbiAgICAgICAgaWYgKCFwYXJlbnREb20pIHtcbiAgICAgICAgICAgIHBhcmVudERvbSA9IGxhc3RJbnB1dDtcbiAgICAgICAgfVxuICAgICAgICByZW5kZXIobmV4dElucHV0LCBwYXJlbnREb20pO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGxpbmtFdmVudChkYXRhLCBldmVudCkge1xuICAgIHJldHVybiB7IGRhdGE6IGRhdGEsIGV2ZW50OiBldmVudCB9O1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuXHRPYmplY3QuZnJlZXplKEVNUFRZX09CSik7XG5cdHZhciB0ZXN0RnVuYyA9IGZ1bmN0aW9uIHRlc3RGbigpIHt9O1xuXHRpZiAoKHRlc3RGdW5jLm5hbWUgfHwgdGVzdEZ1bmMudG9TdHJpbmcoKSkuaW5kZXhPZigndGVzdEZuJykgPT09IC0xKSB7XG5cdFx0d2FybmluZygoJ0l0IGxvb2tzIGxpa2UgeW91XFwncmUgdXNpbmcgYSBtaW5pZmllZCBjb3B5IG9mIHRoZSBkZXZlbG9wbWVudCBidWlsZCAnICtcblx0XHRcdFx0J29mIEluZmVybm8uIFdoZW4gZGVwbG95aW5nIEluZmVybm8gYXBwcyB0byBwcm9kdWN0aW9uLCBtYWtlIHN1cmUgdG8gdXNlICcgK1xuXHRcdFx0XHQndGhlIHByb2R1Y3Rpb24gYnVpbGQgd2hpY2ggc2tpcHMgZGV2ZWxvcG1lbnQgd2FybmluZ3MgYW5kIGlzIGZhc3Rlci4gJyArXG5cdFx0XHRcdCdTZWUgaHR0cDovL2luZmVybm9qcy5vcmcgZm9yIG1vcmUgZGV0YWlscy4nXG5cdFx0KSk7XG5cdH1cbn1cblxuLy8gVGhpcyB3aWxsIGJlIHJlcGxhY2VkIGJ5IHJvbGx1cFxudmFyIHZlcnNpb24gPSAnMS4yLjInO1xuXG4vLyB3ZSBkdXBsaWNhdGUgaXQgc28gaXQgcGxheXMgbmljZWx5IHdpdGggZGlmZmVyZW50IG1vZHVsZSBsb2FkaW5nIHN5c3RlbXNcbnZhciBpbmRleCA9IHtcblx0bGlua0V2ZW50OiBsaW5rRXZlbnQsXG5cdC8vIGNvcmUgc2hhcGVzXG5cdGNyZWF0ZVZOb2RlOiBjcmVhdGVWTm9kZSxcblxuXHQvLyBjbG9uaW5nXG5cdGNsb25lVk5vZGU6IGNsb25lVk5vZGUsXG5cblx0Ly8gdXNlZCB0byBzaGFyZWQgY29tbW9uIGl0ZW1zIGJldHdlZW4gSW5mZXJubyBsaWJzXG5cdE5PX09QOiBOT19PUCxcblx0RU1QVFlfT0JKOiBFTVBUWV9PQkosXG5cblx0Ly8gRE9NXG5cdHJlbmRlcjogcmVuZGVyLFxuXHRmaW5kRE9NTm9kZTogZmluZERPTU5vZGUsXG5cdGNyZWF0ZVJlbmRlcmVyOiBjcmVhdGVSZW5kZXJlcixcblx0b3B0aW9uczogb3B0aW9ucyxcblx0dmVyc2lvbjogdmVyc2lvblxufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gaW5kZXg7XG5leHBvcnRzLmxpbmtFdmVudCA9IGxpbmtFdmVudDtcbmV4cG9ydHMuY3JlYXRlVk5vZGUgPSBjcmVhdGVWTm9kZTtcbmV4cG9ydHMuY2xvbmVWTm9kZSA9IGNsb25lVk5vZGU7XG5leHBvcnRzLk5PX09QID0gTk9fT1A7XG5leHBvcnRzLkVNUFRZX09CSiA9IEVNUFRZX09CSjtcbmV4cG9ydHMucmVuZGVyID0gcmVuZGVyO1xuZXhwb3J0cy5maW5kRE9NTm9kZSA9IGZpbmRET01Ob2RlO1xuZXhwb3J0cy5jcmVhdGVSZW5kZXJlciA9IGNyZWF0ZVJlbmRlcmVyO1xuZXhwb3J0cy5vcHRpb25zID0gb3B0aW9ucztcbmV4cG9ydHMudmVyc2lvbiA9IHZlcnNpb247XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5mZXJuby9kaXN0L2luZmVybm8ubm9kZS5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEluZmVybm8gZnJvbSAnaW5mZXJubyc7XHJcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJ2luZmVybm8tY3JlYXRlLWVsZW1lbnQnO1xyXG5pbXBvcnQgTGlzdERlbW8gZnJvbSAnLi9MaXN0RGVtby5qcyc7XHJcbmltcG9ydCBHcmlkRGVtbyBmcm9tICcuL0dyaWREZW1vLmpzJztcclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYXBwJyk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuXHJcbkluZmVybm8ucmVuZGVyKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8R3JpZERlbW8gLz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogMzAgfX0+PC9kaXY+XHJcbiAgICAgICAgPExpc3REZW1vIC8+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDMwIH19PjwvZGl2PlxyXG4gICAgPC9kaXY+LFxyXG4gICAgY29udGFpbmVyXHJcbik7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9leGFtcGxlcy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=