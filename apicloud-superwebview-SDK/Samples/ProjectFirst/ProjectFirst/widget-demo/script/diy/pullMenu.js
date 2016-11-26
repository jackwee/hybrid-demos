function objOpenMenu(){
    var obj = api.require('pullMenu');
    var arrayPath = new Array();
    for (var i = 0; i < 15; i++) {
        if(i%2==0){
            arrayPath[i] = {
                normal:document.getElementById("button1Img").value,
                highlight:document.getElementById("button1SelectedImg").value
            };
        }else{
            arrayPath[i] = {
                normal:document.getElementById("button2Img").value,
                highlight:document.getElementById("button2SelectedImg").value
            };
        }
    }
    obj.open({
        type:document.getElementById("buttonType").value,
        btnWidth:document.getElementById("buttonWidth").value,
        alpha:document.getElementById("buttonOpacity").value,
        bgColor:document.getElementById("menuBackGroundColor").value,
        btnArray:arrayPath
    },function(ret,err){
        api.alert({msg:'点击了第几'+ret.index+'个按钮'});
    });
};
function objShowMenu(){
    var obj = api.require('pullMenu');
    obj.show();
};
function objHiddenMenu(){
    var obj = api.require('pullMenu');
    obj.hidden();
};
function objCloseMenu(){
    var obj = api.require('pullMenu');
    obj.close();
};