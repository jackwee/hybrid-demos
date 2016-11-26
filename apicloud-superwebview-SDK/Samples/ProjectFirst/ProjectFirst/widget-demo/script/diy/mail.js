function send(){
    var recip = $api.byId('recipients').value;
    var sub = $api.byId('subject').value;
    var body = $api.byId('body').value;
    var attach = $api.byId('attachments').value;

    api.mail({
        recipients: [recip],
        subject: sub,
        body: body,
        attachments: [attach]
    }, function(ret, err){
        if(ret.status){
            api.alert({
                msg: '发送成功'
            });
        }else{
            api.alert({
                msg: err.msg
            });
        }
    });
}