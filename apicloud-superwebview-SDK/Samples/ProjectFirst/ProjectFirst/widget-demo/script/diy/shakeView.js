function openShake()
{
    var obj = api.require('shakeView');
    obj.open({
        type:document.getElementById("animationTypes").value,
        x:document.getElementById("viewX").value,
        y:document.getElementById("viewY").value,
        w:document.getElementById("viewW").value,
        h:document.getElementById("viewH").value,
        anim:{
            time:document.getElementById("animationTime").value,
            sound:document.getElementById("animationSound").value,
            isShake:document.getElementById("animationShake").value,
            percent:document.getElementById("animationShakePercent").value
        },
        img:{
            leftUp:document.getElementById("shakeUp").value,
            rightDown:document.getElementById("shakeDown").value,
            bg:document.getElementById("shakeBgImg").value,
            shake:document.getElementById("shakeShake").value
        }
    });
};
function shakeShakeMe()
{
    var obj = api.require('shakeView');
    obj.shake({
        anim:{
            time:document.getElementById("animationTime").value,
            sound:document.getElementById("animationSound").value,
            isShake:document.getElementById("animationShake").value,
            percent:document.getElementById("animationShakePercent").value
        }
    },function(ret,err){
        api.alert({msg:"摇动结束"});
    });
}
function showShake()
{
    var obj = api.require('shakeView');
    obj.show();
};
function hideShake()
{
    var obj = api.require('shakeView');
    obj.hide();
};
function closeShake()
{
    var obj = api.require('shakeView');
    obj.close();
};