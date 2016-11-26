function objOpenGraph(){
    var obj = api.require('scrollPicture');
    var imagePath = document.getElementById("picturePath").value;
    var illustratePic = document.getElementById("pictureIllustrate").value;
    var arrayPath = new Array();
    arrayPath[0] = 'http://file.apicloud.com/mcm/A6965066817858/3a32d512f5b68b8c681effa37f0d3703.jpg';
    arrayPath[1] = 'http://file.apicloud.com/mcm/A6965066817858/df3ca25a1c3302414468c698ca776b3e.jpg';
    arrayPath[2] = 'http://f.hiphotos.baidu.com/image/pic/item/4e4a20a4462309f7bdca9423710e0cf3d7cad65d.jpg';
    arrayPath[3] = 'http://file.apicloud.com/mcm/A6965066817858/d1857f45dc67438789b8f1afc7f766a5.jpg';
    arrayPath[4] = 'http://file.apicloud.com/mcm/A6965066817858/f23301da3bd6c2c214a464b27c9897c2.jpg';
    var arrayTitle = new Array();
    arrayTitle[0] = document.getElementById('pictureIllustrate').value;
    arrayTitle[1] = arrayPath[1];
    arrayTitle[2] = arrayPath[2];
    arrayTitle[3] = arrayPath[3];
    arrayTitle[4] = arrayPath[4];


    obj.open({
        x:document.getElementById("viewx").value,
        y:document.getElementById("viewy").value,
        w:document.getElementById("viewWidth").value,
        h:document.getElementById("viewHeight").value,
        intervalTime:document.getElementById("pictureIntervalTime").value,
        paths:arrayPath,
        placeholderImg:document.getElementById("placeHolderImgPath").value,
        subTitle:{
            height:document.getElementById("pictureIllustrateBgHeight").value,
            titles:arrayTitle,
            color:document.getElementById("pictureIllustrateColor").value,
            size:document.getElementById("pictureIllustrateSize").value,
            bgColor:document.getElementById("pictureIllustrateBgColor").value,
            fixed:document.getElementById("fixedFixedOn").value
        },
        control:{
            alignment:document.getElementById("pageControlPosition").value,
            activeColor:document.getElementById("pageControlActiveColor").value,
            inactiveColor:document.getElementById("pageControlColor").value
        },
        fixedOn:document.getElementById("windowOrViewName").value
    },function(ret,err){
        if(ret.status){
            document.getElementById("clickPictureIndex").value = ret.click;
        }else{
            document.getElementById("scrollPictureIndex").value = ret.index;
        }
    });
};

function objCloseGraph(){
    var obj = api.require('scrollPicture');
    obj.close();
};

function objshowGraph(){
    var obj = api.require('scrollPicture');
    obj.show();
};

function objhideGraph(){
    var obj = api.require('scrollPicture');
    obj.hide();
};

function turnToPage(){
    var obj = api.require('scrollPicture');
    obj.turnPage({
        index:document.getElementById("pageIndex").value
    });
}