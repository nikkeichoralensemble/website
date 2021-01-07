/*--------------------------------------------------------------
# Custom Tags
--------------------------------------------------------------*/

// document.registerElement("banner");

/*--------------------------------------------------------------
# Shift Main Down
--------------------------------------------------------------*/
$(document).ready(function () {
  topHeight = $("header").outerHeight(true);
  $("main").css({ "margin-top": topHeight + "px" });
});

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
    $("#back-to-top").fadeIn("slow");
  } else {
    $("#back-to-top").fadeOut("slow");
  }
});

$("#back-to-top").click(function () {
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
  $("#sidenav").style.width = "100px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  $("#sidenav").style.width = "0";
}
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  $("#sidenav").style.width = "250px";

  $("#header").style.marginLeft = "250px";
  $("#main").style.marginLeft = "250px";
  $("#footer").style.marginLeft = "250px";

  $("#header").style.backgroundColor = "rgba(0,0,0,0.4)";
  $("#main").style.backgroundColor = "rgba(0,0,0,0.4)";
  $("#footer").style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  $("#sidenav").style.width = "0px";

  $("#header").style.marginLeft = "0px";
  $("#main").style.marginLeft = "0px";
  $("#footer").style.marginLeft = "0px";

  $("#header").style.backgroundColor = "white";
  $("#main").style.backgroundColor = "white)";
  $("#footer").style.backgroundColor = "white";
}
