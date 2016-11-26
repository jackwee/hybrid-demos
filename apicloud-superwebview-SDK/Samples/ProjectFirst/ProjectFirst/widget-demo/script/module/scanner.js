/*模块简介:
 二维码/条码扫描器，
 底层集成了ZXing，Zbar条码/二维码分析库，
 开发者可自定义扫描区域大小和位置、对图片解码，
 对字符串编码，将扫描结果保存到系统相册等功能，
 亦可自定义UI。开发者使用本模块可开发出各种自定义扫码应用.
 */

/* 示例简介:
打开一个条形码扫描器;
提示扫描结果;
如果是一个 官网编译的 iOS 应用,并且用户手机是 iPhone 则直接安装应用;
如果是一个 官网变异的 Andorid 应用,并且用户手机是 Android 手机,则下载后安装应用;
 */
var scanner = api.require("scanner");
scanner.open({
    sound: "widget://image/scanner/beep.caf"
},function(ret,err) {
    var result = ret.msg;

    var msg = result;

    /* 是不是 iOS 应用? */
    if(result.match(/http:\/\/www.apicloud.com\/getIpa/)){
        msg = "这是一个 iOS 应用, 您无法安装!";

        /* 用户用的是不是 iPhone? */
        if("ios" == api.systemType){
            msg = "请点击安装应用!";

            var y = 44;

            if(parseInt(api.systemVersion) >= 7){
                y = 64;
            }

            api.openFrame({
                name: "installApp",
                url: result,
                rect:{
                    x: 0,
                    y: y,
                    w: api.frameWidth,
                    h: api.frameHeight
                },
                bounces: false,
                showProgress: true
            });

        }
    }

    /* 是不是 Andorid 应用? */
    if(result.match(/http:\/\/www.apicloud.com\/(.)*\.apk$/)){
        msg = "这是一个 Android 应用, 您无法安装!";

        /* 用户用的是不是 Andorid 手机? */
        if("android" == api.systemType){
            msg = "正在为您下载并安装应用!";

            var arcProgress = api.require('arcProgress');
            arcProgress.open({
                type:0,
                centerX: api.frameWidth / 2.0,
                centerY:api.frameHeight / 2.0,
                radius: api.frameWidth / 6.0
            },function(ret,err){
                var arcProgressId = ret.id;

                api.download({
                        url: result,
                        report: true,
                        allowResume: true
                    }
                    ,function(ret,err){
                        if(0 == ret.state){ /* 下载中. */
                            arcProgress.setValue({
                                id: arcProgressId,
                                value: ret.percent
                            });
                        }

                        if(1 == ret.state){ /* 下载成功. */
                            api.installApp({
                                appUri: ret.savePath
                            });
                        }

                        if(2 == ret.state){ /* 下载失败. */
                            api.toast({
                                msg: "下载失败,请重试!",
                                duration: 2000,
                                location: "top"
                            });
                        }
                });
            });
        }

    }

    api.toast({
        msg: msg,
        duration: 3000,
        location: "top"
    });
});