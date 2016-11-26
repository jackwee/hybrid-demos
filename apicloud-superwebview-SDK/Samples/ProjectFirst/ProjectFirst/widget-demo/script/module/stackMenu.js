/* 模块简介:
 stackMenu是一个栈菜单，
 高度模仿mac系统下的dock管理器,
 同时允许开发者自定义按钮样式和个数，
 让开发者轻松实现复杂的ui效果
 */

/*示例简介:
 出现某种的风格栈菜单;
 */

var stackMenu = api.require('stackMenu');

stackMenu.close();

var directions = ["right_up", "right_down", "left_up", "left_down"];

var direction = "right_down";

var items = [
    {
        "title": "分享",
        "icon": "widget://image/stackMenu/01.png"
    },
    {
        "title": "搜索",
        "icon": "widget://image/stackMenu/02.png"
    },
    {
        "title": "信息",
        "icon": "widget://image/stackMenu/03.png"
    },
    {
        "title": "设置",
        "icon": "widget://image/stackMenu/04.png"
    },
    {
        "title": "社交",
        "icon": "widget://image/stackMenu/05.png"
    }
];

var startY = api.frameHeight / 3.0;

if("right_up" == direction || "left_up" == direction){
    startY = api.frameHeight;
}

stackMenu.open({
    startX: api.frameWidth / 2.0,
    startY: startY,
    direction: direction,
    "items": items,
    titleColor: "#000000"
},function(ret,err){
    api.toast({
        msg: "您点击了 " + items[ret.index]["title"] + " 按钮",
        duration: 1000,
        location: "top"
    });

});