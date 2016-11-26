/*模块简介:
 db模块封装了
 手机常用数据库sqlite的
 增删改查语句，
 可实现数据的本地存储，
 极大的简化了数据归档问题;
 */

/*示例简介:
打开一个数据库apicloud,
创建一张新表,
插入数据,
查询后,弹窗提示查询到的数据.
*/
var db = api.require('db');

var dbName = "apicloud";

db.openDatabase({
    name: dbName
}, function(ret, err){
    if( ! ret.status){
        toast(err.msg);
        return;
    }

    /* 创建数据表 */
    var sql = "CREATE TABLE  IF NOT EXISTS `Module`(`id` int, `name` varchar(255), `brief` varchar(255), `sortId` int)";

    db.executeSql({
        name: dbName,
        sql: sql
    }, function(ret, err){
        if( ! ret.status){
            toast(err.msg);

            return;
        }

        /* 插入数据 */
        var sql = "insert into Module (id,name,brief,sortId) values('0', 'multiSelector', '自定义数据源的多项选择器', '0'),('1', 'shakeView', '支持自定义摇一摇效果页', '0'),('2', 'listContact', '联系人列表，可自定义联系人数据源', '0')";

        db.executeSql({
            name: dbName,
            sql: sql
        }, function(ret, err){
            if( ! ret.status){
                toast(err.msg);

                return;
            }

            /* 查询数据 */
            var sql = "SELECT * FROM Module";

            db.selectSql({
                name: dbName,
                sql: sql
            }, function(ret, err){
                if( ! ret.status){
                    toast(err.msg);
                }

                api.alert({
                    title: "数据库操作结果",
                    msg: JSON.stringify(ret.data)
                });
            });

        });
    });

});

/* toast提示 */
function toast(msg){
    api.toast({
        msg: msg,
        duration: 1000,
        location: "top"
    });
}