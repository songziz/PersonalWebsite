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
	
	$(".col-md ul li").hover(function(){
		$(this).find('.abilityTxt').css("color","#F9D342");
		$(this).find('.fa-star').css("padding-left","0.3vw");
		}, function(){
		$(this).find('.abilityTxt').css("color","white");
		$(this).find('.fa-star').css("padding-left","0vw");
		}
	);
});