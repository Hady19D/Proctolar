$(".plusbtn1").click(function () {
  $(".pic4").hide();
  $(".pic5").hide();
  $(".ppp1").fadeIn();
});

$(".plusbtn2").click(function () {
  $(".pic4").hide();
  $(".pic5").hide();
  $(".ppp2").fadeIn();
});

$(".minbtn1").click(function () {
  $(".pic4").fadeIn();
  $(".pic5").fadeIn();
  $(".ppp1").hide();
});

$(".minbtn2").click(function () {
  $(".pic4").fadeIn();
  $(".pic5").fadeIn();
  $(".ppp2").hide();
});

$(".refbtn1").click(function () {
  $(".pp1").fadeIn();
});

$(".exitbtn1").click(function () {
  $(".pp1").fadeOut();
});
