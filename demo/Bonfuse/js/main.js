$(function(){

	$('input[type=phone]').mask('+7 (999) 999-99-99');


	$('.toggle-row-js').on('click', function(e){

		e.preventDefault();

		$('.good-js').addClass('good__row')
			.addClass('catalog__col-10')
			.removeClass('catalog__col-5 catalog__col-md-10');

		$('.toggle-row-js').addClass('filter__toggle-item_active');
		$('.toggle-block-js').removeClass('filter__toggle-item_active');

	});

	$('.toggle-block-js').on('click', function(e){

		e.preventDefault();

		$('.good-js').addClass('good__row')
			.addClass('catalog__col-5 catalog__col-md-10')
			.removeClass('catalog__col-10 good__row');

		$('.toggle-block-js').addClass('filter__toggle-item_active');
		$('.toggle-row-js').removeClass('filter__toggle-item_active');

	});

	if($('.page').hasClass('page__shop')){

		$('.header__top').addClass('header__top_blue');

	}


	if($(window).width() > 720){
		$('.owl-review').owlCarousel({
		  
			margin:20,
			loop:true,
			autoWidth:true,
			dots: false,
			navText: ['<svg><use xlink:href="img/sprite/sprite.svg#offer-toggles"/></svg>','<svg><use xlink:href="img/sprite/sprite.svg#offer-toggles"/></svg>']

		});
	}


	$('.owl-shop-offer').owlCarousel({
	  
	  	items : 1,
		loop:true,
		dots: false,
		navText: ['<svg><use xlink:href="img/sprite/sprite.svg#offer-toggles"/></svg>','<svg><use xlink:href="img/sprite/sprite.svg#offer-toggles"/></svg>']

	}).trigger('refresh.owl.carousel');


	$('.hit-slider__content').owlCarousel({
	  
	  	
		responsive:{

			0:{
				autoWidth:true,
				margin:0,
				dots:false
			},

			576:{
				items : 2,
				loop:true,
				margin:25,
				dots:false,
				navText: ['<svg><use xlink:href="img/sprite/sprite.svg#offer-toggles"/></svg>','<svg><use xlink:href="img/sprite/sprite.svg#offer-toggles"/></svg>']
			}

		}

	});



	$('.slider-1-js').owlCarousel({
	  
	  	margin: 30,
		autoWidth: true,
		dots: false,
		navText: ['<svg><use xlink:href="img/sprite/sprite.svg#offer-toggles"/></svg>','<svg><use xlink:href="img/sprite/sprite.svg#offer-toggles"/></svg>']

	});

	$('.section-sertificate').owlCarousel({
	  
		margin: 35,
		loop: true,
		autoWidth: true,
		dots: false,
		center: true,
		nav: false,


	});


	var section = $('.section-js'),
		balloon  = $('.balloon-js'),
		balloon2 = $('.balloon-2-js'),
		cloud = $('.cloud-js'),
		balloon3 = $('.balloon-3-js');




	$(window).on('scroll', function(){

		var sectionOffset = $(window).scrollTop(),
			sectionOfferOffset = $('.section__offer').height() + 200,
			sectionHeight = section.height();

		/*balloon2.css('transform', 'scale(' + (1 - sectionOffset / 3000) + ')' + 'translateY(' + (-sectionOffset / 4) + 'px' + ')');

		balloon3.css('transform', 'scale(' + (1 - sectionOffset / 3000) + ')' + 'translateY(' + (-sectionOffset / 4) + 'px' + ')');*/
	
		if( $(window).scrollTop() > sectionOfferOffset &&  $(window).scrollTop() < sectionHeight - 200){
			$('.coffee-bean').addClass('coffee-bean-show');
			$('.coffee-bean-1').css({'transform': 'scale(' + (1 + sectionOffset / 3000) + ')' + 'translate(' + (-sectionOffset / 10) + 'px' + ',' + (-sectionOffset / 100) + 'px' + ')', 'transition': '.3s ease-in'});
			$('.coffee-bean-2').css({'transform': 'scale(' + (1 + sectionOffset / 3000) + ')' + 'translate(' + (-sectionOffset / 10) + 'px' + ',' + (-sectionOffset / 100) + 'px' + ')', 'transition': '.3s ease-in'});
			$('.coffee-bean-3').css({'transform': 'scale(' + (1 + sectionOffset / 3000) + ')' + 'translate(' + (-sectionOffset / 10) + 'px' + ',' + (-sectionOffset / 100) + 'px' + ')', 'transition': '.3s ease-in'});
			$('.coffee-bean-5').css({'transform': 'scale(' + (1 + sectionOffset / 3000) + ')' + 'translate(' + (-sectionOffset / 10) + 'px' + ',' + (-sectionOffset / 100) + 'px' + ')', 'transition': '.3s ease-in'});
			$('.coffee-bean-8').css({'transform': 'scale(' + (1 + sectionOffset / 3000) + ')' + 'translate(' + (sectionOffset / 10) + 'px' + ',' + (-sectionOffset / 100) + 'px' + ')', 'transition': '.3s ease-in'});
			$('.coffee-bean-9').css({'transform': 'scale(' + (1 + sectionOffset / 3000) + ')' + 'translate(' + (sectionOffset / 10) + 'px' + ',' + (-sectionOffset / 100) + 'px' + ')', 'transition': '.3s ease-in'});
			$('.coffee-bean-10').css({'transform': 'scale(' + (1 + sectionOffset / 3000) + ')' + 'translate(' + (sectionOffset / 10) + 'px' + ',' + (-sectionOffset / 100) + 'px' + ')', 'transition': '.3s ease-in'});
			$('.coffee-bean-12').css({'transform': 'scale(' + (1 + sectionOffset / 3000) + ')' + 'translate(' + (sectionOffset / 10) + 'px' + ',' + (-sectionOffset / 100) + 'px' + ')', 'transition': '.3s ease-in'});
		}else{
			$('.coffee-bean').removeClass('coffee-bean-show');
		}

		if($(window).width() > 992){

			if( $(window).scrollTop() > sectionHeight - 300){

				balloon2.css('transform', 'translate(' + -200 + 'px' +',' + -1000 + 'px' + ')');
				balloon3.css('transform', 'translate(' + 200 + 'px' +',' + -1000 + 'px' + ')');
				
				cloud.addClass('hide-cloud');
				
				balloon.addClass('hide-balloon');
				
				

				/*balloon.addClass('hide-baloon');
				balloon2.addClass('hide-baloon');
				balloon3.addClass('hide-baloon');*/
				
			}else{
				balloon2.css('transform', 'scale(' + (1 - sectionOffset / 3000) + ')' + 'translateY(' + (-sectionOffset / 4) + 'px' + ')');
				balloon3.css('transform', 'scale(' + (1 - sectionOffset / 3000) + ')' + 'translateY(' + (-sectionOffset / 4) + 'px' + ')');
				balloon.removeClass('hide-balloon');
				cloud.removeClass('hide-cloud');
				balloon.removeClass('hide-balloon');

			
				
				/*balloon.removeClass('hide-baloon');
				balloon2.removeClass('hide-baloon');
				balloon3.removeClass('hide-baloon');*/
			}
		}
	});


	$('.quantity__minus').on('click', function(e) {
	    e.preventDefault();

	    var $this = $(this);
	    var $input = $this.closest('.quantity').find('.quantity__input');
	    var value = parseInt($input.val());
	 
	    if (value > 1) {
	        value = value - 1;
	    } else {
	        value = 1;
	    }
	 
	  $input.val(value);
	 
	});
	 
	$('.quantity__plus').on('click', function(e) {
	    e.preventDefault();
	    var $this = $(this);
	    var $input = $this.closest('.quantity').find('.quantity__input');
	    var value = parseInt($input.val());
	 
	    if (value < 100) {
	        value = value + 1;
	    } else {
	        value =100;
	    }
	 
	    $input.val(value);
	});


	$(window).on('scroll', function(){

		if($(window).scrollTop() > 100){

			$('.header-fix').addClass('header-fix_white');
		}else{
			$('.header-fix').removeClass('header-fix_white');
		}
		

	});


	$('.slideshow__thumbs-link_js').on('click', function(e){
		e.preventDefault();

		var $this = $(this),
			container = $this.closest('.slideshow_js'),
			display = container.find('.slideshow_display_js'),
			item = $this.closest('.slideshow__thumbs-item_js'),
			path = $this.attr('href'),
			duration = 500;


			display.fadeOut(duration, function(){
				$(this).attr('src', path).fadeIn(duration);
			});


			item.addClass('slideshow__thumbs-item_active')
				.siblings()
				.removeClass('slideshow__thumbs-item_active');
	});


	$('.hamburger-js-m').on('click', function(e){

		e.preventDefault();

		$('.m-header__dropdown-js').toggleClass('m-header__dropdown_active');
		$('.page').toggleClass('page_unscrollable');
		$('.m-header').toggleClass('m-header_active');
		$('.hamburger-js-m').toggleClass('hamburger_active');
	});
	
	$('.hamburger-fix-js').on('click', function(e){

		e.preventDefault();

		$('.header-fix__dropdown-js').toggleClass('header-fix__dropdown_active');
		$('.hamburger-fix-js').toggleClass('hamburger_active');

	});



});






new WOW().init();


window.onload = function(){

	var inputs = document.querySelectorAll( '.inputfile' );
	Array.prototype.forEach.call( inputs, function( input ){
		
		var label	 = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener( 'change', function( e ){
			var fileName = '';
			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				label.querySelector( 'span' ).innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});
	});

};