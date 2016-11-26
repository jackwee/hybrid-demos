function open(){
    var array = [];
    for (var i = 0; i < 10; i++) {
        array[i] = document.getElementById("img" + i).value;
    }

    var coverFlow = api.require('coverFlow');
    coverFlow.open({
        x: document.getElementById("x").value,
        y: document.getElementById("y").value,
        w: document.getElementById("w").value,
        h: document.getElementById("h").value,
        bgColor: document.getElementById("bgColor").value,
        paths: array
    }, function(ret, err) {
        api.toast({
            msg: "您点击了第" + ret.index + "幅图片",
            duration: 1500,
            location: "top"
        });
    });
}
function close(){
    var coverFlow = api.require('coverFlow');
    coverFlow.close();
}
function show(){
    var coverFlow = api.require('coverFlow');
    coverFlow.show();
}
function hide(){
    var coverFlow = api.require('coverFlow');
    coverFlow.hide();
}