$(function () {
  let current;
  function init(str) {
    current = $("#" + str);
    setTimeout(function () {
      current
        .find(".over")
        .stop()
        .animate({ left: "-100px", top: "-100px" }, 500, "easeOutQuart");
      current.css("cursor", "default");
    }, 500);
  }
  init("menu1");
  $("ul#navi li").hover(
    function () {
      if ($(this).attr("id") != current.attr("id")) {
        $(this)
          .find(".over")
          .stop()
          .animate({ left: "-100px", top: "-100px" }, 500, "easeOutQuart");
      }
    },
    function () {
      if ($(this).attr("id") != current.attr("id")) {
        $(this)
          .find(".over")
          .stop()
          .animate({ left: "0", top: "0" }, 500, "easeOutQuart");
      }
    }
  );
});
