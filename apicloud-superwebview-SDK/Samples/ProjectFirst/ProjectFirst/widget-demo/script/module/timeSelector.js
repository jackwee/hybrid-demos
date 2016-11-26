/*
 显示一个 时间选择器;
 时间选择器初始显示的是系统当前的时间;
 */

/* 显示一个时间选择器. */
var timeSelector = api.require('timeSelector');

var alarmId; /*记录闹钟id.*/

var nowDate = new Date();

timeSelector.open({
    "x": 0,
    "y": 0,
    "width": api.frameWidth,
    "height": api.frameHeight,
    "hour": nowDate.getHours(),
    "minit": nowDate.getMinutes(),
    fixedOn: api.frameName
});