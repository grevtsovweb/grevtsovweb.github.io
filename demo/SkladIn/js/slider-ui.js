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