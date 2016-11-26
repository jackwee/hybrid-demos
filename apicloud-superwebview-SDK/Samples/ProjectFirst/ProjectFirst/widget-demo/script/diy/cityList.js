function closeCityList()
{
    var obj = api.require('cityList');
    obj.close({ });
}
function showCityList()
{
    var obj = api.require('cityList');
    obj.show({ });
}
function hideCityList()
{
    var obj = api.require('cityList');
    obj.hide({ });
}
function openCityList()
{
    var obj = api.require('cityList');
    obj.open({
        x:document.getElementById("cityx").value,
        y:document.getElementById("cityy").value,
        w:document.getElementById("citywidth").value,
        h:document.getElementById("cityheight").value,
        currentCity:document.getElementById("citycurrent").value,
        resource:document.getElementById("pathUrl").value
    },function(ret,err)
    {
        if(ret.status)
        {
            document.getElementById("cityid").value = ret.cityInfo.id;
            document.getElementById("cityname").value = ret.cityInfo.city;
            document.getElementById("citypinyin").value = ret.cityInfo.pinyin;
        }
        else
        {
            alert(err.msg);
        }
    });
};