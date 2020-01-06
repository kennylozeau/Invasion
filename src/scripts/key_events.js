let rightPressed = false;
let leftPressed = false;
let downPressed = false;
let upPressed = false;
let spacePressed = false;
let shiftPressed = false;

function keyDownHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  }
  else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  }
  else if (e.key == "Down" || e.key == "ArrowDown") {
    downPressed = true;
  }
  else if (e.key == "Up" || e.key == "ArrowUp") {
    upPressed = true;
  }
  else if (e.key == "Spacebar" || e.key == " ") {
    spacePressed = true;
  }
  else if (e.key == "Shift") {
    shiftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  }
  else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  }
  else if (e.key == "Down" || e.key == "ArrowDown") {
    downPressed = false;
  }
  else if (e.key == "Up" || e.key == "ArrowUp") {
    upPressed = false;
  }
  else if (e.key == "Spacebar" || e.key == " ") {
    spacePressed = false;
  }
  else if (e.key == "Shift") {
    shiftPressed = false;
  }
}

module.exports = { keyDownHandler, keyUpHandler };