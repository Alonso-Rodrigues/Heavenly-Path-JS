window.onload = function(){
  const gameBoard = document.querySelector('.game-board')
  if(!gameBoard){
    console.error('Element .game-board not found!');
    return;
  }

  const gameBoardHeight = gameBoard.clientHeight;
  const gameBoardWidth = gameBoard.clientWidth;

  function createObstacle(){
    const obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');

    const randomX = Math.floor(Math.random() * (gameBoardWidth - 50))
    obstacle.style.left = `${randomX}px`;
    obstacle.style.top = `0px`;

    gameBoard.appendChild(obstacle);
    const speed = Math.random() * 3 + 2;

    function fall(){
      const currentY = parseFloat(obstacle.style.top);
      obstacle.style.top = `${currentY + speed}px`;

      if (currentY + obstacle.clientHeight >= gameBoardHeight - 2){
        obstacle.remove();
      } else {
        requestAnimationFrame(fall);
      }
    }
    fall();
  }

  function generateObstacles() {
    setInterval(() => {
      createObstacle();
    }, Math.random() * 2000 + 1000)
  }

  generateObstacles();

}