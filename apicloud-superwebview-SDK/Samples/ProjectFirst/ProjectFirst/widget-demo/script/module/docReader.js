/*模块简介:
 docReader模块封装了对文档阅读的功能,
 开发者直接传进来一个文档,
 即可读出文档的内容显示出来,
 目前支持的文档格式主要有excel，doc，pdf等;
 */

/*示例简介:
 底部弹窗提示: 可选择打开 doc 文档, execel 表格, pdf文件;
 点击对应选项可打开对应类型文件;
 Android 平台下,初次进入时会toast提示 "需要第三方软件支持";
 */

if("ios" != api.systemType){
    api.toast({
        msg: "Andorid系统, 需要预先安装第三方文档阅读软件",
        duration: 1000,
        location: "top"
    });
}

var buttons = ["打开 doc 文档", "打开 excel 文档", "打开 pdf 文档"];
api.actionSheet({
    title: "文档阅读器体验",
    cancelTitle: "取消",
    buttons: buttons
},function(ret,err){

    var filepath = "widget://image/docReader/test.doc";

    if(2 == ret.buttonIndex){
        filepath = "widget://image/docReader/test.xls"
    }

    if(3 == ret.buttonIndex){
        filepath = "widget://image/docReader/test.pdf"
    }


    if(ret.buttonIndex <= buttons.length){
        var docReader = api.require("docReader");
        docReader.open({
            path: filepath
        });
    }
});