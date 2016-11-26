function objTimeSelector(){
    var obj = api.require('timeSelector');
    obj.open({
        x: document.getElementById("viewx").value,
        y:document.getElementById("viewy").value,
        w:document.getElementById("vieww").value,
        h:document.getElementById("viewh").value,
        selectedColor:document.getElementById("selectedColors").value,
        normalColor:document.getElementById("normalColors").value,
        titleColor:document.getElementById("titleColors").value,
        separateColor:document.getElementById("separationColors").value,
        bgColor:document.getElementById("bgColors").value
    }, function(ret, err){
        document.getElementById("sql2").value = ret.hour+'*'+ret.minit;
    });
};
function setTimeSelector(){
    var obj = api.require('timeSelector');
    obj.set({
        hour:document.getElementById("setwithHour").value,
        minit:document.getElementById("setwithMinit").value
    });
};
function closeTimeSelector(){
    var obj = api.require('timeSelector');
    obj.close();
};
function showTimeSelector(){
    var obj = api.require('timeSelector');
    obj.show();
};
function hideTimeSelector(){
    var obj = api.require('timeSelector');
    obj.hide();
};