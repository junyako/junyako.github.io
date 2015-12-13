$(function(){
	var _width = $(window).width();
	if(_width <= 1000){
		$(function() {
			$(".navi_btn").toggle(function(){
				$("#mainnavi").fadeIn(300);
			},function() {
				$("#mainnavi").fadeOut(300);
			});
		});
	}else{
		$.fn.enter = function(enter,leave) {
			this.on('mouseenter mouseover', enter);
			this.on('mouseleave', leave);
		};
		$(function() {
			$("#navi").enter(function() {
				$("#mainnavi").stop().animate(
					{ "opacity" : "1","width" : "670px" }, 500,"easeOutCirc");
			},function() {
				$("#mainnavi").stop().animate(
					{ "opacity" : "0","width" : "0px" }, 500,"easeOutCirc");
			});
		});
		$(".navi_btn").toggle(function(){
			$("#mainnavi").stop().animate(
				{ "opacity" : "0","width" : "0px" }, 500,"easeOutCirc");
		},function() {
			$("#mainnavi").stop().animate(
				{ "opacity" : "1","width" : "670px" }, 500,"easeOutCirc");
		});
	}
});


$(function() {
	var topBtn = $('.pagetop');	
	topBtn.hide();
	//スクロールが100に達したらボタン表示
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
	//スクロールしてトップ
    topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500,"easeOutCirc");
		return false;
    });
});