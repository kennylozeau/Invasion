import eeImage from '../../assets/images/ee.png';
import targetImage from '../../assets/images/chicken.png';
import powerUpImage from '../../assets/images/crate.png';

function drawTargets(targets, ctx, eeEnabled) {
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

  export default drawTargets;