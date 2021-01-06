/*--------------------------------------------------------------
# Shift Main Down
--------------------------------------------------------------*/
topHeight = $("header").outerHeight(true);
$("main").css({ "margin-top": topHeight + "px" });

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
  if ($(this).scrollTop() > document.body.scrollHeight / 2) {
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

/*--------------------------------------------------------------
# Side nav
--------------------------------------------------------------*/

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.$("body").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.$("body").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}
