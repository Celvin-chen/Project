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
                     {ID:"1",Name:"监理有限公司",parentID:"0"},
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
    //定义二级下拉框属性
    this.ListDivTwoBox = null;
    this.ListDivTwoTextBox = null;
    this.ListDivTwoImgBox = null;
    this.ListDivTwoImgBoxA = null;
}
//创建父容器
DownList.prototype.SetContainerList = function(){
    this.SetContainerDIV();
    this.SetContainerInput();
    this.SetContainerPanel();
    this.SetInputClick();
    this.SetSearchBox();
    this.SetListOne();
    this.SetListHover();
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
    $(ListDiv).width(width).height(height).css(ListDivStyle);
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
    $(SearchBox).width(width).height(height).css(SearchBoxStyle).css({"margin-left":margin+"px"});
}
//循环添加以及下拉
DownList.prototype.SetListOne = function(){
    var ListDivBox = this.ListDivBox;
    var jsonData = this.jsonData;
    var width = this.width-20;
    var ListDivOneStyle = this.ListDivOneStyle;
    var ListDivOneStyleImgA = this.ListDivOneStyleImgA;
    var ListDivOneStyleImg = this.ListDivOneStyleImg;
    var height = 25;
    var ListDivOne = this.ListDivOne;
    var ListDivStyle = this.ListDivStyle;
    $(ListDivBox).append(ListDivOne);
    this.ListBox = $(ListDivOne)
    $(ListDivOne).width(width).height(height).css(ListDivOneStyle);
    var ListDivOne = this.ListDivOne;
    $(ListDivOne).append("全部");
    // for (let j = 0; j<jsonData.length;j++){
    //     for(let i = 0; i<jsonData.length;i++){
    //         if(jsonData[i].parentID == 0){
    //        var ListDivOne = document.createElement("div");
    //        var ListDivOneA = document.createElement("div");
    //        $(ListDivBox).append(ListDivOne);
    //        this.ListDivOneBox = $(ListDivOne);
    //        $(ListDivOne).width(width).height(height).css(ListDivOneStyle);
    //        $(ListDivBox).append(ListDivOneA);
    //        this.ListDivOneABox = $(ListDivOneA);
    //        $(ListDivOneA).width(width).css({"display":"none","height":"auto"});
           
    //        var ListDivOneBox = this.ListDivOneBox;
    //        var ListDivOneText = document.createElement("div");
    //        $(ListDivOneBox).append(ListDivOneText);
    //        this.ListDivOneTextBox = $(ListDivOneText);
    //        $(ListDivOneText).width(width-25).height(height);
    //        var ListDivOneTextBox = this.ListDivOneTextBox;
    //        $(ListDivOneTextBox).append(jsonData[i].Name);
    //        var ListDivOneImg = document.createElement("div");
    //        $(ListDivOneBox).append(ListDivOneImg);
    //        this.ListDivOneImgBox = $(ListDivOneImg);
    //        $(ListDivOneImg).width(25).height(25).css(ListDivOneStyleImg);
    //        //点击一级下拉框
    //        var ListDivOneImgBox = this.ListDivOneImgBox
    //        $(ListDivOneImgBox).click(function(){ 
    //             var ListDivOneABox = $(this).parent().next();
    //             $(ListDivOneABox).stop().slideToggle(300);
    //             $(this).css("background")=='rgb(51, 51, 51) url("file:///E:/JQurey/img/right20w.png") no-repeat scroll 100% 50% / auto padding-box border-box'?$(this).css(ListDivOneStyleImgA):$(this).css(ListDivOneStyleImg);

    //        })
    //         }
            
    //     }

    // }
    //循环添加
    for(let i = 0; i<jsonData.length;i++){
        if(jsonData[i].parentID == "0"){
           var ListDivOne = document.createElement("div");
           var ListDivOneA = document.createElement("div");
           $(ListDivBox).append(ListDivOne);
           this.ListDivOneBox = $(ListDivOne);
           $(ListDivOne).width(width).height(height).css(ListDivOneStyle);
           $(ListDivBox).append(ListDivOneA);
           this.ListDivOneABox = $(ListDivOneA);
           $(ListDivOneA).width(width).css({"display":"none","height":"auto"});
           
           var ListDivOneBox = this.ListDivOneBox;
           var ListDivOneText = document.createElement("div");
           $(ListDivOneBox).append(ListDivOneText);
           this.ListDivOneTextBox = $(ListDivOneText);
           $(ListDivOneText).width(width-25).height(height);
           var ListDivOneTextBox = this.ListDivOneTextBox;
           $(ListDivOneTextBox).append(jsonData[i].Name);
           var ListDivOneImg = document.createElement("div");
           $(ListDivOneBox).append(ListDivOneImg);
           this.ListDivOneImgBox = $(ListDivOneImg);
           $(ListDivOneImg).width(25).height(25).css(ListDivOneStyleImg);
           //点击一级下拉框
           var ListDivOneImgBox = this.ListDivOneImgBox
           $(ListDivOneImgBox).click(function(){ 
                var ListDivOneABox = $(this).parent().next();
                $(ListDivOneABox).stop().slideToggle(300);
                $(this).css("background")=='rgb(51, 51, 51) url("file:///E:/JQurey/img/right20w.png") no-repeat scroll 100% 50% / auto padding-box border-box'?$(this).css(ListDivOneStyleImgA):$(this).css(ListDivOneStyleImg);

           })

        }
        
        if(jsonData[i].parentID == "1"){
            var ListDivTwo = document.createElement("div");
            var ListDivOneABox = this.ListDivOneABox;
            var ListDivTwoA = document.createElement("div");
            $(ListDivOneABox).append(ListDivTwo);
            this.ListDivTwoBox = $(ListDivTwo);
            $(ListDivTwo).width(width).height(height).css(ListDivOneStyle);
            $(ListDivOneABox).append(ListDivTwoA);
            this.ListDivTwoImgBoxA = $(ListDivTwoA);
            $(ListDivTwoA).width(width).height(height).css({"display":"none"});

            var ListDivTwoBox = this.ListDivTwoBox;
            var ListDivTwoText = document.createElement("div");
            $(ListDivTwoBox).append(ListDivTwoText);
            this.ListDivTwoTextBox = $(ListDivTwoText);
            $(ListDivTwoText).width(width-25).height(height);
            var ListDivTwoTextBox = this.ListDivTwoTextBox;
            $(ListDivTwoTextBox).append(jsonData[i].Name).css({"padding-left":"25px","box-sizing":"border-box"});
            var ListDivTwoImg = document.createElement("div");
            $(ListDivTwoBox).append(ListDivTwoImg);
            this.ListDivTwoImgBox = $(ListDivTwoImg);
            $(ListDivTwoImg).width(25).height(25).css(ListDivOneStyleImg);
            //点击二级下拉框
            var ListDivTwoImgBox = this.ListDivTwoImgBox
            $(ListDivTwoImgBox).click(function(){ 
                 var ListDivOneABox = $(this).parent().next();
                 $(ListDivOneABox).stop().slideToggle(300);
                 $(this).css("background")=='rgb(51, 51, 51) url("file:///E:/JQurey/img/right20w.png") no-repeat scroll 100% 50% / auto padding-box border-box'?$(this).css(ListDivOneStyleImgA):$(this).css(ListDivOneStyleImg);
 
            })
            //鼠标滑过二级下拉效果
            var Twohovers = $(ListDivTwoImgBox).parent().siblings();
            $(Twohovers).hover(function(){
                $(ListDivTwoImgBox).parent().parent().css(ListDivStyle);
                $(this).css({"background-color":"red"}).siblings().css(ListDivStyle);
                
            },function(){
                $(this).css(ListDivStyle);
            })
          }
        
    }
}
DownList.prototype.SetListHover = function(){
    var ListDivBox = this.ListDivBox;
    var ListDivStyle = this.ListDivStyle;
    var hovers = $(ListDivBox).children().siblings();
    $(hovers).hover(function(){
        $(this).css({"background-color":"red"}).siblings().css(ListDivStyle);
    },function(){
        $(this).css(ListDivStyle);
    })
}