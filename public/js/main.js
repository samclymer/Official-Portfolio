/* Fade in Navigation Icons upon page load*/
$(document).ready(function(){
    $("#bgvid").fadeIn(3000);
    $("#navIcon1").fadeIn(3000);
    $("#navIcon2").fadeIn(3000);
    $("#navIcon3").fadeIn(3000);
    $("#navIcon4").fadeIn(3000);
    $(".fontTitle").animate({marginLeft: "0px"}, 3000);
    $(".fontSubTitleLeft").animate({marginLeft: "0px"}, 3000);
    $(".fontSubTitleBody").animate({marginTop: "10px"}, 3000);
    $(".pdf").animate({marginTop: "10px"}, 3000);
    $(".fontRegular").animate({marginTop: "0px"}, 3000);
    $(".headshot").animate({marginLeft: "0px"}, 3000);
    $(".skillsIcon").animate({marginTop: "0px"}, 3000);
    $(".skillsFont").fadeIn(5000);
    $("#socialIcon1").animate({marginLeft: "0px"}, 3000);
    $("#socialIcon2").animate({marginLeft: "0px"}, 3000);
    $("#socialIcon3").animate({marginLeft: "0px"}, 3000);
    $("#socialIcon4").animate({marginLeft: "0px"}, 3000);
});

  $(navIcon1).click(function(){
    $("#bgvid").fadeOut(3000);
    $("#navIcon1").fadeOut(3000);
    $("#navIcon2").fadeOut(3000);
    $("#navIcon3").fadeOut(3000);
    $("#navIcon4").fadeOut(3000);
    $(".fontTitle").animate({marginLeft: "-1000px"}, 3000);
    $(".fontSubTitleLeft").animate({marginLeft: "-1000px"}, 3000);
    $(".fontSubTitleBody").animate({marginTop: "2000px"}, 3000);
    $(".pdf").animate({marginTop: "2000px"}, 3000);
    $(".fontRegular").animate({marginTop: "2000px"}, 3000);
    $(".headshot").animate({marginLeft: "-1000px"}, 3000);
    $(".skillsIcon").animate({marginTop: "2000px"}, 3000);
    $(".skillsFont").fadeOut(5000);
    $("#socialIcon1").animate({marginLeft: "-1000px"}, 3000);
    $("#socialIcon2").animate({marginLeft: "-1000px"}, 3000);
    $("#socialIcon3").animate({marginLeft: "-1000px"}, 3000);
    $("#socialIcon4").animate({marginLeft: "-1000px"}, 3000);
    setTimeout(function(){
        window.location = "./index.html"
    }, 3000);
  });

  $(navIcon2).click(function(){
    $("#bgvid").fadeOut(3000);
    $("#navIcon1").fadeOut(3000);
    $("#navIcon2").fadeOut(3000);
    $("#navIcon3").fadeOut(3000);
    $("#navIcon4").fadeOut(3000);
    $(".fontTitle").animate({marginLeft: "-1000px"}, 3000);
    $(".fontSubTitleLeft").animate({marginLeft: "-1000px"}, 3000);
    $(".fontSubTitleBody").animate({marginTop: "2000px"}, 3000);
    $(".pdf").animate({marginTop: "2000px"}, 3000);
    $(".fontRegular").animate({marginTop: "2000px"}, 3000);
    $(".headshot").animate({marginLeft: "-1000px"}, 3000);
    $(".skillsIcon").animate({marginTop: "2000px"}, 3000);
    $(".skillsFont").fadeOut(5000);
    $("#socialIcon1").animate({marginLeft: "-1000px"}, 3000);
    $("#socialIcon2").animate({marginLeft: "-1000px"}, 3000);
    $("#socialIcon3").animate({marginLeft: "-1000px"}, 3000);
    $("#socialIcon4").animate({marginLeft: "-1000px"}, 3000);
    setTimeout(function(){
        window.location = "./resume.html"
    }, 3000);
  });

  $(navIcon3).click(function(){
    $("#bgvid").fadeOut(3000);
    $("#navIcon1").fadeOut(3000);
    $("#navIcon2").fadeOut(3000);
    $("#navIcon3").fadeOut(3000);
    $("#navIcon4").fadeOut(3000);
    $(".fontTitle").animate({marginLeft: "-1000px"}, 3000);
    $(".fontSubTitleLeft").animate({marginLeft: "-1000px"}, 3000);
    $(".fontSubTitleBody").animate({marginTop: "2000px"}, 3000);
    $(".pdf").animate({marginTop: "2000px"}, 3000);
    $(".fontRegular").animate({marginTop: "2000px"}, 3000);
    $(".headshot").animate({marginLeft: "-1000px"}, 3000);
    $(".skillsIcon").animate({marginTop: "2000px"}, 3000);
    $(".skillsFont").fadeOut(5000);
    $("#socialIcon1").animate({marginLeft: "-1000px"}, 3000);
    $("#socialIcon2").animate({marginLeft: "-1000px"}, 3000);
    $("#socialIcon3").animate({marginLeft: "-1000px"}, 3000);
    $("#socialIcon4").animate({marginLeft: "-1000px"}, 3000);
    setTimeout(function(){
        window.location = "./work.html"
    }, 3000);
  });

  $(navIcon4).click(function(){
    $("#bgvid").fadeOut(3000);
    $("#navIcon1").fadeOut(3000);
    $("#navIcon2").fadeOut(3000);
    $("#navIcon3").fadeOut(3000);
    $("#navIcon4").fadeOut(3000);
    $(".fontTitle").animate({marginLeft: "-1000px"}, 3000);
    $(".fontSubTitleLeft").animate({marginLeft: "-1000px"}, 3000);
    $(".fontSubTitleBody").animate({marginTop: "2000px"}, 3000);
    $(".pdf").animate({marginTop: "2000px"}, 3000);
    $(".fontRegular").animate({marginTop: "2000px"}, 3000);
    $(".headshot").animate({marginLeft: "-1000px"}, 3000);
    $(".skillsIcon").animate({marginTop: "2000px"}, 3000);
    $(".skillsFont").fadeOut(5000);
    $("#socialIcon1").animate({marginLeft: "-1000px"}, 3000);
    $("#socialIcon2").animate({marginLeft: "-1000px"}, 3000);
    $("#socialIcon3").animate({marginLeft: "-1000px"}, 3000);
    $("#socialIcon4").animate({marginLeft: "-1000px"}, 3000);
    setTimeout(function(){
        window.location = "./contact.html"
    }, 3000);
  });
