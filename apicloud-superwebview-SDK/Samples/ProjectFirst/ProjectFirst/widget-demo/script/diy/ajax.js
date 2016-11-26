function getData(){
    api.ajax({
        url: 'http://m.weather.com.cn/data/101010100.html',
        method: 'get',
        cache: false,
        timeout: 30,
        dataType: 'text'
    }, function(ret, err){
        if (ret) {
            api.alert({
                title: "结果",
                msg:JSON.stringify(ret)});

        }else {
            api.alert(
                {
                    msg:('错误码：'+err.code+'；错误信息：'+err.msg+'网络状态码：'+err.statusCode)
                }
            );
        };
    });
}
function upLoadByPost(){//上传文件
    var upLoadFiles = $api.byId('upLoadFiles');
    var filesValue = upLoadFiles.value;
    var arr = filesValue.split(',');
    var filesUrl = {};
    for (var i = 0,j = arr.length; i < j; i++) {
        var imgs = 'img'+i;
        filesUrl[imgs] = arr[i];
    };

    api.showProgress({title:'提交中..', text:'请稍后...', modal:false});
    api.ajax({
        url: 'http://117.78.7.24:3000/upload',
        method: 'post',
        cache: false,
        timeout: 30,
        dataType: 'json',
        data: {
            values: {hehe: 'haha'},
            files: filesUrl
        }

    },function(ret,err){
        api.hideProgress();
        if (ret) {
            api.alert({
                title: "结果",
                msg:JSON.stringify(ret)});
        }else {
            api.alert(
                {
                    msg:('错误码：'+err.code+'；错误信息：'+err.msg+'网络状态码：'+err.statusCode)
                }
            );
        };
    });
};

function getFilesUrl(){//获取本地图片
    var upLoadFiles = $api.byId('upLoadFiles');
    var filesUrl = '';
    api.getPicture({
        sourceType: 'library',
        encodingType: 'png',
        mediaValue: 'pic',
        destinationType: 'url',
        allowEdit: true,
        quality: 100,
        saveToPhotoAlbum: false
    }, function(ret, err){

        if (ret.data) {
            filesUrl = ret.data;
            if (upLoadFiles.value == '') {
                upLoadFiles.value = filesUrl;
            }else{
                upLoadFiles.value = upLoadFiles.value +","+filesUrl;
            };
        }else {
            api.alert({msg:"您好像没有选取文件!"});
        }

    });

};
function getDataByPost(){
    api.ajax({
        url: 'http://117.78.7.24:3000/upload',
        method: 'post',
        cache: false,
        timeout: 30,
        dataType: 'text',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        data: {
            body: '123'
        }

    },function(ret,err){
        if (ret) {
            api.alert({
                title: "结果",
                msg:JSON.stringify(ret)});
        }else {
            api.alert(
                {
                    msg:('错误码：'+err.code+'；错误信息：'+err.msg+'网络状态码：'+err.statusCode)
                }
            );
        };
    });
};

function getJSONByPost(){
    api.ajax({
        url: 'http://117.78.7.24:3000/upload',
        method: 'post',
        cache: false,
        timeout: 30,
        dataType: 'json',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        data: {
            values: {hehe: 'haha'}
        }

    },function(ret,err){
        if (ret) {
            api.alert({
                title: "结果",
                msg:JSON.stringify(ret)});
        }else {
            api.alert(
                {
                    msg:('错误码：'+err.code+'；错误信息：'+err.msg+'网络状态码：'+err.statusCode)
                }
            );
        };
    });
}