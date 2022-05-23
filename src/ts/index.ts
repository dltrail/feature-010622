const useProductCarousel = () => {
  $(".product-carousel__carousel").slick({
    slidesToScroll: 1,
    slidesToShow: 4.5,
    swipeToSlide: true,
    infinite: true,
    swipe: true,
    arrows: true,
    prevArrow: $(".prev-arrow"),
    nextArrow: $(".next-arrow"),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2.23,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3.5,
        },
      },
    ],
  });
};

let mbVids = document.querySelectorAll<HTMLElement>(".videoMobile");
let dtVids = document.querySelectorAll<HTMLElement>(".videoDesktop");
const handleVideo = () => {
  if (window.matchMedia("(max-width: 700px)").matches) {
    mbVids.forEach((mbvid) => {
      mbvid.style.display = "block";
    });
    dtVids.forEach((dtvid) => {
      dtvid.style.display = "none";
    });
  } else {
    mbVids.forEach((mbvid) => {
      mbvid.style.display = "none";
    });
    dtVids.forEach((dtvid) => {
      dtvid.style.display = "block";
    });
  }
};

// Swap video + image URL instead of switching display setting here? (tbr)
handleVideo();
useProductCarousel();
window.addEventListener("resize", handleVideo);
