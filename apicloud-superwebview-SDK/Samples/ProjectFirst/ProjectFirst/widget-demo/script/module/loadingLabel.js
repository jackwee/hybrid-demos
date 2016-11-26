/*模块简介:
 loadingLabel是一个加载标签;
 可进行开启, 暂停,关闭等操作;
 开发者可自定义其色值和位置
*/

/* 示例简介:
 显示加载标签;
 3秒后,如果有网,则打开www.apicloud.com]
 ;如果没有网,则提示 网速不给力.
 */
var loadingLabel = api.require('loadingLabel');
loadingLabel.open({
    "centerX":api.frameWidth / 2.0,
    "centerY": api.frameHeight / 2.0
});

setTimeout(function(){
    if("none" == api.connectionType){
        api.toast({
            msg: "网速不给力",
            duration: 2000,
            location: "middle"
        });

        loadingLabel.stop();
        return;
    }

    var y = 44;

    if("ios" == api.systemType && parseInt(api.systemVersion) >= 7){
        y = 64;
    }

    api.openFrame({
        name: 'APICloudZone',
        url: 'http://www.apicloud.com/',
        rect:{
            x:0,
            y:y,
            w:api.frameWidth,
            h:api.frameHeight
        },
        opaque: true,
        bgColor: 'rgba(0,0,0,0)',
        bounces: false,
        showProgress: true
    });

    loadingLabel.close();
}, 3000);