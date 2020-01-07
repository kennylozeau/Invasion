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
    ctx.beginPath();
    ctx.rect(FlyingSaucer.x, FlyingSaucer.y, FlyingSaucer.width, FlyingSaucer.height);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
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
    ctx.beginPath();
    ctx.rect(missiles.missile.x, missiles.missile.y, missiles.missile.width, missiles.missile.height);
    ctx.fillStyle = "gray";
    ctx.fill();
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
      drawGameOver();
      return true;
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
  height: 15,
  width: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ZseWluZ19zYXVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWlzc2lsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy90YXJnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5jc3M/ODA2NiJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJzY29yZSIsImhlYWx0aCIsImdhbWVPdmVyIiwicmlnaHRQcmVzc2VkIiwibGVmdFByZXNzZWQiLCJkb3duUHJlc3NlZCIsInVwUHJlc3NlZCIsInNwYWNlUHJlc3NlZCIsInNoaWZ0UHJlc3NlZCIsInRhcmdldHMiLCJ0YXJnZXQxIiwiVGFyZ2V0IiwidGFyZ2V0MiIsInRhcmdldDMiLCJtaXNzaWxlcyIsIm1pc3NpbGUiLCJNaXNzaWxlIiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJlIiwia2V5IiwiZHJhd1NhdWNlciIsIkZseWluZ1NhdWNlciIsImJlZ2luUGF0aCIsInJlY3QiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsbFN0eWxlIiwiZmlsbCIsImNsb3NlUGF0aCIsImRyYXdUYXJnZXQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwidGFyZ2V0IiwiZHJhd0JlYW0iLCJkcmF3U2NvcmUiLCJmb250IiwiZmlsbFRleHQiLCJkcmF3SGVhbHRoIiwiZHJhd0dhbWVPdmVyIiwiZHJhd1B1bGxVcCIsImRyYXdFeHBsb3Npb24iLCJhcmMiLCJNYXRoIiwiUEkiLCJkcmF3TWlzc2lsZSIsImNoZWNrTWlzc2lsZVN0cmlrZSIsImRyYXciLCJjbGVhclJlY3QiLCJTYXVjZXIiLCJkeSIsImh5cGVyRHJpdmUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmbG9vciIsInJhbmRvbSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUVBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFNO0FBQ2hELE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWY7QUFDQSxNQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBRUEsTUFBSUMsS0FBSyxHQUFHLENBQVo7QUFDQSxNQUFJQyxNQUFNLEdBQUcsR0FBYjtBQUNBLE1BQUlDLFFBQVEsR0FBRyxLQUFmO0FBRUEsTUFBSUMsWUFBWSxH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Q0E1UkQsRTs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQSxJQUFNNUIsWUFBWSxHQUFHO0FBQ25CTSxRQUFNLEVBQUUsRUFEVztBQUVuQkQsT0FBSyxFQUFFLEVBRlk7QUFHbkJGLEdBQUMsRUFBRSxDQUhnQjtBQUluQkMsR0FBQyxFQUFFLENBSmdCO0FBS25CNEIsWUFBVSxFQUFFO0FBTE8sQ0FBckIsQyxDQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdlaEMsMkVBQWYsRTs7Ozs7Ozs7Ozs7OztJQ2pCTU4sTyxHQUNKLGlCQUFZTSxZQUFaLEVBQTBCO0FBQUE7O0FBQ3hCLE9BQUtHLENBQUwsR0FBUyxLQUFLcUIsSUFBSSxDQUFDVSxLQUFMLENBQVdWLElBQUksQ0FBQ1csTUFBTCxLQUFnQixHQUEzQixDQUFkO0FBQ0EsT0FBSy9CLENBQUwsR0FBUyxHQUFUO0FBQ0EsT0FBSzJCLEVBQUwsR0FBVSxDQUFDLEVBQVg7QUFDQSxPQUFLekIsTUFBTCxHQUFjLEVBQWQ7QUFDQSxPQUFLRCxLQUFMLEdBQWEsRUFBYjtBQUNELEM7O0FBR0grQixNQUFNLENBQUNDLE9BQVAsR0FBaUIzQyxPQUFqQixDOzs7Ozs7Ozs7Ozs7O0lDVk1MLE0sR0FDSixrQkFBYztBQUFBOztBQUNaLE9BQUtjLENBQUwsR0FBUyxLQUFLcUIsSUFBSSxDQUFDVSxLQUFMLENBQVdWLElBQUksQ0FBQ1csTUFBTCxLQUFnQixHQUEzQixDQUFkO0FBQ0EsT0FBSy9CLENBQUwsR0FBUyxHQUFUO0FBQ0QsQzs7QUFHSGdDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmhELE1BQWpCLEM7Ozs7Ozs7Ozs7O0FDUEEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguY3NzXCI7XG4vLyBpbXBvcnQgeyBrZXlEb3duSGFuZGxlciwga2V5VXBIYW5kbGVyIH0gZnJvbSAnLi9zY3JpcHRzL2tleV9ldmVudHMnO1xuaW1wb3J0IFNhdWNlciBmcm9tICcuL3NjcmlwdHMvZmx5aW5nX3NhdWNlcic7XG5pbXBvcnQgVGFyZ2V0IGZyb20gJy4vc2NyaXB0cy90YXJnZXQnO1xuaW1wb3J0IE1pc3NpbGUgZnJvbSAnLi9zY3JpcHRzL21pc3NpbGUnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gIGxldCBzY29yZSA9IDA7XG4gIGxldCBoZWFsdGggPSAxMDA7XG4gIGxldCBnYW1lT3ZlciA9IGZhbHNlO1xuXG4gIGxldCByaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgbGV0IGxlZnRQcmVzc2VkID0gZmFsc2U7XG4gIGxldCBkb3duUHJlc3NlZCA9IGZhbHNlO1xuICBsZXQgdXBQcmVzc2VkID0gZmFsc2U7XG4gIGxldCBzcGFjZVByZXNzZWQgPSBmYWxzZTtcbiAgbGV0IHNoaWZ0UHJlc3NlZCA9IGZhbHNlO1xuXG4gIGxldCB0YXJnZXRzID0ge1xuICAgIHRhcmdldDE6IG5ldyBUYXJnZXQsXG4gICAgdGFyZ2V0MjogbmV3IFRhcmdldCxcbiAgICB0YXJnZXQzOiBuZXcgVGFyZ2V0XG4gIH1cblxuICBsZXQgbWlzc2lsZXMgPSB7IG1pc3NpbGU6IG5ldyBNaXNzaWxlIH07XG5cbiAgLy8gbGV0IHRhcmdldCA9IHtcbiAgLy8gICB4OiA1MCxcbiAgLy8gICB5OiBjYW52YXMuaGVpZ2h0IC0gMTBcbiAgLy8gfTtcblxuICAvLyBjb25zdCBzYXVjZXJIZWlnaHQgPSAxNTtcbiAgLy8gY29uc3Qgc2F1Y2VyV2lkdGggPSA3MDtcbiAgLy8gbGV0IHNhdWNlclggPSAwO1xuICAvLyBsZXQgc2F1Y2VyWSA9IDA7XG5cbiAgLy8gbGV0IGh5cGVyRHJpdmUgPSBmYWxzZTtcbiAgXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd25IYW5kbGVyLCBmYWxzZSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBrZXlVcEhhbmRsZXIsIGZhbHNlKTtcblxuICBmdW5jdGlvbiBrZXlEb3duSGFuZGxlcihlKSB7XG4gICAgaWYgKGUua2V5ID09IFwiUmlnaHRcIiB8fCBlLmtleSA9PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgcmlnaHRQcmVzc2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZS5rZXkgPT0gXCJMZWZ0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgbGVmdFByZXNzZWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlLmtleSA9PSBcIkRvd25cIiB8fCBlLmtleSA9PSBcIkFycm93RG93blwiKSB7XG4gICAgICBkb3duUHJlc3NlZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGUua2V5ID09IFwiVXBcIiB8fCBlLmtleSA9PSBcIkFycm93VXBcIikge1xuICAgICAgdXBQcmVzc2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZS5rZXkgPT0gXCJTcGFjZWJhclwiIHx8IGUua2V5ID09IFwiIFwiKSB7XG4gICAgICBzcGFjZVByZXNzZWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlLmtleSA9PSBcIlNoaWZ0XCIpIHtcbiAgICAgIHNoaWZ0UHJlc3NlZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIFxuICBmdW5jdGlvbiBrZXlVcEhhbmRsZXIoZSkge1xuICAgIGlmIChlLmtleSA9PSBcIlJpZ2h0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgIHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlLmtleSA9PSBcIkxlZnRcIiB8fCBlLmtleSA9PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICBsZWZ0UHJlc3NlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlLmtleSA9PSBcIkRvd25cIiB8fCBlLmtleSA9PSBcIkFycm93RG93blwiKSB7XG4gICAgICBkb3duUHJlc3NlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlLmtleSA9PSBcIlVwXCIgfHwgZS5rZXkgPT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgIHVwUHJlc3NlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlLmtleSA9PSBcIlNwYWNlYmFyXCIgfHwgZS5rZXkgPT0gXCIgXCIpIHtcbiAgICAgIHNwYWNlUHJlc3NlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlLmtleSA9PSBcIlNoaWZ0XCIpIHtcbiAgICAgIHNoaWZ0UHJlc3NlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdTYXVjZXIoRmx5aW5nU2F1Y2VyKSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5yZWN0KEZseWluZ1NhdWNlci54LCBGbHlpbmdTYXVjZXIueSwgRmx5aW5nU2F1Y2VyLndpZHRoLCBGbHlpbmdTYXVjZXIuaGVpZ2h0KTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMDA5NUREXCI7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3VGFyZ2V0KHRhcmdldHMpIHtcbiAgICBPYmplY3QudmFsdWVzKHRhcmdldHMpLmZvckVhY2goIHRhcmdldCA9PiB7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgucmVjdCh0YXJnZXQueCwgdGFyZ2V0LnksIDEwLCAxMCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gXCIjRkYwMDAwXCI7XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBkcmF3QmVhbShGbHlpbmdTYXVjZXIpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LnJlY3QoRmx5aW5nU2F1Y2VyLnggKyAoRmx5aW5nU2F1Y2VyLndpZHRoIC8gMikgLSAxMCwgRmx5aW5nU2F1Y2VyLnkgKyBGbHlpbmdTYXVjZXIuaGVpZ2h0LCAyMCwgY2FudmFzLmhlaWdodCAtIEZseWluZ1NhdWNlci55KTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI0MCwgMjU1LCAwLCAwLjc1KVwiO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LmNsb3NlUGF0aCgpOyAgXG4gIH1cblxuICBmdW5jdGlvbiBkcmF3U2NvcmUoKSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLCAwLCAwLCAxKVwiXG4gICAgY3R4LmZpbGxUZXh0KGBTY29yZTogJHtzY29yZX1gLCA3ODAsIDQwKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3SGVhbHRoKCkge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwgMCwgMCwgMSlcIlxuICAgIGN0eC5maWxsVGV4dChgSGVhbHRoOiAke2hlYWx0aH1gLCA3ODAsIDgwKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3R2FtZU92ZXIoKSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5mb250ID0gXCI4MHB4IEFyaWFsXCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI0ZGMDAwMFwiXG4gICAgY3R4LmZpbGxUZXh0KFwiR0FNRSBPVkVSXCIsIDIzMCwgMzAwKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3UHVsbFVwKCkge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguZm9udCA9IFwiODBweCBBcmlhbFwiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNGRjAwMDBcIlxuICAgIGN0eC5maWxsVGV4dChcIlBVTEwgVVBcIiwgMzA1LCAyMDApO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdFeHBsb3Npb24oeCwgeSkge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHgsIHksIDI1LCAwLCAyICogTWF0aC5QSSlcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjRkYwMDAwXCJcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdNaXNzaWxlKG1pc3NpbGVzKSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5yZWN0KG1pc3NpbGVzLm1pc3NpbGUueCwgbWlzc2lsZXMubWlzc2lsZS55LCBtaXNzaWxlcy5taXNzaWxlLndpZHRoLCBtaXNzaWxlcy5taXNzaWxlLmhlaWdodClcbiAgICBjdHguZmlsbFN0eWxlID0gXCJncmF5XCI7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja01pc3NpbGVTdHJpa2UoRmx5aW5nU2F1Y2VyKSB7XG4gICAgaWYgKG1pc3NpbGVzLm1pc3NpbGUueCA8IEZseWluZ1NhdWNlci54ICsgRmx5aW5nU2F1Y2VyLndpZHRoICYmXG4gICAgICAgIG1pc3NpbGVzLm1pc3NpbGUueCArIG1pc3NpbGVzLm1pc3NpbGUud2lkdGggPiBGbHlpbmdTYXVjZXIueCAmJlxuICAgICAgICBtaXNzaWxlcy5taXNzaWxlLnkgPCBGbHlpbmdTYXVjZXIueSArIEZseWluZ1NhdWNlci5oZWlnaHQgJiZcbiAgICAgICAgbWlzc2lsZXMubWlzc2lsZS55ICsgbWlzc2lsZXMubWlzc2lsZS5oZWlnaHQgPiBGbHlpbmdTYXVjZXIueVxuICAgICAgKSB7XG4gICAgICAgIGRyYXdFeHBsb3Npb24obWlzc2lsZXMubWlzc2lsZS54ICsgKG1pc3NpbGVzLm1pc3NpbGUud2lkdGggLyAyKSwgbWlzc2lsZXMubWlzc2lsZS55KVxuICAgICAgICBkZWxldGUgbWlzc2lsZXMubWlzc2lsZTtcbiAgICAgICAgbWlzc2lsZXMubWlzc2lsZSA9IG5ldyBNaXNzaWxlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgbGV0IEZseWluZ1NhdWNlciA9IFNhdWNlcjtcbiAgICAvLyBjb25zb2xlLmxvZyhGbHlpbmdTYXVjZXIpXG4gICAgZHJhd1NhdWNlcihGbHlpbmdTYXVjZXIpO1xuXG4gICAgaWYgKEZseWluZ1NhdWNlci55ICsgRmx5aW5nU2F1Y2VyLmhlaWdodCA9PT0gY2FudmFzLmhlaWdodCkge1xuICAgICAgZHJhd1B1bGxVcCgpO1xuICAgICAgaGVhbHRoIC09IDE7XG4gICAgfVxuXG4gICAgZHJhd1RhcmdldCh0YXJnZXRzKTtcbiAgICBkcmF3U2NvcmUoKTtcbiAgICBkcmF3SGVhbHRoKCk7XG4gICAgZHJhd01pc3NpbGUobWlzc2lsZXMpO1xuICAgIG1pc3NpbGVzLm1pc3NpbGUueSArPSBtaXNzaWxlcy5taXNzaWxlLmR5O1xuICAgIGlmIChtaXNzaWxlcy5taXNzaWxlLnkgPCAtbWlzc2lsZXMubWlzc2lsZS5oZWlnaHQpIHtcbiAgICAgIGRlbGV0ZSBtaXNzaWxlcy5taXNzaWxlO1xuICAgICAgbWlzc2lsZXMubWlzc2lsZSA9IG5ldyBNaXNzaWxlO1xuICAgIH1cbiAgICBcbiAgICBpZiAoY2hlY2tNaXNzaWxlU3RyaWtlKEZseWluZ1NhdWNlcikpIHtcbiAgICAgIGhlYWx0aCAtPSAyMDtcbiAgICB9XG4gICAgXG4gICAgaWYgKGhlYWx0aCA8PSAwKSB7XG4gICAgICBkcmF3R2FtZU92ZXIoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzcGFjZVByZXNzZWQpIHtcbiAgICAgIGRyYXdCZWFtKEZseWluZ1NhdWNlcik7XG5cbiAgICAgIE9iamVjdC52YWx1ZXModGFyZ2V0cykuZm9yRWFjaCh0YXJnZXQgPT4ge1xuICAgICAgICBpZiAodGFyZ2V0LnggKyAxMCA+IEZseWluZ1NhdWNlci54ICsgKEZseWluZ1NhdWNlci53aWR0aCAvIDIpIC0gMTAgJiYgdGFyZ2V0LnggPCBGbHlpbmdTYXVjZXIueCArIChGbHlpbmdTYXVjZXIud2lkdGggLyAyKSArIDEwKSB7XG4gICAgICAgICAgdGFyZ2V0LnkgLT0gMztcbiAgICAgICAgICBpZiAodGFyZ2V0LnkgPD0gRmx5aW5nU2F1Y2VyLnkgKyBGbHlpbmdTYXVjZXIuaGVpZ2h0KSB7XG4gICAgICAgICAgICBzY29yZSsrO1xuICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gdGFyZ2V0cykge1xuICAgICAgICAgICAgICBpZiAodGFyZ2V0c1trZXldID09PSB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGFyZ2V0c1trZXldO1xuICAgICAgICAgICAgICAgIHRhcmdldHNba2V5XSA9IG5ldyBUYXJnZXQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0LnkgKz0gNTtcbiAgICAgICAgICBpZiAodGFyZ2V0LnkgPiBjYW52YXMuaGVpZ2h0IC0gMTApIHRhcmdldC55ID0gY2FudmFzLmhlaWdodCAtIDEwOyAgXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIE9iamVjdC52YWx1ZXModGFyZ2V0cykuZm9yRWFjaCh0YXJnZXQgPT4ge1xuICAgICAgICB0YXJnZXQueSArPSA1O1xuICAgICAgICBpZiAodGFyZ2V0LnkgPiBjYW52YXMuaGVpZ2h0IC0gMTApIHRhcmdldC55ID0gY2FudmFzLmhlaWdodCAtIDEwO1xuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoc2hpZnRQcmVzc2VkKSB7XG4gICAgICBGbHlpbmdTYXVjZXIuaHlwZXJEcml2ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIEZseWluZ1NhdWNlci5oeXBlckRyaXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0UHJlc3NlZCkge1xuICAgICAgaWYgKEZseWluZ1NhdWNlci5oeXBlckRyaXZlKSB7XG4gICAgICAgIEZseWluZ1NhdWNlci54ICs9IDEyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgRmx5aW5nU2F1Y2VyLnggKz0gNjtcbiAgICAgIH1cblxuICAgICAgaWYgKEZseWluZ1NhdWNlci54ICsgRmx5aW5nU2F1Y2VyLndpZHRoID4gY2FudmFzLndpZHRoKSB7XG4gICAgICAgIEZseWluZ1NhdWNlci54ID0gY2FudmFzLndpZHRoIC0gRmx5aW5nU2F1Y2VyLndpZHRoO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChsZWZ0UHJlc3NlZCkge1xuICAgICAgaWYgKEZseWluZ1NhdWNlci5oeXBlckRyaXZlKSB7XG4gICAgICAgIEZseWluZ1NhdWNlci54IC09IDEyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgRmx5aW5nU2F1Y2VyLnggLT0gNjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKEZseWluZ1NhdWNlci54IDwgMCkge1xuICAgICAgICBGbHlpbmdTYXVjZXIueCA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmICh1cFByZXNzZWQpIHtcbiAgICAgIGlmIChGbHlpbmdTYXVjZXIuaHlwZXJEcml2ZSkge1xuICAgICAgICBGbHlpbmdTYXVjZXIueSAtPSAxMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEZseWluZ1NhdWNlci55IC09IDY7XG4gICAgICB9XG5cbiAgICAgIGlmIChGbHlpbmdTYXVjZXIueSA8IDApIHtcbiAgICAgICAgRmx5aW5nU2F1Y2VyLnkgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChkb3duUHJlc3NlZCkge1xuICAgICAgaWYgKEZseWluZ1NhdWNlci5oeXBlckRyaXZlKSB7XG4gICAgICAgIEZseWluZ1NhdWNlci55ICs9IDEyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgRmx5aW5nU2F1Y2VyLnkgKz0gNjtcbiAgICAgIH1cblxuICAgICAgaWYgKEZseWluZ1NhdWNlci55ICsgRmx5aW5nU2F1Y2VyLmhlaWdodCA+IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgRmx5aW5nU2F1Y2VyLnkgPSBjYW52YXMuaGVpZ2h0IC0gRmx5aW5nU2F1Y2VyLmhlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xuICB9XG5cbiAgaWYgKCFnYW1lT3Zlcikge1xuICAgIGdhbWVPdmVyID0gZHJhdygpO1xuICB9XG59KTtcbiIsImNvbnN0IEZseWluZ1NhdWNlciA9IHtcbiAgaGVpZ2h0OiAxNSxcbiAgd2lkdGg6IDcwLFxuICB4OiAwLFxuICB5OiAwLFxuICBoeXBlckRyaXZlOiBmYWxzZVxufVxuXG4vLyBmdW5jdGlvbiBGbHlpbmdTYXVjZXIgPSAoKSA9PiB7XG4vLyAgIHRoaXMuaGVpZ2h0ID0gMTU7XG4vLyAgIHRoaXMud2lkdGggPSA3MDtcbi8vICAgdGhpcy54ID0gMDtcbi8vICAgdGhpcy55ID0gMDtcbi8vICAgdGhpcy5oeXBlckRyaXZlID0gZmFsc2U7XG4vLyB9XG5cblxuZXhwb3J0IGRlZmF1bHQgRmx5aW5nU2F1Y2VyOyIsImNsYXNzIE1pc3NpbGUge1xuICBjb25zdHJ1Y3RvcihGbHlpbmdTYXVjZXIpIHtcbiAgICB0aGlzLnggPSA0MCArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDg5MCk7XG4gICAgdGhpcy55ID0gNjUwO1xuICAgIHRoaXMuZHkgPSAtMTU7XG4gICAgdGhpcy5oZWlnaHQgPSA0MDtcbiAgICB0aGlzLndpZHRoID0gMTA7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNaXNzaWxlOyIsImNsYXNzIFRhcmdldCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMueCA9IDQwICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogODkwKTtcbiAgICB0aGlzLnkgPSA2NDA7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUYXJnZXQ7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==