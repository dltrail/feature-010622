"use strict";
var firstName = "Dylan"; // type string
console.log(typeof firstName);
var useProductCarousel = function () {
    $(".product-carousel__carousel").slick({
        slidesToScroll: 1,
        slidesToShow: 2.5,
        swipeToSlide: true,
        infinite: true,
        swipe: true,
        arrows: true,
        prevArrow: $(".prev-arrow"),
        nextArrow: $(".next-arrow"),
    });
};
var mbVids = document.querySelectorAll(".videoMobile");
var dtVids = document.querySelectorAll(".videoDesktop");
var handleVideo = function () {
    if (window.matchMedia("(max-width: 700px)").matches) {
        mbVids.forEach(function (mbvid) {
            mbvid.style.display = "block";
        });
        dtVids.forEach(function (dtvid) {
            dtvid.style.display = "none";
        });
    }
    else {
        mbVids.forEach(function (mbvid) {
            mbvid.style.display = "none";
        });
        dtVids.forEach(function (dtvid) {
            dtvid.style.display = "block";
        });
    }
};
// Swap video + image URL instead of switching display setting here? (tbr) 
handleVideo();
useProductCarousel();
window.addEventListener("resize", handleVideo);