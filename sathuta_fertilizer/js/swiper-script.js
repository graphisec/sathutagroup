const swiper = new Swiper('.swiper-wrapper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1.2,  
    spaceBetween: -100, 
    coverflowEffect: {
        rotate: 0,  
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});
