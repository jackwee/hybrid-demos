/*模块简介:
 fileBrowser实现对文件的浏览功能，
 点击文件可返回该文件的绝对路径,
 该模块可对文件进行删除操作.
 */

/*示例简介:
 打开一个 文件浏览器;
 选中文件后, 会有对应提示;
 关闭文件浏览器;
 */
var fileBrowserModule = api.require('fileBrowser');

fileBrowserModule.open(function(ret,err) {
    fileBrowserModule.close();
    api.alert({
        title: "您选择了文件",
        msg: ret.url
    });
});