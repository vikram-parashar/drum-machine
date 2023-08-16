import DrumButton from './DrumButton';

/* eslint-disable */
document.addEventListener(
  'keydown',
  ({ code }) => {
    switch (code) {
      case 'KeyQ':
        new Audio(require('../sounds/Hi Hat (foot).mp3')).play();
        break;
      case 'KeyW':
        new Audio(require('../sounds/Tom-Tom.mp3')).play();
        break;
      case 'KeyE':
        new Audio(require('../sounds/Floor Tom.mp3')).play();
        break;
      case 'KeyA':
        new Audio(require('../sounds/Ride Cymbal.mp3')).play();
        break;
      case 'KeyS':
        new Audio(require('../sounds/Hi Hat.mp3')).play();
        break;
      case 'KeyD':
        new Audio(require('../sounds/Snare Drum.mp3')).play();
        break;
      case 'KeyZ':
        new Audio(require('../sounds/Kick.mp3')).play();
        break;
      case 'KeyX':
        new Audio(require('../sounds/Clap.mp3')).play();
        break;
      case 'KeyC':
        new Audio(require('../sounds/Bass Drum.mp3')).play();
        break;
      default:
        break;
    }
    /* eslint-enable */
  },
  false,
);

const butData = [
  ['Hi Hat (foot)', 'Q'],
  ['Tom-Tom', 'W'],
  ['Floor Tom', 'E'],
  ['Ride Cymbal', 'A'],
  ['Hi Hat', 'S'],
  ['Snare Drum', 'D'],
  ['Kick', 'Z'],
  ['Clap', 'X'],
  ['Bass Drum', 'C'],
];

function Drum() {
  return (
    <div className="grid grid-cols-3 gap-3 bg-dawn-overlay p-5 rounded-xl drop-shadow-xl">
      {butData.map((item) => {
        return <DrumButton key={item[1]} tone={item[0]} but={item[1]} />;
      })}
    </div>
  );
}
export default Drum;
