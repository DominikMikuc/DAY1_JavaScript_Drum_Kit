function removeTransition({propertyName, target}) {
  if (propertyName === 'transform') 
    target.classList.remove('playing');
}

function playSound({ keyCode }) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`div[data-key="${keyCode}"]`);

  if (!audio) return

  audio.currentTime = 0;
  key.classList.add('playing');
  audio.play();
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);