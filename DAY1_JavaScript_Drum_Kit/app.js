// function removeTransition(e) {
//   if (e.propertyName !== 'transform') {
//     return
//   } else {
//     e.target.classList.remove('playing');
//   }
// }

function removeTransition({propertyName, target}) {
  if (propertyName === 'transform') 
    target.classList.remove('playing');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`)

  if (!audio) return

  audio.currentTime = 0;
  key.classList.add('playing');
  audio.play();
  

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);