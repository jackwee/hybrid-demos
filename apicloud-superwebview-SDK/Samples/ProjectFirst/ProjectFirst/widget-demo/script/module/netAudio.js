/*模块简介:
 netAudio封装了对网络音频流播放的接口，
 使用本模块可以实现对服务器端音频流资源的
 播放、暂停、继续、停止、设置播放位置
 等相关操作.
 */

/*示例简介:
 启动网络流媒体播放模块;
 用户可以 播放, 暂停, 停止, 调节声音, 快进, 快退等;
 使用 navigationBar 进行功能导航;
 */

/* 一个简单的封装. */
/* netAudio 模块. */

var APINetAudio = {
    /*
     * 构造器
     *
     * src           string   音频资源地址.
     * autoplay      bool     是否自动播放.默认 true.
     *
     * */
    "createNew": function(src, autoplay){
        /* 将作为实例对象返回的对象. */
        var netAudio = {};

        // ---------------------------------------

        /* 属性 */

        /* 设置或返回对应的 API 模块. */
        Object.defineProperty(netAudio, "apiModule", {
            get: function() {
                return apiModule;
            },
            set: function(val) {
                apiModule = val;
            },
            enumerable: false,
            configurable: false
        });

        /* 设置属性的 setter 和 getter方法. */

        /* 设置或返回音频当前来源. */
        Object.defineProperty(netAudio, "src", {
            get: function() {
                return src;
            },
            set: function(val) {
                src = val;

                if("" == src){
                    return;
                }

                netAudio.apiModule.play({
                    path: src
                }, function(ret, err){
                    netAudio.currentTime = ret.current;
                    netAudio.duration = ret.duration;
                });
            },
            enumerable: true,
            configurable: true
        });

        /* 设置或返回是否自动播放. */
        Object.defineProperty(netAudio, "autoplay", {
            get: function() {
                return autoplay;
            },
            set: function(val) {
                autoplay = val;
            },
            enumerable: true,
            configurable: true
        });

        /* 设置或返回当前播放位置（以毫秒计）. */
        Object.defineProperty(netAudio, "currentTime", {
            get: function() {
                return currentTime;
            },
            set: function(val) {
                currentTime = val;
            },
            enumerable: true,
            configurable: true
        });

        /* 设置或返回音频/视频的音量. */
        Object.defineProperty(netAudio, "volume", {
            get: function() {
                return volume;
            },
            set: function(val) {
                volume = val;

                netAudio.apiModule.setVolume({
                    volume: volume
                });
            },
            enumerable: true,
            configurable: true
        });

        /* 设置或返回是否暂停. */
        Object.defineProperty(netAudio, "paused", {
            get: function() {
                return paused;
            },
            set: function(val) {

                paused = val;

                /* 暂停/继续 播放. */
                if(paused){
                    netAudio.apiModule.pause();

                    return;
                }

                if(0 == netAudio.duration){
                    return;
                }

                netAudio.apiModule.play({
                    path: netAudio.src
                }, function(ret, err){
                    netAudio.currentTime = ret.current;
                    netAudio.duration = ret.duration;

                    if( ! netAudio.autoplay){
                        netAudio.pause();
                    }

                });
            },
            enumerable: true,
            configurable: true
        });

        /* 返回当前音频/视频的长度（以毫秒计）. */
        Object.defineProperty(netAudio, "duration", {
            get: function() {
                return duration;
            },
            set: function(val) {
                duration = val;
            },
            enumerable: true,
            configurable: true
        });

        /* 返回播放是否已结束. */
        Object.defineProperty(netAudio, "ended", {
            get: function() {
                return ended;
            },
            set: function(val) {
                ended = val;
            },
            enumerable: true,
            configurable: true
        });

        /* 设置或返回播放进度(0~100). */
        Object.defineProperty(netAudio, "progress", {
            get: function() {
                if( ! netAudio.duration){
                    return;
                }

                return parseInt((1.0 * netAudio.currentTime / netAudio.duration) * 100);
            },
            set: function(val) {
                if(val < 0){
                    val = 0;
                }

                if(val > 100){
                    val = 100;
                }

                netAudio.apiModule.setProgress({
                    progress:val
                });
            },
            enumerable: true,
            configurable: true
        });

        /* 设置属性的默认方法. */

        netAudio.apiModule = api.require("netAudio");
        netAudio.autoplay = autoplay || true;
        netAudio.src = src || "";
        netAudio.duration = 0.0;
        netAudio.currentTime = 0.0;
        netAudio.volume = 0.5; /* 默认可设为0.5. */
        netAudio.ended = false;
        netAudio.paused = false;

        // ----------------------------------------

        /* 方法 */

        /* 播放/继续播放
         *
         * */
        netAudio.play = function(){
            netAudio.paused = false;
        }

        // ------------------------------

        /* 暂停播放 */
        netAudio.pause = function(){
            netAudio.paused = true;
        }

        // ------------------------------

        /* 停止播放 */

        netAudio.stop = function(){
            netAudio.apiModule.stop();
            netAudio.ended = true;
        }

        // -----------------------------

        /* 返回实例对象. */

        return netAudio;
    }
}

// ------------------------------------------------

/* 使用模块,播放网络音频. */

var netAudio = APINetAudio.createNew("http://file.apicloud.com/mcm/A6965066817858/e9c1021491c701227a048607720fd4ed.mp3", false);


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
    selectedIndex: 0,
    itemSize: {
        w: api.frameWidth / 4.0
    },
    items: [
        {
            title:"播放",
            bg:"#87C0ED",
            bgSelected: "#325570"
        },
        {
            title:"暂停",
            bg:"#87C0ED",
            bgSelected: "#325570"
        },
        {
            title:"停止",
            bg:"#87C0ED",
            bgSelected: "#325570"
        },
        {
            title:"快进",
            bg:"#87C0ED",
            bgSelected: "#325570"
        },
        {
            title:"快退",
            bg:"#87C0ED",
            bgSelected: "#325570"
        },
        {
            title:"增大声音",
            bg:"#87C0ED",
            bgSelected: "#325570"
        },
        {
            title:"减小声音",
            bg:"#87C0ED",
            bgSelected: "#325570"
        },
        {
            title:"静音",
            bg:"#87C0ED",
            bgSelected: "#325570"
        }
    ]
};

function callback(ret, err){
    var idx = ret["index"];

    /* (继续)播放 */
    if(0 == idx){
        netAudio.play();
    }

    /* 暂停 */
    if(1 == idx){
        netAudio.pause();
    }

    /* 停止 */
    if(2 == idx){
        netAudio.stop();
    }

    /* 快进 */
    if(3 == idx){
        netAudio.progress += 20;
    }

    /* 快退 */
    if(4 == idx){
        netAudio.progress -= 20;
    }

    /* 增大音量 */
    if(5 == idx){
        netAudio.volume += 0.2;
    }

    /* 减小音量 */
    if(6 == idx){
        netAudio.volume -= 0.2;
    }

    /* 静音 */
    if(7 == idx){
        netAudio.volume = 0;
    }
}

navigationBar.open(params, callback);