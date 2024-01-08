$(".pic1").fadeIn(function () {
  $(".pic2").fadeIn(function () {
    $(".pic3").fadeIn(function () {});
  });
});

$(".refbtn").click(function () {
  $(".pp").fadeIn();
});

$(".exitbtn").click(function () {
  $(".pp").fadeOut();
});
