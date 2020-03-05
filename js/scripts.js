$(function () {
	var flag = 0;
	$(".hero__slider-items").slick({
		arrows: false,
		dots: true,
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 2000,
		appendDots: $(".dots")
	});
	$(".hero__ham").on('click', function () {
		if (flag == 0) {
			$('.hero__ham-line_1').addClass('active-1');
			$('.hero__ham-line_2').addClass('active-2');
			$('.hero__ham-line_3').addClass('active-3');
			$('.hero__hide-menu').slideDown();
			flag = 1;
		}else if(flag == 1){
			$('.hero__ham-line_1').removeClass('active-1');
			$('.hero__ham-line_2').removeClass('active-2');
			$('.hero__ham-line_3').removeClass('active-3');
			$('.hero__hide-menu').slideUp();
			flag = 0;
		}
	});
	
	$('.footer-nav__hide-btn').on('click', function (argument) {
	    $(this).next().slideToggle();// если элемент скрыт то покажет и наоборот
	    $('.footer-nav__hide-block:visible').not($(this).next()).slideUp();// визибл те кто видны
 	 });
});
