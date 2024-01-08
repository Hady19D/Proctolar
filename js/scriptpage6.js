$(".refbtn").click(function () {
  $(".bg,.refbtn").fadeOut();
  $(".refpic,.exitbtn").fadeIn(function () {
    $(".exitbtn").click(function () {
      $(".exitbtn,.refpic").fadeOut();
      $(".bg,.refbtn").fadeIn();
    });
  });
});
