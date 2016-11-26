/* 模块简介:
 panorama封装了用openGL实现的一个全景展示的库,
 开发者只需传入一张全景的图片，
 即可实现拖动查看全景图的功能;
 */

/* 示例简介:
 打开一张全景图片;
 可以自由滑动全景图片查看;
 */
api.alert({
    title: "提示",
    msg: "全景图可自由拖动哦!"
});

var panorama = api.require('panorama');

panorama.open({
    "x": 0,
    "y": 0,
    "width": api.frameWidth,
    "height": api.frameHeight,
    "imgPath": "widget://image/panorama/360viewtest.jpg",
    fixedOn: api.frameName
},function(ret,err){
    var msg = "全景图已打开,请鉴赏!";

    if( ! ret.status){ /* 出错了 */
        msg = err.msg;
    }

    api.toast({
        msg: msg,
        duration: 1000,
        location: "top"
    });
});