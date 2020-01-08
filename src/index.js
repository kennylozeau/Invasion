import "./styles/index.css";
// import { keyDownHandler, keyUpHandler } from './scripts/key_events';
import firebase from 'firebase';
import 'firebase/firestore';
import Saucer from './scripts/flying_saucer';
import Target from './scripts/target';
import Missile from './scripts/missile';

window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  firebase.initializeApp({
    apiKey: 'AIzaSyBoLEjbvc3K2e2m3EA378jmuaJ9fGhc15g',
    authDomain: "invasion-3f8d9.firebaseapp.com",
    projectId: 'invasion-3f8d9'
  });

  const db = firebase.firestore();

  let highScores = [];

  // db.collection("high_scores")
  //   .orderBy("score", "desc")
  //   .limit(10)
  //   .get()
  //   .then((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       highScores.push([doc.data().name, doc.data().score]);
  //       let scoreLi = document.createElement("li");
  //       scoreLi.innerHTML = `${doc.data().name}  -  ${doc.data().score}`;
  //       document.getElementById("high_scores").appendChild(scoreLi);
  //   });
  // });


  let score = 0;
  // let gameOver = false;
  let endDelay = false;

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

  let FlyingSaucer = new Saucer;
  let missiles = { missile: new Missile(FlyingSaucer) };
  let flip = 0;
  
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
            // debugger
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

  function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight" || e.key == "d") {
      rightPressed = true;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft" || e.key == "a") {
      leftPressed = true;
    }
    else if (e.key == "Down" || e.key == "ArrowDown" || e.key == "s") {
      downPressed = true;
    }
    else if (e.key == "Up" || e.key == "ArrowUp" || e.key == "w") {
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
    if (e.key == "Right" || e.key == "ArrowRight" || e.key == "d") {
      rightPressed = false;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft" || e.key == "a") {
      leftPressed = false;
    }
    else if (e.key == "Down" || e.key == "ArrowDown" || e.key == "s") {
      downPressed = false;
    }
    else if (e.key == "Up" || e.key == "ArrowUp" || e.key == "w") {
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
    let saucerImage = new Image;
    saucerImage.src = '/Users/kennylozeau/Desktop/Invasion/src/assets/images/saucer.png';
    ctx.beginPath();
    // ctx.rect(FlyingSaucer.x, FlyingSaucer.y, FlyingSaucer.width, FlyingSaucer.height);
    // ctx.fillStyle = "#0095DD";
    // ctx.fill();
    ctx.drawImage(saucerImage, FlyingSaucer.x, FlyingSaucer.y);
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
    ctx.fillText(`Score: ${score}`, 780, 40);
    ctx.closePath();
  }

  function drawHealth(FlyingSaucer) {
    ctx.beginPath();
    ctx.font = "30px Arial";
    ctx.fillStyle = "rgba(0, 0, 0, 1)"
    ctx.fillText(`Health: ${FlyingSaucer.health}`, 780, 80);
    ctx.closePath();
  }

  function drawGameOver() {
    ctx.beginPath();
    ctx.font = "80px Arial";
    ctx.fillStyle = "#FF0000"
    ctx.fillText("GAME OVER", 230, 300);
    ctx.closePath();
  }

  function drawPullUp() {
    ctx.beginPath();
    ctx.font = "80px Arial";
    ctx.fillStyle = "#FF0000"
    ctx.fillText("PULL UP", 305, 200);
    ctx.closePath();
  }

  function drawExplosion(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, 2 * Math.PI)
    ctx.fillStyle = "#FF0000"
    ctx.fill();
    ctx.closePath();
  }

  function drawMissile(missiles) {
    let missileImage = new Image;
    // if (flip === 0) {
    //   flip = 1;
      missileImage.src = '/Users/kennylozeau/Desktop/Invasion/src/assets/images/missile.png';
    // } else {
    //   flip = 0;
    //   missileImage.src = '/Users/kennylozeau/Desktop/Invasion/src/assets/images/missile-flip.png';
    // }
    ctx.beginPath();
    // ctx.rect(missiles.missile.x, missiles.missile.y, missiles.missile.width, missiles.missile.height)
    // ctx.fillStyle = "gray";
    // ctx.fill();
    ctx.drawImage(missileImage, missiles.missile.x, missiles.missile.y);
    ctx.closePath();
  }

  function checkMissileStrike(FlyingSaucer) {
    if (missiles.missile.x < FlyingSaucer.x + FlyingSaucer.width &&
        missiles.missile.x + missiles.missile.width > FlyingSaucer.x &&
        missiles.missile.y < FlyingSaucer.y + FlyingSaucer.height &&
        missiles.missile.y + missiles.missile.height > FlyingSaucer.y
      ) {
        drawExplosion(missiles.missile.x + (missiles.missile.width / 2), missiles.missile.y)
        delete missiles.missile;
        missiles.missile = new Missile(FlyingSaucer);
        return true;
      } else {
        return false;
      }
  }

  function checkBeamUp(targets, FlyingSaucer) {
    Object.values(targets).forEach(target => {
      if (target.x + 10 > FlyingSaucer.x + (FlyingSaucer.width / 2) - 10 && target.x < FlyingSaucer.x + (FlyingSaucer.width / 2) + 10) {
        target.y -= 3;
        if (target.y <= FlyingSaucer.y + FlyingSaucer.height) {
          score++;
          for (let key in targets) {
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
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (endDelay) {
      drawGameOver();
      drawScore();
      drawHealth(FlyingSaucer);
      
      if (score > highScores[9][1]) {
        let highScoreForm = document.createElement("form");
        highScoreForm.id = "high-score-form";
        highScoreForm.onsubmit = function (e) {
          e.preventDefault();
          let name = e.currentTarget.children[0].value;
          db.collection("high_scores").add({
            name,
            score
          })
          .then(() => {
            document.getElementById("high-score-form").remove();
            getHighScores();
          })
        }
        let highScoreNameInput = document.createElement("input");
        highScoreNameInput.type = "text";
        let highScoreSubmit = document.createElement("input");
        highScoreSubmit.type = "submit";
        highScoreForm
          .appendChild(highScoreNameInput)
          .appendChild(highScoreSubmit);
        document.getElementById("high-scores").appendChild(highScoreForm);
      }
      return true;
    }

    drawSaucer(FlyingSaucer);

    if (FlyingSaucer.y + FlyingSaucer.height === canvas.height) {
      drawPullUp();
      FlyingSaucer.health -= 1;
    }

    drawTarget(targets);
    drawScore();
    drawHealth(FlyingSaucer);
    drawMissile(missiles);

    missiles.missile.y += missiles.missile.dy;
    missiles.missile.x += missiles.missile.dx;
    if (missiles.missile.y < -missiles.missile.height || missiles.missile.x < 0 || missiles.missile.x > canvas.width) {
      delete missiles.missile;
      missiles.missile = new Missile(FlyingSaucer);
    }

    // if (missiles.missile.x < 0 || missiles.missile.x > canvas.width) {
    //   delete missiles.missile;
    //   missiles.missile = new Missile(FlyingSaucer);
    // }
    
    if (checkMissileStrike(FlyingSaucer)) {
      FlyingSaucer.health -= 20;
    }
    
    if (FlyingSaucer.health <= 0) {
      FlyingSaucer.health = 0;
      endDelay = true;
    }

    if (spacePressed) {
      drawBeam(FlyingSaucer);
      checkBeamUp(targets, FlyingSaucer);
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
  // if (!gameOver) {
  //   gameOver = draw();
  //   debugger
  //   if (score > 0 && gameOver) {
  //     let highScoreForm = document.createElement("form");
  //     let highScoreNameInput = document.createElement("input");
  //     highScoreForm.appendChild(highScoreNameInput);
  //     debugger
  //     document.getElementById("high_scores").appendChild(highScoreForm);
  //   }
  // }
});
