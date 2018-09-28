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

	// скролл бар диапазона цен sub-catalog-2.html

	window.onload = function(){

		var html5Slider = document.getElementById('slider-ui');

		noUiSlider.create(html5Slider, {
		    start: [2456, 156789],
		    connect: true,
		    range: {
		        'min': 2456,
		        'max': 156789
		    }
		});

		var minPrice = document.getElementById('min-price');
		var maxPrice = document.getElementById('max-price');

		html5Slider.noUiSlider.on('update', function (values, handle) {

		    var value = values[handle];

		    if (handle) {
		        maxPrice.value = Math.round(value);
		    } else {
		        minPrice.value = Math.round(value);
		    }
		});

		minPrice.addEventListener('change', function () {
		    html5Slider.noUiSlider.set([this.value, null]);
		});

		maxPrice.addEventListener('change', function () {
		    html5Slider.noUiSlider.set([null, this.value]);
		});


		var html5SliderM = document.getElementById('slider-ui-m');

		noUiSlider.create(html5SliderM, {
		    start: [2456, 156789],
		    connect: true,
		    range: {
		        'min': 2456,
		        'max': 156789
		    }
		});

		var minPriceM = document.getElementById('min-price-m');
		var maxPriceM = document.getElementById('max-price-m');

		html5SliderM.noUiSlider.on('update', function (values, handle) {

		    var value = values[handle];

		    if (handle) {
		        maxPriceM.value = Math.round(value);
		    } else {
		        minPriceM.value = Math.round(value);
		    }
		});

		minPriceM.addEventListener('change', function () {
		    html5SliderM.noUiSlider.set([this.value, null]);
		});

		maxPriceM.addEventListener('change', function () {
		    html5SliderM.noUiSlider.set([null, this.value]);
		});



	}

	



	


