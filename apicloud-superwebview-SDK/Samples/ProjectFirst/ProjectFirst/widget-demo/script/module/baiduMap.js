/*模块简介:
 baiduMap封装了百度地图的SDK，
 对百度地图的相关接口做了一层严格准确的封装
 把相对复杂的调用接口简单化，
 极大的简化了手机app集成百度地图的流程,
 该模块的接口含盖了百度地图绝大部分的接口.
 */

/*示例简介:
 打开百度地图;
 用户可以自由缩放和拖动地图;
 */

/* 打开百度地图. */
var baiduMap = api.require("baiduMap");

var y = 44;

if("ios" == api.systemType && parseInt(api.systemVersion) >= 7){
    y = 64;
}

baiduMap.open({
    x: 0,
    y: y,
    width: api.frameWidth,
    height: api.frameHeight
},function(ret,err){
    if( ! ret.status){
        api.toast({
            msg: "百度地图加载失败",
            duration: 1000,
            location: "top"
        });

        return;
    }

    api.toast({
        msg: "百度地图加载成功",
        duration: 1000,
        location: "top"
    });

});