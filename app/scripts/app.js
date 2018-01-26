import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import slick from 'slick-carousel';
import 'magnific-popup';

(function ($) {
	svg4everybody();

	var styles = [
		'padding: 0 9px',
		'background: #fff',
		'color: #000',
		'display: inline-block',
		'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2)',
		'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
		'line-height: 1.4',
		'text-align: left',
		'font-size: 12px',
		'font-weight: 400'
	].join(';');

	console.log('%c заказать html верстку', styles);
	console.log('%c gorlov35@gmail.com', styles);

	$(function() {
		const $slider = $('.slider__list');
		if ($slider.length) {
				$slider.slick({
			});
		}
		const $carousel = $('.carousel__list');
		if ($carousel.length) {
			$carousel.slick({
				slidesToShow: 4,
				responsive: [
					{
					breakpoint: 1200,
						settings: {
						  slidesToShow: 2
						}
					},
					{
					breakpoint: 991,
						settings: {
						  slidesToShow: 1
						}
					}

				]
			});

		}
		const $cardSlider = $('.card__slider');
		const $cardThumbs = $('.card__thumbs');

		$cardSlider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.card__thumbs'
		});
		$cardThumbs.slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.card__slider',
			dots: false,
			centerMode: false,
			focusOnSelect: true,
			mobileFirst: true
		});




		// Tabs
		const tabsNavLink = $('.tabs__item');
		const tabsNavLinkActive = 'tabs__item_active';
		const tab = $('.tabs__tab');
		const tabActive = 'tabs__tab_active';

		tabsNavLink.click(function (event) {
			event.preventDefault();
			$(this).addClass(tabsNavLinkActive);
			$(this).siblings().removeClass(tabsNavLinkActive);
			const tabCurrent = $(this).children().attr('href');
			tab.not(tabCurrent).removeClass(tabActive).hide();
			$(tabCurrent).fadeIn(50).addClass(tabActive).show();

			console.log(tabCurrent);

		});


		// Card magnific

		$('.card__slider-link').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});


	});

})(jQuery);
