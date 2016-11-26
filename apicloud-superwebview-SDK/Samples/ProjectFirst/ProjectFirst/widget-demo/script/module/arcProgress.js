/*模块简介:
arcProgress是一个弧形进度条，
包括环形、扇形、类月牙形三种样式，
开发者可以自定义进度色和背景色.
此模块动画流畅，原生实现效果炫酷，
有效的解决了网页画圆会有锯齿的问题.
*/

/*示例简介:
打开圆形进度条;
进度条的背景色和进度色均为统一颜色;
动态自动设置进度;
*/

/* 加载 圆形进度条 模块. */
var arcProgress = api.require('arcProgress');


/* 打开模块,并动态设置 圆形进度条 进度*/

/* 寻找一个适合的半径*/
var radius = api.frameWidth / 6.0;

if(window.isOpenArcProgress){ // 已经打开,直接返回.
    die;
}

arcProgress.open({
    type: 1,
    centerX: radius * (2 * 1  + 1),
    centerY: api.frameHeight / 2.0,
    radius: radius,
    bgColor: "#87c0ed",
    pgColor: "#325570"
},function(ret,err){
    /* 进度自动步进. */
    ! function(id, value){
        setInterval(function(){

            if(value > 100){
                value %= 100;
            }

            arcProgress.setValue({
                id: id,
                value: value ++
            });
        }, 100);
    }(ret.id, 0);
});

window.isOpenArcProgress = true; // 标记 arcProgress 已经被打开.

// -----------------------------------

/* 产生一个随机 rgba 颜色值. */
function randomColor(){
    var alpha = random(10) / 10;

    if(alpha < 0.5){
        alpha = 0.5;
    }

    var rgba = "rgba(" + random(255) + ", " + random(255) +
        ", " + random(255) + ", " + alpha + ")";

    return rgba;

    // ---------------------------
    /* 产生 0 ~ max 的随机整数 */
    function random(max){
        return  Math.floor(Math.random() * (max + 1));
    }
}