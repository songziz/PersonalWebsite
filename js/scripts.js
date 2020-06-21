$(document).ready(function () {
  $(window).on("scroll", function () {
    var currentPos = $(window).scrollTop();

    $('.menu ul li a').each(function () {
      var sectionLink = $(this);
      // capture the height of the navbar
      var navHeight = $('.navbar').outerHeight() + 1;
      var section = $(sectionLink.attr('href'));

      // subtract the navbar height from the top of the section
      if (section.position().top - navHeight <= currentPos && sectionLink.offset().top + section.height() > currentPos) {
        $('.menu ul li').removeClass('active');
        sectionLink.parent().addClass('active');
      } else {
        sectionLink.parent().removeClass('active');
      }
    });
  });
  $(window).scroll(function () {
    $('.appear').each(function () {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {

        $(this).animate({ 'opacity': '1' }, 1000);

      }

    });
  })
  // if ($(window).width() >=768){
  //   $("figure").hover(function(){
  //     $(this).find("figcaption").fadeIn("slow");
  //     }, function(){
  //     $(this).find("figcaption").fadeOut();
  //     }
  //   );
  //   $("figure").find("figcaption").fadeOut();
  // }
  $( window ).resize(function() {
    aligncontacts();
  });
  aligncontacts();
  function aligncontacts(){
    var width = window.innerWidth;
    console.log(width);
    var halfwidth = Math.round(width/2);
    console.log(halfwidth);
    console.log(width>300);
    if (width>300){
      console.log("here!");
      $( ".column-skinny").css("padding-left", ((halfwidth-150).toString()+"px"));
    }else {
      $( ".column-skinny").css("padding-left", "1rem");
    }
  }
  
});

document.querySelector(".card-flip").classList.toggle("flip");
