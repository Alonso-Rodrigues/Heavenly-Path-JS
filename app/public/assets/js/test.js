window.onload = function () {
  const gameBoard = document.querySelector('.game-board');

  // Certifique-se de que a gameBoard foi selecionada corretamente
  if (!gameBoard) {
    console.error("Elemento '.game-board' não encontrado!");
    return;
  }

  const gameBoardHeight = gameBoard.clientHeight;
  const gameBoardWidth = gameBoard.clientWidth;

  // Função para gerar um obstáculo
  function createObstacle() {
    const obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');

    // Posiciona aleatoriamente no eixo X
    const randomX = Math.floor(Math.random() * (gameBoardWidth - 50)); // Ajuste para evitar ultrapassar a borda
    obstacle.style.left = `${randomX}px`;
    obstacle.style.top = '0px'; // Começa do topo

    gameBoard.appendChild(obstacle);

    // Define uma velocidade de queda aleatória
    const speed = Math.random() * 3 + 2; // Velocidade entre 2 e 5 pixels por frame

    // Atualiza a posição do obstáculo a cada frame
    function fall() {
      const currentY = parseFloat(obstacle.style.top);
      obstacle.style.top = `${currentY + speed}px`;

      // Remove o obstáculo se ele sair da tela
      if (currentY > gameBoardHeight) {
        obstacle.remove();
      } else {
        requestAnimationFrame(fall);
      }
    }

    fall();
  }

  // Função para gerar obstáculos em intervalos aleatórios
  function startGeneratingObstacles() {
    setInterval(() => {
      createObstacle();
    }, Math.random() * 2000 + 1000); // Gera um obstáculo a cada 1-3 segundos
  }

  // Inicia a geração dos obstáculos
  startGeneratingObstacles();
};
