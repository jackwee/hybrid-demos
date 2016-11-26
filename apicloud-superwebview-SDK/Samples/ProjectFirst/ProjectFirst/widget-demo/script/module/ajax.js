/*示例简介:
 跨域请求数据;
 */

api.ajax({
    url: 'http://www.apicloud.com/',
    method: 'get',
    cache: false,
    timeout: 30,
    dataType: 'text'
}, function(ret, err){
    var msg = JSON.stringify(ret);

    if(err){
        msg = JSON.stringify(err);
    }

    api.alert({
        title: "跨域请求的数据",
        msg: msg
    });
});