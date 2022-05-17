let firstName: string = "Dylan"; // type string

console.log(typeof firstName);

const useProductCarousel = () => {
    $(".product-carousel__carousel").slick({
        slidesToScroll: 1,
        swipeToSlide: true,
    });

}

let mbVids = document.querySelectorAll<HTMLElement>(".videoMobile");
let dtVids = document.querySelectorAll<HTMLElement>(".videoDesktop");
const handleVideo = () => {
    if (window.matchMedia("(max-width: 700px)").matches) {

        mbVids.forEach(mbvid => {
            mbvid.style.display = "block"
        })
        dtVids.forEach(dtvid => {
            dtvid.style.display = "none";
        })
    } else {

        mbVids.forEach(mbvid => {
            mbvid.style.display = "none"
        })
        dtVids.forEach(dtvid => {
            dtvid.style.display = "block";
        })
    }
}

// Swap video + image URL instead of switching display setting here? (tbr) 
handleVideo()
useProductCarousel()
window.addEventListener("resize", handleVideo);
