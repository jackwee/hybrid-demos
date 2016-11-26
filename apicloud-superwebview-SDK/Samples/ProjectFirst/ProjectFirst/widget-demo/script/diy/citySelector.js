function objOpenSelector(){

    var citySelector = api.require('citySelector');
    citySelector.open({
        y:document.getElementById("selectorCoordY").value,
        height:document.getElementById("selectorHeight").value,
        cancelImg:document.getElementById("buttonCancelImg").value,
        enterImg:document.getElementById("buttonEnterImg").value,
        titleImg:document.getElementById("titleNavigationImg").value,
        bgImg:document.getElementById("selectorBgImage").value,
        fontColor:document.getElementById("selectorColor").value,
        selectedColor:document.getElementById("selectorselColor").value,
        animation:document.getElementById("selectorAnimation").value
    },function(ret,err){
        api.alert({msg:'选择器选取的数据是 ' + ret.county+ " " + ret.province + " " + ret.city});
    });
};
function objShowSelector(){
    var citySelector = api.require('citySelector');
    citySelector.show({
        animation:document.getElementById("selectorAnimation").value
    });
};
function objHiddenSelector(){
    var citySelector = api.require('citySelector');
    citySelector.hidden({
        animation:document.getElementById("selectorAnimation").value
    });
};
function objCloseSelector(){
    var citySelector = api.require('citySelector');
    citySelector.close({
        animation:document.getElementById("selectorAnimation").value
    });
};