/*示例简介:
 使用 setPrefs 存储用户姓名;
 实用 getPrefs 读取用户姓名;
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

    var key = "userName";

    api.setPrefs({
        key: key,
        value: name
    });

    api.getPrefs({
        key: key
    }, function(ret, err){
        api.alert({
            title: "提示",
            msg: ret.value + ", 欢迎您!"
        });
    });
});