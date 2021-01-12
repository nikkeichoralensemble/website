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
  # Side Navigation
  --------------------------------------------------------------*/
var $sidenav_width = "250px";

/* Open side navigation bar */
function openNav() {
  // document.getElementById("sidenav").style.display = "block";
  // w = document.getElementById("sidenav").outerWidth(true);

  /* Set the width of the side navigation */
  document.getElementById("sidenav").style.width = $sidenav_width;

  /* Push page content to the right by adding a left margin */
  // document.getElementById("navbar").css({ "margin-left": w + "px" });
  // document.getElementById("main").css({ "margin-left": w + "px" });
  // document.getElementById("footer").css({ "margin-left": w + "px" });

  /* add a black background color to body */
  // document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0,0.4)";
  // document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0.4)";
  // document.getElementById("footer").style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Close side navigation bar */
function closeNav() {
  /* Set the width of the side navigation to 0 */
  document.getElementById("sidenav").style.width = "0px";

  /* Remove the left margin of the page content */
  // document.getElementById("navbar").style.marginLeft = "0px";
  // document.getElementById("main").style.marginLeft = "0px";
  // document.getElementById("footer").style.marginLeft = "0px";

  /* Remove the background color of body */
  // document.getElementById("navbar").style.backgroundColor = "initial";
  // document.getElementById("main").style.backgroundColor = "initial";
  // document.getElementById("footer").style.backgroundColor = "initial";
}
