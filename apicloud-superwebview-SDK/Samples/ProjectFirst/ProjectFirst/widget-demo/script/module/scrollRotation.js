/*模块简介:
 scrollRotation是一个图片旋转联播器，
 实现了类似扑克牌效果的图片转动联播。
 开发者可自定义图片的数量，
 点击中间图片时会有回调，
 让开发者自定义点击跳转连接
 */

/*示例简介:
 打开一个 图片菜单;
 用户点击图片会有对应提示;
 用户转动菜单,停止后会提示当前正上方的图片;
 */
var scrollRotation = api.require('scrollRotation');

var imgsData = [
    {
        url : "img0.png",
        title: "第三方服务聚合平台"
    },
    {
        url : "img1.png",
        title: "积木式拼装"
    },
    {
        url : "img2.png",
        title: "快速开发跨平台App"
    },
    {
        url : "img3.png",
        title: "一人一周一App"
    },
    {
        url : "img4.png",
        title: "一人一周一App2"
    },
    {
        url : "img5.png",
        title: "重新定义移动应用开发"
    },
    {
        url : "img6.png",
        title: "APICloud美国正式发布"
    },
    {
        url : "img7.png",
        title: "App内快速完成服务集成"
    },
    {
        url : "img8.png",
        title: "App全包加密！保护版权！保护源代码！"
    },
    {
        url : "img9.png",
        title: "JS＋H5开发跨平台App"
    }
];

var paths = [];

for(var idx in imgsData){
    var imgData  = imgsData[idx];
    var path = "widget://image/coverFlow/" + imgData.url;
    paths.push(path);
}

var items = [
    {
        "imgPath": "widget://image/coverFlow/img0.png",
        "title": "聚合平台"
    },
    {
        "imgPath": "widget://image/coverFlow/img1.png",
        "title": "积木拼装"
    },
    {
        "imgPath": "widget://image/coverFlow/img2.png",
        "title": "快速开发"
    },
    {
        "imgPath": "widget://image/coverFlow/img3.png",
        "title": "一人一周"
    },
    {
        "imgPath": "widget://image/coverFlow/img4.png",
        "title": "一周双应用"
    },
    {
        "imgPath": "widget://image/coverFlow/img5.png",
        "title": "重新定义移动应用开发"
    },
    {
        "imgPath": "widget://image/coverFlow/img6.png",
        "title": "美国正式发布"
    },
    {
        "imgPath": "widget://image/coverFlow/img7.png",
        "title": "快速集成服务"
    },
    {
        "imgPath": "widget://image/coverFlow/img8.png",
        "title": "全包加密"
    },
    {
        "imgPath": "widget://image/coverFlow/img9.png",
        "title": "跨平台开发"
    }
];

scrollRotation.open({
    "x": 0,
    "y": 0,
    "w": api.frameWidth,
    "h": api.frameHeight,
    "pageControl": {
        "heightPercent": "50.0",
        "selectedColor": "#FFFFFF",
        "normalColor": "#A9A9A9"
    },
    "items": items,
    fixedOn: api.frameName
},function(ret,err){
    var msg;

    if(ret.click){
        msg = "您选择了 " + items[ret.index]["title"];
    }else{
        msg = "菜单停止在 " + items[ret.index]["title"];
    }

    api.toast({
        msg: msg,
        duration: 1000,
        location: "top"
    });
});