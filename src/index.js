import "./styles/index.css";

window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  let rightPressed = false;
  let leftPressed = false;
  let downPressed = false;
  let upPressed = false;
  let spacePressed = false;
  let shiftPressed = false;

  const saucerHeight = 15;
  const saucerWidth = 70;
  let saucerX = 0;
  let saucerY = 0;

  let hyperDrive = false;
  
  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

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

  function drawSaucer() {
    ctx.beginPath();
    ctx.rect(saucerX, saucerY, saucerWidth, saucerHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }

  function drawBeam() {
    ctx.beginPath();
    ctx.rect(saucerX + (saucerWidth / 2) - 10, saucerY + saucerHeight, 20, canvas.height - saucerY);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSaucer();
    
    if (spacePressed) {
      drawBeam();
    }

    if (shiftPressed) {
      hyperDrive = true;
    } else {
      hyperDrive = false;
    }

    if (rightPressed) {
      if (hyperDrive) {
        saucerX += 12;
      } else {
        saucerX += 6;
      }

      if (saucerX + saucerWidth > canvas.width) {
        saucerX = canvas.width - saucerWidth;
      }
    }
    else if (leftPressed) {
      if (hyperDrive) {
        saucerX -= 12;
      } else {
        saucerX -= 6;
      }
      
      if (saucerX < 0) {
        saucerX = 0;
      }
    }
    
    if (upPressed) {
      if (hyperDrive) {
        saucerY -= 12;
      } else {
        saucerY -= 6;
      }

      if (saucerY < 0) {
        saucerY = 0;
      }
    }
    else if (downPressed) {
      if (hyperDrive) {
        saucerY += 12;
      } else {
        saucerY += 6;
      }

      if (saucerY + saucerHeight > canvas.height) {
        saucerY = canvas.height - saucerHeight;
      }
    }
    requestAnimationFrame(draw);
  }

  draw();
});
