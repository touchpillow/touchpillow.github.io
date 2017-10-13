function Bird(info) {
    this.image = info.image;
    this.context = info.context;
    this.canvas = info.canvas;
    this.x = info.x;
    this.y = info.y;
    //循环计数用来获取小鸟的xindex的
    this.index = 0;

    //单只小鸟的宽高
    this.w = info.w;
    this.h = info.h;

    //小鸟的速度
    this.v = 0;
    //小鸟的加速度
    this.a = 0.0005;

    //小鸟的最大速度和最大弧度
    this.maxspeed = 0.5;
    this.maxRadian = 45/180 * Math.PI;

    //每一帧执行的起始时间
    this.startTime = new Date();
}

Bird.prototype = {
    constructor: Bird,
    draw: function () {
        //1. 扇动翅膀的小鸟
        this.index += 1;
        var xindex = this.index % 3;

        //2. 加速运动的小鸟
        var now = new Date();
        //时间间隔
        var t = now - this.startTime;
        //计算出小鸟移动的距离(加速动动的距离计算公式s=vt+a*t*t/2)
        var s = this.v * t + this.a * t * t / 2;
        //当前帧小鸟的y坐标
        this.y += s;
        //当前帧的小鸟的速度
        this.v = this.v + this.a * t;
        //将now设为下一帧的起始时间
        this.startTime = now;

        //3. 旋转的小鸟
        this.context.save();
        this.context.translate(this.x, this.y);
        //计算旋转的弧度
        var percent = this.v / this.maxspeed;
        var radian = this.maxRadian * percent;
        //旋转坐标系
        this.context.rotate(radian);
        //画小鸟
        this.context.drawImage(this.image, xindex * this.w, 0, this.w, this.h, -this.w/2, -this.h/2, this.w, this.h);
        this.context.restore();
    }
}