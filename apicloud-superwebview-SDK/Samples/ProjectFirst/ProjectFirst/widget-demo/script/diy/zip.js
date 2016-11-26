function archivesingelfiles()
{
    var obj = api.require('zip');
    obj.archive({
        password:document.getElementById("archivesingelpassword").value,
        files:[document.getElementById("archivesingelfile1").value],
        toPath:document.getElementById("archiedFilePath").value
    },function(ret,err){
        if(ret.status)
        {
            api.alert({msg:'压缩成功'});
        }else{
            api.alert({msg:err.msg});
        }
    });
};

function archivefiles()
{
    var obj = api.require('zip');
    obj.archive({
        password:document.getElementById("archivepassword").value,
        files:[document.getElementById("archivefile1").value,document.getElementById("archivefile2").value],
        toPath:document.getElementById("archiedMultiFilePath").value
    },function(ret,err){
        if(ret.status)
        {
            api.alert({msg:'压缩成功'});
        }else{
            api.alert({msg:err.msg});
        }
    });
};
function Unarchiverfile()
{
    var obj = api.require('zip');
    obj.unarchive({
        file:document.getElementById("unarchivefile").value,
        password:document.getElementById("unarchivepassword").value,
        toPath:document.getElementById("unarchiedMultiFilePath").value
    },function(ret,err){
        if(ret.status)
        {
            api.alert({msg:'解压成功'});
        }else{
            api.alert(err.msg);
        }
    });
};