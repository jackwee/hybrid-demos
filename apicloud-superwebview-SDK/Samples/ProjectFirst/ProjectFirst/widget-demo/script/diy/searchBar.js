function objOpenGraph(){
    var obj = api.require('searchBar');
    obj.open({
        placeholder:document.getElementById("placeholderText").value,
        bgImg:document.getElementById("searchBarBgImgPath").value,
        cancelColor:document.getElementById("cancelTextColor").value,
        cancelSize:document.getElementById("cancelTextSize").value,
        textColor:document.getElementById("textColor").value,
        textFieldWidth:document.getElementById("searchBarwidth").value,
        textFieldHeight:document.getElementById("searchBarHeight").value,
        recordCount:document.getElementById("historyCount").value,
        barBgColor:document.getElementById("navagationBarBgColor").value,
        listBgColor:document.getElementById("historyBgColor").value,
        listColor:document.getElementById("historyListTextColor").value,
        listSize:document.getElementById("historyListTextSize").value,
        cleanColor:document.getElementById("clearTextClor").value,
        cleanSize:document.getElementById("clearTextSize").value,
        animation:true
    },function(ret,err){
        if(ret.isRecord){
            api.alert({msg:'点击了录音按钮'});
        }else{
            document.getElementById("searchText").value=ret.text;
        }
    });
};
function objReloadGraph(){
    var obj = api.require('searchBar');
    obj.setText({
        text:'可以用来设置语音识别后的文本'
    });
};
function objCloseGraph(){
    var obj = api.require('searchBar');
    obj.close();
};