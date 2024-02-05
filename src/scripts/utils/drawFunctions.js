import saucerImage from '../../assets/images/saucer.png';
import explosionImage from '../../assets/images/explosion-lq.png';
import missileImage from '../../assets/images/missile.png';

export function drawSaucer(FlyingSaucer, ctx) {
    let saucerImg = new Image;
    saucerImg.src = saucerImage;
    ctx.beginPath();
    ctx.drawImage(saucerImg, FlyingSaucer.x, FlyingSaucer.y);
    ctx.closePath();
}

export function drawBeam(FlyingSaucer, ctx, canvas) {
    ctx.beginPath();
    ctx.rect(FlyingSaucer.x + (FlyingSaucer.width / 2) - 10, FlyingSaucer.y + FlyingSaucer.height, 20, canvas.height - FlyingSaucer.y);
    ctx.fillStyle = "rgba(240, 255, 0, 0.4)";
    ctx.fill();
    ctx.closePath();  
}

export function drawScore(score, ctx) {
    ctx.beginPath();
    ctx.font = "30px VT323";
    ctx.fillStyle = "rgba(0, 0, 0, 1)"
    ctx.fillText(`Score: ${score}`, 800, 40);
    ctx.closePath();
}

export function drawPowerUps(FlyingSaucer, ctx) {
    ctx.beginPath();
    ctx.font = "30px VT323";
    ctx.fillStyle = "rgba(0, 0, 0, 1)"
    ctx.fillText(`Shields: ${FlyingSaucer.powerUps}`, 800, 120);
    ctx.closePath();
}

export function drawHealth(FlyingSaucer, ctx) {
    ctx.beginPath();
    ctx.font = "30px VT323";
    ctx.fillStyle = "rgba(0, 0, 0, 1)"
    ctx.fillText(`Health: ${FlyingSaucer.health}`, 800, 80);
    ctx.closePath();
}

export function drawGameOver(ctx) {
    ctx.beginPath();
    ctx.font = "100px VT323";
    ctx.fillStyle = "#FF0000"
    ctx.fillText("GAME OVER", 300, 300);
    ctx.closePath();
}

export function drawPullUp(ctx) {
    ctx.beginPath();
    ctx.font = "80px VT323";
    ctx.fillStyle = "#FF0000"
    ctx.fillText("PULL UP", 305, 200);
    ctx.closePath();
}

export function drawNewHighScore(ctx) {
    ctx.beginPath();
    ctx.font = "50px VT323";
    ctx.fillStyle = "#FF0000"
    ctx.fillText("NEW HIGH SCORE!", 335, 200);
    ctx.closePath();
}

export function drawShield(FlyingSaucer, ctx) {
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

export function drawExplosion(explosionOn, explosionFrame, explosionX, explosionY, ctx) {    
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

    return [explosionOn, explosionFrame];
}

export function drawMissile(missile, ctx) {
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