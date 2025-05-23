function checkResolution(){
    if (window.innerWidth < 600) {
        document.querySelector(".header-logo").innerHTML = `<img src="../../images/amazon-mobile-logo-white.png" alt="Amazon Logo">`;
    } else{
        document.querySelector(".header-logo").innerHTML = `<img src="../../images/amazon-logo-white.png" alt="Amazon Logo">`;
    }
}

window.addEventListener("resize", checkResolution);
checkResolution();