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
/* harmony import */ var _scripts_target__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/target */ "./src/scripts/target.js");
/* harmony import */ var _scripts_target__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_target__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scripts_missile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/missile */ "./src/scripts/missile.js");
/* harmony import */ var _scripts_missile__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_missile__WEBPACK_IMPORTED_MODULE_3__);
 // import { keyDownHandler, keyUpHandler } from './scripts/key_events';




window.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var score = 0;
  var health = 100;
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
  }; // let target = {
  //   x: 50,
  //   y: canvas.height - 10
  // };
  // const saucerHeight = 15;
  // const saucerWidth = 70;
  // let saucerX = 0;
  // let saucerY = 0;
  // let hyperDrive = false;

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

  function drawHealth() {
    ctx.beginPath();
    ctx.font = "30px Arial";
    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.fillText("Health: ".concat(health), 780, 80);
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
    missileImage.src = '/Users/kennylozeau/Desktop/Invasion/src/assets/images/missile.png';
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

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (endDelay) {
      drawGameOver();
      drawScore();
      drawHealth();
      return true;
    }

    var FlyingSaucer = _scripts_flying_saucer__WEBPACK_IMPORTED_MODULE_1__["default"]; // console.log(FlyingSaucer)

    drawSaucer(FlyingSaucer);

    if (FlyingSaucer.y + FlyingSaucer.height === canvas.height) {
      drawPullUp();
      health -= 1;
    }

    drawTarget(targets);
    drawScore();
    drawHealth();
    drawMissile(missiles);
    missiles.missile.y += missiles.missile.dy;

    if (missiles.missile.y < -missiles.missile.height) {
      delete missiles.missile;
      missiles.missile = new _scripts_missile__WEBPACK_IMPORTED_MODULE_3___default.a();
    }

    if (checkMissileStrike(FlyingSaucer)) {
      health -= 20;
    }

    if (health <= 0) {
      // drawGameOver();
      health = 0;
      endDelay = true; // return true;
    }

    if (spacePressed) {
      drawBeam(FlyingSaucer);
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var FlyingSaucer = {
  height: 20,
  width: 80,
  x: 0,
  y: 0,
  hyperDrive: false
}; // function FlyingSaucer = () => {
//   this.height = 15;
//   this.width = 70;
//   this.x = 0;
//   this.y = 0;
//   this.hyperDrive = false;
// }

/* harmony default export */ __webpack_exports__["default"] = (FlyingSaucer);

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
  this.dy = -15;
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

  this.x = 40 + Math.floor(Math.random() * 890);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ZseWluZ19zYXVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWlzc2lsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy90YXJnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5jc3MiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwic2NvcmUiLCJoZWFsdGgiLCJnYW1lT3ZlciIsImVuZERlbGF5IiwicmlnaHRQcmVzc2VkIiwibGVmdFByZXNzZWQiLCJkb3duUHJlc3NlZCIsInVwUHJlc3NlZCIsInNwYWNlUHJlc3NlZCIsInNoaWZ0UHJlc3NlZCIsInRhcmdldHMiLCJ0YXJnZXQxIiwiVGFyZ2V0IiwidGFyZ2V0MiIsInRhcmdldDMiLCJtaXNzaWxlcyIsIm1pc3NpbGUiLCJNaXNzaWxlIiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJlIiwia2V5IiwiZHJhd1NhdWNlciIsIkZseWluZ1NhdWNlciIsInNhdWNlckltYWdlIiwiSW1hZ2UiLCJzcmMiLCJiZWdpblBhdGgiLCJkcmF3SW1hZ2UiLCJ4IiwieSIsImNsb3NlUGF0aCIsImRyYXdUYXJnZXQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwidGFyZ2V0IiwicmVjdCIsImZpbGxTdHlsZSIsImZpbGwiLCJkcmF3QmVhbSIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhd1Njb3JlIiwiZm9udCIsImZpbGxUZXh0IiwiZHJhd0hlYWx0aCIsImRyYXdHYW1lT3ZlciIsImRyYXdQdWxsVXAiLCJkcmF3RXhwbG9zaW9uIiwiYXJjIiwiTWF0aCIsIlBJIiwiZHJhd01pc3NpbGUiLCJtaXNzaWxlSW1hZ2UiLCJjaGVja01pc3NpbGVTdHJpa2UiLCJkcmF3IiwiY2xlYXJSZWN0IiwiU2F1Y2VyIiwiZHkiLCJoeXBlckRyaXZlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZmxvb3IiLCJyYW5kb20iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FDQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsWUFBTTtBQUNoRCxNQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFmO0FBQ0EsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUVBLE1BQUlDLEtBQUssR0FBRyxDQUFaO0FBQ0EsTUFB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UCxHQUFpQnJELE1BQWpCLEM7Ozs7Ozs7Ozs7O0FDUEEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguY3NzXCI7XG4vLyBpbXBvcnQgeyBrZXlEb3duSGFuZGxlciwga2V5VXBIYW5kbGVyIH0gZnJvbSAnLi9zY3JpcHRzL2tleV9ldmVudHMnO1xuaW1wb3J0IFNhdWNlciBmcm9tICcuL3NjcmlwdHMvZmx5aW5nX3NhdWNlcic7XG5pbXBvcnQgVGFyZ2V0IGZyb20gJy4vc2NyaXB0cy90YXJnZXQnO1xuaW1wb3J0IE1pc3NpbGUgZnJvbSAnLi9zY3JpcHRzL21pc3NpbGUnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gIGxldCBzY29yZSA9IDA7XG4gIGxldCBoZWFsdGggPSAxMDA7XG4gIGxldCBnYW1lT3ZlciA9IGZhbHNlO1xuICBsZXQgZW5kRGVsYXkgPSBmYWxzZTtcblxuICBsZXQgcmlnaHRQcmVzc2VkID0gZmFsc2U7XG4gIGxldCBsZWZ0UHJlc3NlZCA9IGZhbHNlO1xuICBsZXQgZG93blByZXNzZWQgPSBmYWxzZTtcbiAgbGV0IHVwUHJlc3NlZCA9IGZhbHNlO1xuICBsZXQgc3BhY2VQcmVzc2VkID0gZmFsc2U7XG4gIGxldCBzaGlmdFByZXNzZWQgPSBmYWxzZTtcblxuICBsZXQgdGFyZ2V0cyA9IHtcbiAgICB0YXJnZXQxOiBuZXcgVGFyZ2V0LFxuICAgIHRhcmdldDI6IG5ldyBUYXJnZXQsXG4gICAgdGFyZ2V0MzogbmV3IFRhcmdldFxuICB9XG5cbiAgbGV0IG1pc3NpbGVzID0geyBtaXNzaWxlOiBuZXcgTWlzc2lsZSB9O1xuXG4gIC8vIGxldCB0YXJnZXQgPSB7XG4gIC8vICAgeDogNTAsXG4gIC8vICAgeTogY2FudmFzLmhlaWdodCAtIDEwXG4gIC8vIH07XG5cbiAgLy8gY29uc3Qgc2F1Y2VySGVpZ2h0ID0gMTU7XG4gIC8vIGNvbnN0IHNhdWNlcldpZHRoID0gNzA7XG4gIC8vIGxldCBzYXVjZXJYID0gMDtcbiAgLy8gbGV0IHNhdWNlclkgPSAwO1xuXG4gIC8vIGxldCBoeXBlckRyaXZlID0gZmFsc2U7XG4gIFxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duSGFuZGxlciwgZmFsc2UpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwga2V5VXBIYW5kbGVyLCBmYWxzZSk7XG5cbiAgZnVuY3Rpb24ga2V5RG93bkhhbmRsZXIoZSkge1xuICAgIGlmIChlLmtleSA9PSBcIlJpZ2h0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgIHJpZ2h0UHJlc3NlZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGUua2V5ID09IFwiTGVmdFwiIHx8IGUua2V5ID09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgIGxlZnRQcmVzc2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZS5rZXkgPT0gXCJEb3duXCIgfHwgZS5rZXkgPT0gXCJBcnJvd0Rvd25cIikge1xuICAgICAgZG93blByZXNzZWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlLmtleSA9PSBcIlVwXCIgfHwgZS5rZXkgPT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgIHVwUHJlc3NlZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGUua2V5ID09IFwiU3BhY2ViYXJcIiB8fCBlLmtleSA9PSBcIiBcIikge1xuICAgICAgc3BhY2VQcmVzc2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZS5rZXkgPT0gXCJTaGlmdFwiKSB7XG4gICAgICBzaGlmdFByZXNzZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBcbiAgZnVuY3Rpb24ga2V5VXBIYW5kbGVyKGUpIHtcbiAgICBpZiAoZS5rZXkgPT0gXCJSaWdodFwiIHx8IGUua2V5ID09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICByaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZS5rZXkgPT0gXCJMZWZ0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgbGVmdFByZXNzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZS5rZXkgPT0gXCJEb3duXCIgfHwgZS5rZXkgPT0gXCJBcnJvd0Rvd25cIikge1xuICAgICAgZG93blByZXNzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZS5rZXkgPT0gXCJVcFwiIHx8IGUua2V5ID09IFwiQXJyb3dVcFwiKSB7XG4gICAgICB1cFByZXNzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZS5rZXkgPT0gXCJTcGFjZWJhclwiIHx8IGUua2V5ID09IFwiIFwiKSB7XG4gICAgICBzcGFjZVByZXNzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZS5rZXkgPT0gXCJTaGlmdFwiKSB7XG4gICAgICBzaGlmdFByZXNzZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3U2F1Y2VyKEZseWluZ1NhdWNlcikge1xuICAgIGxldCBzYXVjZXJJbWFnZSA9IG5ldyBJbWFnZTtcbiAgICBzYXVjZXJJbWFnZS5zcmMgPSAnL1VzZXJzL2tlbm55bG96ZWF1L0Rlc2t0b3AvSW52YXNpb24vc3JjL2Fzc2V0cy9pbWFnZXMvc2F1Y2VyLnBuZyc7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIC8vIGN0eC5yZWN0KEZseWluZ1NhdWNlci54LCBGbHlpbmdTYXVjZXIueSwgRmx5aW5nU2F1Y2VyLndpZHRoLCBGbHlpbmdTYXVjZXIuaGVpZ2h0KTtcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gXCIjMDA5NUREXCI7XG4gICAgLy8gY3R4LmZpbGwoKTtcbiAgICBjdHguZHJhd0ltYWdlKHNhdWNlckltYWdlLCBGbHlpbmdTYXVjZXIueCwgRmx5aW5nU2F1Y2VyLnkpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdUYXJnZXQodGFyZ2V0cykge1xuICAgIE9iamVjdC52YWx1ZXModGFyZ2V0cykuZm9yRWFjaCggdGFyZ2V0ID0+IHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5yZWN0KHRhcmdldC54LCB0YXJnZXQueSwgMTAsIDEwKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNGRjAwMDBcIjtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdCZWFtKEZseWluZ1NhdWNlcikge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgucmVjdChGbHlpbmdTYXVjZXIueCArIChGbHlpbmdTYXVjZXIud2lkdGggLyAyKSAtIDEwLCBGbHlpbmdTYXVjZXIueSArIEZseWluZ1NhdWNlci5oZWlnaHQsIDIwLCBjYW52YXMuaGVpZ2h0IC0gRmx5aW5nU2F1Y2VyLnkpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjQwLCAyNTUsIDAsIDAuNzUpXCI7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7ICBcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdTY29yZSgpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsIDAsIDAsIDEpXCJcbiAgICBjdHguZmlsbFRleHQoYFNjb3JlOiAke3Njb3JlfWAsIDc4MCwgNDApO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdIZWFsdGgoKSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLCAwLCAwLCAxKVwiXG4gICAgY3R4LmZpbGxUZXh0KGBIZWFsdGg6ICR7aGVhbHRofWAsIDc4MCwgODApO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdHYW1lT3ZlcigpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmZvbnQgPSBcIjgwcHggQXJpYWxcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjRkYwMDAwXCJcbiAgICBjdHguZmlsbFRleHQoXCJHQU1FIE9WRVJcIiwgMjMwLCAzMDApO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdQdWxsVXAoKSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5mb250ID0gXCI4MHB4IEFyaWFsXCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI0ZGMDAwMFwiXG4gICAgY3R4LmZpbGxUZXh0KFwiUFVMTCBVUFwiLCAzMDUsIDIwMCk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhd0V4cGxvc2lvbih4LCB5KSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoeCwgeSwgMjUsIDAsIDIgKiBNYXRoLlBJKVxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNGRjAwMDBcIlxuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhd01pc3NpbGUobWlzc2lsZXMpIHtcbiAgICBsZXQgbWlzc2lsZUltYWdlID0gbmV3IEltYWdlO1xuICAgIG1pc3NpbGVJbWFnZS5zcmMgPSAnL1VzZXJzL2tlbm55bG96ZWF1L0Rlc2t0b3AvSW52YXNpb24vc3JjL2Fzc2V0cy9pbWFnZXMvbWlzc2lsZS5wbmcnO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyBjdHgucmVjdChtaXNzaWxlcy5taXNzaWxlLngsIG1pc3NpbGVzLm1pc3NpbGUueSwgbWlzc2lsZXMubWlzc2lsZS53aWR0aCwgbWlzc2lsZXMubWlzc2lsZS5oZWlnaHQpXG4gICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwiZ3JheVwiO1xuICAgIC8vIGN0eC5maWxsKCk7XG4gICAgY3R4LmRyYXdJbWFnZShtaXNzaWxlSW1hZ2UsIG1pc3NpbGVzLm1pc3NpbGUueCwgbWlzc2lsZXMubWlzc2lsZS55KTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja01pc3NpbGVTdHJpa2UoRmx5aW5nU2F1Y2VyKSB7XG4gICAgaWYgKG1pc3NpbGVzLm1pc3NpbGUueCA8IEZseWluZ1NhdWNlci54ICsgRmx5aW5nU2F1Y2VyLndpZHRoICYmXG4gICAgICAgIG1pc3NpbGVzLm1pc3NpbGUueCArIG1pc3NpbGVzLm1pc3NpbGUud2lkdGggPiBGbHlpbmdTYXVjZXIueCAmJlxuICAgICAgICBtaXNzaWxlcy5taXNzaWxlLnkgPCBGbHlpbmdTYXVjZXIueSArIEZseWluZ1NhdWNlci5oZWlnaHQgJiZcbiAgICAgICAgbWlzc2lsZXMubWlzc2lsZS55ICsgbWlzc2lsZXMubWlzc2lsZS5oZWlnaHQgPiBGbHlpbmdTYXVjZXIueVxuICAgICAgKSB7XG4gICAgICAgIGRyYXdFeHBsb3Npb24obWlzc2lsZXMubWlzc2lsZS54ICsgKG1pc3NpbGVzLm1pc3NpbGUud2lkdGggLyAyKSwgbWlzc2lsZXMubWlzc2lsZS55KVxuICAgICAgICBkZWxldGUgbWlzc2lsZXMubWlzc2lsZTtcbiAgICAgICAgbWlzc2lsZXMubWlzc2lsZSA9IG5ldyBNaXNzaWxlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgaWYgKGVuZERlbGF5KSB7XG4gICAgICBkcmF3R2FtZU92ZXIoKTtcbiAgICAgIGRyYXdTY29yZSgpO1xuICAgICAgZHJhd0hlYWx0aCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgbGV0IEZseWluZ1NhdWNlciA9IFNhdWNlcjtcbiAgICAvLyBjb25zb2xlLmxvZyhGbHlpbmdTYXVjZXIpXG4gICAgZHJhd1NhdWNlcihGbHlpbmdTYXVjZXIpO1xuXG4gICAgaWYgKEZseWluZ1NhdWNlci55ICsgRmx5aW5nU2F1Y2VyLmhlaWdodCA9PT0gY2FudmFzLmhlaWdodCkge1xuICAgICAgZHJhd1B1bGxVcCgpO1xuICAgICAgaGVhbHRoIC09IDE7XG4gICAgfVxuXG4gICAgZHJhd1RhcmdldCh0YXJnZXRzKTtcbiAgICBkcmF3U2NvcmUoKTtcbiAgICBkcmF3SGVhbHRoKCk7XG4gICAgZHJhd01pc3NpbGUobWlzc2lsZXMpO1xuICAgIG1pc3NpbGVzLm1pc3NpbGUueSArPSBtaXNzaWxlcy5taXNzaWxlLmR5O1xuICAgIGlmIChtaXNzaWxlcy5taXNzaWxlLnkgPCAtbWlzc2lsZXMubWlzc2lsZS5oZWlnaHQpIHtcbiAgICAgIGRlbGV0ZSBtaXNzaWxlcy5taXNzaWxlO1xuICAgICAgbWlzc2lsZXMubWlzc2lsZSA9IG5ldyBNaXNzaWxlO1xuICAgIH1cbiAgICBcbiAgICBpZiAoY2hlY2tNaXNzaWxlU3RyaWtlKEZseWluZ1NhdWNlcikpIHtcbiAgICAgIGhlYWx0aCAtPSAyMDtcbiAgICB9XG4gICAgXG4gICAgaWYgKGhlYWx0aCA8PSAwKSB7XG4gICAgICAvLyBkcmF3R2FtZU92ZXIoKTtcbiAgICAgIGhlYWx0aCA9IDA7XG4gICAgICBlbmREZWxheSA9IHRydWU7XG4gICAgICAvLyByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3BhY2VQcmVzc2VkKSB7XG4gICAgICBkcmF3QmVhbShGbHlpbmdTYXVjZXIpO1xuXG4gICAgICBPYmplY3QudmFsdWVzKHRhcmdldHMpLmZvckVhY2godGFyZ2V0ID0+IHtcbiAgICAgICAgaWYgKHRhcmdldC54ICsgMTAgPiBGbHlpbmdTYXVjZXIueCArIChGbHlpbmdTYXVjZXIud2lkdGggLyAyKSAtIDEwICYmIHRhcmdldC54IDwgRmx5aW5nU2F1Y2VyLnggKyAoRmx5aW5nU2F1Y2VyLndpZHRoIC8gMikgKyAxMCkge1xuICAgICAgICAgIHRhcmdldC55IC09IDM7XG4gICAgICAgICAgaWYgKHRhcmdldC55IDw9IEZseWluZ1NhdWNlci55ICsgRmx5aW5nU2F1Y2VyLmhlaWdodCkge1xuICAgICAgICAgICAgc2NvcmUrKztcbiAgICAgICAgICAgIGZvcihsZXQga2V5IGluIHRhcmdldHMpIHtcbiAgICAgICAgICAgICAgaWYgKHRhcmdldHNba2V5XSA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRhcmdldHNba2V5XTtcbiAgICAgICAgICAgICAgICB0YXJnZXRzW2tleV0gPSBuZXcgVGFyZ2V0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldC55ICs9IDU7XG4gICAgICAgICAgaWYgKHRhcmdldC55ID4gY2FudmFzLmhlaWdodCAtIDEwKSB0YXJnZXQueSA9IGNhbnZhcy5oZWlnaHQgLSAxMDsgIFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBPYmplY3QudmFsdWVzKHRhcmdldHMpLmZvckVhY2godGFyZ2V0ID0+IHtcbiAgICAgICAgdGFyZ2V0LnkgKz0gNTtcbiAgICAgICAgaWYgKHRhcmdldC55ID4gY2FudmFzLmhlaWdodCAtIDEwKSB0YXJnZXQueSA9IGNhbnZhcy5oZWlnaHQgLSAxMDtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHNoaWZ0UHJlc3NlZCkge1xuICAgICAgRmx5aW5nU2F1Y2VyLmh5cGVyRHJpdmUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBGbHlpbmdTYXVjZXIuaHlwZXJEcml2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChyaWdodFByZXNzZWQpIHtcbiAgICAgIGlmIChGbHlpbmdTYXVjZXIuaHlwZXJEcml2ZSkge1xuICAgICAgICBGbHlpbmdTYXVjZXIueCArPSAxMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEZseWluZ1NhdWNlci54ICs9IDY7XG4gICAgICB9XG5cbiAgICAgIGlmIChGbHlpbmdTYXVjZXIueCArIEZseWluZ1NhdWNlci53aWR0aCA+IGNhbnZhcy53aWR0aCkge1xuICAgICAgICBGbHlpbmdTYXVjZXIueCA9IGNhbnZhcy53aWR0aCAtIEZseWluZ1NhdWNlci53aWR0aDtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobGVmdFByZXNzZWQpIHtcbiAgICAgIGlmIChGbHlpbmdTYXVjZXIuaHlwZXJEcml2ZSkge1xuICAgICAgICBGbHlpbmdTYXVjZXIueCAtPSAxMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEZseWluZ1NhdWNlci54IC09IDY7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChGbHlpbmdTYXVjZXIueCA8IDApIHtcbiAgICAgICAgRmx5aW5nU2F1Y2VyLnggPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAodXBQcmVzc2VkKSB7XG4gICAgICBpZiAoRmx5aW5nU2F1Y2VyLmh5cGVyRHJpdmUpIHtcbiAgICAgICAgRmx5aW5nU2F1Y2VyLnkgLT0gMTI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBGbHlpbmdTYXVjZXIueSAtPSA2O1xuICAgICAgfVxuXG4gICAgICBpZiAoRmx5aW5nU2F1Y2VyLnkgPCAwKSB7XG4gICAgICAgIEZseWluZ1NhdWNlci55ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZG93blByZXNzZWQpIHtcbiAgICAgIGlmIChGbHlpbmdTYXVjZXIuaHlwZXJEcml2ZSkge1xuICAgICAgICBGbHlpbmdTYXVjZXIueSArPSAxMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEZseWluZ1NhdWNlci55ICs9IDY7XG4gICAgICB9XG5cbiAgICAgIGlmIChGbHlpbmdTYXVjZXIueSArIEZseWluZ1NhdWNlci5oZWlnaHQgPiBjYW52YXMuaGVpZ2h0KSB7XG4gICAgICAgIEZseWluZ1NhdWNlci55ID0gY2FudmFzLmhlaWdodCAtIEZseWluZ1NhdWNlci5oZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcbiAgfVxuXG4gIGlmICghZ2FtZU92ZXIpIHtcbiAgICBnYW1lT3ZlciA9IGRyYXcoKTtcbiAgfVxufSk7XG4iLCJjb25zdCBGbHlpbmdTYXVjZXIgPSB7XG4gIGhlaWdodDogMjAsXG4gIHdpZHRoOiA4MCxcbiAgeDogMCxcbiAgeTogMCxcbiAgaHlwZXJEcml2ZTogZmFsc2Vcbn1cblxuLy8gZnVuY3Rpb24gRmx5aW5nU2F1Y2VyID0gKCkgPT4ge1xuLy8gICB0aGlzLmhlaWdodCA9IDE1O1xuLy8gICB0aGlzLndpZHRoID0gNzA7XG4vLyAgIHRoaXMueCA9IDA7XG4vLyAgIHRoaXMueSA9IDA7XG4vLyAgIHRoaXMuaHlwZXJEcml2ZSA9IGZhbHNlO1xuLy8gfVxuXG5cbmV4cG9ydCBkZWZhdWx0IEZseWluZ1NhdWNlcjsiLCJjbGFzcyBNaXNzaWxlIHtcbiAgY29uc3RydWN0b3IoRmx5aW5nU2F1Y2VyKSB7XG4gICAgdGhpcy54ID0gNDAgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4OTApO1xuICAgIHRoaXMueSA9IDY1MDtcbiAgICB0aGlzLmR5ID0gLTE1O1xuICAgIHRoaXMuaGVpZ2h0ID0gNDA7XG4gICAgdGhpcy53aWR0aCA9IDEwO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWlzc2lsZTsiLCJjbGFzcyBUYXJnZXQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnggPSA0MCArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDg5MCk7XG4gICAgdGhpcy55ID0gNjQwO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGFyZ2V0OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=