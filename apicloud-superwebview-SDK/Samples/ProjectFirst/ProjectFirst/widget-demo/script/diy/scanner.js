function openScanner()
{
    var obj = api.require('scanner');
    obj.open({
        save:{
            album:true,
            imgPath:document.getElementById("scannerPath").value,
            imgName:document.getElementById("barImageName").value
        },
        sound:document.getElementById("scannsound").value,
        needBr:true
    },function(ret,err)
    {
        api.alert(
            {
                title: '扫描结果',
                msg: ret.msg,
                buttons: ['确定']
            });
        document.getElementById("scannerresult").value = ret.msg;
    });
};

function openScnnerView()
{
    var obj = api.require('scanner');
    obj.openView({
        save:{
            album:document.getElementById("viewx").value,
            imgPath:document.getElementById("scannerPath").value,
            imgName:document.getElementById("barImageName").value
        },
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
    var obj = api.require('scanner');
    obj.closeView();
};
function scannerImage()
{
    var obj = api.require('scanner');
    obj.decode({
        type:"album",
        sound:document.getElementById("scannsound").value
    },function(ret,err){
        document.getElementById("scannerresult").value = ret.msg
    });

};
function encodeStr()
{
    var obj = api.require('scanner');
    obj.encode({
        save:{
            album:true,
            imgPath:document.getElementById("scannerPath").value,
            imgName:document.getElementById("barImageName").value
        },
        string:document.getElementById("scannerresult").value
    },function(ret,err){
        if(ret.status){
            api.alert({msg:"生成成功"});
        }
    });

};