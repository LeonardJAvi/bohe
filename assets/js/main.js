$(document).ready(function(){

  WebFontConfig = {
  google: { families: [ 'Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i'] } };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();


  $('.slider-category-p').on('init', function(event, slick){
    $('.animated').addClass('activate fadeInUp');
  }); 

  $('.slider-category-p').slick({
    arrows: false,
    dots: true,
    lazyLoad: 'ondemand',
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: false,
    slide: 'div',
    cssEase: 'ease',
    useCSS: true,
    useTransform: true,
});

$('.slider-category-p').on('afterChange', function(event, slick, currentSlide) {
    $('.animated').removeClass('off');
    $('.animated').addClass('activate fadeInUp');
});   

$('.slider-category-p').on('beforeChange', function(event, slick, currentSlide) {
    $('.animated').removeClass('activate fadeInUp');
    $('.animated').addClass('off');
});
  
  // $('.slider-category').slick({
  //     arrows: true,
  //     dots: false,
  //     slidesToShow: 6,
  //     slidesToScroll: 1,
  //     variableWidth: false,
  //     centerMode: false,
  //     autoplay: false,
  //     lazyLoad: 'ondemand',
  //     infinite: true,
  //     speed: 600,
  //     autoplay: true,
  // });




});

