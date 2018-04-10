$(document).ready(function(){
  $('.slider-category').slick({
      arrows: true,
      dots: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      variableWidth: false,
      centerMode: false,
      autoplay: false,
      lazyLoad: 'ondemand',
      infinite: true,
      speed: 600,
      autoplay: true,
  });

$('.slider-category-p').slick({
    arrows: false,
    dots: true,
    variableWidth: false,
    centerMode: false,
    autoplay: true,
    speed: 100,
    lazyLoad: 'ondemand',
    infinite: true,
    speed: 600,
});


});

