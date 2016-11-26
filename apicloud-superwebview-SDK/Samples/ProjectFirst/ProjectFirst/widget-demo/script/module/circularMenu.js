/* 模块简介:
 circularMenu是一个转盘菜单，
 类似建行手机客户端首页的转盘菜单。
 本模块是原生实现的，动画非常流畅，
 开发者可自定义菜单上按钮的个数和样式。
 简单几行代码即可开发出转盘效果的炫酷UI
 */

/*示例简介:
 打开一个转盘菜单;
 点击按钮,会有对应提示;
 转动按钮, 转盘停止时,
  会自动提示 在最左边的按钮;
 */

var circularMenu = api.require('circularMenu');

var items = [
    {
        "normal": "widget://image/circularMenu/1.png",
        "highlight": "widget://image/circularMenu/1light.png",
        "title": "账户明细"
    },
    {
        "normal": "widget://image/circularMenu/2.png",
        "highlight": "widget://image/circularMenu/2light.png",
        "title": "转账汇款"
    },
    {
        "normal": "widget://image/circularMenu/3.png",
        "highlight": "widget://image/circularMenu/3light.png",
        "title": "投资理财"
    },
    {
        "normal": "widget://image/circularMenu/4.png",
        "highlight": "widget://image/circularMenu/4light.png",
        "title": "特色服务"
    },
    {
        "normal": "widget://image/circularMenu/5.png",
        "highlight": "widget://image/circularMenu/5light.png",
        "title": "安全中心"
    },
    {
        "normal": "widget://image/circularMenu/6.png",
        "highlight": "widget://image/circularMenu/6light.png",
        "title": "信用卡"
    }
];

circularMenu.open({
    "centerX": api.frameWidth / 2.0,
    "centerY": api.frameHeight / 2.0,
    "bgImg": "widget://image/circularMenu/bg.png",
    "centerBtnImg": "widget://image/circularMenu/center.png",
    "items": items,
    fixedOn: api.frameName
},function(ret,err){
    var msg;

    if(ret.click){
        if(ret.index == items.length){
            msg = "您点击了中间的主按钮";
        }else{
            msg = "您选择了 " + items[ret.index]["title"];
        }
    }else{
        msg = "转盘停止在 " + items[ret.indicatorIndex]["title"];
    }

    api.toast({
        msg: msg,
        duration: 1000,
        location: "top"
    });
});