/*模块简介:
 通过downloadManager模块，
 能够对所有的下载进程进行管理，
 并可以通过界面来查看下载进度等信息，
 同时还提供压缩包解压、快速查看下载完成文件等功能
 */

/*示例简介:
 下载一个mp4文件;
 打开下载视图;
 可管理下载中的各文件;
 */

var downloadManager = api.require('downloadManager');
downloadManager.enqueue({
    url: "http://resource.apicloud.com/video/apicloud3.mp4"
});

downloadManager.openManagerView({
    title: "下载管理"
});