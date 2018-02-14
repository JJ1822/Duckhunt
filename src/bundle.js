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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Stage = __webpack_require__(1);
var Game = __webpack_require__(2);

document.addEventListener("DOMContentLoaded", function () {
  var canvasEl = document.getElementById('canvas');

  canvasEl.width = 900;
  canvasEl.height = 500;

  var ctx = canvasEl.getContext("2d");
  var stage = new Stage();
  stage.draw(ctx);
  var game = new Game(ctx);
  game.play();
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stage = function () {
  function Stage() {
    _classCallCheck(this, Stage);
  }

  _createClass(Stage, [{
    key: 'draw',
    value: function draw(ctx) {
      // ctx.clearRect(0, 0, Stage.DIM_X, Stage.DIM_Y);
      // ctx.fillStyle = "0xFFFFFF";
      // ctx.fillRect(0, 0, Stage.DIM_X, Stage.DIM_Y);
      var width = 900;
      var height = 500;
      var img2 = new Image();
      img2.src = '/Users/jayjohnson/Desktop/duck_hunt/app/assets/images/stage/tree.png';
      var img = new Image();
      img.src = '/Users/jayjohnson/Desktop/duck_hunt/app/assets/images/stage/background.png';
      img.onload = function () {
        ctx.drawImage(img, 0, 0, width, height);
      };
    }
  }]);

  return Stage;
}();

Stage.BG_COLOR = "0xFFFFFF";
Stage.DIM_X = 1440;
Stage.DIM_Y = 800;
Stage.FPS = 32;

module.exports = Stage;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stage = __webpack_require__(1);
var Duck = __webpack_require__(3);

var fps = void 0,
    fpsInterval = void 0,
    startTime = void 0,
    now = void 0,
    then = void 0,
    elapsed = void 0;

var Game = function () {
  function Game(ctx) {
    _classCallCheck(this, Game);

    this.ctx = ctx;
    this.duck = new Duck({ pos: [1, 1], vel: [1, 1], dir: "right" });
    this.stage = new Stage();

    // this.mainLoop = this.mainLoop.bind(this);
  }

  _createClass(Game, [{
    key: "play",
    value: function play() {
      this.mainLoop();
    }
  }, {
    key: "mainLoop",
    value: function mainLoop() {
      var _this = this;

      // console.log("frame");
      this.draw();
      window.requestAnimationFrame(function () {
        _this.mainLoop();
      });
    }
  }, {
    key: "draw",
    value: function draw() {
      this.ctx.clearRect(0, 0, 900, 500);
      this.duck.draw(this.ctx);
      this.stage.draw(this.ctx);
    }
  }]);

  return Game;
}();

module.exports = Game;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Duck = function () {
  function Duck(options) {
    _classCallCheck(this, Duck);

    this.pos = options.pos;
    this.vel = options.vel;
    this.dir = options.dir;
    this.alive = true;
    this.counter = 0;
    this.img1 = new Image();
    this.img1.src = '../app/assets/images/ducks/right0.png';
    this.img2 = new Image();
    this.img2.src = '../app/assets/images/ducks/right1.png';
    this.img3 = new Image();
    this.img3.src = '../app/assets/images/ducks/right2.png';
    this.img4 = new Image();
    this.img4.src = '../app/assets/images/ducks/right0.png';
    this.img5 = new Image();
    this.img5.src = '../app/assets/images/ducks/right0.png';
    this.img6 = new Image();
    this.img6.src = '../app/assets/images/ducks/right0.png';
  }

  _createClass(Duck, [{
    key: 'draw',
    value: function draw(ctx) {
      this.counter = (this.counter + 1) % 24;
      var rightimg = {
        0: this.img1,
        1: this.img1,
        2: this.img1,
        3: this.img1,
        4: this.img1,
        5: this.img1,
        6: this.img1,
        7: this.img1,
        8: this.img2,
        9: this.img2,
        10: this.img2,
        11: this.img2,
        12: this.img2,
        13: this.img2,
        14: this.img2,
        15: this.img2,
        16: this.img3,
        17: this.img3,
        18: this.img3,
        19: this.img3,
        20: this.img3,
        21: this.img3,
        22: this.img3,
        23: this.img3
      };
      // const leftimg = {
      //   0: '../app/assets/images/ducks/left0.png',
      //   1: '../app/assets/images/ducks/left1.png',
      //   2: '../app/assets/images/ducks/left2.png'
      // };

      var posx = this.pos[0];
      var posy = this.pos[1];
      // this.img.src = rightimg[this.counter];

      ctx.drawImage(rightimg[this.counter], posx, posy);
      // let img = new Image();
      // if( this.dir === 'right' ) {
      //   img.src = rightimg[this.counter];
      // } else {
      //   img.src = leftimg[this.counter];
      // }
      //
      // img.onload = function() {
      //   ctx.drawImage(img, posx, posy);
      // };
      this.move();
    }
  }, {
    key: 'move',
    value: function move() {

      this.pos[0] += this.vel[0];
      this.pos[1] += this.vel[1];
    }
  }]);

  return Duck;
}();

module.exports = Duck;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map