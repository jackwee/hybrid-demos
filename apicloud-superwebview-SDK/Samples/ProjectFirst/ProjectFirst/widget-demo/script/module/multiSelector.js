/* 模块简介:
 multiSelector封装了一个支持多选的选择器,
 开发者可自定义该选择器的样式及其数据源;
 */

/* 示例简介:
 打开一个多项选择器;
 点击完成, toast 显示别选中的数据;
 */

var multiSelector = api.require("multiSelector");
multiSelector.open({
    content:["数据服务","推送","云修复","版本", "统计"],
    cancelImg: "widget://image/multiSelector/cancel.png",
    enterImg: "widget://image/multiSelector/enter.png",
    titleImg: "widget://image/multiSelector/nvc.png",
    bgImg: "widget://image/multiSelector/bg.png",
    fontColor: "#3F9FEA",
    selectedColor: "#325570"
},function(ret,err){
    /* 提示选中的数据. */
    var msg = ret.selectAry.toString();

    if("" !== msg){
        msg = "您选择了: " + msg;
    }else{
        msg = "您似乎没有选择任何东西."
    }

    api.toast({
        msg: msg,
        duration: 1000,
        location: "middle"

    });
});