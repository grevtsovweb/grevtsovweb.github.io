$(function(){


	$(window).on('mousemove', function(e){
		var w = $(window).width();
		var h = $(window).height();

		var offsetX = 0.5 - e.pageX / w;
		var offsetY = 0.5 - e.pageY / h;

		$('.parallax_js').each(function(i,el){

			var offset = parseInt($(el).data('offset'));

			var translate = 'translate3d(' + Math.round(offsetX * offset) 

			+'px,' +Math.round(offsetY * offset / 6) + 'px, 0px';

			$(el).css({
				'transform': translate
			});


		});
	});


	var item = $('.main-offer__header_animate');

	$(window).on('scroll', function(e){

		var scrollTop = $(window).scrollTop();

		if(scrollTop > 100){
			item.addClass('main-offer-animation');
		}else{
			item.removeClass('main-offer-animation')
		}

	});


	let mobileMenu = $('.mobile-menu');
	let mobileMenuClose = $('.mobile-nav__close');

	mobileMenu.on('click', function(e){

		e.preventDefault();

		let mobileNav = $('.mobile-nav');

		mobileNav.addClass('mobile-nav_active');

	});

	mobileMenuClose.on('click', function(e){

		e.preventDefault();

		let mobileNav = $('.mobile-nav');

		mobileNav.removeClass('mobile-nav_active');

	});


});