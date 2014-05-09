$(function(){
	var num = 1;
	var newNum;

	$('.slider-nav a').click(function(){

		if($(this).hasClass('selected')){
			return false;
		} else {
			if($(this).attr('class') == 'slider-nav-item-1') {
				$('.slider-nav a').removeClass('selected');
				$(this).addClass('selected');
				$('.slider-title, .slider-content').fadeOut().hide();
				$('.slider-title-1, .slider-content-1').fadeIn(800);
				$('body').css({'background-image': 'url(/img/bg-mountain.jpg)'});
				newNum = 0;
			}
			if($(this).attr('class') == 'slider-nav-item-2') {
				$('.slider-nav a').removeClass('selected');
				$(this).addClass('selected');
				$('.slider-title, .slider-content').fadeOut().hide();
				$('.slider-title-2, .slider-content-2').fadeIn(800);
				$('body').css({'background-image': 'url(/img/bg-purple.jpg)'});
				newNum = 1;
			}
			if($(this).attr('class') == 'slider-nav-item-3') {
				$('.slider-nav a').removeClass('selected');
				$(this).addClass('selected');
				$('.slider-title, .slider-content').fadeOut().hide();
				$('.slider-title-3, .slider-content-3').fadeIn(800);
				$('body').css({'background-image': 'url(/img/bg-trees.jpg)'});
				newNum = 2;
			}
			if($(this).attr('class') == 'slider-nav-item-4') {
				$('.slider-nav a').removeClass('selected');
				$(this).addClass('selected');
				$('.slider-title, .slider-content').fadeOut().hide();
				$('.slider-title-4, .slider-content-4').fadeIn(800);
				$('body').css({'background-image': 'url(/img/bg-sea.jpg)'});
				newNum = 3;
			}
			return false;
		}
	});


	window.setInterval(nextTab, 7000);

	function nextTab() {
		if(typeof newNum != 'undefined'){num = newNum;}
		$('.slider-nav a').eq(num).click();
		if (num >= 3) {num = 0;} else {num++;}
		newNum = undefined;
	}

});