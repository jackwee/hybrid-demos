/* 模块简介:
 arcMenu是一个弧形菜单，
 子菜单按钮成弧形排列，
 展开和缩放菜单都有炫酷的动画;
 开发者可以配置子按钮的样式和数量以及子按钮排列方式.
 */

/* 示例简介:
 打开动画菜单: 弧形;
 点击菜单按钮, 会有对应提示;
 */


var arcMenuIds = []; /* 用数组来存储 动画菜单id, 根据在数组中的位置来区分菜单类型; */

opnArcMenu(0);

/* ---------------------------------------- */

/* 打开一个既定风格的 动画菜单 */
function opnArcMenu(type){

    var arcMenu = api.require('arcMenu');

    var x = api.frameWidth / 2.0;

    var y = api.frameHeight / 3.0 * 2.0;

    var w = 42;

    var h = 42;

    var radius = api.frameWidth / 3.0;

    var startAngle = 270;

    if(1 == type){ /*直线型菜单 */
        x = api.frameWidth - 42;
        y = h;
        radius = api.frameHeight;
        startAngle = 180;
    }

    var mainMenu = {
        x: x,
        y: y,
        w: w,
        h: h,
        img: "widget://image/arcMenu/centerImg.png",
        imgLight: "widget://image/arcMenu/centerImgLight.png"
    };

    var items = [
        {
            w: w,
            h: h,
            img: "widget://image/arcMenu/item1.png",
            imgLight: "widget://image/arcMenu/item1Light.png",
            title: "提醒"
        },
        {
            w: w,
            h: h,
            img: "widget://image/arcMenu/item2.png",
            imgLight: "widget://image/arcMenu/item2Light.png",
            title: "计算器"
        },
        {
            w: w,
            h: h,
            img: "widget://image/arcMenu/item3.png",
            imgLight: "widget://image/arcMenu/item3Light.png",
            title: "游戏"
        },
        {
            w: w,
            h: h,
            img: "widget://image/arcMenu/item4.png",
            imgLight: "widget://image/arcMenu/item4Light.png",
            title: "指南针"
        },
        {
            w: w,
            h: h,
            img: "widget://image/arcMenu/item5.png",
            imgLight: "widget://image/arcMenu/item5Light.png",
            title: "信息"
        },
        {
            w: w,
            h: h,
            img: "widget://image/arcMenu/item6.png",
            imgLight: "widget://image/arcMenu/item6Light.png",
            title: "闹钟"
        }
    ];

    var arcMenuId;

    arcMenu.open({
        type: type,
        startAngle: startAngle,
        mainMenu: mainMenu,
        items: items,
        wholeAngle: 180,
        radius: radius,
        fixedOn: api.frameName
    },function(ret,err){
        if("undefined" === typeof  ret.index){ /* 说明是open时,默认的一次调用. */
            arcMenuIds.push(ret.id);

            return;
        }

        var item = items[ret.index];

        var menuType = "弧形菜单";

        if(ret.id == arcMenuIds[1]){
            menuType = "直线型菜单";
        }

        api.toast({
            msg: "您点击了 " + menuType + " 的 " + item.title + " 按钮!",
            duration: 1000,
            location: "top"
        });
    });
}