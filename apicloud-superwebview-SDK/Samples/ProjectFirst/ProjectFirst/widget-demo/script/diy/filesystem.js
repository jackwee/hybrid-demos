function writeFile(){
    var path = $api.byId('file2').value;
    var txt = $api.byId('text2').value;
    if(path){
        api.writeFile({
            path: path,
            data: txt
        }, function(ret, err){
            var status = ret.status;
            if(status){
                api.alert({msg:'写入文件成功'});
            }else{
                api.alert({msg:err.msg});
            }
        });
    }
}

function readFile(){
    var path = $api.byId('file1').value;
    if(path){
        api.readFile({
            path: path
        }, function(ret, err){
            var data = ret.data, status = ret.status;
            if(data){
                // $api.byId('fileData').innerHTML = data;
                $api.byId('fileData').value = data;
            }
        });
    }
}