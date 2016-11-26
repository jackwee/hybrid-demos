var array = new Array();
array = [{
    "time": "12:05",
    "data": "15",
    "isonline": "1"
},
    {
        "time": "13:10",
        "data": "45",
        "isonline": "1"
    },
    {
        "time": "14:22",
        "data": "55",
        "isonline": "1"
    },
    {
        "time": "15:08",
        "data": "0",
        "isonline": "1"
    },
    {
        "time": "16:19",
        "data": "70",
        "isonline": "1"
    },
    {
        "time": "17:31",
        "data": "45",
        "isonline": "0"
    },
    {
        "time": "12:05",
        "data": "60",
        "isonline": "1"
    },
    {
        "time": "13:10",
        "data": "35",
        "isonline": "1"
    },
    {
        "time": "14:22",
        "data": "85",
        "isonline": "1"
    },
    {
        "time": "15:08",
        "data": "20",
        "isonline": "0"
    },
    {
        "time": "16:19",
        "data": "70",
        "isonline": "1"
    },
    {
        "time": "17:31",
        "data": "47",
        "isonline": "1"
    },
    {
        "time": "17:31",
        "data": "45",
        "isonline": "1"
    }];
function open(){
    var graph = api.require('graph');
    graph.open({
        x: document.getElementById("x").value,
        y:document.getElementById("y").value,
        width:document.getElementById("w").value,
        height:document.getElementById("h").value,
        bgColor:document.getElementById("bgColor").value,
        coordColor:document.getElementById("coordColor").value,
        markColor:document.getElementById("markColor").value,
        lineColor:document.getElementById("lineColor").value,
        bubbleUp:document.getElementById("bubbleUp").value,
        bubbleDown:document.getElementById("bubbleDown").value,
        data:array
    },function(ret,err){
        document.getElementById("orient").value = ret.orient;
    });
};
function reload(){
    var graph = api.require('graph');
    var array = new Array();
    array = [{
        "time": "12:05",
        "data": "35",
        "isonline": "1"
    },
        {
            "time": "13:10",
            "data": "45",
            "isonline": "1"
        },
        {
            "time": "34:22",
            "data": "55",
            "isonline": "1"
        },
        {
            "time": "45:08",
            "data": "60",
            "isonline": "1"
        },
        {
            "time": "16:19",
            "data": "35",
            "isonline": "1"
        },
        {
            "time": "17:31",
            "data": "5",
            "isonline": "0"
        },
        {
            "time": "12:05",
            "data": "15",
            "isonline": "1"
        },
        {
            "time": "13:10",
            "data": "45",
            "isonline": "1"
        },
        {
            "time": "14:22",
            "data": "65",
            "isonline": "1"
        },
        {
            "time": "15:08",
            "data": "80",
            "isonline": "0"
        },
        {
            "time": "16:19",
            "data": "70",
            "isonline": "1"
        },
        {
            "time": "17:31",
            "data": "47",
            "isonline": "1"
        },
        {
            "time": "17:31",
            "data": "19",
            "isonline": "1"
        }];
    graph.reload({
        type:document.getElementById("reloadType").value,
        data:array
    });
};
function close(){
    var graph = api.require('graph');
    graph.close();
};

function show(){
    var graph = api.require('graph');
    graph.show();
};

function hide(){
    var graph = api.require('graph');
    graph.hide();
};