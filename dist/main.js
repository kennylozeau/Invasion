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
    ctx.fillText("Score: ".concat(score), 800, 40);
    ctx.closePath();
  }

  function drawMissile(missiles) {
    ctx.beginPath();
    ctx.rect(missiles.missile.x, missiles.missile.y, 8, 36);
    ctx.fillStyle = "gray";
    ctx.fill();
    ctx.closePath();
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var FlyingSaucer = _scripts_flying_saucer__WEBPACK_IMPORTED_MODULE_1__["default"]; // console.log(FlyingSaucer)

    drawSaucer(FlyingSaucer);
    drawTarget(targets);
    drawScore();
    drawMissile(missiles);
    missiles.missile.y += missiles.missile.dy;

    if (missiles.missile.y < -36) {
      delete missiles.missile;
      missiles.missile = new _scripts_missile__WEBPACK_IMPORTED_MODULE_3___default.a();
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

  draw();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ZseWluZ19zYXVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWlzc2lsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy90YXJnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5jc3MiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwic2NvcmUiLCJyaWdodFByZXNzZWQiLCJsZWZ0UHJlc3NlZCIsImRvd25QcmVzc2VkIiwidXBQcmVzc2VkIiwic3BhY2VQcmVzc2VkIiwic2hpZnRQcmVzc2VkIiwidGFyZ2V0cyIsInRhcmdldDEiLCJUYXJnZXQiLCJ0YXJnZXQyIiwidGFyZ2V0MyIsIm1pc3NpbGVzIiwibWlzc2lsZSIsIk1pc3NpbGUiLCJrZXlEb3duSGFuZGxlciIsImtleVVwSGFuZGxlciIsImUiLCJrZXkiLCJkcmF3U2F1Y2VyIiwiRmx5aW5nU2F1Y2VyIiwiYmVnaW5QYXRoIiwicmVjdCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsU3R5bGUiLCJmaWxsIiwiY2xvc2VQYXRoIiwiZHJhd1RhcmdldCIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJ0YXJnZXQiLCJkcmF3QmVhbSIsImRyYXdTY29yZSIsImZvbnQiLCJmaWxsVGV4dCIsImRyYXdNaXNzaWxlIiwiZHJhdyIsImNsZWFyUmVjdCIsIlNhdWNlciIsImR5IiwiaHlwZXJEcml2ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FB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QUFJLENBQUNFLE1BQUwsS0FBZ0IsR0FBM0IsQ0FBZDtBQUNBLE9BQUt4QixDQUFMLEdBQVMsR0FBVDtBQUNBLE9BQUttQixFQUFMLEdBQVUsQ0FBQyxFQUFYO0FBQ0QsQzs7QUFHSE0sTUFBTSxDQUFDQyxPQUFQLEdBQWlCcEMsT0FBakIsQzs7Ozs7Ozs7Ozs7OztJQ1JNTCxNLEdBQ0osa0JBQWM7QUFBQTs7QUFDWixPQUFLYyxDQUFMLEdBQVMsS0FBS3VCLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsR0FBM0IsQ0FBZDtBQUNBLE9BQUt4QixDQUFMLEdBQVMsR0FBVDtBQUNELEM7O0FBR0h5QixNQUFNLENBQUNDLE9BQVAsR0FBaUJ6QyxNQUFqQixDOzs7Ozs7Ozs7OztBQ1BBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LmNzc1wiO1xuLy8gaW1wb3J0IHsga2V5RG93bkhhbmRsZXIsIGtleVVwSGFuZGxlciB9IGZyb20gJy4vc2NyaXB0cy9rZXlfZXZlbnRzJztcbmltcG9ydCBTYXVjZXIgZnJvbSAnLi9zY3JpcHRzL2ZseWluZ19zYXVjZXInO1xuaW1wb3J0IFRhcmdldCBmcm9tICcuL3NjcmlwdHMvdGFyZ2V0JztcbmltcG9ydCBNaXNzaWxlIGZyb20gJy4vc2NyaXB0cy9taXNzaWxlJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICBsZXQgc2NvcmUgPSAwO1xuXG4gIGxldCByaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgbGV0IGxlZnRQcmVzc2VkID0gZmFsc2U7XG4gIGxldCBkb3duUHJlc3NlZCA9IGZhbHNlO1xuICBsZXQgdXBQcmVzc2VkID0gZmFsc2U7XG4gIGxldCBzcGFjZVByZXNzZWQgPSBmYWxzZTtcbiAgbGV0IHNoaWZ0UHJlc3NlZCA9IGZhbHNlO1xuXG4gIGxldCB0YXJnZXRzID0ge1xuICAgIHRhcmdldDE6IG5ldyBUYXJnZXQsXG4gICAgdGFyZ2V0MjogbmV3IFRhcmdldCxcbiAgICB0YXJnZXQzOiBuZXcgVGFyZ2V0XG4gIH1cblxuICBsZXQgbWlzc2lsZXMgPSB7IG1pc3NpbGU6IG5ldyBNaXNzaWxlIH07XG5cbiAgLy8gbGV0IHRhcmdldCA9IHtcbiAgLy8gICB4OiA1MCxcbiAgLy8gICB5OiBjYW52YXMuaGVpZ2h0IC0gMTBcbiAgLy8gfTtcblxuICAvLyBjb25zdCBzYXVjZXJIZWlnaHQgPSAxNTtcbiAgLy8gY29uc3Qgc2F1Y2VyV2lkdGggPSA3MDtcbiAgLy8gbGV0IHNhdWNlclggPSAwO1xuICAvLyBsZXQgc2F1Y2VyWSA9IDA7XG5cbiAgLy8gbGV0IGh5cGVyRHJpdmUgPSBmYWxzZTtcbiAgXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd25IYW5kbGVyLCBmYWxzZSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBrZXlVcEhhbmRsZXIsIGZhbHNlKTtcblxuICBmdW5jdGlvbiBrZXlEb3duSGFuZGxlcihlKSB7XG4gICAgaWYgKGUua2V5ID09IFwiUmlnaHRcIiB8fCBlLmtleSA9PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgcmlnaHRQcmVzc2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZS5rZXkgPT0gXCJMZWZ0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgbGVmdFByZXNzZWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlLmtleSA9PSBcIkRvd25cIiB8fCBlLmtleSA9PSBcIkFycm93RG93blwiKSB7XG4gICAgICBkb3duUHJlc3NlZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGUua2V5ID09IFwiVXBcIiB8fCBlLmtleSA9PSBcIkFycm93VXBcIikge1xuICAgICAgdXBQcmVzc2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZS5rZXkgPT0gXCJTcGFjZWJhclwiIHx8IGUua2V5ID09IFwiIFwiKSB7XG4gICAgICBzcGFjZVByZXNzZWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlLmtleSA9PSBcIlNoaWZ0XCIpIHtcbiAgICAgIHNoaWZ0UHJlc3NlZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIFxuICBmdW5jdGlvbiBrZXlVcEhhbmRsZXIoZSkge1xuICAgIGlmIChlLmtleSA9PSBcIlJpZ2h0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgIHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlLmtleSA9PSBcIkxlZnRcIiB8fCBlLmtleSA9PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICBsZWZ0UHJlc3NlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlLmtleSA9PSBcIkRvd25cIiB8fCBlLmtleSA9PSBcIkFycm93RG93blwiKSB7XG4gICAgICBkb3duUHJlc3NlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlLmtleSA9PSBcIlVwXCIgfHwgZS5rZXkgPT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgIHVwUHJlc3NlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlLmtleSA9PSBcIlNwYWNlYmFyXCIgfHwgZS5rZXkgPT0gXCIgXCIpIHtcbiAgICAgIHNwYWNlUHJlc3NlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlLmtleSA9PSBcIlNoaWZ0XCIpIHtcbiAgICAgIHNoaWZ0UHJlc3NlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdTYXVjZXIoRmx5aW5nU2F1Y2VyKSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5yZWN0KEZseWluZ1NhdWNlci54LCBGbHlpbmdTYXVjZXIueSwgRmx5aW5nU2F1Y2VyLndpZHRoLCBGbHlpbmdTYXVjZXIuaGVpZ2h0KTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMDA5NUREXCI7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3VGFyZ2V0KHRhcmdldHMpIHtcbiAgICBPYmplY3QudmFsdWVzKHRhcmdldHMpLmZvckVhY2goIHRhcmdldCA9PiB7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgucmVjdCh0YXJnZXQueCwgdGFyZ2V0LnksIDEwLCAxMCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gXCIjRkYwMDAwXCI7XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBkcmF3QmVhbShGbHlpbmdTYXVjZXIpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LnJlY3QoRmx5aW5nU2F1Y2VyLnggKyAoRmx5aW5nU2F1Y2VyLndpZHRoIC8gMikgLSAxMCwgRmx5aW5nU2F1Y2VyLnkgKyBGbHlpbmdTYXVjZXIuaGVpZ2h0LCAyMCwgY2FudmFzLmhlaWdodCAtIEZseWluZ1NhdWNlci55KTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI0MCwgMjU1LCAwLCAwLjc1KVwiO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LmNsb3NlUGF0aCgpOyAgXG4gIH1cblxuICBmdW5jdGlvbiBkcmF3U2NvcmUoKSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLCAwLCAwLCAxKVwiXG4gICAgY3R4LmZpbGxUZXh0KGBTY29yZTogJHtzY29yZX1gLCA4MDAsIDQwKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3TWlzc2lsZShtaXNzaWxlcykge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgucmVjdChtaXNzaWxlcy5taXNzaWxlLngsIG1pc3NpbGVzLm1pc3NpbGUueSwgOCwgMzYpXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiZ3JheVwiO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhdygpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICBsZXQgRmx5aW5nU2F1Y2VyID0gU2F1Y2VyO1xuICAgIC8vIGNvbnNvbGUubG9nKEZseWluZ1NhdWNlcilcbiAgICBkcmF3U2F1Y2VyKEZseWluZ1NhdWNlcik7XG4gICAgZHJhd1RhcmdldCh0YXJnZXRzKTtcbiAgICBkcmF3U2NvcmUoKTtcbiAgICBkcmF3TWlzc2lsZShtaXNzaWxlcyk7XG4gICAgbWlzc2lsZXMubWlzc2lsZS55ICs9IG1pc3NpbGVzLm1pc3NpbGUuZHk7XG4gICAgaWYgKG1pc3NpbGVzLm1pc3NpbGUueSA8IC0zNikge1xuICAgICAgZGVsZXRlIG1pc3NpbGVzLm1pc3NpbGU7XG4gICAgICBtaXNzaWxlcy5taXNzaWxlID0gbmV3IE1pc3NpbGU7XG4gICAgfVxuICAgIFxuICAgIGlmIChzcGFjZVByZXNzZWQpIHtcbiAgICAgIGRyYXdCZWFtKEZseWluZ1NhdWNlcik7XG5cbiAgICAgIE9iamVjdC52YWx1ZXModGFyZ2V0cykuZm9yRWFjaCh0YXJnZXQgPT4ge1xuICAgICAgICBpZiAodGFyZ2V0LnggKyAxMCA+IEZseWluZ1NhdWNlci54ICsgKEZseWluZ1NhdWNlci53aWR0aCAvIDIpIC0gMTAgJiYgdGFyZ2V0LnggPCBGbHlpbmdTYXVjZXIueCArIChGbHlpbmdTYXVjZXIud2lkdGggLyAyKSArIDEwKSB7XG4gICAgICAgICAgdGFyZ2V0LnkgLT0gMztcbiAgICAgICAgICBpZiAodGFyZ2V0LnkgPD0gRmx5aW5nU2F1Y2VyLnkgKyBGbHlpbmdTYXVjZXIuaGVpZ2h0KSB7XG4gICAgICAgICAgICBzY29yZSsrO1xuICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gdGFyZ2V0cykge1xuICAgICAgICAgICAgICBpZiAodGFyZ2V0c1trZXldID09PSB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGFyZ2V0c1trZXldO1xuICAgICAgICAgICAgICAgIHRhcmdldHNba2V5XSA9IG5ldyBUYXJnZXQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0LnkgKz0gNTtcbiAgICAgICAgICBpZiAodGFyZ2V0LnkgPiBjYW52YXMuaGVpZ2h0IC0gMTApIHRhcmdldC55ID0gY2FudmFzLmhlaWdodCAtIDEwOyAgXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIE9iamVjdC52YWx1ZXModGFyZ2V0cykuZm9yRWFjaCh0YXJnZXQgPT4ge1xuICAgICAgICB0YXJnZXQueSArPSA1O1xuICAgICAgICBpZiAodGFyZ2V0LnkgPiBjYW52YXMuaGVpZ2h0IC0gMTApIHRhcmdldC55ID0gY2FudmFzLmhlaWdodCAtIDEwO1xuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoc2hpZnRQcmVzc2VkKSB7XG4gICAgICBGbHlpbmdTYXVjZXIuaHlwZXJEcml2ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIEZseWluZ1NhdWNlci5oeXBlckRyaXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0UHJlc3NlZCkge1xuICAgICAgaWYgKEZseWluZ1NhdWNlci5oeXBlckRyaXZlKSB7XG4gICAgICAgIEZseWluZ1NhdWNlci54ICs9IDEyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgRmx5aW5nU2F1Y2VyLnggKz0gNjtcbiAgICAgIH1cblxuICAgICAgaWYgKEZseWluZ1NhdWNlci54ICsgRmx5aW5nU2F1Y2VyLndpZHRoID4gY2FudmFzLndpZHRoKSB7XG4gICAgICAgIEZseWluZ1NhdWNlci54ID0gY2FudmFzLndpZHRoIC0gRmx5aW5nU2F1Y2VyLndpZHRoO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChsZWZ0UHJlc3NlZCkge1xuICAgICAgaWYgKEZseWluZ1NhdWNlci5oeXBlckRyaXZlKSB7XG4gICAgICAgIEZseWluZ1NhdWNlci54IC09IDEyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgRmx5aW5nU2F1Y2VyLnggLT0gNjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKEZseWluZ1NhdWNlci54IDwgMCkge1xuICAgICAgICBGbHlpbmdTYXVjZXIueCA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmICh1cFByZXNzZWQpIHtcbiAgICAgIGlmIChGbHlpbmdTYXVjZXIuaHlwZXJEcml2ZSkge1xuICAgICAgICBGbHlpbmdTYXVjZXIueSAtPSAxMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIEZseWluZ1NhdWNlci55IC09IDY7XG4gICAgICB9XG5cbiAgICAgIGlmIChGbHlpbmdTYXVjZXIueSA8IDApIHtcbiAgICAgICAgRmx5aW5nU2F1Y2VyLnkgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChkb3duUHJlc3NlZCkge1xuICAgICAgaWYgKEZseWluZ1NhdWNlci5oeXBlckRyaXZlKSB7XG4gICAgICAgIEZseWluZ1NhdWNlci55ICs9IDEyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgRmx5aW5nU2F1Y2VyLnkgKz0gNjtcbiAgICAgIH1cblxuICAgICAgaWYgKEZseWluZ1NhdWNlci55ICsgRmx5aW5nU2F1Y2VyLmhlaWdodCA+IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgRmx5aW5nU2F1Y2VyLnkgPSBjYW52YXMuaGVpZ2h0IC0gRmx5aW5nU2F1Y2VyLmhlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xuICB9XG5cbiAgZHJhdygpO1xufSk7XG4iLCJjb25zdCBGbHlpbmdTYXVjZXIgPSB7XG4gIGhlaWdodDogMTUsXG4gIHdpZHRoOiA3MCxcbiAgeDogMCxcbiAgeTogMCxcbiAgaHlwZXJEcml2ZTogZmFsc2Vcbn1cblxuLy8gZnVuY3Rpb24gRmx5aW5nU2F1Y2VyID0gKCkgPT4ge1xuLy8gICB0aGlzLmhlaWdodCA9IDE1O1xuLy8gICB0aGlzLndpZHRoID0gNzA7XG4vLyAgIHRoaXMueCA9IDA7XG4vLyAgIHRoaXMueSA9IDA7XG4vLyAgIHRoaXMuaHlwZXJEcml2ZSA9IGZhbHNlO1xuLy8gfVxuXG5cbmV4cG9ydCBkZWZhdWx0IEZseWluZ1NhdWNlcjsiLCJjbGFzcyBNaXNzaWxlIHtcbiAgY29uc3RydWN0b3IoRmx5aW5nU2F1Y2VyKSB7XG4gICAgdGhpcy54ID0gNDAgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4OTApO1xuICAgIHRoaXMueSA9IDY1MDtcbiAgICB0aGlzLmR5ID0gLTE1O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWlzc2lsZTsiLCJjbGFzcyBUYXJnZXQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnggPSA0MCArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDg5MCk7XG4gICAgdGhpcy55ID0gNjQwO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGFyZ2V0OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=