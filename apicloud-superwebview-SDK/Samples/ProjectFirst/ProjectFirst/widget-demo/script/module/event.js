/*示例简介:
 捕捉手机摇动事件;
 */
api.toast({
    msg:"请用力晃动手机",
    duration: 3000,
    location: "middle"
});

api.addEventListener({
    name: "shake"
}, function(ret, err){
    api.alert({
        title: "提示",
        msg: "您摇动了手机!"
    });
});