/* window.swiper = new Swiper({
    el: '.slider__contenedor',
    slideClass: 'slider__slide',
    createElements: true,
    autoplay: {
        delay: 5000
    },
    loop: true,
    speed: 300,
    spaceBetween: 20, 
    pagination: true,
    navigation: true,
    effect: 'coverflow'
}); */

var swiper = new Swiper(".swiper", {
    effect: "cube",
    grabCursor: true,
    autoplay: {
        delay: 5000
    },
    speed: 900,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
});