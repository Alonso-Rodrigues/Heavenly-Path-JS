// var cnv = document.querySelector('canvas');
// cnv.width = cnv.clientWidth;
// cnv.height = cnv.clientHeight;
// var ctx = cnv.getContext('2d');

// // Obtendo a imagem diretamente do HTML
// var img = document.querySelector('.player');

// var obj = {
//     x: 100,  // Ajuste as coordenadas de acordo com o tamanho do canvas
//     y: 100, // Ajuste as coordenadas de acordo com o tamanho do canvas
//     width: 576,
//     height: 576,
//     rotation: 0,
//     img: img,
//     centerX: function () {
//         return this.x + this.width / 2;
//     },
//     centerY: function () {
//         return this.y + this.height / 2;
//     }
// };

// var mouse = {};
// cnv.addEventListener('mousemove', function (e) {
//     mouse.x = e.clientX - cnv.offsetLeft
//     mouse.y = e.clientY - cnv.offsetTop
// }, false);

// function loop() {
//     requestAnimationFrame(loop);
//     update();
//     render();
// }

// function update() {
//    console.log(mouse.x)
// }

// function render() {
//     ctx.clearRect(0, 0, cnv.width, cnv.height);
//     ctx.save();
//     ctx.translate(obj.centerX(), obj.centerY());
//     ctx.rotate(obj.rotation);
//     ctx.drawImage(
//         obj.img,
//         0, 0, obj.width, obj.height,
//         -obj.width / 2, -obj.height / 2, obj.width, obj.height
//     );
//     ctx.restore();
// }

// loop(); // Inicie o loop

// var player = document.querySelector('.player');
// document.addEventListener('mousemove', function (mouse) {
//     let xPosition = mouse.pageX - 50;
//     let yPosition = mouse.pageY - 50;

//     player.style.left = xPosition + 'px'
//     player.style.top = yPosition + 'px'

//     console.log(mouse.pageX, mouse.pageY)
// });


// var player = document.querySelector('.player');
// var gameBoard = document.querySelector('main');

// document.addEventListener('mousemove', function (mouse) {
//     // Posição do mouse
//     let xPosition = mouse.pageX - player.clientWidth / 2;
//     let yPosition = mouse.pageY - player.clientHeight / 2;

//     // Dimensões da área do jogo
//     let boardRect = gameBoard.getBoundingClientRect();

//     // Restrição para não sair da área do gameBoard
//     if (xPosition < boardRect.left) {
//         xPosition = boardRect.left;
//     } else if (xPosition + player.clientWidth > boardRect.right) {
//         xPosition = boardRect.right - player.clientWidth;
//     }

//     if (yPosition < boardRect.top) {
//         yPosition = boardRect.top;
//     } else if (yPosition + player.clientHeight > boardRect.bottom) {
//         yPosition = boardRect.bottom - player.clientHeight;
//     }

//     // Atualiza a posição do player
//     player.style.left = xPosition + 'px';
//     player.style.top = yPosition + 'px';
// });

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


