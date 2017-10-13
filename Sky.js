//{image: 图片, x： 100, canvas: canvas, context: context}
//Sky的构造函数，通过info传入具体要创建的那个sky对象的参数
function Sky(info) {
    this.image = info.image;
    this.x = info.x;
    this.speed = 2;
    this.canvas = info.canvas;
    this.context = info.context;
}

Sky.prototype = {
    constructor: Sky,

    draw: function () {
        //每一帧往左移动两个像素
        this.x -= this.speed;
        //当移出舞台时，接到右边的对象的后面
        if (this.x <= -this.canvas.width) {
            this.x = this.canvas.width;
        }

        //把自己绘制到画布上
        this.context.drawImage(this.image, this.x, 0, this.image.width, this.image.height);
    }
}