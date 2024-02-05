import Target from "../target";
import Missile from "../missile";
import Saucer from "../flying_saucer";

function initializeVariables() {
    let highScores = [];
    let eeEnabled = false;

    let score = 0;
    let shieldTimeout;
    let gameOver = false;
    let gameStarted = false;
    let endDelay = false;
    let isMuted = true; // unmuted during initialization

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

    return {
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
    }
}

export default initializeVariables;