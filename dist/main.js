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
    saucerImage.src = './src/assets/images/saucer.png';
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
    missileImage.src = './src/assets/images/missile.png';
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
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleNotFoundError: Module not found: Error: Can't resolve './src/assets/images/landscape.png' in '/Users/kennylozeau/Desktop/Invasion/src/styles'\n    at /Users/kennylozeau/Desktop/Invasion/node_modules/webpack/lib/Compilation.js:925:10\n    at /Users/kennylozeau/Desktop/Invasion/node_modules/webpack/lib/NormalModuleFactory.js:401:22\n    at /Users/kennylozeau/Desktop/Invasion/node_modules/webpack/lib/NormalModuleFactory.js:130:21\n    at /Users/kennylozeau/Desktop/Invasion/node_modules/webpack/lib/NormalModuleFactory.js:224:22\n    at /Users/kennylozeau/Desktop/Invasion/node_modules/neo-async/async.js:2830:7\n    at /Users/kennylozeau/Desktop/Invasion/node_modules/neo-async/async.js:6877:13\n    at /Users/kennylozeau/Desktop/Invasion/node_modules/webpack/lib/NormalModuleFactory.js:214:25\n    at /Users/kennylozeau/Desktop/Invasion/node_modules/enhanced-resolve/lib/Resolver.js:213:14\n    at /Users/kennylozeau/Desktop/Invasion/node_modules/enhanced-resolve/lib/Resolver.js:285:5\n    at eval (eval at create (/Users/kennylozeau/Desktop/Invasion/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at /Users/kennylozeau/Desktop/Invasion/node_modules/enhanced-resolve/lib/UnsafeCachePlugin.js:44:7\n    at /Users/kennylozeau/Desktop/Invasion/node_modules/enhanced-resolve/lib/Resolver.js:285:5\n    at eval (eval at create (/Users/kennylozeau/Desktop/Invasion/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at /Users/kennylozeau/Desktop/Invasion/node_modules/enhanced-resolve/lib/Resolver.js:285:5\n    at eval (eval at create (/Users/kennylozeau/Desktop/Invasion/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:27:1)\n    at /Users/kennylozeau/Desktop/Invasion/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:67:43\n    at /Users/kennylozeau/Desktop/Invasion/node_modules/enhanced-resolve/lib/Resolver.js:285:5\n    at eval (eval at create (/Users/kennylozeau/Desktop/Invasion/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at /Users/kennylozeau/Desktop/Invasion/node_modules/enhanced-resolve/lib/Resolver.js:285:5\n    at eval (eval at create (/Users/kennylozeau/Desktop/Invasion/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:27:1)\n    at /Users/kennylozeau/Desktop/Invasion/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:67:43\n    at /Users/kennylozeau/Desktop/Invasion/node_modules/enhanced-resolve/lib/Resolver.js:285:5\n    at eval (eval at create (/Users/kennylozeau/Desktop/Invasion/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at /Users/kennylozeau/Desktop/Invasion/node_modules/enhanced-resolve/lib/Resolver.js:285:5\n    at eval (eval at create (/Users/kennylozeau/Desktop/Invasion/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at /Users/kennylozeau/Desktop/Invasion/node_modules/enhanced-resolve/lib/DirectoryExistsPlugin.js:27:15\n    at /Users/kennylozeau/Desktop/Invasion/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:85:15\n    at processTicksAndRejections (internal/process/task_queues.js:75:11)");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ZseWluZ19zYXVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWlzc2lsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy90YXJnZXQuanMiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwic2NvcmUiLCJoZWFsdGgiLCJnYW1lT3ZlciIsInJpZ2h0UHJlc3NlZCIsImxlZnRQcmVzc2VkIiwiZG93blByZXNzZWQiLCJ1cFByZXNzZWQiLCJzcGFjZVByZXNzZWQiLCJzaGlmdFByZXNzZWQiLCJ0YXJnZXRzIiwidGFyZ2V0MSIsIlRhcmdldCIsInRhcmdldDIiLCJ0YXJnZXQzIiwibWlzc2lsZXMiLCJtaXNzaWxlIiwiTWlzc2lsZSIsImtleURvd25IYW5kbGVyIiwia2V5VXBIYW5kbGVyIiwiZSIsImtleSIsImRyYXdTYXVjZXIiLCJGbHlpbmdTYXVjZXIiLCJzYXVjZXJJbWFnZSIsIkltYWdlIiwic3JjIiwiYmVnaW5QYXRoIiwiZHJhd0ltYWdlIiwieCIsInkiLCJjbG9zZVBhdGgiLCJkcmF3VGFyZ2V0IiwiT2JqZWN0IiwidmFsdWVzIiwiZm9yRWFjaCIsInRhcmdldCIsInJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsIiwiZHJhd0JlYW0iLCJ3aWR0aCIsImhlaWdodCIsImRyYXdTY29yZSIsImZvbnQiLCJmaWxsVGV4dCIsImRyYXdIZWFsdGgiLCJkcmF3R2FtZU92ZXIiLCJkcmF3UHVsbFVwIiwiZHJhd0V4cGxvc2lvbiIsImFyYyIsIk1hdGgiLCJQSSIsImRyYXdNaXNzaWxlIiwibWlzc2lsZUltYWdlIiwiY2hlY2tNaXNzaWxlU3RyaWtlIiwiZHJhdyIsImNsZWFyUmVjdCIsIlNhdWNlciIsImR5IiwiaHlwZXJEcml2ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZsb29yIiwicmFuZG9tIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBRUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDLFlBQU07QUFDaEQsTUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZjtBQUNBLE1BQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVo7QUFFQSxNQUFJQyxLQUFLLEdBQUcsQ0FBWjtBQUNBLE1BQUlDLE1BQU0sR0FBRyxHQUFiO0FBQ0EsTUFBSUMsUUFBUSxHQUFHLEtBQWY7QUFF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QVEsR0FBR3FELElBQUksRUFBZjtBQUNEO0FBQ0YsQ0FsU0QsRTs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQSxJQUFNakMsWUFBWSxHQUFHO0FBQ25CbUIsUUFBTSxFQUFFLEVBRFc7QUFFbkJELE9BQUssRUFBRSxFQUZZO0FBR25CWixHQUFDLEVBQUUsQ0FIZ0I7QUFJbkJDLEdBQUMsRUFBRSxDQUpnQjtBQUtuQjhCLFlBQVUsRUFBRTtBQUxPLENBQXJCLEMsQ0FRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHZXJDLDJFQUFmLEU7Ozs7Ozs7Ozs7Ozs7SUNqQk1OLE8sR0FDSixpQkFBWU0sWUFBWixFQUEwQjtBQUFBOztBQUN4QixPQUFLTSxDQUFMLEdBQVMsS0FBS3NCLElBQUksQ0FBQ1csS0FBTCxDQUFXWCxJQUFJLENBQUNZLE1BQUwsS0FBZ0IsR0FBM0IsQ0FBZDtBQUNBLE9BQUtqQyxDQUFMLEdBQVMsR0FBVDtBQUNBLE9BQUs2QixFQUFMLEdBQVUsQ0FBQyxFQUFYO0FBQ0EsT0FBS2pCLE1BQUwsR0FBYyxFQUFkO0FBQ0EsT0FBS0QsS0FBTCxHQUFhLEVBQWI7QUFDRCxDOztBQUdIdUIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCaEQsT0FBakIsQzs7Ozs7Ozs7Ozs7OztJQ1ZNTCxNLEdBQ0osa0JBQWM7QUFBQTs7QUFDWixPQUFLaUIsQ0FBTCxHQUFTLEtBQUtzQixJQUFJLENBQUNXLEtBQUwsQ0FBV1gsSUFBSSxDQUFDWSxNQUFMLEtBQWdCLEdBQTNCLENBQWQ7QUFDQSxPQUFLakMsQ0FBTCxHQUFTLEdBQVQ7QUFDRCxDOztBQUdIa0MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCckQsTUFBakIsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5jc3NcIjtcbi8vIGltcG9ydCB7IGtleURvd25IYW5kbGVyLCBrZXlVcEhhbmRsZXIgfSBmcm9tICcuL3NjcmlwdHMva2V5X2V2ZW50cyc7XG5pbXBvcnQgU2F1Y2VyIGZyb20gJy4vc2NyaXB0cy9mbHlpbmdfc2F1Y2VyJztcbmltcG9ydCBUYXJnZXQgZnJvbSAnLi9zY3JpcHRzL3RhcmdldCc7XG5pbXBvcnQgTWlzc2lsZSBmcm9tICcuL3NjcmlwdHMvbWlzc2lsZSc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIik7XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgbGV0IHNjb3JlID0gMDtcbiAgbGV0IGhlYWx0aCA9IDEwMDtcbiAgbGV0IGdhbWVPdmVyID0gZmFsc2U7XG5cbiAgbGV0IHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xuICBsZXQgbGVmdFByZXNzZWQgPSBmYWxzZTtcbiAgbGV0IGRvd25QcmVzc2VkID0gZmFsc2U7XG4gIGxldCB1cFByZXNzZWQgPSBmYWxzZTtcbiAgbGV0IHNwYWNlUHJlc3NlZCA9IGZhbHNlO1xuICBsZXQgc2hpZnRQcmVzc2VkID0gZmFsc2U7XG5cbiAgbGV0IHRhcmdldHMgPSB7XG4gICAgdGFyZ2V0MTogbmV3IFRhcmdldCxcbiAgICB0YXJnZXQyOiBuZXcgVGFyZ2V0LFxuICAgIHRhcmdldDM6IG5ldyBUYXJnZXRcbiAgfVxuXG4gIGxldCBtaXNzaWxlcyA9IHsgbWlzc2lsZTogbmV3IE1pc3NpbGUgfTtcblxuICAvLyBsZXQgdGFyZ2V0ID0ge1xuICAvLyAgIHg6IDUwLFxuICAvLyAgIHk6IGNhbnZhcy5oZWlnaHQgLSAxMFxuICAvLyB9O1xuXG4gIC8vIGNvbnN0IHNhdWNlckhlaWdodCA9IDE1O1xuICAvLyBjb25zdCBzYXVjZXJXaWR0aCA9IDcwO1xuICAvLyBsZXQgc2F1Y2VyWCA9IDA7XG4gIC8vIGxldCBzYXVjZXJZID0gMDtcblxuICAvLyBsZXQgaHlwZXJEcml2ZSA9IGZhbHNlO1xuICBcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5RG93bkhhbmRsZXIsIGZhbHNlKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGtleVVwSGFuZGxlciwgZmFsc2UpO1xuXG4gIGZ1bmN0aW9uIGtleURvd25IYW5kbGVyKGUpIHtcbiAgICBpZiAoZS5rZXkgPT0gXCJSaWdodFwiIHx8IGUua2V5ID09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICByaWdodFByZXNzZWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlLmtleSA9PSBcIkxlZnRcIiB8fCBlLmtleSA9PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICBsZWZ0UHJlc3NlZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGUua2V5ID09IFwiRG93blwiIHx8IGUua2V5ID09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgIGRvd25QcmVzc2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZS5rZXkgPT0gXCJVcFwiIHx8IGUua2V5ID09IFwiQXJyb3dVcFwiKSB7XG4gICAgICB1cFByZXNzZWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlLmtleSA9PSBcIlNwYWNlYmFyXCIgfHwgZS5rZXkgPT0gXCIgXCIpIHtcbiAgICAgIHNwYWNlUHJlc3NlZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGUua2V5ID09IFwiU2hpZnRcIikge1xuICAgICAgc2hpZnRQcmVzc2VkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGtleVVwSGFuZGxlcihlKSB7XG4gICAgaWYgKGUua2V5ID09IFwiUmlnaHRcIiB8fCBlLmtleSA9PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgcmlnaHRQcmVzc2VkID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2UgaWYgKGUua2V5ID09IFwiTGVmdFwiIHx8IGUua2V5ID09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgIGxlZnRQcmVzc2VkID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2UgaWYgKGUua2V5ID09IFwiRG93blwiIHx8IGUua2V5ID09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgIGRvd25QcmVzc2VkID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2UgaWYgKGUua2V5ID09IFwiVXBcIiB8fCBlLmtleSA9PSBcIkFycm93VXBcIikge1xuICAgICAgdXBQcmVzc2VkID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2UgaWYgKGUua2V5ID09IFwiU3BhY2ViYXJcIiB8fCBlLmtleSA9PSBcIiBcIikge1xuICAgICAgc3BhY2VQcmVzc2VkID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2UgaWYgKGUua2V5ID09IFwiU2hpZnRcIikge1xuICAgICAgc2hpZnRQcmVzc2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJhd1NhdWNlcihGbHlpbmdTYXVjZXIpIHtcbiAgICBsZXQgc2F1Y2VySW1hZ2UgPSBuZXcgSW1hZ2U7XG4gICAgc2F1Y2VySW1hZ2Uuc3JjID0gJy4vc3JjL2Fzc2V0cy9pbWFnZXMvc2F1Y2VyLnBuZyc7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIC8vIGN0eC5yZWN0KEZseWluZ1NhdWNlci54LCBGbHlpbmdTYXVjZXIueSwgRmx5aW5nU2F1Y2VyLndpZHRoLCBGbHlpbmdTYXVjZXIuaGVpZ2h0KTtcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gXCIjMDA5NUREXCI7XG4gICAgLy8gY3R4LmZpbGwoKTtcbiAgICBjdHguZHJhd0ltYWdlKHNhdWNlckltYWdlLCBGbHlpbmdTYXVjZXIueCwgRmx5aW5nU2F1Y2VyLnkpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdUYXJnZXQodGFyZ2V0cykge1xuICAgIE9iamVjdC52YWx1ZXModGFyZ2V0cykuZm9yRWFjaCggdGFyZ2V0ID0+IHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5yZWN0KHRhcmdldC54LCB0YXJnZXQueSwgMTAsIDEwKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNGRjAwMDBcIjtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdCZWFtKEZseWluZ1NhdWNlcikge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgucmVjdChGbHlpbmdTYXVjZXIueCArIChGbHlpbmdTYXVjZXIud2lkdGggLyAyKSAtIDEwLCBGbHlpbmdTYXVjZXIueSArIEZseWluZ1NhdWNlci5oZWlnaHQsIDIwLCBjYW52YXMuaGVpZ2h0IC0gRmx5aW5nU2F1Y2VyLnkpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjQwLCAyNTUsIDAsIDAuNzUpXCI7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7ICBcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdTY29yZSgpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsIDAsIDAsIDEpXCJcbiAgICBjdHguZmlsbFRleHQoYFNjb3JlOiAke3Njb3JlfWAsIDc4MCwgNDApO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdIZWFsdGgoKSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLCAwLCAwLCAxKVwiXG4gICAgY3R4LmZpbGxUZXh0KGBIZWFsdGg6ICR7aGVhbHRofWAsIDc4MCwgODApO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdHYW1lT3ZlcigpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmZvbnQgPSBcIjgwcHggQXJpYWxcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjRkYwMDAwXCJcbiAgICBjdHguZmlsbFRleHQoXCJHQU1FIE9WRVJcIiwgMjMwLCAzMDApO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdQdWxsVXAoKSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5mb250ID0gXCI4MHB4IEFyaWFsXCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI0ZGMDAwMFwiXG4gICAgY3R4LmZpbGxUZXh0KFwiUFVMTCBVUFwiLCAzMDUsIDIwMCk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhd0V4cGxvc2lvbih4LCB5KSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoeCwgeSwgMjUsIDAsIDIgKiBNYXRoLlBJKVxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNGRjAwMDBcIlxuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhd01pc3NpbGUobWlzc2lsZXMpIHtcbiAgICBsZXQgbWlzc2lsZUltYWdlID0gbmV3IEltYWdlO1xuICAgIG1pc3NpbGVJbWFnZS5zcmMgPSAnLi9zcmMvYXNzZXRzL2ltYWdlcy9taXNzaWxlLnBuZyc7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIC8vIGN0eC5yZWN0KG1pc3NpbGVzLm1pc3NpbGUueCwgbWlzc2lsZXMubWlzc2lsZS55LCBtaXNzaWxlcy5taXNzaWxlLndpZHRoLCBtaXNzaWxlcy5taXNzaWxlLmhlaWdodClcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gXCJncmF5XCI7XG4gICAgLy8gY3R4LmZpbGwoKTtcbiAgICBjdHguZHJhd0ltYWdlKG1pc3NpbGVJbWFnZSwgbWlzc2lsZXMubWlzc2lsZS54LCBtaXNzaWxlcy5taXNzaWxlLnkpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrTWlzc2lsZVN0cmlrZShGbHlpbmdTYXVjZXIpIHtcbiAgICBpZiAobWlzc2lsZXMubWlzc2lsZS54IDwgRmx5aW5nU2F1Y2VyLnggKyBGbHlpbmdTYXVjZXIud2lkdGggJiZcbiAgICAgICAgbWlzc2lsZXMubWlzc2lsZS54ICsgbWlzc2lsZXMubWlzc2lsZS53aWR0aCA+IEZseWluZ1NhdWNlci54ICYmXG4gICAgICAgIG1pc3NpbGVzLm1pc3NpbGUueSA8IEZseWluZ1NhdWNlci55ICsgRmx5aW5nU2F1Y2VyLmhlaWdodCAmJlxuICAgICAgICBtaXNzaWxlcy5taXNzaWxlLnkgKyBtaXNzaWxlcy5taXNzaWxlLmhlaWdodCA+IEZseWluZ1NhdWNlci55XG4gICAgICApIHtcbiAgICAgICAgZHJhd0V4cGxvc2lvbihtaXNzaWxlcy5taXNzaWxlLnggKyAobWlzc2lsZXMubWlzc2lsZS53aWR0aCAvIDIpLCBtaXNzaWxlcy5taXNzaWxlLnkpXG4gICAgICAgIGRlbGV0ZSBtaXNzaWxlcy5taXNzaWxlO1xuICAgICAgICBtaXNzaWxlcy5taXNzaWxlID0gbmV3IE1pc3NpbGU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZHJhdygpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICBsZXQgRmx5aW5nU2F1Y2VyID0gU2F1Y2VyO1xuICAgIC8vIGNvbnNvbGUubG9nKEZseWluZ1NhdWNlcilcbiAgICBkcmF3U2F1Y2VyKEZseWluZ1NhdWNlcik7XG5cbiAgICBpZiAoRmx5aW5nU2F1Y2VyLnkgKyBGbHlpbmdTYXVjZXIuaGVpZ2h0ID09PSBjYW52YXMuaGVpZ2h0KSB7XG4gICAgICBkcmF3UHVsbFVwKCk7XG4gICAgICBoZWFsdGggLT0gMTtcbiAgICB9XG5cbiAgICBkcmF3VGFyZ2V0KHRhcmdldHMpO1xuICAgIGRyYXdTY29yZSgpO1xuICAgIGRyYXdIZWFsdGgoKTtcbiAgICBkcmF3TWlzc2lsZShtaXNzaWxlcyk7XG4gICAgbWlzc2lsZXMubWlzc2lsZS55ICs9IG1pc3NpbGVzLm1pc3NpbGUuZHk7XG4gICAgaWYgKG1pc3NpbGVzLm1pc3NpbGUueSA8IC1taXNzaWxlcy5taXNzaWxlLmhlaWdodCkge1xuICAgICAgZGVsZXRlIG1pc3NpbGVzLm1pc3NpbGU7XG4gICAgICBtaXNzaWxlcy5taXNzaWxlID0gbmV3IE1pc3NpbGU7XG4gICAgfVxuICAgIFxuICAgIGlmIChjaGVja01pc3NpbGVTdHJpa2UoRmx5aW5nU2F1Y2VyKSkge1xuICAgICAgaGVhbHRoIC09IDIwO1xuICAgIH1cbiAgICBcbiAgICBpZiAoaGVhbHRoIDw9IDApIHtcbiAgICAgIGRyYXdHYW1lT3ZlcigpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHNwYWNlUHJlc3NlZCkge1xuICAgICAgZHJhd0JlYW0oRmx5aW5nU2F1Y2VyKTtcblxuICAgICAgT2JqZWN0LnZhbHVlcyh0YXJnZXRzKS5mb3JFYWNoKHRhcmdldCA9PiB7XG4gICAgICAgIGlmICh0YXJnZXQueCArIDEwID4gRmx5aW5nU2F1Y2VyLnggKyAoRmx5aW5nU2F1Y2VyLndpZHRoIC8gMikgLSAxMCAmJiB0YXJnZXQueCA8IEZseWluZ1NhdWNlci54ICsgKEZseWluZ1NhdWNlci53aWR0aCAvIDIpICsgMTApIHtcbiAgICAgICAgICB0YXJnZXQueSAtPSAzO1xuICAgICAgICAgIGlmICh0YXJnZXQueSA8PSBGbHlpbmdTYXVjZXIueSArIEZseWluZ1NhdWNlci5oZWlnaHQpIHtcbiAgICAgICAgICAgIHNjb3JlKys7XG4gICAgICAgICAgICBmb3IobGV0IGtleSBpbiB0YXJnZXRzKSB7XG4gICAgICAgICAgICAgIGlmICh0YXJnZXRzW2tleV0gPT09IHRhcmdldCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0YXJnZXRzW2tleV07XG4gICAgICAgICAgICAgICAgdGFyZ2V0c1trZXldID0gbmV3IFRhcmdldDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXQueSArPSA1O1xuICAgICAgICAgIGlmICh0YXJnZXQueSA+IGNhbnZhcy5oZWlnaHQgLSAxMCkgdGFyZ2V0LnkgPSBjYW52YXMuaGVpZ2h0IC0gMTA7ICBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LnZhbHVlcyh0YXJnZXRzKS5mb3JFYWNoKHRhcmdldCA9PiB7XG4gICAgICAgIHRhcmdldC55ICs9IDU7XG4gICAgICAgIGlmICh0YXJnZXQueSA+IGNhbnZhcy5oZWlnaHQgLSAxMCkgdGFyZ2V0LnkgPSBjYW52YXMuaGVpZ2h0IC0gMTA7XG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChzaGlmdFByZXNzZWQpIHtcbiAgICAgIEZseWluZ1NhdWNlci5oeXBlckRyaXZlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgRmx5aW5nU2F1Y2VyLmh5cGVyRHJpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAocmlnaHRQcmVzc2VkKSB7XG4gICAgICBpZiAoRmx5aW5nU2F1Y2VyLmh5cGVyRHJpdmUpIHtcbiAgICAgICAgRmx5aW5nU2F1Y2VyLnggKz0gMTI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBGbHlpbmdTYXVjZXIueCArPSA2O1xuICAgICAgfVxuXG4gICAgICBpZiAoRmx5aW5nU2F1Y2VyLnggKyBGbHlpbmdTYXVjZXIud2lkdGggPiBjYW52YXMud2lkdGgpIHtcbiAgICAgICAgRmx5aW5nU2F1Y2VyLnggPSBjYW52YXMud2lkdGggLSBGbHlpbmdTYXVjZXIud2lkdGg7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGxlZnRQcmVzc2VkKSB7XG4gICAgICBpZiAoRmx5aW5nU2F1Y2VyLmh5cGVyRHJpdmUpIHtcbiAgICAgICAgRmx5aW5nU2F1Y2VyLnggLT0gMTI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBGbHlpbmdTYXVjZXIueCAtPSA2O1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoRmx5aW5nU2F1Y2VyLnggPCAwKSB7XG4gICAgICAgIEZseWluZ1NhdWNlci54ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKHVwUHJlc3NlZCkge1xuICAgICAgaWYgKEZseWluZ1NhdWNlci5oeXBlckRyaXZlKSB7XG4gICAgICAgIEZseWluZ1NhdWNlci55IC09IDEyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgRmx5aW5nU2F1Y2VyLnkgLT0gNjtcbiAgICAgIH1cblxuICAgICAgaWYgKEZseWluZ1NhdWNlci55IDwgMCkge1xuICAgICAgICBGbHlpbmdTYXVjZXIueSA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvd25QcmVzc2VkKSB7XG4gICAgICBpZiAoRmx5aW5nU2F1Y2VyLmh5cGVyRHJpdmUpIHtcbiAgICAgICAgRmx5aW5nU2F1Y2VyLnkgKz0gMTI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBGbHlpbmdTYXVjZXIueSArPSA2O1xuICAgICAgfVxuXG4gICAgICBpZiAoRmx5aW5nU2F1Y2VyLnkgKyBGbHlpbmdTYXVjZXIuaGVpZ2h0ID4gY2FudmFzLmhlaWdodCkge1xuICAgICAgICBGbHlpbmdTYXVjZXIueSA9IGNhbnZhcy5oZWlnaHQgLSBGbHlpbmdTYXVjZXIuaGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XG4gIH1cblxuICBpZiAoIWdhbWVPdmVyKSB7XG4gICAgZ2FtZU92ZXIgPSBkcmF3KCk7XG4gIH1cbn0pO1xuIiwiY29uc3QgRmx5aW5nU2F1Y2VyID0ge1xuICBoZWlnaHQ6IDIwLFxuICB3aWR0aDogODAsXG4gIHg6IDAsXG4gIHk6IDAsXG4gIGh5cGVyRHJpdmU6IGZhbHNlXG59XG5cbi8vIGZ1bmN0aW9uIEZseWluZ1NhdWNlciA9ICgpID0+IHtcbi8vICAgdGhpcy5oZWlnaHQgPSAxNTtcbi8vICAgdGhpcy53aWR0aCA9IDcwO1xuLy8gICB0aGlzLnggPSAwO1xuLy8gICB0aGlzLnkgPSAwO1xuLy8gICB0aGlzLmh5cGVyRHJpdmUgPSBmYWxzZTtcbi8vIH1cblxuXG5leHBvcnQgZGVmYXVsdCBGbHlpbmdTYXVjZXI7IiwiY2xhc3MgTWlzc2lsZSB7XG4gIGNvbnN0cnVjdG9yKEZseWluZ1NhdWNlcikge1xuICAgIHRoaXMueCA9IDQwICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogODkwKTtcbiAgICB0aGlzLnkgPSA2NTA7XG4gICAgdGhpcy5keSA9IC0xNTtcbiAgICB0aGlzLmhlaWdodCA9IDQwO1xuICAgIHRoaXMud2lkdGggPSAxMDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1pc3NpbGU7IiwiY2xhc3MgVGFyZ2V0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy54ID0gNDAgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4OTApO1xuICAgIHRoaXMueSA9IDY0MDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRhcmdldDsiXSwic291cmNlUm9vdCI6IiJ9