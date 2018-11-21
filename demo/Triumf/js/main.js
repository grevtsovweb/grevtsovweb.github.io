$(function(){

	$('.slider-js').slick({

		dots: true,
		autoplay: true,
		prevArrow: '<button id="prev" type="button" class="slider__btn slider__btn_prev"><span class="slider__icon"><svg><use xlink:href="img/sprite/sprite.svg#more-arrow" /></svg></span></button>',
        nextArrow: '<button id="next" type="button" class="slider__btn slider__btn_next"><span class="slider__icon"><svg><use xlink:href="img/sprite/sprite.svg#more-arrow" /></svg></span></button>'

	});


	$('.hamburger-js').on('click', function(e){

		e.preventDefault();

		$('.m-menu-js').addClass('m-menu_active');
		$('.m-menu-js').addClass('m-menu_animation');
		$('.page-js').addClass('page_unscrolable');

	});

	$('.m-menu__close-js').on('click', function(e){

		e.preventDefault();

		$('.m-menu-js').removeClass('m-menu_active');
		$('.m-menu-js').removeClass('m-menu_animation');
		$('.page-js').removeClass('page_unscrolable');

	});

	$('.btn__popup-js').on('click', function(e){

		e.preventDefault();


		$('.popup-js').addClass('popup-overlay_active');
		$('.page-js').addClass('page_unscrolable');

	});


	$('.popup__close-js').on('click', function(e){

		e.preventDefault;

		$('.popup-js').removeClass('popup-overlay_active');
		$('.page-js').removeClass('page_unscrolable');

	});

	$('.popup-js').on('click', function(e){

		e.preventDefault;

		$('.popup-js').removeClass('popup-overlay_active');
		$('.page-js').removeClass('page_unscrolable');

	});

	$('.popup').on('click', function(e){

		e.stopPropagation();

	});

	$('.m-menu__list-link-js').on('click', function(e){

		var $this = $(this),
			innerContent = $this.siblings('.m-menu__list-inner-js');

		e.preventDefault();

		$this.toggleClass('m-menu__list-link_active');
		innerContent.toggleClass('m-menu__list-inner_active');

	});




	$('.form-js').submit(function(e) {
		var $form = $(this);
		
		$.ajax({

			type: "POST",
			url: "mail.php",
			data: $form.serialize()

		}).done(function() {

			$form.find('.form__input').val('');
			$form.append('<p>Спасибо, ваша заявка отправлена. Ожидайте звонка!</p>');

		}).fail(function() {

			$form.append('<p>Что-то не так, попробуйте ещё раз</p>');

		});		
	
		e.preventDefault(); 

	});


	//аккордион на страницы о компании

	acco();

});


	function acco(){

		


		$('.services-list__item-js').on('click', function(e){
			
			var $this = $(this),
				activeHeader = $this.find('.services-list__header-js'),
				activeContent = $this.find('.services-list__item-inner-js'),
				container = $this.closest('.services-list-js'),
				items = container.find('.services-list__item-js'),
				headers = items.find('.services-list__header-js'),
				content = items.find('.services-list__item-inner-js');

			e.preventDefault();

			headers.removeClass('services-list__header_active');
			content.removeClass('services-list__item-inner_active');
			activeHeader.addClass('services-list__header_active');
			activeContent.addClass('services-list__item-inner_active');

			

		});

	}