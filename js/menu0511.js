$(function () {
  //step1
  //$(".sub").css("display","none");
  /*$(".sub").hide();
  $(".title").click(function () {
    $(".sub").hide();
    $(this).next().show();
    $(".title").removeClass("on");
    $(this).addClass("on");
  });*/
  //step2
  /*$(".sub").hide();
  $(".title").click(function () {
    if ($(this).next().css("display") == "none") {
      $(".sub").slideUp();
    }
    $(this).next().slideToggle();
    $(".title").removeClass("on");
    $(this).addClass("on");
  });*/
  //step3
  /*$(".sub").hide();
  $(".title").click(function () {
    $(".sub").each(function () {
      if ($(this).css("display") == "block") {
        $(this).slideUp();
      }
    });
    $(this).next().slideDown();
    $(".title").removeClass("on");
    $(this).addClass("on");
  });*/
  //step4
  /*$(".sub").hide();
  $(".title").click(function () {
    if ($(this).hasClass("on") == false) {
      $(".title").removeClass("on");
      $(this).addClass("on");
      $(".sub").slideUp();
      $(this).next().slideDown();
    } else {
      $(this).removeClass("on");
      $(this).next().slideUp();
    }
  });*/
  //step5
  $(".sub").hide();
  let current;
  let num;
  function init(n) {
    current = n;
    num = n;
    setTimeout(function () {
      $("#navi>li").eq(current).find(".sub").slideDown();
      $(".title").eq(current).addClass("on");
    }, 1000);
  }
  init(0);
  console.log(num);
  /*$(".title").click(function () {
    //num = $(this).parent().index();
    if ($(this).parent().index() != num) {
      num = $(this).parent().index();
      $(".sub").slideUp();
      $(this).next().slideDown();
    } else {
      $(".sub").slideUp();
    }
  });*/
  $(".title").click(function () {
    //num = $(this).parent().index();
    //console.log(num);
    if ($(this).hasClass("on") == false) {
      $(".title").removeClass("on");
      $(this).addClass("on");
      $(".sub").slideUp();
      $(this).next().slideDown(); ////hasClass가 없을때
    } else {
      $(this).removeClass("on");
      $(this).next().slideUp(); //hasClass가 있을때
    }
  });
});
