function PiechartPackaging(width,height,x,y,r){
    this.width = width|| 2.5 * 200;
    this.height = height|| 2.5 * 200;
    this.x = x || 2.5 * 100;
    this.y = y || 2.5 * 100;
    this.r = r || 200;
    this.parentContainer = null || document.getElementsByTagName("body")[0];//定义父容器
    this.data = null || [
        {
            values:0.1,
            color:"red",
            name : "毛衣"
          },
        {
            values:0.2,
            color:"blue",
            name : "裤子"
          },
        {
            values:0.1,
            color:"pink",
            name : "短裙"
          },
        {
            values:0.3,
            color:"green",
            name : "外套"
          },
        {
            values:0.3,
            color:"black",
            name : "长裙"
          }
    ];
    this.canvas = document.createElement("canvas");
    this.ctx = null;
    this.initialization = -90;
}
//创建方法
PiechartPackaging.prototype.Execute = function(){
    this.Canvas();
    this.DrawPieChart();
}
//创建canvas
PiechartPackaging.prototype.Canvas = function(){
    var parentContainer = this.parentContainer;
    var canvas = this.canvas;
    var width = this.width;
    var height = this.height;
    parentContainer.appendChild(canvas);
    this.ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    // canvas.style.border = "1px solid red";
}
//循环添绘制出饼状图和绘制饼状文字
PiechartPackaging.prototype.DrawPieChart = function(){
    var x = this.x;
    var y = this.y;
    var r = this.r;
    var initialization = this.initialization;
    var data = this.data;
    var ctx = this.ctx;

    for(let i = 0;i<data.length;i++){
        ctx.beginPath();
        let angle = data[i].values * 360;
        let color = data[i].color;
        let begin = initialization * Math.PI/180;
        let finish = (initialization + angle) * Math.PI/180;
        //文字角度
        let text = data[i].values * 100 + "%" +" "+ data[i].name;
        let textAngle = initialization + angle/2;
        let textX = x + Math.cos(textAngle * Math.PI/180) * (r + 20);
        let textY = y + Math.sin(textAngle * Math.PI/180) * (r + 20);
        
        ctx.moveTo(x, y);
        ctx.arc(x,y,r,begin,finish)
        ctx.fillStyle = color;
        if(textAngle > 90 && textAngle < 270){
            ctx.textAlign = "end";
        }
        ctx.fillText(text,textX,textY);
        ctx.fill();
        initialization += angle;

    }
}