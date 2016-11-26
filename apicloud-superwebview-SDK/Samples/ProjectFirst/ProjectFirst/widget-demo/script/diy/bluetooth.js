function connectBluetooth()
{
    var obj = api.require('bluetooth');
    obj.connect(function(ret,err){
        document.getElementById("recevieprogress").value = ret.progress;
        document.getElementById("recevieddatas").value = ret.message;
    });
};

function sendData()
{
    var obj = api.require('bluetooth');
    obj.send({
        type:document.getElementById("datatype").value,
        data:document.getElementById("datas").value
    });
};

function closBluetooth()
{
    var obj = api.require('bluetooth');
    obj.cancel();
};