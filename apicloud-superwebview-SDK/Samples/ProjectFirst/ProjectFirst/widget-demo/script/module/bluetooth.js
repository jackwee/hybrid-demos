/*模块简介:
 bluetooth模块封装了系统的蓝牙功能，
 使用此模块可实现两台设备间无缝传输数据。
 可传输字符串，图片，视频，文件等各种数据。
 使用此模块需打开设备蓝牙功能.
 */

/*示例简介:
 打开蓝牙,有数据传入时,自动显示进度;
*/
var bluetooth = api.require("bluetooth");
bluetooth.connect(
    function(ret,err){
        if(ret.message){
            api.alert({
                title: "蓝牙传输",
                msg: ret.message
            });
        }

        if(ret.progress){
            api.toast({
                msg: "传输进度: " + ret.progress ,
                duration: 1000,
                location: "top"
            });
        }
    }
);