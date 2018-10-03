$(function(){

	// слайдеры на главной странице

	$('.slider-posts').owlCarousel({
	  loop:true,
	  nav:true,
	  navText: ['<svg><use xlink:href="/img/sprites/general.svg#arrow-slider"/></svg>','<svg><use xlink:href="/img/sprites/general.svg#arrow-slider"/></svg>']


	});

	$('.slider-video').owlCarousel({
	  
	  loop:true,
	  nav:true,
	  items: 1,
	  navText: ['<svg><use xlink:href="/img/sprites/general.svg#arrow-slider"/></svg>','<svg><use xlink:href="/img/sprites/general.svg#arrow-slider"/></svg>']

	});

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
				header.removeClass('header_fixed')
					.addClass('header_transparent')
					.addClass('header_large');

				logo.addClass('header__logo_large');
			}
	});


	//карточки товара, кирпичная плитка blog.html

	$('.masonry-container').masonry({
	  // options...
	  itemSelector: '.grid-item',
	  columnWidth: 200,
	 
	});

	



});