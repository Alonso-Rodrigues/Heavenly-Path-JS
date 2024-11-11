window.onload = function () {
  const gameBoard = document.querySelector('.game-board');
  const player = document.querySelector('.player');

  if (!gameBoard || !player) {
    console.error('Element .game-board or .player not found!');
    return;
  }

  const gameBoardHeight = gameBoard.clientHeight;
  const gameBoardWidth = gameBoard.clientWidth;
  let lastObstacleTime = 0;

  // Função para verificar se o jogo acabou
  function isGameOver() {
    return window.life === 0;  // Verifica se a vida chegou a zero
  }

  function createObstacle() {
    if (isGameOver()) return;  // Não cria mais obstáculos se o jogo acabou

    const obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    const randomX = Math.floor(Math.random() * (gameBoardWidth - 50));
    obstacle.style.left = `${randomX}px`;
    obstacle.style.top = `0px`;
    gameBoard.appendChild(obstacle);

    const speed = Math.random() * 3 + 2;

    function fall() {
      if (isGameOver()) return;  // Não faz a queda dos obstáculos se o jogo acabou

      const currentY = parseFloat(obstacle.style.top);
      obstacle.style.top = `${currentY + speed}px`;

      // Detecção de colisão
      if (detectCollision(player, obstacle)) {
        takeDamage();  // Chama a função takeDamage do damage.js para diminuir a vida
        obstacle.remove();

        // Verifica se o jogador perdeu todas as vidas
        if (window.life === 0) {
          console.log("Game Over! Redirecting to gameOver.html...");
          setTimeout(() => {
            window.location.href = "gameOver.html";  // Redireciona após 1 segundo
          }, 500);  // Redirecionamento mais rápido, sem a necessidade do alerta
        }

      } else if (currentY + obstacle.clientHeight >= gameBoardHeight - 2) {
        obstacle.remove();
      } else {
        requestAnimationFrame(fall);
      }
    }
    fall();
  }

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

  function generateObstacles(timestamp) {
    if (isGameOver()) return;  // Não gera mais obstáculos se o jogo acabou

    const timeSinceLastObstacle = timestamp - lastObstacleTime;

    if (timeSinceLastObstacle > Math.random() * 2000 + 1000) {
      createObstacle();
      lastObstacleTime = timestamp;
    }

    requestAnimationFrame(generateObstacles);
  }

  requestAnimationFrame(generateObstacles);
};
