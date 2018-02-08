import svg4everybody from 'svg4everybody';
// import $ from 'jquery';
import slick from 'slick-carousel';
import 'magnific-popup';
import mask from "jquery-mask-plugin";

(function ($) {

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
		// const $slider = $('.slider__list');
		// if ($slider.length) {
		// 		$slider.slick({
		// 			arrows: false
		// 	});
		// }
		svg4everybody();

		var $carousel = $('.carousel__list');
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
		var $cardSlider = $('.card__slider');
		var $cardThumbs = $('.card__thumbs');

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
		var tabsNavLink = $('.tabs__item');
		var tabsNavLinkActive = 'tabs__item_active';
		var tab = $('.tabs__tab');
		var tabActive = 'tabs__tab_active';

		tabsNavLink.click(function (event) {
			event.preventDefault();
			$(this).addClass(tabsNavLinkActive);
			$(this).siblings().removeClass(tabsNavLinkActive);
			var tabCurrent = $(this).children().attr('href');
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

		// Examples magnific

		$('.examples__link').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});

		$('.service__sertificate').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});

		// Team magnific

		$('.team__image').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});

		// History magnific

		$('.history__image').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});

		// Objects-full magnific

		$('.objects-full__link').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});


		// File input

		$('.form__label_file').on('change', '.form__file-input', function(event) {
			$(this).siblings('.form__file-text').html(this.value);
		});

		// mask

		var $formPhone = $('.form__field_phone input');

		$formPhone.mask("+ 7 (999) 999-99-99",
			{
				placeholder: "+7 (...)"
			}
		);

		function pageWidget(pages) {
			var widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
			widgetWrap.prependTo("body");
			for (var i = 0; i < pages.length; i++) {
				$('<li class="widget_item"><a class="widget_link" href="' + pages[i] + '.html' + '">' + pages[i] + '</a></li>').appendTo('.widget_list');
			}
			var widgetStilization = $('<style>body {position:relative} .widget_wrap{position:absolute;top:0;left:0;z-index:9999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>');
			widgetStilization.prependTo(".widget_wrap");
		}

		pageWidget(['index', 'card', 'categories', 'subcategories', 'service-1', 'service-3', 'service-4', 'about', 'history', 'objects']);

	});

})(jQuery);
