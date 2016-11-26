function objOpen(){
    var itemsArray = new Array();
    for(var i=0; i<5;i++){
        itemsArray[i] = {
            imgPath:document.getElementById("item1Img").value,
            title:document.getElementById("explan").value,
            fontSize:document.getElementById("fontSIze").value,
            fontColor:document.getElementById("fontColor").value
        };
    }

    var scrollRotation = api.require('scrollRotation');
    scrollRotation.open({
        x:document.getElementById("menux").value,
        y:document.getElementById("menuy").value,
        w:document.getElementById("menuw").value,
        h:document.getElementById("menuh").value,
        pageControl:{
            heightPercent:document.getElementById("pgPosition").value,
            normalColor:document.getElementById("pgNormal").value,
            selectedColor:document.getElementById("pgHighlight").value
        },
        intervalTime:document.getElementById("scrollTime").value,
        cornerRadius:document.getElementById("cornerSize").value,
        items:itemsArray
    },function(ret,err){
        if(ret.click){
            api.alert({msg:ret.index});
            api.openWin({name:"baidu",url:"www.baidu.com"});
        }
        document.getElementById("clickIndexs").value= ret.index;
    });
};
function objShow(){
    var scrollRotation = api.require('scrollRotation');
    scrollRotation.show();
};
function objHide(){
    var scrollRotation = api.require('scrollRotation');
    scrollRotation.hide();
};
function objClose(){
    var scrollRotation = api.require('scrollRotation');
    scrollRotation.close();
};