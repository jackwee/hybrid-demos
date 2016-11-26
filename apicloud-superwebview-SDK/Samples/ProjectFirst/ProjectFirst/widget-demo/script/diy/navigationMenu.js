function objOpenMenu(){
    var obj = api.require('navigationMenu');
    var obj = api.require('navigationMenu');
    var arrayPath = new Array();
    for (var i = 0; i < 5; i++) {
        arrayPath[i] = {
            normal:document.getElementById("normalBgImg").value,
            highlight:document.getElementById("highlightImg").value,
            selected:document.getElementById("selectedImg").value,
            title:document.getElementById("btnTitle").value
        };
    }

    obj.open({
        color:document.getElementById("titleColor").value,
        highlight:document.getElementById("titlehighlightColor").value,
        btnInfo:arrayPath
    },function(ret,err){F
        api.alert({msg:'点击了第几'+ret.index+'个按钮'});
    });
};
function objShowMenu(){
    var obj = api.require('navigationMenu');
    obj.show();
};
function objHiddenMenu(){
    var obj = api.require('navigationMenu');
    obj.hidden();
};
function objCloseMenu(){
    var obj = api.require('navigationMenu');
    obj.close();
};