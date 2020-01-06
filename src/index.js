import "./styles/index.css";
// import { keyDownHandler, keyUpHandler } from './scripts/key_events';
import Saucer from './scripts/flying_saucer';

window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  let rightPressed = false;
  let leftPressed = false;
  let downPressed = false;
  let upPressed = false;
  let spacePressed = false;
  let shiftPressed = false;

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

  function drawSaucer(FlyingSaucer) {
    ctx.beginPath();
    ctx.rect(FlyingSaucer.x, FlyingSaucer.y, FlyingSaucer.width, FlyingSaucer.height);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }

  function drawBeam(FlyingSaucer) {
    ctx.beginPath();
    ctx.rect(FlyingSaucer.x + (FlyingSaucer.width / 2) - 10, FlyingSaucer.y + FlyingSaucer.height, 20, canvas.height - FlyingSaucer.y);
    ctx.fillStyle = "rgba(240, 255, 0, 0.75)";
    ctx.fill();
    ctx.closePath();  
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let FlyingSaucer = Saucer;
    // console.log(FlyingSaucer)
    drawSaucer(FlyingSaucer);
    
    if (spacePressed) {
      drawBeam(FlyingSaucer);
    }

    if (shiftPressed) {
      FlyingSaucer.hyperDrive = true;
    } else {
      FlyingSaucer.hyperDrive = false;
    }

    if (rightPressed) {
      console.log("test")
      if (FlyingSaucer.hyperDrive) {
        FlyingSaucer.x += 12;
      } else {
        console.log(FlyingSaucer.x)
        FlyingSaucer.x = FlyingSaucer.x + 6;
        console.log(FlyingSaucer.x)
      }

      if (FlyingSaucer.x + FlyingSaucer.width > canvas.width) {
        FlyingSaucer.x = canvas.width - FlyingSaucer.width;
      }
    }
    else if (leftPressed) {
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
    }
    else if (downPressed) {
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
