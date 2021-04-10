$(function(){
	$('.hits_items').slick({
  		infinite: true,
  		slidesToShow: 3,
  		slidesToScroll: 1,
  		prevArrow: '<button type="button" class="leftH"></button>',
    	nextArrow: '<button type="button" class="rightH"></button>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            variableWidth: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            // variableWidth: true
          }
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            variableWidth: true,
            centerMode: true
          }
        }
      ]
	});
})

$(function(){
	$('.new_items').slick({
  		infinite: true,
  		slidesToShow: 3,
  		slidesToScroll: 1,
  		prevArrow: '<button type="button" class="leftH2"></button>',
    	nextArrow: '<button type="button" class="rightH2"></button>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            variableWidth: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            // variableWidth: true
          }
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            variableWidth: true
          }
        }
      ]
	});
})

$(function(){
  $('.reviews_list').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="leftH3"></button>',
      nextArrow: '<button type="button" class="rightH3"></button>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            // variableWidth: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            // variableWidth: true
          }
        }
      ]
  });
})

// Burger menu

const burger = document.querySelector(".burger");

burger.addEventListener("click", function () {
  const body = document.body;
  body.classList.toggle("nav-open");
  
  // if needed to toggle multiple classes
  // const toggleClasses = ["nav-open", "overflow-hidden"];
  // toggleClasses.forEach((toggleClass) => body.classList.toggle(toggleClass));
});

$(document).ready(function() {
    $('.burger').click(function() {
      $('.main_menu_list').toggleClass('open_menu');
      $('body').toggleClass('ovh');
      $('body').toggleClass('op');

    });

    $('.main_menu_item').click(function() {
      $('.main_menu_list').toggleClass('open_menu');
      $('body').toggleClass('ovh');
      const body = document.body;
      body.classList.toggle("nav-open");
    });
});

//smooth scroll

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

//dropdown
$(document).ready(function() {
    $(".dropdown").click(function(){
      $(this).toggleClass("opened");
    });

    $("#dropdown_1").click(function(){
      $("#item_text_1").toggleClass("db");
    });

    $("#dropdown_2").click(function(){
      $("#item_text_2").toggleClass("db");
    });

    $("#dropdown_3").click(function(){
      $("#item_text_3").toggleClass("db");
    });
});

