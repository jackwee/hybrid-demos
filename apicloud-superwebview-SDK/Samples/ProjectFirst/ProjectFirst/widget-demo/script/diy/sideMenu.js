function objOpenMenu(){
    var obj = api.require('sideMenu');

    var arrayPath = new Array();
    for (var i = 0; i < 5; i++) {
        if(i%2==0){
            arrayPath[i] = {
                icon:document.getElementById("button1SelectedImg").value,
                bgImg:document.getElementById("button1Img").value
            };
        }else{
            arrayPath[i] = {
                icon:document.getElementById("button2SelectedImg").value,
                bgImg:document.getElementById("button2Img").value
            };
        }
    }
    obj.open({
        type:document.getElementById("buttonType").value,
        startPosition:document.getElementById("buttonfromHeight").value,
        interval:document.getElementById("buttoninterval").value,
        btnHeight:document.getElementById("buttonHeight").value,
        trajectoryColor:document.getElementById("menuBackGroundColor").value,
        btnArray:arrayPath
    },function(ret,err){
        document.getElementById("sideMenuID").value = ret.id;
        document.getElementById("handlesideMenuID").value = ret.id;
        if(ret.index){
            api.alert({msg:'点击了菜单id为'+ret.id+'的第'+ret.index+'个按钮'});
        }
    });
};
function objShowMenu(){
    var obj = api.require('sideMenu');
    obj.show({
        id:document.getElementById("handlesideMenuID").value
    });
};
function objHiddenMenu(){
    var obj = api.require('sideMenu');
    obj.hidden({
        id:document.getElementById("handlesideMenuID").value
    });
};
function objCloseMenu(){
    var obj = api.require('sideMenu');
    obj.close({
        id:document.getElementById("handlesideMenuID").value
    });
};