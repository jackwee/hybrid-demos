function objSRecord(){
    var rPath = $api.byId('path');
    var pPath = $api.byId('path1');
    var rImg = $api.byId('sRecord');
    var sImg = $api.byId('start');
    var otext = $api.byId('showRec');
    var path = $api.trimAll(rPath.value);
    var json = {}
    if (path!=='') {
        var json = {
            path: rPath.value
        }
    }
    api.startRecord(json);
};
function objERecord(){
    var rPath = $api.byId('path');
    var pPath = $api.byId('path1');
    var rImg = $api.byId('sRecord');
    var sImg = $api.byId('start');
    var otext = $api.byId('showRec');

    api.stopRecord(function(ret,err){
        if (ret) {
            $api.val(otext,'文件路径--'+ret.path+';录音时长:'+ret.duration+'s');
        };
    });

};
function objStart(){
    var rPath = $api.byId('path');
    var pPath = $api.byId('path1');
    var rImg = $api.byId('sRecord');
    var sImg = $api.byId('start');
    var otext = $api.byId('showRec');


    api.startPlay({
        path: pPath.value
    },function(){
        objStop();
    });
};
function objStop(){
    var rPath = $api.byId('path');
    var pPath = $api.byId('path1');
    var rImg = $api.byId('sRecord');
    var sImg = $api.byId('start');
    var otext = $api.byId('showRec');

    api.stopPlay();
};
function btnGet(){
    var rPath = $api.byId('path');
    var pPath = $api.byId('path1');
    var rImg = $api.byId('sRecord');
    var sImg = $api.byId('start');
    var otext = $api.byId('showRec');

    api.getPicture(
        {
            sourceType: 'library',
            mediaValue: 'video'
        },function(ret,err){
            if(ret){
                api.openVideo(
                    {
                        url: ret.data
                    }

                );
            }else{
                api.alert(
                    {
                        msg: ('错误码:'+err.code+'--错误描述:'+err.msg)
                    }
                );
            }
        }
    )
};
function btnPlay(){
    var rPath = $api.byId('path');
    var pPath = $api.byId('path1');
    var rImg = $api.byId('sRecord');
    var sImg = $api.byId('start');
    var otext = $api.byId('showRec');

    var url = $api.byId('url').value;
    api.openVideo(
        {
            url: url
        }
    );
};