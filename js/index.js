import 'https://unpkg.com/swiper/swiper-bundle.min.js';

window.onload = () => {
    // control slider per view according to document width
    const width = document.body.getBoundingClientRect();
    let sliderPerView = 3;
    // check body width
    if(width.width < 1024) sliderPerView = 2;
    if(width.width < 768) sliderPerView = 1.5;
    if(width.width < 480) sliderPerView = 1;
    // initialize slider
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: sliderPerView,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}