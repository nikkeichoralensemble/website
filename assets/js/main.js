function shiftMain() {
  topHeight = $("header").outerHeight(true);
  $("main").css({ "margin-top": topHeight + "px" });
}

shiftMain();
