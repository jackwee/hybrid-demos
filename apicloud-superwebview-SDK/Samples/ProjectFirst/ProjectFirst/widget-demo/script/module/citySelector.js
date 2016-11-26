/*模块简介:
 citySelector是一个城市选择器，
 以选择器的形式将中国各个省市级城市弹出，
 供用户选择,开发者可自定义该选择器的样式
*/

/*示例简介:
 打开一个 城市选择器;
 用户点击 "完成",会打开一个新的关于此城市的百度搜索界面;
 如果没有网络连接,点击"完成", 会直接显示用户选择的城市信息;
 */
var citySelector = api.require('citySelector');

citySelector.open({
    "currentCity":"北京",
    "resource":"widget://image/cityList/resource.json",
    cancelImg: "widget://image/citySelector/cancel.png",
    enterImg: "widget://image/citySelector/enter.png",
    titleImg: "widget://image/citySelector/nvc.png",
    bgImg: "widget://image/citySelector/bg.png",
    fontColor: "#3F9FEA"
},function(ret,err){
    var city = ret.city;
    var province = ret.province;
    var county = ret.county;

    /* 没有网,本地显示消息就可以了. */
    if("none" == api.connectionType){
        api.alert({
            title: "城市列表",
            msg: "您选择了 " + city + " " + province + " " + county
        });

        return;
    }

    /* 有网,可以直接去百度搜索下相关信息. */
    var y = 44;

    if("ios" == api.systemType && parseInt(api.systemVersion) >= 7){
        y = 64;
    }

    api.openFrame({
        name: county + province + city,
        url: "http://www.baidu.com/s?wd=" + county + province + city + "&ie=utf-8",
        rect:{
            "x":0,
            "y": y,
            "w": api.winWidth,
            "h": api.frameHeight
        },
        bgColor: '#FFFFFF',
        showProgress: true,
        reload: true
    });
});

/* 模块可能已经存在. */
citySelector.show();