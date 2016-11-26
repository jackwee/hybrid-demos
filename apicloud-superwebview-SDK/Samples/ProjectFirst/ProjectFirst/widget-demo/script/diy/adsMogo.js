function shownext(){
    api.openWin({
        name: 'interstitial',
        url: 'adsMogo.html',
        pageParam: {
            isSub: true
        }
    });
}





function showbanner(){


    var banner  = api.require('adsMogoBanner');

    /*
     adtype:

     0: AdViewTypeNormalBanner; 320x50 iPhone
     1: AdViewTypeMediumBanner; 468x60 iPad
     2: AdViewTypeLargeBanner; 728x90 iPad
     4: AdViewTypeRectangle; 300x250 iPad
     8: AdViewTypeiPadNormalBanner; 320x50 iPad
     14: AdViewTypeiPhoneRectangle; 300x250 iPhone


     positiontype:
     left_top  //上居左
     center_top  //上居中
     right_top  //上居右
     left_bottom  //下居左
     center_bottom  //下居中
     right_bottom  //下居右



     */
    var param = {
        mogoId:"f6a60b7be69b4cd69c785d06d1bca6c3",
        adsize:"0",
        positiontype:"center_bottom"
    };
    banner.initBanner(param,bannerStatusCallback);
}

function hiddenad(){
    var banner  = api.require('adsMogoBanner');
    banner.hiddenBanner(
        function(ret,err){
            if(ret.status){
                alert("调用隐藏广告成功");
            }else{
                alert("调用隐藏广告失败msg:"+err.msg);
            }
        }
    );
}

function showad(){
    var banner  = api.require('adsMogoBanner');
    banner.showBanner(
        function(ret,err){
            if(ret.status){
                alert("调用展示广告成功");
            }else{
                alert("调用展示广告失败msg:"+err.msg);
            }
        });
}

function showlog(){
    var banner  = api.require('adsMogoBanner');
    banner.setLog({
            debug:true
        },
        function(ret,err){
            if(ret.status){
                alert("调用设置日志成功");
            }else{
                alert("调用设置日志失败msg:"+err.msg);
            }
        });
}

function ishiddenbanner(){
    var hid_type_var = $api.byId('hid_sel');
    var select_value = hid_type_var.value;
    var banner  = api.require('adsmogoiosplugin');
    var param = {
        hidden:select_value
    };
    banner.setBannerHidden(param);
}

function setlistener(){
    var banner  = api.require('adsMogoBanner');
    banner.setListener(bannerStatusCallback);
}

function goToNext(){

}

function bannerStatusCallback(ret, err){
    if (ret.status) {
        var bannerlab = $api.byId('bannerstatuslab');
        bannerlab.innerText = ret.status;
    }else{
        var bannerlab = $api.byId('bannerstatuslab');
        bannerlab.innerText = JSON.stringify(err);
    }
}



apiready = function(){

};