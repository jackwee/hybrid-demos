function shareToqqvideo()
{
    var iaf = api.require('qq');
    iaf.shareVideo({
        url:document.getElementById("sharevideourl").value,
        title:document.getElementById("sharevideotitle").value,
        description:document.getElementById("sharevideodiscription").value,
        imgUrl:document.getElementById("sharevideoimageurl").value
    },function(ret,err)
    {
        if (ret.status)
        {
            alert('分享成功');
        }
        else
        {alert(err.msg);}
    });
};
function shareToqqmusic()
{
    var iaf = api.require('qq');
    iaf.shareMusic({
        url:document.getElementById("sharemusicurl").value,
        title:document.getElementById("sharemusictitle").value,
        description:document.getElementById("sharemusicdiscription").value,
        imgUrl:document.getElementById("sharemusicimageurl").value
    },function(ret,err)
    {
        if (ret.status)
        {
            alert('分享成功');
        }
        else
        {alert(err.msg);}
    });
};
function shareToqqtext()
{
    var iaf = api.require('qq');
    iaf.shareText({
        text:document.getElementById("sharetext").value
    },function(ret,err)
    {
        if (ret.status)
        {
            alert('分享成功');
        }
        else
        {alert(err.msg);}
    });
};
function shareToqqImage()
{
    var iaf = api.require('qq');
    iaf.shareImage({
        title:document.getElementById("shareimagetitle").value,
        description:document.getElementById("shareimagediscription").value,
        imgPath:document.getElementById("shareimagePath").value
    },function(ret,err)
    {
        if (ret.status)
        {
            alert('分享成功');
        }
        else
        {alert(err.msg);}
    });
};
function shareToqqnew()
{
    var iaf = api.require('qq');
    iaf.shareNews({
        url:document.getElementById("sharenewsurl").value,
        title:document.getElementById("sharenewtitle").value,
        description:document.getElementById("sharenewiscription").value,
        imgUrl:document.getElementById("sharenewurl").value
    },function(ret,err)
    {
        if (ret.status)
        {
            alert('分享成功');
        }
        else
        {alert(err.msg);}
    });
};

function startLogin()
{
    var iaf = api.require('qq');
    iaf.login(function(ret,err)
    {
        if (ret.status)
        {
            api.alert(
                {
                    title: 'id和token',
                    msg: ret.openId+'*'+ret.accessToken,
                    buttons: ['确定']
                });
            document.getElementById("token_result").value = ret.accessToken;
            document.getElementById("userid_result").value = ret.openId;
        }
        else
        {
            api.alert(
                {
                    title: 'id和token',
                    msg: err.msg,
                    buttons: ['确定']
                });
        }

    });
};
function startLogout()
{
    var iaf = api.require('qq');
    iaf.logout({},function(ret,err)
    {
        if (ret.status)
        {
            alert('登出成功');
        }
        else
        {alert(err.msg);}
    });
};