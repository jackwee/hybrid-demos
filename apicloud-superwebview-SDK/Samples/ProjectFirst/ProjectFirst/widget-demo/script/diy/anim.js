function closeWin(){
    var main = $api.byId('mainAnim');
    // main = main.options[main.selectedIndex].value;
    main = main.value;
    var sub = $api.byId('subAnim');
    // sub = sub.options[sub.selectedIndex].value;
    sub = sub.value;
    var dur = $api.byId('duration').value;
    api.closeWin({
        name: 'anim_con_sub',
        animation: {
            type: main,
            subType: sub,
            duration: dur
        }
    });
}


function openWin(){

    var main = $api.byId('mainAnim');
    // main = main.options[main.selectedIndex].value;
    main = main.value;
    var sub = $api.byId('subAnim');
    // sub = sub.options[sub.selectedIndex].value;
    sub = sub.value;
    var dur = $api.byId('duration').value;

    api.openWin({
        name: 'anim_con_sub',
        url: './anim-con.html',
        bounces: false,
        opaque: false,
        animation: {
            type: main,
            subType: sub,
            duration: dur
        }
    });
}

apiready = function(){
    var header = $api.byId('header');
    $api.fixIos7Bar(header);
};