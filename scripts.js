$(document).ready(function () {
  $(window).on("scroll", function () {
    var currentPos = $(window).scrollTop();

    $('#navbar a').each(function () {
      var sectionLink = $(this);
      // capture the height of the navbar
      var navHeight = $('#navbar').outerHeight() + 1;
      var section = $(sectionLink.attr('href'));

      // subtract the navbar height from the top of the section
      if (section.position().top - navHeight <= currentPos && sectionLink.offset().top + section.height() > currentPos) {
        $('#navbar a').removeClass('active');
        sectionLink.addClass('active');
      } else {
        sectionLink.removeClass('active');
      }
    });

    // var profile = $('#profile > div');
    // var windowHeight = $('#profile').outerHeight() + 1;

    // if(windowHeight + currentPos <= profile.offset().top) {
    //   profile.css("opacity", "0.0");
    // } else if (windowHeight + currentPos >= profile.offset().top + 3 * windowHeight/4) {
    //   profile.css("opacity", "1");
    // } else {
    //   var value = 1.0 * ((currentPos + windowHeight) - profile.offset().top - windowHeight/4) / (windowHeight/2);
    //   console.log(value)
    //   profile.css({ opacity: value });
    // }
  });
});
