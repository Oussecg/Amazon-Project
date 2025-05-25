function checkResolution() {
    const logo = document.querySelector(".checkout-logo");
    if (window.innerWidth < 600) {
        logo.src = "../../images/amazon-mobile-logo.png";
    } else {
        logo.src = "../../images/amazon-logo.png";
    }
}

checkResolution()
window.addEventListener("resize", checkResolution);