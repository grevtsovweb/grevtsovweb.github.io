
// инициализация слайдера

$(document).ready(function(){
	$('.review-slider-blue').slick();


});

$(document).ready(function(){
	$('.review-slider-orange').slick();

});

// инициализация nicescroll

$(function() { 
	if($(window).width() > '767'){ 
	    $(".vacancies-description-left").niceScroll({
	    	cursorcolor:"#ECECEC",
	    	cursorwidth: "5px",
	    	cursorfixedheight: 110,
	    	railpadding: { top: 0, right: 0, left: 10, bottom: 0 }
	    });
	}
});

$(function() { 
	if($(window).width() > '767'){ 
	    $(".vacancies-description-right").niceScroll({
	    	cursorcolor:"#ECECEC",
	    	cursorwidth: "5px",
	    	cursorfixedheight: 110,
	    	railpadding: { top: 0, right: 0, left: 10, bottom: 0 }
	    });
	}
});



$(function(){
	
	//маска ввода input

	$(document).ready(function(){
		$('#phone-textarea').mask('+7 (999) 999-99-99');
		$('#phone-top').mask('+7 (999) 999-99-99');
		$('.main-form-field').mask('+7 (999) 999-99-99');
	});


	//parallax effect

	var topSection = $('.top-section');

	$(window).on('scroll', function(){

		topSection.css('background-position', '0 '  + $(window).scrollTop() / 2 + 'px');

	});


	$('#agree').change(function() {

		$('.submit-enable').prop('disabled', function(i, val) {
			return !val;
		})
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

	//выпадающий список

	$('.demands-list-blue li').on('click', function(){

		var that = $(this),
			itemBox = that.find('.item-list-blue'),
			itemContent = that.find('.demands-list-subheader');
			setTimeout(function(){
			  $('.vacancies-description-left').getNiceScroll().resize()
			}, 500);
			setTimeout(function(){
			  $('.vacancies-description-right').getNiceScroll().resize()
			}, 500);
			itemBox.toggleClass('item-list-blue-active');
			itemContent.slideToggle(200);
	});

	//выпадающий список

	$('.demands-list-orange li').on('click', function(){

		var that = $(this),
			itemBox = that.find('.item-list-orange'),
			itemContent = that.find('.demands-list-subheader');

			//пересчет высоты nicescroll
			setTimeout(function(){
			  $('.vacancies-description-left').getNiceScroll().resize()
			}, 500);
			setTimeout(function(){
			  $('.vacancies-description-right').getNiceScroll().resize()
			}, 500);

			itemBox.toggleClass('item-list-orange-active');
			itemContent.slideToggle(200);
	});

	//выпадающий список

	$('.proposal-list li').on('click', function(){

		var that = $(this),
			itemBox = that.find('.arrow-list'),
			itemContent = that.find('.hidden-content');
			setTimeout(function(){
			  $('.vacancies-description-left').getNiceScroll().resize()
			}, 500);
			setTimeout(function(){
			  $('.vacancies-description-right').getNiceScroll().resize()
			}, 500);
			itemBox.toggleClass('rotate-arrow');
			itemContent.slideToggle(200);
	});




	$('.text-overlay-link').on('click', function(e){

		e.preventDefault();

		$('.about-text-overlay').toggleClass('hide-text');
		$('.text-overlay-link').toggleClass('link-down');
		$('.about-text').toggleClass('height-fixed');

		setTimeout(function(){
		  $('.vacancies-description-left').getNiceScroll().resize()
		}, 500);

		setTimeout(function(){
		  $('.vacancies-description-right').getNiceScroll().resize()
		}, 500);

	});


	$('.btn-first-left').on('click', function(e){

		e.preventDefault();

		if( $(window).width() < '1200' && $(window).width() > '767' ){
			$('.btn-back-header-left').addClass('active-left');
		}

		if( $(window).width() < '1200' && $(window).width() > '767' ){
			$('.btn-second-left').addClass('btn-left-active');
			$('.manager-image-left').addClass('hide-manager');
			$('.manager-content').addClass('min-height');	
		}

		if( $(window).width() < '1200' ){
			$('.form-main .btn-footer').removeClass('btn-hidden');
			$('.form-main').addClass('footer-higher');
		}

		if( $(window).width() < '767'){
			$('.btn-back-footer-left').addClass('active-footer');
			$('.index-sticky').addClass('show-sticky');
		}

		$('.review-slider-blue').slick('reinit');
		$('.manager-section-header').addClass('hide-text');
		$('.manager-section-description').addClass('hide-text');

		if( $(window).width() > '767'){
			$('.btn-first-left').addClass('btn-hidden');
		}

		
		$('.btn-second-left').addClass('btn-show');
		$('.manager-right').addClass('hide-manager');
		$('.manager-left').addClass('manager-wrapper-move');
		$('.manager-header-left').addClass('header-move');
		$('.manager-image-left').addClass('left-image-move');
		$('.btn-back-left').addClass('show');
		$('.manager-section').addClass('manager-section-active-left');

		$('.vacancies-description-left').addClass('active-vacancies-description');

		setTimeout(function(){
		  $('.vacancies-description-left').getNiceScroll().resize()
		}, 500);


		// sticky button

		if( $(window).width() < '767'){

			var postion = $('.manager-left').offset().top,
		    	height = $('.manager-left').height();
		    	windowHeight = $(window).height();
			$(document).on('scroll', function (){
		
				var scroll = $(document).scrollTop();
			
				if( $('.vacancies-description-left').hasClass('active-vacancies-description') && scroll  > postion && scroll < (postion + height - windowHeight) ) {
					$('.index-sticky').addClass('show-sticky');
				}else {
					$('.index-sticky').removeClass('show-sticky');
				}
			});
		}

		$('.btn-footer').addClass('btn-move-right');

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
		
		$('.vacancies-description-left').animate({
	        scrollTop: $('.term').offset().top
	    }, 20);
	
	
	});



	$('.btn-back-footer-left').on('click', function(){

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
		$('.btn-back-footer-left').removeClass('active-footer');
		$('.index-sticky').removeClass('show-sticky');

		$('.btn-footer').removeClass('btn-move-right');
		$('.form-main .btn-footer').addClass('btn-hidden');
		$('.form-main').removeClass('footer-higher');
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
		$('.form-main').removeClass('footer-higher');
		$('.form-main .btn-footer').addClass('btn-hidden');
	});

	$('.btn-first-right').on('click', function(e){

		e.preventDefault();

		if( $(window).width() < '1200' && $(window).width() > '767' ){
			$('.btn-back-header-right').addClass('active-right');
		}

		if( $(window).width() < '1200' && $(window).width() > '767' ){
			$('.btn-second-right').addClass('btn-right-active');
			$('.manager-image-right').addClass('hide-manager');
			$('.manager-content').addClass('min-height');
		}

		if( $(window).width() < '1200' ){
			$('.form-main .btn-footer').removeClass('btn-hidden');
			$('.form-main').addClass('footer-higher');
		}

		if( $(window).width() < '767'){
			$('.btn-back-footer-right').addClass('active-footer');
			$('.index-sticky').addClass('show-sticky');
		}

		$('.manager-section-header').addClass('hide-text');
		$('.manager-section-description').addClass('hide-text');
		if( $(window).width() > '767'){
			$('.btn-first-right').addClass('btn-hidden');
		}
		
		$('.review-slider-orange').slick('reinit');
		$('.btn-second-right').addClass('btn-show');
		$('.manager-left').addClass('hide-manager');
		$('.manager-right').addClass('manager-wrapper-move');
		$('.manager-header-right').addClass('header-move');
		$('.manager-image-right').addClass('right-image-move');
		$('.btn-back-right').addClass('show');
		$('.manager-section').addClass('height-up');
		$('.manager-section').addClass('manager-section-active-right');

		$('.vacancies-description-right').addClass('active-vacancies-description-right');
		

		// sticky button

		if( $(window).width() < '767'){

			var postion = $('.manager-right').offset().top,
		    	height = $('.manager-right').height();
		    	windowHeight = $(window).height();
			$(document).on('scroll', function (){
		
				var scroll = $(document).scrollTop();
			
				if( $('.vacancies-description-right').hasClass('active-vacancies-description-right') && scroll  > postion && scroll < (postion + height - windowHeight) ) {
					$('.index-sticky').addClass('show-sticky');
				}else {
					$('.index-sticky').removeClass('show-sticky');
				}
			});
		}

		$('.btn-footer').addClass('btn-move-right');

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

		$('.vacancies-description-right').animate({
	        scrollTop: $('.term').offset().top
	    }, 20);

	});

	$('.btn-back-footer-right').on('click', function(){

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
		$('.btn-back-footer-right').removeClass('active-footer');
		$('.index-sticky').removeClass('show-sticky');
		$('.btn-footer').removeClass('btn-move-right');
		$('.form-main .btn-footer').addClass('btn-hidden');
		$('.form-main').removeClass('footer-higher');
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
		$('.form-main').removeClass('footer-higher');
		$('.form-main .btn-footer').addClass('btn-hidden');
	});


	//анимация progres-bar

	if($(window).width() > '767'){
		$('.vacanciesSrollLeft').scroll(function(){
			var ratio = $('.vacanciesSrollLeft').scrollTop() / (($('.dutiesLeft').height() - 200) / 100) ;
			if(ratio < 110){
				$('.progress-left').css('top', -100 + ratio  + '%');
			}
		});
	}

	if($(window).width() > '767'){
		$('.vacanciesSrollRight').scroll(function(){
			var ratio = $('.vacanciesSrollRight').scrollTop() / (($('.dutiesRight').height() - 200) / 100) ;
			if(ratio < 110){
				$('.progress-right').css('top', -100 + ratio  + '%');
			}	
		});
	}


	//скролл к верху при открытии оранжевого менеджера 

	if($(window).width() < '1200' && $(window).width() > '767'){
		$("#btn-scroll").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#scroll-to-tablet").offset().top
		    }, 20);
		});
	}else if($(window).width() < '767'){
		$("#btn-scroll").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#scroll-to").offset().top
		    }, 20);
		});
	}



	$('.video-wrapper').on('click', function(){

		var $this = $(this),
			video = $this.children('.video');
			playBtn = $this.children('.play-button');

		if(video[0].paused){
			video[0].play();
			video.prop("controls",true);
			playBtn.addClass('hidden-content');
		}else{
			video[0].pause();
			
		}
	});


	if($(window).width() < '460'){
		$('textarea').attr('placeholder', 'Введите ваше предложение:');
	}

});



