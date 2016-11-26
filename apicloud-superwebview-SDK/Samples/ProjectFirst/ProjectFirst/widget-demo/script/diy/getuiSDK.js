var uzgetuisdk = null;
apiready = function(){
    uzgetuisdk = api.require('getuiSDK');
}

function initialize() {
    // 初始化sdk并监听透传消息
    uzgetuisdk.initialize(function(ret) {
        // 获取到cid后的回调通知
        document.getElementById("txt_getui_cid").innerHTML = "cid:" + ret.cid;
    });

    uzgetuisdk.register(function(ret) {
        document.getElementById("txt_getui_taskid").innerHTML = "taskid:" + ret.taskid;
        document.getElementById("txt_getui_messageid").innerHTML = "messageid:" + ret.messageid;
        document.getElementById("txt_getui_payload").innerHTML = "payload:" + ret.payload;
    });
}

function stopService() {
    uzgetuisdk.stopService(function(ret) {
        // TODO:
    });
    document.getElementById("txt_getui_cid").innerHTML = "cid:";
}

function getVersion() {
    uzgetuisdk.getVersion(function(ret) {
        document.getElementById("txt_getui_version").innerHTML = "version:" + ret.version;
    });
}

function setTag() {
    var param = {tags:"tag1,tag2"};
    uzgetuisdk.setTag(param,function(ret) {
        document.getElementById("txt_getui_settag").innerHTML = "settag: "+ret.result;
    });
}

function bindAlias() {
    var param = {alias:"myalias"};
    uzgetuisdk.bindAlias(param,function(ret) {
        document.getElementById("txt_getui_bindalias").innerHTML = "bindAlias: "+ret.result;
    });
}

function setSilentTime() {
    var param = {beginHour:9,duration:12};
    uzgetuisdk.setSilentTime(param,function(ret) {
        // TODO
    });
}

function isPushTurnedOn() {
    uzgetuisdk.isPushTurnedOn(function(ret) {
        document.getElementById("txt_getui_ispushturnedon").innerHTML = "isPushTurnedOn: "+ret.isOn;
    });
}