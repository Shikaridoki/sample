var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
function addClass (){
    var hamburger = document.getElementById("hamburger");
    hamburger.classList.toggle("hamburger_active")


    var menu = document.getElementById("menu");
    menu.classList.toggle("menu_active")
}
document.documentElement.style.setProperty('--animate-duration', '4s');

