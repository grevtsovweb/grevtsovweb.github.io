"use strict"

document.addEventListener("DOMContentLoaded", function(){

	var popUp = document.querySelector('.popup-js');
	var buttonOpen = document.querySelectorAll('.open-popup-js');
	var page = document.querySelector('.page-js');

	var popUpCloseButton = document.querySelector('.popup__close-js');
	var popUpOverlay = document.querySelector('.page-js');
	var popUpInner = document.querySelector('.popup'); 

	function onClosePopup(e){
		e.preventDefault();
		popUp.classList.remove('popup-overlay_active');
		page.classList.remove('page_unscrolable');
	}

	for(var i = 0; i < buttonOpen.length; i++){
		buttonOpen[i].addEventListener('click', function(e){
			e.preventDefault();
			popUp.classList.add('popup-overlay_active');
			page.classList.add('page_unscrolable');

			popUp.addEventListener('click', onClosePopup);

			popUpCloseButton.addEventListener('click', onClosePopup);
		});
	}

	popUpInner.addEventListener('click', function(e){
		e.stopPropagation();
	});


	$('.form-js').submit(function(e) {
		var $form = $(this);	
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $form.serialize()
		}).done(function() {
			$form.find('.form__input').val('');
			$form.append('<p style="margin-top: 20px; margin-bottom: 0;">Спасибо, ваша заявка отправлена. Ожидайте звонка!</p>');
		}).fail(function() {
			$form.append('<p style="margin-top: 20px; margin-bottom: 0;">Что-то не так, попробуйте ещё раз</p>');
		});		
		e.preventDefault(); 
	});

});


	