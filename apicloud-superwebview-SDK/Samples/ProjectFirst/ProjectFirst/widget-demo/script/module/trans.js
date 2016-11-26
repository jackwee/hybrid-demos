/*模块简介:
 trans是一个数据格式转换工具，
 可以实现不同格式数据间的转换，
 如json，xml;
 */

/*示例简介:
 解析 config.xml文件;
 弹窗提示结果;
 */
/* 解析 XML 文件 */
var trans = api.require('trans');

trans.parse({
    path: "widget://config.xml"
},function(ret,err){
    if(ret) {
        api.alert({
            title: "config.xml 解析结果",
            msg: JSON.stringify(ret)
        });
    }else{
        api.alert({
            title: "出错了!",
            msg: JSON.stringify(ret)
        });
        api.alert({msg:err.msg});
    }
});