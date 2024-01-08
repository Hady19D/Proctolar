$(".NORAH").click(function () {
  $(".pic1,.pic2,.SAUD").fadeOut(function () {
    $(".pp,.minbtn").fadeIn();
  });
});

$(".SAUD").click(function () {
  $(".pic1,.pic2,.NORAH").fadeOut(function () {
    $(".pp1,.minbtn1").fadeIn();
  });
});

$(".minbtn").click(function () {
  $(".pp").fadeOut(function () {
    $(".pic1,.pic2,.SAUD,.NORAH").fadeIn();
  });
});

$(".minbtn1").click(function () {
  $(".pp1").fadeOut(function () {
    $(".pic1,.pic2,.SAUD,.NORAH").fadeIn();
  });
});
