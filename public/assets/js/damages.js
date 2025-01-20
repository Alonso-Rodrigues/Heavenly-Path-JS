document.addEventListener('DOMContentLoaded', () => {
  let life = 5;
  let elapsedPoint = 0;
  let intervalId;

  const lifeScore = document.querySelector('.score');
  const lifeCounter = document.querySelector('.lifeCounter');
  const lifeFace = document.querySelector('.lifeFace');
  const pointsDisplay = document.querySelector('.points');

  // Updates life-related images based on the current life value
  function updateLifeImages() {
    switch (life) {
      case 5:
        lifeScore.src = "../assets/img/lifeScore/life5x.png";
        lifeCounter.src = "../assets/img/heartScore/heart1.png";
        lifeFace.src = "../assets/img/game/health.png";
        break;
      case 4:
        lifeScore.src = "../assets/img/lifeScore/life4x.png";
        lifeCounter.src = "../assets/img/heartScore/heart2.png";
        lifeFace.src = "../assets/img/game/health.png";
        break;
      case 3:
        lifeScore.src = "../assets/img/lifeScore/life3x.png";
        lifeCounter.src = "../assets/img/heartScore/heart3.png";
        lifeFace.src = "../assets/img/game/health.png";
        break;
      case 2:
        lifeScore.src = "../assets/img/lifeScore/life2x.png";
        lifeCounter.src = "../assets/img/heartScore/heart4.png";
        lifeFace.src = "../assets/img/game/babe.png";
        break;
      case 1:
        lifeScore.src = "../assets/img/lifeScore/life1x.png";
        lifeCounter.src = "../assets/img/heartScore/heart5.png";
        lifeFace.src = "../assets/img/game/babe.png";
        break;
      default:
        lifeScore.src = "../assets/img/lifeScore/gameOver.png";
        lifeCounter.src = "../assets/img/heartScore/heart6.png";
        lifeFace.src = "../assets/img/game/death.gif";
        break;
    }
  }

  // Updates the elapsed points (score)
  function updatePoints() {
    elapsedPoint++;
    pointsDisplay.textContent = `Points: ${elapsedPoint}`;
  }

  // Starts the points counter, updating every second
  function startPoints() {
    intervalId = setInterval(updatePoints, 1000);
  }

  // Stops the points counter
  function stopPoints() {
    clearInterval(intervalId);
  }

  // Checks if the game is over and redirects to the Game Over page
  function checkGameOver() {
    if (life <= 0) {
      stopPoints(); // Stops the counter when all lives are lost
      setTimeout(() => {
        window.location.href = 'gameOver.html'; // Redirects to the Game Over page
      }, 3000);
    }
  }

  // Reduces the player's life by 1 and updates the game state
  function takeDamage() {
    if (life > 0) {
      life--;
      updateLifeImages();  // Updates images when player takes damage
      checkGameOver();  // Invokes the game over check
    }
  }

  window.takeDamage = takeDamage; // Exports the takeDamage function to be accessed in other scripts

  startPoints();
});
