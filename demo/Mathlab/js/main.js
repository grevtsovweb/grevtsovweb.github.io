document.addEventListener('DOMContentLoaded', function(){

    if(window.innerWidth < 993){
        let openMenuButton = document.querySelector('.mobile-menu-button-js');
        let mobileMenu = document.querySelector('.mobile-menu-js');
        let closeMenuButton = document.querySelector('.mobile-menu-close-button-js');

        openMenuButton.addEventListener('click', function(e){
            e.preventDefault();
            mobileMenu.classList.add('mobile-menu_active');

            closeMenuButton.addEventListener('click', function(e){
                e.preventDefault();
                mobileMenu.classList.remove('mobile-menu_active');
            });
        });
    }

});