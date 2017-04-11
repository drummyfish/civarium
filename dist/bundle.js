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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ;
    class Sprite {
        constructor(params) {
            this.name = params.name;
            this.id = params.id;
            this._x = params.x;
            this._y = params.y;
            this._animations = {};
            this._animation = null;
            this._frame = null;
            this._velocity = { x: 0, y: 0 };
            for (const animation of params.animations) {
                this._animations[animation.name] = animation;
            }
        }
        get animation() { return this._animation; }
        setVelocity(x, y) {
            this._velocity = { x, y };
        }
        move(x, y) {
            this._x += x;
            this._y += y;
        }
        setFrame(frame) {
            this._frame = frame;
        }
        setAnimation(name) {
            if (name in this._animations) {
                this._animation = this._animations[name];
                this._animation.reset();
                this._animation.resume();
            }
            else {
                throw new Error(`invalid animation "${name}"`);
            }
        }
        step() {
            this.move(this._velocity.x, this._velocity.y);
            if (this._animation) {
                this._frame = this._animation.next();
            }
        }
        draw(canvas, offsx = 0, offsy = 0) {
            if (this._frame) {
                this._frame.drawTo(canvas, this._x + offsx, this._y + offsy);
            }
        }
    }
    exports.Sprite = Sprite;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(8), __webpack_require__(4), __webpack_require__(2), __webpack_require__(0), __webpack_require__(3), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, TileGrid_1, Keyboard_1, Animation_1, Sprite_1, AssetLibrary_1, assets) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class App {
        constructor() {
            this._assets = new AssetLibrary_1.AssetLibrary();
            this.keyboard = new Keyboard_1.Keyboard();
        }
        start(context, width, height) {
            return __awaiter(this, void 0, void 0, function* () {
                yield this._assets.preload(assets);
                const woman = new Sprite_1.Sprite({
                    name: 'woman',
                    id: 'woman1',
                    x: 300,
                    y: 200,
                    animations: [
                        new Animation_1.Animation({
                            name: 'walking-north',
                            sheet: yield this._assets.fetch('woman-walking-north'),
                            cells: [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]],
                            loop: true,
                        }),
                        new Animation_1.Animation({
                            name: 'walking-east',
                            sheet: yield this._assets.fetch('woman-walking-east'),
                            cells: [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]],
                            loop: true,
                        }),
                        new Animation_1.Animation({
                            name: 'walking-south',
                            sheet: yield this._assets.fetch('woman-walking-south'),
                            cells: [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]],
                            loop: true,
                        }),
                        new Animation_1.Animation({
                            name: 'walking-west',
                            sheet: yield this._assets.fetch('woman-walking-west'),
                            cells: [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]],
                            loop: true,
                        }),
                    ],
                });
                const man = new Sprite_1.Sprite({
                    name: 'man',
                    id: 'man1',
                    x: 500,
                    y: 130,
                    animations: [
                        new Animation_1.Animation({
                            name: 'walking-north',
                            sheet: yield this._assets.fetch('man-walking-north'),
                            cells: [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]],
                            loop: true,
                        }),
                        new Animation_1.Animation({
                            name: 'walking-east',
                            sheet: yield this._assets.fetch('man-walking-east'),
                            cells: [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]],
                            loop: true,
                        }),
                        new Animation_1.Animation({
                            name: 'walking-south',
                            sheet: yield this._assets.fetch('man-walking-south'),
                            cells: [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]],
                            loop: true,
                        }),
                        new Animation_1.Animation({
                            name: 'walking-west',
                            sheet: yield this._assets.fetch('man-walking-west'),
                            cells: [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]],
                            loop: true,
                        }),
                    ],
                });
                const grid = new TileGrid_1.TileGrid(yield this._assets.fetch('tiles'), Math.floor(window.innerWidth / 2), Math.floor(-window.innerHeight), 50, 50);
                woman.setFrame((yield this._assets.fetch('woman-walking-east')).get(0, 0));
                man.setFrame((yield this._assets.fetch('man-walking-south')).get(0, 0));
                this.keyboard.onPress(0x41, () => {
                });
                this.keyboard.onPress(Keyboard_1.Keyboard.ARROW_UP, () => {
                    woman.setVelocity(2, -1);
                    woman.setAnimation('walking-north');
                });
                this.keyboard.onPress(Keyboard_1.Keyboard.ARROW_RIGHT, () => {
                    woman.setVelocity(2, 1);
                    woman.setAnimation('walking-east');
                });
                this.keyboard.onPress(Keyboard_1.Keyboard.ARROW_DOWN, () => {
                    woman.setVelocity(-2, 1);
                    woman.setAnimation('walking-south');
                });
                this.keyboard.onPress(Keyboard_1.Keyboard.ARROW_LEFT, () => {
                    woman.setVelocity(-2, -1);
                    woman.setAnimation('walking-west');
                });
                this.keyboard.onPress(Keyboard_1.Keyboard.SPACE, () => {
                    woman.setVelocity(0, 0);
                    woman.animation.reset();
                    woman.animation.pause();
                });
                setInterval(() => {
                    context.clearRect(0, 0, width, height);
                    grid.draw(context);
                    woman.step();
                    woman.draw(context);
                    man.draw(context);
                }, 1000 / 10);
            });
        }
    }
    exports.App = App;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ;
    class Animation {
        constructor(params) {
            this.name = params.name;
            this._cells = params.cells.map(c => params.sheet.get(c[0], c[1]));
            this._loop = params.loop;
            this._index = 0;
            this._paused = false;
        }
        pause() {
            this._paused = true;
        }
        resume() {
            this._paused = false;
        }
        reset() {
            this._index = 0;
        }
        next() {
            const cell = this._cells[this._index];
            if (!this._paused) {
                this._index += 1;
                if (this._index >= this._cells.length) {
                    if (this._loop) {
                        this._index = 0;
                    }
                    else {
                        this._index = this._cells.length - 1;
                    }
                }
            }
            return cell;
        }
    }
    exports.Animation = Animation;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, SpriteSheet_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ;
    class AssetLibrary {
        constructor() {
            this._assets = {};
            this._awaiting = {};
        }
        preload(reqs) {
            return Promise.all(reqs.map(req => this.load(req)));
        }
        fetch(name) {
            if (name in this._assets) {
                return Promise.resolve(this._assets[name]);
            }
            else if (name in this._awaiting) {
                return this._awaiting[name];
            }
            else {
                throw new Error(`asset "${name}" not found`);
            }
        }
        load(req) {
            switch (req.type) {
                case 'spritesheet':
                    const promise = new Promise((resolve, reject) => {
                        const img = new Image();
                        img.onerror = () => reject(new Error(`image "${req.path}" failed to load`));
                        img.onload = () => {
                            resolve(new SpriteSheet_1.SpriteSheet(req.name, img, req.cell_width, req.cell_height));
                        };
                        img.src = req.path;
                    });
                    this._awaiting[req.name] = promise;
                    return promise;
                default:
                    throw new Error(`invalid asset type "${req.type}"`);
            }
        }
    }
    exports.AssetLibrary = AssetLibrary;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Keyboard {
        constructor() {
            this._handlers = new Map();
        }
        onPress(key, callback) {
            this._handlers.set(key, callback);
        }
        bind(doc) {
            doc.onkeydown = (e) => {
                console.log('pressed', e.which);
                const key = e.which;
                const callback = this._handlers.get(key);
                if (callback) {
                    callback();
                }
            };
        }
    }
    Keyboard.ARROW_LEFT = 37;
    Keyboard.ARROW_UP = 38;
    Keyboard.ARROW_RIGHT = 39;
    Keyboard.ARROW_DOWN = 40;
    Keyboard.SPACE = 32;
    exports.Keyboard = Keyboard;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, SpriteSheetCell_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SpriteSheet {
        constructor(name, img, cell_width, cell_height) {
            this.name = name;
            this._img = img;
            this.cell_width = cell_width;
            this.cell_height = cell_height;
            this.width = img.width / cell_width;
            this.height = img.height / cell_height;
            if (!(Number.isInteger(this.width) && Number.isInteger(this.height))) {
                throw new Error(`sprite sheet "${this.name}" has mismatched dimensions`);
            }
        }
        get(x, y) {
            if (x >= this.width || y >= this.height) {
                throw new Error(`tried to access out-of-bounds sprite ${x}, ${y} from sheet "${this.name}"`);
            }
            return new SpriteSheetCell_1.SpriteSheetCell(this._img, x * this.cell_width, y * this.cell_height, this.cell_width, this.cell_height);
        }
    }
    exports.SpriteSheet = SpriteSheet;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SpriteSheetCell {
        constructor(img, x, y, width, height) {
            this._img = img;
            this._x = x;
            this._y = y;
            this._width = width;
            this._height = height;
        }
        drawTo(canvas, x, y) {
            canvas.drawImage(this._img, this._x, this._y, this._width, this._height, x, y, this._width, this._height);
        }
    }
    exports.SpriteSheetCell = SpriteSheetCell;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, Sprite_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Tile {
        constructor(frame, x, y) {
            this._x = x;
            this._y = y;
            this._sprite = new Sprite_1.Sprite({
                name: 'tile',
                id: `tile-${x}-${y}`,
                x: (x - y) * 40,
                y: (x + y) * 20,
                animations: [],
            });
            this._sprite.setFrame(frame);
        }
        draw(canvas, offsx = 0, offsy = 0) {
            this._sprite.draw(canvas, offsx, offsy);
        }
    }
    exports.Tile = Tile;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, Tile_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TileGrid {
        // tslint:disable-next-line:cyclomatic-complexity
        constructor(sheet, gx, gy, width, height) {
            this.width = width;
            this.height = height;
            this._x = gx;
            this._y = gy;
            this._tiles = [];
            for (let y = 0; y < height; y++) {
                const row = [];
                for (let x = 0; x < width; x++) {
                    let sprite;
                    switch (x) {
                        case 15:
                            sprite = sheet.get(1, 1);
                            break;
                        case 16:
                            sprite = sheet.get(0, 2);
                            break;
                        default:
                            sprite = sheet.get(1, 0);
                    }
                    const tile = new Tile_1.Tile(sprite, x, y);
                    row.push(tile);
                }
                this._tiles.push(row);
            }
        }
        move(x, y) {
            this._x += x;
            this._y += y;
        }
        get(x, y) {
            if (x >= this.width || y >= this.height) {
                throw new Error(`tried to access out-of-bounds cell "${x}, ${y}"`);
            }
            return this._tiles[y][x];
        }
        draw(canvas) {
            for (const row of this._tiles) {
                for (const cell of row) {
                    cell.draw(canvas, this._x, this._y);
                }
            }
        }
    }
    exports.TileGrid = TileGrid;
    ;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, App_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const app = new App_1.App();
    const canvas = document.getElementById('canvas');
    if (canvas instanceof HTMLCanvasElement) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        app.keyboard.bind(document);
        app.start(canvas.getContext('2d'), canvas.width, canvas.height);
    }
    else {
        throw new Error('invalid canvas!');
    }
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = [
	{
		"type": "spritesheet",
		"name": "woman-walking-north",
		"path": "./assets/Woman Walking North.png",
		"cell_width": 20,
		"cell_height": 50
	},
	{
		"type": "spritesheet",
		"name": "woman-walking-east",
		"path": "./assets/Woman Walking East.png",
		"cell_width": 20,
		"cell_height": 50
	},
	{
		"type": "spritesheet",
		"name": "woman-walking-south",
		"path": "./assets/Woman Walking South.png",
		"cell_width": 20,
		"cell_height": 50
	},
	{
		"type": "spritesheet",
		"name": "woman-walking-west",
		"path": "./assets/Woman Walking West.png",
		"cell_width": 20,
		"cell_height": 50
	},
	{
		"type": "spritesheet",
		"name": "tiles",
		"path": "./assets/Tiles.png",
		"cell_width": 78,
		"cell_height": 40
	},
	{
		"type": "spritesheet",
		"name": "man-walking-north",
		"path": "./assets/Man Walking North.png",
		"cell_width": 20,
		"cell_height": 50
	},
	{
		"type": "spritesheet",
		"name": "man-walking-east",
		"path": "./assets/Man Walking East.png",
		"cell_width": 20,
		"cell_height": 50
	},
	{
		"type": "spritesheet",
		"name": "man-walking-south",
		"path": "./assets/Man Walking South.png",
		"cell_width": 20,
		"cell_height": 50
	},
	{
		"type": "spritesheet",
		"name": "man-walking-west",
		"path": "./assets/Man Walking West.png",
		"cell_width": 20,
		"cell_height": 50
	}
];

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map