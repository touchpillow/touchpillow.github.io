function Pipe(info) {
    this.image = info.image;
    this.topImage = info.topImage;
    this.x = info.x;
    this.speed = 2;
    this.canvas = info.canvas;
    this.context = info.context;
    //管道间的间隔
    this.gap = info.gap;
    //下半部分的管道的底部，距离画布底部的距离
    this.offsetY = info.offsetY;

    //中间管道的间隔
    this.space = 100;

    //管道上下两部分的高度
    this.topHeight = 0;
    this.bottomHeight = 0;

    //初始化管道的高度
    this.initHeight();
}

Pipe.prototype = {
    constructor: Pipe,
    draw: function () {
        //1. 移动x的位置
        this.x -= this.speed;
        //2. 移出舞台排到队伍的后面
        if (this.x <= -this.image.width) {
            this.initHeight();
            this.x = this.image.width*5 + this.gap * 6;
        }
        //3. 绘制
        //先绘制管道的上半部分
        this.context.drawImage(this.topImage, this.x, 0, this.topImage.width, this.topHeight);
        //绘制管道的下半部分
        this.context.drawImage(this.image, this.x, this.canvas.height-this.offsetY-this.bottomHeight, this.image.width, this.bottomHeight);

        //4. 把柱子的路径画出来
        this.context.rect(this.x, 0, this.topImage.width, this.topHeight);
        this.context.rect(this.x, this.canvas.height-this.offsetY-this.bottomHeight, this.image.width, this.bottomHeight);
    },

    initHeight: function () {
        //管道的上面的部分，至少是100像素， 范围是100到250
        this.topHeight = 100 + 150 * Math.random();
        //计算下半部分的管道的高度
        this.bottomHeight = this.canvas.height - this.topHeight - this.space - this.offsetY;
    }
}