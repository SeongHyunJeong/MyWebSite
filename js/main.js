$(document).ready(function() {
  var mHtml = $("html");
  var page = 1;

  mHtml.animate({
    scrollTop: 0
  }, 10);

  const content = "개발자 정승현의 개인공간입니다."; //타이핑 할 문장
  const typer = $(".typer");
  let index = 0;

  function typing() { //타이핑 효과
    if (index < content.length) {
      typer.append(content[index++]);
    }
  }

  function cursor_dely() { //커서 깜빡거림 효과
    if ($(document).scrollTop() <= 600) {
      if (typer.css("border-right") === "2px solid rgb(204, 204, 204)")
        typer.css("border-right", "none");
      else
        typer.css("border-right", "2px solid rgb(204, 204, 204)");
    }
  }
  setInterval(typing, 200);
  setInterval(cursor_dely, 600);


  $(".scroll_move").click(function(event) { //클릭 시 자연스러운 스크롤 이동
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 500);
  });

  $(".bar").click(function() {
    if($(".bar_menu").css("display") == "none")
      $(".bar_menu").show();
    else
      $(".bar_menu").hide();

  });



  (function headerControl() { //화면 사이즈에 따른 header
    var windowWidth = $(window).width();
    var headerContainer = $(".header_class").clone();
    if (windowWidth <= 800) {
      $(".header_text").hide();
      $(".header_bar").show();
      $(".bar_menu").hide();
    } else {
      $(".header_text").show();
      $(".header_bar").hide();
    }
  }());
  $(window).resize(function() {
    var windowWidth = $(window).width();
    if (windowWidth <= 800) {
      $(".header_text").hide();
      $(".header_bar").show();
    } else {
      $(".header_text").show();
      $(".header_bar").hide();
    }
  });
  /*
  var headerContainer = $(".header_class").clone();
  $(window).resize(function(){ //화면 사이즈가 변경되면 실행
    var windowWidth = $(window).width();
    if(windowWidth <= 800 && $(".container").is(".header_class") ){
      $(".container").empty();
      $(".container").removeClass("header_class");
      $(".container").addClass("bar_class");
      alert(headerContainer.text);
    }else if(windowWidth >= 800 && $(".container").is(".bar_class")){
      $(".container").append(headerContainer);
    }
  });
*/

});
