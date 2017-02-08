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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);
module.exports.default = module.exports;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);
module.exports.default = module.exports;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);
module.exports.default = module.exports;

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inferno_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ResizeGhost_js__ = __webpack_require__(9);





var Column = function (ref) {
    var column = ref.column;
    var index = ref.index;
    var ghost = ref.ghost;

    return (
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: {
        height: 30,
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        padding: '0 8px',
        overflow: 'hidden',
        borderLeft: column.move === 'right' ? '2px solid black' : 'var(--header-border)',
        borderRight: column.move === 'left' ? '2px solid black' : 'var(--header-border)',
        background: 'var(--header-bg)',
        opacity: ghost ? .8 : 1
    } }, 
        column.displayName || column.name
    )
);
};

var Viewport = (function (Component) {
    function Viewport() {
        Component.call(this);

        this.switcher = this.switcher.bind(this);

        this.state = {
            columns: [
                {
                    name: 'col0',
                    width: 100,
                    enableFiltering: true,
                    enableSorting: true
                },
                {
                    name: 'col1',
                    minWidth: 60,
                    width: 100
                },
                {
                    name: 'col2',
                    displayName: 'Column 2',
                    width: 200,
                    maxWidth: 300
                }
            ]
        };
    }

    if ( Component ) Viewport.__proto__ = Component;
    Viewport.prototype = Object.create( Component && Component.prototype );
    Viewport.prototype.constructor = Viewport;

    Viewport.prototype.switcher = function switcher (action) {
        var this$1 = this;

        console.log(action);
        switch (action.type) {
            case 'RESIZING':
                this.setState({
                    ghost: true,
                    ghostX: action.ghostPosition
                });
                break;
            case 'RESIZE':
                this.setState({
                    ghost: false,
                    columns: this.state.columns.map(function (item) {
                        if (item.name === action.column) {
                            return Object.assign({}, item, {
                                width: action.columnWidth
                            });
                        }
                        return item;
                    })
                });
                break;
            case 'MOVING':
                this.setState({
                    columns: this.state.columns.map(function (item, index) {
                        if (action.between.length === 1) {
                            var first = 0;
                            var last = this$1.state.columns.length - 1;
                            if (index === first && action.between[0] === first) {
                                return Object.assign({}, item, {
                                    move: 'right'
                                });
                            }
                            if (index === last && action.between[0] === last) {
                                return Object.assign({}, item, {
                                    move: 'left'
                                });
                            }
                        }
                        if (index === action.between[0]) {
                            return Object.assign({}, item, {
                                move: 'left'
                            });
                        }
                        if (index === action.between[1]) {
                            return Object.assign({}, item, {
                                move: 'right'
                            });
                        }
                        if (item.move) {
                            return Object.assign({}, item, {
                                move: null
                            });
                        }
                        return item;
                    })
                });
                break;
            case 'MOVE': {
                var columns = this.state.columns.map(function (item, index) {
                    if (item.move) {
                        return Object.assign({}, item, {
                            move: null
                        });
                    }
                    return item;
                });
                this.setState({
                    columns: columns.slice(0, action.between[0] + 1).filter(function (item) { return item.name !== action.column; }).concat( columns.filter(function (item) { return item.name === action.column; }),
                        columns.slice(action.between[1]).filter(function (item) { return item.name !== action.column; })
                    )
                });
            }
        }
    };

    Viewport.prototype.render = function render (ref, ref$1) {
        var ghost = ref$1.ghost;
        var ghostX = ref$1.ghostX;

        return (
            __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: {
                width: 600,
                height: 300,
                background: '#ccc',
                position: 'relative',
                overflow: 'auto'
            } }, 
                __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: {
                    background: 'var(--header-bg)'
                } }, 
                    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( __WEBPACK_IMPORTED_MODULE_2__Header_js__["a" /* default */], { columns: this.state.columns, component: Column, callback: this.switcher })
                ), 
                ghost && __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( __WEBPACK_IMPORTED_MODULE_3__ResizeGhost_js__["a" /* default */], { x: ghostX })
            )
        );
    };

    return Viewport;
}(__WEBPACK_IMPORTED_MODULE_1_inferno_component___default.a));

/* harmony default export */ __webpack_exports__["a"] = Viewport;

var style = document.createElement('style');
style.textContent = "\n    :root {\n        --header-bg: linear-gradient(to top, #eeeeee, #ffffff);\n        --header-border: 1px solid #d4d4d4;\n    }\n";
document.body.appendChild(style);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inferno_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__List_js__ = __webpack_require__(8);




var Row = function (ref) {
    var entity = ref.entity;
    var index = ref.index;

    return (
    // console.log(entity),
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
        height: 30,
        background: index % 2 === 0 ? 'lightgrey': ''
    } }, entity)
);
};

var Viewport = (function (Component) {
    function Viewport() {
        var this$1 = this;

        Component.call(this);

        this.state = {
            scrollTop: 0,
            data: Array(500000).fill(0).map(function (item, i) { return ("Title " + i); })
        };

        this.ref = function (element) {
            this$1.element = element;
            this$1.setState({
                scrollTop: element.scrollTop,
                viewportHeight: element.clientHeight
            });
        };

        this.onScroll = function (e) {
            this$1.setState({
                scrollTop: e.target.scrollTop
            });
        };
    }

    if ( Component ) Viewport.__proto__ = Component;
    Viewport.prototype = Object.create( Component && Component.prototype );
    Viewport.prototype.constructor = Viewport;

    Viewport.prototype.render = function render (ref, ref$1) {
        var data = ref$1.data;
        var scrollTop = ref$1.scrollTop;
        var viewportHeight = ref$1.viewportHeight;

        return (
            __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { className: "viewport", style: { width: 800, height: 400, overflow: 'auto' }, onScroll: this.onScroll, ref: this.ref }, 
                __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( __WEBPACK_IMPORTED_MODULE_2__List_js__["a" /* default */], {
                    data: data, scrollTop: scrollTop, viewportHeight: viewportHeight, rowHeight: 30, row: Row })
            )
        );
    };

    return Viewport;
}(__WEBPACK_IMPORTED_MODULE_1_inferno_component___default.a));

/* harmony default export */ __webpack_exports__["a"] = Viewport;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__);



var minOffset = 3;

var onMouseDown = function (props, downEvent) {
    var elementX = downEvent.currentTarget.getBoundingClientRect().left;
    var start = downEvent.clientX - elementX;
    var moved = false;
    var onMouseMove = function (moveEvent) {
        var pos = moveEvent.clientX - elementX;
        if (Math.abs(pos - start) > minOffset || moved) {
            moved = true;
            props.onDrag(moveEvent, pos);
        }
    };
    var onMouseUp = function (upEvent) {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        var pos = upEvent.clientX - elementX;
        if (Math.abs(pos - start) > minOffset || moved) {
            props.onEnd(upEvent, upEvent.clientX - elementX);
        }
    };
    props.onStart(downEvent, start);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
};

var Draggable = function (props) { return (
    __WEBPACK_IMPORTED_MODULE_1_inferno_create_element___default()( 'div', { onMouseDown: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno__["linkEvent"])(props, onMouseDown), style: { position: 'relative' } }, 
        props.children
    )
); };

/* harmony default export */ __webpack_exports__["a"] = Draggable;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inferno_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Draggable_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__columnsUtils_js__ = __webpack_require__(10);





var Resizer = function () { return (
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
); };

var ColumnGhost = function (ref) {
    var x = ref.x;
    var children = ref.children;

    return (
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        transform: ("translateX(" + x + "px)")
    } }, 
        children
    )
);
};

var DraggableColumn = (function (Component) {
    function DraggableColumn() {
        var this$1 = this;

        Component.call(this);
        this.refResizer = function (element) { return this$1.resizer = element; };
        var name;
        this.onStart = function (e, pos) {
            name = e.target === this$1.resizer ? 'resize' : 'move';
            this$1.props.onStart(name, this$1.props.column, pos);
        };
        this.onDrag = function (e, pos) { return this$1.props.onDrag(name, this$1.props.column, pos); };
        this.onEnd = function (e, pos) { return this$1.props.onEnd(name, this$1.props.column, pos); };
    }

    if ( Component ) DraggableColumn.__proto__ = Component;
    DraggableColumn.prototype = Object.create( Component && Component.prototype );
    DraggableColumn.prototype.constructor = DraggableColumn;

    DraggableColumn.prototype.render = function render (ref) {
        var children = ref.children;

        return (
            __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( __WEBPACK_IMPORTED_MODULE_2__Draggable_js__["a" /* default */], {
                onStart: this.onStart, onDrag: this.onDrag, onEnd: this.onEnd }, 
                children, 
                __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( Resizer, { onComponentDidMount: this.refResizer })
            )
        );
    };

    return DraggableColumn;
}(__WEBPACK_IMPORTED_MODULE_1_inferno_component___default.a));

var ColumnWrapper = function (ref) {
    var column = ref.column;
    var index = ref.index;
    var ghost = ref.ghost;
    var Column = ref.component;

    return (
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: { width: column.width } }, 
        __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( Column, { column: column, index: index, ghost: ghost })
    )
);
};

var HeaderWrapper = (function (Component) {
    function HeaderWrapper() {
        Component.call(this);
        this.onStart = this.onStart.bind(this);
        this.onDrag = this.onDrag.bind(this);
        this.onEnd = this.onEnd.bind(this);
    }

    if ( Component ) HeaderWrapper.__proto__ = Component;
    HeaderWrapper.prototype = Object.create( Component && Component.prototype );
    HeaderWrapper.prototype.constructor = HeaderWrapper;

    HeaderWrapper.prototype.onStart = function onStart (type, name, start) {
        var columns = this.props.columns;
        var currentIndex = columns.findIndex(function (d) { return d.name === name; });
        var currentColumn = columns[currentIndex];
        var currentLeft = columns.slice(0, currentIndex).reduce(function (acc, d) { return acc + d.width; }, 0);
        this.currentLeft = currentLeft;
        this.startMovingPosition = currentLeft - start;
        this.currentIndex = currentIndex;
        this.currentColumn = currentColumn;
    };

    HeaderWrapper.prototype.onDrag = function onDrag (type, name, position) {
        if (type === 'resize') {
            this.props.callback({
                type: 'RESIZING',
                column: name,
                ghostPosition: this.currentLeft + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__columnsUtils_js__["a" /* trimColumnWidth */])(this.currentColumn, position)
            });
        } else {
            this.props.callback({
                type: 'MOVING',
                column: name,
                between: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__columnsUtils_js__["b" /* bisectColumns */])(this.props.columns, this.startMovingPosition + position)
            });
        }
        this.setState({
            position: this.startMovingPosition + position,
            dragging: true,
            moving: type === 'move'
        });
    };

    HeaderWrapper.prototype.onEnd = function onEnd (type, name, position) {
        if (type === 'resize') {
            this.props.callback({
                type: 'RESIZE',
                column: name,
                columnWidth: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__columnsUtils_js__["a" /* trimColumnWidth */])(this.currentColumn, position)
            });
        } else {
            this.props.callback({
                type: 'MOVE',
                column: name,
                between: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__columnsUtils_js__["b" /* bisectColumns */])(this.props.columns, this.startMovingPosition + position)
            });
        }
        this.setState({
            dragging: false,
            moving: false
        });
    };

    HeaderWrapper.prototype.render = function render (ref, ref$1) {
        var this$1 = this;
        var columns = ref.columns;
        var component = ref.component;
        var dragging = ref$1.dragging;
        var moving = ref$1.moving;
        var position = ref$1.position;

        return (
            __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: { display: 'flex', position: 'relative', userSelect: dragging ? 'none' : '' } }, 
                columns.map(function (column, index) { return __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( DraggableColumn, {
                        key: column.name, column: column.name, onStart: this$1.onStart, onDrag: this$1.onDrag, onEnd: this$1.onEnd }, 
                        __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( ColumnWrapper, {
                            column: column, index: index, ghost: false, component: component })
                    ); }
                ), 
                moving &&
                    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( ColumnGhost, { x: position }, 
                        __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( ColumnWrapper, {
                            column: this.currentColumn, index: this.currentIndex, ghost: true, component: component })
                    )
            )
        );
    };

    return HeaderWrapper;
}(__WEBPACK_IMPORTED_MODULE_1_inferno_component___default.a));

/* harmony default export */ __webpack_exports__["a"] = HeaderWrapper;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inferno_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listUtils_js__ = __webpack_require__(11);




var Canvas = function (ref) {
    var height = ref.height;
    var children = ref.children;

    return (
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: { position: 'relative', height: height } }, 
        children
    )
);
};

var Rendered = function (ref) {
    var height = ref.height;
    var top = ref.top;
    var children = ref.children;

    return (
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: { position: 'absolute', left: 0, right: 0, top: top, height: height } }, 
        children
    )
);
};

var RowWrapper = function (ref) {
    var height = ref.height;
    var entity = ref.entity;
    var index = ref.index;
    var Row = ref.row;

    return (
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: { height: height } }, 
        __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( Row, { entity: entity, index: index })
    )
);
};

var shouldRowUpdate = function (lastProps, nextProps) { return lastProps.height !== nextProps.height ||
    lastProps.row !== nextProps.row ||
    lastProps.entity !== nextProps.entity; };

var List = function (ref) {
    var data = ref.data;
    var rowHeight = ref.rowHeight;
    var row = ref.row;
    var start = ref.start;
    var end = ref.end;
    var keys = ref.keys;

    return (
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( Canvas, { height: data.length * rowHeight }, 
        __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( Rendered, { top: start * rowHeight, height: (end - start) * rowHeight }, 
            data.slice(start, end).map(function (entity, index) { return __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( RowWrapper, {
                    onComponentShouldUpdate: shouldRowUpdate, key: keys[start + index], height: rowHeight, index: start + index, entity: entity, row: row }); }
            )
        )
    )
);
};

var shouldListUpdate = function (lastProps, nextProps) { return lastProps.start !== nextProps.start ||
    lastProps.end !== nextProps.end ||
    lastProps.data !== nextProps.data ||
    lastProps.rowHeight !== nextProps.rowHeight ||
    lastProps.row !== nextProps.row; };

var ListWrapper = (function (Component) {
    function ListWrapper () {
        Component.apply(this, arguments);
    }

    if ( Component ) ListWrapper.__proto__ = Component;
    ListWrapper.prototype = Object.create( Component && Component.prototype );
    ListWrapper.prototype.constructor = ListWrapper;

    ListWrapper.prototype.render = function render (ref) {
        var data = ref.data;
        var scrollTop = ref.scrollTop;
        var viewportHeight = ref.viewportHeight;
        var rowHeight = ref.rowHeight;
        var row = ref.row;

        var ref$1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__listUtils_js__["a" /* getVisibleRows */])({
            scrollTop: scrollTop,
            viewportHeight: viewportHeight,
            rowHeight: rowHeight,
            rowsCount: data.length
        });
        var start = ref$1[0];
        var end = ref$1[1];
        var keys = this.keys = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__listUtils_js__["b" /* getKeysByIndex */])(this.keys, start, end);
        return (
            __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( List, {
                onComponentShouldUpdate: shouldListUpdate, data: data, rowHeight: rowHeight, row: row, start: start, end: end, keys: keys })
        );
    };

    return ListWrapper;
}(__WEBPACK_IMPORTED_MODULE_1_inferno_component___default.a));

/* harmony default export */ __webpack_exports__["a"] = ListWrapper;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__);


var ResizeGhost = function (ref) {
    var x = ref.x;

    return (
    __WEBPACK_IMPORTED_MODULE_0_inferno_create_element___default()( 'div', { style: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        borderLeft: '1px dotted #000',
        pointerEvents: 'none',
        transform: ("translateX(" + x + "px)")
    } }
    )
);
};

/* harmony default export */ __webpack_exports__["a"] = ResizeGhost;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return trimColumnWidth; });
/* unused harmony export getColumnWidth */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bisectColumns; });
var defaultMinWidth = 60;

var trimColumnWidth = function (column, width) { return Math.min(Math.max(column.minWidth || defaultMinWidth, width), column.maxWidth || Infinity); };

var getColumnWidth = function (column) { return column.width || column.minWidth || defaultMinWidth; };

var bisectColumns = function (columns, position) {
    if (columns.length < 2) {
        return [-1, 0];
    }
    var last = 0;
    return columns.reduce(function (acc, ref, index) {
        var width = ref.width;

        var left = last;
        var relative = position - left;
        var half = width / 2;
        last = left + width;
        if (index === 0 && relative < half) {
            return [index - 1, index];
        }
        if (index === columns.length - 1 && half <= relative) {
            return [index, index + 1];
        }
        if (half <= relative && relative <= width) {
            return [index, index + 1];
        }
        if (0 <= relative && relative <= half) {
            return [index - 1, index];
        }
        return acc;
    }, []);
    return [];
};


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getKeysByIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getVisibleRows; });
var empty = function () { return Object.create(null); };

var invert = function (obj) { return Object.keys(obj).reduce(function (acc, key) { return (acc[obj[key]] = key, acc); }, empty()); };

var createFreeKeyGenerator = function (indexes) {
    var lastPointer = 0;
    return function () {
        while (true) {
            var key = "key_" + lastPointer;
            lastPointer += 1;
            if (!(key in indexes)) {
                return key;
            }
        }
    };
}

var getRecoveredKeys = function (lastKeys, start, end) {
    var keys = empty();
    for (var i = start; i < end + 1; i += 1) {
        if (i in lastKeys) {
            keys[i] = lastKeys[i];
        }
    }
    return keys;
};

var generateKeys = function (lastKeys, start, end) {
    var keys = empty();
    var generateKey = createFreeKeyGenerator(invert(lastKeys));
    for (var i = start; i < end + 1; i += 1) {
        if (!(i in lastKeys)) {
            keys[i] = generateKey();
        }
    }
    return keys;
};

var getKeysByIndex = function (lastKeys, start, end) {
    if ( lastKeys === void 0 ) lastKeys = empty();

    var recovered = getRecoveredKeys(lastKeys, start, end);
    var generated = generateKeys(recovered, start, end);
    return Object.assign(empty(), recovered, generated);
};

var getVisibleRows = function (ref) {
    var scrollTop = ref.scrollTop;
    var viewportHeight = ref.viewportHeight;
    var rowHeight = ref.rowHeight;
    var rowsCount = ref.rowsCount;

    var clusterSize = Math.ceil(viewportHeight / rowHeight);
    var topCluster = Math.floor(Math.floor(scrollTop / rowHeight) / clusterSize);
    var end = Math.min(rowsCount, (topCluster + 2) * clusterSize);
    // count of visible rows is always the same then focus never be lost
    var start = Math.max(0, end - clusterSize * 2);
    return [start, end];
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/*!
 * inferno-component v1.2.2
 * (c) 2017 Dominic Gannaway
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory(__webpack_require__(1)) :
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * inferno-create-element v1.2.2
 * (c) 2017 Dominic Gannaway
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory(__webpack_require__(1)) :
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
/* 14 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inferno__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HeaderDemo_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ListDemo_js__ = __webpack_require__(5);





var container = document.createElement('div');
container.classList.add('app');
document.body.appendChild(container);

var App = function () { return (
    __WEBPACK_IMPORTED_MODULE_1_inferno_create_element___default()( 'div', { style: { display: 'flex' } }, 
        __WEBPACK_IMPORTED_MODULE_1_inferno_create_element___default()( __WEBPACK_IMPORTED_MODULE_2__HeaderDemo_js__["a" /* default */], null ), 
        __WEBPACK_IMPORTED_MODULE_1_inferno_create_element___default()( 'div', { style: { width: 30 } }), 
        __WEBPACK_IMPORTED_MODULE_1_inferno_create_element___default()( __WEBPACK_IMPORTED_MODULE_3__ListDemo_js__["a" /* default */], null )
    )
); };

__WEBPACK_IMPORTED_MODULE_0_inferno___default.a.render(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element___default()( App, null ), container);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzY4MGI2NjhjY2M1Mzg0NWVlNDMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vLWNyZWF0ZS1lbGVtZW50L2luZmVybm8tY3JlYXRlLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2luZmVybm8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vLWNvbXBvbmVudC9pbmZlcm5vLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSGVhZGVyRGVtby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGlzdERlbW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9MaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9SZXNpemVHaG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29sdW1uc1V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9saXN0VXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QvaW5mZXJuby1jb21wb25lbnQubm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC9pbmZlcm5vLWNyZWF0ZS1lbGVtZW50Lm5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QvaW5mZXJuby5ub2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb25zdCIsInN1cGVyIiwidGhpcyIsImxldCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUM7Ozs7Ozs7O0FDblREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsQ0FBQyw0QkFBNEI7O0FBRTdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix5QkFBeUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7OztBQ3pKRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hELENBQUMsNEJBQTRCOztBQUU3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHNCQUFzQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELGtCQUFrQixFQUFFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlCQUF5QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QywwQkFBMEI7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEMsMEJBQTBCLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiwyQkFBMkI7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGtCQUFrQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix3QkFBd0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix3QkFBd0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsYUFBYTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsV0FBVztBQUN2QztBQUNBO0FBQ0Esb0NBQW9DLFdBQVc7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixXQUFXO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixXQUFXO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxRQUFRO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFFBQVE7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MscUNBQXFDLEVBQUU7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1CQUFtQixFQUFFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVHQUF1RztBQUN2RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Q0FBOEMsY0FBYzs7QUFFNUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RpRjZCO0FBQ3FCO0FBQ1Y7QUFDSjs7QUFFckNBLEdBQUssQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoRCxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7QUFFckNBLEdBQUssQ0FBQyxHQUFHLEdBQUcsWUFBTTtJQUNkLGdFQUFDLElBQUcsS0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFHLEVBQUM7UUFDN0IsZ0VBQUMsK0RBQVUsUUFBRztRQUNkLGdFQUFDLElBQUcsS0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFHLEVBQUMsQ0FBTTtRQUNqQyxnRUFBQyw2REFBUSxRQUFHO0lBQ2hCLENBQU07Q0FDVCxJQUFDOztBQUVGLCtDQUFPLENBQUMsTUFBTSxDQUFDLGdFQUFDLEdBQUcsUUFBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDIiwiZmlsZSI6ImluZmVybm8tZGF0YWdyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzY4MGI2NjhjY2M1Mzg0NWVlNDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ2luZmVybm8vZGlzdC9pbmZlcm5vLWNyZWF0ZS1lbGVtZW50Lm5vZGUnKTtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBtb2R1bGUuZXhwb3J0cztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5mZXJuby1jcmVhdGUtZWxlbWVudC9pbmZlcm5vLWNyZWF0ZS1lbGVtZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2luZmVybm8ubm9kZScpO1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IG1vZHVsZS5leHBvcnRzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pbmZlcm5vL2luZmVybm8uanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdpbmZlcm5vL2Rpc3QvaW5mZXJuby1jb21wb25lbnQubm9kZScpO1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IG1vZHVsZS5leHBvcnRzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pbmZlcm5vLWNvbXBvbmVudC9pbmZlcm5vLWNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICdpbmZlcm5vLWNyZWF0ZS1lbGVtZW50JztcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tICdpbmZlcm5vLWNvbXBvbmVudCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXIuanMnO1xyXG5pbXBvcnQgUmVzaXplR2hvc3QgZnJvbSAnLi9SZXNpemVHaG9zdC5qcyc7XHJcblxyXG5jb25zdCBDb2x1bW4gPSAoeyBjb2x1bW4sIGluZGV4LCBnaG9zdCB9KSA9PiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgaGVpZ2h0OiAzMCxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgICAgcGFkZGluZzogJzAgOHB4JyxcclxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgYm9yZGVyTGVmdDogY29sdW1uLm1vdmUgPT09ICdyaWdodCcgPyAnMnB4IHNvbGlkIGJsYWNrJyA6ICd2YXIoLS1oZWFkZXItYm9yZGVyKScsXHJcbiAgICAgICAgYm9yZGVyUmlnaHQ6IGNvbHVtbi5tb3ZlID09PSAnbGVmdCcgPyAnMnB4IHNvbGlkIGJsYWNrJyA6ICd2YXIoLS1oZWFkZXItYm9yZGVyKScsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJ3ZhcigtLWhlYWRlci1iZyknLFxyXG4gICAgICAgIG9wYWNpdHk6IGdob3N0ID8gLjggOiAxXHJcbiAgICB9fT5cclxuICAgICAgICB7Y29sdW1uLmRpc3BsYXlOYW1lIHx8IGNvbHVtbi5uYW1lfVxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3cG9ydCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnN3aXRjaGVyID0gdGhpcy5zd2l0Y2hlci5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NvbDAnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlRmlsdGVyaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZVNvcnRpbmc6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NvbDEnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiA2MCxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjb2wyJyxcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJ0NvbHVtbiAyJyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAzMDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoZXIoYWN0aW9uKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ1JFU0laSU5HJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGdob3N0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGdob3N0WDogYWN0aW9uLmdob3N0UG9zaXRpb25cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ1JFU0laRSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBnaG9zdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uczogdGhpcy5zdGF0ZS5jb2x1bW5zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gYWN0aW9uLmNvbHVtbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYWN0aW9uLmNvbHVtbldpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnTU9WSU5HJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IHRoaXMuc3RhdGUuY29sdW1ucy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb24uYmV0d2Vlbi5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3QgPSB0aGlzLnN0YXRlLmNvbHVtbnMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gZmlyc3QgJiYgYWN0aW9uLmJldHdlZW5bMF0gPT09IGZpcnN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZTogJ3JpZ2h0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBsYXN0ICYmIGFjdGlvbi5iZXR3ZWVuWzBdID09PSBsYXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZTogJ2xlZnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBhY3Rpb24uYmV0d2VlblswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlOiAnbGVmdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gYWN0aW9uLmJldHdlZW5bMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZTogJ3JpZ2h0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ubW92ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnTU9WRSc6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbnMgPSB0aGlzLnN0YXRlLmNvbHVtbnMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLm1vdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmU6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmNvbHVtbnMuc2xpY2UoMCwgYWN0aW9uLmJldHdlZW5bMF0gKyAxKS5maWx0ZXIoaXRlbSA9PiBpdGVtLm5hbWUgIT09IGFjdGlvbi5jb2x1bW4pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jb2x1bW5zLmZpbHRlcihpdGVtID0+IGl0ZW0ubmFtZSA9PT0gYWN0aW9uLmNvbHVtbiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmNvbHVtbnMuc2xpY2UoYWN0aW9uLmJldHdlZW5bMV0pLmZpbHRlcihpdGVtID0+IGl0ZW0ubmFtZSAhPT0gYWN0aW9uLmNvbHVtbilcclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoe30sIHsgZ2hvc3QsIGdob3N0WCB9KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzAwLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyNjY2MnLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd2YXIoLS1oZWFkZXItYmcpJ1xyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciBjb2x1bW5zPXt0aGlzLnN0YXRlLmNvbHVtbnN9IGNvbXBvbmVudD17Q29sdW1ufSBjYWxsYmFjaz17dGhpcy5zd2l0Y2hlcn0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2dob3N0ICYmIDxSZXNpemVHaG9zdCB4PXtnaG9zdFh9IC8+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbnN0eWxlLnRleHRDb250ZW50ID0gYFxyXG4gICAgOnJvb3Qge1xyXG4gICAgICAgIC0taGVhZGVyLWJnOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZWVlZWVlLCAjZmZmZmZmKTtcclxuICAgICAgICAtLWhlYWRlci1ib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xyXG4gICAgfVxyXG5gO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0eWxlKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0hlYWRlckRlbW8uanMiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICdpbmZlcm5vLWNyZWF0ZS1lbGVtZW50JztcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tICdpbmZlcm5vLWNvbXBvbmVudCc7XHJcbmltcG9ydCBMaXN0IGZyb20gJy4vTGlzdC5qcyc7XHJcblxyXG5jb25zdCBSb3cgPSAoeyBlbnRpdHksIGluZGV4IH0pID0+IChcclxuICAgIC8vIGNvbnNvbGUubG9nKGVudGl0eSksXHJcbiAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIHBhZGRpbmc6ICcwIDEwcHgnLFxyXG4gICAgICAgIGhlaWdodDogMzAsXHJcbiAgICAgICAgYmFja2dyb3VuZDogaW5kZXggJSAyID09PSAwID8gJ2xpZ2h0Z3JleSc6ICcnXHJcbiAgICB9fT57ZW50aXR5fTwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld3BvcnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxyXG4gICAgICAgICAgICBkYXRhOiBBcnJheSg1MDAwMDApLmZpbGwoMCkubWFwKChpdGVtLCBpKSA9PiBgVGl0bGUgJHtpfWApXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWYgPSBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IGVsZW1lbnQuc2Nyb2xsVG9wLFxyXG4gICAgICAgICAgICAgICAgdmlld3BvcnRIZWlnaHQ6IGVsZW1lbnQuY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMub25TY3JvbGwgPSBlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IGUudGFyZ2V0LnNjcm9sbFRvcFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih7fSwgeyBkYXRhLCBzY3JvbGxUb3AsIHZpZXdwb3J0SGVpZ2h0IH0pIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXdwb3J0XCIgc3R5bGU9e3sgd2lkdGg6IDgwMCwgaGVpZ2h0OiA0MDAsIG92ZXJmbG93OiAnYXV0bycgfX1cclxuICAgICAgICAgICAgICAgIG9uU2Nyb2xsPXt0aGlzLm9uU2Nyb2xsfVxyXG4gICAgICAgICAgICAgICAgcmVmPXt0aGlzLnJlZn0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wPXtzY3JvbGxUb3B9XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld3BvcnRIZWlnaHQ9e3ZpZXdwb3J0SGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd0hlaWdodD17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgcm93PXtSb3d9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MaXN0RGVtby5qcyIsImltcG9ydCB7IGxpbmtFdmVudCB9IGZyb20gJ2luZmVybm8nO1xyXG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICdpbmZlcm5vLWNyZWF0ZS1lbGVtZW50JztcclxuXHJcbmNvbnN0IG1pbk9mZnNldCA9IDM7XHJcblxyXG5jb25zdCBvbk1vdXNlRG93biA9IChwcm9wcywgZG93bkV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50WCA9IGRvd25FdmVudC5jdXJyZW50VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICBjb25zdCBzdGFydCA9IGRvd25FdmVudC5jbGllbnRYIC0gZWxlbWVudFg7XHJcbiAgICBsZXQgbW92ZWQgPSBmYWxzZTtcclxuICAgIGNvbnN0IG9uTW91c2VNb3ZlID0gbW92ZUV2ZW50ID0+IHtcclxuICAgICAgICBjb25zdCBwb3MgPSBtb3ZlRXZlbnQuY2xpZW50WCAtIGVsZW1lbnRYO1xyXG4gICAgICAgIGlmIChNYXRoLmFicyhwb3MgLSBzdGFydCkgPiBtaW5PZmZzZXQgfHwgbW92ZWQpIHtcclxuICAgICAgICAgICAgbW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBwcm9wcy5vbkRyYWcobW92ZUV2ZW50LCBwb3MpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBvbk1vdXNlVXAgPSB1cEV2ZW50ID0+IHtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcbiAgICAgICAgY29uc3QgcG9zID0gdXBFdmVudC5jbGllbnRYIC0gZWxlbWVudFg7XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKHBvcyAtIHN0YXJ0KSA+IG1pbk9mZnNldCB8fCBtb3ZlZCkge1xyXG4gICAgICAgICAgICBwcm9wcy5vbkVuZCh1cEV2ZW50LCB1cEV2ZW50LmNsaWVudFggLSBlbGVtZW50WCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHByb3BzLm9uU3RhcnQoZG93bkV2ZW50LCBzdGFydCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxufTtcclxuXHJcbmNvbnN0IERyYWdnYWJsZSA9IHByb3BzID0+IChcclxuICAgIDxkaXYgb25Nb3VzZURvd249e2xpbmtFdmVudChwcm9wcywgb25Nb3VzZURvd24pfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cclxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyYWdnYWJsZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0RyYWdnYWJsZS5qcyIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJ2luZmVybm8tY3JlYXRlLWVsZW1lbnQnO1xyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ2luZmVybm8tY29tcG9uZW50JztcclxuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL0RyYWdnYWJsZS5qcyc7XHJcbmltcG9ydCB7IHRyaW1Db2x1bW5XaWR0aCwgYmlzZWN0Q29sdW1ucyB9IGZyb20gJy4vY29sdW1uc1V0aWxzLmpzJztcclxuXHJcbmNvbnN0IFJlc2l6ZXIgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgekluZGV4OiAyLFxyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgcmlnaHQ6IC0zLFxyXG4gICAgICAgIHdpZHRoOiA2LFxyXG4gICAgICAgIGN1cnNvcjogJ2NvbC1yZXNpemUnXHJcbiAgICB9fT5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3QgQ29sdW1uR2hvc3QgPSAoeyB4LCBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHt4fXB4KWBcclxuICAgIH19PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuY2xhc3MgRHJhZ2dhYmxlQ29sdW1uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5yZWZSZXNpemVyID0gZWxlbWVudCA9PiB0aGlzLnJlc2l6ZXIgPSBlbGVtZW50O1xyXG4gICAgICAgIGxldCBuYW1lO1xyXG4gICAgICAgIHRoaXMub25TdGFydCA9IChlLCBwb3MpID0+IHtcclxuICAgICAgICAgICAgbmFtZSA9IGUudGFyZ2V0ID09PSB0aGlzLnJlc2l6ZXIgPyAncmVzaXplJyA6ICdtb3ZlJztcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblN0YXJ0KG5hbWUsIHRoaXMucHJvcHMuY29sdW1uLCBwb3MpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vbkRyYWcgPSAoZSwgcG9zKSA9PiB0aGlzLnByb3BzLm9uRHJhZyhuYW1lLCB0aGlzLnByb3BzLmNvbHVtbiwgcG9zKTtcclxuICAgICAgICB0aGlzLm9uRW5kID0gKGUsIHBvcykgPT4gdGhpcy5wcm9wcy5vbkVuZChuYW1lLCB0aGlzLnByb3BzLmNvbHVtbiwgcG9zKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPERyYWdnYWJsZVxyXG4gICAgICAgICAgICAgICAgb25TdGFydD17dGhpcy5vblN0YXJ0fVxyXG4gICAgICAgICAgICAgICAgb25EcmFnPXt0aGlzLm9uRHJhZ31cclxuICAgICAgICAgICAgICAgIG9uRW5kPXt0aGlzLm9uRW5kfT5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDxSZXNpemVyIG9uQ29tcG9uZW50RGlkTW91bnQ9e3RoaXMucmVmUmVzaXplcn0gLz5cclxuICAgICAgICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgQ29sdW1uV3JhcHBlciA9ICh7IGNvbHVtbiwgaW5kZXgsIGdob3N0LCBjb21wb25lbnQ6IENvbHVtbiB9KSA9PiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBjb2x1bW4ud2lkdGggfX0+XHJcbiAgICAgICAgPENvbHVtbiBjb2x1bW49e2NvbHVtbn0gaW5kZXg9e2luZGV4fSBnaG9zdD17Z2hvc3R9IC8+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlcldyYXBwZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm9uU3RhcnQgPSB0aGlzLm9uU3RhcnQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uRHJhZyA9IHRoaXMub25EcmFnLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkVuZCA9IHRoaXMub25FbmQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvblN0YXJ0KHR5cGUsIG5hbWUsIHN0YXJ0KSB7XHJcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IHRoaXMucHJvcHMuY29sdW1ucztcclxuICAgICAgICBjb25zdCBjdXJyZW50SW5kZXggPSBjb2x1bW5zLmZpbmRJbmRleChkID0+IGQubmFtZSA9PT0gbmFtZSk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudENvbHVtbiA9IGNvbHVtbnNbY3VycmVudEluZGV4XTtcclxuICAgICAgICBjb25zdCBjdXJyZW50TGVmdCA9IGNvbHVtbnMuc2xpY2UoMCwgY3VycmVudEluZGV4KS5yZWR1Y2UoKGFjYywgZCkgPT4gYWNjICsgZC53aWR0aCwgMCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGVmdCA9IGN1cnJlbnRMZWZ0O1xyXG4gICAgICAgIHRoaXMuc3RhcnRNb3ZpbmdQb3NpdGlvbiA9IGN1cnJlbnRMZWZ0IC0gc3RhcnQ7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBjdXJyZW50SW5kZXg7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Q29sdW1uID0gY3VycmVudENvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYWcodHlwZSwgbmFtZSwgcG9zaXRpb24pIHtcclxuICAgICAgICBpZiAodHlwZSA9PT0gJ3Jlc2l6ZScpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnUkVTSVpJTkcnLFxyXG4gICAgICAgICAgICAgICAgY29sdW1uOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgZ2hvc3RQb3NpdGlvbjogdGhpcy5jdXJyZW50TGVmdCArIHRyaW1Db2x1bW5XaWR0aCh0aGlzLmN1cnJlbnRDb2x1bW4sIHBvc2l0aW9uKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdNT1ZJTkcnLFxyXG4gICAgICAgICAgICAgICAgY29sdW1uOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgYmV0d2VlbjogYmlzZWN0Q29sdW1ucyh0aGlzLnByb3BzLmNvbHVtbnMsIHRoaXMuc3RhcnRNb3ZpbmdQb3NpdGlvbiArIHBvc2l0aW9uKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnN0YXJ0TW92aW5nUG9zaXRpb24gKyBwb3NpdGlvbixcclxuICAgICAgICAgICAgZHJhZ2dpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIG1vdmluZzogdHlwZSA9PT0gJ21vdmUnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmQodHlwZSwgbmFtZSwgcG9zaXRpb24pIHtcclxuICAgICAgICBpZiAodHlwZSA9PT0gJ3Jlc2l6ZScpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnUkVTSVpFJyxcclxuICAgICAgICAgICAgICAgIGNvbHVtbjogbmFtZSxcclxuICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoOiB0cmltQ29sdW1uV2lkdGgodGhpcy5jdXJyZW50Q29sdW1uLCBwb3NpdGlvbilcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnTU9WRScsXHJcbiAgICAgICAgICAgICAgICBjb2x1bW46IG5hbWUsXHJcbiAgICAgICAgICAgICAgICBiZXR3ZWVuOiBiaXNlY3RDb2x1bW5zKHRoaXMucHJvcHMuY29sdW1ucywgdGhpcy5zdGFydE1vdmluZ1Bvc2l0aW9uICsgcG9zaXRpb24pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBtb3Zpbmc6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHsgY29sdW1ucywgY29tcG9uZW50IH0sIHsgZHJhZ2dpbmcsIG1vdmluZywgcG9zaXRpb24gfSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJywgdXNlclNlbGVjdDogZHJhZ2dpbmcgPyAnbm9uZScgOiAnJyB9fT5cclxuICAgICAgICAgICAgICAgIHtjb2x1bW5zLm1hcCgoY29sdW1uLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlQ29sdW1uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbj17Y29sdW1uLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3RhcnQ9e3RoaXMub25TdGFydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnPXt0aGlzLm9uRHJhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25FbmQ9e3RoaXMub25FbmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sdW1uV3JhcHBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uPXtjb2x1bW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaG9zdD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e2NvbXBvbmVudH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZUNvbHVtbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7bW92aW5nICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbHVtbkdob3N0IHg9e3Bvc2l0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbHVtbldyYXBwZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbj17dGhpcy5jdXJyZW50Q29sdW1ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e3RoaXMuY3VycmVudEluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2hvc3Q9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e2NvbXBvbmVudH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbHVtbkdob3N0PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9IZWFkZXIuanMiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICdpbmZlcm5vLWNyZWF0ZS1lbGVtZW50JztcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tICdpbmZlcm5vLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGdldFZpc2libGVSb3dzLCBnZXRLZXlzQnlJbmRleCB9IGZyb20gJy4vbGlzdFV0aWxzLmpzJztcclxuXHJcbmNvbnN0IENhbnZhcyA9ICh7IGhlaWdodCwgY2hpbGRyZW4gfSkgPT4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgaGVpZ2h0IH19PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3QgUmVuZGVyZWQgPSAoeyBoZWlnaHQsIHRvcCwgY2hpbGRyZW4gfSkgPT4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogMCwgcmlnaHQ6IDAsIHRvcCwgaGVpZ2h0IH19PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3QgUm93V3JhcHBlciA9ICh7IGhlaWdodCwgZW50aXR5LCBpbmRleCwgcm93OiBSb3cgfSkgPT4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBoZWlnaHQgfX0+XHJcbiAgICAgICAgPFJvdyBlbnRpdHk9e2VudGl0eX0gaW5kZXg9e2luZGV4fSAvPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBzaG91bGRSb3dVcGRhdGUgPSAobGFzdFByb3BzLCBuZXh0UHJvcHMpID0+XHJcbiAgICBsYXN0UHJvcHMuaGVpZ2h0ICE9PSBuZXh0UHJvcHMuaGVpZ2h0IHx8XHJcbiAgICBsYXN0UHJvcHMucm93ICE9PSBuZXh0UHJvcHMucm93IHx8XHJcbiAgICBsYXN0UHJvcHMuZW50aXR5ICE9PSBuZXh0UHJvcHMuZW50aXR5O1xyXG5cclxuY29uc3QgTGlzdCA9ICh7IGRhdGEsIHJvd0hlaWdodCwgcm93LCBzdGFydCwgZW5kLCBrZXlzIH0pID0+IChcclxuICAgIDxDYW52YXMgaGVpZ2h0PXtkYXRhLmxlbmd0aCAqIHJvd0hlaWdodH0+XHJcbiAgICAgICAgPFJlbmRlcmVkIHRvcD17c3RhcnQgKiByb3dIZWlnaHR9IGhlaWdodD17KGVuZCAtIHN0YXJ0KSAqIHJvd0hlaWdodH0+XHJcbiAgICAgICAgICAgIHtkYXRhLnNsaWNlKHN0YXJ0LCBlbmQpLm1hcCgoZW50aXR5LCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgIDxSb3dXcmFwcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgb25Db21wb25lbnRTaG91bGRVcGRhdGU9e3Nob3VsZFJvd1VwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2tleXNbc3RhcnQgKyBpbmRleF19XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtyb3dIZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg9e3N0YXJ0ICsgaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5PXtlbnRpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgcm93PXtyb3d9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvUmVuZGVyZWQ+XHJcbiAgICA8L0NhbnZhcz5cclxuKTtcclxuXHJcbmNvbnN0IHNob3VsZExpc3RVcGRhdGUgPSAobGFzdFByb3BzLCBuZXh0UHJvcHMpID0+XHJcbiAgICBsYXN0UHJvcHMuc3RhcnQgIT09IG5leHRQcm9wcy5zdGFydCB8fFxyXG4gICAgbGFzdFByb3BzLmVuZCAhPT0gbmV4dFByb3BzLmVuZCB8fFxyXG4gICAgbGFzdFByb3BzLmRhdGEgIT09IG5leHRQcm9wcy5kYXRhIHx8XHJcbiAgICBsYXN0UHJvcHMucm93SGVpZ2h0ICE9PSBuZXh0UHJvcHMucm93SGVpZ2h0IHx8XHJcbiAgICBsYXN0UHJvcHMucm93ICE9PSBuZXh0UHJvcHMucm93O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdFdyYXBwZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKHsgZGF0YSwgc2Nyb2xsVG9wLCB2aWV3cG9ydEhlaWdodCwgcm93SGVpZ2h0LCByb3cgfSkge1xyXG4gICAgICAgIGNvbnN0IFtzdGFydCwgZW5kXSA9IGdldFZpc2libGVSb3dzKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wLFxyXG4gICAgICAgICAgICB2aWV3cG9ydEhlaWdodCxcclxuICAgICAgICAgICAgcm93SGVpZ2h0LFxyXG4gICAgICAgICAgICByb3dzQ291bnQ6IGRhdGEubGVuZ3RoXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qga2V5cyA9IHRoaXMua2V5cyA9IGdldEtleXNCeUluZGV4KHRoaXMua2V5cywgc3RhcnQsIGVuZCk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgIG9uQ29tcG9uZW50U2hvdWxkVXBkYXRlPXtzaG91bGRMaXN0VXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgIHJvd0hlaWdodD17cm93SGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgcm93PXtyb3d9XHJcbiAgICAgICAgICAgICAgICBzdGFydD17c3RhcnR9XHJcbiAgICAgICAgICAgICAgICBlbmQ9e2VuZH1cclxuICAgICAgICAgICAgICAgIGtleXM9e2tleXN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGlzdC5qcyIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJ2luZmVybm8tY3JlYXRlLWVsZW1lbnQnO1xyXG5cclxuY29uc3QgUmVzaXplR2hvc3QgPSAoeyB4IH0pID0+IChcclxuICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgYm9yZGVyTGVmdDogJzFweCBkb3R0ZWQgIzAwMCcsXHJcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxyXG4gICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHt4fXB4KWBcclxuICAgIH19PlxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNpemVHaG9zdDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Jlc2l6ZUdob3N0LmpzIiwiY29uc3QgZGVmYXVsdE1pbldpZHRoID0gNjA7XHJcblxyXG5leHBvcnQgY29uc3QgdHJpbUNvbHVtbldpZHRoID0gKGNvbHVtbiwgd2lkdGgpID0+XHJcbiAgICBNYXRoLm1pbihNYXRoLm1heChjb2x1bW4ubWluV2lkdGggfHwgZGVmYXVsdE1pbldpZHRoLCB3aWR0aCksIGNvbHVtbi5tYXhXaWR0aCB8fCBJbmZpbml0eSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29sdW1uV2lkdGggPSBjb2x1bW4gPT5cclxuICAgIGNvbHVtbi53aWR0aCB8fCBjb2x1bW4ubWluV2lkdGggfHwgZGVmYXVsdE1pbldpZHRoO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJpc2VjdENvbHVtbnMgPSAoY29sdW1ucywgcG9zaXRpb24pID0+IHtcclxuICAgIGlmIChjb2x1bW5zLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICByZXR1cm4gWy0xLCAwXTtcclxuICAgIH1cclxuICAgIGxldCBsYXN0ID0gMDtcclxuICAgIHJldHVybiBjb2x1bW5zLnJlZHVjZSgoYWNjLCB7IHdpZHRoIH0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGVmdCA9IGxhc3Q7XHJcbiAgICAgICAgY29uc3QgcmVsYXRpdmUgPSBwb3NpdGlvbiAtIGxlZnQ7XHJcbiAgICAgICAgY29uc3QgaGFsZiA9IHdpZHRoIC8gMjtcclxuICAgICAgICBsYXN0ID0gbGVmdCArIHdpZHRoO1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCAmJiByZWxhdGl2ZSA8IGhhbGYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtpbmRleCAtIDEsIGluZGV4XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGluZGV4ID09PSBjb2x1bW5zLmxlbmd0aCAtIDEgJiYgaGFsZiA8PSByZWxhdGl2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW2luZGV4LCBpbmRleCArIDFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaGFsZiA8PSByZWxhdGl2ZSAmJiByZWxhdGl2ZSA8PSB3aWR0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW2luZGV4LCBpbmRleCArIDFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoMCA8PSByZWxhdGl2ZSAmJiByZWxhdGl2ZSA8PSBoYWxmKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbaW5kZXggLSAxLCBpbmRleF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gW107XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb2x1bW5zVXRpbHMuanMiLCJjb25zdCBlbXB0eSA9ICgpID0+IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcblxyXG5jb25zdCBpbnZlcnQgPSBvYmogPT4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKGFjYywga2V5KSA9PiAoYWNjW29ialtrZXldXSA9IGtleSwgYWNjKSwgZW1wdHkoKSk7XHJcblxyXG5jb25zdCBjcmVhdGVGcmVlS2V5R2VuZXJhdG9yID0gKGluZGV4ZXMpID0+IHtcclxuICAgIGxldCBsYXN0UG9pbnRlciA9IDA7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGBrZXlfJHtsYXN0UG9pbnRlcn1gO1xyXG4gICAgICAgICAgICBsYXN0UG9pbnRlciArPSAxO1xyXG4gICAgICAgICAgICBpZiAoIShrZXkgaW4gaW5kZXhlcykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5jb25zdCBnZXRSZWNvdmVyZWRLZXlzID0gKGxhc3RLZXlzLCBzdGFydCwgZW5kKSA9PiB7XHJcbiAgICBjb25zdCBrZXlzID0gZW1wdHkoKTtcclxuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZCArIDE7IGkgKz0gMSkge1xyXG4gICAgICAgIGlmIChpIGluIGxhc3RLZXlzKSB7XHJcbiAgICAgICAgICAgIGtleXNbaV0gPSBsYXN0S2V5c1tpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ga2V5cztcclxufTtcclxuXHJcbmNvbnN0IGdlbmVyYXRlS2V5cyA9IChsYXN0S2V5cywgc3RhcnQsIGVuZCkgPT4ge1xyXG4gICAgY29uc3Qga2V5cyA9IGVtcHR5KCk7XHJcbiAgICBjb25zdCBnZW5lcmF0ZUtleSA9IGNyZWF0ZUZyZWVLZXlHZW5lcmF0b3IoaW52ZXJ0KGxhc3RLZXlzKSk7XHJcbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQgKyAxOyBpICs9IDEpIHtcclxuICAgICAgICBpZiAoIShpIGluIGxhc3RLZXlzKSkge1xyXG4gICAgICAgICAgICBrZXlzW2ldID0gZ2VuZXJhdGVLZXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ga2V5cztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRLZXlzQnlJbmRleCA9IChsYXN0S2V5cyA9IGVtcHR5KCksIHN0YXJ0LCBlbmQpID0+IHtcclxuICAgIGNvbnN0IHJlY292ZXJlZCA9IGdldFJlY292ZXJlZEtleXMobGFzdEtleXMsIHN0YXJ0LCBlbmQpO1xyXG4gICAgY29uc3QgZ2VuZXJhdGVkID0gZ2VuZXJhdGVLZXlzKHJlY292ZXJlZCwgc3RhcnQsIGVuZCk7XHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihlbXB0eSgpLCByZWNvdmVyZWQsIGdlbmVyYXRlZCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VmlzaWJsZVJvd3MgPSAoeyBzY3JvbGxUb3AsIHZpZXdwb3J0SGVpZ2h0LCByb3dIZWlnaHQsIHJvd3NDb3VudCB9KSA9PiB7XHJcbiAgICBjb25zdCBjbHVzdGVyU2l6ZSA9IE1hdGguY2VpbCh2aWV3cG9ydEhlaWdodCAvIHJvd0hlaWdodCk7XHJcbiAgICBjb25zdCB0b3BDbHVzdGVyID0gTWF0aC5mbG9vcihNYXRoLmZsb29yKHNjcm9sbFRvcCAvIHJvd0hlaWdodCkgLyBjbHVzdGVyU2l6ZSk7XHJcbiAgICBjb25zdCBlbmQgPSBNYXRoLm1pbihyb3dzQ291bnQsICh0b3BDbHVzdGVyICsgMikgKiBjbHVzdGVyU2l6ZSk7XHJcbiAgICAvLyBjb3VudCBvZiB2aXNpYmxlIHJvd3MgaXMgYWx3YXlzIHRoZSBzYW1lIHRoZW4gZm9jdXMgbmV2ZXIgYmUgbG9zdFxyXG4gICAgY29uc3Qgc3RhcnQgPSBNYXRoLm1heCgwLCBlbmQgLSBjbHVzdGVyU2l6ZSAqIDIpO1xyXG4gICAgcmV0dXJuIFtzdGFydCwgZW5kXTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpc3RVdGlscy5qcyIsIi8qIVxuICogaW5mZXJuby1jb21wb25lbnQgdjEuMi4yXG4gKiAoYykgMjAxNyBEb21pbmljIEdhbm5hd2F5XG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdpbmZlcm5vJykpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnaW5mZXJubyddLCBmYWN0b3J5KSA6XG5cdChnbG9iYWwuSW5mZXJubyA9IGdsb2JhbC5JbmZlcm5vIHx8IHt9LCBnbG9iYWwuSW5mZXJuby5Db21wb25lbnQgPSBmYWN0b3J5KGdsb2JhbC5JbmZlcm5vKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoaW5mZXJubykgeyAndXNlIHN0cmljdCc7XG5cbnZhciBFUlJPUl9NU0cgPSAnYSBydW50aW1lIGVycm9yIG9jY3VyZWQhIFVzZSBJbmZlcm5vIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50IHRvIGZpbmQgdGhlIGVycm9yLic7XG52YXIgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50O1xuXG4vLyB0aGlzIGlzIE1VQ0ggZmFzdGVyIHRoYW4gLmNvbnN0cnVjdG9yID09PSBBcnJheSBhbmQgaW5zdGFuY2VvZiBBcnJheVxuLy8gaW4gTm9kZSA3IGFuZCB0aGUgbGF0ZXIgdmVyc2lvbnMgb2YgVjgsIHNsb3dlciBpbiBvbGRlciB2ZXJzaW9ucyB0aG91Z2hcbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuZnVuY3Rpb24gaXNTdHJpbmdPck51bWJlcihvYmopIHtcbiAgICB2YXIgdHlwZSA9IHR5cGVvZiBvYmo7XG4gICAgcmV0dXJuIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGUgPT09ICdudW1iZXInO1xufVxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZihvYmopIHtcbiAgICByZXR1cm4gaXNVbmRlZmluZWQob2JqKSB8fCBpc051bGwob2JqKTtcbn1cbmZ1bmN0aW9uIGlzSW52YWxpZChvYmopIHtcbiAgICByZXR1cm4gaXNOdWxsKG9iaikgfHwgb2JqID09PSBmYWxzZSB8fCBpc1RydWUob2JqKSB8fCBpc1VuZGVmaW5lZChvYmopO1xufVxuZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuXG5cbmZ1bmN0aW9uIGlzTnVsbChvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBudWxsO1xufVxuZnVuY3Rpb24gaXNUcnVlKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHRydWU7XG59XG5mdW5jdGlvbiBpc1VuZGVmaW5lZChvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHRocm93RXJyb3IobWVzc2FnZSkge1xuICAgIGlmICghbWVzc2FnZSkge1xuICAgICAgICBtZXNzYWdlID0gRVJST1JfTVNHO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoKFwiSW5mZXJubyBFcnJvcjogXCIgKyBtZXNzYWdlKSk7XG59XG5cbnZhciBMaWZlY3ljbGUgPSBmdW5jdGlvbiBMaWZlY3ljbGUoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICB0aGlzLmZhc3RVbm1vdW50ID0gdHJ1ZTtcbn07XG5MaWZlY3ljbGUucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIgKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG59O1xuTGlmZWN5Y2xlLnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24gdHJpZ2dlciAoKSB7XG4gICAgICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzJDEubGlzdGVuZXJzW2ldKCk7XG4gICAgfVxufTtcblxudmFyIG5vT3AgPSBFUlJPUl9NU0c7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIG5vT3AgPSAnSW5mZXJubyBFcnJvcjogQ2FuIG9ubHkgdXBkYXRlIGEgbW91bnRlZCBvciBtb3VudGluZyBjb21wb25lbnQuIFRoaXMgdXN1YWxseSBtZWFucyB5b3UgY2FsbGVkIHNldFN0YXRlKCkgb3IgZm9yY2VVcGRhdGUoKSBvbiBhbiB1bm1vdW50ZWQgY29tcG9uZW50LiBUaGlzIGlzIGEgbm8tb3AuJztcbn1cbnZhciBjb21wb25lbnRDYWxsYmFja1F1ZXVlID0gbmV3IE1hcCgpO1xuLy8gd2hlbiBhIGNvbXBvbmVudHMgcm9vdCBWTm9kZSBpcyBhbHNvIGEgY29tcG9uZW50LCB3ZSBjYW4gcnVuIGludG8gaXNzdWVzXG4vLyB0aGlzIHdpbGwgcmVjdXJzaXZlbHkgbG9vayBmb3Igdk5vZGUucGFyZW50Tm9kZSBpZiB0aGUgVk5vZGUgaXMgYSBjb21wb25lbnRcbmZ1bmN0aW9uIHVwZGF0ZVBhcmVudENvbXBvbmVudFZOb2Rlcyh2Tm9kZSwgZG9tKSB7XG4gICAgaWYgKHZOb2RlLmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgIHZhciBwYXJlbnRWTm9kZSA9IHZOb2RlLnBhcmVudFZOb2RlO1xuICAgICAgICBpZiAocGFyZW50Vk5vZGUpIHtcbiAgICAgICAgICAgIHBhcmVudFZOb2RlLmRvbSA9IGRvbTtcbiAgICAgICAgICAgIHVwZGF0ZVBhcmVudENvbXBvbmVudFZOb2RlcyhwYXJlbnRWTm9kZSwgZG9tKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIHRoaXMgaXMgaW4gc2hhcGVzIHRvbywgYnV0IHdlIGRvbid0IHdhbnQgdG8gaW1wb3J0IGZyb20gc2hhcGVzIGFzIGl0IHdpbGwgcHVsbCBpbiBhIGR1cGxpY2F0ZSBvZiBjcmVhdGVWTm9kZVxuZnVuY3Rpb24gY3JlYXRlVm9pZFZOb2RlKCkge1xuICAgIHJldHVybiBpbmZlcm5vLmNyZWF0ZVZOb2RlKDQwOTYgLyogVm9pZCAqLyk7XG59XG5mdW5jdGlvbiBjcmVhdGVUZXh0Vk5vZGUodGV4dCkge1xuICAgIHJldHVybiBpbmZlcm5vLmNyZWF0ZVZOb2RlKDEgLyogVGV4dCAqLywgbnVsbCwgbnVsbCwgdGV4dCk7XG59XG5mdW5jdGlvbiBhZGRUb1F1ZXVlKGNvbXBvbmVudCwgZm9yY2UsIGNhbGxiYWNrKSB7XG4gICAgLy8gVE9ETyB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIHJldmlzZWQgYW5kIGltcHJvdmVkIG9uXG4gICAgdmFyIHF1ZXVlID0gY29tcG9uZW50Q2FsbGJhY2tRdWV1ZS5nZXQoY29tcG9uZW50KTtcbiAgICBpZiAoIXF1ZXVlKSB7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIGNvbXBvbmVudENhbGxiYWNrUXVldWUuc2V0KGNvbXBvbmVudCwgcXVldWUpO1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudENhbGxiYWNrUXVldWUuZGVsZXRlKGNvbXBvbmVudCk7XG4gICAgICAgICAgICBhcHBseVN0YXRlKGNvbXBvbmVudCwgZm9yY2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlW2ldKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgcXVldWUucHVzaChjYWxsYmFjayk7XG4gICAgfVxufVxuZnVuY3Rpb24gcXVldWVTdGF0ZUNoYW5nZXMoY29tcG9uZW50LCBuZXdTdGF0ZSwgY2FsbGJhY2ssIHN5bmMpIHtcbiAgICBpZiAoaXNGdW5jdGlvbihuZXdTdGF0ZSkpIHtcbiAgICAgICAgbmV3U3RhdGUgPSBuZXdTdGF0ZShjb21wb25lbnQuc3RhdGUsIGNvbXBvbmVudC5wcm9wcywgY29tcG9uZW50LmNvbnRleHQpO1xuICAgIH1cbiAgICBmb3IgKHZhciBzdGF0ZUtleSBpbiBuZXdTdGF0ZSkge1xuICAgICAgICBjb21wb25lbnQuX3BlbmRpbmdTdGF0ZVtzdGF0ZUtleV0gPSBuZXdTdGF0ZVtzdGF0ZUtleV07XG4gICAgfVxuICAgIGlmICghY29tcG9uZW50Ll9wZW5kaW5nU2V0U3RhdGUgJiYgaXNCcm93c2VyKSB7XG4gICAgICAgIGlmIChzeW5jIHx8IGNvbXBvbmVudC5fYmxvY2tSZW5kZXIpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5fcGVuZGluZ1NldFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIGFwcGx5U3RhdGUoY29tcG9uZW50LCBmYWxzZSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWRkVG9RdWV1ZShjb21wb25lbnQsIGZhbHNlLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudC5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGNvbXBvbmVudC5zdGF0ZSwgY29tcG9uZW50Ll9wZW5kaW5nU3RhdGUpO1xuICAgICAgICBjb21wb25lbnQuX3BlbmRpbmdTdGF0ZSA9IHt9O1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFwcGx5U3RhdGUoY29tcG9uZW50LCBmb3JjZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoKCFjb21wb25lbnQuX2RlZmVyU2V0U3RhdGUgfHwgZm9yY2UpICYmICFjb21wb25lbnQuX2Jsb2NrUmVuZGVyICYmICFjb21wb25lbnQuX3VubW91bnRlZCkge1xuICAgICAgICBjb21wb25lbnQuX3BlbmRpbmdTZXRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICB2YXIgcGVuZGluZ1N0YXRlID0gY29tcG9uZW50Ll9wZW5kaW5nU3RhdGU7XG4gICAgICAgIHZhciBwcmV2U3RhdGUgPSBjb21wb25lbnQuc3RhdGU7XG4gICAgICAgIHZhciBuZXh0U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBwcmV2U3RhdGUsIHBlbmRpbmdTdGF0ZSk7XG4gICAgICAgIHZhciBwcm9wcyA9IGNvbXBvbmVudC5wcm9wcztcbiAgICAgICAgdmFyIGNvbnRleHQgPSBjb21wb25lbnQuY29udGV4dDtcbiAgICAgICAgY29tcG9uZW50Ll9wZW5kaW5nU3RhdGUgPSB7fTtcbiAgICAgICAgdmFyIG5leHRJbnB1dCA9IGNvbXBvbmVudC5fdXBkYXRlQ29tcG9uZW50KHByZXZTdGF0ZSwgbmV4dFN0YXRlLCBwcm9wcywgcHJvcHMsIGNvbnRleHQsIGZvcmNlLCB0cnVlKTtcbiAgICAgICAgdmFyIGRpZFVwZGF0ZSA9IHRydWU7XG4gICAgICAgIGlmIChpc0ludmFsaWQobmV4dElucHV0KSkge1xuICAgICAgICAgICAgbmV4dElucHV0ID0gY3JlYXRlVm9pZFZOb2RlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV4dElucHV0ID09PSBpbmZlcm5vLk5PX09QKSB7XG4gICAgICAgICAgICBuZXh0SW5wdXQgPSBjb21wb25lbnQuX2xhc3RJbnB1dDtcbiAgICAgICAgICAgIGRpZFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXIobmV4dElucHV0KSkge1xuICAgICAgICAgICAgbmV4dElucHV0ID0gY3JlYXRlVGV4dFZOb2RlKG5leHRJbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNBcnJheShuZXh0SW5wdXQpKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93RXJyb3IoJ2EgdmFsaWQgSW5mZXJubyBWTm9kZSAob3IgbnVsbCkgbXVzdCBiZSByZXR1cm5lZCBmcm9tIGEgY29tcG9uZW50IHJlbmRlci4gWW91IG1heSBoYXZlIHJldHVybmVkIGFuIGFycmF5IG9yIGFuIGludmFsaWQgb2JqZWN0LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsYXN0SW5wdXQgPSBjb21wb25lbnQuX2xhc3RJbnB1dDtcbiAgICAgICAgdmFyIHZOb2RlID0gY29tcG9uZW50Ll92Tm9kZTtcbiAgICAgICAgdmFyIHBhcmVudERvbSA9IChsYXN0SW5wdXQuZG9tICYmIGxhc3RJbnB1dC5kb20ucGFyZW50Tm9kZSkgfHwgKGxhc3RJbnB1dC5kb20gPSB2Tm9kZS5kb20pO1xuICAgICAgICBjb21wb25lbnQuX2xhc3RJbnB1dCA9IG5leHRJbnB1dDtcbiAgICAgICAgaWYgKGRpZFVwZGF0ZSkge1xuICAgICAgICAgICAgdmFyIHN1YkxpZmVjeWNsZSA9IGNvbXBvbmVudC5fbGlmZWN5Y2xlO1xuICAgICAgICAgICAgaWYgKCFzdWJMaWZlY3ljbGUpIHtcbiAgICAgICAgICAgICAgICBzdWJMaWZlY3ljbGUgPSBuZXcgTGlmZWN5Y2xlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdWJMaWZlY3ljbGUubGlzdGVuZXJzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb21wb25lbnQuX2xpZmVjeWNsZSA9IHN1YkxpZmVjeWNsZTtcbiAgICAgICAgICAgIHZhciBjaGlsZENvbnRleHQgPSBjb21wb25lbnQuZ2V0Q2hpbGRDb250ZXh0KCk7XG4gICAgICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYoY2hpbGRDb250ZXh0KSkge1xuICAgICAgICAgICAgICAgIGNoaWxkQ29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQsIGNvbXBvbmVudC5fY2hpbGRDb250ZXh0LCBjaGlsZENvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hpbGRDb250ZXh0ID0gT2JqZWN0LmFzc2lnbih7fSwgY29udGV4dCwgY29tcG9uZW50Ll9jaGlsZENvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29tcG9uZW50Ll9wYXRjaChsYXN0SW5wdXQsIG5leHRJbnB1dCwgcGFyZW50RG9tLCBzdWJMaWZlY3ljbGUsIGNoaWxkQ29udGV4dCwgY29tcG9uZW50Ll9pc1NWRywgZmFsc2UpO1xuICAgICAgICAgICAgc3ViTGlmZWN5Y2xlLnRyaWdnZXIoKTtcbiAgICAgICAgICAgIGNvbXBvbmVudC5jb21wb25lbnREaWRVcGRhdGUocHJvcHMsIHByZXZTdGF0ZSk7XG4gICAgICAgICAgICBpbmZlcm5vLm9wdGlvbnMuYWZ0ZXJVcGRhdGUgJiYgaW5mZXJuby5vcHRpb25zLmFmdGVyVXBkYXRlKHZOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZG9tID0gdk5vZGUuZG9tID0gbmV4dElucHV0LmRvbTtcbiAgICAgICAgdmFyIGNvbXBvbmVudFRvRE9NTm9kZU1hcCA9IGNvbXBvbmVudC5fY29tcG9uZW50VG9ET01Ob2RlTWFwO1xuICAgICAgICBjb21wb25lbnRUb0RPTU5vZGVNYXAgJiYgY29tcG9uZW50VG9ET01Ob2RlTWFwLnNldChjb21wb25lbnQsIG5leHRJbnB1dC5kb20pO1xuICAgICAgICB1cGRhdGVQYXJlbnRDb21wb25lbnRWTm9kZXModk5vZGUsIGRvbSk7XG4gICAgICAgIGlmICghaXNOdWxsT3JVbmRlZihjYWxsYmFjaykpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoIWlzTnVsbE9yVW5kZWYoY2FsbGJhY2spKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxufVxudmFyIENvbXBvbmVudCQxID0gZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzLCBjb250ZXh0KSB7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIHRoaXMucmVmcyA9IHt9O1xuICAgIHRoaXMuX2Jsb2NrUmVuZGVyID0gZmFsc2U7XG4gICAgdGhpcy5faWdub3JlU2V0U3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLl9ibG9ja1NldFN0YXRlID0gZmFsc2U7XG4gICAgdGhpcy5fZGVmZXJTZXRTdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuX3BlbmRpbmdTZXRTdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuX3BlbmRpbmdTdGF0ZSA9IHt9O1xuICAgIHRoaXMuX2xhc3RJbnB1dCA9IG51bGw7XG4gICAgdGhpcy5fdk5vZGUgPSBudWxsO1xuICAgIHRoaXMuX3VubW91bnRlZCA9IHRydWU7XG4gICAgdGhpcy5fbGlmZWN5Y2xlID0gbnVsbDtcbiAgICB0aGlzLl9jaGlsZENvbnRleHQgPSBudWxsO1xuICAgIHRoaXMuX3BhdGNoID0gbnVsbDtcbiAgICB0aGlzLl9pc1NWRyA9IGZhbHNlO1xuICAgIHRoaXMuX2NvbXBvbmVudFRvRE9NTm9kZU1hcCA9IG51bGw7XG4gICAgLyoqIEB0eXBlIHtvYmplY3R9ICovXG4gICAgdGhpcy5wcm9wcyA9IHByb3BzIHx8IGluZmVybm8uRU1QVFlfT0JKO1xuICAgIC8qKiBAdHlwZSB7b2JqZWN0fSAqL1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQgfHwge307XG59O1xuQ29tcG9uZW50JDEucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlciAobmV4dFByb3BzLCBuZXh0U3RhdGUsIG5leHRDb250ZXh0KSB7XG59O1xuQ29tcG9uZW50JDEucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gZm9yY2VVcGRhdGUgKGNhbGxiYWNrKSB7XG4gICAgaWYgKHRoaXMuX3VubW91bnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlzQnJvd3NlciAmJiBhcHBseVN0YXRlKHRoaXMsIHRydWUsIGNhbGxiYWNrKTtcbn07XG5Db21wb25lbnQkMS5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiBzZXRTdGF0ZSAobmV3U3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHRoaXMuX3VubW91bnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5fYmxvY2tTZXRTdGF0ZSkge1xuICAgICAgICBpZiAoIXRoaXMuX2lnbm9yZVNldFN0YXRlKSB7XG4gICAgICAgICAgICBxdWV1ZVN0YXRlQ2hhbmdlcyh0aGlzLCBuZXdTdGF0ZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3IoJ2Nhbm5vdCB1cGRhdGUgc3RhdGUgdmlhIHNldFN0YXRlKCkgaW4gY29tcG9uZW50V2lsbFVwZGF0ZSgpLicpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IoKTtcbiAgICB9XG59O1xuQ29tcG9uZW50JDEucHJvdG90eXBlLnNldFN0YXRlU3luYyA9IGZ1bmN0aW9uIHNldFN0YXRlU3luYyAobmV3U3RhdGUpIHtcbiAgICBpZiAodGhpcy5fdW5tb3VudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9ibG9ja1NldFN0YXRlKSB7XG4gICAgICAgIGlmICghdGhpcy5faWdub3JlU2V0U3RhdGUpIHtcbiAgICAgICAgICAgIHF1ZXVlU3RhdGVDaGFuZ2VzKHRoaXMsIG5ld1N0YXRlLCBudWxsLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3IoJ2Nhbm5vdCB1cGRhdGUgc3RhdGUgdmlhIHNldFN0YXRlKCkgaW4gY29tcG9uZW50V2lsbFVwZGF0ZSgpLicpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IoKTtcbiAgICB9XG59O1xuQ29tcG9uZW50JDEucHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XG59O1xuQ29tcG9uZW50JDEucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSAocHJldlByb3BzLCBwcmV2U3RhdGUsIHByZXZDb250ZXh0KSB7XG59O1xuQ29tcG9uZW50JDEucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZSAobmV4dFByb3BzLCBuZXh0U3RhdGUsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5Db21wb25lbnQkMS5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5leHRQcm9wcywgY29udGV4dCkge1xufTtcbkNvbXBvbmVudCQxLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVwZGF0ZSAobmV4dFByb3BzLCBuZXh0U3RhdGUsIG5leHRDb250ZXh0KSB7XG59O1xuQ29tcG9uZW50JDEucHJvdG90eXBlLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCAoKSB7XG59O1xuQ29tcG9uZW50JDEucHJvdG90eXBlLl91cGRhdGVDb21wb25lbnQgPSBmdW5jdGlvbiBfdXBkYXRlQ29tcG9uZW50IChwcmV2U3RhdGUsIG5leHRTdGF0ZSwgcHJldlByb3BzLCBuZXh0UHJvcHMsIGNvbnRleHQsIGZvcmNlLCBmcm9tU2V0U3RhdGUpIHtcbiAgICBpZiAodGhpcy5fdW5tb3VudGVkID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKG5vT3ApO1xuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IoKTtcbiAgICB9XG4gICAgaWYgKChwcmV2UHJvcHMgIT09IG5leHRQcm9wcyB8fCBuZXh0UHJvcHMgPT09IGluZmVybm8uRU1QVFlfT0JKKSB8fCBwcmV2U3RhdGUgIT09IG5leHRTdGF0ZSB8fCBmb3JjZSkge1xuICAgICAgICBpZiAocHJldlByb3BzICE9PSBuZXh0UHJvcHMgfHwgbmV4dFByb3BzID09PSBpbmZlcm5vLkVNUFRZX09CSikge1xuICAgICAgICAgICAgaWYgKCFmcm9tU2V0U3RhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja1JlbmRlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcywgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9wZW5kaW5nU2V0U3RhdGUpIHtcbiAgICAgICAgICAgICAgICBuZXh0U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBuZXh0U3RhdGUsIHRoaXMuX3BlbmRpbmdTdGF0ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGVuZGluZ1NldFN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGVuZGluZ1N0YXRlID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNob3VsZFVwZGF0ZSA9IHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSAhPT0gZmFsc2UgfHwgZm9yY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2Jsb2NrU2V0U3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlLCBjb250ZXh0KTtcbiAgICAgICAgICAgIHRoaXMuX2Jsb2NrU2V0U3RhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMgPSBuZXh0UHJvcHM7XG4gICAgICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgICAgIGluZmVybm8ub3B0aW9ucy5iZWZvcmVSZW5kZXIgJiYgaW5mZXJuby5vcHRpb25zLmJlZm9yZVJlbmRlcih0aGlzKTtcbiAgICAgICAgICAgIHZhciByZW5kZXIgPSB0aGlzLnJlbmRlcihuZXh0UHJvcHMsIHN0YXRlLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGluZmVybm8ub3B0aW9ucy5hZnRlclJlbmRlciAmJiBpbmZlcm5vLm9wdGlvbnMuYWZ0ZXJSZW5kZXIodGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbmZlcm5vLk5PX09QO1xufTtcblxucmV0dXJuIENvbXBvbmVudCQxO1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2luZmVybm8vZGlzdC9pbmZlcm5vLWNvbXBvbmVudC5ub2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcbiAqIGluZmVybm8tY3JlYXRlLWVsZW1lbnQgdjEuMi4yXG4gKiAoYykgMjAxNyBEb21pbmljIEdhbm5hd2F5XG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdpbmZlcm5vJykpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnaW5mZXJubyddLCBmYWN0b3J5KSA6XG5cdChnbG9iYWwuSW5mZXJubyA9IGdsb2JhbC5JbmZlcm5vIHx8IHt9LCBnbG9iYWwuSW5mZXJuby5jcmVhdGVFbGVtZW50ID0gZmFjdG9yeShnbG9iYWwuSW5mZXJubykpO1xufSh0aGlzLCAoZnVuY3Rpb24gKGluZmVybm8pIHsgJ3VzZSBzdHJpY3QnO1xuXG4vLyB0aGlzIGlzIE1VQ0ggZmFzdGVyIHRoYW4gLmNvbnN0cnVjdG9yID09PSBBcnJheSBhbmQgaW5zdGFuY2VvZiBBcnJheVxuLy8gaW4gTm9kZSA3IGFuZCB0aGUgbGF0ZXIgdmVyc2lvbnMgb2YgVjgsIHNsb3dlciBpbiBvbGRlciB2ZXJzaW9ucyB0aG91Z2hcblxuZnVuY3Rpb24gaXNTdGF0ZWZ1bENvbXBvbmVudChvKSB7XG4gICAgcmV0dXJuICFpc1VuZGVmaW5lZChvLnByb3RvdHlwZSkgJiYgIWlzVW5kZWZpbmVkKG8ucHJvdG90eXBlLnJlbmRlcik7XG59XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWYob2JqKSB7XG4gICAgcmV0dXJuIGlzVW5kZWZpbmVkKG9iaikgfHwgaXNOdWxsKG9iaik7XG59XG5mdW5jdGlvbiBpc0ludmFsaWQob2JqKSB7XG4gICAgcmV0dXJuIGlzTnVsbChvYmopIHx8IG9iaiA9PT0gZmFsc2UgfHwgaXNUcnVlKG9iaikgfHwgaXNVbmRlZmluZWQob2JqKTtcbn1cblxuZnVuY3Rpb24gaXNBdHRyQW5FdmVudChhdHRyKSB7XG4gICAgcmV0dXJuIGF0dHJbMF0gPT09ICdvJyAmJiBhdHRyWzFdID09PSAnbicgJiYgYXR0ci5sZW5ndGggPiAzO1xufVxuZnVuY3Rpb24gaXNTdHJpbmcob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnO1xufVxuXG5mdW5jdGlvbiBpc051bGwob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gbnVsbDtcbn1cbmZ1bmN0aW9uIGlzVHJ1ZShvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB0cnVlO1xufVxuZnVuY3Rpb24gaXNVbmRlZmluZWQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNPYmplY3Qobykge1xuICAgIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCc7XG59XG5cbnZhciBjb21wb25lbnRIb29rcyA9IHtcbiAgICBvbkNvbXBvbmVudFdpbGxNb3VudDogdHJ1ZSxcbiAgICBvbkNvbXBvbmVudERpZE1vdW50OiB0cnVlLFxuICAgIG9uQ29tcG9uZW50V2lsbFVubW91bnQ6IHRydWUsXG4gICAgb25Db21wb25lbnRTaG91bGRVcGRhdGU6IHRydWUsXG4gICAgb25Db21wb25lbnRXaWxsVXBkYXRlOiB0cnVlLFxuICAgIG9uQ29tcG9uZW50RGlkVXBkYXRlOiB0cnVlXG59O1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCQxKG5hbWUsIHByb3BzKSB7XG4gICAgdmFyIF9jaGlsZHJlbiA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgICB3aGlsZSAoIGxlbi0tID4gMCApIF9jaGlsZHJlblsgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDIgXTtcblxuICAgIGlmIChpc0ludmFsaWQobmFtZSkgfHwgaXNPYmplY3QobmFtZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmZlcm5vIEVycm9yOiBjcmVhdGVFbGVtZW50KCkgbmFtZSBwYXJhbWV0ZXIgY2Fubm90IGJlIHVuZGVmaW5lZCwgbnVsbCwgZmFsc2Ugb3IgdHJ1ZSwgSXQgbXVzdCBiZSBhIHN0cmluZywgY2xhc3Mgb3IgZnVuY3Rpb24uJyk7XG4gICAgfVxuICAgIHZhciBjaGlsZHJlbiA9IF9jaGlsZHJlbjtcbiAgICB2YXIgcmVmID0gbnVsbDtcbiAgICB2YXIga2V5ID0gbnVsbDtcbiAgICB2YXIgZXZlbnRzID0gbnVsbDtcbiAgICB2YXIgZmxhZ3MgPSAwO1xuICAgIGlmIChfY2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKF9jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gX2NoaWxkcmVuWzBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKF9jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChpc1N0cmluZyhuYW1lKSkge1xuICAgICAgICBmbGFncyA9IDIgLyogSHRtbEVsZW1lbnQgKi87XG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnc3ZnJzpcbiAgICAgICAgICAgICAgICBmbGFncyA9IDEyOCAvKiBTdmdFbGVtZW50ICovO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaW5wdXQnOlxuICAgICAgICAgICAgICAgIGZsYWdzID0gNTEyIC8qIElucHV0RWxlbWVudCAqLztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgICAgICAgICAgICBmbGFncyA9IDEwMjQgLyogVGV4dGFyZWFFbGVtZW50ICovO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgICAgICAgICBmbGFncyA9IDIwNDggLyogU2VsZWN0RWxlbWVudCAqLztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgIH1cbiAgICAgICAgLypcbiAgICAgICAgIFRoaXMgZml4ZXMgZGUtb3B0aW1pc2F0aW9uOlxuICAgICAgICAgdXNlcyBvYmplY3QgS2V5cyBmb3IgbG9vcGluZyBwcm9wcyB0byBhdm9pZCBkZWxldGluZyBwcm9wcyBvZiBsb29wZWQgb2JqZWN0XG4gICAgICAgICAqL1xuICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYocHJvcHMpKSB7XG4gICAgICAgICAgICB2YXIgcHJvcEtleXMgPSBPYmplY3Qua2V5cyhwcm9wcyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3BLZXkgPSBwcm9wS2V5c1tpXTtcbiAgICAgICAgICAgICAgICBpZiAocHJvcEtleSA9PT0gJ2tleScpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gcHJvcHMua2V5O1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcHJvcHMua2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9wS2V5ID09PSAnY2hpbGRyZW4nICYmIGlzVW5kZWZpbmVkKGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuOyAvLyBhbHdheXMgZmF2b3VyIGNoaWxkcmVuIGFyZ3MsIGRlZmF1bHQgdG8gcHJvcHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvcEtleSA9PT0gJ3JlZicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmID0gcHJvcHMucmVmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc0F0dHJBbkV2ZW50KHByb3BLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBldmVudHNbcHJvcEtleV0gPSBwcm9wc1twcm9wS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHByb3BzW3Byb3BLZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZmxhZ3MgPSBpc1N0YXRlZnVsQ29tcG9uZW50KG5hbWUpID8gNCAvKiBDb21wb25lbnRDbGFzcyAqLyA6IDggLyogQ29tcG9uZW50RnVuY3Rpb24gKi87XG4gICAgICAgIGlmICghaXNVbmRlZmluZWQoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBpZiAoIXByb3BzKSB7XG4gICAgICAgICAgICAgICAgcHJvcHMgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgICAgICBjaGlsZHJlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKHByb3BzKSkge1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICBUaGlzIGZpeGVzIGRlLW9wdGltaXNhdGlvbjpcbiAgICAgICAgICAgICB1c2VzIG9iamVjdCBLZXlzIGZvciBsb29waW5nIHByb3BzIHRvIGF2b2lkIGRlbGV0aW5nIHByb3BzIG9mIGxvb3BlZCBvYmplY3RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIHByb3BLZXlzJDEgPSBPYmplY3Qua2V5cyhwcm9wcyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpJDEgPSAwOyBpJDEgPCBwcm9wS2V5cyQxLmxlbmd0aDsgaSQxKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcEtleSQxID0gcHJvcEtleXMkMVtpJDFdO1xuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnRIb29rc1twcm9wS2V5JDFdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWYgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZWZbcHJvcEtleSQxXSA9IHByb3BzW3Byb3BLZXkkMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3BLZXkkMSA9PT0gJ2tleScpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gcHJvcHMua2V5O1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcHJvcHMua2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW5mZXJuby5jcmVhdGVWTm9kZShmbGFncywgbmFtZSwgcHJvcHMsIGNoaWxkcmVuLCBldmVudHMsIGtleSwgcmVmKTtcbn1cblxucmV0dXJuIGNyZWF0ZUVsZW1lbnQkMTtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pbmZlcm5vL2Rpc3QvaW5mZXJuby1jcmVhdGUtZWxlbWVudC5ub2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcbiAqIGluZmVybm8gdjEuMi4yXG4gKiAoYykgMjAxNyBEb21pbmljIEdhbm5hd2F5XG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cykgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJ10sIGZhY3RvcnkpIDpcblx0KGZhY3RvcnkoKGdsb2JhbC5JbmZlcm5vID0gZ2xvYmFsLkluZmVybm8gfHwge30pKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoZXhwb3J0cykgeyAndXNlIHN0cmljdCc7XG5cbnZhciBOT19PUCA9ICckTk9fT1AnO1xudmFyIEVSUk9SX01TRyA9ICdhIHJ1bnRpbWUgZXJyb3Igb2NjdXJlZCEgVXNlIEluZmVybm8gaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnQgdG8gZmluZCB0aGUgZXJyb3IuJztcbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQ7XG5cbi8vIHRoaXMgaXMgTVVDSCBmYXN0ZXIgdGhhbiAuY29uc3RydWN0b3IgPT09IEFycmF5IGFuZCBpbnN0YW5jZW9mIEFycmF5XG4vLyBpbiBOb2RlIDcgYW5kIHRoZSBsYXRlciB2ZXJzaW9ucyBvZiBWOCwgc2xvd2VyIGluIG9sZGVyIHZlcnNpb25zIHRob3VnaFxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuZnVuY3Rpb24gaXNTdGF0ZWZ1bENvbXBvbmVudChvKSB7XG4gICAgcmV0dXJuICFpc1VuZGVmaW5lZChvLnByb3RvdHlwZSkgJiYgIWlzVW5kZWZpbmVkKG8ucHJvdG90eXBlLnJlbmRlcik7XG59XG5mdW5jdGlvbiBpc1N0cmluZ09yTnVtYmVyKG9iaikge1xuICAgIHZhciB0eXBlID0gdHlwZW9mIG9iajtcbiAgICByZXR1cm4gdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ251bWJlcic7XG59XG5mdW5jdGlvbiBpc051bGxPclVuZGVmKG9iaikge1xuICAgIHJldHVybiBpc1VuZGVmaW5lZChvYmopIHx8IGlzTnVsbChvYmopO1xufVxuZnVuY3Rpb24gaXNJbnZhbGlkKG9iaikge1xuICAgIHJldHVybiBpc051bGwob2JqKSB8fCBvYmogPT09IGZhbHNlIHx8IGlzVHJ1ZShvYmopIHx8IGlzVW5kZWZpbmVkKG9iaik7XG59XG5mdW5jdGlvbiBpc0Z1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gaXNBdHRyQW5FdmVudChhdHRyKSB7XG4gICAgcmV0dXJuIGF0dHJbMF0gPT09ICdvJyAmJiBhdHRyWzFdID09PSAnbicgJiYgYXR0ci5sZW5ndGggPiAzO1xufVxuZnVuY3Rpb24gaXNTdHJpbmcob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnO1xufVxuZnVuY3Rpb24gaXNOdW1iZXIob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdudW1iZXInO1xufVxuZnVuY3Rpb24gaXNOdWxsKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IG51bGw7XG59XG5mdW5jdGlvbiBpc1RydWUob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzT2JqZWN0KG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnO1xufVxuZnVuY3Rpb24gdGhyb3dFcnJvcihtZXNzYWdlKSB7XG4gICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICAgIG1lc3NhZ2UgPSBFUlJPUl9NU0c7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcigoXCJJbmZlcm5vIEVycm9yOiBcIiArIG1lc3NhZ2UpKTtcbn1cbmZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbn1cbnZhciBFTVBUWV9PQkogPSB7fTtcblxuZnVuY3Rpb24gYXBwbHlLZXkoa2V5LCB2Tm9kZSkge1xuICAgIHZOb2RlLmtleSA9IGtleTtcbiAgICByZXR1cm4gdk5vZGU7XG59XG5mdW5jdGlvbiBhcHBseUtleUlmTWlzc2luZyhrZXksIHZOb2RlKSB7XG4gICAgaWYgKGlzTnVtYmVyKGtleSkpIHtcbiAgICAgICAga2V5ID0gXCIuXCIgKyBrZXk7XG4gICAgfVxuICAgIGlmIChpc051bGwodk5vZGUua2V5KSB8fCB2Tm9kZS5rZXlbMF0gPT09ICcuJykge1xuICAgICAgICByZXR1cm4gYXBwbHlLZXkoa2V5LCB2Tm9kZSk7XG4gICAgfVxuICAgIHJldHVybiB2Tm9kZTtcbn1cbmZ1bmN0aW9uIGFwcGx5S2V5UHJlZml4KGtleSwgdk5vZGUpIHtcbiAgICB2Tm9kZS5rZXkgPSBrZXkgKyB2Tm9kZS5rZXk7XG4gICAgcmV0dXJuIHZOb2RlO1xufVxuZnVuY3Rpb24gX25vcm1hbGl6ZVZOb2Rlcyhub2RlcywgcmVzdWx0LCBpbmRleCwgY3VycmVudEtleSkge1xuICAgIGZvciAoOyBpbmRleCA8IG5vZGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB2YXIgbiA9IG5vZGVzW2luZGV4XTtcbiAgICAgICAgdmFyIGtleSA9IGN1cnJlbnRLZXkgKyBcIi5cIiArIGluZGV4O1xuICAgICAgICBpZiAoIWlzSW52YWxpZChuKSkge1xuICAgICAgICAgICAgaWYgKGlzQXJyYXkobikpIHtcbiAgICAgICAgICAgICAgICBfbm9ybWFsaXplVk5vZGVzKG4sIHJlc3VsdCwgMCwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpc1N0cmluZ09yTnVtYmVyKG4pKSB7XG4gICAgICAgICAgICAgICAgICAgIG4gPSBjcmVhdGVUZXh0Vk5vZGUobik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzVk5vZGUobikgJiYgbi5kb20gfHwgKG4ua2V5ICYmIG4ua2V5WzBdID09PSAnLicpKSB7XG4gICAgICAgICAgICAgICAgICAgIG4gPSBjbG9uZVZOb2RlKG4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXNOdWxsKG4ua2V5KSB8fCBuLmtleVswXSA9PT0gJy4nKSB7XG4gICAgICAgICAgICAgICAgICAgIG4gPSBhcHBseUtleShrZXksIG4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbiA9IGFwcGx5S2V5UHJlZml4KGN1cnJlbnRLZXksIG4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVZOb2Rlcyhub2Rlcykge1xuICAgIHZhciBuZXdOb2RlcztcbiAgICAvLyB3ZSBhc3NpZ24gJCB3aGljaCBiYXNpY2FsbHkgbWVhbnMgd2UndmUgZmxhZ2dlZCB0aGlzIGFycmF5IGZvciBmdXR1cmUgbm90ZVxuICAgIC8vIGlmIGl0IGNvbWVzIGJhY2sgYWdhaW4sIHdlIG5lZWQgdG8gY2xvbmUgaXQsIGFzIHBlb3BsZSBhcmUgdXNpbmcgaXRcbiAgICAvLyBpbiBhbiBpbW11dGFibGUgd2F5XG4gICAgLy8gdHNsaW50OmRpc2FibGVcbiAgICBpZiAobm9kZXNbJyQnXSkge1xuICAgICAgICBub2RlcyA9IG5vZGVzLnNsaWNlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBub2Rlc1snJCddID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8gdHNsaW50OmVuYWJsZVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG4gPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKGlzSW52YWxpZChuKSB8fCBpc0FycmF5KG4pKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gKG5ld05vZGVzIHx8IG5vZGVzKS5zbGljZSgwLCBpKTtcbiAgICAgICAgICAgIF9ub3JtYWxpemVWTm9kZXMobm9kZXMsIHJlc3VsdCwgaSwgXCJcIik7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXIobikpIHtcbiAgICAgICAgICAgIGlmICghbmV3Tm9kZXMpIHtcbiAgICAgICAgICAgICAgICBuZXdOb2RlcyA9IG5vZGVzLnNsaWNlKDAsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3Tm9kZXMucHVzaChhcHBseUtleUlmTWlzc2luZyhpLCBjcmVhdGVUZXh0Vk5vZGUobikpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoaXNWTm9kZShuKSAmJiBuLmRvbSkgfHwgKGlzTnVsbChuLmtleSkgJiYgIShuLmZsYWdzICYgNjQgLyogSGFzTm9uS2V5ZWRDaGlsZHJlbiAqLykpKSB7XG4gICAgICAgICAgICBpZiAoIW5ld05vZGVzKSB7XG4gICAgICAgICAgICAgICAgbmV3Tm9kZXMgPSBub2Rlcy5zbGljZSgwLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld05vZGVzLnB1c2goYXBwbHlLZXlJZk1pc3NpbmcoaSwgY2xvbmVWTm9kZShuKSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5ld05vZGVzKSB7XG4gICAgICAgICAgICBuZXdOb2Rlcy5wdXNoKGFwcGx5S2V5SWZNaXNzaW5nKGksIGNsb25lVk5vZGUobikpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3Tm9kZXMgfHwgbm9kZXM7XG59XG5mdW5jdGlvbiBub3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbikge1xuICAgIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICByZXR1cm4gbm9ybWFsaXplVk5vZGVzKGNoaWxkcmVuKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNWTm9kZShjaGlsZHJlbikgJiYgY2hpbGRyZW4uZG9tKSB7XG4gICAgICAgIHJldHVybiBjbG9uZVZOb2RlKGNoaWxkcmVuKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplUHJvcHModk5vZGUsIHByb3BzLCBjaGlsZHJlbikge1xuICAgIGlmICghKHZOb2RlLmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSAmJiBpc051bGxPclVuZGVmKGNoaWxkcmVuKSAmJiAhaXNOdWxsT3JVbmRlZihwcm9wcy5jaGlsZHJlbikpIHtcbiAgICAgICAgdk5vZGUuY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcbiAgICB9XG4gICAgaWYgKHByb3BzLnJlZikge1xuICAgICAgICB2Tm9kZS5yZWYgPSBwcm9wcy5yZWY7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5yZWY7XG4gICAgfVxuICAgIGlmIChwcm9wcy5ldmVudHMpIHtcbiAgICAgICAgdk5vZGUuZXZlbnRzID0gcHJvcHMuZXZlbnRzO1xuICAgIH1cbiAgICBpZiAoIWlzTnVsbE9yVW5kZWYocHJvcHMua2V5KSkge1xuICAgICAgICB2Tm9kZS5rZXkgPSBwcm9wcy5rZXk7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5rZXk7XG4gICAgfVxufVxuZnVuY3Rpb24gY29weVByb3BzVG8oY29weUZyb20sIGNvcHlUbykge1xuICAgIGZvciAodmFyIHByb3AgaW4gY29weUZyb20pIHtcbiAgICAgICAgaWYgKGlzVW5kZWZpbmVkKGNvcHlUb1twcm9wXSkpIHtcbiAgICAgICAgICAgIGNvcHlUb1twcm9wXSA9IGNvcHlGcm9tW3Byb3BdO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gbm9ybWFsaXplRWxlbWVudCh0eXBlLCB2Tm9kZSkge1xuICAgIGlmICh0eXBlID09PSAnc3ZnJykge1xuICAgICAgICB2Tm9kZS5mbGFncyA9IDEyOCAvKiBTdmdFbGVtZW50ICovO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnaW5wdXQnKSB7XG4gICAgICAgIHZOb2RlLmZsYWdzID0gNTEyIC8qIElucHV0RWxlbWVudCAqLztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgdk5vZGUuZmxhZ3MgPSAyMDQ4IC8qIFNlbGVjdEVsZW1lbnQgKi87XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd0ZXh0YXJlYScpIHtcbiAgICAgICAgdk5vZGUuZmxhZ3MgPSAxMDI0IC8qIFRleHRhcmVhRWxlbWVudCAqLztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ21lZGlhJykge1xuICAgICAgICB2Tm9kZS5mbGFncyA9IDI1NiAvKiBNZWRpYUVsZW1lbnQgKi87XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2Tm9kZS5mbGFncyA9IDIgLyogSHRtbEVsZW1lbnQgKi87XG4gICAgfVxufVxuZnVuY3Rpb24gbm9ybWFsaXplKHZOb2RlKSB7XG4gICAgdmFyIHByb3BzID0gdk5vZGUucHJvcHM7XG4gICAgdmFyIGhhc1Byb3BzID0gIWlzTnVsbChwcm9wcyk7XG4gICAgdmFyIHR5cGUgPSB2Tm9kZS50eXBlO1xuICAgIHZhciBjaGlsZHJlbiA9IHZOb2RlLmNoaWxkcmVuO1xuICAgIC8vIGNvbnZlcnQgYSB3cm9uZ2x5IGNyZWF0ZWQgdHlwZSBiYWNrIHRvIGVsZW1lbnRcbiAgICBpZiAoaXNTdHJpbmcodHlwZSkgJiYgKHZOb2RlLmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSkge1xuICAgICAgICBub3JtYWxpemVFbGVtZW50KHR5cGUsIHZOb2RlKTtcbiAgICAgICAgaWYgKGhhc1Byb3BzICYmIHByb3BzLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICB2Tm9kZS5jaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuICAgICAgICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGFzUHJvcHMpIHtcbiAgICAgICAgbm9ybWFsaXplUHJvcHModk5vZGUsIHByb3BzLCBjaGlsZHJlbik7XG4gICAgfVxuICAgIGlmICghaXNJbnZhbGlkKGNoaWxkcmVuKSkge1xuICAgICAgICB2Tm9kZS5jaGlsZHJlbiA9IG5vcm1hbGl6ZUNoaWxkcmVuKGNoaWxkcmVuKTtcbiAgICB9XG4gICAgaWYgKGhhc1Byb3BzICYmICFpc0ludmFsaWQocHJvcHMuY2hpbGRyZW4pKSB7XG4gICAgICAgIHByb3BzLmNoaWxkcmVuID0gbm9ybWFsaXplQ2hpbGRyZW4ocHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAvLyBUaGlzIGNvZGUgd2lsbCBiZSBzdHJpcHBlZCBvdXQgZnJvbSBwcm9kdWN0aW9uIENPREVcbiAgICAgICAgLy8gSXQgd2lsbCBoZWxwIHVzZXJzIHRvIHRyYWNrIGVycm9ycyBpbiB0aGVpciBhcHBsaWNhdGlvbnMuXG4gICAgICAgIHZhciB2ZXJpZnlLZXlzID0gZnVuY3Rpb24gKHZOb2Rlcykge1xuICAgICAgICAgICAgdmFyIGtleVZhbHVlcyA9IHZOb2Rlcy5tYXAoZnVuY3Rpb24gKHZub2RlKSB7IHJldHVybiB2bm9kZS5rZXk7IH0pO1xuICAgICAgICAgICAga2V5VmFsdWVzLnNvbWUoZnVuY3Rpb24gKGl0ZW0sIGlkeCkge1xuICAgICAgICAgICAgICAgIHZhciBoYXNEdXBsaWNhdGUgPSBrZXlWYWx1ZXMuaW5kZXhPZihpdGVtKSAhPT0gaWR4O1xuICAgICAgICAgICAgICAgIGlmIChoYXNEdXBsaWNhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgd2FybmluZygnSW5mZXJubyBub3JtYWxpc2F0aW9uKC4uLik6IEVuY291bnRlcmVkIHR3byBjaGlsZHJlbiB3aXRoIHNhbWUga2V5LCBhbGwga2V5cyBtdXN0IGJlIHVuaXF1ZSB3aXRoaW4gaXRzIHNpYmxpbmdzLiBEdXBsaWNhdGVkIGtleSBpczonICsgaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBoYXNEdXBsaWNhdGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHZOb2RlLmNoaWxkcmVuICYmIEFycmF5LmlzQXJyYXkodk5vZGUuY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICB2ZXJpZnlLZXlzKHZOb2RlLmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxudmFyIG9wdGlvbnMgPSB7XG4gICAgcmVjeWNsaW5nRW5hYmxlZDogdHJ1ZSxcbiAgICBmaW5kRE9NTm9kZUVuYWJsZWQ6IGZhbHNlLFxuICAgIHJvb3RzOiBudWxsLFxuICAgIGNyZWF0ZVZOb2RlOiBudWxsLFxuICAgIGJlZm9yZVJlbmRlcjogbnVsbCxcbiAgICBhZnRlclJlbmRlcjogbnVsbCxcbiAgICBhZnRlck1vdW50OiBudWxsLFxuICAgIGFmdGVyVXBkYXRlOiBudWxsLFxuICAgIGJlZm9yZVVubW91bnQ6IG51bGxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVZOb2RlKGZsYWdzLCB0eXBlLCBwcm9wcywgY2hpbGRyZW4sIGV2ZW50cywga2V5LCByZWYsIG5vTm9ybWFsaXNlKSB7XG4gICAgaWYgKGZsYWdzICYgMTYgLyogQ29tcG9uZW50VW5rbm93biAqLykge1xuICAgICAgICBmbGFncyA9IGlzU3RhdGVmdWxDb21wb25lbnQodHlwZSkgPyA0IC8qIENvbXBvbmVudENsYXNzICovIDogOCAvKiBDb21wb25lbnRGdW5jdGlvbiAqLztcbiAgICB9XG4gICAgdmFyIHZOb2RlID0ge1xuICAgICAgICBjaGlsZHJlbjogaXNVbmRlZmluZWQoY2hpbGRyZW4pID8gbnVsbCA6IGNoaWxkcmVuLFxuICAgICAgICBkb206IG51bGwsXG4gICAgICAgIGV2ZW50czogZXZlbnRzIHx8IG51bGwsXG4gICAgICAgIGZsYWdzOiBmbGFncyxcbiAgICAgICAga2V5OiBpc1VuZGVmaW5lZChrZXkpID8gbnVsbCA6IGtleSxcbiAgICAgICAgcHJvcHM6IHByb3BzIHx8IG51bGwsXG4gICAgICAgIHJlZjogcmVmIHx8IG51bGwsXG4gICAgICAgIHR5cGU6IHR5cGVcbiAgICB9O1xuICAgIGlmICghbm9Ob3JtYWxpc2UpIHtcbiAgICAgICAgbm9ybWFsaXplKHZOb2RlKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuY3JlYXRlVk5vZGUpIHtcbiAgICAgICAgb3B0aW9ucy5jcmVhdGVWTm9kZSh2Tm9kZSk7XG4gICAgfVxuICAgIHJldHVybiB2Tm9kZTtcbn1cbmZ1bmN0aW9uIGNsb25lVk5vZGUodk5vZGVUb0Nsb25lLCBwcm9wcykge1xuICAgIHZhciBfY2hpbGRyZW4gPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG4gICAgd2hpbGUgKCBsZW4tLSA+IDAgKSBfY2hpbGRyZW5bIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gKyAyIF07XG5cbiAgICB2YXIgY2hpbGRyZW4gPSBfY2hpbGRyZW47XG4gICAgaWYgKF9jaGlsZHJlbi5sZW5ndGggPiAwICYmICFpc051bGwoX2NoaWxkcmVuWzBdKSkge1xuICAgICAgICBpZiAoIXByb3BzKSB7XG4gICAgICAgICAgICBwcm9wcyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChfY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IF9jaGlsZHJlblswXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNVbmRlZmluZWQocHJvcHMuY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzQXJyYXkocHJvcHMuY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4uY29uY2F0KGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuID0gW3Byb3BzLmNoaWxkcmVuXS5jb25jYXQoY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpc0FycmF5KHByb3BzLmNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGlsZHJlbi5wdXNoKGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuID0gW3Byb3BzLmNoaWxkcmVuXTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2hpbGRyZW4ucHVzaChjaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgICB2YXIgbmV3Vk5vZGU7XG4gICAgaWYgKGlzQXJyYXkodk5vZGVUb0Nsb25lKSkge1xuICAgICAgICB2YXIgdG1wQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2Tm9kZVRvQ2xvbmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRtcEFycmF5LnB1c2goY2xvbmVWTm9kZSh2Tm9kZVRvQ2xvbmVbaV0pKTtcbiAgICAgICAgfVxuICAgICAgICBuZXdWTm9kZSA9IHRtcEFycmF5O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGZsYWdzID0gdk5vZGVUb0Nsb25lLmZsYWdzO1xuICAgICAgICB2YXIgZXZlbnRzID0gdk5vZGVUb0Nsb25lLmV2ZW50cyB8fCAocHJvcHMgJiYgcHJvcHMuZXZlbnRzKSB8fCBudWxsO1xuICAgICAgICB2YXIga2V5ID0gIWlzTnVsbE9yVW5kZWYodk5vZGVUb0Nsb25lLmtleSkgPyB2Tm9kZVRvQ2xvbmUua2V5IDogKHByb3BzID8gcHJvcHMua2V5IDogbnVsbCk7XG4gICAgICAgIHZhciByZWYgPSB2Tm9kZVRvQ2xvbmUucmVmIHx8IChwcm9wcyA/IHByb3BzLnJlZiA6IG51bGwpO1xuICAgICAgICBpZiAoZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgICAgIG5ld1ZOb2RlID0gY3JlYXRlVk5vZGUoZmxhZ3MsIHZOb2RlVG9DbG9uZS50eXBlLCBPYmplY3QuYXNzaWduKHt9LCB2Tm9kZVRvQ2xvbmUucHJvcHMsIHByb3BzKSwgbnVsbCwgZXZlbnRzLCBrZXksIHJlZiwgdHJ1ZSk7XG4gICAgICAgICAgICB2YXIgbmV3UHJvcHMgPSBuZXdWTm9kZS5wcm9wcztcbiAgICAgICAgICAgIGlmIChuZXdQcm9wcykge1xuICAgICAgICAgICAgICAgIHZhciBuZXdDaGlsZHJlbiA9IG5ld1Byb3BzLmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gYWxzbyBjbG9uZSBjb21wb25lbnQgY2hpbGRyZW4gdGhhdCBhcmUgaW4gcHJvcHNcbiAgICAgICAgICAgICAgICAvLyBhcyB0aGUgY2hpbGRyZW4gbWF5IGFsc28gaGF2ZSBiZWVuIGhvaXN0ZWRcbiAgICAgICAgICAgICAgICBpZiAobmV3Q2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQXJyYXkobmV3Q2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpJDEgPSAwOyBpJDEgPCBuZXdDaGlsZHJlbi5sZW5ndGg7IGkkMSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gbmV3Q2hpbGRyZW5baSQxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzSW52YWxpZChjaGlsZCkgJiYgaXNWTm9kZShjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvcHMuY2hpbGRyZW5baSQxXSA9IGNsb25lVk5vZGUoY2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpc1ZOb2RlKG5ld0NoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvcHMuY2hpbGRyZW4gPSBjbG9uZVZOb2RlKG5ld0NoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld1ZOb2RlLmNoaWxkcmVuID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmbGFncyAmIDM5NzAgLyogRWxlbWVudCAqLykge1xuICAgICAgICAgICAgY2hpbGRyZW4gPSAocHJvcHMgJiYgcHJvcHMuY2hpbGRyZW4pIHx8IHZOb2RlVG9DbG9uZS5jaGlsZHJlbjtcbiAgICAgICAgICAgIG5ld1ZOb2RlID0gY3JlYXRlVk5vZGUoZmxhZ3MsIHZOb2RlVG9DbG9uZS50eXBlLCBPYmplY3QuYXNzaWduKHt9LCB2Tm9kZVRvQ2xvbmUucHJvcHMsIHByb3BzKSwgY2hpbGRyZW4sIGV2ZW50cywga2V5LCByZWYsICFjaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZmxhZ3MgJiAxIC8qIFRleHQgKi8pIHtcbiAgICAgICAgICAgIG5ld1ZOb2RlID0gY3JlYXRlVGV4dFZOb2RlKHZOb2RlVG9DbG9uZS5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld1ZOb2RlO1xufVxuZnVuY3Rpb24gY3JlYXRlVm9pZFZOb2RlKCkge1xuICAgIHJldHVybiBjcmVhdGVWTm9kZSg0MDk2IC8qIFZvaWQgKi8pO1xufVxuZnVuY3Rpb24gY3JlYXRlVGV4dFZOb2RlKHRleHQpIHtcbiAgICByZXR1cm4gY3JlYXRlVk5vZGUoMSAvKiBUZXh0ICovLCBudWxsLCBudWxsLCB0ZXh0LCBudWxsLCBudWxsLCBudWxsLCB0cnVlKTtcbn1cbmZ1bmN0aW9uIGlzVk5vZGUobykge1xuICAgIHJldHVybiAhIW8uZmxhZ3M7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdERlZmF1bHRzKHN0cmluZywgb2JqZWN0LCB2YWx1ZSkge1xuICAgIC8qIGVzbGludCBuby1yZXR1cm4tYXNzaWduOiAwICovXG4gICAgc3RyaW5nLnNwbGl0KCcsJykuZm9yRWFjaChmdW5jdGlvbiAoaSkgeyByZXR1cm4gb2JqZWN0W2ldID0gdmFsdWU7IH0pO1xufVxudmFyIHhsaW5rTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc7XG52YXIgeG1sTlMgPSAnaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlJztcbnZhciBzdmdOUyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG52YXIgc3RyaWN0UHJvcHMgPSB7fTtcbnZhciBib29sZWFuUHJvcHMgPSB7fTtcbnZhciBuYW1lc3BhY2VzID0ge307XG52YXIgaXNVbml0bGVzc051bWJlciA9IHt9O1xudmFyIHNraXBQcm9wcyA9IHt9O1xudmFyIGRlaHlwaGVuUHJvcHMgPSB7XG4gICAgaHR0cEVxdWl2OiAnaHR0cC1lcXVpdicsXG4gICAgYWNjZXB0Q2hhcnNldDogJ2FjY2VwdC1jaGFyc2V0J1xufTtcbnZhciBwcm9iYWJseUtlYmFiUHJvcHMgPSAvXihhY2NlbnRIfGFyYWJpY0Z8Y2FwSHxmb250W0ZTVlddfGdseXBoW05PXXxob3JpeltBT118cGFub3NlMXxyZW5kZXJpbmdJfHN0cmlrZXRocm91Z2hbUFRdfHVuZGVybGluZVtQVF18dltBSElNXXx2ZXJ0W0FPXXx4SHxhbGlnbm1lbnRCfGJhc2VsaW5lU3xjbGlwW1BSXXxjb2xvcltJUFJdfGRvbWluYW50QnxlbmFibGVCfGZpbGxbT1JdfGZsb29kW0NPRl18aW1hZ2VSfGxldHRlclN8bGlnaHRpbmdDfG1hcmtlcltFTVNdfHBvaW50ZXJFfHNoYXBlUnxzdG9wW0NPXXxzdHJva2VbRExNT1ddfHRleHRbQURSXXx1bmljb2RlQnx3b3JkU3x3cml0aW5nTSkuKi87XG5mdW5jdGlvbiBrZWJhYml6ZShzdHIsIHNtYWxsTGV0dGVyLCBsYXJnZUxldHRlcikge1xuICAgIHJldHVybiAoc21hbGxMZXR0ZXIgKyBcIi1cIiArIChsYXJnZUxldHRlci50b0xvd2VyQ2FzZSgpKSk7XG59XG52YXIgZGVsZWdhdGVkUHJvcHMgPSB7fTtcbmNvbnN0cnVjdERlZmF1bHRzKCd4bGluazpocmVmLHhsaW5rOmFyY3JvbGUseGxpbms6YWN0dWF0ZSx4bGluazpyb2xlLHhsaW5rOnRpdGxlZix4bGluazp0eXBlJywgbmFtZXNwYWNlcywgeGxpbmtOUyk7XG5jb25zdHJ1Y3REZWZhdWx0cygneG1sOmJhc2UseG1sOmxhbmcseG1sOnNwYWNlJywgbmFtZXNwYWNlcywgeG1sTlMpO1xuY29uc3RydWN0RGVmYXVsdHMoJ3ZvbHVtZSxkZWZhdWx0VmFsdWUsZGVmYXVsdENoZWNrZWQnLCBzdHJpY3RQcm9wcywgdHJ1ZSk7XG5jb25zdHJ1Y3REZWZhdWx0cygnY2hpbGRyZW4sY2hpbGRyZW5UeXBlLHJlZixrZXksc2VsZWN0ZWQsY2hlY2tlZCxtdWx0aXBsZScsIHNraXBQcm9wcywgdHJ1ZSk7XG5jb25zdHJ1Y3REZWZhdWx0cygnb25DbGljayxvbk1vdXNlRG93bixvbk1vdXNlVXAsb25Nb3VzZU1vdmUsb25TdWJtaXQsb25EYmxDbGljayxvbktleURvd24sb25LZXlVcCxvbktleVByZXNzJywgZGVsZWdhdGVkUHJvcHMsIHRydWUpO1xuY29uc3RydWN0RGVmYXVsdHMoJ211dGVkLHNjb3BlZCxsb29wLG9wZW4sY2hlY2tlZCxkZWZhdWx0LGNhcHR1cmUsZGlzYWJsZWQscmVhZE9ubHkscmVxdWlyZWQsYXV0b3BsYXksY29udHJvbHMsc2VhbWxlc3MscmV2ZXJzZWQsYWxsb3dmdWxsc2NyZWVuLG5vdmFsaWRhdGUsaGlkZGVuJywgYm9vbGVhblByb3BzLCB0cnVlKTtcbmNvbnN0cnVjdERlZmF1bHRzKCdhbmltYXRpb25JdGVyYXRpb25Db3VudCxib3JkZXJJbWFnZU91dHNldCxib3JkZXJJbWFnZVNsaWNlLGJvcmRlckltYWdlV2lkdGgsYm94RmxleCxib3hGbGV4R3JvdXAsYm94T3JkaW5hbEdyb3VwLGNvbHVtbkNvdW50LGZsZXgsZmxleEdyb3csZmxleFBvc2l0aXZlLGZsZXhTaHJpbmssZmxleE5lZ2F0aXZlLGZsZXhPcmRlcixncmlkUm93LGdyaWRDb2x1bW4sZm9udFdlaWdodCxsaW5lQ2xhbXAsbGluZUhlaWdodCxvcGFjaXR5LG9yZGVyLG9ycGhhbnMsdGFiU2l6ZSx3aWRvd3MsekluZGV4LHpvb20sZmlsbE9wYWNpdHksZmxvb2RPcGFjaXR5LHN0b3BPcGFjaXR5LHN0cm9rZURhc2hhcnJheSxzdHJva2VEYXNob2Zmc2V0LHN0cm9rZU1pdGVybGltaXQsc3Ryb2tlT3BhY2l0eSxzdHJva2VXaWR0aCwnLCBpc1VuaXRsZXNzTnVtYmVyLCB0cnVlKTtcblxudmFyIExpZmVjeWNsZSA9IGZ1bmN0aW9uIExpZmVjeWNsZSgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgIHRoaXMuZmFzdFVubW91bnQgPSB0cnVlO1xufTtcbkxpZmVjeWNsZS5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lciAoY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcbn07XG5MaWZlY3ljbGUucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbiB0cmlnZ2VyICgpIHtcbiAgICAgICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMkMS5saXN0ZW5lcnNbaV0oKTtcbiAgICB9XG59O1xuXG52YXIgaXNpT1MgPSBpc0Jyb3dzZXIgJiYgISFuYXZpZ2F0b3IucGxhdGZvcm0gJiYgL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnBsYXRmb3JtKTtcbnZhciBkZWxlZ2F0ZWRFdmVudHMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBoYW5kbGVFdmVudChuYW1lLCBsYXN0RXZlbnQsIG5leHRFdmVudCwgZG9tKSB7XG4gICAgdmFyIGRlbGVnYXRlZFJvb3RzID0gZGVsZWdhdGVkRXZlbnRzLmdldChuYW1lKTtcbiAgICBpZiAobmV4dEV2ZW50KSB7XG4gICAgICAgIGlmICghZGVsZWdhdGVkUm9vdHMpIHtcbiAgICAgICAgICAgIGRlbGVnYXRlZFJvb3RzID0geyBpdGVtczogbmV3IE1hcCgpLCBjb3VudDogMCwgZG9jRXZlbnQ6IG51bGwgfTtcbiAgICAgICAgICAgIHZhciBkb2NFdmVudCA9IGF0dGFjaEV2ZW50VG9Eb2N1bWVudChuYW1lLCBkZWxlZ2F0ZWRSb290cyk7XG4gICAgICAgICAgICBkZWxlZ2F0ZWRSb290cy5kb2NFdmVudCA9IGRvY0V2ZW50O1xuICAgICAgICAgICAgZGVsZWdhdGVkRXZlbnRzLnNldChuYW1lLCBkZWxlZ2F0ZWRSb290cyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFsYXN0RXZlbnQpIHtcbiAgICAgICAgICAgIGRlbGVnYXRlZFJvb3RzLmNvdW50Kys7XG4gICAgICAgICAgICBpZiAoaXNpT1MgJiYgbmFtZSA9PT0gJ29uQ2xpY2snKSB7XG4gICAgICAgICAgICAgICAgdHJhcENsaWNrT25Ob25JbnRlcmFjdGl2ZUVsZW1lbnQoZG9tKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkZWxlZ2F0ZWRSb290cy5pdGVtcy5zZXQoZG9tLCBuZXh0RXZlbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChkZWxlZ2F0ZWRSb290cykge1xuICAgICAgICBpZiAoZGVsZWdhdGVkUm9vdHMuaXRlbXMuaGFzKGRvbSkpIHtcbiAgICAgICAgICAgIGRlbGVnYXRlZFJvb3RzLmNvdW50LS07XG4gICAgICAgICAgICBkZWxlZ2F0ZWRSb290cy5pdGVtcy5kZWxldGUoZG9tKTtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZWRSb290cy5jb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobm9ybWFsaXplRXZlbnROYW1lKG5hbWUpLCBkZWxlZ2F0ZWRSb290cy5kb2NFdmVudCk7XG4gICAgICAgICAgICAgICAgZGVsZWdhdGVkRXZlbnRzLmRlbGV0ZShuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoZXZlbnQsIGRvbSwgaXRlbXMsIGNvdW50LCBldmVudERhdGEpIHtcbiAgICB2YXIgZXZlbnRzVG9UcmlnZ2VyID0gaXRlbXMuZ2V0KGRvbSk7XG4gICAgaWYgKGV2ZW50c1RvVHJpZ2dlcikge1xuICAgICAgICBjb3VudC0tO1xuICAgICAgICAvLyBsaW5rRXZlbnQgb2JqZWN0XG4gICAgICAgIGV2ZW50RGF0YS5kb20gPSBkb207XG4gICAgICAgIGlmIChldmVudHNUb1RyaWdnZXIuZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50c1RvVHJpZ2dlci5ldmVudChldmVudHNUb1RyaWdnZXIuZGF0YSwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZlbnRzVG9UcmlnZ2VyKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnREYXRhLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgdmFyIHBhcmVudERvbSA9IGRvbS5wYXJlbnROb2RlO1xuICAgICAgICBpZiAocGFyZW50RG9tIHx8IHBhcmVudERvbSA9PT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChldmVudCwgcGFyZW50RG9tLCBpdGVtcywgY291bnQsIGV2ZW50RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBub3JtYWxpemVFdmVudE5hbWUobmFtZSkge1xuICAgIHJldHVybiBuYW1lLnN1YnN0cigyKS50b0xvd2VyQ2FzZSgpO1xufVxuZnVuY3Rpb24gYXR0YWNoRXZlbnRUb0RvY3VtZW50KG5hbWUsIGRlbGVnYXRlZFJvb3RzKSB7XG4gICAgdmFyIGRvY0V2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBldmVudERhdGEgPSB7XG4gICAgICAgICAgICBzdG9wUHJvcGFnYXRpb246IGZhbHNlLFxuICAgICAgICAgICAgZG9tOiBkb2N1bWVudFxuICAgICAgICB9O1xuICAgICAgICAvLyB3ZSBoYXZlIHRvIGRvIHRoaXMgYXMgc29tZSBicm93c2VycyByZWN5Y2xlIHRoZSBzYW1lIEV2ZW50IGJldHdlZW4gY2FsbHNcbiAgICAgICAgLy8gc28gd2UgbmVlZCB0byBtYWtlIHRoZSBwcm9wZXJ0eSBjb25maWd1cmFibGVcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV2ZW50LCAnY3VycmVudFRhcmdldCcsIHtcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudERhdGEuZG9tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZXZlbnREYXRhLnN0b3BQcm9wYWdhdGlvbiA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBjb3VudCA9IGRlbGVnYXRlZFJvb3RzLmNvdW50O1xuICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGV2ZW50LCBldmVudC50YXJnZXQsIGRlbGVnYXRlZFJvb3RzLml0ZW1zLCBjb3VudCwgZXZlbnREYXRhKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihub3JtYWxpemVFdmVudE5hbWUobmFtZSksIGRvY0V2ZW50KTtcbiAgICByZXR1cm4gZG9jRXZlbnQ7XG59XG5mdW5jdGlvbiBlbXB0eUZuKCkgeyB9XG5mdW5jdGlvbiB0cmFwQ2xpY2tPbk5vbkludGVyYWN0aXZlRWxlbWVudChkb20pIHtcbiAgICAvLyBNb2JpbGUgU2FmYXJpIGRvZXMgbm90IGZpcmUgcHJvcGVybHkgYnViYmxlIGNsaWNrIGV2ZW50cyBvblxuICAgIC8vIG5vbi1pbnRlcmFjdGl2ZSBlbGVtZW50cywgd2hpY2ggbWVhbnMgZGVsZWdhdGVkIGNsaWNrIGxpc3RlbmVycyBkbyBub3RcbiAgICAvLyBmaXJlLiBUaGUgd29ya2Fyb3VuZCBmb3IgdGhpcyBidWcgaW52b2x2ZXMgYXR0YWNoaW5nIGFuIGVtcHR5IGNsaWNrXG4gICAgLy8gbGlzdGVuZXIgb24gdGhlIHRhcmdldCBub2RlLlxuICAgIC8vIGh0dHA6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDEwLzA5L2NsaWNrX2V2ZW50X2RlbC5odG1sXG4gICAgLy8gSnVzdCBzZXQgaXQgdXNpbmcgdGhlIG9uY2xpY2sgcHJvcGVydHkgc28gdGhhdCB3ZSBkb24ndCBoYXZlIHRvIG1hbmFnZSBhbnlcbiAgICAvLyBib29ra2VlcGluZyBmb3IgaXQuIE5vdCBzdXJlIGlmIHdlIG5lZWQgdG8gY2xlYXIgaXQgd2hlbiB0aGUgbGlzdGVuZXIgaXNcbiAgICAvLyByZW1vdmVkLlxuICAgIC8vIFRPRE86IE9ubHkgZG8gdGhpcyBmb3IgdGhlIHJlbGV2YW50IFNhZmFyaXMgbWF5YmU/XG4gICAgZG9tLm9uY2xpY2sgPSBlbXB0eUZuO1xufVxuXG52YXIgY29tcG9uZW50UG9vbHMgPSBuZXcgTWFwKCk7XG52YXIgZWxlbWVudFBvb2xzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gcmVjeWNsZUVsZW1lbnQodk5vZGUsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpIHtcbiAgICB2YXIgdGFnID0gdk5vZGUudHlwZTtcbiAgICB2YXIga2V5ID0gdk5vZGUua2V5O1xuICAgIHZhciBwb29scyA9IGVsZW1lbnRQb29scy5nZXQodGFnKTtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHBvb2xzKSkge1xuICAgICAgICB2YXIgcG9vbCA9IGtleSA9PT0gbnVsbCA/IHBvb2xzLm5vbktleWVkIDogcG9vbHMua2V5ZWQuZ2V0KGtleSk7XG4gICAgICAgIGlmICghaXNVbmRlZmluZWQocG9vbCkpIHtcbiAgICAgICAgICAgIHZhciByZWN5Y2xlZFZOb2RlID0gcG9vbC5wb3AoKTtcbiAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQocmVjeWNsZWRWTm9kZSkpIHtcbiAgICAgICAgICAgICAgICBwYXRjaEVsZW1lbnQocmVjeWNsZWRWTm9kZSwgdk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2Tm9kZS5kb207XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBwb29sRWxlbWVudCh2Tm9kZSkge1xuICAgIHZhciB0YWcgPSB2Tm9kZS50eXBlO1xuICAgIHZhciBrZXkgPSB2Tm9kZS5rZXk7XG4gICAgdmFyIHBvb2xzID0gZWxlbWVudFBvb2xzLmdldCh0YWcpO1xuICAgIGlmIChpc1VuZGVmaW5lZChwb29scykpIHtcbiAgICAgICAgcG9vbHMgPSB7XG4gICAgICAgICAgICBub25LZXllZDogW10sXG4gICAgICAgICAgICBrZXllZDogbmV3IE1hcCgpXG4gICAgICAgIH07XG4gICAgICAgIGVsZW1lbnRQb29scy5zZXQodGFnLCBwb29scyk7XG4gICAgfVxuICAgIGlmIChpc051bGwoa2V5KSkge1xuICAgICAgICBwb29scy5ub25LZXllZC5wdXNoKHZOb2RlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBwb29sID0gcG9vbHMua2V5ZWQuZ2V0KGtleSk7XG4gICAgICAgIGlmIChpc1VuZGVmaW5lZChwb29sKSkge1xuICAgICAgICAgICAgcG9vbCA9IFtdO1xuICAgICAgICAgICAgcG9vbHMua2V5ZWQuc2V0KGtleSwgcG9vbCk7XG4gICAgICAgIH1cbiAgICAgICAgcG9vbC5wdXNoKHZOb2RlKTtcbiAgICB9XG59XG5mdW5jdGlvbiByZWN5Y2xlQ29tcG9uZW50KHZOb2RlLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSB7XG4gICAgdmFyIHR5cGUgPSB2Tm9kZS50eXBlO1xuICAgIHZhciBrZXkgPSB2Tm9kZS5rZXk7XG4gICAgdmFyIHBvb2xzID0gY29tcG9uZW50UG9vbHMuZ2V0KHR5cGUpO1xuICAgIGlmICghaXNVbmRlZmluZWQocG9vbHMpKSB7XG4gICAgICAgIHZhciBwb29sID0ga2V5ID09PSBudWxsID8gcG9vbHMubm9uS2V5ZWQgOiBwb29scy5rZXllZC5nZXQoa2V5KTtcbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChwb29sKSkge1xuICAgICAgICAgICAgdmFyIHJlY3ljbGVkVk5vZGUgPSBwb29sLnBvcCgpO1xuICAgICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChyZWN5Y2xlZFZOb2RlKSkge1xuICAgICAgICAgICAgICAgIHZhciBmbGFncyA9IHZOb2RlLmZsYWdzO1xuICAgICAgICAgICAgICAgIHZhciBmYWlsZWQgPSBwYXRjaENvbXBvbmVudChyZWN5Y2xlZFZOb2RlLCB2Tm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgZmxhZ3MgJiA0IC8qIENvbXBvbmVudENsYXNzICovLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBpZiAoIWZhaWxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdk5vZGUuZG9tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIHBvb2xDb21wb25lbnQodk5vZGUpIHtcbiAgICB2YXIgdHlwZSA9IHZOb2RlLnR5cGU7XG4gICAgdmFyIGtleSA9IHZOb2RlLmtleTtcbiAgICB2YXIgaG9va3MgPSB2Tm9kZS5yZWY7XG4gICAgdmFyIG5vblJlY3ljbGVIb29rcyA9IGhvb2tzICYmIChob29rcy5vbkNvbXBvbmVudFdpbGxNb3VudCB8fFxuICAgICAgICBob29rcy5vbkNvbXBvbmVudFdpbGxVbm1vdW50IHx8XG4gICAgICAgIGhvb2tzLm9uQ29tcG9uZW50RGlkTW91bnQgfHxcbiAgICAgICAgaG9va3Mub25Db21wb25lbnRXaWxsVXBkYXRlIHx8XG4gICAgICAgIGhvb2tzLm9uQ29tcG9uZW50RGlkVXBkYXRlKTtcbiAgICBpZiAobm9uUmVjeWNsZUhvb2tzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHBvb2xzID0gY29tcG9uZW50UG9vbHMuZ2V0KHR5cGUpO1xuICAgIGlmIChpc1VuZGVmaW5lZChwb29scykpIHtcbiAgICAgICAgcG9vbHMgPSB7XG4gICAgICAgICAgICBub25LZXllZDogW10sXG4gICAgICAgICAgICBrZXllZDogbmV3IE1hcCgpXG4gICAgICAgIH07XG4gICAgICAgIGNvbXBvbmVudFBvb2xzLnNldCh0eXBlLCBwb29scyk7XG4gICAgfVxuICAgIGlmIChpc051bGwoa2V5KSkge1xuICAgICAgICBwb29scy5ub25LZXllZC5wdXNoKHZOb2RlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBwb29sID0gcG9vbHMua2V5ZWQuZ2V0KGtleSk7XG4gICAgICAgIGlmIChpc1VuZGVmaW5lZChwb29sKSkge1xuICAgICAgICAgICAgcG9vbCA9IFtdO1xuICAgICAgICAgICAgcG9vbHMua2V5ZWQuc2V0KGtleSwgcG9vbCk7XG4gICAgICAgIH1cbiAgICAgICAgcG9vbC5wdXNoKHZOb2RlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVubW91bnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjYW5SZWN5Y2xlLCBpc1JlY3ljbGluZykge1xuICAgIHZhciBmbGFncyA9IHZOb2RlLmZsYWdzO1xuICAgIGlmIChmbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICB1bm1vdW50Q29tcG9uZW50KHZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY2FuUmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChmbGFncyAmIDM5NzAgLyogRWxlbWVudCAqLykge1xuICAgICAgICB1bm1vdW50RWxlbWVudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNhblJlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxhZ3MgJiAoMSAvKiBUZXh0ICovIHwgNDA5NiAvKiBWb2lkICovKSkge1xuICAgICAgICB1bm1vdW50Vm9pZE9yVGV4dCh2Tm9kZSwgcGFyZW50RG9tKTtcbiAgICB9XG59XG5mdW5jdGlvbiB1bm1vdW50Vm9pZE9yVGV4dCh2Tm9kZSwgcGFyZW50RG9tKSB7XG4gICAgaWYgKHBhcmVudERvbSkge1xuICAgICAgICByZW1vdmVDaGlsZChwYXJlbnREb20sIHZOb2RlLmRvbSk7XG4gICAgfVxufVxudmFyIGFscmVhZHlVbm1vdW50ZWQgPSBuZXcgV2Vha01hcCgpO1xuZnVuY3Rpb24gdW5tb3VudENvbXBvbmVudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNhblJlY3ljbGUsIGlzUmVjeWNsaW5nKSB7XG4gICAgdmFyIGluc3RhbmNlID0gdk5vZGUuY2hpbGRyZW47XG4gICAgdmFyIGZsYWdzID0gdk5vZGUuZmxhZ3M7XG4gICAgdmFyIGlzU3RhdGVmdWxDb21wb25lbnQkJDEgPSBmbGFncyAmIDQ7XG4gICAgdmFyIHJlZiA9IHZOb2RlLnJlZjtcbiAgICB2YXIgZG9tID0gdk5vZGUuZG9tO1xuICAgIGlmIChhbHJlYWR5VW5tb3VudGVkLmhhcyh2Tm9kZSkgJiYgIWlzUmVjeWNsaW5nICYmICFwYXJlbnREb20pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhbHJlYWR5VW5tb3VudGVkLnNldCh2Tm9kZSk7XG4gICAgaWYgKCFpc1JlY3ljbGluZykge1xuICAgICAgICBpZiAoaXNTdGF0ZWZ1bENvbXBvbmVudCQkMSkge1xuICAgICAgICAgICAgaWYgKCFpbnN0YW5jZS5fdW5tb3VudGVkKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuX2lnbm9yZVNldFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmJlZm9yZVVubW91bnQgJiYgb3B0aW9ucy5iZWZvcmVVbm1vdW50KHZOb2RlKTtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5jb21wb25lbnRXaWxsVW5tb3VudCAmJiBpbnN0YW5jZS5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuICAgICAgICAgICAgICAgIGlmIChyZWYgJiYgIWlzUmVjeWNsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZihudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuX3VubW91bnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5maW5kRE9NTm9kZUVuYWJsZWQgJiYgY29tcG9uZW50VG9ET01Ob2RlTWFwLmRlbGV0ZShpbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgdmFyIHN1YkxpZmVjeWNsZSA9IGluc3RhbmNlLl9saWZlY3ljbGU7XG4gICAgICAgICAgICAgICAgaWYgKCFzdWJMaWZlY3ljbGUuZmFzdFVubW91bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5tb3VudChpbnN0YW5jZS5fbGFzdElucHV0LCBudWxsLCBzdWJMaWZlY3ljbGUsIGZhbHNlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKHJlZikpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYocmVmLm9uQ29tcG9uZW50V2lsbFVubW91bnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZi5vbkNvbXBvbmVudFdpbGxVbm1vdW50KGRvbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFsaWZlY3ljbGUuZmFzdFVubW91bnQpIHtcbiAgICAgICAgICAgICAgICB1bm1vdW50KGluc3RhbmNlLCBudWxsLCBsaWZlY3ljbGUsIGZhbHNlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhcmVudERvbSkge1xuICAgICAgICB2YXIgbGFzdElucHV0ID0gaW5zdGFuY2UuX2xhc3RJbnB1dDtcbiAgICAgICAgaWYgKGlzTnVsbE9yVW5kZWYobGFzdElucHV0KSkge1xuICAgICAgICAgICAgbGFzdElucHV0ID0gaW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlQ2hpbGQocGFyZW50RG9tLCBkb20pO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5yZWN5Y2xpbmdFbmFibGVkICYmICFpc1N0YXRlZnVsQ29tcG9uZW50JCQxICYmIChwYXJlbnREb20gfHwgY2FuUmVjeWNsZSkpIHtcbiAgICAgICAgcG9vbENvbXBvbmVudCh2Tm9kZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gdW5tb3VudEVsZW1lbnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjYW5SZWN5Y2xlLCBpc1JlY3ljbGluZykge1xuICAgIHZhciBkb20gPSB2Tm9kZS5kb207XG4gICAgdmFyIHJlZiA9IHZOb2RlLnJlZjtcbiAgICB2YXIgZXZlbnRzID0gdk5vZGUuZXZlbnRzO1xuICAgIGlmIChhbHJlYWR5VW5tb3VudGVkLmhhcyh2Tm9kZSkgJiYgIWlzUmVjeWNsaW5nICYmICFwYXJlbnREb20pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhbHJlYWR5VW5tb3VudGVkLnNldCh2Tm9kZSk7XG4gICAgaWYgKCFsaWZlY3ljbGUuZmFzdFVubW91bnQpIHtcbiAgICAgICAgaWYgKHJlZiAmJiAhaXNSZWN5Y2xpbmcpIHtcbiAgICAgICAgICAgIHVubW91bnRSZWYocmVmKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2hpbGRyZW4gPSB2Tm9kZS5jaGlsZHJlbjtcbiAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgdW5tb3VudENoaWxkcmVuJDEoY2hpbGRyZW4sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghaXNOdWxsKGV2ZW50cykpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBldmVudHMpIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdCBhZGQgYSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBoZXJlLCBpdCBhZmZlY3RzIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICBwYXRjaEV2ZW50KG5hbWUsIGV2ZW50c1tuYW1lXSwgbnVsbCwgZG9tKTtcbiAgICAgICAgICAgIGV2ZW50c1tuYW1lXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhcmVudERvbSkge1xuICAgICAgICByZW1vdmVDaGlsZChwYXJlbnREb20sIGRvbSk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnJlY3ljbGluZ0VuYWJsZWQgJiYgKHBhcmVudERvbSB8fCBjYW5SZWN5Y2xlKSkge1xuICAgICAgICBwb29sRWxlbWVudCh2Tm9kZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gdW5tb3VudENoaWxkcmVuJDEoY2hpbGRyZW4sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpIHtcbiAgICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAoIWlzSW52YWxpZChjaGlsZCkgJiYgaXNPYmplY3QoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgdW5tb3VudChjaGlsZCwgbnVsbCwgbGlmZWN5Y2xlLCBmYWxzZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JqZWN0KGNoaWxkcmVuKSkge1xuICAgICAgICB1bm1vdW50KGNoaWxkcmVuLCBudWxsLCBsaWZlY3ljbGUsIGZhbHNlLCBpc1JlY3ljbGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gdW5tb3VudFJlZihyZWYpIHtcbiAgICBpZiAoaXNGdW5jdGlvbihyZWYpKSB7XG4gICAgICAgIHJlZihudWxsKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChpc0ludmFsaWQocmVmKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKCdzdHJpbmcgXCJyZWZzXCIgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gSW5mZXJubyAxLjAuIFVzZSBjYWxsYmFjayBcInJlZnNcIiBpbnN0ZWFkLicpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzQ29tcG9uZW50SW5zdGFuY2Uodk5vZGUsIENvbXBvbmVudCwgcHJvcHMsIGNvbnRleHQsIGlzU1ZHKSB7XG4gICAgaWYgKGlzVW5kZWZpbmVkKGNvbnRleHQpKSB7XG4gICAgICAgIGNvbnRleHQgPSB7fTtcbiAgICB9XG4gICAgdmFyIGluc3RhbmNlID0gbmV3IENvbXBvbmVudChwcm9wcywgY29udGV4dCk7XG4gICAgaW5zdGFuY2UuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgaWYgKGluc3RhbmNlLnByb3BzID09PSBFTVBUWV9PQkopIHtcbiAgICAgICAgaW5zdGFuY2UucHJvcHMgPSBwcm9wcztcbiAgICB9XG4gICAgaW5zdGFuY2UuX3BhdGNoID0gcGF0Y2g7XG4gICAgaWYgKG9wdGlvbnMuZmluZERPTU5vZGVFbmFibGVkKSB7XG4gICAgICAgIGluc3RhbmNlLl9jb21wb25lbnRUb0RPTU5vZGVNYXAgPSBjb21wb25lbnRUb0RPTU5vZGVNYXA7XG4gICAgfVxuICAgIGluc3RhbmNlLl91bm1vdW50ZWQgPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5fcGVuZGluZ1NldFN0YXRlID0gdHJ1ZTtcbiAgICBpbnN0YW5jZS5faXNTVkcgPSBpc1NWRztcbiAgICBpZiAoaXNGdW5jdGlvbihpbnN0YW5jZS5jb21wb25lbnRXaWxsTW91bnQpKSB7XG4gICAgICAgIGluc3RhbmNlLmNvbXBvbmVudFdpbGxNb3VudCgpO1xuICAgIH1cbiAgICB2YXIgY2hpbGRDb250ZXh0ID0gaW5zdGFuY2UuZ2V0Q2hpbGRDb250ZXh0KCk7XG4gICAgaWYgKCFpc051bGxPclVuZGVmKGNoaWxkQ29udGV4dCkpIHtcbiAgICAgICAgaW5zdGFuY2UuX2NoaWxkQ29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQsIGNoaWxkQ29udGV4dCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpbnN0YW5jZS5fY2hpbGRDb250ZXh0ID0gY29udGV4dDtcbiAgICB9XG4gICAgb3B0aW9ucy5iZWZvcmVSZW5kZXIgJiYgb3B0aW9ucy5iZWZvcmVSZW5kZXIoaW5zdGFuY2UpO1xuICAgIHZhciBpbnB1dCA9IGluc3RhbmNlLnJlbmRlcihwcm9wcywgaW5zdGFuY2Uuc3RhdGUsIGNvbnRleHQpO1xuICAgIG9wdGlvbnMuYWZ0ZXJSZW5kZXIgJiYgb3B0aW9ucy5hZnRlclJlbmRlcihpbnN0YW5jZSk7XG4gICAgaWYgKGlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKCdhIHZhbGlkIEluZmVybm8gVk5vZGUgKG9yIG51bGwpIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBhIGNvbXBvbmVudCByZW5kZXIuIFlvdSBtYXkgaGF2ZSByZXR1cm5lZCBhbiBhcnJheSBvciBhbiBpbnZhbGlkIG9iamVjdC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzSW52YWxpZChpbnB1dCkpIHtcbiAgICAgICAgaW5wdXQgPSBjcmVhdGVWb2lkVk5vZGUoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNTdHJpbmdPck51bWJlcihpbnB1dCkpIHtcbiAgICAgICAgaW5wdXQgPSBjcmVhdGVUZXh0Vk5vZGUoaW5wdXQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGlucHV0LmRvbSkge1xuICAgICAgICAgICAgaW5wdXQgPSBjbG9uZVZOb2RlKGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5wdXQuZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgICAgIC8vIGlmIHdlIGhhdmUgYW4gaW5wdXQgdGhhdCBpcyBhbHNvIGEgY29tcG9uZW50LCB3ZSBydW4gaW50byBhIHRyaWNreSBzaXR1YXRpb25cbiAgICAgICAgICAgIC8vIHdoZXJlIHRoZSByb290IHZOb2RlIG5lZWRzIHRvIGFsd2F5cyBoYXZlIHRoZSBjb3JyZWN0IERPTSBlbnRyeVxuICAgICAgICAgICAgLy8gc28gd2UgYnJlYWsgbW9ub21vcnBoaXNtIG9uIG91ciBpbnB1dCBhbmQgc3VwcGx5IGl0IG91ciB2Tm9kZSBhcyBwYXJlbnRWTm9kZVxuICAgICAgICAgICAgLy8gd2UgY2FuIG9wdGltaXNlIHRoaXMgaW4gdGhlIGZ1dHVyZSwgYnV0IHRoaXMgZ2V0cyB1cyBvdXQgb2YgYSBsb3Qgb2YgaXNzdWVzXG4gICAgICAgICAgICBpbnB1dC5wYXJlbnRWTm9kZSA9IHZOb2RlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGluc3RhbmNlLl9wZW5kaW5nU2V0U3RhdGUgPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5fbGFzdElucHV0ID0gaW5wdXQ7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuZnVuY3Rpb24gcmVwbGFjZUxhc3RDaGlsZEFuZFVubW91bnQobGFzdElucHV0LCBuZXh0SW5wdXQsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpIHtcbiAgICByZXBsYWNlVk5vZGUocGFyZW50RG9tLCBtb3VudChuZXh0SW5wdXQsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpLCBsYXN0SW5wdXQsIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xufVxuZnVuY3Rpb24gcmVwbGFjZVZOb2RlKHBhcmVudERvbSwgZG9tLCB2Tm9kZSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZykge1xuICAgIHZhciBzaGFsbG93VW5tb3VudCA9IGZhbHNlO1xuICAgIC8vIHdlIGNhbm5vdCBjYWNoZSBub2RlVHlwZSBoZXJlIGFzIHZOb2RlIG1pZ2h0IGJlIHJlLWFzc2lnbmVkIGJlbG93XG4gICAgaWYgKHZOb2RlLmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBhY2Nlc3NpbmcgYSBzdGF0ZWZ1bCBvciBzdGF0ZWxlc3MgY29tcG9uZW50LCB3ZSB3YW50IHRvIGFjY2VzcyB0aGVpciBsYXN0IHJlbmRlcmVkIGlucHV0XG4gICAgICAgIC8vIGFjY2Vzc2luZyB0aGVpciBET00gbm9kZSBpcyBub3QgdXNlZnVsIHRvIHVzIGhlcmVcbiAgICAgICAgdW5tb3VudCh2Tm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBmYWxzZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB2Tm9kZSA9IHZOb2RlLmNoaWxkcmVuLl9sYXN0SW5wdXQgfHwgdk5vZGUuY2hpbGRyZW47XG4gICAgICAgIHNoYWxsb3dVbm1vdW50ID0gdHJ1ZTtcbiAgICB9XG4gICAgcmVwbGFjZUNoaWxkKHBhcmVudERvbSwgZG9tLCB2Tm9kZS5kb20pO1xuICAgIHVubW91bnQodk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnRJbnB1dCh2Tm9kZSwgY29tcG9uZW50LCBwcm9wcywgY29udGV4dCkge1xuICAgIHZhciBpbnB1dCA9IGNvbXBvbmVudChwcm9wcywgY29udGV4dCk7XG4gICAgaWYgKGlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKCdhIHZhbGlkIEluZmVybm8gVk5vZGUgKG9yIG51bGwpIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBhIGNvbXBvbmVudCByZW5kZXIuIFlvdSBtYXkgaGF2ZSByZXR1cm5lZCBhbiBhcnJheSBvciBhbiBpbnZhbGlkIG9iamVjdC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzSW52YWxpZChpbnB1dCkpIHtcbiAgICAgICAgaW5wdXQgPSBjcmVhdGVWb2lkVk5vZGUoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNTdHJpbmdPck51bWJlcihpbnB1dCkpIHtcbiAgICAgICAgaW5wdXQgPSBjcmVhdGVUZXh0Vk5vZGUoaW5wdXQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGlucHV0LmRvbSkge1xuICAgICAgICAgICAgaW5wdXQgPSBjbG9uZVZOb2RlKGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5wdXQuZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgICAgIC8vIGlmIHdlIGhhdmUgYW4gaW5wdXQgdGhhdCBpcyBhbHNvIGEgY29tcG9uZW50LCB3ZSBydW4gaW50byBhIHRyaWNreSBzaXR1YXRpb25cbiAgICAgICAgICAgIC8vIHdoZXJlIHRoZSByb290IHZOb2RlIG5lZWRzIHRvIGFsd2F5cyBoYXZlIHRoZSBjb3JyZWN0IERPTSBlbnRyeVxuICAgICAgICAgICAgLy8gc28gd2UgYnJlYWsgbW9ub21vcnBoaXNtIG9uIG91ciBpbnB1dCBhbmQgc3VwcGx5IGl0IG91ciB2Tm9kZSBhcyBwYXJlbnRWTm9kZVxuICAgICAgICAgICAgLy8gd2UgY2FuIG9wdGltaXNlIHRoaXMgaW4gdGhlIGZ1dHVyZSwgYnV0IHRoaXMgZ2V0cyB1cyBvdXQgb2YgYSBsb3Qgb2YgaXNzdWVzXG4gICAgICAgICAgICBpbnB1dC5wYXJlbnRWTm9kZSA9IHZOb2RlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbnB1dDtcbn1cbmZ1bmN0aW9uIHNldFRleHRDb250ZW50KGRvbSwgdGV4dCkge1xuICAgIGlmICh0ZXh0ICE9PSAnJykge1xuICAgICAgICBkb20udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZG9tLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSk7XG4gICAgfVxufVxuZnVuY3Rpb24gdXBkYXRlVGV4dENvbnRlbnQoZG9tLCB0ZXh0KSB7XG4gICAgZG9tLmZpcnN0Q2hpbGQubm9kZVZhbHVlID0gdGV4dDtcbn1cbmZ1bmN0aW9uIGFwcGVuZENoaWxkKHBhcmVudERvbSwgZG9tKSB7XG4gICAgcGFyZW50RG9tLmFwcGVuZENoaWxkKGRvbSk7XG59XG5mdW5jdGlvbiBpbnNlcnRPckFwcGVuZChwYXJlbnREb20sIG5ld05vZGUsIG5leHROb2RlKSB7XG4gICAgaWYgKGlzTnVsbE9yVW5kZWYobmV4dE5vZGUpKSB7XG4gICAgICAgIGFwcGVuZENoaWxkKHBhcmVudERvbSwgbmV3Tm9kZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwYXJlbnREb20uaW5zZXJ0QmVmb3JlKG5ld05vZGUsIG5leHROb2RlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkb2N1bWVudENyZWF0ZUVsZW1lbnQodGFnLCBpc1NWRykge1xuICAgIGlmIChpc1NWRyA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCB0YWcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICB9XG59XG5mdW5jdGlvbiByZXBsYWNlV2l0aE5ld05vZGUobGFzdE5vZGUsIG5leHROb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKSB7XG4gICAgdW5tb3VudChsYXN0Tm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBmYWxzZSwgaXNSZWN5Y2xpbmcpO1xuICAgIHZhciBkb20gPSBtb3VudChuZXh0Tm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgbmV4dE5vZGUuZG9tID0gZG9tO1xuICAgIHJlcGxhY2VDaGlsZChwYXJlbnREb20sIGRvbSwgbGFzdE5vZGUuZG9tKTtcbn1cbmZ1bmN0aW9uIHJlcGxhY2VDaGlsZChwYXJlbnREb20sIG5leHREb20sIGxhc3REb20pIHtcbiAgICBpZiAoIXBhcmVudERvbSkge1xuICAgICAgICBwYXJlbnREb20gPSBsYXN0RG9tLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHBhcmVudERvbS5yZXBsYWNlQ2hpbGQobmV4dERvbSwgbGFzdERvbSk7XG59XG5mdW5jdGlvbiByZW1vdmVDaGlsZChwYXJlbnREb20sIGRvbSkge1xuICAgIHBhcmVudERvbS5yZW1vdmVDaGlsZChkb20pO1xufVxuZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGRyZW4oZG9tLCBjaGlsZHJlbiwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZykge1xuICAgIGRvbS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGlmICghbGlmZWN5Y2xlLmZhc3RVbm1vdW50IHx8IChsaWZlY3ljbGUuZmFzdFVubW91bnQgJiYgb3B0aW9ucy5yZWN5Y2xpbmdFbmFibGVkICYmICFpc1JlY3ljbGluZykpIHtcbiAgICAgICAgcmVtb3ZlQ2hpbGRyZW4obnVsbCwgY2hpbGRyZW4sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHJlbW92ZUNoaWxkcmVuKGRvbSwgY2hpbGRyZW4sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICBpZiAoIWlzSW52YWxpZChjaGlsZCkpIHtcbiAgICAgICAgICAgIHVubW91bnQoY2hpbGQsIGRvbSwgbGlmZWN5Y2xlLCB0cnVlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBpc0tleWVkKGxhc3RDaGlsZHJlbiwgbmV4dENoaWxkcmVuKSB7XG4gICAgcmV0dXJuIG5leHRDaGlsZHJlbi5sZW5ndGggJiYgIWlzTnVsbE9yVW5kZWYobmV4dENoaWxkcmVuWzBdKSAmJiAhaXNOdWxsT3JVbmRlZihuZXh0Q2hpbGRyZW5bMF0ua2V5KVxuICAgICAgICAmJiBsYXN0Q2hpbGRyZW4ubGVuZ3RoICYmICFpc051bGxPclVuZGVmKGxhc3RDaGlsZHJlblswXSkgJiYgIWlzTnVsbE9yVW5kZWYobGFzdENoaWxkcmVuWzBdLmtleSk7XG59XG5cbmZ1bmN0aW9uIGlzQ2hlY2tlZFR5cGUodHlwZSkge1xuICAgIHJldHVybiB0eXBlID09PSAnY2hlY2tib3gnIHx8IHR5cGUgPT09ICdyYWRpbyc7XG59XG5mdW5jdGlvbiBpc0NvbnRyb2xsZWQocHJvcHMpIHtcbiAgICB2YXIgdXNlc0NoZWNrZWQgPSBpc0NoZWNrZWRUeXBlKHByb3BzLnR5cGUpO1xuICAgIHJldHVybiB1c2VzQ2hlY2tlZCA/ICFpc051bGxPclVuZGVmKHByb3BzLmNoZWNrZWQpIDogIWlzTnVsbE9yVW5kZWYocHJvcHMudmFsdWUpO1xufVxuZnVuY3Rpb24gb25UZXh0SW5wdXRDaGFuZ2UoZSkge1xuICAgIHZhciB2Tm9kZSA9IHRoaXMudk5vZGU7XG4gICAgdmFyIGV2ZW50cyA9IHZOb2RlLmV2ZW50cyB8fCBFTVBUWV9PQko7XG4gICAgdmFyIGRvbSA9IHZOb2RlLmRvbTtcbiAgICBpZiAoZXZlbnRzLm9uSW5wdXQpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gZXZlbnRzLm9uSW5wdXQ7XG4gICAgICAgIGlmIChldmVudC5ldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuZXZlbnQoZXZlbnQuZGF0YSwgZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldmVudChlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChldmVudHMub25pbnB1dCkge1xuICAgICAgICBldmVudHMub25pbnB1dChlKTtcbiAgICB9XG4gICAgLy8gdGhlIHVzZXIgbWF5IGhhdmUgdXBkYXRlZCB0aGUgdk5vZGUgZnJvbSB0aGUgYWJvdmUgb25JbnB1dCBldmVudHNcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIGdldCBpdCBmcm9tIHRoZSBjb250ZXh0IG9mIGB0aGlzYCBhZ2FpblxuICAgIGFwcGx5VmFsdWUodGhpcy52Tm9kZSwgZG9tKTtcbn1cbmZ1bmN0aW9uIHdyYXBwZWRPbkNoYW5nZShlKSB7XG4gICAgdmFyIHZOb2RlID0gdGhpcy52Tm9kZTtcbiAgICB2YXIgZXZlbnRzID0gdk5vZGUuZXZlbnRzIHx8IEVNUFRZX09CSjtcbiAgICB2YXIgZXZlbnQgPSBldmVudHMub25DaGFuZ2U7XG4gICAgaWYgKGV2ZW50LmV2ZW50KSB7XG4gICAgICAgIGV2ZW50LmV2ZW50KGV2ZW50LmRhdGEsIGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZXZlbnQoZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gb25DaGVja2JveENoYW5nZShlKSB7XG4gICAgdmFyIHZOb2RlID0gdGhpcy52Tm9kZTtcbiAgICB2YXIgZXZlbnRzID0gdk5vZGUuZXZlbnRzIHx8IEVNUFRZX09CSjtcbiAgICB2YXIgZG9tID0gdk5vZGUuZG9tO1xuICAgIGlmIChldmVudHMub25DbGljaykge1xuICAgICAgICB2YXIgZXZlbnQgPSBldmVudHMub25DbGljaztcbiAgICAgICAgaWYgKGV2ZW50LmV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5ldmVudChldmVudC5kYXRhLCBlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50KGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50cy5vbmNsaWNrKSB7XG4gICAgICAgIGV2ZW50cy5vbmNsaWNrKGUpO1xuICAgIH1cbiAgICAvLyB0aGUgdXNlciBtYXkgaGF2ZSB1cGRhdGVkIHRoZSB2Tm9kZSBmcm9tIHRoZSBhYm92ZSBvbkNsaWNrIGV2ZW50c1xuICAgIC8vIHNvIHdlIG5lZWQgdG8gZ2V0IGl0IGZyb20gdGhlIGNvbnRleHQgb2YgYHRoaXNgIGFnYWluXG4gICAgYXBwbHlWYWx1ZSh0aGlzLnZOb2RlLCBkb20pO1xufVxuZnVuY3Rpb24gaGFuZGxlQXNzb2NpYXRlZFJhZGlvSW5wdXRzKG5hbWUpIHtcbiAgICB2YXIgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgoXCJpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdW25hbWU9XFxcIlwiICsgbmFtZSArIFwiXFxcIl1cIikpO1xuICAgIFtdLmZvckVhY2guY2FsbChpbnB1dHMsIGZ1bmN0aW9uIChkb20pIHtcbiAgICAgICAgdmFyIGlucHV0V3JhcHBlciA9IHdyYXBwZXJzLmdldChkb20pO1xuICAgICAgICBpZiAoaW5wdXRXcmFwcGVyKSB7XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSBpbnB1dFdyYXBwZXIudk5vZGUucHJvcHM7XG4gICAgICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgICAgICBkb20uY2hlY2tlZCA9IGlucHV0V3JhcHBlci52Tm9kZS5wcm9wcy5jaGVja2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBwcm9jZXNzSW5wdXQodk5vZGUsIGRvbSkge1xuICAgIHZhciBwcm9wcyA9IHZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcbiAgICBhcHBseVZhbHVlKHZOb2RlLCBkb20pO1xuICAgIGlmIChpc0NvbnRyb2xsZWQocHJvcHMpKSB7XG4gICAgICAgIHZhciBpbnB1dFdyYXBwZXIgPSB3cmFwcGVycy5nZXQoZG9tKTtcbiAgICAgICAgaWYgKCFpbnB1dFdyYXBwZXIpIHtcbiAgICAgICAgICAgIGlucHV0V3JhcHBlciA9IHtcbiAgICAgICAgICAgICAgICB2Tm9kZTogdk5vZGVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoaXNDaGVja2VkVHlwZShwcm9wcy50eXBlKSkge1xuICAgICAgICAgICAgICAgIGRvbS5vbmNsaWNrID0gb25DaGVja2JveENoYW5nZS5iaW5kKGlucHV0V3JhcHBlcik7XG4gICAgICAgICAgICAgICAgZG9tLm9uY2xpY2sud3JhcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb20ub25pbnB1dCA9IG9uVGV4dElucHV0Q2hhbmdlLmJpbmQoaW5wdXRXcmFwcGVyKTtcbiAgICAgICAgICAgICAgICBkb20ub25pbnB1dC53cmFwcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIGRvbS5vbmNoYW5nZSA9IHdyYXBwZWRPbkNoYW5nZS5iaW5kKGlucHV0V3JhcHBlcik7XG4gICAgICAgICAgICAgICAgZG9tLm9uY2hhbmdlLndyYXBwZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd3JhcHBlcnMuc2V0KGRvbSwgaW5wdXRXcmFwcGVyKTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dFdyYXBwZXIudk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGFwcGx5VmFsdWUodk5vZGUsIGRvbSkge1xuICAgIHZhciBwcm9wcyA9IHZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcbiAgICB2YXIgdHlwZSA9IHByb3BzLnR5cGU7XG4gICAgdmFyIHZhbHVlID0gcHJvcHMudmFsdWU7XG4gICAgdmFyIGNoZWNrZWQgPSBwcm9wcy5jaGVja2VkO1xuICAgIHZhciBtdWx0aXBsZSA9IHByb3BzLm11bHRpcGxlO1xuICAgIGlmICh0eXBlICYmIHR5cGUgIT09IGRvbS50eXBlKSB7XG4gICAgICAgIGRvbS50eXBlID0gdHlwZTtcbiAgICB9XG4gICAgaWYgKG11bHRpcGxlICYmIG11bHRpcGxlICE9PSBkb20ubXVsdGlwbGUpIHtcbiAgICAgICAgZG9tLm11bHRpcGxlID0gbXVsdGlwbGU7XG4gICAgfVxuICAgIGlmIChpc0NoZWNrZWRUeXBlKHR5cGUpKSB7XG4gICAgICAgIGlmICghaXNOdWxsT3JVbmRlZih2YWx1ZSkpIHtcbiAgICAgICAgICAgIGRvbS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGRvbS5jaGVja2VkID0gY2hlY2tlZDtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdyYWRpbycgJiYgcHJvcHMubmFtZSkge1xuICAgICAgICAgICAgaGFuZGxlQXNzb2NpYXRlZFJhZGlvSW5wdXRzKHByb3BzLm5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYodmFsdWUpICYmIGRvbS52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGRvbS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFpc051bGxPclVuZGVmKGNoZWNrZWQpKSB7XG4gICAgICAgICAgICBkb20uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzQ29udHJvbGxlZCQxKHByb3BzKSB7XG4gICAgcmV0dXJuICFpc051bGxPclVuZGVmKHByb3BzLnZhbHVlKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZUNoaWxkT3B0aW9uR3JvdXAodk5vZGUsIHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSB2Tm9kZS50eXBlO1xuICAgIGlmICh0eXBlID09PSAnb3B0Z3JvdXAnKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHZOb2RlLmNoaWxkcmVuO1xuICAgICAgICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVDaGlsZE9wdGlvbihjaGlsZHJlbltpXSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzVk5vZGUoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICB1cGRhdGVDaGlsZE9wdGlvbihjaGlsZHJlbiwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB1cGRhdGVDaGlsZE9wdGlvbih2Tm9kZSwgdmFsdWUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZUNoaWxkT3B0aW9uKHZOb2RlLCB2YWx1ZSkge1xuICAgIHZhciBwcm9wcyA9IHZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcbiAgICB2YXIgZG9tID0gdk5vZGUuZG9tO1xuICAgIC8vIHdlIGRvIHRoaXMgYXMgbXVsdGlwbGUgbWF5IGhhdmUgY2hhbmdlZFxuICAgIGRvbS52YWx1ZSA9IHByb3BzLnZhbHVlO1xuICAgIGlmICgoaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUuaW5kZXhPZihwcm9wcy52YWx1ZSkgIT09IC0xKSB8fCBwcm9wcy52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgZG9tLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRvbS5zZWxlY3RlZCA9IHByb3BzLnNlbGVjdGVkIHx8IGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG9uU2VsZWN0Q2hhbmdlKGUpIHtcbiAgICB2YXIgdk5vZGUgPSB0aGlzLnZOb2RlO1xuICAgIHZhciBldmVudHMgPSB2Tm9kZS5ldmVudHMgfHwgRU1QVFlfT0JKO1xuICAgIHZhciBkb20gPSB2Tm9kZS5kb207XG4gICAgaWYgKGV2ZW50cy5vbkNoYW5nZSkge1xuICAgICAgICB2YXIgZXZlbnQgPSBldmVudHMub25DaGFuZ2U7XG4gICAgICAgIGlmIChldmVudC5ldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuZXZlbnQoZXZlbnQuZGF0YSwgZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldmVudChlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChldmVudHMub25jaGFuZ2UpIHtcbiAgICAgICAgZXZlbnRzLm9uY2hhbmdlKGUpO1xuICAgIH1cbiAgICAvLyB0aGUgdXNlciBtYXkgaGF2ZSB1cGRhdGVkIHRoZSB2Tm9kZSBmcm9tIHRoZSBhYm92ZSBvbkNoYW5nZSBldmVudHNcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIGdldCBpdCBmcm9tIHRoZSBjb250ZXh0IG9mIGB0aGlzYCBhZ2FpblxuICAgIGFwcGx5VmFsdWUkMSh0aGlzLnZOb2RlLCBkb20pO1xufVxuZnVuY3Rpb24gcHJvY2Vzc1NlbGVjdCh2Tm9kZSwgZG9tKSB7XG4gICAgdmFyIHByb3BzID0gdk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIGFwcGx5VmFsdWUkMSh2Tm9kZSwgZG9tKTtcbiAgICBpZiAoaXNDb250cm9sbGVkJDEocHJvcHMpKSB7XG4gICAgICAgIHZhciBzZWxlY3RXcmFwcGVyID0gd3JhcHBlcnMuZ2V0KGRvbSk7XG4gICAgICAgIGlmICghc2VsZWN0V3JhcHBlcikge1xuICAgICAgICAgICAgc2VsZWN0V3JhcHBlciA9IHtcbiAgICAgICAgICAgICAgICB2Tm9kZTogdk5vZGVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkb20ub25jaGFuZ2UgPSBvblNlbGVjdENoYW5nZS5iaW5kKHNlbGVjdFdyYXBwZXIpO1xuICAgICAgICAgICAgZG9tLm9uY2hhbmdlLndyYXBwZWQgPSB0cnVlO1xuICAgICAgICAgICAgd3JhcHBlcnMuc2V0KGRvbSwgc2VsZWN0V3JhcHBlcik7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0V3JhcHBlci52Tm9kZSA9IHZOb2RlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gYXBwbHlWYWx1ZSQxKHZOb2RlLCBkb20pIHtcbiAgICB2YXIgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgaWYgKHByb3BzLm11bHRpcGxlICE9PSBkb20ubXVsdGlwbGUpIHtcbiAgICAgICAgZG9tLm11bHRpcGxlID0gcHJvcHMubXVsdGlwbGU7XG4gICAgfVxuICAgIHZhciBjaGlsZHJlbiA9IHZOb2RlLmNoaWxkcmVuO1xuICAgIGlmICghaXNJbnZhbGlkKGNoaWxkcmVuKSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBwcm9wcy52YWx1ZTtcbiAgICAgICAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlQ2hpbGRPcHRpb25Hcm91cChjaGlsZHJlbltpXSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzVk5vZGUoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICB1cGRhdGVDaGlsZE9wdGlvbkdyb3VwKGNoaWxkcmVuLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzQ29udHJvbGxlZCQyKHByb3BzKSB7XG4gICAgcmV0dXJuICFpc051bGxPclVuZGVmKHByb3BzLnZhbHVlKTtcbn1cbmZ1bmN0aW9uIHdyYXBwZWRPbkNoYW5nZSQxKGUpIHtcbiAgICB2YXIgdk5vZGUgPSB0aGlzLnZOb2RlO1xuICAgIHZhciBldmVudHMgPSB2Tm9kZS5ldmVudHMgfHwgRU1QVFlfT0JKO1xuICAgIHZhciBldmVudCA9IGV2ZW50cy5vbkNoYW5nZTtcbiAgICBpZiAoZXZlbnQuZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuZXZlbnQoZXZlbnQuZGF0YSwgZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBldmVudChlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBvblRleHRhcmVhSW5wdXRDaGFuZ2UoZSkge1xuICAgIHZhciB2Tm9kZSA9IHRoaXMudk5vZGU7XG4gICAgdmFyIGV2ZW50cyA9IHZOb2RlLmV2ZW50cyB8fCBFTVBUWV9PQko7XG4gICAgdmFyIGRvbSA9IHZOb2RlLmRvbTtcbiAgICBpZiAoZXZlbnRzLm9uSW5wdXQpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gZXZlbnRzLm9uSW5wdXQ7XG4gICAgICAgIGlmIChldmVudC5ldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuZXZlbnQoZXZlbnQuZGF0YSwgZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldmVudChlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChldmVudHMub25pbnB1dCkge1xuICAgICAgICBldmVudHMub25pbnB1dChlKTtcbiAgICB9XG4gICAgLy8gdGhlIHVzZXIgbWF5IGhhdmUgdXBkYXRlZCB0aGUgdk5vZGUgZnJvbSB0aGUgYWJvdmUgb25JbnB1dCBldmVudHNcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIGdldCBpdCBmcm9tIHRoZSBjb250ZXh0IG9mIGB0aGlzYCBhZ2FpblxuICAgIGFwcGx5VmFsdWUkMih0aGlzLnZOb2RlLCBkb20pO1xufVxuZnVuY3Rpb24gcHJvY2Vzc1RleHRhcmVhKHZOb2RlLCBkb20pIHtcbiAgICB2YXIgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgYXBwbHlWYWx1ZSQyKHZOb2RlLCBkb20pO1xuICAgIHZhciB0ZXh0YXJlYVdyYXBwZXIgPSB3cmFwcGVycy5nZXQoZG9tKTtcbiAgICBpZiAoaXNDb250cm9sbGVkJDIocHJvcHMpKSB7XG4gICAgICAgIGlmICghdGV4dGFyZWFXcmFwcGVyKSB7XG4gICAgICAgICAgICB0ZXh0YXJlYVdyYXBwZXIgPSB7XG4gICAgICAgICAgICAgICAgdk5vZGU6IHZOb2RlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZG9tLm9uaW5wdXQgPSBvblRleHRhcmVhSW5wdXRDaGFuZ2UuYmluZCh0ZXh0YXJlYVdyYXBwZXIpO1xuICAgICAgICAgICAgZG9tLm9uaW5wdXQud3JhcHBlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAocHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBkb20ub25jaGFuZ2UgPSB3cmFwcGVkT25DaGFuZ2UkMS5iaW5kKHRleHRhcmVhV3JhcHBlcik7XG4gICAgICAgICAgICAgICAgZG9tLm9uY2hhbmdlLndyYXBwZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd3JhcHBlcnMuc2V0KGRvbSwgdGV4dGFyZWFXcmFwcGVyKTtcbiAgICAgICAgfVxuICAgICAgICB0ZXh0YXJlYVdyYXBwZXIudk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGFwcGx5VmFsdWUkMih2Tm9kZSwgZG9tKSB7XG4gICAgdmFyIHByb3BzID0gdk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIHZhciB2YWx1ZSA9IHByb3BzLnZhbHVlO1xuICAgIHZhciBkb21WYWx1ZSA9IGRvbS52YWx1ZTtcbiAgICBpZiAoZG9tVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgIGlmICghaXNOdWxsT3JVbmRlZih2YWx1ZSkpIHtcbiAgICAgICAgICAgIGRvbS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRvbVZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgZG9tLnZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnZhciB3cmFwcGVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIHByb2Nlc3NFbGVtZW50KGZsYWdzLCB2Tm9kZSwgZG9tKSB7XG4gICAgaWYgKGZsYWdzICYgNTEyIC8qIElucHV0RWxlbWVudCAqLykge1xuICAgICAgICByZXR1cm4gcHJvY2Vzc0lucHV0KHZOb2RlLCBkb20pO1xuICAgIH1cbiAgICBpZiAoZmxhZ3MgJiAyMDQ4IC8qIFNlbGVjdEVsZW1lbnQgKi8pIHtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NTZWxlY3Qodk5vZGUsIGRvbSk7XG4gICAgfVxuICAgIGlmIChmbGFncyAmIDEwMjQgLyogVGV4dGFyZWFFbGVtZW50ICovKSB7XG4gICAgICAgIHJldHVybiBwcm9jZXNzVGV4dGFyZWEodk5vZGUsIGRvbSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcGF0Y2gobGFzdFZOb2RlLCBuZXh0Vk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpIHtcbiAgICBpZiAobGFzdFZOb2RlICE9PSBuZXh0Vk5vZGUpIHtcbiAgICAgICAgdmFyIGxhc3RGbGFncyA9IGxhc3RWTm9kZS5mbGFncztcbiAgICAgICAgdmFyIG5leHRGbGFncyA9IG5leHRWTm9kZS5mbGFncztcbiAgICAgICAgaWYgKG5leHRGbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICAgICAgaWYgKGxhc3RGbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICAgICAgICAgIHBhdGNoQ29tcG9uZW50KGxhc3RWTm9kZSwgbmV4dFZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIG5leHRGbGFncyAmIDQgLyogQ29tcG9uZW50Q2xhc3MgKi8sIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlcGxhY2VWTm9kZShwYXJlbnREb20sIG1vdW50Q29tcG9uZW50KG5leHRWTm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgbmV4dEZsYWdzICYgNCAvKiBDb21wb25lbnRDbGFzcyAqLyksIGxhc3RWTm9kZSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV4dEZsYWdzICYgMzk3MCAvKiBFbGVtZW50ICovKSB7XG4gICAgICAgICAgICBpZiAobGFzdEZsYWdzICYgMzk3MCAvKiBFbGVtZW50ICovKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hFbGVtZW50KGxhc3RWTm9kZSwgbmV4dFZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlcGxhY2VWTm9kZShwYXJlbnREb20sIG1vdW50RWxlbWVudChuZXh0Vk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpLCBsYXN0Vk5vZGUsIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5leHRGbGFncyAmIDEgLyogVGV4dCAqLykge1xuICAgICAgICAgICAgaWYgKGxhc3RGbGFncyAmIDEgLyogVGV4dCAqLykge1xuICAgICAgICAgICAgICAgIHBhdGNoVGV4dChsYXN0Vk5vZGUsIG5leHRWTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXBsYWNlVk5vZGUocGFyZW50RG9tLCBtb3VudFRleHQobmV4dFZOb2RlLCBudWxsKSwgbGFzdFZOb2RlLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXh0RmxhZ3MgJiA0MDk2IC8qIFZvaWQgKi8pIHtcbiAgICAgICAgICAgIGlmIChsYXN0RmxhZ3MgJiA0MDk2IC8qIFZvaWQgKi8pIHtcbiAgICAgICAgICAgICAgICBwYXRjaFZvaWQobGFzdFZOb2RlLCBuZXh0Vk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVwbGFjZVZOb2RlKHBhcmVudERvbSwgbW91bnRWb2lkKG5leHRWTm9kZSwgbnVsbCksIGxhc3RWTm9kZSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBFcnJvciBjYXNlOiBtb3VudCBuZXcgb25lIHJlcGxhY2luZyBvbGQgb25lXG4gICAgICAgICAgICByZXBsYWNlTGFzdENoaWxkQW5kVW5tb3VudChsYXN0Vk5vZGUsIG5leHRWTm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiB1bm1vdW50Q2hpbGRyZW4oY2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZykge1xuICAgIGlmIChpc1ZOb2RlKGNoaWxkcmVuKSkge1xuICAgICAgICB1bm1vdW50KGNoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgdHJ1ZSwgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICByZW1vdmVBbGxDaGlsZHJlbihkb20sIGNoaWxkcmVuLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRvbS50ZXh0Q29udGVudCA9ICcnO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHBhdGNoRWxlbWVudChsYXN0Vk5vZGUsIG5leHRWTm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZykge1xuICAgIHZhciBuZXh0VGFnID0gbmV4dFZOb2RlLnR5cGU7XG4gICAgdmFyIGxhc3RUYWcgPSBsYXN0Vk5vZGUudHlwZTtcbiAgICBpZiAobGFzdFRhZyAhPT0gbmV4dFRhZykge1xuICAgICAgICByZXBsYWNlV2l0aE5ld05vZGUobGFzdFZOb2RlLCBuZXh0Vk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGRvbSA9IGxhc3RWTm9kZS5kb207XG4gICAgICAgIHZhciBsYXN0UHJvcHMgPSBsYXN0Vk5vZGUucHJvcHM7XG4gICAgICAgIHZhciBuZXh0UHJvcHMgPSBuZXh0Vk5vZGUucHJvcHM7XG4gICAgICAgIHZhciBsYXN0Q2hpbGRyZW4gPSBsYXN0Vk5vZGUuY2hpbGRyZW47XG4gICAgICAgIHZhciBuZXh0Q2hpbGRyZW4gPSBuZXh0Vk5vZGUuY2hpbGRyZW47XG4gICAgICAgIHZhciBsYXN0RmxhZ3MgPSBsYXN0Vk5vZGUuZmxhZ3M7XG4gICAgICAgIHZhciBuZXh0RmxhZ3MgPSBuZXh0Vk5vZGUuZmxhZ3M7XG4gICAgICAgIHZhciBsYXN0UmVmID0gbGFzdFZOb2RlLnJlZjtcbiAgICAgICAgdmFyIG5leHRSZWYgPSBuZXh0Vk5vZGUucmVmO1xuICAgICAgICB2YXIgbGFzdEV2ZW50cyA9IGxhc3RWTm9kZS5ldmVudHM7XG4gICAgICAgIHZhciBuZXh0RXZlbnRzID0gbmV4dFZOb2RlLmV2ZW50cztcbiAgICAgICAgbmV4dFZOb2RlLmRvbSA9IGRvbTtcbiAgICAgICAgaWYgKGlzU1ZHIHx8IChuZXh0RmxhZ3MgJiAxMjggLyogU3ZnRWxlbWVudCAqLykpIHtcbiAgICAgICAgICAgIGlzU1ZHID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGFzdENoaWxkcmVuICE9PSBuZXh0Q2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHBhdGNoQ2hpbGRyZW4obGFzdEZsYWdzLCBuZXh0RmxhZ3MsIGxhc3RDaGlsZHJlbiwgbmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGFzQ29udHJvbGxlZFZhbHVlID0gZmFsc2U7XG4gICAgICAgIGlmICghKG5leHRGbGFncyAmIDIgLyogSHRtbEVsZW1lbnQgKi8pKSB7XG4gICAgICAgICAgICBoYXNDb250cm9sbGVkVmFsdWUgPSBwcm9jZXNzRWxlbWVudChuZXh0RmxhZ3MsIG5leHRWTm9kZSwgZG9tKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpbmxpbmVkIHBhdGNoUHJvcHMgIC0tIHN0YXJ0cyAtLVxuICAgICAgICBpZiAobGFzdFByb3BzICE9PSBuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIHZhciBsYXN0UHJvcHNPckVtcHR5ID0gbGFzdFByb3BzIHx8IEVNUFRZX09CSjtcbiAgICAgICAgICAgIHZhciBuZXh0UHJvcHNPckVtcHR5ID0gbmV4dFByb3BzIHx8IEVNUFRZX09CSjtcbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHNPckVtcHR5ICE9PSBFTVBUWV9PQkopIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIG5leHRQcm9wc09yRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZG8gbm90IGFkZCBhIGhhc093blByb3BlcnR5IGNoZWNrIGhlcmUsIGl0IGFmZmVjdHMgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5leHRWYWx1ZSA9IG5leHRQcm9wc09yRW1wdHlbcHJvcF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBsYXN0VmFsdWUgPSBsYXN0UHJvcHNPckVtcHR5W3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOdWxsT3JVbmRlZihuZXh0VmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVQcm9wKHByb3AsIG5leHRWYWx1ZSwgZG9tKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGNoUHJvcChwcm9wLCBsYXN0VmFsdWUsIG5leHRWYWx1ZSwgZG9tLCBpc1NWRywgaGFzQ29udHJvbGxlZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsYXN0UHJvcHNPckVtcHR5ICE9PSBFTVBUWV9PQkopIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wJDEgaW4gbGFzdFByb3BzT3JFbXB0eSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBkbyBub3QgYWRkIGEgaGFzT3duUHJvcGVydHkgY2hlY2sgaGVyZSwgaXQgYWZmZWN0cyBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOdWxsT3JVbmRlZihuZXh0UHJvcHNPckVtcHR5W3Byb3AkMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVQcm9wKHByb3AkMSwgbGFzdFByb3BzT3JFbXB0eVtwcm9wJDFdLCBkb20pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlubGluZWQgcGF0Y2hQcm9wcyAgLS0gZW5kcyAtLVxuICAgICAgICBpZiAobGFzdEV2ZW50cyAhPT0gbmV4dEV2ZW50cykge1xuICAgICAgICAgICAgcGF0Y2hFdmVudHMobGFzdEV2ZW50cywgbmV4dEV2ZW50cywgZG9tKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV4dFJlZikge1xuICAgICAgICAgICAgaWYgKGxhc3RSZWYgIT09IG5leHRSZWYgfHwgaXNSZWN5Y2xpbmcpIHtcbiAgICAgICAgICAgICAgICBtb3VudFJlZihkb20sIG5leHRSZWYsIGxpZmVjeWNsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBwYXRjaENoaWxkcmVuKGxhc3RGbGFncywgbmV4dEZsYWdzLCBsYXN0Q2hpbGRyZW4sIG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZykge1xuICAgIHZhciBwYXRjaEFycmF5ID0gZmFsc2U7XG4gICAgdmFyIHBhdGNoS2V5ZWQgPSBmYWxzZTtcbiAgICBpZiAobmV4dEZsYWdzICYgNjQgLyogSGFzTm9uS2V5ZWRDaGlsZHJlbiAqLykge1xuICAgICAgICBwYXRjaEFycmF5ID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoKGxhc3RGbGFncyAmIDMyIC8qIEhhc0tleWVkQ2hpbGRyZW4gKi8pICYmIChuZXh0RmxhZ3MgJiAzMiAvKiBIYXNLZXllZENoaWxkcmVuICovKSkge1xuICAgICAgICBwYXRjaEtleWVkID0gdHJ1ZTtcbiAgICAgICAgcGF0Y2hBcnJheSA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzSW52YWxpZChuZXh0Q2hpbGRyZW4pKSB7XG4gICAgICAgIHVubW91bnRDaGlsZHJlbihsYXN0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzSW52YWxpZChsYXN0Q2hpbGRyZW4pKSB7XG4gICAgICAgIGlmIChpc1N0cmluZ09yTnVtYmVyKG5leHRDaGlsZHJlbikpIHtcbiAgICAgICAgICAgIHNldFRleHRDb250ZW50KGRvbSwgbmV4dENoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpc0FycmF5KG5leHRDaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBtb3VudEFycmF5Q2hpbGRyZW4obmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbW91bnQobmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXIobmV4dENoaWxkcmVuKSkge1xuICAgICAgICBpZiAoaXNTdHJpbmdPck51bWJlcihsYXN0Q2hpbGRyZW4pKSB7XG4gICAgICAgICAgICB1cGRhdGVUZXh0Q29udGVudChkb20sIG5leHRDaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB1bm1vdW50Q2hpbGRyZW4obGFzdENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgc2V0VGV4dENvbnRlbnQoZG9tLCBuZXh0Q2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzQXJyYXkobmV4dENoaWxkcmVuKSkge1xuICAgICAgICBpZiAoaXNBcnJheShsYXN0Q2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBwYXRjaEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChpc0tleWVkKGxhc3RDaGlsZHJlbiwgbmV4dENoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIHBhdGNoS2V5ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdW5tb3VudENoaWxkcmVuKGxhc3RDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIG1vdW50QXJyYXlDaGlsZHJlbihuZXh0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNBcnJheShsYXN0Q2hpbGRyZW4pKSB7XG4gICAgICAgIHJlbW92ZUFsbENoaWxkcmVuKGRvbSwgbGFzdENoaWxkcmVuLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgbW91bnQobmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc1ZOb2RlKG5leHRDaGlsZHJlbikpIHtcbiAgICAgICAgaWYgKGlzVk5vZGUobGFzdENoaWxkcmVuKSkge1xuICAgICAgICAgICAgcGF0Y2gobGFzdENoaWxkcmVuLCBuZXh0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdW5tb3VudENoaWxkcmVuKGxhc3RDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIG1vdW50KG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocGF0Y2hBcnJheSkge1xuICAgICAgICBpZiAocGF0Y2hLZXllZCkge1xuICAgICAgICAgICAgcGF0Y2hLZXllZENoaWxkcmVuKGxhc3RDaGlsZHJlbiwgbmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhdGNoTm9uS2V5ZWRDaGlsZHJlbihsYXN0Q2hpbGRyZW4sIG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBwYXRjaENvbXBvbmVudChsYXN0Vk5vZGUsIG5leHRWTm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc0NsYXNzLCBpc1JlY3ljbGluZykge1xuICAgIHZhciBsYXN0VHlwZSA9IGxhc3RWTm9kZS50eXBlO1xuICAgIHZhciBuZXh0VHlwZSA9IG5leHRWTm9kZS50eXBlO1xuICAgIHZhciBuZXh0UHJvcHMgPSBuZXh0Vk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIHZhciBsYXN0S2V5ID0gbGFzdFZOb2RlLmtleTtcbiAgICB2YXIgbmV4dEtleSA9IG5leHRWTm9kZS5rZXk7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IG5leHRUeXBlLmRlZmF1bHRQcm9wcztcbiAgICBpZiAoIWlzVW5kZWZpbmVkKGRlZmF1bHRQcm9wcykpIHtcbiAgICAgICAgY29weVByb3BzVG8oZGVmYXVsdFByb3BzLCBuZXh0UHJvcHMpO1xuICAgICAgICBuZXh0Vk5vZGUucHJvcHMgPSBuZXh0UHJvcHM7XG4gICAgfVxuICAgIGlmIChsYXN0VHlwZSAhPT0gbmV4dFR5cGUpIHtcbiAgICAgICAgaWYgKGlzQ2xhc3MpIHtcbiAgICAgICAgICAgIHJlcGxhY2VXaXRoTmV3Tm9kZShsYXN0Vk5vZGUsIG5leHRWTm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgbGFzdElucHV0ID0gbGFzdFZOb2RlLmNoaWxkcmVuLl9sYXN0SW5wdXQgfHwgbGFzdFZOb2RlLmNoaWxkcmVuO1xuICAgICAgICAgICAgdmFyIG5leHRJbnB1dCA9IGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnRJbnB1dChuZXh0Vk5vZGUsIG5leHRUeXBlLCBuZXh0UHJvcHMsIGNvbnRleHQpO1xuICAgICAgICAgICAgdW5tb3VudChsYXN0Vk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIHBhdGNoKGxhc3RJbnB1dCwgbmV4dElucHV0LCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIHZhciBkb20gPSBuZXh0Vk5vZGUuZG9tID0gbmV4dElucHV0LmRvbTtcbiAgICAgICAgICAgIG5leHRWTm9kZS5jaGlsZHJlbiA9IG5leHRJbnB1dDtcbiAgICAgICAgICAgIG1vdW50RnVuY3Rpb25hbENvbXBvbmVudENhbGxiYWNrcyhuZXh0Vk5vZGUucmVmLCBkb20sIGxpZmVjeWNsZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChpc0NsYXNzKSB7XG4gICAgICAgICAgICBpZiAobGFzdEtleSAhPT0gbmV4dEtleSkge1xuICAgICAgICAgICAgICAgIHJlcGxhY2VXaXRoTmV3Tm9kZShsYXN0Vk5vZGUsIG5leHRWTm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gbGFzdFZOb2RlLmNoaWxkcmVuO1xuICAgICAgICAgICAgaWYgKGluc3RhbmNlLl91bm1vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNOdWxsKHBhcmVudERvbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlcGxhY2VDaGlsZChwYXJlbnREb20sIG1vdW50Q29tcG9uZW50KG5leHRWTm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgbmV4dFZOb2RlLmZsYWdzICYgNCAvKiBDb21wb25lbnRDbGFzcyAqLyksIGxhc3RWTm9kZS5kb20pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGxhc3RTdGF0ZSA9IGluc3RhbmNlLnN0YXRlO1xuICAgICAgICAgICAgICAgIHZhciBuZXh0U3RhdGUgPSBpbnN0YW5jZS5zdGF0ZTtcbiAgICAgICAgICAgICAgICB2YXIgbGFzdFByb3BzID0gaW5zdGFuY2UucHJvcHM7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkQ29udGV4dCA9IGluc3RhbmNlLmdldENoaWxkQ29udGV4dCgpO1xuICAgICAgICAgICAgICAgIG5leHRWTm9kZS5jaGlsZHJlbiA9IGluc3RhbmNlO1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLl9pc1NWRyA9IGlzU1ZHO1xuICAgICAgICAgICAgICAgIGlmICghaXNOdWxsT3JVbmRlZihjaGlsZENvbnRleHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkQ29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQsIGNoaWxkQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbGFzdElucHV0JDEgPSBpbnN0YW5jZS5fbGFzdElucHV0O1xuICAgICAgICAgICAgICAgIHZhciBuZXh0SW5wdXQkMSA9IGluc3RhbmNlLl91cGRhdGVDb21wb25lbnQobGFzdFN0YXRlLCBuZXh0U3RhdGUsIGxhc3RQcm9wcywgbmV4dFByb3BzLCBjb250ZXh0LCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHZhciBkaWRVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLl9jaGlsZENvbnRleHQgPSBjaGlsZENvbnRleHQ7XG4gICAgICAgICAgICAgICAgaWYgKGlzSW52YWxpZChuZXh0SW5wdXQkMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dElucHV0JDEgPSBjcmVhdGVWb2lkVk5vZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobmV4dElucHV0JDEgPT09IE5PX09QKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbnB1dCQxID0gbGFzdElucHV0JDE7XG4gICAgICAgICAgICAgICAgICAgIGRpZFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc1N0cmluZ09yTnVtYmVyKG5leHRJbnB1dCQxKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SW5wdXQkMSA9IGNyZWF0ZVRleHRWTm9kZShuZXh0SW5wdXQkMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzQXJyYXkobmV4dElucHV0JDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKCdhIHZhbGlkIEluZmVybm8gVk5vZGUgKG9yIG51bGwpIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBhIGNvbXBvbmVudCByZW5kZXIuIFlvdSBtYXkgaGF2ZSByZXR1cm5lZCBhbiBhcnJheSBvciBhbiBpbnZhbGlkIG9iamVjdC4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KG5leHRJbnB1dCQxKSAmJiBuZXh0SW5wdXQkMS5kb20pIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dElucHV0JDEgPSBjbG9uZVZOb2RlKG5leHRJbnB1dCQxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5leHRJbnB1dCQxLmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbnB1dCQxLnBhcmVudFZOb2RlID0gbmV4dFZOb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsYXN0SW5wdXQkMS5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICAgICAgICAgICAgICBsYXN0SW5wdXQkMS5wYXJlbnRWTm9kZSA9IG5leHRWTm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuX2xhc3RJbnB1dCA9IG5leHRJbnB1dCQxO1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLl92Tm9kZSA9IG5leHRWTm9kZTtcbiAgICAgICAgICAgICAgICBpZiAoZGlkVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmYXN0VW5tb3VudCA9IGxpZmVjeWNsZS5mYXN0VW5tb3VudDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN1YkxpZmVjeWNsZSA9IGluc3RhbmNlLl9saWZlY3ljbGU7XG4gICAgICAgICAgICAgICAgICAgIGxpZmVjeWNsZS5mYXN0VW5tb3VudCA9IHN1YkxpZmVjeWNsZS5mYXN0VW5tb3VudDtcbiAgICAgICAgICAgICAgICAgICAgcGF0Y2gobGFzdElucHV0JDEsIG5leHRJbnB1dCQxLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY2hpbGRDb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgICAgICAgICBzdWJMaWZlY3ljbGUuZmFzdFVubW91bnQgPSBsaWZlY3ljbGUuZmFzdFVubW91bnQ7XG4gICAgICAgICAgICAgICAgICAgIGxpZmVjeWNsZS5mYXN0VW5tb3VudCA9IGZhc3RVbm1vdW50O1xuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5jb21wb25lbnREaWRVcGRhdGUobGFzdFByb3BzLCBsYXN0U3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmFmdGVyVXBkYXRlICYmIG9wdGlvbnMuYWZ0ZXJVcGRhdGUobmV4dFZOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5maW5kRE9NTm9kZUVuYWJsZWQgJiYgY29tcG9uZW50VG9ET01Ob2RlTWFwLnNldChpbnN0YW5jZSwgbmV4dElucHV0JDEuZG9tKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV4dFZOb2RlLmRvbSA9IG5leHRJbnB1dCQxLmRvbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBzaG91bGRVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIGxhc3RQcm9wcyQxID0gbGFzdFZOb2RlLnByb3BzO1xuICAgICAgICAgICAgdmFyIG5leHRIb29rcyA9IG5leHRWTm9kZS5yZWY7XG4gICAgICAgICAgICB2YXIgbmV4dEhvb2tzRGVmaW5lZCA9ICFpc051bGxPclVuZGVmKG5leHRIb29rcyk7XG4gICAgICAgICAgICB2YXIgbGFzdElucHV0JDIgPSBsYXN0Vk5vZGUuY2hpbGRyZW47XG4gICAgICAgICAgICB2YXIgbmV4dElucHV0JDIgPSBsYXN0SW5wdXQkMjtcbiAgICAgICAgICAgIG5leHRWTm9kZS5kb20gPSBsYXN0Vk5vZGUuZG9tO1xuICAgICAgICAgICAgbmV4dFZOb2RlLmNoaWxkcmVuID0gbGFzdElucHV0JDI7XG4gICAgICAgICAgICBpZiAobGFzdEtleSAhPT0gbmV4dEtleSkge1xuICAgICAgICAgICAgICAgIHNob3VsZFVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAobmV4dEhvb2tzRGVmaW5lZCAmJiAhaXNOdWxsT3JVbmRlZihuZXh0SG9va3Mub25Db21wb25lbnRTaG91bGRVcGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3VsZFVwZGF0ZSA9IG5leHRIb29rcy5vbkNvbXBvbmVudFNob3VsZFVwZGF0ZShsYXN0UHJvcHMkMSwgbmV4dFByb3BzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2hvdWxkVXBkYXRlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmIChuZXh0SG9va3NEZWZpbmVkICYmICFpc051bGxPclVuZGVmKG5leHRIb29rcy5vbkNvbXBvbmVudFdpbGxVcGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRIb29rcy5vbkNvbXBvbmVudFdpbGxVcGRhdGUobGFzdFByb3BzJDEsIG5leHRQcm9wcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5leHRJbnB1dCQyID0gbmV4dFR5cGUobmV4dFByb3BzLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAoaXNJbnZhbGlkKG5leHRJbnB1dCQyKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SW5wdXQkMiA9IGNyZWF0ZVZvaWRWTm9kZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc1N0cmluZ09yTnVtYmVyKG5leHRJbnB1dCQyKSAmJiBuZXh0SW5wdXQkMiAhPT0gTk9fT1ApIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dElucHV0JDIgPSBjcmVhdGVUZXh0Vk5vZGUobmV4dElucHV0JDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc0FycmF5KG5leHRJbnB1dCQyKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcignYSB2YWxpZCBJbmZlcm5vIFZOb2RlIChvciBudWxsKSBtdXN0IGJlIHJldHVybmVkIGZyb20gYSBjb21wb25lbnQgcmVuZGVyLiBZb3UgbWF5IGhhdmUgcmV0dXJuZWQgYW4gYXJyYXkgb3IgYW4gaW52YWxpZCBvYmplY3QuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc09iamVjdChuZXh0SW5wdXQkMikgJiYgbmV4dElucHV0JDIuZG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbnB1dCQyID0gY2xvbmVWTm9kZShuZXh0SW5wdXQkMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChuZXh0SW5wdXQkMiAhPT0gTk9fT1ApIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0Y2gobGFzdElucHV0JDIsIG5leHRJbnB1dCQyLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFZOb2RlLmNoaWxkcmVuID0gbmV4dElucHV0JDI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0SG9va3NEZWZpbmVkICYmICFpc051bGxPclVuZGVmKG5leHRIb29rcy5vbkNvbXBvbmVudERpZFVwZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRIb29rcy5vbkNvbXBvbmVudERpZFVwZGF0ZShsYXN0UHJvcHMkMSwgbmV4dFByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuZXh0Vk5vZGUuZG9tID0gbmV4dElucHV0JDIuZG9tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXh0SW5wdXQkMi5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICAgICAgICAgIG5leHRJbnB1dCQyLnBhcmVudFZOb2RlID0gbmV4dFZOb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobGFzdElucHV0JDIuZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgICAgICAgICBsYXN0SW5wdXQkMi5wYXJlbnRWTm9kZSA9IG5leHRWTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBwYXRjaFRleHQobGFzdFZOb2RlLCBuZXh0Vk5vZGUpIHtcbiAgICB2YXIgbmV4dFRleHQgPSBuZXh0Vk5vZGUuY2hpbGRyZW47XG4gICAgdmFyIGRvbSA9IGxhc3RWTm9kZS5kb207XG4gICAgbmV4dFZOb2RlLmRvbSA9IGRvbTtcbiAgICBpZiAobGFzdFZOb2RlLmNoaWxkcmVuICE9PSBuZXh0VGV4dCkge1xuICAgICAgICBkb20ubm9kZVZhbHVlID0gbmV4dFRleHQ7XG4gICAgfVxufVxuZnVuY3Rpb24gcGF0Y2hWb2lkKGxhc3RWTm9kZSwgbmV4dFZOb2RlKSB7XG4gICAgbmV4dFZOb2RlLmRvbSA9IGxhc3RWTm9kZS5kb207XG59XG5mdW5jdGlvbiBwYXRjaE5vbktleWVkQ2hpbGRyZW4obGFzdENoaWxkcmVuLCBuZXh0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpIHtcbiAgICB2YXIgbGFzdENoaWxkcmVuTGVuZ3RoID0gbGFzdENoaWxkcmVuLmxlbmd0aDtcbiAgICB2YXIgbmV4dENoaWxkcmVuTGVuZ3RoID0gbmV4dENoaWxkcmVuLmxlbmd0aDtcbiAgICB2YXIgY29tbW9uTGVuZ3RoID0gbGFzdENoaWxkcmVuTGVuZ3RoID4gbmV4dENoaWxkcmVuTGVuZ3RoID8gbmV4dENoaWxkcmVuTGVuZ3RoIDogbGFzdENoaWxkcmVuTGVuZ3RoO1xuICAgIHZhciBpID0gMDtcbiAgICBmb3IgKDsgaSA8IGNvbW1vbkxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBuZXh0Q2hpbGQgPSBuZXh0Q2hpbGRyZW5baV07XG4gICAgICAgIGlmIChuZXh0Q2hpbGQuZG9tKSB7XG4gICAgICAgICAgICBuZXh0Q2hpbGQgPSBuZXh0Q2hpbGRyZW5baV0gPSBjbG9uZVZOb2RlKG5leHRDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgcGF0Y2gobGFzdENoaWxkcmVuW2ldLCBuZXh0Q2hpbGQsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbiAgICBpZiAobGFzdENoaWxkcmVuTGVuZ3RoIDwgbmV4dENoaWxkcmVuTGVuZ3RoKSB7XG4gICAgICAgIGZvciAoaSA9IGNvbW1vbkxlbmd0aDsgaSA8IG5leHRDaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbmV4dENoaWxkJDEgPSBuZXh0Q2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAobmV4dENoaWxkJDEuZG9tKSB7XG4gICAgICAgICAgICAgICAgbmV4dENoaWxkJDEgPSBuZXh0Q2hpbGRyZW5baV0gPSBjbG9uZVZOb2RlKG5leHRDaGlsZCQxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFwcGVuZENoaWxkKGRvbSwgbW91bnQobmV4dENoaWxkJDEsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChuZXh0Q2hpbGRyZW5MZW5ndGggPT09IDApIHtcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGRyZW4oZG9tLCBsYXN0Q2hpbGRyZW4sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChsYXN0Q2hpbGRyZW5MZW5ndGggPiBuZXh0Q2hpbGRyZW5MZW5ndGgpIHtcbiAgICAgICAgZm9yIChpID0gY29tbW9uTGVuZ3RoOyBpIDwgbGFzdENoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHVubW91bnQobGFzdENoaWxkcmVuW2ldLCBkb20sIGxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHBhdGNoS2V5ZWRDaGlsZHJlbihhLCBiLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKSB7XG4gICAgdmFyIGFMZW5ndGggPSBhLmxlbmd0aDtcbiAgICB2YXIgYkxlbmd0aCA9IGIubGVuZ3RoO1xuICAgIHZhciBhRW5kID0gYUxlbmd0aCAtIDE7XG4gICAgdmFyIGJFbmQgPSBiTGVuZ3RoIC0gMTtcbiAgICB2YXIgYVN0YXJ0ID0gMDtcbiAgICB2YXIgYlN0YXJ0ID0gMDtcbiAgICB2YXIgaTtcbiAgICB2YXIgajtcbiAgICB2YXIgYU5vZGU7XG4gICAgdmFyIGJOb2RlO1xuICAgIHZhciBuZXh0Tm9kZTtcbiAgICB2YXIgbmV4dFBvcztcbiAgICB2YXIgbm9kZTtcbiAgICBpZiAoYUxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpZiAoYkxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgbW91bnRBcnJheUNoaWxkcmVuKGIsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNlIGlmIChiTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlbW92ZUFsbENoaWxkcmVuKGRvbSwgYSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGFTdGFydE5vZGUgPSBhW2FTdGFydF07XG4gICAgdmFyIGJTdGFydE5vZGUgPSBiW2JTdGFydF07XG4gICAgdmFyIGFFbmROb2RlID0gYVthRW5kXTtcbiAgICB2YXIgYkVuZE5vZGUgPSBiW2JFbmRdO1xuICAgIGlmIChiU3RhcnROb2RlLmRvbSkge1xuICAgICAgICBiW2JTdGFydF0gPSBiU3RhcnROb2RlID0gY2xvbmVWTm9kZShiU3RhcnROb2RlKTtcbiAgICB9XG4gICAgaWYgKGJFbmROb2RlLmRvbSkge1xuICAgICAgICBiW2JFbmRdID0gYkVuZE5vZGUgPSBjbG9uZVZOb2RlKGJFbmROb2RlKTtcbiAgICB9XG4gICAgLy8gU3RlcCAxXG4gICAgLyogZXNsaW50IG5vLWNvbnN0YW50LWNvbmRpdGlvbjogMCAqL1xuICAgIG91dGVyOiB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAvLyBTeW5jIG5vZGVzIHdpdGggdGhlIHNhbWUga2V5IGF0IHRoZSBiZWdpbm5pbmcuXG4gICAgICAgIHdoaWxlIChhU3RhcnROb2RlLmtleSA9PT0gYlN0YXJ0Tm9kZS5rZXkpIHtcbiAgICAgICAgICAgIHBhdGNoKGFTdGFydE5vZGUsIGJTdGFydE5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgYVN0YXJ0Kys7XG4gICAgICAgICAgICBiU3RhcnQrKztcbiAgICAgICAgICAgIGlmIChhU3RhcnQgPiBhRW5kIHx8IGJTdGFydCA+IGJFbmQpIHtcbiAgICAgICAgICAgICAgICBicmVhayBvdXRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFTdGFydE5vZGUgPSBhW2FTdGFydF07XG4gICAgICAgICAgICBiU3RhcnROb2RlID0gYltiU3RhcnRdO1xuICAgICAgICAgICAgaWYgKGJTdGFydE5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgYltiU3RhcnRdID0gYlN0YXJ0Tm9kZSA9IGNsb25lVk5vZGUoYlN0YXJ0Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3luYyBub2RlcyB3aXRoIHRoZSBzYW1lIGtleSBhdCB0aGUgZW5kLlxuICAgICAgICB3aGlsZSAoYUVuZE5vZGUua2V5ID09PSBiRW5kTm9kZS5rZXkpIHtcbiAgICAgICAgICAgIHBhdGNoKGFFbmROb2RlLCBiRW5kTm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICBhRW5kLS07XG4gICAgICAgICAgICBiRW5kLS07XG4gICAgICAgICAgICBpZiAoYVN0YXJ0ID4gYUVuZCB8fCBiU3RhcnQgPiBiRW5kKSB7XG4gICAgICAgICAgICAgICAgYnJlYWsgb3V0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhRW5kTm9kZSA9IGFbYUVuZF07XG4gICAgICAgICAgICBiRW5kTm9kZSA9IGJbYkVuZF07XG4gICAgICAgICAgICBpZiAoYkVuZE5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgYltiRW5kXSA9IGJFbmROb2RlID0gY2xvbmVWTm9kZShiRW5kTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gTW92ZSBhbmQgc3luYyBub2RlcyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gICAgICAgIGlmIChhRW5kTm9kZS5rZXkgPT09IGJTdGFydE5vZGUua2V5KSB7XG4gICAgICAgICAgICBwYXRjaChhRW5kTm9kZSwgYlN0YXJ0Tm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICBpbnNlcnRPckFwcGVuZChkb20sIGJTdGFydE5vZGUuZG9tLCBhU3RhcnROb2RlLmRvbSk7XG4gICAgICAgICAgICBhRW5kLS07XG4gICAgICAgICAgICBiU3RhcnQrKztcbiAgICAgICAgICAgIGFFbmROb2RlID0gYVthRW5kXTtcbiAgICAgICAgICAgIGJTdGFydE5vZGUgPSBiW2JTdGFydF07XG4gICAgICAgICAgICBpZiAoYlN0YXJ0Tm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICBiW2JTdGFydF0gPSBiU3RhcnROb2RlID0gY2xvbmVWTm9kZShiU3RhcnROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1vdmUgYW5kIHN5bmMgbm9kZXMgZnJvbSBsZWZ0IHRvIHJpZ2h0LlxuICAgICAgICBpZiAoYVN0YXJ0Tm9kZS5rZXkgPT09IGJFbmROb2RlLmtleSkge1xuICAgICAgICAgICAgcGF0Y2goYVN0YXJ0Tm9kZSwgYkVuZE5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgbmV4dFBvcyA9IGJFbmQgKyAxO1xuICAgICAgICAgICAgbmV4dE5vZGUgPSBuZXh0UG9zIDwgYi5sZW5ndGggPyBiW25leHRQb3NdLmRvbSA6IG51bGw7XG4gICAgICAgICAgICBpbnNlcnRPckFwcGVuZChkb20sIGJFbmROb2RlLmRvbSwgbmV4dE5vZGUpO1xuICAgICAgICAgICAgYVN0YXJ0Kys7XG4gICAgICAgICAgICBiRW5kLS07XG4gICAgICAgICAgICBhU3RhcnROb2RlID0gYVthU3RhcnRdO1xuICAgICAgICAgICAgYkVuZE5vZGUgPSBiW2JFbmRdO1xuICAgICAgICAgICAgaWYgKGJFbmROb2RlLmRvbSkge1xuICAgICAgICAgICAgICAgIGJbYkVuZF0gPSBiRW5kTm9kZSA9IGNsb25lVk5vZGUoYkVuZE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChhU3RhcnQgPiBhRW5kKSB7XG4gICAgICAgIGlmIChiU3RhcnQgPD0gYkVuZCkge1xuICAgICAgICAgICAgbmV4dFBvcyA9IGJFbmQgKyAxO1xuICAgICAgICAgICAgbmV4dE5vZGUgPSBuZXh0UG9zIDwgYi5sZW5ndGggPyBiW25leHRQb3NdLmRvbSA6IG51bGw7XG4gICAgICAgICAgICB3aGlsZSAoYlN0YXJ0IDw9IGJFbmQpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gYltiU3RhcnRdO1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmRvbSkge1xuICAgICAgICAgICAgICAgICAgICBiW2JTdGFydF0gPSBub2RlID0gY2xvbmVWTm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYlN0YXJ0Kys7XG4gICAgICAgICAgICAgICAgaW5zZXJ0T3JBcHBlbmQoZG9tLCBtb3VudChub2RlLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSwgbmV4dE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGJTdGFydCA+IGJFbmQpIHtcbiAgICAgICAgd2hpbGUgKGFTdGFydCA8PSBhRW5kKSB7XG4gICAgICAgICAgICB1bm1vdW50KGFbYVN0YXJ0KytdLCBkb20sIGxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYUxlbmd0aCA9IGFFbmQgLSBhU3RhcnQgKyAxO1xuICAgICAgICBiTGVuZ3RoID0gYkVuZCAtIGJTdGFydCArIDE7XG4gICAgICAgIHZhciBhTnVsbGFibGUgPSBhO1xuICAgICAgICB2YXIgc291cmNlcyA9IG5ldyBBcnJheShiTGVuZ3RoKTtcbiAgICAgICAgLy8gTWFyayBhbGwgbm9kZXMgYXMgaW5zZXJ0ZWQuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBiTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNvdXJjZXNbaV0gPSAtMTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbW92ZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHBvcyA9IDA7XG4gICAgICAgIHZhciBwYXRjaGVkID0gMDtcbiAgICAgICAgaWYgKChiTGVuZ3RoIDw9IDQpIHx8IChhTGVuZ3RoICogYkxlbmd0aCA8PSAxNikpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IGFTdGFydDsgaSA8PSBhRW5kOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhTm9kZSA9IGFbaV07XG4gICAgICAgICAgICAgICAgaWYgKHBhdGNoZWQgPCBiTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IGJTdGFydDsgaiA8PSBiRW5kOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJOb2RlID0gYltqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhTm9kZS5rZXkgPT09IGJOb2RlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZXNbaiAtIGJTdGFydF0gPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3MgPiBqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcyA9IGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiTm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYltqXSA9IGJOb2RlID0gY2xvbmVWTm9kZShiTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGNoKGFOb2RlLCBiTm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0Y2hlZCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFOdWxsYWJsZVtpXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIga2V5SW5kZXggPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICBmb3IgKGkgPSBiU3RhcnQ7IGkgPD0gYkVuZDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IGJbaV07XG4gICAgICAgICAgICAgICAga2V5SW5kZXguc2V0KG5vZGUua2V5LCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IGFTdGFydDsgaSA8PSBhRW5kOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhTm9kZSA9IGFbaV07XG4gICAgICAgICAgICAgICAgaWYgKHBhdGNoZWQgPCBiTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGogPSBrZXlJbmRleC5nZXQoYU5vZGUua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChqKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYk5vZGUgPSBiW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlc1tqIC0gYlN0YXJ0XSA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zID4gaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcyA9IGo7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYk5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYltqXSA9IGJOb2RlID0gY2xvbmVWTm9kZShiTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRjaChhTm9kZSwgYk5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0Y2hlZCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYU51bGxhYmxlW2ldID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYUxlbmd0aCA9PT0gYS5sZW5ndGggJiYgcGF0Y2hlZCA9PT0gMCkge1xuICAgICAgICAgICAgcmVtb3ZlQWxsQ2hpbGRyZW4oZG9tLCBhLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIHdoaWxlIChiU3RhcnQgPCBiTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IGJbYlN0YXJ0XTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICAgICAgYltiU3RhcnRdID0gbm9kZSA9IGNsb25lVk5vZGUobm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJTdGFydCsrO1xuICAgICAgICAgICAgICAgIGluc2VydE9yQXBwZW5kKGRvbSwgbW91bnQobm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyksIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaSA9IGFMZW5ndGggLSBwYXRjaGVkO1xuICAgICAgICAgICAgd2hpbGUgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgYU5vZGUgPSBhTnVsbGFibGVbYVN0YXJ0KytdO1xuICAgICAgICAgICAgICAgIGlmICghaXNOdWxsKGFOb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICB1bm1vdW50KGFOb2RlLCBkb20sIGxpZmVjeWNsZSwgdHJ1ZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1vdmVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlcSA9IGxpc19hbGdvcml0aG0oc291cmNlcyk7XG4gICAgICAgICAgICAgICAgaiA9IHNlcS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IGJMZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc291cmNlc1tpXSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcyA9IGkgKyBiU3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlID0gYltwb3NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYltwb3NdID0gbm9kZSA9IGNsb25lVk5vZGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0UG9zID0gcG9zICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHROb2RlID0gbmV4dFBvcyA8IGIubGVuZ3RoID8gYltuZXh0UG9zXS5kb20gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0T3JBcHBlbmQoZG9tLCBtb3VudChub2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpLCBuZXh0Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA8IDAgfHwgaSAhPT0gc2VxW2pdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gaSArIGJTdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlID0gYltwb3NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQb3MgPSBwb3MgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHROb2RlID0gbmV4dFBvcyA8IGIubGVuZ3RoID8gYltuZXh0UG9zXS5kb20gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydE9yQXBwZW5kKGRvbSwgbm9kZS5kb20sIG5leHROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGotLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBhdGNoZWQgIT09IGJMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBiTGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZXNbaV0gPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3MgPSBpICsgYlN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGJbcG9zXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmRvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJbcG9zXSA9IG5vZGUgPSBjbG9uZVZOb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBvcyA9IHBvcyArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0Tm9kZSA9IG5leHRQb3MgPCBiLmxlbmd0aCA/IGJbbmV4dFBvc10uZG9tIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydE9yQXBwZW5kKGRvbSwgbW91bnQobm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyksIG5leHROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xvbmdlc3RfaW5jcmVhc2luZ19zdWJzZXF1ZW5jZVxuZnVuY3Rpb24gbGlzX2FsZ29yaXRobShhKSB7XG4gICAgdmFyIHAgPSBhLnNsaWNlKDApO1xuICAgIHZhciByZXN1bHQgPSBbMF07XG4gICAgdmFyIGk7XG4gICAgdmFyIGo7XG4gICAgdmFyIHU7XG4gICAgdmFyIHY7XG4gICAgdmFyIGM7XG4gICAgZm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFbaV0gPT09IC0xKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBqID0gcmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKGFbal0gPCBhW2ldKSB7XG4gICAgICAgICAgICBwW2ldID0gajtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGkpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdSA9IDA7XG4gICAgICAgIHYgPSByZXN1bHQubGVuZ3RoIC0gMTtcbiAgICAgICAgd2hpbGUgKHUgPCB2KSB7XG4gICAgICAgICAgICBjID0gKCh1ICsgdikgLyAyKSB8IDA7XG4gICAgICAgICAgICBpZiAoYVtyZXN1bHRbY11dIDwgYVtpXSkge1xuICAgICAgICAgICAgICAgIHUgPSBjICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHYgPSBjO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhW2ldIDwgYVtyZXN1bHRbdV1dKSB7XG4gICAgICAgICAgICBpZiAodSA+IDApIHtcbiAgICAgICAgICAgICAgICBwW2ldID0gcmVzdWx0W3UgLSAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdFt1XSA9IGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdSA9IHJlc3VsdC5sZW5ndGg7XG4gICAgdiA9IHJlc3VsdFt1IC0gMV07XG4gICAgd2hpbGUgKHUtLSA+IDApIHtcbiAgICAgICAgcmVzdWx0W3VdID0gdjtcbiAgICAgICAgdiA9IHBbdl07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBwYXRjaFByb3AocHJvcCwgbGFzdFZhbHVlLCBuZXh0VmFsdWUsIGRvbSwgaXNTVkcsIGhhc0NvbnRyb2xsZWRWYWx1ZSkge1xuICAgIGlmIChza2lwUHJvcHNbcHJvcF0gfHwgaGFzQ29udHJvbGxlZFZhbHVlICYmIHByb3AgPT09ICd2YWx1ZScpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoYm9vbGVhblByb3BzW3Byb3BdKSB7XG4gICAgICAgIGRvbVtwcm9wXSA9ICEhbmV4dFZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChzdHJpY3RQcm9wc1twcm9wXSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBpc051bGxPclVuZGVmKG5leHRWYWx1ZSkgPyAnJyA6IG5leHRWYWx1ZTtcbiAgICAgICAgaWYgKGRvbVtwcm9wXSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGRvbVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGxhc3RWYWx1ZSAhPT0gbmV4dFZhbHVlKSB7XG4gICAgICAgIGlmIChpc0F0dHJBbkV2ZW50KHByb3ApKSB7XG4gICAgICAgICAgICBwYXRjaEV2ZW50KHByb3AsIGxhc3RWYWx1ZSwgbmV4dFZhbHVlLCBkb20pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzTnVsbE9yVW5kZWYobmV4dFZhbHVlKSkge1xuICAgICAgICAgICAgZG9tLnJlbW92ZUF0dHJpYnV0ZShwcm9wKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wID09PSAnY2xhc3NOYW1lJykge1xuICAgICAgICAgICAgaWYgKGlzU1ZHKSB7XG4gICAgICAgICAgICAgICAgZG9tLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBuZXh0VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9tLmNsYXNzTmFtZSA9IG5leHRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wID09PSAnc3R5bGUnKSB7XG4gICAgICAgICAgICBwYXRjaFN0eWxlKGxhc3RWYWx1ZSwgbmV4dFZhbHVlLCBkb20pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3AgPT09ICdkYW5nZXJvdXNseVNldElubmVySFRNTCcpIHtcbiAgICAgICAgICAgIHZhciBsYXN0SHRtbCA9IGxhc3RWYWx1ZSAmJiBsYXN0VmFsdWUuX19odG1sO1xuICAgICAgICAgICAgdmFyIG5leHRIdG1sID0gbmV4dFZhbHVlICYmIG5leHRWYWx1ZS5fX2h0bWw7XG4gICAgICAgICAgICBpZiAobGFzdEh0bWwgIT09IG5leHRIdG1sKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKG5leHRIdG1sKSkge1xuICAgICAgICAgICAgICAgICAgICBkb20uaW5uZXJIVE1MID0gbmV4dEh0bWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGRlaHlwaGVuUHJvcDtcbiAgICAgICAgICAgIGlmIChkZWh5cGhlblByb3BzW3Byb3BdKSB7XG4gICAgICAgICAgICAgICAgZGVoeXBoZW5Qcm9wID0gZGVoeXBoZW5Qcm9wc1twcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzU1ZHICYmIHByb3AubWF0Y2gocHJvYmFibHlLZWJhYlByb3BzKSkge1xuICAgICAgICAgICAgICAgIGRlaHlwaGVuUHJvcCA9IHByb3AucmVwbGFjZSgvKFthLXpdKShbQS1aXXwxKS9nLCBrZWJhYml6ZSk7XG4gICAgICAgICAgICAgICAgZGVoeXBoZW5Qcm9wc1twcm9wXSA9IGRlaHlwaGVuUHJvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlaHlwaGVuUHJvcCA9IHByb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbnMgPSBuYW1lc3BhY2VzW3Byb3BdO1xuICAgICAgICAgICAgaWYgKG5zKSB7XG4gICAgICAgICAgICAgICAgZG9tLnNldEF0dHJpYnV0ZU5TKG5zLCBkZWh5cGhlblByb3AsIG5leHRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb20uc2V0QXR0cmlidXRlKGRlaHlwaGVuUHJvcCwgbmV4dFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHBhdGNoRXZlbnRzKGxhc3RFdmVudHMsIG5leHRFdmVudHMsIGRvbSkge1xuICAgIGxhc3RFdmVudHMgPSBsYXN0RXZlbnRzIHx8IEVNUFRZX09CSjtcbiAgICBuZXh0RXZlbnRzID0gbmV4dEV2ZW50cyB8fCBFTVBUWV9PQko7XG4gICAgaWYgKG5leHRFdmVudHMgIT09IEVNUFRZX09CSikge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIG5leHRFdmVudHMpIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdCBhZGQgYSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBoZXJlLCBpdCBhZmZlY3RzIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICBwYXRjaEV2ZW50KG5hbWUsIGxhc3RFdmVudHNbbmFtZV0sIG5leHRFdmVudHNbbmFtZV0sIGRvbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGxhc3RFdmVudHMgIT09IEVNUFRZX09CSikge1xuICAgICAgICBmb3IgKHZhciBuYW1lJDEgaW4gbGFzdEV2ZW50cykge1xuICAgICAgICAgICAgLy8gZG8gbm90IGFkZCBhIGhhc093blByb3BlcnR5IGNoZWNrIGhlcmUsIGl0IGFmZmVjdHMgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgIGlmIChpc051bGxPclVuZGVmKG5leHRFdmVudHNbbmFtZSQxXSkpIHtcbiAgICAgICAgICAgICAgICBwYXRjaEV2ZW50KG5hbWUkMSwgbGFzdEV2ZW50c1tuYW1lJDFdLCBudWxsLCBkb20pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gcGF0Y2hFdmVudChuYW1lLCBsYXN0VmFsdWUsIG5leHRWYWx1ZSwgZG9tKSB7XG4gICAgaWYgKGxhc3RWYWx1ZSAhPT0gbmV4dFZhbHVlKSB7XG4gICAgICAgIHZhciBuYW1lTG93ZXJDYXNlID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB2YXIgZG9tRXZlbnQgPSBkb21bbmFtZUxvd2VyQ2FzZV07XG4gICAgICAgIC8vIGlmIHRoZSBmdW5jdGlvbiBpcyB3cmFwcGVkLCB0aGF0IG1lYW5zIGl0J3MgYmVlbiBjb250cm9sbGVkIGJ5IGEgd3JhcHBlclxuICAgICAgICBpZiAoZG9tRXZlbnQgJiYgZG9tRXZlbnQud3JhcHBlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWxlZ2F0ZWRQcm9wc1tuYW1lXSkge1xuICAgICAgICAgICAgaGFuZGxlRXZlbnQobmFtZSwgbGFzdFZhbHVlLCBuZXh0VmFsdWUsIGRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAobGFzdFZhbHVlICE9PSBuZXh0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzRnVuY3Rpb24obmV4dFZhbHVlKSAmJiAhaXNOdWxsT3JVbmRlZihuZXh0VmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsaW5rRXZlbnQgPSBuZXh0VmFsdWUuZXZlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsaW5rRXZlbnQgJiYgaXNGdW5jdGlvbihsaW5rRXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRvbS5fZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVtuYW1lTG93ZXJDYXNlXSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtFdmVudChlLmN1cnJlbnRUYXJnZXQuX2RhdGEsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkb20uX2RhdGEgPSBuZXh0VmFsdWUuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcigoXCJhbiBldmVudCBvbiBhIFZOb2RlIFxcXCJcIiArIG5hbWUgKyBcIlxcXCIuIHdhcyBub3QgYSBmdW5jdGlvbiBvciBhIHZhbGlkIGxpbmtFdmVudC5cIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkb21bbmFtZUxvd2VyQ2FzZV0gPSBuZXh0VmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLy8gV2UgYXJlIGFzc3VtaW5nIGhlcmUgdGhhdCB3ZSBjb21lIGZyb20gcGF0Y2hQcm9wIHJvdXRpbmVcbi8vIC1uZXh0QXR0clZhbHVlIGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZFxuZnVuY3Rpb24gcGF0Y2hTdHlsZShsYXN0QXR0clZhbHVlLCBuZXh0QXR0clZhbHVlLCBkb20pIHtcbiAgICBpZiAoaXNTdHJpbmcobmV4dEF0dHJWYWx1ZSkpIHtcbiAgICAgICAgZG9tLnN0eWxlLmNzc1RleHQgPSBuZXh0QXR0clZhbHVlO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAodmFyIHN0eWxlIGluIG5leHRBdHRyVmFsdWUpIHtcbiAgICAgICAgLy8gZG8gbm90IGFkZCBhIGhhc093blByb3BlcnR5IGNoZWNrIGhlcmUsIGl0IGFmZmVjdHMgcGVyZm9ybWFuY2VcbiAgICAgICAgdmFyIHZhbHVlID0gbmV4dEF0dHJWYWx1ZVtzdHlsZV07XG4gICAgICAgIGlmIChpc051bWJlcih2YWx1ZSkgJiYgIWlzVW5pdGxlc3NOdW1iZXJbc3R5bGVdKSB7XG4gICAgICAgICAgICBkb20uc3R5bGVbc3R5bGVdID0gdmFsdWUgKyAncHgnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZG9tLnN0eWxlW3N0eWxlXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghaXNOdWxsT3JVbmRlZihsYXN0QXR0clZhbHVlKSkge1xuICAgICAgICBmb3IgKHZhciBzdHlsZSQxIGluIGxhc3RBdHRyVmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChpc051bGxPclVuZGVmKG5leHRBdHRyVmFsdWVbc3R5bGUkMV0pKSB7XG4gICAgICAgICAgICAgICAgZG9tLnN0eWxlW3N0eWxlJDFdID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiByZW1vdmVQcm9wKHByb3AsIGxhc3RWYWx1ZSwgZG9tKSB7XG4gICAgaWYgKHByb3AgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICAgIGRvbS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3AgPT09ICd2YWx1ZScpIHtcbiAgICAgICAgZG9tLnZhbHVlID0gJyc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3AgPT09ICdzdHlsZScpIHtcbiAgICAgICAgZG9tLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNBdHRyQW5FdmVudChwcm9wKSkge1xuICAgICAgICBoYW5kbGVFdmVudChuYW1lLCBsYXN0VmFsdWUsIG51bGwsIGRvbSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkb20ucmVtb3ZlQXR0cmlidXRlKHByb3ApO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbW91bnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIHZhciBmbGFncyA9IHZOb2RlLmZsYWdzO1xuICAgIGlmIChmbGFncyAmIDM5NzAgLyogRWxlbWVudCAqLykge1xuICAgICAgICByZXR1cm4gbW91bnRFbGVtZW50KHZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChmbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICByZXR1cm4gbW91bnRDb21wb25lbnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgZmxhZ3MgJiA0IC8qIENvbXBvbmVudENsYXNzICovKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxhZ3MgJiA0MDk2IC8qIFZvaWQgKi8pIHtcbiAgICAgICAgcmV0dXJuIG1vdW50Vm9pZCh2Tm9kZSwgcGFyZW50RG9tKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxhZ3MgJiAxIC8qIFRleHQgKi8pIHtcbiAgICAgICAgcmV0dXJuIG1vdW50VGV4dCh2Tm9kZSwgcGFyZW50RG9tKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZOb2RlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHRocm93RXJyb3IoKFwibW91bnQoKSByZWNlaXZlZCBhbiBvYmplY3QgdGhhdCdzIG5vdCBhIHZhbGlkIFZOb2RlLCB5b3Ugc2hvdWxkIHN0cmluZ2lmeSBpdCBmaXJzdC4gT2JqZWN0OiBcXFwiXCIgKyAoSlNPTi5zdHJpbmdpZnkodk5vZGUpKSArIFwiXFxcIi5cIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3dFcnJvcigoXCJtb3VudCgpIGV4cGVjdHMgYSB2YWxpZCBWTm9kZSwgaW5zdGVhZCBpdCByZWNlaXZlZCBhbiBvYmplY3Qgd2l0aCB0aGUgdHlwZSBcXFwiXCIgKyAodHlwZW9mIHZOb2RlKSArIFwiXFxcIi5cIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IoKTtcbiAgICB9XG59XG5mdW5jdGlvbiBtb3VudFRleHQodk5vZGUsIHBhcmVudERvbSkge1xuICAgIHZhciBkb20gPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2Tm9kZS5jaGlsZHJlbik7XG4gICAgdk5vZGUuZG9tID0gZG9tO1xuICAgIGlmIChwYXJlbnREb20pIHtcbiAgICAgICAgYXBwZW5kQ2hpbGQocGFyZW50RG9tLCBkb20pO1xuICAgIH1cbiAgICByZXR1cm4gZG9tO1xufVxuZnVuY3Rpb24gbW91bnRWb2lkKHZOb2RlLCBwYXJlbnREb20pIHtcbiAgICB2YXIgZG9tID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIHZOb2RlLmRvbSA9IGRvbTtcbiAgICBpZiAocGFyZW50RG9tKSB7XG4gICAgICAgIGFwcGVuZENoaWxkKHBhcmVudERvbSwgZG9tKTtcbiAgICB9XG4gICAgcmV0dXJuIGRvbTtcbn1cbmZ1bmN0aW9uIG1vdW50RWxlbWVudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSB7XG4gICAgaWYgKG9wdGlvbnMucmVjeWNsaW5nRW5hYmxlZCkge1xuICAgICAgICB2YXIgZG9tJDEgPSByZWN5Y2xlRWxlbWVudCh2Tm9kZSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIGlmICghaXNOdWxsKGRvbSQxKSkge1xuICAgICAgICAgICAgaWYgKCFpc051bGwocGFyZW50RG9tKSkge1xuICAgICAgICAgICAgICAgIGFwcGVuZENoaWxkKHBhcmVudERvbSwgZG9tJDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRvbSQxO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciB0YWcgPSB2Tm9kZS50eXBlO1xuICAgIHZhciBmbGFncyA9IHZOb2RlLmZsYWdzO1xuICAgIGlmIChpc1NWRyB8fCAoZmxhZ3MgJiAxMjggLyogU3ZnRWxlbWVudCAqLykpIHtcbiAgICAgICAgaXNTVkcgPSB0cnVlO1xuICAgIH1cbiAgICB2YXIgZG9tID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KHRhZywgaXNTVkcpO1xuICAgIHZhciBjaGlsZHJlbiA9IHZOb2RlLmNoaWxkcmVuO1xuICAgIHZhciBwcm9wcyA9IHZOb2RlLnByb3BzO1xuICAgIHZhciBldmVudHMgPSB2Tm9kZS5ldmVudHM7XG4gICAgdmFyIHJlZiA9IHZOb2RlLnJlZjtcbiAgICB2Tm9kZS5kb20gPSBkb207XG4gICAgaWYgKCFpc051bGwoY2hpbGRyZW4pKSB7XG4gICAgICAgIGlmIChpc1N0cmluZ09yTnVtYmVyKGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgc2V0VGV4dENvbnRlbnQoZG9tLCBjaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIG1vdW50QXJyYXlDaGlsZHJlbihjaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1ZOb2RlKGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgbW91bnQoY2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGhhc0NvbnRyb2xsZWRWYWx1ZSA9IGZhbHNlO1xuICAgIGlmICghKGZsYWdzICYgMiAvKiBIdG1sRWxlbWVudCAqLykpIHtcbiAgICAgICAgaGFzQ29udHJvbGxlZFZhbHVlID0gcHJvY2Vzc0VsZW1lbnQoZmxhZ3MsIHZOb2RlLCBkb20pO1xuICAgIH1cbiAgICBpZiAoIWlzTnVsbChwcm9wcykpIHtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBwcm9wcykge1xuICAgICAgICAgICAgLy8gZG8gbm90IGFkZCBhIGhhc093blByb3BlcnR5IGNoZWNrIGhlcmUsIGl0IGFmZmVjdHMgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgIHBhdGNoUHJvcChwcm9wLCBudWxsLCBwcm9wc1twcm9wXSwgZG9tLCBpc1NWRywgaGFzQ29udHJvbGxlZFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWlzTnVsbChldmVudHMpKSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gZXZlbnRzKSB7XG4gICAgICAgICAgICAvLyBkbyBub3QgYWRkIGEgaGFzT3duUHJvcGVydHkgY2hlY2sgaGVyZSwgaXQgYWZmZWN0cyBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgcGF0Y2hFdmVudChuYW1lLCBudWxsLCBldmVudHNbbmFtZV0sIGRvbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFpc051bGwocmVmKSkge1xuICAgICAgICBtb3VudFJlZihkb20sIHJlZiwgbGlmZWN5Y2xlKTtcbiAgICB9XG4gICAgaWYgKCFpc051bGwocGFyZW50RG9tKSkge1xuICAgICAgICBhcHBlbmRDaGlsZChwYXJlbnREb20sIGRvbSk7XG4gICAgfVxuICAgIHJldHVybiBkb207XG59XG5mdW5jdGlvbiBtb3VudEFycmF5Q2hpbGRyZW4oY2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgIC8vIFRPRE86IFZlcmlmeSBjYW4gc3RyaW5nL251bWJlciBiZSBoZXJlLiBtaWdodCBjYXVzZSBkZS1vcHRcbiAgICAgICAgaWYgKCFpc0ludmFsaWQoY2hpbGQpKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQuZG9tKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5baV0gPSBjaGlsZCA9IGNsb25lVk5vZGUoY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbW91bnQoY2hpbGRyZW5baV0sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBtb3VudENvbXBvbmVudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc0NsYXNzKSB7XG4gICAgaWYgKG9wdGlvbnMucmVjeWNsaW5nRW5hYmxlZCkge1xuICAgICAgICB2YXIgZG9tJDEgPSByZWN5Y2xlQ29tcG9uZW50KHZOb2RlLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgaWYgKCFpc051bGwoZG9tJDEpKSB7XG4gICAgICAgICAgICBpZiAoIWlzTnVsbChwYXJlbnREb20pKSB7XG4gICAgICAgICAgICAgICAgYXBwZW5kQ2hpbGQocGFyZW50RG9tLCBkb20kMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZG9tJDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIHR5cGUgPSB2Tm9kZS50eXBlO1xuICAgIHZhciBwcm9wcyA9IHZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgdmFyIHJlZiA9IHZOb2RlLnJlZjtcbiAgICB2YXIgZG9tO1xuICAgIGlmICghaXNVbmRlZmluZWQoZGVmYXVsdFByb3BzKSkge1xuICAgICAgICBjb3B5UHJvcHNUbyhkZWZhdWx0UHJvcHMsIHByb3BzKTtcbiAgICAgICAgdk5vZGUucHJvcHMgPSBwcm9wcztcbiAgICB9XG4gICAgaWYgKGlzQ2xhc3MpIHtcbiAgICAgICAgdmFyIGluc3RhbmNlID0gY3JlYXRlQ2xhc3NDb21wb25lbnRJbnN0YW5jZSh2Tm9kZSwgdHlwZSwgcHJvcHMsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgLy8gSWYgaW5zdGFuY2UgZG9lcyBub3QgaGF2ZSBjb21wb25lbnRXaWxsVW5tb3VudCBzcGVjaWZpZWQgd2UgY2FuIGVuYWJsZSBmYXN0VW5tb3VudFxuICAgICAgICB2YXIgaW5wdXQgPSBpbnN0YW5jZS5fbGFzdElucHV0O1xuICAgICAgICB2YXIgcHJldkZhc3RVbm1vdW50ID0gbGlmZWN5Y2xlLmZhc3RVbm1vdW50O1xuICAgICAgICAvLyB3ZSBzdG9yZSB0aGUgZmFzdFVubW91bnQgdmFsdWUsIGJ1dCB3ZSBzZXQgaXQgYmFjayB0byB0cnVlIG9uIHRoZSBsaWZlY3ljbGVcbiAgICAgICAgLy8gd2UgZG8gdGhpcyBzbyB3ZSBjYW4gZGV0ZXJtaW5lIGlmIHRoZSBjb21wb25lbnQgcmVuZGVyIGhhcyBhIGZhc3RVbm1vdW50IG9yIG5vdFxuICAgICAgICBsaWZlY3ljbGUuZmFzdFVubW91bnQgPSB0cnVlO1xuICAgICAgICBpbnN0YW5jZS5fdk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgdk5vZGUuZG9tID0gZG9tID0gbW91bnQoaW5wdXQsIG51bGwsIGxpZmVjeWNsZSwgaW5zdGFuY2UuX2NoaWxkQ29udGV4dCwgaXNTVkcpO1xuICAgICAgICAvLyB3ZSBub3cgY3JlYXRlIGEgbGlmZWN5Y2xlIGZvciB0aGlzIGNvbXBvbmVudCBhbmQgc3RvcmUgdGhlIGZhc3RVbm1vdW50IHZhbHVlXG4gICAgICAgIHZhciBzdWJMaWZlY3ljbGUgPSBpbnN0YW5jZS5fbGlmZWN5Y2xlID0gbmV3IExpZmVjeWNsZSgpO1xuICAgICAgICAvLyBjaGlsZHJlbiBsaWZlY3ljbGUgY2FuIGZhc3RVbm1vdW50IGlmIGl0c2VsZiBkb2VzIG5lZWQgdW5tb3VudCBjYWxsYmFjayBhbmQgd2l0aGluIGl0cyBjeWNsZSB0aGVyZSB3YXMgbm9uZVxuICAgICAgICBzdWJMaWZlY3ljbGUuZmFzdFVubW91bnQgPSBpc1VuZGVmaW5lZChpbnN0YW5jZS5jb21wb25lbnRXaWxsVW5tb3VudCkgJiYgbGlmZWN5Y2xlLmZhc3RVbm1vdW50O1xuICAgICAgICAvLyBoaWdoZXIgbGlmZWN5Y2xlIGNhbiBmYXN0VW5tb3VudCBvbmx5IGlmIHByZXZpb3VzbHkgaXQgd2FzIGFibGUgdG8gYW5kIHRoaXMgY2hpbGRyZW4gZG9lc250IGhhdmUgYW55XG4gICAgICAgIGxpZmVjeWNsZS5mYXN0VW5tb3VudCA9IHByZXZGYXN0VW5tb3VudCAmJiBzdWJMaWZlY3ljbGUuZmFzdFVubW91bnQ7XG4gICAgICAgIGlmICghaXNOdWxsKHBhcmVudERvbSkpIHtcbiAgICAgICAgICAgIGFwcGVuZENoaWxkKHBhcmVudERvbSwgZG9tKTtcbiAgICAgICAgfVxuICAgICAgICBtb3VudENsYXNzQ29tcG9uZW50Q2FsbGJhY2tzKHZOb2RlLCByZWYsIGluc3RhbmNlLCBsaWZlY3ljbGUpO1xuICAgICAgICBvcHRpb25zLmZpbmRET01Ob2RlRW5hYmxlZCAmJiBjb21wb25lbnRUb0RPTU5vZGVNYXAuc2V0KGluc3RhbmNlLCBkb20pO1xuICAgICAgICB2Tm9kZS5jaGlsZHJlbiA9IGluc3RhbmNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGlucHV0JDEgPSBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50SW5wdXQodk5vZGUsIHR5cGUsIHByb3BzLCBjb250ZXh0KTtcbiAgICAgICAgdk5vZGUuZG9tID0gZG9tID0gbW91bnQoaW5wdXQkMSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIHZOb2RlLmNoaWxkcmVuID0gaW5wdXQkMTtcbiAgICAgICAgbW91bnRGdW5jdGlvbmFsQ29tcG9uZW50Q2FsbGJhY2tzKHJlZiwgZG9tLCBsaWZlY3ljbGUpO1xuICAgICAgICBpZiAoIWlzTnVsbChwYXJlbnREb20pKSB7XG4gICAgICAgICAgICBhcHBlbmRDaGlsZChwYXJlbnREb20sIGRvbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRvbTtcbn1cbmZ1bmN0aW9uIG1vdW50Q2xhc3NDb21wb25lbnRDYWxsYmFja3Modk5vZGUsIHJlZiwgaW5zdGFuY2UsIGxpZmVjeWNsZSkge1xuICAgIGlmIChyZWYpIHtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24ocmVmKSkge1xuICAgICAgICAgICAgcmVmKGluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nT3JOdW1iZXIocmVmKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKCdzdHJpbmcgXCJyZWZzXCIgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gSW5mZXJubyAxLjAuIFVzZSBjYWxsYmFjayBcInJlZnNcIiBpbnN0ZWFkLicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc09iamVjdChyZWYpICYmICh2Tm9kZS5mbGFncyAmIDQgLyogQ29tcG9uZW50Q2xhc3MgKi8pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93RXJyb3IoJ2Z1bmN0aW9uYWwgY29tcG9uZW50IGxpZmVjeWNsZSBldmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgb24gRVMyMDE1IGNsYXNzIGNvbXBvbmVudHMuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKChcImEgYmFkIHZhbHVlIGZvciBcXFwicmVmXFxcIiB3YXMgdXNlZCBvbiBjb21wb25lbnQ6IFxcXCJcIiArIChKU09OLnN0cmluZ2lmeShyZWYpKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBjRE0gPSBpbnN0YW5jZS5jb21wb25lbnREaWRNb3VudDtcbiAgICB2YXIgYWZ0ZXJNb3VudCA9IG9wdGlvbnMuYWZ0ZXJNb3VudDtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKGNETSkgfHwgIWlzTnVsbChhZnRlck1vdW50KSkge1xuICAgICAgICBsaWZlY3ljbGUuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYWZ0ZXJNb3VudCAmJiBhZnRlck1vdW50KHZOb2RlKTtcbiAgICAgICAgICAgIGNETSAmJiBpbnN0YW5jZS5jb21wb25lbnREaWRNb3VudCgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBtb3VudEZ1bmN0aW9uYWxDb21wb25lbnRDYWxsYmFja3MocmVmLCBkb20sIGxpZmVjeWNsZSkge1xuICAgIGlmIChyZWYpIHtcbiAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKHJlZi5vbkNvbXBvbmVudFdpbGxNb3VudCkpIHtcbiAgICAgICAgICAgIHJlZi5vbkNvbXBvbmVudFdpbGxNb3VudCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNOdWxsT3JVbmRlZihyZWYub25Db21wb25lbnREaWRNb3VudCkpIHtcbiAgICAgICAgICAgIGxpZmVjeWNsZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7IHJldHVybiByZWYub25Db21wb25lbnREaWRNb3VudChkb20pOyB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYocmVmLm9uQ29tcG9uZW50V2lsbFVubW91bnQpKSB7XG4gICAgICAgICAgICBsaWZlY3ljbGUuZmFzdFVubW91bnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIG1vdW50UmVmKGRvbSwgdmFsdWUsIGxpZmVjeWNsZSkge1xuICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgICBsaWZlY3ljbGUuZmFzdFVubW91bnQgPSBmYWxzZTtcbiAgICAgICAgbGlmZWN5Y2xlLmFkZExpc3RlbmVyKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZhbHVlKGRvbSk7IH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGlzSW52YWxpZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3dFcnJvcignc3RyaW5nIFwicmVmc1wiIGFyZSBub3Qgc3VwcG9ydGVkIGluIEluZmVybm8gMS4wLiBVc2UgY2FsbGJhY2sgXCJyZWZzXCIgaW5zdGVhZC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVDaGlsZE5vZGVzKHBhcmVudERvbSkge1xuICAgIHZhciBkb20gPSBwYXJlbnREb20uZmlyc3RDaGlsZDtcbiAgICB3aGlsZSAoZG9tKSB7XG4gICAgICAgIGlmIChkb20ubm9kZVR5cGUgPT09IDgpIHtcbiAgICAgICAgICAgIGlmIChkb20uZGF0YSA9PT0gJyEnKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgICAgICAgICAgICAgIHBhcmVudERvbS5yZXBsYWNlQ2hpbGQocGxhY2Vob2xkZXIsIGRvbSk7XG4gICAgICAgICAgICAgICAgZG9tID0gZG9tLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGxhc3REb20gPSBkb20ucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgICAgIHBhcmVudERvbS5yZW1vdmVDaGlsZChkb20pO1xuICAgICAgICAgICAgICAgIGRvbSA9IGxhc3REb20gfHwgcGFyZW50RG9tLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkb20gPSBkb20ubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBoeWRyYXRlQ29tcG9uZW50KHZOb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzQ2xhc3MpIHtcbiAgICB2YXIgdHlwZSA9IHZOb2RlLnR5cGU7XG4gICAgdmFyIHByb3BzID0gdk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIHZhciByZWYgPSB2Tm9kZS5yZWY7XG4gICAgdk5vZGUuZG9tID0gZG9tO1xuICAgIGlmIChpc0NsYXNzKSB7XG4gICAgICAgIHZhciBfaXNTVkcgPSBkb20ubmFtZXNwYWNlVVJJID09PSBzdmdOUztcbiAgICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGRlZmF1bHRQcm9wcykpIHtcbiAgICAgICAgICAgIGNvcHlQcm9wc1RvKGRlZmF1bHRQcm9wcywgcHJvcHMpO1xuICAgICAgICAgICAgdk5vZGUucHJvcHMgPSBwcm9wcztcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5zdGFuY2UgPSBjcmVhdGVDbGFzc0NvbXBvbmVudEluc3RhbmNlKHZOb2RlLCB0eXBlLCBwcm9wcywgY29udGV4dCwgX2lzU1ZHKTtcbiAgICAgICAgLy8gSWYgaW5zdGFuY2UgZG9lcyBub3QgaGF2ZSBjb21wb25lbnRXaWxsVW5tb3VudCBzcGVjaWZpZWQgd2UgY2FuIGVuYWJsZSBmYXN0VW5tb3VudFxuICAgICAgICB2YXIgcHJldkZhc3RVbm1vdW50ID0gbGlmZWN5Y2xlLmZhc3RVbm1vdW50O1xuICAgICAgICB2YXIgaW5wdXQgPSBpbnN0YW5jZS5fbGFzdElucHV0O1xuICAgICAgICAvLyB3ZSBzdG9yZSB0aGUgZmFzdFVubW91bnQgdmFsdWUsIGJ1dCB3ZSBzZXQgaXQgYmFjayB0byB0cnVlIG9uIHRoZSBsaWZlY3ljbGVcbiAgICAgICAgLy8gd2UgZG8gdGhpcyBzbyB3ZSBjYW4gZGV0ZXJtaW5lIGlmIHRoZSBjb21wb25lbnQgcmVuZGVyIGhhcyBhIGZhc3RVbm1vdW50IG9yIG5vdFxuICAgICAgICBsaWZlY3ljbGUuZmFzdFVubW91bnQgPSB0cnVlO1xuICAgICAgICBpbnN0YW5jZS5fdkNvbXBvbmVudCA9IHZOb2RlO1xuICAgICAgICBpbnN0YW5jZS5fdk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgaHlkcmF0ZShpbnB1dCwgZG9tLCBsaWZlY3ljbGUsIGluc3RhbmNlLl9jaGlsZENvbnRleHQsIF9pc1NWRyk7XG4gICAgICAgIC8vIHdlIG5vdyBjcmVhdGUgYSBsaWZlY3ljbGUgZm9yIHRoaXMgY29tcG9uZW50IGFuZCBzdG9yZSB0aGUgZmFzdFVubW91bnQgdmFsdWVcbiAgICAgICAgdmFyIHN1YkxpZmVjeWNsZSA9IGluc3RhbmNlLl9saWZlY3ljbGUgPSBuZXcgTGlmZWN5Y2xlKCk7XG4gICAgICAgIC8vIGNoaWxkcmVuIGxpZmVjeWNsZSBjYW4gZmFzdFVubW91bnQgaWYgaXRzZWxmIGRvZXMgbmVlZCB1bm1vdW50IGNhbGxiYWNrIGFuZCB3aXRoaW4gaXRzIGN5Y2xlIHRoZXJlIHdhcyBub25lXG4gICAgICAgIHN1YkxpZmVjeWNsZS5mYXN0VW5tb3VudCA9IGlzVW5kZWZpbmVkKGluc3RhbmNlLmNvbXBvbmVudFdpbGxVbm1vdW50KSAmJiBsaWZlY3ljbGUuZmFzdFVubW91bnQ7XG4gICAgICAgIC8vIGhpZ2hlciBsaWZlY3ljbGUgY2FuIGZhc3RVbm1vdW50IG9ubHkgaWYgcHJldmlvdXNseSBpdCB3YXMgYWJsZSB0byBhbmQgdGhpcyBjaGlsZHJlbiBkb2VzbnQgaGF2ZSBhbnlcbiAgICAgICAgbGlmZWN5Y2xlLmZhc3RVbm1vdW50ID0gcHJldkZhc3RVbm1vdW50ICYmIHN1YkxpZmVjeWNsZS5mYXN0VW5tb3VudDtcbiAgICAgICAgbW91bnRDbGFzc0NvbXBvbmVudENhbGxiYWNrcyh2Tm9kZSwgcmVmLCBpbnN0YW5jZSwgbGlmZWN5Y2xlKTtcbiAgICAgICAgb3B0aW9ucy5maW5kRE9NTm9kZUVuYWJsZWQgJiYgY29tcG9uZW50VG9ET01Ob2RlTWFwLnNldChpbnN0YW5jZSwgZG9tKTtcbiAgICAgICAgdk5vZGUuY2hpbGRyZW4gPSBpbnN0YW5jZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBpbnB1dCQxID0gY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudElucHV0KHZOb2RlLCB0eXBlLCBwcm9wcywgY29udGV4dCk7XG4gICAgICAgIGh5ZHJhdGUoaW5wdXQkMSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgdk5vZGUuY2hpbGRyZW4gPSBpbnB1dCQxO1xuICAgICAgICB2Tm9kZS5kb20gPSBpbnB1dCQxLmRvbTtcbiAgICAgICAgbW91bnRGdW5jdGlvbmFsQ29tcG9uZW50Q2FsbGJhY2tzKHJlZiwgZG9tLCBsaWZlY3ljbGUpO1xuICAgIH1cbiAgICByZXR1cm4gZG9tO1xufVxuZnVuY3Rpb24gaHlkcmF0ZUVsZW1lbnQodk5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIHZhciB0YWcgPSB2Tm9kZS50eXBlO1xuICAgIHZhciBjaGlsZHJlbiA9IHZOb2RlLmNoaWxkcmVuO1xuICAgIHZhciBwcm9wcyA9IHZOb2RlLnByb3BzO1xuICAgIHZhciBldmVudHMgPSB2Tm9kZS5ldmVudHM7XG4gICAgdmFyIGZsYWdzID0gdk5vZGUuZmxhZ3M7XG4gICAgdmFyIHJlZiA9IHZOb2RlLnJlZjtcbiAgICBpZiAoaXNTVkcgfHwgKGZsYWdzICYgMTI4IC8qIFN2Z0VsZW1lbnQgKi8pKSB7XG4gICAgICAgIGlzU1ZHID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGRvbS5ub2RlVHlwZSAhPT0gMSB8fCBkb20udGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSB0YWcpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHdhcm5pbmcoJ0luZmVybm8gaHlkcmF0aW9uOiBTZXJ2ZXItc2lkZSBtYXJrdXAgZG9lc25cXCd0IG1hdGNoIGNsaWVudC1zaWRlIG1hcmt1cCBvciBJbml0aWFsIHJlbmRlciB0YXJnZXQgaXMgbm90IGVtcHR5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5ld0RvbSA9IG1vdW50RWxlbWVudCh2Tm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIHZOb2RlLmRvbSA9IG5ld0RvbTtcbiAgICAgICAgcmVwbGFjZUNoaWxkKGRvbS5wYXJlbnROb2RlLCBuZXdEb20sIGRvbSk7XG4gICAgICAgIHJldHVybiBuZXdEb207XG4gICAgfVxuICAgIHZOb2RlLmRvbSA9IGRvbTtcbiAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgaHlkcmF0ZUNoaWxkcmVuKGNoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgIH1cbiAgICB2YXIgaGFzQ29udHJvbGxlZFZhbHVlID0gZmFsc2U7XG4gICAgaWYgKCEoZmxhZ3MgJiAyIC8qIEh0bWxFbGVtZW50ICovKSkge1xuICAgICAgICBoYXNDb250cm9sbGVkVmFsdWUgPSBwcm9jZXNzRWxlbWVudChmbGFncywgdk5vZGUsIGRvbSk7XG4gICAgfVxuICAgIGlmIChwcm9wcykge1xuICAgICAgICBmb3IgKHZhciBwcm9wIGluIHByb3BzKSB7XG4gICAgICAgICAgICBwYXRjaFByb3AocHJvcCwgbnVsbCwgcHJvcHNbcHJvcF0sIGRvbSwgaXNTVkcsIGhhc0NvbnRyb2xsZWRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGV2ZW50cykge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIGV2ZW50cykge1xuICAgICAgICAgICAgcGF0Y2hFdmVudChuYW1lLCBudWxsLCBldmVudHNbbmFtZV0sIGRvbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJlZikge1xuICAgICAgICBtb3VudFJlZihkb20sIHJlZiwgbGlmZWN5Y2xlKTtcbiAgICB9XG4gICAgcmV0dXJuIGRvbTtcbn1cbmZ1bmN0aW9uIGh5ZHJhdGVDaGlsZHJlbihjaGlsZHJlbiwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSB7XG4gICAgbm9ybWFsaXplQ2hpbGROb2RlcyhwYXJlbnREb20pO1xuICAgIHZhciBkb20gPSBwYXJlbnREb20uZmlyc3RDaGlsZDtcbiAgICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAoIWlzTnVsbChjaGlsZCkgJiYgaXNPYmplY3QoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvbSkge1xuICAgICAgICAgICAgICAgICAgICBkb20gPSBoeWRyYXRlKGNoaWxkLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICAgICAgICAgICAgICBkb20gPSBkb20ubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtb3VudChjaGlsZCwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNTdHJpbmdPck51bWJlcihjaGlsZHJlbikpIHtcbiAgICAgICAgaWYgKGRvbSAmJiBkb20ubm9kZVR5cGUgPT09IDMpIHtcbiAgICAgICAgICAgIGlmIChkb20ubm9kZVZhbHVlICE9PSBjaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGRvbS5ub2RlVmFsdWUgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgcGFyZW50RG9tLnRleHRDb250ZW50ID0gY2hpbGRyZW47XG4gICAgICAgIH1cbiAgICAgICAgZG9tID0gZG9tLm5leHRTaWJsaW5nO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc09iamVjdChjaGlsZHJlbikpIHtcbiAgICAgICAgaHlkcmF0ZShjaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgZG9tID0gZG9tLm5leHRTaWJsaW5nO1xuICAgIH1cbiAgICAvLyBjbGVhciBhbnkgb3RoZXIgRE9NIG5vZGVzLCB0aGVyZSBzaG91bGQgYmUgb25seSBhIHNpbmdsZSBlbnRyeSBmb3IgdGhlIHJvb3RcbiAgICB3aGlsZSAoZG9tKSB7XG4gICAgICAgIHZhciBuZXh0U2libGluZyA9IGRvbS5uZXh0U2libGluZztcbiAgICAgICAgcGFyZW50RG9tLnJlbW92ZUNoaWxkKGRvbSk7XG4gICAgICAgIGRvbSA9IG5leHRTaWJsaW5nO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGh5ZHJhdGVUZXh0KHZOb2RlLCBkb20pIHtcbiAgICBpZiAoZG9tLm5vZGVUeXBlICE9PSAzKSB7XG4gICAgICAgIHZhciBuZXdEb20gPSBtb3VudFRleHQodk5vZGUsIG51bGwpO1xuICAgICAgICB2Tm9kZS5kb20gPSBuZXdEb207XG4gICAgICAgIHJlcGxhY2VDaGlsZChkb20ucGFyZW50Tm9kZSwgbmV3RG9tLCBkb20pO1xuICAgICAgICByZXR1cm4gbmV3RG9tO1xuICAgIH1cbiAgICB2YXIgdGV4dCA9IHZOb2RlLmNoaWxkcmVuO1xuICAgIGlmIChkb20ubm9kZVZhbHVlICE9PSB0ZXh0KSB7XG4gICAgICAgIGRvbS5ub2RlVmFsdWUgPSB0ZXh0O1xuICAgIH1cbiAgICB2Tm9kZS5kb20gPSBkb207XG4gICAgcmV0dXJuIGRvbTtcbn1cbmZ1bmN0aW9uIGh5ZHJhdGVWb2lkKHZOb2RlLCBkb20pIHtcbiAgICB2Tm9kZS5kb20gPSBkb207XG4gICAgcmV0dXJuIGRvbTtcbn1cbmZ1bmN0aW9uIGh5ZHJhdGUodk5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIHZhciBmbGFncyA9IHZOb2RlLmZsYWdzO1xuICAgIGlmIChmbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICByZXR1cm4gaHlkcmF0ZUNvbXBvbmVudCh2Tm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBmbGFncyAmIDQgLyogQ29tcG9uZW50Q2xhc3MgKi8pO1xuICAgIH1cbiAgICBlbHNlIGlmIChmbGFncyAmIDM5NzAgLyogRWxlbWVudCAqLykge1xuICAgICAgICByZXR1cm4gaHlkcmF0ZUVsZW1lbnQodk5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWdzICYgMSAvKiBUZXh0ICovKSB7XG4gICAgICAgIHJldHVybiBoeWRyYXRlVGV4dCh2Tm9kZSwgZG9tKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxhZ3MgJiA0MDk2IC8qIFZvaWQgKi8pIHtcbiAgICAgICAgcmV0dXJuIGh5ZHJhdGVWb2lkKHZOb2RlLCBkb20pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3IoKFwiaHlkcmF0ZSgpIGV4cGVjdHMgYSB2YWxpZCBWTm9kZSwgaW5zdGVhZCBpdCByZWNlaXZlZCBhbiBvYmplY3Qgd2l0aCB0aGUgdHlwZSBcXFwiXCIgKyAodHlwZW9mIHZOb2RlKSArIFwiXFxcIi5cIikpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IoKTtcbiAgICB9XG59XG5mdW5jdGlvbiBoeWRyYXRlUm9vdChpbnB1dCwgcGFyZW50RG9tLCBsaWZlY3ljbGUpIHtcbiAgICB2YXIgZG9tID0gcGFyZW50RG9tICYmIHBhcmVudERvbS5maXJzdENoaWxkO1xuICAgIGlmIChkb20pIHtcbiAgICAgICAgaHlkcmF0ZShpbnB1dCwgZG9tLCBsaWZlY3ljbGUsIHt9LCBmYWxzZSk7XG4gICAgICAgIGRvbSA9IHBhcmVudERvbS5maXJzdENoaWxkO1xuICAgICAgICAvLyBjbGVhciBhbnkgb3RoZXIgRE9NIG5vZGVzLCB0aGVyZSBzaG91bGQgYmUgb25seSBhIHNpbmdsZSBlbnRyeSBmb3IgdGhlIHJvb3RcbiAgICAgICAgd2hpbGUgKGRvbSA9IGRvbS5uZXh0U2libGluZykge1xuICAgICAgICAgICAgcGFyZW50RG9tLnJlbW92ZUNoaWxkKGRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLy8gcmF0aGVyIHRoYW4gdXNlIGEgTWFwLCBsaWtlIHdlIGRpZCBiZWZvcmUsIHdlIGNhbiB1c2UgYW4gYXJyYXkgaGVyZVxuLy8gZ2l2ZW4gdGhlcmUgc2hvdWxkbid0IGJlIFRIQVQgbWFueSByb290cyBvbiB0aGUgcGFnZSwgdGhlIGRpZmZlcmVuY2Vcbi8vIGluIHBlcmZvcm1hbmNlIGlzIGh1Z2U6IGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNTgwMmE2OTEzMzBhYjA5OTAwYTFhMmRhXG52YXIgcm9vdHMgPSBbXTtcbnZhciBjb21wb25lbnRUb0RPTU5vZGVNYXAgPSBuZXcgTWFwKCk7XG5vcHRpb25zLnJvb3RzID0gcm9vdHM7XG5mdW5jdGlvbiBmaW5kRE9NTm9kZShyZWYpIHtcbiAgICBpZiAoIW9wdGlvbnMuZmluZERPTU5vZGVFbmFibGVkKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKCdmaW5kRE9NTm9kZSgpIGhhcyBiZWVuIGRpc2FibGVkLCB1c2UgSW5mZXJuby5vcHRpb25zLmZpbmRET01Ob2RlRW5hYmxlZCA9IHRydWU7IGVuYWJsZWQgZmluZERPTU5vZGUoKS4gV2FybmluZyB0aGlzIGNhbiBzaWduaWZpY2FudGx5IGltcGFjdCBwZXJmb3JtYW5jZSEnKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxuICAgIHZhciBkb20gPSByZWYgJiYgcmVmLm5vZGVUeXBlID8gcmVmIDogbnVsbDtcbiAgICByZXR1cm4gY29tcG9uZW50VG9ET01Ob2RlTWFwLmdldChyZWYpIHx8IGRvbTtcbn1cbmZ1bmN0aW9uIGdldFJvb3QoZG9tKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb290cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcm9vdCA9IHJvb3RzW2ldO1xuICAgICAgICBpZiAocm9vdC5kb20gPT09IGRvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBzZXRSb290KGRvbSwgaW5wdXQsIGxpZmVjeWNsZSkge1xuICAgIHZhciByb290ID0ge1xuICAgICAgICBkb206IGRvbSxcbiAgICAgICAgaW5wdXQ6IGlucHV0LFxuICAgICAgICBsaWZlY3ljbGU6IGxpZmVjeWNsZVxuICAgIH07XG4gICAgcm9vdHMucHVzaChyb290KTtcbiAgICByZXR1cm4gcm9vdDtcbn1cbmZ1bmN0aW9uIHJlbW92ZVJvb3Qocm9vdCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm9vdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHJvb3RzW2ldID09PSByb290KSB7XG4gICAgICAgICAgICByb290cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG59XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChpc0Jyb3dzZXIgJiYgZG9jdW1lbnQuYm9keSA9PT0gbnVsbCkge1xuICAgICAgICB3YXJuaW5nKCdJbmZlcm5vIHdhcm5pbmc6IHlvdSBjYW5ub3QgaW5pdGlhbGl6ZSBpbmZlcm5vIHdpdGhvdXQgXCJkb2N1bWVudC5ib2R5XCIuIFdhaXQgb24gXCJET01Db250ZW50TG9hZGVkXCIgZXZlbnQsIGFkZCBzY3JpcHQgdG8gYm90dG9tIG9mIGJvZHksIG9yIHVzZSBhc3luYy9kZWZlciBhdHRyaWJ1dGVzIG9uIHNjcmlwdCB0YWcuJyk7XG4gICAgfVxufVxudmFyIGRvY3VtZW50Qm9keSA9IGlzQnJvd3NlciA/IGRvY3VtZW50LmJvZHkgOiBudWxsO1xuZnVuY3Rpb24gcmVuZGVyKGlucHV0LCBwYXJlbnREb20pIHtcbiAgICBpZiAoZG9jdW1lbnRCb2R5ID09PSBwYXJlbnREb20pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3IoJ3lvdSBjYW5ub3QgcmVuZGVyKCkgdG8gdGhlIFwiZG9jdW1lbnQuYm9keVwiLiBVc2UgYW4gZW1wdHkgZWxlbWVudCBhcyBhIGNvbnRhaW5lciBpbnN0ZWFkLicpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IoKTtcbiAgICB9XG4gICAgaWYgKGlucHV0ID09PSBOT19PUCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciByb290ID0gZ2V0Um9vdChwYXJlbnREb20pO1xuICAgIGlmIChpc051bGwocm9vdCkpIHtcbiAgICAgICAgdmFyIGxpZmVjeWNsZSA9IG5ldyBMaWZlY3ljbGUoKTtcbiAgICAgICAgaWYgKCFpc0ludmFsaWQoaW5wdXQpKSB7XG4gICAgICAgICAgICBpZiAoaW5wdXQuZG9tKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBjbG9uZVZOb2RlKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaHlkcmF0ZVJvb3QoaW5wdXQsIHBhcmVudERvbSwgbGlmZWN5Y2xlKSkge1xuICAgICAgICAgICAgICAgIG1vdW50KGlucHV0LCBwYXJlbnREb20sIGxpZmVjeWNsZSwge30sIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJvb3QgPSBzZXRSb290KHBhcmVudERvbSwgaW5wdXQsIGxpZmVjeWNsZSk7XG4gICAgICAgICAgICBsaWZlY3ljbGUudHJpZ2dlcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgbGlmZWN5Y2xlJDEgPSByb290LmxpZmVjeWNsZTtcbiAgICAgICAgbGlmZWN5Y2xlJDEubGlzdGVuZXJzID0gW107XG4gICAgICAgIGlmIChpc051bGxPclVuZGVmKGlucHV0KSkge1xuICAgICAgICAgICAgdW5tb3VudChyb290LmlucHV0LCBwYXJlbnREb20sIGxpZmVjeWNsZSQxLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgcmVtb3ZlUm9vdChyb290KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpbnB1dC5kb20pIHtcbiAgICAgICAgICAgICAgICBpbnB1dCA9IGNsb25lVk5vZGUoaW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGF0Y2gocm9vdC5pbnB1dCwgaW5wdXQsIHBhcmVudERvbSwgbGlmZWN5Y2xlJDEsIHt9LCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGxpZmVjeWNsZSQxLnRyaWdnZXIoKTtcbiAgICAgICAgcm9vdC5pbnB1dCA9IGlucHV0O1xuICAgIH1cbiAgICBpZiAocm9vdCkge1xuICAgICAgICB2YXIgcm9vdElucHV0ID0gcm9vdC5pbnB1dDtcbiAgICAgICAgaWYgKHJvb3RJbnB1dCAmJiAocm9vdElucHV0LmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJvb3RJbnB1dC5jaGlsZHJlbjtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZVJlbmRlcmVyKF9wYXJlbnREb20pIHtcbiAgICB2YXIgcGFyZW50RG9tID0gX3BhcmVudERvbSB8fCBudWxsO1xuICAgIHJldHVybiBmdW5jdGlvbiByZW5kZXJlcihsYXN0SW5wdXQsIG5leHRJbnB1dCkge1xuICAgICAgICBpZiAoIXBhcmVudERvbSkge1xuICAgICAgICAgICAgcGFyZW50RG9tID0gbGFzdElucHV0O1xuICAgICAgICB9XG4gICAgICAgIHJlbmRlcihuZXh0SW5wdXQsIHBhcmVudERvbSk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbGlua0V2ZW50KGRhdGEsIGV2ZW50KSB7XG4gICAgcmV0dXJuIHsgZGF0YTogZGF0YSwgZXZlbnQ6IGV2ZW50IH07XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG5cdE9iamVjdC5mcmVlemUoRU1QVFlfT0JKKTtcblx0dmFyIHRlc3RGdW5jID0gZnVuY3Rpb24gdGVzdEZuKCkge307XG5cdGlmICgodGVzdEZ1bmMubmFtZSB8fCB0ZXN0RnVuYy50b1N0cmluZygpKS5pbmRleE9mKCd0ZXN0Rm4nKSA9PT0gLTEpIHtcblx0XHR3YXJuaW5nKCgnSXQgbG9va3MgbGlrZSB5b3VcXCdyZSB1c2luZyBhIG1pbmlmaWVkIGNvcHkgb2YgdGhlIGRldmVsb3BtZW50IGJ1aWxkICcgK1xuXHRcdFx0XHQnb2YgSW5mZXJuby4gV2hlbiBkZXBsb3lpbmcgSW5mZXJubyBhcHBzIHRvIHByb2R1Y3Rpb24sIG1ha2Ugc3VyZSB0byB1c2UgJyArXG5cdFx0XHRcdCd0aGUgcHJvZHVjdGlvbiBidWlsZCB3aGljaCBza2lwcyBkZXZlbG9wbWVudCB3YXJuaW5ncyBhbmQgaXMgZmFzdGVyLiAnICtcblx0XHRcdFx0J1NlZSBodHRwOi8vaW5mZXJub2pzLm9yZyBmb3IgbW9yZSBkZXRhaWxzLidcblx0XHQpKTtcblx0fVxufVxuXG4vLyBUaGlzIHdpbGwgYmUgcmVwbGFjZWQgYnkgcm9sbHVwXG52YXIgdmVyc2lvbiA9ICcxLjIuMic7XG5cbi8vIHdlIGR1cGxpY2F0ZSBpdCBzbyBpdCBwbGF5cyBuaWNlbHkgd2l0aCBkaWZmZXJlbnQgbW9kdWxlIGxvYWRpbmcgc3lzdGVtc1xudmFyIGluZGV4ID0ge1xuXHRsaW5rRXZlbnQ6IGxpbmtFdmVudCxcblx0Ly8gY29yZSBzaGFwZXNcblx0Y3JlYXRlVk5vZGU6IGNyZWF0ZVZOb2RlLFxuXG5cdC8vIGNsb25pbmdcblx0Y2xvbmVWTm9kZTogY2xvbmVWTm9kZSxcblxuXHQvLyB1c2VkIHRvIHNoYXJlZCBjb21tb24gaXRlbXMgYmV0d2VlbiBJbmZlcm5vIGxpYnNcblx0Tk9fT1A6IE5PX09QLFxuXHRFTVBUWV9PQko6IEVNUFRZX09CSixcblxuXHQvLyBET01cblx0cmVuZGVyOiByZW5kZXIsXG5cdGZpbmRET01Ob2RlOiBmaW5kRE9NTm9kZSxcblx0Y3JlYXRlUmVuZGVyZXI6IGNyZWF0ZVJlbmRlcmVyLFxuXHRvcHRpb25zOiBvcHRpb25zLFxuXHR2ZXJzaW9uOiB2ZXJzaW9uXG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBpbmRleDtcbmV4cG9ydHMubGlua0V2ZW50ID0gbGlua0V2ZW50O1xuZXhwb3J0cy5jcmVhdGVWTm9kZSA9IGNyZWF0ZVZOb2RlO1xuZXhwb3J0cy5jbG9uZVZOb2RlID0gY2xvbmVWTm9kZTtcbmV4cG9ydHMuTk9fT1AgPSBOT19PUDtcbmV4cG9ydHMuRU1QVFlfT0JKID0gRU1QVFlfT0JKO1xuZXhwb3J0cy5yZW5kZXIgPSByZW5kZXI7XG5leHBvcnRzLmZpbmRET01Ob2RlID0gZmluZERPTU5vZGU7XG5leHBvcnRzLmNyZWF0ZVJlbmRlcmVyID0gY3JlYXRlUmVuZGVyZXI7XG5leHBvcnRzLm9wdGlvbnMgPSBvcHRpb25zO1xuZXhwb3J0cy52ZXJzaW9uID0gdmVyc2lvbjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxufSkpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pbmZlcm5vL2Rpc3QvaW5mZXJuby5ub2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgSW5mZXJubyBmcm9tICdpbmZlcm5vJztcclxuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnaW5mZXJuby1jcmVhdGUtZWxlbWVudCc7XHJcbmltcG9ydCBIZWFkZXJEZW1vIGZyb20gJy4vSGVhZGVyRGVtby5qcyc7XHJcbmltcG9ydCBMaXN0RGVtbyBmcm9tICcuL0xpc3REZW1vLmpzJztcclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYXBwJyk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IChcclxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgIDxIZWFkZXJEZW1vIC8+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogMzAgfX0+PC9kaXY+XHJcbiAgICAgICAgPExpc3REZW1vIC8+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcbkluZmVybm8ucmVuZGVyKDxBcHAgLz4sIGNvbnRhaW5lcik7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=