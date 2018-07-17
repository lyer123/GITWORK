$(document).ready(function(e){
  $('.search-case').click(function(e){
    $('.site-search').toggleClass('search-show')
    $(this).toggleClass('icon-search').toggleClass('icon-close');
  });
});

$(function(){
  var autoTimeId = "";
          slideAuto();
          slideInit();
          slideSeletor();
          slidePrev();
          slideNext();
});

function slideInit(){$(".module-banner .bd img").hide();}
function slideAuto(){
      var current = $ (".module-banner .bd .on");
      var next = (current.next() .length)?current .next():current.siblings().first();
      current .hide().removeClass("on");
      next .fadeIn(1500).addClass("on");
      autoTimeId = setTimeout(slideAuto,5000);
  }

  function slideSeletor(){
    $(".module-banner .hd li").click(function(){
      clearTimeout(autoTimeId);
      var index = $(this).index();
      $(".module-banner .bd").children().eq(index).fadeIn(1000).addClass("on")
       .siblings().hide().removeClass("on");
       autoTimeId = setTimeout(slideAuto,5000);
    });
  }

// left button
function slidePrev(){
  $(".module-banner .prev").click(function(){
    clearTimeout(autoTimeId);
    var current = $(".module-banner .bd .on");
    var prev = current .prev().length?
    current .prev():current.siblings().last();
    current .hide().removeClass("on");
    prev .fadeIn(1000).addClass("on");
    autoTimeId = setTimeout(slideAuto,5000);
  })
}
// right button

function slideNext(){
  $(".module-banner .next").click(function(){
    clearTimeout(autoTimeId);
    var current = $(".module-banner .bd .on");
    var prev = current .next().length?
    current .next():current.siblings().first();
    current .hide().removeClass("on");
    prev .fadeIn(1000).addClass("on");
    autoTimeId = setTimeout(slideAuto,5000);
  })
}




  


