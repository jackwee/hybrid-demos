function installApp(){
    var pathField = $api.byId('pathField');
    var path = $api.val(pathField);
    api.installApp({
        appUri: path
    });
}