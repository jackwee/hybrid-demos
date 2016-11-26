/* 模块简介:
 qq封装了qq开放平台的SDK，
 实现了qq登陆，
 空间分享等大部分功能，
 大大简化了把qq集成到app的流程
 */

/*示例简介:
 登陆QQ;
 分享内容到 QQ;
 */

/* 登陆. */
var qq = api.require("qq");

qq.login(function(ret,err){
    if( ! ret.status){
        api.toast({
            msg: err.msg,
            duration: 1000,
            location: "top"
        });

        return;
    }

    /* 分享文本. */
    qq.shareText({
        text: "APICloud 重新定义移动开发!"
    });

});