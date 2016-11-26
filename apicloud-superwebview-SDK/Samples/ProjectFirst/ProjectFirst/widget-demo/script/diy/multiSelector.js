function objOpenSelector(){
    var arrayTitle = new Array();
    arrayTitle[0]=document.getElementById("item1").value;
    arrayTitle[1]=document.getElementById("item2").value;
    arrayTitle[2]=document.getElementById("item3").value;
    arrayTitle[3]=document.getElementById("item4").value;
    arrayTitle[4]=document.getElementById("item5").value;
    arrayTitle[5]=document.getElementById("item6").value;
    arrayTitle[6]=document.getElementById("item7").value;

    var obj = api.require('multiSelector');
    obj.open({
        y:document.getElementById("selectorCoordY").value,
        height:document.getElementById("selectorHeight").value,
        cancelImg:document.getElementById("cancelBtnImage").value,
        enterImg:document.getElementById("enterBtnImage").value,
        titleImg:document.getElementById("cancelBtnImage").value,
        bgImg:document.getElementById("selectorBgImage").value,
        fontColor:document.getElementById("selectorColor").value,
        selectedColor:document.getElementById("selectorselColor").value,
        animation:document.getElementById("openWithAnimation").value,
        content:arrayTitle
    },function(ret,err){
        /* 提示选中的数据. */
        var msg = ret.selectAry.toString();

        if("" !== msg){
            msg = "您选择了: " + msg;
        }else{
            msg = "您似乎没有选择任何东西."
        }

        api.toast({
            msg: msg,
            duration: 1000,
            location: "middle"

        });
    });
};
function objShowSelector(){
    var obj = api.require('multiSelector');
    obj.show();
};
function objHiddenSelector(){
    var obj = api.require('multiSelector');
    obj.hidden();
};
function objCloseSelector(){
    var obj = api.require('multiSelector');
    obj.close();
};