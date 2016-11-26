function uzAlert(){
    api.alert({
        title: '我是alert框',
        msg: "我是alert内容",
        buttons: ['嗯哼']
    }, function(ret, err){
    });
}
function uzConfirm(){
    api.confirm({
        title: '我是confirm框',
        msg: "我是confirm框内容，很长很长很长很长",
        buttons: ['我再想想', '我确定了']
    }, function(ret, err){
    });
}
function uzPrompt(){
    api.prompt({
        title: '我是prompt框',
        msg: "我是prompt框内容，很长很长很长很长",
        buttons: ['我再想想', '我确定了']
    }, function(ret, err){
    });
}