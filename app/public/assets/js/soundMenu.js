const audio = new Audio('assets/audio/selectButtonSoundEffect.mp3')

function playSound(){
  audio.currentTime = 0;
  audio.play();
}

const menuItems = document.querySelectorAll('nav ul li a'); 

menuItems.forEach(item => {
  item.addEventListener('mouseover', playSound);
});
