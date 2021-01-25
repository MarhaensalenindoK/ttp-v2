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
$(window).on("load", function () {
  $(".pLeft").addClass("pShow");
  $(".pRight").addClass("pShow");
});
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
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
    $(".product .team-member").each(function (i) {
      setTimeout(function () {
        $(".product .team-member").eq(i).addClass("show");
      }, 220 * (i + 1));
    });
  }
});

// ! JSON

// ? IMG PORTFOLIO
function imgList() {
  $.getJSON("json/index.json", function (data) {
    let url = data.url;
    // console.log(url);
    $.each(url, function (i, data) {
      $("#img-list").append(
        `
        <div class="col-lg-3">
        <img src="assets/img/portfolio-adi/` +
          data.url +
          `" alt="" width="200px" class="photo">
        </div>   `
      );
    });
  });
}
imgList();

function klienList() {
  $.getJSON("json/klien.json", function (data) {
    let url = data.url;
    console.log(url);
    $.each(url, function (i, data) {
      $("#list-klien").append(
        `
        <div class="col-md-3 col-sm-6 my-3">
        <a href="#!"
          >
          <img width="150px"
            class="img-fluid d-block mx-auto"
            src="assets/img/logos/` +
          data.url +
          `"
            alt=""
        /></a>
      </div>  `
      );
    });
  });
}

klienList();
