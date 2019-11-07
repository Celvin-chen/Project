function ShoppingBox(width,height,position,x,y){
    this.width = width||120;
    this.height = height ||30;
    this.position = position||"absolute";
    this.left = x||0;
    this.top = y ||0;
    this.parentContainer = "body";//定义父容器
    //定义父的div
    this.parentDiv = document.createElement("div"); 
    this.parentDivCSS = {"background":"pink","display":"flex"}
    this.parentBox = null;
    //定义减的按钮
    this.LeftDiv = document.createElement("div");
    this.LeftBox = null;
    this.LeftDivStyle = {"font-family": "微软雅黑","color":"coral","cursor":"pointer","text-align":"center"}
    //定义input框
    this.parentInput = document.createElement("input");
    this.InputStyle = {"border":"1px solid red","text-align":"center"}
    this.InputBox = null;
    //定义右边的按钮
    this.RightDiv = document.createElement("div");
    this.RightBox = null;
}
//创建购物框
ShoppingBox.prototype.SetShoppingBox = function(){
    this.SetParentDiv();
    this.SetSubtract();
    this.SetInput();
    this.SetPlus();
    this.SetBlur();
}
//创建大的div
ShoppingBox.prototype.SetParentDiv = function(){
    var width = this.width;
    var height = this.height;
    var position = this.position;
    var left = this.left;
    var top  = this.top;
    var parentContainer = this.parentContainer;
    var parentDiv = this.parentDiv;
    var parentDivCSS = this.parentDivCSS;
    $(parentContainer).append(parentDiv);
    this.parentBox = $(parentDiv);
    $(parentDiv).width(width).height(height).css({"position":position,"left":left+"px","top":top+"px"}).css(parentDivCSS);
}
//创建左边的按钮
ShoppingBox.prototype.SetSubtract = function(){
    var width = this.width/4;
    var height = this.height;
    var LeftDiv = this.LeftDiv;
    var parentBox = this.parentBox;
    var LeftDivStyle = this.LeftDivStyle;
    $(parentBox).append(LeftDiv);
    this.LeftBox = $(LeftDiv);
    $(LeftDiv).width(width).height(height).append("-").css(LeftDivStyle).css({"line-height":height+"px","font-size":height+"px"});
}
//创建input
ShoppingBox.prototype.SetInput = function(){
    var parentBox = this.parentBox;
    var width = this.width/2-2;
    var height = this.height-2;
    var parentInput = this.parentInput;
    var InputStyle = this.InputStyle;
    $(parentBox).append(parentInput)
    this.InputBox = $(parentInput)
    $(parentInput).width(width).height(height).css(InputStyle);
}
//创建右边的按钮
ShoppingBox.prototype.SetPlus = function(){
    var width = this.width/4;
    var height = this.height;
    var RightDiv = this.RightDiv;
    var parentBox = this.parentBox;
    var LeftDivStyle = this.LeftDivStyle;
    $(parentBox).append(RightDiv);
    this.RightBox = $(RightDiv);
    $(RightDiv).width(width).height(height).append("+").css(LeftDivStyle).css({"line-height":height+"px","font-size":height+"px"});
}
//input事件
ShoppingBox.prototype.SetBlur = function(){
    var InputBox = this.InputBox;
    var LeftBox = this.LeftBox;
    var RightBox = this.RightBox;
    var inputval = 0;
    $(InputBox).val("0");
    $(InputBox).blur(function(){
       inputval = $(InputBox).val()==""?0:$(InputBox).val();
    })
    $(LeftBox).click(function(){
        inputval--;
        $(InputBox).val(inputval);
        if(inputval <= 0){
            inputval=0;
            $(InputBox).val(inputval)
        }
    })
    $(RightBox).click(function(){
        inputval++;
        $(InputBox).val(inputval);
    })
   
}