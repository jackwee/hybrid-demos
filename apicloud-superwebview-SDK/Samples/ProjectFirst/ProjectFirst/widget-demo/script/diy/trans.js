var base64Str;

function startUnarchive()
{
    var obj = api.require('trans');

    obj.parse({
        data:document.getElementById("xmlStr").value,
        path:document.getElementById("xmlPath").value,
        customKey:document.getElementById("customKeys").value
    }, function(ret, err){
        if(ret) {
            api.alert({"title": "解析结果", msg: JSON.stringify(ret)});
        } else{
            api.alert({msg:err.msg});
        }
    });
};
function imgToStr()
{
    var obj = api.require('trans');

    obj.decodeImgToBase64({
        imgPath:document.getElementById("changeImgPath").value
    }, function(ret, err){
        if(ret.status) {
            base64Str = ret.base64Str;
            alert(base64Str);
        } else{
            api.alert({msg:err.msg});
        }
    });
};
function strToImg()
{
    var obj = api.require('trans');

    obj.saveImage({
        base64Str:base64Str,
        album:document.getElementById("saveAlbum").value,
        imgPath:document.getElementById("saveImgPath").value,
        imgName:document.getElementById("imageName").value
    }, function(ret, err){
        if(ret.status) {
            api.alert({msg:"保存成功！"});
        } else{
            api.alert({msg:err.msg});
        }
    });
};