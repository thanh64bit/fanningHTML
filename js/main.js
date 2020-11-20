App = {};

(function ($) {
  App.checkWindowSize = () => {
    var width = $(window).width(),
      new_class = width > 992 ? "" : "menu-mobile";

    $("header .navbar ul.submenu")
      .removeClass("menu-mobile")
      .addClass(new_class);

    // var heightPos1 = $('.pos1').height();
    // $('.pos3').css({
    //     'margin-top': -heightPos1 + 300 + 'px'
    // });
  };
  App.calculatorSidebarDetail = () => {
    var $window = $(window);
    var heightPos1 = $(".pos1").height();

    var windowsize = $window.width();
    if (windowsize >= 992) {
      //if the window is greater than 440px wide then turn on jScrollPane..
      $(".pos3").css({
        "margin-top": -heightPos1 + 280 + "px",
      });
    } else if (windowsize < 992) {
      $(".pos3").css({
        "margin-top": 0 + "px",
      });
    } else {
      return;
    }
  };
  // Load First
  $(".carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: false,
    responsive: {
      0: {
        items: 2,
        navText: [
          "<img src='./img/arrow-left.png'>",
          "<img src='./img/arrow-right.png'>",
        ],
        nav: true,
      },
      768: {
        items: 2,
        navText: [
          "<img src='./img/arrow-left.png'>",
          "<img src='./img/arrow-right.png'>",
        ],
        nav: true,
      },
      992: {
        items: 1,
        navText: [
          "<img src='./img/arrow-left.png'>",
          "<img src='./img/arrow-right.png'>",
        ],
        nav: true,
        margin: 0,
      },
    },
  });

  $(".products.owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        nav: false,
      },
      768: {
        items: 3,
        nav: false,
      },
      1024: {
        items: 3,
        nav: false,
      },
    },
  });

  $(".founders.owl-carousel").owlCarousel({
    loop: true,
    // margin: auto,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        nav: false,
      },
      768: {
        items: 3,
        nav: false,
      },
      992: {
        items: 3,
        nav: false,
        margin: 0,
      },
    },
  });

  $(".companies.owl-carousel").owlCarousel({
    loop: true,
    // margin: auto,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        nav: false,
      },
      768: {
        items: 3,
        nav: false,
      },
      992: {
        items: 3,
        nav: false,
        margin: 0,
      },
    },
  });

  $(".news-local.owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        navText: [
          "<img src='./img/arrow-left.png'>",
          "<img src='./img/arrow-right.png'>",
        ],
        nav: true,
      },
      768: {
        items: 1,
        navText: [
          "<img src='./img/arrow-left.png'>",
          "<img src='./img/arrow-right.png'>",
        ],
        nav: true,
      },
      992: {
        items: 1,
        navText: [
          "<img src='./img/arrow-left.png'>",
          "<img src='./img/arrow-right.png'>",
        ],
        nav: true,
        margin: 0,
      },
    },
  });

  // When resize screen
  $(window).resize(function () {
    App.checkWindowSize();
    App.calculatorSidebarDetail();
  });

  // Run first
  $(document).ready(function () {
    App.checkWindowSize();
    App.calculatorSidebarDetail();
    // Click menu mobile
    $("header ul li").on("click", function () {
      $(this).find("ul").toggleClass("active");
      console.log(this);
    });
  });
})(jQuery);
