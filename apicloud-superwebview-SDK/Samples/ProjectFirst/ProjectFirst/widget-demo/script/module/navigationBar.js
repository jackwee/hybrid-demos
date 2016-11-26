/*模块简介:
 本模块用来以原生方式实现应用中常用的导航条功能.
 配合apicloud 平台的frameGroup功能与 tabBar 模块
 可实现复杂内容的优雅导航和展示.
 */

/*示例简介:
 打开一个导航条;
 使用数组将背景
 点击导航条,显示对应提示;
 */
var navigationBar = api.require("navigationBar");

var y = 44;

if("ios" == api.systemType && parseInt(api.systemVersion) >= 7){
    y = 64;
}

var params = {
    y: y,
    h: 44,
    itemSize: {
        w: api.frameWidth / 4.0
    },
    items: [
        {
            title:"界面",
            bg:"#87C0ED",
            bgSelected: "#325570"
        },
        {
            title:"导航菜单",
            bg:"#87C0ED",
            bgSelected: "#325570"
        },
        {
            title:"功能",
            bg:"#87C0ED",
            bgSelected: "#325570"
        },
        {
            title:"设备",
            bg:"#87C0ED",
            bgSelected: "#325570"
        },
        {
            title:"API对象",
            bg:"#87C0ED",
            bgSelected: "#325570"
        },
        {
            title:"开放SDK",
            bg:"#87C0ED",
            bgSelected: "#325570"
        }
    ]
};

function callback(ret, err){
    var idx = ret["index"];
    var content = params["items"][ret["index"]]["title"];

    api.toast({
        msg: "您选择了: " + content,
        duration: 1000,
        location: "top"
    });
}

navigationBar.open(params, callback);