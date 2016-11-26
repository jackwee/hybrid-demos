/* 模块简介:
 sideMenu是一个从边框弹出的菜单，
 允许开发者自定义子按钮的样式和个数,
 打开时会有从边框弹出的动画.
*/

/*示例简介:
 打开一个侧边栏菜单;
 将图片与标题关联起来;
 点击按钮,出现对应提示;
 */

var btnArray = [
    {
        title: "图标1",
        "icon": "widget://image/common/center/0.png",
        "bgImg": "widget://image/sideMenu/bg.png"
    },
    {
        title: "图标2",
        "icon": "widget://image/common/center/1.png",
        "bgImg": "widget://image/sideMenu/bg.png"
    },
    {
        title: "图标3",
        "icon": "widget://image/common/center/2.png",
        "bgImg": "widget://image/sideMenu/bg.png"
    },
    {
        title: "图标4",
        "icon": "widget://image/common/center/3.png",
        "bgImg": "widget://image/sideMenu/bg.png"
    },
    {
        title: "图标5",
        "icon": "widget://image/common/center/4.png",
        "bgImg": "widget://image/sideMenu/bg.png"
    }
];

var sideMenu = api.require('sideMenu');

sideMenu.open({
    trajectoryColor: "#3F9FEA",
    btnArray: btnArray,
    fixedOn: api.frameName,
    clickHide: false
},function(ret,err){
    if("undefined" !== typeof ret.index){
        var btn = btnArray[ret.index];

        api.toast({
            msg: "点击了 " + btn.title + " 按钮",
            duration: 1000,
            location: "top"
        });
    }
});