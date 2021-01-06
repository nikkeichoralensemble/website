$navbar_exists = $("nav").length;

if ($navbar_exists) {
  // if there is a navbar
  $("nav")[0].classList.add("d-none");
  $("nav")[0].classList.add("d-md-block");

  var $mobile_nav = $("nav")[0].clone().prop({
    class: "mobile-nav d-lg-none",
  });
  console.log($mobile_nav);

  $("body").append($mobile_nav);
  $("body").prepend(
    '<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'
  );
  $("body").append('<div class="mobile-nav-overly"></div>');

  $(document).on("click", ".mobile-nav-toggle", function (e) {
    $("body").toggleClass("mobile-nav-active");
    $(".mobile-nav-toggle i").toggleClass(
      "icofont-navigation-menu icofont-close"
    );
    $(".mobile-nav-overly").toggle();
  });

  $(document).on("click", ".mobile-nav .drop-down > a", function (e) {
    e.preventDefault();
    $(this).next().slideToggle(300);
    $(this).parent().toggleClass("active");
  });

  $(document).click(function (e) {
    var container = $(".mobile-nav, .mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($("body").hasClass("mobile-nav-active")) {
        $("body").removeClass("mobile-nav-active");
        $(".mobile-nav-toggle i").toggleClass(
          "icofont-navigation-menu icofont-close"
        );
        $(".mobile-nav-overly").fadeOut();
      }
    }
  });
} else if ($(".mobile-nav, .mobile-nav-toggle").length) {
  $(".mobile-nav, .mobile-nav-toggle").hide();
}
