$(function(){
	$(document).ready(function(){
		$('.review-slider-blue').slick();
		$('.press-slider-blue').slick();
		$('.review-slider-orange').slick();
		$('.press-slider-orange').slick();
	});
	



	var topSection = $('.top-section');

	$(window).on('scroll', function(){

		topSection.css('background-position', '0 '  + $(window).scrollTop() / 2 + 'px');

	});


	//открытие верхнего popup

	$('.open-popup').on('click', function(e){
		e.preventDefault();
		$('.resume-form').addClass('resume-form-show');
		$('.overlay-popup').addClass('resume-form-show');
	});

	$('.btn-close').on('click', function(e){
		e.preventDefault();
		$('.resume-form').removeClass('resume-form-show');
		$('.overlay-popup').removeClass('resume-form-show');
	});


	$('.overlay-popup').on('click', function(e){
		e.preventDefault();
		$('.resume-form').removeClass('resume-form-show');
		$('.overlay-popup').removeClass('resume-form-show'); 
	});

	
	$('.btn-second-right').on('click', function(e){
		e.preventDefault();
		$('.resume-form').addClass('resume-form-show');
		$('.overlay-popup').addClass('resume-form-show');
	});

	$('.btn-second-left').on('click', function(e){
		e.preventDefault();
		$('.resume-form').addClass('resume-form-show');
		$('.overlay-popup').addClass('resume-form-show');
	});

	
	$('.btn-footer').on('click', function(e){
		e.preventDefault();
		$('.resume-form').addClass('resume-form-show');
		$('.overlay-popup').addClass('resume-form-show');
	});

	//открытие нижнего popup


	$('.open-text-area').on('click', function(e){
		e.preventDefault();
		$('.resume-form-conditions').addClass('resume-form-show');
		$('.overlay-popup').addClass('resume-form-show');
	});

	$('.btn-close').on('click', function(e){
		e.preventDefault();
		$('.resume-form-conditions').removeClass('resume-form-show');
		$('.overlay-popup').removeClass('resume-form-show');
	});

	$('.overlay-popup').on('click', function(e){
		e.preventDefault();
		$('.resume-form-conditions').removeClass('resume-form-show');
		$('.overlay-popup').removeClass('resume-form-show'); 
	});



	$('.demands-list-blue li').on('click', function(){

		var that = $(this),
			itemBox = that.find('.item-list-blue'),
			itemContent = that.find('.demands-list-subheader');

			itemBox.toggleClass('item-list-blue-active');
			itemContent.slideToggle(200);
	});

	$('.demands-list-orange li').on('click', function(){

		var that = $(this),
			itemBox = that.find('.item-list-orange'),
			itemContent = that.find('.demands-list-subheader');

			itemBox.toggleClass('item-list-orange-active');
			itemContent.slideToggle(200);
	});


	$('.proposal-list li').on('click', function(){

		var that = $(this),
			itemBox = that.find('.arrow-list'),
			itemContent = that.find('.hidden-content');

			itemBox.toggleClass('rotate-arrow');
			itemContent.slideToggle(200);
	});

	$('.text-overlay-link').on('click', function(e){

		e.preventDefault();

		$('.about-text-overlay').toggleClass('hide-text');
		$('.text-overlay-link').toggleClass('link-down');


	});


	$('.btn-first-left').on('click', function(e){

		e.preventDefault();

		if( $(window).width() < '1200' && $(window).width() > '768' ){
			$('.btn-back-header-left').addClass('active-left');
		}

		if( $(window).width() < '1200' && $(window).width() > '768' ){
			$('.btn-second-left').addClass('btn-left-active');
			$('.manager-image-left').addClass('hide-manager');
			$('.manager-content').addClass('min-height');
		}

		$('.manager-section-header').addClass('hide-text');
		$('.manager-section-description').addClass('hide-text');
		$('.btn-first-left').addClass('btn-hidden');
		$('.btn-second-left').addClass('btn-show');
		$('.manager-right').addClass('hide-manager');
		$('.manager-left').addClass('manager-wrapper-move');
		$('.manager-header-left').addClass('header-move');
		$('.manager-image-left').addClass('left-image-move');
		$('.btn-back-left').addClass('show');
		$('.manager-section').addClass('manager-section-active-left');

		$('.vacancies-description-left').addClass('active-vacancies-description');

	});

	$('.btn-back-left').on('click', function(e){

		e.preventDefault();

		$('.manager-section-header').removeClass('hide-text');
		$('.manager-section-description').removeClass('hide-text');
		$('.btn-first-left').removeClass('btn-hidden');
		$('.btn-second-left').removeClass('btn-show');
		$('.btn-second-left').removeClass('btn-left-active');
		$('.manager-right').removeClass('hide-manager');
		$('.manager-left').removeClass('manager-wrapper-move');
		$('.manager-content').removeClass('min-height');
		$('.manager-header-left').removeClass('header-move');
		$('.manager-image-left').removeClass('hide-manager');
		$('.manager-image-left').removeClass('left-image-move');
		$('.btn-back-left').removeClass('show');
		$('.manager-section').removeClass('manager-section-active-left');
		$('.vacancies-description-left').removeClass('active-vacancies-description');
	});

	$('.btn-back-header-left').on('click', function(){

		$('.manager-section-header').removeClass('hide-text');
		$('.manager-section-description').removeClass('hide-text');
		$('.btn-secons-left').removeClass('btn-left-active');
		$('.btn-first-left').removeClass('btn-hidden');
		$('.btn-second-left').removeClass('btn-show');
		$('.manager-right').removeClass('hide-manager');
		$('.manager-left').removeClass('manager-wrapper-move');
		$('.manager-header-left').removeClass('header-move');
		$('.manager-image-left').removeClass('hide-manager');
		$('.manager-image-left').removeClass('left-image-move');
		$('.manager-content').removeClass('min-height');
		$('.btn-back-left').removeClass('show');
		$('.manager-section').removeClass('height-up');
		$('.manager-section').removeClass('manager-section-active-left');
		$('.btn-back-header-left').removeClass('active-left');

		$('.vacancies-description-left').removeClass('active-vacancies-description');

	});

	$('.btn-first-right').on('click', function(e){

		e.preventDefault();

		if( $(window).width() < '1200' && $(window).width() > '768' ){
			$('.btn-back-header-right').addClass('active-right');
		}

		if( $(window).width() < '1200' && $(window).width() > '768' ){
			$('.btn-second-right').addClass('btn-right-active');
			$('.manager-image-right').addClass('hide-manager');
			$('.manager-content').addClass('min-height');
		}

		$('.manager-section-header').addClass('hide-text');
		$('.manager-section-description').addClass('hide-text');
		$('.btn-first-right').addClass('btn-hidden');
		$('.btn-second-right').addClass('btn-show');
		$('.manager-left').addClass('hide-manager');
		$('.manager-right').addClass('manager-wrapper-move');
		$('.manager-header-right').addClass('header-move');
		$('.manager-image-right').addClass('right-image-move');
		$('.btn-back-right').addClass('show');
		$('.manager-section').addClass('height-up');
		$('.manager-section').addClass('manager-section-active-right');

		$('.vacancies-description-right').addClass('active-vacancies-description-right');
		
	});

	$('.btn-back-right').on('click', function(e){

		e.preventDefault();

		$('.manager-section-header').removeClass('hide-text');
		$('.manager-section-description').removeClass('hide-text');
		$('.btn-first-right').removeClass('btn-hidden');
		$('.btn-second-right').removeClass('btn-show');
		$('.btn-second-right').removeClass('btn-right-active');
		$('.manager-right').removeClass('hide-manager');
		$('.manager-left').removeClass('hide-manager');
		$('.manager-right').removeClass('manager-wrapper-move');
		$('.manager-header-right').removeClass('header-move');
		$('.manager-image-right').removeClass('hide-manager');
		$('.manager-image-right').removeClass('right-image-move');
		$('.manager-content').removeClass('min-height');
		$('.btn-back-right').removeClass('show');
		$('.manager-section').removeClass('height-up');
		$('.manager-section').removeClass('manager-section-active-right');

		$('.vacancies-description-right').removeClass('active-vacancies-description-right');
	});

	$('.btn-back-header-right').on('click', function(){

		$('.manager-section-header').removeClass('hide-text');
		$('.manager-section-description').removeClass('hide-text');
		$('.btn-second-right').removeClass('btn-left-active');
		$('.btn-first-right').removeClass('btn-hidden');
		$('.btn-second-right').removeClass('btn-show');
		$('.manager-left').removeClass('hide-manager');
		$('.manager-right').removeClass('manager-wrapper-move');
		$('.manager-header-right').removeClass('header-move');
		$('.manager-image-right').removeClass('hide-manager');
		$('.manager-image-right').removeClass('right-image-move');
		$('.btn-back-right').removeClass('show');
		$('.manager-content').removeClass('min-height');
		$('.manager-section').removeClass('height-up');
		$('.manager-section').removeClass('manager-section-active-right');
		$('.btn-back-header-right').removeClass('active-right');

		$('.vacancies-description-right').removeClass('active-vacancies-description-right');

	});


	$('.vacanciesSrollLeft').scroll(function(){
		var ratio = $('.vacanciesSrollLeft').scrollTop() / (($('.dutiesLeft').height() - 200) / 100) ;
		if(ratio < 110){
			$('.progress-left').css('top', -100 + ratio  + '%');
		}
	});


	$('.vacanciesSrollRight').scroll(function(){
		var ratio = $('.vacanciesSrollRight').scrollTop() / (($('.dutiesRight').height() - 200) / 100) ;
		if(ratio < 110){
			$('.progress-right').css('top', -100 + ratio  + '%');
		}	
	});

});


