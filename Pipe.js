function Pipe(info) {
    this.image = info.image;
    this.x = info.x;
    this.speed = 2;
    this.canvas = info.canvas;
    this.context = info.context;
    //管道间的间隔
    this.gap = info.gap;
}

Pipe.prototype = {
    constructor: Pipe,
    draw: function () {
        //1. 移动x的位置
        this.x -= this.speed;
        //2. 移出舞台排到队伍的后面
        if (this.x <= -this.image.width) {
            this.x = this.image.width*5 + this.gap * 6;
        }
        //3. 绘制
        this.context.drawImage(this.image, this.x, 0, this.image.width, 100);
    }
}