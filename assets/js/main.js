/// style header

/// shitf main section down
topHeight = $("header").outerHeight(true);
$("main").css({ "margin-top": topHeight + "px" });

// Add active tab
$(document).ready(function () {
  // get current URL path and assign 'active' class
  var pathname = window.location.pathname;
  $('nav a[href="' + pathname + '"]').addClass("active");
});
$("nav a").click(function () {
  $("nav a").removeClass("active");
  $(this).addClass("active");
});

// Back to top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".back-to-top").fadeIn("slow");
  } else {
    $(".back-to-top").fadeOut("slow");
  }
});

$(".back-to-top").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    1500,
    "easeInOutExpo"
  );
  return false;
});
