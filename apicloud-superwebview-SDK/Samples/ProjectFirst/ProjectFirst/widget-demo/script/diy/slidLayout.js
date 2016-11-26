function openSideLayout(){
    var select = $api.byId('type');
    // var type = select.options[select.selectedIndex].value;
    var type = select.value;
    api.openSlidLayout({
        leftEdge:120,
        rightEdge:60,
        type:type,
        fixedPane:{
            name: 'below',
            url: './below.html'
        },
        slidPane:{
            name: 'above',
            url: './above.html'
        }
    }, function(ret) {
        var type = ret.type;
        if (type == 'left') {
            var script = 'showLeft()';
            api.execScript({
                name: 'below',
                script: script
            });
        } else {
            var script = 'showRight()';
            api.execScript({
                name: 'below',
                script: script
            });
        }
    });
}