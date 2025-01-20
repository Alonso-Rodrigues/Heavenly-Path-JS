const audio = new Audio('assets/audio/selectButtonSoundEffect.mp3');

// Function to play the sound effect
function playSound() {
  audio.currentTime = 0; // Reset the audio to the beginning before playing
  audio.play();
}

const menuItems = document.querySelectorAll('nav ul li a');

menuItems.forEach(item => {
  item.addEventListener('mouseover', playSound); 
});
