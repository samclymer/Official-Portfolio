/* Fade in Navigation Icons upon page load*/
$(document).ready(function(){
      $("#bgvid").fadeIn(3000);
      $("#navIcon1").fadeIn(3000);
      $("#navIcon2").fadeIn(3000);
      $("#navIcon3").fadeIn(3000);
      $("#navIcon4").fadeIn(3000);
      $(".fontTitle").animate({marginLeft: "0px"}, 3000);
      $(".fontSubTitleLeft").animate({marginLeft: "0px"}, 3000);
      $(".fontRegular").animate({marginBottom: "0px"}, 3000);
      $(".headshot").animate({marginLeft: "0px"}, 3000);
      $(".skillsIcon").animate({marginTop: "0px"}, 3000);
      $(".skillsFont").fadeIn(5000);
      $("#socialIcon1").animate({marginLeft: "0px"}, 3000);
      $("#socialIcon2").animate({marginLeft: "0px"}, 3000);
      $("#socialIcon3").animate({marginLeft: "0px"}, 3000);
      $("#socialIcon4").animate({marginLeft: "0px"}, 3000);
});

  $(navIcon1).click(function(){
    $("#bgvid").fadeOut(2000);
    $("#navIcon1").fadeOut(2000);
    $("#navIcon2").fadeOut(2000);
    $("#navIcon3").fadeOut(2000);
    $("#navIcon4").fadeOut(2000);
    $(".fontTitle").animate({marginLeft: "-1000px"}, 1000);
    $(".fontSubTitleLeft").animate({marginLeft: "-1000px"}, 1500);
    $(".fontRegular").fadeOut(3500);
    $(".headshot").animate({marginLeft: "-1000px"}, 2000);
    $(".skillsIcon").fadeOut(4000);
    $(".skillsFont").fadeOut(4000);
    $(".socialIcon").fadeOut(4000);
    setTimeout(function(){
        window.location = "./index.html"
    }, 4500);
    return false;
  });


