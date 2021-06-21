'use strict';
(function() {
    if (document.querySelector('.swiper-container')) {
        var offersSwiper = new Swiper('.swiper-container', {
            loop: true,
            freeMode: true,
            direction: 'horizontal',
            navigation: {
                nextEl: '.button-next',
                prevEl: '.button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 8,
                },
                768: {
                    spaceBetween: 8,
                    slidesPerView: 'auto',
                },
                320: {
                    slidesPerView: 'auto',
                    spaceBetween: 6,
                },
            }
        });
        offersSwiper.setGrabCursor();
    }



})();