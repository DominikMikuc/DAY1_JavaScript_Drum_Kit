// function removeTransiton(e) {
//   if (e.propertyName !== 'transform') {
//     return
//   } else {
//     e.target.classList.remove('playing');
//   }
// }

function removeTransiton({propertyName, target}) {
  if (propertyName === 'transform') 
    target.classList.remove('playing');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`)

  if (!audio) {
    return
  } else {    
    audio.currentTime = 0;
    key.classList.add('playing');
    audio.play();
  }
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransiton));
window.addEventListener('keydown', playSound);