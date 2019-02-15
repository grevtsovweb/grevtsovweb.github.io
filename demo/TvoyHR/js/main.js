$(function() {
    
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


});