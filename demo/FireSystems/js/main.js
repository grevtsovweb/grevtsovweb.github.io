$(function(){
	var tooltip = $('.tooltip');

	$('.tooltip-activate-js').on('click', function(e){

		e.preventDefault();

		var itemHeader = $(this).data('tooltip-header');
		var itemtext = $(this).data('tooltip-text');
		var tooltipClose = tooltip.find('.tooltip__close');
		var tooltipHeader = tooltip.find('.tooltip__header');
		var tooltiptext = tooltip.find('.tooltip__text');

		$(this).append(tooltip);
		tooltip.addClass('tooltip_active');
		tooltipHeader.html(itemHeader);
		tooltiptext.html(itemtext);

	});

	$('.tooltip__close').on('click', function(e){

		e.preventDefault();
		e.stopPropagation();
		
		tooltip.removeClass('tooltip_active');

	});



	$('.form-ajax-js').submit(function(e) {
		var $form = $(this),
			message = $('.form__message-js');
		
		$.ajax({

			type: "POST",
			url: "mail.php",
			data: $form.serialize()

		}).done(function() {

			message.addClass('form__message_active');
			$form.before(message);
			$form.remove();
			$('.form__text-input').remove();

		}).fail(function() {

			
			
			$form.append('<p class="form__message-text">Что-то не так, попробуйте ещё раз</p>');

		});		
	
		e.preventDefault(); 

	});


	$('.show-popup-license').on('click', function(e){

		e.preventDefault();

		$('.overlay-js').addClass('overlay_active')
			.find('.popup__license-js')
			.addClass('popup_active');
		$('.page-js').addClass('page_unscrollable');




	});

	$('.show-popup-slider').on('click', function(e){

		e.preventDefault();



		$('.overlay-js').addClass('overlay_active')
			.find('.popup__slider-js')
			.addClass('popup_active');

		

		$('.popup__slider-content').not('.slick-initialized').slick({

			prevArrow: '<button id="prev" type="button" class="slick-prev"><span class="slick-prev__icon"><svg><use xlink:href="img/sprite/sprite.svg#arrow" /></svg></span></button>',
        	nextArrow: '<button id="next" type="button" class="slick-next"><span class="slick-next__icon"><svg><use xlink:href="img/sprite/sprite.svg#arrow" /></svg></span></button>'


		});

		$('.popup__slider-content').addClass('slick-initialized');
		
		$('.page-js').addClass('page_unscrollable');

	});


	$('.show-popup-mail').on('click', function(e){

		e.preventDefault();

		$('.overlay-js').addClass('overlay_active')
			.find('.popup__mail-js')
			.addClass('popup_active');

		$('.form__message-text').remove();
		$('.page-js').addClass('page_unscrollable');

	});
	

	auditForm();

	quizForm();

	textInputShow();

	popupClose();

});


	function auditForm(){

		var buttonAuditWrap = $('.page__button-wrap-js'),
			buttonAudit = buttonAuditWrap.find('.button-audit-js'),
			formAudit = $('.form__audit-js'),
			pageSection = $('.page__section-inner-js'),
			formAuditClose = formAudit.find('.form__audit-close-js');



		buttonAudit.on('click', function(e){

			e.preventDefault();
			
			formAudit.removeClass('form__disable');
			buttonAuditWrap.addClass('page__button-wrap_disable');
			pageSection.prepend('<p class="form__title form__title-js">Оставьте свои контакты. Наш специалист приедет в удобное Вам время.</p>');

		});

		formAuditClose.on('click', function(e){

			e.preventDefault();

			$('.form__title-js').remove();
			buttonAuditWrap.removeClass('page__button-wrap_disable');
			formAudit.addClass('form__disable');

			$('.form__message-text').remove();

		});
	}


	function quizForm(){

		var buttonAuditWrap = $('.page__button-wrap-js'),
			buttonQuiz = buttonAuditWrap.find('.button-quiz-js'),
			formQuiz = $('.form__quiz-js'),
			pageSection = $('.page__section-inner-js'),
			formQuizNext = formQuiz.find('.button_next-js'),
			formQuizItem = formQuiz.find('.form__quiz-item-js'),
			fotmQuizInput = formQuiz.find('.form__quiz-input-js'),
			formQuizClose = formQuiz.find('.form__quiz-close-js');

			buttonQuiz.on('click', function(e){

				e.preventDefault();

				pageSection.addClass('page__section-inner_quiz-height')
				formQuiz.removeClass('form__disable');
				buttonAuditWrap.addClass('page__button-wrap_disable');
				formQuizItem.first().removeClass('form__quiz-item_disable');
				formQuiz.before('<p class="form__title form__title-js">Информация об объекте</p>');

			});

			formQuizNext.on('click', function(e){

				var that = $(this),
					value,
					field = that.parent('.form__quiz-item-js').find('.form__quiz-input-js'),
					placeholder = field.data('placeholder');

				e.preventDefault();


				that.parent('.form__quiz-item-js')
					.addClass('form__quiz-item_disable')
					.next()
					.removeClass('form__quiz-item_disable');

				if( field.is('input')){
					value =  field.val();
					formQuiz.before('<p class="form__text-input">' + placeholder + ' ' + '<b>' + value + 'м<sup>2</sup></b></p>');
				}else{
					value = that.parent('.form__quiz-item-js').find('.form__quiz-input-js option:selected').text();
					formQuiz.before('<p class="form__text-input">' + placeholder + ' ' + '<b>' + value + '</b>' + '</p>');
				}
				
			});

			formQuizClose.on('click', function(e){

				var that = $(this),
					formQuiz = $('.form__quiz-js'),
					formQuizItemWrap = that.parent('.form__quiz-item-js'),
					formQuizItem = formQuiz.find('.form__quiz-item-js');


				e.preventDefault();

				
				if(!(formQuizItemWrap.hasClass('form__first-item-js'))){

					that.parent('.form__quiz-item-js')
						.addClass('form__quiz-item_disable')
						.prev()
						.removeClass('form__quiz-item_disable');

					$('.form__message-text').remove();

					$('.form__text-input').last().remove();
				}else{
					
					pageSection.removeClass('page__section-inner_quiz-height')
					formQuiz.addClass('form__disable');
					buttonAuditWrap.removeClass('page__button-wrap_disable');
					formQuizItem.first().addClass('form__quiz-item_disable');
					$('.form__title-js').remove();
				}
					
			});
				

	}


	function textInputShow(){

		$('.page__section-inner-js').on('click', '.form__text-input', function(e){

			e.preventDefault();

			var that = $(this),
				index = that.index(),
				inputs = $('.form__text-input'),
				formQuiz = $('.form__quiz-js'),
				formQuizItem = formQuiz.find('.form__quiz-item-js'),
				formQuizItemIndex = formQuizItem.eq(index);


				inputs.each(function(){

					if($(this).index() >= index){
						$(this).remove();
					}
				});

				formQuizItem.addClass('form__quiz-item_disable');
				formQuizItem.eq(index - 3).removeClass('form__quiz-item_disable');


		});
	}


	function popupClose(){


		$('.popup__close-js').on('click', function(e){

			e.preventDefault();


			

			$('.overlay-js').removeClass('overlay_active')
				.find('.overlay__content')
				.children()
				.removeClass('popup_active');

			$('.page-js').removeClass('page_unscrollable');

		});
	}
	