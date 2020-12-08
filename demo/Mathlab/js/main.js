document.addEventListener('DOMContentLoaded', function(){

    if(window.innerWidth < 993){
        let openMenuButton = document.querySelector('.mobile-menu-button-js');
        let mobileMenu = document.querySelector('.mobile-menu-js');

        openMenuButton.addEventListener('click', function(e){
            e.preventDefault();
            console.log(1)
            mobileMenu.classList.add('mobile-menu_active')
        })
    }

});