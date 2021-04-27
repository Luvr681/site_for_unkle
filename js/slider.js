$(document).ready(function(){
  $('.slider').slick({
    autoplay: !isOpenModal,
    arrows: true,
    dots: true,
    speed: 800,
    inite: true,
    nextArrow: '#next__arrow',
    prevArrow: '#prev__arrow',
  })
});
