function readme(){
    var obj = api.require('speechRecognizer');
    var txt = $api.byId('intro').innerHTML;
    txt = '语音识别模块展示：'+ txt;
    obj.read({
        readStr: txt
    });
}

apiready = function() {

}