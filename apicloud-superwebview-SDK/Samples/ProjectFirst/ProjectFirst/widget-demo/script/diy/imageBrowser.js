function openimageAry()
{
    var array = new Array();
    for ( var i = 0; i < 22; i++) {
        array[i] = document.getElementById('imageUrl_' + i).value;
    }
    var iaf = api.require('imageBrowser');
    iaf.openImages({imageUrls: array,showList:true,activeIndex:"2"});

};