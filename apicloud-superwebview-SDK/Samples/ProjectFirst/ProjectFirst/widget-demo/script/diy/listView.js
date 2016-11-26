window.isOpen = false;

function openlistview() {
    if(true === window.isOpen){
        api.alert({"title": "提示",
            "msg": "listView已经打开"});
        return;
    }

    window.isOpen = true;

    var titleLocation = document.getElementById("titleLocation").value;
    var subTitleLocation = document.getElementById("subTitleLocation").value;

    var color1 = document.getElementById("color1").value;
    var color2 = document.getElementById("color2").value;
    var color3 = document.getElementById("color3").value;
    var color4 = document.getElementById("color4").value;
    var color1selected = document.getElementById("color1selec").value;
    var color2selected = document.getElementById("color2selec").value;
    var color3selected = document.getElementById("color3selec").value;
    var color4selected = document.getElementById("color4selec").value;
    var title1 = document.getElementById("title1").value;
    var title2 = document.getElementById("title2").value;
    var title3 = document.getElementById("title3").value;
    var title4 = document.getElementById("title4").value;
    var leftbackground = document.getElementById("colorleftBg").value;
    var rightbackground = document.getElementById("colorrightBg").value;

    var titleLsize = document.getElementById("titlelosize").value;
    var subtitleLsize = document.getElementById("subtitlelosize").value;
    var titleLocolor = document.getElementById("titlelcolors").value;
    var subtitleLcolor = document.getElementById("subtitlelcolors").value;

    var headsurl = document.getElementById("headUrl").value;
    var placeholderImgUrl = document.getElementById("holderImgurl").value;
    var elements = {
        placeHoldImg: headsurl,
        title: document.getElementById("titleRefreshBefore").value,
        titleLocation: titleLocation,
        titleSize: titleLsize,
        titleColor: titleLocolor,
        subTitle: document.getElementById("subtitleRefreshBefore").value,
        subLocation: subTitleLocation,
        subTitleSize: subtitleLsize,
        subTitleColor: subtitleLcolor
    }
    var cellarray = new Array();
    for (var i = 0; i < 15; i++) {
        var tempElements = {
            placeHoldImg: headsurl,
            title: document.getElementById("titleRefreshBefore").value + i,
            titleLocation: titleLocation,
            titleSize: titleLsize,
            titleColor: titleLocolor,
            subTitle: document.getElementById("subtitleRefreshBefore").value + i,
            subLocation: subTitleLocation,
            subTitleSize: subtitleLsize,
            subTitleColor: subtitleLcolor
        };

        cellarray[i] = tempElements;
    }
    var obj = api.require('listView');
    obj.open({
        x: document.getElementById("listviewx").value,
        y: document.getElementById("listviewy").value,
        w: document.getElementById("listviewwidth").value,
        h: document.getElementById("listviewheight").value,
        leftBtn: [{
            color: color1,
            selecteColor: color1selected,
            title: title1
        }, {
            color: color2,
            selecteColor: color2selected,
            title: title2
        }],
        leftBg: leftbackground,
        rightBtn: [{
            color: color3,
            selecteColor: color3selected,
            title: title3
        }, {
            color: color4,
            selecteColor: color4selected,
            title: title4
        }],
        rightBg: rightbackground,
        borderColor: document.getElementById("bordercolor").value,
        cellBgColor: document.getElementById("cellsbgcolor").value,
        cellSelectColor: document.getElementById("selectedcellColor").value,
        cellHeight: document.getElementById("cellHeights").value,
        data: cellarray
    }, function(ret, err) {
        api.alert({
            msg: ret.index
        });
    });
};

function openlistviewnot() {
    if(true === window.isOpen){
        api.alert({"title": "提示",
            "msg": "listView已经打开"});
        return;
    }

    window.isOpen = true;
    var titleLocation = document.getElementById("titleLocation").value;
    var subTitleLocation =  document.getElementById("subTitleLocation").value;

    var color1 = document.getElementById("color1").value;
    var color2 = document.getElementById("color2").value;
    var color3 = document.getElementById("color3").value;
    var color4 = document.getElementById("color4").value;
    var title1 = document.getElementById("title1").value;
    var title2 = document.getElementById("title2").value;
    var title3 = document.getElementById("title3").value;
    var title4 = document.getElementById("title4").value;
    var color1selected = document.getElementById("color1selec").value;
    var color2selected = document.getElementById("color2selec").value;
    var color3selected = document.getElementById("color3selec").value;
    var color4selected = document.getElementById("color4selec").value;

    var leftbackground = document.getElementById("colorleftBg").value;
    var rightbackground = document.getElementById("colorrightBg").value;


    //  var titleLocation = document.getElementById("titlelocations").value;
    //  var subtitleLocation = document.getElementById("subtitlelocations").value;
    var titleLsize = document.getElementById("titlelosize").value;
    var subtitleLsize = document.getElementById("subtitlelosize").value;
    var titleLocolor = document.getElementById("titlelcolors").value;
    var subtitleLcolor = document.getElementById("subtitlelcolors").value;

    var placeholderImgUrl = document.getElementById("holderImgurl").value;
    var headsurl = document.getElementById("headUrl").value;

    var elements = {
        placeHoldImg: headsurl,
        title: document.getElementById("titleRefreshBefore").value,
        titleLocation: titleLocation,
        titleSize: titleLsize,
        titleColor: titleLocolor,
        subTitle: document.getElementById("subtitleRefreshBefore").value,
        subLocation: subTitleLocation,
        subTitleSize: subtitleLsize,
        subTitleColor: subtitleLcolor
    }
    var cellarray = new Array();
    for (var i = 0; i < 20; i++) {
        cellarray[i] = elements;
    }
    var obj = api.require('listView');
    obj.open({
        x: document.getElementById("listviewx").value,
        y: document.getElementById("listviewy").value,
        w: document.getElementById("listviewwidth").value,
        h: document.getElementById("listviewheight").value,
        borderColor: document.getElementById("bordercolor").value,
        cellBgColor: document.getElementById("cellsbgcolor").value,
        cellSelectColor: document.getElementById("selectedcellColor").value,
        cellHeight: document.getElementById("cellHeights").value,
        data: cellarray
    }, function(ret, err) {
        api.alert({
            msg: ret.index
        });
    });
};

function openlistviewleft() {

    if(true === window.isOpen){
        api.alert({"title": "提示",
            "msg": "listView已经打开"});
        return;
    }

    window.isOpen = true;
    var titleLocation = document.getElementById("titleLocation").value;
    var subTitleLocation =  document.getElementById("subTitleLocation").value;

    var color1 = document.getElementById("color1").value;
    var color2 = document.getElementById("color2").value;
    var color3 = document.getElementById("color3").value;
    var color4 = document.getElementById("color4").value;
    var title1 = document.getElementById("title1").value;
    var title2 = document.getElementById("title2").value;
    var title3 = document.getElementById("title3").value;
    var title4 = document.getElementById("title4").value;
    var color1selected = document.getElementById("color1selec").value;
    var color2selected = document.getElementById("color2selec").value;
    var color3selected = document.getElementById("color3selec").value;
    var color4selected = document.getElementById("color4selec").value;

    var leftbackground = document.getElementById("colorleftBg").value;
    var rightbackground = document.getElementById("colorrightBg").value;

    var titleLsize = document.getElementById("titlelosize").value;
    var subtitleLsize = document.getElementById("subtitlelosize").value;
    var titleLocolor = document.getElementById("titlelcolors").value;
    var subtitleLcolor = document.getElementById("subtitlelcolors").value;
    var placeholderImgUrl = document.getElementById("holderImgurl").value;
    var headsurl = document.getElementById("headUrl").value;

    var elements = {
        placeHoldImg: headsurl,
        title: document.getElementById("titleRefreshBefore").value,
        titleLocation: titleLocation,
        titleSize: titleLsize,
        titleColor: titleLocolor,
        subTitle: document.getElementById("subtitleRefreshBefore").value,
        subLocation: subTitleLocation,
        subTitleSize: subtitleLsize,
        subTitleColor: subtitleLcolor
    }
    var cellarray = new Array();
    for (var i = 0; i < 20; i++) {
        cellarray[i] = elements;
    }
    var obj = api.require('listView');
    obj.open({
        x: document.getElementById("listviewx").value,
        y: document.getElementById("listviewy").value,
        w: document.getElementById("listviewwidth").value,
        h: document.getElementById("listviewheight").value,
        rightBg: rightbackground,
        rightBtn: [{
            color: color3,
            selecteColor: color3selected,
            title: title3
        }, {
            color: color4,
            selecteColor: color4selected,
            title: title4
        }],
        borderColor: document.getElementById("bordercolor").value,
        cellBgColor: document.getElementById("cellsbgcolor").value,
        cellSelectColor: document.getElementById("selectedcellColor").value,
        cellHeight: document.getElementById("cellHeights").value,
        data: cellarray
    }, function(ret, err) {
        api.alert({
            msg: ret.index
        });
    });
};

function openlistviewright() {

    if(true === window.isOpen){
        api.alert({"title": "提示",
            "msg": "listView已经打开"});
        return;
    }

    window.isOpen = true;
    var titleLocation = document.getElementById("titleLocation").value;
    var subTitleLocation =  document.getElementById("subTitleLocation").value;

    var color1 = document.getElementById("color1").value;
    var color2 = document.getElementById("color2").value;
    var color3 = document.getElementById("color3").value;
    var color4 = document.getElementById("color4").value;
    var color1selected = document.getElementById("color1selec").value;
    var color2selected = document.getElementById("color2selec").value;
    var color3selected = document.getElementById("color3selec").value;
    var color4selected = document.getElementById("color4selec").value;
    var title1 = document.getElementById("title1").value;
    var title2 = document.getElementById("title2").value;
    var title3 = document.getElementById("title3").value;
    var title4 = document.getElementById("title4").value;
    var leftbackground = document.getElementById("colorleftBg").value;
    var rightbackground = document.getElementById("colorrightBg").value;


    //  var titleLocation = document.getElementById("titlelocations").value;
    //  var subtitleLocation = document.getElementById("subtitlelocations").value;
    var titleLsize = document.getElementById("titlelosize").value;
    var subtitleLsize = document.getElementById("subtitlelosize").value;
    var titleLocolor = document.getElementById("titlelcolors").value;
    var subtitleLcolor = document.getElementById("subtitlelcolors").value;
    var placeholderImgUrl = document.getElementById("holderImgurl").value;
    var headsurl = document.getElementById("headUrl").value;

    var elements = {
        placeHoldImg: headsurl,
        title: document.getElementById("titleRefreshBefore").value,
        titleLocation: titleLocation,
        titleSize: titleLsize,
        titleColor: titleLocolor,
        subTitle: document.getElementById("subtitleRefreshBefore").value,
        subLocation: subTitleLocation,
        subTitleSize: subtitleLsize,
        subTitleColor: subtitleLcolor
    }
    var cellarray = new Array();
    for (var i = 0; i < 20; i++) {
        cellarray[i] = elements;
    }
    var obj = api.require('listView');
    obj.open({
        x: document.getElementById("listviewx").value,
        y: document.getElementById("listviewy").value,
        w: document.getElementById("listviewwidth").value,
        h: document.getElementById("listviewheight").value,
        leftBg: leftbackground,
        leftBtn: [{
            color: color1,
            selecteColor: color1selected,
            title: title1
        }, {
            color: color2,
            selecteColor: color2selected,
            title: title2
        }],
        borderColor: document.getElementById("bordercolor").value,
        cellBgColor: document.getElementById("cellsbgcolor").value,
        cellSelectColor: document.getElementById("selectedcellColor").value,
        cellHeight: document.getElementById("cellHeights").value,
        data: cellarray
    }, function(ret, err) {
        api.alert({
            msg: ret.index
        });
    });
};

var reload =	function flashListviweData() {
    if(false === window.isOpen){
        api.alert({"title": "提示",
            "msg": "没有打开的listView"});
        return;
    }

    var titleLocation = document.getElementById("titleLocation").value;
    var subTitleLocation =  document.getElementById("subTitleLocation").value;

    var color1selected = document.getElementById("color1selec").value;
    var color2selected = document.getElementById("color2selec").value;
    var color3selected = document.getElementById("color3selec").value;
    var color4selected = document.getElementById("color4selec").value;

    var leftbackground = document.getElementById("colorleftBg").value;
    var rightbackground = document.getElementById("colorrightBg").value;


    var titleLsize = document.getElementById("titlelosize").value;
    var subtitleLsize = document.getElementById("subtitlelosize").value;
    var titleLocolor = document.getElementById("titlelcolors").value;
    var subtitleLcolor = document.getElementById("subtitlelcolors").value;
    var placeholderImgUrl = document.getElementById("holderImgurl").value;
    var elements = {
        placeHoldImg: placeholderImgUrl,
        title: document.getElementById("titleRefreshAfter").value,
        titleLocation: titleLocation,
        titleSize: titleLsize,
        titleColor: titleLocolor,
        subTitle: document.getElementById("subtitleRefreshAfter").value,
        subLocation: subTitleLocation,
        subTitleSize: subtitleLsize,
        subTitleColor: subtitleLcolor
    }
    var cellarray = new Array();
    for (var i = 0; i < 20; i++) {
        cellarray[i] = elements;
    }

    var obj = api.require('listView');
    obj.reloadData({
        data: cellarray
    });
};

var append =     function appendListviweData() {
    var titleLocation = document.getElementById("titleLocation").value;
    var subTitleLocation =  document.getElementById("subTitleLocation").value;

    var color1selected = document.getElementById("color1selec").value;
    var color2selected = document.getElementById("color2selec").value;
    var color3selected = document.getElementById("color3selec").value;
    var color4selected = document.getElementById("color4selec").value;

    var leftbackground = document.getElementById("colorleftBg").value;
    var rightbackground = document.getElementById("colorrightBg").value;


    var titleLsize = document.getElementById("titlelosize").value;
    var subtitleLsize = document.getElementById("subtitlelosize").value;
    var titleLocolor = document.getElementById("titlelcolors").value;
    var subtitleLcolor = document.getElementById("subtitlelcolors").value;

    var placeholderImgUrl = document.getElementById("holderImgurl").value;
    var elements = {
        placeHoldImg: placeholderImgUrl,
        title: document.getElementById("titleRefreshAfter").value,
        titleLocation: titleLocation,
        titleSize: titleLsize,
        titleColor: titleLocolor,
        subTitle: document.getElementById("subtitleRefreshAfter").value,
        subLocation: subTitleLocation,
        subTitleSize: subtitleLsize,
        subTitleColor: subtitleLcolor
    }
    var cellarray = new Array();
    for (var i = 0; i < 20; i++) {
        cellarray[i] = elements;
    }

    var obj = api.require('listView');
    obj.appendData({
        data: cellarray
    });
};

function setListRefreshHeader(){

    var loadingImgae = 'widget://image/listView_arrow.png';//刷新的小箭头，不可为空
    var bgColor = '#F5F5F5';//下拉刷新的背景颜色 ，有默认值，可为空
    var textColor= '#8E8E8E';//提示语颜色，有默认值，可为空
    var textDown= '下拉可以刷新...';//尚未触发刷新时间的提示语，有默认值，可为空
    var textUp= '松开开始刷新...';//触发刷新事件的提示语，有默认值，可为空
    var showTime= true;//是否显示时间，有默认值，可为空

    var obj = api.require('listView');
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
function setListRefreshFooter(){

    var loadingImgae = 'widget://image/listView_arrow.png';//刷新的小箭头，不可为空
    var bgColor = '#F5F5F5';//下拉刷新的背景颜色 ，有默认值，可为空
    var textColor= '#8E8E8E';//提示语颜色，有默认值，可为空
    var textDown= '上拉可加载更多...';//尚未触发刷新时间的提示语，有默认值，可为空
    var textUp= '松开开始加载...';//触发刷新事件的提示语，有默认值，可为空
    var showTime= true;//是否显示时间，有默认值，可为空

    var obj = api.require('listView');
    obj.setRefreshFooter({
        loadingImg : loadingImgae,
        bgColor:bgColor,
        textColor:textColor,
        textDown:textDown,
        textUp:textUp,
        showTime : showTime
    },function(ret,err){
        append();
    });
}
function closlistview() {
    if(false === window.isOpen){
        api.alert({"title": "提示",
            "msg": "没有打开的listView"});
        return;
    }

    window.isOpen = false;
    var obj = api.require('listView');
    obj.close();
};