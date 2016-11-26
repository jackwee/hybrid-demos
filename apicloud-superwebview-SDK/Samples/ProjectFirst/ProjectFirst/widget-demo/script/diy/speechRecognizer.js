function openSpeechRecognizer()
{
    var obj = api.require('speechRecognizer');
    obj.record({
        vadbos:document.getElementById("vad_bos").value,
        vadeos:document.getElementById("vad_eos").value,
        rate:document.getElementById("sample_rate").value,
        asrptt:document.getElementById("asr_ptt").value,
        audioPath:document.getElementById("asr_audio_path").value
    },function(ret,err){
        if(ret.status){
            document.getElementById("recordStr").value = ret.wordStr;
        }
    });

    // 如果用户添加了录音标识,则显示.
    obj.showRecordHUD();

};
function stopSpeechRecognizer()
{
    var obj = api.require('speechRecognizer');
    obj.stopRecord();

    // 隐藏录音标识.
    obj.hideRecordHUD();
};
function cancelSpeechRecognizer()
{
    var obj = api.require('speechRecognizer');
    obj.cancel();
};
function playSpeechRecognizer()
{
    var obj = api.require('speechRecognizer');
    obj.read({
        speed:document.getElementById("vspeed").value,
        volume:document.getElementById("vvolume").value,
        voice:document.getElementById("vvoicename").value,
        rate:document.getElementById("samplerate").value,
        audioPath:document.getElementById("vasr_audio_path").value,
        readStr:document.getElementById("readstr").value
    },function(ret,err){

    });
};

function pauseSpeechRecognizer()
{
    var obj = api.require('speechRecognizer');
    obj.pause();
};
function resumeSpeechRecognizer()
{
    var obj = api.require('speechRecognizer');
    obj.resume();
};
function stopReadRecognizer()
{
    var obj = api.require('speechRecognizer');
    obj.stopRead();
};
function addSpeechHUD()
{
    var obj = api.require('speechRecognizer');
    obj.addRecordHUD();

}