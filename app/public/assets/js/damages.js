let life = 5; 

const lifeScore = document.querySelector('.score');
const lifeCounter = document.querySelector('.lifeCounter');
const lifeFace = document.querySelector('.lifeFace');

function takeDamage() {
  if (life > 0) {
    life--; 
    updateLifeImages();
  }
}

function updateLifeImages() {
  switch (life) {
    case 5:
      lifeScore.style.backgroundImage = "url('../public/assets/img/lifeScore/life1x.png')";
      lifeCounter.style.backgroundImage = "url('../public/assets/img/heartScore/heart1.png')";
      lifeFace.style.backgroundImage = "url('../public/assets/img/game/health.png')";
      break;
    case 4:
      lifeScore.style.backgroundImage = "url('../public/assets/img/lifeScore/life4x.png')";
      lifeCounter.style.backgroundImage = "url('../public/assets/img/heartScore/heart2.png')";
      lifeFace.style.backgroundImage = "url('../public/assets/img/game/health.png')";
      break;
    case 3:
      lifeScore.style.backgroundImage = "url('../public/assets/img/lifeScore/life3x.png')";
      lifeCounter.style.backgroundImage = "url('../public/assets/img/heartScore/heart3.png')";
      lifeFace.style.backgroundImage = "url('../public/assets/img/game/health.png')";
      break;
    case 2:
      lifeScore.style.backgroundImage = "url('../public/assets/img/lifeScore/life2x.png')";
      lifeCounter.style.backgroundImage = "url('../public/assets/img/heartScore/heart4.png')";
      lifeFace.style.backgroundImage = "url('../public/assets/img/game/babe.png')";
      break;
    case 1:
      lifeScore.style.backgroundImage = "url('../public/assets/img/lifeScore/life1x.png')";
      lifeCounter.style.backgroundImage = "url('../public/assets/img/heartScore/heart5.png')";
      lifeFace.style.backgroundImage = "url('../public/assets/img/game/babe.png')";
      break;
    default:
      lifeScore.style.backgroundImage = "url('../public/assets/img/lifeScore/gameOver.png')";
      lifeCounter.style.backgroundImage = "url('../public/assets/img/heartScore/heart6.png')";
      lifeFace.style.backgroundImage = "url('../public/assets/img/game/death.gif')";
      break;
  }
}

// Exemplo de evento para simular dano
document.addEventListener('keydown', (event) => {
  if (event.key === ' ') { 
    takeDamage();
  }
});
