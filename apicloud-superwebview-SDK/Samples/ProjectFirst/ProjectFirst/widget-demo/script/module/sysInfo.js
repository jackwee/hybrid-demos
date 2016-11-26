/*
系统的一些基本信息
 */

var ver = api.appVersion;
var sType = api.systemType;
var sVer = api.systemVersion;
var id = api.deviceId;
var model = api.deviceModel;
var name = api.deviceName;
var cType = api.connectionType;
var winName = api.winName;
var frameWidth = api.frameWidth;
var frameHeight = api.frameHeight;

var sysInfo = {
    应用版本: ver,
    系统类型: sType,
    系统版本: sVer,
    设备标识: id,
    设备型号: model,
    设备名称: name,
    网络状态: cType,
    窗口名字: winName,
    窗口宽度: frameWidth,
    窗口高度: frameHeight
};

api.alert({
    title: "系统基本信息",
    msg: JSON.stringify(sysInfo)
});