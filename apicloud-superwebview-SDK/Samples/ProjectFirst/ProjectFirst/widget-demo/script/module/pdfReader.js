/*模块简介:
 pdfReader封装了一个简单的pdf阅读器，
 支持添加标签、以九宫格形式查看、打印等功能.
 */

/*示例简介:
 打开一个 pdf 阅读器;
 可以自由选择查看方式等;
 */
var pdfReader = api.require("pdfReader");

var path = "widget://image/pdfReader/sample.pdf";

pdfReader.open({
    path: path
});