/*模块简介:
 imageBrowser模仿系统相册，
 实现了对本地以及网络图片的查看浏览,
 可以是九宫格方式也可以是图片流方式，
 效果非常流畅;
 */

/*示例简介:
 打开一个图片浏览器;
 点击可放大显示图片;
 */
var imageBrowser = api.require("imageBrowser");

var imageUrls = [];

for(var i = 0; i < 6; i ++){
    imageUrls.push("widget://image/coverFlow/img" + i + ".png");
}

imageBrowser.openImages({
    imageUrls: imageUrls,
    showList: true
});