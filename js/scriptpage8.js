$(".refbtn").click(function () {
  $(".refpic,.exitrefpic").fadeIn(function () {
    $(".exitrefpic").click(function () {
      $(".refpic,.exitrefpic").fadeOut();
    });
  });
});

$(".next1").click(function () {
  $(".pic1,.exit1,.pp1").fadeIn(function () {
    $(".next1,.next2").fadeOut();
  });

  $(".pp1").click(function () {
    $(".exit1").fadeOut();
    $(".pppic,.exitpppic1").fadeIn(function () {
      $(".exitpppic1").click(function () {
        $(".pppic,.exitpppic1").fadeOut();
        $(".pic1,.exit1,.pp1").fadeIn();
      });
    });
  });

  $(".exit1").click(function () {
    $(".bg,.next1,.next2,.refbtn,.backbtn").fadeIn();
    $(".pic1,.exit1,.pp1").fadeOut();
  });
});

$(".next2").click(function () {
  $(".pic2,.exit2,.pp2").fadeIn(function () {
    $(".next1,.next2").fadeOut();
  });

  $(".pp2").click(function () {
    $(".exit2").fadeOut();
    $(".pppic,.exitpppic2").fadeIn(function () {
      $(".exitpppic2").click(function () {
        $(".pppic,.exitpppic2").fadeOut();
        $(".pic2,.exit2,.pp2").fadeIn();
      });
    });
  });

  $(".exit2").click(function () {
    $(".bg,.next1,.next2,.refbtn,.backbtn").fadeIn();
    $(".pic2,.exit2,.pp2").fadeOut();
  });
});
