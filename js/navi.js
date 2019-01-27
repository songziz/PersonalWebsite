// JavaScript Document
$(document).ready(function(){
	
	//header height
	var headerHeight = $('nav').outerHeight();
	
	$('.slide').click(function(e) {
		var linkHref = $(this).attr('href');
		console.log(headerHeight);
		
		$('html, body').animate({
			scrollTop: $(linkHref).offset().top - headerHeight
		});
		
		e.preventDefault();
	});
});