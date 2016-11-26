function objOpenMenu(){
    var obj = api.require('bubbleMenu');
    var arrayPath = new Array();
    for (var i = 0; i < 3; i++) {
        arrayPath[i]={icon:document.getElementById("button1Img").value,title:document.getElementById("button1title").value,length:document.getElementById("button1length").value};
    }

    obj.open({
        bgColor:document.getElementById("buttonBgcolor").value,
        lightColor:document.getElementById("buttonlightcolor").value,
        borderColor:document.getElementById("buttonboundscolor").value,
        cutLineColor:document.getElementById("buttonintervalcolor").value,
        centerX:document.getElementById("menux").value,
        centerY:document.getElementById("menuy").value,
        btnArray:arrayPath
    },function(ret,err){
        api.alert({msg:'点击了菜单的第'+ret.index+'个按钮'});
    });
};
function objShowMenu(){
    var obj = api.require('bubbleMenu');
    obj.show();
};
function objHiddenMenu(){
    var obj = api.require('bubbleMenu');
    obj.hidden();
};
function objCloseMenu(){
    var obj = api.require('bubbleMenu');
    obj.close();
};