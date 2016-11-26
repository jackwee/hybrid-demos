/* 模块简介:
 bubbleMenu是一个原生实现的气泡按钮菜单;
 开发者可自定义气泡弹出位置大小以及按钮的各种样式和个数;
*/

/* 示例简介:
 触摸屏幕, 获取手指触摸位置;
 可以在触摸位置显示一个气泡菜单;
 */

api.toast({
    msg: "请轻击屏幕任意位置!",
    duration: 2000,
    location: "middle"
});

window.addEventListener("touchstart", showBubbleMenu);

function showBubbleMenu(event){
    var touch = event.touches[0];

    var centerX = touch.clientX;
    var centerY = touch.clientY;

    var bubbleMenu = api.require("bubbleMenu");

    var btnArray = [
        {
            "title": "复制"
        },
        {
            "title": "转发"
        },
        {
            "title": "收藏"
        },
        {
            "title": "删除"
        }
    ];

    bubbleMenu.open({
        "centerX": centerX,
        "centerY": centerY,
        "btnArray": btnArray,
        fixedOn: api.frameName
    },function(ret,err){
        var btn = btnArray[ret.index - 1];

        api.toast({
            msg: "您点击了" + btn.title + " 按钮",
            duration: 1000,
            location: "top"
        });
    });
}