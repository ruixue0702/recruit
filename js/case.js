$(document).ready(function(){
	$(".content-case-con[name='o1']").show();
});

function ourcase(a){
    var name = $(a).attr("name");
    $(".content-case-con").hide();
    $(".content-case-con[name='"+name+"']").show();
  }