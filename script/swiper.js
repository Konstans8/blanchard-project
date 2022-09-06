document.addEventListener('DOMContentLoaded', function() {


  const heroSlider = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,

      autoplay: {
        delay: 4000,
      },

      speed: 1200,

      effect: 'fade',

    });




  const galerySlider = new Swiper('.galery__swiper', {
    direction: 'horizontal',
    loop: true,

    navigation: {
      nextEl: '.galery__swiper-button-next',
      prevEl: '.galery__swiper-button-prev'
    },
    
    pagination: {
      el: '.galery__pagination',
      type: 'fraction',
    },

    // slidesPerView: 3,

    spaceBetween: 50,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    }
  });



  const eventSlider = new Swiper('.event__swiper', {
    direction: 'horizontal',
    loop: true,

    spaceBetween: 50,


    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    }
  });




  const projectsSlider = new Swiper('.projects__swiper', {
    direction: 'horizontal',
    loop: true,

    navigation: {
      nextEl: '.projects__swiper-button-next',
      prevEl: '.projects__swiper-button-prev'
    },

    spaceBetween: 50,


    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    }
  })

});