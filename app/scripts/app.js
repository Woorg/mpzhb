import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import slick from 'slick-carousel';

(function ($) {
	svg4everybody();

	var styles = [
		'padding: 9px',
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
				slidesToShow: 4
            });
		}
	});

})(jQuery);
