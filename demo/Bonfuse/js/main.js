$(function(){



	$('.owl-review').owlCarousel({
	  
		margin:20,
		loop:true,
		autoWidth:true,
		dots: false,
		navText: ['<svg><use xlink:href="img/sprite/sprite.svg#offer-toggles"/></svg>','<svg><use xlink:href="img/sprite/sprite.svg#offer-toggles"/></svg>']

	});


	$('.owl-shop-offer').owlCarousel({
	  
	  	items : 1,
		loop:true,
		dots: false,
		navText: ['<svg><use xlink:href="img/sprite/sprite.svg#offer-toggles"/></svg>','<svg><use xlink:href="img/sprite/sprite.svg#offer-toggles"/></svg>']

	});

	$('.hit-slider__content').owlCarousel({
	  
	  	items : 2,
		loop:true,
		margin:25,
		dots: false,
		navText: ['<svg><use xlink:href="img/sprite/sprite.svg#offer-toggles"/></svg>','<svg><use xlink:href="img/sprite/sprite.svg#offer-toggles"/></svg>']

	});

	$('.slider-1-js').owlCarousel({
	  
	  	margin:30,
		autoWidth:true,
		dots: false,
		navText: ['<svg><use xlink:href="img/sprite/sprite.svg#offer-toggles"/></svg>','<svg><use xlink:href="img/sprite/sprite.svg#offer-toggles"/></svg>']

	});


	var section = $('.section-js'),
		balloon  = $('.balloon-js'),
		balloon2 = $('.balloon-2-js'),
		cloud = $('.cloud-js'),
		balloon3 = $('.balloon-3-js');



	console.log();

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

		if( $(window).scrollTop() > sectionHeight - 200){

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

	


});

new WOW().init();