function remSize(){
    var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
    if(deviceWidth>=750){
        deviceWidth = 750
    } //屏幕大于750，显示750

    if(deviceWidth<=320){
        deviceWidth=320
    } //屏幕小于320，显示320
    document.documentElement.style.fontSize = (deviceWidth/7.5)+"px"
    document.querySelector('body').style.fontSize=0.3+"rem"//字体大小
}
remSize()
window.onresize =function(){
    remSize()
}