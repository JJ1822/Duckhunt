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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stage = function () {
  function Stage() {
    _classCallCheck(this, Stage);

    this.img = new Image();
    this.img.src = './app/assets/images/stage/background1.png';
  }

  _createClass(Stage, [{
    key: "draw",
    value: function draw(ctx) {
      // ctx.clearRect(0, 0, Stage.DIM_X, Stage.DIM_Y);
      // ctx.fillStyle = "0xFFFFFF";
      // ctx.fillRect(0, 0, Stage.DIM_X, Stage.DIM_Y);

      var width = window.innerWidth;
      var height = window.innerHeight;

      ctx.drawImage(this.img, 0, 0, width, height);

      // ctx.drawImage(this.imgTree, width * .3, height * .3);
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Stage = __webpack_require__(0);
var Game = __webpack_require__(2);

document.addEventListener("DOMContentLoaded", function () {
  var canvasEl = document.getElementById('canvas');
  document.documentElement.style.cursor = 'crosshair';
  canvasEl.width = window.innerWidth;
  canvasEl.height = window.innerHeight;
  var ctx = canvasEl.getContext("2d");
  // const stage = new Stage;
  // stage.draw(ctx);
  var game = new Game(ctx);
  game.play();
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stage = __webpack_require__(0);
var Duck = __webpack_require__(3);

var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = document.documentElement.scrollHeight;;

window.onresize = function () {
  SCREEN_HEIGHT = canvas.height = document.documentElement.scrollHeight;
  SCREEN_WIDTH = canvas.width = document.body.offsetWidth;
};

var Game = function () {
  function Game(ctx) {
    _classCallCheck(this, Game);

    this.ctx = ctx;
    this.duck = new Duck({ pos: [600, 200], vel: [9, 5], dir: "right" });
    this.duck1 = new Duck({ pos: [1, 200], vel: [12, 7], dir: "right" });
    this.duck2 = new Duck({ pos: [600, 1], vel: [-12, 3], dir: "right" });
    this.duck3 = new Duck({ pos: [600, 100], vel: [0, 0], dir: "right" });
    this.stage = new Stage();
    this.gameStart = false;
    this.points = 0;

    this.mainLoop = this.mainLoop.bind(this);
    this.canvas = document.getElementById('canvas');
    this.handleClick = this.handleClick.bind(this);
    this.canvas.addEventListener("click", this.handleClick);
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

      this.draw();
      requestAnimationFrame(function () {
        _this.mainLoop();
      });
    }
  }, {
    key: "draw",
    value: function draw() {
      var SCREEN_WIDTH = window.innerWidth;
      var SCREEN_HEIGHT = window.innerHeight;
      if (this.points === 300) {
        this.resetGame();
        // this.resetGame();
      }

      if (this.gameStart) {
        this.ctx.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
        this.duck.draw(this.ctx);
        this.duck1.draw(this.ctx);
        this.duck2.draw(this.ctx);
        this.stage.draw(this.ctx);
        this.ctx.font = "40pt Calibri";
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(this.points, SCREEN_WIDTH - 200, SCREEN_HEIGHT - 50);
        // setTimeout(this.resetGame(), 30000);
      } else {
        this.ctx.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
        this.stage.draw(this.ctx);
        this.duck3.draw(this.ctx, 300, 300);
        this.ctx.font = "50pt Calibri";
        this.ctx.fillStyle = 'white';
        this.ctx.fillText("Click the Duck to Start", SCREEN_WIDTH - 1050, SCREEN_HEIGHT - 50);
      }
    }
  }, {
    key: "resetGame",
    value: function resetGame() {
      var _this2 = this;

      setTimeout(function () {
        _this2.duck = new Duck({ pos: [600, 200], vel: [9, 5], dir: "right" });
        _this2.duck1 = new Duck({ pos: [1, 200], vel: [12, 7], dir: "right" });
        _this2.duck2 = new Duck({ pos: [600, 1], vel: [-12, 3], dir: "right" });
        // this.duck3 = new Duck({ pos: [600,100], vel: [0,0], dir: "right" });
        // this.stage = new Stage;
        _this2.gameStart = false;
        _this2.points = 0;
      }, 2000);
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      var x = e.clientX;
      var y = e.clientY;
      var imgHeight = 120;
      var imgWidth = 150;
      var SCREEN_WIDTH = window.innerWidth;
      var SCREEN_HEIGHT = window.innerHeight;

      this.ctx.fillStyle = "white";
      this.ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

      if (x < this.duck.pos[0] + imgWidth && y < this.duck.pos[1] + imgHeight && x > this.duck.pos[0] && y > this.duck.pos[1] && this.gameStart) {
        this.duck.alive = false;
        this.points += 100;
      }
      if (x < this.duck1.pos[0] + imgWidth && y < this.duck1.pos[1] + imgHeight && x > this.duck1.pos[0] && y > this.duck1.pos[1] && this.gameStart) {
        this.duck1.alive = false;
        this.points += 100;
      }
      if (x < this.duck2.pos[0] + imgWidth && y < this.duck2.pos[1] + imgHeight && x > this.duck2.pos[0] && y > this.duck2.pos[1] && this.gameStart) {
        this.duck2.alive = false;
        this.points += 100;
      }
      if (x < this.duck3.pos[0] + 450 && y < this.duck3.pos[1] + 450 && x > this.duck3.pos[0] && y > this.duck3.pos[1]) {
        // this.duck3.alive = true;
        this.gameStart = true;
      }
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
    this.deathCounter = 0;
    this.counter = 0;
    this.img1 = new Image();
    this.img1.src = './app/assets/images/ducks/right0.png';
    this.img2 = new Image();
    this.img2.src = './app/assets/images/ducks/right1.png';
    this.img3 = new Image();
    this.img3.src = './app/assets/images/ducks/right2.png';
    this.leftImg1 = new Image();
    this.leftImg1.src = './app/assets/images/ducks/left0.png';
    this.leftImg2 = new Image();
    this.leftImg2.src = './app/assets/images/ducks/left1.png';
    this.leftImg3 = new Image();
    this.leftImg3.src = './app/assets/images/ducks/left2.png';
    this.shotImg = new Image();
    this.shotImg.src = './app/assets/images/ducks/shot0.png';
    this.deadImg1 = new Image();
    this.deadImg1.src = './app/assets/images/ducks/dead0.png';
    this.deadImg2 = new Image();
    this.deadImg2.src = './app/assets/images/ducks/dead1.png';
    this.deadImg3 = new Image();
    this.deadImg3.src = './app/assets/images/ducks/dead2.png';
  }

  _createClass(Duck, [{
    key: 'draw',
    value: function draw(ctx) {
      var sizeX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 90;
      var sizeY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 90;


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

      var leftimg = {
        0: this.leftImg1,
        1: this.leftImg1,
        2: this.leftImg1,
        3: this.leftImg1,
        4: this.leftImg1,
        5: this.leftImg1,
        6: this.leftImg1,
        7: this.leftImg1,
        8: this.leftImg2,
        9: this.leftImg2,
        10: this.leftImg2,
        11: this.leftImg2,
        12: this.leftImg2,
        13: this.leftImg2,
        14: this.leftImg2,
        15: this.leftImg2,
        16: this.leftImg3,
        17: this.leftImg3,
        18: this.leftImg3,
        19: this.leftImg3,
        20: this.leftImg3,
        21: this.leftImg3,
        22: this.leftImg3,
        23: this.leftImg3
      };

      var deadimg = {
        0: this.deadImg1,
        1: this.deadImg1,
        2: this.deadImg1,
        3: this.deadImg1,
        4: this.deadImg2,
        5: this.deadImg2,
        6: this.deadImg2,
        7: this.deadImg2,
        8: this.deadImg3,
        9: this.deadImg3,
        10: this.deadImg3,
        11: this.deadImg3
      };

      var posx = this.pos[0];
      var posy = this.pos[1];
      // this.img.src = rightimg[this.counter];
      if (!this.alive && this.deathCounter > 10) {
        this.deathCounter += 1;
        ctx.drawImage(deadimg[this.deathCounter % 10], posx, posy, sizeX, sizeY);
      } else if (!this.alive && this.deathCounter < 11) {
        this.deathCounter += 1;
        ctx.drawImage(this.shotImg, posx, posy, sizeX, sizeY);
      }
      if (this.alive && this.vel[0] < 0) {
        ctx.drawImage(leftimg[this.counter], posx, posy, sizeX, sizeY);
      } else if (this.alive) ctx.drawImage(rightimg[this.counter], posx, posy, sizeX, sizeY);
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
      var dx = this.pos[0] + this.vel[0];
      var dy = this.pos[1] + this.vel[1];

      if (!this.alive && this.deathCounter < 11) {
        this.vel = [0, 0];
      } else if (!this.alive && this.deathCounter > 10) {
        this.vel = [0, 5];
      } else if (dx > window.innerWidth - 100 || dx < 0) {
        this.vel[0] = -this.vel[0];
      } else if (dy > window.innerHeight - 150 || dy < 0) {
        this.vel[1] = -this.vel[1];
      }
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