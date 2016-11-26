function showToast(){
    var msgField = $api.byId('msgField');
    var msg = $api.val(msgField);
    var durationField = $api.byId('durationField');
    var duration = $api.val(durationField);
    var locationType = $api.byId('locationType');
    var location = locationType.value;
    api.toast({
        msg: msg,
        duration: duration,
        location: location
    });
}