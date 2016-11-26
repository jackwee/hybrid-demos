var isCreate = false;

var transType = $api.byId('transType');

function objOpenDb(){
    var db = api.require('db');
    var oName = $api.byId('dbname');
    var name = oName.value;
    if(!name){return;}

    db.openDatabase({
        name: name
    }, function(ret, err){
        if(ret.status){
            api.alert({msg:'数据库打开成功'});
            $api.setStorage('dbname', name);
        }else{
            api.alert({msg:err.msg});
        }
    });
};
function objTrans(){
    var transType = $api.byId('transType');

    var db = api.require('db');
    var type = $api.val(transType);
    var dbname = $api.getStorage('dbname');
    if(!dbname){return;}
    db.transaction({
        name: dbname,
        operation: type
    }, function(ret, err){
        if(ret.status){
            api.alert({msg:'事务操作成功'});
        }else{
            api.alert({msg:err.msg});
        }
    });
};
function objExec1(){

    var db = api.require('db');

    var sql2 = $api.byId('sql2').value;
    var dbname = $api.getStorage('dbname');

    if(!dbname){return;}
    db.executeSql({
        name: dbname,
        sql: sql2
    }, function(ret, err){
        if(ret.status){
            api.alert({msg:'执行SQL成功'});
            isCreate = true;
        }else{
            api.alert({msg:err.msg});
        }
    });

};
function objExec(){
    if(! isCreate){
        api.alert({msg: "请先创建!"});
        return;
    }

    var db = api.require('db');
    var sql = $api.byId('sql').value;

    var dbname = $api.getStorage('dbname');
    if(!dbname){return;}
    db.executeSql({
        name: dbname,
        sql: sql
    }, function(ret, err){
        if(ret.status){
            api.alert({msg:'执行SQL成功'});
        }else{
            api.alert({msg:err.msg});
        }
    });
};
function objDelete(){
    var db = api.require('db');
    var sql = $api.byId('sql3').value;
    var dbname = $api.getStorage('dbname');
    if(!dbname){return;}
    db.executeSql({
        name: dbname,
        sql: sql
    }, function(ret, err){
        if(ret.status){
            api.alert({msg:'删除表成功'});
            isCreate = false;
        }else{
            api.alert({msg:err.msg});
        }
    });
};
function objSelect(){
    var db = api.require('db');
    var sql = $api.byId('sql1').value;
    var dbname = $api.getStorage('dbname');

    if(!dbname){return;}
    db.selectSql({
        name: dbname,
        sql: sql
    }, function(ret, err){
        if(ret.status){
            var dbInfo = $api.byId('dbInfo');
            alert(JSON.stringify(ret.data));
        }else{
            api.alert({msg:'无数据'});
        }
    });
};
function objClose(){
    var db = api.require('db');
    var dbname = $api.getStorage('dbname');

    if(!dbname){return;}
    db.closeDatabase({
        name: dbname
    }, function(ret, err){
        if(ret.status){
            api.alert({msg:'关闭数据库成功'});

        }else{
            api.alert({msg:'error'});
        }
    });
};