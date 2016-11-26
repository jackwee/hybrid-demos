function configAliPay() {
    var obj = api.require('aliPay');
    var notifyURL = document.getElementById("notifyURL").value;
    obj.config({
        partner: 'partner',
        seller: 'seller',
        rsaPriKey: 'prikey',
        rsaPubKey: 'pubkey',
        notifyURL: notifyURL
    }, function(ret, err) {
        if(ret.status)
            api.alert({msg:"配置成功"});
    });
};

function openAliPay() {
    var obj = api.require('aliPay');
    var subject = document.getElementById("title").value;
    var body = document.getElementById("subtitle").value;
    var amount = document.getElementById("price").value;
    var tradeNO = document.getElementById("ordernum").value;
    var notifyURL = document.getElementById("notifyURL").value;
    obj.pay({
        subject: subject,
        body: body,
        amount: amount,
        tradeNO: tradeNO
    }, function(ret, err) {
        document.getElementById("pay_message").value = ret.statusMessage;
        document.getElementById("pay_code").value = ret.statusCode;
        api.alert({
            title: '支付结果',
            msg: ret.statusMessage,
            buttons: ['确定']
        });
    });
};