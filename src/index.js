import "./styles/index.css";
// import { keyDownHandler, keyUpHandler } from './scripts/key_events';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Saucer from './scripts/flying_saucer';
import Target from './scripts/target';
import Missile from './scripts/missile';

import missileImage from '../src/assets/images/missile.png';
import splashImage from '../src/assets/images/splash.png';
import saucerImage from '../src/assets/images/saucer.png';
import eeImage from '../src/assets/images/ee.png';
import targetImage from '../src/assets/images/chicken.png';
import powerUpImage from '../src/assets/images/crate.png';
import explosionImage from '../src/assets/images/explosion-lq.png';
import explosionSound from '../src/assets/sounds/explosion.wav';
import beamSound from '../src/assets/sounds/beam.wav';
import cluckSound from '../src/assets/sounds/cluck.wav';
import doorSound from '../src/assets/sounds/door.wav';
import backgroundSound from '../src/assets/sounds/background.wav';

window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  drawSplash();

  firebase.initializeApp({
    apiKey: 'AIzaSyBoLEjbvc3K2e2m3EA378jmuaJ9fGhc15g',
    authDomain: "invasion-3f8d9.firebaseapp.com",
    projectId: 'invasion-3f8d9'
  });

  const db = firebase.firestore();

  let highScores = [];
  let eeEnabled = false;

  let score = 0;
  let shieldTimeout;
  let gameOver = false;
  let gameStarted = false;
  let endDelay = false;
  let isMuted = false;

  let rightPressed = false;
  let leftPressed = false;
  let downPressed = false;
  let upPressed = false;
  let spacePressed = false;
  let shiftPressed = false;
  let tildePressed = false;
  let onePressed = false;
  let xPressed = false;
  let mPressed = false;

  let targets = {
    target1: new Target,
    target2: new Target,
    target3: new Target
  }

  let FlyingSaucer = new Saucer;
  let missiles = { missile: new Missile(FlyingSaucer, score) };
  let explosionOn = false;
  let explosionFrame = 0;
  let explosionX;
  let explosionY;

  const tractorBeamSound = new Audio(beamSound);
  tractorBeamSound.volume = 0.2;
  const explodeSound = new Audio(explosionSound);
  explodeSound.volume = 0.35;
  const chickenCluckSound = new Audio(cluckSound);
  chickenCluckSound.volume = 0.4;
  const doorCloseSound = new Audio(doorSound);
  doorCloseSound.volume = 0.35;
  
  const backgroundMusic = new Audio (backgroundSound);
  backgroundMusic.volume = 0.15;
  backgroundMusic.playbackRate = 1;
  
  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

  function getHighScores() {
    highScores = [];
    
    db.collection("high_scores")
      .orderBy("score", "desc")
      .limit(10)
      .get()
      .then((querySnapshot) => {
        let highScoresList = document.getElementById("high-scores")
        
        if (highScoresList.childElementCount > 0) {
          for (let i = highScoresList.childNodes.length - 1; i >= 0; i--) {
            let child = highScoresList.childNodes[i];
            highScoresList.removeChild(child);
          }
        }

        querySnapshot.forEach((doc) => {
          highScores.push([doc.data().name, doc.data().score]);
          let scoreLi = document.createElement("li");
          scoreLi.innerHTML = `${doc.data().name}  -  ${doc.data().score}`;
          highScoresList.appendChild(scoreLi);
        });
      });
  }

  getHighScores();

  function toggleMute() {
    isMuted = !isMuted 
    
    console.log("test")
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
      // if (!gameStarted && !gameOver) {
        score = 0;
        endDelay = false;
        gameStarted = true;
        backgroundMusic.load();
        backgroundMusic.play();
        backgroundMusic.playbackRate = 1;
        backgroundMusic.loop = true;
        draw();
      // }
      // gameStarted = true;
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

  function drawSaucer(FlyingSaucer) {
    let saucerImg = new Image;
    saucerImg.src = saucerImage;
    ctx.beginPath();
    ctx.drawImage(saucerImg, FlyingSaucer.x, FlyingSaucer.y);
    ctx.closePath();
  }

  function drawTarget(targets) {
    Object.values(targets).forEach( target => {
      if (eeEnabled) {
        let targetImg = new Image;
        targetImg.src = eeImage;
        ctx.beginPath();
        ctx.drawImage(targetImg, target.x, target.y - 30);
        ctx.closePath();
      } else if (target.powerUp) {
        let targetImg = new Image;
        targetImg.src = powerUpImage;
        ctx.beginPath();
        ctx.drawImage(targetImg, target.x, target.y - 10);
        ctx.closePath();
      } else {
        let targetImg = new Image;
        targetImg.src = targetImage;
        ctx.beginPath();
        ctx.drawImage(targetImg, target.x, target.y - 10);
        ctx.closePath();
      }
    })
  }

  function drawBeam(FlyingSaucer) {
    ctx.beginPath();
    ctx.rect(FlyingSaucer.x + (FlyingSaucer.width / 2) - 10, FlyingSaucer.y + FlyingSaucer.height, 20, canvas.height - FlyingSaucer.y);
    ctx.fillStyle = "rgba(240, 255, 0, 0.4)";
    ctx.fill();
    ctx.closePath();  
  }

  function drawScore() {
    ctx.beginPath();
    ctx.font = "30px VT323";
    ctx.fillStyle = "rgba(0, 0, 0, 1)"
    ctx.fillText(`Score: ${score}`, 800, 40);
    ctx.closePath();
  }

  function drawPowerUps() {
    ctx.beginPath();
    ctx.font = "30px VT323";
    ctx.fillStyle = "rgba(0, 0, 0, 1)"
    ctx.fillText(`Shields: ${FlyingSaucer.powerUps}`, 800, 120);
    ctx.closePath();
  }

  function drawHealth(FlyingSaucer) {
    ctx.beginPath();
    ctx.font = "30px VT323";
    ctx.fillStyle = "rgba(0, 0, 0, 1)"
    ctx.fillText(`Health: ${FlyingSaucer.health}`, 800, 80);
    ctx.closePath();
  }

  function drawGameOver() {
    ctx.beginPath();
    ctx.font = "100px VT323";
    ctx.fillStyle = "#FF0000"
    ctx.fillText("GAME OVER", 300, 300);
    ctx.closePath();
  }

  function drawPullUp() {
    ctx.beginPath();
    ctx.font = "80px VT323";
    ctx.fillStyle = "#FF0000"
    ctx.fillText("PULL UP", 305, 200);
    ctx.closePath();
  }

  function drawNewHighScore() {
    ctx.beginPath();
    ctx.font = "50px VT323";
    ctx.fillStyle = "#FF0000"
    ctx.fillText("NEW HIGH SCORE!", 335, 200);
    ctx.closePath();
  }

  function drawShield() {
    ctx.beginPath();
    ctx.arc(FlyingSaucer.x + (FlyingSaucer.width / 2),
            FlyingSaucer.y + (FlyingSaucer.height / 2),
            (FlyingSaucer.width / 2) + 5,
            0,
            2 * Math.PI);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#FF0000";
    ctx.stroke();
    ctx.closePath();
  }

  function drawExplosion() {    
    let spriteX;
    let spriteY;

    let explosionImg = new Image;
    explosionImg.src = explosionImage;

    if (explosionFrame < 4) {
      spriteX = 64 * explosionFrame;
      spriteY = 0;
    } else if (explosionFrame >= 4 && explosionFrame < 8) {
      spriteX = 64 * (explosionFrame % 4);
      spriteY = 64;
    } else if (explosionFrame >= 8 && explosionFrame < 12) {
      spriteX = 64 * (explosionFrame % 4);
      spriteY = 128;
    } else if (explosionFrame >= 12 && explosionFrame < 16) {
      spriteX = 64 * (explosionFrame % 4);
      spriteY = 192;
    }

    ctx.drawImage(explosionImg, spriteX, spriteY, 64, 64, explosionX - 32, explosionY - 32, 64, 64);

    explosionFrame++
    if (explosionFrame > 15) {
      explosionOn = false;
      explosionFrame = 0;
    }
  }

  function drawMissile({missile}) {
    let missileImg = new Image;
    missileImg.src = missileImage;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    let translateX = missile.x + (missile.width / 2);
    let translateY = missile.y + (missile.height / 2);

    ctx.translate(translateX, translateY);
    ctx.rotate(missile.canvasRotate);
    ctx.translate(-translateX, -translateY);

    ctx.beginPath();
    ctx.drawImage(missileImg, missile.x, missile.y);
    ctx.closePath();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
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
      drawGameOver();
      drawScore();
      drawHealth(FlyingSaucer);
      
      // if (score > 0 && !eeEnabled) {
      if (score > highScores[9][1] && !eeEnabled) {
        drawNewHighScore();

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
            getHighScores();
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

    drawSaucer(FlyingSaucer);

    if (xPressed && FlyingSaucer.powerUps > 0 && !FlyingSaucer.shieldOn) {
      FlyingSaucer.shieldOn = true;
      shieldTimeout = setTimeout(() => {
        FlyingSaucer.shieldOn = false;
      }, 8000);
      FlyingSaucer.powerUps -= 1;
    }
    if (FlyingSaucer.shieldOn) drawShield();

    if (explosionOn) drawExplosion();

    if (FlyingSaucer.y + FlyingSaucer.height === canvas.height) {
      drawPullUp();
      FlyingSaucer.health -= 1;
    }

    if ((score % 10 === 0) && !targets.target4 && (score > 0)) {
      targets.target4 = new Target;
      targets.target4.powerUp = true;

      setTimeout(() => { delete targets.target4 }, 10000);
    }

    drawTarget(targets);
    drawScore();
    drawPowerUps();
    drawHealth(FlyingSaucer);
    drawMissile(missiles);

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
      // gameStarted = false;
    }

    // let tractorBeamSound = new Audio(beamSound);

    if (spacePressed) {
      drawBeam(FlyingSaucer);
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
    // setTimeout(() => requestAnimationFrame(draw), 1000 / 1);
  }

});
