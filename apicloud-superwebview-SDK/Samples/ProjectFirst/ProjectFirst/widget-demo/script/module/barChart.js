/*模块简介:
 barChart是一个柱状图模块，非常形象的显示出数据走势。
 开发者只需简单的配置相应的参数，即可实现一个立体的柱状图。
 这极大地简化了前端实现柱状图开发的代码。
 开发者可自定义x，y轴以及柱子的个数和颜色等.
*/

/* 示例简介:
 打开一个柱状图,
 上面显示 1 ~ 12 月每月的统计数据,
 点击柱状图可显示具体每一个月的数据.
*/
var barChart = api.require('barChart');

var xAxisMarks =  [ "一月", "二月", "三月", "四月", "五月", "六月", "七月",  "八月",
    "九月", "十月" ,"十一月", "十二月"];
var datas = [6000, 8000, 8000, 7000, 9500, 7500, 6900, 9000, 3000, 4500, 9000, 5500];

barChart.open({
    "x": 0,
    "y": 0,
    "w": api.frameWidth,
    "h": api.frameHeight,
    "yAxisMax":"10000",
    "yAxisStep":"1000",
    "xAxisMarks":xAxisMarks,
    "datas": datas,
    "fixedOn": api.frameName
},function(ret,err){
    if( ! err){
        var idx = ret.index;

        if(undefined === idx){ /* 可能是初始打开. */
            return;
        }

        api.toast({
            msg: xAxisMarks[idx] + " 的数据是: " + datas[idx],
            duration:1000,
            location: "top"
        });
    }
});