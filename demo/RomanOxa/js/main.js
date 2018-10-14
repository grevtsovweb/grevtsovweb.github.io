$(function(){

	// слайдеры на главной странице

	if( $(window).width() > 992 ) {
	
		$('.slider-posts').owlCarousel({
		  loop:true,
		  nav:true,
		  autoWidth:true,
		  navText: ['<svg><use xlink:href="img/sprites/general.svg#arrow-slider"/></svg>','<svg><use xlink:href="img/sprites/general.svg#arrow-slider"/></svg>']
		});

	}

	if( $(window).width() > 992 ) {

		$('.slider-video').owlCarousel({
		  
		  loop:true,
		  nav:true,
		  items: 1,
		  navText: ['<svg><use xlink:href="img/sprites/general.svg#arrow-slider"/></svg>','<svg><use xlink:href="img/sprites/general.svg#arrow-slider"/></svg>']

		});

	}

	//$('.input-mask-js').mask('+7 (999) 999-99-99');

	//sticky menu

	$(window).on('scroll', function(e){

		var header = $('.header-js'),
			top    = $(document).scrollTop(),
			logo   = $('.header__logo');

			if( top > 500 ){
				header.addClass('header_fixed')
					.removeClass('header_transparent')
					.removeClass('header_large');

				logo.removeClass('header__logo_large');
			}else{
				header.removeClass('header_fixed');
					

				if($('.page').hasClass('header-transparent')){

					header.addClass('header_transparent')
						.addClass('header_large');
					logo.addClass('header__logo_large');
				}

				
			}
	});


	//карточки товара, кирпичная плитка blog.html

	$('.masonry-container').masonry({
	  // options...
	  itemSelector: '.grid-item',
	  columnWidth: 200,
	 
	});

	var ID,
		player = $('.player'),
		mainFlag = false,
		mainPlayBtn = $('.m-play-pause-js'),
		video = $('.popup__video video');



	$('.video_js').on('click', function(e){

		e.preventDefault();


		var $this = $(this),
			videoSrc = $this.find('video').attr('src'),
			bgSrc = $this.attr('style'),
			overlay = $('.overlay'),
			popup = $('.popup'),
			popupVideo = popup.find('video'),
			popupContainer = popup.find('.popup__video');

			overlay.addClass('overlay_active');
			popup.addClass('popup_active');
			popupVideo.attr('src', videoSrc);
			popupContainer.attr('style', bgSrc);


	});

	$('.popup__video').on('click', function(e){

		var playBtn = $('popup__play');

		video.css('z-index', '1');

		if(video[0].paused){
			video[0].play();
			video.prop("controls",true);
			playBtn.css('display', 'none');
		}else{
			video[0].pause();
			video.prop("controls", false);
		}

	});

	$('.overlay').on('click', function(){

		var popup = $('.popup');

		$('.overlay').removeClass('overlay_active');
		popup.removeClass('popup_active');
		video[0].pause();
		video.css('z-index', '-1');
	});


	$('.popup__close').on('click', function(){

		var popup = $('.popup');

		$('.overlay').removeClass('overlay_active');
		popup.removeClass('popup_active');
		video[0].pause();
		video.css('z-index', '-1');

	});

	var flag = false;

	$('.hamburger-js').on('click', function(e){

		e.preventDefault();

		var menu = $('.m-menu-js'),
			page = $('.page'),
			header = $('.header-js'),
			audioMenu = $('.m-menu-audio-js'),
			hamburger = $('.hamburger-js');
			

		page.toggleClass('unscrollable');

		if(!(audioMenu.hasClass('m-menu-audio_active'))){
			menu.toggleClass('m-menu_active');
		}
		
		if(!flag){
			header.addClass('header_m-menu');
			flag = true;
		}else{
			header.removeClass('header_m-menu');
			flag = false;
		}
		hamburger.toggleClass('hamburger_active');
		audioMenu.removeClass('m-menu-audio_active');

		if(audioMenu.hasClass('m-menu-audio_active')) {
			hamburger.removeClass('hamburger_active');
		}

		
		player[0].pause();

		mainPlayBtn.removeClass('m-menu-audio__play_active');
		$('.play-btn-audio-js').removeClass('play-btn_active');

	});


	$('.play-area-js').on('click', function(e){

		e.preventDefault();

		ID = 17;
		mainFlag = false;

		var menu = $('.m-menu-js'),
			hamburger = $('.hamburger-js'),
			page = $('.page'),
			header = $('.header-js'),
			audioMenu = $('.m-menu-audio-js'),
			currentTrack = $('.audio-js[data-id='+ID+']'),
			currentBtn = currentTrack.find('.play-btn-audio-js'),
			currentTitle = currentTrack.find('.header__audio-title').html(),
			currentAuthor = currentTrack.find('.header__audio-singer').html(),
			playerTitle = $('.m-menu-audio__title'),
			playerAuthor = $('.m-menu-audio__author');




		audioMenu.addClass('m-menu-audio_active');

		if(menu.hasClass('m-menu_active')) {
			menu.removeClass('m-menu_active');
		}

		flag = true;

		page.toggleClass('unscrollable');
		menu.removeClass('m-menu_active');
		hamburger.addClass('hamburger_active');
		playerTitle.html(currentTitle);
		playerAuthor.html(currentAuthor);

	});

	

	



	$(mainPlayBtn).on('click', function(e){

		e.preventDefault();

		var traksBtn = $('.play-btn-audio-js'),
			currentTrack = $('.audio-js[data-id='+ID+']'),
			currentBtn = currentTrack.find('.play-btn-audio-js'),
			srcAudio = currentTrack.attr('data-src');

		if(!mainFlag){
			player.attr('src', srcAudio);
			player[0].play();
			mainPlayBtn.addClass('m-menu-audio__play_active');
			currentBtn.addClass('play-btn_active');
			mainFlag = true;
		}else{
			if(player[0].paused){
				player[0].play();
				mainPlayBtn.addClass('m-menu-audio__play_active');
				currentBtn.addClass('play-btn_active');
			}else{
				player[0].pause();
				mainPlayBtn.removeClass('m-menu-audio__play_active');
				traksBtn.removeClass('play-btn_active');
				currentBtn.removeClass('play-btn_active');
			}
		}

		

	});

	$('.play-btn-audio-js').on('click', function(e){


		e.preventDefault();

		var $this = $(this),
			container = $this.closest('.audio-js'),
			barContainer = container.find('.bar'),
			bar = container.find('.bar__progress'),
			btn = $('.play-btn-audio-js'),
			id = container.attr('data-id'),
			srcAudio = container.attr('data-src'),
			curTime,
			cur = -100;

			console.log(barContainer);
			

			player[0].volume = .2;

			player[0].addEventListener('timeupdate', function(e){

				curTime = player[0].currentTime;

				cur = -(player[0].duration - curTime) * 100 / player[0].duration;

				$('.audio-js[data-id='+ID+'] .bar__progress').css({'left':cur + '%'});
			});

			
			barContainer.on('mouseenter', function(){

				var offset = $(this).offset(),
					dur = player[0].duration,
					w = $(this).width();

					

					barContainer.on('mousemove', function(e){

						var x = e.pageX - offset.left,
							xproc = (x*100)/w,
							sec = (xproc*dur)/100;

						barContainer.on('click', function(){
							xproc = xproc - 100;
							$('.audio-js[data-id='+ID+'] .bar__progress').css({'left':xproc+'%'});
							player[0].currentTime = sec;
						});


					});

			});



			if(ID == id){

				if(player[0].paused){
					player[0].play();
					$this.addClass('play-btn_active');
				}else{
					player[0].pause();
					btn.removeClass('play-btn_active');
				}
			}else{
				player[0].pause();
				btn.removeClass('play-btn_active');
				ID = id;
				player.attr('src', srcAudio);
				player[0].play();	
				$this.addClass('play-btn_active');
			}



	});

	


	$('.audio-next_js').on('click', function(e){

		e.preventDefault();

		ID++;



		var traksBtn = $('.play-btn-audio-js'),
			currentTrack = $('.audio-js[data-id='+ID+']'),
			currentBtn = currentTrack.find('.play-btn-audio-js'),
			currentTitle = currentTrack.find('.header__audio-title').html(),
			currentAuthor = currentTrack.find('.header__audio-singer').html(),
			playerTitle = $('.m-menu-audio__title'),
			playerAuthor = $('.m-menu-audio__author'),
			srcAudio = currentTrack.attr('data-src');

		traksBtn.removeClass('play-btn_active');
		player[0].pause();
		player.attr('src', srcAudio);
		player[0].play();	
		currentBtn.addClass('play-btn_active');
		mainPlayBtn.addClass('m-menu-audio__play_active');

		playerTitle.html(currentTitle);
		playerAuthor.html(currentAuthor);

		

	});


	$('.audio-prev_js').on('click', function(e){

		e.preventDefault();

		ID--;



		var traksBtn = $('.play-btn-audio-js'),
			currentTrack = $('.audio-js[data-id='+ID+']'),
			currentBtn = currentTrack.find('.play-btn-audio-js'),
			currentTitle = currentTrack.find('.header__audio-title').html(),
			currentAuthor = currentTrack.find('.header__audio-singer').html(),
			playerTitle = $('.m-menu-audio__title'),
			playerAuthor = $('.m-menu-audio__author'),
			srcAudio = currentTrack.attr('data-src');

		traksBtn.removeClass('play-btn_active');
		player[0].pause();
		player.attr('src', srcAudio);
		player[0].play();	
		currentBtn.addClass('play-btn_active');
		mainPlayBtn.addClass('m-menu-audio__play_active');

		playerTitle.html(currentTitle);
		playerAuthor.html(currentAuthor);
	

	});




});




