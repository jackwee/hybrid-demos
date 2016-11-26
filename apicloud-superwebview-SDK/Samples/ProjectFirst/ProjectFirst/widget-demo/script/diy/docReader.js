function opendocandpdf()
{
    var pathUrl = document.getElementById("pathUrl").value;
    var iaf = api.require('docReader');
    iaf.open({
        path:pathUrl
    },function(ret,err)
    {
        if(ret.status){}
        else{alert(err.msg);}
    });
};