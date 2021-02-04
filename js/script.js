(function ($) {
  "use strict";
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 72,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });
  $("body").scrollspy({
    target: "#mainNav",
    offset: 74,
  });
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  navbarCollapse();
  $(window).scroll(navbarCollapse);
})(jQuery);
// $(window).on("load", function () {
//   $(".pLeft").addClass("pShow");
//   $(".pRight").addClass("pShow");
// });
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  if (wScroll > $(".visimisi").offset().top - 120) {
    $(".visimisi .paragraph").each(function (i) {
      setTimeout(function () {
        $(".visimisi .paragraph").eq(i).addClass("show");
      }, 220 * (i + 1));
    });
  }
  if (wScroll > $(".layanan").offset().top - 120) {
    $(".layanan .timeline-panel").each(function (i) {
      setTimeout(function () {
        $(".layanan .timeline-panel").eq(i).addClass("show");
      }, 220 * (i + 1));
    });
  }
  if (wScroll > $(".portfolio").offset().top - 120) {
    $(".portfolio .portfolio-item").each(function (i) {
      setTimeout(function () {
        $(".portfolio .portfolio-item").eq(i).addClass("show");
      }, 220 * (i + 1));
    });
  }
  if (wScroll > $(".product").offset().top - 120) {
    $(".product .production").each(function (i) {
      setTimeout(function () {
        $(".product .production").eq(i).addClass("show");
      }, 220 * (i + 1));
    });
  }
  if (wScroll > $(".contact").offset().top - 120) {
    $(".contact .card").each(function (i) {
      setTimeout(function () {
        $(".contact .card").eq(i).addClass("show");
      }, 220 * (i + 1));
    });
  }
});
