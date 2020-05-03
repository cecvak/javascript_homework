$(document).ready(function(){
    $('.slider').slick({
      dots: true,
      arrows: true,
      autoplay: true,
      // responsive: [
      //   {
      //     breakpoint: 1024,
      //     settings: {
      //       infinite: true,
      //       dots: true,
      //       arrows: true,
      //     }
      //   },
      //   {
      //     breakpoint: 600,
      //     settings: {
      //       arrows: true,
      //     }
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       arrows: true,

      //     }
      //   }
      //   // You can unslick at a given breakpoint now by adding:
      //   // settings: "unslick"
      //   // instead of a settings object
      // ]
    });
  });
      

function openNav() {
  document.getElementById("navigation").style.height = "100%";
}

function closeNav() {
  document.getElementById("navigation").style.height = "0%";
}