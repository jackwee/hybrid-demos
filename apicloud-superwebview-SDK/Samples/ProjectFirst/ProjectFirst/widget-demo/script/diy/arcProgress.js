window.openit = function openit(){
    var arcProgress = api.require('arcProgress');

    var superView = api.frameName;

    arcProgress.open({
        type: document.getElementById("transType").value,
        centerX:document.getElementById("centerx").value,
        centerY:document.getElementById("centery").value,
        radius:document.getElementById("radiuscircel").value,
        bgColor:document.getElementById("bgcolors").value,
        pgColor:document.getElementById("progressColors").value,
        loopWidth:document.getElementById("circleWidth").value
    },function(ret,err){
        document.getElementById("circleid").value = ret.id;
        document.getElementById("setcircleid").value = ret.id;
        document.getElementById("closecircleid").value = ret.id;
    });
};
function setit(){
    var arcProgress = api.require('arcProgress');
    arcProgress.setValue({
        id:document.getElementById("setcircleid").value,
        value:document.getElementById("progressvalue").value
    });
};
function hideit(){
    var arcProgress = api.require('arcProgress');
    arcProgress.hide({id:document.getElementById("closecircleid").value});
};
function showit(){
    var arcProgress = api.require('arcProgress');
    arcProgress.show({id:document.getElementById("closecircleid").value});
};
function closeit(){
    var arcProgress = api.require('arcProgress');
    arcProgress.close({id:document.getElementById("closecircleid").value});
};