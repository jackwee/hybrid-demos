function openBarchartview()
{

    var xaxisIndexs = document.getElementById("xaxismarks").value;
    var xaxisMarkArray = xaxisIndexs.split(",");

    var klineData1 = document.getElementById("klineDatas1").value;
    var klinedata1s = klineData1.split(",");
    var obj = api.require('barChart');
    obj.open({
        x:document.getElementById("cityx").value,
        y:document.getElementById("cityy").value,
        w:document.getElementById("citywidth").value,
        h:document.getElementById("cityheight").value,
        yAxisMax:document.getElementById("yaxismax").value,
        yAxisStep:document.getElementById("yaxissteps").value,
        xAxisMarks:xaxisMarkArray,
        datas:klinedata1s
    },function(ret,err){
        document.getElementById("yaxismaxid").value=ret.id;
        if(ret.index==0){
            api.alert({msg:'点击了第'+ret.index+'个柱子'});
        }else if(ret.index){
            api.alert({msg:'点击了第'+ret.index+'个柱子'});
        }
    });
};

function closeBarchartview()
{
    var iaf = api.require('barChart');
    iaf.close({
        id:document.getElementById("yaxismaxid").value
    });
};
function showBarchartview()
{
    var obj = api.require('barChart');
    obj.show({
        id:document.getElementById("yaxismaxid").value
    });
};
function hideBarchartview()
{
    var obj = api.require('barChart');
    obj.hide({
        id:document.getElementById("yaxismaxid").value
    });
};