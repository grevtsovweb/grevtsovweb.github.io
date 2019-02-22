$(function() {

    new WOW().init();

    $('input[type="phone"]').mask('+7 (999) 999-99-99');
    
    $('.section-how__button').on('click',function(e){
        e.preventDefault();

        var that = $(this),
            item = that.closest('.section-how__button'),
            container = that.closest('.section-how__tab'),
            listItem = container.find('.section-how__tab-container'),
            ndx = item.index();

        item.addClass('btn_white-active')
            .siblings()
            .removeClass('btn_white-active');

        listItem.eq(ndx)
                .addClass('section-how__tab-container_active')
                .siblings()
                .removeClass('section-how__tab-container_active');
    });

    $('.review__tab-list-link').on('click',function(e){
        e.preventDefault();

        var that = $(this),
            item = that.closest('.review__tab-list-item'),
            buttons = $('.review__tab-list-link'),
            container = that.closest('.review'),
            listItem = container.find('.review__list-item'),
            ndx = item.index();

        buttons.removeClass('review__tab-list-link_active');

        that.addClass('review__tab-list-link_active');

        listItem.eq(ndx)
                .addClass('review__list-item_active')
                .siblings()
                .removeClass('review__list-item_active');

    });

    $('.open-popup-js').on('click', function(e){
        e.preventDefault();

        var page = $('.page-js'),
            popup = $('.popup-form-js'),
            buttonClose = popup.find('.popup__close-js');

        page.addClass('page_unscrollable');
        popup.addClass('popup-overlay_active');

    });

    $('.popup__close-js').on('click', function(e){

        e.preventDefault();
        var that = $(this);

        that.closest('.popup-overlay').removeClass('popup-overlay_active');
        $('.page-js').removeClass('page_unscrollable');

    });

    $('.popup-form-js').on('click', function(e){

        e.preventDefault;

        $('.popup-form-js').removeClass('popup-overlay_active');
        $('.page-js').removeClass('page_unscrollable');

    });

    $('.popup-thanks-js').on('click', function(e){

        e.preventDefault;

        $('.popup-thanks-js').removeClass('popup-overlay_active');
        $('.page-js').removeClass('page_unscrollable');

    });


    $('.popup').on('click', function(e){

        e.stopPropagation();

    });


    $('.section-video__cover').on('click', function(){
        var cover =  $('.section-video__cover'),
            siblingIframe = cover.siblings('iframe');
        
        cover.addClass('section-video__cover_none');
        $('#main-video').find('video')[0].play();
    });

    $('.address__select').on('change', function(e){
        var that = $(this),
            val = that.val();

        that.closest('.address').find('.address__text').html(val);
    });

    //слайдер блока отзывов на мобильных

    if($(window).width() < '576'){

        $('.review__list').owlCarousel({
            items : 1,
            dots: false,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            freeDrag: false
        });

        $('.owl-next').on('click', function(e){
          
            if($('.review__tab-list-link_active').closest('.review__tab-list-item').next().is('.review__tab-list-item')){
                $('.review__tab-list-link_active')
                    .removeClass('review__tab-list-link_active')
                    .closest('.review__tab-list-item')
                    .next()
                    .find('.review__tab-list-link')
                    .addClass('review__tab-list-link_active');
            }


        });

        $('.owl-prev').on('click', function(e){
          
            if($('.review__tab-list-link_active').closest('.review__tab-list-item').prev().is('.review__tab-list-item')){
                $('.review__tab-list-link_active')
                    .removeClass('review__tab-list-link_active')
                    .closest('.review__tab-list-item')
                    .prev()
                    .find('.review__tab-list-link')
                    .addClass('review__tab-list-link_active');
            }


        });

    }

    //$(".form-js").validate();

    //form ajaz

    $('.form-js').submit(function(e) {
        e.preventDefault();
        
        var $form = $(this),
            input = $form.find('input[name="phone"]'),
            inputValue = input.val();

        if(inputValue < 1){
            input.addClass("field_invalid");
            input.focus();
            return false;
        } 
        
        
        $.ajax({

            type: "POST",
            url: "mail.php",
            data: $form.serialize()

        }).done(function() {
            $('.popup-form-js').removeClass('popup-overlay_active');
            $('.popup-thanks-js').addClass('popup-overlay_active');   
            $('.page-js').addClass('page_unscrollable');  
            input.removeClass("field_invalid");      
        }).fail(function() {
            $form.append('<p>Что-то не так, попробуйте ещё раз</p>');
        });        
        e.preventDefault(); 
    });


    //parallax

    var sectionPartner = $('.section-become-partner');

    $(window).on('scroll', function(){

        if( $(window).scrollTop() > sectionPartner.offset().top - $(window).height()){
            sectionPartner.css('background-position', 'center '  + ($(window).scrollTop() - sectionPartner.offset().top) / 4 + 'px');
        }
    });

    $('.form__agree-wrap input[type="checkbox"]').change(function() {

        var that = $(this),
            conainer = that.closest('form'),
            button = conainer.find('button[type="submit"]'); 
        
        button.prop('disabled', function(i, val) {
            return !val;
        })
    });

});