apiready = function(){
    api.setRefreshHeaderInfo({
        visible: true,
        loadingImg: 'widget://image/refresh-white.png',
        bgColor: '#ccc',
        textColor: '#fff',
        textDown: '下拉试试...',
        textUp: '松开试试...',
        showTime: true
    }, function(ret, err){
        setTimeout(function(){
            api.refreshHeaderLoadDone();
            var content = $api.byId('content');
            var str = '<h4>数据加载完毕！！</h4><p>在此可刷新页面。</p>';
            content.innerHTML = str;
            api.parseTapmode();
        }, 2000);
    });
    show = function(){
        api.alert({msg:'试试反应速度如何'});
    };
}