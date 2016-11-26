/*示例简介:
 打开一个子窗口;
 子窗口中加载的是一个远程页面;
*/

var y = 44;

if("ios" == api.systemType && parseInt(api.systemVersion) >= 7){
    y = 64;
}

api.openFrame({
    name: "apicloud",
    url: "http://www.apicloud.com/",
    rect:{
        x:0,
        "y": y,
        "width": api.frameWidth,
        "height": api.frameHeight
    },
    bgColor: '#FFFFFF',
    showProgress: true,
    reload: true
});