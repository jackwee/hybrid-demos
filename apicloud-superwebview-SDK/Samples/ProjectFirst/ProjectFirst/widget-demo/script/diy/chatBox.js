function openInputView()
{
    var addButtonAry = new Array();
    for (var i = 0; i < 3; i++) {
        addButtonAry[i]={
            normal:document.getElementById("cameral1").value,
            highlight:document.getElementById("cameral2").value,
            title:document.getElementById("cameral1title").value,
            titleSize:document.getElementById("titleSizes").value,
            titleColor:document.getElementById("titleColors").value
        };
    }
    var obj = api.require('chatBox');
    obj.open({
        bgColor:document.getElementById("menutypes").value,
        lineColor:document.getElementById("viewx").value,
        fileBgColor:document.getElementById("viewy").value,
        borderColor:document.getElementById("centerimgpath").value,
        switchButton:{
            faceNormal:document.getElementById("face1").value,
            faceHighlight:document.getElementById("face2").value,
            addNormal:document.getElementById("add1").value,
            addHighlight:document.getElementById("add2").value,
            keyboardNormal:document.getElementById("key1").value,
            keyboardHighlight:document.getElementById("key2").value
        },
        sourcePath:document.getElementById("emojiPath").value,
        addButtons:addButtonAry,
        pageControl:{
            normalColor:document.getElementById("pgColor").value,
            highlightColor:document.getElementById("pgColorSel").value
        }
    },function(ret,err)
    {
        if(ret.click){
            api.alert({msg:"用户点击了第"+ret.index+"个按钮"});
        }else{
            api.alert({
                title: '输入的内容是',
                msg: ret.msg,
                buttons: ['确定']
            });
            document.getElementById("sendMessage").value = ret.msg;
        }
    });
};
function closeInputView()
{
    var obj = api.require('chatBox');
    obj.close();
};
function showInputView()
{
    var obj = api.require('chatBox');
    obj.show();
};
function hideInputView()
{
    var obj = api.require('chatBox');
    obj.hide();
};
function becomeInputView()
{
    var obj = api.require('chatBox');
    obj.becomeFirstResponder();
};
function resignInputView()
{
    var obj = api.require('chatBox');
    obj.resignFirstResponder();
};