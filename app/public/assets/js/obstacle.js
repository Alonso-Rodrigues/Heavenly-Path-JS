window.onload = function(){
  const gameBoard = document.querySelector('.game-board')

  // Make sure the gameBoard is selected correctly
  if(!gameBoard){
    console.error('Element .game-board not found!');
    return;
  }

  const gameBoardHeight = gameBoard.clientHeight;
  const gameBoardWidth = gameBoard.clientWidth;

  // Function to generate an obstacle
  function createObstacle(){
    const obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');

    // Randomly position on the X axis
    const randomX = Math.floor(Math.random() * (gameBoardWidth - 50))
    obstacle.style.left = `${randomX}px`;
    obstacle.style.top = `0px`;
    gameBoard.appendChild(obstacle);

    // Set a random fall speed
    const speed = Math.random() * 3 + 2;

    // Update the obstacle position every frame
    function fall(){
      const currentY = parseFloat(obstacle.style.top);
      obstacle.style.top = `${currentY + speed}px`;

      // Update the obstacle position every frame
      if (currentY + obstacle.clientHeight >= gameBoardHeight - 2){
        obstacle.remove();
      } else {
        requestAnimationFrame(fall);
      }
    }
    fall();
  }

  // Function to generate obstacles at random intervals
  function generateObstacles() {
    setInterval(() => {
      createObstacle();
    }, Math.random() * 2000 + 1000)
  }

  // Start generating obstacles
  generateObstacles();

}