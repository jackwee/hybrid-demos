function presentBanner() {
    var domob = api.require('adsDomob');

    domob.presentBanner({publiserId:"56OJyM1ouMGoULfJaL", placementId:"16TLwebvAchkANUH_krQ7vOz", x:"0", y:"20", width:"320", height:"50", autorefresh:"1"}, function(ret, err) {
        if (ret.type == 0) {
            switch (ret.status) {
                case -1:
                    api.alert({msg:"Banner 广告加载失败:" + err});
                    break;
                case 0:
                    api.alert({msg:"Banner 广告加载完成"});
                    break;
                case 1:
                    api.alert({msg:"Banner 广告准备展现"});
                    break;
                case 2:
                    api.alert({msg:"Banner 广告被关闭"});
                    break;
                case 3:
                    api.alert({msg:"Banner 广告被切到后台"});
                    break;
            }
        }
    });
}

function presentFlexibleBanner() {
    var domob = api.require('adsDomob');

    domob.presentFlexibleBanner({publiserId:"56OJyM1ouMGoULfJaL", placementId:"16TLwebvAchkANUH_krQ7vOz", x:"0", y:"20"}, function(ret, err) {
        if (ret.type == 0) {
            switch (ret.status) {
                case -1:
                    api.alert({msg:"Banner 广告加载失败:" + err});
                    break;
                case 0:
                    api.alert({msg:"Banner 广告加载完成"});
                    break;
                case 1:
                    api.alert({msg:"Banner 广告准备展现"});
                    break;
                case 2:
                    api.alert({msg:"Banner 广告被关闭"});
                    break;
                case 3:
                    api.alert({msg:"Banner 广告被切到后台"});
                    break;
            }
        }
    });
}

function initInterstitial() {
    var domob = api.require('adsDomob');

    domob.initInterstitial({publiserId:"56OJyM1ouMGoULfJaL", placementId:"16TLwebvAchkAY6iOWkE6kpk"}, function(ret, err) {
        if (ret.type == 1) {
            switch (ret.status) {
                case -1:
                    api.alert({msg:"插屏广告加载失败:" + err});
                    break;
                case 0:
                    api.alert({msg:"插屏广告加载完成"});
                    break;
                case 1:
                    api.alert({msg:"插屏广告准备展现"});
                    break;
                case 2:
                    api.alert({msg:"插屏广告被关闭"});
                    break;
                case 3:
                    api.alert({msg:"插屏广告被切到后台"});
                    break;
            }
        }
    });
}

function presentInterstitial() {
    var domob = api.require('adsDomob');

    domob.presentInterstitial({},
        function(ret, err) {
            if (ret.type == 1) {
                switch (ret.status) {
                    case -1:
                        api.alert({msg:"插屏广告加载失败:" + err});
                        break;
                    case 0:
                        api.alert({msg:"插屏广告加载完成"});
                        break;
                    case 1:
                        api.alert({msg:"插屏广告准备展现"});
                        break;
                    case 2:
                        api.alert({msg:"插屏广告被关闭"});
                        break;
                    case 3:
                        api.alert({msg:"插屏广告被切到后台"});
                        break;
                }
            }
        });
}

function presentSplash() {
    var domob = api.require('adsDomob');

    domob.presentSplash({publiserId:"56OJyM1ouMGoULfJaL", placementId:"16TLwebvAchkAY6iOVhpfHPs", splashImageUrl:"http://static.hothdwallpaper.net/51aac68f51f8599006.jpg"}, function(ret, err) {
        if (ret.type == 2) {
            switch (ret.status) {
                case -1:
                    api.alert({msg:"开屏广告加载失败:" + err});
                    break;
                case 0:
                    api.alert({msg:"开屏广告加载完成"});
                    break;
                case 1:
                    api.alert({msg:"开屏广告准备展现"});
                    break;
                case 2:
                    api.alert({msg:"开屏广告被关闭"});
                    break;
                case 3:
                    api.alert({msg:"开屏广告被切到后台"});
                    break;
            }
        }
    });
}

function initDBox() {
    var demo = api.require('adsDomob');

    demo.initDBox({publiserId:"56OJw+rouN8xdhPaW9", placementId:"16TLuFnvAp2p4NU06al1hNgi"},
        function(ret, err) {
            if (ret.type == 3) {
                switch (ret.status) {
                    case -1:
                        api.alert({msg:"多宝屋广告加载失败:" + err});
                        break;
                    case 0:
                        api.alert({msg:"多宝屋广告加载完成"});
                        break;
                    case 1:
                        api.alert({msg:"多宝屋广告准备展现"});
                        break;
                    case 2:
                        api.alert({msg:"多宝屋广告被关闭"});
                        break;
                    case 3:
                        api.alert({msg:"多宝屋广告被切到后台"});
                        break;
                }
            }
        });
}

function presentDBoxEntry() {
    var demo = api.require('adsDomob');

    demo.presentDBoxEntry({publiserId:"56OJw+rouN8xdhPaW9", placementId:"16TLuFnvAp2p4NU06al1hNgi"},
        function(ret, err) {
            if (ret.type == 3) {
                switch (ret.status) {
                    case -1:
                        api.alert({msg:"多宝屋广告加载失败:" + err});
                        break;
                    case 0:
                        api.alert({msg:"多宝屋广告加载完成"});
                        break;
                    case 1:
                        api.alert({msg:"多宝屋广告准备展现"});
                        break;
                    case 2:
                        api.alert({msg:"多宝屋广告被关闭"});
                        break;
                    case 3:
                        api.alert({msg:"多宝屋广告被切到后台"});
                        break;
                }
            }
        });
}

function sendDBoxEntryClick() {
    var demo = api.require('adsDomob');

    demo.sendDBoxEntryClick({},
        function(ret, err) {
        });
}

function sendDBoxEntryImpression() {
    var demo = api.require('adsDomob');

    demo.sendDBoxEntryImpression({},
        function(ret, err) {
        });
}

apiready = function(){

};