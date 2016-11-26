window.pieChartId = 0;
function openPies()
{
    var array = new Array();
    array[0] = {value:document.getElementById("value1").value,color:document.getElementById("color1").value};
    array[1] = {value:document.getElementById("value2").value,color:document.getElementById("color2").value};
    array[2] = {value:document.getElementById("value3").value,color:document.getElementById("color3").value};
    array[3] = {value:document.getElementById("value4").value,color:document.getElementById("color4").value};
    array[4] = {value:document.getElementById("value5").value,color:document.getElementById("color5").value};

    var obj = api.require('pieChart');
    obj.open({
        x:document.getElementById("viewx").value,
        y:document.getElementById("viewy").value,
        radius:document.getElementById("vieww").value,
        title:document.getElementById("viewtitle").value,
        subTitle:document.getElementById("viewsubtitle").value,
        id: ++ pieChartId,
        elements:array
    },function(ret,err)
    {
        document.getElementById("closeviewid").value = pieChartId;

        if(undefined !== ret.index){
            document.getElementById("indexid").value = ret.index;
        }

        if(undefined !== ret.percent){
            document.getElementById("percentid").value = ret.percent;
        }
    });
};
function closePies()
{
    var obj = api.require('pieChart');
    obj.close({
        id:document.getElementById("closeviewid").value
    });

    document.getElementById("indexid").value = '';
    document.getElementById("percentid").value = '';
};
function showPies()
{
    var obj = api.require('pieChart');
    obj.show({
        id:document.getElementById("closeviewid").value
    });
};
function hidePies()
{
    var obj = api.require('pieChart');
    obj.hide({
        id:document.getElementById("closeviewid").value
    });
};