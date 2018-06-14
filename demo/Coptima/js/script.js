
document.body.onload = function(){

	setTimeout(function(){
		var preloader = document.querySelector('.preloader');

		if(!preloader.classList.contains('done')){
			preloader.classList.add('done');
		}
	}, 1000);

};


(function(){

	var openPopUp  = document.querySelectorAll('.open_popup');
	var popUp      = document.querySelector('.pop_up');
	var closePopUp = popUp.querySelector('.close_btn');
	var overlay    = document.querySelector('.overlay');
	var login      = popUp.querySelector('#login')

	for( var i=0; i< openPopUp.length; i++){
		openPopUp[i].addEventListener('click', function(e){
			e.preventDefault();

			popUp.classList.add('active');
			overlay.classList.add('active');
			login.focus();
		});
	}

	closePopUp.addEventListener('click', function(e){
		e.preventDefault();
		popUp.classList.remove('active');
		overlay.classList.remove('active');
	});

	overlay.addEventListener('click', function(e){
		e.preventDefault();
		popUp.classList.remove('active');
		overlay.classList.remove('active');
	});

	window.addEventListener('keydown', function(e){
		if(event.keyCode === 27 && popUp.classList.contains('active')){
			popUp.classList.remove('active');
			overlay.classList.remove('active');
		}
	});
		



})();





/* $(function(){


	var popUp = $('.pop_up');
	var overlay = $('.overlay');
	
	$('.open_popup').on('click', function(e){
		e.preventDefault();

		popUp.addClass('active');
		overlay.addClass('active');
	});

	$('.close_btn').on('click', function(e){
		e.preventDefault();

		popUp.removeClass('active');
		overlay.removeClass('active');
	});

	overlay.on('click', function(e){
		e.preventDefault();

		overlay.removeClass('active');
		popUp.removeClass('active');
	})

	$(window).keydown(function(e){
		if(e.keyCode == 27 && popUp.has('.active')) {
	    	popUp.removeClass('active');
	    	overlay.removeClass('active');
	    }
	});

	
	


}); */

