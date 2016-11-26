/* 模块简介:
 fs封装了对文件操作的接口，
 通过此模块可对文件进行
 创建、删除，读取、写入等相关操作;
 开发者简单几个接口即可操作文件，
 极大简化了前端代码的组织;
 */

/* 示例简介:
列出 widget 目录下的文件(夹).
*/
var fs = api.require("fs");

fs.readDir({
    path: "widget://"
}, function (ret, err) {
    if (!ret.status) {
        toast(err.msg);

        return;
    }

    api.alert({
        title: "widget目录下的文件",
        msg: JSON.stringify(ret.data)
    });
});

/* toast提示 */
function toast(msg, duration, location) {

    var msg = msg || "";
    var duration = duration || 1000;
    var location = location || "top";

    api.toast({
        msg: msg,
        duration: duration,
        location: location
    });
}