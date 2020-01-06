$('.sl').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    variableWidth: true
});

$('.sl2').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    centerPadding: '60px',
    adaptiveHeight: true,
    // variableWidth: true

  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 6
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        slidesToShow: 3,
        centerMode: false
      }
    }
  ]
});






