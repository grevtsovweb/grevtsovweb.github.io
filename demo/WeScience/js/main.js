$(function() {
    var $win = $(window),
    $fixed = $(".header-js"),
    limit = 300;

    $win.on("scroll", function () {
        var top = $win.scrollTop();
        
        if (top > limit) {
            $fixed.addClass('header_fixed');
        } else {
            $fixed.removeClass('header_fixed');
        }
    });

    
    $('.review__slider_js').owlCarousel({
		margin: 15,
		nav: true, 
		navText: ["<img src='img/order/slider/arrow.svg' />","<img src='img/order/slider/arrow.svg' />"],
		dots: true,
		responsive: {
			0: {
				items:1,
				nav:false
			},
			768: {
				items:2,
				nav: true
			}
		}
    });
    
    $('.team__slider_js').owlCarousel({
		margin: 15,
		nav: true, 
		navText: ["<img src='img/order/slider/arrow.svg' />","<img src='img/order/slider/arrow.svg' />"],
		dots: true,
		responsive: {
			0: {
				items:1,
				nav: false
			},
			768: {
				items:2,
				nav: true
			}
		}
	});

	

	if($(window).width() < 768){
		$('.explore__slider_js').owlCarousel({
			margin: 15,
			nav: false, 
			navText: ["<img src='img/order/slider/arrow.svg' />","<img src='img/order/slider/arrow.svg' />"],
			dots: true,
			responsive: {
				0: {
					items:1,
					nav: false
				}
			}
		});
	}

	$('.boxes-choice__slider_js').owlCarousel({
		margin: 15,
		nav: false, 
		navText: ["<img src='img/order/slider/arrow.svg' />","<img src='img/order/slider/arrow.svg' />"],
		dots: true,
		responsive: {
			0: {
				items:1,
				nav:false
			}
		}
	});

	


	var buttons = document.querySelectorAll('.boxes-choice__tab-button-js');
	var tabItems = document.querySelectorAll('.boxes-choice__tab-result-js');

	var addClickListenter = function(button, tabItem) {
		button.addEventListener('click', function(e){
			for(var i = 0; i < buttons.length; i++) {
				buttons[i].classList.remove('button_active');	
				tabItems[i].classList.remove('boxes-choice__tab-result_active');
			}
			button.classList.add('button_active');
			tabItem.classList.add('boxes-choice__tab-result_active');
			
		}, );
	}

	for(var i = 0; i < buttons.length; i++) {
		var button = buttons[i];
		var tabItem = tabItems[i];
		addClickListenter(button, tabItem);
	}

	function openFields () {
		let buttonOpenFields = document.querySelector('.order-header__address-open-js');
		let fields = document.querySelector('.order-header__row-form-js');

		if(buttonOpenFields){
			buttonOpenFields.addEventListener('click', function(e){
				e.preventDefault();
	
				fields.classList.remove('order-header__row-form_hidden-sm');
				buttonOpenFields.style = 'display: none';
			});
		}
		
	}

	openFields();
    
});