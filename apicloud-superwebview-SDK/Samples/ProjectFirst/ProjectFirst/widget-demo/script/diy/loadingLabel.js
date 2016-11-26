function objOpen(){
    var obj = api.require('loadingLabel');
    obj.open({
        bgColor:document.getElementById("buttonBgcolor").value,
        lightColor:document.getElementById("buttonlightcolor").value,
        centerX:document.getElementById("menux").value,
        centerY:document.getElementById("menuy").value
    });
};
function objStart(){
    var obj = api.require('loadingLabel');
    obj.start({});
};
function objStop(){
    var obj = api.require('loadingLabel');
    obj.stop({});
};
function objClose(){
    var obj = api.require('loadingLabel');
    obj.close({
    });
};