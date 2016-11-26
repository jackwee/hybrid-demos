/*
打开 meChat 聊天界面;
 */
setTimeout(function(){
    var meChat = api.require('meChat');
    meChat.initMeChat({
        appkey: "5423aad63baac91944000001"
    });

    meChat.show();
}, 1000);