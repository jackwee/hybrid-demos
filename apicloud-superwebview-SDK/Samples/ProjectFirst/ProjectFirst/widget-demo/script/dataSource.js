! function () {
    /* 以下信息,应该存储到单独的 js 文件或者数据库中. */
    /* 模块分类信息 */
    var sorts = [
        {
            id: 0,
            name: "ui",
            brief: "界面"
        },
        {
            id: 1,
            name: "navMenu",
            brief: "导航菜单"
        },
        {
            id: 2,
            name: "function",
            brief: "功能"
        },
        {
            id: 3,
            name: "device",
            brief: "设备"
        },
        {
            id: 4,
            name: "api",
            brief: "API对象"
        },
        {
            id: 5,
            name: "other",
            brief: "开放SDK"
        }
    ];

    /* 模块基础信息 */
    var modules = [
        {
            id: 0,
            name: "multiSelector",
            brief: "自定义数据源的多项选择器",
            sortId: 0,
            versionID: 0,
            autoShow: false
        },
        {
            id: 1,
            name: "shakeView",
            brief: "支持自定义摇一摇效果页",
            sortId: 0,
            versionID: 0,
            autoShow: true
        },
        {
            id: 2,
            name: "listContact",
            brief: "联系人列表，可自定义联系人数据源",
            sortId: 0,
            versionID: 0,
            autoShow: true,
            slidBackEnabled: false
        },
        {
            id: 3,
            name: "citySelector",
            brief: "选择器的形式弹出全国个地区城市列表",
            sortId: 0,
            versionID: 0,
            autoShow: false
        },
//        {
//            id: 4,
//            name: "graph",
//            brief: "贝塞尔曲线，点击结点可返回事件",
//            sortId: 0,
//            versionID: 0,
//            autoShow: true,
//            slidBackEnabled: false
//        },
        {
            id: 5,
            name: "scrollPicture",
            brief: "图片自动滚动联播，支持http协议，本地缓存功能",
            sortId: 0,
            versionID: 0,
            autoShow: true
        },
        {
            id: 6,
            name: "searchBar",
            brief: "可自定义的搜索界面",
            sortId: 0,
            versionID: 0,
            autoShow: false
        },
        {
            id: 7,
            name: "timeSelector",
            brief: "上下滚轮效果的时间选择器",
            sortId: 0,
            versionID: 0,
            autoShow: true
        },
        {
            id: 8,
            name: "periodSelector",
            brief: "上下滚轮效果的时段选择器",
            sortId: 0,
            versionID: 0,
            autoShow: true
        },
        {
            id: 9,
            name: "arcProgress",
            brief: "圆形、扇形、月牙形进度条",
            sortId: 0,
            versionID: 0,
            autoShow: false
        },
        {
            id: 10,
            name: "barChart",
            brief: "可以点击查看数据的柱状图",
            sortId: 0,
            versionID: 0,
            autoShow: true
        },
        {
            id: 11,
            name: "calendar",
            brief: "特殊日期标记、查看日历模块",
            sortId: 0,
            versionID: 0,
            autoShow: true
        },
        {
            id: 12,
            name: "cityList",
            brief: "可自定义数据源的城市列表",
            sortId: 0,
            versionID: 0,
            autoShow: true
        },
//        {
//            id: 13,
//            name: "lineChart",
//            brief: "折线图表，支持显示多条k线",
//            sortId: 0,
//            versionID: 0,
//            autoShow: true,
//            slidBackEnabled: false
//        },
        {
            id: 14,
            name: "listView",
            brief: "可配置item侧滑方式的文件列表",
            sortId: 0,
            versionID: 0,
            autoShow: true,
            slidBackEnabled: false
        },
        {
            id: 15,
            name: "coverFlow",
            brief: "将多个封面以3D界面形式展示(立体倒影效果)",
            sortId: 0,
            versionID: 0,
            autoShow: true,
            slidBackEnabled: false
        },
        {
            id: 16,
            name: "panorama",
            brief: "球状体全景图片展示",
            sortId: 0,
            versionID: 0,
            autoShow: true
        },
        {
            id: 17,
            name: "personalCenter",
            brief: "个人中心用户信息样式",
            sortId: 0,
            versionID: 0,
            autoShow: true
        },
//        {
//            id: 18,
//            name: "pieChart",
//            brief: "可随手势旋转的饼形图",
//            sortId: 0,
//            versionID: 0,
//            autoShow: true
//        },
        {
            id: 19,
            name: "slider",
            brief: "可以显示数值气泡的滑杆，可自定义大小值、设置当前值",
            sortId: 0,
            versionID: 0,
            autoShow: true,
            slidBackEnabled: false
        },
        {
            id: 20,
            name: "aliPay",
            brief: "支付宝支付",
            sortId: 5,
            versionID: 0,
            autoShow: false
        },
        {
            id: 21,
            name: "baiduLocation",
            brief: "百度定位功能",
            sortId: 5,
            versionID: 0,
            autoShow: false
        },
        {
            id: 22,
            name: "baiduMap",
            brief: "百度地图模块,封装了百度地图的sdk",
            sortId: 5,
            versionID: 0,
            autoShow: false,
            slidBackEnabled: false
        },
        {
            id: 23,
            name: "qq",
            brief: "QQ授权登录及分享内容到QQ",
            sortId: 5,
            versionID: 0,
            autoShow: false
        },
        {
            id: 24,
            name: "sinaWeiBo",
            brief: "新浪微博授权登录及分享内容到微博",
            sortId: 5,
            versionID: 0,
            autoShow: false
        },
        {
            id: 25,
            name: "weiXin",
            brief: "微信分享接口，微信支付",
            sortId: 5,
            versionID: 0,
            autoShow: false
        },
        {
            id: 26,
            name: "touchID",
            brief: "iPhone指纹身份验证",
            sortId: 3,
            versionID: 3,
            autoShow: false
        },
        {
            id: 27,
            name: "bluetooth",
            brief: "通过蓝牙传输文字串，文件，图片等数据",
            sortId: 3,
            versionID: 0,
            autoShow: false
        },
        {
            id: 28,
            name: "trans",
            brief: "把xml文件解析成json",
            sortId: 2,
            versionID: 0,
            autoShow: false
        },
        {
            id: 37,
            name: "mail",
            brief: "发送邮件功能，支持附件",
            sortId: 4,
            versionID: 0,
            autoShow: false
        },
        {
            id: 38,
            name: "tel",
            brief: "拨打电话及发送短信功能",
            sortId: 4,
            versionID: 0,
            autoShow: false
        },
        {
            id: 39,
            name: "ajax",
            brief: "跨域异步请求",
            sortId: 4,
            versionID: 0,
            autoShow: false
        },
        {
            id: 40,
            name: "getPicture",
            brief: "从系统相册、相机获取图片",
            sortId: 4,
            versionID: 0,
            autoShow: false
        },
        {
            id: 41,
            name: "setPrefs",
            brief: "设置偏好数据",
            sortId: 4,
            versionID: 0,
            autoShow: false
        },
        {
            id: 42,
            name: "event",
            brief: "事件监听，如网络、电量、操作等",
            sortId: 4,
            versionID: 0,
            autoShow: false
        },
        {
            id: 44,
            name: "sysInfo",
            brief: "获取设备系统信息",
            sortId: 4,
            versionID: 0,
            autoShow: false
        },
        {
            id: 45,
            name: "contact",
            brief: "对联系人进行增删查改等操作的功能",
            sortId: 3,
            versionID: 0,
            autoShow: false
        },
        {
            id: 46,
            name: "db",
            brief: "数据库操作对象",
            sortId: 2,
            versionID: 0,
            autoShow: false
        },
        {
            id: 47,
            name: "downloadManager",
            brief: "下载管理功能",
            sortId: 2,
            versionID: 0,
            autoShow: false
        },
        {
            id: 48,
            name: "fileBrowser",
            brief: "本地文件浏览，可返回文件路径",
            sortId: 2,
            versionID: 0,
            autoShow: false
        },
        {
            id: 49,
            name: "fs",
            brief: "文件系统，可创建、删除、复制、移动、修改等",
            sortId: 2,
            versionID: 0,
            autoShow: false
        },
        {
            id: 50,
            name: "imageBrowser",
            brief: "具有相册效果的图片查看器",
            sortId: 2,
            versionID: 0,
            autoShow: false
        },
        {
            id: 51,
            name: "scanner",
            brief: "二维码扫描器，支持生成条码/二维码",
            sortId: 2,
            versionID: 0,
            autoShow: false
        },
        {
            id: 52,
            name: "zip",
            brief: "压缩及解压缩功能支持压缩多个文件",
            sortId: 2,
            versionID: 0,
            autoShow: true
        },
        {
            id: 53,
            name: "cardReader",
            brief: "卡片阅读功能",
            sortId: 2,
            versionID: 0,
            autoShow: false
        },
        {
            id: 54,
            name: "stackMenu",
            brief: "stack 菜单",
            sortId: 1,
            versionID: 0,
            autoShow: false
        },
//        {
//            id: 55,
//            name: "scrollRotation",
//            brief: "图片旋转滚动联播器",
//            sortId: 1,
//            versionID: 0,
//            autoShow: true
//        },
        {
            id: 56,
            name: "circularMenu",
            brief: "转盘菜单，可自定义按钮",
            sortId: 1,
            versionID: 0,
            autoShow: true,
            slidBackEnabled: false
        },
        {
            id: 57,
            name: "tabBarMenu",
            brief: "底部导航菜单",
            sortId: 1,
            versionID: 0,
            autoShow: false
        },
        {
            id: 58,
            name: "chatBox",
            brief: "聊天表情输入框，可自定义表情集，选择相册事件",
            sortId: 0,
            versionID: 0,
            autoShow: false
        },
        {
            id: 59,
            name: "loadingLabel",
            brief: "加载标签，顶部栏加载效果，可开启暂停",
            sortId: 0,
            versionID: 0,
            autoShow: false
        },
        {
            id: 60,
            name: "bubbleMenu",
            brief: "气泡菜单，浮动菜单多用于内容操作的功能",
            sortId: 1,
            versionID: 0,
            autoShow: false
        },
        {
            id: 61,
            name: "sideMenu",
            brief: "边框菜单，屏幕左右俩侧弹动菜单",
            sortId: 1,
            versionID: 0,
            autoShow: false
        },
        {
            id: 62,
            name: "pullMenu",
            brief: "可随手指拖动上下拉动的菜单，可自定义按钮",
            sortId: 1,
            versionID: 0,
            autoShow: false
        },
//        {
//            id: 63,
//            name: "navigationMenu",
//            brief: "导航条按钮，可显示隐藏",
//            sortId: 1,
//            versionID: 0,
//            autoShow: true
//        },
        {
            id: 64,
            name: "actionButton",
            brief: "多屏按钮功能，支持滑动切换",
            sortId: 1,
            versionID: 0,
            autoShow: false
        },
        {
            id: 65,
            name: "arcMenu",
            brief: "动画菜单，可自定义子菜单的位置",
            sortId: 1,
            versionID: 0,
            autoShow: true
        },
        {
            id: 66,
            name: "inputField",
            brief: "文字输入框",
            sortId: 0,
            versionID: 0,
            autoShow: false
        },
        {
            id: 67,
            name: "tabBar",
            brief: "支持滑动的底部标签栏",
            sortId: 1,
            versionID: 0,
            autoShow: false
        },
        {
            id: 68,
            name: "toast",
            brief: "自动消失的提示框",
            sortId: 4,
            versionID: 0,
            autoShow: false
        },
        {
            id: 69,
            name: "progress",
            brief: "进度提示，可设置动画类型",
            sortId: 4,
            versionID: 0,
            autoShow: false
        },
        {
            id: 70,
            name: "dialog",
            brief: "多种弹出对话框样式",
            sortId: 4,
            versionID: 0,
            autoShow: false
        },
        {
            id: 79,
            name: "netAudio",
            brief: "网络音频播放器，支持网络音频播放",
            sortId: 2,
            versionID: 0,
            autoShow: false
        },
        {
            id: 80,
            name: "speechRecognizer",
            brief: "语音识别功能，支持朗读",
            sortId: 5,
            versionID: 0,
            autoShow: false
        },
        {
            id: 81,
            name: "medias",
            brief: "音频录制及播放及本地视频和网络视频的播放",
            sortId: 4,
            versionID: 0,
            autoShow: false
        },
        {
            id: 82,
            name: "bookReader",
            brief: "具有翻页效果的文本阅读器",
            sortId: 2,
            versionID: 0,
            autoShow: true
        },
        {
            id: 83,
            name: "navigationBar",
            brief: "可自定义排版、拖动的标题导航条",
            sortId: 1,
            versionID: 0,
            autoShow: true
        },
        {
            id: 84,
            name: "pdfReader",
            brief: "PDF阅读器",
            sortId: 2,
            versionID: 0,
            autoShow: false
        },
        {
            id: 85,
            name: "docReader",
            brief: "文档阅读器，Android需第三方软件支持",
            sortId: 2,
            versionID: 0,
            autoShow: false
        }
    ];

    /* 版本信息. */
    var versions = [
        {
            id: 0,
            number: "1.0.0"
        }
    ];

    /* 记录更新的信息. */
    var update = [];

    /* 记录bug 信息. */
    var bug = [];

    // ---------------------------------------------------

    window.dataSource = {
        sorts: sorts,
        modules: modules,
        versions: versions,
        update: update,
        bug: bug
    };
}()