/*--------------------------------------------------------------
# Custom Tags
--------------------------------------------------------------*/

// document.registerElement("banner");

/*--------------------------------------------------------------
# Shift Main Down
--------------------------------------------------------------*/
$(document).ready(function () {
  topHeight = document.getElementById("header").outerHeight(true);
  alert(topHeight);
  document.getElementById("main").css({ "margin-top": topHeight + "px" });
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
  document.getElementById("sidenav").style.width = "250px";

  document.getElementById("header").style.marginLeft = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("footer").style.marginLeft = "250px";

  document.getElementById("header").style.backgroundColor = "rgba(0,0,0,0.4)";
  document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0.4)";
  document.getElementById("footer").style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("sidenav").style.width = "0px";

  document.getElementById("header").style.marginLeft = "0px";
  document.getElementById("main").style.marginLeft = "0px";
  document.getElementById("footer").style.marginLeft = "0px";

  document.getElementById("header").style.backgroundColor = "white";
  document.getElementById("main").style.backgroundColor = "white)";
  document.getElementById("footer").style.backgroundColor = "white";
}
