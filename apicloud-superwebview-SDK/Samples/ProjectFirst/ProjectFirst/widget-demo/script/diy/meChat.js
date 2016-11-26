var mechat;

function showAlert(){
    mechat.specifyAlloc({
        groupId:'2',
        agentId:'1682'
    });

    mechat.addUserInfo({
        realName:'美洽',
        job:'客服服务',
        tel:'400-0031-322'
    });

    mechat.addOtherInfo({
        foo:'bar',
        hello:'world',
        你好:'世界'
    });

    mechat.show();
}

apiready = function(){
    mechat = api.require('meChat');
    mechat.initMeChat({appkey:"5423aad63baac91944000001"});

};