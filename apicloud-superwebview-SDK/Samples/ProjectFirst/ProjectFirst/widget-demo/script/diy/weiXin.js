function getPayToken(){
    var weiXin = api.require('weiXin');
    weiXin.getToken({
        secret:'00f373c57777e46ba86d461cbcc2fbe8'
    },function(ret,err)
    {
        if (ret.status)
        {
            document.getElementById("paytokenis").value = ret.token;
            document.getElementById("exipires").value = ret.expires;
        }else
        {
            api.alert({msg:err.msg});
        }
    })
};

function getPayOrder(){
    var weiXin = api.require('weiXin');
    weiXin.getOrder({
        token: document.getElementById("paytokenis").value,
        orderInfo:''
    },function(ret,err)
    {
        if (ret.status)
        {
            document.getElementById("payorderidis").value = ret.orderId;
        }else
        {
            api.alert({msg:err.msg});
        }
    })
};

function gotoPayOrder(){
    var weiXin = api.require('weiXin');
    weiXin.payOrder({
        orderId: document.getElementById("payorderidis").value,
        partnerId:'',
        nonceStr:'',
        timeStamp:'',
        package:'',
        sign:''
    },function(ret,err)
    {
        if (ret.status)
        {
            document.getElementById("payResult").value = ret.result;
        }else
        {
            api.alert({msg:err.msg});
        }
    })
};


function reg(){
    var weiXin = api.require('weiXin');
    weiXin.registerApp(function(ret,err){
        if (ret.status) {
            api.alert({msg:''+ret.status});
        }else{
            api.alert({msg:'注册失败'});
        }
    })
};

function loginWeiXin(){
    var weiXin = api.require('weiXin');
    weiXin.auth(function(ret,err){
        if(ret.status){
            api.alert({msg: ret.token});
        }else{
            api.alert({msg: err.msg});
        }
    });

};
function logoutWeiXin(){
    var weiXin = api.require('weiXin');
    weiXin.cancelAuth(function(ret,err){
        if(ret.status){
            api.alert({msg: '退出成功'});
        }else{
            api.alert({msg: err.msg});
        }
    });

};
function getUsersInfomation(){
    var weiXin = api.require('weiXin');
    weiXin.getUserInfo(function(ret,err){
        if(ret.status){
            api.alert({msg: JSON.stringify(ret)});
        }else{
            api.alert({msg: err.msg});
        }
    });
}

function refreshUserToken(){
    var weiXin = api.require('weiXin');
    weiXin.refreshToken(function(ret,err){
        if(ret.status){
            api.alert({msg: '刷新成功'});
        }else{
            api.alert({msg: err.msg});
        }
    });
}
function sendReq(){
    var weiXin = api.require('weiXin');
    var scene = document.getElementById("scene").value;
    var contentType = document.getElementById("contentType").value;
    var title = $api.byId('title');
    var description = $api.byId('description');
    var thumbUrl = $api.byId('thumbUrl');
    var contentUrl = $api.byId('contentUrl');
    var contentUrlI = $api.byId('contentUrlI');
    var contentUrlV = $api.byId('contentUrlV');
    var URL = null;
    title = title.value;
    if (contentType == 'image') {
        URL = contentUrlI.value;
    }else if(contentType == 'video'){
        URL = contentUrlV.value;
    }else if(contentType == 'music'){
        URL = contentUrlM.value;
    }else{
        URL = contentUrl.value;
    };
    description = description.value;
    thumbUrl = thumbUrl.value;

    weiXin.sendRequest({
        scene: scene,
        contentType: contentType,
        title: title,
        description: description,
        thumbUrl: thumbUrl,
        contentUrl: URL

    },function(ret,err){
        if (ret.status) {
            api.alert({
                title: '发表微信',
                msg: '发表成功',
                buttons: ['确定']
            });
        }else{
            var msg = "";

            if(0 == err.code){
                msg = "没有错误";
            }

            if(1 == err.code){
                msg = "普通错误";
            }

            if(2 == err.code){
                msg = "用户取消";
            }

            if(3 == err.code){
                msg = "发送失败";
            }

            if(4 == err.code){
                msg = "授权拒绝";
            }

            if(5 == err.code){
                msg = "不支持";
            }

            api.toast({
                msg: msg,
                duration: 2000,
                location: "top"
            });
        };
    });

};