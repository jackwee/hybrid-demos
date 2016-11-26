/* 模块简介:
 coverFlow底层封装了openGL实现的3D图片流效果和逼真的倒影。
 开发者可自定义图片及其数量。
 只需一个open接口就能打开一个超炫酷的coverFlow效果导航菜单
*/

/* 示例简介:
 打开 coverFlow 模块;
 模块与所在子窗口同宽同高;
 模块中显示的是多个的图片;
 点击不同的图片会 toast 显示对应的简介;
 如果有网络,会语音朗读此模块的简介;
 语音朗读结束前,再次点击图片,会立即终止上一次的语音朗读;
*/

var coverFlow = api.require('coverFlow');

var imgsData = [
    {
        url : "img0.png",
        brief: "第三方服务聚合平台"
    },
    {
        url : "img1.png",
        brief: "积木式拼装"
    },
    {
        url : "img2.png",
        brief: "快速开发跨平台App"
    },
    {
        url : "img3.png",
        brief: "一人一周一App"
    },
    {
        url : "img4.png",
        brief: "一人一周一App2"
    },
    {
        url : "img5.png",
        brief: "重新定义移动应用开发"
    }
];

var paths = [];

for(var idx in imgsData){
    var imgData  = imgsData[idx];
    var path = "widget://image/coverFlow/" + imgData.url;
    paths.push(path);
}

coverFlow.open({
    "x": 0,
    "y": 0,
    "width": api.frameWidth,
    "height": api.frameHeight,
    "backGroundColor": "#333333",
    "paths": paths,
    fixedOn: api.frameName
} , function(ret, err) {
    var imgData = imgsData[ret.index];

    var duration = 2000;

    /* 如果有网络,将同时尝试语音朗读此模块的简介. */
    if("none" !== api.connectionType){
        var speechRecognizer = api.require('speechRecognizer');

        /* 一个简单的策略使文本识别可以在播放中转到另一个文本. */
        speechRecognizer.stopRead();

        setTimeout(function(){
            speechRecognizer.read({
                readStr: imgData.brief
            });
        }, 500);

        duration = 4200;
    }



    /* toast 提示图片简介. */
    api.toast({
        msg: imgData.brief,
        duration: duration,
        location: "top"
    });
});