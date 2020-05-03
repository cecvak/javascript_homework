$(document).ready(function(){
    $('.slider').slick({
    //   setting-name: setting-value
      dots: true,
      // nextArrow: '<span class="material-icons">navigate_next</span>',
      // prevArrow: '<span class="material-icons">navigate_before</span>',
      arrows: true,
          // prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
          // nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
      // autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            // slidesToShow: 3,
            // slidesToScroll: 3,
            infinite: true,
            dots: true,
            arrows: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            arrows: true,
            // slidesToShow: 2,
            // slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            // slidesToShow: 1,
            // slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  });
      

//  <span class="material-icons">navigate_next</span>

// <span class="material-icons">navigate_before</span> 

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}