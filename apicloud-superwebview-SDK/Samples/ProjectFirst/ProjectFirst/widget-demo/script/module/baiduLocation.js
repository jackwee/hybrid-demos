/*模块简介:
 baiduLocation封装了百度定位的相关功能，
 使用此模块可获取当前位置信息.
 */
/*示例简介:
  点击"定位",显示用户当前位置信息;
  定位过程中,会显示定位提示;
 */

/* 百度定位. */
api.showProgress({
    title: "正在定位...",
    text: "请稍候...",
    modal: false
});

var baiduLocation = api.require('baiduLocation');
baiduLocation.startLocation( {
        accuracy:  "100m",
        filter: 3,
        autoStop:  true
    },
    function(ret, err){
        api.hideProgress();

        if( ! ret.status){
            api.toast({
                msg: err.msg,
                duration: 1000,
                location: "top"
            });

            return;
        }

        api.toast({
            title: "当前位置",
            msg: "经度" + ret.longitude + " 纬度" + ret.latitude + " 时间戳" + ret.timestamp,
            location: "middle"
        });
    }
);