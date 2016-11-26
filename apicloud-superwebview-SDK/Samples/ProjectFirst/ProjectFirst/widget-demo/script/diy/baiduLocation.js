function startLocation(){

    var baiduLocation = api.require('baiduLocation');

    var acc = $api.byId('accuracy').value;
    var auto = $api.byId('autoStop').value;
    var filDou = $api.byId('filDou');
    filDou = parseFloat(filDou.value);

    if (auto == 'true') {
        auto = true;
    }else{
        auto = false;
    };

    baiduLocation.startLocation(
        {
            accuracy:  acc,
            filter: filDou,
            autoStop:  auto
        },

        function(ret, err){

            var sta = ret.status;
            var lat = ret.latitude;
            var lon = ret.longitude;
            var t = ret.timestamp;

            if(sta){
                document.getElementById("infoLon").value = lon;
                document.getElementById("infoLat").value = lat;
                document.getElementById("updateTime").value = t;

            }else{
                api.alert({msg:err.msg});
            }
        });
}
function stopLocation(){
    var baiduLocation = api.require('baiduLocation');
    baiduLocation.stopLocation();
}
function getLocation(){
    var baiduLocation = api.require('baiduLocation');
    baiduLocation.getLocation(function(ret, err){
        var sta = ret.status;
        var lat = ret.latitude;
        var lon = ret.longitude;
        var t = ret.timestamp;
        if(sta){
            document.getElementById("infoLon").value = lon;
            document.getElementById("infoLat").value = lat;
            document.getElementById("updateTime").value = t;
        }else{
            api.alert({msg:err.msg});
        }
    })
}
