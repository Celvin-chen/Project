function SwitchButton(width,height,position,x,y){
    this.width = width||60;
    this.height = height||35;
    this.position = position||"absolute";
    this.left = x||0;
    this.top = y ||0;
    this.jsonstyle = {"color":"red","background": "pink","border":"1px"}
    this.parentContainer = "body";
    this.div = document.createElement("div");
}
SwitchButton.prototype.adiv = function(){
    var bdiv = this.div;
    var width = this.width;
    var height = this.height;
    var nc = this.parentContainer
    $(nc).append(bdiv);
    $(bdiv).css({"width":width+"px","height":height+"px"}).css(this.jsonstyle);
} 