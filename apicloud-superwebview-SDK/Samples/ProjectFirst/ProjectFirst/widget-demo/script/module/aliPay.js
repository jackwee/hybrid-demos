/* 模块简介:
 aliPay封装了支付宝的SDK，
 开发者只需配置从支付宝申请的相应的参数
 即可将支付宝功能集成到自己的app，
 安全，方便，快捷,让开发者拜托冗长的支付宝集成流程.
 */

/*示例简介:
 配置信息,
 并调用支付宝客户端支付;
 */
api.alert({
    title: "温馨提示",
    msg: "使用此模块前, 您需要与支付宝公司签约获得商户id、账户id、商家私钥、支付宝公钥,并正确配置!",
    buttons: ["我知道了"]
}, function(ret, err){
    /* 支付宝支付. */

    /* 配置. */
    var aliPay = api.require("aliPay");
    aliPay.config({
        partner:"12345678901234",
        seller:"123456789024354",
        rsaPriKey:"testKEY",
        rsaPubKey: "testKEY",
        notifyURL: "http://www.apicloud.com"
    },function(ret,err) {
        if( ! ret.status){
            api.toast({
                msg: err.msg,
                duration: 1000,
                location: "top"
            });

            return;
        }

        /* 支付. */
        var subject = "订单名";
        var body = "订单描述";
        var amount = "10.99";
        var tradeNO = "4563548735674";
        aliPay.pay({
            subject:subject,
            body:body,
            amount:amount,
            tradeNO:tradeNO
        },function(ret,err) {

            api.alert({
                title: "支付结果",
                msg: JSON.stringify(ret)
            });
        });

    });
});