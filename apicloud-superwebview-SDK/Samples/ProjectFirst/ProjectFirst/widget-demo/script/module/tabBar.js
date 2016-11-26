/*模块简介:
 tabBar是一个底部导航条模块，
 开发者可自定义其样式，
 当子按钮个数超出屏幕时，
 用户可左右拖动查看
 */

/*示例简介:
 打开一个 底部标签栏;
 点击 标签栏,会有对应提示;
 */
var tabBar = api.require('tabBar');

var items = [
    {
        "img": "widget://image/tabBar/item1.png",
        "title": "导航"
    },
    {
        "img": "widget://image/tabBar/item2.png",
        "title": "收藏"
    },
    {
        "img": "widget://image/tabBar/item3.png",
        "title": "文件"
    },
    {
        "img": "widget://image/tabBar/item4.png",
        "title": "搜索"
    },
    {
        "img": "widget://image/tabBar/item5.png",
        "title": "日程"
    }
];

tabBar.open({
    bgImg: "widget://image/tabBar/bg.png",
    selectImg: "widget://image/tabBar/sel.png",
    items: items
},function(ret,err) {
    var title = items[ret.index]["title"];
    api.toast({
        msg: "您点击了" + title + " 按钮",
        duration: 1000,
        location: "top"
    });

});