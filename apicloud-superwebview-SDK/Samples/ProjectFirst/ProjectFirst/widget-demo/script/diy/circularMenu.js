function objOpenMenu(){
    var arrayItems = new Array();
    arrayItems[0]={
        normal: document.getElementById("item1").value,
        highlight: document.getElementById("item1highlight").value,
        title:document.getElementById("item1title").value,
        titleColor:document.getElementById("titleColors").value
    };
    arrayItems[1]={
        normal:"widget://image/circularMenu/2.png",
        highlight:"widget://image/circularMenu/2light.png",
        title:"转账汇款"
    };
    arrayItems[2]={
        normal:"widget://image/circularMenu/3.png",
        highlight:"widget://image/circularMenu/3light.png",
        title:"投资理财"
    };
    arrayItems[3]={
        normal:"widget://image/circularMenu/4.png",
        highlight:"widget://image/circularMenu/4light.png",
        title:"特色服务"
    };
    arrayItems[4]={
        normal:"widget://image/circularMenu/5.png",
        highlight:"widget://image/circularMenu/5ight.png",
        title:"安全中心"
    };
    arrayItems[5]={
        normal:"widget://image/circularMenu/6.png",
        highlight:"widget://image/circularMenu/6light.png",
        title:"信用卡",
        titleColor:"#868686"
    };

    var obj = api.require('circularMenu');
    obj.open({
        centerX:document.getElementById("menux").value,
        centerY:document.getElementById("menuy").value,
        radius:document.getElementById("menur").value,
        centerBtnRadius:document.getElementById("centerBtnR").value,
        bgImg:document.getElementById("platBgimg").value,
        centerBtnImg:document.getElementById("centerBtnImg").value,
        indicatorPosition:document.getElementById("coursorPosition").value,
        items:arrayItems
    },function(ret,err){
        if(undefined !== ret.click){
            document.getElementById("clickBtnIndex").value = ret.click;
        }

        if(undefined !== ret.indicatorIndex){
            document.getElementById("indicatorIndex").value = ret.indicatorIndex;
        }
    });
};
function objCloseMenu(){
    var obj = api.require('circularMenu');
    obj.close();
};