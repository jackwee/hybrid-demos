
//var kgjsapi =null;
apiready = function(){
    var  kgjsapi=api.require('APIKGJS');
    var param = {id:"hbfklpelkpoiddfe",version:"1"};
    kgjsapi.init(param);//必须请求广告前初始化
}

function showDetail(){
    var  kgjsapi=api.require('APIKGJS');
    var param = {mode:1};
    kgjsapi.show(param);
}

function showCp(){
    var  kgjsapi=api.require('APIKGJS');
    var param = {mode:3};
    kgjsapi.show(param);
}

function showFull(){
    var  kgjsapi=api.require('APIKGJS');
    var param = {mode:4};
    kgjsapi.show(param);
}

function showList(){
    var  kgjsapi=api.require('APIKGJS');
    var param = {mode:5};
    kgjsapi.show(param);
}
		