/* 模块简介:
 pieChart是一个饼图数据展示控件，
 可识别手势转动该饼图，
 旋转动画结束返回特定位置的数据库的下标,
 支持开发者自定义数据块样式.
 */

/* 示例简介:
 打开一个饼形图;
 可用手自由转动饼形图;
 饼形图停止时,将会 toast 提示位于底部的分割块内的数据;
 */

var title = "生活费";
var subTitle = "12月份"

var elements = [
    {
        title: "饮食",
        value: "1000",
        color: "#1D486A"
    },
    {
        title: "交通",
        value: "200",
        color: "#87C0ED"
    },
    {
        title: "娱乐",
        value: "900",
        color: "#3F9EFA"
    },
    {
        title: "穿衣",
        value: "500",
        color: "#325570"
    },
    {
        title: "房租",
        value: "1200",
        color: "#317CB7"
    }
];

var pieChart = api.require('pieChart');
pieChart.open({
    "id": "1",
    "x": api.frameWidth / 2.0,
    "y": api.frameHeight / 2.0,
    "radius": api.frameWidth / 2.0,
    "title": title,
    "subTitle": subTitle,
    "elements": elements,
    fixedOn: api.frameName
},function(ret,err)
{
    var element = elements[ret.index];

    var msg = element.title +" 支出为 " + element.value + " 元, 占当月 " + title + " 的" + Math.round(ret.percent) + "%";

    api.toast({
        msg: msg,
        duration: 1000,
        location: "top"
    });
});