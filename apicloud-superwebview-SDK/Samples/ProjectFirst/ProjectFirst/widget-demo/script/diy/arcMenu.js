function openArcmenu()
{
    var itemWidth = document.getElementById("itemviewx").value;
    var itemHeight = document.getElementById("itemviewy").value;

    var itemimg1 = document.getElementById("item1img").value;
    var itemimglight1 = document.getElementById("item1imglight").value;

    var itemimg2 = document.getElementById("item2img").value;
    var itemimglight2 = document.getElementById("item2imglight").value;

    var itemimg3 = document.getElementById("item3img").value;
    var itemimglight3 = document.getElementById("item3imglight").value;

    var itemimg4 = document.getElementById("item4img").value;
    var itemimglight4 = document.getElementById("item4imglight").value;

    var itemimg5 = document.getElementById("item5img").value;
    var itemimglight5 = document.getElementById("item5imglight").value;

    var itemimg6 = document.getElementById("item6img").value;
    var itemimglight6 = document.getElementById("item6imglight").value;


    var obj = api.require('arcMenu');
    obj.open({
        type:document.getElementById("menutypes").value,//0是弧形，1是直线型
        mainMenu:
        {
            x:document.getElementById("viewx").value,
            y:document.getElementById("viewy").value,
            w:document.getElementById("vieww").value,
            h:document.getElementById("viewh").value,
            img:document.getElementById("centerimgpath").value,
            imgLight:document.getElementById("centerimgpathlight").value
        },
        items:[{w:itemWidth,h:itemHeight,img:itemimg1,imgLight:itemimglight1},
            {w:itemWidth,h:itemHeight,img:itemimg2,imgLight:itemimglight2},
            {w:itemWidth,h:itemHeight,img:itemimg3,imgLight:itemimglight3},
            {w:itemWidth,h:itemHeight,img:itemimg4,imgLight:itemimglight4},
            {w:itemWidth,h:itemHeight,img:itemimg5,imgLight:itemimglight5},
            {w:itemWidth,h:itemHeight,img:itemimg6,imgLight:itemimglight6}],
        startAngle:document.getElementById("startangles").value,
        wholeAngle:document.getElementById("totalangles").value,//当type为straight时本参数无意义
        radius:document.getElementById("menuradius").value
    },function(ret,err){
        document.getElementById("closeid").value = ret.id;

        if(undefined !== ret.index){ // 排除 初始打开的情况.
            api.alert({msg:ret.id+'*'+ret.index});
        }
    });
};
function closeArcmenu()
{
    var obj = api.require('arcMenu');
    obj.close({id:document.getElementById("closeid").value});
};