function DownList(width,height,position,x,y){
    this.width = width||250;
    this.height = height ||300;
    this.position = position||"absolute";
    this.left = x||300;
    this.top = y ||200;
    this.parentContainer = "body";//定义父容器
    this.jsonData = [{ID:"1",Name:"华夏邮电咨询有限公司",parentID:"0"},
                     {ID:"4",Name:"技术市场部",parentID:"1"},
                     {ID:"5",Name:"监理业务部",parentID:"1"},
                     {ID:"7",Name:"财务部",parentID:"1"},
                     {ID:"8",Name:"综合部",parentID:"1"},
                     {ID:"9",Name:"河南省项目部",parentID:"5"},
                     {ID:"12",Name:"河北省项目部",parentID:"5"},
                     {ID:"13",Name:"chenxu",parentID:"4"},
                     {ID:"2",Name:"监理有限公司",parentID:"0"},
                     {ID:"14",Name:"陈旭",parentID:"2"},
                     {ID:"9",Name:"河南省项目部",parentID:"5"},
                     {ID:"12",Name:"河北省项目部",parentID:"5"},
                     {ID:"13",Name:"chenxu",parentID:"4"},
                    ];
    //定义父容器
    this.parentDIV = document.createElement("div");
    this.parentDIVBox = null;
    //定义input
    this.parentInput = document.createElement("input");
    this.parentInputBox = null;
    this.InputStyle = {"border":"1px solid #000","outline":"none",
                       "background-image":'url("img/QQ20190725154749.png")',
                       "background-repeat":"no-repeat",
                       "background-position":"right","cursor":"pointer"
                      }
    //创建面板
    this.ListDiv = document.createElement("div");
    this.ListDivBox = null;
    this.ListDivStyle = {"background-color":"rgb(6, 6, 6)","opacity":"0.9","overflow":"auto"};
    //定义搜索框
    this.SearchBox = document.createElement("input");
    this.SearchBoxBox = null;
    this.SearchBoxStyle = {"border":"1px solid rgb(51, 51, 51)",
                           "color":"white","margin-top":"5px",
                           "background":"url('img/search20ds.png') 3px center no-repeat rgb(51, 51, 51)",
                           "padding-left":"25px","margin-bottom":"10px"
                          }
    //定义一级下拉框属性
    this.ListDivOne = document.createElement("div");
    this.ListBox = null;
    this.ListDivOneBox = null;
    this.ListDivOneABox = null;
    this.ListDivOneTextBox = null;
    this.ListDivOneStyle = {"color":"white","overflow":"auto","display":"flex","margin-top":"4px"};
    this.ListDivOneStyleImg = {"background":"url('img/right20w.png') right center no-repeat rgb(51, 51, 51)"};
    this.ListDivOneStyleImgA = {"background":"url('img/down20w.png') right center no-repeat rgb(51, 51, 51)"};
    this.ListDivOneImgBox = null;
    this.jsonDataNameA = null;
    //定义二级下拉框属性
    this.ListDivTwoBox = null;
    this.ListDivTwoABox = null;
    this.ListDivTwoTextBox = null;
    this.ListDivTwoImgBox = null;
    this.ListDivTwoImgBoxA = null;
    this.jsonDataNameB = null
    //定义三级下拉框的属性
    this.ListDivThreeBox = null;
    this.ListDivThreeTextBox = null;
    this.jsonDataNameC = null


}
//创建父容器
DownList.prototype.SetContainerList = function(){
    this.SetContainerDIV();
    this.SetContainerInput();
    this.SetContainerPanel();
    this.SetInputClick();
    this.SetSearchBox();
    this.SetListOne();
    this.SetInputclick();
    
    //this.ByValue();

}
//创建下拉菜单
DownList.prototype.SetContainerDIV = function(){
    var parentContainer = this.parentContainer;
    var parentDIV = this.parentDIV;
    var position = this.position;
    var left = this.left;
    var top = this.top;
    $(parentContainer).append(parentDIV);
    this.parentDIVBox = $(parentDIV);
    $(parentDIV).css({"position":position,"left":left+"px","top":top+"px"})
}
//创建input
DownList.prototype.SetContainerInput = function(){
    var InputStyle = this.InputStyle;
    var parentInput = this.parentInput;
    var parentDIVBox = this.parentDIVBox;
    $(parentDIVBox).append(parentInput);
    this.parentInputBox = $(parentInput);
    $(parentInput).width(100).height(25).css(InputStyle);
}
//创建面板
DownList.prototype.SetContainerPanel = function(){
    var width = this.width;
    var height = this.height;
    var parentDIVBox = this.parentDIVBox;
    var ListDiv = this.ListDiv;
    var ListDivStyle = this.ListDivStyle
    $(parentDIVBox).append(ListDiv);
    this.ListDivBox = $(ListDiv);
    $(ListDiv).width(width).height(height).css(ListDivStyle).css({"display":"none"});
}
//给input添加事件
DownList.prototype.SetInputClick = function(){
    var parentInputBox = this.parentInputBox;
    var ListDivBox = this.ListDivBox;
    $(parentInputBox).click(function(){
        $(ListDivBox).stop().slideToggle(300);
    })
}
//添加搜索框
DownList.prototype.SetSearchBox = function(){
    var width = this.width-60;
    var height = 25;
    var margin = (this.width-width)/5;
    var SearchBox = this.SearchBox;
    var ListDivBox = this.ListDivBox;
    var SearchBoxStyle = this.SearchBoxStyle;
    $(ListDivBox).append(SearchBox);
    this.SearchBoxBox = $(SearchBox);
    $(SearchBox).width(width).height(height).css(SearchBoxStyle).css({"margin-left":margin+"px"}).val("搜索");
}
//循环添加下拉框
DownList.prototype.SetListOne = function(){
    var ListDivBox = this.ListDivBox;
    var jsonData = this.jsonData;
    var width = this.width-20;
    var height = 25;
    var ListDivOneStyle = this.ListDivOneStyle;
    //var ListDivOneStyleImgA = this.ListDivOneStyleImgA;
   // var ListDivOneStyleImg = this.ListDivOneStyleImg;
    var ListDivOne = this.ListDivOne;
    //var ListDivStyle = this.ListDivStyle;
    $(ListDivBox).append(ListDivOne);
    this.ListBox = $(ListDivOne)
    $(ListDivOne).width(width).height(height).css(ListDivOneStyle);
    var ListDivOne = this.ListDivOne;
    $(ListDivOne).append("全部");
    for (let j = 0; j<jsonData.length;j++){
        if(jsonData[j].parentID == 0){
            //创建一级下拉框
            this.SetDropDownBoxOne();
            //创建一级文本框
            this.jsonDataNameA = jsonData[j].Name;
            this.SetTextBoxOne();
            //创建一级点击下拉按钮
            this.SetImgBoxOne();
            //点击一级下拉框
            this.SetClickImgOne();
            //鼠标滑过一级下拉效果
            this.SetHoverInputOne();
            //给input框赋值,点击事件一级下拉框
            this.SetParentInputOne();
   
            for(let i = 0; i<jsonData.length;i++){
                if(jsonData[i].parentID==jsonData[j].ID){
                    //创建二级下拉框
                   this.SetDropDownBoxTwo();
                   //创建二级文本框
                   this.jsonDataNameB = jsonData[i].Name;
                   this.SetTextBoxTwo();
                   //创建二级下拉按钮
                    this.SetImgBoxTwo();
                    //鼠标点击二级下拉框
                    this.SetClickImgTwo();
                    //鼠标滑过二级下拉效果
                    this.SetHoverInputTwo();
                    //给input框赋值,点击事件二级下拉框
                    this.SetParentInputTwo();
                    for(let k = 0;k<jsonData.length;k++){
                        if(jsonData[k].parentID==jsonData[i].ID){
                          //创建三级下拉框
                          this.SetDropDownBoxThree();
                          //创建三级文本框
                          this.jsonDataNameC = jsonData[k].Name;
                          this.SetTextBoxThree();
                          //鼠标滑过三级下拉效果
                          this.SetHoverInputThree();
                          //给input框赋值,点击事件三级下拉框
                          this.SetParentInputThree();
                        }
          
                    }
           
                }

            }
        }

    }
    
}
//给input添加点击事件
DownList.prototype.SetInputclick = function(){
    var SearchBoxBox = this.SearchBoxBox;
    $(SearchBoxBox).click(function(){
       $(SearchBoxBox).val("");
    })
    $(SearchBoxBox).blur(function(){
       if($(SearchBoxBox).val()==""){
        $(SearchBoxBox).val("搜索");
       }
    })
}

//下拉框创建开始
//创建一级下拉框
DownList.prototype.SetDropDownBoxOne = function(){
    var ListDivBox = this.ListDivBox;
    var ListDivOneStyle = this.ListDivOneStyle;
    var width = this.width-20;
    var height = 25;
    var ListDivOne = document.createElement("div");
    var ListDivOneA = document.createElement("div");
    $(ListDivBox).append(ListDivOne);
    this.ListDivOneBox = $(ListDivOne);
    $(ListDivOne).width(width).height(height).css(ListDivOneStyle);
    $(ListDivBox).append(ListDivOneA);
    this.ListDivOneABox = $(ListDivOneA);
    $(ListDivOneA).width(width).css({"display":"none","height":"auto"});
}
//创建二级下拉框
DownList.prototype.SetDropDownBoxTwo = function(){
    var ListDivOneABox = this.ListDivOneABox;
    var ListDivOneStyle = this.ListDivOneStyle;
    var width = this.width-20;
    var height = 25;
    var ListDivTwo = document.createElement("div");
    var ListDivTwoA = document.createElement("div");
    $(ListDivOneABox).append(ListDivTwo);
    this.ListDivTwoBox = $(ListDivTwo);
    $(ListDivTwo).width(width).height(height).css(ListDivOneStyle);
    $(ListDivOneABox).append(ListDivTwoA);
    this.ListDivTwoABox = $(ListDivTwoA);
    $(ListDivTwoA).width(width).css({"display":"none","height":"auto"});
}
//创建二级下拉框
DownList.prototype.SetDropDownBoxThree = function(){
    var ListDivTwoABox = this.ListDivTwoABox;
    var ListDivOneStyle = this.ListDivOneStyle;
    var width = this.width-20;
    var height = 25;
    var ListDivThree = document.createElement("div");
    $(ListDivTwoABox).append(ListDivThree);
    this.ListDivThreeBox = $(ListDivThree);
    $(ListDivThree).width(width).height(height).css(ListDivOneStyle);
}
//创建一级的text框
DownList.prototype.SetTextBoxOne = function(){
    var jsonDataNameA = this.jsonDataNameA;
    var ListDivOneBox = this.ListDivOneBox;
    var width = this.width-20;
    var height = 25;
    var ListDivOneText = document.createElement("div");
    $(ListDivOneBox).append(ListDivOneText);
    this.ListDivOneTextBox = $(ListDivOneText);
    $(ListDivOneText).width(width-25).height(height);
    var ListDivOneTextBox = this.ListDivOneTextBox;
    $(ListDivOneTextBox).append(jsonDataNameA);
}
//创建二级的text框
DownList.prototype.SetTextBoxTwo = function(){
    var jsonDataNameB = this.jsonDataNameB;
    var width = this.width-20;
    var height = 25;
    var ListDivTwoBox = this.ListDivTwoBox;
    var ListDivTwoText = document.createElement("div");
    $(ListDivTwoBox).append(ListDivTwoText);
    this.ListDivTwoTextBox = $(ListDivTwoText);
    $(ListDivTwoText).width(width-25).height(height);
    var ListDivTwoTextBox = this.ListDivTwoTextBox
    $(ListDivTwoTextBox).append(jsonDataNameB).css({"padding-left":"25px","box-sizing":"border-box"});
}
//创建三级的text框
DownList.prototype.SetTextBoxThree = function(){
    var jsonDataNameC = this.jsonDataNameC;
    var width = this.width-20;
    var height = 25;
    var ListDivThreeBox = this.ListDivThreeBox;
    var ListDivThreeText = document.createElement("div");
    $(ListDivThreeBox).append(ListDivThreeText);
    this.ListDivThreeTextBox = $(ListDivThreeText);
    $(ListDivThreeText).width(width-25).height(height);
    $(ListDivThreeText).append(jsonDataNameC).css({"padding-left":"40px","box-sizing":"border-box"});
}
//创建一级下拉按钮
DownList.prototype.SetImgBoxOne = function(){
    var ListDivOneStyleImg = this.ListDivOneStyleImg;
    var ListDivOneBox = this.ListDivOneBox;
    var ListDivOneImg = document.createElement("div");
    $(ListDivOneBox).append(ListDivOneImg);
    this.ListDivOneImgBox = $(ListDivOneImg);
    $(ListDivOneImg).width(25).height(25).css(ListDivOneStyleImg);
}
//创建二级下拉按钮
DownList.prototype.SetImgBoxTwo = function(){
    var ListDivOneStyleImg = this.ListDivOneStyleImg;
    var ListDivTwoBox = this.ListDivTwoBox;
    var ListDivTwoImg = document.createElement("div");
    $(ListDivTwoBox).append(ListDivTwoImg);
    this.ListDivTwoImgBox = $(ListDivTwoImg);
    $(ListDivTwoImg).width(25).height(25).css(ListDivOneStyleImg);
}
//下拉框创建结束


//下拉框事件开始
//给最大的input框赋值,点击事件一级下拉框
DownList.prototype.SetParentInputOne = function(){
    var jsonData = this.jsonData;
    var parentInputBox = this.parentInputBox;
    var ListDivOneTextBox = this.ListDivOneTextBox;
    $(ListDivOneTextBox).click(function(){
       var TextInput = $(this).text()
       $(parentInputBox).val(TextInput);
       for(var i = 0; i<jsonData.length;i++){
           if(jsonData[i].Name == TextInput){
               alert(jsonData[i].ID);
           }
       }
    })
}
//给input框赋值,点击事件二级下拉框
DownList.prototype.SetParentInputTwo = function(){
    var jsonData = this.jsonData;
    var parentInputBox = this.parentInputBox;
    var ListDivTwoTextBox = this.ListDivTwoTextBox;
    $(ListDivTwoTextBox).click(function(){
        var TextInput = $(this).text()
        $(parentInputBox).val(TextInput);
        for(var i = 0; i<jsonData.length;i++){
            if(jsonData[i].Name == TextInput){
                alert(jsonData[i].ID);
            }
        }

    })
}
//给input框赋值,点击事件三级下拉框
DownList.prototype.SetParentInputThree = function(){
    var jsonData = this.jsonData;
    var parentInputBox = this.parentInputBox;
    var ListDivThreeTextBox = this.ListDivThreeTextBox;
    $(ListDivThreeTextBox).click(function(){
        var TextInput = $(this).text()
        $(parentInputBox).val(TextInput);
        for(var i = 0; i<jsonData.length;i++){
           if(jsonData[i].Name == TextInput){
               alert(jsonData[i].ID);
           }
       }
    })
}
//鼠标滑过一级下拉框
DownList.prototype.SetHoverInputOne = function(){
    var ListDivOneTextBox = this.ListDivOneTextBox;
    var ListDivStyle = this.ListDivStyle;
    $(ListDivOneTextBox).hover(function(){
        $(this).css({"background-color":"red"}).siblings().css(ListDivStyle);
     },function(){
      $(this).css(ListDivStyle);
    })
}
//鼠标滑过二级下拉框
DownList.prototype.SetHoverInputTwo = function(){
    var ListDivTwoTextBox = this.ListDivTwoTextBox;
    var ListDivStyle = this.ListDivStyle;
    $(ListDivTwoTextBox).hover(function(){
       $(this).css({"background-color":"red"}).siblings().css(ListDivStyle);
    },function(){
       $(this).css(ListDivStyle);
    })
}
//鼠标滑过三级下拉框
DownList.prototype.SetHoverInputThree = function(){
    var ListDivThreeTextBox = this.ListDivThreeTextBox;
    var ListDivStyle = this.ListDivStyle;
    $(ListDivThreeTextBox).hover(function(){
       
         $(this).css({"background-color":"red"}).siblings().css(ListDivStyle);
         $(this).parent().parent().css(ListDivStyle);
    },function(){
        $(this).css(ListDivStyle);
    })
}
//鼠标点击一级下拉框按钮图标，显示子元素
DownList.prototype.SetClickImgOne = function(){
    var ListDivOneImgBox = this.ListDivOneImgBox;
    var ListDivOneStyleImgA = this.ListDivOneStyleImgA;
    var ListDivOneStyleImg = this.ListDivOneStyleImg;
    $(ListDivOneImgBox).click(function(){ 
         var ListDivOneABox = $(this).parent().next();
         $(ListDivOneABox).stop().slideToggle(300);
        // $(ListDivOneABox).css("display") == "none"?$(this).css(ListDivOneStyleImgA):$(this).css(ListDivOneStyleImg);
         $(this).css("background-image")=='url("file:///C:/Users/%C2%B7/Desktop/JQurey/img/right20w.png")'?$(this).css(ListDivOneStyleImgA):$(this).css(ListDivOneStyleImg);
         //alert($(ListDivOneABox).css("display"))
    })
}
//鼠标点击二级下拉框按钮图标，显示子元素
DownList.prototype.SetClickImgTwo = function(){
    var ListDivOneStyleImgA = this.ListDivOneStyleImgA;
    var ListDivOneStyleImg = this.ListDivOneStyleImg;
    var ListDivTwoImgBox = this.ListDivTwoImgBox;
    $(ListDivTwoImgBox).click(function(){ 
       var ListDivOneABox = $(this).parent().next();
       $(ListDivOneABox).stop().slideToggle(300);
       $(this).css("background-image")=='url("file:///C:/Users/%C2%B7/Desktop/JQurey/img/right20w.png")'?$(this).css(ListDivOneStyleImgA):$(this).css(ListDivOneStyleImg);
       //alert( $(this).css("background-image"));
    })
}
//下拉框事件结束


//获取input框的值向后端传递数据
DownList.prototype.ByValue = function(){
    var parentInputBox = this.parentInputBox;
    var parentInputValue = $(parentInputBox).val();
    //alert(parentInputValue);
}