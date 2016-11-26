window.addEventListener("apiready", function(){
    var moduleId = api["pageParam"]["moduleId"];

    window.showModule(moduleId);

    window.addEventListener("keyback", function () {
        closeWin();
    });
});

/* 关闭窗口. */
// !!!: 最好封装为工具方法.
function closeWin(){
    var animationType = "ripple";

    if("ios" != api.systemType){
        animationType = "reveal";
    }

    api.closeWin({
        animation: {
            type: animationType,
            duration: 1000
        }
    });
}