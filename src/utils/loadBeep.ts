import gravationalBeep from '../assets/audios/gravitational_beep.mp3';

export function loadBeep() {
  const audio = new Audio(gravationalBeep);
  audio.load();

  return () => {
    audio.currentTime = 0;
    audio.play().catch(error => console.log('erro ao tocar o audio', error));
  };
}
