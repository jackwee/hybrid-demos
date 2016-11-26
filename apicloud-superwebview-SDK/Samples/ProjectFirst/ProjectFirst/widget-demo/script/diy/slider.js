var isLock = true;
function openslider()
{
    document.getElementById("backvalue").value = document.getElementById("defaultvalue").value;

    var obj = api.require('slider');
    obj.open({
        multiOpen:true,
        x:document.getElementById("viewx").value,
        y:document.getElementById("viewy").value,
        width:document.getElementById("vieww").value,
        height:document.getElementById("viewh").value,
        bgImg:document.getElementById("bgimageBar").value,
        selectedBgImg:document.getElementById("bgimageBarsele").value,
        barW:document.getElementById("barW").value,
        barH:document.getElementById("barH").value,
        barImg:document.getElementById("barImgpath").value,
        bubbleW:document.getElementById("bubbleW").value,
        bubbleH:document.getElementById("bubbleH").value,
        bubbleImg:document.getElementById("selectbgImage").value,
        minValue:document.getElementById("minvalue").value,
        maxValue:document.getElementById("maxvalue").value,
        defValue:document.getElementById("defaultvalue").value
    },function(ret,err){
        if (ret.touchCancel){
            document.getElementById("backvalue").value = ret.value;
            document.getElementById("mysliderid").value = ret.id;
        }else{
            document.getElementById("backvalue").value = ret.value;
            document.getElementById("mysliderid").value = ret.id;
        }
    });
};

function setslidervalue()
{
    var obj = api.require('slider');
    obj.setValue({
        id:document.getElementById("mysliderid").value,
        value:document.getElementById("newBackvalue").value
    });
};

var isLock = {};

function locklider()
{
    var id = document.getElementById("mysliderid").value;

    if("undefined" == typeof isLock[id]){
        isLock[id] = true;
    }else{
        isLock[id] = ! isLock[id];
    }

    var lock = isLock[id];

    var obj = api.require('slider');
    obj.lock({
        id: id,
        lock:lock
    });
}
function closslider()
{
    var obj = api.require('slider');
    obj.close({
        id:document.getElementById("mysliderid").value
    });
};
function showslider()
{
    var obj = api.require('slider');
    obj.show({
        id:document.getElementById("mysliderid").value
    });
};
function hideslider()
{
    var obj = api.require('slider');
    obj.hide({
        id:document.getElementById("mysliderid").value
    });
};