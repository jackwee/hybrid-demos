function showProgress(){
    var style = $api.byId('style');
    style = $api.val(style);
    var type = $api.byId('type');
    type = $api.val(type);
    api.showProgress({
        style: style,
        animationType: type,
        title: document.getElementById("title").value,
        text: document.getElementById("text").value,
        modal: document.getElementById("modal").value
    });

    setTimeout(function(){
        api.hideProgress();
    }, 2000);
}