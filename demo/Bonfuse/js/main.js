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



});