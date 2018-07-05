$(function(){

	var canScroll = true,
    	scrollController = null,
    	video = $('.video'),
		playBtn = $('.play-button'),
		mainMenu = $('.main-menu'),
		overlay = $('.overlay'),
		closeMenu = $('.close-btn');

	$('.mobile-burger').on('click', function(e){
		e.preventDefault();

		mainMenu.addClass('main-menu__active');
		overlay.addClass('overlay__active');
	});

	overlay.on('click', function(e){
		e.preventDefault();

		mainMenu.removeClass('main-menu__active');
		overlay.removeClass('overlay__active');
	});

	closeMenu.on('click', function(e){
		e.preventDefault();
		mainMenu.removeClass('main-menu__active');
		overlay.removeClass('overlay__active');
	});

	$(this).on('mousewheel DOMMouseScroll', function(e){

		e.preventDefault();

		var delta = (e.originalEvent.wheelDelta) ? -e.originalEvent.wheelDelta : e.originalEvent.detail * 20;

		if (delta > 50 && canScroll) {
			canScroll = false;
			clearTimeout(scrollController);
			scrollController = setTimeout(function(){
				canScroll = true;
			}, 800);
			updateHelper(1);
		}
		else if (delta < -50 && canScroll) {
			canScroll = false;
			clearTimeout(scrollController);
			scrollController = setTimeout(function(){
				canScroll = true;
			}, 800);
			updateHelper(-1);
		}

		if(!($('.section-4').hasClass('section-is-active')) && video[0].played){
			video[0].pause();
			video.prop("controls", false);
			playBtn.removeClass('hidden');
		}

		if($('.section-4').hasClass('section-is-active')){
			$('.main-header__phone').addClass('white');
			$('.main-footer__right').addClass('white');
			$('.site-description').addClass('white');	
			$('.social-icon svg').addClass('svg-white')
		} else {
			$('.main-header__phone').removeClass('white');
			$('.main-footer__right').removeClass('white');
			$('.site-description').removeClass('white');
			$('.social-icon svg').removeClass('svg-white')
		}

	});


	$('.slide-nav li').on('click', function(){

		if(!($(this).hasClass('slide-nav__indicator-is-active'))){
			
			var $this = $(this),
				nextPos = $this.parent().children().index($this);

			updateNavs(nextPos);
			updateContent(nextPos);

		}

		if($('.section-4').hasClass('section-is-active')){
			$('.main-header__phone').addClass('white');
			$('.main-footer__right').addClass('white');
			$('.site-description').addClass('white');	
			$('.social-icon svg').addClass('svg-white')
		} else {
			$('.main-header__phone').removeClass('white');
			$('.main-footer__right').removeClass('white');
			$('.site-description').removeClass('white');
			$('.social-icon svg').removeClass('svg-white')
		}

	});

	playBtn.on('click', function(){

		if(video[0].paused){
			video[0].play();
			video.prop("controls",true);
			playBtn.addClass('hidden');
		}else{
			video[0].pause();
			video.prop("controls", false);
			playBtn.removeClass('hidden');
		}

	});
	
	video.on('click', function(){

		if(video[0].paused){
			video[0].play();
			video.prop("controls",true);
			playBtn.addClass('hidden');
		}else{
			video[0].pause();
			video.prop("controls", false);
			playBtn.removeClass('hidden');
		}

	});

	function updateHelper(param) {

	var curActive = $('.slide-nav').find('.slide-nav__indicator-is-active'),
		curPos = $('.slide-nav').children().index(curActive),
		lastItem = $('.slide-nav').children().length - 1,
		nextPos = 0;

	if (param.type === "swipeup" || param.keyCode === 40 || param > 0) {
		if (curPos !== lastItem) {
			nextPos = curPos + 1;
			updateNavs(nextPos);
			updateContent(nextPos);
		}
		else {
			updateNavs(nextPos);
			updateContent(nextPos);
		}
	}
	else if (param.type === "swipedown" || param.keyCode === 38 || param < 0){
		if (curPos !== 0){
		nextPos = curPos - 1;
		updateNavs(nextPos);
		updateContent(nextPos);
		}
		else {
		nextPos = lastItem;
		updateNavs(nextPos);
		updateContent(nextPos);
		}
	}

	}


	function updateNavs(nextPos) {

		$('.slide-nav').children().removeClass('slide-nav__indicator-is-active');
		$('.slide-nav').children().eq(nextPos).addClass('slide-nav__indicator-is-active');

	}


	function updateContent(nextPos) {

		$('.main-content').children().removeClass('section-is-active');
		$('.main-content').children().eq(nextPos).addClass('section-is-active');
	}





});