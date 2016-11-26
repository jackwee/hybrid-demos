/* 模块简介:
 listView封装了一个列表控件，
 可实现一个可左右拖动item的列表视图;
 开发者可根据需求自定义列表的数据源;
 亦可自定义相关字段的样式;
 支持设置下拉刷新和上拉加载更多事件;
 */

/* 示例简介:
 打开一个 列表视图;
 点击列表或从列表左右滑出的按钮会有对应提示;
 下拉可以刷新列表;
 上拉可以加载更多;
 */
var listView = api.require('listView');
listView.open({
    "x": 0,
    "y": 0,
    "w": api.frameWidth,
    "h": api.frameHeight,
    "leftBtn":[
        {
            "color":"#E76B65",
            "selecteColor":"#bc534d",
            "title":"左按钮1"
        },{
            "color":"#52C09A",
            "selecteColor":"#429b7c",
            "title":"左按钮2"
        }],
    "leftBg":"#e9e9e9",
    "rightBtn":[
        {
            "color":"#E76B65",
            "selecteColor":"#bc534d",
            "title":"右按钮1"
        },{
            "color":"#52C09A",
            "selecteColor":"#429b7c",
            "title":"右按钮2"
        }],
    "rightBg":"#e9e9e9",
    "borderColor":"#CCCCCC",
    "cellBgColor":"#F0F5F5",
    "cellSelectColor":"#E9E9E9",
    "data":[
        {
            "placeHoldImg":"widget://image/listView/0.png",
            "title":"标题1",
            "titleLocation":"left",
            "titleSize":"13",
            "titleColor":"#999999",
            "subTitle":"子标题1",
            "subLocation":"left",
            "subTitleSize":"13",
            "subTitleColor":"#999999"
        },
        {
            "placeHoldImg":"widget://image/listView/0.png",
            "title":"标题2",
            "titleLocation":"left",
            "titleSize":"13",
            "titleColor":"#999999",
            "subTitle":"子标题2",
            "subLocation":"left",
            "subTitleSize":"13",
            "subTitleColor":"#999999"
        },
        {
            "placeHoldImg":"widget://image/listView/0.png",
            "title":"标题3",
            "titleLocation":"left",
            "titleSize":"13",
            "titleColor":"#999999",
            "subTitle":"子标题3",
            "subLocation":"left",
            "subTitleSize":"13",
            "subTitleColor":"#999999"
        },
        {
            "placeHoldImg":"widget://image/listView/0.png",
            "title":"标题4",
            "titleLocation":"left",
            "titleSize":"13",
            "titleColor":"#999999",
            "subTitle":"子标题4",
            "subLocation":"left",
            "subTitleSize":"13",
            "subTitleColor":"#999999"
        },
        {
            "placeHoldImg":"widget://image/listView/0.png",
            "title":"标题5",
            "titleLocation":"left",
            "titleSize":"13",
            "titleColor":"#999999",
            "subTitle":"子标题5",
            "subLocation":"left",
            "subTitleSize":"13",
            "subTitleColor":"#999999"
        },
        {
            "placeHoldImg":"widget://image/listView/0.png",
            "title":"标题6",
            "titleLocation":"left",
            "titleSize":"13",
            "titleColor":"#999999",
            "subTitle":"子标题6",
            "subLocation":"left",
            "subTitleSize":"13",
            "subTitleColor":"#999999"
        },
        {
            "placeHoldImg":"widget://image/listView/0.png",
            "title":"标题7",
            "titleLocation":"left",
            "titleSize":"13",
            "titleColor":"#999999",
            "subTitle":"子标题7",
            "subLocation":"left",
            "subTitleSize":"13",
            "subTitleColor":"#999999"
        },
        {
            "placeHoldImg":"widget://image/listView/0.png",
            "title":"标题8",
            "titleLocation":"left",
            "titleSize":"13",
            "titleColor":"#999999",
            "subTitle":"子标题8",
            "subLocation":"left",
            "subTitleSize":"13",
            "subTitleColor":"#999999"
        },
        {
            "placeHoldImg":"widget://image/listView/0.png",
            "title":"标题9",
            "titleLocation":"left",
            "titleSize":"13",
            "titleColor":"#999999",
            "subTitle":"子标题9",
            "subLocation":"left",
            "subTitleSize":"13",
            "subTitleColor":"#999999"
        },
        {
            "placeHoldImg":"widget://image/listView/0.png",
            "title":"标题10",
            "titleLocation":"left",
            "titleSize":"13",
            "titleColor":"#999999",
            "subTitle":"子标题10",
            "subLocation":"left",
            "subTitleSize":"13",
            "subTitleColor":"#999999"
        }],
    fixedOn: api.frameName
}, function(ret, err) {
    var msg;

    if(0 == ret.clickType){
        msg = "您点击了第 " + ret.index +" 个单元格";
    }

    if(1 == ret.clickType){
        msg += " 右边第 " + ret.btnIndex + " 个按钮";
    }

    if(2 == ret.clickType){
        msg += " 左边第 " + ret.btnIndex + " 个按钮";
    }

    api.toast({
        msg: msg,
        duration: 1000,
        location: "top"
    });
});

/* 设置下拉刷新. */
listView.setRefreshHeader({
    bgColor: "#f5f5f5",
    loadingImg : "widget://image/listView/arrow.png"
},function(ret,err){
    /* 触发加载事件, 此处应使用使用 reloadData 方法.*/
    listView.reloadData({
        data:[
            {
                "placeHoldImg":"widget://image/listView/1.png",
                "title":"新标题1",
                "subTitle":"新子标题1"
            },
            {
                "placeHoldImg":"widget://image/listView/1.png",
                "title":"新标题2",
                "subTitle":"新子标题2"
            },
            {
                "placeHoldImg":"widget://image/listView/1.png",
                "title":"新标题3",
                "subTitle":"新子标题3"
            },
            {
                "placeHoldImg":"widget://image/listView/1.png",
                "title":"新标题4",
                "subTitle":"新子标题4"
            },
            {
                "placeHoldImg":"widget://image/listView/1.png",
                "title":"新标题5",
                "subTitle":"新子标题5"
            },
            {
                "placeHoldImg":"widget://image/listView/1.png",
                "title":"新标题6",
                "subTitle":"新子标题6"
            },
            {
                "placeHoldImg":"widget://image/listView/1.png",
                "title":"新标题7",
                "subTitle":"新子标题7"
            },
            {
                "placeHoldImg":"widget://image/listView/1.png",
                "title":"新标题8",
                "subTitle":"新子标题8"
            },
            {
                "placeHoldImg":"widget://image/listView/1.png",
                "title":"新标题9",
                "subTitle":"新子标题9"
            },
            {
                "placeHoldImg":"widget://image/listView/1.png",
                "title":"新标题10",
                "subTitle":"新子标题10"
            }]
    });

});

/* 设置上拉加载更多. */
listView.setRefreshFooter({
    bgColor: "#f5f5f5",
    loadingImg : "widget://image/listView/arrow.png"
},function(ret,err){
    /* 触发加载事件, 此处应使用使用 appendData 方法.*/
    listView.appendData({
        data:[
            {
                "placeHoldImg":"widget://image/listView/1.png",
                "title":"新标题1",
                "subTitle":"新子标题1"
            },
            {
                "placeHoldImg":"widget://image/listView/1.png",
                "title":"新标题2",
                "subTitle":"新子标题2"
            },
            {
                "placeHoldImg":"widget://image/listView/1.png",
                "title":"新标题3",
                "subTitle":"新子标题3"
            },
            {
                "placeHoldImg":"widget://image/listView/1.png",
                "title":"新标题4",
                "subTitle":"新子标题4"
            },
            {
                "placeHoldImg":"widget://image/listView/1.png",
                "title":"新标题5",
                "subTitle":"新子标题5"
            },
            {
                "placeHoldImg":"widget://image/listView/1.png",
                "title":"新标题6",
                "subTitle":"新子标题6"
            },
            {
                "placeHoldImg":"widget://image/listView/1.png",
                "title":"新标题7",
                "subTitle":"新子标题7"
            },
            {
                "placeHoldImg":"widget://image/listView/1.png",
                "title":"新标题8",
                "subTitle":"新子标题8"
            },
            {
                "placeHoldImg":"widget://image/listView/1.png",
                "title":"新标题9",
                "subTitle":"新子标题9"
            },
            {
                "placeHoldImg":"widget://image/listView/1.png",
                "title":"新标题10",
                "subTitle":"新子标题10"
            }]
    });
});