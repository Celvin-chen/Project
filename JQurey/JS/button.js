//构造函数
function ButtonModule (width,height,position,x,y,imgwidth) {
    this.width = width||70;  //定义button的宽度
    this.height = height||25;   //定义button的高度
    this.position = position||"absolute";//定义button的定位
    this.left = x || 0; //定义button左的偏移位置
    this.top = y|| 0;  //定义button上下偏移的位置
   
    this.Buttondiv = document.createElement("div");//创建button按钮
    this.parentContainer = "body";//命名父容器，默认的以body为基准
    this.jsonType = {"border":"1px solid black","display":"flex","background-color":"transparent"};//定义button的属性样式
    this.button = null;

    this.Imgdiv = document.createElement("div");//创建img的容器标签
    this.imgadiv = null;
    this.imgjsonType = {"background":"white"};//定义图片的样式
    this.imgURL = {"src":"img/search20ds.png"};//定义图片的路径
    this.img = document.createElement("img");//创建img标签
    this.imgwidth = imgwidth|| 25;//定义图片的宽度

    this.Textbutton = null;
    this.Textdiv = document.createElement("div");//创建Text文本框
    this.TextType= {"color":"red"}
    this.TextjsonType = {"text-align": "center","color":"black"};//定义文本样式
    this.buttonText = ""||"组件"; //定义button的文本
    this.buttonStyle = {"background":"beige"}
}
ButtonModule.prototype.Button = function(){
   this.buttonBoxMax();
   this.imgDiv(); 
   this.TextDiv();
   this.HoverMouse();
   this.buttonClick();
}
//创建button按钮
ButtonModule.prototype.buttonBoxMax = function(){
    var Buttondiv = this.Buttondiv;
    var left = this.left;
    var top = this.top;
    var width = this.width;
    var height = this.height;
    var position = this.position;
    var nc = this.parentContainer;
    this.button = $(Buttondiv);
    $(nc).append(Buttondiv);
    $(Buttondiv).width(width).height(height).css(this.jsonType).css({"position":position,"left":left,"top":top});

}
//创建img图片
ButtonModule.prototype.imgDiv = function(){
    var imgwidth = this.imgwidth;
    var imgheight = this.height;
    var imgdiv = this.Imgdiv;
    var imgjsonType = this.imgjsonType;
    var img = this.img;
    var imgURL = this.imgURL;
    var imgheight = this.height;
    var buttondiv = this.button;
    this.imgadiv = $(imgdiv);
    buttondiv.append(imgdiv);
    $(imgdiv).width(imgwidth).height(imgheight).css(imgjsonType);
    var imgadiv = this.imgadiv;
    imgadiv.append(img);
    $(img).width(imgwidth).height(imgheight).attr(imgURL);
}
//创建Text框的div
ButtonModule.prototype.TextDiv = function(){
    var width = this.width-this.imgwidth;
    var height = this.height;
    var textwen = this.buttonText;
    var Textdiv = this.Textdiv;
    var button = this.button;
    var TextjsonType = this.TextjsonType; 
    this.Textbutton = $(Textdiv);
    button.append(Textdiv);
    $(Textdiv).width(width).height(height).append(textwen).css(TextjsonType).css({"line-height":height+"px"});
}
//鼠标滑过button
ButtonModule.prototype.HoverMouse = function(){
    var button = this.button;
    var TextType = this.TextType;
    var TextjsonType = this.TextjsonType;
    var imgjsonType = this.imgjsonType;
    var buttonStyle = this.buttonStyle;
    var Textbutton = this.Textbutton;
    $(button).hover(function(){
        $(Textbutton).css(TextType);
        $(button).css(buttonStyle);
    },function(){
        $(Textbutton).css(TextjsonType);
        $(button).css(imgjsonType);
    })
}
ButtonModule.prototype.buttonClick = function(){
    var button = this.button;
    $(button).click(function(){
        alert("我是button组件");
    })
}