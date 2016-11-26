/* 模块简介:
 tabBarMenu生成一个应用底部导航菜单模块;
 类似qq空间的底部导航菜单;
 开发者可自定义菜单各种样式.
*/

/*示例简介:
 打开一个底部导航菜单;
 点击各项,可显示对应内容;
 点击主按钮,会出现遮罩层菜单;
 点击菜单, 可显示对应内容;
 */
var tabBarMenu = api.require("tabBarMenu");

var theme = "simple"; /* 可以支持自定义主题,示例内置两种风格主题:simple,night.*/

var barItems = [ /* 标签栏各按钮的信息. */
    {
        title: "动态",          /* 标题.*/
        bgImg: "widget://image/tabBarMenu/" + theme + "/tabbar_icon_auth.png",          /* 背景图片路径. */
        bgImgClick: "widget://image/tabBarMenu/" + theme + "/tabbar_icon_auth_click.png"      /* 被点击时的背景图片路径.*/
    },
    {
        title: "与我有关",          /* 标题. */
        bgImg: "widget://image/tabBarMenu/" + theme + "/tabbar_icon_at.png",          /* 背景图片路径. */
        bgImgClick: "widget://image/tabBarMenu/" + theme + "/tabbar_icon_at_click.png"     /* 被点击时的背景图片路径.*/
    },
    {
        title: "",          /* 标题.*/
        bgImg: "widget://image/tabBarMenu/" + theme + "/tabbar_btn.png",          /* 背景图片路径. */
        bgImgClick: "widget://image/tabBarMenu/" + theme + "/tabbar_btn_click.png"      /* 被点击时的背景图片路径. */
    },
    {
        title: "玩吧",          /* 标题.*/
        bgImg: "widget://image/tabBarMenu/" + theme + "/tabbar_icon_more.png",          /* 背景图片路径. */
        bgImgClick: "widget://image/tabBarMenu/" + theme + "/tabbar_icon_more_click.png"      /* 被点击时的背景图片路径. */
    },
    {
        title: "空间",          /* 标题.*/
        bgImg: "widget://image/tabBarMenu/" + theme + "/tabbar_icon_space.png",          /* 背景图片路径. */
        bgImgClick: "widget://image/tabBarMenu/" + theme + "/tabbar_icon_space_click.png"      /* 被点击后的背景图片路径.*/
    }
];

var menuItems = [ /* 菜单栏各按钮的信息.*/
    {
        title: "说说",      /*标题.*/
        bgImg: "widget://image/tabBarMenu/" + theme + "/tabbar_btn_popup_talk.png",      /* 背景图片.*/
        bgImgClick: "widget://image/tabBarMenu/" + theme + "/tabbar_btn_popup_talk_click.png"  /* 被点击时的背景图片.*/
    },
    {
        title: "照片",      /*标题.*/
        bgImg: "widget://image/tabBarMenu/" + theme + "/tabbar_btn_popup_transferphotos.png",      /* 背景图片.*/
        bgImgClick: "widget://image/tabBarMenu/" + theme + "/tabbar_btn_popup_transferphotos_click.png"  /* 被点击时的背景图片.*/
    },
    {
        title: "水印相机",      /*标题.*/
        bgImg: "widget://image/tabBarMenu/" + theme + "/tabbar_btn_popup_watermarkcamera.png",      /* 背景图片.*/
        bgImgClick: "widget://image/tabBarMenu/" + theme + "/tabbar_btn_popup_watermarkcamera_click.png"  /* 被点击时的背景图片.*/
    },
    {
        title: "视频",      /*标题.*/
        bgImg: "widget://image/tabBarMenu/" + theme + "/tabbar_btn_popup_video.png",      /* 背景图片.*/
        bgImgClick: "widget://image/tabBarMenu/" + theme + "/tabbar_btn_popup_video_click.png"  /* 被点击时的背景图片.*/
    },
    {
        title: "签到",      /*标题.*/
        bgImg: "widget://image/tabBarMenu/" + theme + "/tabbar_btn_popup_registration.png",      /* 背景图片.*/
        bgImgClick: "widget://image/tabBarMenu/" + theme + "/tabbar_btn_popup_registration_click.png"  /* 被点击时的背景图片.*/

    },
    {
        title: "连拍",      /*标题.*/
        bgImg: "widget://image/tabBarMenu/" + theme + "/tabbar_btn_popup_continuousshooting.png",      /* 背景图片.*/
        bgImgClick: "widget://image/tabBarMenu/" + theme + "/tabbar_btn_popup_continuousshooting_click.png"  /* 被点击时的背景图片.*/
    },
    {
        title: "日志",      /*标题.*/
        bgImg: "widget://image/tabBarMenu/" + theme + "/tabbar_btn_popup_journal.png",      /* 背景图片.*/
        bgImgClick: "widget://image/tabBarMenu/" + theme + "/tabbar_btn_popup_journal_click.png"  /* 被点击时的背景图片.*/
    },
    {
        title: "二维码",      /*标题.*/
        bgImg: "widget://image/tabBarMenu/" + theme + "/tabbar_btn_popup_2dbarcode.png",      /* 背景图片.*/
        bgImgClick: "widget://image/tabBarMenu/" + theme + "/tabbar_btn_popup_2dbarcode_click.png"  /* 被点击时的背景图片.*/
    },
    {
        title: "语音相机",      /*标题.*/
        bgImg: "widget://image/tabBarMenu/" + theme + "/tabbar_btn_popup_videocamera.png",      /* 背景图片.*/
        bgImgClick: "widget://image/tabBarMenu/" + theme + "/tabbar_btn_popup_videocamera_click.png"  /* 被点击时的背景图片.*/
    },
    {
        title: "位置",      /*标题.*/
        bgImg: "widget://image/tabBarMenu/" + theme + "/tabbar_btn_popup_place.png",      /* 背景图片.*/
        bgImgClick: "widget://image/tabBarMenu/" + theme + "/tabbar_btn_popup_place_click.png"  /* 被点击时的背景图片.*/
    }
];

tabBarMenu.open({ /* 打开标签菜单. */
    defaultBarSelect: 1, /* 默认选中的标签栏按钮*/
    autoLayout: false, /*是否自动调整当前页面网页视图的位置.*/
    barConfig: { /* 标签栏通用配置信息.*/
        bgImg: "widget://image/tabBarMenu/" + theme + "/tabbar_bg.png"    /* 背景图片路径. */
    },
    barItemConfig: { /* 标签栏按钮的通用配置信息. */
        titleColor: "#ffffff",      /* 文本颜色, 格式为#fff、#ffffff、rgba(r,g,b,a)等 */
        titleSelectColor: "#ffffff",    /*  选中状态时,按钮文本的颜色, 默认与titleColor相同.*/
        fontSize: 11.0,        /*文字大小.*/
        textMarginTop: 41.0,   /* 文本距离按钮上边界的距离. */
        primaryItem: 2      /* 激活弹出菜单的标签栏按钮的下标. */
    },
    barItems: barItems,
    menuConfig: { /*菜单栏通用配置.*/
        coverBgColor: "#000000",     /* 遮罩的背景色, 格式为#fff、#ffffff、rgba(r,g,b,a)等.*/
        coverAlpha: 0.8,       /* 遮罩的透明度, 取值范围0.0~1.0. */
        rows: 4        /* 单页菜单每行显示的按钮数. */
    },
    menuItemConfig: { /* 菜单栏各按钮通用配置信息. */
        titleColor: "#ffffff",     /* 文本颜色, 格式为#fff、#ffffff、rgba(r,g,b,a)等.*/
        titleSelectColor:"#ffffff",	/*  选中状态时,按钮文本的颜色, 默认与titleColor相同. */
        fontSize: 11.0,       /* 字体大小.*/
        textMarginTop: 90.0   /* 文本距离按钮上边界的距离. */
    },
    menuItems: menuItems
}, function(ret, err){ /* 点击标签栏或菜单栏按钮时的回调方法.点击激活菜单栏的标签栏按钮时不会触发此方法.*/
    if(ret){
        var item = ret.item;

        var btnItem;

        if("menu" == item.type){
            tabBarMenu.hideMenu(); /* 隐藏弹出菜单.*/

            btnItem = menuItems[item.index];
        }

        if("menu" != item.type){
            btnItem = barItems[item.index];
        }


        api.toast({
            msg: "您点击了 " + item.type + " 上的 " + btnItem.title + " 按钮!",
            duration: 1000,
            location: "top"
        });
    }
});