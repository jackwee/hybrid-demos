/*模块简介:
 weiXin封装了微信开放平台的SDK，
 使用此模块可轻松实现分享消息到微信客户端的功能
*/

/* 示例简介:
 注册微信;
 分享内容到微信;
 */

/* 微信分享. */
api.alert({
    title: "提示",
    msg: "体验微信分享功能前,请确认手机中已经安装微信!"
});

var weiXin = api.require('weiXin');

/* 注册应用. */
weiXin.registerApp(
    function(ret,err){
        if ( ! ret.status) {
            api.toast({
                msg: err.msg,
                duration: 1000,
                location: "top"
            });

            return;
        }

        /* 分享内容 */
        weiXin.sendRequest({
            scene:'timeline',
            contentType:'web_page',
            title:'APICloud',
            description:'APICloud 重新定义移动开发',
            thumbUrl:'widget://image/common/bg.png',
            contentUrl: 'http://www.apicloud.com/'
        },function(ret,err){
            if( ! ret.status){
                api.toast({
                    msg: err.msg,
                    duration: 1000,
                    location: "top"
                });

                return;
            }

            api.toast({
                msg: "分享成功",
                duration: 1000,
                location: "top"
            });
        });

    }
);