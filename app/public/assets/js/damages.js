document.addEventListener('DOMContentLoaded', () => {
  let life = 5;

  const lifeScore = document.querySelector('.score');
  const lifeCounter = document.querySelector('.lifeCounter');
  const lifeFace = document.querySelector('.lifeFace');

  function updateLifeImages() {
    switch (life) {
      case 5:
        lifeScore.src = "../public/assets/img/lifeScore/life5x.png";
        lifeCounter.src = "../public/assets/img/heartScore/heart1.png";
        lifeFace.src = "../public/assets/img/game/health.png";
        break;
      case 4:
        lifeScore.src = "../public/assets/img/lifeScore/life4x.png";
        lifeCounter.src = "../public/assets/img/heartScore/heart2.png";
        lifeFace.src = "../public/assets/img/game/health.png";
        break;
      case 3:
        lifeScore.src = "../public/assets/img/lifeScore/life3x.png";
        lifeCounter.src = "../public/assets/img/heartScore/heart3.png";
        lifeFace.src = "../public/assets/img/game/health.png";
        break;
      case 2:
        lifeScore.src = "../public/assets/img/lifeScore/life2x.png";
        lifeCounter.src = "../public/assets/img/heartScore/heart4.png";
        lifeFace.src = "../public/assets/img/game/babe.png";
        break;
      case 1:
        lifeScore.src = "../public/assets/img/lifeScore/life1x.png";
        lifeCounter.src = "../public/assets/img/heartScore/heart5.png";
        lifeFace.src = "../public/assets/img/game/babe.png";
        break;
      default:
        lifeScore.src = "../public/assets/img/lifeScore/gameOver.png";
        lifeCounter.src = "../public/assets/img/heartScore/heart6.png";
        lifeFace.src = "../public/assets/img/game/death.gif";
        break;
    }
  }

  function checkGameOver() {
    if (life <= 0) {
      window.location.href = 'gameOver.html'; // Redirects to the game over page
    }
  }

  // Damage function
  function takeDamage() {
    if (life > 0) {
      life--;
      updateLifeImages();  // Updates images when player takes damage
      checkGameOver();  // Invokes the game over check
    }
  }

  window.takeDamage = takeDamage; // Export the takeDamage function to be accessed in other scripts
});


