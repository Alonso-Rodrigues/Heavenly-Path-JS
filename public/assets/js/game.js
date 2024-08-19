var player = document.querySelector('.player');
var gameBoard = document.querySelector('main');
var lastMouseX = 0;

document.addEventListener('mousemove', function (mouse) {
    // Posição do mouse
    let xPosition = mouse.pageX - player.clientWidth / 2;
    let yPosition = mouse.pageY - player.clientHeight / 2;

    // Dimensões da área do jogo
    let boardRect = gameBoard.getBoundingClientRect();

    // Restrição para não sair da área do gameBoard
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

    // Atualiza a posição do player
    player.style.left = xPosition + 'px';
    player.style.top = yPosition + 'px';

    // Verifica se o mouse se moveu para a direita ou esquerda
    if (mouse.pageX > lastMouseX) {
        // Mouse movendo para a direita, vira a imagem para a direita
        player.style.transform = 'scaleX(-1)';
    } else if (mouse.pageX < lastMouseX) {
        // Mouse movendo para a esquerda, vira a imagem para a esquerda
        player.style.transform = 'scaleX(1)';
    }

    // Atualiza a última posição do mouse
    lastMouseX = mouse.pageX;
});


