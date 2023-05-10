$(function () {
  function nextani() {
    $(".ban").animate({ marginLeft: "-1200px" }, 500, function () {
      $(".ban li").eq(0).appendTo(".ban");
      $(".ban").css({ marginLeft: "0" });
    });
  }
  function prevani() {
    $(".ban li").eq(2).prependTo(".ban");
    $(".ban").css({ marginLeft: "-1200px" });
    $(".ban").animate({ marginLeft: "0" }, 500);
  }
  let interval = setInterval(nextani, 2000);
  $(".slide").hover(
    function () {
      clearInterval(interval);
    },
    function () {
      interval = setInterval(nextani, 2000);
    }
  );
  $(".next").click(function () {
    nextani();
  });
  $(".prev").click(function () {
    prevani();
  });
});
