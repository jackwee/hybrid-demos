function setBadgenum()
{
    var obj = api.require('tabBar');
    obj.setBadge({
        index:document.getElementById("barbtnindex").value,
        badge:document.getElementById("setbarbadge").value
    });
};
function opentablebar()
{
    var backgroundimg  = document.getElementById("bgimageBar").value;
    var selectedImg = document.getElementById("selectbgImage").value;

    var headsurl1 = document.getElementById("barbtnimg1").value;
    var headsurl2 = document.getElementById("barbtnimg2").value;
    var headsurl3 = document.getElementById("barbtnimg3").value;
    var headsurl4 = document.getElementById("barbtnimg4").value;
    var headsurl5 = document.getElementById("barbtnimg5").value;
    var headsurl6 = document.getElementById("barbtnimg6").value;
    var headsurl7 = document.getElementById("barbtnimg7").value;
    var celltitle = document.getElementById("barbtntitle").value;
    var barBadgenum = document.getElementById("barbadge").value;
    var elements1 = {img:headsurl1,title:celltitle,badge:barBadgenum};
    var elements2 = {img:headsurl2,title:celltitle,badge:barBadgenum};
    var elements3 = {img:headsurl3,title:celltitle,badge:barBadgenum};
    var elements4 = {img:headsurl4,title:celltitle,badge:barBadgenum};
    var elements5 = {img:headsurl5,title:celltitle,badge:barBadgenum};
    var elements6 = {img:headsurl6,title:celltitle,badge:barBadgenum};
    var elements7 = {img:headsurl7,title:celltitle,badge:barBadgenum};
    var cellarray = new Array();
    cellarray[0] = elements1;
    cellarray[1] = elements2;
    cellarray[2] = elements3;
    cellarray[3] = elements4;
    cellarray[4] = elements5;
    cellarray[5] = elements6;
    cellarray[6] = elements7;

    var obj = api.require('tabBar');
    obj.open({
        bgImg:backgroundimg,
        selectImg:selectedImg,
        selecteIndex:3,
        perScreenBtn:document.getElementById("perScreenBtnNumber").value,
        items:cellarray,
        selecteIndex:document.getElementById("selectedIndexBtn").value
    },function(ret,err){
        api.alert({msg:'点击了第'+ret.index+'个按钮'});
    });
};
function hiddentablebar()
{
    var obj = api.require('tabBar');
    obj.hidden();
};
function showtablebar()
{
    var obj = api.require('tabBar');
    obj.show();
};
function clostablebar()
{
    var obj = api.require('tabBar');
    obj.close();
};
function setSelectedBtn()
{
    var obj = api.require('tabBar');
    obj.setSelect({
        index:document.getElementById("setbarbadgeSelecto").value
    });
};