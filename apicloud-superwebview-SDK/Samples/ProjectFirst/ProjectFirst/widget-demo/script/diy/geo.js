function start(){
    androidGeo();
    var acc = $api.byId('accuracy');
    // acc = acc.options[acc.selectedIndex].value;
    acc = acc.value;
    var auto = $api.byId('autoStop');
    // auto = auto.options[auto.selectedIndex].value;
    auto = auto.value;
    var filDou = $api.byId('filDou');
    filDou = parseFloat(filDou.value);

    if (auto == 'true') {
        auto = true;
    }else{
        auto = false;
    };

    api.startLocation(
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
                $('#infoLon').val(lon);
                $('#infoLat').val(lat);
                $('#updateTime').val(t);
            }else{
                api.alert({msg:err.msg});
            }
        });
}
function stopGeo(){
    androidGeo();
    api.stopLocation();
}
function getGeo(){
    androidGeo();
    api.getLocation(function(ret, err){

        var sta = ret.status;
        var lat = ret.latitude;
        var lon = ret.longitude;
        var t = ret.timestamp;
        if(sta){
            $('#infoLon').val(lon);
            $('#infoLat').val(lat);
            $('#updateTime').val(t);
        }else{
            api.alert({msg:err.msg});
        }
    })
}

/* 安卓手机需要无法定位. */
function androidGeo(){
    if("android" === api.systemType){
        alert("安卓手机的geo定位基于谷歌的服务器!众所周知的原因，我们无法在安卓手机上通过此模块为您提供定位服务。建议使用我们的“baiduLocation”模块来进行基于位置的跨平台软件开发工作!");
    }
}
	
	