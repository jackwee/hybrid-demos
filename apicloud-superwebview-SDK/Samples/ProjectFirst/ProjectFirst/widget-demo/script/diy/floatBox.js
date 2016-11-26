function showFloatBox(){
    var iconField = $api.byId('iconField');
    var icon = $api.val(iconField);
    var durationField = $api.byId('durationField');
    var duration = $api.val(durationField);
    api.showFloatBox({
        iconPath: icon,
        duration: duration
    });
}