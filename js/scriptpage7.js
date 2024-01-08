$(".refbtn").click(function () {
  $(".bg,.refbtn").fadeOut();
  $(".refpic,.exitbtn").fadeIn(function () {
    $(".exitbtn").click(function () {
      $(".exitbtn,.refpic").fadeOut();
      $(".bg,.refbtn").fadeIn();
    });
  });
});
$(".plusbtn").click(function () {
  $(".pmbtn,.pic1").fadeIn();
});

$(".pmbtn").click(function () {
  $(".pic1,pmbtn").fadeOut();
  $(".bg,refbtn,plusbtn").fadeIn();
});
