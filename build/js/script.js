'use strict';
(function() {
    if (document.querySelector('.swiper-container')) {
        var offersSwiper = new Swiper('.swiper-container', {
            freeMode: true,
            loop: true,
            navigation: {
                nextEl: '.offers__button-next',
                prevEl: '.offers__button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    width: 1196,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    width: 785,
                },
                320: {
                    slidesPerView: 2,
                    spaceBetween: 38,
                    width: 600,
                },
            }
        });
        offersSwiper.setGrabCursor();
    }



})();