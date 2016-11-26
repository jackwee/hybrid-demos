/*模块简介:
 cityList是一个城市列表模块，
 自带了右边字母导航条，
 可快速滚动到目标城市选项。
 开发者可自定义城市列表的数据源.
*/

/*示例简介:
 打开一个 城市列表;
 用户点击 某个 城市,
 会打开一个新的关于此城市的百度搜索界面;
 如果没有网络连接,直接显示用户选择的城市信息;
 */
var cityList = api.require('cityList');

cityList.open({
    "x": 0,
    "y": 0,
    "width": api.frameWidth,
    "height": api.frameHeight,
    "currentCity":"北京",
    "resource":"widget://image/cityList/resource.json",
    fixedOn: api.frameName
},function(ret,err){
    var id = ret.cityInfo.id;
    var city = ret.cityInfo.city;
    var pinyin = ret.cityInfo.pinyin;

    /* 没有网,本地显示消息就可以了. */
    if("none" == api.connectionType){
        api.alert({
            title: "城市列表",
            msg: "您选择了 " + id + " " + city + " " + pinyin
        });

       return;
    }

    /* 有网,可以直接去百度搜索下相关信息. */
    var y = 44;

    if("ios" == api.systemType && parseInt(api.systemVersion) >= 7){
        y = 64;
    }

    api.openFrame({
        name: ret.cityInfo.pinyin + id,
        url: "http://www.baidu.com/s?wd=" + city + "&ie=utf-8",
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