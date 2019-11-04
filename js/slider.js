$('.sl').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  arrows: false,
  vertical: true,
  // autoplay: true
});

$('.sl-mini').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  centerPadding: '10px',
  arrows: true,
 
});

$('.sl-width').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  autoplay: true
});