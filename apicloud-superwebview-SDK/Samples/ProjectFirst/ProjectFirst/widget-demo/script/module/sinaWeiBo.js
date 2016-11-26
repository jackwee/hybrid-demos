/*模块简介:
 sinaWeiBo封装了新浪微博开放平台的sdk，
 使用此模块可实现新浪登陆、
 分享消息到新浪微博账号等功能;
 大大缩短了新浪微博集成到app的流程.
 */

/*示例简介:
 登陆新浪微博;
 登陆成功后,分享内容到新浪微博;
 */

/* 登陆. */
var sinaWeiBo = api.require('sinaWeiBo');

sinaWeiBo.auth({
    redirectUrl: 'http://www.apicloud.com'
},function(ret,err){
    if( ! ret.status){
        api.toast({
            msg: "登陆失败!",
            duration: 1000,
            location: "top"
        });

        return;
    }

    /* 分享. */
    sinaWeiBo.sendRequest({
        contentType: 'text',
        text: '这是测试用的文本',
        imageUrl: 'fs://a.png'
    },function(ret,err){
        if( ! ret.status){
            api.toast({
                msg: "分享失败!",
                duration: 1000,
                location: "top"
            });

            return;
        }

        api.toast({
            msg: "内容已分享至新浪微博",
            duration: 1000,
            location: "top"
        });
    });
});