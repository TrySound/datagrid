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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25);
module.exports.default = module.exports;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);
module.exports.default = module.exports;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(26);
module.exports.default = module.exports;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inferno_component__);



/* harmony default export */ __webpack_exports__["a"] = (component) => class extends __WEBPACK_IMPORTED_MODULE_1_inferno_component___default.a {
    constructor(props) {
        super(props);
        this.state = {
            scrollTop: 0
        };
        this.ref = element => this.setState({
            scrollTop: element.scrollTop
        });
        this.onScroll = e => this.setState({
            scrollTop: e.target.scrollTop
        });
    }

    render(props, { scrollTop }) {
        return (
            __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()('div', {
                style: { width: props.viewportWidth, height: props.viewportHeight, overflow: 'auto' },
                ref: this.ref,
                onScroll: this.onScroll
            }, [
                __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(component, Object.assign({}, props, {
                    scrollTop
                }))
            ])
        );
    }
};


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const defaultBorder = '1px solid #d4d4d4';
/* harmony export (immutable) */ __webpack_exports__["b"] = defaultBorder;

const defaultActiveBorder = '1px solid #000';
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultActiveBorder;

const defaultHeaderBackground = 'linear-gradient(to top, #eeeeee, #ffffff)';
/* harmony export (immutable) */ __webpack_exports__["c"] = defaultHeaderBackground;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaults_js__ = __webpack_require__(4);



const getRowStyle = index => ({
    display: 'flex',
    height: 'inherit',
    background: index % 2 === 0 ? '#fff' : '#f3f3f3'
});

const getColumnStyle = (column, index) => ({
    display: 'flex',
    alignItems: 'center',
    width: column.computedWidth || column.width,
    padding: '0 8px',
    boxSizing: 'border-box',
    borderLeft: index === 0 ? __WEBPACK_IMPORTED_MODULE_1__defaults_js__["b" /* defaultBorder */] : '',
    borderRight: __WEBPACK_IMPORTED_MODULE_1__defaults_js__["b" /* defaultBorder */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__decorators_index_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listUtils_js__ = __webpack_require__(22);




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

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__decorators_index_js__["a" /* compose */])(
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__decorators_index_js__["b" /* withMiddleState */])((props, state = {}) => {
        const [start, end] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__listUtils_js__["a" /* getVisibleRows */])({
            scrollTop: props.scrollTop,
            viewportHeight: props.viewportHeight,
            rowHeight: props.rowHeight,
            rowsCount: props.data.length
        });
        return {
            start,
            end,
            keys: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__listUtils_js__["b" /* getKeysByIndex */])(state.keys, start, end)
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inferno_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__decorators_withScrollTopProp_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PinnableGrid_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DefaultHeaderColumn_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__defaults_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reducer_js__ = __webpack_require__(23);








const TrackedGrid = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__decorators_withScrollTopProp_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__PinnableGrid_js__["a" /* default */]);

class Viewport extends __WEBPACK_IMPORTED_MODULE_1_inferno_component___default.a {
    constructor() {
        super();

        this.state = {
            columns: [
                {
                    name: 'col1',
                    width: 100,
                    enableFiltering: true,
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
            ],
            data: Array(500000).fill(0).map((item, i) => ({
                col11: `Pinned left ${i}`,
                col1: i,
                col2: `Title ${i}`,
                col21: `Pinned right ${i}`,
                col3: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            }))
        };

        this.callback = this.callback.bind(this);
    }

    callback(action) {
        console.log(action);
        this.setState(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__reducer_js__["a" /* default */])(this.state, action));
    }

    render({}, { columns, data }) {
        return (
            __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', null, 
                __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'h2', null, "Grid example" ), 
                __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( TrackedGrid, {
                    viewportWidth: 600, viewportHeight: 360, columns: columns, data: data, rowHeight: 30, headerColumnComponent: __WEBPACK_IMPORTED_MODULE_4__DefaultHeaderColumn_js__["a" /* default */], rowComponent: undefined, callback: this.callback })
            )
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Viewport;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__decorators_withScrollTopProp_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__List_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DefaultRow_js__ = __webpack_require__(5);





const TrackedList = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__decorators_withScrollTopProp_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__List_js__["a" /* default */]);

const columns = [
    {
        name: 'col1',
        width: 100
    },
    {
        name: 'col2',
        computedWidth: 150
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaults_js__ = __webpack_require__(4);



const getBorderLeft = (column, index, ghost) =>
    index === 0 || ghost ? (column.moveLeft ? __WEBPACK_IMPORTED_MODULE_1__defaults_js__["a" /* defaultActiveBorder */] : __WEBPACK_IMPORTED_MODULE_1__defaults_js__["b" /* defaultBorder */]) : '';

const getBorderRight = column =>
    column.moveRight ? __WEBPACK_IMPORTED_MODULE_1__defaults_js__["a" /* defaultActiveBorder */] : __WEBPACK_IMPORTED_MODULE_1__defaults_js__["b" /* defaultBorder */];

const getOpacity = ghost => ghost ? .8 : 1;

const getStyle = (column, index, ghost) => ({
    height: 30,
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    padding: '0 8px',
    overflow: 'hidden',
    borderTop: __WEBPACK_IMPORTED_MODULE_1__defaults_js__["b" /* defaultBorder */],
    borderBottom: __WEBPACK_IMPORTED_MODULE_1__defaults_js__["b" /* defaultBorder */],
    borderLeft: getBorderLeft(column, index, ghost),
    borderRight: getBorderRight(column, index, ghost),
    background: __WEBPACK_IMPORTED_MODULE_1__defaults_js__["c" /* defaultHeaderBackground */],
    opacity: getOpacity(ghost)
});

/* harmony default export */ __webpack_exports__["a"] = ({ column, index, ghost }) => (
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: getStyle(column, index, ghost) }, 
        column.displayName || column.name
    )
);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(2);
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inferno_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ResizeGhost_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__List_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DefaultRow_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actionCreators_js__ = __webpack_require__(16);








const Grid = ({ dragging, width, children }) => (
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: {
        position: 'relative',
        pointerEvents: dragging ? 'none' : '',
        userSelect: dragging ? 'none' : '',
        width
    } }, 
        children
    )
);

const createRowComponent = ({ columns, component: Row = __WEBPACK_IMPORTED_MODULE_5__DefaultRow_js__["a" /* default */] }) => ({ datum, index }) => (
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( Row, { columns: columns, datum: datum, index: index })
);


class GridWrapper extends __WEBPACK_IMPORTED_MODULE_1_inferno_component___default.a {
    constructor(props) {
        super(props);
        this.state = {
            headerHeight: 0,
            rowComponent: createRowComponent({
                columns: props.columns,
                component: props.rowComponent
            }),
            dragging: false,
            ghost: false,
            ghostX: 0,
            width: 0
        };
        this.refHeader = this.refHeader.bind(this);
        this.onResizing = this.onResizing.bind(this);
        this.onResize = this.onResize.bind(this);
        this.onMoving = this.onMoving.bind(this);
        this.onMove = this.onMove.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        let rowComponent = this.state.rowComponent;
        if (this.props.rowComponent !== nextProps.rowComponent || this.props.columns !== nextProps.columns) {
            rowComponent = createRowComponent({
                columns: nextProps.columns,
                component: nextProps.rowComponent
            });
        }
        this.setState({
            rowComponent,
            width: nextProps.columns.reduce((acc, item) => acc + item.width, 0)
        });
    }

    refHeader(element) {
        this.setState({
            headerHeight: element.offsetHeight
        });
    }

    onResizing(name, ghostPosition) {
        this.setState({
            dragging: true,
            ghost: true,
            ghostX: ghostPosition
        });
        this.props.callback(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__actionCreators_js__["a" /* moveResizeGhost */])(name, ghostPosition));
    }

    onResize(name, columnWidth) {
        this.setState({
            dragging: false,
            ghost: false
        });
        this.props.callback(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__actionCreators_js__["b" /* resizeColumn */])(name, columnWidth));
    }

    onMoving(name, left, right) {
        this.setState({
            dragging: true
        });
        this.props.callback(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__actionCreators_js__["c" /* markMoveDest */])(name, left, right));
    }

    onMove(name, left, right) {
        this.setState({
            dragging: false
        });
        this.props.callback(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__actionCreators_js__["d" /* moveColumn */])(name, left, right));
    }

    render(props, { dragging, ghost, ghostX, width, rowComponent, headerHeight }) {
        return (
            __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( Grid, { dragging: dragging, width: width }, 
                __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: { position: 'sticky', zIndex: 1, top: 0, height: headerHeight }, ref: this.refHeader }, 
                    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( __WEBPACK_IMPORTED_MODULE_2__Header_js__["a" /* default */], {
                        columns: props.columns, component: props.headerColumnComponent, onMove: this.onMove, onMoving: this.onMoving, onResize: this.onResize, onResizing: this.onResizing })
                ), 
                __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( __WEBPACK_IMPORTED_MODULE_4__List_js__["a" /* default */], {
                    data: props.data, scrollTop: props.scrollTop - headerHeight, viewportHeight: props.viewportHeight - headerHeight, rowHeight: props.rowHeight, component: rowComponent }), 
                ghost && __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( __WEBPACK_IMPORTED_MODULE_3__ResizeGhost_js__["a" /* default */], { x: ghostX })
            )
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GridWrapper;



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inferno_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Draggable_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__columnsUtils_js__ = __webpack_require__(17);





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

const ColumnWrapper = ({ column, index, ghost, component: Column }) => (
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: { width: column.width } }, 
        __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( Column, { column: column, index: index, ghost: ghost })
    )
);

const Header = ({ children }) => (
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: { display: 'flex', position: 'relative' } }, 
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
            this.props.onResizing(name, this.currentLeft + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__columnsUtils_js__["a" /* trimColumnWidth */])(this.currentColumn, position));
        } else {
            const [leftIndex, rightIndex] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__columnsUtils_js__["b" /* bisectColumns */])(this.props.columns, this.startMovingPosition + position);
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
            this.props.onResize(name, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__columnsUtils_js__["a" /* trimColumnWidth */])(this.currentColumn, position));
        } else {
            const [leftIndex, rightIndex] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__columnsUtils_js__["b" /* bisectColumns */])(this.props.columns, this.startMovingPosition + position);
            const leftName = leftIndex === -1 ? null : this.props.columns[leftIndex].name;
            const rightName = rightIndex === -1 ? null : this.props.columns[rightIndex].name;
            this.props.onMove(name, leftName, rightName);
        }
        this.setState({
            moving: false
        });
    }

    render({ columns, component }, { moving, position }) {
        return (
            __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( Header, null, 
                columns.map((column, index) =>
                    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( DraggableColumn, {
                        key: column.name, column: column, onStart: this.onStart, onDrag: this.onDrag, onEnd: this.onEnd }, 
                        __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( ColumnWrapper, {
                            column: column, index: index, ghost: false, component: component })
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inferno_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Grid_js__ = __webpack_require__(12);




const splitColumns = columns => ({
    leftColumns: columns.filter(column => column.pinnedLeft),
    centerColumns: columns.filter(column => !column.pinnedLeft && !column.pinnedRight),
    rightColumns: columns.filter(column => column.pinnedRight)
});

class PinnableGrid extends __WEBPACK_IMPORTED_MODULE_1_inferno_component___default.a {
    constructor(props) {
        super(props);
        this.state = splitColumns(props.columns);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.columns !== nextProps.columns) {
            this.setState(splitColumns(nextProps.columns));
        }
    }

    render(props, { leftColumns, centerColumns, rightColumns }) {
        return (
            __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: { display: 'flex' } }, 
                __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: { position: 'sticky', zIndex: 2, left: 0 } }, 
                    leftColumns.length !== 0 && __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(__WEBPACK_IMPORTED_MODULE_2__Grid_js__["a" /* default */], Object.assign({}, props, {
                        columns: leftColumns
                    }))
                ), 
                __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', null, 
                    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(__WEBPACK_IMPORTED_MODULE_2__Grid_js__["a" /* default */], Object.assign({}, props, {
                        columns: centerColumns
                    }))
                ), 
                __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: { position: 'sticky', zIndex: 2, right: 0 } }, 
                    rightColumns.length !== 0 && __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(__WEBPACK_IMPORTED_MODULE_2__Grid_js__["a" /* default */], Object.assign({}, props, {
                        columns: rightColumns
                    }))
                )
            )
        );
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PinnableGrid;



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);


const ResizeGhost = ({ x }) => (
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: {
        position: 'absolute',
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const markMoveDest = (name, left, right) => ({
    type: 'MARK_MOVE_DEST',
    name,
    left,
    right
});
/* harmony export (immutable) */ __webpack_exports__["c"] = markMoveDest;


const moveColumn = (name, left, right) => ({
    type: 'MOVE_COLUMN',
    name,
    left,
    right
});
/* harmony export (immutable) */ __webpack_exports__["d"] = moveColumn;


const moveResizeGhost = (name, position) => ({
    type: 'MOVE_RESIZE_GHOST',
    name,
    position
});
/* harmony export (immutable) */ __webpack_exports__["a"] = moveResizeGhost;


const resizeColumn = (name, size) => ({
    type: 'RESIZE_COLUMN',
    name,
    size
});
/* harmony export (immutable) */ __webpack_exports__["b"] = resizeColumn;



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const defaultMinWidth = 60;

const trimColumnWidth = (column, width) =>
    Math.min(Math.max(column.minWidth || defaultMinWidth, width), column.maxWidth || Infinity);
/* harmony export (immutable) */ __webpack_exports__["a"] = trimColumnWidth;


const getColumnWidth = column =>
    column.width || column.minWidth || defaultMinWidth;
/* unused harmony export getColumnWidth */


const bisectColumns = (columns, position) => {
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
/* harmony export (immutable) */ __webpack_exports__["b"] = bisectColumns;



/***/ }),
/* 18 */
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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose_js__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__compose_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__withMiddleState_js__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__withMiddleState_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__withProps_js__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__withProps_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__withScrollTopProp_js__ = __webpack_require__(3);
/* unused harmony reexport withScrollTopProp */






/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inferno_component__);



/* harmony default export */ __webpack_exports__["a"] = reducer => component => class extends __WEBPACK_IMPORTED_MODULE_1_inferno_component___default.a {
    constructor(props) {
        super(props);
        this.state = reducer(props);
    }

    componentWillReceiveProps(nextProps) {
        this.setState(reducer(nextProps, this.state));
    }

    render(props, state) {
        return __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(component, Object.assign({}, props, state));
    }
};


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);


/* harmony default export */ __webpack_exports__["a"] = config => component => props => __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()(component, Object.assign({}, props, config));


/***/ }),
/* 22 */
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

const getKeysByIndex = (lastKeys = empty(), start, end) => {
    const recovered = getRecoveredKeys(lastKeys, start, end);
    const generated = generateKeys(recovered, start, end);
    return Object.assign(empty(), recovered, generated);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = getKeysByIndex;


const getVisibleRows = ({ scrollTop, viewportHeight, rowHeight, rowsCount }) => {
    const clusterSize = Math.ceil(viewportHeight / rowHeight);
    const topCluster = Math.floor(Math.floor(scrollTop / rowHeight) / clusterSize);
    const end = Math.min(rowsCount, (topCluster + 2) * clusterSize);
    // count of visible rows is always the same then focus never be lost
    const start = Math.max(0, end - clusterSize * 2);
    return [start, end];
};
/* harmony export (immutable) */ __webpack_exports__["a"] = getVisibleRows;



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (state, action) => {
    switch (action.type) {
        case 'MARK_MOVE_DEST':
            return {
                columns: state.columns.map(item => {
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
                })
            };

        case 'MOVE_COLUMN':
            const columns = state.columns.map(item => {
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
                return {
                    columns: [
                        ...columns.slice(0, index).filter(item => item.name !== action.name),
                        ...columns.filter(item => item.name === action.name),
                        ...columns.slice(index).filter(item => item.name !== action.name)
                    ]
                };
            }
            return {
                columns
            };

        case 'RESIZE_COLUMN':
            return {
                columns: state.columns.map(item => {
                    if (item.name === action.name) {
                        return Object.assign({}, item, {
                            width: action.size
                        });
                    }
                    return item;
                })
            };

        default:
            return state;
    }
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/*!
 * inferno-component v1.2.2
 * (c) 2017 Dominic Gannaway
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory(__webpack_require__(2)) :
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * inferno-create-element v1.2.2
 * (c) 2017 Dominic Gannaway
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory(__webpack_require__(2)) :
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
/* 26 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__examples_ListDemo_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__examples_GridDemo_js__ = __webpack_require__(8);





const container = document.createElement('div');
container.classList.add('app');
document.body.appendChild(container);

__WEBPACK_IMPORTED_MODULE_0_inferno___default.a.render(
    __WEBPACK_IMPORTED_MODULE_1_inferno_create_element___default()( 'div', { style: { display: 'flex', flexFlow: 'wrap' } }, 
        __WEBPACK_IMPORTED_MODULE_1_inferno_create_element___default()( __WEBPACK_IMPORTED_MODULE_2__examples_ListDemo_js__["a" /* default */], null ), 
        __WEBPACK_IMPORTED_MODULE_1_inferno_create_element___default()( 'div', { style: { width: 30, flexShrink: 0 } }), 
        __WEBPACK_IMPORTED_MODULE_1_inferno_create_element___default()( __WEBPACK_IMPORTED_MODULE_3__examples_GridDemo_js__["a" /* default */], null )
    ),
    container
);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWQ2MzJkOTY3OWJjMWZmYmY5MTgiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vLWNyZWF0ZS1lbGVtZW50L2luZmVybm8tY3JlYXRlLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vLWNvbXBvbmVudC9pbmZlcm5vLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vaW5mZXJuby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVjb3JhdG9ycy93aXRoU2Nyb2xsVG9wUHJvcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RlZmF1bHRSb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGVzL0dyaWREZW1vLmpzIiwid2VicGFjazovLy8uL3NyYy9leGFtcGxlcy9MaXN0RGVtby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVmYXVsdEhlYWRlckNvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRHJhZ2dhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9HcmlkLmpzIiwid2VicGFjazovLy8uL3NyYy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Bpbm5hYmxlR3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzaXplR2hvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbkNyZWF0b3JzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb2x1bW5zVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlY29yYXRvcnMvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVjb3JhdG9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVjb3JhdG9ycy93aXRoTWlkZGxlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlY29yYXRvcnMvd2l0aFByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy9saXN0VXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QvaW5mZXJuby1jb21wb25lbnQubm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC9pbmZlcm5vLWNyZWF0ZS1lbGVtZW50Lm5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QvaW5mZXJuby5ub2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQTtBQUNBLHdDOzs7Ozs7QUNEQTtBQUNBLHdDOzs7Ozs7QUNEQTtBQUNBLHdDOzs7Ozs7Ozs7OztBQ0RtRDtBQUNUOztBQUUxQyx3REFBZSxDQUFDLFNBQVMsS0FBSyxjQUFjLHlEQUFTLENBQUM7SUFDbEQsV0FBVyxDQUFDLEtBQUssRUFBRTtRQUNmLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxTQUFTLEVBQUUsQ0FBQztTQUNmLENBQUM7UUFDRixJQUFJLENBQUMsR0FBRyxHQUFH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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuTGE7QUFDVDtBQUN5QjtBQUNyQjtBQUNj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O0FBQ3RCO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7Ozs7QUNuVEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxDQUFDLDRCQUE0Qjs7QUFFN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHlCQUF5QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxDQUFDOzs7Ozs7O0FDekpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQsQ0FBQyw0QkFBNEI7O0FBRTdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsc0JBQXNCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsa0JBQWtCLEVBQUU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLDBCQUEwQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0QywwQkFBMEIsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDJCQUEyQjtBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixxQkFBcUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsa0JBQWtCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHdCQUF3QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHdCQUF3QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixhQUFhO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixXQUFXO0FBQ3ZDO0FBQ0E7QUFDQSxvQ0FBb0MsV0FBVztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFdBQVc7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFdBQVc7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFFBQVE7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsUUFBUTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxxQ0FBcUMsRUFBRTtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbUJBQW1CLEVBQUU7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUdBQXVHO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhDQUE4QyxjQUFjOztBQUU1RCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdGlGNkI7QUFDcUI7QUFDTDtBQUNBOztBQUU5QyxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hELFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9CLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztBQUVyQywrQ0FBTyxDQUFDLE1BQU07SUFDVixnRUFBQyxJQUFHLEtBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFHLEVBQUM7UUFDL0MsZ0VBQUMsc0VBQVEsUUFBRztRQUNaLGdFQUFDLElBQUcsS0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUcsRUFBQyxDQUFNO1FBQ2hELGdFQUFDLHNFQUFRLFFBQUc7SUFDaEIsQ0FBTTtJQUNOLFNBQVM7Q0FDWixDQUFDIiwiZmlsZSI6ImluZmVybm8tZGF0YWdyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMWQ2MzJkOTY3OWJjMWZmYmY5MTgiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ2luZmVybm8vZGlzdC9pbmZlcm5vLWNyZWF0ZS1lbGVtZW50Lm5vZGUnKTtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBtb2R1bGUuZXhwb3J0cztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5mZXJuby1jcmVhdGUtZWxlbWVudC9pbmZlcm5vLWNyZWF0ZS1lbGVtZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnaW5mZXJuby9kaXN0L2luZmVybm8tY29tcG9uZW50Lm5vZGUnKTtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBtb2R1bGUuZXhwb3J0cztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5mZXJuby1jb21wb25lbnQvaW5mZXJuby1jb21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvaW5mZXJuby5ub2RlJyk7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gbW9kdWxlLmV4cG9ydHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2luZmVybm8vaW5mZXJuby5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICdpbmZlcm5vLWNyZWF0ZS1lbGVtZW50JztcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tICdpbmZlcm5vLWNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoY29tcG9uZW50KSA9PiBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucmVmID0gZWxlbWVudCA9PiB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiBlbGVtZW50LnNjcm9sbFRvcFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMub25TY3JvbGwgPSBlID0+IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6IGUudGFyZ2V0LnNjcm9sbFRvcFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihwcm9wcywgeyBzY3JvbGxUb3AgfSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBwcm9wcy52aWV3cG9ydFdpZHRoLCBoZWlnaHQ6IHByb3BzLnZpZXdwb3J0SGVpZ2h0LCBvdmVyZmxvdzogJ2F1dG8nIH0sXHJcbiAgICAgICAgICAgICAgICByZWY6IHRoaXMucmVmLFxyXG4gICAgICAgICAgICAgICAgb25TY3JvbGw6IHRoaXMub25TY3JvbGxcclxuICAgICAgICAgICAgfSwgW1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudChjb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wXHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgXSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGVjb3JhdG9ycy93aXRoU2Nyb2xsVG9wUHJvcC5qcyIsImV4cG9ydCBjb25zdCBkZWZhdWx0Qm9yZGVyID0gJzFweCBzb2xpZCAjZDRkNGQ0JztcclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRBY3RpdmVCb3JkZXIgPSAnMXB4IHNvbGlkICMwMDAnO1xyXG5leHBvcnQgY29uc3QgZGVmYXVsdEhlYWRlckJhY2tncm91bmQgPSAnbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2VlZWVlZSwgI2ZmZmZmZiknO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGVmYXVsdHMuanMiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICdpbmZlcm5vLWNyZWF0ZS1lbGVtZW50JztcclxuaW1wb3J0IHsgZGVmYXVsdEJvcmRlciB9IGZyb20gJy4vZGVmYXVsdHMuanMnO1xyXG5cclxuY29uc3QgZ2V0Um93U3R5bGUgPSBpbmRleCA9PiAoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgaGVpZ2h0OiAnaW5oZXJpdCcsXHJcbiAgICBiYWNrZ3JvdW5kOiBpbmRleCAlIDIgPT09IDAgPyAnI2ZmZicgOiAnI2YzZjNmMydcclxufSk7XHJcblxyXG5jb25zdCBnZXRDb2x1bW5TdHlsZSA9IChjb2x1bW4sIGluZGV4KSA9PiAoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICB3aWR0aDogY29sdW1uLmNvbXB1dGVkV2lkdGggfHwgY29sdW1uLndpZHRoLFxyXG4gICAgcGFkZGluZzogJzAgOHB4JyxcclxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgYm9yZGVyTGVmdDogaW5kZXggPT09IDAgPyBkZWZhdWx0Qm9yZGVyIDogJycsXHJcbiAgICBib3JkZXJSaWdodDogZGVmYXVsdEJvcmRlclxyXG59KTtcclxuXHJcbmNvbnN0IERlZmF1bHRSb3cgPSAoeyBjb2x1bW5zLCBkYXR1bSwgaW5kZXggfSkgPT4gKFxyXG4gICAgPGRpdiBzdHlsZT17Z2V0Um93U3R5bGUoaW5kZXgpfT5cclxuICAgICAgICB7Y29sdW1ucy5tYXAoKGl0ZW0sIGNvbHVtbkluZGV4KSA9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtnZXRDb2x1bW5TdHlsZShpdGVtLCBjb2x1bW5JbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBvdmVyZmxvdzogJ2hpZGRlbicsIHdoaXRlU3BhY2U6ICdub3dyYXAnLCB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdHVtW2l0ZW0ubmFtZV19XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdFJvdztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0RlZmF1bHRSb3cuanMiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICdpbmZlcm5vLWNyZWF0ZS1lbGVtZW50JztcclxuaW1wb3J0IHsgY29tcG9zZSwgd2l0aE1pZGRsZVN0YXRlLCB3aXRoUHJvcHMgfSBmcm9tICcuL2RlY29yYXRvcnMvaW5kZXguanMnO1xyXG5pbXBvcnQgeyBnZXRWaXNpYmxlUm93cywgZ2V0S2V5c0J5SW5kZXggfSBmcm9tICcuL2xpc3RVdGlscy5qcyc7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSAoeyBoZWlnaHQsIHJlbmRlcmVkVG9wLCBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBoZWlnaHQgfX0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogMCwgcmlnaHQ6IDAsIHRvcDogcmVuZGVyZWRUb3AgfX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3QgUm93V3JhcHBlciA9ICh7IGhlaWdodCwgZGF0dW0sIGluZGV4LCBjb21wb25lbnQ6IFJvdyB9KSA9PiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodCB9fT5cclxuICAgICAgICA8Um93IGRhdHVtPXtkYXR1bX0gaW5kZXg9e2luZGV4fSAvPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBzaG91bGRSb3dVcGRhdGUgPSAocHJvcHMsIG5leHRQcm9wcykgPT4gKFxyXG4gICAgcHJvcHMuaGVpZ2h0ICE9PSBuZXh0UHJvcHMuaGVpZ2h0IHx8XHJcbiAgICBwcm9wcy5jb21wb25lbnQgIT09IG5leHRQcm9wcy5jb21wb25lbnQgfHxcclxuICAgIHByb3BzLmRhdHVtICE9PSBuZXh0UHJvcHMuZGF0dW1cclxuKTtcclxuXHJcbmNvbnN0IExpc3QgPSAoeyBkYXRhLCByb3dIZWlnaHQsIGNvbXBvbmVudCwgc3RhcnQsIGVuZCwga2V5cyB9KSA9PiAoXHJcbiAgICA8Q29udGFpbmVyIGhlaWdodD17ZGF0YS5sZW5ndGggKiByb3dIZWlnaHR9IHJlbmRlcmVkVG9wPXtzdGFydCAqIHJvd0hlaWdodH0+XHJcbiAgICAgICAge2RhdGEuc2xpY2Uoc3RhcnQsIGVuZCkubWFwKChkYXR1bSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgIDxSb3dXcmFwcGVyXHJcbiAgICAgICAgICAgICAgICBvbkNvbXBvbmVudFNob3VsZFVwZGF0ZT17c2hvdWxkUm93VXBkYXRlfVxyXG4gICAgICAgICAgICAgICAga2V5PXtrZXlzW3N0YXJ0ICsgaW5kZXhdfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtyb3dIZWlnaHR9XHJcbiAgICAgICAgICAgICAgICBpbmRleD17c3RhcnQgKyBpbmRleH1cclxuICAgICAgICAgICAgICAgIGRhdHVtPXtkYXR1bX1cclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Y29tcG9uZW50fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXHJcbiAgICB3aXRoTWlkZGxlU3RhdGUoKHByb3BzLCBzdGF0ZSA9IHt9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgW3N0YXJ0LCBlbmRdID0gZ2V0VmlzaWJsZVJvd3Moe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6IHByb3BzLnNjcm9sbFRvcCxcclxuICAgICAgICAgICAgdmlld3BvcnRIZWlnaHQ6IHByb3BzLnZpZXdwb3J0SGVpZ2h0LFxyXG4gICAgICAgICAgICByb3dIZWlnaHQ6IHByb3BzLnJvd0hlaWdodCxcclxuICAgICAgICAgICAgcm93c0NvdW50OiBwcm9wcy5kYXRhLmxlbmd0aFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0YXJ0LFxyXG4gICAgICAgICAgICBlbmQsXHJcbiAgICAgICAgICAgIGtleXM6IGdldEtleXNCeUluZGV4KHN0YXRlLmtleXMsIHN0YXJ0LCBlbmQpXHJcbiAgICAgICAgfTtcclxuICAgIH0pLFxyXG4gICAgd2l0aFByb3BzKHtcclxuICAgICAgICBvbkNvbXBvbmVudFNob3VsZFVwZGF0ZTogKHByb3BzLCBuZXh0UHJvcHMpID0+IChcclxuICAgICAgICAgICAgcHJvcHMuc3RhcnQgIT09IG5leHRQcm9wcy5zdGFydCB8fFxyXG4gICAgICAgICAgICBwcm9wcy5lbmQgIT09IG5leHRQcm9wcy5lbmQgfHxcclxuICAgICAgICAgICAgcHJvcHMuZGF0YSAhPT0gbmV4dFByb3BzLmRhdGEgfHxcclxuICAgICAgICAgICAgcHJvcHMucm93SGVpZ2h0ICE9PSBuZXh0UHJvcHMucm93SGVpZ2h0IHx8XHJcbiAgICAgICAgICAgIHByb3BzLmNvbXBvbmVudCAhPT0gbmV4dFByb3BzLmNvbXBvbmVudFxyXG4gICAgICAgIClcclxuICAgIH0pXHJcbikoTGlzdCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MaXN0LmpzIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnaW5mZXJuby1jcmVhdGUtZWxlbWVudCc7XHJcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnaW5mZXJuby1jb21wb25lbnQnO1xyXG5pbXBvcnQgd2l0aFNjcm9sbFRvcFByb3AgZnJvbSAnLi4vZGVjb3JhdG9ycy93aXRoU2Nyb2xsVG9wUHJvcC5qcyc7XHJcbmltcG9ydCBQaW5uYWJsZUdyaWQgZnJvbSAnLi4vUGlubmFibGVHcmlkLmpzJztcclxuaW1wb3J0IERlZmF1bHRIZWFkZXJDb2x1bW4gZnJvbSAnLi4vRGVmYXVsdEhlYWRlckNvbHVtbi5qcyc7XHJcbmltcG9ydCB7IGRlZmF1bHRCb3JkZXIgfSBmcm9tICcuLi9kZWZhdWx0cy5qcyc7XHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXIuanMnO1xyXG5cclxuY29uc3QgVHJhY2tlZEdyaWQgPSB3aXRoU2Nyb2xsVG9wUHJvcChQaW5uYWJsZUdyaWQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld3BvcnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgY29sdW1uczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjb2wxJyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZUZpbHRlcmluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVTb3J0aW5nOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjb2wxMScsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyMCxcclxuICAgICAgICAgICAgICAgICAgICBwaW5uZWRMZWZ0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjb2wyJyxcclxuICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogNjAsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MCxcclxuICAgICAgICAgICAgICAgICAgICByZXNpemluZzogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY29sMjEnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgcGlubmVkUmlnaHQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NvbDMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAnQ29sdW1uIDMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDMwMCxcclxuICAgICAgICAgICAgICAgICAgICBtb3Zpbmc6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZGF0YTogQXJyYXkoNTAwMDAwKS5maWxsKDApLm1hcCgoaXRlbSwgaSkgPT4gKHtcclxuICAgICAgICAgICAgICAgIGNvbDExOiBgUGlubmVkIGxlZnQgJHtpfWAsXHJcbiAgICAgICAgICAgICAgICBjb2wxOiBpLFxyXG4gICAgICAgICAgICAgICAgY29sMjogYFRpdGxlICR7aX1gLFxyXG4gICAgICAgICAgICAgICAgY29sMjE6IGBQaW5uZWQgcmlnaHQgJHtpfWAsXHJcbiAgICAgICAgICAgICAgICBjb2wzOiAnTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4nXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSB0aGlzLmNhbGxiYWNrLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbGJhY2soYWN0aW9uKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHJlZHVjZXIodGhpcy5zdGF0ZSwgYWN0aW9uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHt9LCB7IGNvbHVtbnMsIGRhdGEgfSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDI+R3JpZCBleGFtcGxlPC9oMj5cclxuICAgICAgICAgICAgICAgIDxUcmFja2VkR3JpZFxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdwb3J0V2lkdGg9ezYwMH1cclxuICAgICAgICAgICAgICAgICAgICB2aWV3cG9ydEhlaWdodD17MzYwfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICByb3dIZWlnaHQ9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlckNvbHVtbkNvbXBvbmVudD17RGVmYXVsdEhlYWRlckNvbHVtbn1cclxuICAgICAgICAgICAgICAgICAgICByb3dDb21wb25lbnQ9e3VuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaz17dGhpcy5jYWxsYmFja31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2V4YW1wbGVzL0dyaWREZW1vLmpzIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnaW5mZXJuby1jcmVhdGUtZWxlbWVudCc7XHJcbmltcG9ydCB3aXRoU2Nyb2xsVG9wUHJvcCBmcm9tICcuLi9kZWNvcmF0b3JzL3dpdGhTY3JvbGxUb3BQcm9wLmpzJztcclxuaW1wb3J0IExpc3QgZnJvbSAnLi4vTGlzdC5qcyc7XHJcbmltcG9ydCBEZWZhdWx0Um93IGZyb20gJy4uL0RlZmF1bHRSb3cuanMnO1xyXG5cclxuY29uc3QgVHJhY2tlZExpc3QgPSB3aXRoU2Nyb2xsVG9wUHJvcChMaXN0KTtcclxuXHJcbmNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2NvbDEnLFxyXG4gICAgICAgIHdpZHRoOiAxMDBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2NvbDInLFxyXG4gICAgICAgIGNvbXB1dGVkV2lkdGg6IDE1MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnY29sMycsXHJcbiAgICAgICAgd2lkdGg6IDIwMFxyXG4gICAgfVxyXG5dO1xyXG5cclxuY29uc3QgZGF0YSA9IEFycmF5KDEwMDAwMCkuZmlsbCgwKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoe1xyXG4gICAgY29sMTogaW5kZXgsXHJcbiAgICBjb2wyOiBgVGl0bGUgJHtpbmRleH1gLFxyXG4gICAgY29sMzogJ0xvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuJ1xyXG59KSk7XHJcblxyXG5jb25zdCBSb3cgPSAoeyBkYXR1bSwgaW5kZXggfSkgPT4gKFxyXG4gICAgPERlZmF1bHRSb3cgY29sdW1ucz17Y29sdW1uc30gZGF0dW09e2RhdHVtfSBpbmRleD17aW5kZXh9IC8+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj5MaXN0IGV4YW1wbGU8L2gyPlxyXG4gICAgICAgIDxUcmFja2VkTGlzdFxyXG4gICAgICAgICAgICB2aWV3cG9ydFdpZHRoPXs2MDB9XHJcbiAgICAgICAgICAgIHZpZXdwb3J0SGVpZ2h0PXszNjB9XHJcbiAgICAgICAgICAgIHJvd0hlaWdodD17MzB9XHJcbiAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgIGNvbXBvbmVudD17Um93fVxyXG4gICAgICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9leGFtcGxlcy9MaXN0RGVtby5qcyIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJ2luZmVybm8tY3JlYXRlLWVsZW1lbnQnO1xyXG5pbXBvcnQgeyBkZWZhdWx0Qm9yZGVyLCBkZWZhdWx0QWN0aXZlQm9yZGVyLCBkZWZhdWx0SGVhZGVyQmFja2dyb3VuZCB9IGZyb20gJy4vZGVmYXVsdHMuanMnO1xyXG5cclxuY29uc3QgZ2V0Qm9yZGVyTGVmdCA9IChjb2x1bW4sIGluZGV4LCBnaG9zdCkgPT5cclxuICAgIGluZGV4ID09PSAwIHx8IGdob3N0ID8gKGNvbHVtbi5tb3ZlTGVmdCA/IGRlZmF1bHRBY3RpdmVCb3JkZXIgOiBkZWZhdWx0Qm9yZGVyKSA6ICcnO1xyXG5cclxuY29uc3QgZ2V0Qm9yZGVyUmlnaHQgPSBjb2x1bW4gPT5cclxuICAgIGNvbHVtbi5tb3ZlUmlnaHQgPyBkZWZhdWx0QWN0aXZlQm9yZGVyIDogZGVmYXVsdEJvcmRlcjtcclxuXHJcbmNvbnN0IGdldE9wYWNpdHkgPSBnaG9zdCA9PiBnaG9zdCA/IC44IDogMTtcclxuXHJcbmNvbnN0IGdldFN0eWxlID0gKGNvbHVtbiwgaW5kZXgsIGdob3N0KSA9PiAoe1xyXG4gICAgaGVpZ2h0OiAzMCxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICBwYWRkaW5nOiAnMCA4cHgnLFxyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgYm9yZGVyVG9wOiBkZWZhdWx0Qm9yZGVyLFxyXG4gICAgYm9yZGVyQm90dG9tOiBkZWZhdWx0Qm9yZGVyLFxyXG4gICAgYm9yZGVyTGVmdDogZ2V0Qm9yZGVyTGVmdChjb2x1bW4sIGluZGV4LCBnaG9zdCksXHJcbiAgICBib3JkZXJSaWdodDogZ2V0Qm9yZGVyUmlnaHQoY29sdW1uLCBpbmRleCwgZ2hvc3QpLFxyXG4gICAgYmFja2dyb3VuZDogZGVmYXVsdEhlYWRlckJhY2tncm91bmQsXHJcbiAgICBvcGFjaXR5OiBnZXRPcGFjaXR5KGdob3N0KVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IGNvbHVtbiwgaW5kZXgsIGdob3N0IH0pID0+IChcclxuICAgIDxkaXYgc3R5bGU9e2dldFN0eWxlKGNvbHVtbiwgaW5kZXgsIGdob3N0KX0+XHJcbiAgICAgICAge2NvbHVtbi5kaXNwbGF5TmFtZSB8fCBjb2x1bW4ubmFtZX1cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRGVmYXVsdEhlYWRlckNvbHVtbi5qcyIsImltcG9ydCB7IGxpbmtFdmVudCB9IGZyb20gJ2luZmVybm8nO1xyXG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICdpbmZlcm5vLWNyZWF0ZS1lbGVtZW50JztcclxuXHJcbmNvbnN0IG1pbk9mZnNldCA9IDM7XHJcblxyXG5jb25zdCBvbk1vdXNlRG93biA9IChwcm9wcywgZG93bkV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50WCA9IGRvd25FdmVudC5jdXJyZW50VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICBjb25zdCBzdGFydCA9IGRvd25FdmVudC5jbGllbnRYIC0gZWxlbWVudFg7XHJcbiAgICBsZXQgbW92ZWQgPSBmYWxzZTtcclxuICAgIGNvbnN0IG9uTW91c2VNb3ZlID0gbW92ZUV2ZW50ID0+IHtcclxuICAgICAgICBjb25zdCBwb3MgPSBtb3ZlRXZlbnQuY2xpZW50WCAtIGVsZW1lbnRYO1xyXG4gICAgICAgIGlmIChNYXRoLmFicyhwb3MgLSBzdGFydCkgPiBtaW5PZmZzZXQgfHwgbW92ZWQpIHtcclxuICAgICAgICAgICAgbW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBwcm9wcy5vbkRyYWcobW92ZUV2ZW50LCBwb3MpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBvbk1vdXNlVXAgPSB1cEV2ZW50ID0+IHtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcbiAgICAgICAgY29uc3QgcG9zID0gdXBFdmVudC5jbGllbnRYIC0gZWxlbWVudFg7XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKHBvcyAtIHN0YXJ0KSA+IG1pbk9mZnNldCB8fCBtb3ZlZCkge1xyXG4gICAgICAgICAgICBwcm9wcy5vbkVuZCh1cEV2ZW50LCB1cEV2ZW50LmNsaWVudFggLSBlbGVtZW50WCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHByb3BzLm9uU3RhcnQoZG93bkV2ZW50LCBzdGFydCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxufTtcclxuXHJcbmNvbnN0IERyYWdnYWJsZSA9IHByb3BzID0+IChcclxuICAgIDxkaXYgb25Nb3VzZURvd249e2xpbmtFdmVudChwcm9wcywgb25Nb3VzZURvd24pfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cclxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyYWdnYWJsZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0RyYWdnYWJsZS5qcyIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJ2luZmVybm8tY3JlYXRlLWVsZW1lbnQnO1xyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ2luZmVybm8tY29tcG9uZW50JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlci5qcyc7XHJcbmltcG9ydCBSZXNpemVHaG9zdCBmcm9tICcuL1Jlc2l6ZUdob3N0LmpzJztcclxuaW1wb3J0IExpc3QgZnJvbSAnLi9MaXN0LmpzJztcclxuaW1wb3J0IERlZmF1bHRSb3cgZnJvbSAnLi9EZWZhdWx0Um93LmpzJztcclxuaW1wb3J0IHsgbWFya01vdmVEZXN0LCBtb3ZlQ29sdW1uLCBtb3ZlUmVzaXplR2hvc3QsIHJlc2l6ZUNvbHVtbiB9IGZyb20gJy4vYWN0aW9uQ3JlYXRvcnMuanMnO1xyXG5cclxuY29uc3QgR3JpZCA9ICh7IGRyYWdnaW5nLCB3aWR0aCwgY2hpbGRyZW4gfSkgPT4gKFxyXG4gICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIHBvaW50ZXJFdmVudHM6IGRyYWdnaW5nID8gJ25vbmUnIDogJycsXHJcbiAgICAgICAgdXNlclNlbGVjdDogZHJhZ2dpbmcgPyAnbm9uZScgOiAnJyxcclxuICAgICAgICB3aWR0aFxyXG4gICAgfX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBjcmVhdGVSb3dDb21wb25lbnQgPSAoeyBjb2x1bW5zLCBjb21wb25lbnQ6IFJvdyA9IERlZmF1bHRSb3cgfSkgPT4gKHsgZGF0dW0sIGluZGV4IH0pID0+IChcclxuICAgIDxSb3cgY29sdW1ucz17Y29sdW1uc30gZGF0dW09e2RhdHVtfSBpbmRleD17aW5kZXh9IC8+XHJcbik7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZFdyYXBwZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaGVhZGVySGVpZ2h0OiAwLFxyXG4gICAgICAgICAgICByb3dDb21wb25lbnQ6IGNyZWF0ZVJvd0NvbXBvbmVudCh7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBwcm9wcy5jb2x1bW5zLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBwcm9wcy5yb3dDb21wb25lbnRcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGRyYWdnaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgZ2hvc3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICBnaG9zdFg6IDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJlZkhlYWRlciA9IHRoaXMucmVmSGVhZGVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblJlc2l6aW5nID0gdGhpcy5vblJlc2l6aW5nLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblJlc2l6ZSA9IHRoaXMub25SZXNpemUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uTW92aW5nID0gdGhpcy5vbk1vdmluZy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25Nb3ZlID0gdGhpcy5vbk1vdmUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIGxldCByb3dDb21wb25lbnQgPSB0aGlzLnN0YXRlLnJvd0NvbXBvbmVudDtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5yb3dDb21wb25lbnQgIT09IG5leHRQcm9wcy5yb3dDb21wb25lbnQgfHwgdGhpcy5wcm9wcy5jb2x1bW5zICE9PSBuZXh0UHJvcHMuY29sdW1ucykge1xyXG4gICAgICAgICAgICByb3dDb21wb25lbnQgPSBjcmVhdGVSb3dDb21wb25lbnQoe1xyXG4gICAgICAgICAgICAgICAgY29sdW1uczogbmV4dFByb3BzLmNvbHVtbnMsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IG5leHRQcm9wcy5yb3dDb21wb25lbnRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICByb3dDb21wb25lbnQsXHJcbiAgICAgICAgICAgIHdpZHRoOiBuZXh0UHJvcHMuY29sdW1ucy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gYWNjICsgaXRlbS53aWR0aCwgMClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWZIZWFkZXIoZWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBoZWFkZXJIZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZXNpemluZyhuYW1lLCBnaG9zdFBvc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRyYWdnaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBnaG9zdDogdHJ1ZSxcclxuICAgICAgICAgICAgZ2hvc3RYOiBnaG9zdFBvc2l0aW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jYWxsYmFjayhtb3ZlUmVzaXplR2hvc3QobmFtZSwgZ2hvc3RQb3NpdGlvbikpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVzaXplKG5hbWUsIGNvbHVtbldpZHRoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRyYWdnaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgZ2hvc3Q6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jYWxsYmFjayhyZXNpemVDb2x1bW4obmFtZSwgY29sdW1uV2lkdGgpKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdmluZyhuYW1lLCBsZWZ0LCByaWdodCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkcmFnZ2luZzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucHJvcHMuY2FsbGJhY2sobWFya01vdmVEZXN0KG5hbWUsIGxlZnQsIHJpZ2h0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3ZlKG5hbWUsIGxlZnQsIHJpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRyYWdnaW5nOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucHJvcHMuY2FsbGJhY2sobW92ZUNvbHVtbihuYW1lLCBsZWZ0LCByaWdodCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihwcm9wcywgeyBkcmFnZ2luZywgZ2hvc3QsIGdob3N0WCwgd2lkdGgsIHJvd0NvbXBvbmVudCwgaGVhZGVySGVpZ2h0IH0pIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8R3JpZCBkcmFnZ2luZz17ZHJhZ2dpbmd9IHdpZHRoPXt3aWR0aH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnc3RpY2t5JywgekluZGV4OiAxLCB0b3A6IDAsIGhlaWdodDogaGVhZGVySGVpZ2h0IH19IHJlZj17dGhpcy5yZWZIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17cHJvcHMuY29sdW1uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtwcm9wcy5oZWFkZXJDb2x1bW5Db21wb25lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW92ZT17dGhpcy5vbk1vdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTW92aW5nPXt0aGlzLm9uTW92aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblJlc2l6ZT17dGhpcy5vblJlc2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25SZXNpemluZz17dGhpcy5vblJlc2l6aW5nfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e3Byb3BzLmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wPXtwcm9wcy5zY3JvbGxUb3AgLSBoZWFkZXJIZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld3BvcnRIZWlnaHQ9e3Byb3BzLnZpZXdwb3J0SGVpZ2h0IC0gaGVhZGVySGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd0hlaWdodD17cHJvcHMucm93SGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17cm93Q29tcG9uZW50fSAvPlxyXG4gICAgICAgICAgICAgICAge2dob3N0ICYmIDxSZXNpemVHaG9zdCB4PXtnaG9zdFh9IC8+fVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvR3JpZC5qcyIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJ2luZmVybm8tY3JlYXRlLWVsZW1lbnQnO1xyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ2luZmVybm8tY29tcG9uZW50JztcclxuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL0RyYWdnYWJsZS5qcyc7XHJcbmltcG9ydCB7IHRyaW1Db2x1bW5XaWR0aCwgYmlzZWN0Q29sdW1ucyB9IGZyb20gJy4vY29sdW1uc1V0aWxzLmpzJztcclxuXHJcbmNvbnN0IFJlc2l6ZXIgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgekluZGV4OiAyLFxyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgcmlnaHQ6IC0zLFxyXG4gICAgICAgIHdpZHRoOiA2LFxyXG4gICAgICAgIGN1cnNvcjogJ2NvbC1yZXNpemUnXHJcbiAgICB9fT5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3QgQ29sdW1uR2hvc3QgPSAoeyB4LCBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAwLCB0b3A6IDAsIGJvdHRvbTogMCwgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke3h9cHgpYCB9fT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcbmNsYXNzIERyYWdnYWJsZUNvbHVtbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMucmVmUmVzaXplciA9IGVsZW1lbnQgPT4gdGhpcy5yZXNpemVyID0gZWxlbWVudDtcclxuICAgICAgICBsZXQgbmFtZTtcclxuICAgICAgICBsZXQgZW5hYmxlZDtcclxuICAgICAgICB0aGlzLm9uU3RhcnQgPSAoZSwgcG9zKSA9PiB7XHJcbiAgICAgICAgICAgIG5hbWUgPSBlLnRhcmdldCA9PT0gdGhpcy5yZXNpemVyID8gJ3Jlc2l6ZScgOiAnbW92ZSc7XHJcbiAgICAgICAgICAgIGVuYWJsZWQgPSBuYW1lID09PSAncmVzaXplJyB8fCBuYW1lID09PSAnbW92ZScgJiYgdGhpcy5wcm9wcy5jb2x1bW4ubW92aW5nO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU3RhcnQobmFtZSwgdGhpcy5wcm9wcy5jb2x1bW4ubmFtZSwgcG9zKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub25EcmFnID0gKGUsIHBvcykgPT4gZW5hYmxlZCAmJiB0aGlzLnByb3BzLm9uRHJhZyhuYW1lLCB0aGlzLnByb3BzLmNvbHVtbi5uYW1lLCBwb3MpO1xyXG4gICAgICAgIHRoaXMub25FbmQgPSAoZSwgcG9zKSA9PiBlbmFibGVkICYmIHRoaXMucHJvcHMub25FbmQobmFtZSwgdGhpcy5wcm9wcy5jb2x1bW4ubmFtZSwgcG9zKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPERyYWdnYWJsZVxyXG4gICAgICAgICAgICAgICAgb25TdGFydD17dGhpcy5vblN0YXJ0fVxyXG4gICAgICAgICAgICAgICAgb25EcmFnPXt0aGlzLm9uRHJhZ31cclxuICAgICAgICAgICAgICAgIG9uRW5kPXt0aGlzLm9uRW5kfT5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbHVtbi5yZXNpemluZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZXNpemVyIG9uQ29tcG9uZW50RGlkTW91bnQ9e3RoaXMucmVmUmVzaXplcn0gLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgQ29sdW1uV3JhcHBlciA9ICh7IGNvbHVtbiwgaW5kZXgsIGdob3N0LCBjb21wb25lbnQ6IENvbHVtbiB9KSA9PiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBjb2x1bW4ud2lkdGggfX0+XHJcbiAgICAgICAgPENvbHVtbiBjb2x1bW49e2NvbHVtbn0gaW5kZXg9e2luZGV4fSBnaG9zdD17Z2hvc3R9IC8+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IChcclxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlcldyYXBwZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm9uU3RhcnQgPSB0aGlzLm9uU3RhcnQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uRHJhZyA9IHRoaXMub25EcmFnLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkVuZCA9IHRoaXMub25FbmQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvblN0YXJ0KHR5cGUsIG5hbWUsIHN0YXJ0KSB7XHJcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IHRoaXMucHJvcHMuY29sdW1ucztcclxuICAgICAgICBjb25zdCBjdXJyZW50SW5kZXggPSBjb2x1bW5zLmZpbmRJbmRleChkID0+IGQubmFtZSA9PT0gbmFtZSk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudENvbHVtbiA9IGNvbHVtbnNbY3VycmVudEluZGV4XTtcclxuICAgICAgICBjb25zdCBjdXJyZW50TGVmdCA9IGNvbHVtbnMuc2xpY2UoMCwgY3VycmVudEluZGV4KS5yZWR1Y2UoKGFjYywgZCkgPT4gYWNjICsgZC53aWR0aCwgMCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGVmdCA9IGN1cnJlbnRMZWZ0O1xyXG4gICAgICAgIHRoaXMuc3RhcnRNb3ZpbmdQb3NpdGlvbiA9IGN1cnJlbnRMZWZ0IC0gc3RhcnQ7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBjdXJyZW50SW5kZXg7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Q29sdW1uID0gY3VycmVudENvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYWcodHlwZSwgbmFtZSwgcG9zaXRpb24pIHtcclxuICAgICAgICBpZiAodHlwZSA9PT0gJ3Jlc2l6ZScpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblJlc2l6aW5nKG5hbWUsIHRoaXMuY3VycmVudExlZnQgKyB0cmltQ29sdW1uV2lkdGgodGhpcy5jdXJyZW50Q29sdW1uLCBwb3NpdGlvbikpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtsZWZ0SW5kZXgsIHJpZ2h0SW5kZXhdID0gYmlzZWN0Q29sdW1ucyh0aGlzLnByb3BzLmNvbHVtbnMsIHRoaXMuc3RhcnRNb3ZpbmdQb3NpdGlvbiArIHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgbGVmdE5hbWUgPSBsZWZ0SW5kZXggPT09IC0xID8gbnVsbCA6IHRoaXMucHJvcHMuY29sdW1uc1tsZWZ0SW5kZXhdLm5hbWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0TmFtZSA9IHJpZ2h0SW5kZXggPT09IC0xID8gbnVsbCA6IHRoaXMucHJvcHMuY29sdW1uc1tyaWdodEluZGV4XS5uYW1lO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uTW92aW5nKG5hbWUsIGxlZnROYW1lLCByaWdodE5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMuc3RhcnRNb3ZpbmdQb3NpdGlvbiArIHBvc2l0aW9uLFxyXG4gICAgICAgICAgICBtb3Zpbmc6IHR5cGUgPT09ICdtb3ZlJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5kKHR5cGUsIG5hbWUsIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdyZXNpemUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25SZXNpemUobmFtZSwgdHJpbUNvbHVtbldpZHRoKHRoaXMuY3VycmVudENvbHVtbiwgcG9zaXRpb24pKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBbbGVmdEluZGV4LCByaWdodEluZGV4XSA9IGJpc2VjdENvbHVtbnModGhpcy5wcm9wcy5jb2x1bW5zLCB0aGlzLnN0YXJ0TW92aW5nUG9zaXRpb24gKyBwb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGxlZnROYW1lID0gbGVmdEluZGV4ID09PSAtMSA/IG51bGwgOiB0aGlzLnByb3BzLmNvbHVtbnNbbGVmdEluZGV4XS5uYW1lO1xyXG4gICAgICAgICAgICBjb25zdCByaWdodE5hbWUgPSByaWdodEluZGV4ID09PSAtMSA/IG51bGwgOiB0aGlzLnByb3BzLmNvbHVtbnNbcmlnaHRJbmRleF0ubmFtZTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk1vdmUobmFtZSwgbGVmdE5hbWUsIHJpZ2h0TmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBtb3Zpbmc6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHsgY29sdW1ucywgY29tcG9uZW50IH0sIHsgbW92aW5nLCBwb3NpdGlvbiB9KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgICAgICAgIHtjb2x1bW5zLm1hcCgoY29sdW1uLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlQ29sdW1uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbj17Y29sdW1ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN0YXJ0PXt0aGlzLm9uU3RhcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZz17dGhpcy5vbkRyYWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRW5kPXt0aGlzLm9uRW5kfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbHVtbldyYXBwZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbj17Y29sdW1ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2hvc3Q9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGVDb2x1bW4+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge21vdmluZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2x1bW5HaG9zdCB4PXtwb3NpdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2x1bW5XcmFwcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW49e3RoaXMuY3VycmVudENvbHVtbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXt0aGlzLmN1cnJlbnRJbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdob3N0PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2x1bW5HaG9zdD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSGVhZGVyLmpzIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnaW5mZXJuby1jcmVhdGUtZWxlbWVudCc7XHJcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnaW5mZXJuby1jb21wb25lbnQnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICcuL0dyaWQuanMnO1xyXG5cclxuY29uc3Qgc3BsaXRDb2x1bW5zID0gY29sdW1ucyA9PiAoe1xyXG4gICAgbGVmdENvbHVtbnM6IGNvbHVtbnMuZmlsdGVyKGNvbHVtbiA9PiBjb2x1bW4ucGlubmVkTGVmdCksXHJcbiAgICBjZW50ZXJDb2x1bW5zOiBjb2x1bW5zLmZpbHRlcihjb2x1bW4gPT4gIWNvbHVtbi5waW5uZWRMZWZ0ICYmICFjb2x1bW4ucGlubmVkUmlnaHQpLFxyXG4gICAgcmlnaHRDb2x1bW5zOiBjb2x1bW5zLmZpbHRlcihjb2x1bW4gPT4gY29sdW1uLnBpbm5lZFJpZ2h0KVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpbm5hYmxlR3JpZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gc3BsaXRDb2x1bW5zKHByb3BzLmNvbHVtbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29sdW1ucyAhPT0gbmV4dFByb3BzLmNvbHVtbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzcGxpdENvbHVtbnMobmV4dFByb3BzLmNvbHVtbnMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHByb3BzLCB7IGxlZnRDb2x1bW5zLCBjZW50ZXJDb2x1bW5zLCByaWdodENvbHVtbnMgfSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3N0aWNreScsIHpJbmRleDogMiwgbGVmdDogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7bGVmdENvbHVtbnMubGVuZ3RoICE9PSAwICYmIGNyZWF0ZUVsZW1lbnQoR3JpZCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uczogbGVmdENvbHVtbnNcclxuICAgICAgICAgICAgICAgICAgICB9KSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2NyZWF0ZUVsZW1lbnQoR3JpZCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uczogY2VudGVyQ29sdW1uc1xyXG4gICAgICAgICAgICAgICAgICAgIH0pKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3N0aWNreScsIHpJbmRleDogMiwgcmlnaHQ6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3JpZ2h0Q29sdW1ucy5sZW5ndGggIT09IDAgJiYgY3JlYXRlRWxlbWVudChHcmlkLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiByaWdodENvbHVtbnNcclxuICAgICAgICAgICAgICAgICAgICB9KSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUGlubmFibGVHcmlkLmpzIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnaW5mZXJuby1jcmVhdGUtZWxlbWVudCc7XHJcblxyXG5jb25zdCBSZXNpemVHaG9zdCA9ICh7IHggfSkgPT4gKFxyXG4gICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICBib3JkZXJMZWZ0OiAnMXB4IGRvdHRlZCAjMDAwJyxcclxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke3h9cHgpYFxyXG4gICAgfX0+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2l6ZUdob3N0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVzaXplR2hvc3QuanMiLCJleHBvcnQgY29uc3QgbWFya01vdmVEZXN0ID0gKG5hbWUsIGxlZnQsIHJpZ2h0KSA9PiAoe1xyXG4gICAgdHlwZTogJ01BUktfTU9WRV9ERVNUJyxcclxuICAgIG5hbWUsXHJcbiAgICBsZWZ0LFxyXG4gICAgcmlnaHRcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbW92ZUNvbHVtbiA9IChuYW1lLCBsZWZ0LCByaWdodCkgPT4gKHtcclxuICAgIHR5cGU6ICdNT1ZFX0NPTFVNTicsXHJcbiAgICBuYW1lLFxyXG4gICAgbGVmdCxcclxuICAgIHJpZ2h0XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1vdmVSZXNpemVHaG9zdCA9IChuYW1lLCBwb3NpdGlvbikgPT4gKHtcclxuICAgIHR5cGU6ICdNT1ZFX1JFU0laRV9HSE9TVCcsXHJcbiAgICBuYW1lLFxyXG4gICAgcG9zaXRpb25cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVzaXplQ29sdW1uID0gKG5hbWUsIHNpemUpID0+ICh7XHJcbiAgICB0eXBlOiAnUkVTSVpFX0NPTFVNTicsXHJcbiAgICBuYW1lLFxyXG4gICAgc2l6ZVxyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FjdGlvbkNyZWF0b3JzLmpzIiwiY29uc3QgZGVmYXVsdE1pbldpZHRoID0gNjA7XHJcblxyXG5leHBvcnQgY29uc3QgdHJpbUNvbHVtbldpZHRoID0gKGNvbHVtbiwgd2lkdGgpID0+XHJcbiAgICBNYXRoLm1pbihNYXRoLm1heChjb2x1bW4ubWluV2lkdGggfHwgZGVmYXVsdE1pbldpZHRoLCB3aWR0aCksIGNvbHVtbi5tYXhXaWR0aCB8fCBJbmZpbml0eSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29sdW1uV2lkdGggPSBjb2x1bW4gPT5cclxuICAgIGNvbHVtbi53aWR0aCB8fCBjb2x1bW4ubWluV2lkdGggfHwgZGVmYXVsdE1pbldpZHRoO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJpc2VjdENvbHVtbnMgPSAoY29sdW1ucywgcG9zaXRpb24pID0+IHtcclxuICAgIGlmIChjb2x1bW5zLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICByZXR1cm4gWy0xLCAwXTtcclxuICAgIH1cclxuICAgIGxldCBsYXN0ID0gMDtcclxuICAgIHJldHVybiBjb2x1bW5zLnJlZHVjZSgoYWNjLCB7IHdpZHRoIH0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGVmdCA9IGxhc3Q7XHJcbiAgICAgICAgY29uc3QgcmVsYXRpdmUgPSBwb3NpdGlvbiAtIGxlZnQ7XHJcbiAgICAgICAgY29uc3QgaGFsZiA9IHdpZHRoIC8gMjtcclxuICAgICAgICBsYXN0ID0gbGVmdCArIHdpZHRoO1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCAmJiByZWxhdGl2ZSA8IGhhbGYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFstMSwgaW5kZXhdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5kZXggPT09IGNvbHVtbnMubGVuZ3RoIC0gMSAmJiBoYWxmIDw9IHJlbGF0aXZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbaW5kZXgsIC0xXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGhhbGYgPD0gcmVsYXRpdmUgJiYgcmVsYXRpdmUgPD0gd2lkdGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtpbmRleCwgaW5kZXggKyAxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKDAgPD0gcmVsYXRpdmUgJiYgcmVsYXRpdmUgPD0gaGFsZikge1xyXG4gICAgICAgICAgICByZXR1cm4gW2luZGV4IC0gMSwgaW5kZXhdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwgW10pO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29sdW1uc1V0aWxzLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcG9zZSguLi5mdW5jcykge1xyXG4gICAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBhcmcgPT4gYXJnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmdW5jcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3NbMF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZ1bmNzLnJlZHVjZSgoYSwgYikgPT4gKC4uLmFyZ3MpID0+IGEoYiguLi5hcmdzKSkpO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kZWNvcmF0b3JzL2NvbXBvc2UuanMiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNvbXBvc2UgfSBmcm9tICcuL2NvbXBvc2UuanMnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhNaWRkbGVTdGF0ZSB9IGZyb20gJy4vd2l0aE1pZGRsZVN0YXRlLmpzJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUHJvcHMgfSBmcm9tICcuL3dpdGhQcm9wcy5qcyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFNjcm9sbFRvcFByb3AgfSBmcm9tICcuL3dpdGhTY3JvbGxUb3BQcm9wLmpzJztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlY29yYXRvcnMvaW5kZXguanMiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICdpbmZlcm5vLWNyZWF0ZS1lbGVtZW50JztcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tICdpbmZlcm5vLWNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyID0+IGNvbXBvbmVudCA9PiBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gcmVkdWNlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHJlZHVjZXIobmV4dFByb3BzLCB0aGlzLnN0YXRlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHByb3BzLCBzdGF0ZSkge1xyXG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHN0YXRlKSk7XHJcbiAgICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kZWNvcmF0b3JzL3dpdGhNaWRkbGVTdGF0ZS5qcyIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJ2luZmVybm8tY3JlYXRlLWVsZW1lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnID0+IGNvbXBvbmVudCA9PiBwcm9wcyA9PiBjcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIGNvbmZpZykpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGVjb3JhdG9ycy93aXRoUHJvcHMuanMiLCJjb25zdCBlbXB0eSA9ICgpID0+IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcblxyXG5jb25zdCBpbnZlcnQgPSBvYmogPT4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKGFjYywga2V5KSA9PiAoYWNjW29ialtrZXldXSA9IGtleSwgYWNjKSwgZW1wdHkoKSk7XHJcblxyXG5jb25zdCBjcmVhdGVGcmVlS2V5R2VuZXJhdG9yID0gKGluZGV4ZXMpID0+IHtcclxuICAgIGxldCBsYXN0UG9pbnRlciA9IDA7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGBrZXlfJHtsYXN0UG9pbnRlcn1gO1xyXG4gICAgICAgICAgICBsYXN0UG9pbnRlciArPSAxO1xyXG4gICAgICAgICAgICBpZiAoIShrZXkgaW4gaW5kZXhlcykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UmVjb3ZlcmVkS2V5cyA9IChsYXN0S2V5cywgc3RhcnQsIGVuZCkgPT4ge1xyXG4gICAgY29uc3Qga2V5cyA9IGVtcHR5KCk7XHJcbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQgKyAxOyBpICs9IDEpIHtcclxuICAgICAgICBpZiAoaSBpbiBsYXN0S2V5cykge1xyXG4gICAgICAgICAgICBrZXlzW2ldID0gbGFzdEtleXNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGtleXM7XHJcbn07XHJcblxyXG5jb25zdCBnZW5lcmF0ZUtleXMgPSAobGFzdEtleXMsIHN0YXJ0LCBlbmQpID0+IHtcclxuICAgIGNvbnN0IGtleXMgPSBlbXB0eSgpO1xyXG4gICAgY29uc3QgZ2VuZXJhdGVLZXkgPSBjcmVhdGVGcmVlS2V5R2VuZXJhdG9yKGludmVydChsYXN0S2V5cykpO1xyXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kICsgMTsgaSArPSAxKSB7XHJcbiAgICAgICAgaWYgKCEoaSBpbiBsYXN0S2V5cykpIHtcclxuICAgICAgICAgICAga2V5c1tpXSA9IGdlbmVyYXRlS2V5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGtleXM7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0S2V5c0J5SW5kZXggPSAobGFzdEtleXMgPSBlbXB0eSgpLCBzdGFydCwgZW5kKSA9PiB7XHJcbiAgICBjb25zdCByZWNvdmVyZWQgPSBnZXRSZWNvdmVyZWRLZXlzKGxhc3RLZXlzLCBzdGFydCwgZW5kKTtcclxuICAgIGNvbnN0IGdlbmVyYXRlZCA9IGdlbmVyYXRlS2V5cyhyZWNvdmVyZWQsIHN0YXJ0LCBlbmQpO1xyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZW1wdHkoKSwgcmVjb3ZlcmVkLCBnZW5lcmF0ZWQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFZpc2libGVSb3dzID0gKHsgc2Nyb2xsVG9wLCB2aWV3cG9ydEhlaWdodCwgcm93SGVpZ2h0LCByb3dzQ291bnQgfSkgPT4ge1xyXG4gICAgY29uc3QgY2x1c3RlclNpemUgPSBNYXRoLmNlaWwodmlld3BvcnRIZWlnaHQgLyByb3dIZWlnaHQpO1xyXG4gICAgY29uc3QgdG9wQ2x1c3RlciA9IE1hdGguZmxvb3IoTWF0aC5mbG9vcihzY3JvbGxUb3AgLyByb3dIZWlnaHQpIC8gY2x1c3RlclNpemUpO1xyXG4gICAgY29uc3QgZW5kID0gTWF0aC5taW4ocm93c0NvdW50LCAodG9wQ2x1c3RlciArIDIpICogY2x1c3RlclNpemUpO1xyXG4gICAgLy8gY291bnQgb2YgdmlzaWJsZSByb3dzIGlzIGFsd2F5cyB0aGUgc2FtZSB0aGVuIGZvY3VzIG5ldmVyIGJlIGxvc3RcclxuICAgIGNvbnN0IHN0YXJ0ID0gTWF0aC5tYXgoMCwgZW5kIC0gY2x1c3RlclNpemUgKiAyKTtcclxuICAgIHJldHVybiBbc3RhcnQsIGVuZF07XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saXN0VXRpbHMuanMiLCJleHBvcnQgZGVmYXVsdCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ01BUktfTU9WRV9ERVNUJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IHN0YXRlLmNvbHVtbnMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09IGFjdGlvbi5sZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlTGVmdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlUmlnaHQ6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09IGFjdGlvbi5yaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZUxlZnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlUmlnaHQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5tb3ZlTGVmdCB8fCBpdGVtLm1vdmVSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZUxlZnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVJpZ2h0OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjYXNlICdNT1ZFX0NPTFVNTic6XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbnMgPSBzdGF0ZS5jb2x1bW5zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLm1vdmVMZWZ0IHx8IGl0ZW0ubW92ZVJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZUxlZnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlUmlnaHQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24ubGVmdCB8fCBhY3Rpb24ucmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgPSBhY3Rpb24ubGVmdFxyXG4gICAgICAgICAgICAgICAgICAgID8gY29sdW1ucy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLm5hbWUgPT09IGFjdGlvbi5sZWZ0KSArIDFcclxuICAgICAgICAgICAgICAgICAgICA6IGNvbHVtbnMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5uYW1lID09PSBhY3Rpb24ucmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmNvbHVtbnMuc2xpY2UoMCwgaW5kZXgpLmZpbHRlcihpdGVtID0+IGl0ZW0ubmFtZSAhPT0gYWN0aW9uLm5hbWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jb2x1bW5zLmZpbHRlcihpdGVtID0+IGl0ZW0ubmFtZSA9PT0gYWN0aW9uLm5hbWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jb2x1bW5zLnNsaWNlKGluZGV4KS5maWx0ZXIoaXRlbSA9PiBpdGVtLm5hbWUgIT09IGFjdGlvbi5uYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbnNcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2FzZSAnUkVTSVpFX0NPTFVNTic6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBzdGF0ZS5jb2x1bW5zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5uYW1lID09PSBhY3Rpb24ubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGFjdGlvbi5zaXplXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHVjZXIuanMiLCIvKiFcbiAqIGluZmVybm8tY29tcG9uZW50IHYxLjIuMlxuICogKGMpIDIwMTcgRG9taW5pYyBHYW5uYXdheVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnaW5mZXJubycpKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2luZmVybm8nXSwgZmFjdG9yeSkgOlxuXHQoZ2xvYmFsLkluZmVybm8gPSBnbG9iYWwuSW5mZXJubyB8fCB7fSwgZ2xvYmFsLkluZmVybm8uQ29tcG9uZW50ID0gZmFjdG9yeShnbG9iYWwuSW5mZXJubykpO1xufSh0aGlzLCAoZnVuY3Rpb24gKGluZmVybm8pIHsgJ3VzZSBzdHJpY3QnO1xuXG52YXIgRVJST1JfTVNHID0gJ2EgcnVudGltZSBlcnJvciBvY2N1cmVkISBVc2UgSW5mZXJubyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudCB0byBmaW5kIHRoZSBlcnJvci4nO1xudmFyIGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudDtcblxuLy8gdGhpcyBpcyBNVUNIIGZhc3RlciB0aGFuIC5jb25zdHJ1Y3RvciA9PT0gQXJyYXkgYW5kIGluc3RhbmNlb2YgQXJyYXlcbi8vIGluIE5vZGUgNyBhbmQgdGhlIGxhdGVyIHZlcnNpb25zIG9mIFY4LCBzbG93ZXIgaW4gb2xkZXIgdmVyc2lvbnMgdGhvdWdoXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nT3JOdW1iZXIob2JqKSB7XG4gICAgdmFyIHR5cGUgPSB0eXBlb2Ygb2JqO1xuICAgIHJldHVybiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlID09PSAnbnVtYmVyJztcbn1cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWYob2JqKSB7XG4gICAgcmV0dXJuIGlzVW5kZWZpbmVkKG9iaikgfHwgaXNOdWxsKG9iaik7XG59XG5mdW5jdGlvbiBpc0ludmFsaWQob2JqKSB7XG4gICAgcmV0dXJuIGlzTnVsbChvYmopIHx8IG9iaiA9PT0gZmFsc2UgfHwgaXNUcnVlKG9iaikgfHwgaXNVbmRlZmluZWQob2JqKTtcbn1cbmZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbic7XG59XG5cblxuXG5mdW5jdGlvbiBpc051bGwob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gbnVsbDtcbn1cbmZ1bmN0aW9uIGlzVHJ1ZShvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB0cnVlO1xufVxuZnVuY3Rpb24gaXNVbmRlZmluZWQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB0aHJvd0Vycm9yKG1lc3NhZ2UpIHtcbiAgICBpZiAoIW1lc3NhZ2UpIHtcbiAgICAgICAgbWVzc2FnZSA9IEVSUk9SX01TRztcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKChcIkluZmVybm8gRXJyb3I6IFwiICsgbWVzc2FnZSkpO1xufVxuXG52YXIgTGlmZWN5Y2xlID0gZnVuY3Rpb24gTGlmZWN5Y2xlKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgdGhpcy5mYXN0VW5tb3VudCA9IHRydWU7XG59O1xuTGlmZWN5Y2xlLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyIChjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xufTtcbkxpZmVjeWNsZS5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uIHRyaWdnZXIgKCkge1xuICAgICAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcyQxLmxpc3RlbmVyc1tpXSgpO1xuICAgIH1cbn07XG5cbnZhciBub09wID0gRVJST1JfTVNHO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBub09wID0gJ0luZmVybm8gRXJyb3I6IENhbiBvbmx5IHVwZGF0ZSBhIG1vdW50ZWQgb3IgbW91bnRpbmcgY29tcG9uZW50LiBUaGlzIHVzdWFsbHkgbWVhbnMgeW91IGNhbGxlZCBzZXRTdGF0ZSgpIG9yIGZvcmNlVXBkYXRlKCkgb24gYW4gdW5tb3VudGVkIGNvbXBvbmVudC4gVGhpcyBpcyBhIG5vLW9wLic7XG59XG52YXIgY29tcG9uZW50Q2FsbGJhY2tRdWV1ZSA9IG5ldyBNYXAoKTtcbi8vIHdoZW4gYSBjb21wb25lbnRzIHJvb3QgVk5vZGUgaXMgYWxzbyBhIGNvbXBvbmVudCwgd2UgY2FuIHJ1biBpbnRvIGlzc3Vlc1xuLy8gdGhpcyB3aWxsIHJlY3Vyc2l2ZWx5IGxvb2sgZm9yIHZOb2RlLnBhcmVudE5vZGUgaWYgdGhlIFZOb2RlIGlzIGEgY29tcG9uZW50XG5mdW5jdGlvbiB1cGRhdGVQYXJlbnRDb21wb25lbnRWTm9kZXModk5vZGUsIGRvbSkge1xuICAgIGlmICh2Tm9kZS5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICB2YXIgcGFyZW50Vk5vZGUgPSB2Tm9kZS5wYXJlbnRWTm9kZTtcbiAgICAgICAgaWYgKHBhcmVudFZOb2RlKSB7XG4gICAgICAgICAgICBwYXJlbnRWTm9kZS5kb20gPSBkb207XG4gICAgICAgICAgICB1cGRhdGVQYXJlbnRDb21wb25lbnRWTm9kZXMocGFyZW50Vk5vZGUsIGRvbSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyB0aGlzIGlzIGluIHNoYXBlcyB0b28sIGJ1dCB3ZSBkb24ndCB3YW50IHRvIGltcG9ydCBmcm9tIHNoYXBlcyBhcyBpdCB3aWxsIHB1bGwgaW4gYSBkdXBsaWNhdGUgb2YgY3JlYXRlVk5vZGVcbmZ1bmN0aW9uIGNyZWF0ZVZvaWRWTm9kZSgpIHtcbiAgICByZXR1cm4gaW5mZXJuby5jcmVhdGVWTm9kZSg0MDk2IC8qIFZvaWQgKi8pO1xufVxuZnVuY3Rpb24gY3JlYXRlVGV4dFZOb2RlKHRleHQpIHtcbiAgICByZXR1cm4gaW5mZXJuby5jcmVhdGVWTm9kZSgxIC8qIFRleHQgKi8sIG51bGwsIG51bGwsIHRleHQpO1xufVxuZnVuY3Rpb24gYWRkVG9RdWV1ZShjb21wb25lbnQsIGZvcmNlLCBjYWxsYmFjaykge1xuICAgIC8vIFRPRE8gdGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSByZXZpc2VkIGFuZCBpbXByb3ZlZCBvblxuICAgIHZhciBxdWV1ZSA9IGNvbXBvbmVudENhbGxiYWNrUXVldWUuZ2V0KGNvbXBvbmVudCk7XG4gICAgaWYgKCFxdWV1ZSkge1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICBjb21wb25lbnRDYWxsYmFja1F1ZXVlLnNldChjb21wb25lbnQsIHF1ZXVlKTtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb21wb25lbnRDYWxsYmFja1F1ZXVlLmRlbGV0ZShjb21wb25lbnQpO1xuICAgICAgICAgICAgYXBwbHlTdGF0ZShjb21wb25lbnQsIGZvcmNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBxdWV1ZVtpXSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIHF1ZXVlLnB1c2goY2FsbGJhY2spO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHF1ZXVlU3RhdGVDaGFuZ2VzKGNvbXBvbmVudCwgbmV3U3RhdGUsIGNhbGxiYWNrLCBzeW5jKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24obmV3U3RhdGUpKSB7XG4gICAgICAgIG5ld1N0YXRlID0gbmV3U3RhdGUoY29tcG9uZW50LnN0YXRlLCBjb21wb25lbnQucHJvcHMsIGNvbXBvbmVudC5jb250ZXh0KTtcbiAgICB9XG4gICAgZm9yICh2YXIgc3RhdGVLZXkgaW4gbmV3U3RhdGUpIHtcbiAgICAgICAgY29tcG9uZW50Ll9wZW5kaW5nU3RhdGVbc3RhdGVLZXldID0gbmV3U3RhdGVbc3RhdGVLZXldO1xuICAgIH1cbiAgICBpZiAoIWNvbXBvbmVudC5fcGVuZGluZ1NldFN0YXRlICYmIGlzQnJvd3Nlcikge1xuICAgICAgICBpZiAoc3luYyB8fCBjb21wb25lbnQuX2Jsb2NrUmVuZGVyKSB7XG4gICAgICAgICAgICBjb21wb25lbnQuX3BlbmRpbmdTZXRTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICBhcHBseVN0YXRlKGNvbXBvbmVudCwgZmFsc2UsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFkZFRvUXVldWUoY29tcG9uZW50LCBmYWxzZSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb21wb25lbnQuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBjb21wb25lbnQuc3RhdGUsIGNvbXBvbmVudC5fcGVuZGluZ1N0YXRlKTtcbiAgICAgICAgY29tcG9uZW50Ll9wZW5kaW5nU3RhdGUgPSB7fTtcbiAgICB9XG59XG5mdW5jdGlvbiBhcHBseVN0YXRlKGNvbXBvbmVudCwgZm9yY2UsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCghY29tcG9uZW50Ll9kZWZlclNldFN0YXRlIHx8IGZvcmNlKSAmJiAhY29tcG9uZW50Ll9ibG9ja1JlbmRlciAmJiAhY29tcG9uZW50Ll91bm1vdW50ZWQpIHtcbiAgICAgICAgY29tcG9uZW50Ll9wZW5kaW5nU2V0U3RhdGUgPSBmYWxzZTtcbiAgICAgICAgdmFyIHBlbmRpbmdTdGF0ZSA9IGNvbXBvbmVudC5fcGVuZGluZ1N0YXRlO1xuICAgICAgICB2YXIgcHJldlN0YXRlID0gY29tcG9uZW50LnN0YXRlO1xuICAgICAgICB2YXIgbmV4dFN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgcHJldlN0YXRlLCBwZW5kaW5nU3RhdGUpO1xuICAgICAgICB2YXIgcHJvcHMgPSBjb21wb25lbnQucHJvcHM7XG4gICAgICAgIHZhciBjb250ZXh0ID0gY29tcG9uZW50LmNvbnRleHQ7XG4gICAgICAgIGNvbXBvbmVudC5fcGVuZGluZ1N0YXRlID0ge307XG4gICAgICAgIHZhciBuZXh0SW5wdXQgPSBjb21wb25lbnQuX3VwZGF0ZUNvbXBvbmVudChwcmV2U3RhdGUsIG5leHRTdGF0ZSwgcHJvcHMsIHByb3BzLCBjb250ZXh0LCBmb3JjZSwgdHJ1ZSk7XG4gICAgICAgIHZhciBkaWRVcGRhdGUgPSB0cnVlO1xuICAgICAgICBpZiAoaXNJbnZhbGlkKG5leHRJbnB1dCkpIHtcbiAgICAgICAgICAgIG5leHRJbnB1dCA9IGNyZWF0ZVZvaWRWTm9kZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5leHRJbnB1dCA9PT0gaW5mZXJuby5OT19PUCkge1xuICAgICAgICAgICAgbmV4dElucHV0ID0gY29tcG9uZW50Ll9sYXN0SW5wdXQ7XG4gICAgICAgICAgICBkaWRVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1N0cmluZ09yTnVtYmVyKG5leHRJbnB1dCkpIHtcbiAgICAgICAgICAgIG5leHRJbnB1dCA9IGNyZWF0ZVRleHRWTm9kZShuZXh0SW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQXJyYXkobmV4dElucHV0KSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKCdhIHZhbGlkIEluZmVybm8gVk5vZGUgKG9yIG51bGwpIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBhIGNvbXBvbmVudCByZW5kZXIuIFlvdSBtYXkgaGF2ZSByZXR1cm5lZCBhbiBhcnJheSBvciBhbiBpbnZhbGlkIG9iamVjdC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93RXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGFzdElucHV0ID0gY29tcG9uZW50Ll9sYXN0SW5wdXQ7XG4gICAgICAgIHZhciB2Tm9kZSA9IGNvbXBvbmVudC5fdk5vZGU7XG4gICAgICAgIHZhciBwYXJlbnREb20gPSAobGFzdElucHV0LmRvbSAmJiBsYXN0SW5wdXQuZG9tLnBhcmVudE5vZGUpIHx8IChsYXN0SW5wdXQuZG9tID0gdk5vZGUuZG9tKTtcbiAgICAgICAgY29tcG9uZW50Ll9sYXN0SW5wdXQgPSBuZXh0SW5wdXQ7XG4gICAgICAgIGlmIChkaWRVcGRhdGUpIHtcbiAgICAgICAgICAgIHZhciBzdWJMaWZlY3ljbGUgPSBjb21wb25lbnQuX2xpZmVjeWNsZTtcbiAgICAgICAgICAgIGlmICghc3ViTGlmZWN5Y2xlKSB7XG4gICAgICAgICAgICAgICAgc3ViTGlmZWN5Y2xlID0gbmV3IExpZmVjeWNsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3ViTGlmZWN5Y2xlLmxpc3RlbmVycyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29tcG9uZW50Ll9saWZlY3ljbGUgPSBzdWJMaWZlY3ljbGU7XG4gICAgICAgICAgICB2YXIgY2hpbGRDb250ZXh0ID0gY29tcG9uZW50LmdldENoaWxkQ29udGV4dCgpO1xuICAgICAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKGNoaWxkQ29udGV4dCkpIHtcbiAgICAgICAgICAgICAgICBjaGlsZENvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LCBjb21wb25lbnQuX2NoaWxkQ29udGV4dCwgY2hpbGRDb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoaWxkQ29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQsIGNvbXBvbmVudC5fY2hpbGRDb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbXBvbmVudC5fcGF0Y2gobGFzdElucHV0LCBuZXh0SW5wdXQsIHBhcmVudERvbSwgc3ViTGlmZWN5Y2xlLCBjaGlsZENvbnRleHQsIGNvbXBvbmVudC5faXNTVkcsIGZhbHNlKTtcbiAgICAgICAgICAgIHN1YkxpZmVjeWNsZS50cmlnZ2VyKCk7XG4gICAgICAgICAgICBjb21wb25lbnQuY29tcG9uZW50RGlkVXBkYXRlKHByb3BzLCBwcmV2U3RhdGUpO1xuICAgICAgICAgICAgaW5mZXJuby5vcHRpb25zLmFmdGVyVXBkYXRlICYmIGluZmVybm8ub3B0aW9ucy5hZnRlclVwZGF0ZSh2Tm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRvbSA9IHZOb2RlLmRvbSA9IG5leHRJbnB1dC5kb207XG4gICAgICAgIHZhciBjb21wb25lbnRUb0RPTU5vZGVNYXAgPSBjb21wb25lbnQuX2NvbXBvbmVudFRvRE9NTm9kZU1hcDtcbiAgICAgICAgY29tcG9uZW50VG9ET01Ob2RlTWFwICYmIGNvbXBvbmVudFRvRE9NTm9kZU1hcC5zZXQoY29tcG9uZW50LCBuZXh0SW5wdXQuZG9tKTtcbiAgICAgICAgdXBkYXRlUGFyZW50Q29tcG9uZW50Vk5vZGVzKHZOb2RlLCBkb20pO1xuICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKCFpc051bGxPclVuZGVmKGNhbGxiYWNrKSkge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH1cbn1cbnZhciBDb21wb25lbnQkMSA9IGZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCkge1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB0aGlzLnJlZnMgPSB7fTtcbiAgICB0aGlzLl9ibG9ja1JlbmRlciA9IGZhbHNlO1xuICAgIHRoaXMuX2lnbm9yZVNldFN0YXRlID0gZmFsc2U7XG4gICAgdGhpcy5fYmxvY2tTZXRTdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2RlZmVyU2V0U3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLl9wZW5kaW5nU2V0U3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLl9wZW5kaW5nU3RhdGUgPSB7fTtcbiAgICB0aGlzLl9sYXN0SW5wdXQgPSBudWxsO1xuICAgIHRoaXMuX3ZOb2RlID0gbnVsbDtcbiAgICB0aGlzLl91bm1vdW50ZWQgPSB0cnVlO1xuICAgIHRoaXMuX2xpZmVjeWNsZSA9IG51bGw7XG4gICAgdGhpcy5fY2hpbGRDb250ZXh0ID0gbnVsbDtcbiAgICB0aGlzLl9wYXRjaCA9IG51bGw7XG4gICAgdGhpcy5faXNTVkcgPSBmYWxzZTtcbiAgICB0aGlzLl9jb21wb25lbnRUb0RPTU5vZGVNYXAgPSBudWxsO1xuICAgIC8qKiBAdHlwZSB7b2JqZWN0fSAqL1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcyB8fCBpbmZlcm5vLkVNUFRZX09CSjtcbiAgICAvKiogQHR5cGUge29iamVjdH0gKi9cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0IHx8IHt9O1xufTtcbkNvbXBvbmVudCQxLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIgKG5leHRQcm9wcywgbmV4dFN0YXRlLCBuZXh0Q29udGV4dCkge1xufTtcbkNvbXBvbmVudCQxLnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIGZvcmNlVXBkYXRlIChjYWxsYmFjaykge1xuICAgIGlmICh0aGlzLl91bm1vdW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpc0Jyb3dzZXIgJiYgYXBwbHlTdGF0ZSh0aGlzLCB0cnVlLCBjYWxsYmFjayk7XG59O1xuQ29tcG9uZW50JDEucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gc2V0U3RhdGUgKG5ld1N0YXRlLCBjYWxsYmFjaykge1xuICAgIGlmICh0aGlzLl91bm1vdW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX2Jsb2NrU2V0U3RhdGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pZ25vcmVTZXRTdGF0ZSkge1xuICAgICAgICAgICAgcXVldWVTdGF0ZUNoYW5nZXModGhpcywgbmV3U3RhdGUsIGNhbGxiYWNrLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKCdjYW5ub3QgdXBkYXRlIHN0YXRlIHZpYSBzZXRTdGF0ZSgpIGluIGNvbXBvbmVudFdpbGxVcGRhdGUoKS4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxufTtcbkNvbXBvbmVudCQxLnByb3RvdHlwZS5zZXRTdGF0ZVN5bmMgPSBmdW5jdGlvbiBzZXRTdGF0ZVN5bmMgKG5ld1N0YXRlKSB7XG4gICAgaWYgKHRoaXMuX3VubW91bnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5fYmxvY2tTZXRTdGF0ZSkge1xuICAgICAgICBpZiAoIXRoaXMuX2lnbm9yZVNldFN0YXRlKSB7XG4gICAgICAgICAgICBxdWV1ZVN0YXRlQ2hhbmdlcyh0aGlzLCBuZXdTdGF0ZSwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKCdjYW5ub3QgdXBkYXRlIHN0YXRlIHZpYSBzZXRTdGF0ZSgpIGluIGNvbXBvbmVudFdpbGxVcGRhdGUoKS4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxufTtcbkNvbXBvbmVudCQxLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQgKCkge1xufTtcbkNvbXBvbmVudCQxLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUgKHByZXZQcm9wcywgcHJldlN0YXRlLCBwcmV2Q29udGV4dCkge1xufTtcbkNvbXBvbmVudCQxLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUgKG5leHRQcm9wcywgbmV4dFN0YXRlLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIHRydWU7XG59O1xuQ29tcG9uZW50JDEucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXh0UHJvcHMsIGNvbnRleHQpIHtcbn07XG5Db21wb25lbnQkMS5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVcGRhdGUgKG5leHRQcm9wcywgbmV4dFN0YXRlLCBuZXh0Q29udGV4dCkge1xufTtcbkNvbXBvbmVudCQxLnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQgKCkge1xufTtcbkNvbXBvbmVudCQxLnByb3RvdHlwZS5fdXBkYXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gX3VwZGF0ZUNvbXBvbmVudCAocHJldlN0YXRlLCBuZXh0U3RhdGUsIHByZXZQcm9wcywgbmV4dFByb3BzLCBjb250ZXh0LCBmb3JjZSwgZnJvbVNldFN0YXRlKSB7XG4gICAgaWYgKHRoaXMuX3VubW91bnRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3dFcnJvcihub09wKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxuICAgIGlmICgocHJldlByb3BzICE9PSBuZXh0UHJvcHMgfHwgbmV4dFByb3BzID09PSBpbmZlcm5vLkVNUFRZX09CSikgfHwgcHJldlN0YXRlICE9PSBuZXh0U3RhdGUgfHwgZm9yY2UpIHtcbiAgICAgICAgaWYgKHByZXZQcm9wcyAhPT0gbmV4dFByb3BzIHx8IG5leHRQcm9wcyA9PT0gaW5mZXJuby5FTVBUWV9PQkopIHtcbiAgICAgICAgICAgIGlmICghZnJvbVNldFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tSZW5kZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2NrUmVuZGVyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fcGVuZGluZ1NldFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgbmV4dFN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgbmV4dFN0YXRlLCB0aGlzLl9wZW5kaW5nU3RhdGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3BlbmRpbmdTZXRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3BlbmRpbmdTdGF0ZSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBzaG91bGRVcGRhdGUgPSB0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSwgY29udGV4dCk7XG4gICAgICAgIGlmIChzaG91bGRVcGRhdGUgIT09IGZhbHNlIHx8IGZvcmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9ibG9ja1NldFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSwgY29udGV4dCk7XG4gICAgICAgICAgICB0aGlzLl9ibG9ja1NldFN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnByb3BzID0gbmV4dFByb3BzO1xuICAgICAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgICAgICBpbmZlcm5vLm9wdGlvbnMuYmVmb3JlUmVuZGVyICYmIGluZmVybm8ub3B0aW9ucy5iZWZvcmVSZW5kZXIodGhpcyk7XG4gICAgICAgICAgICB2YXIgcmVuZGVyID0gdGhpcy5yZW5kZXIobmV4dFByb3BzLCBzdGF0ZSwgY29udGV4dCk7XG4gICAgICAgICAgICBpbmZlcm5vLm9wdGlvbnMuYWZ0ZXJSZW5kZXIgJiYgaW5mZXJuby5vcHRpb25zLmFmdGVyUmVuZGVyKHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIHJlbmRlcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW5mZXJuby5OT19PUDtcbn07XG5cbnJldHVybiBDb21wb25lbnQkMTtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pbmZlcm5vL2Rpc3QvaW5mZXJuby1jb21wb25lbnQubm9kZS5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBpbmZlcm5vLWNyZWF0ZS1lbGVtZW50IHYxLjIuMlxuICogKGMpIDIwMTcgRG9taW5pYyBHYW5uYXdheVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnaW5mZXJubycpKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2luZmVybm8nXSwgZmFjdG9yeSkgOlxuXHQoZ2xvYmFsLkluZmVybm8gPSBnbG9iYWwuSW5mZXJubyB8fCB7fSwgZ2xvYmFsLkluZmVybm8uY3JlYXRlRWxlbWVudCA9IGZhY3RvcnkoZ2xvYmFsLkluZmVybm8pKTtcbn0odGhpcywgKGZ1bmN0aW9uIChpbmZlcm5vKSB7ICd1c2Ugc3RyaWN0JztcblxuLy8gdGhpcyBpcyBNVUNIIGZhc3RlciB0aGFuIC5jb25zdHJ1Y3RvciA9PT0gQXJyYXkgYW5kIGluc3RhbmNlb2YgQXJyYXlcbi8vIGluIE5vZGUgNyBhbmQgdGhlIGxhdGVyIHZlcnNpb25zIG9mIFY4LCBzbG93ZXIgaW4gb2xkZXIgdmVyc2lvbnMgdGhvdWdoXG5cbmZ1bmN0aW9uIGlzU3RhdGVmdWxDb21wb25lbnQobykge1xuICAgIHJldHVybiAhaXNVbmRlZmluZWQoby5wcm90b3R5cGUpICYmICFpc1VuZGVmaW5lZChvLnByb3RvdHlwZS5yZW5kZXIpO1xufVxuXG5mdW5jdGlvbiBpc051bGxPclVuZGVmKG9iaikge1xuICAgIHJldHVybiBpc1VuZGVmaW5lZChvYmopIHx8IGlzTnVsbChvYmopO1xufVxuZnVuY3Rpb24gaXNJbnZhbGlkKG9iaikge1xuICAgIHJldHVybiBpc051bGwob2JqKSB8fCBvYmogPT09IGZhbHNlIHx8IGlzVHJ1ZShvYmopIHx8IGlzVW5kZWZpbmVkKG9iaik7XG59XG5cbmZ1bmN0aW9uIGlzQXR0ckFuRXZlbnQoYXR0cikge1xuICAgIHJldHVybiBhdHRyWzBdID09PSAnbycgJiYgYXR0clsxXSA9PT0gJ24nICYmIGF0dHIubGVuZ3RoID4gMztcbn1cbmZ1bmN0aW9uIGlzU3RyaW5nKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJztcbn1cblxuZnVuY3Rpb24gaXNOdWxsKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IG51bGw7XG59XG5mdW5jdGlvbiBpc1RydWUob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzT2JqZWN0KG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnO1xufVxuXG52YXIgY29tcG9uZW50SG9va3MgPSB7XG4gICAgb25Db21wb25lbnRXaWxsTW91bnQ6IHRydWUsXG4gICAgb25Db21wb25lbnREaWRNb3VudDogdHJ1ZSxcbiAgICBvbkNvbXBvbmVudFdpbGxVbm1vdW50OiB0cnVlLFxuICAgIG9uQ29tcG9uZW50U2hvdWxkVXBkYXRlOiB0cnVlLFxuICAgIG9uQ29tcG9uZW50V2lsbFVwZGF0ZTogdHJ1ZSxcbiAgICBvbkNvbXBvbmVudERpZFVwZGF0ZTogdHJ1ZVxufTtcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQkMShuYW1lLCBwcm9wcykge1xuICAgIHZhciBfY2hpbGRyZW4gPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG4gICAgd2hpbGUgKCBsZW4tLSA+IDAgKSBfY2hpbGRyZW5bIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gKyAyIF07XG5cbiAgICBpZiAoaXNJbnZhbGlkKG5hbWUpIHx8IGlzT2JqZWN0KG5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW5mZXJubyBFcnJvcjogY3JlYXRlRWxlbWVudCgpIG5hbWUgcGFyYW1ldGVyIGNhbm5vdCBiZSB1bmRlZmluZWQsIG51bGwsIGZhbHNlIG9yIHRydWUsIEl0IG11c3QgYmUgYSBzdHJpbmcsIGNsYXNzIG9yIGZ1bmN0aW9uLicpO1xuICAgIH1cbiAgICB2YXIgY2hpbGRyZW4gPSBfY2hpbGRyZW47XG4gICAgdmFyIHJlZiA9IG51bGw7XG4gICAgdmFyIGtleSA9IG51bGw7XG4gICAgdmFyIGV2ZW50cyA9IG51bGw7XG4gICAgdmFyIGZsYWdzID0gMDtcbiAgICBpZiAoX2NoaWxkcmVuKSB7XG4gICAgICAgIGlmIChfY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IF9jaGlsZHJlblswXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChfY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNTdHJpbmcobmFtZSkpIHtcbiAgICAgICAgZmxhZ3MgPSAyIC8qIEh0bWxFbGVtZW50ICovO1xuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N2Zyc6XG4gICAgICAgICAgICAgICAgZmxhZ3MgPSAxMjggLyogU3ZnRWxlbWVudCAqLztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgICAgICAgICAgICBmbGFncyA9IDUxMiAvKiBJbnB1dEVsZW1lbnQgKi87XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgICAgICAgICAgZmxhZ3MgPSAxMDI0IC8qIFRleHRhcmVhRWxlbWVudCAqLztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgICAgICAgICAgZmxhZ3MgPSAyMDQ4IC8qIFNlbGVjdEVsZW1lbnQgKi87XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICB9XG4gICAgICAgIC8qXG4gICAgICAgICBUaGlzIGZpeGVzIGRlLW9wdGltaXNhdGlvbjpcbiAgICAgICAgIHVzZXMgb2JqZWN0IEtleXMgZm9yIGxvb3BpbmcgcHJvcHMgdG8gYXZvaWQgZGVsZXRpbmcgcHJvcHMgb2YgbG9vcGVkIG9iamVjdFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKHByb3BzKSkge1xuICAgICAgICAgICAgdmFyIHByb3BLZXlzID0gT2JqZWN0LmtleXMocHJvcHMpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wS2V5ID0gcHJvcEtleXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKHByb3BLZXkgPT09ICdrZXknKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IHByb3BzLmtleTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHByb3BzLmtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvcEtleSA9PT0gJ2NoaWxkcmVuJyAmJiBpc1VuZGVmaW5lZChjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjsgLy8gYWx3YXlzIGZhdm91ciBjaGlsZHJlbiBhcmdzLCBkZWZhdWx0IHRvIHByb3BzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3BLZXkgPT09ICdyZWYnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZiA9IHByb3BzLnJlZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNBdHRyQW5FdmVudChwcm9wS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRzID0ge307XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzW3Byb3BLZXldID0gcHJvcHNbcHJvcEtleV07XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwcm9wc1twcm9wS2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZsYWdzID0gaXNTdGF0ZWZ1bENvbXBvbmVudChuYW1lKSA/IDQgLyogQ29tcG9uZW50Q2xhc3MgKi8gOiA4IC8qIENvbXBvbmVudEZ1bmN0aW9uICovO1xuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgaWYgKCFwcm9wcykge1xuICAgICAgICAgICAgICAgIHByb3BzID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgY2hpbGRyZW4gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNOdWxsT3JVbmRlZihwcm9wcykpIHtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgVGhpcyBmaXhlcyBkZS1vcHRpbWlzYXRpb246XG4gICAgICAgICAgICAgdXNlcyBvYmplY3QgS2V5cyBmb3IgbG9vcGluZyBwcm9wcyB0byBhdm9pZCBkZWxldGluZyBwcm9wcyBvZiBsb29wZWQgb2JqZWN0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhciBwcm9wS2V5cyQxID0gT2JqZWN0LmtleXMocHJvcHMpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSQxID0gMDsgaSQxIDwgcHJvcEtleXMkMS5sZW5ndGg7IGkkMSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3BLZXkkMSA9IHByb3BLZXlzJDFbaSQxXTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50SG9va3NbcHJvcEtleSQxXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmID0ge307XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVmW3Byb3BLZXkkMV0gPSBwcm9wc1twcm9wS2V5JDFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9wS2V5JDEgPT09ICdrZXknKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IHByb3BzLmtleTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHByb3BzLmtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGluZmVybm8uY3JlYXRlVk5vZGUoZmxhZ3MsIG5hbWUsIHByb3BzLCBjaGlsZHJlbiwgZXZlbnRzLCBrZXksIHJlZik7XG59XG5cbnJldHVybiBjcmVhdGVFbGVtZW50JDE7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5mZXJuby9kaXN0L2luZmVybm8tY3JlYXRlLWVsZW1lbnQubm9kZS5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBpbmZlcm5vIHYxLjIuMlxuICogKGMpIDIwMTcgRG9taW5pYyBHYW5uYXdheVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KSA6XG5cdChmYWN0b3J5KChnbG9iYWwuSW5mZXJubyA9IGdsb2JhbC5JbmZlcm5vIHx8IHt9KSkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKGV4cG9ydHMpIHsgJ3VzZSBzdHJpY3QnO1xuXG52YXIgTk9fT1AgPSAnJE5PX09QJztcbnZhciBFUlJPUl9NU0cgPSAnYSBydW50aW1lIGVycm9yIG9jY3VyZWQhIFVzZSBJbmZlcm5vIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50IHRvIGZpbmQgdGhlIGVycm9yLic7XG52YXIgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50O1xuXG4vLyB0aGlzIGlzIE1VQ0ggZmFzdGVyIHRoYW4gLmNvbnN0cnVjdG9yID09PSBBcnJheSBhbmQgaW5zdGFuY2VvZiBBcnJheVxuLy8gaW4gTm9kZSA3IGFuZCB0aGUgbGF0ZXIgdmVyc2lvbnMgb2YgVjgsIHNsb3dlciBpbiBvbGRlciB2ZXJzaW9ucyB0aG91Z2hcbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbmZ1bmN0aW9uIGlzU3RhdGVmdWxDb21wb25lbnQobykge1xuICAgIHJldHVybiAhaXNVbmRlZmluZWQoby5wcm90b3R5cGUpICYmICFpc1VuZGVmaW5lZChvLnByb3RvdHlwZS5yZW5kZXIpO1xufVxuZnVuY3Rpb24gaXNTdHJpbmdPck51bWJlcihvYmopIHtcbiAgICB2YXIgdHlwZSA9IHR5cGVvZiBvYmo7XG4gICAgcmV0dXJuIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGUgPT09ICdudW1iZXInO1xufVxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZihvYmopIHtcbiAgICByZXR1cm4gaXNVbmRlZmluZWQob2JqKSB8fCBpc051bGwob2JqKTtcbn1cbmZ1bmN0aW9uIGlzSW52YWxpZChvYmopIHtcbiAgICByZXR1cm4gaXNOdWxsKG9iaikgfHwgb2JqID09PSBmYWxzZSB8fCBpc1RydWUob2JqKSB8fCBpc1VuZGVmaW5lZChvYmopO1xufVxuZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJztcbn1cbmZ1bmN0aW9uIGlzQXR0ckFuRXZlbnQoYXR0cikge1xuICAgIHJldHVybiBhdHRyWzBdID09PSAnbycgJiYgYXR0clsxXSA9PT0gJ24nICYmIGF0dHIubGVuZ3RoID4gMztcbn1cbmZ1bmN0aW9uIGlzU3RyaW5nKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJztcbn1cbmZ1bmN0aW9uIGlzTnVtYmVyKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnbnVtYmVyJztcbn1cbmZ1bmN0aW9uIGlzTnVsbChvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBudWxsO1xufVxuZnVuY3Rpb24gaXNUcnVlKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHRydWU7XG59XG5mdW5jdGlvbiBpc1VuZGVmaW5lZChvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc09iamVjdChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvID09PSAnb2JqZWN0Jztcbn1cbmZ1bmN0aW9uIHRocm93RXJyb3IobWVzc2FnZSkge1xuICAgIGlmICghbWVzc2FnZSkge1xuICAgICAgICBtZXNzYWdlID0gRVJST1JfTVNHO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoKFwiSW5mZXJubyBFcnJvcjogXCIgKyBtZXNzYWdlKSk7XG59XG5mdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG59XG52YXIgRU1QVFlfT0JKID0ge307XG5cbmZ1bmN0aW9uIGFwcGx5S2V5KGtleSwgdk5vZGUpIHtcbiAgICB2Tm9kZS5rZXkgPSBrZXk7XG4gICAgcmV0dXJuIHZOb2RlO1xufVxuZnVuY3Rpb24gYXBwbHlLZXlJZk1pc3Npbmcoa2V5LCB2Tm9kZSkge1xuICAgIGlmIChpc051bWJlcihrZXkpKSB7XG4gICAgICAgIGtleSA9IFwiLlwiICsga2V5O1xuICAgIH1cbiAgICBpZiAoaXNOdWxsKHZOb2RlLmtleSkgfHwgdk5vZGUua2V5WzBdID09PSAnLicpIHtcbiAgICAgICAgcmV0dXJuIGFwcGx5S2V5KGtleSwgdk5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gdk5vZGU7XG59XG5mdW5jdGlvbiBhcHBseUtleVByZWZpeChrZXksIHZOb2RlKSB7XG4gICAgdk5vZGUua2V5ID0ga2V5ICsgdk5vZGUua2V5O1xuICAgIHJldHVybiB2Tm9kZTtcbn1cbmZ1bmN0aW9uIF9ub3JtYWxpemVWTm9kZXMobm9kZXMsIHJlc3VsdCwgaW5kZXgsIGN1cnJlbnRLZXkpIHtcbiAgICBmb3IgKDsgaW5kZXggPCBub2Rlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIG4gPSBub2Rlc1tpbmRleF07XG4gICAgICAgIHZhciBrZXkgPSBjdXJyZW50S2V5ICsgXCIuXCIgKyBpbmRleDtcbiAgICAgICAgaWYgKCFpc0ludmFsaWQobikpIHtcbiAgICAgICAgICAgIGlmIChpc0FycmF5KG4pKSB7XG4gICAgICAgICAgICAgICAgX25vcm1hbGl6ZVZOb2RlcyhuLCByZXN1bHQsIDAsIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNTdHJpbmdPck51bWJlcihuKSkge1xuICAgICAgICAgICAgICAgICAgICBuID0gY3JlYXRlVGV4dFZOb2RlKG4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc1ZOb2RlKG4pICYmIG4uZG9tIHx8IChuLmtleSAmJiBuLmtleVswXSA9PT0gJy4nKSkge1xuICAgICAgICAgICAgICAgICAgICBuID0gY2xvbmVWTm9kZShuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzTnVsbChuLmtleSkgfHwgbi5rZXlbMF0gPT09ICcuJykge1xuICAgICAgICAgICAgICAgICAgICBuID0gYXBwbHlLZXkoa2V5LCBuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG4gPSBhcHBseUtleVByZWZpeChjdXJyZW50S2V5LCBuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBub3JtYWxpemVWTm9kZXMobm9kZXMpIHtcbiAgICB2YXIgbmV3Tm9kZXM7XG4gICAgLy8gd2UgYXNzaWduICQgd2hpY2ggYmFzaWNhbGx5IG1lYW5zIHdlJ3ZlIGZsYWdnZWQgdGhpcyBhcnJheSBmb3IgZnV0dXJlIG5vdGVcbiAgICAvLyBpZiBpdCBjb21lcyBiYWNrIGFnYWluLCB3ZSBuZWVkIHRvIGNsb25lIGl0LCBhcyBwZW9wbGUgYXJlIHVzaW5nIGl0XG4gICAgLy8gaW4gYW4gaW1tdXRhYmxlIHdheVxuICAgIC8vIHRzbGludDpkaXNhYmxlXG4gICAgaWYgKG5vZGVzWyckJ10pIHtcbiAgICAgICAgbm9kZXMgPSBub2Rlcy5zbGljZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbm9kZXNbJyQnXSA9IHRydWU7XG4gICAgfVxuICAgIC8vIHRzbGludDplbmFibGVcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBuID0gbm9kZXNbaV07XG4gICAgICAgIGlmIChpc0ludmFsaWQobikgfHwgaXNBcnJheShuKSkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IChuZXdOb2RlcyB8fCBub2Rlcykuc2xpY2UoMCwgaSk7XG4gICAgICAgICAgICBfbm9ybWFsaXplVk5vZGVzKG5vZGVzLCByZXN1bHQsIGksIFwiXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1N0cmluZ09yTnVtYmVyKG4pKSB7XG4gICAgICAgICAgICBpZiAoIW5ld05vZGVzKSB7XG4gICAgICAgICAgICAgICAgbmV3Tm9kZXMgPSBub2Rlcy5zbGljZSgwLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld05vZGVzLnB1c2goYXBwbHlLZXlJZk1pc3NpbmcoaSwgY3JlYXRlVGV4dFZOb2RlKG4pKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKGlzVk5vZGUobikgJiYgbi5kb20pIHx8IChpc051bGwobi5rZXkpICYmICEobi5mbGFncyAmIDY0IC8qIEhhc05vbktleWVkQ2hpbGRyZW4gKi8pKSkge1xuICAgICAgICAgICAgaWYgKCFuZXdOb2Rlcykge1xuICAgICAgICAgICAgICAgIG5ld05vZGVzID0gbm9kZXMuc2xpY2UoMCwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdOb2Rlcy5wdXNoKGFwcGx5S2V5SWZNaXNzaW5nKGksIGNsb25lVk5vZGUobikpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXdOb2Rlcykge1xuICAgICAgICAgICAgbmV3Tm9kZXMucHVzaChhcHBseUtleUlmTWlzc2luZyhpLCBjbG9uZVZOb2RlKG4pKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld05vZGVzIHx8IG5vZGVzO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplQ2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZVZOb2RlcyhjaGlsZHJlbik7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzVk5vZGUoY2hpbGRyZW4pICYmIGNoaWxkcmVuLmRvbSkge1xuICAgICAgICByZXR1cm4gY2xvbmVWTm9kZShjaGlsZHJlbik7XG4gICAgfVxuICAgIHJldHVybiBjaGlsZHJlbjtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVByb3BzKHZOb2RlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgICBpZiAoISh2Tm9kZS5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykgJiYgaXNOdWxsT3JVbmRlZihjaGlsZHJlbikgJiYgIWlzTnVsbE9yVW5kZWYocHJvcHMuY2hpbGRyZW4pKSB7XG4gICAgICAgIHZOb2RlLmNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG4gICAgfVxuICAgIGlmIChwcm9wcy5yZWYpIHtcbiAgICAgICAgdk5vZGUucmVmID0gcHJvcHMucmVmO1xuICAgICAgICBkZWxldGUgcHJvcHMucmVmO1xuICAgIH1cbiAgICBpZiAocHJvcHMuZXZlbnRzKSB7XG4gICAgICAgIHZOb2RlLmV2ZW50cyA9IHByb3BzLmV2ZW50cztcbiAgICB9XG4gICAgaWYgKCFpc051bGxPclVuZGVmKHByb3BzLmtleSkpIHtcbiAgICAgICAgdk5vZGUua2V5ID0gcHJvcHMua2V5O1xuICAgICAgICBkZWxldGUgcHJvcHMua2V5O1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNvcHlQcm9wc1RvKGNvcHlGcm9tLCBjb3B5VG8pIHtcbiAgICBmb3IgKHZhciBwcm9wIGluIGNvcHlGcm9tKSB7XG4gICAgICAgIGlmIChpc1VuZGVmaW5lZChjb3B5VG9bcHJvcF0pKSB7XG4gICAgICAgICAgICBjb3B5VG9bcHJvcF0gPSBjb3B5RnJvbVtwcm9wXTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZUVsZW1lbnQodHlwZSwgdk5vZGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ3N2ZycpIHtcbiAgICAgICAgdk5vZGUuZmxhZ3MgPSAxMjggLyogU3ZnRWxlbWVudCAqLztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICB2Tm9kZS5mbGFncyA9IDUxMiAvKiBJbnB1dEVsZW1lbnQgKi87XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgIHZOb2RlLmZsYWdzID0gMjA0OCAvKiBTZWxlY3RFbGVtZW50ICovO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAndGV4dGFyZWEnKSB7XG4gICAgICAgIHZOb2RlLmZsYWdzID0gMTAyNCAvKiBUZXh0YXJlYUVsZW1lbnQgKi87XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdtZWRpYScpIHtcbiAgICAgICAgdk5vZGUuZmxhZ3MgPSAyNTYgLyogTWVkaWFFbGVtZW50ICovO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdk5vZGUuZmxhZ3MgPSAyIC8qIEh0bWxFbGVtZW50ICovO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZSh2Tm9kZSkge1xuICAgIHZhciBwcm9wcyA9IHZOb2RlLnByb3BzO1xuICAgIHZhciBoYXNQcm9wcyA9ICFpc051bGwocHJvcHMpO1xuICAgIHZhciB0eXBlID0gdk5vZGUudHlwZTtcbiAgICB2YXIgY2hpbGRyZW4gPSB2Tm9kZS5jaGlsZHJlbjtcbiAgICAvLyBjb252ZXJ0IGEgd3JvbmdseSBjcmVhdGVkIHR5cGUgYmFjayB0byBlbGVtZW50XG4gICAgaWYgKGlzU3RyaW5nKHR5cGUpICYmICh2Tm9kZS5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykpIHtcbiAgICAgICAgbm9ybWFsaXplRWxlbWVudCh0eXBlLCB2Tm9kZSk7XG4gICAgICAgIGlmIChoYXNQcm9wcyAmJiBwcm9wcy5jaGlsZHJlbikge1xuICAgICAgICAgICAgdk5vZGUuY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGhhc1Byb3BzKSB7XG4gICAgICAgIG5vcm1hbGl6ZVByb3BzKHZOb2RlLCBwcm9wcywgY2hpbGRyZW4pO1xuICAgIH1cbiAgICBpZiAoIWlzSW52YWxpZChjaGlsZHJlbikpIHtcbiAgICAgICAgdk5vZGUuY2hpbGRyZW4gPSBub3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbik7XG4gICAgfVxuICAgIGlmIChoYXNQcm9wcyAmJiAhaXNJbnZhbGlkKHByb3BzLmNoaWxkcmVuKSkge1xuICAgICAgICBwcm9wcy5jaGlsZHJlbiA9IG5vcm1hbGl6ZUNoaWxkcmVuKHByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgLy8gVGhpcyBjb2RlIHdpbGwgYmUgc3RyaXBwZWQgb3V0IGZyb20gcHJvZHVjdGlvbiBDT0RFXG4gICAgICAgIC8vIEl0IHdpbGwgaGVscCB1c2VycyB0byB0cmFjayBlcnJvcnMgaW4gdGhlaXIgYXBwbGljYXRpb25zLlxuICAgICAgICB2YXIgdmVyaWZ5S2V5cyA9IGZ1bmN0aW9uICh2Tm9kZXMpIHtcbiAgICAgICAgICAgIHZhciBrZXlWYWx1ZXMgPSB2Tm9kZXMubWFwKGZ1bmN0aW9uICh2bm9kZSkgeyByZXR1cm4gdm5vZGUua2V5OyB9KTtcbiAgICAgICAgICAgIGtleVZhbHVlcy5zb21lKGZ1bmN0aW9uIChpdGVtLCBpZHgpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGFzRHVwbGljYXRlID0ga2V5VmFsdWVzLmluZGV4T2YoaXRlbSkgIT09IGlkeDtcbiAgICAgICAgICAgICAgICBpZiAoaGFzRHVwbGljYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHdhcm5pbmcoJ0luZmVybm8gbm9ybWFsaXNhdGlvbiguLi4pOiBFbmNvdW50ZXJlZCB0d28gY2hpbGRyZW4gd2l0aCBzYW1lIGtleSwgYWxsIGtleXMgbXVzdCBiZSB1bmlxdWUgd2l0aGluIGl0cyBzaWJsaW5ncy4gRHVwbGljYXRlZCBrZXkgaXM6JyArIGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaGFzRHVwbGljYXRlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh2Tm9kZS5jaGlsZHJlbiAmJiBBcnJheS5pc0FycmF5KHZOb2RlLmNoaWxkcmVuKSkge1xuICAgICAgICAgICAgdmVyaWZ5S2V5cyh2Tm9kZS5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnZhciBvcHRpb25zID0ge1xuICAgIHJlY3ljbGluZ0VuYWJsZWQ6IHRydWUsXG4gICAgZmluZERPTU5vZGVFbmFibGVkOiBmYWxzZSxcbiAgICByb290czogbnVsbCxcbiAgICBjcmVhdGVWTm9kZTogbnVsbCxcbiAgICBiZWZvcmVSZW5kZXI6IG51bGwsXG4gICAgYWZ0ZXJSZW5kZXI6IG51bGwsXG4gICAgYWZ0ZXJNb3VudDogbnVsbCxcbiAgICBhZnRlclVwZGF0ZTogbnVsbCxcbiAgICBiZWZvcmVVbm1vdW50OiBudWxsXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVWTm9kZShmbGFncywgdHlwZSwgcHJvcHMsIGNoaWxkcmVuLCBldmVudHMsIGtleSwgcmVmLCBub05vcm1hbGlzZSkge1xuICAgIGlmIChmbGFncyAmIDE2IC8qIENvbXBvbmVudFVua25vd24gKi8pIHtcbiAgICAgICAgZmxhZ3MgPSBpc1N0YXRlZnVsQ29tcG9uZW50KHR5cGUpID8gNCAvKiBDb21wb25lbnRDbGFzcyAqLyA6IDggLyogQ29tcG9uZW50RnVuY3Rpb24gKi87XG4gICAgfVxuICAgIHZhciB2Tm9kZSA9IHtcbiAgICAgICAgY2hpbGRyZW46IGlzVW5kZWZpbmVkKGNoaWxkcmVuKSA/IG51bGwgOiBjaGlsZHJlbixcbiAgICAgICAgZG9tOiBudWxsLFxuICAgICAgICBldmVudHM6IGV2ZW50cyB8fCBudWxsLFxuICAgICAgICBmbGFnczogZmxhZ3MsXG4gICAgICAgIGtleTogaXNVbmRlZmluZWQoa2V5KSA/IG51bGwgOiBrZXksXG4gICAgICAgIHByb3BzOiBwcm9wcyB8fCBudWxsLFxuICAgICAgICByZWY6IHJlZiB8fCBudWxsLFxuICAgICAgICB0eXBlOiB0eXBlXG4gICAgfTtcbiAgICBpZiAoIW5vTm9ybWFsaXNlKSB7XG4gICAgICAgIG5vcm1hbGl6ZSh2Tm9kZSk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmNyZWF0ZVZOb2RlKSB7XG4gICAgICAgIG9wdGlvbnMuY3JlYXRlVk5vZGUodk5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gdk5vZGU7XG59XG5mdW5jdGlvbiBjbG9uZVZOb2RlKHZOb2RlVG9DbG9uZSwgcHJvcHMpIHtcbiAgICB2YXIgX2NoaWxkcmVuID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuICAgIHdoaWxlICggbGVuLS0gPiAwICkgX2NoaWxkcmVuWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMiBdO1xuXG4gICAgdmFyIGNoaWxkcmVuID0gX2NoaWxkcmVuO1xuICAgIGlmIChfY2hpbGRyZW4ubGVuZ3RoID4gMCAmJiAhaXNOdWxsKF9jaGlsZHJlblswXSkpIHtcbiAgICAgICAgaWYgKCFwcm9wcykge1xuICAgICAgICAgICAgcHJvcHMgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX2NoaWxkcmVuLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgY2hpbGRyZW4gPSBfY2hpbGRyZW5bMF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzVW5kZWZpbmVkKHByb3BzLmNoaWxkcmVuKSkge1xuICAgICAgICAgICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIGlmIChpc0FycmF5KHByb3BzLmNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLmNvbmNhdChjaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGlsZHJlbiA9IFtwcm9wcy5jaGlsZHJlbl0uY29uY2F0KGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNBcnJheShwcm9wcy5jaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2hpbGRyZW4ucHVzaChjaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGlsZHJlbiA9IFtwcm9wcy5jaGlsZHJlbl07XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuLnB1c2goY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGlsZHJlbiA9IG51bGw7XG4gICAgdmFyIG5ld1ZOb2RlO1xuICAgIGlmIChpc0FycmF5KHZOb2RlVG9DbG9uZSkpIHtcbiAgICAgICAgdmFyIHRtcEFycmF5ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdk5vZGVUb0Nsb25lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0bXBBcnJheS5wdXNoKGNsb25lVk5vZGUodk5vZGVUb0Nsb25lW2ldKSk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3Vk5vZGUgPSB0bXBBcnJheTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBmbGFncyA9IHZOb2RlVG9DbG9uZS5mbGFncztcbiAgICAgICAgdmFyIGV2ZW50cyA9IHZOb2RlVG9DbG9uZS5ldmVudHMgfHwgKHByb3BzICYmIHByb3BzLmV2ZW50cykgfHwgbnVsbDtcbiAgICAgICAgdmFyIGtleSA9ICFpc051bGxPclVuZGVmKHZOb2RlVG9DbG9uZS5rZXkpID8gdk5vZGVUb0Nsb25lLmtleSA6IChwcm9wcyA/IHByb3BzLmtleSA6IG51bGwpO1xuICAgICAgICB2YXIgcmVmID0gdk5vZGVUb0Nsb25lLnJlZiB8fCAocHJvcHMgPyBwcm9wcy5yZWYgOiBudWxsKTtcbiAgICAgICAgaWYgKGZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICBuZXdWTm9kZSA9IGNyZWF0ZVZOb2RlKGZsYWdzLCB2Tm9kZVRvQ2xvbmUudHlwZSwgT2JqZWN0LmFzc2lnbih7fSwgdk5vZGVUb0Nsb25lLnByb3BzLCBwcm9wcyksIG51bGwsIGV2ZW50cywga2V5LCByZWYsIHRydWUpO1xuICAgICAgICAgICAgdmFyIG5ld1Byb3BzID0gbmV3Vk5vZGUucHJvcHM7XG4gICAgICAgICAgICBpZiAobmV3UHJvcHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3Q2hpbGRyZW4gPSBuZXdQcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGFsc28gY2xvbmUgY29tcG9uZW50IGNoaWxkcmVuIHRoYXQgYXJlIGluIHByb3BzXG4gICAgICAgICAgICAgICAgLy8gYXMgdGhlIGNoaWxkcmVuIG1heSBhbHNvIGhhdmUgYmVlbiBob2lzdGVkXG4gICAgICAgICAgICAgICAgaWYgKG5ld0NoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0FycmF5KG5ld0NoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSQxID0gMDsgaSQxIDwgbmV3Q2hpbGRyZW4ubGVuZ3RoOyBpJDErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IG5ld0NoaWxkcmVuW2kkMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0ludmFsaWQoY2hpbGQpICYmIGlzVk5vZGUoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb3BzLmNoaWxkcmVuW2kkMV0gPSBjbG9uZVZOb2RlKGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNWTm9kZShuZXdDaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb3BzLmNoaWxkcmVuID0gY2xvbmVWTm9kZShuZXdDaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdWTm9kZS5jaGlsZHJlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZmxhZ3MgJiAzOTcwIC8qIEVsZW1lbnQgKi8pIHtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gKHByb3BzICYmIHByb3BzLmNoaWxkcmVuKSB8fCB2Tm9kZVRvQ2xvbmUuY2hpbGRyZW47XG4gICAgICAgICAgICBuZXdWTm9kZSA9IGNyZWF0ZVZOb2RlKGZsYWdzLCB2Tm9kZVRvQ2xvbmUudHlwZSwgT2JqZWN0LmFzc2lnbih7fSwgdk5vZGVUb0Nsb25lLnByb3BzLCBwcm9wcyksIGNoaWxkcmVuLCBldmVudHMsIGtleSwgcmVmLCAhY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZsYWdzICYgMSAvKiBUZXh0ICovKSB7XG4gICAgICAgICAgICBuZXdWTm9kZSA9IGNyZWF0ZVRleHRWTm9kZSh2Tm9kZVRvQ2xvbmUuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXdWTm9kZTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVZvaWRWTm9kZSgpIHtcbiAgICByZXR1cm4gY3JlYXRlVk5vZGUoNDA5NiAvKiBWb2lkICovKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVRleHRWTm9kZSh0ZXh0KSB7XG4gICAgcmV0dXJuIGNyZWF0ZVZOb2RlKDEgLyogVGV4dCAqLywgbnVsbCwgbnVsbCwgdGV4dCwgbnVsbCwgbnVsbCwgbnVsbCwgdHJ1ZSk7XG59XG5mdW5jdGlvbiBpc1ZOb2RlKG8pIHtcbiAgICByZXR1cm4gISFvLmZsYWdzO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3REZWZhdWx0cyhzdHJpbmcsIG9iamVjdCwgdmFsdWUpIHtcbiAgICAvKiBlc2xpbnQgbm8tcmV0dXJuLWFzc2lnbjogMCAqL1xuICAgIHN0cmluZy5zcGxpdCgnLCcpLmZvckVhY2goZnVuY3Rpb24gKGkpIHsgcmV0dXJuIG9iamVjdFtpXSA9IHZhbHVlOyB9KTtcbn1cbnZhciB4bGlua05TID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnO1xudmFyIHhtbE5TID0gJ2h0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZSc7XG52YXIgc3ZnTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xudmFyIHN0cmljdFByb3BzID0ge307XG52YXIgYm9vbGVhblByb3BzID0ge307XG52YXIgbmFtZXNwYWNlcyA9IHt9O1xudmFyIGlzVW5pdGxlc3NOdW1iZXIgPSB7fTtcbnZhciBza2lwUHJvcHMgPSB7fTtcbnZhciBkZWh5cGhlblByb3BzID0ge1xuICAgIGh0dHBFcXVpdjogJ2h0dHAtZXF1aXYnLFxuICAgIGFjY2VwdENoYXJzZXQ6ICdhY2NlcHQtY2hhcnNldCdcbn07XG52YXIgcHJvYmFibHlLZWJhYlByb3BzID0gL14oYWNjZW50SHxhcmFiaWNGfGNhcEh8Zm9udFtGU1ZXXXxnbHlwaFtOT118aG9yaXpbQU9dfHBhbm9zZTF8cmVuZGVyaW5nSXxzdHJpa2V0aHJvdWdoW1BUXXx1bmRlcmxpbmVbUFRdfHZbQUhJTV18dmVydFtBT118eEh8YWxpZ25tZW50QnxiYXNlbGluZVN8Y2xpcFtQUl18Y29sb3JbSVBSXXxkb21pbmFudEJ8ZW5hYmxlQnxmaWxsW09SXXxmbG9vZFtDT0ZdfGltYWdlUnxsZXR0ZXJTfGxpZ2h0aW5nQ3xtYXJrZXJbRU1TXXxwb2ludGVyRXxzaGFwZVJ8c3RvcFtDT118c3Ryb2tlW0RMTU9XXXx0ZXh0W0FEUl18dW5pY29kZUJ8d29yZFN8d3JpdGluZ00pLiovO1xuZnVuY3Rpb24ga2ViYWJpemUoc3RyLCBzbWFsbExldHRlciwgbGFyZ2VMZXR0ZXIpIHtcbiAgICByZXR1cm4gKHNtYWxsTGV0dGVyICsgXCItXCIgKyAobGFyZ2VMZXR0ZXIudG9Mb3dlckNhc2UoKSkpO1xufVxudmFyIGRlbGVnYXRlZFByb3BzID0ge307XG5jb25zdHJ1Y3REZWZhdWx0cygneGxpbms6aHJlZix4bGluazphcmNyb2xlLHhsaW5rOmFjdHVhdGUseGxpbms6cm9sZSx4bGluazp0aXRsZWYseGxpbms6dHlwZScsIG5hbWVzcGFjZXMsIHhsaW5rTlMpO1xuY29uc3RydWN0RGVmYXVsdHMoJ3htbDpiYXNlLHhtbDpsYW5nLHhtbDpzcGFjZScsIG5hbWVzcGFjZXMsIHhtbE5TKTtcbmNvbnN0cnVjdERlZmF1bHRzKCd2b2x1bWUsZGVmYXVsdFZhbHVlLGRlZmF1bHRDaGVja2VkJywgc3RyaWN0UHJvcHMsIHRydWUpO1xuY29uc3RydWN0RGVmYXVsdHMoJ2NoaWxkcmVuLGNoaWxkcmVuVHlwZSxyZWYsa2V5LHNlbGVjdGVkLGNoZWNrZWQsbXVsdGlwbGUnLCBza2lwUHJvcHMsIHRydWUpO1xuY29uc3RydWN0RGVmYXVsdHMoJ29uQ2xpY2ssb25Nb3VzZURvd24sb25Nb3VzZVVwLG9uTW91c2VNb3ZlLG9uU3VibWl0LG9uRGJsQ2xpY2ssb25LZXlEb3duLG9uS2V5VXAsb25LZXlQcmVzcycsIGRlbGVnYXRlZFByb3BzLCB0cnVlKTtcbmNvbnN0cnVjdERlZmF1bHRzKCdtdXRlZCxzY29wZWQsbG9vcCxvcGVuLGNoZWNrZWQsZGVmYXVsdCxjYXB0dXJlLGRpc2FibGVkLHJlYWRPbmx5LHJlcXVpcmVkLGF1dG9wbGF5LGNvbnRyb2xzLHNlYW1sZXNzLHJldmVyc2VkLGFsbG93ZnVsbHNjcmVlbixub3ZhbGlkYXRlLGhpZGRlbicsIGJvb2xlYW5Qcm9wcywgdHJ1ZSk7XG5jb25zdHJ1Y3REZWZhdWx0cygnYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQsYm9yZGVySW1hZ2VPdXRzZXQsYm9yZGVySW1hZ2VTbGljZSxib3JkZXJJbWFnZVdpZHRoLGJveEZsZXgsYm94RmxleEdyb3VwLGJveE9yZGluYWxHcm91cCxjb2x1bW5Db3VudCxmbGV4LGZsZXhHcm93LGZsZXhQb3NpdGl2ZSxmbGV4U2hyaW5rLGZsZXhOZWdhdGl2ZSxmbGV4T3JkZXIsZ3JpZFJvdyxncmlkQ29sdW1uLGZvbnRXZWlnaHQsbGluZUNsYW1wLGxpbmVIZWlnaHQsb3BhY2l0eSxvcmRlcixvcnBoYW5zLHRhYlNpemUsd2lkb3dzLHpJbmRleCx6b29tLGZpbGxPcGFjaXR5LGZsb29kT3BhY2l0eSxzdG9wT3BhY2l0eSxzdHJva2VEYXNoYXJyYXksc3Ryb2tlRGFzaG9mZnNldCxzdHJva2VNaXRlcmxpbWl0LHN0cm9rZU9wYWNpdHksc3Ryb2tlV2lkdGgsJywgaXNVbml0bGVzc051bWJlciwgdHJ1ZSk7XG5cbnZhciBMaWZlY3ljbGUgPSBmdW5jdGlvbiBMaWZlY3ljbGUoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICB0aGlzLmZhc3RVbm1vdW50ID0gdHJ1ZTtcbn07XG5MaWZlY3ljbGUucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIgKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG59O1xuTGlmZWN5Y2xlLnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24gdHJpZ2dlciAoKSB7XG4gICAgICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzJDEubGlzdGVuZXJzW2ldKCk7XG4gICAgfVxufTtcblxudmFyIGlzaU9TID0gaXNCcm93c2VyICYmICEhbmF2aWdhdG9yLnBsYXRmb3JtICYmIC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSk7XG52YXIgZGVsZWdhdGVkRXZlbnRzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gaGFuZGxlRXZlbnQobmFtZSwgbGFzdEV2ZW50LCBuZXh0RXZlbnQsIGRvbSkge1xuICAgIHZhciBkZWxlZ2F0ZWRSb290cyA9IGRlbGVnYXRlZEV2ZW50cy5nZXQobmFtZSk7XG4gICAgaWYgKG5leHRFdmVudCkge1xuICAgICAgICBpZiAoIWRlbGVnYXRlZFJvb3RzKSB7XG4gICAgICAgICAgICBkZWxlZ2F0ZWRSb290cyA9IHsgaXRlbXM6IG5ldyBNYXAoKSwgY291bnQ6IDAsIGRvY0V2ZW50OiBudWxsIH07XG4gICAgICAgICAgICB2YXIgZG9jRXZlbnQgPSBhdHRhY2hFdmVudFRvRG9jdW1lbnQobmFtZSwgZGVsZWdhdGVkUm9vdHMpO1xuICAgICAgICAgICAgZGVsZWdhdGVkUm9vdHMuZG9jRXZlbnQgPSBkb2NFdmVudDtcbiAgICAgICAgICAgIGRlbGVnYXRlZEV2ZW50cy5zZXQobmFtZSwgZGVsZWdhdGVkUm9vdHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbGFzdEV2ZW50KSB7XG4gICAgICAgICAgICBkZWxlZ2F0ZWRSb290cy5jb3VudCsrO1xuICAgICAgICAgICAgaWYgKGlzaU9TICYmIG5hbWUgPT09ICdvbkNsaWNrJykge1xuICAgICAgICAgICAgICAgIHRyYXBDbGlja09uTm9uSW50ZXJhY3RpdmVFbGVtZW50KGRvbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGVsZWdhdGVkUm9vdHMuaXRlbXMuc2V0KGRvbSwgbmV4dEV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZGVsZWdhdGVkUm9vdHMpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlZFJvb3RzLml0ZW1zLmhhcyhkb20pKSB7XG4gICAgICAgICAgICBkZWxlZ2F0ZWRSb290cy5jb3VudC0tO1xuICAgICAgICAgICAgZGVsZWdhdGVkUm9vdHMuaXRlbXMuZGVsZXRlKGRvbSk7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVkUm9vdHMuY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG5vcm1hbGl6ZUV2ZW50TmFtZShuYW1lKSwgZGVsZWdhdGVkUm9vdHMuZG9jRXZlbnQpO1xuICAgICAgICAgICAgICAgIGRlbGVnYXRlZEV2ZW50cy5kZWxldGUobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGV2ZW50LCBkb20sIGl0ZW1zLCBjb3VudCwgZXZlbnREYXRhKSB7XG4gICAgdmFyIGV2ZW50c1RvVHJpZ2dlciA9IGl0ZW1zLmdldChkb20pO1xuICAgIGlmIChldmVudHNUb1RyaWdnZXIpIHtcbiAgICAgICAgY291bnQtLTtcbiAgICAgICAgLy8gbGlua0V2ZW50IG9iamVjdFxuICAgICAgICBldmVudERhdGEuZG9tID0gZG9tO1xuICAgICAgICBpZiAoZXZlbnRzVG9UcmlnZ2VyLmV2ZW50KSB7XG4gICAgICAgICAgICBldmVudHNUb1RyaWdnZXIuZXZlbnQoZXZlbnRzVG9UcmlnZ2VyLmRhdGEsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50c1RvVHJpZ2dlcihldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50RGF0YS5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgIHZhciBwYXJlbnREb20gPSBkb20ucGFyZW50Tm9kZTtcbiAgICAgICAgaWYgKHBhcmVudERvbSB8fCBwYXJlbnREb20gPT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZXZlbnQsIHBhcmVudERvbSwgaXRlbXMsIGNvdW50LCBldmVudERhdGEpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gbm9ybWFsaXplRXZlbnROYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZS5zdWJzdHIoMikudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIGF0dGFjaEV2ZW50VG9Eb2N1bWVudChuYW1lLCBkZWxlZ2F0ZWRSb290cykge1xuICAgIHZhciBkb2NFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgZXZlbnREYXRhID0ge1xuICAgICAgICAgICAgc3RvcFByb3BhZ2F0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgIGRvbTogZG9jdW1lbnRcbiAgICAgICAgfTtcbiAgICAgICAgLy8gd2UgaGF2ZSB0byBkbyB0aGlzIGFzIHNvbWUgYnJvd3NlcnMgcmVjeWNsZSB0aGUgc2FtZSBFdmVudCBiZXR3ZWVuIGNhbGxzXG4gICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gbWFrZSB0aGUgcHJvcGVydHkgY29uZmlndXJhYmxlXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldmVudCwgJ2N1cnJlbnRUYXJnZXQnLCB7XG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnREYXRhLmRvbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGV2ZW50RGF0YS5zdG9wUHJvcGFnYXRpb24gPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgY291bnQgPSBkZWxlZ2F0ZWRSb290cy5jb3VudDtcbiAgICAgICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChldmVudCwgZXZlbnQudGFyZ2V0LCBkZWxlZ2F0ZWRSb290cy5pdGVtcywgY291bnQsIGV2ZW50RGF0YSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobm9ybWFsaXplRXZlbnROYW1lKG5hbWUpLCBkb2NFdmVudCk7XG4gICAgcmV0dXJuIGRvY0V2ZW50O1xufVxuZnVuY3Rpb24gZW1wdHlGbigpIHsgfVxuZnVuY3Rpb24gdHJhcENsaWNrT25Ob25JbnRlcmFjdGl2ZUVsZW1lbnQoZG9tKSB7XG4gICAgLy8gTW9iaWxlIFNhZmFyaSBkb2VzIG5vdCBmaXJlIHByb3Blcmx5IGJ1YmJsZSBjbGljayBldmVudHMgb25cbiAgICAvLyBub24taW50ZXJhY3RpdmUgZWxlbWVudHMsIHdoaWNoIG1lYW5zIGRlbGVnYXRlZCBjbGljayBsaXN0ZW5lcnMgZG8gbm90XG4gICAgLy8gZmlyZS4gVGhlIHdvcmthcm91bmQgZm9yIHRoaXMgYnVnIGludm9sdmVzIGF0dGFjaGluZyBhbiBlbXB0eSBjbGlja1xuICAgIC8vIGxpc3RlbmVyIG9uIHRoZSB0YXJnZXQgbm9kZS5cbiAgICAvLyBodHRwOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxMC8wOS9jbGlja19ldmVudF9kZWwuaHRtbFxuICAgIC8vIEp1c3Qgc2V0IGl0IHVzaW5nIHRoZSBvbmNsaWNrIHByb3BlcnR5IHNvIHRoYXQgd2UgZG9uJ3QgaGF2ZSB0byBtYW5hZ2UgYW55XG4gICAgLy8gYm9va2tlZXBpbmcgZm9yIGl0LiBOb3Qgc3VyZSBpZiB3ZSBuZWVkIHRvIGNsZWFyIGl0IHdoZW4gdGhlIGxpc3RlbmVyIGlzXG4gICAgLy8gcmVtb3ZlZC5cbiAgICAvLyBUT0RPOiBPbmx5IGRvIHRoaXMgZm9yIHRoZSByZWxldmFudCBTYWZhcmlzIG1heWJlP1xuICAgIGRvbS5vbmNsaWNrID0gZW1wdHlGbjtcbn1cblxudmFyIGNvbXBvbmVudFBvb2xzID0gbmV3IE1hcCgpO1xudmFyIGVsZW1lbnRQb29scyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIHJlY3ljbGVFbGVtZW50KHZOb2RlLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSB7XG4gICAgdmFyIHRhZyA9IHZOb2RlLnR5cGU7XG4gICAgdmFyIGtleSA9IHZOb2RlLmtleTtcbiAgICB2YXIgcG9vbHMgPSBlbGVtZW50UG9vbHMuZ2V0KHRhZyk7XG4gICAgaWYgKCFpc1VuZGVmaW5lZChwb29scykpIHtcbiAgICAgICAgdmFyIHBvb2wgPSBrZXkgPT09IG51bGwgPyBwb29scy5ub25LZXllZCA6IHBvb2xzLmtleWVkLmdldChrZXkpO1xuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKHBvb2wpKSB7XG4gICAgICAgICAgICB2YXIgcmVjeWNsZWRWTm9kZSA9IHBvb2wucG9wKCk7XG4gICAgICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKHJlY3ljbGVkVk5vZGUpKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hFbGVtZW50KHJlY3ljbGVkVk5vZGUsIHZOb2RlLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdk5vZGUuZG9tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gcG9vbEVsZW1lbnQodk5vZGUpIHtcbiAgICB2YXIgdGFnID0gdk5vZGUudHlwZTtcbiAgICB2YXIga2V5ID0gdk5vZGUua2V5O1xuICAgIHZhciBwb29scyA9IGVsZW1lbnRQb29scy5nZXQodGFnKTtcbiAgICBpZiAoaXNVbmRlZmluZWQocG9vbHMpKSB7XG4gICAgICAgIHBvb2xzID0ge1xuICAgICAgICAgICAgbm9uS2V5ZWQ6IFtdLFxuICAgICAgICAgICAga2V5ZWQ6IG5ldyBNYXAoKVxuICAgICAgICB9O1xuICAgICAgICBlbGVtZW50UG9vbHMuc2V0KHRhZywgcG9vbHMpO1xuICAgIH1cbiAgICBpZiAoaXNOdWxsKGtleSkpIHtcbiAgICAgICAgcG9vbHMubm9uS2V5ZWQucHVzaCh2Tm9kZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgcG9vbCA9IHBvb2xzLmtleWVkLmdldChrZXkpO1xuICAgICAgICBpZiAoaXNVbmRlZmluZWQocG9vbCkpIHtcbiAgICAgICAgICAgIHBvb2wgPSBbXTtcbiAgICAgICAgICAgIHBvb2xzLmtleWVkLnNldChrZXksIHBvb2wpO1xuICAgICAgICB9XG4gICAgICAgIHBvb2wucHVzaCh2Tm9kZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gcmVjeWNsZUNvbXBvbmVudCh2Tm9kZSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIHZhciB0eXBlID0gdk5vZGUudHlwZTtcbiAgICB2YXIga2V5ID0gdk5vZGUua2V5O1xuICAgIHZhciBwb29scyA9IGNvbXBvbmVudFBvb2xzLmdldCh0eXBlKTtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHBvb2xzKSkge1xuICAgICAgICB2YXIgcG9vbCA9IGtleSA9PT0gbnVsbCA/IHBvb2xzLm5vbktleWVkIDogcG9vbHMua2V5ZWQuZ2V0KGtleSk7XG4gICAgICAgIGlmICghaXNVbmRlZmluZWQocG9vbCkpIHtcbiAgICAgICAgICAgIHZhciByZWN5Y2xlZFZOb2RlID0gcG9vbC5wb3AoKTtcbiAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQocmVjeWNsZWRWTm9kZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmxhZ3MgPSB2Tm9kZS5mbGFncztcbiAgICAgICAgICAgICAgICB2YXIgZmFpbGVkID0gcGF0Y2hDb21wb25lbnQocmVjeWNsZWRWTm9kZSwgdk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGZsYWdzICYgNCAvKiBDb21wb25lbnRDbGFzcyAqLywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFmYWlsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZOb2RlLmRvbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBwb29sQ29tcG9uZW50KHZOb2RlKSB7XG4gICAgdmFyIHR5cGUgPSB2Tm9kZS50eXBlO1xuICAgIHZhciBrZXkgPSB2Tm9kZS5rZXk7XG4gICAgdmFyIGhvb2tzID0gdk5vZGUucmVmO1xuICAgIHZhciBub25SZWN5Y2xlSG9va3MgPSBob29rcyAmJiAoaG9va3Mub25Db21wb25lbnRXaWxsTW91bnQgfHxcbiAgICAgICAgaG9va3Mub25Db21wb25lbnRXaWxsVW5tb3VudCB8fFxuICAgICAgICBob29rcy5vbkNvbXBvbmVudERpZE1vdW50IHx8XG4gICAgICAgIGhvb2tzLm9uQ29tcG9uZW50V2lsbFVwZGF0ZSB8fFxuICAgICAgICBob29rcy5vbkNvbXBvbmVudERpZFVwZGF0ZSk7XG4gICAgaWYgKG5vblJlY3ljbGVIb29rcykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBwb29scyA9IGNvbXBvbmVudFBvb2xzLmdldCh0eXBlKTtcbiAgICBpZiAoaXNVbmRlZmluZWQocG9vbHMpKSB7XG4gICAgICAgIHBvb2xzID0ge1xuICAgICAgICAgICAgbm9uS2V5ZWQ6IFtdLFxuICAgICAgICAgICAga2V5ZWQ6IG5ldyBNYXAoKVxuICAgICAgICB9O1xuICAgICAgICBjb21wb25lbnRQb29scy5zZXQodHlwZSwgcG9vbHMpO1xuICAgIH1cbiAgICBpZiAoaXNOdWxsKGtleSkpIHtcbiAgICAgICAgcG9vbHMubm9uS2V5ZWQucHVzaCh2Tm9kZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgcG9vbCA9IHBvb2xzLmtleWVkLmdldChrZXkpO1xuICAgICAgICBpZiAoaXNVbmRlZmluZWQocG9vbCkpIHtcbiAgICAgICAgICAgIHBvb2wgPSBbXTtcbiAgICAgICAgICAgIHBvb2xzLmtleWVkLnNldChrZXksIHBvb2wpO1xuICAgICAgICB9XG4gICAgICAgIHBvb2wucHVzaCh2Tm9kZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1bm1vdW50KHZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY2FuUmVjeWNsZSwgaXNSZWN5Y2xpbmcpIHtcbiAgICB2YXIgZmxhZ3MgPSB2Tm9kZS5mbGFncztcbiAgICBpZiAoZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgdW5tb3VudENvbXBvbmVudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNhblJlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxhZ3MgJiAzOTcwIC8qIEVsZW1lbnQgKi8pIHtcbiAgICAgICAgdW5tb3VudEVsZW1lbnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjYW5SZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWdzICYgKDEgLyogVGV4dCAqLyB8IDQwOTYgLyogVm9pZCAqLykpIHtcbiAgICAgICAgdW5tb3VudFZvaWRPclRleHQodk5vZGUsIHBhcmVudERvbSk7XG4gICAgfVxufVxuZnVuY3Rpb24gdW5tb3VudFZvaWRPclRleHQodk5vZGUsIHBhcmVudERvbSkge1xuICAgIGlmIChwYXJlbnREb20pIHtcbiAgICAgICAgcmVtb3ZlQ2hpbGQocGFyZW50RG9tLCB2Tm9kZS5kb20pO1xuICAgIH1cbn1cbnZhciBhbHJlYWR5VW5tb3VudGVkID0gbmV3IFdlYWtNYXAoKTtcbmZ1bmN0aW9uIHVubW91bnRDb21wb25lbnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjYW5SZWN5Y2xlLCBpc1JlY3ljbGluZykge1xuICAgIHZhciBpbnN0YW5jZSA9IHZOb2RlLmNoaWxkcmVuO1xuICAgIHZhciBmbGFncyA9IHZOb2RlLmZsYWdzO1xuICAgIHZhciBpc1N0YXRlZnVsQ29tcG9uZW50JCQxID0gZmxhZ3MgJiA0O1xuICAgIHZhciByZWYgPSB2Tm9kZS5yZWY7XG4gICAgdmFyIGRvbSA9IHZOb2RlLmRvbTtcbiAgICBpZiAoYWxyZWFkeVVubW91bnRlZC5oYXModk5vZGUpICYmICFpc1JlY3ljbGluZyAmJiAhcGFyZW50RG9tKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWxyZWFkeVVubW91bnRlZC5zZXQodk5vZGUpO1xuICAgIGlmICghaXNSZWN5Y2xpbmcpIHtcbiAgICAgICAgaWYgKGlzU3RhdGVmdWxDb21wb25lbnQkJDEpIHtcbiAgICAgICAgICAgIGlmICghaW5zdGFuY2UuX3VubW91bnRlZCkge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLl9pZ25vcmVTZXRTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5iZWZvcmVVbm1vdW50ICYmIG9wdGlvbnMuYmVmb3JlVW5tb3VudCh2Tm9kZSk7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuY29tcG9uZW50V2lsbFVubW91bnQgJiYgaW5zdGFuY2UuY29tcG9uZW50V2lsbFVubW91bnQoKTtcbiAgICAgICAgICAgICAgICBpZiAocmVmICYmICFpc1JlY3ljbGluZykge1xuICAgICAgICAgICAgICAgICAgICByZWYobnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluc3RhbmNlLl91bm1vdW50ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuZmluZERPTU5vZGVFbmFibGVkICYmIGNvbXBvbmVudFRvRE9NTm9kZU1hcC5kZWxldGUoaW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgIHZhciBzdWJMaWZlY3ljbGUgPSBpbnN0YW5jZS5fbGlmZWN5Y2xlO1xuICAgICAgICAgICAgICAgIGlmICghc3ViTGlmZWN5Y2xlLmZhc3RVbm1vdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHVubW91bnQoaW5zdGFuY2UuX2xhc3RJbnB1dCwgbnVsbCwgc3ViTGlmZWN5Y2xlLCBmYWxzZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICghaXNOdWxsT3JVbmRlZihyZWYpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKHJlZi5vbkNvbXBvbmVudFdpbGxVbm1vdW50KSkge1xuICAgICAgICAgICAgICAgICAgICByZWYub25Db21wb25lbnRXaWxsVW5tb3VudChkb20pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbGlmZWN5Y2xlLmZhc3RVbm1vdW50KSB7XG4gICAgICAgICAgICAgICAgdW5tb3VudChpbnN0YW5jZSwgbnVsbCwgbGlmZWN5Y2xlLCBmYWxzZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwYXJlbnREb20pIHtcbiAgICAgICAgdmFyIGxhc3RJbnB1dCA9IGluc3RhbmNlLl9sYXN0SW5wdXQ7XG4gICAgICAgIGlmIChpc051bGxPclVuZGVmKGxhc3RJbnB1dCkpIHtcbiAgICAgICAgICAgIGxhc3RJbnB1dCA9IGluc3RhbmNlO1xuICAgICAgICB9XG4gICAgICAgIHJlbW92ZUNoaWxkKHBhcmVudERvbSwgZG9tKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMucmVjeWNsaW5nRW5hYmxlZCAmJiAhaXNTdGF0ZWZ1bENvbXBvbmVudCQkMSAmJiAocGFyZW50RG9tIHx8IGNhblJlY3ljbGUpKSB7XG4gICAgICAgIHBvb2xDb21wb25lbnQodk5vZGUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVubW91bnRFbGVtZW50KHZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY2FuUmVjeWNsZSwgaXNSZWN5Y2xpbmcpIHtcbiAgICB2YXIgZG9tID0gdk5vZGUuZG9tO1xuICAgIHZhciByZWYgPSB2Tm9kZS5yZWY7XG4gICAgdmFyIGV2ZW50cyA9IHZOb2RlLmV2ZW50cztcbiAgICBpZiAoYWxyZWFkeVVubW91bnRlZC5oYXModk5vZGUpICYmICFpc1JlY3ljbGluZyAmJiAhcGFyZW50RG9tKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWxyZWFkeVVubW91bnRlZC5zZXQodk5vZGUpO1xuICAgIGlmICghbGlmZWN5Y2xlLmZhc3RVbm1vdW50KSB7XG4gICAgICAgIGlmIChyZWYgJiYgIWlzUmVjeWNsaW5nKSB7XG4gICAgICAgICAgICB1bm1vdW50UmVmKHJlZik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdk5vZGUuY2hpbGRyZW47XG4gICAgICAgIGlmICghaXNOdWxsT3JVbmRlZihjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIHVubW91bnRDaGlsZHJlbiQxKGNoaWxkcmVuLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWlzTnVsbChldmVudHMpKSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gZXZlbnRzKSB7XG4gICAgICAgICAgICAvLyBkbyBub3QgYWRkIGEgaGFzT3duUHJvcGVydHkgY2hlY2sgaGVyZSwgaXQgYWZmZWN0cyBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgcGF0Y2hFdmVudChuYW1lLCBldmVudHNbbmFtZV0sIG51bGwsIGRvbSk7XG4gICAgICAgICAgICBldmVudHNbbmFtZV0gPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwYXJlbnREb20pIHtcbiAgICAgICAgcmVtb3ZlQ2hpbGQocGFyZW50RG9tLCBkb20pO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5yZWN5Y2xpbmdFbmFibGVkICYmIChwYXJlbnREb20gfHwgY2FuUmVjeWNsZSkpIHtcbiAgICAgICAgcG9vbEVsZW1lbnQodk5vZGUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVubW91bnRDaGlsZHJlbiQxKGNoaWxkcmVuLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKSB7XG4gICAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKCFpc0ludmFsaWQoY2hpbGQpICYmIGlzT2JqZWN0KGNoaWxkKSkge1xuICAgICAgICAgICAgICAgIHVubW91bnQoY2hpbGQsIG51bGwsIGxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc09iamVjdChjaGlsZHJlbikpIHtcbiAgICAgICAgdW5tb3VudChjaGlsZHJlbiwgbnVsbCwgbGlmZWN5Y2xlLCBmYWxzZSwgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVubW91bnRSZWYocmVmKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24ocmVmKSkge1xuICAgICAgICByZWYobnVsbCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoaXNJbnZhbGlkKHJlZikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3dFcnJvcignc3RyaW5nIFwicmVmc1wiIGFyZSBub3Qgc3VwcG9ydGVkIGluIEluZmVybm8gMS4wLiBVc2UgY2FsbGJhY2sgXCJyZWZzXCIgaW5zdGVhZC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVDbGFzc0NvbXBvbmVudEluc3RhbmNlKHZOb2RlLCBDb21wb25lbnQsIHByb3BzLCBjb250ZXh0LCBpc1NWRykge1xuICAgIGlmIChpc1VuZGVmaW5lZChjb250ZXh0KSkge1xuICAgICAgICBjb250ZXh0ID0ge307XG4gICAgfVxuICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDb21wb25lbnQocHJvcHMsIGNvbnRleHQpO1xuICAgIGluc3RhbmNlLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIGlmIChpbnN0YW5jZS5wcm9wcyA9PT0gRU1QVFlfT0JKKSB7XG4gICAgICAgIGluc3RhbmNlLnByb3BzID0gcHJvcHM7XG4gICAgfVxuICAgIGluc3RhbmNlLl9wYXRjaCA9IHBhdGNoO1xuICAgIGlmIChvcHRpb25zLmZpbmRET01Ob2RlRW5hYmxlZCkge1xuICAgICAgICBpbnN0YW5jZS5fY29tcG9uZW50VG9ET01Ob2RlTWFwID0gY29tcG9uZW50VG9ET01Ob2RlTWFwO1xuICAgIH1cbiAgICBpbnN0YW5jZS5fdW5tb3VudGVkID0gZmFsc2U7XG4gICAgaW5zdGFuY2UuX3BlbmRpbmdTZXRTdGF0ZSA9IHRydWU7XG4gICAgaW5zdGFuY2UuX2lzU1ZHID0gaXNTVkc7XG4gICAgaWYgKGlzRnVuY3Rpb24oaW5zdGFuY2UuY29tcG9uZW50V2lsbE1vdW50KSkge1xuICAgICAgICBpbnN0YW5jZS5jb21wb25lbnRXaWxsTW91bnQoKTtcbiAgICB9XG4gICAgdmFyIGNoaWxkQ29udGV4dCA9IGluc3RhbmNlLmdldENoaWxkQ29udGV4dCgpO1xuICAgIGlmICghaXNOdWxsT3JVbmRlZihjaGlsZENvbnRleHQpKSB7XG4gICAgICAgIGluc3RhbmNlLl9jaGlsZENvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LCBjaGlsZENvbnRleHQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaW5zdGFuY2UuX2NoaWxkQ29udGV4dCA9IGNvbnRleHQ7XG4gICAgfVxuICAgIG9wdGlvbnMuYmVmb3JlUmVuZGVyICYmIG9wdGlvbnMuYmVmb3JlUmVuZGVyKGluc3RhbmNlKTtcbiAgICB2YXIgaW5wdXQgPSBpbnN0YW5jZS5yZW5kZXIocHJvcHMsIGluc3RhbmNlLnN0YXRlLCBjb250ZXh0KTtcbiAgICBvcHRpb25zLmFmdGVyUmVuZGVyICYmIG9wdGlvbnMuYWZ0ZXJSZW5kZXIoaW5zdGFuY2UpO1xuICAgIGlmIChpc0FycmF5KGlucHV0KSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3dFcnJvcignYSB2YWxpZCBJbmZlcm5vIFZOb2RlIChvciBudWxsKSBtdXN0IGJlIHJldHVybmVkIGZyb20gYSBjb21wb25lbnQgcmVuZGVyLiBZb3UgbWF5IGhhdmUgcmV0dXJuZWQgYW4gYXJyYXkgb3IgYW4gaW52YWxpZCBvYmplY3QuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0ludmFsaWQoaW5wdXQpKSB7XG4gICAgICAgIGlucHV0ID0gY3JlYXRlVm9pZFZOb2RlKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXIoaW5wdXQpKSB7XG4gICAgICAgIGlucHV0ID0gY3JlYXRlVGV4dFZOb2RlKGlucHV0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChpbnB1dC5kb20pIHtcbiAgICAgICAgICAgIGlucHV0ID0gY2xvbmVWTm9kZShpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlucHV0LmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICAvLyBpZiB3ZSBoYXZlIGFuIGlucHV0IHRoYXQgaXMgYWxzbyBhIGNvbXBvbmVudCwgd2UgcnVuIGludG8gYSB0cmlja3kgc2l0dWF0aW9uXG4gICAgICAgICAgICAvLyB3aGVyZSB0aGUgcm9vdCB2Tm9kZSBuZWVkcyB0byBhbHdheXMgaGF2ZSB0aGUgY29ycmVjdCBET00gZW50cnlcbiAgICAgICAgICAgIC8vIHNvIHdlIGJyZWFrIG1vbm9tb3JwaGlzbSBvbiBvdXIgaW5wdXQgYW5kIHN1cHBseSBpdCBvdXIgdk5vZGUgYXMgcGFyZW50Vk5vZGVcbiAgICAgICAgICAgIC8vIHdlIGNhbiBvcHRpbWlzZSB0aGlzIGluIHRoZSBmdXR1cmUsIGJ1dCB0aGlzIGdldHMgdXMgb3V0IG9mIGEgbG90IG9mIGlzc3Vlc1xuICAgICAgICAgICAgaW5wdXQucGFyZW50Vk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbnN0YW5jZS5fcGVuZGluZ1NldFN0YXRlID0gZmFsc2U7XG4gICAgaW5zdGFuY2UuX2xhc3RJbnB1dCA9IGlucHV0O1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cbmZ1bmN0aW9uIHJlcGxhY2VMYXN0Q2hpbGRBbmRVbm1vdW50KGxhc3RJbnB1dCwgbmV4dElucHV0LCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKSB7XG4gICAgcmVwbGFjZVZOb2RlKHBhcmVudERvbSwgbW91bnQobmV4dElucHV0LCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSwgbGFzdElucHV0LCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbn1cbmZ1bmN0aW9uIHJlcGxhY2VWTm9kZShwYXJlbnREb20sIGRvbSwgdk5vZGUsIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpIHtcbiAgICB2YXIgc2hhbGxvd1VubW91bnQgPSBmYWxzZTtcbiAgICAvLyB3ZSBjYW5ub3QgY2FjaGUgbm9kZVR5cGUgaGVyZSBhcyB2Tm9kZSBtaWdodCBiZSByZS1hc3NpZ25lZCBiZWxvd1xuICAgIGlmICh2Tm9kZS5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgYWNjZXNzaW5nIGEgc3RhdGVmdWwgb3Igc3RhdGVsZXNzIGNvbXBvbmVudCwgd2Ugd2FudCB0byBhY2Nlc3MgdGhlaXIgbGFzdCByZW5kZXJlZCBpbnB1dFxuICAgICAgICAvLyBhY2Nlc3NpbmcgdGhlaXIgRE9NIG5vZGUgaXMgbm90IHVzZWZ1bCB0byB1cyBoZXJlXG4gICAgICAgIHVubW91bnQodk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgdk5vZGUgPSB2Tm9kZS5jaGlsZHJlbi5fbGFzdElucHV0IHx8IHZOb2RlLmNoaWxkcmVuO1xuICAgICAgICBzaGFsbG93VW5tb3VudCA9IHRydWU7XG4gICAgfVxuICAgIHJlcGxhY2VDaGlsZChwYXJlbnREb20sIGRvbSwgdk5vZGUuZG9tKTtcbiAgICB1bm1vdW50KHZOb2RlLCBudWxsLCBsaWZlY3ljbGUsIGZhbHNlLCBpc1JlY3ljbGluZyk7XG59XG5mdW5jdGlvbiBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50SW5wdXQodk5vZGUsIGNvbXBvbmVudCwgcHJvcHMsIGNvbnRleHQpIHtcbiAgICB2YXIgaW5wdXQgPSBjb21wb25lbnQocHJvcHMsIGNvbnRleHQpO1xuICAgIGlmIChpc0FycmF5KGlucHV0KSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3dFcnJvcignYSB2YWxpZCBJbmZlcm5vIFZOb2RlIChvciBudWxsKSBtdXN0IGJlIHJldHVybmVkIGZyb20gYSBjb21wb25lbnQgcmVuZGVyLiBZb3UgbWF5IGhhdmUgcmV0dXJuZWQgYW4gYXJyYXkgb3IgYW4gaW52YWxpZCBvYmplY3QuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0ludmFsaWQoaW5wdXQpKSB7XG4gICAgICAgIGlucHV0ID0gY3JlYXRlVm9pZFZOb2RlKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXIoaW5wdXQpKSB7XG4gICAgICAgIGlucHV0ID0gY3JlYXRlVGV4dFZOb2RlKGlucHV0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChpbnB1dC5kb20pIHtcbiAgICAgICAgICAgIGlucHV0ID0gY2xvbmVWTm9kZShpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlucHV0LmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICAvLyBpZiB3ZSBoYXZlIGFuIGlucHV0IHRoYXQgaXMgYWxzbyBhIGNvbXBvbmVudCwgd2UgcnVuIGludG8gYSB0cmlja3kgc2l0dWF0aW9uXG4gICAgICAgICAgICAvLyB3aGVyZSB0aGUgcm9vdCB2Tm9kZSBuZWVkcyB0byBhbHdheXMgaGF2ZSB0aGUgY29ycmVjdCBET00gZW50cnlcbiAgICAgICAgICAgIC8vIHNvIHdlIGJyZWFrIG1vbm9tb3JwaGlzbSBvbiBvdXIgaW5wdXQgYW5kIHN1cHBseSBpdCBvdXIgdk5vZGUgYXMgcGFyZW50Vk5vZGVcbiAgICAgICAgICAgIC8vIHdlIGNhbiBvcHRpbWlzZSB0aGlzIGluIHRoZSBmdXR1cmUsIGJ1dCB0aGlzIGdldHMgdXMgb3V0IG9mIGEgbG90IG9mIGlzc3Vlc1xuICAgICAgICAgICAgaW5wdXQucGFyZW50Vk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW5wdXQ7XG59XG5mdW5jdGlvbiBzZXRUZXh0Q29udGVudChkb20sIHRleHQpIHtcbiAgICBpZiAodGV4dCAhPT0gJycpIHtcbiAgICAgICAgZG9tLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRvbS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZVRleHRDb250ZW50KGRvbSwgdGV4dCkge1xuICAgIGRvbS5maXJzdENoaWxkLm5vZGVWYWx1ZSA9IHRleHQ7XG59XG5mdW5jdGlvbiBhcHBlbmRDaGlsZChwYXJlbnREb20sIGRvbSkge1xuICAgIHBhcmVudERvbS5hcHBlbmRDaGlsZChkb20pO1xufVxuZnVuY3Rpb24gaW5zZXJ0T3JBcHBlbmQocGFyZW50RG9tLCBuZXdOb2RlLCBuZXh0Tm9kZSkge1xuICAgIGlmIChpc051bGxPclVuZGVmKG5leHROb2RlKSkge1xuICAgICAgICBhcHBlbmRDaGlsZChwYXJlbnREb20sIG5ld05vZGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcGFyZW50RG9tLmluc2VydEJlZm9yZShuZXdOb2RlLCBuZXh0Tm9kZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gZG9jdW1lbnRDcmVhdGVFbGVtZW50KHRhZywgaXNTVkcpIHtcbiAgICBpZiAoaXNTVkcgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgdGFnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gcmVwbGFjZVdpdGhOZXdOb2RlKGxhc3ROb2RlLCBuZXh0Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZykge1xuICAgIHVubW91bnQobGFzdE5vZGUsIG51bGwsIGxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbiAgICB2YXIgZG9tID0gbW91bnQobmV4dE5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgIG5leHROb2RlLmRvbSA9IGRvbTtcbiAgICByZXBsYWNlQ2hpbGQocGFyZW50RG9tLCBkb20sIGxhc3ROb2RlLmRvbSk7XG59XG5mdW5jdGlvbiByZXBsYWNlQ2hpbGQocGFyZW50RG9tLCBuZXh0RG9tLCBsYXN0RG9tKSB7XG4gICAgaWYgKCFwYXJlbnREb20pIHtcbiAgICAgICAgcGFyZW50RG9tID0gbGFzdERvbS5wYXJlbnROb2RlO1xuICAgIH1cbiAgICBwYXJlbnREb20ucmVwbGFjZUNoaWxkKG5leHREb20sIGxhc3REb20pO1xufVxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGQocGFyZW50RG9tLCBkb20pIHtcbiAgICBwYXJlbnREb20ucmVtb3ZlQ2hpbGQoZG9tKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkcmVuKGRvbSwgY2hpbGRyZW4sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpIHtcbiAgICBkb20udGV4dENvbnRlbnQgPSAnJztcbiAgICBpZiAoIWxpZmVjeWNsZS5mYXN0VW5tb3VudCB8fCAobGlmZWN5Y2xlLmZhc3RVbm1vdW50ICYmIG9wdGlvbnMucmVjeWNsaW5nRW5hYmxlZCAmJiAhaXNSZWN5Y2xpbmcpKSB7XG4gICAgICAgIHJlbW92ZUNoaWxkcmVuKG51bGwsIGNoaWxkcmVuLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiByZW1vdmVDaGlsZHJlbihkb20sIGNoaWxkcmVuLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgaWYgKCFpc0ludmFsaWQoY2hpbGQpKSB7XG4gICAgICAgICAgICB1bm1vdW50KGNoaWxkLCBkb20sIGxpZmVjeWNsZSwgdHJ1ZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gaXNLZXllZChsYXN0Q2hpbGRyZW4sIG5leHRDaGlsZHJlbikge1xuICAgIHJldHVybiBuZXh0Q2hpbGRyZW4ubGVuZ3RoICYmICFpc051bGxPclVuZGVmKG5leHRDaGlsZHJlblswXSkgJiYgIWlzTnVsbE9yVW5kZWYobmV4dENoaWxkcmVuWzBdLmtleSlcbiAgICAgICAgJiYgbGFzdENoaWxkcmVuLmxlbmd0aCAmJiAhaXNOdWxsT3JVbmRlZihsYXN0Q2hpbGRyZW5bMF0pICYmICFpc051bGxPclVuZGVmKGxhc3RDaGlsZHJlblswXS5rZXkpO1xufVxuXG5mdW5jdGlvbiBpc0NoZWNrZWRUeXBlKHR5cGUpIHtcbiAgICByZXR1cm4gdHlwZSA9PT0gJ2NoZWNrYm94JyB8fCB0eXBlID09PSAncmFkaW8nO1xufVxuZnVuY3Rpb24gaXNDb250cm9sbGVkKHByb3BzKSB7XG4gICAgdmFyIHVzZXNDaGVja2VkID0gaXNDaGVja2VkVHlwZShwcm9wcy50eXBlKTtcbiAgICByZXR1cm4gdXNlc0NoZWNrZWQgPyAhaXNOdWxsT3JVbmRlZihwcm9wcy5jaGVja2VkKSA6ICFpc051bGxPclVuZGVmKHByb3BzLnZhbHVlKTtcbn1cbmZ1bmN0aW9uIG9uVGV4dElucHV0Q2hhbmdlKGUpIHtcbiAgICB2YXIgdk5vZGUgPSB0aGlzLnZOb2RlO1xuICAgIHZhciBldmVudHMgPSB2Tm9kZS5ldmVudHMgfHwgRU1QVFlfT0JKO1xuICAgIHZhciBkb20gPSB2Tm9kZS5kb207XG4gICAgaWYgKGV2ZW50cy5vbklucHV0KSB7XG4gICAgICAgIHZhciBldmVudCA9IGV2ZW50cy5vbklucHV0O1xuICAgICAgICBpZiAoZXZlbnQuZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LmV2ZW50KGV2ZW50LmRhdGEsIGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZlbnQoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnRzLm9uaW5wdXQpIHtcbiAgICAgICAgZXZlbnRzLm9uaW5wdXQoZSk7XG4gICAgfVxuICAgIC8vIHRoZSB1c2VyIG1heSBoYXZlIHVwZGF0ZWQgdGhlIHZOb2RlIGZyb20gdGhlIGFib3ZlIG9uSW5wdXQgZXZlbnRzXG4gICAgLy8gc28gd2UgbmVlZCB0byBnZXQgaXQgZnJvbSB0aGUgY29udGV4dCBvZiBgdGhpc2AgYWdhaW5cbiAgICBhcHBseVZhbHVlKHRoaXMudk5vZGUsIGRvbSk7XG59XG5mdW5jdGlvbiB3cmFwcGVkT25DaGFuZ2UoZSkge1xuICAgIHZhciB2Tm9kZSA9IHRoaXMudk5vZGU7XG4gICAgdmFyIGV2ZW50cyA9IHZOb2RlLmV2ZW50cyB8fCBFTVBUWV9PQko7XG4gICAgdmFyIGV2ZW50ID0gZXZlbnRzLm9uQ2hhbmdlO1xuICAgIGlmIChldmVudC5ldmVudCkge1xuICAgICAgICBldmVudC5ldmVudChldmVudC5kYXRhLCBlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGV2ZW50KGUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG9uQ2hlY2tib3hDaGFuZ2UoZSkge1xuICAgIHZhciB2Tm9kZSA9IHRoaXMudk5vZGU7XG4gICAgdmFyIGV2ZW50cyA9IHZOb2RlLmV2ZW50cyB8fCBFTVBUWV9PQko7XG4gICAgdmFyIGRvbSA9IHZOb2RlLmRvbTtcbiAgICBpZiAoZXZlbnRzLm9uQ2xpY2spIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gZXZlbnRzLm9uQ2xpY2s7XG4gICAgICAgIGlmIChldmVudC5ldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuZXZlbnQoZXZlbnQuZGF0YSwgZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldmVudChlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChldmVudHMub25jbGljaykge1xuICAgICAgICBldmVudHMub25jbGljayhlKTtcbiAgICB9XG4gICAgLy8gdGhlIHVzZXIgbWF5IGhhdmUgdXBkYXRlZCB0aGUgdk5vZGUgZnJvbSB0aGUgYWJvdmUgb25DbGljayBldmVudHNcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIGdldCBpdCBmcm9tIHRoZSBjb250ZXh0IG9mIGB0aGlzYCBhZ2FpblxuICAgIGFwcGx5VmFsdWUodGhpcy52Tm9kZSwgZG9tKTtcbn1cbmZ1bmN0aW9uIGhhbmRsZUFzc29jaWF0ZWRSYWRpb0lucHV0cyhuYW1lKSB7XG4gICAgdmFyIGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoKFwiaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXVtuYW1lPVxcXCJcIiArIG5hbWUgKyBcIlxcXCJdXCIpKTtcbiAgICBbXS5mb3JFYWNoLmNhbGwoaW5wdXRzLCBmdW5jdGlvbiAoZG9tKSB7XG4gICAgICAgIHZhciBpbnB1dFdyYXBwZXIgPSB3cmFwcGVycy5nZXQoZG9tKTtcbiAgICAgICAgaWYgKGlucHV0V3JhcHBlcikge1xuICAgICAgICAgICAgdmFyIHByb3BzID0gaW5wdXRXcmFwcGVyLnZOb2RlLnByb3BzO1xuICAgICAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgZG9tLmNoZWNrZWQgPSBpbnB1dFdyYXBwZXIudk5vZGUucHJvcHMuY2hlY2tlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gcHJvY2Vzc0lucHV0KHZOb2RlLCBkb20pIHtcbiAgICB2YXIgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgYXBwbHlWYWx1ZSh2Tm9kZSwgZG9tKTtcbiAgICBpZiAoaXNDb250cm9sbGVkKHByb3BzKSkge1xuICAgICAgICB2YXIgaW5wdXRXcmFwcGVyID0gd3JhcHBlcnMuZ2V0KGRvbSk7XG4gICAgICAgIGlmICghaW5wdXRXcmFwcGVyKSB7XG4gICAgICAgICAgICBpbnB1dFdyYXBwZXIgPSB7XG4gICAgICAgICAgICAgICAgdk5vZGU6IHZOb2RlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGlzQ2hlY2tlZFR5cGUocHJvcHMudHlwZSkpIHtcbiAgICAgICAgICAgICAgICBkb20ub25jbGljayA9IG9uQ2hlY2tib3hDaGFuZ2UuYmluZChpbnB1dFdyYXBwZXIpO1xuICAgICAgICAgICAgICAgIGRvbS5vbmNsaWNrLndyYXBwZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9tLm9uaW5wdXQgPSBvblRleHRJbnB1dENoYW5nZS5iaW5kKGlucHV0V3JhcHBlcik7XG4gICAgICAgICAgICAgICAgZG9tLm9uaW5wdXQud3JhcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBkb20ub25jaGFuZ2UgPSB3cmFwcGVkT25DaGFuZ2UuYmluZChpbnB1dFdyYXBwZXIpO1xuICAgICAgICAgICAgICAgIGRvbS5vbmNoYW5nZS53cmFwcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdyYXBwZXJzLnNldChkb20sIGlucHV0V3JhcHBlcik7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXRXcmFwcGVyLnZOb2RlID0gdk5vZGU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBhcHBseVZhbHVlKHZOb2RlLCBkb20pIHtcbiAgICB2YXIgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgdmFyIHR5cGUgPSBwcm9wcy50eXBlO1xuICAgIHZhciB2YWx1ZSA9IHByb3BzLnZhbHVlO1xuICAgIHZhciBjaGVja2VkID0gcHJvcHMuY2hlY2tlZDtcbiAgICB2YXIgbXVsdGlwbGUgPSBwcm9wcy5tdWx0aXBsZTtcbiAgICBpZiAodHlwZSAmJiB0eXBlICE9PSBkb20udHlwZSkge1xuICAgICAgICBkb20udHlwZSA9IHR5cGU7XG4gICAgfVxuICAgIGlmIChtdWx0aXBsZSAmJiBtdWx0aXBsZSAhPT0gZG9tLm11bHRpcGxlKSB7XG4gICAgICAgIGRvbS5tdWx0aXBsZSA9IG11bHRpcGxlO1xuICAgIH1cbiAgICBpZiAoaXNDaGVja2VkVHlwZSh0eXBlKSkge1xuICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYodmFsdWUpKSB7XG4gICAgICAgICAgICBkb20udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBkb20uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgICAgIGlmICh0eXBlID09PSAncmFkaW8nICYmIHByb3BzLm5hbWUpIHtcbiAgICAgICAgICAgIGhhbmRsZUFzc29jaWF0ZWRSYWRpb0lucHV0cyhwcm9wcy5uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKHZhbHVlKSAmJiBkb20udmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBkb20udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghaXNOdWxsT3JVbmRlZihjaGVja2VkKSkge1xuICAgICAgICAgICAgZG9tLmNoZWNrZWQgPSBjaGVja2VkO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc0NvbnRyb2xsZWQkMShwcm9wcykge1xuICAgIHJldHVybiAhaXNOdWxsT3JVbmRlZihwcm9wcy52YWx1ZSk7XG59XG5mdW5jdGlvbiB1cGRhdGVDaGlsZE9wdGlvbkdyb3VwKHZOb2RlLCB2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gdk5vZGUudHlwZTtcbiAgICBpZiAodHlwZSA9PT0gJ29wdGdyb3VwJykge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSB2Tm9kZS5jaGlsZHJlbjtcbiAgICAgICAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlQ2hpbGRPcHRpb24oY2hpbGRyZW5baV0sIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1ZOb2RlKGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgdXBkYXRlQ2hpbGRPcHRpb24oY2hpbGRyZW4sIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdXBkYXRlQ2hpbGRPcHRpb24odk5vZGUsIHZhbHVlKTtcbiAgICB9XG59XG5mdW5jdGlvbiB1cGRhdGVDaGlsZE9wdGlvbih2Tm9kZSwgdmFsdWUpIHtcbiAgICB2YXIgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgdmFyIGRvbSA9IHZOb2RlLmRvbTtcbiAgICAvLyB3ZSBkbyB0aGlzIGFzIG11bHRpcGxlIG1heSBoYXZlIGNoYW5nZWRcbiAgICBkb20udmFsdWUgPSBwcm9wcy52YWx1ZTtcbiAgICBpZiAoKGlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmluZGV4T2YocHJvcHMudmFsdWUpICE9PSAtMSkgfHwgcHJvcHMudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgIGRvbS5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkb20uc2VsZWN0ZWQgPSBwcm9wcy5zZWxlY3RlZCB8fCBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBvblNlbGVjdENoYW5nZShlKSB7XG4gICAgdmFyIHZOb2RlID0gdGhpcy52Tm9kZTtcbiAgICB2YXIgZXZlbnRzID0gdk5vZGUuZXZlbnRzIHx8IEVNUFRZX09CSjtcbiAgICB2YXIgZG9tID0gdk5vZGUuZG9tO1xuICAgIGlmIChldmVudHMub25DaGFuZ2UpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gZXZlbnRzLm9uQ2hhbmdlO1xuICAgICAgICBpZiAoZXZlbnQuZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LmV2ZW50KGV2ZW50LmRhdGEsIGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZlbnQoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnRzLm9uY2hhbmdlKSB7XG4gICAgICAgIGV2ZW50cy5vbmNoYW5nZShlKTtcbiAgICB9XG4gICAgLy8gdGhlIHVzZXIgbWF5IGhhdmUgdXBkYXRlZCB0aGUgdk5vZGUgZnJvbSB0aGUgYWJvdmUgb25DaGFuZ2UgZXZlbnRzXG4gICAgLy8gc28gd2UgbmVlZCB0byBnZXQgaXQgZnJvbSB0aGUgY29udGV4dCBvZiBgdGhpc2AgYWdhaW5cbiAgICBhcHBseVZhbHVlJDEodGhpcy52Tm9kZSwgZG9tKTtcbn1cbmZ1bmN0aW9uIHByb2Nlc3NTZWxlY3Qodk5vZGUsIGRvbSkge1xuICAgIHZhciBwcm9wcyA9IHZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcbiAgICBhcHBseVZhbHVlJDEodk5vZGUsIGRvbSk7XG4gICAgaWYgKGlzQ29udHJvbGxlZCQxKHByb3BzKSkge1xuICAgICAgICB2YXIgc2VsZWN0V3JhcHBlciA9IHdyYXBwZXJzLmdldChkb20pO1xuICAgICAgICBpZiAoIXNlbGVjdFdyYXBwZXIpIHtcbiAgICAgICAgICAgIHNlbGVjdFdyYXBwZXIgPSB7XG4gICAgICAgICAgICAgICAgdk5vZGU6IHZOb2RlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZG9tLm9uY2hhbmdlID0gb25TZWxlY3RDaGFuZ2UuYmluZChzZWxlY3RXcmFwcGVyKTtcbiAgICAgICAgICAgIGRvbS5vbmNoYW5nZS53cmFwcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHdyYXBwZXJzLnNldChkb20sIHNlbGVjdFdyYXBwZXIpO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdFdyYXBwZXIudk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGFwcGx5VmFsdWUkMSh2Tm9kZSwgZG9tKSB7XG4gICAgdmFyIHByb3BzID0gdk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIGlmIChwcm9wcy5tdWx0aXBsZSAhPT0gZG9tLm11bHRpcGxlKSB7XG4gICAgICAgIGRvbS5tdWx0aXBsZSA9IHByb3BzLm11bHRpcGxlO1xuICAgIH1cbiAgICB2YXIgY2hpbGRyZW4gPSB2Tm9kZS5jaGlsZHJlbjtcbiAgICBpZiAoIWlzSW52YWxpZChjaGlsZHJlbikpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcHJvcHMudmFsdWU7XG4gICAgICAgIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUNoaWxkT3B0aW9uR3JvdXAoY2hpbGRyZW5baV0sIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1ZOb2RlKGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgdXBkYXRlQ2hpbGRPcHRpb25Hcm91cChjaGlsZHJlbiwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc0NvbnRyb2xsZWQkMihwcm9wcykge1xuICAgIHJldHVybiAhaXNOdWxsT3JVbmRlZihwcm9wcy52YWx1ZSk7XG59XG5mdW5jdGlvbiB3cmFwcGVkT25DaGFuZ2UkMShlKSB7XG4gICAgdmFyIHZOb2RlID0gdGhpcy52Tm9kZTtcbiAgICB2YXIgZXZlbnRzID0gdk5vZGUuZXZlbnRzIHx8IEVNUFRZX09CSjtcbiAgICB2YXIgZXZlbnQgPSBldmVudHMub25DaGFuZ2U7XG4gICAgaWYgKGV2ZW50LmV2ZW50KSB7XG4gICAgICAgIGV2ZW50LmV2ZW50KGV2ZW50LmRhdGEsIGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZXZlbnQoZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gb25UZXh0YXJlYUlucHV0Q2hhbmdlKGUpIHtcbiAgICB2YXIgdk5vZGUgPSB0aGlzLnZOb2RlO1xuICAgIHZhciBldmVudHMgPSB2Tm9kZS5ldmVudHMgfHwgRU1QVFlfT0JKO1xuICAgIHZhciBkb20gPSB2Tm9kZS5kb207XG4gICAgaWYgKGV2ZW50cy5vbklucHV0KSB7XG4gICAgICAgIHZhciBldmVudCA9IGV2ZW50cy5vbklucHV0O1xuICAgICAgICBpZiAoZXZlbnQuZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LmV2ZW50KGV2ZW50LmRhdGEsIGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZlbnQoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnRzLm9uaW5wdXQpIHtcbiAgICAgICAgZXZlbnRzLm9uaW5wdXQoZSk7XG4gICAgfVxuICAgIC8vIHRoZSB1c2VyIG1heSBoYXZlIHVwZGF0ZWQgdGhlIHZOb2RlIGZyb20gdGhlIGFib3ZlIG9uSW5wdXQgZXZlbnRzXG4gICAgLy8gc28gd2UgbmVlZCB0byBnZXQgaXQgZnJvbSB0aGUgY29udGV4dCBvZiBgdGhpc2AgYWdhaW5cbiAgICBhcHBseVZhbHVlJDIodGhpcy52Tm9kZSwgZG9tKTtcbn1cbmZ1bmN0aW9uIHByb2Nlc3NUZXh0YXJlYSh2Tm9kZSwgZG9tKSB7XG4gICAgdmFyIHByb3BzID0gdk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIGFwcGx5VmFsdWUkMih2Tm9kZSwgZG9tKTtcbiAgICB2YXIgdGV4dGFyZWFXcmFwcGVyID0gd3JhcHBlcnMuZ2V0KGRvbSk7XG4gICAgaWYgKGlzQ29udHJvbGxlZCQyKHByb3BzKSkge1xuICAgICAgICBpZiAoIXRleHRhcmVhV3JhcHBlcikge1xuICAgICAgICAgICAgdGV4dGFyZWFXcmFwcGVyID0ge1xuICAgICAgICAgICAgICAgIHZOb2RlOiB2Tm9kZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRvbS5vbmlucHV0ID0gb25UZXh0YXJlYUlucHV0Q2hhbmdlLmJpbmQodGV4dGFyZWFXcmFwcGVyKTtcbiAgICAgICAgICAgIGRvbS5vbmlucHV0LndyYXBwZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgZG9tLm9uY2hhbmdlID0gd3JhcHBlZE9uQ2hhbmdlJDEuYmluZCh0ZXh0YXJlYVdyYXBwZXIpO1xuICAgICAgICAgICAgICAgIGRvbS5vbmNoYW5nZS53cmFwcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdyYXBwZXJzLnNldChkb20sIHRleHRhcmVhV3JhcHBlcik7XG4gICAgICAgIH1cbiAgICAgICAgdGV4dGFyZWFXcmFwcGVyLnZOb2RlID0gdk5vZGU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBhcHBseVZhbHVlJDIodk5vZGUsIGRvbSkge1xuICAgIHZhciBwcm9wcyA9IHZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcbiAgICB2YXIgdmFsdWUgPSBwcm9wcy52YWx1ZTtcbiAgICB2YXIgZG9tVmFsdWUgPSBkb20udmFsdWU7XG4gICAgaWYgKGRvbVZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYodmFsdWUpKSB7XG4gICAgICAgICAgICBkb20udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkb21WYWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgIGRvbS52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgfVxufVxuXG52YXIgd3JhcHBlcnMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBwcm9jZXNzRWxlbWVudChmbGFncywgdk5vZGUsIGRvbSkge1xuICAgIGlmIChmbGFncyAmIDUxMiAvKiBJbnB1dEVsZW1lbnQgKi8pIHtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NJbnB1dCh2Tm9kZSwgZG9tKTtcbiAgICB9XG4gICAgaWYgKGZsYWdzICYgMjA0OCAvKiBTZWxlY3RFbGVtZW50ICovKSB7XG4gICAgICAgIHJldHVybiBwcm9jZXNzU2VsZWN0KHZOb2RlLCBkb20pO1xuICAgIH1cbiAgICBpZiAoZmxhZ3MgJiAxMDI0IC8qIFRleHRhcmVhRWxlbWVudCAqLykge1xuICAgICAgICByZXR1cm4gcHJvY2Vzc1RleHRhcmVhKHZOb2RlLCBkb20pO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHBhdGNoKGxhc3RWTm9kZSwgbmV4dFZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKSB7XG4gICAgaWYgKGxhc3RWTm9kZSAhPT0gbmV4dFZOb2RlKSB7XG4gICAgICAgIHZhciBsYXN0RmxhZ3MgPSBsYXN0Vk5vZGUuZmxhZ3M7XG4gICAgICAgIHZhciBuZXh0RmxhZ3MgPSBuZXh0Vk5vZGUuZmxhZ3M7XG4gICAgICAgIGlmIChuZXh0RmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgICAgIGlmIChsYXN0RmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgICAgICAgICBwYXRjaENvbXBvbmVudChsYXN0Vk5vZGUsIG5leHRWTm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBuZXh0RmxhZ3MgJiA0IC8qIENvbXBvbmVudENsYXNzICovLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXBsYWNlVk5vZGUocGFyZW50RG9tLCBtb3VudENvbXBvbmVudChuZXh0Vk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIG5leHRGbGFncyAmIDQgLyogQ29tcG9uZW50Q2xhc3MgKi8pLCBsYXN0Vk5vZGUsIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5leHRGbGFncyAmIDM5NzAgLyogRWxlbWVudCAqLykge1xuICAgICAgICAgICAgaWYgKGxhc3RGbGFncyAmIDM5NzAgLyogRWxlbWVudCAqLykge1xuICAgICAgICAgICAgICAgIHBhdGNoRWxlbWVudChsYXN0Vk5vZGUsIG5leHRWTm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXBsYWNlVk5vZGUocGFyZW50RG9tLCBtb3VudEVsZW1lbnQobmV4dFZOb2RlLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSwgbGFzdFZOb2RlLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXh0RmxhZ3MgJiAxIC8qIFRleHQgKi8pIHtcbiAgICAgICAgICAgIGlmIChsYXN0RmxhZ3MgJiAxIC8qIFRleHQgKi8pIHtcbiAgICAgICAgICAgICAgICBwYXRjaFRleHQobGFzdFZOb2RlLCBuZXh0Vk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVwbGFjZVZOb2RlKHBhcmVudERvbSwgbW91bnRUZXh0KG5leHRWTm9kZSwgbnVsbCksIGxhc3RWTm9kZSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV4dEZsYWdzICYgNDA5NiAvKiBWb2lkICovKSB7XG4gICAgICAgICAgICBpZiAobGFzdEZsYWdzICYgNDA5NiAvKiBWb2lkICovKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hWb2lkKGxhc3RWTm9kZSwgbmV4dFZOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlcGxhY2VWTm9kZShwYXJlbnREb20sIG1vdW50Vm9pZChuZXh0Vk5vZGUsIG51bGwpLCBsYXN0Vk5vZGUsIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gRXJyb3IgY2FzZTogbW91bnQgbmV3IG9uZSByZXBsYWNpbmcgb2xkIG9uZVxuICAgICAgICAgICAgcmVwbGFjZUxhc3RDaGlsZEFuZFVubW91bnQobGFzdFZOb2RlLCBuZXh0Vk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gdW5tb3VudENoaWxkcmVuKGNoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpIHtcbiAgICBpZiAoaXNWTm9kZShjaGlsZHJlbikpIHtcbiAgICAgICAgdW5tb3VudChjaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIHRydWUsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGRyZW4oZG9tLCBjaGlsZHJlbiwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkb20udGV4dENvbnRlbnQgPSAnJztcbiAgICB9XG59XG5mdW5jdGlvbiBwYXRjaEVsZW1lbnQobGFzdFZOb2RlLCBuZXh0Vk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpIHtcbiAgICB2YXIgbmV4dFRhZyA9IG5leHRWTm9kZS50eXBlO1xuICAgIHZhciBsYXN0VGFnID0gbGFzdFZOb2RlLnR5cGU7XG4gICAgaWYgKGxhc3RUYWcgIT09IG5leHRUYWcpIHtcbiAgICAgICAgcmVwbGFjZVdpdGhOZXdOb2RlKGxhc3RWTm9kZSwgbmV4dFZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBkb20gPSBsYXN0Vk5vZGUuZG9tO1xuICAgICAgICB2YXIgbGFzdFByb3BzID0gbGFzdFZOb2RlLnByb3BzO1xuICAgICAgICB2YXIgbmV4dFByb3BzID0gbmV4dFZOb2RlLnByb3BzO1xuICAgICAgICB2YXIgbGFzdENoaWxkcmVuID0gbGFzdFZOb2RlLmNoaWxkcmVuO1xuICAgICAgICB2YXIgbmV4dENoaWxkcmVuID0gbmV4dFZOb2RlLmNoaWxkcmVuO1xuICAgICAgICB2YXIgbGFzdEZsYWdzID0gbGFzdFZOb2RlLmZsYWdzO1xuICAgICAgICB2YXIgbmV4dEZsYWdzID0gbmV4dFZOb2RlLmZsYWdzO1xuICAgICAgICB2YXIgbGFzdFJlZiA9IGxhc3RWTm9kZS5yZWY7XG4gICAgICAgIHZhciBuZXh0UmVmID0gbmV4dFZOb2RlLnJlZjtcbiAgICAgICAgdmFyIGxhc3RFdmVudHMgPSBsYXN0Vk5vZGUuZXZlbnRzO1xuICAgICAgICB2YXIgbmV4dEV2ZW50cyA9IG5leHRWTm9kZS5ldmVudHM7XG4gICAgICAgIG5leHRWTm9kZS5kb20gPSBkb207XG4gICAgICAgIGlmIChpc1NWRyB8fCAobmV4dEZsYWdzICYgMTI4IC8qIFN2Z0VsZW1lbnQgKi8pKSB7XG4gICAgICAgICAgICBpc1NWRyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxhc3RDaGlsZHJlbiAhPT0gbmV4dENoaWxkcmVuKSB7XG4gICAgICAgICAgICBwYXRjaENoaWxkcmVuKGxhc3RGbGFncywgbmV4dEZsYWdzLCBsYXN0Q2hpbGRyZW4sIG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhhc0NvbnRyb2xsZWRWYWx1ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoIShuZXh0RmxhZ3MgJiAyIC8qIEh0bWxFbGVtZW50ICovKSkge1xuICAgICAgICAgICAgaGFzQ29udHJvbGxlZFZhbHVlID0gcHJvY2Vzc0VsZW1lbnQobmV4dEZsYWdzLCBuZXh0Vk5vZGUsIGRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW5saW5lZCBwYXRjaFByb3BzICAtLSBzdGFydHMgLS1cbiAgICAgICAgaWYgKGxhc3RQcm9wcyAhPT0gbmV4dFByb3BzKSB7XG4gICAgICAgICAgICB2YXIgbGFzdFByb3BzT3JFbXB0eSA9IGxhc3RQcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgICAgICAgICB2YXIgbmV4dFByb3BzT3JFbXB0eSA9IG5leHRQcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgICAgICAgICBpZiAobmV4dFByb3BzT3JFbXB0eSAhPT0gRU1QVFlfT0JKKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBuZXh0UHJvcHNPckVtcHR5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRvIG5vdCBhZGQgYSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBoZXJlLCBpdCBhZmZlY3RzIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXh0VmFsdWUgPSBuZXh0UHJvcHNPckVtcHR5W3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGFzdFZhbHVlID0gbGFzdFByb3BzT3JFbXB0eVtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTnVsbE9yVW5kZWYobmV4dFZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUHJvcChwcm9wLCBuZXh0VmFsdWUsIGRvbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRjaFByb3AocHJvcCwgbGFzdFZhbHVlLCBuZXh0VmFsdWUsIGRvbSwgaXNTVkcsIGhhc0NvbnRyb2xsZWRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGFzdFByb3BzT3JFbXB0eSAhPT0gRU1QVFlfT0JKKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcHJvcCQxIGluIGxhc3RQcm9wc09yRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZG8gbm90IGFkZCBhIGhhc093blByb3BlcnR5IGNoZWNrIGhlcmUsIGl0IGFmZmVjdHMgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTnVsbE9yVW5kZWYobmV4dFByb3BzT3JFbXB0eVtwcm9wJDFdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUHJvcChwcm9wJDEsIGxhc3RQcm9wc09yRW1wdHlbcHJvcCQxXSwgZG9tKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpbmxpbmVkIHBhdGNoUHJvcHMgIC0tIGVuZHMgLS1cbiAgICAgICAgaWYgKGxhc3RFdmVudHMgIT09IG5leHRFdmVudHMpIHtcbiAgICAgICAgICAgIHBhdGNoRXZlbnRzKGxhc3RFdmVudHMsIG5leHRFdmVudHMsIGRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5leHRSZWYpIHtcbiAgICAgICAgICAgIGlmIChsYXN0UmVmICE9PSBuZXh0UmVmIHx8IGlzUmVjeWNsaW5nKSB7XG4gICAgICAgICAgICAgICAgbW91bnRSZWYoZG9tLCBuZXh0UmVmLCBsaWZlY3ljbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gcGF0Y2hDaGlsZHJlbihsYXN0RmxhZ3MsIG5leHRGbGFncywgbGFzdENoaWxkcmVuLCBuZXh0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpIHtcbiAgICB2YXIgcGF0Y2hBcnJheSA9IGZhbHNlO1xuICAgIHZhciBwYXRjaEtleWVkID0gZmFsc2U7XG4gICAgaWYgKG5leHRGbGFncyAmIDY0IC8qIEhhc05vbktleWVkQ2hpbGRyZW4gKi8pIHtcbiAgICAgICAgcGF0Y2hBcnJheSA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKChsYXN0RmxhZ3MgJiAzMiAvKiBIYXNLZXllZENoaWxkcmVuICovKSAmJiAobmV4dEZsYWdzICYgMzIgLyogSGFzS2V5ZWRDaGlsZHJlbiAqLykpIHtcbiAgICAgICAgcGF0Y2hLZXllZCA9IHRydWU7XG4gICAgICAgIHBhdGNoQXJyYXkgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0ludmFsaWQobmV4dENoaWxkcmVuKSkge1xuICAgICAgICB1bm1vdW50Q2hpbGRyZW4obGFzdENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0ludmFsaWQobGFzdENoaWxkcmVuKSkge1xuICAgICAgICBpZiAoaXNTdHJpbmdPck51bWJlcihuZXh0Q2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBzZXRUZXh0Q29udGVudChkb20sIG5leHRDaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNBcnJheShuZXh0Q2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgbW91bnRBcnJheUNoaWxkcmVuKG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vdW50KG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc1N0cmluZ09yTnVtYmVyKG5leHRDaGlsZHJlbikpIHtcbiAgICAgICAgaWYgKGlzU3RyaW5nT3JOdW1iZXIobGFzdENoaWxkcmVuKSkge1xuICAgICAgICAgICAgdXBkYXRlVGV4dENvbnRlbnQoZG9tLCBuZXh0Q2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdW5tb3VudENoaWxkcmVuKGxhc3RDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIHNldFRleHRDb250ZW50KGRvbSwgbmV4dENoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc0FycmF5KG5leHRDaGlsZHJlbikpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkobGFzdENoaWxkcmVuKSkge1xuICAgICAgICAgICAgcGF0Y2hBcnJheSA9IHRydWU7XG4gICAgICAgICAgICBpZiAoaXNLZXllZChsYXN0Q2hpbGRyZW4sIG5leHRDaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBwYXRjaEtleWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHVubW91bnRDaGlsZHJlbihsYXN0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICBtb3VudEFycmF5Q2hpbGRyZW4obmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzQXJyYXkobGFzdENoaWxkcmVuKSkge1xuICAgICAgICByZW1vdmVBbGxDaGlsZHJlbihkb20sIGxhc3RDaGlsZHJlbiwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIG1vdW50KG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNWTm9kZShuZXh0Q2hpbGRyZW4pKSB7XG4gICAgICAgIGlmIChpc1ZOb2RlKGxhc3RDaGlsZHJlbikpIHtcbiAgICAgICAgICAgIHBhdGNoKGxhc3RDaGlsZHJlbiwgbmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHVubW91bnRDaGlsZHJlbihsYXN0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICBtb3VudChuZXh0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhdGNoQXJyYXkpIHtcbiAgICAgICAgaWYgKHBhdGNoS2V5ZWQpIHtcbiAgICAgICAgICAgIHBhdGNoS2V5ZWRDaGlsZHJlbihsYXN0Q2hpbGRyZW4sIG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXRjaE5vbktleWVkQ2hpbGRyZW4obGFzdENoaWxkcmVuLCBuZXh0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gcGF0Y2hDb21wb25lbnQobGFzdFZOb2RlLCBuZXh0Vk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNDbGFzcywgaXNSZWN5Y2xpbmcpIHtcbiAgICB2YXIgbGFzdFR5cGUgPSBsYXN0Vk5vZGUudHlwZTtcbiAgICB2YXIgbmV4dFR5cGUgPSBuZXh0Vk5vZGUudHlwZTtcbiAgICB2YXIgbmV4dFByb3BzID0gbmV4dFZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcbiAgICB2YXIgbGFzdEtleSA9IGxhc3RWTm9kZS5rZXk7XG4gICAgdmFyIG5leHRLZXkgPSBuZXh0Vk5vZGUua2V5O1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSBuZXh0VHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgaWYgKCFpc1VuZGVmaW5lZChkZWZhdWx0UHJvcHMpKSB7XG4gICAgICAgIGNvcHlQcm9wc1RvKGRlZmF1bHRQcm9wcywgbmV4dFByb3BzKTtcbiAgICAgICAgbmV4dFZOb2RlLnByb3BzID0gbmV4dFByb3BzO1xuICAgIH1cbiAgICBpZiAobGFzdFR5cGUgIT09IG5leHRUeXBlKSB7XG4gICAgICAgIGlmIChpc0NsYXNzKSB7XG4gICAgICAgICAgICByZXBsYWNlV2l0aE5ld05vZGUobGFzdFZOb2RlLCBuZXh0Vk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGxhc3RJbnB1dCA9IGxhc3RWTm9kZS5jaGlsZHJlbi5fbGFzdElucHV0IHx8IGxhc3RWTm9kZS5jaGlsZHJlbjtcbiAgICAgICAgICAgIHZhciBuZXh0SW5wdXQgPSBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50SW5wdXQobmV4dFZOb2RlLCBuZXh0VHlwZSwgbmV4dFByb3BzLCBjb250ZXh0KTtcbiAgICAgICAgICAgIHVubW91bnQobGFzdFZOb2RlLCBudWxsLCBsaWZlY3ljbGUsIGZhbHNlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICBwYXRjaChsYXN0SW5wdXQsIG5leHRJbnB1dCwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB2YXIgZG9tID0gbmV4dFZOb2RlLmRvbSA9IG5leHRJbnB1dC5kb207XG4gICAgICAgICAgICBuZXh0Vk5vZGUuY2hpbGRyZW4gPSBuZXh0SW5wdXQ7XG4gICAgICAgICAgICBtb3VudEZ1bmN0aW9uYWxDb21wb25lbnRDYWxsYmFja3MobmV4dFZOb2RlLnJlZiwgZG9tLCBsaWZlY3ljbGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoaXNDbGFzcykge1xuICAgICAgICAgICAgaWYgKGxhc3RLZXkgIT09IG5leHRLZXkpIHtcbiAgICAgICAgICAgICAgICByZXBsYWNlV2l0aE5ld05vZGUobGFzdFZOb2RlLCBuZXh0Vk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IGxhc3RWTm9kZS5jaGlsZHJlbjtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5fdW5tb3VudGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTnVsbChwYXJlbnREb20pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXBsYWNlQ2hpbGQocGFyZW50RG9tLCBtb3VudENvbXBvbmVudChuZXh0Vk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIG5leHRWTm9kZS5mbGFncyAmIDQgLyogQ29tcG9uZW50Q2xhc3MgKi8pLCBsYXN0Vk5vZGUuZG9tKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBsYXN0U3RhdGUgPSBpbnN0YW5jZS5zdGF0ZTtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dFN0YXRlID0gaW5zdGFuY2Uuc3RhdGU7XG4gICAgICAgICAgICAgICAgdmFyIGxhc3RQcm9wcyA9IGluc3RhbmNlLnByb3BzO1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZENvbnRleHQgPSBpbnN0YW5jZS5nZXRDaGlsZENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICBuZXh0Vk5vZGUuY2hpbGRyZW4gPSBpbnN0YW5jZTtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5faXNTVkcgPSBpc1NWRztcbiAgICAgICAgICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYoY2hpbGRDb250ZXh0KSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LCBjaGlsZENvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRDb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGxhc3RJbnB1dCQxID0gaW5zdGFuY2UuX2xhc3RJbnB1dDtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dElucHV0JDEgPSBpbnN0YW5jZS5fdXBkYXRlQ29tcG9uZW50KGxhc3RTdGF0ZSwgbmV4dFN0YXRlLCBsYXN0UHJvcHMsIG5leHRQcm9wcywgY29udGV4dCwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB2YXIgZGlkVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5fY2hpbGRDb250ZXh0ID0gY2hpbGRDb250ZXh0O1xuICAgICAgICAgICAgICAgIGlmIChpc0ludmFsaWQobmV4dElucHV0JDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbnB1dCQxID0gY3JlYXRlVm9pZFZOb2RlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5leHRJbnB1dCQxID09PSBOT19PUCkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SW5wdXQkMSA9IGxhc3RJbnB1dCQxO1xuICAgICAgICAgICAgICAgICAgICBkaWRVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNTdHJpbmdPck51bWJlcihuZXh0SW5wdXQkMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dElucHV0JDEgPSBjcmVhdGVUZXh0Vk5vZGUobmV4dElucHV0JDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc0FycmF5KG5leHRJbnB1dCQxKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcignYSB2YWxpZCBJbmZlcm5vIFZOb2RlIChvciBudWxsKSBtdXN0IGJlIHJldHVybmVkIGZyb20gYSBjb21wb25lbnQgcmVuZGVyLiBZb3UgbWF5IGhhdmUgcmV0dXJuZWQgYW4gYXJyYXkgb3IgYW4gaW52YWxpZCBvYmplY3QuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc09iamVjdChuZXh0SW5wdXQkMSkgJiYgbmV4dElucHV0JDEuZG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbnB1dCQxID0gY2xvbmVWTm9kZShuZXh0SW5wdXQkMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChuZXh0SW5wdXQkMS5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SW5wdXQkMS5wYXJlbnRWTm9kZSA9IG5leHRWTm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobGFzdElucHV0JDEuZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdElucHV0JDEucGFyZW50Vk5vZGUgPSBuZXh0Vk5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluc3RhbmNlLl9sYXN0SW5wdXQgPSBuZXh0SW5wdXQkMTtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5fdk5vZGUgPSBuZXh0Vk5vZGU7XG4gICAgICAgICAgICAgICAgaWYgKGRpZFVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZmFzdFVubW91bnQgPSBsaWZlY3ljbGUuZmFzdFVubW91bnQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdWJMaWZlY3ljbGUgPSBpbnN0YW5jZS5fbGlmZWN5Y2xlO1xuICAgICAgICAgICAgICAgICAgICBsaWZlY3ljbGUuZmFzdFVubW91bnQgPSBzdWJMaWZlY3ljbGUuZmFzdFVubW91bnQ7XG4gICAgICAgICAgICAgICAgICAgIHBhdGNoKGxhc3RJbnB1dCQxLCBuZXh0SW5wdXQkMSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNoaWxkQ29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgc3ViTGlmZWN5Y2xlLmZhc3RVbm1vdW50ID0gbGlmZWN5Y2xlLmZhc3RVbm1vdW50O1xuICAgICAgICAgICAgICAgICAgICBsaWZlY3ljbGUuZmFzdFVubW91bnQgPSBmYXN0VW5tb3VudDtcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuY29tcG9uZW50RGlkVXBkYXRlKGxhc3RQcm9wcywgbGFzdFN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5hZnRlclVwZGF0ZSAmJiBvcHRpb25zLmFmdGVyVXBkYXRlKG5leHRWTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZmluZERPTU5vZGVFbmFibGVkICYmIGNvbXBvbmVudFRvRE9NTm9kZU1hcC5zZXQoaW5zdGFuY2UsIG5leHRJbnB1dCQxLmRvbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5leHRWTm9kZS5kb20gPSBuZXh0SW5wdXQkMS5kb207XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgc2hvdWxkVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBsYXN0UHJvcHMkMSA9IGxhc3RWTm9kZS5wcm9wcztcbiAgICAgICAgICAgIHZhciBuZXh0SG9va3MgPSBuZXh0Vk5vZGUucmVmO1xuICAgICAgICAgICAgdmFyIG5leHRIb29rc0RlZmluZWQgPSAhaXNOdWxsT3JVbmRlZihuZXh0SG9va3MpO1xuICAgICAgICAgICAgdmFyIGxhc3RJbnB1dCQyID0gbGFzdFZOb2RlLmNoaWxkcmVuO1xuICAgICAgICAgICAgdmFyIG5leHRJbnB1dCQyID0gbGFzdElucHV0JDI7XG4gICAgICAgICAgICBuZXh0Vk5vZGUuZG9tID0gbGFzdFZOb2RlLmRvbTtcbiAgICAgICAgICAgIG5leHRWTm9kZS5jaGlsZHJlbiA9IGxhc3RJbnB1dCQyO1xuICAgICAgICAgICAgaWYgKGxhc3RLZXkgIT09IG5leHRLZXkpIHtcbiAgICAgICAgICAgICAgICBzaG91bGRVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG5leHRIb29rc0RlZmluZWQgJiYgIWlzTnVsbE9yVW5kZWYobmV4dEhvb2tzLm9uQ29tcG9uZW50U2hvdWxkVXBkYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBzaG91bGRVcGRhdGUgPSBuZXh0SG9va3Mub25Db21wb25lbnRTaG91bGRVcGRhdGUobGFzdFByb3BzJDEsIG5leHRQcm9wcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAobmV4dEhvb2tzRGVmaW5lZCAmJiAhaXNOdWxsT3JVbmRlZihuZXh0SG9va3Mub25Db21wb25lbnRXaWxsVXBkYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SG9va3Mub25Db21wb25lbnRXaWxsVXBkYXRlKGxhc3RQcm9wcyQxLCBuZXh0UHJvcHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXh0SW5wdXQkMiA9IG5leHRUeXBlKG5leHRQcm9wcywgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzSW52YWxpZChuZXh0SW5wdXQkMikpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dElucHV0JDIgPSBjcmVhdGVWb2lkVk5vZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNTdHJpbmdPck51bWJlcihuZXh0SW5wdXQkMikgJiYgbmV4dElucHV0JDIgIT09IE5PX09QKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbnB1dCQyID0gY3JlYXRlVGV4dFZOb2RlKG5leHRJbnB1dCQyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNBcnJheShuZXh0SW5wdXQkMikpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93RXJyb3IoJ2EgdmFsaWQgSW5mZXJubyBWTm9kZSAob3IgbnVsbCkgbXVzdCBiZSByZXR1cm5lZCBmcm9tIGEgY29tcG9uZW50IHJlbmRlci4gWW91IG1heSBoYXZlIHJldHVybmVkIGFuIGFycmF5IG9yIGFuIGludmFsaWQgb2JqZWN0LicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93RXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNPYmplY3QobmV4dElucHV0JDIpICYmIG5leHRJbnB1dCQyLmRvbSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SW5wdXQkMiA9IGNsb25lVk5vZGUobmV4dElucHV0JDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobmV4dElucHV0JDIgIT09IE5PX09QKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGNoKGxhc3RJbnB1dCQyLCBuZXh0SW5wdXQkMiwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICAgICAgICAgIG5leHRWTm9kZS5jaGlsZHJlbiA9IG5leHRJbnB1dCQyO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dEhvb2tzRGVmaW5lZCAmJiAhaXNOdWxsT3JVbmRlZihuZXh0SG9va3Mub25Db21wb25lbnREaWRVcGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0SG9va3Mub25Db21wb25lbnREaWRVcGRhdGUobGFzdFByb3BzJDEsIG5leHRQcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbmV4dFZOb2RlLmRvbSA9IG5leHRJbnB1dCQyLmRvbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV4dElucHV0JDIuZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgICAgICAgICBuZXh0SW5wdXQkMi5wYXJlbnRWTm9kZSA9IG5leHRWTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGxhc3RJbnB1dCQyLmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICAgICAgbGFzdElucHV0JDIucGFyZW50Vk5vZGUgPSBuZXh0Vk5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gcGF0Y2hUZXh0KGxhc3RWTm9kZSwgbmV4dFZOb2RlKSB7XG4gICAgdmFyIG5leHRUZXh0ID0gbmV4dFZOb2RlLmNoaWxkcmVuO1xuICAgIHZhciBkb20gPSBsYXN0Vk5vZGUuZG9tO1xuICAgIG5leHRWTm9kZS5kb20gPSBkb207XG4gICAgaWYgKGxhc3RWTm9kZS5jaGlsZHJlbiAhPT0gbmV4dFRleHQpIHtcbiAgICAgICAgZG9tLm5vZGVWYWx1ZSA9IG5leHRUZXh0O1xuICAgIH1cbn1cbmZ1bmN0aW9uIHBhdGNoVm9pZChsYXN0Vk5vZGUsIG5leHRWTm9kZSkge1xuICAgIG5leHRWTm9kZS5kb20gPSBsYXN0Vk5vZGUuZG9tO1xufVxuZnVuY3Rpb24gcGF0Y2hOb25LZXllZENoaWxkcmVuKGxhc3RDaGlsZHJlbiwgbmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKSB7XG4gICAgdmFyIGxhc3RDaGlsZHJlbkxlbmd0aCA9IGxhc3RDaGlsZHJlbi5sZW5ndGg7XG4gICAgdmFyIG5leHRDaGlsZHJlbkxlbmd0aCA9IG5leHRDaGlsZHJlbi5sZW5ndGg7XG4gICAgdmFyIGNvbW1vbkxlbmd0aCA9IGxhc3RDaGlsZHJlbkxlbmd0aCA+IG5leHRDaGlsZHJlbkxlbmd0aCA/IG5leHRDaGlsZHJlbkxlbmd0aCA6IGxhc3RDaGlsZHJlbkxlbmd0aDtcbiAgICB2YXIgaSA9IDA7XG4gICAgZm9yICg7IGkgPCBjb21tb25MZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgbmV4dENoaWxkID0gbmV4dENoaWxkcmVuW2ldO1xuICAgICAgICBpZiAobmV4dENoaWxkLmRvbSkge1xuICAgICAgICAgICAgbmV4dENoaWxkID0gbmV4dENoaWxkcmVuW2ldID0gY2xvbmVWTm9kZShuZXh0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHBhdGNoKGxhc3RDaGlsZHJlbltpXSwgbmV4dENoaWxkLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG4gICAgaWYgKGxhc3RDaGlsZHJlbkxlbmd0aCA8IG5leHRDaGlsZHJlbkxlbmd0aCkge1xuICAgICAgICBmb3IgKGkgPSBjb21tb25MZW5ndGg7IGkgPCBuZXh0Q2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG5leHRDaGlsZCQxID0gbmV4dENoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKG5leHRDaGlsZCQxLmRvbSkge1xuICAgICAgICAgICAgICAgIG5leHRDaGlsZCQxID0gbmV4dENoaWxkcmVuW2ldID0gY2xvbmVWTm9kZShuZXh0Q2hpbGQkMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcHBlbmRDaGlsZChkb20sIG1vdW50KG5leHRDaGlsZCQxLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobmV4dENoaWxkcmVuTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlbW92ZUFsbENoaWxkcmVuKGRvbSwgbGFzdENoaWxkcmVuLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobGFzdENoaWxkcmVuTGVuZ3RoID4gbmV4dENoaWxkcmVuTGVuZ3RoKSB7XG4gICAgICAgIGZvciAoaSA9IGNvbW1vbkxlbmd0aDsgaSA8IGxhc3RDaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB1bm1vdW50KGxhc3RDaGlsZHJlbltpXSwgZG9tLCBsaWZlY3ljbGUsIGZhbHNlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBwYXRjaEtleWVkQ2hpbGRyZW4oYSwgYiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZykge1xuICAgIHZhciBhTGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgdmFyIGJMZW5ndGggPSBiLmxlbmd0aDtcbiAgICB2YXIgYUVuZCA9IGFMZW5ndGggLSAxO1xuICAgIHZhciBiRW5kID0gYkxlbmd0aCAtIDE7XG4gICAgdmFyIGFTdGFydCA9IDA7XG4gICAgdmFyIGJTdGFydCA9IDA7XG4gICAgdmFyIGk7XG4gICAgdmFyIGo7XG4gICAgdmFyIGFOb2RlO1xuICAgIHZhciBiTm9kZTtcbiAgICB2YXIgbmV4dE5vZGU7XG4gICAgdmFyIG5leHRQb3M7XG4gICAgdmFyIG5vZGU7XG4gICAgaWYgKGFMZW5ndGggPT09IDApIHtcbiAgICAgICAgaWYgKGJMZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIG1vdW50QXJyYXlDaGlsZHJlbihiLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSBpZiAoYkxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZW1vdmVBbGxDaGlsZHJlbihkb20sIGEsIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBhU3RhcnROb2RlID0gYVthU3RhcnRdO1xuICAgIHZhciBiU3RhcnROb2RlID0gYltiU3RhcnRdO1xuICAgIHZhciBhRW5kTm9kZSA9IGFbYUVuZF07XG4gICAgdmFyIGJFbmROb2RlID0gYltiRW5kXTtcbiAgICBpZiAoYlN0YXJ0Tm9kZS5kb20pIHtcbiAgICAgICAgYltiU3RhcnRdID0gYlN0YXJ0Tm9kZSA9IGNsb25lVk5vZGUoYlN0YXJ0Tm9kZSk7XG4gICAgfVxuICAgIGlmIChiRW5kTm9kZS5kb20pIHtcbiAgICAgICAgYltiRW5kXSA9IGJFbmROb2RlID0gY2xvbmVWTm9kZShiRW5kTm9kZSk7XG4gICAgfVxuICAgIC8vIFN0ZXAgMVxuICAgIC8qIGVzbGludCBuby1jb25zdGFudC1jb25kaXRpb246IDAgKi9cbiAgICBvdXRlcjogd2hpbGUgKHRydWUpIHtcbiAgICAgICAgLy8gU3luYyBub2RlcyB3aXRoIHRoZSBzYW1lIGtleSBhdCB0aGUgYmVnaW5uaW5nLlxuICAgICAgICB3aGlsZSAoYVN0YXJ0Tm9kZS5rZXkgPT09IGJTdGFydE5vZGUua2V5KSB7XG4gICAgICAgICAgICBwYXRjaChhU3RhcnROb2RlLCBiU3RhcnROb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIGFTdGFydCsrO1xuICAgICAgICAgICAgYlN0YXJ0Kys7XG4gICAgICAgICAgICBpZiAoYVN0YXJ0ID4gYUVuZCB8fCBiU3RhcnQgPiBiRW5kKSB7XG4gICAgICAgICAgICAgICAgYnJlYWsgb3V0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhU3RhcnROb2RlID0gYVthU3RhcnRdO1xuICAgICAgICAgICAgYlN0YXJ0Tm9kZSA9IGJbYlN0YXJ0XTtcbiAgICAgICAgICAgIGlmIChiU3RhcnROb2RlLmRvbSkge1xuICAgICAgICAgICAgICAgIGJbYlN0YXJ0XSA9IGJTdGFydE5vZGUgPSBjbG9uZVZOb2RlKGJTdGFydE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFN5bmMgbm9kZXMgd2l0aCB0aGUgc2FtZSBrZXkgYXQgdGhlIGVuZC5cbiAgICAgICAgd2hpbGUgKGFFbmROb2RlLmtleSA9PT0gYkVuZE5vZGUua2V5KSB7XG4gICAgICAgICAgICBwYXRjaChhRW5kTm9kZSwgYkVuZE5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgYUVuZC0tO1xuICAgICAgICAgICAgYkVuZC0tO1xuICAgICAgICAgICAgaWYgKGFTdGFydCA+IGFFbmQgfHwgYlN0YXJ0ID4gYkVuZCkge1xuICAgICAgICAgICAgICAgIGJyZWFrIG91dGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYUVuZE5vZGUgPSBhW2FFbmRdO1xuICAgICAgICAgICAgYkVuZE5vZGUgPSBiW2JFbmRdO1xuICAgICAgICAgICAgaWYgKGJFbmROb2RlLmRvbSkge1xuICAgICAgICAgICAgICAgIGJbYkVuZF0gPSBiRW5kTm9kZSA9IGNsb25lVk5vZGUoYkVuZE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIE1vdmUgYW5kIHN5bmMgbm9kZXMgZnJvbSByaWdodCB0byBsZWZ0LlxuICAgICAgICBpZiAoYUVuZE5vZGUua2V5ID09PSBiU3RhcnROb2RlLmtleSkge1xuICAgICAgICAgICAgcGF0Y2goYUVuZE5vZGUsIGJTdGFydE5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgaW5zZXJ0T3JBcHBlbmQoZG9tLCBiU3RhcnROb2RlLmRvbSwgYVN0YXJ0Tm9kZS5kb20pO1xuICAgICAgICAgICAgYUVuZC0tO1xuICAgICAgICAgICAgYlN0YXJ0Kys7XG4gICAgICAgICAgICBhRW5kTm9kZSA9IGFbYUVuZF07XG4gICAgICAgICAgICBiU3RhcnROb2RlID0gYltiU3RhcnRdO1xuICAgICAgICAgICAgaWYgKGJTdGFydE5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgYltiU3RhcnRdID0gYlN0YXJ0Tm9kZSA9IGNsb25lVk5vZGUoYlN0YXJ0Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBNb3ZlIGFuZCBzeW5jIG5vZGVzIGZyb20gbGVmdCB0byByaWdodC5cbiAgICAgICAgaWYgKGFTdGFydE5vZGUua2V5ID09PSBiRW5kTm9kZS5rZXkpIHtcbiAgICAgICAgICAgIHBhdGNoKGFTdGFydE5vZGUsIGJFbmROb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIG5leHRQb3MgPSBiRW5kICsgMTtcbiAgICAgICAgICAgIG5leHROb2RlID0gbmV4dFBvcyA8IGIubGVuZ3RoID8gYltuZXh0UG9zXS5kb20gOiBudWxsO1xuICAgICAgICAgICAgaW5zZXJ0T3JBcHBlbmQoZG9tLCBiRW5kTm9kZS5kb20sIG5leHROb2RlKTtcbiAgICAgICAgICAgIGFTdGFydCsrO1xuICAgICAgICAgICAgYkVuZC0tO1xuICAgICAgICAgICAgYVN0YXJ0Tm9kZSA9IGFbYVN0YXJ0XTtcbiAgICAgICAgICAgIGJFbmROb2RlID0gYltiRW5kXTtcbiAgICAgICAgICAgIGlmIChiRW5kTm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICBiW2JFbmRdID0gYkVuZE5vZGUgPSBjbG9uZVZOb2RlKGJFbmROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoYVN0YXJ0ID4gYUVuZCkge1xuICAgICAgICBpZiAoYlN0YXJ0IDw9IGJFbmQpIHtcbiAgICAgICAgICAgIG5leHRQb3MgPSBiRW5kICsgMTtcbiAgICAgICAgICAgIG5leHROb2RlID0gbmV4dFBvcyA8IGIubGVuZ3RoID8gYltuZXh0UG9zXS5kb20gOiBudWxsO1xuICAgICAgICAgICAgd2hpbGUgKGJTdGFydCA8PSBiRW5kKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IGJbYlN0YXJ0XTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICAgICAgYltiU3RhcnRdID0gbm9kZSA9IGNsb25lVk5vZGUobm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJTdGFydCsrO1xuICAgICAgICAgICAgICAgIGluc2VydE9yQXBwZW5kKGRvbSwgbW91bnQobm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyksIG5leHROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChiU3RhcnQgPiBiRW5kKSB7XG4gICAgICAgIHdoaWxlIChhU3RhcnQgPD0gYUVuZCkge1xuICAgICAgICAgICAgdW5tb3VudChhW2FTdGFydCsrXSwgZG9tLCBsaWZlY3ljbGUsIGZhbHNlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFMZW5ndGggPSBhRW5kIC0gYVN0YXJ0ICsgMTtcbiAgICAgICAgYkxlbmd0aCA9IGJFbmQgLSBiU3RhcnQgKyAxO1xuICAgICAgICB2YXIgYU51bGxhYmxlID0gYTtcbiAgICAgICAgdmFyIHNvdXJjZXMgPSBuZXcgQXJyYXkoYkxlbmd0aCk7XG4gICAgICAgIC8vIE1hcmsgYWxsIG5vZGVzIGFzIGluc2VydGVkLlxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYkxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzb3VyY2VzW2ldID0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1vdmVkID0gZmFsc2U7XG4gICAgICAgIHZhciBwb3MgPSAwO1xuICAgICAgICB2YXIgcGF0Y2hlZCA9IDA7XG4gICAgICAgIGlmICgoYkxlbmd0aCA8PSA0KSB8fCAoYUxlbmd0aCAqIGJMZW5ndGggPD0gMTYpKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSBhU3RhcnQ7IGkgPD0gYUVuZDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYU5vZGUgPSBhW2ldO1xuICAgICAgICAgICAgICAgIGlmIChwYXRjaGVkIDwgYkxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSBiU3RhcnQ7IGogPD0gYkVuZDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiTm9kZSA9IGJbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYU5vZGUua2V5ID09PSBiTm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VzW2ogLSBiU3RhcnRdID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zID4gaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MgPSBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYk5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJbal0gPSBiTm9kZSA9IGNsb25lVk5vZGUoYk5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRjaChhTm9kZSwgYk5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGNoZWQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhTnVsbGFibGVbaV0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGtleUluZGV4ID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgZm9yIChpID0gYlN0YXJ0OyBpIDw9IGJFbmQ7IGkrKykge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBiW2ldO1xuICAgICAgICAgICAgICAgIGtleUluZGV4LnNldChub2RlLmtleSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGkgPSBhU3RhcnQ7IGkgPD0gYUVuZDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYU5vZGUgPSBhW2ldO1xuICAgICAgICAgICAgICAgIGlmIChwYXRjaGVkIDwgYkxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBqID0ga2V5SW5kZXguZ2V0KGFOb2RlLmtleSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQoaikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJOb2RlID0gYltqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZXNbaiAtIGJTdGFydF0gPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvcyA+IGopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MgPSBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJOb2RlLmRvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJbal0gPSBiTm9kZSA9IGNsb25lVk5vZGUoYk5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0Y2goYU5vZGUsIGJOb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGNoZWQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGFOdWxsYWJsZVtpXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFMZW5ndGggPT09IGEubGVuZ3RoICYmIHBhdGNoZWQgPT09IDApIHtcbiAgICAgICAgICAgIHJlbW92ZUFsbENoaWxkcmVuKGRvbSwgYSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB3aGlsZSAoYlN0YXJ0IDwgYkxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBiW2JTdGFydF07XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIGJbYlN0YXJ0XSA9IG5vZGUgPSBjbG9uZVZOb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBiU3RhcnQrKztcbiAgICAgICAgICAgICAgICBpbnNlcnRPckFwcGVuZChkb20sIG1vdW50KG5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpLCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGkgPSBhTGVuZ3RoIC0gcGF0Y2hlZDtcbiAgICAgICAgICAgIHdoaWxlIChpID4gMCkge1xuICAgICAgICAgICAgICAgIGFOb2RlID0gYU51bGxhYmxlW2FTdGFydCsrXTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTnVsbChhTm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5tb3VudChhTm9kZSwgZG9tLCBsaWZlY3ljbGUsIHRydWUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtb3ZlZCkge1xuICAgICAgICAgICAgICAgIHZhciBzZXEgPSBsaXNfYWxnb3JpdGhtKHNvdXJjZXMpO1xuICAgICAgICAgICAgICAgIGogPSBzZXEubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBiTGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZXNbaV0gPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3MgPSBpICsgYlN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGJbcG9zXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmRvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJbcG9zXSA9IG5vZGUgPSBjbG9uZVZOb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBvcyA9IHBvcyArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0Tm9kZSA9IG5leHRQb3MgPCBiLmxlbmd0aCA/IGJbbmV4dFBvc10uZG9tIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydE9yQXBwZW5kKGRvbSwgbW91bnQobm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSwgbmV4dE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogPCAwIHx8IGkgIT09IHNlcVtqXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcyA9IGkgKyBiU3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGJbcG9zXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0UG9zID0gcG9zICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0Tm9kZSA9IG5leHRQb3MgPCBiLmxlbmd0aCA/IGJbbmV4dFBvc10uZG9tIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRPckFwcGVuZChkb20sIG5vZGUuZG9tLCBuZXh0Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqLS07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwYXRjaGVkICE9PSBiTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gYkxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2VzW2ldID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gaSArIGJTdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgPSBiW3Bvc107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiW3Bvc10gPSBub2RlID0gY2xvbmVWTm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQb3MgPSBwb3MgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE5vZGUgPSBuZXh0UG9zIDwgYi5sZW5ndGggPyBiW25leHRQb3NdLmRvbSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRPckFwcGVuZChkb20sIG1vdW50KG5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpLCBuZXh0Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyAvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Mb25nZXN0X2luY3JlYXNpbmdfc3Vic2VxdWVuY2VcbmZ1bmN0aW9uIGxpc19hbGdvcml0aG0oYSkge1xuICAgIHZhciBwID0gYS5zbGljZSgwKTtcbiAgICB2YXIgcmVzdWx0ID0gWzBdO1xuICAgIHZhciBpO1xuICAgIHZhciBqO1xuICAgIHZhciB1O1xuICAgIHZhciB2O1xuICAgIHZhciBjO1xuICAgIGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhW2ldID09PSAtMSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaiA9IHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmIChhW2pdIDwgYVtpXSkge1xuICAgICAgICAgICAgcFtpXSA9IGo7XG4gICAgICAgICAgICByZXN1bHQucHVzaChpKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHUgPSAwO1xuICAgICAgICB2ID0gcmVzdWx0Lmxlbmd0aCAtIDE7XG4gICAgICAgIHdoaWxlICh1IDwgdikge1xuICAgICAgICAgICAgYyA9ICgodSArIHYpIC8gMikgfCAwO1xuICAgICAgICAgICAgaWYgKGFbcmVzdWx0W2NdXSA8IGFbaV0pIHtcbiAgICAgICAgICAgICAgICB1ID0gYyArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2ID0gYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYVtpXSA8IGFbcmVzdWx0W3VdXSkge1xuICAgICAgICAgICAgaWYgKHUgPiAwKSB7XG4gICAgICAgICAgICAgICAgcFtpXSA9IHJlc3VsdFt1IC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHRbdV0gPSBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHUgPSByZXN1bHQubGVuZ3RoO1xuICAgIHYgPSByZXN1bHRbdSAtIDFdO1xuICAgIHdoaWxlICh1LS0gPiAwKSB7XG4gICAgICAgIHJlc3VsdFt1XSA9IHY7XG4gICAgICAgIHYgPSBwW3ZdO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gcGF0Y2hQcm9wKHByb3AsIGxhc3RWYWx1ZSwgbmV4dFZhbHVlLCBkb20sIGlzU1ZHLCBoYXNDb250cm9sbGVkVmFsdWUpIHtcbiAgICBpZiAoc2tpcFByb3BzW3Byb3BdIHx8IGhhc0NvbnRyb2xsZWRWYWx1ZSAmJiBwcm9wID09PSAndmFsdWUnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGJvb2xlYW5Qcm9wc1twcm9wXSkge1xuICAgICAgICBkb21bcHJvcF0gPSAhIW5leHRWYWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc3RyaWN0UHJvcHNbcHJvcF0pIHtcbiAgICAgICAgdmFyIHZhbHVlID0gaXNOdWxsT3JVbmRlZihuZXh0VmFsdWUpID8gJycgOiBuZXh0VmFsdWU7XG4gICAgICAgIGlmIChkb21bcHJvcF0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBkb21bcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChsYXN0VmFsdWUgIT09IG5leHRWYWx1ZSkge1xuICAgICAgICBpZiAoaXNBdHRyQW5FdmVudChwcm9wKSkge1xuICAgICAgICAgICAgcGF0Y2hFdmVudChwcm9wLCBsYXN0VmFsdWUsIG5leHRWYWx1ZSwgZG9tKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc051bGxPclVuZGVmKG5leHRWYWx1ZSkpIHtcbiAgICAgICAgICAgIGRvbS5yZW1vdmVBdHRyaWJ1dGUocHJvcCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvcCA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICAgICAgICAgIGlmIChpc1NWRykge1xuICAgICAgICAgICAgICAgIGRvbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgbmV4dFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvbS5jbGFzc05hbWUgPSBuZXh0VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvcCA9PT0gJ3N0eWxlJykge1xuICAgICAgICAgICAgcGF0Y2hTdHlsZShsYXN0VmFsdWUsIG5leHRWYWx1ZSwgZG9tKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wID09PSAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnKSB7XG4gICAgICAgICAgICB2YXIgbGFzdEh0bWwgPSBsYXN0VmFsdWUgJiYgbGFzdFZhbHVlLl9faHRtbDtcbiAgICAgICAgICAgIHZhciBuZXh0SHRtbCA9IG5leHRWYWx1ZSAmJiBuZXh0VmFsdWUuX19odG1sO1xuICAgICAgICAgICAgaWYgKGxhc3RIdG1sICE9PSBuZXh0SHRtbCkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOdWxsT3JVbmRlZihuZXh0SHRtbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tLmlubmVySFRNTCA9IG5leHRIdG1sO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBkZWh5cGhlblByb3A7XG4gICAgICAgICAgICBpZiAoZGVoeXBoZW5Qcm9wc1twcm9wXSkge1xuICAgICAgICAgICAgICAgIGRlaHlwaGVuUHJvcCA9IGRlaHlwaGVuUHJvcHNbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc1NWRyAmJiBwcm9wLm1hdGNoKHByb2JhYmx5S2ViYWJQcm9wcykpIHtcbiAgICAgICAgICAgICAgICBkZWh5cGhlblByb3AgPSBwcm9wLnJlcGxhY2UoLyhbYS16XSkoW0EtWl18MSkvZywga2ViYWJpemUpO1xuICAgICAgICAgICAgICAgIGRlaHlwaGVuUHJvcHNbcHJvcF0gPSBkZWh5cGhlblByb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWh5cGhlblByb3AgPSBwcm9wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG5zID0gbmFtZXNwYWNlc1twcm9wXTtcbiAgICAgICAgICAgIGlmIChucykge1xuICAgICAgICAgICAgICAgIGRvbS5zZXRBdHRyaWJ1dGVOUyhucywgZGVoeXBoZW5Qcm9wLCBuZXh0VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9tLnNldEF0dHJpYnV0ZShkZWh5cGhlblByb3AsIG5leHRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBwYXRjaEV2ZW50cyhsYXN0RXZlbnRzLCBuZXh0RXZlbnRzLCBkb20pIHtcbiAgICBsYXN0RXZlbnRzID0gbGFzdEV2ZW50cyB8fCBFTVBUWV9PQko7XG4gICAgbmV4dEV2ZW50cyA9IG5leHRFdmVudHMgfHwgRU1QVFlfT0JKO1xuICAgIGlmIChuZXh0RXZlbnRzICE9PSBFTVBUWV9PQkopIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBuZXh0RXZlbnRzKSB7XG4gICAgICAgICAgICAvLyBkbyBub3QgYWRkIGEgaGFzT3duUHJvcGVydHkgY2hlY2sgaGVyZSwgaXQgYWZmZWN0cyBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgcGF0Y2hFdmVudChuYW1lLCBsYXN0RXZlbnRzW25hbWVdLCBuZXh0RXZlbnRzW25hbWVdLCBkb20pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChsYXN0RXZlbnRzICE9PSBFTVBUWV9PQkopIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSQxIGluIGxhc3RFdmVudHMpIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdCBhZGQgYSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBoZXJlLCBpdCBhZmZlY3RzIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICBpZiAoaXNOdWxsT3JVbmRlZihuZXh0RXZlbnRzW25hbWUkMV0pKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hFdmVudChuYW1lJDEsIGxhc3RFdmVudHNbbmFtZSQxXSwgbnVsbCwgZG9tKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHBhdGNoRXZlbnQobmFtZSwgbGFzdFZhbHVlLCBuZXh0VmFsdWUsIGRvbSkge1xuICAgIGlmIChsYXN0VmFsdWUgIT09IG5leHRWYWx1ZSkge1xuICAgICAgICB2YXIgbmFtZUxvd2VyQ2FzZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdmFyIGRvbUV2ZW50ID0gZG9tW25hbWVMb3dlckNhc2VdO1xuICAgICAgICAvLyBpZiB0aGUgZnVuY3Rpb24gaXMgd3JhcHBlZCwgdGhhdCBtZWFucyBpdCdzIGJlZW4gY29udHJvbGxlZCBieSBhIHdyYXBwZXJcbiAgICAgICAgaWYgKGRvbUV2ZW50ICYmIGRvbUV2ZW50LndyYXBwZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVsZWdhdGVkUHJvcHNbbmFtZV0pIHtcbiAgICAgICAgICAgIGhhbmRsZUV2ZW50KG5hbWUsIGxhc3RWYWx1ZSwgbmV4dFZhbHVlLCBkb20pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGxhc3RWYWx1ZSAhPT0gbmV4dFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc0Z1bmN0aW9uKG5leHRWYWx1ZSkgJiYgIWlzTnVsbE9yVW5kZWYobmV4dFZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGlua0V2ZW50ID0gbmV4dFZhbHVlLmV2ZW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAobGlua0V2ZW50ICYmIGlzRnVuY3Rpb24obGlua0V2ZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkb20uX2RhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21bbmFtZUxvd2VyQ2FzZV0gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rRXZlbnQoZS5jdXJyZW50VGFyZ2V0Ll9kYXRhLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tLl9kYXRhID0gbmV4dFZhbHVlLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93RXJyb3IoKFwiYW4gZXZlbnQgb24gYSBWTm9kZSBcXFwiXCIgKyBuYW1lICsgXCJcXFwiLiB3YXMgbm90IGEgZnVuY3Rpb24gb3IgYSB2YWxpZCBsaW5rRXZlbnQuXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93RXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tW25hbWVMb3dlckNhc2VdID0gbmV4dFZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIFdlIGFyZSBhc3N1bWluZyBoZXJlIHRoYXQgd2UgY29tZSBmcm9tIHBhdGNoUHJvcCByb3V0aW5lXG4vLyAtbmV4dEF0dHJWYWx1ZSBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWRcbmZ1bmN0aW9uIHBhdGNoU3R5bGUobGFzdEF0dHJWYWx1ZSwgbmV4dEF0dHJWYWx1ZSwgZG9tKSB7XG4gICAgaWYgKGlzU3RyaW5nKG5leHRBdHRyVmFsdWUpKSB7XG4gICAgICAgIGRvbS5zdHlsZS5jc3NUZXh0ID0gbmV4dEF0dHJWYWx1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKHZhciBzdHlsZSBpbiBuZXh0QXR0clZhbHVlKSB7XG4gICAgICAgIC8vIGRvIG5vdCBhZGQgYSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBoZXJlLCBpdCBhZmZlY3RzIHBlcmZvcm1hbmNlXG4gICAgICAgIHZhciB2YWx1ZSA9IG5leHRBdHRyVmFsdWVbc3R5bGVdO1xuICAgICAgICBpZiAoaXNOdW1iZXIodmFsdWUpICYmICFpc1VuaXRsZXNzTnVtYmVyW3N0eWxlXSkge1xuICAgICAgICAgICAgZG9tLnN0eWxlW3N0eWxlXSA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRvbS5zdHlsZVtzdHlsZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWlzTnVsbE9yVW5kZWYobGFzdEF0dHJWYWx1ZSkpIHtcbiAgICAgICAgZm9yICh2YXIgc3R5bGUkMSBpbiBsYXN0QXR0clZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoaXNOdWxsT3JVbmRlZihuZXh0QXR0clZhbHVlW3N0eWxlJDFdKSkge1xuICAgICAgICAgICAgICAgIGRvbS5zdHlsZVtzdHlsZSQxXSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gcmVtb3ZlUHJvcChwcm9wLCBsYXN0VmFsdWUsIGRvbSkge1xuICAgIGlmIChwcm9wID09PSAnY2xhc3NOYW1lJykge1xuICAgICAgICBkb20ucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wID09PSAndmFsdWUnKSB7XG4gICAgICAgIGRvbS52YWx1ZSA9ICcnO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wID09PSAnc3R5bGUnKSB7XG4gICAgICAgIGRvbS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzQXR0ckFuRXZlbnQocHJvcCkpIHtcbiAgICAgICAgaGFuZGxlRXZlbnQobmFtZSwgbGFzdFZhbHVlLCBudWxsLCBkb20pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZG9tLnJlbW92ZUF0dHJpYnV0ZShwcm9wKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1vdW50KHZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpIHtcbiAgICB2YXIgZmxhZ3MgPSB2Tm9kZS5mbGFncztcbiAgICBpZiAoZmxhZ3MgJiAzOTcwIC8qIEVsZW1lbnQgKi8pIHtcbiAgICAgICAgcmV0dXJuIG1vdW50RWxlbWVudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgcmV0dXJuIG1vdW50Q29tcG9uZW50KHZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGZsYWdzICYgNCAvKiBDb21wb25lbnRDbGFzcyAqLyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWdzICYgNDA5NiAvKiBWb2lkICovKSB7XG4gICAgICAgIHJldHVybiBtb3VudFZvaWQodk5vZGUsIHBhcmVudERvbSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWdzICYgMSAvKiBUZXh0ICovKSB7XG4gICAgICAgIHJldHVybiBtb3VudFRleHQodk5vZGUsIHBhcmVudERvbSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2Tm9kZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKChcIm1vdW50KCkgcmVjZWl2ZWQgYW4gb2JqZWN0IHRoYXQncyBub3QgYSB2YWxpZCBWTm9kZSwgeW91IHNob3VsZCBzdHJpbmdpZnkgaXQgZmlyc3QuIE9iamVjdDogXFxcIlwiICsgKEpTT04uc3RyaW5naWZ5KHZOb2RlKSkgKyBcIlxcXCIuXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93RXJyb3IoKFwibW91bnQoKSBleHBlY3RzIGEgdmFsaWQgVk5vZGUsIGluc3RlYWQgaXQgcmVjZWl2ZWQgYW4gb2JqZWN0IHdpdGggdGhlIHR5cGUgXFxcIlwiICsgKHR5cGVvZiB2Tm9kZSkgKyBcIlxcXCIuXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxufVxuZnVuY3Rpb24gbW91bnRUZXh0KHZOb2RlLCBwYXJlbnREb20pIHtcbiAgICB2YXIgZG9tID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodk5vZGUuY2hpbGRyZW4pO1xuICAgIHZOb2RlLmRvbSA9IGRvbTtcbiAgICBpZiAocGFyZW50RG9tKSB7XG4gICAgICAgIGFwcGVuZENoaWxkKHBhcmVudERvbSwgZG9tKTtcbiAgICB9XG4gICAgcmV0dXJuIGRvbTtcbn1cbmZ1bmN0aW9uIG1vdW50Vm9pZCh2Tm9kZSwgcGFyZW50RG9tKSB7XG4gICAgdmFyIGRvbSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICB2Tm9kZS5kb20gPSBkb207XG4gICAgaWYgKHBhcmVudERvbSkge1xuICAgICAgICBhcHBlbmRDaGlsZChwYXJlbnREb20sIGRvbSk7XG4gICAgfVxuICAgIHJldHVybiBkb207XG59XG5mdW5jdGlvbiBtb3VudEVsZW1lbnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIGlmIChvcHRpb25zLnJlY3ljbGluZ0VuYWJsZWQpIHtcbiAgICAgICAgdmFyIGRvbSQxID0gcmVjeWNsZUVsZW1lbnQodk5vZGUsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICBpZiAoIWlzTnVsbChkb20kMSkpIHtcbiAgICAgICAgICAgIGlmICghaXNOdWxsKHBhcmVudERvbSkpIHtcbiAgICAgICAgICAgICAgICBhcHBlbmRDaGlsZChwYXJlbnREb20sIGRvbSQxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkb20kMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgdGFnID0gdk5vZGUudHlwZTtcbiAgICB2YXIgZmxhZ3MgPSB2Tm9kZS5mbGFncztcbiAgICBpZiAoaXNTVkcgfHwgKGZsYWdzICYgMTI4IC8qIFN2Z0VsZW1lbnQgKi8pKSB7XG4gICAgICAgIGlzU1ZHID0gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIGRvbSA9IGRvY3VtZW50Q3JlYXRlRWxlbWVudCh0YWcsIGlzU1ZHKTtcbiAgICB2YXIgY2hpbGRyZW4gPSB2Tm9kZS5jaGlsZHJlbjtcbiAgICB2YXIgcHJvcHMgPSB2Tm9kZS5wcm9wcztcbiAgICB2YXIgZXZlbnRzID0gdk5vZGUuZXZlbnRzO1xuICAgIHZhciByZWYgPSB2Tm9kZS5yZWY7XG4gICAgdk5vZGUuZG9tID0gZG9tO1xuICAgIGlmICghaXNOdWxsKGNoaWxkcmVuKSkge1xuICAgICAgICBpZiAoaXNTdHJpbmdPck51bWJlcihjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIHNldFRleHRDb250ZW50KGRvbSwgY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBtb3VudEFycmF5Q2hpbGRyZW4oY2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNWTm9kZShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIG1vdW50KGNoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBoYXNDb250cm9sbGVkVmFsdWUgPSBmYWxzZTtcbiAgICBpZiAoIShmbGFncyAmIDIgLyogSHRtbEVsZW1lbnQgKi8pKSB7XG4gICAgICAgIGhhc0NvbnRyb2xsZWRWYWx1ZSA9IHByb2Nlc3NFbGVtZW50KGZsYWdzLCB2Tm9kZSwgZG9tKTtcbiAgICB9XG4gICAgaWYgKCFpc051bGwocHJvcHMpKSB7XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdCBhZGQgYSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBoZXJlLCBpdCBhZmZlY3RzIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICBwYXRjaFByb3AocHJvcCwgbnVsbCwgcHJvcHNbcHJvcF0sIGRvbSwgaXNTVkcsIGhhc0NvbnRyb2xsZWRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFpc051bGwoZXZlbnRzKSkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIGV2ZW50cykge1xuICAgICAgICAgICAgLy8gZG8gbm90IGFkZCBhIGhhc093blByb3BlcnR5IGNoZWNrIGhlcmUsIGl0IGFmZmVjdHMgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgIHBhdGNoRXZlbnQobmFtZSwgbnVsbCwgZXZlbnRzW25hbWVdLCBkb20pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghaXNOdWxsKHJlZikpIHtcbiAgICAgICAgbW91bnRSZWYoZG9tLCByZWYsIGxpZmVjeWNsZSk7XG4gICAgfVxuICAgIGlmICghaXNOdWxsKHBhcmVudERvbSkpIHtcbiAgICAgICAgYXBwZW5kQ2hpbGQocGFyZW50RG9tLCBkb20pO1xuICAgIH1cbiAgICByZXR1cm4gZG9tO1xufVxuZnVuY3Rpb24gbW91bnRBcnJheUNoaWxkcmVuKGNoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAvLyBUT0RPOiBWZXJpZnkgY2FuIHN0cmluZy9udW1iZXIgYmUgaGVyZS4gbWlnaHQgY2F1c2UgZGUtb3B0XG4gICAgICAgIGlmICghaXNJbnZhbGlkKGNoaWxkKSkge1xuICAgICAgICAgICAgaWYgKGNoaWxkLmRvbSkge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuW2ldID0gY2hpbGQgPSBjbG9uZVZOb2RlKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1vdW50KGNoaWxkcmVuW2ldLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gbW91bnRDb21wb25lbnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNDbGFzcykge1xuICAgIGlmIChvcHRpb25zLnJlY3ljbGluZ0VuYWJsZWQpIHtcbiAgICAgICAgdmFyIGRvbSQxID0gcmVjeWNsZUNvbXBvbmVudCh2Tm9kZSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIGlmICghaXNOdWxsKGRvbSQxKSkge1xuICAgICAgICAgICAgaWYgKCFpc051bGwocGFyZW50RG9tKSkge1xuICAgICAgICAgICAgICAgIGFwcGVuZENoaWxkKHBhcmVudERvbSwgZG9tJDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRvbSQxO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciB0eXBlID0gdk5vZGUudHlwZTtcbiAgICB2YXIgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuICAgIHZhciByZWYgPSB2Tm9kZS5yZWY7XG4gICAgdmFyIGRvbTtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKGRlZmF1bHRQcm9wcykpIHtcbiAgICAgICAgY29weVByb3BzVG8oZGVmYXVsdFByb3BzLCBwcm9wcyk7XG4gICAgICAgIHZOb2RlLnByb3BzID0gcHJvcHM7XG4gICAgfVxuICAgIGlmIChpc0NsYXNzKSB7XG4gICAgICAgIHZhciBpbnN0YW5jZSA9IGNyZWF0ZUNsYXNzQ29tcG9uZW50SW5zdGFuY2Uodk5vZGUsIHR5cGUsIHByb3BzLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIC8vIElmIGluc3RhbmNlIGRvZXMgbm90IGhhdmUgY29tcG9uZW50V2lsbFVubW91bnQgc3BlY2lmaWVkIHdlIGNhbiBlbmFibGUgZmFzdFVubW91bnRcbiAgICAgICAgdmFyIGlucHV0ID0gaW5zdGFuY2UuX2xhc3RJbnB1dDtcbiAgICAgICAgdmFyIHByZXZGYXN0VW5tb3VudCA9IGxpZmVjeWNsZS5mYXN0VW5tb3VudDtcbiAgICAgICAgLy8gd2Ugc3RvcmUgdGhlIGZhc3RVbm1vdW50IHZhbHVlLCBidXQgd2Ugc2V0IGl0IGJhY2sgdG8gdHJ1ZSBvbiB0aGUgbGlmZWN5Y2xlXG4gICAgICAgIC8vIHdlIGRvIHRoaXMgc28gd2UgY2FuIGRldGVybWluZSBpZiB0aGUgY29tcG9uZW50IHJlbmRlciBoYXMgYSBmYXN0VW5tb3VudCBvciBub3RcbiAgICAgICAgbGlmZWN5Y2xlLmZhc3RVbm1vdW50ID0gdHJ1ZTtcbiAgICAgICAgaW5zdGFuY2UuX3ZOb2RlID0gdk5vZGU7XG4gICAgICAgIHZOb2RlLmRvbSA9IGRvbSA9IG1vdW50KGlucHV0LCBudWxsLCBsaWZlY3ljbGUsIGluc3RhbmNlLl9jaGlsZENvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgLy8gd2Ugbm93IGNyZWF0ZSBhIGxpZmVjeWNsZSBmb3IgdGhpcyBjb21wb25lbnQgYW5kIHN0b3JlIHRoZSBmYXN0VW5tb3VudCB2YWx1ZVxuICAgICAgICB2YXIgc3ViTGlmZWN5Y2xlID0gaW5zdGFuY2UuX2xpZmVjeWNsZSA9IG5ldyBMaWZlY3ljbGUoKTtcbiAgICAgICAgLy8gY2hpbGRyZW4gbGlmZWN5Y2xlIGNhbiBmYXN0VW5tb3VudCBpZiBpdHNlbGYgZG9lcyBuZWVkIHVubW91bnQgY2FsbGJhY2sgYW5kIHdpdGhpbiBpdHMgY3ljbGUgdGhlcmUgd2FzIG5vbmVcbiAgICAgICAgc3ViTGlmZWN5Y2xlLmZhc3RVbm1vdW50ID0gaXNVbmRlZmluZWQoaW5zdGFuY2UuY29tcG9uZW50V2lsbFVubW91bnQpICYmIGxpZmVjeWNsZS5mYXN0VW5tb3VudDtcbiAgICAgICAgLy8gaGlnaGVyIGxpZmVjeWNsZSBjYW4gZmFzdFVubW91bnQgb25seSBpZiBwcmV2aW91c2x5IGl0IHdhcyBhYmxlIHRvIGFuZCB0aGlzIGNoaWxkcmVuIGRvZXNudCBoYXZlIGFueVxuICAgICAgICBsaWZlY3ljbGUuZmFzdFVubW91bnQgPSBwcmV2RmFzdFVubW91bnQgJiYgc3ViTGlmZWN5Y2xlLmZhc3RVbm1vdW50O1xuICAgICAgICBpZiAoIWlzTnVsbChwYXJlbnREb20pKSB7XG4gICAgICAgICAgICBhcHBlbmRDaGlsZChwYXJlbnREb20sIGRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgbW91bnRDbGFzc0NvbXBvbmVudENhbGxiYWNrcyh2Tm9kZSwgcmVmLCBpbnN0YW5jZSwgbGlmZWN5Y2xlKTtcbiAgICAgICAgb3B0aW9ucy5maW5kRE9NTm9kZUVuYWJsZWQgJiYgY29tcG9uZW50VG9ET01Ob2RlTWFwLnNldChpbnN0YW5jZSwgZG9tKTtcbiAgICAgICAgdk5vZGUuY2hpbGRyZW4gPSBpbnN0YW5jZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBpbnB1dCQxID0gY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudElucHV0KHZOb2RlLCB0eXBlLCBwcm9wcywgY29udGV4dCk7XG4gICAgICAgIHZOb2RlLmRvbSA9IGRvbSA9IG1vdW50KGlucHV0JDEsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICB2Tm9kZS5jaGlsZHJlbiA9IGlucHV0JDE7XG4gICAgICAgIG1vdW50RnVuY3Rpb25hbENvbXBvbmVudENhbGxiYWNrcyhyZWYsIGRvbSwgbGlmZWN5Y2xlKTtcbiAgICAgICAgaWYgKCFpc051bGwocGFyZW50RG9tKSkge1xuICAgICAgICAgICAgYXBwZW5kQ2hpbGQocGFyZW50RG9tLCBkb20pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkb207XG59XG5mdW5jdGlvbiBtb3VudENsYXNzQ29tcG9uZW50Q2FsbGJhY2tzKHZOb2RlLCByZWYsIGluc3RhbmNlLCBsaWZlY3ljbGUpIHtcbiAgICBpZiAocmVmKSB7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKHJlZikpIHtcbiAgICAgICAgICAgIHJlZihpbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmIChpc1N0cmluZ09yTnVtYmVyKHJlZikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcignc3RyaW5nIFwicmVmc1wiIGFyZSBub3Qgc3VwcG9ydGVkIGluIEluZmVybm8gMS4wLiBVc2UgY2FsbGJhY2sgXCJyZWZzXCIgaW5zdGVhZC4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNPYmplY3QocmVmKSAmJiAodk5vZGUuZmxhZ3MgJiA0IC8qIENvbXBvbmVudENsYXNzICovKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKCdmdW5jdGlvbmFsIGNvbXBvbmVudCBsaWZlY3ljbGUgZXZlbnRzIGFyZSBub3Qgc3VwcG9ydGVkIG9uIEVTMjAxNSBjbGFzcyBjb21wb25lbnRzLicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcigoXCJhIGJhZCB2YWx1ZSBmb3IgXFxcInJlZlxcXCIgd2FzIHVzZWQgb24gY29tcG9uZW50OiBcXFwiXCIgKyAoSlNPTi5zdHJpbmdpZnkocmVmKSkgKyBcIlxcXCJcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93RXJyb3IoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgY0RNID0gaW5zdGFuY2UuY29tcG9uZW50RGlkTW91bnQ7XG4gICAgdmFyIGFmdGVyTW91bnQgPSBvcHRpb25zLmFmdGVyTW91bnQ7XG4gICAgaWYgKCFpc1VuZGVmaW5lZChjRE0pIHx8ICFpc051bGwoYWZ0ZXJNb3VudCkpIHtcbiAgICAgICAgbGlmZWN5Y2xlLmFkZExpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFmdGVyTW91bnQgJiYgYWZ0ZXJNb3VudCh2Tm9kZSk7XG4gICAgICAgICAgICBjRE0gJiYgaW5zdGFuY2UuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gbW91bnRGdW5jdGlvbmFsQ29tcG9uZW50Q2FsbGJhY2tzKHJlZiwgZG9tLCBsaWZlY3ljbGUpIHtcbiAgICBpZiAocmVmKSB7XG4gICAgICAgIGlmICghaXNOdWxsT3JVbmRlZihyZWYub25Db21wb25lbnRXaWxsTW91bnQpKSB7XG4gICAgICAgICAgICByZWYub25Db21wb25lbnRXaWxsTW91bnQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYocmVmLm9uQ29tcG9uZW50RGlkTW91bnQpKSB7XG4gICAgICAgICAgICBsaWZlY3ljbGUuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVmLm9uQ29tcG9uZW50RGlkTW91bnQoZG9tKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKHJlZi5vbkNvbXBvbmVudFdpbGxVbm1vdW50KSkge1xuICAgICAgICAgICAgbGlmZWN5Y2xlLmZhc3RVbm1vdW50ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBtb3VudFJlZihkb20sIHZhbHVlLCBsaWZlY3ljbGUpIHtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgbGlmZWN5Y2xlLmZhc3RVbm1vdW50ID0gZmFsc2U7XG4gICAgICAgIGxpZmVjeWNsZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7IHJldHVybiB2YWx1ZShkb20pOyB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChpc0ludmFsaWQodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3IoJ3N0cmluZyBcInJlZnNcIiBhcmUgbm90IHN1cHBvcnRlZCBpbiBJbmZlcm5vIDEuMC4gVXNlIGNhbGxiYWNrIFwicmVmc1wiIGluc3RlYWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplQ2hpbGROb2RlcyhwYXJlbnREb20pIHtcbiAgICB2YXIgZG9tID0gcGFyZW50RG9tLmZpcnN0Q2hpbGQ7XG4gICAgd2hpbGUgKGRvbSkge1xuICAgICAgICBpZiAoZG9tLm5vZGVUeXBlID09PSA4KSB7XG4gICAgICAgICAgICBpZiAoZG9tLmRhdGEgPT09ICchJykge1xuICAgICAgICAgICAgICAgIHZhciBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICAgICAgICAgICAgICBwYXJlbnREb20ucmVwbGFjZUNoaWxkKHBsYWNlaG9sZGVyLCBkb20pO1xuICAgICAgICAgICAgICAgIGRvbSA9IGRvbS5uZXh0U2libGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBsYXN0RG9tID0gZG9tLnByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgICAgICBwYXJlbnREb20ucmVtb3ZlQ2hpbGQoZG9tKTtcbiAgICAgICAgICAgICAgICBkb20gPSBsYXN0RG9tIHx8IHBhcmVudERvbS5maXJzdENoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZG9tID0gZG9tLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gaHlkcmF0ZUNvbXBvbmVudCh2Tm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc0NsYXNzKSB7XG4gICAgdmFyIHR5cGUgPSB2Tm9kZS50eXBlO1xuICAgIHZhciBwcm9wcyA9IHZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcbiAgICB2YXIgcmVmID0gdk5vZGUucmVmO1xuICAgIHZOb2RlLmRvbSA9IGRvbTtcbiAgICBpZiAoaXNDbGFzcykge1xuICAgICAgICB2YXIgX2lzU1ZHID0gZG9tLm5hbWVzcGFjZVVSSSA9PT0gc3ZnTlM7XG4gICAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChkZWZhdWx0UHJvcHMpKSB7XG4gICAgICAgICAgICBjb3B5UHJvcHNUbyhkZWZhdWx0UHJvcHMsIHByb3BzKTtcbiAgICAgICAgICAgIHZOb2RlLnByb3BzID0gcHJvcHM7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluc3RhbmNlID0gY3JlYXRlQ2xhc3NDb21wb25lbnRJbnN0YW5jZSh2Tm9kZSwgdHlwZSwgcHJvcHMsIGNvbnRleHQsIF9pc1NWRyk7XG4gICAgICAgIC8vIElmIGluc3RhbmNlIGRvZXMgbm90IGhhdmUgY29tcG9uZW50V2lsbFVubW91bnQgc3BlY2lmaWVkIHdlIGNhbiBlbmFibGUgZmFzdFVubW91bnRcbiAgICAgICAgdmFyIHByZXZGYXN0VW5tb3VudCA9IGxpZmVjeWNsZS5mYXN0VW5tb3VudDtcbiAgICAgICAgdmFyIGlucHV0ID0gaW5zdGFuY2UuX2xhc3RJbnB1dDtcbiAgICAgICAgLy8gd2Ugc3RvcmUgdGhlIGZhc3RVbm1vdW50IHZhbHVlLCBidXQgd2Ugc2V0IGl0IGJhY2sgdG8gdHJ1ZSBvbiB0aGUgbGlmZWN5Y2xlXG4gICAgICAgIC8vIHdlIGRvIHRoaXMgc28gd2UgY2FuIGRldGVybWluZSBpZiB0aGUgY29tcG9uZW50IHJlbmRlciBoYXMgYSBmYXN0VW5tb3VudCBvciBub3RcbiAgICAgICAgbGlmZWN5Y2xlLmZhc3RVbm1vdW50ID0gdHJ1ZTtcbiAgICAgICAgaW5zdGFuY2UuX3ZDb21wb25lbnQgPSB2Tm9kZTtcbiAgICAgICAgaW5zdGFuY2UuX3ZOb2RlID0gdk5vZGU7XG4gICAgICAgIGh5ZHJhdGUoaW5wdXQsIGRvbSwgbGlmZWN5Y2xlLCBpbnN0YW5jZS5fY2hpbGRDb250ZXh0LCBfaXNTVkcpO1xuICAgICAgICAvLyB3ZSBub3cgY3JlYXRlIGEgbGlmZWN5Y2xlIGZvciB0aGlzIGNvbXBvbmVudCBhbmQgc3RvcmUgdGhlIGZhc3RVbm1vdW50IHZhbHVlXG4gICAgICAgIHZhciBzdWJMaWZlY3ljbGUgPSBpbnN0YW5jZS5fbGlmZWN5Y2xlID0gbmV3IExpZmVjeWNsZSgpO1xuICAgICAgICAvLyBjaGlsZHJlbiBsaWZlY3ljbGUgY2FuIGZhc3RVbm1vdW50IGlmIGl0c2VsZiBkb2VzIG5lZWQgdW5tb3VudCBjYWxsYmFjayBhbmQgd2l0aGluIGl0cyBjeWNsZSB0aGVyZSB3YXMgbm9uZVxuICAgICAgICBzdWJMaWZlY3ljbGUuZmFzdFVubW91bnQgPSBpc1VuZGVmaW5lZChpbnN0YW5jZS5jb21wb25lbnRXaWxsVW5tb3VudCkgJiYgbGlmZWN5Y2xlLmZhc3RVbm1vdW50O1xuICAgICAgICAvLyBoaWdoZXIgbGlmZWN5Y2xlIGNhbiBmYXN0VW5tb3VudCBvbmx5IGlmIHByZXZpb3VzbHkgaXQgd2FzIGFibGUgdG8gYW5kIHRoaXMgY2hpbGRyZW4gZG9lc250IGhhdmUgYW55XG4gICAgICAgIGxpZmVjeWNsZS5mYXN0VW5tb3VudCA9IHByZXZGYXN0VW5tb3VudCAmJiBzdWJMaWZlY3ljbGUuZmFzdFVubW91bnQ7XG4gICAgICAgIG1vdW50Q2xhc3NDb21wb25lbnRDYWxsYmFja3Modk5vZGUsIHJlZiwgaW5zdGFuY2UsIGxpZmVjeWNsZSk7XG4gICAgICAgIG9wdGlvbnMuZmluZERPTU5vZGVFbmFibGVkICYmIGNvbXBvbmVudFRvRE9NTm9kZU1hcC5zZXQoaW5zdGFuY2UsIGRvbSk7XG4gICAgICAgIHZOb2RlLmNoaWxkcmVuID0gaW5zdGFuY2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgaW5wdXQkMSA9IGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnRJbnB1dCh2Tm9kZSwgdHlwZSwgcHJvcHMsIGNvbnRleHQpO1xuICAgICAgICBoeWRyYXRlKGlucHV0JDEsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIHZOb2RlLmNoaWxkcmVuID0gaW5wdXQkMTtcbiAgICAgICAgdk5vZGUuZG9tID0gaW5wdXQkMS5kb207XG4gICAgICAgIG1vdW50RnVuY3Rpb25hbENvbXBvbmVudENhbGxiYWNrcyhyZWYsIGRvbSwgbGlmZWN5Y2xlKTtcbiAgICB9XG4gICAgcmV0dXJuIGRvbTtcbn1cbmZ1bmN0aW9uIGh5ZHJhdGVFbGVtZW50KHZOb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpIHtcbiAgICB2YXIgdGFnID0gdk5vZGUudHlwZTtcbiAgICB2YXIgY2hpbGRyZW4gPSB2Tm9kZS5jaGlsZHJlbjtcbiAgICB2YXIgcHJvcHMgPSB2Tm9kZS5wcm9wcztcbiAgICB2YXIgZXZlbnRzID0gdk5vZGUuZXZlbnRzO1xuICAgIHZhciBmbGFncyA9IHZOb2RlLmZsYWdzO1xuICAgIHZhciByZWYgPSB2Tm9kZS5yZWY7XG4gICAgaWYgKGlzU1ZHIHx8IChmbGFncyAmIDEyOCAvKiBTdmdFbGVtZW50ICovKSkge1xuICAgICAgICBpc1NWRyA9IHRydWU7XG4gICAgfVxuICAgIGlmIChkb20ubm9kZVR5cGUgIT09IDEgfHwgZG9tLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gdGFnKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB3YXJuaW5nKCdJbmZlcm5vIGh5ZHJhdGlvbjogU2VydmVyLXNpZGUgbWFya3VwIGRvZXNuXFwndCBtYXRjaCBjbGllbnQtc2lkZSBtYXJrdXAgb3IgSW5pdGlhbCByZW5kZXIgdGFyZ2V0IGlzIG5vdCBlbXB0eScpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuZXdEb20gPSBtb3VudEVsZW1lbnQodk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICB2Tm9kZS5kb20gPSBuZXdEb207XG4gICAgICAgIHJlcGxhY2VDaGlsZChkb20ucGFyZW50Tm9kZSwgbmV3RG9tLCBkb20pO1xuICAgICAgICByZXR1cm4gbmV3RG9tO1xuICAgIH1cbiAgICB2Tm9kZS5kb20gPSBkb207XG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgIGh5ZHJhdGVDaGlsZHJlbihjaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICB9XG4gICAgdmFyIGhhc0NvbnRyb2xsZWRWYWx1ZSA9IGZhbHNlO1xuICAgIGlmICghKGZsYWdzICYgMiAvKiBIdG1sRWxlbWVudCAqLykpIHtcbiAgICAgICAgaGFzQ29udHJvbGxlZFZhbHVlID0gcHJvY2Vzc0VsZW1lbnQoZmxhZ3MsIHZOb2RlLCBkb20pO1xuICAgIH1cbiAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBwcm9wcykge1xuICAgICAgICAgICAgcGF0Y2hQcm9wKHByb3AsIG51bGwsIHByb3BzW3Byb3BdLCBkb20sIGlzU1ZHLCBoYXNDb250cm9sbGVkVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChldmVudHMpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBldmVudHMpIHtcbiAgICAgICAgICAgIHBhdGNoRXZlbnQobmFtZSwgbnVsbCwgZXZlbnRzW25hbWVdLCBkb20pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChyZWYpIHtcbiAgICAgICAgbW91bnRSZWYoZG9tLCByZWYsIGxpZmVjeWNsZSk7XG4gICAgfVxuICAgIHJldHVybiBkb207XG59XG5mdW5jdGlvbiBoeWRyYXRlQ2hpbGRyZW4oY2hpbGRyZW4sIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIG5vcm1hbGl6ZUNoaWxkTm9kZXMocGFyZW50RG9tKTtcbiAgICB2YXIgZG9tID0gcGFyZW50RG9tLmZpcnN0Q2hpbGQ7XG4gICAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKCFpc051bGwoY2hpbGQpICYmIGlzT2JqZWN0KGNoaWxkKSkge1xuICAgICAgICAgICAgICAgIGlmIChkb20pIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tID0gaHlkcmF0ZShjaGlsZCwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgICAgICAgICAgICAgZG9tID0gZG9tLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbW91bnQoY2hpbGQsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXIoY2hpbGRyZW4pKSB7XG4gICAgICAgIGlmIChkb20gJiYgZG9tLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgICAgICBpZiAoZG9tLm5vZGVWYWx1ZSAhPT0gY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBkb20ubm9kZVZhbHVlID0gY2hpbGRyZW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHBhcmVudERvbS50ZXh0Q29udGVudCA9IGNoaWxkcmVuO1xuICAgICAgICB9XG4gICAgICAgIGRvbSA9IGRvbS5uZXh0U2libGluZztcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYmplY3QoY2hpbGRyZW4pKSB7XG4gICAgICAgIGh5ZHJhdGUoY2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIGRvbSA9IGRvbS5uZXh0U2libGluZztcbiAgICB9XG4gICAgLy8gY2xlYXIgYW55IG90aGVyIERPTSBub2RlcywgdGhlcmUgc2hvdWxkIGJlIG9ubHkgYSBzaW5nbGUgZW50cnkgZm9yIHRoZSByb290XG4gICAgd2hpbGUgKGRvbSkge1xuICAgICAgICB2YXIgbmV4dFNpYmxpbmcgPSBkb20ubmV4dFNpYmxpbmc7XG4gICAgICAgIHBhcmVudERvbS5yZW1vdmVDaGlsZChkb20pO1xuICAgICAgICBkb20gPSBuZXh0U2libGluZztcbiAgICB9XG59XG5mdW5jdGlvbiBoeWRyYXRlVGV4dCh2Tm9kZSwgZG9tKSB7XG4gICAgaWYgKGRvbS5ub2RlVHlwZSAhPT0gMykge1xuICAgICAgICB2YXIgbmV3RG9tID0gbW91bnRUZXh0KHZOb2RlLCBudWxsKTtcbiAgICAgICAgdk5vZGUuZG9tID0gbmV3RG9tO1xuICAgICAgICByZXBsYWNlQ2hpbGQoZG9tLnBhcmVudE5vZGUsIG5ld0RvbSwgZG9tKTtcbiAgICAgICAgcmV0dXJuIG5ld0RvbTtcbiAgICB9XG4gICAgdmFyIHRleHQgPSB2Tm9kZS5jaGlsZHJlbjtcbiAgICBpZiAoZG9tLm5vZGVWYWx1ZSAhPT0gdGV4dCkge1xuICAgICAgICBkb20ubm9kZVZhbHVlID0gdGV4dDtcbiAgICB9XG4gICAgdk5vZGUuZG9tID0gZG9tO1xuICAgIHJldHVybiBkb207XG59XG5mdW5jdGlvbiBoeWRyYXRlVm9pZCh2Tm9kZSwgZG9tKSB7XG4gICAgdk5vZGUuZG9tID0gZG9tO1xuICAgIHJldHVybiBkb207XG59XG5mdW5jdGlvbiBoeWRyYXRlKHZOb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpIHtcbiAgICB2YXIgZmxhZ3MgPSB2Tm9kZS5mbGFncztcbiAgICBpZiAoZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgcmV0dXJuIGh5ZHJhdGVDb21wb25lbnQodk5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgZmxhZ3MgJiA0IC8qIENvbXBvbmVudENsYXNzICovKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxhZ3MgJiAzOTcwIC8qIEVsZW1lbnQgKi8pIHtcbiAgICAgICAgcmV0dXJuIGh5ZHJhdGVFbGVtZW50KHZOb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChmbGFncyAmIDEgLyogVGV4dCAqLykge1xuICAgICAgICByZXR1cm4gaHlkcmF0ZVRleHQodk5vZGUsIGRvbSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWdzICYgNDA5NiAvKiBWb2lkICovKSB7XG4gICAgICAgIHJldHVybiBoeWRyYXRlVm9pZCh2Tm9kZSwgZG9tKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKChcImh5ZHJhdGUoKSBleHBlY3RzIGEgdmFsaWQgVk5vZGUsIGluc3RlYWQgaXQgcmVjZWl2ZWQgYW4gb2JqZWN0IHdpdGggdGhlIHR5cGUgXFxcIlwiICsgKHR5cGVvZiB2Tm9kZSkgKyBcIlxcXCIuXCIpKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxufVxuZnVuY3Rpb24gaHlkcmF0ZVJvb3QoaW5wdXQsIHBhcmVudERvbSwgbGlmZWN5Y2xlKSB7XG4gICAgdmFyIGRvbSA9IHBhcmVudERvbSAmJiBwYXJlbnREb20uZmlyc3RDaGlsZDtcbiAgICBpZiAoZG9tKSB7XG4gICAgICAgIGh5ZHJhdGUoaW5wdXQsIGRvbSwgbGlmZWN5Y2xlLCB7fSwgZmFsc2UpO1xuICAgICAgICBkb20gPSBwYXJlbnREb20uZmlyc3RDaGlsZDtcbiAgICAgICAgLy8gY2xlYXIgYW55IG90aGVyIERPTSBub2RlcywgdGhlcmUgc2hvdWxkIGJlIG9ubHkgYSBzaW5nbGUgZW50cnkgZm9yIHRoZSByb290XG4gICAgICAgIHdoaWxlIChkb20gPSBkb20ubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgIHBhcmVudERvbS5yZW1vdmVDaGlsZChkb20pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIHJhdGhlciB0aGFuIHVzZSBhIE1hcCwgbGlrZSB3ZSBkaWQgYmVmb3JlLCB3ZSBjYW4gdXNlIGFuIGFycmF5IGhlcmVcbi8vIGdpdmVuIHRoZXJlIHNob3VsZG4ndCBiZSBUSEFUIG1hbnkgcm9vdHMgb24gdGhlIHBhZ2UsIHRoZSBkaWZmZXJlbmNlXG4vLyBpbiBwZXJmb3JtYW5jZSBpcyBodWdlOiBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzU4MDJhNjkxMzMwYWIwOTkwMGExYTJkYVxudmFyIHJvb3RzID0gW107XG52YXIgY29tcG9uZW50VG9ET01Ob2RlTWFwID0gbmV3IE1hcCgpO1xub3B0aW9ucy5yb290cyA9IHJvb3RzO1xuZnVuY3Rpb24gZmluZERPTU5vZGUocmVmKSB7XG4gICAgaWYgKCFvcHRpb25zLmZpbmRET01Ob2RlRW5hYmxlZCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3dFcnJvcignZmluZERPTU5vZGUoKSBoYXMgYmVlbiBkaXNhYmxlZCwgdXNlIEluZmVybm8ub3B0aW9ucy5maW5kRE9NTm9kZUVuYWJsZWQgPSB0cnVlOyBlbmFibGVkIGZpbmRET01Ob2RlKCkuIFdhcm5pbmcgdGhpcyBjYW4gc2lnbmlmaWNhbnRseSBpbXBhY3QgcGVyZm9ybWFuY2UhJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgIH1cbiAgICB2YXIgZG9tID0gcmVmICYmIHJlZi5ub2RlVHlwZSA/IHJlZiA6IG51bGw7XG4gICAgcmV0dXJuIGNvbXBvbmVudFRvRE9NTm9kZU1hcC5nZXQocmVmKSB8fCBkb207XG59XG5mdW5jdGlvbiBnZXRSb290KGRvbSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm9vdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHJvb3QgPSByb290c1tpXTtcbiAgICAgICAgaWYgKHJvb3QuZG9tID09PSBkb20pIHtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gc2V0Um9vdChkb20sIGlucHV0LCBsaWZlY3ljbGUpIHtcbiAgICB2YXIgcm9vdCA9IHtcbiAgICAgICAgZG9tOiBkb20sXG4gICAgICAgIGlucHV0OiBpbnB1dCxcbiAgICAgICAgbGlmZWN5Y2xlOiBsaWZlY3ljbGVcbiAgICB9O1xuICAgIHJvb3RzLnB1c2gocm9vdCk7XG4gICAgcmV0dXJuIHJvb3Q7XG59XG5mdW5jdGlvbiByZW1vdmVSb290KHJvb3QpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChyb290c1tpXSA9PT0gcm9vdCkge1xuICAgICAgICAgICAgcm9vdHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxufVxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoaXNCcm93c2VyICYmIGRvY3VtZW50LmJvZHkgPT09IG51bGwpIHtcbiAgICAgICAgd2FybmluZygnSW5mZXJubyB3YXJuaW5nOiB5b3UgY2Fubm90IGluaXRpYWxpemUgaW5mZXJubyB3aXRob3V0IFwiZG9jdW1lbnQuYm9keVwiLiBXYWl0IG9uIFwiRE9NQ29udGVudExvYWRlZFwiIGV2ZW50LCBhZGQgc2NyaXB0IHRvIGJvdHRvbSBvZiBib2R5LCBvciB1c2UgYXN5bmMvZGVmZXIgYXR0cmlidXRlcyBvbiBzY3JpcHQgdGFnLicpO1xuICAgIH1cbn1cbnZhciBkb2N1bWVudEJvZHkgPSBpc0Jyb3dzZXIgPyBkb2N1bWVudC5ib2R5IDogbnVsbDtcbmZ1bmN0aW9uIHJlbmRlcihpbnB1dCwgcGFyZW50RG9tKSB7XG4gICAgaWYgKGRvY3VtZW50Qm9keSA9PT0gcGFyZW50RG9tKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKCd5b3UgY2Fubm90IHJlbmRlcigpIHRvIHRoZSBcImRvY3VtZW50LmJvZHlcIi4gVXNlIGFuIGVtcHR5IGVsZW1lbnQgYXMgYSBjb250YWluZXIgaW5zdGVhZC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxuICAgIGlmIChpbnB1dCA9PT0gTk9fT1ApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgcm9vdCA9IGdldFJvb3QocGFyZW50RG9tKTtcbiAgICBpZiAoaXNOdWxsKHJvb3QpKSB7XG4gICAgICAgIHZhciBsaWZlY3ljbGUgPSBuZXcgTGlmZWN5Y2xlKCk7XG4gICAgICAgIGlmICghaXNJbnZhbGlkKGlucHV0KSkge1xuICAgICAgICAgICAgaWYgKGlucHV0LmRvbSkge1xuICAgICAgICAgICAgICAgIGlucHV0ID0gY2xvbmVWTm9kZShpbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWh5ZHJhdGVSb290KGlucHV0LCBwYXJlbnREb20sIGxpZmVjeWNsZSkpIHtcbiAgICAgICAgICAgICAgICBtb3VudChpbnB1dCwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIHt9LCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByb290ID0gc2V0Um9vdChwYXJlbnREb20sIGlucHV0LCBsaWZlY3ljbGUpO1xuICAgICAgICAgICAgbGlmZWN5Y2xlLnRyaWdnZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGxpZmVjeWNsZSQxID0gcm9vdC5saWZlY3ljbGU7XG4gICAgICAgIGxpZmVjeWNsZSQxLmxpc3RlbmVycyA9IFtdO1xuICAgICAgICBpZiAoaXNOdWxsT3JVbmRlZihpbnB1dCkpIHtcbiAgICAgICAgICAgIHVubW91bnQocm9vdC5pbnB1dCwgcGFyZW50RG9tLCBsaWZlY3ljbGUkMSwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgIHJlbW92ZVJvb3Qocm9vdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaW5wdXQuZG9tKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBjbG9uZVZOb2RlKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhdGNoKHJvb3QuaW5wdXQsIGlucHV0LCBwYXJlbnREb20sIGxpZmVjeWNsZSQxLCB7fSwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBsaWZlY3ljbGUkMS50cmlnZ2VyKCk7XG4gICAgICAgIHJvb3QuaW5wdXQgPSBpbnB1dDtcbiAgICB9XG4gICAgaWYgKHJvb3QpIHtcbiAgICAgICAgdmFyIHJvb3RJbnB1dCA9IHJvb3QuaW5wdXQ7XG4gICAgICAgIGlmIChyb290SW5wdXQgJiYgKHJvb3RJbnB1dC5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykpIHtcbiAgICAgICAgICAgIHJldHVybiByb290SW5wdXQuY2hpbGRyZW47XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBjcmVhdGVSZW5kZXJlcihfcGFyZW50RG9tKSB7XG4gICAgdmFyIHBhcmVudERvbSA9IF9wYXJlbnREb20gfHwgbnVsbDtcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVuZGVyZXIobGFzdElucHV0LCBuZXh0SW5wdXQpIHtcbiAgICAgICAgaWYgKCFwYXJlbnREb20pIHtcbiAgICAgICAgICAgIHBhcmVudERvbSA9IGxhc3RJbnB1dDtcbiAgICAgICAgfVxuICAgICAgICByZW5kZXIobmV4dElucHV0LCBwYXJlbnREb20pO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGxpbmtFdmVudChkYXRhLCBldmVudCkge1xuICAgIHJldHVybiB7IGRhdGE6IGRhdGEsIGV2ZW50OiBldmVudCB9O1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuXHRPYmplY3QuZnJlZXplKEVNUFRZX09CSik7XG5cdHZhciB0ZXN0RnVuYyA9IGZ1bmN0aW9uIHRlc3RGbigpIHt9O1xuXHRpZiAoKHRlc3RGdW5jLm5hbWUgfHwgdGVzdEZ1bmMudG9TdHJpbmcoKSkuaW5kZXhPZigndGVzdEZuJykgPT09IC0xKSB7XG5cdFx0d2FybmluZygoJ0l0IGxvb2tzIGxpa2UgeW91XFwncmUgdXNpbmcgYSBtaW5pZmllZCBjb3B5IG9mIHRoZSBkZXZlbG9wbWVudCBidWlsZCAnICtcblx0XHRcdFx0J29mIEluZmVybm8uIFdoZW4gZGVwbG95aW5nIEluZmVybm8gYXBwcyB0byBwcm9kdWN0aW9uLCBtYWtlIHN1cmUgdG8gdXNlICcgK1xuXHRcdFx0XHQndGhlIHByb2R1Y3Rpb24gYnVpbGQgd2hpY2ggc2tpcHMgZGV2ZWxvcG1lbnQgd2FybmluZ3MgYW5kIGlzIGZhc3Rlci4gJyArXG5cdFx0XHRcdCdTZWUgaHR0cDovL2luZmVybm9qcy5vcmcgZm9yIG1vcmUgZGV0YWlscy4nXG5cdFx0KSk7XG5cdH1cbn1cblxuLy8gVGhpcyB3aWxsIGJlIHJlcGxhY2VkIGJ5IHJvbGx1cFxudmFyIHZlcnNpb24gPSAnMS4yLjInO1xuXG4vLyB3ZSBkdXBsaWNhdGUgaXQgc28gaXQgcGxheXMgbmljZWx5IHdpdGggZGlmZmVyZW50IG1vZHVsZSBsb2FkaW5nIHN5c3RlbXNcbnZhciBpbmRleCA9IHtcblx0bGlua0V2ZW50OiBsaW5rRXZlbnQsXG5cdC8vIGNvcmUgc2hhcGVzXG5cdGNyZWF0ZVZOb2RlOiBjcmVhdGVWTm9kZSxcblxuXHQvLyBjbG9uaW5nXG5cdGNsb25lVk5vZGU6IGNsb25lVk5vZGUsXG5cblx0Ly8gdXNlZCB0byBzaGFyZWQgY29tbW9uIGl0ZW1zIGJldHdlZW4gSW5mZXJubyBsaWJzXG5cdE5PX09QOiBOT19PUCxcblx0RU1QVFlfT0JKOiBFTVBUWV9PQkosXG5cblx0Ly8gRE9NXG5cdHJlbmRlcjogcmVuZGVyLFxuXHRmaW5kRE9NTm9kZTogZmluZERPTU5vZGUsXG5cdGNyZWF0ZVJlbmRlcmVyOiBjcmVhdGVSZW5kZXJlcixcblx0b3B0aW9uczogb3B0aW9ucyxcblx0dmVyc2lvbjogdmVyc2lvblxufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gaW5kZXg7XG5leHBvcnRzLmxpbmtFdmVudCA9IGxpbmtFdmVudDtcbmV4cG9ydHMuY3JlYXRlVk5vZGUgPSBjcmVhdGVWTm9kZTtcbmV4cG9ydHMuY2xvbmVWTm9kZSA9IGNsb25lVk5vZGU7XG5leHBvcnRzLk5PX09QID0gTk9fT1A7XG5leHBvcnRzLkVNUFRZX09CSiA9IEVNUFRZX09CSjtcbmV4cG9ydHMucmVuZGVyID0gcmVuZGVyO1xuZXhwb3J0cy5maW5kRE9NTm9kZSA9IGZpbmRET01Ob2RlO1xuZXhwb3J0cy5jcmVhdGVSZW5kZXJlciA9IGNyZWF0ZVJlbmRlcmVyO1xuZXhwb3J0cy5vcHRpb25zID0gb3B0aW9ucztcbmV4cG9ydHMudmVyc2lvbiA9IHZlcnNpb247XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5mZXJuby9kaXN0L2luZmVybm8ubm9kZS5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEluZmVybm8gZnJvbSAnaW5mZXJubyc7XHJcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJ2luZmVybm8tY3JlYXRlLWVsZW1lbnQnO1xyXG5pbXBvcnQgTGlzdERlbW8gZnJvbSAnLi9leGFtcGxlcy9MaXN0RGVtby5qcyc7XHJcbmltcG9ydCBHcmlkRGVtbyBmcm9tICcuL2V4YW1wbGVzL0dyaWREZW1vLmpzJztcclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYXBwJyk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuXHJcbkluZmVybm8ucmVuZGVyKFxyXG4gICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhGbG93OiAnd3JhcCcgfX0+XHJcbiAgICAgICAgPExpc3REZW1vIC8+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogMzAsIGZsZXhTaHJpbms6IDAgfX0+PC9kaXY+XHJcbiAgICAgICAgPEdyaWREZW1vIC8+XHJcbiAgICA8L2Rpdj4sXHJcbiAgICBjb250YWluZXJcclxuKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==