$(document).ready(function(){

	jQuery('[data-youtube]').youtube_background();

	$('[data-fancybox]').fancybox({
		touch: false,
		autoFocus: false
	});

	$('.js-validate').validate({
		rules: {
			name: {required: true},
			phone: {required: true}
		}
	});

	function scroll() {
		$(".js-scroll a").on("click", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href');
			if(id.charAt(0) == '#'){
				$('html, body').animate({
					scrollTop: $(id).offset().top
				}, 1500);
				if($(".promo-top__burger").hasClass('active')){
					$(".promo-top__burger").toggleClass('active');
				}
				if($(".promo-content__menu").hasClass('active')){
					$(".promo-content__menu").toggleClass('active');
				}
				if($("body").hasClass('show-scroll')){
					$("body").toggleClass('show-scroll');
				}
			}else{
				location.href = id;
			}
		});
	}

	scroll();

	$(".promo-top__burger").click(function () {
		$(".promo-top__burger").toggleClass('active');
		$(".promo-content__menu").toggleClass('active');
		$("body").toggleClass('show-scroll');
	});

	$('.novelty, .philosophy, .footer, .chef-photo').parallaxify({
		positionProperty: 'transform',
		mouseMotionType: 'gaussian',
		useMouseMove: true
	});

	function resizeImageInterior() {
	  var item = $('.interior-slide__img-full'),
	      win_w = $(window).width(),
	      width = (win_w / 100) * 54;
	  item.css('width', width);
	};

	$(window).resize(resizeImageInterior);
	$(document).ready(resizeImageInterior);

	var inSlider = $('.interior-slider');

	inSlider.slick({
		dots: false,
		arrows: false,
		fade: true,
		useTransform: true,
  	cssEase: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
	});

	inSlider.on("afterChange", function(event, slick, currentSlide, nextSlide){
    $(".count-current").text(parseInt(currentSlide + 1));
    $(".count-all").text(slick.slideCount);
  });

  $(".count-current").text('1');
  $(".count-all").text(inSlider.slick("getSlick").slideCount);

	$(".interior-slider__arrow-next, .interior-mobile-arrow__next").click(function() {
	  inSlider.slick("next");
	});
	$(".interior-slider__arrow-prev, .interior-mobile-arrow__prev").click(function() {
	  inSlider.slick("prev");
	});

	$('.bigMenu-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: false,
	  fade: true,
	  asNavFor: '.bigMenu-item__link ul'
	});
	$('.bigMenu-item__link ul').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  asNavFor: '.bigMenu-slider',
	  dots: false,
	  arrows: false,
	  variableWidth: true,
	  focusOnSelect: true
	});

	$(".bigMenu-item__link-next").click(function() {
	  $('.bigMenu-item__link ul').slick("next");
	});

	$('.js-transition-line').textillate({ in: { effect: 'fadeInUp' } });

	$('.tryFirst-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  infinite: false,
	  dots: false,
	  // arrows: false,
	  variableWidth: true,
	  focusOnSelect: true
	});

	$('.features-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  infinite: false,
	  dots: false,
	  // arrows: false,
	  variableWidth: true,
	  focusOnSelect: true
	});

	$('.newsPoster-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  infinite: false,
	  dots: false,
	  // arrows: false,
	  variableWidth: true,
	  focusOnSelect: true
	});

	$('.menu-list li').click(function() {
	  $('.menu-list li').removeClass('active');
	  $(this).addClass('active');
	  var id = $('.menu-list li.active').data('tab');
	  $('.menu-tab.active').removeClass('active');
	  $('.menu-tab[data-tab='+ id +']').addClass('active');
	});

	function resizeGallery() {
	  var item = $('.js-resize-gallery'),
      width = parseInt(item.css('width'));
  	item.css('height', width);
	};

	$(window).resize(resizeGallery);
	$(document).ready(resizeGallery);

	$(".datetimepicker").flatpickr({
		"locale": "ru",
		enableTime: true,
    minTime: "00:00",
    maxTime: "23:00",
    dateFormat: "d.m.Y H:i",
    minDate: "today"
	});

	$('.promo-slider, .philosophy-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  infinite: true,
	  dots: false,
	  arrows: false,
	  autoplay: true,
 		autoplaySpeed: 4000,
 		fade: true,
  	cssEase: 'linear'
	});

  if($("body").innerWidth() < 578){
  	$('.philosophy-slider__item').removeAttr('data-parallax');
  }

});