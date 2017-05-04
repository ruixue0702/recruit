$(document).ready(function(){
	$(".content-case-con[name='n1']").show();
});

function ournews(a){
    var name = $(a).attr("name");
    $(".content-case-con").hide();
    $(".content-case-con[name='"+name+"']").show();
  }