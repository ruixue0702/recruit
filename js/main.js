$(document).ready(function(){
	$(".right-nav-close").click(function(){
		$(".right-nav").hide();
	});

// top-right
// slide
var _index5=0;
$(".right-nav .but_up").click(function(){
	_index5++;
	var len=$(".right-nav .right-nav-center ul.right-nav-list-con li").length;
	if(_index5+5>len){
		$(".right-nav .right-nav-center ul.right-nav-list-con").stop().append($(".right-nav .right-nav-center ul.right-nav-list-con").html());
	}
	$(".right-nav .right-nav-center ul.right-nav-list-con").stop().animate({bottom:-_index5*89},1000);
	});
$(".right-nav .but_down").click(function(){
	if(_index5==0){
		$(".right-nav .right-nav-center ul.right-nav-list-con").prepend($(".right-nav .right-nav-center ul.right-nav-list-con").html());
		$(".right-nav .right-nav-center ul.right-nav-list-con").css("bottom","445px");
		_index5=6
	}
	_index5--;
	$(".right-nav-center  ul.right-nav-list-con").stop().animate({bottom:-_index5*89},1000);
	});
// slide结束
// top-right结束
});