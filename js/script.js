// ****************** menu bar collapsed start ********************
$(".menu ul li a").on("click", function () {
  $(".menu .navbar-collapse").collapse("hide");
});
// ****************** menu bar collapsed end ********************

// ****************** menu bar fixed/sticky start ********************
$(window).scroll(function () {
  var scrollamount = $(window).scrollTop();
  if (scrollamount > 200) {
    $(".menu").addClass("menu-fixed");
  } else {
    $(".menu").removeClass("menu-fixed");
  }
});
// ****************** menu bar fixed/sticky end ********************

// ****************** back-top btn fixed/sticky start ********************
$(window).scroll(function () {
  var scrollamount = $(window).scrollTop();
  if (scrollamount > 760) {
    $(".back-top").addClass("back-top-fixed");
  } else {
    $(".back-top").removeClass("back-top-fixed");
  }
});

$(".back-top i").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    1000
  );
});
// ****************** back-top btn fixed/sticky end ********************

// ****************** banner slider start ********************
$("#banner-part .banner").slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow: '<i class="fa fa-angle-left left" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-angle-right right" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
// ****************** banner slider end ********************

// ****************** about slider start ********************
$("#about-part .about-slider .about-items").slick({
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
// ****************** about slider end ********************

// ****************** counter up start ********************
$("#counter-part #counter").counterUp({
  delay: 10,
  time: 1000,
});
// ****************** counter up end ********************

// ****************** courses slider start ********************
$("#courses-part .courses-items").slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  focusOnSelect: false,
  centerMode: true,
  centerPadding: "0px",
  arrows: true,
  prevArrow: '<i class="fa fa-angle-left left" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-angle-right right" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
// ****************** courses slider end ********************

// ****************** testi slider one start ********************
$("#testi-part .testi-items .testi-slider").slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  focusOnSelect: false,
  prevArrow: '<i class="fa fa-angle-left left" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-angle-right right" aria-hidden="true"></i>',
  asNavFor: "#testi-part .testi-items .testi-details",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
// ****************** testi slider one end ********************

// ****************** testi slider two start ********************
$("#testi-part .testi-items .testi-details").slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  focusOnSelect: false,
  arrows: false,
  asNavFor: "#testi-part .testi-items .testi-slider",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
// ****************** testi slider two end ********************

// ****************** teacher slider end ********************
$("#teacher-part .teacher-items").slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  arrows: false,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: "unslick",
    },
    {
      breakpoint: 992,
      settings: "unslick",
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
// ****************** teacher slider end ********************

// ****************** footer slider two start ********************
$("#footer-part .footer-img").slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
// ****************** footer slider two end ********************

// about page
// ****************** about_us page slider start ********************
$("#about-a .about-slider .about-items").slick({
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
// ****************** about_us slider end ********************

// ****************** about_us page venobox start ********************
$(document).ready(function () {
  $(".venobox").venobox();
});
// ****************** about_us page venobox end ********************
