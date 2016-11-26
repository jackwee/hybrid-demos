var isDownload = false;
function download(){
    isDownload = true;
    var url1 = $api.val($api.byId('url1'));
    var url2 = $api.val($api.byId('url2'));
    var aRadio = $api.domAll('input:checked');
    var savePath = $api.trimAll(url2);
    var showPath = $api.byId('showPath');
    var json = {
        url: url1,
        // report: aRadio[0].value,
        // cache: aRadio[1].value,
        // allowResume: aRadio[2].value
        report: $('#report').value,
        cache: $('#cache').value,
        allowResume: $('#resume').value
    }
    if (savePath!=='') {
        json.savePath = savePath;
    }
    api.download(
        json,function(ret,err){
            isDownload = false;
            if (ret) {
                $api.val($api.byId('showMsg'),('文件大小:'+ret.fileSize+';下载进度:'+ret.percent+';下载状态:'+ret.state));
                if (ret.savePath) {
                    $api.val($api.byId('showPath'),(ret.savePath));
                };

            }else{
                $api.val($api.byId('showMsg'),err.msg);
                $api.val($api.byId('showPath'),(''));
            };
        }
    );
};
function cancelDownload(){
    isDownload = false;
    var url1 = $api.val($api.byId('url1'));
    api.cancelDownload(
        {
            url: url1
        }
    )
};
function openIt(){
    if(true === isDownload){
        alert("资源正在下载，请您耐心等待！");
        return;
    }
    var url = $api.val(showPath);
    api.openWin({
        name: 'openDownload',
        url: 'openDownload.html',
        pageParam: {url: url},
        bounces: false,
        opaque: false,
        bgColor: '#000'
    });
}