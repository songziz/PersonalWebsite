// JavaScript Document
$(document).ready(function(){
	
	//header height
	var headerHeight = $('nav').outerHeight();
	
	$('.slide').click(function(e) {
		var linkHref = $(this).attr('href');
		
		$('html, body').animate({
			scrollTop: $(linkHref).offset().top - headerHeight
		});
		
		e.preventDefault();
	});
	
	/*$('.col-md ul li').mouseenter(function(){
		$(this).animate({left: '20px'});
	});*/
});