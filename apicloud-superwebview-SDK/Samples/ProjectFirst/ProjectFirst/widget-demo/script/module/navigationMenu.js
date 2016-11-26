/*模块简介:
 navigationMenu是一个导航栏菜单，
 可以实现在导航栏上弹出一个菜单，
 然后子菜单左右铺展开来的动画效果，
 开发者可自定义其中的样式和按钮个数，
 超出屏幕部分可左右拖动查看.
 */

/*示例简介:
 打开一个顶部导航菜单;
 选中菜单,会有对应提示;
 */

var navigationMenu = api.require('navigationMenu');

var btnInfo = [
    {
        "normal": "widget://image/navigationMenu/normal.png",
        "highlight": "widget://image/navigationMenu/highlight.png",
        "selected": "widget://image/navigationMenu/selected.png",
        "title": "界面"
    },
    {
        "normal": "widget://image/navigationMenu/normal.png",
        "highlight": "widget://image/navigationMenu/highlight.png",
        "selected": "widget://image/navigationMenu/selected.png",
        "title": "导航"
    },
    {
        "normal": "widget://image/navigationMenu/normal.png",
        "highlight": "widget://image/navigationMenu/highlight.png",
        "selected": "widget://image/navigationMenu/selected.png",
        "title": "功能"
    },
    {
        "normal": "widget://image/navigationMenu/normal.png",
        "highlight": "widget://image/navigationMenu/highlight.png",
        "selected": "widget://image/navigationMenu/selected.png",
        "title": "设备"
    },
    {
        "normal": "widget://image/navigationMenu/normal.png",
        "highlight": "widget://image/navigationMenu/highlight.png",
        "selected": "widget://image/navigationMenu/selected.png",
        "title": "API对象"
    }
];

navigationMenu.open({
    "btnInfo": btnInfo
},function(ret,err){
    api.toast({
        msg: "您选择了 " + btnInfo[ret.index]["title"],
        duration: 1000,
        location: "top"
    });
});