var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    speed: 1750,
    simulateTouch: false,
    grabCursor: true,
    loop: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      //el: ".swiper-pagination",
      //el: ".carousel-control-next",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    controller: {
      control: null,
    },
  });


myCarousel.addEventListener('slide.bs.carousel', function(e) {
  if (e.direction == 'left') {
    document.querySelector('.swiper-button-next').click();
  }
  if (e.direction == 'right') {
    document.querySelector('.swiper-button-prev').click();
  }
})
