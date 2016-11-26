function openWin(){
    api.openWin({
        name: 'appIndex',
        url: './about.html',
        bounces: true
    });
}

function removeKeyback(){
    api.execScript({script: 'removeBack();'});
}

function removeKeymenu(){
    api.execScript({script: 'removeMenu();'});
}

function removeTap(){
    api.removeEventListener({name: 'tap'});
}
function removeShake(){
    api.removeEventListener({name: 'shake'});
}
function removeError(){
    api.removeEventListener({name: 'error'});
}
function rmPause(){
    api.removeEventListener({name: 'pause'});
    api.removeEventListener({name: 'resume'});
}

function rmNetListen(){
    api.removeEventListener({name: 'online'});
    api.removeEventListener({name: 'offline'});
}

function rmBatSta(){
    api.removeEventListener({name: 'batterylow'});
    api.removeEventListener({name: 'batterystatus'});
}

function viewShow(){
    api.removeEventListener({
        name: 'viewappear'
    });
    api.removeEventListener({
        name: 'viewdisappear'
    });
}

function removeScroll(){
    api.removeEventListener({
        name: 'scrolltobottom'
    });
}
function retError(){
    try{
        api.justTapIt();
    }catch(e){
        api.alert({msg: JSON.stringify(e)});
    }
}

api.addEventListener({name: 'pause'}, function(ret, err){
    api.alert({msg:'应用进入后台'});
});
api.addEventListener({name: 'resume'}, function(ret, err){
    api.alert({msg:'应用从后台进入前台'});
});
api.addEventListener({name: 'online'}, function(ret, err){
    api.alert({msg:'您已联网~~快去冲浪吧~~'})
});
api.addEventListener({name: 'offline'}, function(ret, err){
    api.alert({msg:'您已断网~~没网怎么活？！'})
});

api.addEventListener({name: 'batterylow'}, function(ret, err){
    if(ret.isPlugged){
        api.alert({msg:'正在充电...'});
    }else{
        api.alert({msg:'该充电了哦...'});
    }
});
api.addEventListener({name: 'batterystatus'}, function(ret, err){
    api.alert({msg:'当前电量：'+ ret.level});
    if(ret.isPlugged){
        api.alert({msg:'正在充电...'});
    }
});

api.addEventListener({name: 'scrolltobottom'}, function(ret, err){
    api.toast({
        msg: "到底部了",
        duration: 2000,
        location: "bottom"
    });
});

api.addEventListener({name: 'viewappear'}, function(ret, err){
    api.alert({msg:'页面显示'});
});
api.addEventListener({name: 'viewdisappear'}, function(ret, err){
    api.alert({msg:'页面消失'});
});
api.addEventListener({name: 'tap'}, function(ret, err){
    api.alert({msg:'触发了点击事件'});
});
api.addEventListener({name: 'shake'}, function(ret, err){
    api.alert({msg:'触发了设备摇动事件'});
});
api.addEventListener({name: 'error'}, function(ret, err){
    api.alert({msg:'没有此接口'});
});