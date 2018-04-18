$(document).ready(function(){
//Adding animation the carousel 
$('.slider-category-p').on('init', function(event, slick){
	$('.animated').addClass('activate fadeInUp');
}); 

//Settings carousel home
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

//Adding animation to the carousel with library animation.css
$('.slider-category-p').on('afterChange', function(event, slick, currentSlide) {
	$('.animated').removeClass('off');
	$('.animated').addClass('activate fadeInUp');
});  

//Adding animation to the carousel with library animation.css
$('.slider-category-p').on('beforeChange', function(event, slick, currentSlide) {
	$('.animated').removeClass('activate fadeInUp');
	$('.animated').addClass('off');
});

});

