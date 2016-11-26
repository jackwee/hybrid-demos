/*模块简介:
 searchBar定义了一个搜索界面的模板，开发者可自定义该模板的样式。可将搜索记录归档到本地
  */

/*示例简介:
 打开搜索框;
 点击 "搜索", 可以百度输入的内容;
 点击 "语音按钮", 可以进行语音识别,并将识别的结果放到"搜索框"中;
 百度搜索或语音识别时,如果没有网络,会有  提示;
 */
var searchBar = api.require('searchBar');

searchBar.open({
    asrptt: 0
},function(ret,err){
    if("undefined" != typeof ret.volume){ /* 音量变化,不需要处理. */
        return;
    }

    if("none" == api.connectionType){
        api.alert({
            title: "搜索框",
            msg: "网络不给力!"
        });

        return;
    }

    if(ret.isRecord){
        api.alert({
            title: "搜索框",
            msg: "请大声告诉我的问题!"
        });

        var speechRecognizer = api.require('speechRecognizer');

        speechRecognizer.record({
        },function(ret,err){

            if( ! ret.status){
                api.toast({
                    msg: "语音识别功能异常,错误码: "+ err.msg
                });

                return;
            }

            searchBar.setText({
                text:ret.wordStr
            });
        });

        return;
    }

    /* 在百度中搜索相关内容. */
    /* 有网,可以直接去百度搜索下相关信息. */
    var y = 44;

    if("ios" == api.systemType && parseInt(api.systemVersion) >= 7){
        y = 64;
    }

    api.openFrame({
        name: "serchBar-baidu",
        url: "http://www.baidu.com/s?wd=" + ret.text + "&ie=utf-8",
        rect:{
            x:0,
            y: y,
            w: api.frameWidth,
            h: api.frameHeight
        },
        bgColor: '#FFFFFF',
        showProgress: true,
        reload: true
    });
});