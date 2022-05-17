// const useProductCarousel = () => {
//     $(".product-carousel__carousel").slick({
//         slidesToShow: 4.5,
//         slidesToScroll: 1,
//         swipeToSlide: true,
//         draggable: true,
//         dots: false,
//         arrows: true,
//         infinite: false,
//         accessible: true,
//         prevArrow: $(".prev-arrow"),
//         nextArrow: $(".next-arrow"),
//         responsive: [{
//             breakpoint: 767,
//             settings: {
//                 slidesToShow: 2.23,
//             },
//         },
//         {
//             breakpoint: 1023,
//             settings: {
//                 slidesToShow: 2.5,
//             },
//         },
//         {
//             breakpoint: 1279,
//             settings: {
//                 slidesToShow: 4.5,
//             },
//         },
//         ],
//     });

// }

// let mbVids = document.querySelectorAll(".videoMobile");   
// let dtVids =  document.querySelectorAll(".videoDesktop"); 
// const handleVideo = () => {
//     if (window.matchMedia("(max-width: 700px)").matches) {
      
//         mbVids.forEach(mbvid =>{
//             mbvid.style.display = "block"
//         }) 
//         dtVids.forEach(dtvid =>{
//             dtvid.style.display = "none"; 
//         })  
//      } else {
       
//         mbVids.forEach(mbvid =>{
//             mbvid.style.display = "none"
//         }) 
//         dtVids.forEach(dtvid =>{
//             dtvid.style.display = "block"; 
//         }) 
//     }
// }

// // Swap video + image URL instead of switching display setting here? (tbr) 
// handleVideo()
// useProductCarousel()


// window.addEventListener("resize", handleVideo);
