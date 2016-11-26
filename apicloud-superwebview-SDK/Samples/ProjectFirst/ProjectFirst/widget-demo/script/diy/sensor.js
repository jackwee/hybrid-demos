function start(){
    var type = $api.byId('type');
    // type = type.options[type.selectedIndex].value;
    type = type.value;
    api.startSensor({
        type: type
    }, function(ret, err){
        if(ret.status){
            var info = $api.byId('info');
            var x = ret.x;
            x = x || '';
            var y = ret.y;
            y = y || '';
            var z = ret.z;
            z = z || '';
            var proximity = ret.proximity;
            var p = proximity ? '是' : '否';
            // var str = 'X轴：'+ x +'<br>Y轴：'+ y + '<br>Z轴：'+ z +'<br>是否接近设备：'+ p;
            // info.innerHTML = str;
            var str = 'X轴：'+ x +' Y轴：'+ y + ' Z轴：'+ z +' 是否接近设备：'+ p;
            info.value = str;
        }else{
            api.alert({msg:err.msg});
        }
    });

}
function stop(){
    var type = $api.byId('type');
    // type = type.options[type.selectedIndex].value;
    type = type.value;
    api.stopSensor({
        type: type
    });
}