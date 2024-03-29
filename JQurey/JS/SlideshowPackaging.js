function SlideshowPackaging(width,height,position,x,y){
    //定义基本属性以及最外面的div
    this.width = width||600;
    this.height = height||375;
    this.position = position||"absolute";
    this.left = x||0;
    this.top = y||0;
    this.parentContainer = "body";//定义父容器
    this.parentStyle = {"border":"1px solid red","overflow": "hidden"};//定义父容器的属性 ,"overflow": "hidden"
    this.DivParent = document.createElement("div");
    //定义div
    this.parentdiv = null;
    //定义ul
    this.UlParent = document.createElement("ul");
    this.Style = {"border":"1px solid blue"};
    this.parentul = null;
    //定义li标签
    this.parentli = null;
    this.LiStyle = {"list-style": "none","position":"absolute"};
    //定义img标签
    this.AArray = null||["img/308708.jpg","img/315325.jpg","img/320113.jpg","img/324234.jpg","img/325132.jpg","img/325392.jpg"];//定义图片
    this.parentA = null; 
    this.imgText =["name","nihao","你好","hello","chenxu","陈旭"];
    this.imgTextStyle = {"width":"200px","height":"40px","border":"1px solid red",
                         "line-height":"40px","text-align": "center","color":"black",
                         }
    //定义ul2小圆点
    this.UlParentTow = document.createElement("ul");
    this.UlParentTowStyle = {"text-align":"center"};
    this.UlTow = null;
    //定义ul里面的li（小圆点）
    this.UlLiStyle = {"background":"darkgray","border-radius":"100%","display":"inline-block",
                      "margin":"0px 2px","cursor":"pointer","line-height":"20px"
                     };
    this.UlTowLi = null;
    //定义公用属性
    //this.i = 0;
    //定义小圆点样式
    this.UlTowliStyle = {"background":"crimson"};
    this.UlTowliStyleone = {"background":"darkgray"};
    //定义左右点击按钮
    this.Leftdiv = document.createElement("div");
    this.Let = null;
    this.buttonStyle = {"background":"rgba(34,92,118,0.5)","font-family":"微软雅黑","font-size":"30px",
                        "text-align":"center","cursor":"pointer"};
    this.Rightdiv = document.createElement("div");
    this.Rig = null;
}
//创建方法
SlideshowPackaging.prototype.Slideshow = function(){
    this.ParentDiv();
    this.ParentUl();
    this.ParentLi();
    this.ParentUl2();
    this.ParentUl2Li();
    this.Leftbutton();
    this.Rightbutton();
    this.Setinterval();
    this.FadeInFadeout();
}
//创建父容器
SlideshowPackaging.prototype.ParentDiv = function(){
    var DivParent = this.DivParent;
    var PC = this.parentContainer;
    var width = this.width;
    var height = this.height;
    var position = this.position;
    var left = this.left;
    var top = this.top;
    var parentStyle = this.parentStyle;
    this.parentdiv = $(DivParent);
    $(PC).append(DivParent);
    $(DivParent).width(width).height(height).css(parentStyle).css({"position":position,"left":left+"px","top":top+"px"});//.css({"position":position,"left":left+"px","top":top+"px"})
}
//创建ul
SlideshowPackaging.prototype.ParentUl = function(){
    var parentdiv = this.parentdiv;
    var ulwidth = this.width*3;
    var ulheight = this.height;
    var position = "absolute";
    var left = 0-this.width;
    var top = 0;
    var UlParent = this.UlParent;
    this.parentul = $(UlParent);
    $(parentdiv).append(UlParent);
    $(UlParent).width(ulwidth).height(ulheight).css({"position":position,"left":left+"px","top":top+"px"});
}
//创建LI
SlideshowPackaging.prototype.ParentLi = function(){
    var parentul = this.parentul;
    var width = this.width;
    var height = this.height;
    var AArray = this.AArray;
    for(var i = 0; i < AArray.length ; i++){
        var Liparent = document.createElement("li");
        $(parentul).append(Liparent);
        this.parentli = $(Liparent)
        var list = this.LiStyle
        $(Liparent).width(width).height(height).css(list);
        var parentlia = this.parentli;
        var ImgParent = document.createElement("img");
        $(parentlia).append(ImgParent);
        this.parentA = $(ImgParent);
        $(ImgParent).width(width).height(height).attr({"src":AArray[i]});
        var ImgDiv = document.createElement("div");
        $(parentlia).append(ImgDiv);
        var Text = this.imgText;
        var imgTextStyle = this.imgTextStyle;
        var texetop = this.height*0.8;
        var textleft = this.width*0.083;
        $(ImgDiv).append(Text[i]).css(imgTextStyle).css({"position":"absolute","left":textleft+"px","top":texetop+"px"});
    }
}
//创建ul2小圆点
SlideshowPackaging.prototype.ParentUl2 = function(){
    var parentdiv = this.parentdiv;
    var width = this.width;
    var top = this.height*0.88;
    var left = 0;
    var position = this.position;
    var UlParentTow = this.UlParentTow;
    var UlParentTowStyle = this.UlParentTowStyle;
    $(parentdiv).append(UlParentTow);
    this.UlTow =  $(UlParentTow);
    $(UlParentTow).width(width).height(20).css({"position":position,"left":left+"px","top":top+"px"}).css(UlParentTowStyle);
}
//创建ul2里面的li（小圆点）
SlideshowPackaging.prototype.ParentUl2Li = function(){
    var AArray =this.AArray;
    for(var i = 0;i<AArray.length;i++){
        var UlTowLi = document.createElement("li");
        var UlTow = this.UlTow;
        var UlLiStyle = this.UlLiStyle;
        var width = 20;
        $(UlTow).append(UlTowLi);
        this.UlTowLi = $(UlTowLi)
        $(UlTowLi).width(width).height(width).css(UlLiStyle);
        var UlTowLi = this.UlTowLi;
        $(UlTowLi).append((i+1));
    }
}
//定时器控制图片轮播
SlideshowPackaging.prototype.Setinterval = function(){
    var time;
    var i = 0;
    var parentul =  this.parentul;
    var UlTow = this.UlTow;
    var UlTowliStyle = this.UlTowliStyle;
    var UlTowliStyleone = this.UlTowliStyleone;
    var AArray = this.AArray;
    var size = AArray.length;
    var parentdiv = this.parentdiv;
    var width = this.width;
    var ulchildrens =  $(UlTow).children().siblings();
    var parentulLis = $(parentul).children().siblings();
    var ulchildrens =  $(UlTow).children().siblings();
    var Let = this.Let;
    var Rig = this.Rig;
    $(ulchildrens).eq(0).css(UlTowliStyle)
    $(parentulLis).eq(0).css({"left":width+"px"}).show().siblings().hide();
    ulchildrens.mouseenter(function(){
        var index=$(this).index(); 
        var aa=i;
		i=index;
		// 比较过去和现在的index
		if(index>=aa){
            console.log(aa+"you"+index);
			right();
		}
		else {
            console.log(aa+"左"+index);  
			left();
        }
    })
    time=setInterval(moveR,3000);
    $(parentdiv).hover(function(){
		clearInterval(time);
	   },function(){
        time=setInterval(moveR,3000);
	   })
    function moveR(){
        i++;
        if (i==size) {
            i=0;
        }
        right();
    }
    function right(){
        $(ulchildrens).eq(i).css(UlTowliStyle).siblings().css(UlTowliStyleone);
        $(parentulLis).eq(i).show().siblings().hide().stop().css({"left":width*2+"px"});
			// 判断共用条件
			$(parentulLis).eq(i).stop().css({"left":width*2+"px"}).animate({left:width+"px"},800);
            if(i==0){
                $(parentulLis).eq(size-1).hide().css({"left":width+"px"}).animate({left:"0px"},800).show();
            }
            else{
                $(parentulLis).eq(i-1).css({"left":width+"px"}).animate({left:"0px"},800).show();
            }               
     }
    
    function moveL(){
        i--;
        if (i==-1) {
            i=size-1;
        }			
        left();	
    }
    function left(){
       $(ulchildrens).eq(i).css(UlTowliStyle).siblings().css(UlTowliStyleone);
       $(parentulLis).eq(i).show().siblings().hide().stop().css({"left":"0px"});
        // 判断共用条件
       $(parentulLis).eq(i).stop().css({"left":"0px"}).animate({left:width+"px"},800);
       if(i==0){
           $(parentulLis).eq(1).hide().css({"left":width+"px"}).animate({left:width*2+"px"},800).show();
        }
        else if(i==size-1){
           $(parentulLis).eq(0).stop().show().css({"left":width+"px"}).animate({left:width*2+"px"},800);
        }
        else{
           $(parentulLis).eq(i+1).css({"left":width+"px"}).animate({left:width*2+"px"},800).show();
        }
    }
    // 左按钮
    $(Let).click(function(){
        moveL();
    })
     // 右按钮
    $(Rig).click(function(){
        moveR();
    })		    
}
//创建左按钮
SlideshowPackaging.prototype.Leftbutton = function(){
    var parentdiv = this.parentdiv;
    var Leftdiv = this.Leftdiv;
    var width = this.width*0.04;
    var height = this.height*0.136;
    var position = this.position;
    var top = (this.height-height)/2;
    var left = 0;
    var buttonStyle = this.buttonStyle
    $(parentdiv).append(Leftdiv);
    this.Let = $(Leftdiv);
    $(Leftdiv).width(width).height(height).css({"position":position,"left":left+"px","top":top+"px","line-height":height+"px"}).css(buttonStyle);
    var Let = this.Let;
    $(Let).append("<");
}
//创建右按钮
SlideshowPackaging.prototype.Rightbutton = function(){
    var parentdiv = this.parentdiv;
    var Rightdiv = this.Rightdiv;
    var width = this.width*0.04;
    var height = this.height*0.136;
    var position = this.position;
    var top = (this.height-height)/2;
    var left = (this.width-width);
    var buttonStyle = this.buttonStyle
    $(parentdiv).append(Rightdiv);
    this.Rig = $(Rightdiv);
    $(Rightdiv).width(width).height(height).css({"position":position,"left":left+"px","top":top+"px","line-height":height+"px"}).css(buttonStyle);
    var Rig = this.Rig;
    $(Rig).append(">");
    
}
//左右按钮淡入淡出效果
SlideshowPackaging.prototype.FadeInFadeout = function(){
    var parentdiv = this.parentdiv;
    var Let = this.Let;
    var Rig = this.Rig;
    $(Let).hide();
    $(Rig).hide();
    $(parentdiv).hover(function(){
       $(Let).fadeIn(300);
       $(Rig).fadeIn(300);
    },function(){
        $(Let).fadeOut(300);
        $(Rig).fadeOut(300);
    })
}