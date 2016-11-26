/* 模块简介:
 lineChart模块封装了k线图的绘制方法;
 开发者可自定义图表的样式;
 只需传入相应的数据，即可在图表上显示多条折线;
 亦可自定义结点点击事件;
 */

/* 示例简介:
 打开一个折线图;
 使用两条K 线分别表示 用户数量和财务支出;
 使用数据模拟说明 用户数量和财务支出的变化趋势;
 用户点击折线图的点获取对应的提示;
 */

var lineChart = api.require('lineChart');

var lineChartData = {
    indexs: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    lines: [
        {
            id: 0,
            color: "#317CF7",
            datas: [100, 200, 300, 400, 400, 500, 550, 600, 600, 700, 750, 950],
            title: "用户数量"
        },
        {
            id: 1,
            color: "#3F9FEA",
            datas: [950, 900, 800, 800, 700,300, 100, 0, -500, -800, -800, -1000],
            title: "财务支出"
        }]
};

lineChart.open({
    "x": 0,
    "y": 0,
    "w": api.frameWidth,
    "h": api.frameHeight,
    "bgColor":"#F0FFFF",
    "coorLineColor":"#C0C0C0",
    "markColor":"#051353",
    "yAxis":{
        "max":"1000",
        "step":"200"
    },
    "xAxis":{
        "indexs": lineChartData.indexs,
        "screenXcount":"7"
    },
    "lines":lineChartData.lines,
    fixedOn: api.frameName
},function(ret,err){
    if( ! ret.status){ /* 出错了. */
        api.toast({
            msg: err.msg,
            duration: 2000,
            location: "top"
        });

        return;
    }

    if(undefined === ret.index){ // 说明是视图初始打开.
        return;
    }

    var indexName = lineChartData.indexs[ret.index];

    var title ,data;

    var linesData = lineChartData.lines;

    for(var idx in linesData){
        var lineData = linesData[idx];
        if(ret.id == lineData.id){
            title = lineData.title;
            data = lineData.datas[ret.index];
            break;
        }
    }

    var msg = indexName + " " + title + " 为 " + data;

    api.toast({
        msg: msg,
        duration: 1000,
        location: "top"
    });
});