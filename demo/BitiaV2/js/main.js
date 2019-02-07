$(function() {
    $(".menu__link").on("click", scrolling);
    $(".section").on("click",".anchor", scrolling);

    function scrolling(e){
        e.preventDefault();

        var id  = $(this).attr('href'),  
            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1500);
    }

    

    var burger = document.querySelector('.burger-js');
    var mobileMenu = document.querySelector('.mobile-menu-js');
    var page = document.querySelector('.page-js');

    function closeMenu(){
        mobileMenu.classList.remove('section__mobile-menu_active');
        page.classList.remove('page_unscrollable');
        burger.classList.remove('menu__burger_active');
    }

    function openMenu(){
        mobileMenu.classList.add('section__mobile-menu_active');
        page.classList.add('page_unscrollable');
        burger.classList.add('menu__burger_active');
    }


    toggleMobileMenu();

     $(".section__m-list-link").on("click", function(e){
        closeMenu();
     });


    function toggleMobileMenu(){
        burger.addEventListener('click', function(e){
            e.preventDefault();
            if(mobileMenu.classList.contains('section__mobile-menu_active')){
                closeMenu();
            }else{
                openMenu();
            }
        });
    }


});