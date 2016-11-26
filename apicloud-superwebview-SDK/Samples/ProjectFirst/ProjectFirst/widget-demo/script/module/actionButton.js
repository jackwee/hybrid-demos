/*模块简介:
 actionButton 是一个仿照新浪微博快捷菜单而定制的一个模块，
 使用该模块可弹出一个由多个按钮组成的菜单，点击按钮，菜单消失。
 此模块最大的特点是弹出和消失都有相应的动画，
 开发者可自定义按钮的样式和个数（超过单屏显示的可以左右拖动）。
 效果炫酷，调用方便快捷
 */

/*示例简介:
 打开一个多屏按钮菜单;
 使用数组将标题图片等关联起来;
 点击按钮,toast提示对应内容;
 */
var actionButton = api.require('actionButton');

var items = [
    {
        "title": "图标1",
        "image": "widget://image/common/center/0.png",
        "bgColor": "#3F9FEA"
    },
    {
        "title": "图标2",
        "image": "widget://image/common/center/1.png",
        "bgColor": "#3F9FEA"
    },
    {
        "title": "图标3",
        "image": "widget://image/common/center/2.png",
        "bgColor": "#3F9FEA"
    },
    {
        "title": "图标4",
        "image": "widget://image/common/center/3.png",
        "bgColor": "#3F9FEA"
    },
    {
        "title": "图标5",
        "image": "widget://image/common/center/4.png",
        "bgColor": "#3F9FEA"
    },
    {
        "title": "图标6",
        "image": "widget://image/common/center/5.png",
        "bgColor": "#3F9FEA"
    },
    {
        "title": "图标7",
        "image": "widget://image/common/center/6.png",
        "bgColor": "#3F9FEA"
    },
    {
        "title": "图标8",
        "image": "widget://image/common/center/7.png",
        "bgColor": "#3F9FEA"
    }
];

actionButton.open({
    "items": items,
    "pageControl": {
        "activeColor": "#000000",
        "inactiveColor": "#999999"
    }
},function(ret,err){
    var item = items[ret.index];

    api.toast({
        msg: "您点击了 " + item.title + " 按钮",
        duration: 2000,
        location: "top"
    });
});