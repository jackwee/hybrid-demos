window.isOpen = false;

function openweixinContactsleft() {
    if(true === window.isOpen){
        api.alert({"title": "提示",
            "msg": "listContacts已经打开"});
        return;
    }

    window.isOpen = true;
    var titleLocation = document.getElementById("titleLocation").value;

    var leftbackground = document.getElementById("colorleftBg").value;
    var rightbackground = document.getElementById("colorrightBg").value;


    var titleLsize = document.getElementById("titlelosize").value;
    var titleLocolor = document.getElementById("titlelcolors").value;

    var placeholderImgUrl = document.getElementById("holderImgurl").value;
    var elements = {
        placeholderImg: placeholderImgUrl,
        img:document.getElementById("flashBefor").value,
        title: document.getElementById("titleRefreshBefore").value,
        titleLocation: titleLocation,
        titleSize: titleLsize,
        titleColor: titleLocolor
    }
    var cellarrayCont = new Array();
    for (var i=0;i<5;i++){
        cellarrayCont[i] = elements;
    }
    var cellarrayCommon = new Array();
    for (var i=0;i<3;i++){
        cellarrayCommon[i] = elements;
    }
    var cellarray = {
        common:cellarrayCommon,
        A:cellarrayCont,
        B:cellarrayCont,
        C:cellarrayCont
    }

    var color3 = document.getElementById("color3").value;
    var color3selected = document.getElementById("color3selec").value;
    var title3 = document.getElementById("title3").value;

    var obj = api.require('listContact');
    obj.open({
        x: document.getElementById("weixinContactsx").value,
        y: document.getElementById("weixinContactsy").value,
        w: document.getElementById("weixinContactswidth").value,
        h: document.getElementById("weixinContactsheight").value,
        bgColor:document.getElementById("tableBGcolor").value,
        groupTitle:{
            color:document.getElementById("groupTitleColor").value,
            size:document.getElementById("groupTitleSize").value
        },
        rightBg: rightbackground,
        rightBtn: [{
            color: color3,
            selectColor: color3selected,
            title: title3
        }],
        indicator:{color:document.getElementById("indictorColor").value},
        borderColor: document.getElementById("bordercolor").value,
        cellBgColor: document.getElementById("cellsbgcolor").value,
        cellSelectColor: document.getElementById("selectedcellColor").value,
        cellHeight: document.getElementById("cellHeights").value,
        data: cellarray
    }, function(ret, err) {
        api.alert({
            msg: ret.section+"*"+ret.index
        });
    });
};

var reload =	function flashListviweData() {
    if(false === window.isOpen){
        api.alert({"title": "提示",
            "msg": "没有打开的listContacts"});
        return;
    }

    var titleLocation = document.getElementById("titleLocation").value;
    var titleLsize = document.getElementById("titlelosize").value;
    var titleLocolor = document.getElementById("titlelcolors").value;

    var placeholderImgUrl = document.getElementById("holderImgurl").value;
    var elements = {
        placeholderImg: placeholderImgUrl,
        img: document.getElementById("flashAfter").value,
        title: document.getElementById("titleRefreshAfter").value,
        titleSize: titleLsize,
        titleLocation: titleLocation,
        titleColor: titleLocolor
    }
    var cellarrayCommon = new Array();
    for (var i=0;i<5;i++){
        cellarrayCommon[i] = elements;
    }
    var cellarray = {
        common:cellarrayCommon,
        A:cellarrayCommon,
        B:cellarrayCommon,
        D:cellarrayCommon,
        E:cellarrayCommon
    }

    var obj = api.require('listContact');
    obj.reloadData({
        data: cellarray
    });
};

function setListRefreshHeader(){

    var loadingImgae = document.getElementById("flesshArrow").value;//刷新的小箭头，不可为空
    var bgColor = document.getElementById("fleshBgColor").value;//下拉刷新的背景颜色 ，有默认值，可为空
    var textColor= document.getElementById("fleshTip").value;//提示语颜色，有默认值，可为空
    var textDown= document.getElementById("refleshTips").value;//尚未触发刷新时间的提示语，有默认值，可为空
    var textUp= document.getElementById("refleshTipAfter").value;//触发刷新事件的提示语，有默认值，可为空
    var showTime= document.getElementById("showTimeis").value;//是否显示时间，有默认值，可为空

    var obj = api.require('listContact');
    obj.setRefreshHeader({
        loadingImg : loadingImgae,
        bgColor:bgColor,
        textColor:textColor,
        textDown:textDown,
        textUp:textUp,
        showTime : showTime
    },function(ret,err){
        reload();
    });
}
function closweixinContacts() {
    if(false === window.isOpen){
        api.alert({"title": "提示",
            "msg": "没有打开的listContacts"});
        return;
    }

    window.isOpen = false;
    var obj = api.require('listContact');
    obj.close();
};

function showweixinContacts() {
    var obj = api.require('listContact');
    obj.show();
};

function hideweixinContacts() {
    var obj = api.require('listContact');
    obj.hide();
};