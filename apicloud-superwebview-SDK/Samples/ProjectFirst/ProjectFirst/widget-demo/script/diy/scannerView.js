function openScnnerView()
{
    var obj = api.require('scannerView');
    obj.open({
        x:document.getElementById("viewx").value,
        y:document.getElementById("viewy").value,
        width:document.getElementById("vieww").value,
        height:document.getElementById("viewh").value,
        sound:document.getElementById("scannsound").value
    },function(ret,err){
        document.getElementById("scannerresult").value = ret.msg
    });
};
function closeScannerView()
{
    var obj = api.require('scannerView');
    obj.close();
};
