/* 模块简介:
 zip模块封装了zip文件解压缩的相关操作，
 开发者只需简单地调用相关接口，
 即可实现对zip文件的操作;
 */

/*示例简介:
打开一个 navBar 模块导航;
选择 "压缩", "解压" 会进行对应操作;
操作结束后,会toast提示结果.
 */
var zipToPath;

var navigationBar = api.require("navigationBar");

var y = 44;

if("ios" == api.systemType && parseInt(api.systemVersion) >= 7){
    y = 64;
}

var params = {
    y: y,
    h: 44,
    itemSize: {
        w: api.frameWidth / 2.0
    },
    items: [
        {
            title:"压缩",
            bg:"#87C0ED",
            bgSelected: "#325570"
        },
        {
            title:"解压",
            bg:"#87C0ED",
            bgSelected: "#325570"
        }
    ]
};

function callback(ret, err){
    var file = "widget://index.html";
    var pwd = "APICloud";

    if(0 == ret.index){
        zipToPath = "fs://APICloud" + Date.now() + Math.floor(Math.random()*100000) + ".zip";

        var msg = zipToPath;

        var zip = api.require('zip');
        zip.archive({
            password: pwd,
            files:[file],
            toPath: zipToPath
        },function(ret,err){
            if(ret.status) {
                msg += " 压缩成功";
            } else{
                msg += " 压缩失败: " + err.msg
            }

            api.toast({
                msg: msg,
                duration: 1000,
                location: "top"
            });

        });
    }

    if(1 == ret.index){
        var msg = zipToPath;

        var zip = api.require('zip');
        zip.unarchive({
            file: zipToPath,
            password: pwd
        },function(ret,err){
            if(ret.status) {
                msg += " 解压成功";
            } else{
                msg += " 解压失败: " + err.msg
            }

            api.toast({
                msg: msg,
                duration: 1000,
                location: "top"
            });
        });
    }
}

navigationBar.open(params, callback);