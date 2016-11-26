function openFileBrowser()
{
    var iaf = api.require('fileBrowser');
    iaf.open({},
        function(ret,err)
        {
            iaf.close();

            api.alert(
                {
                    title: '本文件url',
                    msg: ret.url,
                    buttons: ['确定']
                });
        });
};