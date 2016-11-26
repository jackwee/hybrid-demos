/* 模块简介:
 graph底层通过复杂的逻辑和代码实现了一个贝塞尔曲线。
 可接受用户点击结点事件，
 开发者可自定义背景、线条、坐标系等.
*/

/* 示例简介:
 打开一个贝瑟尔曲线;
 用户可以用手指对曲线进行拉伸,缩放等操作;
 用户缩放,左拉,右拉曲线时,会在对应方向有更多数据拼接过来;
 注意: 此模块,初次进去时,会有部分数据被折叠隐藏,可用手指放大 曲线图 来看到被隐藏的数据.
 */

var graph = api.require('graph');

graph.open({
    "x": 0,
    "y": 0,
    "width": api.frameWidth,
    "height": api.frameHeight / 2.0,
    "bubbleUp":"widget://image/graph/bubble_up.png",
    "bubbleDown":"widget://image/graph/bubble_down.png",
    "data":[
        {
            "time":"12:05",
            "data":"15"
        },
        {
            "time":"13:10",
            "data":"45"
        },
        {
            "time":"14:22",
            "data":"55"
        },
        {
            "time":"15:08",
            "data":"0"
        },
        {
            "time":"16:19",
            "data":"70"
        },
        {
            "time":"17:31",
            "data":"60"
        }],
    fixedOn: api.frameName
},function(ret,err){
    var orient = ret.orient;

    var dataToLeft = [
        {
            time: "06:20",
            data: "50"
        },
        {
            time: "07:00",
            data: "60"
        },
        {
            time: "08:10",
            data: "30"
        },
        {
            time: "09:29",
            data: "80"
        },
        {
            time: "10:20",
            data: "70"
        },
        {
            time: "11:50",
            data: "50"
        }
    ];

    var dataToRight = [
        {
            time: "18:20",
            data: "50"
        },
        {
            time: "19:00",
            data: "50"
        },
        {
            time: "20:30",
            data: "30"
        },
        {
            time: "21:20",
            data: "10"
        },
        {
            time: "22:10",
            data: "70"
        },
        {
            time: "23:00",
            data: "50"
        }
    ];

    if("left" === orient){/* 说明是向右拖动,需要在左侧附加数据. */
        appendToLeft();
    }

    if("right" === orient){/* 说明是向左拖动,需要在右侧附加数据. */
        appendToRight();
    }

    if("narrow" === orient){/* 说明是缩放,需要同时在两侧附加数据. */
        appendToLeft();
        appendToRight();
    }

    function appendToLeft(){
        graph.reload({
            type: 0,
            data: [dataToLeft[Math.floor(Math.random() * dataToLeft.length)]]
        });
    }

    function appendToRight(){
        graph.reload({
            type: 1,
            data: [dataToRight[Math.floor(Math.random() * dataToRight.length)]]
        });
    }
});