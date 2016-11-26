/*示例代码:
 发邮件;
 发送结果会弹窗提示;
 */
api.alert({
    title: "提示",
    msg: "使用前,请正确配置您的邮箱客户端!"
});

api.mail({
    recipients: ["mail@example.com"],
    subject: "APICloud",
    body: "APICloud 重新定义移动开发"
}, function(ret, err){
    var msg = "邮件发送成功!"
    if( ! ret.status){
        msg = err.msg
    }

    api.toast({
        msg: msg,
        duration: 1000,
        location: "top"
    });
});
