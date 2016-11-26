/* 模块简介:
 periodSelector是一个时段选择器，
 由四个非常流畅的滚轮组成,
 使用此模块避免了网页实现上下滚轮效果不流畅的问题.
 */

/* 示例简介:
 打开一个 时段选择器;
 时段选择器的起始和终止时间均为 当前时间;
 */
var periodSelector = api.require('periodSelector');

var nowDate = new Date();

periodSelector.open({
    "x": 0,
    "y": 0,
    "width": api.frameWidth,
    "height": api.frameHeight,
    lHour: nowDate.getHours(),
    lMinit: nowDate.getMinutes(),
    rHour: nowDate.getHours(),
    rMinit: nowDate.getMinutes(),
    fixedOn: api.frameName
});