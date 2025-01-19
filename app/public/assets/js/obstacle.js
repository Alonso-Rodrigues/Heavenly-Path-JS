window.onload = function () {
  const gameBoard = document.querySelector('.game-board');
  const player = document.querySelector('.player');
  const gameBoardHeight = gameBoard.clientHeight;
  const gameBoardWidth = gameBoard.clientWidth;
  let lastObstacleTime = 0;
  // Retrieve the difficulty stored in localStorage
  const difficulty = localStorage.getItem('difficulty') || 'easy';

  // Check if the game board and player exist before continuing
  if (!gameBoard || !player) {
    console.error('Element .game-board or .player not found!');
    return;
  }

  // Function to check if the game is over
  function isGameOver() {
    return window.life === 0; // Checks if the life count has reached zero
  }

  // Function to create an obstacle element.
  function createObstacle() {
    if (isGameOver()) return; // Stops creating obstacles if the game is over

    const obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    const randomX = Math.floor(Math.random() * (gameBoardWidth - 50));
    obstacle.style.left = `${randomX}px`;
    obstacle.style.top = `0px`;
    gameBoard.appendChild(obstacle);

    // Set speed based on difficulty
    let speed;
    switch (difficulty) {
      case 'medium':
        speed = Math.random() * 6 + 8; // Average speed
        break;
      case 'hard':
        speed = Math.random() * 8 + 10; // High speed
        break;
      default:
        speed = Math.random() * 3 + 2; // Easy speed
        break;
    }

    // Function to make the obstacle fall.
    function fall() {
      if (isGameOver()) return; // Stops obstacle movement if the game is over

      const currentY = parseFloat(obstacle.style.top);
      obstacle.style.top = `${currentY + speed}px`;

      // Collision detection
      if (detectCollision(player, obstacle)) {
        takeDamage(); // Calls the takeDamage function from damage.js to decrease life
        obstacle.remove();

        // Checks if the player has lost all lives
        if (window.life === 0) {
          console.log("Game Over! Redirecting to gameOver.html...");
          setTimeout(() => {
            window.location.href = "gameOver.html"; // Redirects after 1 second
          }, 500); // Faster redirection, no alert needed
        }

      } else if (currentY + obstacle.clientHeight >= gameBoardHeight - 2) {
        obstacle.remove();
      } else {
        requestAnimationFrame(fall);
      }
    }
    fall();
  }

  // Function to detect collision between the player and an obstacle
  function detectCollision(player, obstacle) {
    const playerRect = player.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();

    return !(
      playerRect.top > obstacleRect.bottom ||
      playerRect.bottom < obstacleRect.top ||
      playerRect.left > obstacleRect.right ||
      playerRect.right < obstacleRect.left
    );
  }
  // Function to generate obstacles at random intervals
  function generateObstacles(timestamp) {
    if (isGameOver()) return; // Stops generating obstacles if the game is over

    const timeSinceLastObstacle = timestamp - lastObstacleTime;

    if (timeSinceLastObstacle > Math.random() * 2000 + 1000) {
      createObstacle();
      lastObstacleTime = timestamp;
    }

    requestAnimationFrame(generateObstacles);
  }

  requestAnimationFrame(generateObstacles);
};
