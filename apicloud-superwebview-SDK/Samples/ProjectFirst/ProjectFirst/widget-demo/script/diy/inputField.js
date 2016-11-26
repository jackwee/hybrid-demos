function openInputView()
{
    var obj = api.require('inputField');
    obj.open({
        bgColor:document.getElementById("menutypes").value,
        lineColor:document.getElementById("viewx").value,
        fileBgColor:document.getElementById("viewy").value,
        borderColor:document.getElementById("centerimgpath").value,
        sendImg:document.getElementById("centerimgpathlight").value,
        sendImgHighlight:document.getElementById("centerimgpathheight").value
    },function(ret,err)
    {
        api.alert({
            title: '输入的内容是',
            msg: ret.msg,
            buttons: ['确定']
        });

        document.getElementById("sendMessage").value = ret.msg;
    });
};

function closeInputView()
{
    var obj = api.require('inputField');
    obj.close();
};
function becomeInputView()
{
    var obj = api.require('inputField');
    obj.becomeFirstResponder();
};
function resignInputView()
{
    var obj = api.require('inputField');
    obj.resignFirstResponder();
};
function showInputView()
{
    var obj = api.require('inputField');
    obj.show();
};
function hideInputView()
{
    var obj = api.require('inputField');
    obj.hide();
};