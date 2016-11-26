/*模块简介:
 本模块是原生实现的一个文本阅读器,
 开发者只要传进来一个text文本文件,
 即可实现一个翻页效果的图书阅读器;
 */

/*示例简介:
 打开一个 图书阅读器;
 在最后一页下翻时,会有相应提示;
 在第一页上翻时,会有相应提示;
 再次打开时,会提示是否从上次阅读位置开始;
 */

var bookReader = api.require('bookReader');

var filePath = "widget://image/bookReader/test.txt";

/* 初次打开时,保持进度条和阅读器进度的同步. */
bookReader.getProgress({
    filePath: filePath
}, function(ret, err){
    if( ! ret.status || ! ret.progress){
        showBookReader(0);

        return;
    }

    var progress = ret.progress;

    api.confirm({
        title: "阅读提示",
        msg: "从上次阅读位置继续阅读 ?",
        buttons:[ "重新开始", "继续阅读"]
    },function(ret,err){
        if(1 == ret.buttonIndex){
            showBookReader(0);
        }else{
            showBookReader(progress);
        }
    });

});
function showBookReader(progress){
    bookReader.open({
        x: 0,
        y: 0,
        progress: progress,
        w: api.frameWidth,
        h: api.frameHeight,
        bg: "widget://image/bookReader/bg.png",
        filePath: filePath,
        fixedOn: api.frameName
    },function(ret, err){
        if( ! ret){ /* 出错了,默默返回即可.*/
            return;
        }

        var eventType = ret.eventType;
        var progress = ret.progress;

        if("page_over" == eventType){ /* 最后一页时下翻*/
            api.toast({
                msg: "已经是最后一页了",
                duration:1000,
                location: "top"
            });
        }

        if("page_begin" == eventType){ /* 第一页时上翻*/
            api.toast({
                msg: "已经第一页了",
                duration:1000,
                location: "top"
            });
        }

        if("page_up" == eventType ||
            "page_down" === eventType){
            /* nothing to do. */
        }
    });
}