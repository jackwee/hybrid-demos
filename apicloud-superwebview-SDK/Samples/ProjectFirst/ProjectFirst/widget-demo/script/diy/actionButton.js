function openactionsheet()
{
    var corlor1 = document.getElementById("item1color").value;
    var image1 = document.getElementById("item1img").value;
    var title1 = document.getElementById("item1title").value;

    var corlor2 = document.getElementById("item2color").value;
    var image2 = document.getElementById("item2img").value;
    var title2 = document.getElementById("item2title").value;

    var corlor3 = document.getElementById("item3color").value;
    var image3 = document.getElementById("item3img").value;
    var title3 = document.getElementById("item3title").value;

    var corlor4 = document.getElementById("item4color").value;
    var image4 = document.getElementById("item4img").value;
    var title4 = document.getElementById("item4title").value;

    var corlor5 = document.getElementById("item5color").value;
    var image5 = document.getElementById("item5img").value;
    var title5 = document.getElementById("item5title").value;

    var corlor6 = document.getElementById("item6color").value;
    var image6 = document.getElementById("item6img").value;
    var title6 = document.getElementById("item6title").value;

    var corlor7 = document.getElementById("item7color").value;
    var image7 = document.getElementById("item7img").value;
    var title7 = document.getElementById("item7title").value;

    var pagecontrolcolor = document.getElementById("pagecolor").value;
    var pagecontrolnocolor = document.getElementById("pageincolor").value;


    var obj = api.require('actionButton');
    obj.open({
        items:[{bgColor:corlor1,title:title1,image:image1},
            {bgColor:corlor2,title:title2,image:image2},
            {bgColor:corlor3,title:title3,image:image3},
            {bgColor:corlor4,title:title4,image:image4},
            {bgColor:corlor5,title:title5,image:image5},
            {bgColor:corlor6,title:title6,image:image6},
            {bgColor:corlor7,title:title7,image:image7},
            {bgColor:corlor7,title:title7,image:image7},
            {bgColor:corlor7,title:title7,image:image7},
            {bgColor:corlor7,title:title7,image:image7},
            {bgColor:corlor7,title:title7,image:image7},
            {bgColor:corlor7,title:title7,image:image7},
            {bgColor:corlor7,title:title7,image:image7}],
        topHeight:document.getElementById("toptopheight").value,
        pageControl:{activeColor:pagecontrolcolor,inactiveColor:pagecontrolnocolor},
        clickDisappear:document.getElementById("clickDisappear").value
    },function(ret,err){
        api.alert({msg:ret.index});
    });
};
function closeactionsheet()
{
    var obj = api.require('actionButton');
    obj.close();
};
function hideactionsheet()
{
    var obj = api.require('actionButton');
    obj.hide();
};
function showactionsheet()
{
    var obj = api.require('actionButton');
    obj.show();
};