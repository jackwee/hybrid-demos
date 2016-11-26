/*示例简介:
 按照既定逻辑显示几种对话框;
 */

api.prompt({
    title: "你是谁?",
    msg: "请输入您的姓名",
    buttons:[ "取消", "确定"]
},function(ret,err){
    var name = ret.text;

    if(1 == ret.buttonIndex){
        return;
    }

    api.alert({
        title: "提示",
        msg: name + ", 欢迎您!"
    }, function(ret, err){
        api.confirm({
            title: "提示",
            msg: "您是一名 开发者吗?",
            buttons:[ "我就看看", "资深程序猿"]
        },function(ret,err){
            var msg = "欢迎到官网 www.apicloud.com 了解更多";
            if(2 == ret.buttonIndex){
                msg  = "选择APICloud, 七天开发一个APP!"
            }

            api.toast({
                msg: msg,
                duration: 1000,
                location: "top"
            });
        });

    });
});
