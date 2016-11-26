function openkLinechart()
{
    var lineArray = new Array();
    var klinecolor1s = document.getElementById("klinecolors1").value;
    var klineData1 = document.getElementById("klineDatas1").value;
    var klinedata1s = klineData1.split(",");
    var temp1 = {"color":klinecolor1s,"datas":klinedata1s,"id":'1'};
    lineArray.push(temp1);
    var klinecolor2s = document.getElementById("klinecolors2").value;
    var klineData2 = document.getElementById("klineDatas2").value;
    var klinedata2s = klineData2.split(",");
    var temp2 = {"color":klinecolor2s,"datas":klinedata2s,"id":'2'};
    lineArray.push(temp2);

    var yaxismax = document.getElementById("yaxismax").value;
    var yaxisstep = document.getElementById("yaxisstep").value;


    var xaxisMarkArray = new Array();
    var xaxisIndexs = document.getElementById("xaxismarks").value;
    xaxisMarkArray = xaxisIndexs.split(",");
    var axisYcount = document.getElementById("yaxiscount").value;

    var klinechartid = document.getElementById("kchartid").value;
    var obj = api.require('lineChart');
    obj.open({
        x:document.getElementById("viewX").value,
        y:document.getElementById("viewY").value,
        w:document.getElementById("viewW").value,
        h:document.getElementById("viewH").value,
        bgColor:'#F0FFFF',
        coorLineColor:'#C0C0C0',
        markColor:'#051353',
        yAxis:{"max":yaxismax,"step":yaxisstep},
        xAxis:{"indexs":xaxisMarkArray,"screenXcount":axisYcount},
        lines:lineArray
    },function(ret,err){
        if(ret.status){
            /*  api.alert({msg:'点击了第'+ret.id+'条线的第'+ret.index+'个点'});*/
            document.getElementById("kchartid").value = ret.index;
            document.getElementById("chartids").value = ret.lineId;
            document.getElementById("closekchartid").value  = ret.chartId;
        }else{
            api.alert({msg:err.msg});
        }
    });
};

function closekLinechart()
{
    var klinechartid = document.getElementById("closekchartid").value;
    var obj = api.require('lineChart');
    obj.close({id:klinechartid});
};
function showkLinechart()
{
    var klinechartid = document.getElementById("closekchartid").value;
    var obj = api.require('lineChart');
    obj.show({id:klinechartid});
};
function hidekLinechart()
{
    var klinechartid = document.getElementById("closekchartid").value;
    var obj = api.require('lineChart');
    obj.hide({id:klinechartid});
};