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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_flying_saucer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/flying_saucer */ "./src/scripts/flying_saucer.js");
/* harmony import */ var _scripts_flying_saucer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_flying_saucer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_target__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/target */ "./src/scripts/target.js");
/* harmony import */ var _scripts_target__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_target__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scripts_missile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/missile */ "./src/scripts/missile.js");
/* harmony import */ var _scripts_missile__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_missile__WEBPACK_IMPORTED_MODULE_3__);
 // import { keyDownHandler, keyUpHandler } from './scripts/key_events';




window.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var score = 0;
  var gameOver = false;
  var endDelay = false;
  var rightPressed = false;
  var leftPressed = false;
  var downPressed = false;
  var upPressed = false;
  var spacePressed = false;
  var shiftPressed = false;
  var targets = {
    target1: new _scripts_target__WEBPACK_IMPORTED_MODULE_2___default.a(),
    target2: new _scripts_target__WEBPACK_IMPORTED_MODULE_2___default.a(),
    target3: new _scripts_target__WEBPACK_IMPORTED_MODULE_2___default.a()
  };
  var missiles = {
    missile: new _scripts_missile__WEBPACK_IMPORTED_MODULE_3___default.a()
  };
  var FlyingSaucer = new _scripts_flying_saucer__WEBPACK_IMPORTED_MODULE_1___default.a();
  var flip = 0;
  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

  function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
      rightPressed = true;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
      leftPressed = true;
    } else if (e.key == "Down" || e.key == "ArrowDown") {
      downPressed = true;
    } else if (e.key == "Up" || e.key == "ArrowUp") {
      upPressed = true;
    } else if (e.key == "Spacebar" || e.key == " ") {
      spacePressed = true;
    } else if (e.key == "Shift") {
      shiftPressed = true;
    }
  }

  function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
      rightPressed = false;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
      leftPressed = false;
    } else if (e.key == "Down" || e.key == "ArrowDown") {
      downPressed = false;
    } else if (e.key == "Up" || e.key == "ArrowUp") {
      upPressed = false;
    } else if (e.key == "Spacebar" || e.key == " ") {
      spacePressed = false;
    } else if (e.key == "Shift") {
      shiftPressed = false;
    }
  }

  function drawSaucer(FlyingSaucer) {
    var saucerImage = new Image();
    saucerImage.src = '/Users/kennylozeau/Desktop/Invasion/src/assets/images/saucer.png';
    ctx.beginPath(); // ctx.rect(FlyingSaucer.x, FlyingSaucer.y, FlyingSaucer.width, FlyingSaucer.height);
    // ctx.fillStyle = "#0095DD";
    // ctx.fill();

    ctx.drawImage(saucerImage, FlyingSaucer.x, FlyingSaucer.y);
    ctx.closePath();
  }

  function drawTarget(targets) {
    Object.values(targets).forEach(function (target) {
      ctx.beginPath();
      ctx.rect(target.x, target.y, 10, 10);
      ctx.fillStyle = "#FF0000";
      ctx.fill();
      ctx.closePath();
    });
  }

  function drawBeam(FlyingSaucer) {
    ctx.beginPath();
    ctx.rect(FlyingSaucer.x + FlyingSaucer.width / 2 - 10, FlyingSaucer.y + FlyingSaucer.height, 20, canvas.height - FlyingSaucer.y);
    ctx.fillStyle = "rgba(240, 255, 0, 0.75)";
    ctx.fill();
    ctx.closePath();
  }

  function drawScore() {
    ctx.beginPath();
    ctx.font = "30px Arial";
    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.fillText("Score: ".concat(score), 780, 40);
    ctx.closePath();
  }

  function drawHealth(FlyingSaucer) {
    ctx.beginPath();
    ctx.font = "30px Arial";
    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.fillText("Health: ".concat(FlyingSaucer.health), 780, 80);
    ctx.closePath();
  }

  function drawGameOver() {
    ctx.beginPath();
    ctx.font = "80px Arial";
    ctx.fillStyle = "#FF0000";
    ctx.fillText("GAME OVER", 230, 300);
    ctx.closePath();
  }

  function drawPullUp() {
    ctx.beginPath();
    ctx.font = "80px Arial";
    ctx.fillStyle = "#FF0000";
    ctx.fillText("PULL UP", 305, 200);
    ctx.closePath();
  }

  function drawExplosion(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, 2 * Math.PI);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
  }

  function drawMissile(missiles) {
    var missileImage = new Image();

    if (flip === 0) {
      flip = 1;
      missileImage.src = '/Users/kennylozeau/Desktop/Invasion/src/assets/images/missile.png';
    } else {
      flip = 0;
      missileImage.src = '/Users/kennylozeau/Desktop/Invasion/src/assets/images/missile-flip.png';
    }

    ctx.beginPath(); // ctx.rect(missiles.missile.x, missiles.missile.y, missiles.missile.width, missiles.missile.height)
    // ctx.fillStyle = "gray";
    // ctx.fill();

    ctx.drawImage(missileImage, missiles.missile.x, missiles.missile.y);
    ctx.closePath();
  }

  function checkMissileStrike(FlyingSaucer) {
    if (missiles.missile.x < FlyingSaucer.x + FlyingSaucer.width && missiles.missile.x + missiles.missile.width > FlyingSaucer.x && missiles.missile.y < FlyingSaucer.y + FlyingSaucer.height && missiles.missile.y + missiles.missile.height > FlyingSaucer.y) {
      drawExplosion(missiles.missile.x + missiles.missile.width / 2, missiles.missile.y);
      delete missiles.missile;
      missiles.missile = new _scripts_missile__WEBPACK_IMPORTED_MODULE_3___default.a();
      return true;
    } else {
      return false;
    }
  }

  function checkBeamUp(targets, FlyingSaucer) {
    Object.values(targets).forEach(function (target) {
      if (target.x + 10 > FlyingSaucer.x + FlyingSaucer.width / 2 - 10 && target.x < FlyingSaucer.x + FlyingSaucer.width / 2 + 10) {
        target.y -= 3;

        if (target.y <= FlyingSaucer.y + FlyingSaucer.height) {
          score++;

          for (var key in targets) {
            if (targets[key] === target) {
              delete targets[key];
              targets[key] = new _scripts_target__WEBPACK_IMPORTED_MODULE_2___default.a();
            }
          }
        }
      } else {
        target.y += 5;
        if (target.y > canvas.height - 10) target.y = canvas.height - 10;
      }
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (endDelay) {
      drawGameOver();
      drawScore();
      drawHealth(FlyingSaucer);
      return true;
    }

    drawSaucer(FlyingSaucer);

    if (FlyingSaucer.y + FlyingSaucer.height === canvas.height) {
      drawPullUp();
      FlyingSaucer.health -= 1;
    }

    drawTarget(targets);
    drawScore();
    drawHealth(FlyingSaucer);
    drawMissile(missiles);
    missiles.missile.y += missiles.missile.dy;

    if (missiles.missile.y < -missiles.missile.height) {
      delete missiles.missile;
      missiles.missile = new _scripts_missile__WEBPACK_IMPORTED_MODULE_3___default.a();
    }

    if (checkMissileStrike(FlyingSaucer)) {
      FlyingSaucer.health -= 20;
    }

    if (FlyingSaucer.health <= 0) {
      // drawGameOver();
      FlyingSaucer.health = 0;
      endDelay = true; // return true;
    }

    if (spacePressed) {
      drawBeam(FlyingSaucer);
      checkBeamUp(targets, FlyingSaucer);
    } else {
      Object.values(targets).forEach(function (target) {
        target.y += 5;
        if (target.y > canvas.height - 10) target.y = canvas.height - 10;
      });
    }

    if (shiftPressed) {
      FlyingSaucer.hyperDrive = true;
    } else {
      FlyingSaucer.hyperDrive = false;
    }

    if (rightPressed) {
      if (FlyingSaucer.hyperDrive) {
        FlyingSaucer.x += 12;
      } else {
        FlyingSaucer.x += 6;
      }

      if (FlyingSaucer.x + FlyingSaucer.width > canvas.width) {
        FlyingSaucer.x = canvas.width - FlyingSaucer.width;
      }
    } else if (leftPressed) {
      if (FlyingSaucer.hyperDrive) {
        FlyingSaucer.x -= 12;
      } else {
        FlyingSaucer.x -= 6;
      }

      if (FlyingSaucer.x < 0) {
        FlyingSaucer.x = 0;
      }
    }

    if (upPressed) {
      if (FlyingSaucer.hyperDrive) {
        FlyingSaucer.y -= 12;
      } else {
        FlyingSaucer.y -= 6;
      }

      if (FlyingSaucer.y < 0) {
        FlyingSaucer.y = 0;
      }
    } else if (downPressed) {
      if (FlyingSaucer.hyperDrive) {
        FlyingSaucer.y += 12;
      } else {
        FlyingSaucer.y += 6;
      }

      if (FlyingSaucer.y + FlyingSaucer.height > canvas.height) {
        FlyingSaucer.y = canvas.height - FlyingSaucer.height;
      }
    }

    requestAnimationFrame(draw);
  }

  if (!gameOver) {
    gameOver = draw();
  }
});

/***/ }),

/***/ "./src/scripts/flying_saucer.js":
/*!**************************************!*\
  !*** ./src/scripts/flying_saucer.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FlyingSaucer = function FlyingSaucer() {
  _classCallCheck(this, FlyingSaucer);

  this.height = 20;
  this.width = 80;
  this.x = 0;
  this.y = 0;
  this.hyperDrive = false;
  this.health = 100;
};

module.exports = FlyingSaucer;

/***/ }),

/***/ "./src/scripts/missile.js":
/*!********************************!*\
  !*** ./src/scripts/missile.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Missile = function Missile(FlyingSaucer) {
  _classCallCheck(this, Missile);

  this.x = 40 + Math.floor(Math.random() * 890);
  this.y = 650;
  this.dy = -10;
  this.height = 40;
  this.width = 10;
};

module.exports = Missile;

/***/ }),

/***/ "./src/scripts/target.js":
/*!*******************************!*\
  !*** ./src/scripts/target.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Target = function Target() {
  _classCallCheck(this, Target);

  this.x = 40 + Math.floor(Math.random() * 870);
  this.y = 640;
};

module.exports = Target;

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ZseWluZ19zYXVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWlzc2lsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy90YXJnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5jc3MiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwic2NvcmUiLCJnYW1lT3ZlciIsImVuZERlbGF5IiwicmlnaHRQcmVzc2VkIiwibGVmdFByZXNzZWQiLCJkb3duUHJlc3NlZCIsInVwUHJlc3NlZCIsInNwYWNlUHJlc3NlZCIsInNoaWZ0UHJlc3NlZCIsInRhcmdldHMiLCJ0YXJnZXQxIiwiVGFyZ2V0IiwidGFyZ2V0MiIsInRhcmdldDMiLCJtaXNzaWxlcyIsIm1pc3NpbGUiLCJNaXNzaWxlIiwiRmx5aW5nU2F1Y2VyIiwiU2F1Y2VyIiwiZmxpcCIsImtleURvd25IYW5kbGVyIiwia2V5VXBIYW5kbGVyIiwiZSIsImtleSIsImRyYXdTYXVjZXIiLCJzYXVjZXJJbWFnZSIsIkltYWdlIiwic3JjIiwiYmVnaW5QYXRoIiwiZHJhd0ltYWdlIiwieCIsInkiLCJjbG9zZVBhdGgiLCJkcmF3VGFyZ2V0IiwiT2JqZWN0IiwidmFsdWVzIiwiZm9yRWFjaCIsInRhcmdldCIsInJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsIiwiZHJhd0JlYW0iLCJ3aWR0aCIsImhlaWdodCIsImRyYXdTY29yZSIsImZvbnQiLCJmaWxsVGV4dCIsImRyYXdIZWFsdGgiLCJoZWFsdGgiLCJkcmF3R2FtZU92ZXIiLCJkcmF3UHVsbFVwIiwiZHJhd0V4cGxvc2lvbiIsImFyYyIsIk1hdGgiLCJQSSIsImRyYXdNaXNzaWxlIiwibWlzc2lsZUltYWdlIiwiY2hlY2tNaXNzaWxlU3RyaWtlIiwiY2hlY2tCZWFtVXAiLCJkcmF3IiwiY2xlYXJSZWN0IiwiZHkiLCJoeXBlckRyaXZlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW9kdWxlIiwiZXhwb3J0cyIsImZsb29yIiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUVBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFNO0FBQ2hELE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWY7QUFDQSxNQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBRUEsTUFB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QUFMLENBQVdiLElBQUksQ0FBQ2MsTUFBTCxLQUFnQixHQUEzQixDQUFkO0FBQ0EsT0FBS3BDLENBQUwsR0FBUyxHQUFUO0FBQ0EsT0FBSzhCLEVBQUwsR0FBVSxDQUFDLEVBQVg7QUFDQSxPQUFLbEIsTUFBTCxHQUFjLEVBQWQ7QUFDQSxPQUFLRCxLQUFMLEdBQWEsRUFBYjtBQUNELEM7O0FBR0hzQixNQUFNLENBQUNDLE9BQVAsR0FBaUJqRCxPQUFqQixDOzs7Ozs7Ozs7Ozs7O0lDVk1MLE0sR0FDSixrQkFBYztBQUFBOztBQUNaLE9BQUttQixDQUFMLEdBQVMsS0FBS3VCLElBQUksQ0FBQ2EsS0FBTCxDQUFXYixJQUFJLENBQUNjLE1BQUwsS0FBZ0IsR0FBM0IsQ0FBZDtBQUNBLE9BQUtwQyxDQUFMLEdBQVMsR0FBVDtBQUNELEM7O0FBR0hpQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ0RCxNQUFqQixDOzs7Ozs7Ozs7OztBQ1BBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LmNzc1wiO1xuLy8gaW1wb3J0IHsga2V5RG93bkhhbmRsZXIsIGtleVVwSGFuZGxlciB9IGZyb20gJy4vc2NyaXB0cy9rZXlfZXZlbnRzJztcbmltcG9ydCBTYXVjZXIgZnJvbSAnLi9zY3JpcHRzL2ZseWluZ19zYXVjZXInO1xuaW1wb3J0IFRhcmdldCBmcm9tICcuL3NjcmlwdHMvdGFyZ2V0JztcbmltcG9ydCBNaXNzaWxlIGZyb20gJy4vc2NyaXB0cy9taXNzaWxlJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICBsZXQgc2NvcmUgPSAwO1xuICBsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcbiAgbGV0IGVuZERlbGF5ID0gZmFsc2U7XG5cbiAgbGV0IHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xuICBsZXQgbGVmdFByZXNzZWQgPSBmYWxzZTtcbiAgbGV0IGRvd25QcmVzc2VkID0gZmFsc2U7XG4gIGxldCB1cFByZXNzZWQgPSBmYWxzZTtcbiAgbGV0IHNwYWNlUHJlc3NlZCA9IGZhbHNlO1xuICBsZXQgc2hpZnRQcmVzc2VkID0gZmFsc2U7XG5cbiAgbGV0IHRhcmdldHMgPSB7XG4gICAgdGFyZ2V0MTogbmV3IFRhcmdldCxcbiAgICB0YXJnZXQyOiBuZXcgVGFyZ2V0LFxuICAgIHRhcmdldDM6IG5ldyBUYXJnZXRcbiAgfVxuXG4gIGxldCBtaXNzaWxlcyA9IHsgbWlzc2lsZTogbmV3IE1pc3NpbGUgfTtcbiAgbGV0IEZseWluZ1NhdWNlciA9IG5ldyBTYXVjZXI7XG4gIGxldCBmbGlwID0gMDtcbiAgXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd25IYW5kbGVyLCBmYWxzZSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBrZXlVcEhhbmRsZXIsIGZhbHNlKTtcblxuICBmdW5jdGlvbiBrZXlEb3duSGFuZGxlcihlKSB7XG4gICAgaWYgKGUua2V5ID09IFwiUmlnaHRcIiB8fCBlLmtleSA9PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgcmlnaHRQcmVzc2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZS5rZXkgPT0gXCJMZWZ0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgbGVmdFByZXNzZWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlLmtleSA9PSBcIkRvd25cIiB8fCBlLmtleSA9PSBcIkFycm93RG93blwiKSB7XG4gICAgICBkb3duUHJlc3NlZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGUua2V5ID09IFwiVXBcIiB8fCBlLmtleSA9PSBcIkFycm93VXBcIikge1xuICAgICAgdXBQcmVzc2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZS5rZXkgPT0gXCJTcGFjZWJhclwiIHx8IGUua2V5ID09IFwiIFwiKSB7XG4gICAgICBzcGFjZVByZXNzZWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlLmtleSA9PSBcIlNoaWZ0XCIpIHtcbiAgICAgIHNoaWZ0UHJlc3NlZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIFxuICBmdW5jdGlvbiBrZXlVcEhhbmRsZXIoZSkge1xuICAgIGlmIChlLmtleSA9PSBcIlJpZ2h0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgIHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlLmtleSA9PSBcIkxlZnRcIiB8fCBlLmtleSA9PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICBsZWZ0UHJlc3NlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlLmtleSA9PSBcIkRvd25cIiB8fCBlLmtleSA9PSBcIkFycm93RG93blwiKSB7XG4gICAgICBkb3duUHJlc3NlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlLmtleSA9PSBcIlVwXCIgfHwgZS5rZXkgPT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgIHVwUHJlc3NlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlLmtleSA9PSBcIlNwYWNlYmFyXCIgfHwgZS5rZXkgPT0gXCIgXCIpIHtcbiAgICAgIHNwYWNlUHJlc3NlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlLmtleSA9PSBcIlNoaWZ0XCIpIHtcbiAgICAgIHNoaWZ0UHJlc3NlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdTYXVjZXIoRmx5aW5nU2F1Y2VyKSB7XG4gICAgbGV0IHNhdWNlckltYWdlID0gbmV3IEltYWdlO1xuICAgIHNhdWNlckltYWdlLnNyYyA9ICcvVXNlcnMva2Vubnlsb3plYXUvRGVza3RvcC9JbnZhc2lvbi9zcmMvYXNzZXRzL2ltYWdlcy9zYXVjZXIucG5nJztcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgLy8gY3R4LnJlY3QoRmx5aW5nU2F1Y2VyLngsIEZseWluZ1NhdWNlci55LCBGbHlpbmdTYXVjZXIud2lkdGgsIEZseWluZ1NhdWNlci5oZWlnaHQpO1xuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgICAvLyBjdHguZmlsbCgpO1xuICAgIGN0eC5kcmF3SW1hZ2Uoc2F1Y2VySW1hZ2UsIEZseWluZ1NhdWNlci54LCBGbHlpbmdTYXVjZXIueSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhd1RhcmdldCh0YXJnZXRzKSB7XG4gICAgT2JqZWN0LnZhbHVlcyh0YXJnZXRzKS5mb3JFYWNoKCB0YXJnZXQgPT4ge1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LnJlY3QodGFyZ2V0LngsIHRhcmdldC55LCAxMCwgMTApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiI0ZGMDAwMFwiO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZHJhd0JlYW0oRmx5aW5nU2F1Y2VyKSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5yZWN0KEZseWluZ1NhdWNlci54ICsgKEZseWluZ1NhdWNlci53aWR0aCAvIDIpIC0gMTAsIEZseWluZ1NhdWNlci55ICsgRmx5aW5nU2F1Y2VyLmhlaWdodCwgMjAsIGNhbnZhcy5oZWlnaHQgLSBGbHlpbmdTYXVjZXIueSk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNDAsIDI1NSwgMCwgMC43NSlcIjtcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTsgIFxuICB9XG5cbiAgZnVuY3Rpb24gZHJhd1Njb3JlKCkge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwgMCwgMCwgMSlcIlxuICAgIGN0eC5maWxsVGV4dChgU2NvcmU6ICR7c2NvcmV9YCwgNzgwLCA0MCk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhd0hlYWx0aChGbHlpbmdTYXVjZXIpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsIDAsIDAsIDEpXCJcbiAgICBjdHguZmlsbFRleHQoYEhlYWx0aDogJHtGbHlpbmdTYXVjZXIuaGVhbHRofWAsIDc4MCwgODApO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdHYW1lT3ZlcigpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmZvbnQgPSBcIjgwcHggQXJpYWxcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjRkYwMDAwXCJcbiAgICBjdHguZmlsbFRleHQoXCJHQU1FIE9WRVJcIiwgMjMwLCAzMDApO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdQdWxsVXAoKSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5mb250ID0gXCI4MHB4IEFyaWFsXCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI0ZGMDAwMFwiXG4gICAgY3R4LmZpbGxUZXh0KFwiUFVMTCBVUFwiLCAzMDUsIDIwMCk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhd0V4cGxvc2lvbih4LCB5KSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoeCwgeSwgMjUsIDAsIDIgKiBNYXRoLlBJKVxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNGRjAwMDBcIlxuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhd01pc3NpbGUobWlzc2lsZXMpIHtcbiAgICBsZXQgbWlzc2lsZUltYWdlID0gbmV3IEltYWdlO1xuICAgIGlmIChmbGlwID09PSAwKSB7XG4gICAgICBmbGlwID0gMTtcbiAgICAgIG1pc3NpbGVJbWFnZS5zcmMgPSAnL1VzZXJzL2tlbm55bG96ZWF1L0Rlc2t0b3AvSW52YXNpb24vc3JjL2Fzc2V0cy9pbWFnZXMvbWlzc2lsZS5wbmcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbGlwID0gMDtcbiAgICAgIG1pc3NpbGVJbWFnZS5zcmMgPSAnL1VzZXJzL2tlbm55bG96ZWF1L0Rlc2t0b3AvSW52YXNpb24vc3JjL2Fzc2V0cy9pbWFnZXMvbWlzc2lsZS1mbGlwLnBuZyc7XG4gICAgfVxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyBjdHgucmVjdChtaXNzaWxlcy5taXNzaWxlLngsIG1pc3NpbGVzLm1pc3NpbGUueSwgbWlzc2lsZXMubWlzc2lsZS53aWR0aCwgbWlzc2lsZXMubWlzc2lsZS5oZWlnaHQpXG4gICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwiZ3JheVwiO1xuICAgIC8vIGN0eC5maWxsKCk7XG4gICAgY3R4LmRyYXdJbWFnZShtaXNzaWxlSW1hZ2UsIG1pc3NpbGVzLm1pc3NpbGUueCwgbWlzc2lsZXMubWlzc2lsZS55KTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja01pc3NpbGVTdHJpa2UoRmx5aW5nU2F1Y2VyKSB7XG4gICAgaWYgKG1pc3NpbGVzLm1pc3NpbGUueCA8IEZseWluZ1NhdWNlci54ICsgRmx5aW5nU2F1Y2VyLndpZHRoICYmXG4gICAgICAgIG1pc3NpbGVzLm1pc3NpbGUueCArIG1pc3NpbGVzLm1pc3NpbGUud2lkdGggPiBGbHlpbmdTYXVjZXIueCAmJlxuICAgICAgICBtaXNzaWxlcy5taXNzaWxlLnkgPCBGbHlpbmdTYXVjZXIueSArIEZseWluZ1NhdWNlci5oZWlnaHQgJiZcbiAgICAgICAgbWlzc2lsZXMubWlzc2lsZS55ICsgbWlzc2lsZXMubWlzc2lsZS5oZWlnaHQgPiBGbHlpbmdTYXVjZXIueVxuICAgICAgKSB7XG4gICAgICAgIGRyYXdFeHBsb3Npb24obWlzc2lsZXMubWlzc2lsZS54ICsgKG1pc3NpbGVzLm1pc3NpbGUud2lkdGggLyAyKSwgbWlzc2lsZXMubWlzc2lsZS55KVxuICAgICAgICBkZWxldGUgbWlzc2lsZXMubWlzc2lsZTtcbiAgICAgICAgbWlzc2lsZXMubWlzc2lsZSA9IG5ldyBNaXNzaWxlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrQmVhbVVwKHRhcmdldHMsIEZseWluZ1NhdWNlcikge1xuICAgIE9iamVjdC52YWx1ZXModGFyZ2V0cykuZm9yRWFjaCh0YXJnZXQgPT4ge1xuICAgICAgaWYgKHRhcmdldC54ICsgMTAgPiBGbHlpbmdTYXVjZXIueCArIChGbHlpbmdTYXVjZXIud2lkdGggLyAyKSAtIDEwICYmIHRhcmdldC54IDwgRmx5aW5nU2F1Y2VyLnggKyAoRmx5aW5nU2F1Y2VyLndpZHRoIC8gMikgKyAxMCkge1xuICAgICAgICB0YXJnZXQueSAtPSAzO1xuICAgICAgICBpZiAodGFyZ2V0LnkgPD0gRmx5aW5nU2F1Y2VyLnkgKyBGbHlpbmdTYXVjZXIuaGVpZ2h0KSB7XG4gICAgICAgICAgc2NvcmUrKztcbiAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGFyZ2V0cykge1xuICAgICAgICAgICAgaWYgKHRhcmdldHNba2V5XSA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgIGRlbGV0ZSB0YXJnZXRzW2tleV07XG4gICAgICAgICAgICAgIHRhcmdldHNba2V5XSA9IG5ldyBUYXJnZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXQueSArPSA1O1xuICAgICAgICBpZiAodGFyZ2V0LnkgPiBjYW52YXMuaGVpZ2h0IC0gMTApIHRhcmdldC55ID0gY2FudmFzLmhlaWdodCAtIDEwO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBkcmF3KCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAgIGlmIChlbmREZWxheSkge1xuICAgICAgZHJhd0dhbWVPdmVyKCk7XG4gICAgICBkcmF3U2NvcmUoKTtcbiAgICAgIGRyYXdIZWFsdGgoRmx5aW5nU2F1Y2VyKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGRyYXdTYXVjZXIoRmx5aW5nU2F1Y2VyKTtcblxuICAgIGlmIChGbHlpbmdTYXVjZXIueSArIEZseWluZ1NhdWNlci5oZWlnaHQgPT09IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgIGRyYXdQdWxsVXAoKTtcbiAgICAgIEZseWluZ1NhdWNlci5oZWFsdGggLT0gMTtcbiAgICB9XG5cbiAgICBkcmF3VGFyZ2V0KHRhcmdldHMpO1xuICAgIGRyYXdTY29yZSgpO1xuICAgIGRyYXdIZWFsdGgoRmx5aW5nU2F1Y2VyKTtcbiAgICBkcmF3TWlzc2lsZShtaXNzaWxlcyk7XG4gICAgbWlzc2lsZXMubWlzc2lsZS55ICs9IG1pc3NpbGVzLm1pc3NpbGUuZHk7XG4gICAgaWYgKG1pc3NpbGVzLm1pc3NpbGUueSA8IC1taXNzaWxlcy5taXNzaWxlLmhlaWdodCkge1xuICAgICAgZGVsZXRlIG1pc3NpbGVzLm1pc3NpbGU7XG4gICAgICBtaXNzaWxlcy5taXNzaWxlID0gbmV3IE1pc3NpbGU7XG4gICAgfVxuICAgIFxuICAgIGlmIChjaGVja01pc3NpbGVTdHJpa2UoRmx5aW5nU2F1Y2VyKSkge1xuICAgICAgRmx5aW5nU2F1Y2VyLmhlYWx0aCAtPSAyMDtcbiAgICB9XG4gICAgXG4gICAgaWYgKEZseWluZ1NhdWNlci5oZWFsdGggPD0gMCkge1xuICAgICAgLy8gZHJhd0dhbWVPdmVyKCk7XG4gICAgICBGbHlpbmdTYXVjZXIuaGVhbHRoID0gMDtcbiAgICAgIGVuZERlbGF5ID0gdHJ1ZTtcbiAgICAgIC8vIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzcGFjZVByZXNzZWQpIHtcbiAgICAgIGRyYXdCZWFtKEZseWluZ1NhdWNlcik7XG4gICAgICBjaGVja0JlYW1VcCh0YXJnZXRzLCBGbHlpbmdTYXVjZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBPYmplY3QudmFsdWVzKHRhcmdldHMpLmZvckVhY2godGFyZ2V0ID0+IHtcbiAgICAgICAgdGFyZ2V0LnkgKz0gNTtcbiAgICAgICAgaWYgKHRhcmdldC55ID4gY2FudmFzLmhlaWdodCAtIDEwKSB0YXJnZXQueSA9IGNhbnZhcy5oZWlnaHQgLSAxMDtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHNoaWZ0UHJlc3NlZCkge1xuICAgICAgRmx5aW5nU2F1Y2VyLmh5cGVyRHJpdmUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBGbHlpbmdTYXVjZXIuaHlwZXJEcml2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChyaWdodFByZXNzZWQpIHtcbiAgICAgIGlmIChGbHlpbmdTYXVjZXIuaHlwZXJEcml2ZSkge1xuICAgICAgICBGbHlpbmdTYXVjZXIueCArPSAxMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEZseWluZ1NhdWNlci54ICs9IDY7XG4gICAgICB9XG5cbiAgICAgIGlmIChGbHlpbmdTYXVjZXIueCArIEZseWluZ1NhdWNlci53aWR0aCA+IGNhbnZhcy53aWR0aCkge1xuICAgICAgICBGbHlpbmdTYXVjZXIueCA9IGNhbnZhcy53aWR0aCAtIEZseWluZ1NhdWNlci53aWR0aDtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobGVmdFByZXNzZWQpIHtcbiAgICAgIGlmIChGbHlpbmdTYXVjZXIuaHlwZXJEcml2ZSkge1xuICAgICAgICBGbHlpbmdTYXVjZXIueCAtPSAxMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEZseWluZ1NhdWNlci54IC09IDY7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChGbHlpbmdTYXVjZXIueCA8IDApIHtcbiAgICAgICAgRmx5aW5nU2F1Y2VyLnggPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAodXBQcmVzc2VkKSB7XG4gICAgICBpZiAoRmx5aW5nU2F1Y2VyLmh5cGVyRHJpdmUpIHtcbiAgICAgICAgRmx5aW5nU2F1Y2VyLnkgLT0gMTI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBGbHlpbmdTYXVjZXIueSAtPSA2O1xuICAgICAgfVxuXG4gICAgICBpZiAoRmx5aW5nU2F1Y2VyLnkgPCAwKSB7XG4gICAgICAgIEZseWluZ1NhdWNlci55ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZG93blByZXNzZWQpIHtcbiAgICAgIGlmIChGbHlpbmdTYXVjZXIuaHlwZXJEcml2ZSkge1xuICAgICAgICBGbHlpbmdTYXVjZXIueSArPSAxMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEZseWluZ1NhdWNlci55ICs9IDY7XG4gICAgICB9XG5cbiAgICAgIGlmIChGbHlpbmdTYXVjZXIueSArIEZseWluZ1NhdWNlci5oZWlnaHQgPiBjYW52YXMuaGVpZ2h0KSB7XG4gICAgICAgIEZseWluZ1NhdWNlci55ID0gY2FudmFzLmhlaWdodCAtIEZseWluZ1NhdWNlci5oZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcbiAgfVxuXG4gIGlmICghZ2FtZU92ZXIpIHtcbiAgICBnYW1lT3ZlciA9IGRyYXcoKTtcbiAgfVxufSk7XG4iLCJjbGFzcyBGbHlpbmdTYXVjZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmhlaWdodCA9IDIwO1xuICAgIHRoaXMud2lkdGggPSA4MDtcbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG4gICAgdGhpcy5oeXBlckRyaXZlID0gZmFsc2U7XG4gICAgdGhpcy5oZWFsdGggPSAxMDA7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGbHlpbmdTYXVjZXI7IiwiY2xhc3MgTWlzc2lsZSB7XG4gIGNvbnN0cnVjdG9yKEZseWluZ1NhdWNlcikge1xuICAgIHRoaXMueCA9IDQwICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogODkwKTtcbiAgICB0aGlzLnkgPSA2NTA7XG4gICAgdGhpcy5keSA9IC0xMDtcbiAgICB0aGlzLmhlaWdodCA9IDQwO1xuICAgIHRoaXMud2lkdGggPSAxMDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1pc3NpbGU7IiwiY2xhc3MgVGFyZ2V0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy54ID0gNDAgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4NzApO1xuICAgIHRoaXMueSA9IDY0MDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRhcmdldDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9