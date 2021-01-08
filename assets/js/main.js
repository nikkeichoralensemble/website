/*--------------------------------------------------------------
  TXT by HTML5 UP
  html5up.net | @ajlkn
  Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
--------------------------------------------------------------

(function ($) {
  var $window = $(window),
    $body = $("body"),
    $nav = $("#nav");

  // Breakpoints.
  breakpoints({
    xlarge: ["1281px", "1680px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: ["361px", "736px"],
    xsmall: [null, "360px"],
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Dropdowns.
  $("#nav > ul").dropotron({
    mode: "fade",
    noOpenerFade: true,
    speed: 300,
    alignment: "center",
  });

  // Scrolly
  $(".scrolly").scrolly({
    speed: 1000,
    offset: function () {
      return $nav.height() - 5;
    },
  });

  /*--------------------------------------------------------------
  // Nav.
  --------------------------------------------------------------
  // Title Bar.
  $(
    '<div id="titleBar">' +
      '<a href="#navPanel" class="toggle"></a>' +
      '<span class="title">' +
      $("#logo").html() +
      "</span>" +
      "</div>"
  ).appendTo($body);

  // Panel.
  $('<div id="navPanel">' + "<nav>" + $("#nav").navList() + "</nav>" + "</div>")
    .appendTo($body)
    .panel({
      delay: 500,
      hideOnClick: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      side: "left",
      target: $body,
      visibleClass: "navPanel-visible",
    });
})(jQuery);

/*--------------------------------------------------------------
# Shift Main Down
--------------------------------------------------------------*/
// $(document).ready(function () {
//   topHeight = $("header").outerHeight(true);
//   alert(topHeight);
//   $("main").css({ "margin-top": topHeight + "px" });
// });

/*--------------------------------------------------------------
  # Add Active Tab
  --------------------------------------------------------------*/
$(document).ready(function () {
  // get current URL path and assign 'active' class
  var pathname = window.location.pathname;
  $('nav a[href="' + pathname + '"]').addClass("active");
});
$("nav a").click(function () {
  $("nav a").removeClass("active");
  $(this).addClass("active");
});

/*--------------------------------------------------------------
  # Back to Top Button
  --------------------------------------------------------------*/
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    document.getElementById("back-to-top").fadeIn("slow");
  } else {
    document.getElementById("back-to-top").fadeOut("slow");
  }
});

document.getElementById("back-to-top").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    1500,
    "easeInOutExpo"
  );
  return false;
});

/*--------------------------------------------------------------
  # Side Navigation
  --------------------------------------------------------------*/

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("sidenav").style.width = "100px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("sidenav").style.display = "block";
  w = document.getElementById("sidenav").outerWidth(true);

  document.getElementById("header").css({ "margin-right": w + "px" });
  document.getElementById("main").css({ "margin-left": w + "px" });
  document.getElementById("footer").css({ "margin-left": w + "px" });

  //   document.getElementById("header").style.marginLeft = w;
  //   document.getElementById("main").style.marginLeft = w;
  //   document.getElementById("footer").style.marginLeft = w;

  document.getElementById("header").style.backgroundColor = "rgba(0,0,0,0.4)";
  document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0.4)";
  document.getElementById("footer").style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("sidenav").style.display = "none";

  document.getElementById("header").style.marginLeft = "0px";
  document.getElementById("main").style.marginLeft = "0px";
  document.getElementById("footer").style.marginLeft = "0px";

  document.getElementById("header").style.backgroundColor = "white";
  document.getElementById("main").style.backgroundColor = "white)";
  document.getElementById("footer").style.backgroundColor = "white";
}
