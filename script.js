$('.carusel-one').slick({
  centerMode: true,
  centerPadding: '60px',
  nextArrow: '<img class="strelka" src="вправо.png">',
  prevArrow: '<img class="strelka" src="влево.png">',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

$('.carusel1-two').slick({
  centerPadding: '60px',
  infinite: true,
  speed: 500,
  nextArrow: '<img class="strelka" src="вправо.png">',
  prevArrow: '<img class="strelka" src="влево.png">',
  fade: true,
  cssEase: 'linear'
});