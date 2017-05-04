$(document).ready(function(){


// header
		    var banner_tabs = function(id){
		        this.ctn = document.getElementById(id);
		        this.adLis = null;
		        this.btns = null;
		        this.animStep = 0.2;//动画速度0.1～0.9
		        this.switchSpeed = 2;//自动播放间隔(s)
		        this.defOpacity = 1;
		        this.tmpOpacity = 1;
		        this.crtIndex =0;
		        this.crtLi = null;
		        this.adLength = 0;
		        this.timerAnim = null;
		        this.timerSwitch = null;
		        this.init();
		    };
		    banner_tabs.prototype = {
		        fnAnim:function(toIndex){
		            if(this.timerAnim){window.clearTimeout(this.timerAnim);}
		            if(this.tmpOpacity <= 0){
		                this.crtLi.style.opacity = this.tmpOpacity = this.defOpacity;
		                this.crtLi.style.filter = 'Alpha(Opacity=' + this.defOpacity*100 + ')';
		                this.crtLi.style.zIndex = 0;
		                this.crtIndex = toIndex;
		                return;
		            }
		            this.crtLi.style.opacity = this.tmpOpacity = this.tmpOpacity - this.animStep;
		            this.crtLi.style.filter = 'Alpha(Opacity=' + this.tmpOpacity*100 + ')';
		            this.timerAnim = window.setTimeout(this.fnAnim.bind(this,toIndex),50);
		        },
		        fnNextIndex:function(){
		            return (this.crtIndex >= this.adLength-1)?0:this.crtIndex+1;
		        },
		        fnSwitch:function(toIndex){
		            if(this.crtIndex==toIndex){return;}
		            this.crtLi = this.adLis[this.crtIndex];
		            for(var i=0;i<this.adLength;i++){
		                this.adLis[i].style.zIndex = 0;
		            }
		            this.crtLi.style.zIndex = 2;
		            this.adLis[toIndex].style.zIndex = 1;
		            for(var i=0;i<this.adLength;i++){
		                this.btns[i].className = '';
		            }
		            this.btns[toIndex].className = 'cur'
		            this.fnAnim(toIndex);
		        },
		        fnAutoPlay:function(){
		            this.fnSwitch(this.fnNextIndex());
		        },
		        fnPlay:function(){
		            this.timerSwitch = window.setInterval(this.fnAutoPlay.bind(this),this.switchSpeed*1000);
		        },
		        fnStopPlay:function(){
		            window.clearTimeout(this.timerSwitch);
		        },
		        init:function(){
		            this.adLis = this.ctn.getElementsByTagName('li');
		            this.btns = this.ctn.getElementsByTagName('cite')[0].getElementsByTagName('span');
		            this.adLength = this.adLis.length;
		            for(var i=0,l=this.btns.length;i<l;i++){
		                with({i:i}){
		                    this.btns[i].index = i;
		                    this.btns[i].onclick = this.fnSwitch.bind(this,i);
		                    this.btns[i].onclick = this.fnSwitch.bind(this,i);
		                }
		            }
		            this.adLis[this.crtIndex].style.zIndex = 2;
		            this.fnPlay();
		            this.ctn.onmouseover = this.fnStopPlay.bind(this);
		            this.ctn.onmouseout = this.fnPlay.bind(this);
		        }
		    };
	    var player1 = new banner_tabs('banner_tabs');

// header结束
// whatcanwedo
$(".change_bg").hover(function(){
	$(this).css("background","rgba(255,255,255,0.8)");
},function(){
	$(this).css("background","");
});
// whatcanwedo结束		

// ourteam
$(".ourteamcell img").mousemove(function(){
	$(this).addClass("flip");
    var time=setInterval(function(){
       $(".ourteamcell img").removeClass('flip');
    },1500);
    setInterval = (function(){

                } ,2500);
});
function flip(a){

}
// ourteam结束

// case
$(function() {
	$('#da-thumbs > li').hoverdir();
});

  $(".mycase").hide();
  $(".mycase[name='case1']").show();

// case结束

// slide


var _index5=0;
$("#four_flash .but_right img").click(function(){
	_index5++;
	var len=$(".flashBg ul.mobile li").length;
	if(_index5+5>len){
		$("#four_flash .flashBg ul.mobile").stop().append($("ul.mobile").html());
	}
	$("#four_flash .flashBg ul.mobile").stop().animate({left:-_index5*221},1000);
	});

	
$("#four_flash .but_left img").click(function(){
	if(_index5==0){
		$("ul.mobile").prepend($("ul.mobile").html());
		$("ul.mobile").css("left","-1108px");
		_index5=6
	}
	_index5--;
	$("#four_flash .flashBg ul.mobile").stop().animate({left:-_index5*221},1000);
	});
// slide结束

});
// case
function c(a){
    var name = $(a).attr("name");
    $(".mycase").hide();
    $(".mycase[name='"+name+"']").show();
  }