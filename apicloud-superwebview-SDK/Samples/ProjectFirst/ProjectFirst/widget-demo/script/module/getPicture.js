/*示例简介:
 弹出一个选择框,用户可以选择图片来源;
 根据用户选择打开图库或者相机;
 */

api.confirm({
    title: "提示",
    msg: "您想要从哪里选取图片 ?",
    buttons:["优雅自拍", "相册收藏","取消"]
},function(ret,err){

    if(3 == ret.buttonIndex){ // 用户取消.
        return;
    }

    var sourceType = "album";

    if(1 == ret.buttonIndex){ /* 打开相机*/
        sourceType = "camera";
    }

    api.getPicture({
        sourceType: sourceType,
        encodingType: "jpg",
        mediaValue: "pic"
    }, function(ret, err){
        if (ret) {
            api.alert({
                title: "图片路径",
                msg: ret.data
            });
        }
    });
});