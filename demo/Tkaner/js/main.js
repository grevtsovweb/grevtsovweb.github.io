const swiper = new Swiper('.page__row-carousel-js', {
    slidesPerView: 1.2,
    spaceBetween: 20,
    breakpoints: {
        992: {spaceBetween: 30, slidesPerView: 4}
    }
});


const swiperProducts = new Swiper('.page__card-block-caurosel-js', {
    slidesPerView: 1.2,
    spaceBetween: 20,
    breakpoints: {
        992: {spaceBetween: 16, slidesPerView: 3}
    }
});