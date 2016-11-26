function checkTouchID()
{
    if("ios" !== api.systemType || parseInt(api.systemVersion) < 8){
        api.toast({
            msg: "使用本模块需要支持指纹识别的手机和ios8.0以上的操作系统",
            duration: 2000,
            location: "top"
        });
    }

    var title = document.getElementById("checkTitle").value;
    var obj = api.require('touchID');
    obj.verify({
        title:title
    },function(ret,err){
        if(ret.status){
            api.alert({msg:"验证通过"});
        }else{
            if(ret.index==0){
                api.alert({msg:"用户选择手动输入"});
            }else if(ret.index==1){
                api.alert({msg:"用户取消验证"});
            }else if(ret.index==2){
                api.alert({msg:"验证三次失败"});
            }else if(ret.index==3){
                api.alert({msg:"多长验证失败请锁定手机"});
            }else {
                api.alert({msg:"验证失败，未知错误"});
            }
        }
    });
};