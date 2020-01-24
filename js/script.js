$(document).ready(function () {
  $(`.slider`).slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 1500,
    adaptiveHeight: true
  });
  $('.left-arr').click(function() {
    $('.slider').slick('slickPrev');
})

$('.right-arr').click(function() {
    $('.slider').slick('slickNext');
})

})