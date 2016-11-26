function globoid()
{
    var obj = api.require('panorama');
    obj.open({
        type:0,
        x:document.getElementById("viewX").value,
        y:document.getElementById("viewY").value,
        width:document.getElementById("viewW").value,
        height:document.getElementById("viewH").value,
        imgPath:document.getElementById("selectedDate").value
    },function(ret,err){
        if(ret.status){
            document.getElementById("closeid").value=ret.id;
        }
        else{
            api.alert({msg:ret.msg});
        }
    });
};
function cubic()
{
    var name1=document.getElementById("selectedDate1").value;
    var name2=document.getElementById("selectedDate2").value;
    var name3=document.getElementById("selectedDate3").value;
    var name4=document.getElementById("selectedDate4").value;
    var name5=document.getElementById("selectedDate5").value;
    var name6=document.getElementById("selectedDate6").value;
    var namepaths = [];
    if(name1) {namepaths.push(name1)}
    if(name2) {namepaths.push(name2)}
    if(name3) {namepaths.push(name3)}
    if(name4) {namepaths.push(name4)}
    if(name5) {namepaths.push(name5)}
    if(name6) {namepaths.push(name6)}
    var obj = api.require('panorama');
    obj.open({
        type:1,
        x:document.getElementById("viewX").value,
        y:document.getElementById("viewY").value,
        width:document.getElementById("viewW").value,
        height:document.getElementById("viewH").value,
        imgPaths:namepaths
    },function(ret,err){
        if(ret.status){
            document.getElementById("closeid").value=ret.id;
        }else{
            api.alert({msg:ret.msg});
        }
    });
};
function logOutapp()
{
    var obj = api.require('panorama');
    obj.close({id:document.getElementById("closeid").value});
};

function showapp()
{
    var obj = api.require('panorama');
    obj.show({id:document.getElementById("closeid").value});
};

function hideapp()
{
    var obj = api.require('panorama');
    obj.hide({id:document.getElementById("closeid").value});
};