$(function () {
  function nextani() {
    $(".ban").animate({ marginTop: "-300px" }, 500, function () {
      $(".ban li").eq(0).appendTo(".ban");
      $(".ban").css({ marginTop: "0" });
    });
  }
  function prevani() {
    $(".ban li").eq(2).prependTo(".ban");
    $(".ban").css({ marginTop: "-300px" });
    $(".ban").animate({ marginTop: "0" }, 500);
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
