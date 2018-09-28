$(function(){

	$('.slider').slick({
		dots: true,
		dotsClass: "my-dots"
	});


	sidebarAcco();
	
	tab();

	slideshow();

	acco();

	filter();

	goodTab();

	compare();

	tabLink();

	mobileTab();

	openCatalog();

	$(".slider-ui").slider({
		min: 2456,
		max: 156789,
		values: [0,156789],
		range: true,
		stop: function(event, ui) {
			$(".range__price-input_min").val($(".slider-ui").slider("values",0));
			$(".range__price-input_max").val($(".slider-ui").slider("values",1));
			
	    },
	    slide: function(event, ui){
			$(".range__price-input_min").val($(".slider-ui").slider("values",0));
			$(".range__price-input_max").val($(".slider-ui").slider("values",1));
	    }
	});

	$(".range__price-input_min").change(function(e){

		e.preventDefault();

		var value1=$(".range__price-input_min").val();
		var value2=$(".range__price-input_max").val();

	    if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			$(".range__price-input_min").val(value1);
		}
		$(".slider-ui").slider("values",0,value1);	
	});

		
	$(".range__price-input_max").change(function(e){

		e.preventDefault();
			
		var value1=$(".range__price-input_min").val();
		var value2=$(".range__price-input_max").val();
		
		if (value2 > 1000) { value2 = 1000; $(".range__price-input_max").val(1000)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			$(".range__price-input_max").val(value2);
		}
		$(".slider-ui").slider("values",1,value2);
	});



	// фильтрация ввода в поля
	$('input').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;
		
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;
	
		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);
		
		if(!/\d/.test(keyChar))	return false;
	
	});


});


	//фильтр поиска

	function filter() {

		$('.filter__button').on('click', function(e){
			e.preventDefault();

			var	button = $('.filter__button')
				container = button.closest('.filter-wrap'),
				filterForm = container.children('.filter-inner');

			button.toggleClass('filter__button_not-active');
			filterForm.toggleClass('filter-inner_not-active');
		});
	}
	
	//аккордион для сайдбара

	function sidebarAcco(){
		$('.catalog-form__manufact-item_js').on('click', function(e){
			e.preventDefault();

			var $this = $(this),
				item = $this.siblings('.catalog-form__manufact-inner-js');
				
				item.toggleClass('catalog-form__manufact-inner_active');

		});
	}


	//аккордион для каталога
	
	function acco(){


		$('.catalog-item__inner-link').on('click', function(e){
			e.preventDefault();

			var $this = $(this),
				container = $this.closest('.catalog-item__inner-item'),
				icon = container.children('.catalog-item__inner-open'),
				item = container.children('.catalog-item-inner__list');

				item.toggleClass('catalog-item-inner__list_active');
				icon.toggleClass('catalog-item__inner-open_active');
		});

		$('.catalog-item__inner-open').on('click', function(e){
			e.preventDefault();

			var $this = $(this),
				container = $this.closest('.catalog-item__inner-item'),
				icon = container.children('.catalog-item__inner-open'),
				item = container.children('.catalog-item-inner__list');

				item.toggleClass('catalog-item-inner__list_active');
				icon.toggleClass('catalog-item__inner-open_active');

		});

		$('.catalog-item__sum').on('click', function(e){

			e.preventDefault();

			var $this = $(this),
				container = $this.closest('.catalog-item__inner-item'),
				icon = container.children('.catalog-item__inner-open'),
				item = container.children('.catalog-item-inner__list');

				item.toggleClass('catalog-item-inner__list_active');
				icon.toggleClass('catalog-item__inner-open_active');

		});

	}


	//табы

	function tab(){

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


	}



	// слайдера фото в карточке товара

	function slideshow(){

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

	}

	//закладка товара избранное

	function goodTab(){

		$('.cart__tab svg').on('click', function(e){

			e.preventDefault();

			var $this = $(this);
			$this.toggleClass('active-good-tab');
		});

	}

	//

	function compare(){

		$('.link-compare').on('click', function(e){
			e.preventDefault()

			var $this = $(this);
			$this.toggleClass('link-compare_active');
		});
	}

	//

	function tabLink(){
		
		$('.link-favorites').on('click', function(e){
			e.preventDefault();

			var $this = $(this),
				item = $this.find('.link-tab');

			item.toggleClass('link-tab_active');
		});
	}


	// мобильные табы

	function mobileTab(){

		$('.m-good-tab__item').on('click', function(e){

			e.preventDefault();

			var $this = $(this),
				title = $this.find('.m-good-tab__title'),
				container = $this.find('.m-good-tab__content');

			title.toggleClass('m-good-tab__title_active');
			container.toggleClass('m-good-tab__content_active');



		});

	}


	// развернутый каталог

	function openCatalog(){
		
		if( $('.page').hasClass('page-catalog') && $(window).width() > 1175 ){
			$('.top-menu__catalog-item').addClass('top-menu__catalog-item_active');
		}

		
	}



	


