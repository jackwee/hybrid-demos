/*模块简介:
 touchID封装了iphone5s以后版本的手机特有的指纹识别功能，
 调用此模块可实现用户指纹输入验证登陆app.
 使用本模块需要支持指纹识别的手机和ios8.0以上的操作系统
*/

/*示例简介:
打开 touchID 模块,
非iPhone手机 或 系统版本低于 iOS 8的手机,
会直接toast提示;
*/
if("ios" !== api.systemType || parseInt(api.systemVersion) < 8){
    api.toast({
        msg: "使用本模块需要支持指纹识别的手机和ios8.0以上的操作系统",
        duration: 2000,
        location: "top"
    });
}

if("ios" === api.systemType){
    var touchID = api.require("touchID");
    touchID.verify({
        title:"APICloud"
    },function(ret,err){

        var msg;

        if(ret.status){
            msg = "";
            api.alert({msg:"验证通过"});
        }else{
            msg = "验证失败，未知错误";

            if(0 == ret.index){
                msg = "用户选择手动输入";
            }
            if(1 == ret.index){
                msg = "用户取消验证";
            }

            if(2 == ret.index){
                msg = "验证三次失败";
            }

            if(3 == ret.index){
                msg = "多长验证失败请锁定手机";
            }
        }

        api.toast({
            msg: msg,
            duration: 2000,
            location: "top"
        });
    });
}