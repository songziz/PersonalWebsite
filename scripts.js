$(document).ready(function () {
  const TYPE_SPEED = 30;
  const LINE_PAUSE = 1000;
  const TRANSITION_TIME = 1500;
  const LETTER_HEADER =
    ['Hello!', 'Welcome to my website.',
    `My name is Zizhen Song and I am a computer engineering student at the
    University of Washington.`, 'A bit about me:'];
  const LETTER_BODY =
    [['img/sunset-background.jpg', 'Adventure Awaits!', ''],
    ['img/sunset-background.jpg', 'Adventure Awaits', ''],
    ['img/friends-lake22.jpg', 'Squad Up!', '']]
  let profileStatus = 0;
  let curPolaroidIndex = 0;

  init();

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

    if (profileStatus == 0) {
      var profileHeight = $('#profile').outerHeight() + 1;
      var profileTop = $('#profile').offset().top;

      if (profileTop <= currentPos + 100 && profileTop + profileHeight >=currentPos) {
        profileStatus = 1;
        typer('#letter-header', LETTER_HEADER, 0, 0, () => initLetterBody());
      }
    }

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

  function typer(idName, lines, lineNum, charCnt, callback = function(){}) {
    if (charCnt < lines[lineNum].length) {
      $(idName).append(lines[lineNum].charAt(charCnt));
      setTimeout(() => typer(idName, lines, lineNum, charCnt + 1, callback), TYPE_SPEED);
    } else if (lineNum < lines.length - 1) {
      $(idName).append('<br><br>');
      setTimeout(() => typer(idName, lines, lineNum + 1, 0, callback), LINE_PAUSE);
    } else {
      callback();
    }
  }


  function init() {
    $('#letter-counter').hide();
    $('#letter-body').hide();
    $('#letter-footer').hide();
    $('#letter-end').hide();
    $('#polar-right').click(() =>nextPolaroid(1));
    $('#polar-left').click(() =>nextPolaroid(-1));
  }

  function initLetterBody() {
    setCurrentPolaroid(curPolaroidIndex);
    $('#letter-counter').fadeIn(TRANSITION_TIME, 'swing');
    $('#letter-body').fadeIn(TRANSITION_TIME, 'swing');
    $('#letter-footer').fadeIn(TRANSITION_TIME, 'swing');
    $('#letter-end').fadeIn(TRANSITION_TIME, 'swing');
  }

  function setCurrentPolaroid(index) {
    $('#letter-counter').text((index + 1) + '/' + LETTER_BODY.length);
    $('#letter-detail').text(LETTER_BODY[index][2]);
    $('#letter-image div a').attr("title", LETTER_BODY[index][1]);
    $('#letter-image div a img').attr("src", LETTER_BODY[index][0]);
  }

  function nextPolaroid(change) {
    curPolaroidIndex += change;
    if (curPolaroidIndex == LETTER_BODY.length) {
      curPolaroidIndex = 0;
    } else if (curPolaroidIndex == -1) {
      curPolaroidIndex = LETTER_BODY.length - 1;
    }
    $("#letter-body").animate({ opacity: 0 }, TRANSITION_TIME/2, function() {
      setCurrentPolaroid(curPolaroidIndex);
      $("#letter-body").animate({ opacity: 1 }, TRANSITION_TIME/2);
    });
  }
});
