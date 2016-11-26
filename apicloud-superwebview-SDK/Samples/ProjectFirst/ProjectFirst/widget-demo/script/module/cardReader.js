/* 模块简介:
 cardReader封装了PayPal的cardio识别库，
 用户只需用摄像头扫描信用可即可实现卡号的输入;
 */

/*示例简介:
 打开信用卡识别模块;
 识别成功后,会有相应提示;
 */

/* 打开一个信用卡识别模块. */
var cardReader = api.require("cardReader");
cardReader.open(function(ret,err){
    var title = "识别结果";

    if(ret.status){
        var msg = "卡号: " + ret.cardNum + "  过期时间: " + ret.expiryMonth + "/" + ret.expirtyYear;
    } else{
        var msg = "您似乎取消了操作!";
    }
});