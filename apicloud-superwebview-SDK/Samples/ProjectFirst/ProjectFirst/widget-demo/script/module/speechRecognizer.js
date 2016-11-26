/* 模块简介:
 speechRecognizer模块封装了科大讯飞语音识别的sdk。
 开发者只需调用此模块即可实现语音识别，
 语音朗读的相关功能。
 省去了开发者去科大讯飞官网注册创建app的复杂流程;
 */

/*示例简介:
识别语音,结束时显示识别结果;
*/

api.toast({
    msg: "语音识别开始,请说话",
    duration: 1000,
    location: "middle"
});

/* 语音识别. */
var speechRecognizer = api.require("speechRecognizer");
speechRecognizer.record({
},function(ret,err){
    if(ret.wordStr){
        api.alert({
            title: "识别结果",
            msg: ret.wordStr
        });
    }
});

speechRecognizer.addRecordHUD();

