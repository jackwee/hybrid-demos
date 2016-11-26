function reg(){
    var sinaWeiBo = api.require('sinaWeiBo');
    sinaWeiBo.cancelAuth(function(ret,err){
        if(ret.status){
            api.alert({msg:'登出成功'});
        }else{
            api.alert({msg:err.msg});
        }
    });
}

function auth(){
    var sinaWeiBo = api.require('sinaWeiBo');
    sinaWeiBo.auth(function(ret,err){
        if (ret.status) {
            var token = ret.accessToken;
            var uID = ret.userID;
            api.alert({
                title: '微博登陆授权成功',
                msg: '获取的token和id是：'+token+uID,
                buttons: ['确定']
            });
        }else{
            api.alert({msg:"登陆失败"});
        }
    });
}

function send(){
    var sinaWeiBo = api.require('sinaWeiBo');
    var contentType = $api.byId('contentType');

    contentType = contentType.value;
    var text = $api.byId('text').value;
    var imageUrl = $api.byId('imageUrl').value;

    var title = $api.byId('mediaTitle').value;
    var description = $api.byId('mediaDescription').value;
    var thumbUrl = $api.byId('mediathumbUrl').value;
    var musicUrl = $api.byId('mediamusicUrl').value;
    var videoUrl = $api.byId('mediavideoUrl').value;
    var webpageUrl = $api.byId('mediawebpageUrl').value;
    var jsonMedia = {};
    if (contentType == 'music') {
        jsonMedia={
            title: title,
            description: description,
            thumbUrl: thumbUrl,
            musicUrl: musicUrl
        }
    } else if (contentType == 'video') {
        jsonMedia={
            title: title,
            description: description,
            thumbUrl: thumbUrl,
            videoUrl: videoUrl
        }
    } else if (contentType == 'web_page') {
        jsonMedia={
            title: title,
            description: description,
            thumbUrl: thumbUrl,
            webpageUrl: webpageUrl
        }
    };
    sinaWeiBo.sendRequest({
        contentType: contentType,
        text: text,
        imageUrl: imageUrl,
        media: jsonMedia
    },function(ret,err){
        if (ret.status) {
            api.alert({
                title: '发表微博',
                msg: '发表成功',
                buttons: ['确定']
            });
        }else{
            api.alert({
                title: '发表微博',
                msg: err.msg,
                buttons: ['确定']
            });
        };
    });
}