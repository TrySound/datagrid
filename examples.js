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
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(31);
module.exports.default = module.exports;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const defaultMinWidth = 60;
/* harmony export (immutable) */ __webpack_exports__["e"] = defaultMinWidth;

const defaultBorder = '1px solid #d4d4d4';
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultBorder;

const defaultActiveBorder = '1px solid #000';
/* harmony export (immutable) */ __webpack_exports__["b"] = defaultActiveBorder;

const defaultHeaderBackground = 'linear-gradient(to top, #eeeeee, #ffffff)';
/* harmony export (immutable) */ __webpack_exports__["c"] = defaultHeaderBackground;


const headerZindex = 1;
/* harmony export (immutable) */ __webpack_exports__["f"] = headerZindex;

const pinnedZindex = 2;
/* harmony export (immutable) */ __webpack_exports__["d"] = pinnedZindex;

const resizeGhostZindex = 3;
/* harmony export (immutable) */ __webpack_exports__["g"] = resizeGhostZindex;



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(30);
module.exports.default = module.exports;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(32);
module.exports.default = module.exports;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__withMiddleState_js__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__withMiddleState_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__withProps_js__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__withProps_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__withPropsOnChange_js__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__withPropsOnChange_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__withScrollProps_js__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__withScrollProps_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__withPinnableColumns_js__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__withPinnableColumns_js__["a"]; });







/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__params_js__ = __webpack_require__(1);



const getRowStyle = index => ({
    display: 'flex',
    height: 'inherit',
    background: index % 2 === 0 ? '#fff' : '#f3f3f3'
});

const getColumnStyle = (column, index) => ({
    display: 'flex',
    alignItems: 'center',
    width: column.width,
    padding: '0 8px',
    boxSizing: 'border-box',
    borderLeft: index === 0 ? __WEBPACK_IMPORTED_MODULE_1__params_js__["a" /* defaultBorder */] : '',
    borderRight: __WEBPACK_IMPORTED_MODULE_1__params_js__["a" /* defaultBorder */]
});

const DefaultRow = ({ columns, datum, index }) => (
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: getRowStyle(index) }, 
        columns.map((item, columnIndex) =>
            __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: getColumnStyle(item, columnIndex) }, 
                __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: { overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' } }, 
                    datum[item.name]
                )
            )
        )
    )
);

/* harmony default export */ __webpack_exports__["a"] = DefaultRow;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__decorators_index_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_index_js__ = __webpack_require__(7);




const Container = ({ height, renderedTop, children }) => (
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: { position: 'relative', height } }, 
        __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: { position: 'absolute', left: 0, right: 0, top: renderedTop } }, 
            children
        )
    )
);

const RowWrapper = ({ height, datum, index, component: Row }) => (
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: { height } }, 
        __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( Row, { datum: datum, index: index })
    )
);

const shouldRowUpdate = (props, nextProps) => (
    props.height !== nextProps.height ||
    props.component !== nextProps.component ||
    props.datum !== nextProps.datum
);

const List = ({ data, rowHeight, component, start, end, keys }) => (
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( Container, { height: data.length * rowHeight, renderedTop: start * rowHeight }, 
        data.slice(start, end).map((datum, index) =>
            __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( RowWrapper, {
                onComponentShouldUpdate: shouldRowUpdate, key: keys[start + index], height: rowHeight, index: start + index, datum: datum, component: component })
        )
    )
);

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_index_js__["a" /* compose */])(
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__decorators_index_js__["b" /* withMiddleState */])((props, state = {}) => {
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
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__decorators_index_js__["c" /* withProps */])({
        onComponentShouldUpdate: (props, nextProps) => (
            props.start !== nextProps.start ||
            props.end !== nextProps.end ||
            props.data !== nextProps.data ||
            props.rowHeight !== nextProps.rowHeight ||
            props.component !== nextProps.component
        )
    })
)(List);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose_js__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__compose_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getKeysByIndex_js__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__getKeysByIndex_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getVisibleRows_js__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__getVisibleRows_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bisectColumns_js__ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__bisectColumns_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trimColumnWidth_js__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__trimColumnWidth_js__["a"]; });







/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__params_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actionCreators_js__ = __webpack_require__(9);





const getBorderLeft = (column, index, ghost) =>
    index === 0 || ghost ? (column.moveLeft ? __WEBPACK_IMPORTED_MODULE_2__params_js__["b" /* defaultActiveBorder */] : __WEBPACK_IMPORTED_MODULE_2__params_js__["a" /* defaultBorder */]) : '';

const getBorderRight = column =>
    column.moveRight ? __WEBPACK_IMPORTED_MODULE_2__params_js__["b" /* defaultActiveBorder */] : __WEBPACK_IMPORTED_MODULE_2__params_js__["a" /* defaultBorder */];

const getOpacity = ghost => ghost ? .8 : 1;

const getColumnStyle = (column, index, ghost) => ({
    height: 60,
    boxSizing: 'border-box',
    padding: '0 8px',
    overflow: 'hidden',
    borderTop: __WEBPACK_IMPORTED_MODULE_2__params_js__["a" /* defaultBorder */],
    borderBottom: __WEBPACK_IMPORTED_MODULE_2__params_js__["a" /* defaultBorder */],
    borderLeft: getBorderLeft(column, index, ghost),
    borderRight: getBorderRight(column, index, ghost),
    background: __WEBPACK_IMPORTED_MODULE_2__params_js__["c" /* defaultHeaderBackground */],
    opacity: getOpacity(ghost)
});

const getInputStyle = () => ({
    width: '100%',
    boxSizing: 'border-box',
    padding: '0 8px',
    border: 0,
    borderBottom: __WEBPACK_IMPORTED_MODULE_2__params_js__["a" /* defaultBorder */],
    marginBottom: 8
});

const onInput = (props, event) =>
    props.callback(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actionCreators_js__["a" /* filterColumn */])(props.column.name, event.target.value));

/* harmony default export */ __webpack_exports__["a"] = props => (
    __WEBPACK_IMPORTED_MODULE_1_inferno_create_element___default()( 'div', { style: getColumnStyle(props.column, props.index, props.ghost) }, 
        __WEBPACK_IMPORTED_MODULE_1_inferno_create_element___default()( 'div', { style: { display: 'flex', alignItems: 'center', height: 30, } }, 
            props.column.displayName || props.column.name
        ), 
        props.column.enableFiltering &&
            __WEBPACK_IMPORTED_MODULE_1_inferno_create_element___default()( 'input', { style: getInputStyle(), placeholder: props.column.placeholder, value: props.column.value, onInput: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno__["linkEvent"])(props, onInput) })
    )
);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const markMoveDest = (name, left, right) => ({
    type: 'MARK_MOVE_DEST',
    name,
    left,
    right
});
/* harmony export (immutable) */ __webpack_exports__["d"] = markMoveDest;


const moveColumn = (name, left, right) => ({
    type: 'MOVE_COLUMN',
    name,
    left,
    right
});
/* harmony export (immutable) */ __webpack_exports__["e"] = moveColumn;


const moveResizeGhost = (name, position) => ({
    type: 'MOVE_RESIZE_GHOST',
    name,
    position
});
/* harmony export (immutable) */ __webpack_exports__["b"] = moveResizeGhost;


const resizeColumn = (name, size) => ({
    type: 'RESIZE_COLUMN',
    name,
    size
});
/* harmony export (immutable) */ __webpack_exports__["c"] = resizeColumn;


const filterColumn = (name, value) => ({
    type: 'FILTER_COLUMN',
    name,
    value
});
/* harmony export (immutable) */ __webpack_exports__["a"] = filterColumn;


const sortColumn = name => ({
    type: 'SORT_COLUMN',
    name
});
/* unused harmony export sortColumn */



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component__ = __webpack_require__(2);
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inferno_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__decorators_index_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_js__ = __webpack_require__(22);





const TrackedGrid = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__decorators_index_js__["a" /* withScrollProps */])(__WEBPACK_IMPORTED_MODULE_3__index_js__["a" /* Grid */]);

const data = Array(100000).fill(0).map((item, i) => ({
    col11: `Pinned left ${i}`,
    col1: i,
    col2: `Title ${i}`,
    col21: `Pinned right ${i}`,
    col3: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
}));

const filterRowByColumns = (row, columns) =>
    columns
        .filter(column => column.value)
        .every(column => row[column.name].indexOf(column.value) !== -1);

const filterDataByColumns = (data, columns) =>
    data.filter(datum => filterRowByColumns(datum, columns));

class Viewport extends __WEBPACK_IMPORTED_MODULE_1_inferno_component___default.a {
    constructor() {
        super();

        this.state = {
            gridState: {
                columns: [
                    {
                        name: 'col1',
                        enableSorting: true
                    },
                    {
                        name: 'col11',
                        width: 120,
                        pinnedLeft: true
                    },
                    {
                        name: 'col2',
                        minWidth: 60,
                        enableFiltering: true,
                        width: 150,
                        resizing: true
                    },
                    {
                        name: 'col21',
                        width: 120,
                        pinnedRight: true
                    },
                    {
                        name: 'col3',
                        displayName: 'Column 3',
                        width: 200,
                        maxWidth: 300,
                        moving: true
                    }
                ]
            },
            data,
            originalData: data
        };

        this.callback = this.callback.bind(this);
    }

    callback(action) {
        console.log(action);
        switch (action.type) {
            case 'FILTER_COLUMN': {
                const gridState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__index_js__["b" /* reducer */])(this.state.gridState, action);
                this.setState({
                    gridState,
                    data: filterDataByColumns(this.state.originalData, gridState.columns)
                });
                break;
            }

            default:
                this.setState({
                    gridState: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__index_js__["b" /* reducer */])(this.state.gridState, action)
                });
                break;
        }
    }

    render({}, { gridState, data }) {
        return (
            __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', null, 
                __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'h2', null, "Grid example" ), 
                __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( TrackedGrid, {
                    viewportWidth: 600, viewportHeight: 360, headerHeight: 60, rowHeight: 30, data: data, headerColumnComponent: undefined, rowComponent: undefined, columns: gridState.columns, callback: this.callback })
            )
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Viewport;



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__decorators_index_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__List_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DefaultRow_js__ = __webpack_require__(5);





const TrackedList = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__decorators_index_js__["a" /* withScrollProps */])(__WEBPACK_IMPORTED_MODULE_2__List_js__["a" /* default */]);

const columns = [
    {
        name: 'col1',
        width: 100
    },
    {
        name: 'col2',
        width: 150
    },
    {
        name: 'col3',
        width: 200
    }
];

const data = Array(100000).fill(0).map((item, index) => ({
    col1: index,
    col2: `Title ${index}`,
    col3: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
}));

const Row = ({ datum, index }) => (
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( __WEBPACK_IMPORTED_MODULE_3__DefaultRow_js__["a" /* default */], { columns: columns, datum: datum, index: index })
);

/* harmony default export */ __webpack_exports__["a"] = () => (
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', null, 
        __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'h2', null, "List example" ), 
        __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( TrackedList, {
            viewportWidth: 600, viewportHeight: 360, rowHeight: 30, data: data, component: Row })
    )
);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__);



const minOffset = 3;

const onMouseDown = (props, downEvent) => {
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
};

const Draggable = props => (
    __WEBPACK_IMPORTED_MODULE_1_inferno_create_element___default()( 'div', { onMouseDown: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno__["linkEvent"])(props, onMouseDown), style: { position: 'relative' } }, 
        props.children
    )
);

/* harmony default export */ __webpack_exports__["a"] = Draggable;


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inferno_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ResizeGhost_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__List_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DefaultRow_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DefaultHeaderColumn_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__decorators_index_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_index_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actionCreators_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__params_js__ = __webpack_require__(1);












/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_index_js__["a" /* compose */])(
    __WEBPACK_IMPORTED_MODULE_7__decorators_index_js__["d" /* withPinnableColumns */],
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__decorators_index_js__["e" /* withPropsOnChange */])(
        ['columns'],
        ({ columns }) => ({
            columns: columns.map(column => Object.assign({}, column, {
                width: column.width || column.minWidth || __WEBPACK_IMPORTED_MODULE_10__params_js__["e" /* defaultMinWidth */]
            }))
        })
    ),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__decorators_index_js__["e" /* withPropsOnChange */])(
        ['columns'],
        ({ columns }) => ({
            tableWidth: columns.reduce((acc, item) => acc + item.width, 0)
        })
    ),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__decorators_index_js__["e" /* withPropsOnChange */])(
        ['callback', 'headerColumnComponent'],
        ({ callback, headerColumnComponent: HeaderColumn = __WEBPACK_IMPORTED_MODULE_6__DefaultHeaderColumn_js__["a" /* default */] }) => ({
            headerColumnComponent: ({ column, index, ghost }) => (
                __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( HeaderColumn, { column: column, index: index, ghost: ghost, callback: callback })
            )
        })
    ),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__decorators_index_js__["e" /* withPropsOnChange */])(
        ['columns', 'callback', 'rowComponent'],
        ({ columns,  callback, rowComponent: Row = __WEBPACK_IMPORTED_MODULE_5__DefaultRow_js__["a" /* default */] }) => ({
            rowComponent: ({ datum, index }) => (
                __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( Row, { columns: columns, datum: datum, index: index, callback: callback })
            )
        })
    )
)(class GridWrapper extends __WEBPACK_IMPORTED_MODULE_1_inferno_component___default.a {
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
            this.props.callback(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__actionCreators_js__["b" /* moveResizeGhost */])(name, ghostPosition));
        }
    }

    onResize(name, columnWidth) {
        this.setState({
            dragging: false,
            ghost: false
        });
        this.props.callback(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__actionCreators_js__["c" /* resizeColumn */])(name, columnWidth));
    }

    onMoving(name, left, right) {
        if (name !== this.state.movingName || left !== this.state.movingLeft || right !== this.state.movingRight) {
            this.setState({
                dragging: true,
                movingName: name,
                movingLeft: left,
                movingRight: right
            });
            this.props.callback(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__actionCreators_js__["d" /* markMoveDest */])(name, left, right));
        }
    }

    onMove(name, left, right) {
        this.setState({
            dragging: false,
            movingName: null,
            movingLeft: null,
            movingRight: null
        });
        this.props.callback(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__actionCreators_js__["e" /* moveColumn */])(name, left, right));
    }

    render(props, { dragging, ghost, ghostX }) {
        return (
            __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: {
                position: 'relative',
                flexShrink: 0,
                pointerEvents: dragging ? 'none' : '',
                userSelect: dragging ? 'none' : '',
                width: props.tableWidth
            } }, 
                Boolean(props.headerHeight) &&
                    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: { position: 'sticky', zIndex: __WEBPACK_IMPORTED_MODULE_10__params_js__["f" /* headerZindex */], top: 0, height: props.headerHeight } }, 
                        __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( __WEBPACK_IMPORTED_MODULE_2__Header_js__["a" /* default */], {
                            columns: props.columns, component: props.headerColumnComponent, onMove: this.onMove, onMoving: this.onMoving, onResize: this.onResize, onResizing: this.onResizing })
                    ), 
                __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( __WEBPACK_IMPORTED_MODULE_4__List_js__["a" /* default */], {
                    data: props.data, scrollTop: props.scrollTop - props.headerHeight, viewportHeight: props.viewportHeight - props.headerHeight, rowHeight: props.rowHeight, component: props.rowComponent }), 
                ghost && __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( __WEBPACK_IMPORTED_MODULE_3__ResizeGhost_js__["a" /* default */], { x: ghostX })
            )
        );
    }
});


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inferno_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Draggable_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_index_js__ = __webpack_require__(7);





const Resizer = () => (
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: {
        position: 'absolute',
        zIndex: 2,
        top: 0,
        bottom: 0,
        right: -3,
        width: 6,
        cursor: 'col-resize'
    } }
    )
);

const ColumnGhost = ({ x, children }) => (
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: { position: 'absolute', left: 0, top: 0, bottom: 0, transform: `translateX(${x}px)` } }, 
        children
    )
);

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
        return (
            __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( __WEBPACK_IMPORTED_MODULE_2__Draggable_js__["a" /* default */], {
                onStart: this.onStart, onDrag: this.onDrag, onEnd: this.onEnd }, 
                children, 
                this.props.column.resizing &&
                    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( Resizer, { onComponentDidMount: this.refResizer })
            )
        );
    }
}

const ColumnWrapper = ({ column, index, ghost, component: Column, callback }) => (
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: { width: column.width } }, 
        __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( Column, { column: column, index: index, ghost: ghost, callback: callback })
    )
);

const Header = ({ children }) => (
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: { display: 'flex', position: 'relative', height: 'inherit' } }, 
        children
    )
);

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
            this.props.onResizing(name, this.currentLeft + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_index_js__["d" /* trimColumnWidth */])(this.currentColumn, position));
        } else {
            const [leftIndex, rightIndex] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_index_js__["e" /* bisectColumns */])(this.props.columns, this.startMovingPosition + position);
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
            this.props.onResize(name, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_index_js__["d" /* trimColumnWidth */])(this.currentColumn, position));
        } else {
            const [leftIndex, rightIndex] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_index_js__["e" /* bisectColumns */])(this.props.columns, this.startMovingPosition + position);
            const leftName = leftIndex === -1 ? null : this.props.columns[leftIndex].name;
            const rightName = rightIndex === -1 ? null : this.props.columns[rightIndex].name;
            this.props.onMove(name, leftName, rightName);
        }
        this.setState({
            moving: false
        });
    }

    render({ columns, component, callback }, { moving, position }) {
        return (
            __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( Header, null, 
                columns.map((column, index) =>
                    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( DraggableColumn, {
                        key: column.name, column: column, onStart: this.onStart, onDrag: this.onDrag, onEnd: this.onEnd }, 
                        __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( ColumnWrapper, {
                            column: column, index: index, ghost: false, component: component, callback: callback })
                    )
                ), 
                moving &&
                    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( ColumnGhost, { x: position }, 
                        __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( ColumnWrapper, {
                            column: this.currentColumn, index: this.currentIndex, ghost: true, component: component })
                    )
            )
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HeaderWrapper;



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__params_js__ = __webpack_require__(1);



const ResizeGhost = ({ x }) => (
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: {
        position: 'absolute',
        zIndex: __WEBPACK_IMPORTED_MODULE_1__params_js__["g" /* resizeGhostZindex */],
        top: 0,
        bottom: 0,
        left: 0,
        borderLeft: '1px dotted #000',
        pointerEvents: 'none',
        transform: `translateX(${x}px)`
    } }
    )
);

/* harmony default export */ __webpack_exports__["a"] = ResizeGhost;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component__ = __webpack_require__(2);
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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__withPropsOnChange_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__params_js__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["a"] = BaseComponent => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__withPropsOnChange_js__["a" /* default */])(['columns'], ({ columns }) => ({
    leftColumns: columns.filter(column => column.pinnedLeft),
    centerColumns: columns.filter(column => !column.pinnedLeft && !column.pinnedRight),
    rightColumns: columns.filter(column => column.pinnedRight)
}))(props => (
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: { display: 'flex' } }, 
        props.leftColumns.length !== 0 &&
            __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: { position: 'sticky', zIndex: __WEBPACK_IMPORTED_MODULE_2__params_js__["d" /* pinnedZindex */], left: 0 } }, 
                __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(BaseComponent, Object.assign({}, props, { columns: props.leftColumns }))
            ), 
        __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(BaseComponent, Object.assign({}, props, { columns: props.centerColumns })), 
        props.rightColumns.length !== 0 &&
            __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: { position: 'sticky', zIndex: __WEBPACK_IMPORTED_MODULE_2__params_js__["d" /* pinnedZindex */], right: 0 } }, 
                __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(BaseComponent, Object.assign({}, props, { columns: props.rightColumns }))
            )
    )
));


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);


/* harmony default export */ __webpack_exports__["a"] = config => BaseComponent => props => __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(BaseComponent, Object.assign({}, props, config));


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inferno_component__);



/* harmony default export */ __webpack_exports__["a"] = BaseComponent => class extends __WEBPACK_IMPORTED_MODULE_1_inferno_component___default.a {
    constructor(props) {
        super(props);
        this.state = {
            scrollTop: 0,
            scrollLeft: 0
        };
        this.ref = element => this.setState({
            scrollTop: element.scrollTop,
            scrollLeft: element.scrollLeft
        });
        this.onScroll = e => this.setState({
            scrollTop: e.target.scrollTop,
            scrollLeft: e.target.scrollLeft
        });
    }

    render(props, { scrollTop, scrollLeft }) {
        return (
            __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()('div', {
                style: { width: props.viewportWidth, height: props.viewportHeight, overflow: 'auto' },
                ref: this.ref,
                onScroll: this.onScroll
            }, [
                __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(BaseComponent, Object.assign({}, props, {
                    scrollTop,
                    scrollLeft
                }))
            ])
        );
    }
};


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Grid_js__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Grid_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__List_js__ = __webpack_require__(6);
/* unused harmony reexport List */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DefaultHeaderColumn_js__ = __webpack_require__(8);
/* unused harmony reexport DefaultHeaderColumn */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DefaultRow_js__ = __webpack_require__(5);
/* unused harmony reexport DefaultRow */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers_index_js__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__reducers_index_js__["a"]; });







/***/ }),
/* 23 */
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
                const index
                    = action.left
                    ? columns.findIndex(item => item.name === action.left) + 1
                    : columns.findIndex(item => item.name === action.right);
                return [
                    ...columns.slice(0, index).filter(item => item.name !== action.name),
                    ...columns.filter(item => item.name === action.name),
                    ...columns.slice(index).filter(item => item.name !== action.name)
                ];
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

        default:
            return state;
    }
};


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__columns_js__ = __webpack_require__(23);


/* harmony default export */ __webpack_exports__["a"] = (state = {}, action) => ({
    columns: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__columns_js__["a" /* default */])(state.columns, action)
});


/***/ }),
/* 25 */
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
/* 26 */
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
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const empty = () => Object.create(null);

const invert = obj => Object.keys(obj).reduce((acc, key) => (acc[obj[key]] = key, acc), empty());

const createFreeKeyGenerator = (indexes) => {
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
/* 28 */
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
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__params_js__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = (column, width) =>
    Math.min(Math.max(column.minWidth || __WEBPACK_IMPORTED_MODULE_0__params_js__["e" /* defaultMinWidth */], width), column.maxWidth || Infinity);


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/*!
 * inferno-component v1.2.2
 * (c) 2017 Dominic Gannaway
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory(__webpack_require__(3)) :
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * inferno-create-element v1.2.2
 * (c) 2017 Dominic Gannaway
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory(__webpack_require__(3)) :
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
/* 32 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ListDemo_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GridDemo_js__ = __webpack_require__(12);





const container = document.createElement('div');
container.classList.add('app');
document.body.appendChild(container);

__WEBPACK_IMPORTED_MODULE_0_inferno___default.a.render(
    __WEBPACK_IMPORTED_MODULE_1_inferno_create_element___default()( 'div', { style: { display: 'flex', flexFlow: 'wrap' } }, 
        __WEBPACK_IMPORTED_MODULE_1_inferno_create_element___default()( __WEBPACK_IMPORTED_MODULE_2__ListDemo_js__["a" /* default */], null ), 
        __WEBPACK_IMPORTED_MODULE_1_inferno_create_element___default()( 'div', { style: { width: 30, flexShrink: 0 } }), 
        __WEBPACK_IMPORTED_MODULE_1_inferno_create_element___default()( __WEBPACK_IMPORTED_MODULE_3__GridDemo_js__["a" /* default */], null )
    ),
    container
);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODJlZDRmMjIzNGQyZjU2ZTQ4NWEiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vLWNyZWF0ZS1lbGVtZW50L2luZmVybm8tY3JlYXRlLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8tY29tcG9uZW50L2luZmVybm8tY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL34vaW5mZXJuby9pbmZlcm5vLmpzIiwid2VicGFjazovLy8uL3NyYy9kZWNvcmF0b3JzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9EZWZhdWx0Um93LmpzIiwid2VicGFjazovLy8uL3NyYy9MaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVmYXVsdEhlYWRlckNvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9uQ3JlYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlY29yYXRvcnMvd2l0aFByb3BzT25DaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGVzL0dyaWREZW1vLmpzIiwid2VicGFjazovLy8uL3NyYy9leGFtcGxlcy9MaXN0RGVtby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRHJhZ2dhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9HcmlkLmpzIiwid2VicGFjazovLy8uL3NyYy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc2l6ZUdob3N0LmpzIiwid2VicGFjazovLy8uL3NyYy9kZWNvcmF0b3JzL3dpdGhNaWRkbGVTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVjb3JhdG9ycy93aXRoUGlubmFibGVDb2x1bW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9kZWNvcmF0b3JzL3dpdGhQcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVjb3JhdG9ycy93aXRoU2Nyb2xsUHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9jb2x1bW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvYmlzZWN0Q29sdW1ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZ2V0S2V5c0J5SW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2dldFZpc2libGVSb3dzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy90cmltQ29sdW1uV2lkdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QvaW5mZXJuby1jb21wb25lbnQubm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC9pbmZlcm5vLWNyZWF0ZS1lbGVtZW50Lm5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QvaW5mZXJuby5ub2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9leGFtcGxlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUNuTGE7QUFDVDtBQUNlO0FBQ2I7O0FBRTVDLE1BQU0sV0FBVyxHQUFHLG9HQUFlLENBQUMsdURBQUksQ0FBQyxDQUFDOztBQUUxQyxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7Ozs7QUNuVEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxDQUFDLDRCQUE0Qjs7QUFFN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHlCQUF5QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxDQUFDOzs7Ozs7O0FDekpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQsQ0FBQyw0QkFBNEI7O0FBRTdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsc0JBQXNCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsa0JBQWtCLEVBQUU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLDBCQUEwQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0QywwQkFBMEIsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDJCQUEyQjtBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixxQkFBcUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsa0JBQWtCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHdCQUF3QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHdCQUF3QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixhQUFhO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixXQUFXO0FBQ3ZDO0FBQ0E7QUFDQSxvQ0FBb0MsV0FBVztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFdBQVc7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFdBQVc7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFFBQVE7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsUUFBUTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxxQ0FBcUMsRUFBRTtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbUJBQW1CLEVBQUU7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUdBQXVHO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhDQUE4QyxjQUFjOztBQUU1RCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdGlGNkI7QUFDcUI7QUFDZDtBQUNBOztBQUVyQyxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hELFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9CLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztBQUVyQywrQ0FBTyxDQUFDLE1BQU07SUFDVixnRUFBQyxJQUFHLEtBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFHLEVBQUM7UUFDL0MsZ0VBQUMsNkRBQVEsUUFBRztRQUNaLGdFQUFDLElBQUcsS0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUcsRUFBQyxDQUFNO1FBQ2hELGdFQUFDLDZEQUFRLFFBQUc7SUFDaEIsQ0FBTTtJQUNOLFNBQVM7Q0FDWixDQUFDIiwiZmlsZSI6ImV4YW1wbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDgyZWQ0ZjIyMzRkMmY1NmU0ODVhIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdpbmZlcm5vL2Rpc3QvaW5mZXJuby1jcmVhdGUtZWxlbWVudC5ub2RlJyk7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gbW9kdWxlLmV4cG9ydHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2luZmVybm8tY3JlYXRlLWVsZW1lbnQvaW5mZXJuby1jcmVhdGUtZWxlbWVudC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY29uc3QgZGVmYXVsdE1pbldpZHRoID0gNjA7XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0Qm9yZGVyID0gJzFweCBzb2xpZCAjZDRkNGQ0JztcclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRBY3RpdmVCb3JkZXIgPSAnMXB4IHNvbGlkICMwMDAnO1xyXG5leHBvcnQgY29uc3QgZGVmYXVsdEhlYWRlckJhY2tncm91bmQgPSAnbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2VlZWVlZSwgI2ZmZmZmZiknO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhlYWRlclppbmRleCA9IDE7XHJcbmV4cG9ydCBjb25zdCBwaW5uZWRaaW5kZXggPSAyO1xyXG5leHBvcnQgY29uc3QgcmVzaXplR2hvc3RaaW5kZXggPSAzO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFyYW1zLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdpbmZlcm5vL2Rpc3QvaW5mZXJuby1jb21wb25lbnQubm9kZScpO1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IG1vZHVsZS5leHBvcnRzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pbmZlcm5vLWNvbXBvbmVudC9pbmZlcm5vLWNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9pbmZlcm5vLm5vZGUnKTtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBtb2R1bGUuZXhwb3J0cztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5mZXJuby9pbmZlcm5vLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aE1pZGRsZVN0YXRlIH0gZnJvbSAnLi93aXRoTWlkZGxlU3RhdGUuanMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhQcm9wcyB9IGZyb20gJy4vd2l0aFByb3BzLmpzJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUHJvcHNPbkNoYW5nZSB9IGZyb20gJy4vd2l0aFByb3BzT25DaGFuZ2UuanMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhTY3JvbGxQcm9wcyB9IGZyb20gJy4vd2l0aFNjcm9sbFByb3BzLmpzJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUGlubmFibGVDb2x1bW5zIH0gZnJvbSAnLi93aXRoUGlubmFibGVDb2x1bW5zLmpzJztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlY29yYXRvcnMvaW5kZXguanMiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICdpbmZlcm5vLWNyZWF0ZS1lbGVtZW50JztcclxuaW1wb3J0IHsgZGVmYXVsdEJvcmRlciB9IGZyb20gJy4vcGFyYW1zLmpzJztcclxuXHJcbmNvbnN0IGdldFJvd1N0eWxlID0gaW5kZXggPT4gKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGhlaWdodDogJ2luaGVyaXQnLFxyXG4gICAgYmFja2dyb3VuZDogaW5kZXggJSAyID09PSAwID8gJyNmZmYnIDogJyNmM2YzZjMnXHJcbn0pO1xyXG5cclxuY29uc3QgZ2V0Q29sdW1uU3R5bGUgPSAoY29sdW1uLCBpbmRleCkgPT4gKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgd2lkdGg6IGNvbHVtbi53aWR0aCxcclxuICAgIHBhZGRpbmc6ICcwIDhweCcsXHJcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgIGJvcmRlckxlZnQ6IGluZGV4ID09PSAwID8gZGVmYXVsdEJvcmRlciA6ICcnLFxyXG4gICAgYm9yZGVyUmlnaHQ6IGRlZmF1bHRCb3JkZXJcclxufSk7XHJcblxyXG5jb25zdCBEZWZhdWx0Um93ID0gKHsgY29sdW1ucywgZGF0dW0sIGluZGV4IH0pID0+IChcclxuICAgIDxkaXYgc3R5bGU9e2dldFJvd1N0eWxlKGluZGV4KX0+XHJcbiAgICAgICAge2NvbHVtbnMubWFwKChpdGVtLCBjb2x1bW5JbmRleCkgPT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17Z2V0Q29sdW1uU3R5bGUoaXRlbSwgY29sdW1uSW5kZXgpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgb3ZlcmZsb3c6ICdoaWRkZW4nLCB3aGl0ZVNwYWNlOiAnbm93cmFwJywgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXR1bVtpdGVtLm5hbWVdfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlZmF1bHRSb3c7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9EZWZhdWx0Um93LmpzIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnaW5mZXJuby1jcmVhdGUtZWxlbWVudCc7XHJcbmltcG9ydCB7IHdpdGhNaWRkbGVTdGF0ZSwgd2l0aFByb3BzIH0gZnJvbSAnLi9kZWNvcmF0b3JzL2luZGV4LmpzJztcclxuaW1wb3J0IHsgY29tcG9zZSwgZ2V0VmlzaWJsZVJvd3MsIGdldEtleXNCeUluZGV4IH0gZnJvbSAnLi91dGlscy9pbmRleC5qcyc7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSAoeyBoZWlnaHQsIHJlbmRlcmVkVG9wLCBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBoZWlnaHQgfX0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogMCwgcmlnaHQ6IDAsIHRvcDogcmVuZGVyZWRUb3AgfX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3QgUm93V3JhcHBlciA9ICh7IGhlaWdodCwgZGF0dW0sIGluZGV4LCBjb21wb25lbnQ6IFJvdyB9KSA9PiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodCB9fT5cclxuICAgICAgICA8Um93IGRhdHVtPXtkYXR1bX0gaW5kZXg9e2luZGV4fSAvPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBzaG91bGRSb3dVcGRhdGUgPSAocHJvcHMsIG5leHRQcm9wcykgPT4gKFxyXG4gICAgcHJvcHMuaGVpZ2h0ICE9PSBuZXh0UHJvcHMuaGVpZ2h0IHx8XHJcbiAgICBwcm9wcy5jb21wb25lbnQgIT09IG5leHRQcm9wcy5jb21wb25lbnQgfHxcclxuICAgIHByb3BzLmRhdHVtICE9PSBuZXh0UHJvcHMuZGF0dW1cclxuKTtcclxuXHJcbmNvbnN0IExpc3QgPSAoeyBkYXRhLCByb3dIZWlnaHQsIGNvbXBvbmVudCwgc3RhcnQsIGVuZCwga2V5cyB9KSA9PiAoXHJcbiAgICA8Q29udGFpbmVyIGhlaWdodD17ZGF0YS5sZW5ndGggKiByb3dIZWlnaHR9IHJlbmRlcmVkVG9wPXtzdGFydCAqIHJvd0hlaWdodH0+XHJcbiAgICAgICAge2RhdGEuc2xpY2Uoc3RhcnQsIGVuZCkubWFwKChkYXR1bSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgIDxSb3dXcmFwcGVyXHJcbiAgICAgICAgICAgICAgICBvbkNvbXBvbmVudFNob3VsZFVwZGF0ZT17c2hvdWxkUm93VXBkYXRlfVxyXG4gICAgICAgICAgICAgICAga2V5PXtrZXlzW3N0YXJ0ICsgaW5kZXhdfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtyb3dIZWlnaHR9XHJcbiAgICAgICAgICAgICAgICBpbmRleD17c3RhcnQgKyBpbmRleH1cclxuICAgICAgICAgICAgICAgIGRhdHVtPXtkYXR1bX1cclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Y29tcG9uZW50fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXHJcbiAgICB3aXRoTWlkZGxlU3RhdGUoKHByb3BzLCBzdGF0ZSA9IHt9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgW3N0YXJ0LCBlbmRdID0gZ2V0VmlzaWJsZVJvd3Moe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6IHByb3BzLnNjcm9sbFRvcCxcclxuICAgICAgICAgICAgdmlld3BvcnRIZWlnaHQ6IHByb3BzLnZpZXdwb3J0SGVpZ2h0LFxyXG4gICAgICAgICAgICByb3dIZWlnaHQ6IHByb3BzLnJvd0hlaWdodCxcclxuICAgICAgICAgICAgcm93c0NvdW50OiBwcm9wcy5kYXRhLmxlbmd0aFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0YXJ0LFxyXG4gICAgICAgICAgICBlbmQsXHJcbiAgICAgICAgICAgIGtleXM6IGdldEtleXNCeUluZGV4KHN0YXRlLmtleXMsIHN0YXJ0LCBlbmQpXHJcbiAgICAgICAgfTtcclxuICAgIH0pLFxyXG4gICAgd2l0aFByb3BzKHtcclxuICAgICAgICBvbkNvbXBvbmVudFNob3VsZFVwZGF0ZTogKHByb3BzLCBuZXh0UHJvcHMpID0+IChcclxuICAgICAgICAgICAgcHJvcHMuc3RhcnQgIT09IG5leHRQcm9wcy5zdGFydCB8fFxyXG4gICAgICAgICAgICBwcm9wcy5lbmQgIT09IG5leHRQcm9wcy5lbmQgfHxcclxuICAgICAgICAgICAgcHJvcHMuZGF0YSAhPT0gbmV4dFByb3BzLmRhdGEgfHxcclxuICAgICAgICAgICAgcHJvcHMucm93SGVpZ2h0ICE9PSBuZXh0UHJvcHMucm93SGVpZ2h0IHx8XHJcbiAgICAgICAgICAgIHByb3BzLmNvbXBvbmVudCAhPT0gbmV4dFByb3BzLmNvbXBvbmVudFxyXG4gICAgICAgIClcclxuICAgIH0pXHJcbikoTGlzdCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MaXN0LmpzIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21wb3NlIH0gZnJvbSAnLi9jb21wb3NlLmpzJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBnZXRLZXlzQnlJbmRleCB9IGZyb20gJy4vZ2V0S2V5c0J5SW5kZXguanMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGdldFZpc2libGVSb3dzIH0gZnJvbSAnLi9nZXRWaXNpYmxlUm93cy5qcyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYmlzZWN0Q29sdW1ucyB9IGZyb20gJy4vYmlzZWN0Q29sdW1ucy5qcyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdHJpbUNvbHVtbldpZHRoIH0gZnJvbSAnLi90cmltQ29sdW1uV2lkdGguanMnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvaW5kZXguanMiLCJpbXBvcnQgeyBsaW5rRXZlbnQgfSBmcm9tICdpbmZlcm5vJztcclxuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnaW5mZXJuby1jcmVhdGUtZWxlbWVudCc7XHJcbmltcG9ydCB7IGRlZmF1bHRCb3JkZXIsIGRlZmF1bHRBY3RpdmVCb3JkZXIsIGRlZmF1bHRIZWFkZXJCYWNrZ3JvdW5kIH0gZnJvbSAnLi9wYXJhbXMuanMnO1xyXG5pbXBvcnQgeyBmaWx0ZXJDb2x1bW4gfSBmcm9tICcuL2FjdGlvbkNyZWF0b3JzLmpzJztcclxuXHJcbmNvbnN0IGdldEJvcmRlckxlZnQgPSAoY29sdW1uLCBpbmRleCwgZ2hvc3QpID0+XHJcbiAgICBpbmRleCA9PT0gMCB8fCBnaG9zdCA/IChjb2x1bW4ubW92ZUxlZnQgPyBkZWZhdWx0QWN0aXZlQm9yZGVyIDogZGVmYXVsdEJvcmRlcikgOiAnJztcclxuXHJcbmNvbnN0IGdldEJvcmRlclJpZ2h0ID0gY29sdW1uID0+XHJcbiAgICBjb2x1bW4ubW92ZVJpZ2h0ID8gZGVmYXVsdEFjdGl2ZUJvcmRlciA6IGRlZmF1bHRCb3JkZXI7XHJcblxyXG5jb25zdCBnZXRPcGFjaXR5ID0gZ2hvc3QgPT4gZ2hvc3QgPyAuOCA6IDE7XHJcblxyXG5jb25zdCBnZXRDb2x1bW5TdHlsZSA9IChjb2x1bW4sIGluZGV4LCBnaG9zdCkgPT4gKHtcclxuICAgIGhlaWdodDogNjAsXHJcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgIHBhZGRpbmc6ICcwIDhweCcsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICBib3JkZXJUb3A6IGRlZmF1bHRCb3JkZXIsXHJcbiAgICBib3JkZXJCb3R0b206IGRlZmF1bHRCb3JkZXIsXHJcbiAgICBib3JkZXJMZWZ0OiBnZXRCb3JkZXJMZWZ0KGNvbHVtbiwgaW5kZXgsIGdob3N0KSxcclxuICAgIGJvcmRlclJpZ2h0OiBnZXRCb3JkZXJSaWdodChjb2x1bW4sIGluZGV4LCBnaG9zdCksXHJcbiAgICBiYWNrZ3JvdW5kOiBkZWZhdWx0SGVhZGVyQmFja2dyb3VuZCxcclxuICAgIG9wYWNpdHk6IGdldE9wYWNpdHkoZ2hvc3QpXHJcbn0pO1xyXG5cclxuY29uc3QgZ2V0SW5wdXRTdHlsZSA9ICgpID0+ICh7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICBwYWRkaW5nOiAnMCA4cHgnLFxyXG4gICAgYm9yZGVyOiAwLFxyXG4gICAgYm9yZGVyQm90dG9tOiBkZWZhdWx0Qm9yZGVyLFxyXG4gICAgbWFyZ2luQm90dG9tOiA4XHJcbn0pO1xyXG5cclxuY29uc3Qgb25JbnB1dCA9IChwcm9wcywgZXZlbnQpID0+XHJcbiAgICBwcm9wcy5jYWxsYmFjayhmaWx0ZXJDb2x1bW4ocHJvcHMuY29sdW1uLm5hbWUsIGV2ZW50LnRhcmdldC52YWx1ZSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvcHMgPT4gKFxyXG4gICAgPGRpdiBzdHlsZT17Z2V0Q29sdW1uU3R5bGUocHJvcHMuY29sdW1uLCBwcm9wcy5pbmRleCwgcHJvcHMuZ2hvc3QpfT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGhlaWdodDogMzAsIH19PlxyXG4gICAgICAgICAgICB7cHJvcHMuY29sdW1uLmRpc3BsYXlOYW1lIHx8IHByb3BzLmNvbHVtbi5uYW1lfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtwcm9wcy5jb2x1bW4uZW5hYmxlRmlsdGVyaW5nICYmXHJcbiAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17Z2V0SW5wdXRTdHlsZSgpfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLmNvbHVtbi5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5jb2x1bW4udmFsdWV9XHJcbiAgICAgICAgICAgICAgICBvbklucHV0PXtsaW5rRXZlbnQocHJvcHMsIG9uSW5wdXQpfSAvPlxyXG4gICAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRGVmYXVsdEhlYWRlckNvbHVtbi5qcyIsImV4cG9ydCBjb25zdCBtYXJrTW92ZURlc3QgPSAobmFtZSwgbGVmdCwgcmlnaHQpID0+ICh7XHJcbiAgICB0eXBlOiAnTUFSS19NT1ZFX0RFU1QnLFxyXG4gICAgbmFtZSxcclxuICAgIGxlZnQsXHJcbiAgICByaWdodFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBtb3ZlQ29sdW1uID0gKG5hbWUsIGxlZnQsIHJpZ2h0KSA9PiAoe1xyXG4gICAgdHlwZTogJ01PVkVfQ09MVU1OJyxcclxuICAgIG5hbWUsXHJcbiAgICBsZWZ0LFxyXG4gICAgcmlnaHRcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbW92ZVJlc2l6ZUdob3N0ID0gKG5hbWUsIHBvc2l0aW9uKSA9PiAoe1xyXG4gICAgdHlwZTogJ01PVkVfUkVTSVpFX0dIT1NUJyxcclxuICAgIG5hbWUsXHJcbiAgICBwb3NpdGlvblxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCByZXNpemVDb2x1bW4gPSAobmFtZSwgc2l6ZSkgPT4gKHtcclxuICAgIHR5cGU6ICdSRVNJWkVfQ09MVU1OJyxcclxuICAgIG5hbWUsXHJcbiAgICBzaXplXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZpbHRlckNvbHVtbiA9IChuYW1lLCB2YWx1ZSkgPT4gKHtcclxuICAgIHR5cGU6ICdGSUxURVJfQ09MVU1OJyxcclxuICAgIG5hbWUsXHJcbiAgICB2YWx1ZVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzb3J0Q29sdW1uID0gbmFtZSA9PiAoe1xyXG4gICAgdHlwZTogJ1NPUlRfQ09MVU1OJyxcclxuICAgIG5hbWVcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hY3Rpb25DcmVhdG9ycy5qcyIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJ2luZmVybm8tY3JlYXRlLWVsZW1lbnQnO1xyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ2luZmVybm8tY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChtYXBwZWRLZXlzLCBtYXBQcm9wcykgPT4gQmFzZUNvbXBvbmVudCA9PiBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gbWFwUHJvcHMocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgaWYgKG1hcHBlZEtleXMuc29tZShrZXkgPT4gdGhpcy5wcm9wc1trZXldICE9PSBuZXh0UHJvcHNba2V5XSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShtYXBQcm9wcyhuZXh0UHJvcHMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHByb3BzLCBzdGF0ZSkge1xyXG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KEJhc2VDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCBzdGF0ZSkpO1xyXG4gICAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGVjb3JhdG9ycy93aXRoUHJvcHNPbkNoYW5nZS5qcyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICdpbmZlcm5vLWNyZWF0ZS1lbGVtZW50JztcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tICdpbmZlcm5vLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHdpdGhTY3JvbGxQcm9wcyB9IGZyb20gJy4uL2RlY29yYXRvcnMvaW5kZXguanMnO1xyXG5pbXBvcnQgeyBHcmlkLCByZWR1Y2VyIH0gZnJvbSAnLi4vaW5kZXguanMnO1xyXG5cclxuY29uc3QgVHJhY2tlZEdyaWQgPSB3aXRoU2Nyb2xsUHJvcHMoR3JpZCk7XHJcblxyXG5jb25zdCBkYXRhID0gQXJyYXkoMTAwMDAwKS5maWxsKDApLm1hcCgoaXRlbSwgaSkgPT4gKHtcclxuICAgIGNvbDExOiBgUGlubmVkIGxlZnQgJHtpfWAsXHJcbiAgICBjb2wxOiBpLFxyXG4gICAgY29sMjogYFRpdGxlICR7aX1gLFxyXG4gICAgY29sMjE6IGBQaW5uZWQgcmlnaHQgJHtpfWAsXHJcbiAgICBjb2wzOiAnTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4nXHJcbn0pKTtcclxuXHJcbmNvbnN0IGZpbHRlclJvd0J5Q29sdW1ucyA9IChyb3csIGNvbHVtbnMpID0+XHJcbiAgICBjb2x1bW5zXHJcbiAgICAgICAgLmZpbHRlcihjb2x1bW4gPT4gY29sdW1uLnZhbHVlKVxyXG4gICAgICAgIC5ldmVyeShjb2x1bW4gPT4gcm93W2NvbHVtbi5uYW1lXS5pbmRleE9mKGNvbHVtbi52YWx1ZSkgIT09IC0xKTtcclxuXHJcbmNvbnN0IGZpbHRlckRhdGFCeUNvbHVtbnMgPSAoZGF0YSwgY29sdW1ucykgPT5cclxuICAgIGRhdGEuZmlsdGVyKGRhdHVtID0+IGZpbHRlclJvd0J5Q29sdW1ucyhkYXR1bSwgY29sdW1ucykpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld3BvcnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZ3JpZFN0YXRlOiB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY29sMScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZVNvcnRpbmc6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NvbDExJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGlubmVkTGVmdDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY29sMicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiA2MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlRmlsdGVyaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNpemluZzogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY29sMjEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaW5uZWRSaWdodDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY29sMycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnQ29sdW1uIDMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3Zpbmc6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgIG9yaWdpbmFsRGF0YTogZGF0YVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSB0aGlzLmNhbGxiYWNrLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbGJhY2soYWN0aW9uKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ0ZJTFRFUl9DT0xVTU4nOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBncmlkU3RhdGUgPSByZWR1Y2VyKHRoaXMuc3RhdGUuZ3JpZFN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGZpbHRlckRhdGFCeUNvbHVtbnModGhpcy5zdGF0ZS5vcmlnaW5hbERhdGEsIGdyaWRTdGF0ZS5jb2x1bW5zKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRTdGF0ZTogcmVkdWNlcih0aGlzLnN0YXRlLmdyaWRTdGF0ZSwgYWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHt9LCB7IGdyaWRTdGF0ZSwgZGF0YSB9KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMj5HcmlkIGV4YW1wbGU8L2gyPlxyXG4gICAgICAgICAgICAgICAgPFRyYWNrZWRHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld3BvcnRXaWR0aD17NjAwfVxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdwb3J0SGVpZ2h0PXszNjB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVySGVpZ2h0PXs2MH1cclxuICAgICAgICAgICAgICAgICAgICByb3dIZWlnaHQ9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyQ29sdW1uQ29tcG9uZW50PXt1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgcm93Q29tcG9uZW50PXt1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Z3JpZFN0YXRlLmNvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s9e3RoaXMuY2FsbGJhY2t9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9leGFtcGxlcy9HcmlkRGVtby5qcyIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJ2luZmVybm8tY3JlYXRlLWVsZW1lbnQnO1xyXG5pbXBvcnQgeyB3aXRoU2Nyb2xsUHJvcHMgfSBmcm9tICcuLi9kZWNvcmF0b3JzL2luZGV4LmpzJztcclxuaW1wb3J0IExpc3QgZnJvbSAnLi4vTGlzdC5qcyc7XHJcbmltcG9ydCBEZWZhdWx0Um93IGZyb20gJy4uL0RlZmF1bHRSb3cuanMnO1xyXG5cclxuY29uc3QgVHJhY2tlZExpc3QgPSB3aXRoU2Nyb2xsUHJvcHMoTGlzdCk7XHJcblxyXG5jb25zdCBjb2x1bW5zID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdjb2wxJyxcclxuICAgICAgICB3aWR0aDogMTAwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdjb2wyJyxcclxuICAgICAgICB3aWR0aDogMTUwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdjb2wzJyxcclxuICAgICAgICB3aWR0aDogMjAwXHJcbiAgICB9XHJcbl07XHJcblxyXG5jb25zdCBkYXRhID0gQXJyYXkoMTAwMDAwKS5maWxsKDApLm1hcCgoaXRlbSwgaW5kZXgpID0+ICh7XHJcbiAgICBjb2wxOiBpbmRleCxcclxuICAgIGNvbDI6IGBUaXRsZSAke2luZGV4fWAsXHJcbiAgICBjb2wzOiAnTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4nXHJcbn0pKTtcclxuXHJcbmNvbnN0IFJvdyA9ICh7IGRhdHVtLCBpbmRleCB9KSA9PiAoXHJcbiAgICA8RGVmYXVsdFJvdyBjb2x1bW5zPXtjb2x1bW5zfSBkYXR1bT17ZGF0dW19IGluZGV4PXtpbmRleH0gLz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgyPkxpc3QgZXhhbXBsZTwvaDI+XHJcbiAgICAgICAgPFRyYWNrZWRMaXN0XHJcbiAgICAgICAgICAgIHZpZXdwb3J0V2lkdGg9ezYwMH1cclxuICAgICAgICAgICAgdmlld3BvcnRIZWlnaHQ9ezM2MH1cclxuICAgICAgICAgICAgcm93SGVpZ2h0PXszMH1cclxuICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgY29tcG9uZW50PXtSb3d9XHJcbiAgICAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2V4YW1wbGVzL0xpc3REZW1vLmpzIiwiaW1wb3J0IHsgbGlua0V2ZW50IH0gZnJvbSAnaW5mZXJubyc7XHJcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJ2luZmVybm8tY3JlYXRlLWVsZW1lbnQnO1xyXG5cclxuY29uc3QgbWluT2Zmc2V0ID0gMztcclxuXHJcbmNvbnN0IG9uTW91c2VEb3duID0gKHByb3BzLCBkb3duRXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGVsZW1lbnRYID0gZG93bkV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgIGNvbnN0IHN0YXJ0ID0gZG93bkV2ZW50LmNsaWVudFggLSBlbGVtZW50WDtcclxuICAgIGxldCBtb3ZlZCA9IGZhbHNlO1xyXG4gICAgY29uc3Qgb25Nb3VzZU1vdmUgPSBtb3ZlRXZlbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IG1vdmVFdmVudC5jbGllbnRYIC0gZWxlbWVudFg7XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKHBvcyAtIHN0YXJ0KSA+IG1pbk9mZnNldCB8fCBtb3ZlZCkge1xyXG4gICAgICAgICAgICBtb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHByb3BzLm9uRHJhZyhtb3ZlRXZlbnQsIHBvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IG9uTW91c2VVcCA9IHVwRXZlbnQgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuICAgICAgICBjb25zdCBwb3MgPSB1cEV2ZW50LmNsaWVudFggLSBlbGVtZW50WDtcclxuICAgICAgICBpZiAoTWF0aC5hYnMocG9zIC0gc3RhcnQpID4gbWluT2Zmc2V0IHx8IG1vdmVkKSB7XHJcbiAgICAgICAgICAgIHByb3BzLm9uRW5kKHVwRXZlbnQsIHVwRXZlbnQuY2xpZW50WCAtIGVsZW1lbnRYKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcHJvcHMub25TdGFydChkb3duRXZlbnQsIHN0YXJ0KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG59O1xyXG5cclxuY29uc3QgRHJhZ2dhYmxlID0gcHJvcHMgPT4gKFxyXG4gICAgPGRpdiBvbk1vdXNlRG93bj17bGlua0V2ZW50KHByb3BzLCBvbk1vdXNlRG93bil9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJhZ2dhYmxlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRHJhZ2dhYmxlLmpzIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnaW5mZXJuby1jcmVhdGUtZWxlbWVudCc7XHJcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnaW5mZXJuby1jb21wb25lbnQnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyLmpzJztcclxuaW1wb3J0IFJlc2l6ZUdob3N0IGZyb20gJy4vUmVzaXplR2hvc3QuanMnO1xyXG5pbXBvcnQgTGlzdCBmcm9tICcuL0xpc3QuanMnO1xyXG5pbXBvcnQgRGVmYXVsdFJvdyBmcm9tICcuL0RlZmF1bHRSb3cuanMnO1xyXG5pbXBvcnQgRGVmYXVsdEhlYWRlckNvbHVtbiBmcm9tICcuL0RlZmF1bHRIZWFkZXJDb2x1bW4uanMnO1xyXG5pbXBvcnQgeyB3aXRoUHJvcHNPbkNoYW5nZSwgd2l0aFBpbm5hYmxlQ29sdW1ucyB9IGZyb20gJy4vZGVjb3JhdG9ycy9pbmRleC5qcyc7XHJcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICcuL3V0aWxzL2luZGV4LmpzJztcclxuaW1wb3J0IHsgbWFya01vdmVEZXN0LCBtb3ZlQ29sdW1uLCBtb3ZlUmVzaXplR2hvc3QsIHJlc2l6ZUNvbHVtbiB9IGZyb20gJy4vYWN0aW9uQ3JlYXRvcnMuanMnO1xyXG5pbXBvcnQgeyBoZWFkZXJaaW5kZXgsIGRlZmF1bHRNaW5XaWR0aCB9IGZyb20gJy4vcGFyYW1zLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXHJcbiAgICB3aXRoUGlubmFibGVDb2x1bW5zLFxyXG4gICAgd2l0aFByb3BzT25DaGFuZ2UoXHJcbiAgICAgICAgWydjb2x1bW5zJ10sXHJcbiAgICAgICAgKHsgY29sdW1ucyB9KSA9PiAoe1xyXG4gICAgICAgICAgICBjb2x1bW5zOiBjb2x1bW5zLm1hcChjb2x1bW4gPT4gT2JqZWN0LmFzc2lnbih7fSwgY29sdW1uLCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogY29sdW1uLndpZHRoIHx8IGNvbHVtbi5taW5XaWR0aCB8fCBkZWZhdWx0TWluV2lkdGhcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfSlcclxuICAgICksXHJcbiAgICB3aXRoUHJvcHNPbkNoYW5nZShcclxuICAgICAgICBbJ2NvbHVtbnMnXSxcclxuICAgICAgICAoeyBjb2x1bW5zIH0pID0+ICh7XHJcbiAgICAgICAgICAgIHRhYmxlV2lkdGg6IGNvbHVtbnMucmVkdWNlKChhY2MsIGl0ZW0pID0+IGFjYyArIGl0ZW0ud2lkdGgsIDApXHJcbiAgICAgICAgfSlcclxuICAgICksXHJcbiAgICB3aXRoUHJvcHNPbkNoYW5nZShcclxuICAgICAgICBbJ2NhbGxiYWNrJywgJ2hlYWRlckNvbHVtbkNvbXBvbmVudCddLFxyXG4gICAgICAgICh7IGNhbGxiYWNrLCBoZWFkZXJDb2x1bW5Db21wb25lbnQ6IEhlYWRlckNvbHVtbiA9IERlZmF1bHRIZWFkZXJDb2x1bW4gfSkgPT4gKHtcclxuICAgICAgICAgICAgaGVhZGVyQ29sdW1uQ29tcG9uZW50OiAoeyBjb2x1bW4sIGluZGV4LCBnaG9zdCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyQ29sdW1uIGNvbHVtbj17Y29sdW1ufSBpbmRleD17aW5kZXh9IGdob3N0PXtnaG9zdH0gY2FsbGJhY2s9e2NhbGxiYWNrfSAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuICAgICksXHJcbiAgICB3aXRoUHJvcHNPbkNoYW5nZShcclxuICAgICAgICBbJ2NvbHVtbnMnLCAnY2FsbGJhY2snLCAncm93Q29tcG9uZW50J10sXHJcbiAgICAgICAgKHsgY29sdW1ucywgIGNhbGxiYWNrLCByb3dDb21wb25lbnQ6IFJvdyA9IERlZmF1bHRSb3cgfSkgPT4gKHtcclxuICAgICAgICAgICAgcm93Q29tcG9uZW50OiAoeyBkYXR1bSwgaW5kZXggfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFJvdyBjb2x1bW5zPXtjb2x1bW5zfSBkYXR1bT17ZGF0dW19IGluZGV4PXtpbmRleH0gY2FsbGJhY2s9e2NhbGxiYWNrfSAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuICAgIClcclxuKShjbGFzcyBHcmlkV3JhcHBlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBkcmFnZ2luZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGdob3N0OiBmYWxzZSxcclxuICAgICAgICAgICAgZ2hvc3RYOiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9uUmVzaXppbmcgPSB0aGlzLm9uUmVzaXppbmcuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uUmVzaXplID0gdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25Nb3ZpbmcgPSB0aGlzLm9uTW92aW5nLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbk1vdmUgPSB0aGlzLm9uTW92ZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVzaXppbmcobmFtZSwgZ2hvc3RQb3NpdGlvbikge1xyXG4gICAgICAgIGlmIChuYW1lICE9PSB0aGlzLnN0YXRlLnJlc2l6aW5nTmFtZSB8fCBnaG9zdFBvc2l0aW9uICE9PSB0aGlzLnN0YXRlLmdob3N0WCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGRyYWdnaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZ2hvc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICByZXNpemluZ05hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICBnaG9zdFg6IGdob3N0UG9zaXRpb25cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2FsbGJhY2sobW92ZVJlc2l6ZUdob3N0KG5hbWUsIGdob3N0UG9zaXRpb24pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25SZXNpemUobmFtZSwgY29sdW1uV2lkdGgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBnaG9zdDogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnByb3BzLmNhbGxiYWNrKHJlc2l6ZUNvbHVtbihuYW1lLCBjb2x1bW5XaWR0aCkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW92aW5nKG5hbWUsIGxlZnQsIHJpZ2h0KSB7XHJcbiAgICAgICAgaWYgKG5hbWUgIT09IHRoaXMuc3RhdGUubW92aW5nTmFtZSB8fCBsZWZ0ICE9PSB0aGlzLnN0YXRlLm1vdmluZ0xlZnQgfHwgcmlnaHQgIT09IHRoaXMuc3RhdGUubW92aW5nUmlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkcmFnZ2luZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1vdmluZ05hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICBtb3ZpbmdMZWZ0OiBsZWZ0LFxyXG4gICAgICAgICAgICAgICAgbW92aW5nUmlnaHQ6IHJpZ2h0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNhbGxiYWNrKG1hcmtNb3ZlRGVzdChuYW1lLCBsZWZ0LCByaWdodCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbk1vdmUobmFtZSwgbGVmdCwgcmlnaHQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBtb3ZpbmdOYW1lOiBudWxsLFxyXG4gICAgICAgICAgICBtb3ZpbmdMZWZ0OiBudWxsLFxyXG4gICAgICAgICAgICBtb3ZpbmdSaWdodDogbnVsbFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucHJvcHMuY2FsbGJhY2sobW92ZUNvbHVtbihuYW1lLCBsZWZ0LCByaWdodCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihwcm9wcywgeyBkcmFnZ2luZywgZ2hvc3QsIGdob3N0WCB9KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgICAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogZHJhZ2dpbmcgPyAnbm9uZScgOiAnJyxcclxuICAgICAgICAgICAgICAgIHVzZXJTZWxlY3Q6IGRyYWdnaW5nID8gJ25vbmUnIDogJycsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogcHJvcHMudGFibGVXaWR0aFxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIHtCb29sZWFuKHByb3BzLmhlYWRlckhlaWdodCkgJiZcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnc3RpY2t5JywgekluZGV4OiBoZWFkZXJaaW5kZXgsIHRvcDogMCwgaGVpZ2h0OiBwcm9wcy5oZWFkZXJIZWlnaHQgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e3Byb3BzLmNvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e3Byb3BzLmhlYWRlckNvbHVtbkNvbXBvbmVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW92ZT17dGhpcy5vbk1vdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdmluZz17dGhpcy5vbk1vdmluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVzaXplPXt0aGlzLm9uUmVzaXplfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZXNpemluZz17dGhpcy5vblJlc2l6aW5nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtwcm9wcy5kYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcD17cHJvcHMuc2Nyb2xsVG9wIC0gcHJvcHMuaGVhZGVySGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdwb3J0SGVpZ2h0PXtwcm9wcy52aWV3cG9ydEhlaWdodCAtIHByb3BzLmhlYWRlckhlaWdodH1cclxuICAgICAgICAgICAgICAgICAgICByb3dIZWlnaHQ9e3Byb3BzLnJvd0hlaWdodH1cclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e3Byb3BzLnJvd0NvbXBvbmVudH0gLz5cclxuICAgICAgICAgICAgICAgIHtnaG9zdCAmJiA8UmVzaXplR2hvc3QgeD17Z2hvc3RYfSAvPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9HcmlkLmpzIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnaW5mZXJuby1jcmVhdGUtZWxlbWVudCc7XHJcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnaW5mZXJuby1jb21wb25lbnQnO1xyXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vRHJhZ2dhYmxlLmpzJztcclxuaW1wb3J0IHsgdHJpbUNvbHVtbldpZHRoLCBiaXNlY3RDb2x1bW5zIH0gZnJvbSAnLi91dGlscy9pbmRleC5qcyc7XHJcblxyXG5jb25zdCBSZXNpemVyID0gKCkgPT4gKFxyXG4gICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIHpJbmRleDogMixcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgIHJpZ2h0OiAtMyxcclxuICAgICAgICB3aWR0aDogNixcclxuICAgICAgICBjdXJzb3I6ICdjb2wtcmVzaXplJ1xyXG4gICAgfX0+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IENvbHVtbkdob3N0ID0gKHsgeCwgY2hpbGRyZW4gfSkgPT4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogMCwgdG9wOiAwLCBib3R0b206IDAsIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHt4fXB4KWAgfX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5jbGFzcyBEcmFnZ2FibGVDb2x1bW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnJlZlJlc2l6ZXIgPSBlbGVtZW50ID0+IHRoaXMucmVzaXplciA9IGVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IG5hbWU7XHJcbiAgICAgICAgbGV0IGVuYWJsZWQ7XHJcbiAgICAgICAgdGhpcy5vblN0YXJ0ID0gKGUsIHBvcykgPT4ge1xyXG4gICAgICAgICAgICBuYW1lID0gZS50YXJnZXQgPT09IHRoaXMucmVzaXplciA/ICdyZXNpemUnIDogJ21vdmUnO1xyXG4gICAgICAgICAgICBlbmFibGVkID0gbmFtZSA9PT0gJ3Jlc2l6ZScgfHwgbmFtZSA9PT0gJ21vdmUnICYmIHRoaXMucHJvcHMuY29sdW1uLm1vdmluZztcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblN0YXJ0KG5hbWUsIHRoaXMucHJvcHMuY29sdW1uLm5hbWUsIHBvcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9uRHJhZyA9IChlLCBwb3MpID0+IGVuYWJsZWQgJiYgdGhpcy5wcm9wcy5vbkRyYWcobmFtZSwgdGhpcy5wcm9wcy5jb2x1bW4ubmFtZSwgcG9zKTtcclxuICAgICAgICB0aGlzLm9uRW5kID0gKGUsIHBvcykgPT4gZW5hYmxlZCAmJiB0aGlzLnByb3BzLm9uRW5kKG5hbWUsIHRoaXMucHJvcHMuY29sdW1uLm5hbWUsIHBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxEcmFnZ2FibGVcclxuICAgICAgICAgICAgICAgIG9uU3RhcnQ9e3RoaXMub25TdGFydH1cclxuICAgICAgICAgICAgICAgIG9uRHJhZz17dGhpcy5vbkRyYWd9XHJcbiAgICAgICAgICAgICAgICBvbkVuZD17dGhpcy5vbkVuZH0+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb2x1bW4ucmVzaXppbmcgJiZcclxuICAgICAgICAgICAgICAgICAgICA8UmVzaXplciBvbkNvbXBvbmVudERpZE1vdW50PXt0aGlzLnJlZlJlc2l6ZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IENvbHVtbldyYXBwZXIgPSAoeyBjb2x1bW4sIGluZGV4LCBnaG9zdCwgY29tcG9uZW50OiBDb2x1bW4sIGNhbGxiYWNrIH0pID0+IChcclxuICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IGNvbHVtbi53aWR0aCB9fT5cclxuICAgICAgICA8Q29sdW1uIGNvbHVtbj17Y29sdW1ufSBpbmRleD17aW5kZXh9IGdob3N0PXtnaG9zdH0gY2FsbGJhY2s9e2NhbGxiYWNrfSAvPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgcG9zaXRpb246ICdyZWxhdGl2ZScsIGhlaWdodDogJ2luaGVyaXQnIH19PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyV3JhcHBlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMub25TdGFydCA9IHRoaXMub25TdGFydC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25EcmFnID0gdGhpcy5vbkRyYWcuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uRW5kID0gdGhpcy5vbkVuZC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3RhcnQodHlwZSwgbmFtZSwgc3RhcnQpIHtcclxuICAgICAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5wcm9wcy5jb2x1bW5zO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IGNvbHVtbnMuZmluZEluZGV4KGQgPT4gZC5uYW1lID09PSBuYW1lKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50Q29sdW1uID0gY29sdW1uc1tjdXJyZW50SW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRMZWZ0ID0gY29sdW1ucy5zbGljZSgwLCBjdXJyZW50SW5kZXgpLnJlZHVjZSgoYWNjLCBkKSA9PiBhY2MgKyBkLndpZHRoLCAwKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRMZWZ0ID0gY3VycmVudExlZnQ7XHJcbiAgICAgICAgdGhpcy5zdGFydE1vdmluZ1Bvc2l0aW9uID0gY3VycmVudExlZnQgLSBzdGFydDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IGN1cnJlbnRJbmRleDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRDb2x1bW4gPSBjdXJyZW50Q29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhZyh0eXBlLCBuYW1lLCBwb3NpdGlvbikge1xyXG4gICAgICAgIGlmICh0eXBlID09PSAncmVzaXplJykge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uUmVzaXppbmcobmFtZSwgdGhpcy5jdXJyZW50TGVmdCArIHRyaW1Db2x1bW5XaWR0aCh0aGlzLmN1cnJlbnRDb2x1bW4sIHBvc2l0aW9uKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgW2xlZnRJbmRleCwgcmlnaHRJbmRleF0gPSBiaXNlY3RDb2x1bW5zKHRoaXMucHJvcHMuY29sdW1ucywgdGhpcy5zdGFydE1vdmluZ1Bvc2l0aW9uICsgcG9zaXRpb24pO1xyXG4gICAgICAgICAgICBjb25zdCBsZWZ0TmFtZSA9IGxlZnRJbmRleCA9PT0gLTEgPyBudWxsIDogdGhpcy5wcm9wcy5jb2x1bW5zW2xlZnRJbmRleF0ubmFtZTtcclxuICAgICAgICAgICAgY29uc3QgcmlnaHROYW1lID0gcmlnaHRJbmRleCA9PT0gLTEgPyBudWxsIDogdGhpcy5wcm9wcy5jb2x1bW5zW3JpZ2h0SW5kZXhdLm5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Nb3ZpbmcobmFtZSwgbGVmdE5hbWUsIHJpZ2h0TmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5zdGFydE1vdmluZ1Bvc2l0aW9uICsgcG9zaXRpb24sXHJcbiAgICAgICAgICAgIG1vdmluZzogdHlwZSA9PT0gJ21vdmUnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmQodHlwZSwgbmFtZSwgcG9zaXRpb24pIHtcclxuICAgICAgICBpZiAodHlwZSA9PT0gJ3Jlc2l6ZScpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblJlc2l6ZShuYW1lLCB0cmltQ29sdW1uV2lkdGgodGhpcy5jdXJyZW50Q29sdW1uLCBwb3NpdGlvbikpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtsZWZ0SW5kZXgsIHJpZ2h0SW5kZXhdID0gYmlzZWN0Q29sdW1ucyh0aGlzLnByb3BzLmNvbHVtbnMsIHRoaXMuc3RhcnRNb3ZpbmdQb3NpdGlvbiArIHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgbGVmdE5hbWUgPSBsZWZ0SW5kZXggPT09IC0xID8gbnVsbCA6IHRoaXMucHJvcHMuY29sdW1uc1tsZWZ0SW5kZXhdLm5hbWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0TmFtZSA9IHJpZ2h0SW5kZXggPT09IC0xID8gbnVsbCA6IHRoaXMucHJvcHMuY29sdW1uc1tyaWdodEluZGV4XS5uYW1lO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uTW92ZShuYW1lLCBsZWZ0TmFtZSwgcmlnaHROYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG1vdmluZzogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoeyBjb2x1bW5zLCBjb21wb25lbnQsIGNhbGxiYWNrIH0sIHsgbW92aW5nLCBwb3NpdGlvbiB9KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgICAgICAgIHtjb2x1bW5zLm1hcCgoY29sdW1uLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlQ29sdW1uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbj17Y29sdW1ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN0YXJ0PXt0aGlzLm9uU3RhcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZz17dGhpcy5vbkRyYWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRW5kPXt0aGlzLm9uRW5kfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbHVtbldyYXBwZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbj17Y29sdW1ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2hvc3Q9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaz17Y2FsbGJhY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGVDb2x1bW4+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge21vdmluZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW5HaG9zdCB4PXtwb3NpdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2x1bW5XcmFwcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW49e3RoaXMuY3VycmVudENvbHVtbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXt0aGlzLmN1cnJlbnRJbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdob3N0PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2x1bW5HaG9zdD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSGVhZGVyLmpzIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnaW5mZXJuby1jcmVhdGUtZWxlbWVudCc7XHJcbmltcG9ydCB7IHJlc2l6ZUdob3N0WmluZGV4IH0gZnJvbSAnLi9wYXJhbXMuanMnO1xyXG5cclxuY29uc3QgUmVzaXplR2hvc3QgPSAoeyB4IH0pID0+IChcclxuICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICB6SW5kZXg6IHJlc2l6ZUdob3N0WmluZGV4LFxyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICBib3JkZXJMZWZ0OiAnMXB4IGRvdHRlZCAjMDAwJyxcclxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke3h9cHgpYFxyXG4gICAgfX0+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2l6ZUdob3N0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVzaXplR2hvc3QuanMiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICdpbmZlcm5vLWNyZWF0ZS1lbGVtZW50JztcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tICdpbmZlcm5vLWNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyID0+IEJhc2VDb21wb25lbnQgPT4gY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHJlZHVjZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShyZWR1Y2VyKG5leHRQcm9wcywgdGhpcy5zdGF0ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihwcm9wcywgc3RhdGUpIHtcclxuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChCYXNlQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgc3RhdGUpKTtcclxuICAgIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlY29yYXRvcnMvd2l0aE1pZGRsZVN0YXRlLmpzIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnaW5mZXJuby1jcmVhdGUtZWxlbWVudCc7XHJcbmltcG9ydCB3aXRoUHJvcHNPbkNoYW5nZSBmcm9tICcuL3dpdGhQcm9wc09uQ2hhbmdlLmpzJztcclxuaW1wb3J0IHsgcGlubmVkWmluZGV4IH0gZnJvbSAnLi4vcGFyYW1zLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VDb21wb25lbnQgPT4gd2l0aFByb3BzT25DaGFuZ2UoWydjb2x1bW5zJ10sICh7IGNvbHVtbnMgfSkgPT4gKHtcclxuICAgIGxlZnRDb2x1bW5zOiBjb2x1bW5zLmZpbHRlcihjb2x1bW4gPT4gY29sdW1uLnBpbm5lZExlZnQpLFxyXG4gICAgY2VudGVyQ29sdW1uczogY29sdW1ucy5maWx0ZXIoY29sdW1uID0+ICFjb2x1bW4ucGlubmVkTGVmdCAmJiAhY29sdW1uLnBpbm5lZFJpZ2h0KSxcclxuICAgIHJpZ2h0Q29sdW1uczogY29sdW1ucy5maWx0ZXIoY29sdW1uID0+IGNvbHVtbi5waW5uZWRSaWdodClcclxufSkpKHByb3BzID0+IChcclxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgIHtwcm9wcy5sZWZ0Q29sdW1ucy5sZW5ndGggIT09IDAgJiZcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3N0aWNreScsIHpJbmRleDogcGlubmVkWmluZGV4LCBsZWZ0OiAwIH19PlxyXG4gICAgICAgICAgICAgICAge2NyZWF0ZUVsZW1lbnQoQmFzZUNvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgY29sdW1uczogcHJvcHMubGVmdENvbHVtbnMgfSkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgICAge2NyZWF0ZUVsZW1lbnQoQmFzZUNvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgY29sdW1uczogcHJvcHMuY2VudGVyQ29sdW1ucyB9KSl9XHJcbiAgICAgICAge3Byb3BzLnJpZ2h0Q29sdW1ucy5sZW5ndGggIT09IDAgJiZcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3N0aWNreScsIHpJbmRleDogcGlubmVkWmluZGV4LCByaWdodDogMCB9fT5cclxuICAgICAgICAgICAgICAgIHtjcmVhdGVFbGVtZW50KEJhc2VDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7IGNvbHVtbnM6IHByb3BzLnJpZ2h0Q29sdW1ucyB9KSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4pKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlY29yYXRvcnMvd2l0aFBpbm5hYmxlQ29sdW1ucy5qcyIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJ2luZmVybm8tY3JlYXRlLWVsZW1lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnID0+IEJhc2VDb21wb25lbnQgPT4gcHJvcHMgPT4gY3JlYXRlRWxlbWVudChCYXNlQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgY29uZmlnKSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kZWNvcmF0b3JzL3dpdGhQcm9wcy5qcyIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJ2luZmVybm8tY3JlYXRlLWVsZW1lbnQnO1xyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ2luZmVybm8tY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VDb21wb25lbnQgPT4gY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxyXG4gICAgICAgICAgICBzY3JvbGxMZWZ0OiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJlZiA9IGVsZW1lbnQgPT4gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogZWxlbWVudC5zY3JvbGxUb3AsXHJcbiAgICAgICAgICAgIHNjcm9sbExlZnQ6IGVsZW1lbnQuc2Nyb2xsTGVmdFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMub25TY3JvbGwgPSBlID0+IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6IGUudGFyZ2V0LnNjcm9sbFRvcCxcclxuICAgICAgICAgICAgc2Nyb2xsTGVmdDogZS50YXJnZXQuc2Nyb2xsTGVmdFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihwcm9wcywgeyBzY3JvbGxUb3AsIHNjcm9sbExlZnQgfSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBwcm9wcy52aWV3cG9ydFdpZHRoLCBoZWlnaHQ6IHByb3BzLnZpZXdwb3J0SGVpZ2h0LCBvdmVyZmxvdzogJ2F1dG8nIH0sXHJcbiAgICAgICAgICAgICAgICByZWY6IHRoaXMucmVmLFxyXG4gICAgICAgICAgICAgICAgb25TY3JvbGw6IHRoaXMub25TY3JvbGxcclxuICAgICAgICAgICAgfSwgW1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudChCYXNlQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcCxcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0XHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgXSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGVjb3JhdG9ycy93aXRoU2Nyb2xsUHJvcHMuanMiLCJleHBvcnQgeyBkZWZhdWx0IGFzIEdyaWQgfSBmcm9tICcuL0dyaWQuanMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIExpc3QgfSBmcm9tICcuL0xpc3QuanMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIERlZmF1bHRIZWFkZXJDb2x1bW4gfSBmcm9tICcuL0RlZmF1bHRIZWFkZXJDb2x1bW4uanMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIERlZmF1bHRSb3cgfSBmcm9tICcuL0RlZmF1bHRSb3cuanMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXJzL2luZGV4LmpzJztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ01BUktfTU9WRV9ERVNUJzpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09IGFjdGlvbi5sZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZUxlZnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlUmlnaHQ6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09IGFjdGlvbi5yaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVMZWZ0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlUmlnaHQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5tb3ZlTGVmdCB8fCBpdGVtLm1vdmVSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVMZWZ0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVJpZ2h0OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjYXNlICdNT1ZFX0NPTFVNTic6XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbnMgPSBzdGF0ZS5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5tb3ZlTGVmdCB8fCBpdGVtLm1vdmVSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVMZWZ0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVJpZ2h0OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoYWN0aW9uLmxlZnQgfHwgYWN0aW9uLnJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgID0gYWN0aW9uLmxlZnRcclxuICAgICAgICAgICAgICAgICAgICA/IGNvbHVtbnMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5uYW1lID09PSBhY3Rpb24ubGVmdCkgKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgOiBjb2x1bW5zLmZpbmRJbmRleChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gYWN0aW9uLnJpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uY29sdW1ucy5zbGljZSgwLCBpbmRleCkuZmlsdGVyKGl0ZW0gPT4gaXRlbS5uYW1lICE9PSBhY3Rpb24ubmFtZSksXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uY29sdW1ucy5maWx0ZXIoaXRlbSA9PiBpdGVtLm5hbWUgPT09IGFjdGlvbi5uYW1lKSxcclxuICAgICAgICAgICAgICAgICAgICAuLi5jb2x1bW5zLnNsaWNlKGluZGV4KS5maWx0ZXIoaXRlbSA9PiBpdGVtLm5hbWUgIT09IGFjdGlvbi5uYW1lKVxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1ucztcclxuXHJcbiAgICAgICAgY2FzZSAnUkVTSVpFX0NPTFVNTic6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5uYW1lID09PSBhY3Rpb24ubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhY3Rpb24uc2l6ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjYXNlICdGSUxURVJfQ09MVU1OJzpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09IGFjdGlvbi5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGFjdGlvbi52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1Y2Vycy9jb2x1bW5zLmpzIiwiaW1wb3J0IGNvbHVtbnNSZWR1Y2VyIGZyb20gJy4vY29sdW1ucy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiAoe1xyXG4gICAgY29sdW1uczogY29sdW1uc1JlZHVjZXIoc3RhdGUuY29sdW1ucywgYWN0aW9uKVxyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHVjZXJzL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQgKGNvbHVtbnMsIHBvc2l0aW9uKSA9PiB7XHJcbiAgICBpZiAoY29sdW1ucy5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgcmV0dXJuIFstMSwgMF07XHJcbiAgICB9XHJcbiAgICBsZXQgbGFzdCA9IDA7XHJcbiAgICByZXR1cm4gY29sdW1ucy5yZWR1Y2UoKGFjYywgeyB3aWR0aCB9LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxlZnQgPSBsYXN0O1xyXG4gICAgICAgIGNvbnN0IHJlbGF0aXZlID0gcG9zaXRpb24gLSBsZWZ0O1xyXG4gICAgICAgIGNvbnN0IGhhbGYgPSB3aWR0aCAvIDI7XHJcbiAgICAgICAgbGFzdCA9IGxlZnQgKyB3aWR0aDtcclxuICAgICAgICBpZiAoaW5kZXggPT09IDAgJiYgcmVsYXRpdmUgPCBoYWxmKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbLTEsIGluZGV4XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGluZGV4ID09PSBjb2x1bW5zLmxlbmd0aCAtIDEgJiYgaGFsZiA8PSByZWxhdGl2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW2luZGV4LCAtMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChoYWxmIDw9IHJlbGF0aXZlICYmIHJlbGF0aXZlIDw9IHdpZHRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbaW5kZXgsIGluZGV4ICsgMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgwIDw9IHJlbGF0aXZlICYmIHJlbGF0aXZlIDw9IGhhbGYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtpbmRleCAtIDEsIGluZGV4XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIFtdKTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2Jpc2VjdENvbHVtbnMuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wb3NlKC4uLmZ1bmNzKSB7XHJcbiAgICBpZiAoZnVuY3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGFyZyA9PiBhcmc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jc1swXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZnVuY3MucmVkdWNlKChhLCBiKSA9PiAoLi4uYXJncykgPT4gYShiKC4uLmFyZ3MpKSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2NvbXBvc2UuanMiLCJjb25zdCBlbXB0eSA9ICgpID0+IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcblxyXG5jb25zdCBpbnZlcnQgPSBvYmogPT4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKGFjYywga2V5KSA9PiAoYWNjW29ialtrZXldXSA9IGtleSwgYWNjKSwgZW1wdHkoKSk7XHJcblxyXG5jb25zdCBjcmVhdGVGcmVlS2V5R2VuZXJhdG9yID0gKGluZGV4ZXMpID0+IHtcclxuICAgIGxldCBsYXN0UG9pbnRlciA9IDA7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGBrZXlfJHtsYXN0UG9pbnRlcn1gO1xyXG4gICAgICAgICAgICBsYXN0UG9pbnRlciArPSAxO1xyXG4gICAgICAgICAgICBpZiAoIShrZXkgaW4gaW5kZXhlcykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UmVjb3ZlcmVkS2V5cyA9IChsYXN0S2V5cywgc3RhcnQsIGVuZCkgPT4ge1xyXG4gICAgY29uc3Qga2V5cyA9IGVtcHR5KCk7XHJcbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQgKyAxOyBpICs9IDEpIHtcclxuICAgICAgICBpZiAoaSBpbiBsYXN0S2V5cykge1xyXG4gICAgICAgICAgICBrZXlzW2ldID0gbGFzdEtleXNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGtleXM7XHJcbn07XHJcblxyXG5jb25zdCBnZW5lcmF0ZUtleXMgPSAobGFzdEtleXMsIHN0YXJ0LCBlbmQpID0+IHtcclxuICAgIGNvbnN0IGtleXMgPSBlbXB0eSgpO1xyXG4gICAgY29uc3QgZ2VuZXJhdGVLZXkgPSBjcmVhdGVGcmVlS2V5R2VuZXJhdG9yKGludmVydChsYXN0S2V5cykpO1xyXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kICsgMTsgaSArPSAxKSB7XHJcbiAgICAgICAgaWYgKCEoaSBpbiBsYXN0S2V5cykpIHtcclxuICAgICAgICAgICAga2V5c1tpXSA9IGdlbmVyYXRlS2V5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGtleXM7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCAobGFzdEtleXMgPSBlbXB0eSgpLCBzdGFydCwgZW5kKSA9PiB7XHJcbiAgICBjb25zdCByZWNvdmVyZWQgPSBnZXRSZWNvdmVyZWRLZXlzKGxhc3RLZXlzLCBzdGFydCwgZW5kKTtcclxuICAgIGNvbnN0IGdlbmVyYXRlZCA9IGdlbmVyYXRlS2V5cyhyZWNvdmVyZWQsIHN0YXJ0LCBlbmQpO1xyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZW1wdHkoKSwgcmVjb3ZlcmVkLCBnZW5lcmF0ZWQpO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvZ2V0S2V5c0J5SW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCAoeyBzY3JvbGxUb3AsIHZpZXdwb3J0SGVpZ2h0LCByb3dIZWlnaHQsIHJvd3NDb3VudCB9KSA9PiB7XHJcbiAgICBjb25zdCBjbHVzdGVyU2l6ZSA9IE1hdGguY2VpbCh2aWV3cG9ydEhlaWdodCAvIHJvd0hlaWdodCk7XHJcbiAgICBjb25zdCB0b3BDbHVzdGVyID0gTWF0aC5mbG9vcihNYXRoLmZsb29yKE1hdGgubWF4KDAsIHNjcm9sbFRvcCkgLyByb3dIZWlnaHQpIC8gY2x1c3RlclNpemUpO1xyXG4gICAgY29uc3QgZW5kID0gTWF0aC5taW4ocm93c0NvdW50LCAodG9wQ2x1c3RlciArIDIpICogY2x1c3RlclNpemUpO1xyXG4gICAgLy8gY291bnQgb2YgdmlzaWJsZSByb3dzIGlzIGFsd2F5cyB0aGUgc2FtZSB0aGVuIGZvY3VzIG5ldmVyIGJlIGxvc3RcclxuICAgIGNvbnN0IHN0YXJ0ID0gTWF0aC5tYXgoMCwgZW5kIC0gY2x1c3RlclNpemUgKiAyKTtcclxuICAgIHJldHVybiBbc3RhcnQsIGVuZF07XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9nZXRWaXNpYmxlUm93cy5qcyIsImltcG9ydCB7IGRlZmF1bHRNaW5XaWR0aCB9IGZyb20gJy4uL3BhcmFtcy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoY29sdW1uLCB3aWR0aCkgPT5cclxuICAgIE1hdGgubWluKE1hdGgubWF4KGNvbHVtbi5taW5XaWR0aCB8fCBkZWZhdWx0TWluV2lkdGgsIHdpZHRoKSwgY29sdW1uLm1heFdpZHRoIHx8IEluZmluaXR5KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL3RyaW1Db2x1bW5XaWR0aC5qcyIsIi8qIVxuICogaW5mZXJuby1jb21wb25lbnQgdjEuMi4yXG4gKiAoYykgMjAxNyBEb21pbmljIEdhbm5hd2F5XG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdpbmZlcm5vJykpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnaW5mZXJubyddLCBmYWN0b3J5KSA6XG5cdChnbG9iYWwuSW5mZXJubyA9IGdsb2JhbC5JbmZlcm5vIHx8IHt9LCBnbG9iYWwuSW5mZXJuby5Db21wb25lbnQgPSBmYWN0b3J5KGdsb2JhbC5JbmZlcm5vKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoaW5mZXJubykgeyAndXNlIHN0cmljdCc7XG5cbnZhciBFUlJPUl9NU0cgPSAnYSBydW50aW1lIGVycm9yIG9jY3VyZWQhIFVzZSBJbmZlcm5vIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50IHRvIGZpbmQgdGhlIGVycm9yLic7XG52YXIgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50O1xuXG4vLyB0aGlzIGlzIE1VQ0ggZmFzdGVyIHRoYW4gLmNvbnN0cnVjdG9yID09PSBBcnJheSBhbmQgaW5zdGFuY2VvZiBBcnJheVxuLy8gaW4gTm9kZSA3IGFuZCB0aGUgbGF0ZXIgdmVyc2lvbnMgb2YgVjgsIHNsb3dlciBpbiBvbGRlciB2ZXJzaW9ucyB0aG91Z2hcbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuZnVuY3Rpb24gaXNTdHJpbmdPck51bWJlcihvYmopIHtcbiAgICB2YXIgdHlwZSA9IHR5cGVvZiBvYmo7XG4gICAgcmV0dXJuIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGUgPT09ICdudW1iZXInO1xufVxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZihvYmopIHtcbiAgICByZXR1cm4gaXNVbmRlZmluZWQob2JqKSB8fCBpc051bGwob2JqKTtcbn1cbmZ1bmN0aW9uIGlzSW52YWxpZChvYmopIHtcbiAgICByZXR1cm4gaXNOdWxsKG9iaikgfHwgb2JqID09PSBmYWxzZSB8fCBpc1RydWUob2JqKSB8fCBpc1VuZGVmaW5lZChvYmopO1xufVxuZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuXG5cbmZ1bmN0aW9uIGlzTnVsbChvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBudWxsO1xufVxuZnVuY3Rpb24gaXNUcnVlKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHRydWU7XG59XG5mdW5jdGlvbiBpc1VuZGVmaW5lZChvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHRocm93RXJyb3IobWVzc2FnZSkge1xuICAgIGlmICghbWVzc2FnZSkge1xuICAgICAgICBtZXNzYWdlID0gRVJST1JfTVNHO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoKFwiSW5mZXJubyBFcnJvcjogXCIgKyBtZXNzYWdlKSk7XG59XG5cbnZhciBMaWZlY3ljbGUgPSBmdW5jdGlvbiBMaWZlY3ljbGUoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICB0aGlzLmZhc3RVbm1vdW50ID0gdHJ1ZTtcbn07XG5MaWZlY3ljbGUucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIgKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG59O1xuTGlmZWN5Y2xlLnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24gdHJpZ2dlciAoKSB7XG4gICAgICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzJDEubGlzdGVuZXJzW2ldKCk7XG4gICAgfVxufTtcblxudmFyIG5vT3AgPSBFUlJPUl9NU0c7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIG5vT3AgPSAnSW5mZXJubyBFcnJvcjogQ2FuIG9ubHkgdXBkYXRlIGEgbW91bnRlZCBvciBtb3VudGluZyBjb21wb25lbnQuIFRoaXMgdXN1YWxseSBtZWFucyB5b3UgY2FsbGVkIHNldFN0YXRlKCkgb3IgZm9yY2VVcGRhdGUoKSBvbiBhbiB1bm1vdW50ZWQgY29tcG9uZW50LiBUaGlzIGlzIGEgbm8tb3AuJztcbn1cbnZhciBjb21wb25lbnRDYWxsYmFja1F1ZXVlID0gbmV3IE1hcCgpO1xuLy8gd2hlbiBhIGNvbXBvbmVudHMgcm9vdCBWTm9kZSBpcyBhbHNvIGEgY29tcG9uZW50LCB3ZSBjYW4gcnVuIGludG8gaXNzdWVzXG4vLyB0aGlzIHdpbGwgcmVjdXJzaXZlbHkgbG9vayBmb3Igdk5vZGUucGFyZW50Tm9kZSBpZiB0aGUgVk5vZGUgaXMgYSBjb21wb25lbnRcbmZ1bmN0aW9uIHVwZGF0ZVBhcmVudENvbXBvbmVudFZOb2Rlcyh2Tm9kZSwgZG9tKSB7XG4gICAgaWYgKHZOb2RlLmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgIHZhciBwYXJlbnRWTm9kZSA9IHZOb2RlLnBhcmVudFZOb2RlO1xuICAgICAgICBpZiAocGFyZW50Vk5vZGUpIHtcbiAgICAgICAgICAgIHBhcmVudFZOb2RlLmRvbSA9IGRvbTtcbiAgICAgICAgICAgIHVwZGF0ZVBhcmVudENvbXBvbmVudFZOb2RlcyhwYXJlbnRWTm9kZSwgZG9tKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIHRoaXMgaXMgaW4gc2hhcGVzIHRvbywgYnV0IHdlIGRvbid0IHdhbnQgdG8gaW1wb3J0IGZyb20gc2hhcGVzIGFzIGl0IHdpbGwgcHVsbCBpbiBhIGR1cGxpY2F0ZSBvZiBjcmVhdGVWTm9kZVxuZnVuY3Rpb24gY3JlYXRlVm9pZFZOb2RlKCkge1xuICAgIHJldHVybiBpbmZlcm5vLmNyZWF0ZVZOb2RlKDQwOTYgLyogVm9pZCAqLyk7XG59XG5mdW5jdGlvbiBjcmVhdGVUZXh0Vk5vZGUodGV4dCkge1xuICAgIHJldHVybiBpbmZlcm5vLmNyZWF0ZVZOb2RlKDEgLyogVGV4dCAqLywgbnVsbCwgbnVsbCwgdGV4dCk7XG59XG5mdW5jdGlvbiBhZGRUb1F1ZXVlKGNvbXBvbmVudCwgZm9yY2UsIGNhbGxiYWNrKSB7XG4gICAgLy8gVE9ETyB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIHJldmlzZWQgYW5kIGltcHJvdmVkIG9uXG4gICAgdmFyIHF1ZXVlID0gY29tcG9uZW50Q2FsbGJhY2tRdWV1ZS5nZXQoY29tcG9uZW50KTtcbiAgICBpZiAoIXF1ZXVlKSB7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIGNvbXBvbmVudENhbGxiYWNrUXVldWUuc2V0KGNvbXBvbmVudCwgcXVldWUpO1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudENhbGxiYWNrUXVldWUuZGVsZXRlKGNvbXBvbmVudCk7XG4gICAgICAgICAgICBhcHBseVN0YXRlKGNvbXBvbmVudCwgZm9yY2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlW2ldKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgcXVldWUucHVzaChjYWxsYmFjayk7XG4gICAgfVxufVxuZnVuY3Rpb24gcXVldWVTdGF0ZUNoYW5nZXMoY29tcG9uZW50LCBuZXdTdGF0ZSwgY2FsbGJhY2ssIHN5bmMpIHtcbiAgICBpZiAoaXNGdW5jdGlvbihuZXdTdGF0ZSkpIHtcbiAgICAgICAgbmV3U3RhdGUgPSBuZXdTdGF0ZShjb21wb25lbnQuc3RhdGUsIGNvbXBvbmVudC5wcm9wcywgY29tcG9uZW50LmNvbnRleHQpO1xuICAgIH1cbiAgICBmb3IgKHZhciBzdGF0ZUtleSBpbiBuZXdTdGF0ZSkge1xuICAgICAgICBjb21wb25lbnQuX3BlbmRpbmdTdGF0ZVtzdGF0ZUtleV0gPSBuZXdTdGF0ZVtzdGF0ZUtleV07XG4gICAgfVxuICAgIGlmICghY29tcG9uZW50Ll9wZW5kaW5nU2V0U3RhdGUgJiYgaXNCcm93c2VyKSB7XG4gICAgICAgIGlmIChzeW5jIHx8IGNvbXBvbmVudC5fYmxvY2tSZW5kZXIpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5fcGVuZGluZ1NldFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIGFwcGx5U3RhdGUoY29tcG9uZW50LCBmYWxzZSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWRkVG9RdWV1ZShjb21wb25lbnQsIGZhbHNlLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudC5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGNvbXBvbmVudC5zdGF0ZSwgY29tcG9uZW50Ll9wZW5kaW5nU3RhdGUpO1xuICAgICAgICBjb21wb25lbnQuX3BlbmRpbmdTdGF0ZSA9IHt9O1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFwcGx5U3RhdGUoY29tcG9uZW50LCBmb3JjZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoKCFjb21wb25lbnQuX2RlZmVyU2V0U3RhdGUgfHwgZm9yY2UpICYmICFjb21wb25lbnQuX2Jsb2NrUmVuZGVyICYmICFjb21wb25lbnQuX3VubW91bnRlZCkge1xuICAgICAgICBjb21wb25lbnQuX3BlbmRpbmdTZXRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICB2YXIgcGVuZGluZ1N0YXRlID0gY29tcG9uZW50Ll9wZW5kaW5nU3RhdGU7XG4gICAgICAgIHZhciBwcmV2U3RhdGUgPSBjb21wb25lbnQuc3RhdGU7XG4gICAgICAgIHZhciBuZXh0U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBwcmV2U3RhdGUsIHBlbmRpbmdTdGF0ZSk7XG4gICAgICAgIHZhciBwcm9wcyA9IGNvbXBvbmVudC5wcm9wcztcbiAgICAgICAgdmFyIGNvbnRleHQgPSBjb21wb25lbnQuY29udGV4dDtcbiAgICAgICAgY29tcG9uZW50Ll9wZW5kaW5nU3RhdGUgPSB7fTtcbiAgICAgICAgdmFyIG5leHRJbnB1dCA9IGNvbXBvbmVudC5fdXBkYXRlQ29tcG9uZW50KHByZXZTdGF0ZSwgbmV4dFN0YXRlLCBwcm9wcywgcHJvcHMsIGNvbnRleHQsIGZvcmNlLCB0cnVlKTtcbiAgICAgICAgdmFyIGRpZFVwZGF0ZSA9IHRydWU7XG4gICAgICAgIGlmIChpc0ludmFsaWQobmV4dElucHV0KSkge1xuICAgICAgICAgICAgbmV4dElucHV0ID0gY3JlYXRlVm9pZFZOb2RlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV4dElucHV0ID09PSBpbmZlcm5vLk5PX09QKSB7XG4gICAgICAgICAgICBuZXh0SW5wdXQgPSBjb21wb25lbnQuX2xhc3RJbnB1dDtcbiAgICAgICAgICAgIGRpZFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXIobmV4dElucHV0KSkge1xuICAgICAgICAgICAgbmV4dElucHV0ID0gY3JlYXRlVGV4dFZOb2RlKG5leHRJbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNBcnJheShuZXh0SW5wdXQpKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93RXJyb3IoJ2EgdmFsaWQgSW5mZXJubyBWTm9kZSAob3IgbnVsbCkgbXVzdCBiZSByZXR1cm5lZCBmcm9tIGEgY29tcG9uZW50IHJlbmRlci4gWW91IG1heSBoYXZlIHJldHVybmVkIGFuIGFycmF5IG9yIGFuIGludmFsaWQgb2JqZWN0LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsYXN0SW5wdXQgPSBjb21wb25lbnQuX2xhc3RJbnB1dDtcbiAgICAgICAgdmFyIHZOb2RlID0gY29tcG9uZW50Ll92Tm9kZTtcbiAgICAgICAgdmFyIHBhcmVudERvbSA9IChsYXN0SW5wdXQuZG9tICYmIGxhc3RJbnB1dC5kb20ucGFyZW50Tm9kZSkgfHwgKGxhc3RJbnB1dC5kb20gPSB2Tm9kZS5kb20pO1xuICAgICAgICBjb21wb25lbnQuX2xhc3RJbnB1dCA9IG5leHRJbnB1dDtcbiAgICAgICAgaWYgKGRpZFVwZGF0ZSkge1xuICAgICAgICAgICAgdmFyIHN1YkxpZmVjeWNsZSA9IGNvbXBvbmVudC5fbGlmZWN5Y2xlO1xuICAgICAgICAgICAgaWYgKCFzdWJMaWZlY3ljbGUpIHtcbiAgICAgICAgICAgICAgICBzdWJMaWZlY3ljbGUgPSBuZXcgTGlmZWN5Y2xlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdWJMaWZlY3ljbGUubGlzdGVuZXJzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb21wb25lbnQuX2xpZmVjeWNsZSA9IHN1YkxpZmVjeWNsZTtcbiAgICAgICAgICAgIHZhciBjaGlsZENvbnRleHQgPSBjb21wb25lbnQuZ2V0Q2hpbGRDb250ZXh0KCk7XG4gICAgICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYoY2hpbGRDb250ZXh0KSkge1xuICAgICAgICAgICAgICAgIGNoaWxkQ29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQsIGNvbXBvbmVudC5fY2hpbGRDb250ZXh0LCBjaGlsZENvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hpbGRDb250ZXh0ID0gT2JqZWN0LmFzc2lnbih7fSwgY29udGV4dCwgY29tcG9uZW50Ll9jaGlsZENvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29tcG9uZW50Ll9wYXRjaChsYXN0SW5wdXQsIG5leHRJbnB1dCwgcGFyZW50RG9tLCBzdWJMaWZlY3ljbGUsIGNoaWxkQ29udGV4dCwgY29tcG9uZW50Ll9pc1NWRywgZmFsc2UpO1xuICAgICAgICAgICAgc3ViTGlmZWN5Y2xlLnRyaWdnZXIoKTtcbiAgICAgICAgICAgIGNvbXBvbmVudC5jb21wb25lbnREaWRVcGRhdGUocHJvcHMsIHByZXZTdGF0ZSk7XG4gICAgICAgICAgICBpbmZlcm5vLm9wdGlvbnMuYWZ0ZXJVcGRhdGUgJiYgaW5mZXJuby5vcHRpb25zLmFmdGVyVXBkYXRlKHZOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZG9tID0gdk5vZGUuZG9tID0gbmV4dElucHV0LmRvbTtcbiAgICAgICAgdmFyIGNvbXBvbmVudFRvRE9NTm9kZU1hcCA9IGNvbXBvbmVudC5fY29tcG9uZW50VG9ET01Ob2RlTWFwO1xuICAgICAgICBjb21wb25lbnRUb0RPTU5vZGVNYXAgJiYgY29tcG9uZW50VG9ET01Ob2RlTWFwLnNldChjb21wb25lbnQsIG5leHRJbnB1dC5kb20pO1xuICAgICAgICB1cGRhdGVQYXJlbnRDb21wb25lbnRWTm9kZXModk5vZGUsIGRvbSk7XG4gICAgICAgIGlmICghaXNOdWxsT3JVbmRlZihjYWxsYmFjaykpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoIWlzTnVsbE9yVW5kZWYoY2FsbGJhY2spKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxufVxudmFyIENvbXBvbmVudCQxID0gZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzLCBjb250ZXh0KSB7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIHRoaXMucmVmcyA9IHt9O1xuICAgIHRoaXMuX2Jsb2NrUmVuZGVyID0gZmFsc2U7XG4gICAgdGhpcy5faWdub3JlU2V0U3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLl9ibG9ja1NldFN0YXRlID0gZmFsc2U7XG4gICAgdGhpcy5fZGVmZXJTZXRTdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuX3BlbmRpbmdTZXRTdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuX3BlbmRpbmdTdGF0ZSA9IHt9O1xuICAgIHRoaXMuX2xhc3RJbnB1dCA9IG51bGw7XG4gICAgdGhpcy5fdk5vZGUgPSBudWxsO1xuICAgIHRoaXMuX3VubW91bnRlZCA9IHRydWU7XG4gICAgdGhpcy5fbGlmZWN5Y2xlID0gbnVsbDtcbiAgICB0aGlzLl9jaGlsZENvbnRleHQgPSBudWxsO1xuICAgIHRoaXMuX3BhdGNoID0gbnVsbDtcbiAgICB0aGlzLl9pc1NWRyA9IGZhbHNlO1xuICAgIHRoaXMuX2NvbXBvbmVudFRvRE9NTm9kZU1hcCA9IG51bGw7XG4gICAgLyoqIEB0eXBlIHtvYmplY3R9ICovXG4gICAgdGhpcy5wcm9wcyA9IHByb3BzIHx8IGluZmVybm8uRU1QVFlfT0JKO1xuICAgIC8qKiBAdHlwZSB7b2JqZWN0fSAqL1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQgfHwge307XG59O1xuQ29tcG9uZW50JDEucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlciAobmV4dFByb3BzLCBuZXh0U3RhdGUsIG5leHRDb250ZXh0KSB7XG59O1xuQ29tcG9uZW50JDEucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gZm9yY2VVcGRhdGUgKGNhbGxiYWNrKSB7XG4gICAgaWYgKHRoaXMuX3VubW91bnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlzQnJvd3NlciAmJiBhcHBseVN0YXRlKHRoaXMsIHRydWUsIGNhbGxiYWNrKTtcbn07XG5Db21wb25lbnQkMS5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiBzZXRTdGF0ZSAobmV3U3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHRoaXMuX3VubW91bnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5fYmxvY2tTZXRTdGF0ZSkge1xuICAgICAgICBpZiAoIXRoaXMuX2lnbm9yZVNldFN0YXRlKSB7XG4gICAgICAgICAgICBxdWV1ZVN0YXRlQ2hhbmdlcyh0aGlzLCBuZXdTdGF0ZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3IoJ2Nhbm5vdCB1cGRhdGUgc3RhdGUgdmlhIHNldFN0YXRlKCkgaW4gY29tcG9uZW50V2lsbFVwZGF0ZSgpLicpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IoKTtcbiAgICB9XG59O1xuQ29tcG9uZW50JDEucHJvdG90eXBlLnNldFN0YXRlU3luYyA9IGZ1bmN0aW9uIHNldFN0YXRlU3luYyAobmV3U3RhdGUpIHtcbiAgICBpZiAodGhpcy5fdW5tb3VudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9ibG9ja1NldFN0YXRlKSB7XG4gICAgICAgIGlmICghdGhpcy5faWdub3JlU2V0U3RhdGUpIHtcbiAgICAgICAgICAgIHF1ZXVlU3RhdGVDaGFuZ2VzKHRoaXMsIG5ld1N0YXRlLCBudWxsLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3IoJ2Nhbm5vdCB1cGRhdGUgc3RhdGUgdmlhIHNldFN0YXRlKCkgaW4gY29tcG9uZW50V2lsbFVwZGF0ZSgpLicpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IoKTtcbiAgICB9XG59O1xuQ29tcG9uZW50JDEucHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XG59O1xuQ29tcG9uZW50JDEucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSAocHJldlByb3BzLCBwcmV2U3RhdGUsIHByZXZDb250ZXh0KSB7XG59O1xuQ29tcG9uZW50JDEucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZSAobmV4dFByb3BzLCBuZXh0U3RhdGUsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5Db21wb25lbnQkMS5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5leHRQcm9wcywgY29udGV4dCkge1xufTtcbkNvbXBvbmVudCQxLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVwZGF0ZSAobmV4dFByb3BzLCBuZXh0U3RhdGUsIG5leHRDb250ZXh0KSB7XG59O1xuQ29tcG9uZW50JDEucHJvdG90eXBlLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCAoKSB7XG59O1xuQ29tcG9uZW50JDEucHJvdG90eXBlLl91cGRhdGVDb21wb25lbnQgPSBmdW5jdGlvbiBfdXBkYXRlQ29tcG9uZW50IChwcmV2U3RhdGUsIG5leHRTdGF0ZSwgcHJldlByb3BzLCBuZXh0UHJvcHMsIGNvbnRleHQsIGZvcmNlLCBmcm9tU2V0U3RhdGUpIHtcbiAgICBpZiAodGhpcy5fdW5tb3VudGVkID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKG5vT3ApO1xuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IoKTtcbiAgICB9XG4gICAgaWYgKChwcmV2UHJvcHMgIT09IG5leHRQcm9wcyB8fCBuZXh0UHJvcHMgPT09IGluZmVybm8uRU1QVFlfT0JKKSB8fCBwcmV2U3RhdGUgIT09IG5leHRTdGF0ZSB8fCBmb3JjZSkge1xuICAgICAgICBpZiAocHJldlByb3BzICE9PSBuZXh0UHJvcHMgfHwgbmV4dFByb3BzID09PSBpbmZlcm5vLkVNUFRZX09CSikge1xuICAgICAgICAgICAgaWYgKCFmcm9tU2V0U3RhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja1JlbmRlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcywgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9wZW5kaW5nU2V0U3RhdGUpIHtcbiAgICAgICAgICAgICAgICBuZXh0U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBuZXh0U3RhdGUsIHRoaXMuX3BlbmRpbmdTdGF0ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGVuZGluZ1NldFN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGVuZGluZ1N0YXRlID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNob3VsZFVwZGF0ZSA9IHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSAhPT0gZmFsc2UgfHwgZm9yY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2Jsb2NrU2V0U3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlLCBjb250ZXh0KTtcbiAgICAgICAgICAgIHRoaXMuX2Jsb2NrU2V0U3RhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMgPSBuZXh0UHJvcHM7XG4gICAgICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgICAgIGluZmVybm8ub3B0aW9ucy5iZWZvcmVSZW5kZXIgJiYgaW5mZXJuby5vcHRpb25zLmJlZm9yZVJlbmRlcih0aGlzKTtcbiAgICAgICAgICAgIHZhciByZW5kZXIgPSB0aGlzLnJlbmRlcihuZXh0UHJvcHMsIHN0YXRlLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGluZmVybm8ub3B0aW9ucy5hZnRlclJlbmRlciAmJiBpbmZlcm5vLm9wdGlvbnMuYWZ0ZXJSZW5kZXIodGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbmZlcm5vLk5PX09QO1xufTtcblxucmV0dXJuIENvbXBvbmVudCQxO1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2luZmVybm8vZGlzdC9pbmZlcm5vLWNvbXBvbmVudC5ub2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcbiAqIGluZmVybm8tY3JlYXRlLWVsZW1lbnQgdjEuMi4yXG4gKiAoYykgMjAxNyBEb21pbmljIEdhbm5hd2F5XG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdpbmZlcm5vJykpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnaW5mZXJubyddLCBmYWN0b3J5KSA6XG5cdChnbG9iYWwuSW5mZXJubyA9IGdsb2JhbC5JbmZlcm5vIHx8IHt9LCBnbG9iYWwuSW5mZXJuby5jcmVhdGVFbGVtZW50ID0gZmFjdG9yeShnbG9iYWwuSW5mZXJubykpO1xufSh0aGlzLCAoZnVuY3Rpb24gKGluZmVybm8pIHsgJ3VzZSBzdHJpY3QnO1xuXG4vLyB0aGlzIGlzIE1VQ0ggZmFzdGVyIHRoYW4gLmNvbnN0cnVjdG9yID09PSBBcnJheSBhbmQgaW5zdGFuY2VvZiBBcnJheVxuLy8gaW4gTm9kZSA3IGFuZCB0aGUgbGF0ZXIgdmVyc2lvbnMgb2YgVjgsIHNsb3dlciBpbiBvbGRlciB2ZXJzaW9ucyB0aG91Z2hcblxuZnVuY3Rpb24gaXNTdGF0ZWZ1bENvbXBvbmVudChvKSB7XG4gICAgcmV0dXJuICFpc1VuZGVmaW5lZChvLnByb3RvdHlwZSkgJiYgIWlzVW5kZWZpbmVkKG8ucHJvdG90eXBlLnJlbmRlcik7XG59XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWYob2JqKSB7XG4gICAgcmV0dXJuIGlzVW5kZWZpbmVkKG9iaikgfHwgaXNOdWxsKG9iaik7XG59XG5mdW5jdGlvbiBpc0ludmFsaWQob2JqKSB7XG4gICAgcmV0dXJuIGlzTnVsbChvYmopIHx8IG9iaiA9PT0gZmFsc2UgfHwgaXNUcnVlKG9iaikgfHwgaXNVbmRlZmluZWQob2JqKTtcbn1cblxuZnVuY3Rpb24gaXNBdHRyQW5FdmVudChhdHRyKSB7XG4gICAgcmV0dXJuIGF0dHJbMF0gPT09ICdvJyAmJiBhdHRyWzFdID09PSAnbicgJiYgYXR0ci5sZW5ndGggPiAzO1xufVxuZnVuY3Rpb24gaXNTdHJpbmcob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnO1xufVxuXG5mdW5jdGlvbiBpc051bGwob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gbnVsbDtcbn1cbmZ1bmN0aW9uIGlzVHJ1ZShvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB0cnVlO1xufVxuZnVuY3Rpb24gaXNVbmRlZmluZWQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNPYmplY3Qobykge1xuICAgIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCc7XG59XG5cbnZhciBjb21wb25lbnRIb29rcyA9IHtcbiAgICBvbkNvbXBvbmVudFdpbGxNb3VudDogdHJ1ZSxcbiAgICBvbkNvbXBvbmVudERpZE1vdW50OiB0cnVlLFxuICAgIG9uQ29tcG9uZW50V2lsbFVubW91bnQ6IHRydWUsXG4gICAgb25Db21wb25lbnRTaG91bGRVcGRhdGU6IHRydWUsXG4gICAgb25Db21wb25lbnRXaWxsVXBkYXRlOiB0cnVlLFxuICAgIG9uQ29tcG9uZW50RGlkVXBkYXRlOiB0cnVlXG59O1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCQxKG5hbWUsIHByb3BzKSB7XG4gICAgdmFyIF9jaGlsZHJlbiA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgICB3aGlsZSAoIGxlbi0tID4gMCApIF9jaGlsZHJlblsgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDIgXTtcblxuICAgIGlmIChpc0ludmFsaWQobmFtZSkgfHwgaXNPYmplY3QobmFtZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmZlcm5vIEVycm9yOiBjcmVhdGVFbGVtZW50KCkgbmFtZSBwYXJhbWV0ZXIgY2Fubm90IGJlIHVuZGVmaW5lZCwgbnVsbCwgZmFsc2Ugb3IgdHJ1ZSwgSXQgbXVzdCBiZSBhIHN0cmluZywgY2xhc3Mgb3IgZnVuY3Rpb24uJyk7XG4gICAgfVxuICAgIHZhciBjaGlsZHJlbiA9IF9jaGlsZHJlbjtcbiAgICB2YXIgcmVmID0gbnVsbDtcbiAgICB2YXIga2V5ID0gbnVsbDtcbiAgICB2YXIgZXZlbnRzID0gbnVsbDtcbiAgICB2YXIgZmxhZ3MgPSAwO1xuICAgIGlmIChfY2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKF9jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gX2NoaWxkcmVuWzBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKF9jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChpc1N0cmluZyhuYW1lKSkge1xuICAgICAgICBmbGFncyA9IDIgLyogSHRtbEVsZW1lbnQgKi87XG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnc3ZnJzpcbiAgICAgICAgICAgICAgICBmbGFncyA9IDEyOCAvKiBTdmdFbGVtZW50ICovO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaW5wdXQnOlxuICAgICAgICAgICAgICAgIGZsYWdzID0gNTEyIC8qIElucHV0RWxlbWVudCAqLztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgICAgICAgICAgICBmbGFncyA9IDEwMjQgLyogVGV4dGFyZWFFbGVtZW50ICovO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgICAgICAgICBmbGFncyA9IDIwNDggLyogU2VsZWN0RWxlbWVudCAqLztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgIH1cbiAgICAgICAgLypcbiAgICAgICAgIFRoaXMgZml4ZXMgZGUtb3B0aW1pc2F0aW9uOlxuICAgICAgICAgdXNlcyBvYmplY3QgS2V5cyBmb3IgbG9vcGluZyBwcm9wcyB0byBhdm9pZCBkZWxldGluZyBwcm9wcyBvZiBsb29wZWQgb2JqZWN0XG4gICAgICAgICAqL1xuICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYocHJvcHMpKSB7XG4gICAgICAgICAgICB2YXIgcHJvcEtleXMgPSBPYmplY3Qua2V5cyhwcm9wcyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3BLZXkgPSBwcm9wS2V5c1tpXTtcbiAgICAgICAgICAgICAgICBpZiAocHJvcEtleSA9PT0gJ2tleScpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gcHJvcHMua2V5O1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcHJvcHMua2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9wS2V5ID09PSAnY2hpbGRyZW4nICYmIGlzVW5kZWZpbmVkKGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuOyAvLyBhbHdheXMgZmF2b3VyIGNoaWxkcmVuIGFyZ3MsIGRlZmF1bHQgdG8gcHJvcHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvcEtleSA9PT0gJ3JlZicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmID0gcHJvcHMucmVmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc0F0dHJBbkV2ZW50KHByb3BLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBldmVudHNbcHJvcEtleV0gPSBwcm9wc1twcm9wS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHByb3BzW3Byb3BLZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZmxhZ3MgPSBpc1N0YXRlZnVsQ29tcG9uZW50KG5hbWUpID8gNCAvKiBDb21wb25lbnRDbGFzcyAqLyA6IDggLyogQ29tcG9uZW50RnVuY3Rpb24gKi87XG4gICAgICAgIGlmICghaXNVbmRlZmluZWQoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBpZiAoIXByb3BzKSB7XG4gICAgICAgICAgICAgICAgcHJvcHMgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgICAgICBjaGlsZHJlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKHByb3BzKSkge1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICBUaGlzIGZpeGVzIGRlLW9wdGltaXNhdGlvbjpcbiAgICAgICAgICAgICB1c2VzIG9iamVjdCBLZXlzIGZvciBsb29waW5nIHByb3BzIHRvIGF2b2lkIGRlbGV0aW5nIHByb3BzIG9mIGxvb3BlZCBvYmplY3RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIHByb3BLZXlzJDEgPSBPYmplY3Qua2V5cyhwcm9wcyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpJDEgPSAwOyBpJDEgPCBwcm9wS2V5cyQxLmxlbmd0aDsgaSQxKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcEtleSQxID0gcHJvcEtleXMkMVtpJDFdO1xuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnRIb29rc1twcm9wS2V5JDFdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWYgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZWZbcHJvcEtleSQxXSA9IHByb3BzW3Byb3BLZXkkMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3BLZXkkMSA9PT0gJ2tleScpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gcHJvcHMua2V5O1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcHJvcHMua2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW5mZXJuby5jcmVhdGVWTm9kZShmbGFncywgbmFtZSwgcHJvcHMsIGNoaWxkcmVuLCBldmVudHMsIGtleSwgcmVmKTtcbn1cblxucmV0dXJuIGNyZWF0ZUVsZW1lbnQkMTtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pbmZlcm5vL2Rpc3QvaW5mZXJuby1jcmVhdGUtZWxlbWVudC5ub2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcbiAqIGluZmVybm8gdjEuMi4yXG4gKiAoYykgMjAxNyBEb21pbmljIEdhbm5hd2F5XG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cykgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJ10sIGZhY3RvcnkpIDpcblx0KGZhY3RvcnkoKGdsb2JhbC5JbmZlcm5vID0gZ2xvYmFsLkluZmVybm8gfHwge30pKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoZXhwb3J0cykgeyAndXNlIHN0cmljdCc7XG5cbnZhciBOT19PUCA9ICckTk9fT1AnO1xudmFyIEVSUk9SX01TRyA9ICdhIHJ1bnRpbWUgZXJyb3Igb2NjdXJlZCEgVXNlIEluZmVybm8gaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnQgdG8gZmluZCB0aGUgZXJyb3IuJztcbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQ7XG5cbi8vIHRoaXMgaXMgTVVDSCBmYXN0ZXIgdGhhbiAuY29uc3RydWN0b3IgPT09IEFycmF5IGFuZCBpbnN0YW5jZW9mIEFycmF5XG4vLyBpbiBOb2RlIDcgYW5kIHRoZSBsYXRlciB2ZXJzaW9ucyBvZiBWOCwgc2xvd2VyIGluIG9sZGVyIHZlcnNpb25zIHRob3VnaFxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuZnVuY3Rpb24gaXNTdGF0ZWZ1bENvbXBvbmVudChvKSB7XG4gICAgcmV0dXJuICFpc1VuZGVmaW5lZChvLnByb3RvdHlwZSkgJiYgIWlzVW5kZWZpbmVkKG8ucHJvdG90eXBlLnJlbmRlcik7XG59XG5mdW5jdGlvbiBpc1N0cmluZ09yTnVtYmVyKG9iaikge1xuICAgIHZhciB0eXBlID0gdHlwZW9mIG9iajtcbiAgICByZXR1cm4gdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ251bWJlcic7XG59XG5mdW5jdGlvbiBpc051bGxPclVuZGVmKG9iaikge1xuICAgIHJldHVybiBpc1VuZGVmaW5lZChvYmopIHx8IGlzTnVsbChvYmopO1xufVxuZnVuY3Rpb24gaXNJbnZhbGlkKG9iaikge1xuICAgIHJldHVybiBpc051bGwob2JqKSB8fCBvYmogPT09IGZhbHNlIHx8IGlzVHJ1ZShvYmopIHx8IGlzVW5kZWZpbmVkKG9iaik7XG59XG5mdW5jdGlvbiBpc0Z1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gaXNBdHRyQW5FdmVudChhdHRyKSB7XG4gICAgcmV0dXJuIGF0dHJbMF0gPT09ICdvJyAmJiBhdHRyWzFdID09PSAnbicgJiYgYXR0ci5sZW5ndGggPiAzO1xufVxuZnVuY3Rpb24gaXNTdHJpbmcob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnO1xufVxuZnVuY3Rpb24gaXNOdW1iZXIob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdudW1iZXInO1xufVxuZnVuY3Rpb24gaXNOdWxsKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IG51bGw7XG59XG5mdW5jdGlvbiBpc1RydWUob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzT2JqZWN0KG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnO1xufVxuZnVuY3Rpb24gdGhyb3dFcnJvcihtZXNzYWdlKSB7XG4gICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICAgIG1lc3NhZ2UgPSBFUlJPUl9NU0c7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcigoXCJJbmZlcm5vIEVycm9yOiBcIiArIG1lc3NhZ2UpKTtcbn1cbmZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbn1cbnZhciBFTVBUWV9PQkogPSB7fTtcblxuZnVuY3Rpb24gYXBwbHlLZXkoa2V5LCB2Tm9kZSkge1xuICAgIHZOb2RlLmtleSA9IGtleTtcbiAgICByZXR1cm4gdk5vZGU7XG59XG5mdW5jdGlvbiBhcHBseUtleUlmTWlzc2luZyhrZXksIHZOb2RlKSB7XG4gICAgaWYgKGlzTnVtYmVyKGtleSkpIHtcbiAgICAgICAga2V5ID0gXCIuXCIgKyBrZXk7XG4gICAgfVxuICAgIGlmIChpc051bGwodk5vZGUua2V5KSB8fCB2Tm9kZS5rZXlbMF0gPT09ICcuJykge1xuICAgICAgICByZXR1cm4gYXBwbHlLZXkoa2V5LCB2Tm9kZSk7XG4gICAgfVxuICAgIHJldHVybiB2Tm9kZTtcbn1cbmZ1bmN0aW9uIGFwcGx5S2V5UHJlZml4KGtleSwgdk5vZGUpIHtcbiAgICB2Tm9kZS5rZXkgPSBrZXkgKyB2Tm9kZS5rZXk7XG4gICAgcmV0dXJuIHZOb2RlO1xufVxuZnVuY3Rpb24gX25vcm1hbGl6ZVZOb2Rlcyhub2RlcywgcmVzdWx0LCBpbmRleCwgY3VycmVudEtleSkge1xuICAgIGZvciAoOyBpbmRleCA8IG5vZGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB2YXIgbiA9IG5vZGVzW2luZGV4XTtcbiAgICAgICAgdmFyIGtleSA9IGN1cnJlbnRLZXkgKyBcIi5cIiArIGluZGV4O1xuICAgICAgICBpZiAoIWlzSW52YWxpZChuKSkge1xuICAgICAgICAgICAgaWYgKGlzQXJyYXkobikpIHtcbiAgICAgICAgICAgICAgICBfbm9ybWFsaXplVk5vZGVzKG4sIHJlc3VsdCwgMCwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpc1N0cmluZ09yTnVtYmVyKG4pKSB7XG4gICAgICAgICAgICAgICAgICAgIG4gPSBjcmVhdGVUZXh0Vk5vZGUobik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzVk5vZGUobikgJiYgbi5kb20gfHwgKG4ua2V5ICYmIG4ua2V5WzBdID09PSAnLicpKSB7XG4gICAgICAgICAgICAgICAgICAgIG4gPSBjbG9uZVZOb2RlKG4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXNOdWxsKG4ua2V5KSB8fCBuLmtleVswXSA9PT0gJy4nKSB7XG4gICAgICAgICAgICAgICAgICAgIG4gPSBhcHBseUtleShrZXksIG4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbiA9IGFwcGx5S2V5UHJlZml4KGN1cnJlbnRLZXksIG4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVZOb2Rlcyhub2Rlcykge1xuICAgIHZhciBuZXdOb2RlcztcbiAgICAvLyB3ZSBhc3NpZ24gJCB3aGljaCBiYXNpY2FsbHkgbWVhbnMgd2UndmUgZmxhZ2dlZCB0aGlzIGFycmF5IGZvciBmdXR1cmUgbm90ZVxuICAgIC8vIGlmIGl0IGNvbWVzIGJhY2sgYWdhaW4sIHdlIG5lZWQgdG8gY2xvbmUgaXQsIGFzIHBlb3BsZSBhcmUgdXNpbmcgaXRcbiAgICAvLyBpbiBhbiBpbW11dGFibGUgd2F5XG4gICAgLy8gdHNsaW50OmRpc2FibGVcbiAgICBpZiAobm9kZXNbJyQnXSkge1xuICAgICAgICBub2RlcyA9IG5vZGVzLnNsaWNlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBub2Rlc1snJCddID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8gdHNsaW50OmVuYWJsZVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG4gPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKGlzSW52YWxpZChuKSB8fCBpc0FycmF5KG4pKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gKG5ld05vZGVzIHx8IG5vZGVzKS5zbGljZSgwLCBpKTtcbiAgICAgICAgICAgIF9ub3JtYWxpemVWTm9kZXMobm9kZXMsIHJlc3VsdCwgaSwgXCJcIik7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXIobikpIHtcbiAgICAgICAgICAgIGlmICghbmV3Tm9kZXMpIHtcbiAgICAgICAgICAgICAgICBuZXdOb2RlcyA9IG5vZGVzLnNsaWNlKDAsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3Tm9kZXMucHVzaChhcHBseUtleUlmTWlzc2luZyhpLCBjcmVhdGVUZXh0Vk5vZGUobikpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoaXNWTm9kZShuKSAmJiBuLmRvbSkgfHwgKGlzTnVsbChuLmtleSkgJiYgIShuLmZsYWdzICYgNjQgLyogSGFzTm9uS2V5ZWRDaGlsZHJlbiAqLykpKSB7XG4gICAgICAgICAgICBpZiAoIW5ld05vZGVzKSB7XG4gICAgICAgICAgICAgICAgbmV3Tm9kZXMgPSBub2Rlcy5zbGljZSgwLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld05vZGVzLnB1c2goYXBwbHlLZXlJZk1pc3NpbmcoaSwgY2xvbmVWTm9kZShuKSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5ld05vZGVzKSB7XG4gICAgICAgICAgICBuZXdOb2Rlcy5wdXNoKGFwcGx5S2V5SWZNaXNzaW5nKGksIGNsb25lVk5vZGUobikpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3Tm9kZXMgfHwgbm9kZXM7XG59XG5mdW5jdGlvbiBub3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbikge1xuICAgIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICByZXR1cm4gbm9ybWFsaXplVk5vZGVzKGNoaWxkcmVuKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNWTm9kZShjaGlsZHJlbikgJiYgY2hpbGRyZW4uZG9tKSB7XG4gICAgICAgIHJldHVybiBjbG9uZVZOb2RlKGNoaWxkcmVuKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplUHJvcHModk5vZGUsIHByb3BzLCBjaGlsZHJlbikge1xuICAgIGlmICghKHZOb2RlLmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSAmJiBpc051bGxPclVuZGVmKGNoaWxkcmVuKSAmJiAhaXNOdWxsT3JVbmRlZihwcm9wcy5jaGlsZHJlbikpIHtcbiAgICAgICAgdk5vZGUuY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcbiAgICB9XG4gICAgaWYgKHByb3BzLnJlZikge1xuICAgICAgICB2Tm9kZS5yZWYgPSBwcm9wcy5yZWY7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5yZWY7XG4gICAgfVxuICAgIGlmIChwcm9wcy5ldmVudHMpIHtcbiAgICAgICAgdk5vZGUuZXZlbnRzID0gcHJvcHMuZXZlbnRzO1xuICAgIH1cbiAgICBpZiAoIWlzTnVsbE9yVW5kZWYocHJvcHMua2V5KSkge1xuICAgICAgICB2Tm9kZS5rZXkgPSBwcm9wcy5rZXk7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5rZXk7XG4gICAgfVxufVxuZnVuY3Rpb24gY29weVByb3BzVG8oY29weUZyb20sIGNvcHlUbykge1xuICAgIGZvciAodmFyIHByb3AgaW4gY29weUZyb20pIHtcbiAgICAgICAgaWYgKGlzVW5kZWZpbmVkKGNvcHlUb1twcm9wXSkpIHtcbiAgICAgICAgICAgIGNvcHlUb1twcm9wXSA9IGNvcHlGcm9tW3Byb3BdO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gbm9ybWFsaXplRWxlbWVudCh0eXBlLCB2Tm9kZSkge1xuICAgIGlmICh0eXBlID09PSAnc3ZnJykge1xuICAgICAgICB2Tm9kZS5mbGFncyA9IDEyOCAvKiBTdmdFbGVtZW50ICovO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnaW5wdXQnKSB7XG4gICAgICAgIHZOb2RlLmZsYWdzID0gNTEyIC8qIElucHV0RWxlbWVudCAqLztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgdk5vZGUuZmxhZ3MgPSAyMDQ4IC8qIFNlbGVjdEVsZW1lbnQgKi87XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd0ZXh0YXJlYScpIHtcbiAgICAgICAgdk5vZGUuZmxhZ3MgPSAxMDI0IC8qIFRleHRhcmVhRWxlbWVudCAqLztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ21lZGlhJykge1xuICAgICAgICB2Tm9kZS5mbGFncyA9IDI1NiAvKiBNZWRpYUVsZW1lbnQgKi87XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2Tm9kZS5mbGFncyA9IDIgLyogSHRtbEVsZW1lbnQgKi87XG4gICAgfVxufVxuZnVuY3Rpb24gbm9ybWFsaXplKHZOb2RlKSB7XG4gICAgdmFyIHByb3BzID0gdk5vZGUucHJvcHM7XG4gICAgdmFyIGhhc1Byb3BzID0gIWlzTnVsbChwcm9wcyk7XG4gICAgdmFyIHR5cGUgPSB2Tm9kZS50eXBlO1xuICAgIHZhciBjaGlsZHJlbiA9IHZOb2RlLmNoaWxkcmVuO1xuICAgIC8vIGNvbnZlcnQgYSB3cm9uZ2x5IGNyZWF0ZWQgdHlwZSBiYWNrIHRvIGVsZW1lbnRcbiAgICBpZiAoaXNTdHJpbmcodHlwZSkgJiYgKHZOb2RlLmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSkge1xuICAgICAgICBub3JtYWxpemVFbGVtZW50KHR5cGUsIHZOb2RlKTtcbiAgICAgICAgaWYgKGhhc1Byb3BzICYmIHByb3BzLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICB2Tm9kZS5jaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuICAgICAgICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGFzUHJvcHMpIHtcbiAgICAgICAgbm9ybWFsaXplUHJvcHModk5vZGUsIHByb3BzLCBjaGlsZHJlbik7XG4gICAgfVxuICAgIGlmICghaXNJbnZhbGlkKGNoaWxkcmVuKSkge1xuICAgICAgICB2Tm9kZS5jaGlsZHJlbiA9IG5vcm1hbGl6ZUNoaWxkcmVuKGNoaWxkcmVuKTtcbiAgICB9XG4gICAgaWYgKGhhc1Byb3BzICYmICFpc0ludmFsaWQocHJvcHMuY2hpbGRyZW4pKSB7XG4gICAgICAgIHByb3BzLmNoaWxkcmVuID0gbm9ybWFsaXplQ2hpbGRyZW4ocHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAvLyBUaGlzIGNvZGUgd2lsbCBiZSBzdHJpcHBlZCBvdXQgZnJvbSBwcm9kdWN0aW9uIENPREVcbiAgICAgICAgLy8gSXQgd2lsbCBoZWxwIHVzZXJzIHRvIHRyYWNrIGVycm9ycyBpbiB0aGVpciBhcHBsaWNhdGlvbnMuXG4gICAgICAgIHZhciB2ZXJpZnlLZXlzID0gZnVuY3Rpb24gKHZOb2Rlcykge1xuICAgICAgICAgICAgdmFyIGtleVZhbHVlcyA9IHZOb2Rlcy5tYXAoZnVuY3Rpb24gKHZub2RlKSB7IHJldHVybiB2bm9kZS5rZXk7IH0pO1xuICAgICAgICAgICAga2V5VmFsdWVzLnNvbWUoZnVuY3Rpb24gKGl0ZW0sIGlkeCkge1xuICAgICAgICAgICAgICAgIHZhciBoYXNEdXBsaWNhdGUgPSBrZXlWYWx1ZXMuaW5kZXhPZihpdGVtKSAhPT0gaWR4O1xuICAgICAgICAgICAgICAgIGlmIChoYXNEdXBsaWNhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgd2FybmluZygnSW5mZXJubyBub3JtYWxpc2F0aW9uKC4uLik6IEVuY291bnRlcmVkIHR3byBjaGlsZHJlbiB3aXRoIHNhbWUga2V5LCBhbGwga2V5cyBtdXN0IGJlIHVuaXF1ZSB3aXRoaW4gaXRzIHNpYmxpbmdzLiBEdXBsaWNhdGVkIGtleSBpczonICsgaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBoYXNEdXBsaWNhdGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHZOb2RlLmNoaWxkcmVuICYmIEFycmF5LmlzQXJyYXkodk5vZGUuY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICB2ZXJpZnlLZXlzKHZOb2RlLmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxudmFyIG9wdGlvbnMgPSB7XG4gICAgcmVjeWNsaW5nRW5hYmxlZDogdHJ1ZSxcbiAgICBmaW5kRE9NTm9kZUVuYWJsZWQ6IGZhbHNlLFxuICAgIHJvb3RzOiBudWxsLFxuICAgIGNyZWF0ZVZOb2RlOiBudWxsLFxuICAgIGJlZm9yZVJlbmRlcjogbnVsbCxcbiAgICBhZnRlclJlbmRlcjogbnVsbCxcbiAgICBhZnRlck1vdW50OiBudWxsLFxuICAgIGFmdGVyVXBkYXRlOiBudWxsLFxuICAgIGJlZm9yZVVubW91bnQ6IG51bGxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVZOb2RlKGZsYWdzLCB0eXBlLCBwcm9wcywgY2hpbGRyZW4sIGV2ZW50cywga2V5LCByZWYsIG5vTm9ybWFsaXNlKSB7XG4gICAgaWYgKGZsYWdzICYgMTYgLyogQ29tcG9uZW50VW5rbm93biAqLykge1xuICAgICAgICBmbGFncyA9IGlzU3RhdGVmdWxDb21wb25lbnQodHlwZSkgPyA0IC8qIENvbXBvbmVudENsYXNzICovIDogOCAvKiBDb21wb25lbnRGdW5jdGlvbiAqLztcbiAgICB9XG4gICAgdmFyIHZOb2RlID0ge1xuICAgICAgICBjaGlsZHJlbjogaXNVbmRlZmluZWQoY2hpbGRyZW4pID8gbnVsbCA6IGNoaWxkcmVuLFxuICAgICAgICBkb206IG51bGwsXG4gICAgICAgIGV2ZW50czogZXZlbnRzIHx8IG51bGwsXG4gICAgICAgIGZsYWdzOiBmbGFncyxcbiAgICAgICAga2V5OiBpc1VuZGVmaW5lZChrZXkpID8gbnVsbCA6IGtleSxcbiAgICAgICAgcHJvcHM6IHByb3BzIHx8IG51bGwsXG4gICAgICAgIHJlZjogcmVmIHx8IG51bGwsXG4gICAgICAgIHR5cGU6IHR5cGVcbiAgICB9O1xuICAgIGlmICghbm9Ob3JtYWxpc2UpIHtcbiAgICAgICAgbm9ybWFsaXplKHZOb2RlKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuY3JlYXRlVk5vZGUpIHtcbiAgICAgICAgb3B0aW9ucy5jcmVhdGVWTm9kZSh2Tm9kZSk7XG4gICAgfVxuICAgIHJldHVybiB2Tm9kZTtcbn1cbmZ1bmN0aW9uIGNsb25lVk5vZGUodk5vZGVUb0Nsb25lLCBwcm9wcykge1xuICAgIHZhciBfY2hpbGRyZW4gPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG4gICAgd2hpbGUgKCBsZW4tLSA+IDAgKSBfY2hpbGRyZW5bIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gKyAyIF07XG5cbiAgICB2YXIgY2hpbGRyZW4gPSBfY2hpbGRyZW47XG4gICAgaWYgKF9jaGlsZHJlbi5sZW5ndGggPiAwICYmICFpc051bGwoX2NoaWxkcmVuWzBdKSkge1xuICAgICAgICBpZiAoIXByb3BzKSB7XG4gICAgICAgICAgICBwcm9wcyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChfY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IF9jaGlsZHJlblswXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNVbmRlZmluZWQocHJvcHMuY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzQXJyYXkocHJvcHMuY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4uY29uY2F0KGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuID0gW3Byb3BzLmNoaWxkcmVuXS5jb25jYXQoY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpc0FycmF5KHByb3BzLmNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGlsZHJlbi5wdXNoKGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuID0gW3Byb3BzLmNoaWxkcmVuXTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2hpbGRyZW4ucHVzaChjaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgICB2YXIgbmV3Vk5vZGU7XG4gICAgaWYgKGlzQXJyYXkodk5vZGVUb0Nsb25lKSkge1xuICAgICAgICB2YXIgdG1wQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2Tm9kZVRvQ2xvbmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRtcEFycmF5LnB1c2goY2xvbmVWTm9kZSh2Tm9kZVRvQ2xvbmVbaV0pKTtcbiAgICAgICAgfVxuICAgICAgICBuZXdWTm9kZSA9IHRtcEFycmF5O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGZsYWdzID0gdk5vZGVUb0Nsb25lLmZsYWdzO1xuICAgICAgICB2YXIgZXZlbnRzID0gdk5vZGVUb0Nsb25lLmV2ZW50cyB8fCAocHJvcHMgJiYgcHJvcHMuZXZlbnRzKSB8fCBudWxsO1xuICAgICAgICB2YXIga2V5ID0gIWlzTnVsbE9yVW5kZWYodk5vZGVUb0Nsb25lLmtleSkgPyB2Tm9kZVRvQ2xvbmUua2V5IDogKHByb3BzID8gcHJvcHMua2V5IDogbnVsbCk7XG4gICAgICAgIHZhciByZWYgPSB2Tm9kZVRvQ2xvbmUucmVmIHx8IChwcm9wcyA/IHByb3BzLnJlZiA6IG51bGwpO1xuICAgICAgICBpZiAoZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgICAgIG5ld1ZOb2RlID0gY3JlYXRlVk5vZGUoZmxhZ3MsIHZOb2RlVG9DbG9uZS50eXBlLCBPYmplY3QuYXNzaWduKHt9LCB2Tm9kZVRvQ2xvbmUucHJvcHMsIHByb3BzKSwgbnVsbCwgZXZlbnRzLCBrZXksIHJlZiwgdHJ1ZSk7XG4gICAgICAgICAgICB2YXIgbmV3UHJvcHMgPSBuZXdWTm9kZS5wcm9wcztcbiAgICAgICAgICAgIGlmIChuZXdQcm9wcykge1xuICAgICAgICAgICAgICAgIHZhciBuZXdDaGlsZHJlbiA9IG5ld1Byb3BzLmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gYWxzbyBjbG9uZSBjb21wb25lbnQgY2hpbGRyZW4gdGhhdCBhcmUgaW4gcHJvcHNcbiAgICAgICAgICAgICAgICAvLyBhcyB0aGUgY2hpbGRyZW4gbWF5IGFsc28gaGF2ZSBiZWVuIGhvaXN0ZWRcbiAgICAgICAgICAgICAgICBpZiAobmV3Q2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQXJyYXkobmV3Q2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpJDEgPSAwOyBpJDEgPCBuZXdDaGlsZHJlbi5sZW5ndGg7IGkkMSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gbmV3Q2hpbGRyZW5baSQxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzSW52YWxpZChjaGlsZCkgJiYgaXNWTm9kZShjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvcHMuY2hpbGRyZW5baSQxXSA9IGNsb25lVk5vZGUoY2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpc1ZOb2RlKG5ld0NoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvcHMuY2hpbGRyZW4gPSBjbG9uZVZOb2RlKG5ld0NoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld1ZOb2RlLmNoaWxkcmVuID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmbGFncyAmIDM5NzAgLyogRWxlbWVudCAqLykge1xuICAgICAgICAgICAgY2hpbGRyZW4gPSAocHJvcHMgJiYgcHJvcHMuY2hpbGRyZW4pIHx8IHZOb2RlVG9DbG9uZS5jaGlsZHJlbjtcbiAgICAgICAgICAgIG5ld1ZOb2RlID0gY3JlYXRlVk5vZGUoZmxhZ3MsIHZOb2RlVG9DbG9uZS50eXBlLCBPYmplY3QuYXNzaWduKHt9LCB2Tm9kZVRvQ2xvbmUucHJvcHMsIHByb3BzKSwgY2hpbGRyZW4sIGV2ZW50cywga2V5LCByZWYsICFjaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZmxhZ3MgJiAxIC8qIFRleHQgKi8pIHtcbiAgICAgICAgICAgIG5ld1ZOb2RlID0gY3JlYXRlVGV4dFZOb2RlKHZOb2RlVG9DbG9uZS5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld1ZOb2RlO1xufVxuZnVuY3Rpb24gY3JlYXRlVm9pZFZOb2RlKCkge1xuICAgIHJldHVybiBjcmVhdGVWTm9kZSg0MDk2IC8qIFZvaWQgKi8pO1xufVxuZnVuY3Rpb24gY3JlYXRlVGV4dFZOb2RlKHRleHQpIHtcbiAgICByZXR1cm4gY3JlYXRlVk5vZGUoMSAvKiBUZXh0ICovLCBudWxsLCBudWxsLCB0ZXh0LCBudWxsLCBudWxsLCBudWxsLCB0cnVlKTtcbn1cbmZ1bmN0aW9uIGlzVk5vZGUobykge1xuICAgIHJldHVybiAhIW8uZmxhZ3M7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdERlZmF1bHRzKHN0cmluZywgb2JqZWN0LCB2YWx1ZSkge1xuICAgIC8qIGVzbGludCBuby1yZXR1cm4tYXNzaWduOiAwICovXG4gICAgc3RyaW5nLnNwbGl0KCcsJykuZm9yRWFjaChmdW5jdGlvbiAoaSkgeyByZXR1cm4gb2JqZWN0W2ldID0gdmFsdWU7IH0pO1xufVxudmFyIHhsaW5rTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc7XG52YXIgeG1sTlMgPSAnaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlJztcbnZhciBzdmdOUyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG52YXIgc3RyaWN0UHJvcHMgPSB7fTtcbnZhciBib29sZWFuUHJvcHMgPSB7fTtcbnZhciBuYW1lc3BhY2VzID0ge307XG52YXIgaXNVbml0bGVzc051bWJlciA9IHt9O1xudmFyIHNraXBQcm9wcyA9IHt9O1xudmFyIGRlaHlwaGVuUHJvcHMgPSB7XG4gICAgaHR0cEVxdWl2OiAnaHR0cC1lcXVpdicsXG4gICAgYWNjZXB0Q2hhcnNldDogJ2FjY2VwdC1jaGFyc2V0J1xufTtcbnZhciBwcm9iYWJseUtlYmFiUHJvcHMgPSAvXihhY2NlbnRIfGFyYWJpY0Z8Y2FwSHxmb250W0ZTVlddfGdseXBoW05PXXxob3JpeltBT118cGFub3NlMXxyZW5kZXJpbmdJfHN0cmlrZXRocm91Z2hbUFRdfHVuZGVybGluZVtQVF18dltBSElNXXx2ZXJ0W0FPXXx4SHxhbGlnbm1lbnRCfGJhc2VsaW5lU3xjbGlwW1BSXXxjb2xvcltJUFJdfGRvbWluYW50QnxlbmFibGVCfGZpbGxbT1JdfGZsb29kW0NPRl18aW1hZ2VSfGxldHRlclN8bGlnaHRpbmdDfG1hcmtlcltFTVNdfHBvaW50ZXJFfHNoYXBlUnxzdG9wW0NPXXxzdHJva2VbRExNT1ddfHRleHRbQURSXXx1bmljb2RlQnx3b3JkU3x3cml0aW5nTSkuKi87XG5mdW5jdGlvbiBrZWJhYml6ZShzdHIsIHNtYWxsTGV0dGVyLCBsYXJnZUxldHRlcikge1xuICAgIHJldHVybiAoc21hbGxMZXR0ZXIgKyBcIi1cIiArIChsYXJnZUxldHRlci50b0xvd2VyQ2FzZSgpKSk7XG59XG52YXIgZGVsZWdhdGVkUHJvcHMgPSB7fTtcbmNvbnN0cnVjdERlZmF1bHRzKCd4bGluazpocmVmLHhsaW5rOmFyY3JvbGUseGxpbms6YWN0dWF0ZSx4bGluazpyb2xlLHhsaW5rOnRpdGxlZix4bGluazp0eXBlJywgbmFtZXNwYWNlcywgeGxpbmtOUyk7XG5jb25zdHJ1Y3REZWZhdWx0cygneG1sOmJhc2UseG1sOmxhbmcseG1sOnNwYWNlJywgbmFtZXNwYWNlcywgeG1sTlMpO1xuY29uc3RydWN0RGVmYXVsdHMoJ3ZvbHVtZSxkZWZhdWx0VmFsdWUsZGVmYXVsdENoZWNrZWQnLCBzdHJpY3RQcm9wcywgdHJ1ZSk7XG5jb25zdHJ1Y3REZWZhdWx0cygnY2hpbGRyZW4sY2hpbGRyZW5UeXBlLHJlZixrZXksc2VsZWN0ZWQsY2hlY2tlZCxtdWx0aXBsZScsIHNraXBQcm9wcywgdHJ1ZSk7XG5jb25zdHJ1Y3REZWZhdWx0cygnb25DbGljayxvbk1vdXNlRG93bixvbk1vdXNlVXAsb25Nb3VzZU1vdmUsb25TdWJtaXQsb25EYmxDbGljayxvbktleURvd24sb25LZXlVcCxvbktleVByZXNzJywgZGVsZWdhdGVkUHJvcHMsIHRydWUpO1xuY29uc3RydWN0RGVmYXVsdHMoJ211dGVkLHNjb3BlZCxsb29wLG9wZW4sY2hlY2tlZCxkZWZhdWx0LGNhcHR1cmUsZGlzYWJsZWQscmVhZE9ubHkscmVxdWlyZWQsYXV0b3BsYXksY29udHJvbHMsc2VhbWxlc3MscmV2ZXJzZWQsYWxsb3dmdWxsc2NyZWVuLG5vdmFsaWRhdGUsaGlkZGVuJywgYm9vbGVhblByb3BzLCB0cnVlKTtcbmNvbnN0cnVjdERlZmF1bHRzKCdhbmltYXRpb25JdGVyYXRpb25Db3VudCxib3JkZXJJbWFnZU91dHNldCxib3JkZXJJbWFnZVNsaWNlLGJvcmRlckltYWdlV2lkdGgsYm94RmxleCxib3hGbGV4R3JvdXAsYm94T3JkaW5hbEdyb3VwLGNvbHVtbkNvdW50LGZsZXgsZmxleEdyb3csZmxleFBvc2l0aXZlLGZsZXhTaHJpbmssZmxleE5lZ2F0aXZlLGZsZXhPcmRlcixncmlkUm93LGdyaWRDb2x1bW4sZm9udFdlaWdodCxsaW5lQ2xhbXAsbGluZUhlaWdodCxvcGFjaXR5LG9yZGVyLG9ycGhhbnMsdGFiU2l6ZSx3aWRvd3MsekluZGV4LHpvb20sZmlsbE9wYWNpdHksZmxvb2RPcGFjaXR5LHN0b3BPcGFjaXR5LHN0cm9rZURhc2hhcnJheSxzdHJva2VEYXNob2Zmc2V0LHN0cm9rZU1pdGVybGltaXQsc3Ryb2tlT3BhY2l0eSxzdHJva2VXaWR0aCwnLCBpc1VuaXRsZXNzTnVtYmVyLCB0cnVlKTtcblxudmFyIExpZmVjeWNsZSA9IGZ1bmN0aW9uIExpZmVjeWNsZSgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgIHRoaXMuZmFzdFVubW91bnQgPSB0cnVlO1xufTtcbkxpZmVjeWNsZS5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lciAoY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcbn07XG5MaWZlY3ljbGUucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbiB0cmlnZ2VyICgpIHtcbiAgICAgICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMkMS5saXN0ZW5lcnNbaV0oKTtcbiAgICB9XG59O1xuXG52YXIgaXNpT1MgPSBpc0Jyb3dzZXIgJiYgISFuYXZpZ2F0b3IucGxhdGZvcm0gJiYgL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnBsYXRmb3JtKTtcbnZhciBkZWxlZ2F0ZWRFdmVudHMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBoYW5kbGVFdmVudChuYW1lLCBsYXN0RXZlbnQsIG5leHRFdmVudCwgZG9tKSB7XG4gICAgdmFyIGRlbGVnYXRlZFJvb3RzID0gZGVsZWdhdGVkRXZlbnRzLmdldChuYW1lKTtcbiAgICBpZiAobmV4dEV2ZW50KSB7XG4gICAgICAgIGlmICghZGVsZWdhdGVkUm9vdHMpIHtcbiAgICAgICAgICAgIGRlbGVnYXRlZFJvb3RzID0geyBpdGVtczogbmV3IE1hcCgpLCBjb3VudDogMCwgZG9jRXZlbnQ6IG51bGwgfTtcbiAgICAgICAgICAgIHZhciBkb2NFdmVudCA9IGF0dGFjaEV2ZW50VG9Eb2N1bWVudChuYW1lLCBkZWxlZ2F0ZWRSb290cyk7XG4gICAgICAgICAgICBkZWxlZ2F0ZWRSb290cy5kb2NFdmVudCA9IGRvY0V2ZW50O1xuICAgICAgICAgICAgZGVsZWdhdGVkRXZlbnRzLnNldChuYW1lLCBkZWxlZ2F0ZWRSb290cyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFsYXN0RXZlbnQpIHtcbiAgICAgICAgICAgIGRlbGVnYXRlZFJvb3RzLmNvdW50Kys7XG4gICAgICAgICAgICBpZiAoaXNpT1MgJiYgbmFtZSA9PT0gJ29uQ2xpY2snKSB7XG4gICAgICAgICAgICAgICAgdHJhcENsaWNrT25Ob25JbnRlcmFjdGl2ZUVsZW1lbnQoZG9tKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkZWxlZ2F0ZWRSb290cy5pdGVtcy5zZXQoZG9tLCBuZXh0RXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChkZWxlZ2F0ZWRSb290cykge1xuICAgICAgICBpZiAoZGVsZWdhdGVkUm9vdHMuaXRlbXMuaGFzKGRvbSkpIHtcbiAgICAgICAgICAgIGRlbGVnYXRlZFJvb3RzLmNvdW50LS07XG4gICAgICAgICAgICBkZWxlZ2F0ZWRSb290cy5pdGVtcy5kZWxldGUoZG9tKTtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZWRSb290cy5jb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobm9ybWFsaXplRXZlbnROYW1lKG5hbWUpLCBkZWxlZ2F0ZWRSb290cy5kb2NFdmVudCk7XG4gICAgICAgICAgICAgICAgZGVsZWdhdGVkRXZlbnRzLmRlbGV0ZShuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoZXZlbnQsIGRvbSwgaXRlbXMsIGNvdW50LCBldmVudERhdGEpIHtcbiAgICB2YXIgZXZlbnRzVG9UcmlnZ2VyID0gaXRlbXMuZ2V0KGRvbSk7XG4gICAgaWYgKGV2ZW50c1RvVHJpZ2dlcikge1xuICAgICAgICBjb3VudC0tO1xuICAgICAgICAvLyBsaW5rRXZlbnQgb2JqZWN0XG4gICAgICAgIGV2ZW50RGF0YS5kb20gPSBkb207XG4gICAgICAgIGlmIChldmVudHNUb1RyaWdnZXIuZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50c1RvVHJpZ2dlci5ldmVudChldmVudHNUb1RyaWdnZXIuZGF0YSwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZlbnRzVG9UcmlnZ2VyKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnREYXRhLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgdmFyIHBhcmVudERvbSA9IGRvbS5wYXJlbnROb2RlO1xuICAgICAgICBpZiAocGFyZW50RG9tIHx8IHBhcmVudERvbSA9PT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChldmVudCwgcGFyZW50RG9tLCBpdGVtcywgY291bnQsIGV2ZW50RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBub3JtYWxpemVFdmVudE5hbWUobmFtZSkge1xuICAgIHJldHVybiBuYW1lLnN1YnN0cigyKS50b0xvd2VyQ2FzZSgpO1xufVxuZnVuY3Rpb24gYXR0YWNoRXZlbnRUb0RvY3VtZW50KG5hbWUsIGRlbGVnYXRlZFJvb3RzKSB7XG4gICAgdmFyIGRvY0V2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBldmVudERhdGEgPSB7XG4gICAgICAgICAgICBzdG9wUHJvcGFnYXRpb246IGZhbHNlLFxuICAgICAgICAgICAgZG9tOiBkb2N1bWVudFxuICAgICAgICB9O1xuICAgICAgICAvLyB3ZSBoYXZlIHRvIGRvIHRoaXMgYXMgc29tZSBicm93c2VycyByZWN5Y2xlIHRoZSBzYW1lIEV2ZW50IGJldHdlZW4gY2FsbHNcbiAgICAgICAgLy8gc28gd2UgbmVlZCB0byBtYWtlIHRoZSBwcm9wZXJ0eSBjb25maWd1cmFibGVcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV2ZW50LCAnY3VycmVudFRhcmdldCcsIHtcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudERhdGEuZG9tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZXZlbnREYXRhLnN0b3BQcm9wYWdhdGlvbiA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBjb3VudCA9IGRlbGVnYXRlZFJvb3RzLmNvdW50O1xuICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGV2ZW50LCBldmVudC50YXJnZXQsIGRlbGVnYXRlZFJvb3RzLml0ZW1zLCBjb3VudCwgZXZlbnREYXRhKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihub3JtYWxpemVFdmVudE5hbWUobmFtZSksIGRvY0V2ZW50KTtcbiAgICByZXR1cm4gZG9jRXZlbnQ7XG59XG5mdW5jdGlvbiBlbXB0eUZuKCkgeyB9XG5mdW5jdGlvbiB0cmFwQ2xpY2tPbk5vbkludGVyYWN0aXZlRWxlbWVudChkb20pIHtcbiAgICAvLyBNb2JpbGUgU2FmYXJpIGRvZXMgbm90IGZpcmUgcHJvcGVybHkgYnViYmxlIGNsaWNrIGV2ZW50cyBvblxuICAgIC8vIG5vbi1pbnRlcmFjdGl2ZSBlbGVtZW50cywgd2hpY2ggbWVhbnMgZGVsZWdhdGVkIGNsaWNrIGxpc3RlbmVycyBkbyBub3RcbiAgICAvLyBmaXJlLiBUaGUgd29ya2Fyb3VuZCBmb3IgdGhpcyBidWcgaW52b2x2ZXMgYXR0YWNoaW5nIGFuIGVtcHR5IGNsaWNrXG4gICAgLy8gbGlzdGVuZXIgb24gdGhlIHRhcmdldCBub2RlLlxuICAgIC8vIGh0dHA6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDEwLzA5L2NsaWNrX2V2ZW50X2RlbC5odG1sXG4gICAgLy8gSnVzdCBzZXQgaXQgdXNpbmcgdGhlIG9uY2xpY2sgcHJvcGVydHkgc28gdGhhdCB3ZSBkb24ndCBoYXZlIHRvIG1hbmFnZSBhbnlcbiAgICAvLyBib29ra2VlcGluZyBmb3IgaXQuIE5vdCBzdXJlIGlmIHdlIG5lZWQgdG8gY2xlYXIgaXQgd2hlbiB0aGUgbGlzdGVuZXIgaXNcbiAgICAvLyByZW1vdmVkLlxuICAgIC8vIFRPRE86IE9ubHkgZG8gdGhpcyBmb3IgdGhlIHJlbGV2YW50IFNhZmFyaXMgbWF5YmU/XG4gICAgZG9tLm9uY2xpY2sgPSBlbXB0eUZuO1xufVxuXG52YXIgY29tcG9uZW50UG9vbHMgPSBuZXcgTWFwKCk7XG52YXIgZWxlbWVudFBvb2xzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gcmVjeWNsZUVsZW1lbnQodk5vZGUsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpIHtcbiAgICB2YXIgdGFnID0gdk5vZGUudHlwZTtcbiAgICB2YXIga2V5ID0gdk5vZGUua2V5O1xuICAgIHZhciBwb29scyA9IGVsZW1lbnRQb29scy5nZXQodGFnKTtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHBvb2xzKSkge1xuICAgICAgICB2YXIgcG9vbCA9IGtleSA9PT0gbnVsbCA/IHBvb2xzLm5vbktleWVkIDogcG9vbHMua2V5ZWQuZ2V0KGtleSk7XG4gICAgICAgIGlmICghaXNVbmRlZmluZWQocG9vbCkpIHtcbiAgICAgICAgICAgIHZhciByZWN5Y2xlZFZOb2RlID0gcG9vbC5wb3AoKTtcbiAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQocmVjeWNsZWRWTm9kZSkpIHtcbiAgICAgICAgICAgICAgICBwYXRjaEVsZW1lbnQocmVjeWNsZWRWTm9kZSwgdk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2Tm9kZS5kb207XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBwb29sRWxlbWVudCh2Tm9kZSkge1xuICAgIHZhciB0YWcgPSB2Tm9kZS50eXBlO1xuICAgIHZhciBrZXkgPSB2Tm9kZS5rZXk7XG4gICAgdmFyIHBvb2xzID0gZWxlbWVudFBvb2xzLmdldCh0YWcpO1xuICAgIGlmIChpc1VuZGVmaW5lZChwb29scykpIHtcbiAgICAgICAgcG9vbHMgPSB7XG4gICAgICAgICAgICBub25LZXllZDogW10sXG4gICAgICAgICAgICBrZXllZDogbmV3IE1hcCgpXG4gICAgICAgIH07XG4gICAgICAgIGVsZW1lbnRQb29scy5zZXQodGFnLCBwb29scyk7XG4gICAgfVxuICAgIGlmIChpc051bGwoa2V5KSkge1xuICAgICAgICBwb29scy5ub25LZXllZC5wdXNoKHZOb2RlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBwb29sID0gcG9vbHMua2V5ZWQuZ2V0KGtleSk7XG4gICAgICAgIGlmIChpc1VuZGVmaW5lZChwb29sKSkge1xuICAgICAgICAgICAgcG9vbCA9IFtdO1xuICAgICAgICAgICAgcG9vbHMua2V5ZWQuc2V0KGtleSwgcG9vbCk7XG4gICAgICAgIH1cbiAgICAgICAgcG9vbC5wdXNoKHZOb2RlKTtcbiAgICB9XG59XG5mdW5jdGlvbiByZWN5Y2xlQ29tcG9uZW50KHZOb2RlLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSB7XG4gICAgdmFyIHR5cGUgPSB2Tm9kZS50eXBlO1xuICAgIHZhciBrZXkgPSB2Tm9kZS5rZXk7XG4gICAgdmFyIHBvb2xzID0gY29tcG9uZW50UG9vbHMuZ2V0KHR5cGUpO1xuICAgIGlmICghaXNVbmRlZmluZWQocG9vbHMpKSB7XG4gICAgICAgIHZhciBwb29sID0ga2V5ID09PSBudWxsID8gcG9vbHMubm9uS2V5ZWQgOiBwb29scy5rZXllZC5nZXQoa2V5KTtcbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChwb29sKSkge1xuICAgICAgICAgICAgdmFyIHJlY3ljbGVkVk5vZGUgPSBwb29sLnBvcCgpO1xuICAgICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChyZWN5Y2xlZFZOb2RlKSkge1xuICAgICAgICAgICAgICAgIHZhciBmbGFncyA9IHZOb2RlLmZsYWdzO1xuICAgICAgICAgICAgICAgIHZhciBmYWlsZWQgPSBwYXRjaENvbXBvbmVudChyZWN5Y2xlZFZOb2RlLCB2Tm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgZmxhZ3MgJiA0IC8qIENvbXBvbmVudENsYXNzICovLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBpZiAoIWZhaWxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdk5vZGUuZG9tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIHBvb2xDb21wb25lbnQodk5vZGUpIHtcbiAgICB2YXIgdHlwZSA9IHZOb2RlLnR5cGU7XG4gICAgdmFyIGtleSA9IHZOb2RlLmtleTtcbiAgICB2YXIgaG9va3MgPSB2Tm9kZS5yZWY7XG4gICAgdmFyIG5vblJlY3ljbGVIb29rcyA9IGhvb2tzICYmIChob29rcy5vbkNvbXBvbmVudFdpbGxNb3VudCB8fFxuICAgICAgICBob29rcy5vbkNvbXBvbmVudFdpbGxVbm1vdW50IHx8XG4gICAgICAgIGhvb2tzLm9uQ29tcG9uZW50RGlkTW91bnQgfHxcbiAgICAgICAgaG9va3Mub25Db21wb25lbnRXaWxsVXBkYXRlIHx8XG4gICAgICAgIGhvb2tzLm9uQ29tcG9uZW50RGlkVXBkYXRlKTtcbiAgICBpZiAobm9uUmVjeWNsZUhvb2tzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHBvb2xzID0gY29tcG9uZW50UG9vbHMuZ2V0KHR5cGUpO1xuICAgIGlmIChpc1VuZGVmaW5lZChwb29scykpIHtcbiAgICAgICAgcG9vbHMgPSB7XG4gICAgICAgICAgICBub25LZXllZDogW10sXG4gICAgICAgICAgICBrZXllZDogbmV3IE1hcCgpXG4gICAgICAgIH07XG4gICAgICAgIGNvbXBvbmVudFBvb2xzLnNldCh0eXBlLCBwb29scyk7XG4gICAgfVxuICAgIGlmIChpc051bGwoa2V5KSkge1xuICAgICAgICBwb29scy5ub25LZXllZC5wdXNoKHZOb2RlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBwb29sID0gcG9vbHMua2V5ZWQuZ2V0KGtleSk7XG4gICAgICAgIGlmIChpc1VuZGVmaW5lZChwb29sKSkge1xuICAgICAgICAgICAgcG9vbCA9IFtdO1xuICAgICAgICAgICAgcG9vbHMua2V5ZWQuc2V0KGtleSwgcG9vbCk7XG4gICAgICAgIH1cbiAgICAgICAgcG9vbC5wdXNoKHZOb2RlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVubW91bnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjYW5SZWN5Y2xlLCBpc1JlY3ljbGluZykge1xuICAgIHZhciBmbGFncyA9IHZOb2RlLmZsYWdzO1xuICAgIGlmIChmbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICB1bm1vdW50Q29tcG9uZW50KHZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY2FuUmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChmbGFncyAmIDM5NzAgLyogRWxlbWVudCAqLykge1xuICAgICAgICB1bm1vdW50RWxlbWVudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNhblJlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxhZ3MgJiAoMSAvKiBUZXh0ICovIHwgNDA5NiAvKiBWb2lkICovKSkge1xuICAgICAgICB1bm1vdW50Vm9pZE9yVGV4dCh2Tm9kZSwgcGFyZW50RG9tKTtcbiAgICB9XG59XG5mdW5jdGlvbiB1bm1vdW50Vm9pZE9yVGV4dCh2Tm9kZSwgcGFyZW50RG9tKSB7XG4gICAgaWYgKHBhcmVudERvbSkge1xuICAgICAgICByZW1vdmVDaGlsZChwYXJlbnREb20sIHZOb2RlLmRvbSk7XG4gICAgfVxufVxudmFyIGFscmVhZHlVbm1vdW50ZWQgPSBuZXcgV2Vha01hcCgpO1xuZnVuY3Rpb24gdW5tb3VudENvbXBvbmVudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNhblJlY3ljbGUsIGlzUmVjeWNsaW5nKSB7XG4gICAgdmFyIGluc3RhbmNlID0gdk5vZGUuY2hpbGRyZW47XG4gICAgdmFyIGZsYWdzID0gdk5vZGUuZmxhZ3M7XG4gICAgdmFyIGlzU3RhdGVmdWxDb21wb25lbnQkJDEgPSBmbGFncyAmIDQ7XG4gICAgdmFyIHJlZiA9IHZOb2RlLnJlZjtcbiAgICB2YXIgZG9tID0gdk5vZGUuZG9tO1xuICAgIGlmIChhbHJlYWR5VW5tb3VudGVkLmhhcyh2Tm9kZSkgJiYgIWlzUmVjeWNsaW5nICYmICFwYXJlbnREb20pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhbHJlYWR5VW5tb3VudGVkLnNldCh2Tm9kZSk7XG4gICAgaWYgKCFpc1JlY3ljbGluZykge1xuICAgICAgICBpZiAoaXNTdGF0ZWZ1bENvbXBvbmVudCQkMSkge1xuICAgICAgICAgICAgaWYgKCFpbnN0YW5jZS5fdW5tb3VudGVkKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuX2lnbm9yZVNldFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmJlZm9yZVVubW91bnQgJiYgb3B0aW9ucy5iZWZvcmVVbm1vdW50KHZOb2RlKTtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5jb21wb25lbnRXaWxsVW5tb3VudCAmJiBpbnN0YW5jZS5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuICAgICAgICAgICAgICAgIGlmIChyZWYgJiYgIWlzUmVjeWNsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZihudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuX3VubW91bnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5maW5kRE9NTm9kZUVuYWJsZWQgJiYgY29tcG9uZW50VG9ET01Ob2RlTWFwLmRlbGV0ZShpbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgdmFyIHN1YkxpZmVjeWNsZSA9IGluc3RhbmNlLl9saWZlY3ljbGU7XG4gICAgICAgICAgICAgICAgaWYgKCFzdWJMaWZlY3ljbGUuZmFzdFVubW91bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5tb3VudChpbnN0YW5jZS5fbGFzdElucHV0LCBudWxsLCBzdWJMaWZlY3ljbGUsIGZhbHNlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKHJlZikpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYocmVmLm9uQ29tcG9uZW50V2lsbFVubW91bnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZi5vbkNvbXBvbmVudFdpbGxVbm1vdW50KGRvbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFsaWZlY3ljbGUuZmFzdFVubW91bnQpIHtcbiAgICAgICAgICAgICAgICB1bm1vdW50KGluc3RhbmNlLCBudWxsLCBsaWZlY3ljbGUsIGZhbHNlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhcmVudERvbSkge1xuICAgICAgICB2YXIgbGFzdElucHV0ID0gaW5zdGFuY2UuX2xhc3RJbnB1dDtcbiAgICAgICAgaWYgKGlzTnVsbE9yVW5kZWYobGFzdElucHV0KSkge1xuICAgICAgICAgICAgbGFzdElucHV0ID0gaW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlQ2hpbGQocGFyZW50RG9tLCBkb20pO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5yZWN5Y2xpbmdFbmFibGVkICYmICFpc1N0YXRlZnVsQ29tcG9uZW50JCQxICYmIChwYXJlbnREb20gfHwgY2FuUmVjeWNsZSkpIHtcbiAgICAgICAgcG9vbENvbXBvbmVudCh2Tm9kZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gdW5tb3VudEVsZW1lbnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjYW5SZWN5Y2xlLCBpc1JlY3ljbGluZykge1xuICAgIHZhciBkb20gPSB2Tm9kZS5kb207XG4gICAgdmFyIHJlZiA9IHZOb2RlLnJlZjtcbiAgICB2YXIgZXZlbnRzID0gdk5vZGUuZXZlbnRzO1xuICAgIGlmIChhbHJlYWR5VW5tb3VudGVkLmhhcyh2Tm9kZSkgJiYgIWlzUmVjeWNsaW5nICYmICFwYXJlbnREb20pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhbHJlYWR5VW5tb3VudGVkLnNldCh2Tm9kZSk7XG4gICAgaWYgKCFsaWZlY3ljbGUuZmFzdFVubW91bnQpIHtcbiAgICAgICAgaWYgKHJlZiAmJiAhaXNSZWN5Y2xpbmcpIHtcbiAgICAgICAgICAgIHVubW91bnRSZWYocmVmKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2hpbGRyZW4gPSB2Tm9kZS5jaGlsZHJlbjtcbiAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgdW5tb3VudENoaWxkcmVuJDEoY2hpbGRyZW4sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghaXNOdWxsKGV2ZW50cykpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBldmVudHMpIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdCBhZGQgYSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBoZXJlLCBpdCBhZmZlY3RzIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICBwYXRjaEV2ZW50KG5hbWUsIGV2ZW50c1tuYW1lXSwgbnVsbCwgZG9tKTtcbiAgICAgICAgICAgIGV2ZW50c1tuYW1lXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhcmVudERvbSkge1xuICAgICAgICByZW1vdmVDaGlsZChwYXJlbnREb20sIGRvbSk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnJlY3ljbGluZ0VuYWJsZWQgJiYgKHBhcmVudERvbSB8fCBjYW5SZWN5Y2xlKSkge1xuICAgICAgICBwb29sRWxlbWVudCh2Tm9kZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gdW5tb3VudENoaWxkcmVuJDEoY2hpbGRyZW4sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpIHtcbiAgICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAoIWlzSW52YWxpZChjaGlsZCkgJiYgaXNPYmplY3QoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgdW5tb3VudChjaGlsZCwgbnVsbCwgbGlmZWN5Y2xlLCBmYWxzZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JqZWN0KGNoaWxkcmVuKSkge1xuICAgICAgICB1bm1vdW50KGNoaWxkcmVuLCBudWxsLCBsaWZlY3ljbGUsIGZhbHNlLCBpc1JlY3ljbGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gdW5tb3VudFJlZihyZWYpIHtcbiAgICBpZiAoaXNGdW5jdGlvbihyZWYpKSB7XG4gICAgICAgIHJlZihudWxsKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChpc0ludmFsaWQocmVmKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKCdzdHJpbmcgXCJyZWZzXCIgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gSW5mZXJubyAxLjAuIFVzZSBjYWxsYmFjayBcInJlZnNcIiBpbnN0ZWFkLicpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzQ29tcG9uZW50SW5zdGFuY2Uodk5vZGUsIENvbXBvbmVudCwgcHJvcHMsIGNvbnRleHQsIGlzU1ZHKSB7XG4gICAgaWYgKGlzVW5kZWZpbmVkKGNvbnRleHQpKSB7XG4gICAgICAgIGNvbnRleHQgPSB7fTtcbiAgICB9XG4gICAgdmFyIGluc3RhbmNlID0gbmV3IENvbXBvbmVudChwcm9wcywgY29udGV4dCk7XG4gICAgaW5zdGFuY2UuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgaWYgKGluc3RhbmNlLnByb3BzID09PSBFTVBUWV9PQkopIHtcbiAgICAgICAgaW5zdGFuY2UucHJvcHMgPSBwcm9wcztcbiAgICB9XG4gICAgaW5zdGFuY2UuX3BhdGNoID0gcGF0Y2g7XG4gICAgaWYgKG9wdGlvbnMuZmluZERPTU5vZGVFbmFibGVkKSB7XG4gICAgICAgIGluc3RhbmNlLl9jb21wb25lbnRUb0RPTU5vZGVNYXAgPSBjb21wb25lbnRUb0RPTU5vZGVNYXA7XG4gICAgfVxuICAgIGluc3RhbmNlLl91bm1vdW50ZWQgPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5fcGVuZGluZ1NldFN0YXRlID0gdHJ1ZTtcbiAgICBpbnN0YW5jZS5faXNTVkcgPSBpc1NWRztcbiAgICBpZiAoaXNGdW5jdGlvbihpbnN0YW5jZS5jb21wb25lbnRXaWxsTW91bnQpKSB7XG4gICAgICAgIGluc3RhbmNlLmNvbXBvbmVudFdpbGxNb3VudCgpO1xuICAgIH1cbiAgICB2YXIgY2hpbGRDb250ZXh0ID0gaW5zdGFuY2UuZ2V0Q2hpbGRDb250ZXh0KCk7XG4gICAgaWYgKCFpc051bGxPclVuZGVmKGNoaWxkQ29udGV4dCkpIHtcbiAgICAgICAgaW5zdGFuY2UuX2NoaWxkQ29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQsIGNoaWxkQ29udGV4dCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpbnN0YW5jZS5fY2hpbGRDb250ZXh0ID0gY29udGV4dDtcbiAgICB9XG4gICAgb3B0aW9ucy5iZWZvcmVSZW5kZXIgJiYgb3B0aW9ucy5iZWZvcmVSZW5kZXIoaW5zdGFuY2UpO1xuICAgIHZhciBpbnB1dCA9IGluc3RhbmNlLnJlbmRlcihwcm9wcywgaW5zdGFuY2Uuc3RhdGUsIGNvbnRleHQpO1xuICAgIG9wdGlvbnMuYWZ0ZXJSZW5kZXIgJiYgb3B0aW9ucy5hZnRlclJlbmRlcihpbnN0YW5jZSk7XG4gICAgaWYgKGlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKCdhIHZhbGlkIEluZmVybm8gVk5vZGUgKG9yIG51bGwpIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBhIGNvbXBvbmVudCByZW5kZXIuIFlvdSBtYXkgaGF2ZSByZXR1cm5lZCBhbiBhcnJheSBvciBhbiBpbnZhbGlkIG9iamVjdC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzSW52YWxpZChpbnB1dCkpIHtcbiAgICAgICAgaW5wdXQgPSBjcmVhdGVWb2lkVk5vZGUoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNTdHJpbmdPck51bWJlcihpbnB1dCkpIHtcbiAgICAgICAgaW5wdXQgPSBjcmVhdGVUZXh0Vk5vZGUoaW5wdXQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGlucHV0LmRvbSkge1xuICAgICAgICAgICAgaW5wdXQgPSBjbG9uZVZOb2RlKGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5wdXQuZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgICAgIC8vIGlmIHdlIGhhdmUgYW4gaW5wdXQgdGhhdCBpcyBhbHNvIGEgY29tcG9uZW50LCB3ZSBydW4gaW50byBhIHRyaWNreSBzaXR1YXRpb25cbiAgICAgICAgICAgIC8vIHdoZXJlIHRoZSByb290IHZOb2RlIG5lZWRzIHRvIGFsd2F5cyBoYXZlIHRoZSBjb3JyZWN0IERPTSBlbnRyeVxuICAgICAgICAgICAgLy8gc28gd2UgYnJlYWsgbW9ub21vcnBoaXNtIG9uIG91ciBpbnB1dCBhbmQgc3VwcGx5IGl0IG91ciB2Tm9kZSBhcyBwYXJlbnRWTm9kZVxuICAgICAgICAgICAgLy8gd2UgY2FuIG9wdGltaXNlIHRoaXMgaW4gdGhlIGZ1dHVyZSwgYnV0IHRoaXMgZ2V0cyB1cyBvdXQgb2YgYSBsb3Qgb2YgaXNzdWVzXG4gICAgICAgICAgICBpbnB1dC5wYXJlbnRWTm9kZSA9IHZOb2RlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGluc3RhbmNlLl9wZW5kaW5nU2V0U3RhdGUgPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5fbGFzdElucHV0ID0gaW5wdXQ7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuZnVuY3Rpb24gcmVwbGFjZUxhc3RDaGlsZEFuZFVubW91bnQobGFzdElucHV0LCBuZXh0SW5wdXQsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpIHtcbiAgICByZXBsYWNlVk5vZGUocGFyZW50RG9tLCBtb3VudChuZXh0SW5wdXQsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpLCBsYXN0SW5wdXQsIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xufVxuZnVuY3Rpb24gcmVwbGFjZVZOb2RlKHBhcmVudERvbSwgZG9tLCB2Tm9kZSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZykge1xuICAgIHZhciBzaGFsbG93VW5tb3VudCA9IGZhbHNlO1xuICAgIC8vIHdlIGNhbm5vdCBjYWNoZSBub2RlVHlwZSBoZXJlIGFzIHZOb2RlIG1pZ2h0IGJlIHJlLWFzc2lnbmVkIGJlbG93XG4gICAgaWYgKHZOb2RlLmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBhY2Nlc3NpbmcgYSBzdGF0ZWZ1bCBvciBzdGF0ZWxlc3MgY29tcG9uZW50LCB3ZSB3YW50IHRvIGFjY2VzcyB0aGVpciBsYXN0IHJlbmRlcmVkIGlucHV0XG4gICAgICAgIC8vIGFjY2Vzc2luZyB0aGVpciBET00gbm9kZSBpcyBub3QgdXNlZnVsIHRvIHVzIGhlcmVcbiAgICAgICAgdW5tb3VudCh2Tm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBmYWxzZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB2Tm9kZSA9IHZOb2RlLmNoaWxkcmVuLl9sYXN0SW5wdXQgfHwgdk5vZGUuY2hpbGRyZW47XG4gICAgICAgIHNoYWxsb3dVbm1vdW50ID0gdHJ1ZTtcbiAgICB9XG4gICAgcmVwbGFjZUNoaWxkKHBhcmVudERvbSwgZG9tLCB2Tm9kZS5kb20pO1xuICAgIHVubW91bnQodk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnRJbnB1dCh2Tm9kZSwgY29tcG9uZW50LCBwcm9wcywgY29udGV4dCkge1xuICAgIHZhciBpbnB1dCA9IGNvbXBvbmVudChwcm9wcywgY29udGV4dCk7XG4gICAgaWYgKGlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKCdhIHZhbGlkIEluZmVybm8gVk5vZGUgKG9yIG51bGwpIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBhIGNvbXBvbmVudCByZW5kZXIuIFlvdSBtYXkgaGF2ZSByZXR1cm5lZCBhbiBhcnJheSBvciBhbiBpbnZhbGlkIG9iamVjdC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzSW52YWxpZChpbnB1dCkpIHtcbiAgICAgICAgaW5wdXQgPSBjcmVhdGVWb2lkVk5vZGUoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNTdHJpbmdPck51bWJlcihpbnB1dCkpIHtcbiAgICAgICAgaW5wdXQgPSBjcmVhdGVUZXh0Vk5vZGUoaW5wdXQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGlucHV0LmRvbSkge1xuICAgICAgICAgICAgaW5wdXQgPSBjbG9uZVZOb2RlKGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5wdXQuZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgICAgIC8vIGlmIHdlIGhhdmUgYW4gaW5wdXQgdGhhdCBpcyBhbHNvIGEgY29tcG9uZW50LCB3ZSBydW4gaW50byBhIHRyaWNreSBzaXR1YXRpb25cbiAgICAgICAgICAgIC8vIHdoZXJlIHRoZSByb290IHZOb2RlIG5lZWRzIHRvIGFsd2F5cyBoYXZlIHRoZSBjb3JyZWN0IERPTSBlbnRyeVxuICAgICAgICAgICAgLy8gc28gd2UgYnJlYWsgbW9ub21vcnBoaXNtIG9uIG91ciBpbnB1dCBhbmQgc3VwcGx5IGl0IG91ciB2Tm9kZSBhcyBwYXJlbnRWTm9kZVxuICAgICAgICAgICAgLy8gd2UgY2FuIG9wdGltaXNlIHRoaXMgaW4gdGhlIGZ1dHVyZSwgYnV0IHRoaXMgZ2V0cyB1cyBvdXQgb2YgYSBsb3Qgb2YgaXNzdWVzXG4gICAgICAgICAgICBpbnB1dC5wYXJlbnRWTm9kZSA9IHZOb2RlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbnB1dDtcbn1cbmZ1bmN0aW9uIHNldFRleHRDb250ZW50KGRvbSwgdGV4dCkge1xuICAgIGlmICh0ZXh0ICE9PSAnJykge1xuICAgICAgICBkb20udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZG9tLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSk7XG4gICAgfVxufVxuZnVuY3Rpb24gdXBkYXRlVGV4dENvbnRlbnQoZG9tLCB0ZXh0KSB7XG4gICAgZG9tLmZpcnN0Q2hpbGQubm9kZVZhbHVlID0gdGV4dDtcbn1cbmZ1bmN0aW9uIGFwcGVuZENoaWxkKHBhcmVudERvbSwgZG9tKSB7XG4gICAgcGFyZW50RG9tLmFwcGVuZENoaWxkKGRvbSk7XG59XG5mdW5jdGlvbiBpbnNlcnRPckFwcGVuZChwYXJlbnREb20sIG5ld05vZGUsIG5leHROb2RlKSB7XG4gICAgaWYgKGlzTnVsbE9yVW5kZWYobmV4dE5vZGUpKSB7XG4gICAgICAgIGFwcGVuZENoaWxkKHBhcmVudERvbSwgbmV3Tm9kZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwYXJlbnREb20uaW5zZXJ0QmVmb3JlKG5ld05vZGUsIG5leHROb2RlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkb2N1bWVudENyZWF0ZUVsZW1lbnQodGFnLCBpc1NWRykge1xuICAgIGlmIChpc1NWRyA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCB0YWcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICB9XG59XG5mdW5jdGlvbiByZXBsYWNlV2l0aE5ld05vZGUobGFzdE5vZGUsIG5leHROb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKSB7XG4gICAgdW5tb3VudChsYXN0Tm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBmYWxzZSwgaXNSZWN5Y2xpbmcpO1xuICAgIHZhciBkb20gPSBtb3VudChuZXh0Tm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgbmV4dE5vZGUuZG9tID0gZG9tO1xuICAgIHJlcGxhY2VDaGlsZChwYXJlbnREb20sIGRvbSwgbGFzdE5vZGUuZG9tKTtcbn1cbmZ1bmN0aW9uIHJlcGxhY2VDaGlsZChwYXJlbnREb20sIG5leHREb20sIGxhc3REb20pIHtcbiAgICBpZiAoIXBhcmVudERvbSkge1xuICAgICAgICBwYXJlbnREb20gPSBsYXN0RG9tLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHBhcmVudERvbS5yZXBsYWNlQ2hpbGQobmV4dERvbSwgbGFzdERvbSk7XG59XG5mdW5jdGlvbiByZW1vdmVDaGlsZChwYXJlbnREb20sIGRvbSkge1xuICAgIHBhcmVudERvbS5yZW1vdmVDaGlsZChkb20pO1xufVxuZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGRyZW4oZG9tLCBjaGlsZHJlbiwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZykge1xuICAgIGRvbS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGlmICghbGlmZWN5Y2xlLmZhc3RVbm1vdW50IHx8IChsaWZlY3ljbGUuZmFzdFVubW91bnQgJiYgb3B0aW9ucy5yZWN5Y2xpbmdFbmFibGVkICYmICFpc1JlY3ljbGluZykpIHtcbiAgICAgICAgcmVtb3ZlQ2hpbGRyZW4obnVsbCwgY2hpbGRyZW4sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHJlbW92ZUNoaWxkcmVuKGRvbSwgY2hpbGRyZW4sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICBpZiAoIWlzSW52YWxpZChjaGlsZCkpIHtcbiAgICAgICAgICAgIHVubW91bnQoY2hpbGQsIGRvbSwgbGlmZWN5Y2xlLCB0cnVlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBpc0tleWVkKGxhc3RDaGlsZHJlbiwgbmV4dENoaWxkcmVuKSB7XG4gICAgcmV0dXJuIG5leHRDaGlsZHJlbi5sZW5ndGggJiYgIWlzTnVsbE9yVW5kZWYobmV4dENoaWxkcmVuWzBdKSAmJiAhaXNOdWxsT3JVbmRlZihuZXh0Q2hpbGRyZW5bMF0ua2V5KVxuICAgICAgICAmJiBsYXN0Q2hpbGRyZW4ubGVuZ3RoICYmICFpc051bGxPclVuZGVmKGxhc3RDaGlsZHJlblswXSkgJiYgIWlzTnVsbE9yVW5kZWYobGFzdENoaWxkcmVuWzBdLmtleSk7XG59XG5cbmZ1bmN0aW9uIGlzQ2hlY2tlZFR5cGUodHlwZSkge1xuICAgIHJldHVybiB0eXBlID09PSAnY2hlY2tib3gnIHx8IHR5cGUgPT09ICdyYWRpbyc7XG59XG5mdW5jdGlvbiBpc0NvbnRyb2xsZWQocHJvcHMpIHtcbiAgICB2YXIgdXNlc0NoZWNrZWQgPSBpc0NoZWNrZWRUeXBlKHByb3BzLnR5cGUpO1xuICAgIHJldHVybiB1c2VzQ2hlY2tlZCA/ICFpc051bGxPclVuZGVmKHByb3BzLmNoZWNrZWQpIDogIWlzTnVsbE9yVW5kZWYocHJvcHMudmFsdWUpO1xufVxuZnVuY3Rpb24gb25UZXh0SW5wdXRDaGFuZ2UoZSkge1xuICAgIHZhciB2Tm9kZSA9IHRoaXMudk5vZGU7XG4gICAgdmFyIGV2ZW50cyA9IHZOb2RlLmV2ZW50cyB8fCBFTVBUWV9PQko7XG4gICAgdmFyIGRvbSA9IHZOb2RlLmRvbTtcbiAgICBpZiAoZXZlbnRzLm9uSW5wdXQpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gZXZlbnRzLm9uSW5wdXQ7XG4gICAgICAgIGlmIChldmVudC5ldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuZXZlbnQoZXZlbnQuZGF0YSwgZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldmVudChlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChldmVudHMub25pbnB1dCkge1xuICAgICAgICBldmVudHMub25pbnB1dChlKTtcbiAgICB9XG4gICAgLy8gdGhlIHVzZXIgbWF5IGhhdmUgdXBkYXRlZCB0aGUgdk5vZGUgZnJvbSB0aGUgYWJvdmUgb25JbnB1dCBldmVudHNcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIGdldCBpdCBmcm9tIHRoZSBjb250ZXh0IG9mIGB0aGlzYCBhZ2FpblxuICAgIGFwcGx5VmFsdWUodGhpcy52Tm9kZSwgZG9tKTtcbn1cbmZ1bmN0aW9uIHdyYXBwZWRPbkNoYW5nZShlKSB7XG4gICAgdmFyIHZOb2RlID0gdGhpcy52Tm9kZTtcbiAgICB2YXIgZXZlbnRzID0gdk5vZGUuZXZlbnRzIHx8IEVNUFRZX09CSjtcbiAgICB2YXIgZXZlbnQgPSBldmVudHMub25DaGFuZ2U7XG4gICAgaWYgKGV2ZW50LmV2ZW50KSB7XG4gICAgICAgIGV2ZW50LmV2ZW50KGV2ZW50LmRhdGEsIGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZXZlbnQoZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gb25DaGVja2JveENoYW5nZShlKSB7XG4gICAgdmFyIHZOb2RlID0gdGhpcy52Tm9kZTtcbiAgICB2YXIgZXZlbnRzID0gdk5vZGUuZXZlbnRzIHx8IEVNUFRZX09CSjtcbiAgICB2YXIgZG9tID0gdk5vZGUuZG9tO1xuICAgIGlmIChldmVudHMub25DbGljaykge1xuICAgICAgICB2YXIgZXZlbnQgPSBldmVudHMub25DbGljaztcbiAgICAgICAgaWYgKGV2ZW50LmV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5ldmVudChldmVudC5kYXRhLCBlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50KGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50cy5vbmNsaWNrKSB7XG4gICAgICAgIGV2ZW50cy5vbmNsaWNrKGUpO1xuICAgIH1cbiAgICAvLyB0aGUgdXNlciBtYXkgaGF2ZSB1cGRhdGVkIHRoZSB2Tm9kZSBmcm9tIHRoZSBhYm92ZSBvbkNsaWNrIGV2ZW50c1xuICAgIC8vIHNvIHdlIG5lZWQgdG8gZ2V0IGl0IGZyb20gdGhlIGNvbnRleHQgb2YgYHRoaXNgIGFnYWluXG4gICAgYXBwbHlWYWx1ZSh0aGlzLnZOb2RlLCBkb20pO1xufVxuZnVuY3Rpb24gaGFuZGxlQXNzb2NpYXRlZFJhZGlvSW5wdXRzKG5hbWUpIHtcbiAgICB2YXIgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgoXCJpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdW25hbWU9XFxcIlwiICsgbmFtZSArIFwiXFxcIl1cIikpO1xuICAgIFtdLmZvckVhY2guY2FsbChpbnB1dHMsIGZ1bmN0aW9uIChkb20pIHtcbiAgICAgICAgdmFyIGlucHV0V3JhcHBlciA9IHdyYXBwZXJzLmdldChkb20pO1xuICAgICAgICBpZiAoaW5wdXRXcmFwcGVyKSB7XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSBpbnB1dFdyYXBwZXIudk5vZGUucHJvcHM7XG4gICAgICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgICAgICBkb20uY2hlY2tlZCA9IGlucHV0V3JhcHBlci52Tm9kZS5wcm9wcy5jaGVja2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBwcm9jZXNzSW5wdXQodk5vZGUsIGRvbSkge1xuICAgIHZhciBwcm9wcyA9IHZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcbiAgICBhcHBseVZhbHVlKHZOb2RlLCBkb20pO1xuICAgIGlmIChpc0NvbnRyb2xsZWQocHJvcHMpKSB7XG4gICAgICAgIHZhciBpbnB1dFdyYXBwZXIgPSB3cmFwcGVycy5nZXQoZG9tKTtcbiAgICAgICAgaWYgKCFpbnB1dFdyYXBwZXIpIHtcbiAgICAgICAgICAgIGlucHV0V3JhcHBlciA9IHtcbiAgICAgICAgICAgICAgICB2Tm9kZTogdk5vZGVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoaXNDaGVja2VkVHlwZShwcm9wcy50eXBlKSkge1xuICAgICAgICAgICAgICAgIGRvbS5vbmNsaWNrID0gb25DaGVja2JveENoYW5nZS5iaW5kKGlucHV0V3JhcHBlcik7XG4gICAgICAgICAgICAgICAgZG9tLm9uY2xpY2sud3JhcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb20ub25pbnB1dCA9IG9uVGV4dElucHV0Q2hhbmdlLmJpbmQoaW5wdXRXcmFwcGVyKTtcbiAgICAgICAgICAgICAgICBkb20ub25pbnB1dC53cmFwcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIGRvbS5vbmNoYW5nZSA9IHdyYXBwZWRPbkNoYW5nZS5iaW5kKGlucHV0V3JhcHBlcik7XG4gICAgICAgICAgICAgICAgZG9tLm9uY2hhbmdlLndyYXBwZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd3JhcHBlcnMuc2V0KGRvbSwgaW5wdXRXcmFwcGVyKTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dFdyYXBwZXIudk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGFwcGx5VmFsdWUodk5vZGUsIGRvbSkge1xuICAgIHZhciBwcm9wcyA9IHZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcbiAgICB2YXIgdHlwZSA9IHByb3BzLnR5cGU7XG4gICAgdmFyIHZhbHVlID0gcHJvcHMudmFsdWU7XG4gICAgdmFyIGNoZWNrZWQgPSBwcm9wcy5jaGVja2VkO1xuICAgIHZhciBtdWx0aXBsZSA9IHByb3BzLm11bHRpcGxlO1xuICAgIGlmICh0eXBlICYmIHR5cGUgIT09IGRvbS50eXBlKSB7XG4gICAgICAgIGRvbS50eXBlID0gdHlwZTtcbiAgICB9XG4gICAgaWYgKG11bHRpcGxlICYmIG11bHRpcGxlICE9PSBkb20ubXVsdGlwbGUpIHtcbiAgICAgICAgZG9tLm11bHRpcGxlID0gbXVsdGlwbGU7XG4gICAgfVxuICAgIGlmIChpc0NoZWNrZWRUeXBlKHR5cGUpKSB7XG4gICAgICAgIGlmICghaXNOdWxsT3JVbmRlZih2YWx1ZSkpIHtcbiAgICAgICAgICAgIGRvbS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGRvbS5jaGVja2VkID0gY2hlY2tlZDtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdyYWRpbycgJiYgcHJvcHMubmFtZSkge1xuICAgICAgICAgICAgaGFuZGxlQXNzb2NpYXRlZFJhZGlvSW5wdXRzKHByb3BzLm5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYodmFsdWUpICYmIGRvbS52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGRvbS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFpc051bGxPclVuZGVmKGNoZWNrZWQpKSB7XG4gICAgICAgICAgICBkb20uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzQ29udHJvbGxlZCQxKHByb3BzKSB7XG4gICAgcmV0dXJuICFpc051bGxPclVuZGVmKHByb3BzLnZhbHVlKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZUNoaWxkT3B0aW9uR3JvdXAodk5vZGUsIHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSB2Tm9kZS50eXBlO1xuICAgIGlmICh0eXBlID09PSAnb3B0Z3JvdXAnKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHZOb2RlLmNoaWxkcmVuO1xuICAgICAgICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVDaGlsZE9wdGlvbihjaGlsZHJlbltpXSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzVk5vZGUoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICB1cGRhdGVDaGlsZE9wdGlvbihjaGlsZHJlbiwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB1cGRhdGVDaGlsZE9wdGlvbih2Tm9kZSwgdmFsdWUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZUNoaWxkT3B0aW9uKHZOb2RlLCB2YWx1ZSkge1xuICAgIHZhciBwcm9wcyA9IHZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcbiAgICB2YXIgZG9tID0gdk5vZGUuZG9tO1xuICAgIC8vIHdlIGRvIHRoaXMgYXMgbXVsdGlwbGUgbWF5IGhhdmUgY2hhbmdlZFxuICAgIGRvbS52YWx1ZSA9IHByb3BzLnZhbHVlO1xuICAgIGlmICgoaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUuaW5kZXhPZihwcm9wcy52YWx1ZSkgIT09IC0xKSB8fCBwcm9wcy52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgZG9tLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRvbS5zZWxlY3RlZCA9IHByb3BzLnNlbGVjdGVkIHx8IGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG9uU2VsZWN0Q2hhbmdlKGUpIHtcbiAgICB2YXIgdk5vZGUgPSB0aGlzLnZOb2RlO1xuICAgIHZhciBldmVudHMgPSB2Tm9kZS5ldmVudHMgfHwgRU1QVFlfT0JKO1xuICAgIHZhciBkb20gPSB2Tm9kZS5kb207XG4gICAgaWYgKGV2ZW50cy5vbkNoYW5nZSkge1xuICAgICAgICB2YXIgZXZlbnQgPSBldmVudHMub25DaGFuZ2U7XG4gICAgICAgIGlmIChldmVudC5ldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuZXZlbnQoZXZlbnQuZGF0YSwgZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldmVudChlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChldmVudHMub25jaGFuZ2UpIHtcbiAgICAgICAgZXZlbnRzLm9uY2hhbmdlKGUpO1xuICAgIH1cbiAgICAvLyB0aGUgdXNlciBtYXkgaGF2ZSB1cGRhdGVkIHRoZSB2Tm9kZSBmcm9tIHRoZSBhYm92ZSBvbkNoYW5nZSBldmVudHNcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIGdldCBpdCBmcm9tIHRoZSBjb250ZXh0IG9mIGB0aGlzYCBhZ2FpblxuICAgIGFwcGx5VmFsdWUkMSh0aGlzLnZOb2RlLCBkb20pO1xufVxuZnVuY3Rpb24gcHJvY2Vzc1NlbGVjdCh2Tm9kZSwgZG9tKSB7XG4gICAgdmFyIHByb3BzID0gdk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIGFwcGx5VmFsdWUkMSh2Tm9kZSwgZG9tKTtcbiAgICBpZiAoaXNDb250cm9sbGVkJDEocHJvcHMpKSB7XG4gICAgICAgIHZhciBzZWxlY3RXcmFwcGVyID0gd3JhcHBlcnMuZ2V0KGRvbSk7XG4gICAgICAgIGlmICghc2VsZWN0V3JhcHBlcikge1xuICAgICAgICAgICAgc2VsZWN0V3JhcHBlciA9IHtcbiAgICAgICAgICAgICAgICB2Tm9kZTogdk5vZGVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkb20ub25jaGFuZ2UgPSBvblNlbGVjdENoYW5nZS5iaW5kKHNlbGVjdFdyYXBwZXIpO1xuICAgICAgICAgICAgZG9tLm9uY2hhbmdlLndyYXBwZWQgPSB0cnVlO1xuICAgICAgICAgICAgd3JhcHBlcnMuc2V0KGRvbSwgc2VsZWN0V3JhcHBlcik7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0V3JhcHBlci52Tm9kZSA9IHZOb2RlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gYXBwbHlWYWx1ZSQxKHZOb2RlLCBkb20pIHtcbiAgICB2YXIgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgaWYgKHByb3BzLm11bHRpcGxlICE9PSBkb20ubXVsdGlwbGUpIHtcbiAgICAgICAgZG9tLm11bHRpcGxlID0gcHJvcHMubXVsdGlwbGU7XG4gICAgfVxuICAgIHZhciBjaGlsZHJlbiA9IHZOb2RlLmNoaWxkcmVuO1xuICAgIGlmICghaXNJbnZhbGlkKGNoaWxkcmVuKSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBwcm9wcy52YWx1ZTtcbiAgICAgICAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlQ2hpbGRPcHRpb25Hcm91cChjaGlsZHJlbltpXSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzVk5vZGUoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICB1cGRhdGVDaGlsZE9wdGlvbkdyb3VwKGNoaWxkcmVuLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzQ29udHJvbGxlZCQyKHByb3BzKSB7XG4gICAgcmV0dXJuICFpc051bGxPclVuZGVmKHByb3BzLnZhbHVlKTtcbn1cbmZ1bmN0aW9uIHdyYXBwZWRPbkNoYW5nZSQxKGUpIHtcbiAgICB2YXIgdk5vZGUgPSB0aGlzLnZOb2RlO1xuICAgIHZhciBldmVudHMgPSB2Tm9kZS5ldmVudHMgfHwgRU1QVFlfT0JKO1xuICAgIHZhciBldmVudCA9IGV2ZW50cy5vbkNoYW5nZTtcbiAgICBpZiAoZXZlbnQuZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuZXZlbnQoZXZlbnQuZGF0YSwgZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBldmVudChlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBvblRleHRhcmVhSW5wdXRDaGFuZ2UoZSkge1xuICAgIHZhciB2Tm9kZSA9IHRoaXMudk5vZGU7XG4gICAgdmFyIGV2ZW50cyA9IHZOb2RlLmV2ZW50cyB8fCBFTVBUWV9PQko7XG4gICAgdmFyIGRvbSA9IHZOb2RlLmRvbTtcbiAgICBpZiAoZXZlbnRzLm9uSW5wdXQpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gZXZlbnRzLm9uSW5wdXQ7XG4gICAgICAgIGlmIChldmVudC5ldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuZXZlbnQoZXZlbnQuZGF0YSwgZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldmVudChlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChldmVudHMub25pbnB1dCkge1xuICAgICAgICBldmVudHMub25pbnB1dChlKTtcbiAgICB9XG4gICAgLy8gdGhlIHVzZXIgbWF5IGhhdmUgdXBkYXRlZCB0aGUgdk5vZGUgZnJvbSB0aGUgYWJvdmUgb25JbnB1dCBldmVudHNcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIGdldCBpdCBmcm9tIHRoZSBjb250ZXh0IG9mIGB0aGlzYCBhZ2FpblxuICAgIGFwcGx5VmFsdWUkMih0aGlzLnZOb2RlLCBkb20pO1xufVxuZnVuY3Rpb24gcHJvY2Vzc1RleHRhcmVhKHZOb2RlLCBkb20pIHtcbiAgICB2YXIgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgYXBwbHlWYWx1ZSQyKHZOb2RlLCBkb20pO1xuICAgIHZhciB0ZXh0YXJlYVdyYXBwZXIgPSB3cmFwcGVycy5nZXQoZG9tKTtcbiAgICBpZiAoaXNDb250cm9sbGVkJDIocHJvcHMpKSB7XG4gICAgICAgIGlmICghdGV4dGFyZWFXcmFwcGVyKSB7XG4gICAgICAgICAgICB0ZXh0YXJlYVdyYXBwZXIgPSB7XG4gICAgICAgICAgICAgICAgdk5vZGU6IHZOb2RlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZG9tLm9uaW5wdXQgPSBvblRleHRhcmVhSW5wdXRDaGFuZ2UuYmluZCh0ZXh0YXJlYVdyYXBwZXIpO1xuICAgICAgICAgICAgZG9tLm9uaW5wdXQud3JhcHBlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAocHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBkb20ub25jaGFuZ2UgPSB3cmFwcGVkT25DaGFuZ2UkMS5iaW5kKHRleHRhcmVhV3JhcHBlcik7XG4gICAgICAgICAgICAgICAgZG9tLm9uY2hhbmdlLndyYXBwZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd3JhcHBlcnMuc2V0KGRvbSwgdGV4dGFyZWFXcmFwcGVyKTtcbiAgICAgICAgfVxuICAgICAgICB0ZXh0YXJlYVdyYXBwZXIudk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGFwcGx5VmFsdWUkMih2Tm9kZSwgZG9tKSB7XG4gICAgdmFyIHByb3BzID0gdk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIHZhciB2YWx1ZSA9IHByb3BzLnZhbHVlO1xuICAgIHZhciBkb21WYWx1ZSA9IGRvbS52YWx1ZTtcbiAgICBpZiAoZG9tVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgIGlmICghaXNOdWxsT3JVbmRlZih2YWx1ZSkpIHtcbiAgICAgICAgICAgIGRvbS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRvbVZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgZG9tLnZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnZhciB3cmFwcGVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIHByb2Nlc3NFbGVtZW50KGZsYWdzLCB2Tm9kZSwgZG9tKSB7XG4gICAgaWYgKGZsYWdzICYgNTEyIC8qIElucHV0RWxlbWVudCAqLykge1xuICAgICAgICByZXR1cm4gcHJvY2Vzc0lucHV0KHZOb2RlLCBkb20pO1xuICAgIH1cbiAgICBpZiAoZmxhZ3MgJiAyMDQ4IC8qIFNlbGVjdEVsZW1lbnQgKi8pIHtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NTZWxlY3Qodk5vZGUsIGRvbSk7XG4gICAgfVxuICAgIGlmIChmbGFncyAmIDEwMjQgLyogVGV4dGFyZWFFbGVtZW50ICovKSB7XG4gICAgICAgIHJldHVybiBwcm9jZXNzVGV4dGFyZWEodk5vZGUsIGRvbSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcGF0Y2gobGFzdFZOb2RlLCBuZXh0Vk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpIHtcbiAgICBpZiAobGFzdFZOb2RlICE9PSBuZXh0Vk5vZGUpIHtcbiAgICAgICAgdmFyIGxhc3RGbGFncyA9IGxhc3RWTm9kZS5mbGFncztcbiAgICAgICAgdmFyIG5leHRGbGFncyA9IG5leHRWTm9kZS5mbGFncztcbiAgICAgICAgaWYgKG5leHRGbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICAgICAgaWYgKGxhc3RGbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICAgICAgICAgIHBhdGNoQ29tcG9uZW50KGxhc3RWTm9kZSwgbmV4dFZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIG5leHRGbGFncyAmIDQgLyogQ29tcG9uZW50Q2xhc3MgKi8sIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlcGxhY2VWTm9kZShwYXJlbnREb20sIG1vdW50Q29tcG9uZW50KG5leHRWTm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgbmV4dEZsYWdzICYgNCAvKiBDb21wb25lbnRDbGFzcyAqLyksIGxhc3RWTm9kZSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV4dEZsYWdzICYgMzk3MCAvKiBFbGVtZW50ICovKSB7XG4gICAgICAgICAgICBpZiAobGFzdEZsYWdzICYgMzk3MCAvKiBFbGVtZW50ICovKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hFbGVtZW50KGxhc3RWTm9kZSwgbmV4dFZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlcGxhY2VWTm9kZShwYXJlbnREb20sIG1vdW50RWxlbWVudChuZXh0Vk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpLCBsYXN0Vk5vZGUsIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5leHRGbGFncyAmIDEgLyogVGV4dCAqLykge1xuICAgICAgICAgICAgaWYgKGxhc3RGbGFncyAmIDEgLyogVGV4dCAqLykge1xuICAgICAgICAgICAgICAgIHBhdGNoVGV4dChsYXN0Vk5vZGUsIG5leHRWTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXBsYWNlVk5vZGUocGFyZW50RG9tLCBtb3VudFRleHQobmV4dFZOb2RlLCBudWxsKSwgbGFzdFZOb2RlLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXh0RmxhZ3MgJiA0MDk2IC8qIFZvaWQgKi8pIHtcbiAgICAgICAgICAgIGlmIChsYXN0RmxhZ3MgJiA0MDk2IC8qIFZvaWQgKi8pIHtcbiAgICAgICAgICAgICAgICBwYXRjaFZvaWQobGFzdFZOb2RlLCBuZXh0Vk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVwbGFjZVZOb2RlKHBhcmVudERvbSwgbW91bnRWb2lkKG5leHRWTm9kZSwgbnVsbCksIGxhc3RWTm9kZSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBFcnJvciBjYXNlOiBtb3VudCBuZXcgb25lIHJlcGxhY2luZyBvbGQgb25lXG4gICAgICAgICAgICByZXBsYWNlTGFzdENoaWxkQW5kVW5tb3VudChsYXN0Vk5vZGUsIG5leHRWTm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiB1bm1vdW50Q2hpbGRyZW4oY2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZykge1xuICAgIGlmIChpc1ZOb2RlKGNoaWxkcmVuKSkge1xuICAgICAgICB1bm1vdW50KGNoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgdHJ1ZSwgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICByZW1vdmVBbGxDaGlsZHJlbihkb20sIGNoaWxkcmVuLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRvbS50ZXh0Q29udGVudCA9ICcnO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHBhdGNoRWxlbWVudChsYXN0Vk5vZGUsIG5leHRWTm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZykge1xuICAgIHZhciBuZXh0VGFnID0gbmV4dFZOb2RlLnR5cGU7XG4gICAgdmFyIGxhc3RUYWcgPSBsYXN0Vk5vZGUudHlwZTtcbiAgICBpZiAobGFzdFRhZyAhPT0gbmV4dFRhZykge1xuICAgICAgICByZXBsYWNlV2l0aE5ld05vZGUobGFzdFZOb2RlLCBuZXh0Vk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGRvbSA9IGxhc3RWTm9kZS5kb207XG4gICAgICAgIHZhciBsYXN0UHJvcHMgPSBsYXN0Vk5vZGUucHJvcHM7XG4gICAgICAgIHZhciBuZXh0UHJvcHMgPSBuZXh0Vk5vZGUucHJvcHM7XG4gICAgICAgIHZhciBsYXN0Q2hpbGRyZW4gPSBsYXN0Vk5vZGUuY2hpbGRyZW47XG4gICAgICAgIHZhciBuZXh0Q2hpbGRyZW4gPSBuZXh0Vk5vZGUuY2hpbGRyZW47XG4gICAgICAgIHZhciBsYXN0RmxhZ3MgPSBsYXN0Vk5vZGUuZmxhZ3M7XG4gICAgICAgIHZhciBuZXh0RmxhZ3MgPSBuZXh0Vk5vZGUuZmxhZ3M7XG4gICAgICAgIHZhciBsYXN0UmVmID0gbGFzdFZOb2RlLnJlZjtcbiAgICAgICAgdmFyIG5leHRSZWYgPSBuZXh0Vk5vZGUucmVmO1xuICAgICAgICB2YXIgbGFzdEV2ZW50cyA9IGxhc3RWTm9kZS5ldmVudHM7XG4gICAgICAgIHZhciBuZXh0RXZlbnRzID0gbmV4dFZOb2RlLmV2ZW50cztcbiAgICAgICAgbmV4dFZOb2RlLmRvbSA9IGRvbTtcbiAgICAgICAgaWYgKGlzU1ZHIHx8IChuZXh0RmxhZ3MgJiAxMjggLyogU3ZnRWxlbWVudCAqLykpIHtcbiAgICAgICAgICAgIGlzU1ZHID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGFzdENoaWxkcmVuICE9PSBuZXh0Q2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHBhdGNoQ2hpbGRyZW4obGFzdEZsYWdzLCBuZXh0RmxhZ3MsIGxhc3RDaGlsZHJlbiwgbmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGFzQ29udHJvbGxlZFZhbHVlID0gZmFsc2U7XG4gICAgICAgIGlmICghKG5leHRGbGFncyAmIDIgLyogSHRtbEVsZW1lbnQgKi8pKSB7XG4gICAgICAgICAgICBoYXNDb250cm9sbGVkVmFsdWUgPSBwcm9jZXNzRWxlbWVudChuZXh0RmxhZ3MsIG5leHRWTm9kZSwgZG9tKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpbmxpbmVkIHBhdGNoUHJvcHMgIC0tIHN0YXJ0cyAtLVxuICAgICAgICBpZiAobGFzdFByb3BzICE9PSBuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIHZhciBsYXN0UHJvcHNPckVtcHR5ID0gbGFzdFByb3BzIHx8IEVNUFRZX09CSjtcbiAgICAgICAgICAgIHZhciBuZXh0UHJvcHNPckVtcHR5ID0gbmV4dFByb3BzIHx8IEVNUFRZX09CSjtcbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHNPckVtcHR5ICE9PSBFTVBUWV9PQkopIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIG5leHRQcm9wc09yRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZG8gbm90IGFkZCBhIGhhc093blByb3BlcnR5IGNoZWNrIGhlcmUsIGl0IGFmZmVjdHMgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5leHRWYWx1ZSA9IG5leHRQcm9wc09yRW1wdHlbcHJvcF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBsYXN0VmFsdWUgPSBsYXN0UHJvcHNPckVtcHR5W3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOdWxsT3JVbmRlZihuZXh0VmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVQcm9wKHByb3AsIG5leHRWYWx1ZSwgZG9tKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGNoUHJvcChwcm9wLCBsYXN0VmFsdWUsIG5leHRWYWx1ZSwgZG9tLCBpc1NWRywgaGFzQ29udHJvbGxlZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsYXN0UHJvcHNPckVtcHR5ICE9PSBFTVBUWV9PQkopIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wJDEgaW4gbGFzdFByb3BzT3JFbXB0eSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBkbyBub3QgYWRkIGEgaGFzT3duUHJvcGVydHkgY2hlY2sgaGVyZSwgaXQgYWZmZWN0cyBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOdWxsT3JVbmRlZihuZXh0UHJvcHNPckVtcHR5W3Byb3AkMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVQcm9wKHByb3AkMSwgbGFzdFByb3BzT3JFbXB0eVtwcm9wJDFdLCBkb20pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlubGluZWQgcGF0Y2hQcm9wcyAgLS0gZW5kcyAtLVxuICAgICAgICBpZiAobGFzdEV2ZW50cyAhPT0gbmV4dEV2ZW50cykge1xuICAgICAgICAgICAgcGF0Y2hFdmVudHMobGFzdEV2ZW50cywgbmV4dEV2ZW50cywgZG9tKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV4dFJlZikge1xuICAgICAgICAgICAgaWYgKGxhc3RSZWYgIT09IG5leHRSZWYgfHwgaXNSZWN5Y2xpbmcpIHtcbiAgICAgICAgICAgICAgICBtb3VudFJlZihkb20sIG5leHRSZWYsIGxpZmVjeWNsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBwYXRjaENoaWxkcmVuKGxhc3RGbGFncywgbmV4dEZsYWdzLCBsYXN0Q2hpbGRyZW4sIG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZykge1xuICAgIHZhciBwYXRjaEFycmF5ID0gZmFsc2U7XG4gICAgdmFyIHBhdGNoS2V5ZWQgPSBmYWxzZTtcbiAgICBpZiAobmV4dEZsYWdzICYgNjQgLyogSGFzTm9uS2V5ZWRDaGlsZHJlbiAqLykge1xuICAgICAgICBwYXRjaEFycmF5ID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoKGxhc3RGbGFncyAmIDMyIC8qIEhhc0tleWVkQ2hpbGRyZW4gKi8pICYmIChuZXh0RmxhZ3MgJiAzMiAvKiBIYXNLZXllZENoaWxkcmVuICovKSkge1xuICAgICAgICBwYXRjaEtleWVkID0gdHJ1ZTtcbiAgICAgICAgcGF0Y2hBcnJheSA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzSW52YWxpZChuZXh0Q2hpbGRyZW4pKSB7XG4gICAgICAgIHVubW91bnRDaGlsZHJlbihsYXN0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzSW52YWxpZChsYXN0Q2hpbGRyZW4pKSB7XG4gICAgICAgIGlmIChpc1N0cmluZ09yTnVtYmVyKG5leHRDaGlsZHJlbikpIHtcbiAgICAgICAgICAgIHNldFRleHRDb250ZW50KGRvbSwgbmV4dENoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpc0FycmF5KG5leHRDaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBtb3VudEFycmF5Q2hpbGRyZW4obmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbW91bnQobmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXIobmV4dENoaWxkcmVuKSkge1xuICAgICAgICBpZiAoaXNTdHJpbmdPck51bWJlcihsYXN0Q2hpbGRyZW4pKSB7XG4gICAgICAgICAgICB1cGRhdGVUZXh0Q29udGVudChkb20sIG5leHRDaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB1bm1vdW50Q2hpbGRyZW4obGFzdENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgc2V0VGV4dENvbnRlbnQoZG9tLCBuZXh0Q2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzQXJyYXkobmV4dENoaWxkcmVuKSkge1xuICAgICAgICBpZiAoaXNBcnJheShsYXN0Q2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBwYXRjaEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChpc0tleWVkKGxhc3RDaGlsZHJlbiwgbmV4dENoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIHBhdGNoS2V5ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdW5tb3VudENoaWxkcmVuKGxhc3RDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIG1vdW50QXJyYXlDaGlsZHJlbihuZXh0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNBcnJheShsYXN0Q2hpbGRyZW4pKSB7XG4gICAgICAgIHJlbW92ZUFsbENoaWxkcmVuKGRvbSwgbGFzdENoaWxkcmVuLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgbW91bnQobmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc1ZOb2RlKG5leHRDaGlsZHJlbikpIHtcbiAgICAgICAgaWYgKGlzVk5vZGUobGFzdENoaWxkcmVuKSkge1xuICAgICAgICAgICAgcGF0Y2gobGFzdENoaWxkcmVuLCBuZXh0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdW5tb3VudENoaWxkcmVuKGxhc3RDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIG1vdW50KG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocGF0Y2hBcnJheSkge1xuICAgICAgICBpZiAocGF0Y2hLZXllZCkge1xuICAgICAgICAgICAgcGF0Y2hLZXllZENoaWxkcmVuKGxhc3RDaGlsZHJlbiwgbmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhdGNoTm9uS2V5ZWRDaGlsZHJlbihsYXN0Q2hpbGRyZW4sIG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBwYXRjaENvbXBvbmVudChsYXN0Vk5vZGUsIG5leHRWTm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc0NsYXNzLCBpc1JlY3ljbGluZykge1xuICAgIHZhciBsYXN0VHlwZSA9IGxhc3RWTm9kZS50eXBlO1xuICAgIHZhciBuZXh0VHlwZSA9IG5leHRWTm9kZS50eXBlO1xuICAgIHZhciBuZXh0UHJvcHMgPSBuZXh0Vk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIHZhciBsYXN0S2V5ID0gbGFzdFZOb2RlLmtleTtcbiAgICB2YXIgbmV4dEtleSA9IG5leHRWTm9kZS5rZXk7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IG5leHRUeXBlLmRlZmF1bHRQcm9wcztcbiAgICBpZiAoIWlzVW5kZWZpbmVkKGRlZmF1bHRQcm9wcykpIHtcbiAgICAgICAgY29weVByb3BzVG8oZGVmYXVsdFByb3BzLCBuZXh0UHJvcHMpO1xuICAgICAgICBuZXh0Vk5vZGUucHJvcHMgPSBuZXh0UHJvcHM7XG4gICAgfVxuICAgIGlmIChsYXN0VHlwZSAhPT0gbmV4dFR5cGUpIHtcbiAgICAgICAgaWYgKGlzQ2xhc3MpIHtcbiAgICAgICAgICAgIHJlcGxhY2VXaXRoTmV3Tm9kZShsYXN0Vk5vZGUsIG5leHRWTm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgbGFzdElucHV0ID0gbGFzdFZOb2RlLmNoaWxkcmVuLl9sYXN0SW5wdXQgfHwgbGFzdFZOb2RlLmNoaWxkcmVuO1xuICAgICAgICAgICAgdmFyIG5leHRJbnB1dCA9IGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnRJbnB1dChuZXh0Vk5vZGUsIG5leHRUeXBlLCBuZXh0UHJvcHMsIGNvbnRleHQpO1xuICAgICAgICAgICAgdW5tb3VudChsYXN0Vk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIHBhdGNoKGxhc3RJbnB1dCwgbmV4dElucHV0LCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIHZhciBkb20gPSBuZXh0Vk5vZGUuZG9tID0gbmV4dElucHV0LmRvbTtcbiAgICAgICAgICAgIG5leHRWTm9kZS5jaGlsZHJlbiA9IG5leHRJbnB1dDtcbiAgICAgICAgICAgIG1vdW50RnVuY3Rpb25hbENvbXBvbmVudENhbGxiYWNrcyhuZXh0Vk5vZGUucmVmLCBkb20sIGxpZmVjeWNsZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChpc0NsYXNzKSB7XG4gICAgICAgICAgICBpZiAobGFzdEtleSAhPT0gbmV4dEtleSkge1xuICAgICAgICAgICAgICAgIHJlcGxhY2VXaXRoTmV3Tm9kZShsYXN0Vk5vZGUsIG5leHRWTm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gbGFzdFZOb2RlLmNoaWxkcmVuO1xuICAgICAgICAgICAgaWYgKGluc3RhbmNlLl91bm1vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNOdWxsKHBhcmVudERvbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlcGxhY2VDaGlsZChwYXJlbnREb20sIG1vdW50Q29tcG9uZW50KG5leHRWTm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgbmV4dFZOb2RlLmZsYWdzICYgNCAvKiBDb21wb25lbnRDbGFzcyAqLyksIGxhc3RWTm9kZS5kb20pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGxhc3RTdGF0ZSA9IGluc3RhbmNlLnN0YXRlO1xuICAgICAgICAgICAgICAgIHZhciBuZXh0U3RhdGUgPSBpbnN0YW5jZS5zdGF0ZTtcbiAgICAgICAgICAgICAgICB2YXIgbGFzdFByb3BzID0gaW5zdGFuY2UucHJvcHM7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkQ29udGV4dCA9IGluc3RhbmNlLmdldENoaWxkQ29udGV4dCgpO1xuICAgICAgICAgICAgICAgIG5leHRWTm9kZS5jaGlsZHJlbiA9IGluc3RhbmNlO1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLl9pc1NWRyA9IGlzU1ZHO1xuICAgICAgICAgICAgICAgIGlmICghaXNOdWxsT3JVbmRlZihjaGlsZENvbnRleHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkQ29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQsIGNoaWxkQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbGFzdElucHV0JDEgPSBpbnN0YW5jZS5fbGFzdElucHV0O1xuICAgICAgICAgICAgICAgIHZhciBuZXh0SW5wdXQkMSA9IGluc3RhbmNlLl91cGRhdGVDb21wb25lbnQobGFzdFN0YXRlLCBuZXh0U3RhdGUsIGxhc3RQcm9wcywgbmV4dFByb3BzLCBjb250ZXh0LCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHZhciBkaWRVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLl9jaGlsZENvbnRleHQgPSBjaGlsZENvbnRleHQ7XG4gICAgICAgICAgICAgICAgaWYgKGlzSW52YWxpZChuZXh0SW5wdXQkMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dElucHV0JDEgPSBjcmVhdGVWb2lkVk5vZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobmV4dElucHV0JDEgPT09IE5PX09QKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbnB1dCQxID0gbGFzdElucHV0JDE7XG4gICAgICAgICAgICAgICAgICAgIGRpZFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc1N0cmluZ09yTnVtYmVyKG5leHRJbnB1dCQxKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SW5wdXQkMSA9IGNyZWF0ZVRleHRWTm9kZShuZXh0SW5wdXQkMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzQXJyYXkobmV4dElucHV0JDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKCdhIHZhbGlkIEluZmVybm8gVk5vZGUgKG9yIG51bGwpIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBhIGNvbXBvbmVudCByZW5kZXIuIFlvdSBtYXkgaGF2ZSByZXR1cm5lZCBhbiBhcnJheSBvciBhbiBpbnZhbGlkIG9iamVjdC4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KG5leHRJbnB1dCQxKSAmJiBuZXh0SW5wdXQkMS5kb20pIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dElucHV0JDEgPSBjbG9uZVZOb2RlKG5leHRJbnB1dCQxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5leHRJbnB1dCQxLmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbnB1dCQxLnBhcmVudFZOb2RlID0gbmV4dFZOb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsYXN0SW5wdXQkMS5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICAgICAgICAgICAgICBsYXN0SW5wdXQkMS5wYXJlbnRWTm9kZSA9IG5leHRWTm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuX2xhc3RJbnB1dCA9IG5leHRJbnB1dCQxO1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLl92Tm9kZSA9IG5leHRWTm9kZTtcbiAgICAgICAgICAgICAgICBpZiAoZGlkVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmYXN0VW5tb3VudCA9IGxpZmVjeWNsZS5mYXN0VW5tb3VudDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN1YkxpZmVjeWNsZSA9IGluc3RhbmNlLl9saWZlY3ljbGU7XG4gICAgICAgICAgICAgICAgICAgIGxpZmVjeWNsZS5mYXN0VW5tb3VudCA9IHN1YkxpZmVjeWNsZS5mYXN0VW5tb3VudDtcbiAgICAgICAgICAgICAgICAgICAgcGF0Y2gobGFzdElucHV0JDEsIG5leHRJbnB1dCQxLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY2hpbGRDb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgICAgICAgICBzdWJMaWZlY3ljbGUuZmFzdFVubW91bnQgPSBsaWZlY3ljbGUuZmFzdFVubW91bnQ7XG4gICAgICAgICAgICAgICAgICAgIGxpZmVjeWNsZS5mYXN0VW5tb3VudCA9IGZhc3RVbm1vdW50O1xuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5jb21wb25lbnREaWRVcGRhdGUobGFzdFByb3BzLCBsYXN0U3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmFmdGVyVXBkYXRlICYmIG9wdGlvbnMuYWZ0ZXJVcGRhdGUobmV4dFZOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5maW5kRE9NTm9kZUVuYWJsZWQgJiYgY29tcG9uZW50VG9ET01Ob2RlTWFwLnNldChpbnN0YW5jZSwgbmV4dElucHV0JDEuZG9tKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV4dFZOb2RlLmRvbSA9IG5leHRJbnB1dCQxLmRvbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBzaG91bGRVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIGxhc3RQcm9wcyQxID0gbGFzdFZOb2RlLnByb3BzO1xuICAgICAgICAgICAgdmFyIG5leHRIb29rcyA9IG5leHRWTm9kZS5yZWY7XG4gICAgICAgICAgICB2YXIgbmV4dEhvb2tzRGVmaW5lZCA9ICFpc051bGxPclVuZGVmKG5leHRIb29rcyk7XG4gICAgICAgICAgICB2YXIgbGFzdElucHV0JDIgPSBsYXN0Vk5vZGUuY2hpbGRyZW47XG4gICAgICAgICAgICB2YXIgbmV4dElucHV0JDIgPSBsYXN0SW5wdXQkMjtcbiAgICAgICAgICAgIG5leHRWTm9kZS5kb20gPSBsYXN0Vk5vZGUuZG9tO1xuICAgICAgICAgICAgbmV4dFZOb2RlLmNoaWxkcmVuID0gbGFzdElucHV0JDI7XG4gICAgICAgICAgICBpZiAobGFzdEtleSAhPT0gbmV4dEtleSkge1xuICAgICAgICAgICAgICAgIHNob3VsZFVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAobmV4dEhvb2tzRGVmaW5lZCAmJiAhaXNOdWxsT3JVbmRlZihuZXh0SG9va3Mub25Db21wb25lbnRTaG91bGRVcGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3VsZFVwZGF0ZSA9IG5leHRIb29rcy5vbkNvbXBvbmVudFNob3VsZFVwZGF0ZShsYXN0UHJvcHMkMSwgbmV4dFByb3BzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2hvdWxkVXBkYXRlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmIChuZXh0SG9va3NEZWZpbmVkICYmICFpc051bGxPclVuZGVmKG5leHRIb29rcy5vbkNvbXBvbmVudFdpbGxVcGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRIb29rcy5vbkNvbXBvbmVudFdpbGxVcGRhdGUobGFzdFByb3BzJDEsIG5leHRQcm9wcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5leHRJbnB1dCQyID0gbmV4dFR5cGUobmV4dFByb3BzLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAoaXNJbnZhbGlkKG5leHRJbnB1dCQyKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SW5wdXQkMiA9IGNyZWF0ZVZvaWRWTm9kZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc1N0cmluZ09yTnVtYmVyKG5leHRJbnB1dCQyKSAmJiBuZXh0SW5wdXQkMiAhPT0gTk9fT1ApIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dElucHV0JDIgPSBjcmVhdGVUZXh0Vk5vZGUobmV4dElucHV0JDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc0FycmF5KG5leHRJbnB1dCQyKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcignYSB2YWxpZCBJbmZlcm5vIFZOb2RlIChvciBudWxsKSBtdXN0IGJlIHJldHVybmVkIGZyb20gYSBjb21wb25lbnQgcmVuZGVyLiBZb3UgbWF5IGhhdmUgcmV0dXJuZWQgYW4gYXJyYXkgb3IgYW4gaW52YWxpZCBvYmplY3QuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc09iamVjdChuZXh0SW5wdXQkMikgJiYgbmV4dElucHV0JDIuZG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbnB1dCQyID0gY2xvbmVWTm9kZShuZXh0SW5wdXQkMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChuZXh0SW5wdXQkMiAhPT0gTk9fT1ApIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0Y2gobGFzdElucHV0JDIsIG5leHRJbnB1dCQyLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFZOb2RlLmNoaWxkcmVuID0gbmV4dElucHV0JDI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0SG9va3NEZWZpbmVkICYmICFpc051bGxPclVuZGVmKG5leHRIb29rcy5vbkNvbXBvbmVudERpZFVwZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRIb29rcy5vbkNvbXBvbmVudERpZFVwZGF0ZShsYXN0UHJvcHMkMSwgbmV4dFByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuZXh0Vk5vZGUuZG9tID0gbmV4dElucHV0JDIuZG9tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXh0SW5wdXQkMi5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICAgICAgICAgIG5leHRJbnB1dCQyLnBhcmVudFZOb2RlID0gbmV4dFZOb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobGFzdElucHV0JDIuZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgICAgICAgICBsYXN0SW5wdXQkMi5wYXJlbnRWTm9kZSA9IG5leHRWTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBwYXRjaFRleHQobGFzdFZOb2RlLCBuZXh0Vk5vZGUpIHtcbiAgICB2YXIgbmV4dFRleHQgPSBuZXh0Vk5vZGUuY2hpbGRyZW47XG4gICAgdmFyIGRvbSA9IGxhc3RWTm9kZS5kb207XG4gICAgbmV4dFZOb2RlLmRvbSA9IGRvbTtcbiAgICBpZiAobGFzdFZOb2RlLmNoaWxkcmVuICE9PSBuZXh0VGV4dCkge1xuICAgICAgICBkb20ubm9kZVZhbHVlID0gbmV4dFRleHQ7XG4gICAgfVxufVxuZnVuY3Rpb24gcGF0Y2hWb2lkKGxhc3RWTm9kZSwgbmV4dFZOb2RlKSB7XG4gICAgbmV4dFZOb2RlLmRvbSA9IGxhc3RWTm9kZS5kb207XG59XG5mdW5jdGlvbiBwYXRjaE5vbktleWVkQ2hpbGRyZW4obGFzdENoaWxkcmVuLCBuZXh0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpIHtcbiAgICB2YXIgbGFzdENoaWxkcmVuTGVuZ3RoID0gbGFzdENoaWxkcmVuLmxlbmd0aDtcbiAgICB2YXIgbmV4dENoaWxkcmVuTGVuZ3RoID0gbmV4dENoaWxkcmVuLmxlbmd0aDtcbiAgICB2YXIgY29tbW9uTGVuZ3RoID0gbGFzdENoaWxkcmVuTGVuZ3RoID4gbmV4dENoaWxkcmVuTGVuZ3RoID8gbmV4dENoaWxkcmVuTGVuZ3RoIDogbGFzdENoaWxkcmVuTGVuZ3RoO1xuICAgIHZhciBpID0gMDtcbiAgICBmb3IgKDsgaSA8IGNvbW1vbkxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBuZXh0Q2hpbGQgPSBuZXh0Q2hpbGRyZW5baV07XG4gICAgICAgIGlmIChuZXh0Q2hpbGQuZG9tKSB7XG4gICAgICAgICAgICBuZXh0Q2hpbGQgPSBuZXh0Q2hpbGRyZW5baV0gPSBjbG9uZVZOb2RlKG5leHRDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgcGF0Y2gobGFzdENoaWxkcmVuW2ldLCBuZXh0Q2hpbGQsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbiAgICBpZiAobGFzdENoaWxkcmVuTGVuZ3RoIDwgbmV4dENoaWxkcmVuTGVuZ3RoKSB7XG4gICAgICAgIGZvciAoaSA9IGNvbW1vbkxlbmd0aDsgaSA8IG5leHRDaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbmV4dENoaWxkJDEgPSBuZXh0Q2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAobmV4dENoaWxkJDEuZG9tKSB7XG4gICAgICAgICAgICAgICAgbmV4dENoaWxkJDEgPSBuZXh0Q2hpbGRyZW5baV0gPSBjbG9uZVZOb2RlKG5leHRDaGlsZCQxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFwcGVuZENoaWxkKGRvbSwgbW91bnQobmV4dENoaWxkJDEsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChuZXh0Q2hpbGRyZW5MZW5ndGggPT09IDApIHtcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGRyZW4oZG9tLCBsYXN0Q2hpbGRyZW4sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChsYXN0Q2hpbGRyZW5MZW5ndGggPiBuZXh0Q2hpbGRyZW5MZW5ndGgpIHtcbiAgICAgICAgZm9yIChpID0gY29tbW9uTGVuZ3RoOyBpIDwgbGFzdENoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHVubW91bnQobGFzdENoaWxkcmVuW2ldLCBkb20sIGxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHBhdGNoS2V5ZWRDaGlsZHJlbihhLCBiLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKSB7XG4gICAgdmFyIGFMZW5ndGggPSBhLmxlbmd0aDtcbiAgICB2YXIgYkxlbmd0aCA9IGIubGVuZ3RoO1xuICAgIHZhciBhRW5kID0gYUxlbmd0aCAtIDE7XG4gICAgdmFyIGJFbmQgPSBiTGVuZ3RoIC0gMTtcbiAgICB2YXIgYVN0YXJ0ID0gMDtcbiAgICB2YXIgYlN0YXJ0ID0gMDtcbiAgICB2YXIgaTtcbiAgICB2YXIgajtcbiAgICB2YXIgYU5vZGU7XG4gICAgdmFyIGJOb2RlO1xuICAgIHZhciBuZXh0Tm9kZTtcbiAgICB2YXIgbmV4dFBvcztcbiAgICB2YXIgbm9kZTtcbiAgICBpZiAoYUxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpZiAoYkxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgbW91bnRBcnJheUNoaWxkcmVuKGIsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNlIGlmIChiTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlbW92ZUFsbENoaWxkcmVuKGRvbSwgYSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGFTdGFydE5vZGUgPSBhW2FTdGFydF07XG4gICAgdmFyIGJTdGFydE5vZGUgPSBiW2JTdGFydF07XG4gICAgdmFyIGFFbmROb2RlID0gYVthRW5kXTtcbiAgICB2YXIgYkVuZE5vZGUgPSBiW2JFbmRdO1xuICAgIGlmIChiU3RhcnROb2RlLmRvbSkge1xuICAgICAgICBiW2JTdGFydF0gPSBiU3RhcnROb2RlID0gY2xvbmVWTm9kZShiU3RhcnROb2RlKTtcbiAgICB9XG4gICAgaWYgKGJFbmROb2RlLmRvbSkge1xuICAgICAgICBiW2JFbmRdID0gYkVuZE5vZGUgPSBjbG9uZVZOb2RlKGJFbmROb2RlKTtcbiAgICB9XG4gICAgLy8gU3RlcCAxXG4gICAgLyogZXNsaW50IG5vLWNvbnN0YW50LWNvbmRpdGlvbjogMCAqL1xuICAgIG91dGVyOiB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAvLyBTeW5jIG5vZGVzIHdpdGggdGhlIHNhbWUga2V5IGF0IHRoZSBiZWdpbm5pbmcuXG4gICAgICAgIHdoaWxlIChhU3RhcnROb2RlLmtleSA9PT0gYlN0YXJ0Tm9kZS5rZXkpIHtcbiAgICAgICAgICAgIHBhdGNoKGFTdGFydE5vZGUsIGJTdGFydE5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgYVN0YXJ0Kys7XG4gICAgICAgICAgICBiU3RhcnQrKztcbiAgICAgICAgICAgIGlmIChhU3RhcnQgPiBhRW5kIHx8IGJTdGFydCA+IGJFbmQpIHtcbiAgICAgICAgICAgICAgICBicmVhayBvdXRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFTdGFydE5vZGUgPSBhW2FTdGFydF07XG4gICAgICAgICAgICBiU3RhcnROb2RlID0gYltiU3RhcnRdO1xuICAgICAgICAgICAgaWYgKGJTdGFydE5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgYltiU3RhcnRdID0gYlN0YXJ0Tm9kZSA9IGNsb25lVk5vZGUoYlN0YXJ0Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3luYyBub2RlcyB3aXRoIHRoZSBzYW1lIGtleSBhdCB0aGUgZW5kLlxuICAgICAgICB3aGlsZSAoYUVuZE5vZGUua2V5ID09PSBiRW5kTm9kZS5rZXkpIHtcbiAgICAgICAgICAgIHBhdGNoKGFFbmROb2RlLCBiRW5kTm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICBhRW5kLS07XG4gICAgICAgICAgICBiRW5kLS07XG4gICAgICAgICAgICBpZiAoYVN0YXJ0ID4gYUVuZCB8fCBiU3RhcnQgPiBiRW5kKSB7XG4gICAgICAgICAgICAgICAgYnJlYWsgb3V0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhRW5kTm9kZSA9IGFbYUVuZF07XG4gICAgICAgICAgICBiRW5kTm9kZSA9IGJbYkVuZF07XG4gICAgICAgICAgICBpZiAoYkVuZE5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgYltiRW5kXSA9IGJFbmROb2RlID0gY2xvbmVWTm9kZShiRW5kTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gTW92ZSBhbmQgc3luYyBub2RlcyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gICAgICAgIGlmIChhRW5kTm9kZS5rZXkgPT09IGJTdGFydE5vZGUua2V5KSB7XG4gICAgICAgICAgICBwYXRjaChhRW5kTm9kZSwgYlN0YXJ0Tm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICBpbnNlcnRPckFwcGVuZChkb20sIGJTdGFydE5vZGUuZG9tLCBhU3RhcnROb2RlLmRvbSk7XG4gICAgICAgICAgICBhRW5kLS07XG4gICAgICAgICAgICBiU3RhcnQrKztcbiAgICAgICAgICAgIGFFbmROb2RlID0gYVthRW5kXTtcbiAgICAgICAgICAgIGJTdGFydE5vZGUgPSBiW2JTdGFydF07XG4gICAgICAgICAgICBpZiAoYlN0YXJ0Tm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICBiW2JTdGFydF0gPSBiU3RhcnROb2RlID0gY2xvbmVWTm9kZShiU3RhcnROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1vdmUgYW5kIHN5bmMgbm9kZXMgZnJvbSBsZWZ0IHRvIHJpZ2h0LlxuICAgICAgICBpZiAoYVN0YXJ0Tm9kZS5rZXkgPT09IGJFbmROb2RlLmtleSkge1xuICAgICAgICAgICAgcGF0Y2goYVN0YXJ0Tm9kZSwgYkVuZE5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgbmV4dFBvcyA9IGJFbmQgKyAxO1xuICAgICAgICAgICAgbmV4dE5vZGUgPSBuZXh0UG9zIDwgYi5sZW5ndGggPyBiW25leHRQb3NdLmRvbSA6IG51bGw7XG4gICAgICAgICAgICBpbnNlcnRPckFwcGVuZChkb20sIGJFbmROb2RlLmRvbSwgbmV4dE5vZGUpO1xuICAgICAgICAgICAgYVN0YXJ0Kys7XG4gICAgICAgICAgICBiRW5kLS07XG4gICAgICAgICAgICBhU3RhcnROb2RlID0gYVthU3RhcnRdO1xuICAgICAgICAgICAgYkVuZE5vZGUgPSBiW2JFbmRdO1xuICAgICAgICAgICAgaWYgKGJFbmROb2RlLmRvbSkge1xuICAgICAgICAgICAgICAgIGJbYkVuZF0gPSBiRW5kTm9kZSA9IGNsb25lVk5vZGUoYkVuZE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChhU3RhcnQgPiBhRW5kKSB7XG4gICAgICAgIGlmIChiU3RhcnQgPD0gYkVuZCkge1xuICAgICAgICAgICAgbmV4dFBvcyA9IGJFbmQgKyAxO1xuICAgICAgICAgICAgbmV4dE5vZGUgPSBuZXh0UG9zIDwgYi5sZW5ndGggPyBiW25leHRQb3NdLmRvbSA6IG51bGw7XG4gICAgICAgICAgICB3aGlsZSAoYlN0YXJ0IDw9IGJFbmQpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gYltiU3RhcnRdO1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmRvbSkge1xuICAgICAgICAgICAgICAgICAgICBiW2JTdGFydF0gPSBub2RlID0gY2xvbmVWTm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYlN0YXJ0Kys7XG4gICAgICAgICAgICAgICAgaW5zZXJ0T3JBcHBlbmQoZG9tLCBtb3VudChub2RlLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSwgbmV4dE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGJTdGFydCA+IGJFbmQpIHtcbiAgICAgICAgd2hpbGUgKGFTdGFydCA8PSBhRW5kKSB7XG4gICAgICAgICAgICB1bm1vdW50KGFbYVN0YXJ0KytdLCBkb20sIGxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYUxlbmd0aCA9IGFFbmQgLSBhU3RhcnQgKyAxO1xuICAgICAgICBiTGVuZ3RoID0gYkVuZCAtIGJTdGFydCArIDE7XG4gICAgICAgIHZhciBhTnVsbGFibGUgPSBhO1xuICAgICAgICB2YXIgc291cmNlcyA9IG5ldyBBcnJheShiTGVuZ3RoKTtcbiAgICAgICAgLy8gTWFyayBhbGwgbm9kZXMgYXMgaW5zZXJ0ZWQuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBiTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNvdXJjZXNbaV0gPSAtMTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbW92ZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHBvcyA9IDA7XG4gICAgICAgIHZhciBwYXRjaGVkID0gMDtcbiAgICAgICAgaWYgKChiTGVuZ3RoIDw9IDQpIHx8IChhTGVuZ3RoICogYkxlbmd0aCA8PSAxNikpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IGFTdGFydDsgaSA8PSBhRW5kOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhTm9kZSA9IGFbaV07XG4gICAgICAgICAgICAgICAgaWYgKHBhdGNoZWQgPCBiTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IGJTdGFydDsgaiA8PSBiRW5kOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJOb2RlID0gYltqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhTm9kZS5rZXkgPT09IGJOb2RlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZXNbaiAtIGJTdGFydF0gPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3MgPiBqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcyA9IGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiTm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYltqXSA9IGJOb2RlID0gY2xvbmVWTm9kZShiTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGNoKGFOb2RlLCBiTm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0Y2hlZCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFOdWxsYWJsZVtpXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIga2V5SW5kZXggPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICBmb3IgKGkgPSBiU3RhcnQ7IGkgPD0gYkVuZDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IGJbaV07XG4gICAgICAgICAgICAgICAga2V5SW5kZXguc2V0KG5vZGUua2V5LCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IGFTdGFydDsgaSA8PSBhRW5kOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhTm9kZSA9IGFbaV07XG4gICAgICAgICAgICAgICAgaWYgKHBhdGNoZWQgPCBiTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGogPSBrZXlJbmRleC5nZXQoYU5vZGUua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChqKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYk5vZGUgPSBiW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlc1tqIC0gYlN0YXJ0XSA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zID4gaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcyA9IGo7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYk5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYltqXSA9IGJOb2RlID0gY2xvbmVWTm9kZShiTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRjaChhTm9kZSwgYk5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0Y2hlZCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYU51bGxhYmxlW2ldID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYUxlbmd0aCA9PT0gYS5sZW5ndGggJiYgcGF0Y2hlZCA9PT0gMCkge1xuICAgICAgICAgICAgcmVtb3ZlQWxsQ2hpbGRyZW4oZG9tLCBhLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIHdoaWxlIChiU3RhcnQgPCBiTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IGJbYlN0YXJ0XTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICAgICAgYltiU3RhcnRdID0gbm9kZSA9IGNsb25lVk5vZGUobm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJTdGFydCsrO1xuICAgICAgICAgICAgICAgIGluc2VydE9yQXBwZW5kKGRvbSwgbW91bnQobm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyksIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaSA9IGFMZW5ndGggLSBwYXRjaGVkO1xuICAgICAgICAgICAgd2hpbGUgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgYU5vZGUgPSBhTnVsbGFibGVbYVN0YXJ0KytdO1xuICAgICAgICAgICAgICAgIGlmICghaXNOdWxsKGFOb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICB1bm1vdW50KGFOb2RlLCBkb20sIGxpZmVjeWNsZSwgdHJ1ZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1vdmVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlcSA9IGxpc19hbGdvcml0aG0oc291cmNlcyk7XG4gICAgICAgICAgICAgICAgaiA9IHNlcS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IGJMZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc291cmNlc1tpXSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcyA9IGkgKyBiU3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlID0gYltwb3NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYltwb3NdID0gbm9kZSA9IGNsb25lVk5vZGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0UG9zID0gcG9zICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHROb2RlID0gbmV4dFBvcyA8IGIubGVuZ3RoID8gYltuZXh0UG9zXS5kb20gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0T3JBcHBlbmQoZG9tLCBtb3VudChub2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpLCBuZXh0Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA8IDAgfHwgaSAhPT0gc2VxW2pdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gaSArIGJTdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlID0gYltwb3NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQb3MgPSBwb3MgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHROb2RlID0gbmV4dFBvcyA8IGIubGVuZ3RoID8gYltuZXh0UG9zXS5kb20gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydE9yQXBwZW5kKGRvbSwgbm9kZS5kb20sIG5leHROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGotLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBhdGNoZWQgIT09IGJMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBiTGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZXNbaV0gPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3MgPSBpICsgYlN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGJbcG9zXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmRvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJbcG9zXSA9IG5vZGUgPSBjbG9uZVZOb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBvcyA9IHBvcyArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0Tm9kZSA9IG5leHRQb3MgPCBiLmxlbmd0aCA/IGJbbmV4dFBvc10uZG9tIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydE9yQXBwZW5kKGRvbSwgbW91bnQobm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyksIG5leHROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xvbmdlc3RfaW5jcmVhc2luZ19zdWJzZXF1ZW5jZVxuZnVuY3Rpb24gbGlzX2FsZ29yaXRobShhKSB7XG4gICAgdmFyIHAgPSBhLnNsaWNlKDApO1xuICAgIHZhciByZXN1bHQgPSBbMF07XG4gICAgdmFyIGk7XG4gICAgdmFyIGo7XG4gICAgdmFyIHU7XG4gICAgdmFyIHY7XG4gICAgdmFyIGM7XG4gICAgZm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFbaV0gPT09IC0xKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBqID0gcmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKGFbal0gPCBhW2ldKSB7XG4gICAgICAgICAgICBwW2ldID0gajtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGkpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdSA9IDA7XG4gICAgICAgIHYgPSByZXN1bHQubGVuZ3RoIC0gMTtcbiAgICAgICAgd2hpbGUgKHUgPCB2KSB7XG4gICAgICAgICAgICBjID0gKCh1ICsgdikgLyAyKSB8IDA7XG4gICAgICAgICAgICBpZiAoYVtyZXN1bHRbY11dIDwgYVtpXSkge1xuICAgICAgICAgICAgICAgIHUgPSBjICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHYgPSBjO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhW2ldIDwgYVtyZXN1bHRbdV1dKSB7XG4gICAgICAgICAgICBpZiAodSA+IDApIHtcbiAgICAgICAgICAgICAgICBwW2ldID0gcmVzdWx0W3UgLSAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdFt1XSA9IGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdSA9IHJlc3VsdC5sZW5ndGg7XG4gICAgdiA9IHJlc3VsdFt1IC0gMV07XG4gICAgd2hpbGUgKHUtLSA+IDApIHtcbiAgICAgICAgcmVzdWx0W3VdID0gdjtcbiAgICAgICAgdiA9IHBbdl07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBwYXRjaFByb3AocHJvcCwgbGFzdFZhbHVlLCBuZXh0VmFsdWUsIGRvbSwgaXNTVkcsIGhhc0NvbnRyb2xsZWRWYWx1ZSkge1xuICAgIGlmIChza2lwUHJvcHNbcHJvcF0gfHwgaGFzQ29udHJvbGxlZFZhbHVlICYmIHByb3AgPT09ICd2YWx1ZScpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoYm9vbGVhblByb3BzW3Byb3BdKSB7XG4gICAgICAgIGRvbVtwcm9wXSA9ICEhbmV4dFZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChzdHJpY3RQcm9wc1twcm9wXSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBpc051bGxPclVuZGVmKG5leHRWYWx1ZSkgPyAnJyA6IG5leHRWYWx1ZTtcbiAgICAgICAgaWYgKGRvbVtwcm9wXSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGRvbVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGxhc3RWYWx1ZSAhPT0gbmV4dFZhbHVlKSB7XG4gICAgICAgIGlmIChpc0F0dHJBbkV2ZW50KHByb3ApKSB7XG4gICAgICAgICAgICBwYXRjaEV2ZW50KHByb3AsIGxhc3RWYWx1ZSwgbmV4dFZhbHVlLCBkb20pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzTnVsbE9yVW5kZWYobmV4dFZhbHVlKSkge1xuICAgICAgICAgICAgZG9tLnJlbW92ZUF0dHJpYnV0ZShwcm9wKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wID09PSAnY2xhc3NOYW1lJykge1xuICAgICAgICAgICAgaWYgKGlzU1ZHKSB7XG4gICAgICAgICAgICAgICAgZG9tLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBuZXh0VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9tLmNsYXNzTmFtZSA9IG5leHRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wID09PSAnc3R5bGUnKSB7XG4gICAgICAgICAgICBwYXRjaFN0eWxlKGxhc3RWYWx1ZSwgbmV4dFZhbHVlLCBkb20pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3AgPT09ICdkYW5nZXJvdXNseVNldElubmVySFRNTCcpIHtcbiAgICAgICAgICAgIHZhciBsYXN0SHRtbCA9IGxhc3RWYWx1ZSAmJiBsYXN0VmFsdWUuX19odG1sO1xuICAgICAgICAgICAgdmFyIG5leHRIdG1sID0gbmV4dFZhbHVlICYmIG5leHRWYWx1ZS5fX2h0bWw7XG4gICAgICAgICAgICBpZiAobGFzdEh0bWwgIT09IG5leHRIdG1sKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKG5leHRIdG1sKSkge1xuICAgICAgICAgICAgICAgICAgICBkb20uaW5uZXJIVE1MID0gbmV4dEh0bWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGRlaHlwaGVuUHJvcDtcbiAgICAgICAgICAgIGlmIChkZWh5cGhlblByb3BzW3Byb3BdKSB7XG4gICAgICAgICAgICAgICAgZGVoeXBoZW5Qcm9wID0gZGVoeXBoZW5Qcm9wc1twcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzU1ZHICYmIHByb3AubWF0Y2gocHJvYmFibHlLZWJhYlByb3BzKSkge1xuICAgICAgICAgICAgICAgIGRlaHlwaGVuUHJvcCA9IHByb3AucmVwbGFjZSgvKFthLXpdKShbQS1aXXwxKS9nLCBrZWJhYml6ZSk7XG4gICAgICAgICAgICAgICAgZGVoeXBoZW5Qcm9wc1twcm9wXSA9IGRlaHlwaGVuUHJvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlaHlwaGVuUHJvcCA9IHByb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbnMgPSBuYW1lc3BhY2VzW3Byb3BdO1xuICAgICAgICAgICAgaWYgKG5zKSB7XG4gICAgICAgICAgICAgICAgZG9tLnNldEF0dHJpYnV0ZU5TKG5zLCBkZWh5cGhlblByb3AsIG5leHRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb20uc2V0QXR0cmlidXRlKGRlaHlwaGVuUHJvcCwgbmV4dFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHBhdGNoRXZlbnRzKGxhc3RFdmVudHMsIG5leHRFdmVudHMsIGRvbSkge1xuICAgIGxhc3RFdmVudHMgPSBsYXN0RXZlbnRzIHx8IEVNUFRZX09CSjtcbiAgICBuZXh0RXZlbnRzID0gbmV4dEV2ZW50cyB8fCBFTVBUWV9PQko7XG4gICAgaWYgKG5leHRFdmVudHMgIT09IEVNUFRZX09CSikge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIG5leHRFdmVudHMpIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdCBhZGQgYSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBoZXJlLCBpdCBhZmZlY3RzIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICBwYXRjaEV2ZW50KG5hbWUsIGxhc3RFdmVudHNbbmFtZV0sIG5leHRFdmVudHNbbmFtZV0sIGRvbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGxhc3RFdmVudHMgIT09IEVNUFRZX09CSikge1xuICAgICAgICBmb3IgKHZhciBuYW1lJDEgaW4gbGFzdEV2ZW50cykge1xuICAgICAgICAgICAgLy8gZG8gbm90IGFkZCBhIGhhc093blByb3BlcnR5IGNoZWNrIGhlcmUsIGl0IGFmZmVjdHMgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgIGlmIChpc051bGxPclVuZGVmKG5leHRFdmVudHNbbmFtZSQxXSkpIHtcbiAgICAgICAgICAgICAgICBwYXRjaEV2ZW50KG5hbWUkMSwgbGFzdEV2ZW50c1tuYW1lJDFdLCBudWxsLCBkb20pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gcGF0Y2hFdmVudChuYW1lLCBsYXN0VmFsdWUsIG5leHRWYWx1ZSwgZG9tKSB7XG4gICAgaWYgKGxhc3RWYWx1ZSAhPT0gbmV4dFZhbHVlKSB7XG4gICAgICAgIHZhciBuYW1lTG93ZXJDYXNlID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB2YXIgZG9tRXZlbnQgPSBkb21bbmFtZUxvd2VyQ2FzZV07XG4gICAgICAgIC8vIGlmIHRoZSBmdW5jdGlvbiBpcyB3cmFwcGVkLCB0aGF0IG1lYW5zIGl0J3MgYmVlbiBjb250cm9sbGVkIGJ5IGEgd3JhcHBlclxuICAgICAgICBpZiAoZG9tRXZlbnQgJiYgZG9tRXZlbnQud3JhcHBlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWxlZ2F0ZWRQcm9wc1tuYW1lXSkge1xuICAgICAgICAgICAgaGFuZGxlRXZlbnQobmFtZSwgbGFzdFZhbHVlLCBuZXh0VmFsdWUsIGRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAobGFzdFZhbHVlICE9PSBuZXh0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzRnVuY3Rpb24obmV4dFZhbHVlKSAmJiAhaXNOdWxsT3JVbmRlZihuZXh0VmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsaW5rRXZlbnQgPSBuZXh0VmFsdWUuZXZlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsaW5rRXZlbnQgJiYgaXNGdW5jdGlvbihsaW5rRXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRvbS5fZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVtuYW1lTG93ZXJDYXNlXSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtFdmVudChlLmN1cnJlbnRUYXJnZXQuX2RhdGEsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkb20uX2RhdGEgPSBuZXh0VmFsdWUuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcigoXCJhbiBldmVudCBvbiBhIFZOb2RlIFxcXCJcIiArIG5hbWUgKyBcIlxcXCIuIHdhcyBub3QgYSBmdW5jdGlvbiBvciBhIHZhbGlkIGxpbmtFdmVudC5cIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkb21bbmFtZUxvd2VyQ2FzZV0gPSBuZXh0VmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLy8gV2UgYXJlIGFzc3VtaW5nIGhlcmUgdGhhdCB3ZSBjb21lIGZyb20gcGF0Y2hQcm9wIHJvdXRpbmVcbi8vIC1uZXh0QXR0clZhbHVlIGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZFxuZnVuY3Rpb24gcGF0Y2hTdHlsZShsYXN0QXR0clZhbHVlLCBuZXh0QXR0clZhbHVlLCBkb20pIHtcbiAgICBpZiAoaXNTdHJpbmcobmV4dEF0dHJWYWx1ZSkpIHtcbiAgICAgICAgZG9tLnN0eWxlLmNzc1RleHQgPSBuZXh0QXR0clZhbHVlO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAodmFyIHN0eWxlIGluIG5leHRBdHRyVmFsdWUpIHtcbiAgICAgICAgLy8gZG8gbm90IGFkZCBhIGhhc093blByb3BlcnR5IGNoZWNrIGhlcmUsIGl0IGFmZmVjdHMgcGVyZm9ybWFuY2VcbiAgICAgICAgdmFyIHZhbHVlID0gbmV4dEF0dHJWYWx1ZVtzdHlsZV07XG4gICAgICAgIGlmIChpc051bWJlcih2YWx1ZSkgJiYgIWlzVW5pdGxlc3NOdW1iZXJbc3R5bGVdKSB7XG4gICAgICAgICAgICBkb20uc3R5bGVbc3R5bGVdID0gdmFsdWUgKyAncHgnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZG9tLnN0eWxlW3N0eWxlXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghaXNOdWxsT3JVbmRlZihsYXN0QXR0clZhbHVlKSkge1xuICAgICAgICBmb3IgKHZhciBzdHlsZSQxIGluIGxhc3RBdHRyVmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChpc051bGxPclVuZGVmKG5leHRBdHRyVmFsdWVbc3R5bGUkMV0pKSB7XG4gICAgICAgICAgICAgICAgZG9tLnN0eWxlW3N0eWxlJDFdID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiByZW1vdmVQcm9wKHByb3AsIGxhc3RWYWx1ZSwgZG9tKSB7XG4gICAgaWYgKHByb3AgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICAgIGRvbS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3AgPT09ICd2YWx1ZScpIHtcbiAgICAgICAgZG9tLnZhbHVlID0gJyc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3AgPT09ICdzdHlsZScpIHtcbiAgICAgICAgZG9tLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNBdHRyQW5FdmVudChwcm9wKSkge1xuICAgICAgICBoYW5kbGVFdmVudChuYW1lLCBsYXN0VmFsdWUsIG51bGwsIGRvbSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkb20ucmVtb3ZlQXR0cmlidXRlKHByb3ApO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbW91bnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIHZhciBmbGFncyA9IHZOb2RlLmZsYWdzO1xuICAgIGlmIChmbGFncyAmIDM5NzAgLyogRWxlbWVudCAqLykge1xuICAgICAgICByZXR1cm4gbW91bnRFbGVtZW50KHZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChmbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICByZXR1cm4gbW91bnRDb21wb25lbnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgZmxhZ3MgJiA0IC8qIENvbXBvbmVudENsYXNzICovKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxhZ3MgJiA0MDk2IC8qIFZvaWQgKi8pIHtcbiAgICAgICAgcmV0dXJuIG1vdW50Vm9pZCh2Tm9kZSwgcGFyZW50RG9tKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxhZ3MgJiAxIC8qIFRleHQgKi8pIHtcbiAgICAgICAgcmV0dXJuIG1vdW50VGV4dCh2Tm9kZSwgcGFyZW50RG9tKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZOb2RlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHRocm93RXJyb3IoKFwibW91bnQoKSByZWNlaXZlZCBhbiBvYmplY3QgdGhhdCdzIG5vdCBhIHZhbGlkIFZOb2RlLCB5b3Ugc2hvdWxkIHN0cmluZ2lmeSBpdCBmaXJzdC4gT2JqZWN0OiBcXFwiXCIgKyAoSlNPTi5zdHJpbmdpZnkodk5vZGUpKSArIFwiXFxcIi5cIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3dFcnJvcigoXCJtb3VudCgpIGV4cGVjdHMgYSB2YWxpZCBWTm9kZSwgaW5zdGVhZCBpdCByZWNlaXZlZCBhbiBvYmplY3Qgd2l0aCB0aGUgdHlwZSBcXFwiXCIgKyAodHlwZW9mIHZOb2RlKSArIFwiXFxcIi5cIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IoKTtcbiAgICB9XG59XG5mdW5jdGlvbiBtb3VudFRleHQodk5vZGUsIHBhcmVudERvbSkge1xuICAgIHZhciBkb20gPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2Tm9kZS5jaGlsZHJlbik7XG4gICAgdk5vZGUuZG9tID0gZG9tO1xuICAgIGlmIChwYXJlbnREb20pIHtcbiAgICAgICAgYXBwZW5kQ2hpbGQocGFyZW50RG9tLCBkb20pO1xuICAgIH1cbiAgICByZXR1cm4gZG9tO1xufVxuZnVuY3Rpb24gbW91bnRWb2lkKHZOb2RlLCBwYXJlbnREb20pIHtcbiAgICB2YXIgZG9tID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIHZOb2RlLmRvbSA9IGRvbTtcbiAgICBpZiAocGFyZW50RG9tKSB7XG4gICAgICAgIGFwcGVuZENoaWxkKHBhcmVudERvbSwgZG9tKTtcbiAgICB9XG4gICAgcmV0dXJuIGRvbTtcbn1cbmZ1bmN0aW9uIG1vdW50RWxlbWVudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSB7XG4gICAgaWYgKG9wdGlvbnMucmVjeWNsaW5nRW5hYmxlZCkge1xuICAgICAgICB2YXIgZG9tJDEgPSByZWN5Y2xlRWxlbWVudCh2Tm9kZSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIGlmICghaXNOdWxsKGRvbSQxKSkge1xuICAgICAgICAgICAgaWYgKCFpc051bGwocGFyZW50RG9tKSkge1xuICAgICAgICAgICAgICAgIGFwcGVuZENoaWxkKHBhcmVudERvbSwgZG9tJDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRvbSQxO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciB0YWcgPSB2Tm9kZS50eXBlO1xuICAgIHZhciBmbGFncyA9IHZOb2RlLmZsYWdzO1xuICAgIGlmIChpc1NWRyB8fCAoZmxhZ3MgJiAxMjggLyogU3ZnRWxlbWVudCAqLykpIHtcbiAgICAgICAgaXNTVkcgPSB0cnVlO1xuICAgIH1cbiAgICB2YXIgZG9tID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KHRhZywgaXNTVkcpO1xuICAgIHZhciBjaGlsZHJlbiA9IHZOb2RlLmNoaWxkcmVuO1xuICAgIHZhciBwcm9wcyA9IHZOb2RlLnByb3BzO1xuICAgIHZhciBldmVudHMgPSB2Tm9kZS5ldmVudHM7XG4gICAgdmFyIHJlZiA9IHZOb2RlLnJlZjtcbiAgICB2Tm9kZS5kb20gPSBkb207XG4gICAgaWYgKCFpc051bGwoY2hpbGRyZW4pKSB7XG4gICAgICAgIGlmIChpc1N0cmluZ09yTnVtYmVyKGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgc2V0VGV4dENvbnRlbnQoZG9tLCBjaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIG1vdW50QXJyYXlDaGlsZHJlbihjaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1ZOb2RlKGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgbW91bnQoY2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGhhc0NvbnRyb2xsZWRWYWx1ZSA9IGZhbHNlO1xuICAgIGlmICghKGZsYWdzICYgMiAvKiBIdG1sRWxlbWVudCAqLykpIHtcbiAgICAgICAgaGFzQ29udHJvbGxlZFZhbHVlID0gcHJvY2Vzc0VsZW1lbnQoZmxhZ3MsIHZOb2RlLCBkb20pO1xuICAgIH1cbiAgICBpZiAoIWlzTnVsbChwcm9wcykpIHtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBwcm9wcykge1xuICAgICAgICAgICAgLy8gZG8gbm90IGFkZCBhIGhhc093blByb3BlcnR5IGNoZWNrIGhlcmUsIGl0IGFmZmVjdHMgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgIHBhdGNoUHJvcChwcm9wLCBudWxsLCBwcm9wc1twcm9wXSwgZG9tLCBpc1NWRywgaGFzQ29udHJvbGxlZFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWlzTnVsbChldmVudHMpKSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gZXZlbnRzKSB7XG4gICAgICAgICAgICAvLyBkbyBub3QgYWRkIGEgaGFzT3duUHJvcGVydHkgY2hlY2sgaGVyZSwgaXQgYWZmZWN0cyBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgcGF0Y2hFdmVudChuYW1lLCBudWxsLCBldmVudHNbbmFtZV0sIGRvbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFpc051bGwocmVmKSkge1xuICAgICAgICBtb3VudFJlZihkb20sIHJlZiwgbGlmZWN5Y2xlKTtcbiAgICB9XG4gICAgaWYgKCFpc051bGwocGFyZW50RG9tKSkge1xuICAgICAgICBhcHBlbmRDaGlsZChwYXJlbnREb20sIGRvbSk7XG4gICAgfVxuICAgIHJldHVybiBkb207XG59XG5mdW5jdGlvbiBtb3VudEFycmF5Q2hpbGRyZW4oY2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgIC8vIFRPRE86IFZlcmlmeSBjYW4gc3RyaW5nL251bWJlciBiZSBoZXJlLiBtaWdodCBjYXVzZSBkZS1vcHRcbiAgICAgICAgaWYgKCFpc0ludmFsaWQoY2hpbGQpKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQuZG9tKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5baV0gPSBjaGlsZCA9IGNsb25lVk5vZGUoY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbW91bnQoY2hpbGRyZW5baV0sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBtb3VudENvbXBvbmVudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc0NsYXNzKSB7XG4gICAgaWYgKG9wdGlvbnMucmVjeWNsaW5nRW5hYmxlZCkge1xuICAgICAgICB2YXIgZG9tJDEgPSByZWN5Y2xlQ29tcG9uZW50KHZOb2RlLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgaWYgKCFpc051bGwoZG9tJDEpKSB7XG4gICAgICAgICAgICBpZiAoIWlzTnVsbChwYXJlbnREb20pKSB7XG4gICAgICAgICAgICAgICAgYXBwZW5kQ2hpbGQocGFyZW50RG9tLCBkb20kMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZG9tJDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIHR5cGUgPSB2Tm9kZS50eXBlO1xuICAgIHZhciBwcm9wcyA9IHZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgdmFyIHJlZiA9IHZOb2RlLnJlZjtcbiAgICB2YXIgZG9tO1xuICAgIGlmICghaXNVbmRlZmluZWQoZGVmYXVsdFByb3BzKSkge1xuICAgICAgICBjb3B5UHJvcHNUbyhkZWZhdWx0UHJvcHMsIHByb3BzKTtcbiAgICAgICAgdk5vZGUucHJvcHMgPSBwcm9wcztcbiAgICB9XG4gICAgaWYgKGlzQ2xhc3MpIHtcbiAgICAgICAgdmFyIGluc3RhbmNlID0gY3JlYXRlQ2xhc3NDb21wb25lbnRJbnN0YW5jZSh2Tm9kZSwgdHlwZSwgcHJvcHMsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgLy8gSWYgaW5zdGFuY2UgZG9lcyBub3QgaGF2ZSBjb21wb25lbnRXaWxsVW5tb3VudCBzcGVjaWZpZWQgd2UgY2FuIGVuYWJsZSBmYXN0VW5tb3VudFxuICAgICAgICB2YXIgaW5wdXQgPSBpbnN0YW5jZS5fbGFzdElucHV0O1xuICAgICAgICB2YXIgcHJldkZhc3RVbm1vdW50ID0gbGlmZWN5Y2xlLmZhc3RVbm1vdW50O1xuICAgICAgICAvLyB3ZSBzdG9yZSB0aGUgZmFzdFVubW91bnQgdmFsdWUsIGJ1dCB3ZSBzZXQgaXQgYmFjayB0byB0cnVlIG9uIHRoZSBsaWZlY3ljbGVcbiAgICAgICAgLy8gd2UgZG8gdGhpcyBzbyB3ZSBjYW4gZGV0ZXJtaW5lIGlmIHRoZSBjb21wb25lbnQgcmVuZGVyIGhhcyBhIGZhc3RVbm1vdW50IG9yIG5vdFxuICAgICAgICBsaWZlY3ljbGUuZmFzdFVubW91bnQgPSB0cnVlO1xuICAgICAgICBpbnN0YW5jZS5fdk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgdk5vZGUuZG9tID0gZG9tID0gbW91bnQoaW5wdXQsIG51bGwsIGxpZmVjeWNsZSwgaW5zdGFuY2UuX2NoaWxkQ29udGV4dCwgaXNTVkcpO1xuICAgICAgICAvLyB3ZSBub3cgY3JlYXRlIGEgbGlmZWN5Y2xlIGZvciB0aGlzIGNvbXBvbmVudCBhbmQgc3RvcmUgdGhlIGZhc3RVbm1vdW50IHZhbHVlXG4gICAgICAgIHZhciBzdWJMaWZlY3ljbGUgPSBpbnN0YW5jZS5fbGlmZWN5Y2xlID0gbmV3IExpZmVjeWNsZSgpO1xuICAgICAgICAvLyBjaGlsZHJlbiBsaWZlY3ljbGUgY2FuIGZhc3RVbm1vdW50IGlmIGl0c2VsZiBkb2VzIG5lZWQgdW5tb3VudCBjYWxsYmFjayBhbmQgd2l0aGluIGl0cyBjeWNsZSB0aGVyZSB3YXMgbm9uZVxuICAgICAgICBzdWJMaWZlY3ljbGUuZmFzdFVubW91bnQgPSBpc1VuZGVmaW5lZChpbnN0YW5jZS5jb21wb25lbnRXaWxsVW5tb3VudCkgJiYgbGlmZWN5Y2xlLmZhc3RVbm1vdW50O1xuICAgICAgICAvLyBoaWdoZXIgbGlmZWN5Y2xlIGNhbiBmYXN0VW5tb3VudCBvbmx5IGlmIHByZXZpb3VzbHkgaXQgd2FzIGFibGUgdG8gYW5kIHRoaXMgY2hpbGRyZW4gZG9lc250IGhhdmUgYW55XG4gICAgICAgIGxpZmVjeWNsZS5mYXN0VW5tb3VudCA9IHByZXZGYXN0VW5tb3VudCAmJiBzdWJMaWZlY3ljbGUuZmFzdFVubW91bnQ7XG4gICAgICAgIGlmICghaXNOdWxsKHBhcmVudERvbSkpIHtcbiAgICAgICAgICAgIGFwcGVuZENoaWxkKHBhcmVudERvbSwgZG9tKTtcbiAgICAgICAgfVxuICAgICAgICBtb3VudENsYXNzQ29tcG9uZW50Q2FsbGJhY2tzKHZOb2RlLCByZWYsIGluc3RhbmNlLCBsaWZlY3ljbGUpO1xuICAgICAgICBvcHRpb25zLmZpbmRET01Ob2RlRW5hYmxlZCAmJiBjb21wb25lbnRUb0RPTU5vZGVNYXAuc2V0KGluc3RhbmNlLCBkb20pO1xuICAgICAgICB2Tm9kZS5jaGlsZHJlbiA9IGluc3RhbmNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGlucHV0JDEgPSBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50SW5wdXQodk5vZGUsIHR5cGUsIHByb3BzLCBjb250ZXh0KTtcbiAgICAgICAgdk5vZGUuZG9tID0gZG9tID0gbW91bnQoaW5wdXQkMSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIHZOb2RlLmNoaWxkcmVuID0gaW5wdXQkMTtcbiAgICAgICAgbW91bnRGdW5jdGlvbmFsQ29tcG9uZW50Q2FsbGJhY2tzKHJlZiwgZG9tLCBsaWZlY3ljbGUpO1xuICAgICAgICBpZiAoIWlzTnVsbChwYXJlbnREb20pKSB7XG4gICAgICAgICAgICBhcHBlbmRDaGlsZChwYXJlbnREb20sIGRvbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRvbTtcbn1cbmZ1bmN0aW9uIG1vdW50Q2xhc3NDb21wb25lbnRDYWxsYmFja3Modk5vZGUsIHJlZiwgaW5zdGFuY2UsIGxpZmVjeWNsZSkge1xuICAgIGlmIChyZWYpIHtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24ocmVmKSkge1xuICAgICAgICAgICAgcmVmKGluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nT3JOdW1iZXIocmVmKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKCdzdHJpbmcgXCJyZWZzXCIgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gSW5mZXJubyAxLjAuIFVzZSBjYWxsYmFjayBcInJlZnNcIiBpbnN0ZWFkLicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc09iamVjdChyZWYpICYmICh2Tm9kZS5mbGFncyAmIDQgLyogQ29tcG9uZW50Q2xhc3MgKi8pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93RXJyb3IoJ2Z1bmN0aW9uYWwgY29tcG9uZW50IGxpZmVjeWNsZSBldmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgb24gRVMyMDE1IGNsYXNzIGNvbXBvbmVudHMuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKChcImEgYmFkIHZhbHVlIGZvciBcXFwicmVmXFxcIiB3YXMgdXNlZCBvbiBjb21wb25lbnQ6IFxcXCJcIiArIChKU09OLnN0cmluZ2lmeShyZWYpKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBjRE0gPSBpbnN0YW5jZS5jb21wb25lbnREaWRNb3VudDtcbiAgICB2YXIgYWZ0ZXJNb3VudCA9IG9wdGlvbnMuYWZ0ZXJNb3VudDtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKGNETSkgfHwgIWlzTnVsbChhZnRlck1vdW50KSkge1xuICAgICAgICBsaWZlY3ljbGUuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYWZ0ZXJNb3VudCAmJiBhZnRlck1vdW50KHZOb2RlKTtcbiAgICAgICAgICAgIGNETSAmJiBpbnN0YW5jZS5jb21wb25lbnREaWRNb3VudCgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBtb3VudEZ1bmN0aW9uYWxDb21wb25lbnRDYWxsYmFja3MocmVmLCBkb20sIGxpZmVjeWNsZSkge1xuICAgIGlmIChyZWYpIHtcbiAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKHJlZi5vbkNvbXBvbmVudFdpbGxNb3VudCkpIHtcbiAgICAgICAgICAgIHJlZi5vbkNvbXBvbmVudFdpbGxNb3VudCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNOdWxsT3JVbmRlZihyZWYub25Db21wb25lbnREaWRNb3VudCkpIHtcbiAgICAgICAgICAgIGxpZmVjeWNsZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7IHJldHVybiByZWYub25Db21wb25lbnREaWRNb3VudChkb20pOyB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYocmVmLm9uQ29tcG9uZW50V2lsbFVubW91bnQpKSB7XG4gICAgICAgICAgICBsaWZlY3ljbGUuZmFzdFVubW91bnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIG1vdW50UmVmKGRvbSwgdmFsdWUsIGxpZmVjeWNsZSkge1xuICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgICBsaWZlY3ljbGUuZmFzdFVubW91bnQgPSBmYWxzZTtcbiAgICAgICAgbGlmZWN5Y2xlLmFkZExpc3RlbmVyKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZhbHVlKGRvbSk7IH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGlzSW52YWxpZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3dFcnJvcignc3RyaW5nIFwicmVmc1wiIGFyZSBub3Qgc3VwcG9ydGVkIGluIEluZmVybm8gMS4wLiBVc2UgY2FsbGJhY2sgXCJyZWZzXCIgaW5zdGVhZC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVDaGlsZE5vZGVzKHBhcmVudERvbSkge1xuICAgIHZhciBkb20gPSBwYXJlbnREb20uZmlyc3RDaGlsZDtcbiAgICB3aGlsZSAoZG9tKSB7XG4gICAgICAgIGlmIChkb20ubm9kZVR5cGUgPT09IDgpIHtcbiAgICAgICAgICAgIGlmIChkb20uZGF0YSA9PT0gJyEnKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgICAgICAgICAgICAgIHBhcmVudERvbS5yZXBsYWNlQ2hpbGQocGxhY2Vob2xkZXIsIGRvbSk7XG4gICAgICAgICAgICAgICAgZG9tID0gZG9tLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGxhc3REb20gPSBkb20ucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgICAgIHBhcmVudERvbS5yZW1vdmVDaGlsZChkb20pO1xuICAgICAgICAgICAgICAgIGRvbSA9IGxhc3REb20gfHwgcGFyZW50RG9tLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkb20gPSBkb20ubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBoeWRyYXRlQ29tcG9uZW50KHZOb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzQ2xhc3MpIHtcbiAgICB2YXIgdHlwZSA9IHZOb2RlLnR5cGU7XG4gICAgdmFyIHByb3BzID0gdk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIHZhciByZWYgPSB2Tm9kZS5yZWY7XG4gICAgdk5vZGUuZG9tID0gZG9tO1xuICAgIGlmIChpc0NsYXNzKSB7XG4gICAgICAgIHZhciBfaXNTVkcgPSBkb20ubmFtZXNwYWNlVVJJID09PSBzdmdOUztcbiAgICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGRlZmF1bHRQcm9wcykpIHtcbiAgICAgICAgICAgIGNvcHlQcm9wc1RvKGRlZmF1bHRQcm9wcywgcHJvcHMpO1xuICAgICAgICAgICAgdk5vZGUucHJvcHMgPSBwcm9wcztcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5zdGFuY2UgPSBjcmVhdGVDbGFzc0NvbXBvbmVudEluc3RhbmNlKHZOb2RlLCB0eXBlLCBwcm9wcywgY29udGV4dCwgX2lzU1ZHKTtcbiAgICAgICAgLy8gSWYgaW5zdGFuY2UgZG9lcyBub3QgaGF2ZSBjb21wb25lbnRXaWxsVW5tb3VudCBzcGVjaWZpZWQgd2UgY2FuIGVuYWJsZSBmYXN0VW5tb3VudFxuICAgICAgICB2YXIgcHJldkZhc3RVbm1vdW50ID0gbGlmZWN5Y2xlLmZhc3RVbm1vdW50O1xuICAgICAgICB2YXIgaW5wdXQgPSBpbnN0YW5jZS5fbGFzdElucHV0O1xuICAgICAgICAvLyB3ZSBzdG9yZSB0aGUgZmFzdFVubW91bnQgdmFsdWUsIGJ1dCB3ZSBzZXQgaXQgYmFjayB0byB0cnVlIG9uIHRoZSBsaWZlY3ljbGVcbiAgICAgICAgLy8gd2UgZG8gdGhpcyBzbyB3ZSBjYW4gZGV0ZXJtaW5lIGlmIHRoZSBjb21wb25lbnQgcmVuZGVyIGhhcyBhIGZhc3RVbm1vdW50IG9yIG5vdFxuICAgICAgICBsaWZlY3ljbGUuZmFzdFVubW91bnQgPSB0cnVlO1xuICAgICAgICBpbnN0YW5jZS5fdkNvbXBvbmVudCA9IHZOb2RlO1xuICAgICAgICBpbnN0YW5jZS5fdk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgaHlkcmF0ZShpbnB1dCwgZG9tLCBsaWZlY3ljbGUsIGluc3RhbmNlLl9jaGlsZENvbnRleHQsIF9pc1NWRyk7XG4gICAgICAgIC8vIHdlIG5vdyBjcmVhdGUgYSBsaWZlY3ljbGUgZm9yIHRoaXMgY29tcG9uZW50IGFuZCBzdG9yZSB0aGUgZmFzdFVubW91bnQgdmFsdWVcbiAgICAgICAgdmFyIHN1YkxpZmVjeWNsZSA9IGluc3RhbmNlLl9saWZlY3ljbGUgPSBuZXcgTGlmZWN5Y2xlKCk7XG4gICAgICAgIC8vIGNoaWxkcmVuIGxpZmVjeWNsZSBjYW4gZmFzdFVubW91bnQgaWYgaXRzZWxmIGRvZXMgbmVlZCB1bm1vdW50IGNhbGxiYWNrIGFuZCB3aXRoaW4gaXRzIGN5Y2xlIHRoZXJlIHdhcyBub25lXG4gICAgICAgIHN1YkxpZmVjeWNsZS5mYXN0VW5tb3VudCA9IGlzVW5kZWZpbmVkKGluc3RhbmNlLmNvbXBvbmVudFdpbGxVbm1vdW50KSAmJiBsaWZlY3ljbGUuZmFzdFVubW91bnQ7XG4gICAgICAgIC8vIGhpZ2hlciBsaWZlY3ljbGUgY2FuIGZhc3RVbm1vdW50IG9ubHkgaWYgcHJldmlvdXNseSBpdCB3YXMgYWJsZSB0byBhbmQgdGhpcyBjaGlsZHJlbiBkb2VzbnQgaGF2ZSBhbnlcbiAgICAgICAgbGlmZWN5Y2xlLmZhc3RVbm1vdW50ID0gcHJldkZhc3RVbm1vdW50ICYmIHN1YkxpZmVjeWNsZS5mYXN0VW5tb3VudDtcbiAgICAgICAgbW91bnRDbGFzc0NvbXBvbmVudENhbGxiYWNrcyh2Tm9kZSwgcmVmLCBpbnN0YW5jZSwgbGlmZWN5Y2xlKTtcbiAgICAgICAgb3B0aW9ucy5maW5kRE9NTm9kZUVuYWJsZWQgJiYgY29tcG9uZW50VG9ET01Ob2RlTWFwLnNldChpbnN0YW5jZSwgZG9tKTtcbiAgICAgICAgdk5vZGUuY2hpbGRyZW4gPSBpbnN0YW5jZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBpbnB1dCQxID0gY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudElucHV0KHZOb2RlLCB0eXBlLCBwcm9wcywgY29udGV4dCk7XG4gICAgICAgIGh5ZHJhdGUoaW5wdXQkMSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgdk5vZGUuY2hpbGRyZW4gPSBpbnB1dCQxO1xuICAgICAgICB2Tm9kZS5kb20gPSBpbnB1dCQxLmRvbTtcbiAgICAgICAgbW91bnRGdW5jdGlvbmFsQ29tcG9uZW50Q2FsbGJhY2tzKHJlZiwgZG9tLCBsaWZlY3ljbGUpO1xuICAgIH1cbiAgICByZXR1cm4gZG9tO1xufVxuZnVuY3Rpb24gaHlkcmF0ZUVsZW1lbnQodk5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIHZhciB0YWcgPSB2Tm9kZS50eXBlO1xuICAgIHZhciBjaGlsZHJlbiA9IHZOb2RlLmNoaWxkcmVuO1xuICAgIHZhciBwcm9wcyA9IHZOb2RlLnByb3BzO1xuICAgIHZhciBldmVudHMgPSB2Tm9kZS5ldmVudHM7XG4gICAgdmFyIGZsYWdzID0gdk5vZGUuZmxhZ3M7XG4gICAgdmFyIHJlZiA9IHZOb2RlLnJlZjtcbiAgICBpZiAoaXNTVkcgfHwgKGZsYWdzICYgMTI4IC8qIFN2Z0VsZW1lbnQgKi8pKSB7XG4gICAgICAgIGlzU1ZHID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGRvbS5ub2RlVHlwZSAhPT0gMSB8fCBkb20udGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSB0YWcpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHdhcm5pbmcoJ0luZmVybm8gaHlkcmF0aW9uOiBTZXJ2ZXItc2lkZSBtYXJrdXAgZG9lc25cXCd0IG1hdGNoIGNsaWVudC1zaWRlIG1hcmt1cCBvciBJbml0aWFsIHJlbmRlciB0YXJnZXQgaXMgbm90IGVtcHR5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5ld0RvbSA9IG1vdW50RWxlbWVudCh2Tm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIHZOb2RlLmRvbSA9IG5ld0RvbTtcbiAgICAgICAgcmVwbGFjZUNoaWxkKGRvbS5wYXJlbnROb2RlLCBuZXdEb20sIGRvbSk7XG4gICAgICAgIHJldHVybiBuZXdEb207XG4gICAgfVxuICAgIHZOb2RlLmRvbSA9IGRvbTtcbiAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgaHlkcmF0ZUNoaWxkcmVuKGNoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgIH1cbiAgICB2YXIgaGFzQ29udHJvbGxlZFZhbHVlID0gZmFsc2U7XG4gICAgaWYgKCEoZmxhZ3MgJiAyIC8qIEh0bWxFbGVtZW50ICovKSkge1xuICAgICAgICBoYXNDb250cm9sbGVkVmFsdWUgPSBwcm9jZXNzRWxlbWVudChmbGFncywgdk5vZGUsIGRvbSk7XG4gICAgfVxuICAgIGlmIChwcm9wcykge1xuICAgICAgICBmb3IgKHZhciBwcm9wIGluIHByb3BzKSB7XG4gICAgICAgICAgICBwYXRjaFByb3AocHJvcCwgbnVsbCwgcHJvcHNbcHJvcF0sIGRvbSwgaXNTVkcsIGhhc0NvbnRyb2xsZWRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGV2ZW50cykge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIGV2ZW50cykge1xuICAgICAgICAgICAgcGF0Y2hFdmVudChuYW1lLCBudWxsLCBldmVudHNbbmFtZV0sIGRvbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJlZikge1xuICAgICAgICBtb3VudFJlZihkb20sIHJlZiwgbGlmZWN5Y2xlKTtcbiAgICB9XG4gICAgcmV0dXJuIGRvbTtcbn1cbmZ1bmN0aW9uIGh5ZHJhdGVDaGlsZHJlbihjaGlsZHJlbiwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSB7XG4gICAgbm9ybWFsaXplQ2hpbGROb2RlcyhwYXJlbnREb20pO1xuICAgIHZhciBkb20gPSBwYXJlbnREb20uZmlyc3RDaGlsZDtcbiAgICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAoIWlzTnVsbChjaGlsZCkgJiYgaXNPYmplY3QoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvbSkge1xuICAgICAgICAgICAgICAgICAgICBkb20gPSBoeWRyYXRlKGNoaWxkLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICAgICAgICAgICAgICBkb20gPSBkb20ubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtb3VudChjaGlsZCwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNTdHJpbmdPck51bWJlcihjaGlsZHJlbikpIHtcbiAgICAgICAgaWYgKGRvbSAmJiBkb20ubm9kZVR5cGUgPT09IDMpIHtcbiAgICAgICAgICAgIGlmIChkb20ubm9kZVZhbHVlICE9PSBjaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGRvbS5ub2RlVmFsdWUgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgcGFyZW50RG9tLnRleHRDb250ZW50ID0gY2hpbGRyZW47XG4gICAgICAgIH1cbiAgICAgICAgZG9tID0gZG9tLm5leHRTaWJsaW5nO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc09iamVjdChjaGlsZHJlbikpIHtcbiAgICAgICAgaHlkcmF0ZShjaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgZG9tID0gZG9tLm5leHRTaWJsaW5nO1xuICAgIH1cbiAgICAvLyBjbGVhciBhbnkgb3RoZXIgRE9NIG5vZGVzLCB0aGVyZSBzaG91bGQgYmUgb25seSBhIHNpbmdsZSBlbnRyeSBmb3IgdGhlIHJvb3RcbiAgICB3aGlsZSAoZG9tKSB7XG4gICAgICAgIHZhciBuZXh0U2libGluZyA9IGRvbS5uZXh0U2libGluZztcbiAgICAgICAgcGFyZW50RG9tLnJlbW92ZUNoaWxkKGRvbSk7XG4gICAgICAgIGRvbSA9IG5leHRTaWJsaW5nO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGh5ZHJhdGVUZXh0KHZOb2RlLCBkb20pIHtcbiAgICBpZiAoZG9tLm5vZGVUeXBlICE9PSAzKSB7XG4gICAgICAgIHZhciBuZXdEb20gPSBtb3VudFRleHQodk5vZGUsIG51bGwpO1xuICAgICAgICB2Tm9kZS5kb20gPSBuZXdEb207XG4gICAgICAgIHJlcGxhY2VDaGlsZChkb20ucGFyZW50Tm9kZSwgbmV3RG9tLCBkb20pO1xuICAgICAgICByZXR1cm4gbmV3RG9tO1xuICAgIH1cbiAgICB2YXIgdGV4dCA9IHZOb2RlLmNoaWxkcmVuO1xuICAgIGlmIChkb20ubm9kZVZhbHVlICE9PSB0ZXh0KSB7XG4gICAgICAgIGRvbS5ub2RlVmFsdWUgPSB0ZXh0O1xuICAgIH1cbiAgICB2Tm9kZS5kb20gPSBkb207XG4gICAgcmV0dXJuIGRvbTtcbn1cbmZ1bmN0aW9uIGh5ZHJhdGVWb2lkKHZOb2RlLCBkb20pIHtcbiAgICB2Tm9kZS5kb20gPSBkb207XG4gICAgcmV0dXJuIGRvbTtcbn1cbmZ1bmN0aW9uIGh5ZHJhdGUodk5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIHZhciBmbGFncyA9IHZOb2RlLmZsYWdzO1xuICAgIGlmIChmbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICByZXR1cm4gaHlkcmF0ZUNvbXBvbmVudCh2Tm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBmbGFncyAmIDQgLyogQ29tcG9uZW50Q2xhc3MgKi8pO1xuICAgIH1cbiAgICBlbHNlIGlmIChmbGFncyAmIDM5NzAgLyogRWxlbWVudCAqLykge1xuICAgICAgICByZXR1cm4gaHlkcmF0ZUVsZW1lbnQodk5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWdzICYgMSAvKiBUZXh0ICovKSB7XG4gICAgICAgIHJldHVybiBoeWRyYXRlVGV4dCh2Tm9kZSwgZG9tKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxhZ3MgJiA0MDk2IC8qIFZvaWQgKi8pIHtcbiAgICAgICAgcmV0dXJuIGh5ZHJhdGVWb2lkKHZOb2RlLCBkb20pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3IoKFwiaHlkcmF0ZSgpIGV4cGVjdHMgYSB2YWxpZCBWTm9kZSwgaW5zdGVhZCBpdCByZWNlaXZlZCBhbiBvYmplY3Qgd2l0aCB0aGUgdHlwZSBcXFwiXCIgKyAodHlwZW9mIHZOb2RlKSArIFwiXFxcIi5cIikpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IoKTtcbiAgICB9XG59XG5mdW5jdGlvbiBoeWRyYXRlUm9vdChpbnB1dCwgcGFyZW50RG9tLCBsaWZlY3ljbGUpIHtcbiAgICB2YXIgZG9tID0gcGFyZW50RG9tICYmIHBhcmVudERvbS5maXJzdENoaWxkO1xuICAgIGlmIChkb20pIHtcbiAgICAgICAgaHlkcmF0ZShpbnB1dCwgZG9tLCBsaWZlY3ljbGUsIHt9LCBmYWxzZSk7XG4gICAgICAgIGRvbSA9IHBhcmVudERvbS5maXJzdENoaWxkO1xuICAgICAgICAvLyBjbGVhciBhbnkgb3RoZXIgRE9NIG5vZGVzLCB0aGVyZSBzaG91bGQgYmUgb25seSBhIHNpbmdsZSBlbnRyeSBmb3IgdGhlIHJvb3RcbiAgICAgICAgd2hpbGUgKGRvbSA9IGRvbS5uZXh0U2libGluZykge1xuICAgICAgICAgICAgcGFyZW50RG9tLnJlbW92ZUNoaWxkKGRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLy8gcmF0aGVyIHRoYW4gdXNlIGEgTWFwLCBsaWtlIHdlIGRpZCBiZWZvcmUsIHdlIGNhbiB1c2UgYW4gYXJyYXkgaGVyZVxuLy8gZ2l2ZW4gdGhlcmUgc2hvdWxkbid0IGJlIFRIQVQgbWFueSByb290cyBvbiB0aGUgcGFnZSwgdGhlIGRpZmZlcmVuY2Vcbi8vIGluIHBlcmZvcm1hbmNlIGlzIGh1Z2U6IGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNTgwMmE2OTEzMzBhYjA5OTAwYTFhMmRhXG52YXIgcm9vdHMgPSBbXTtcbnZhciBjb21wb25lbnRUb0RPTU5vZGVNYXAgPSBuZXcgTWFwKCk7XG5vcHRpb25zLnJvb3RzID0gcm9vdHM7XG5mdW5jdGlvbiBmaW5kRE9NTm9kZShyZWYpIHtcbiAgICBpZiAoIW9wdGlvbnMuZmluZERPTU5vZGVFbmFibGVkKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKCdmaW5kRE9NTm9kZSgpIGhhcyBiZWVuIGRpc2FibGVkLCB1c2UgSW5mZXJuby5vcHRpb25zLmZpbmRET01Ob2RlRW5hYmxlZCA9IHRydWU7IGVuYWJsZWQgZmluZERPTU5vZGUoKS4gV2FybmluZyB0aGlzIGNhbiBzaWduaWZpY2FudGx5IGltcGFjdCBwZXJmb3JtYW5jZSEnKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxuICAgIHZhciBkb20gPSByZWYgJiYgcmVmLm5vZGVUeXBlID8gcmVmIDogbnVsbDtcbiAgICByZXR1cm4gY29tcG9uZW50VG9ET01Ob2RlTWFwLmdldChyZWYpIHx8IGRvbTtcbn1cbmZ1bmN0aW9uIGdldFJvb3QoZG9tKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb290cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcm9vdCA9IHJvb3RzW2ldO1xuICAgICAgICBpZiAocm9vdC5kb20gPT09IGRvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBzZXRSb290KGRvbSwgaW5wdXQsIGxpZmVjeWNsZSkge1xuICAgIHZhciByb290ID0ge1xuICAgICAgICBkb206IGRvbSxcbiAgICAgICAgaW5wdXQ6IGlucHV0LFxuICAgICAgICBsaWZlY3ljbGU6IGxpZmVjeWNsZVxuICAgIH07XG4gICAgcm9vdHMucHVzaChyb290KTtcbiAgICByZXR1cm4gcm9vdDtcbn1cbmZ1bmN0aW9uIHJlbW92ZVJvb3Qocm9vdCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm9vdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHJvb3RzW2ldID09PSByb290KSB7XG4gICAgICAgICAgICByb290cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG59XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChpc0Jyb3dzZXIgJiYgZG9jdW1lbnQuYm9keSA9PT0gbnVsbCkge1xuICAgICAgICB3YXJuaW5nKCdJbmZlcm5vIHdhcm5pbmc6IHlvdSBjYW5ub3QgaW5pdGlhbGl6ZSBpbmZlcm5vIHdpdGhvdXQgXCJkb2N1bWVudC5ib2R5XCIuIFdhaXQgb24gXCJET01Db250ZW50TG9hZGVkXCIgZXZlbnQsIGFkZCBzY3JpcHQgdG8gYm90dG9tIG9mIGJvZHksIG9yIHVzZSBhc3luYy9kZWZlciBhdHRyaWJ1dGVzIG9uIHNjcmlwdCB0YWcuJyk7XG4gICAgfVxufVxudmFyIGRvY3VtZW50Qm9keSA9IGlzQnJvd3NlciA/IGRvY3VtZW50LmJvZHkgOiBudWxsO1xuZnVuY3Rpb24gcmVuZGVyKGlucHV0LCBwYXJlbnREb20pIHtcbiAgICBpZiAoZG9jdW1lbnRCb2R5ID09PSBwYXJlbnREb20pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3IoJ3lvdSBjYW5ub3QgcmVuZGVyKCkgdG8gdGhlIFwiZG9jdW1lbnQuYm9keVwiLiBVc2UgYW4gZW1wdHkgZWxlbWVudCBhcyBhIGNvbnRhaW5lciBpbnN0ZWFkLicpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IoKTtcbiAgICB9XG4gICAgaWYgKGlucHV0ID09PSBOT19PUCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciByb290ID0gZ2V0Um9vdChwYXJlbnREb20pO1xuICAgIGlmIChpc051bGwocm9vdCkpIHtcbiAgICAgICAgdmFyIGxpZmVjeWNsZSA9IG5ldyBMaWZlY3ljbGUoKTtcbiAgICAgICAgaWYgKCFpc0ludmFsaWQoaW5wdXQpKSB7XG4gICAgICAgICAgICBpZiAoaW5wdXQuZG9tKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBjbG9uZVZOb2RlKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaHlkcmF0ZVJvb3QoaW5wdXQsIHBhcmVudERvbSwgbGlmZWN5Y2xlKSkge1xuICAgICAgICAgICAgICAgIG1vdW50KGlucHV0LCBwYXJlbnREb20sIGxpZmVjeWNsZSwge30sIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJvb3QgPSBzZXRSb290KHBhcmVudERvbSwgaW5wdXQsIGxpZmVjeWNsZSk7XG4gICAgICAgICAgICBsaWZlY3ljbGUudHJpZ2dlcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgbGlmZWN5Y2xlJDEgPSByb290LmxpZmVjeWNsZTtcbiAgICAgICAgbGlmZWN5Y2xlJDEubGlzdGVuZXJzID0gW107XG4gICAgICAgIGlmIChpc051bGxPclVuZGVmKGlucHV0KSkge1xuICAgICAgICAgICAgdW5tb3VudChyb290LmlucHV0LCBwYXJlbnREb20sIGxpZmVjeWNsZSQxLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgcmVtb3ZlUm9vdChyb290KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpbnB1dC5kb20pIHtcbiAgICAgICAgICAgICAgICBpbnB1dCA9IGNsb25lVk5vZGUoaW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGF0Y2gocm9vdC5pbnB1dCwgaW5wdXQsIHBhcmVudERvbSwgbGlmZWN5Y2xlJDEsIHt9LCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGxpZmVjeWNsZSQxLnRyaWdnZXIoKTtcbiAgICAgICAgcm9vdC5pbnB1dCA9IGlucHV0O1xuICAgIH1cbiAgICBpZiAocm9vdCkge1xuICAgICAgICB2YXIgcm9vdElucHV0ID0gcm9vdC5pbnB1dDtcbiAgICAgICAgaWYgKHJvb3RJbnB1dCAmJiAocm9vdElucHV0LmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJvb3RJbnB1dC5jaGlsZHJlbjtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZVJlbmRlcmVyKF9wYXJlbnREb20pIHtcbiAgICB2YXIgcGFyZW50RG9tID0gX3BhcmVudERvbSB8fCBudWxsO1xuICAgIHJldHVybiBmdW5jdGlvbiByZW5kZXJlcihsYXN0SW5wdXQsIG5leHRJbnB1dCkge1xuICAgICAgICBpZiAoIXBhcmVudERvbSkge1xuICAgICAgICAgICAgcGFyZW50RG9tID0gbGFzdElucHV0O1xuICAgICAgICB9XG4gICAgICAgIHJlbmRlcihuZXh0SW5wdXQsIHBhcmVudERvbSk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbGlua0V2ZW50KGRhdGEsIGV2ZW50KSB7XG4gICAgcmV0dXJuIHsgZGF0YTogZGF0YSwgZXZlbnQ6IGV2ZW50IH07XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG5cdE9iamVjdC5mcmVlemUoRU1QVFlfT0JKKTtcblx0dmFyIHRlc3RGdW5jID0gZnVuY3Rpb24gdGVzdEZuKCkge307XG5cdGlmICgodGVzdEZ1bmMubmFtZSB8fCB0ZXN0RnVuYy50b1N0cmluZygpKS5pbmRleE9mKCd0ZXN0Rm4nKSA9PT0gLTEpIHtcblx0XHR3YXJuaW5nKCgnSXQgbG9va3MgbGlrZSB5b3VcXCdyZSB1c2luZyBhIG1pbmlmaWVkIGNvcHkgb2YgdGhlIGRldmVsb3BtZW50IGJ1aWxkICcgK1xuXHRcdFx0XHQnb2YgSW5mZXJuby4gV2hlbiBkZXBsb3lpbmcgSW5mZXJubyBhcHBzIHRvIHByb2R1Y3Rpb24sIG1ha2Ugc3VyZSB0byB1c2UgJyArXG5cdFx0XHRcdCd0aGUgcHJvZHVjdGlvbiBidWlsZCB3aGljaCBza2lwcyBkZXZlbG9wbWVudCB3YXJuaW5ncyBhbmQgaXMgZmFzdGVyLiAnICtcblx0XHRcdFx0J1NlZSBodHRwOi8vaW5mZXJub2pzLm9yZyBmb3IgbW9yZSBkZXRhaWxzLidcblx0XHQpKTtcblx0fVxufVxuXG4vLyBUaGlzIHdpbGwgYmUgcmVwbGFjZWQgYnkgcm9sbHVwXG52YXIgdmVyc2lvbiA9ICcxLjIuMic7XG5cbi8vIHdlIGR1cGxpY2F0ZSBpdCBzbyBpdCBwbGF5cyBuaWNlbHkgd2l0aCBkaWZmZXJlbnQgbW9kdWxlIGxvYWRpbmcgc3lzdGVtc1xudmFyIGluZGV4ID0ge1xuXHRsaW5rRXZlbnQ6IGxpbmtFdmVudCxcblx0Ly8gY29yZSBzaGFwZXNcblx0Y3JlYXRlVk5vZGU6IGNyZWF0ZVZOb2RlLFxuXG5cdC8vIGNsb25pbmdcblx0Y2xvbmVWTm9kZTogY2xvbmVWTm9kZSxcblxuXHQvLyB1c2VkIHRvIHNoYXJlZCBjb21tb24gaXRlbXMgYmV0d2VlbiBJbmZlcm5vIGxpYnNcblx0Tk9fT1A6IE5PX09QLFxuXHRFTVBUWV9PQko6IEVNUFRZX09CSixcblxuXHQvLyBET01cblx0cmVuZGVyOiByZW5kZXIsXG5cdGZpbmRET01Ob2RlOiBmaW5kRE9NTm9kZSxcblx0Y3JlYXRlUmVuZGVyZXI6IGNyZWF0ZVJlbmRlcmVyLFxuXHRvcHRpb25zOiBvcHRpb25zLFxuXHR2ZXJzaW9uOiB2ZXJzaW9uXG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBpbmRleDtcbmV4cG9ydHMubGlua0V2ZW50ID0gbGlua0V2ZW50O1xuZXhwb3J0cy5jcmVhdGVWTm9kZSA9IGNyZWF0ZVZOb2RlO1xuZXhwb3J0cy5jbG9uZVZOb2RlID0gY2xvbmVWTm9kZTtcbmV4cG9ydHMuTk9fT1AgPSBOT19PUDtcbmV4cG9ydHMuRU1QVFlfT0JKID0gRU1QVFlfT0JKO1xuZXhwb3J0cy5yZW5kZXIgPSByZW5kZXI7XG5leHBvcnRzLmZpbmRET01Ob2RlID0gZmluZERPTU5vZGU7XG5leHBvcnRzLmNyZWF0ZVJlbmRlcmVyID0gY3JlYXRlUmVuZGVyZXI7XG5leHBvcnRzLm9wdGlvbnMgPSBvcHRpb25zO1xuZXhwb3J0cy52ZXJzaW9uID0gdmVyc2lvbjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pbmZlcm5vL2Rpc3QvaW5mZXJuby5ub2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgSW5mZXJubyBmcm9tICdpbmZlcm5vJztcclxuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnaW5mZXJuby1jcmVhdGUtZWxlbWVudCc7XHJcbmltcG9ydCBMaXN0RGVtbyBmcm9tICcuL0xpc3REZW1vLmpzJztcclxuaW1wb3J0IEdyaWREZW1vIGZyb20gJy4vR3JpZERlbW8uanMnO1xyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhcHAnKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG5cclxuSW5mZXJuby5yZW5kZXIoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleEZsb3c6ICd3cmFwJyB9fT5cclxuICAgICAgICA8TGlzdERlbW8gLz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAzMCwgZmxleFNocmluazogMCB9fT48L2Rpdj5cclxuICAgICAgICA8R3JpZERlbW8gLz5cclxuICAgIDwvZGl2PixcclxuICAgIGNvbnRhaW5lclxyXG4pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXhhbXBsZXMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9