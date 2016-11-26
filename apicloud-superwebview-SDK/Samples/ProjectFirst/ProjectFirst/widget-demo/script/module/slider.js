/* 模块简介:
 slider封装了一个滑动器，
 开发者可自定义最大值、最小值、当前值
 以及拖动滑块时的气泡提示信息等
 */

/*示例简介:
 打开一个滑杆;
 可以左右自动拖动滑杆;
 滑杆上显示的 是 百分比;
 */
var slider = api.require('slider');
slider.open({
    "x": 0,
    "y": api.frameHeight / 2.0,
    "w": api.frameWidth,
    bar:{
        barImg: "widget://image/slider/bar.png"
    },
    bubble:{
        "bubbleImg": "widget://image/slider/bubble.png"
    },
    "bgImg": "widget://image/slider/bg.png",
    "selectedBgImg": "widget://image/slider/selected.png",
    defValue:"42"
});