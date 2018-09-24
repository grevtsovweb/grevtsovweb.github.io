$(function(){

	$('.slider').slick({
		dots: true,
		dotsClass: "my-dots"
	});


	sidebarAcco();
	tab();

	slideshow();

	acco();




	
	

});


	
	//аккордион для сайдбара

	var sidebarAcco = function(){
		$('.catalog-form__manufact-item_js').on('click', function(e){
			e.preventDefault();

			var $this = $(this),
				item = $this.siblings('.catalog-form__manufact-inner-js');
				
				item.toggleClass('catalog-form__manufact-inner_active');

		});
	};


	var acco = function(){
		$('.catalog-item__inner-link').on('click', function(e){
			e.preventDefault();

			var $this = $(this),
				container = $this.closest('.catalog-item__inner-item'),
				item = container.children('.catalog-item-inner__list');

				item.toggleClass('catalog-item-inner__list_active');

		});
	};


	var tab = function(){

		$('.tab__link_js').on('click', function(e){
			e.preventDefault();

			var $this = $(this),
				item = $this.closest('.tab__item_js')
				container = $this.closest('.tab__container_js'),
				content = container.find('.tab__content-item__js'),
				ndx = item.index();

			item.addClass('tab__item_active')
				.siblings()
				.removeClass('tab__item_active');

			content.eq(ndx)
				.addClass('tab__content-item_active')
				.siblings()
				.removeClass('tab__content-item_active');

		});


	};

	var slideshow = function(){

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

	};