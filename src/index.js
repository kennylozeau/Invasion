import "./styles/index.css";
// import { keyDownHandler, keyUpHandler } from './scripts/key_events';
import Saucer from './scripts/flying_saucer';
import Target from './scripts/target';
import Missile from './scripts/missile';

window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  let score = 0;

  let rightPressed = false;
  let leftPressed = false;
  let downPressed = false;
  let upPressed = false;
  let spacePressed = false;
  let shiftPressed = false;

  let targets = {
    target1: new Target,
    target2: new Target,
    target3: new Target
  }

  let missiles = { missile: new Missile };

  // let target = {
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

  function drawTarget(targets) {
    Object.values(targets).forEach( target => {
      ctx.beginPath();
      ctx.rect(target.x, target.y, 10, 10);
      ctx.fillStyle = "#FF0000";
      ctx.fill();
      ctx.closePath();
    })
  }

  function drawBeam(FlyingSaucer) {
    ctx.beginPath();
    ctx.rect(FlyingSaucer.x + (FlyingSaucer.width / 2) - 10, FlyingSaucer.y + FlyingSaucer.height, 20, canvas.height - FlyingSaucer.y);
    ctx.fillStyle = "rgba(240, 255, 0, 0.75)";
    ctx.fill();
    ctx.closePath();  
  }

  function drawScore() {
    ctx.beginPath();
    ctx.font = "30px Arial";
    ctx.fillStyle = "rgba(0, 0, 0, 1)"
    ctx.fillText(`Score: ${score}`, 800, 40);
    ctx.closePath();
  }

  function drawMissile(missiles) {
    ctx.beginPath();
    ctx.rect(missiles.missile.x, missiles.missile.y, 8, 36)
    ctx.fillStyle = "gray";
    ctx.fill();
    ctx.closePath();
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let FlyingSaucer = Saucer;
    // console.log(FlyingSaucer)
    drawSaucer(FlyingSaucer);
    drawTarget(targets);
    drawScore();
    drawMissile(missiles);
    missiles.missile.y += missiles.missile.dy;
    if (missiles.missile.y < -36) {
      delete missiles.missile;
      missiles.missile = new Missile;
    }
    
    if (spacePressed) {
      drawBeam(FlyingSaucer);

      Object.values(targets).forEach(target => {
        if (target.x + 10 > FlyingSaucer.x + (FlyingSaucer.width / 2) - 10 && target.x < FlyingSaucer.x + (FlyingSaucer.width / 2) + 10) {
          target.y -= 3;
          if (target.y <= FlyingSaucer.y + FlyingSaucer.height) {
            score++;
            for(let key in targets) {
              if (targets[key] === target) {
                delete targets[key];
                targets[key] = new Target;
              }
            }
          }
        } else {
          target.y += 5;
          if (target.y > canvas.height - 10) target.y = canvas.height - 10;  
        }
      })
    } else {
      Object.values(targets).forEach(target => {
        target.y += 5;
        if (target.y > canvas.height - 10) target.y = canvas.height - 10;
      })
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
