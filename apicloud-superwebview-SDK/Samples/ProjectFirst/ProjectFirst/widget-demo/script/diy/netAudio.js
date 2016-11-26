function objStart(){
    var obj = api.require('netAudio');
    obj.play({
        path:document.getElementById("personheadimg").value
    },function(ret,err){
        document.getElementById("audioduration").value = ret.duration;
        document.getElementById("audiocurrenttime").value = ret.current;
    });
};

function setvolumes(){
    var obj = api.require('netAudio');
    obj.setVolume({volume:document.getElementById("audiovolume").value});
};
function setProgress(){
    var obj = api.require('netAudio');
    obj.setProgress({progress:document.getElementById("audioprogress").value});
};

function objpause(){
    var obj = api.require('netAudio');
    obj.pause();
};
function objStop(){
    var obj = api.require('netAudio');
    obj.stop();
};