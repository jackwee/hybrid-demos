fullScreen = api.fullScreen;

function change(){
    fullScreen = !fullScreen;
    api.setFullScreen({
        fullScreen:fullScreen
    });
};
function changeLight(){
    api.setStatusBarStyle({
        style: 'light'
    });
};
function changeDark(){
    api.setStatusBarStyle({
        style: 'dark'
    });
};