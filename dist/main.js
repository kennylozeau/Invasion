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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ZseWluZ19zYXVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWlzc2lsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy90YXJnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5jc3M/ODA2NiJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJzY29yZSIsImhlYWx0aCIsImdhbWVPdmVyIiwicmlnaHRQcmVzc2VkIiwibGVmdFByZXNzZWQiLCJkb3duUHJlc3NlZCIsInVwUHJlc3NlZCIsInNwYWNlUHJlc3NlZCIsInNoaWZ0UHJlc3NlZCIsInRhcmdldHMiLCJ0YXJnZXQxIiwiVGFyZ2V0IiwidGFyZ2V0MiIsInRhcmdldDMiLCJtaXNzaWxlcyIsIm1pc3NpbGUiLCJNaXNzaWxlIiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJlIiwia2V5IiwiZHJhd1NhdWNlciIsIkZseWluZ1NhdWNlciIsInNhdWNlckltYWdlIiwiSW1hZ2UiLCJzcmMiLCJiZWdpblBhdGgiLCJkcmF3SW1hZ2UiLCJ4IiwieSIsImNsb3NlUGF0aCIsImRyYXdUYXJnZXQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwidGFyZ2V0IiwicmVjdCIsImZpbGxTdHlsZSIsImZpbGwiLCJkcmF3QmVhbSIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhd1Njb3JlIiwiZm9udCIsImZpbGxUZXh0IiwiZHJhd0hlYWx0aCIsImRyYXdHYW1lT3ZlciIsImRyYXdQdWxsVXAiLCJkcmF3RXhwbG9zaW9uIiwiYXJjIiwiTWF0aCIsIlBJIiwiZHJhd01pc3NpbGUiLCJtaXNzaWxlSW1hZ2UiLCJjaGVja01pc3NpbGVTdHJpa2UiLCJkcmF3IiwiY2xlYXJSZWN0IiwiU2F1Y2VyIiwiZHkiLCJoeXBlckRyaXZlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZmxvb3IiLCJyYW5kb20iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FDQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsWUFBTTtBQUNoRCxNQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFmO0FBQ0EsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUVBLE1BQUlDLEtBQUssR0FBRyxDQUFaO0FBQ0EsTUFBSUMsTUFB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QUFDRDs7QUFFRCxNQUFJLENBQUNyRCxRQUFMLEVBQWU7QUFDYkEsWUFBUSxHQUFHcUQsSUFBSSxFQUFmO0FBQ0Q7QUFDRixDQWxTRCxFOzs7Ozs7Ozs7Ozs7QUNOQTtBQUFBLElBQU1qQyxZQUFZLEdBQUc7QUFDbkJtQixRQUFNLEVBQUUsRUFEVztBQUVuQkQsT0FBSyxFQUFFLEVBRlk7QUFHbkJaLEdBQUMsRUFBRSxDQUhnQjtBQUluQkMsR0FBQyxFQUFFLENBSmdCO0FBS25COEIsWUFBVSxFQUFFO0FBTE8sQ0FBckIsQyxDQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdlckMsMkVBQWYsRTs7Ozs7Ozs7Ozs7OztJQ2pCTU4sTyxHQUNKLGlCQUFZTSxZQUFaLEVBQTBCO0FBQUE7O0FBQ3hCLE9BQUtNLENBQUwsR0FBUyxLQUFLc0IsSUFBSSxDQUFDVyxLQUFMLENBQVdYLElBQUksQ0FBQ1ksTUFBTCxLQUFnQixHQUEzQixDQUFkO0FBQ0EsT0FBS2pDLENBQUwsR0FBUyxHQUFUO0FBQ0EsT0FBSzZCLEVBQUwsR0FBVSxDQUFDLEVBQVg7QUFDQSxPQUFLakIsTUFBTCxHQUFjLEVBQWQ7QUFDQSxPQUFLRCxLQUFMLEdBQWEsRUFBYjtBQUNELEM7O0FBR0h1QixNQUFNLENBQUNDLE9BQVAsR0FBaUJoRCxPQUFqQixDOzs7Ozs7Ozs7Ozs7O0lDVk1MLE0sR0FDSixrQkFBYztBQUFBOztBQUNaLE9BQUtpQixDQUFMLEdBQVMsS0FBS3NCLElBQUksQ0FBQ1csS0FBTCxDQUFXWCxJQUFJLENBQUNZLE1BQUwsS0FBZ0IsR0FBM0IsQ0FBZDtBQUNBLE9BQUtqQyxDQUFMLEdBQVMsR0FBVDtBQUNELEM7O0FBR0hrQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJyRCxNQUFqQixDOzs7Ozs7Ozs7OztBQ1BBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LmNzc1wiO1xuLy8gaW1wb3J0IHsga2V5RG93bkhhbmRsZXIsIGtleVVwSGFuZGxlciB9IGZyb20gJy4vc2NyaXB0cy9rZXlfZXZlbnRzJztcbmltcG9ydCBTYXVjZXIgZnJvbSAnLi9zY3JpcHRzL2ZseWluZ19zYXVjZXInO1xuaW1wb3J0IFRhcmdldCBmcm9tICcuL3NjcmlwdHMvdGFyZ2V0JztcbmltcG9ydCBNaXNzaWxlIGZyb20gJy4vc2NyaXB0cy9taXNzaWxlJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICBsZXQgc2NvcmUgPSAwO1xuICBsZXQgaGVhbHRoID0gMTAwO1xuICBsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcblxuICBsZXQgcmlnaHRQcmVzc2VkID0gZmFsc2U7XG4gIGxldCBsZWZ0UHJlc3NlZCA9IGZhbHNlO1xuICBsZXQgZG93blByZXNzZWQgPSBmYWxzZTtcbiAgbGV0IHVwUHJlc3NlZCA9IGZhbHNlO1xuICBsZXQgc3BhY2VQcmVzc2VkID0gZmFsc2U7XG4gIGxldCBzaGlmdFByZXNzZWQgPSBmYWxzZTtcblxuICBsZXQgdGFyZ2V0cyA9IHtcbiAgICB0YXJnZXQxOiBuZXcgVGFyZ2V0LFxuICAgIHRhcmdldDI6IG5ldyBUYXJnZXQsXG4gICAgdGFyZ2V0MzogbmV3IFRhcmdldFxuICB9XG5cbiAgbGV0IG1pc3NpbGVzID0geyBtaXNzaWxlOiBuZXcgTWlzc2lsZSB9O1xuXG4gIC8vIGxldCB0YXJnZXQgPSB7XG4gIC8vICAgeDogNTAsXG4gIC8vICAgeTogY2FudmFzLmhlaWdodCAtIDEwXG4gIC8vIH07XG5cbiAgLy8gY29uc3Qgc2F1Y2VySGVpZ2h0ID0gMTU7XG4gIC8vIGNvbnN0IHNhdWNlcldpZHRoID0gNzA7XG4gIC8vIGxldCBzYXVjZXJYID0gMDtcbiAgLy8gbGV0IHNhdWNlclkgPSAwO1xuXG4gIC8vIGxldCBoeXBlckRyaXZlID0gZmFsc2U7XG4gIFxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duSGFuZGxlciwgZmFsc2UpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwga2V5VXBIYW5kbGVyLCBmYWxzZSk7XG5cbiAgZnVuY3Rpb24ga2V5RG93bkhhbmRsZXIoZSkge1xuICAgIGlmIChlLmtleSA9PSBcIlJpZ2h0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgIHJpZ2h0UHJlc3NlZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGUua2V5ID09IFwiTGVmdFwiIHx8IGUua2V5ID09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgIGxlZnRQcmVzc2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZS5rZXkgPT0gXCJEb3duXCIgfHwgZS5rZXkgPT0gXCJBcnJvd0Rvd25cIikge1xuICAgICAgZG93blByZXNzZWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlLmtleSA9PSBcIlVwXCIgfHwgZS5rZXkgPT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgIHVwUHJlc3NlZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGUua2V5ID09IFwiU3BhY2ViYXJcIiB8fCBlLmtleSA9PSBcIiBcIikge1xuICAgICAgc3BhY2VQcmVzc2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZS5rZXkgPT0gXCJTaGlmdFwiKSB7XG4gICAgICBzaGlmdFByZXNzZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBcbiAgZnVuY3Rpb24ga2V5VXBIYW5kbGVyKGUpIHtcbiAgICBpZiAoZS5rZXkgPT0gXCJSaWdodFwiIHx8IGUua2V5ID09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICByaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZS5rZXkgPT0gXCJMZWZ0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgbGVmdFByZXNzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZS5rZXkgPT0gXCJEb3duXCIgfHwgZS5rZXkgPT0gXCJBcnJvd0Rvd25cIikge1xuICAgICAgZG93blByZXNzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZS5rZXkgPT0gXCJVcFwiIHx8IGUua2V5ID09IFwiQXJyb3dVcFwiKSB7XG4gICAgICB1cFByZXNzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZS5rZXkgPT0gXCJTcGFjZWJhclwiIHx8IGUua2V5ID09IFwiIFwiKSB7XG4gICAgICBzcGFjZVByZXNzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZS5rZXkgPT0gXCJTaGlmdFwiKSB7XG4gICAgICBzaGlmdFByZXNzZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3U2F1Y2VyKEZseWluZ1NhdWNlcikge1xuICAgIGxldCBzYXVjZXJJbWFnZSA9IG5ldyBJbWFnZTtcbiAgICBzYXVjZXJJbWFnZS5zcmMgPSAnL1VzZXJzL2tlbm55bG96ZWF1L0Rlc2t0b3AvSW52YXNpb24vc3JjL2Fzc2V0cy9pbWFnZXMvc2F1Y2VyLnBuZyc7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIC8vIGN0eC5yZWN0KEZseWluZ1NhdWNlci54LCBGbHlpbmdTYXVjZXIueSwgRmx5aW5nU2F1Y2VyLndpZHRoLCBGbHlpbmdTYXVjZXIuaGVpZ2h0KTtcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gXCIjMDA5NUREXCI7XG4gICAgLy8gY3R4LmZpbGwoKTtcbiAgICBjdHguZHJhd0ltYWdlKHNhdWNlckltYWdlLCBGbHlpbmdTYXVjZXIueCwgRmx5aW5nU2F1Y2VyLnkpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdUYXJnZXQodGFyZ2V0cykge1xuICAgIE9iamVjdC52YWx1ZXModGFyZ2V0cykuZm9yRWFjaCggdGFyZ2V0ID0+IHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5yZWN0KHRhcmdldC54LCB0YXJnZXQueSwgMTAsIDEwKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNGRjAwMDBcIjtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdCZWFtKEZseWluZ1NhdWNlcikge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgucmVjdChGbHlpbmdTYXVjZXIueCArIChGbHlpbmdTYXVjZXIud2lkdGggLyAyKSAtIDEwLCBGbHlpbmdTYXVjZXIueSArIEZseWluZ1NhdWNlci5oZWlnaHQsIDIwLCBjYW52YXMuaGVpZ2h0IC0gRmx5aW5nU2F1Y2VyLnkpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjQwLCAyNTUsIDAsIDAuNzUpXCI7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7ICBcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdTY29yZSgpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsIDAsIDAsIDEpXCJcbiAgICBjdHguZmlsbFRleHQoYFNjb3JlOiAke3Njb3JlfWAsIDc4MCwgNDApO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdIZWFsdGgoKSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLCAwLCAwLCAxKVwiXG4gICAgY3R4LmZpbGxUZXh0KGBIZWFsdGg6ICR7aGVhbHRofWAsIDc4MCwgODApO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdHYW1lT3ZlcigpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmZvbnQgPSBcIjgwcHggQXJpYWxcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjRkYwMDAwXCJcbiAgICBjdHguZmlsbFRleHQoXCJHQU1FIE9WRVJcIiwgMjMwLCAzMDApO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdQdWxsVXAoKSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5mb250ID0gXCI4MHB4IEFyaWFsXCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI0ZGMDAwMFwiXG4gICAgY3R4LmZpbGxUZXh0KFwiUFVMTCBVUFwiLCAzMDUsIDIwMCk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhd0V4cGxvc2lvbih4LCB5KSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoeCwgeSwgMjUsIDAsIDIgKiBNYXRoLlBJKVxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNGRjAwMDBcIlxuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhd01pc3NpbGUobWlzc2lsZXMpIHtcbiAgICBsZXQgbWlzc2lsZUltYWdlID0gbmV3IEltYWdlO1xuICAgIG1pc3NpbGVJbWFnZS5zcmMgPSAnL1VzZXJzL2tlbm55bG96ZWF1L0Rlc2t0b3AvSW52YXNpb24vc3JjL2Fzc2V0cy9pbWFnZXMvbWlzc2lsZS5wbmcnO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyBjdHgucmVjdChtaXNzaWxlcy5taXNzaWxlLngsIG1pc3NpbGVzLm1pc3NpbGUueSwgbWlzc2lsZXMubWlzc2lsZS53aWR0aCwgbWlzc2lsZXMubWlzc2lsZS5oZWlnaHQpXG4gICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwiZ3JheVwiO1xuICAgIC8vIGN0eC5maWxsKCk7XG4gICAgY3R4LmRyYXdJbWFnZShtaXNzaWxlSW1hZ2UsIG1pc3NpbGVzLm1pc3NpbGUueCwgbWlzc2lsZXMubWlzc2lsZS55KVxuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrTWlzc2lsZVN0cmlrZShGbHlpbmdTYXVjZXIpIHtcbiAgICBpZiAobWlzc2lsZXMubWlzc2lsZS54IDwgRmx5aW5nU2F1Y2VyLnggKyBGbHlpbmdTYXVjZXIud2lkdGggJiZcbiAgICAgICAgbWlzc2lsZXMubWlzc2lsZS54ICsgbWlzc2lsZXMubWlzc2lsZS53aWR0aCA+IEZseWluZ1NhdWNlci54ICYmXG4gICAgICAgIG1pc3NpbGVzLm1pc3NpbGUueSA8IEZseWluZ1NhdWNlci55ICsgRmx5aW5nU2F1Y2VyLmhlaWdodCAmJlxuICAgICAgICBtaXNzaWxlcy5taXNzaWxlLnkgKyBtaXNzaWxlcy5taXNzaWxlLmhlaWdodCA+IEZseWluZ1NhdWNlci55XG4gICAgICApIHtcbiAgICAgICAgZHJhd0V4cGxvc2lvbihtaXNzaWxlcy5taXNzaWxlLnggKyAobWlzc2lsZXMubWlzc2lsZS53aWR0aCAvIDIpLCBtaXNzaWxlcy5taXNzaWxlLnkpXG4gICAgICAgIGRlbGV0ZSBtaXNzaWxlcy5taXNzaWxlO1xuICAgICAgICBtaXNzaWxlcy5taXNzaWxlID0gbmV3IE1pc3NpbGU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJhdygpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICBsZXQgRmx5aW5nU2F1Y2VyID0gU2F1Y2VyO1xuICAgIC8vIGNvbnNvbGUubG9nKEZseWluZ1NhdWNlcilcbiAgICBkcmF3U2F1Y2VyKEZseWluZ1NhdWNlcik7XG5cbiAgICBpZiAoRmx5aW5nU2F1Y2VyLnkgKyBGbHlpbmdTYXVjZXIuaGVpZ2h0ID09PSBjYW52YXMuaGVpZ2h0KSB7XG4gICAgICBkcmF3UHVsbFVwKCk7XG4gICAgICBoZWFsdGggLT0gMTtcbiAgICB9XG5cbiAgICBkcmF3VGFyZ2V0KHRhcmdldHMpO1xuICAgIGRyYXdTY29yZSgpO1xuICAgIGRyYXdIZWFsdGgoKTtcbiAgICBkcmF3TWlzc2lsZShtaXNzaWxlcyk7XG4gICAgbWlzc2lsZXMubWlzc2lsZS55ICs9IG1pc3NpbGVzLm1pc3NpbGUuZHk7XG4gICAgaWYgKG1pc3NpbGVzLm1pc3NpbGUueSA8IC1taXNzaWxlcy5taXNzaWxlLmhlaWdodCkge1xuICAgICAgZGVsZXRlIG1pc3NpbGVzLm1pc3NpbGU7XG4gICAgICBtaXNzaWxlcy5taXNzaWxlID0gbmV3IE1pc3NpbGU7XG4gICAgfVxuICAgIFxuICAgIGlmIChjaGVja01pc3NpbGVTdHJpa2UoRmx5aW5nU2F1Y2VyKSkge1xuICAgICAgaGVhbHRoIC09IDIwO1xuICAgIH1cbiAgICBcbiAgICBpZiAoaGVhbHRoIDw9IDApIHtcbiAgICAgIGRyYXdHYW1lT3ZlcigpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHNwYWNlUHJlc3NlZCkge1xuICAgICAgZHJhd0JlYW0oRmx5aW5nU2F1Y2VyKTtcblxuICAgICAgT2JqZWN0LnZhbHVlcyh0YXJnZXRzKS5mb3JFYWNoKHRhcmdldCA9PiB7XG4gICAgICAgIGlmICh0YXJnZXQueCArIDEwID4gRmx5aW5nU2F1Y2VyLnggKyAoRmx5aW5nU2F1Y2VyLndpZHRoIC8gMikgLSAxMCAmJiB0YXJnZXQueCA8IEZseWluZ1NhdWNlci54ICsgKEZseWluZ1NhdWNlci53aWR0aCAvIDIpICsgMTApIHtcbiAgICAgICAgICB0YXJnZXQueSAtPSAzO1xuICAgICAgICAgIGlmICh0YXJnZXQueSA8PSBGbHlpbmdTYXVjZXIueSArIEZseWluZ1NhdWNlci5oZWlnaHQpIHtcbiAgICAgICAgICAgIHNjb3JlKys7XG4gICAgICAgICAgICBmb3IobGV0IGtleSBpbiB0YXJnZXRzKSB7XG4gICAgICAgICAgICAgIGlmICh0YXJnZXRzW2tleV0gPT09IHRhcmdldCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0YXJnZXRzW2tleV07XG4gICAgICAgICAgICAgICAgdGFyZ2V0c1trZXldID0gbmV3IFRhcmdldDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXQueSArPSA1O1xuICAgICAgICAgIGlmICh0YXJnZXQueSA+IGNhbnZhcy5oZWlnaHQgLSAxMCkgdGFyZ2V0LnkgPSBjYW52YXMuaGVpZ2h0IC0gMTA7ICBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LnZhbHVlcyh0YXJnZXRzKS5mb3JFYWNoKHRhcmdldCA9PiB7XG4gICAgICAgIHRhcmdldC55ICs9IDU7XG4gICAgICAgIGlmICh0YXJnZXQueSA+IGNhbnZhcy5oZWlnaHQgLSAxMCkgdGFyZ2V0LnkgPSBjYW52YXMuaGVpZ2h0IC0gMTA7XG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChzaGlmdFByZXNzZWQpIHtcbiAgICAgIEZseWluZ1NhdWNlci5oeXBlckRyaXZlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgRmx5aW5nU2F1Y2VyLmh5cGVyRHJpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAocmlnaHRQcmVzc2VkKSB7XG4gICAgICBpZiAoRmx5aW5nU2F1Y2VyLmh5cGVyRHJpdmUpIHtcbiAgICAgICAgRmx5aW5nU2F1Y2VyLnggKz0gMTI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBGbHlpbmdTYXVjZXIueCArPSA2O1xuICAgICAgfVxuXG4gICAgICBpZiAoRmx5aW5nU2F1Y2VyLnggKyBGbHlpbmdTYXVjZXIud2lkdGggPiBjYW52YXMud2lkdGgpIHtcbiAgICAgICAgRmx5aW5nU2F1Y2VyLnggPSBjYW52YXMud2lkdGggLSBGbHlpbmdTYXVjZXIud2lkdGg7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGxlZnRQcmVzc2VkKSB7XG4gICAgICBpZiAoRmx5aW5nU2F1Y2VyLmh5cGVyRHJpdmUpIHtcbiAgICAgICAgRmx5aW5nU2F1Y2VyLnggLT0gMTI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBGbHlpbmdTYXVjZXIueCAtPSA2O1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoRmx5aW5nU2F1Y2VyLnggPCAwKSB7XG4gICAgICAgIEZseWluZ1NhdWNlci54ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKHVwUHJlc3NlZCkge1xuICAgICAgaWYgKEZseWluZ1NhdWNlci5oeXBlckRyaXZlKSB7XG4gICAgICAgIEZseWluZ1NhdWNlci55IC09IDEyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgRmx5aW5nU2F1Y2VyLnkgLT0gNjtcbiAgICAgIH1cblxuICAgICAgaWYgKEZseWluZ1NhdWNlci55IDwgMCkge1xuICAgICAgICBGbHlpbmdTYXVjZXIueSA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvd25QcmVzc2VkKSB7XG4gICAgICBpZiAoRmx5aW5nU2F1Y2VyLmh5cGVyRHJpdmUpIHtcbiAgICAgICAgRmx5aW5nU2F1Y2VyLnkgKz0gMTI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBGbHlpbmdTYXVjZXIueSArPSA2O1xuICAgICAgfVxuXG4gICAgICBpZiAoRmx5aW5nU2F1Y2VyLnkgKyBGbHlpbmdTYXVjZXIuaGVpZ2h0ID4gY2FudmFzLmhlaWdodCkge1xuICAgICAgICBGbHlpbmdTYXVjZXIueSA9IGNhbnZhcy5oZWlnaHQgLSBGbHlpbmdTYXVjZXIuaGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XG4gIH1cblxuICBpZiAoIWdhbWVPdmVyKSB7XG4gICAgZ2FtZU92ZXIgPSBkcmF3KCk7XG4gIH1cbn0pO1xuIiwiY29uc3QgRmx5aW5nU2F1Y2VyID0ge1xuICBoZWlnaHQ6IDIwLFxuICB3aWR0aDogODAsXG4gIHg6IDAsXG4gIHk6IDAsXG4gIGh5cGVyRHJpdmU6IGZhbHNlXG59XG5cbi8vIGZ1bmN0aW9uIEZseWluZ1NhdWNlciA9ICgpID0+IHtcbi8vICAgdGhpcy5oZWlnaHQgPSAxNTtcbi8vICAgdGhpcy53aWR0aCA9IDcwO1xuLy8gICB0aGlzLnggPSAwO1xuLy8gICB0aGlzLnkgPSAwO1xuLy8gICB0aGlzLmh5cGVyRHJpdmUgPSBmYWxzZTtcbi8vIH1cblxuXG5leHBvcnQgZGVmYXVsdCBGbHlpbmdTYXVjZXI7IiwiY2xhc3MgTWlzc2lsZSB7XG4gIGNvbnN0cnVjdG9yKEZseWluZ1NhdWNlcikge1xuICAgIHRoaXMueCA9IDQwICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogODkwKTtcbiAgICB0aGlzLnkgPSA2NTA7XG4gICAgdGhpcy5keSA9IC0xNTtcbiAgICB0aGlzLmhlaWdodCA9IDQwO1xuICAgIHRoaXMud2lkdGggPSAxMDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1pc3NpbGU7IiwiY2xhc3MgVGFyZ2V0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy54ID0gNDAgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4OTApO1xuICAgIHRoaXMueSA9IDY0MDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRhcmdldDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9