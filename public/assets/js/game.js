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



