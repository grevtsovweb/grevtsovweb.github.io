$(function() {
    $(".main-nav").on("click","a", scrolling);
    $(".header").on("click",".anchor", scrolling);

    function scrolling(e){
        e.preventDefault();

        var id  = $(this).attr('href'),  
            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1500);
    }

    toggleMobileMenu();

    function toggleMobileMenu(){
        var burger = document.querySelector('.burger-js');
        var mobileMenu = document.querySelector('.mobile-menu-js');
        var page = document.querySelector('.page-js');

        burger.addEventListener('click', function(e){

            e.preventDefault();

            if(mobileMenu.classList.contains('header__mobile-menu_active')){
                mobileMenu.classList.remove('header__mobile-menu_active');
                page.classList.remove('page_unscrollable');
                burger.classList.remove('header__burger_active');
            }else{
                mobileMenu.classList.add('header__mobile-menu_active');
                page.classList.add('page_unscrollable');
                burger.classList.add('header__burger_active');
            }
        });
    }


});