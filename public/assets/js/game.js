var player = document.querySelector('.player');
var gameBoard = document.querySelector('main');
var lastMouseX = 0;

document.addEventListener('mousemove', function (mouse) {
    // Mouse position
    let xPosition = mouse.pageX - player.clientWidth / 2;
    let yPosition = mouse.pageY - player.clientHeight / 2;

    // Game area dimensions
    let boardRect = gameBoard.getBoundingClientRect();

    // Restriction to not leave the gameBoard area
    if (xPosition < boardRect.left) {
        xPosition = boardRect.left;
    } else if (xPosition + player.clientWidth > boardRect.right) {
        xPosition = boardRect.right - player.clientWidth;
    }

    if (yPosition < boardRect.top) {
        yPosition = boardRect.top;
    } else if (yPosition + player.clientHeight > boardRect.bottom) {
        yPosition = boardRect.bottom - player.clientHeight;
    }

    // Update the player position
    player.style.left = xPosition + 'px';
    player.style.top = yPosition + 'px';

    // Check if the mouse moved right or left
    if (mouse.pageX > lastMouseX) {
        // Mouse moving to the right, flips the image to the right
        player.style.transform = 'scaleX(-1)';
    } else if (mouse.pageX < lastMouseX) {
        // Mouse moving to the right, flips the image to the left
        player.style.transform = 'scaleX(1)';
    }

    // Update the last mouse position
    lastMouseX = mouse.pageX;
});


