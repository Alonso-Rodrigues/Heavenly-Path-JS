var player = document.querySelector('canvas')
var content = player.getContext('2d')
var img = new Image();
img.src = "/public/assets/img/aviao"
img.addEventListener('load', function () {
    loop();
}, false);

var obj = {
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    rotation: 0,
    img: img,
    centerX: function () {
        return this.x + this.width / 2;
    },
    centerY: function () {
        return this.y + this.height / 2;
    }
}

function loop() {
    requestAnimationFrame(loop);
    update();
    render();
}

function update() {
    // Aqui você pode adicionar lógica para mover ou girar o objeto
}

function render() {
    content.clearRect(0, 0, player.width, player.height);
    content.save();
    content.translate(obj.centerX(), obj.centerY());
    content.rotate(obj.rotation); // Mantenha 0 ou ajuste conforme necessário
    content.drawImage(
        obj.img,
        0, 0, obj.width, obj.height,
        -obj.width / 2, -obj.height / 2, obj.width, obj.height
    );
    content.restore();
}
