/*示例简介:
 打电话与发短信;
 */

api.prompt({
    title: "请输入电话号码",
    buttons:[ "打电话", "发短信", "取消"]
},function(ret,err) {
    var numer = ret.text || "10086";

    if(1 == ret.buttonIndex){
        api.call({
            number: numer
        });
    }

    if(2 == ret.buttonIndex){
        api.sms({
            numbers: [numer],
            text: "APICloud 重新定义移动开发"
        });
    }
});