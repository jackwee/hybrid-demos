/* 模块简介:
 inputField是一个输入框，
 开发者可根据需求自定义其样式。
 该模块能巧妙的适配键盘高度，自动调整位置，
 保证输入框始终紧贴软键盘
 */

/* 示例简介:
 打开一个文本输入框;
 用户点击发送时，显示用户输入的内容；
 最多只显示三条;
 */
var infoCount = 0; // 记录信息条数,最多只保留三条信息.

var mainDiv = document.createElement("div");
document.getElementsByTagName("body")[0].appendChild(mainDiv);

var inputField = api.require('inputField');
inputField.open({
    "bgColor": "#f2f2f2",
    "lineColor": "#d9d9d9",
    "fileBgColor": "#FFF",
    "borderColor": "#b3b3b3",
    "sendImg": "widget://image/inputField/sentImg.png",
    "sendImgHighlight": "widget://image/inputField/sentImgHigh.png"
},function(ret,err){
    var pDiv = document.createElement("p");
    pDiv.innerHTML = ret.msg;
    mainDiv.appendChild(pDiv);

    infoCount ++ ;

    if(infoCount > 3){
        mainDiv.removeChild(mainDiv.firstElementChild);
    }
});