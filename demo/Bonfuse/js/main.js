$(function(){



	$('.owl-review').owlCarousel({
	  
		margin:20,
		loop:true,
		autoWidth:true,
		dots: false,
		navText: ['<svg><use xlink:href="img/sprite/sprite.svg#arrow-slider"/></svg>','<svg><use xlink:href="img/sprite/sprite.svg#arrow-slider"/></svg>']

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
		balloon3 = $('.balloon-3-js');



	console.log();

	$(window).on('scroll', function(){

		var sectionOffset = $(window).scrollTop(),
			sectionHeight = section.height();

		/*balloon2.css('transform', 'scale(' + (1 - sectionOffset / 3000) + ')' + 'translateY(' + (-sectionOffset / 4) + 'px' + ')');

		balloon3.css('transform', 'scale(' + (1 - sectionOffset / 3000) + ')' + 'translateY(' + (-sectionOffset / 4) + 'px' + ')');*/
	
		if( $(window).scrollTop() > sectionHeight - 200){

			balloon2.css('transform', 'translate(' + -200 + 'px' +',' + -1000 + 'px' + ')');
			balloon3.css('transform', 'translate(' + 200 + 'px' +',' + -1000 + 'px' + ')');
			balloon.removeClass('balloon-move');
			setTimeout(function(){
				balloon.addClass('hide-balloon')
			}, 20);
			

			/*balloon.addClass('hide-baloon');
			balloon2.addClass('hide-baloon');
			balloon3.addClass('hide-baloon');*/
			
		}else{
			balloon2.css('transform', 'scale(' + (1 - sectionOffset / 3000) + ')' + 'translateY(' + (-sectionOffset / 4) + 'px' + ')');
			balloon3.css('transform', 'scale(' + (1 - sectionOffset / 3000) + ')' + 'translateY(' + (-sectionOffset / 4) + 'px' + ')');
			balloon.removeClass('hide-balloon');
		
			
			/*balloon.removeClass('hide-baloon');
			balloon2.removeClass('hide-baloon');
			balloon3.removeClass('hide-baloon');*/
		}
	});


});

new WOW().init();