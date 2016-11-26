function openCalendar()
{
    var iaf = api.require('calendar');
    iaf.open({
        x:document.getElementById("viewx").value,
        y:document.getElementById("viewy").value,
        width:document.getElementById("vieww").value,
        height:document.getElementById("viewh").value,
        specialDate:['2014-04-01','2014-05-11','2014-05-20','2014-04-25','2014-05-31']
    },function(ret,err)
    {
        document.getElementById("selectedDate").value = ret.date;
    });
};

function closeCalendar()
{
    var iaf = api.require('calendar');
    iaf.close();
};