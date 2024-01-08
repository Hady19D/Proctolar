$(".refbtn").click(function () {
  $(".bg").fadeOut();
  $(".refpic,.exitbtn").fadeIn();
});

$(".exitbtn").click(function () {
  $(".refpic, .exitbtn").fadeOut();
  $(".bg").fadeIn();
});
