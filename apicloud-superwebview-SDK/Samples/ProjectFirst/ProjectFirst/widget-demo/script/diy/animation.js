function animation(){
    var delay = $api.val($api.byId('delay'));
    var duration = $api.val($api.byId('duration'));
    var repeatCount = $api.val($api.byId('repeatCount'));
    var aRadio = $api.domAll('input:checked');
    var autoreverse = aRadio[0].value;
    var curveType = $api.byId('curveType');
    var curve = curveType.options[curveType.selectedIndex].value;
    var alpha = $api.val($api.byId('alpha'));
    var translation = {};
    translation.x = $api.val($api.byId('translationX'));
    translation.y = $api.val($api.byId('translationY'));
    translation.z = $api.val($api.byId('translationZ'));
    var scale = {};
    scale.x = $api.val($api.byId('scaleX'));
    scale.y = $api.val($api.byId('scaleY'));
    scale.z = $api.val($api.byId('scaleZ'));
    var rotation = {};
    rotation.degree = $api.val($api.byId('degree'));
    rotation.x = $api.val($api.byId('rotationX'));
    rotation.y = $api.val($api.byId('rotationY'));
    rotation.z = $api.val($api.byId('rotationZ'));
    api.animation({
        name:'block',
        delay:delay,
        duration:duration,
        repeatCount:repeatCount,
        autoreverse:autoreverse,
        curve:curve,
        alpha:alpha,
        translation:translation,
        scale:scale,
        rotation:rotation
    });
}

apiready = function(){
    api.openFrame({bounces: false,bounces: false,
        name:'block',
        url:'./block.html',
        bounces:false,
        vScrollBarEnabled:false,
        hScrollBarEnabled:false,
        rect:{x:200, y:api.winHeight-100, w:80, h:80}
    });
};