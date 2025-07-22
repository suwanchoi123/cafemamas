$(function () {
  //슬라이드
    function slide(){
        $(".slide ul").animate({left:"-100%"},1000,function(){
            $(".slide ul").append($('.slide ul li').first())
            $(".slide ul").css({left:0})
        })
    }
    setInterval(slide, 10000)
});
