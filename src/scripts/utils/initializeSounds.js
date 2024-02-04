import explosionSound from '../../assets/sounds/explosion.wav';
import beamSound from '../../assets/sounds/beam.wav';
import cluckSound from '../../assets/sounds/cluck.wav';
import doorSound from '../../assets/sounds/door.wav';
import backgroundSound from '../../assets/sounds/background.wav';

function initializeSounds() {
    const tractorBeamSound = new Audio(beamSound);
    const explodeSound = new Audio(explosionSound);
    const chickenCluckSound = new Audio(cluckSound);
    const doorCloseSound = new Audio(doorSound);  
    const backgroundMusic = new Audio (backgroundSound);
    backgroundMusic.playbackRate = 1;

    return {
        tractorBeamSound,
        explodeSound,
        chickenCluckSound,
        doorCloseSound,
        backgroundMusic
    }
}

export default initializeSounds;