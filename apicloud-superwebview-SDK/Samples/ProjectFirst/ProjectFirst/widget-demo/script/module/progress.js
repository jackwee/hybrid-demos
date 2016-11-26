/*示例简介:
显示一个进度条;
2 秒后自动隐藏进度条;
 */

api.showProgress();

setTimeout(function(){
    api.hideProgress();
}, 2000);