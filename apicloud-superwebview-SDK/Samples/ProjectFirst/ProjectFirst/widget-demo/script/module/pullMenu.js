/* 模块简介:
 pullMenu是一个可上下拖动的菜单，
 可随手指上下滑动;
 其子菜单按钮都可自定义样式，超过部分可拖动查看;
 性能强，流畅度高.
 */

/*示例简介:
 打开一个下拉菜单;
 点击按钮,有对应提示;
 */
var pullMenu = api.require('pullMenu');

var btnArray = [
    {
        "normal": "widget://image/common/center/0.png",
        "highlight": "widget://image/common/center/0.png",
        "title": "多屏按钮"
    },
    {
        "normal": "widget://image/common/center/1.png",
        "highlight": "widget://image/common/center/1.png",
        "title": "动画菜单"
    },
    {
        "normal": "widget://image/common/center/2.png",
        "highlight": "widget://image/common/center/2.png",
        "title": "气泡菜单"
    },
    {
        "normal": "widget://image/common/center/3.png",
        "highlight": "widget://image/common/center/3.png",
        "title": "转盘菜单"
    },
    {
        "normal": "widget://image/common/center/4.png",
        "highlight": "widget://image/common/center/4.png",
        "title": "导航条"
    },
    {
        "normal": "widget://image/common/center/5.png",
        "highlight": "widget://image/common/center/5.png",
        "title": "导航菜单"
    },
    {
        "normal": "widget://image/common/center/6.png",
        "highlight": "widget://image/common/center/6.png",
        "title": "滑动菜单"
    },
    {
        "normal": "widget://image/common/center/7.png",
        "highlight": "widget://image/common/center/7.png",
        "title": "图片菜单"
    },
    {
        "normal": "widget://image/common/center/8.png",
        "highlight": "widget://image/common/center/8.png",
        "title": "边框菜单"
    },
    {
        "normal": "widget://image/common/center/9.png",
        "highlight": "widget://image/common/center/9.png",
        "title": "栈菜单"
    }
];

pullMenu.open({
    bgColor: "#1D486A",
    "btnArray": btnArray
},function(ret,err){
    api.toast({
        msg: "您选择了 "+  btnArray[ret.index]["title"] + " 模块",
        duration: 1000,
        location: "top"
    });
});