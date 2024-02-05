import "./styles/index.css";
// import { keyDownHandler, keyUpHandler } from './scripts/key_events';
import Saucer from './scripts/flying_saucer';
import Target from './scripts/target';
import Missile from './scripts/missile';
import splashImage from './assets/images/splash.png';

import { 
  drawSaucer,
  drawBeam,
  drawScore,
  drawPowerUps,
  drawHealth,
  drawGameOver,
  drawNewHighScore,
  drawPullUp,
  drawShield,
  drawExplosion,
  drawMissile,
} from "./scripts/utils/drawFunctions";

import throttle from "./scripts/utils/throttle";
import drawTargets from "./scripts/utils/drawTargets";
import initializeSounds from "./scripts/utils/initializeSounds";
import initializeVariables from "./scripts/utils/initializeVariables";
import initializeDB from "./scripts/utils/initializeDB";
import getHighScores from "./scripts/utils/getHighScores";

window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  const db = initializeDB();

  let {
    highScores,
    eeEnabled,
    score,
    shieldTimeout,
    gameOver,
    gameStarted,
    endDelay,
    isMuted,
    rightPressed,
    leftPressed,
    downPressed,
    upPressed,
    spacePressed,
    shiftPressed,
    tildePressed,
    onePressed,
    xPressed,
    mPressed,
    targets,
    FlyingSaucer,
    missiles,
    explosionOn,
    explosionFrame,
    explosionX,
    explosionY
  } = initializeVariables();

  const {
    tractorBeamSound,
    explodeSound,
    chickenCluckSound,
    doorCloseSound,
    backgroundMusic
  } = initializeSounds();

  drawSplash();
  
  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

  highScores = getHighScores(db, highScores);

  function toggleMute() {
    isMuted = !isMuted 
    
    if (isMuted) {
      tractorBeamSound.volume = 0;
      explodeSound.volume = 0;
      chickenCluckSound.volume = 0;
      doorCloseSound.volume = 0;
      backgroundMusic.volume = 0;
    } else {
      tractorBeamSound.volume = 0.2;
      explodeSound.volume = 0.35;
      chickenCluckSound.volume = 0.4;
      doorCloseSound.volume = 0.35;
      backgroundMusic.volume = 0.15;
    }
  }

  toggleMute = throttle(toggleMute, 500);
  toggleMute()

  function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight" || e.key == "d" || e.key == "D") {
      rightPressed = true;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft" || e.key == "a" || e.key == "A") {
      leftPressed = true;
    }
    else if (e.key == "Down" || e.key == "ArrowDown" || e.key == "s" || e.key == "S") {
      downPressed = true;
    }
    else if (e.key == "Up" || e.key == "ArrowUp" || e.key == "w" || e.key == "W") {
      upPressed = true;
    }
    else if (e.key == "Spacebar" || e.key == " ") {
      spacePressed = true;
    }
    else if (e.key == "Shift") {
      shiftPressed = true;
    } else if (e.key == "`") {
      tildePressed = true;
    } else if (e.key == "1") {
      onePressed = true;
    } else if (e.key == "x" || e.key == "X") {
      xPressed = true;
    } else if (e.key == "m" || e.key == "M") {
      mPressed = true;
    } else if (e.key == "r" && !gameStarted) {
      score = 0;
      endDelay = false;
      gameStarted = true;
      backgroundMusic.load();
      backgroundMusic.play();
      backgroundMusic.playbackRate = 1;
      backgroundMusic.loop = true;
      draw();
    }
  }
  
  function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight" || e.key == "d" || e.key == "D") {
      rightPressed = false;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft" || e.key == "a" || e.key == "A") {
      leftPressed = false;
    }
    else if (e.key == "Down" || e.key == "ArrowDown" || e.key == "s" || e.key == "S") {
      downPressed = false;
    }
    else if (e.key == "Up" || e.key == "ArrowUp" || e.key == "w" || e.key == "W") {
      upPressed = false;
    }
    else if (e.key == "Spacebar" || e.key == " ") {
      spacePressed = false;
    }
    else if (e.key == "Shift") {
      shiftPressed = false;
    } else if (e.key == "`") {
      tildePressed = false;
    } else if (e.key == "1") {
      onePressed = false;
    } else if (e.key == "x" || e.key == "X") {
      xPressed = false;
    } else if (e.key == "m" || e.key == "M") {
      mPressed = false;
    }
  }

  function drawSplash() {
    let splashImg = new Image;
    splashImg.src = splashImage;
    ctx.beginPath();
    ctx.drawImage(splashImg, -1, -1);
    ctx.closePath();
    if (gameOver) return true;
    requestAnimationFrame(drawSplash);
  }

  function checkMissileStrike(FlyingSaucer) {
    if (!FlyingSaucer.shieldOn) {
      if (missiles.missile.x < FlyingSaucer.x + FlyingSaucer.width &&
        missiles.missile.x + missiles.missile.width > FlyingSaucer.x &&
        missiles.missile.y < FlyingSaucer.y + FlyingSaucer.height &&
        missiles.missile.y + missiles.missile.height > FlyingSaucer.y
      ) {
        explosionOn = true;
        explosionX = missiles.missile.x + (missiles.missile.width / 2);
        explosionY = missiles.missile.y;
        
        explodeSound.play();

        delete missiles.missile;
        missiles.missile = new Missile(FlyingSaucer, score);
        return true;
      } else {
        return false;
      }
    } 
    else {
      let shieldX = FlyingSaucer.x + (FlyingSaucer.width / 2);
      let shieldY = FlyingSaucer.y + (FlyingSaucer.height / 2);
      const distance = Math.sqrt((missiles.missile.x - shieldX)** 2 + (missiles.missile.y - shieldY)** 2);

      if (distance <= (FlyingSaucer.width / 2) + 5) {
        explosionOn = true;
        explosionX = missiles.missile.x + (missiles.missile.width / 2);
        explosionY = missiles.missile.y;
        FlyingSaucer.shieldOn = false;
        clearTimeout(shieldTimeout);

        delete missiles.missile;
        missiles.missile = new Missile(FlyingSaucer, score);
        return false;
      } else {
        return false;
      }
    }
  }

  function checkBeamUp(targets, FlyingSaucer) {
    let width = 20;
    if (eeEnabled) width = 25;
    Object.values(targets).forEach(target => {
      if (target.x + width > FlyingSaucer.x + (FlyingSaucer.width / 2) - 10 &&
          target.x < FlyingSaucer.x + (FlyingSaucer.width / 2) + 10 &&
          target.y >= FlyingSaucer.y) {
        target.y -= 3;
        target.lifted = true;
        if (target.y <= FlyingSaucer.y + FlyingSaucer.height && target.y >= FlyingSaucer.y) {
          if (target.dropped) score++;
          target.powerUp ? doorCloseSound.play() : chickenCluckSound.play();
          backgroundMusic.playbackRate += 0.01;
          score++;
          target.lifted = false;
          target.dropped = false;

          if (target.powerUp) {
            FlyingSaucer.powerUps += 1;
          }

          for (let key in targets) {
            if (targets[key] === target) {
              const powerUp = target.powerUp;
              delete targets[key];
              if (!powerUp) targets[key] = new Target;
            }
          }
        }
      } else {
        target.y += 5;
        if (target.lifted) target.dropped = true;
        if (target.y > canvas.height - 10) {
          target.y = canvas.height - 10;
          target.lifted = false;
          target.dropped = false;
        };
      }
    })
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (tildePressed && onePressed) eeEnabled = true;

    if (mPressed) toggleMute();

    if (endDelay) {
      tractorBeamSound.loop = false;
      tractorBeamSound.pause();
      backgroundMusic.pause();
      drawGameOver(ctx);
      drawScore(score, ctx);
      drawHealth(FlyingSaucer, ctx);
      
      if (score > highScores[9][1] && !eeEnabled) {
        drawNewHighScore(ctx);

        let highScoreForm = document.createElement("form");
        let highScoreModal = document.createElement("div");
        let highScoreNameInput = document.createElement("input");
        let highScoreSubmit = document.createElement("input");
        
        highScoreNameInput.type = "text";
        highScoreSubmit.type = "submit";
        highScoreModal.id = "high-score-modal";
        highScoreForm.id = "high-score-form";
        highScoreModal.innerText = "Type your name and press enter";
        highScoreForm.onsubmit = function (e) {
          e.preventDefault();
          let name = e.currentTarget.children[0].value;
          document.getElementById("high-score-modal").remove();
          db.collection("high_scores").add({
            name: name.trim().slice(0,10),
            score
          })
          .then(() => {
            highScores = getHighScores(db, highScores);
            gameOver = false;
            gameStarted = false;
          })
        }
        
        highScoreForm
          .appendChild(highScoreNameInput)
          .appendChild(highScoreSubmit);
        highScoreModal.appendChild(highScoreForm);
        document.getElementById("canvas-container").appendChild(highScoreModal);
        highScoreNameInput.focus();
      } else {
        gameStarted = false;
      }

      delete missiles.missile;
      FlyingSaucer = new Saucer;
      missiles.missile = new Missile(FlyingSaucer, score);
      targets = {};
      targets = {
        target1: new Target,
        target2: new Target,
        target3: new Target
      };
      eeEnabled = false;
      explosionOn= false;

      return true;
    }

    drawSaucer(FlyingSaucer, ctx);

    if (xPressed && FlyingSaucer.powerUps > 0 && !FlyingSaucer.shieldOn) {
      FlyingSaucer.shieldOn = true;
      shieldTimeout = setTimeout(() => {
        FlyingSaucer.shieldOn = false;
      }, 8000);
      FlyingSaucer.powerUps -= 1;
    }
    if (FlyingSaucer.shieldOn) drawShield(FlyingSaucer, ctx);

    if (explosionOn) [explosionOn, explosionFrame] = drawExplosion(explosionOn, explosionFrame, explosionX, explosionY, ctx);

    if (FlyingSaucer.y + FlyingSaucer.height === canvas.height) {
      drawPullUp(ctx);
      FlyingSaucer.health -= 1;
    }

    if ((score % 10 === 0) && !targets.target4 && (score > 0)) {
      targets.target4 = new Target;
      targets.target4.powerUp = true;

      setTimeout(() => { delete targets.target4 }, 10000);
    }

    drawTargets(targets, ctx, eeEnabled);
    drawScore(score, ctx);
    drawPowerUps(FlyingSaucer, ctx);
    drawHealth(FlyingSaucer, ctx);
    drawMissile(missiles.missile, ctx);

    missiles.missile.y += missiles.missile.dy;
    missiles.missile.x += missiles.missile.dx;
    if (missiles.missile.y < -missiles.missile.height || missiles.missile.x < 0 || missiles.missile.x > canvas.width) {
      delete missiles.missile;
      missiles.missile = new Missile(FlyingSaucer, score);
    }
    
    if (checkMissileStrike(FlyingSaucer)) {
      FlyingSaucer.health -= 20;
    }
    
    if (FlyingSaucer.health <= 0) {
      FlyingSaucer.health = 0;
      endDelay = true;
      gameOver = true;
    }

    if (spacePressed) {
      drawBeam(FlyingSaucer, ctx, canvas);
      checkBeamUp(targets, FlyingSaucer);
    
      if (tractorBeamSound.paused) {
        tractorBeamSound.play();
        tractorBeamSound.loop = true;
      };
    } else {
      tractorBeamSound.pause();
      tractorBeamSound.currentTime = 0;
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

});
