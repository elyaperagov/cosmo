'use strict';
(function () {


  if (document.querySelector('.special__wrapper')) {
    let instructorsSwiper = new Swiper('.special__wrapper', {
      loop: true,
      navigation: {
        nextEl: '.special__button-next',
        prevEl: '.special__button-prev',
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
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
    instructorsSwiper.lazy.load();
  }

  let ESC_KEYCODE = 27;
  let ENTER_KEYCODE = 13;

  let modal = document.querySelector('.modal');
  let modalFrame = document.querySelector('.modal__frame');
  let modalOpen = document.querySelector('.button--review');
  let modalClose = modal.querySelector('.modal__close');
  let modalName = modal.querySelector('input[type="text"]');

  let onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  let openPopup = function () {
    modal.classList.remove('hidden');
    modalName.focus();
    modalClose.addEventListener('click', closePopup);
    modalFrame.addEventListener('click', closePopup);
    document.addEventListener('keydown', onPopupEscPress);
    document.body.style.overflow = 'hidden';
  };

  let closePopup = function () {
    modal.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    modalClose.removeEventListener('click', closePopup);
    modalFrame.removeEventListener('click', closePopup);
    document.body.style.overflow = 'visible';
  };

  modalOpen.addEventListener('click', function () {
    openPopup();
  });

  modalOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  modalClose.addEventListener('click', function () {
    closePopup();
  });

  modalClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

})();
