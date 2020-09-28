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
	      width = (win_w / 100) * 60;
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

	$('.promo-slider').slick({
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

	$('.philosophy-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  infinite: true,
	  dots: true,
	  arrows: false,
	  autoplay: true,
 		autoplaySpeed: 4000,
 		fade: true,
		cssEase: 'linear',
		appendDots: $('.philosophy-dots')
	});

  if($("body").innerWidth() < 578){
  	$('.philosophy-slider__item').removeAttr('data-parallax');
	}
	
	function onScroll() {

		if($(document).scrollTop() > 200){
			$('.cta-fixed').css('right', '55px');
		}else{
			$('.cta-fixed').css('right', '-100px');
		}

	}

	onScroll();
	$(document).on("scroll", onScroll);

	$('.chef-carousel').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  infinite: true,
		dots: true,
		arrows: false,
	  variableWidth: true,
		// fade: true,
		speed: 1000,
		appendDots: $('.chef-dots')
	});

	$(".chef-next").click(function() {
	  $('.chef-carousel').slick("next");
	});
	$(".chef-prev").click(function() {
	  $('.chef-carousel').slick("prev");
	});

	$('.wedding-packet__carousel').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  infinite: false,
	  dots: false,
	  arrows: false,
	  variableWidth: true,
	  focusOnSelect: true
	});

	$('.wedding-hall__carousel').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  infinite: false,
	  dots: false,
	  arrows: false,
	  variableWidth: true,
	  focusOnSelect: true
	});

	$('.business-hall__carousel').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  infinite: false,
	  dots: false,
	  arrows: false,
	  variableWidth: true,
	  focusOnSelect: true
	});

	$('.business-packet__carousel').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  infinite: false,
	  dots: false,
	  arrows: false,
	  variableWidth: true,
	  focusOnSelect: true
	});


	$('.js-open-hall, .js-close-hall').click(function(){
		var id = $(this).data('id');
		$('.wedding-hall__item[data-id="'+id+'"] .wedding-hall__bottom').toggleClass('click');
		$('.wedding-hall__item[data-id="'+id+'"] .wedding-hall__content').toggleClass('click');
	});

	$('.js-open-bhall, .js-close-bhall').click(function(){
		var id = $(this).data('id');
		$('.business-hall__item[data-id="'+id+'"] .business-hall__bottom').toggleClass('click');
		$('.business-hall__item[data-id="'+id+'"] .business-hall__content').toggleClass('click');
	});

	$(".wedding-hall__text").mCustomScrollbar();
	$(".business-hall__text").mCustomScrollbar();

	wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 200,
    mobile: true,
    live: true
	})
	wow.init();


	function resizeItem(){
		$('.wedding-movenpick__img, .wedding-menu__img, .wedding-get__img, .wedding-desserts__img, .wedding-cocktails__img, .wedding-bride__img, .wedding-details__img, .business-promo__img, .business-tech__img, .business-menu__img, .business-group__img').is(function() {
			var item = $(this),
					width = parseInt(item.css('width')),					
					scale = $('.container').width() / width;
			item.css('zoom', scale);
		});
	}

	if($(window).width() < 768){
		$(window).resize(resizeItem);
		$(document).ready(resizeItem);
	}
	
	$('.promo-top__lang li').click(function(){
		$('.promo-top__lang li').removeClass('active');
		$(this).addClass('active');

		var lang = $(this).text();
		console.log(lang);
	});

});