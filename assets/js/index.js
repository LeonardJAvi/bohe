$(document).ready(function(){
// Load Google fonts asynchronously
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

// Hidden menu of collections
$("#menu-category").hide();

// Event capture click to the Collections item
$("#show-menu-category").click(function() {
	$("#menu-category").slideToggle();
	if ($('.chevron-boe').hasClass('fa-chevron-down')) {
		$('.chevron-boe').removeClass('fa-chevron-down').addClass('fa-chevron-up');
	} else {
		$('.chevron-boe').removeClass('fa-chevron-up').addClass('fa-chevron-down');
	}  
});

});

