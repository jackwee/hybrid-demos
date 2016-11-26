/* 模块简介:
 scrollPicture是一个图片自动滚动联播器，
 开发者自需传入一组图片地址，
 即可实现图片滚动联播的效果。
 图片地址支持网络路径，
 网络图片会被缓存到本地
 */

/* 示例简介:
 打开一个 图片联播器;
 图片来自APICloudDemo云数据库;
 没有网络时,显示占位图;
 没有网络时,提示 网速不给力;
 可以左右滑动切换图片;
 */
var scrollPicture = api.require('scrollPicture');

scrollPicture.open({
    "x": 0,
    "y": 0,
    "width": api.frameWidth,
    "height": api.frameHeight / 2.0,
    "intervalTime": 60 * 60,
    "paths":[
        "http://abfc6f80482f86f9ccf4.b0.upaiyun.com/apicloud/be9ced29de96129b6a1e2f19c40de85e.png",
        "http://abfc6f80482f86f9ccf4.b0.upaiyun.com/apicloud/3cd8bd01f9f474664ff0b2f41611797e.png",
        "http://abfc6f80482f86f9ccf4.b0.upaiyun.com/apicloud/948bec8a4df2adb27581319d8a8c014e.png",
        "http://abfc6f80482f86f9ccf4.b0.upaiyun.com/apicloud/94a135721ae675fbccd2484f616a98e1.png",
        "http://abfc6f80482f86f9ccf4.b0.upaiyun.com/apicloud/9c212a6c2753103e4deed8aa47bda909.png",
        "http://abfc6f80482f86f9ccf4.b0.upaiyun.com/apicloud/e4dba38175efac7d07adcae8be8d1223.png"
    ],
    "placeHoldImg":"widget://image/common/placeHolder.png",
    "control":{
        position: 0,
        activeColor: "#FFFFFF",
        inactiveColor: "#A9A9A9"
    },
    fixedOn: api.frameName
});

if("none" == api.connectionType){
    api.toast({
        msg: "网速不给力",
        duration: 2000,
        location: "top"
    });
}