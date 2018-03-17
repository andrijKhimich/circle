 /*slowScroll*/
  $('.item__link[href^="#"]').on('click', function () {
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 0 }, 1300);
  });
    $('#register__button').on('click', function () {
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 0 }, 1300);
  });
/*MAIN SLIDER*/
$(document).ready(function() {
  var slider = $('#mainSlider').lightSlider({
    item: 1,
    loop: true,
    slideMove: 1,
    pager: false,
    speed:2000,
    pause: 7000,
    controls: false,
    auto: true,
    pauseOnHover: true,
    responsive : [
      {
        breakpoint:800,
        settings: {
          item:1,
          slideMove:1,
          slideMargin:6
        }
      },
      {
        breakpoint:480,
        settings: {
          item:1,
          slideMove:1
        }
      }
    ]
  });
  $('#mainArrowLeft').click(function(){
    slider.goToPrevSlide();
  });
  $('#mainArrowRight').click(function(){
    slider.goToNextSlide();
  });
});

/*SPECIALISATION SLIDER*/
$(document).ready(function() {
  // language=JQuery-CSS
  var slider = $('#specialisationSlider').lightSlider({
    item: 4,
    loop: true,
    slideMove: 1,
    pager: false,
    speed:1000,
    pause: 7000,
    controls: false,
    auto: true,
    pauseOnHover: true,
    responsive : [
      {
        breakpoint:800,
        settings: {
          item:3,
          slideMove:1,
          slideMargin:6
        }
      },
      {
        breakpoint:480,
        settings: {
          item:1,
          slideMove:1
        }
      }
    ]
  });
  $('#specArrowLeft').click(function(){
    slider.goToPrevSlide();
  });
  $('#specArrowRight').click(function(){
    slider.goToNextSlide();
  });
});

/*screen scroll*/
$(function() {
  $.scrollify({
    section : ".screen"
  });
});

/*plugin select*/
$(document).ready(function() {
  $("select").selecter();
});

// hamburger
var toggles = document.querySelectorAll(".hamburger");
for (var i = toggles.length - 1; i >= 0; i--) {
  var toggle = toggles[i];
  toggleHandler(toggle);
}
function toggleHandler(toggle) {
  toggle.addEventListener( "click", function(e) {
    e.preventDefault();
    this.classList.toggle("hamburger_active")
  });
}
$('.hamburger').click(function(){
  $('.menu__hamburger').slideToggle(500);
  return false;
});

// main-page popup
$(document).ready(function() {
  $('#register__button_form').click( function(event){
    event.preventDefault();
    $('#overlay').fadeIn(200,
      function(){
        $('#register__popup')
          .css('display', 'block')
          .animate({opacity: 1,top: '20' + '%', left: '25' + '%'}, 200);
      });
  });

  // ЗАКРИТТЯ ВІКНА
  $('.popup__button, #overlay').click( function(){
    $('#register__popup')
      .animate({opacity: 0, top: '45%'}, 200,
        function(){
          $(this).css('display', 'none');
          $('#overlay').fadeOut(200);
        }
      );
  });
});

// VIDEO BG
$(document).ready(function() {
  var videobackground = new $.backgroundVideo($('.wrapper__events'), {
    "align": "centerXY",
    "width": 1280,
    "height": 720,
    "path": "video/",
    "filename": "CIRCLE",
    "types": ["mp4","ogg","webm"],
    "preload": true,
    "autoplay": true,
    "loop": true
  });
});
