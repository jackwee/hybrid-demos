function objTimeSelector(){
    var obj = api.require('periodSelector');
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
        document.getElementById("sql2").value = ret.sHour+'*'+ret.sMinit+'-'+ret.eHour+'*'+ret.eMinit;
    });
};

function setTimeSelector(){
    var obj = api.require('periodSelector');
    obj.set({
        lHour:document.getElementById("setlwithHour").value,
        lMinit:document.getElementById("setlwithMinit").value,
        rHour:document.getElementById("setrwithHour").value,
        rMinit:document.getElementById("setrwithMinit").value
    });
};
function closeTimeSelector(){
    var obj = api.require('periodSelector');
    obj.close();
};
function showTimeSelector(){
    var obj = api.require('periodSelector');
    obj.show();
};
function hideTimeSelector(){
    var obj = api.require('periodSelector');
    obj.hide();
};