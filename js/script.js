$(document).ready(function () {
  $(`.slider`).slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 1500,
    adaptiveHeight: true,
    responsive: [{
      breakpoint: 796,
      settings: {
          slidesToShow: 2,
      }
  },
  {
      breakpoint: 500,
      settings: {
          slidesToShow: 1
      }
  }
]
  });
  $('.left-arr').click(function() {
    $('.slider').slick('slickPrev');
})

$('.right-arr').click(function() {
    $('.slider').slick('slickNext');
})

})