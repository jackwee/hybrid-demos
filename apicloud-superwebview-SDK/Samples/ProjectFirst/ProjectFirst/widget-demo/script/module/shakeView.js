/*模块简介:
 shakeView封装了一个可供开发者自定义的摇一摇界面，
 包括动画方向，震动，声音等摇一摇时特定的效果,
 使用此模块有效的解决了前端实现摇一摇动画不流畅问题
 */
/*示例简介:
 打开 摇一摇 视图;
 摇动手机,可以触发视图的 摇一摇 方法;
 视图摇动结束后, 会有个简单的 toast 提示;
 */
var shakeView = api.require('shakeView');

shakeView.open({
    type: "up_down",
    x: 0,
    y: 0,
    w: api.frameWidth,
    h: api.frameHeight,
    img: {
        leftUp: "widget://image/shakeView/up.png",
        rightDown: "widget://image/shakeView/down.png",
        bg: "widget://image/shakeView/bg.png"
    },
    anim:{
        time: 3.0,
        sound: "widget://image/shakeView/sound.wav",
        isShake: true,
        percent: 60
    },
    fixedOn: api.frameName
});

api.addEventListener({
    name: "shake"
}, function(ret, err){
    shakeView.shake({
        anim:{
            time: 3.0,
            sound: "widget://image/shakeView/sound.wav",
            isShake: true,
            percent: 20
        }
    },function(){
        api.toast({
            msg: "没有找到合适的人!",
            duration: 1000,
            location: "top"
        });
    });
});