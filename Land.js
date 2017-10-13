//{image: 图片, x： 100, canvas: canvas, context: context}
function Land(info) {
    this.image = info.image;
    this.x = info.x;
    this.canvas = info.canvas;
    this.context = info.context;
    this.speed = 2;
}

Land.prototype = {
    constructor: Land,
    draw: function () {
        //1. 移动x的位置往左
        this.x -= this.speed;

        //2. 走出舞台之后，跟到队伍的后面
        if (this.x <= -this.image.width) {
            this.x = this.image.width * 4;
        }

        //3. 绘制
        this.context.drawImage(this.image, this.x, this.canvas.height-this.image.height, this.image.width, this.image.height);
    }
}