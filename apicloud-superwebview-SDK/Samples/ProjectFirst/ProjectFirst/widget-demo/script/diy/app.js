function objI2(){
    api.openApp({
        iosUrl: 'wechat://',
        appParam: {'appParam': 'app参数'}
    },function(ret,err){

        var msg = JSON.stringify(ret);
        api.alert({
            title: 'openApp',
            msg: msg,
            buttons: ['确定']
        },function(ret,err){

        })
    });
};
function objA(){
    api.openApp({
        androidPkg: "android.intent.action.VIEW",
        mimeType: "text/html",
        uri: "http://www.baidu.com"
    },function(ret,err){

    });
};