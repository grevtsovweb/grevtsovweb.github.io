document.addEventListener('DOMContentLoaded', function(){

    // Инициализация слайдеров
    if(document.querySelector('.page__row-carousel-js')){
        const swiper = new Swiper('.page__row-carousel-js', {
            slidesPerView: 1.2,
            spaceBetween: 20,
            breakpoints: {
                992: {spaceBetween: 30, slidesPerView: 4}
            }
        });
    }
    
    if(document.querySelector('.page__card-block-caurosel-js')){
        const swiperProducts = new Swiper('.page__card-block-caurosel-js', {
            slidesPerView: 1.2,
            spaceBetween: 20,
            breakpoints: {
                992: {spaceBetween: 16, slidesPerView: 3}
            }
        });
    }

    const page = document.querySelector('.page-js');

    // Модуль открытия каталога
    const catalogModule = function(){
        const openCatalogButton = document.querySelector('.header__nav-list-link--catalog');

        if(window.innerWidth < 992 && openCatalogButton){
            const catalogMobile = document.querySelector('.modal-catalog-mobile-js');
            const closeMobileCatalogButton = catalogMobile.querySelectorAll('.modal__close-mobile-catalog-js');
            openCatalogButton.addEventListener('click', function(e){
                e.preventDefault();
                catalogMobile.classList.add('catalog__overlay--active');
                page.classList.add('page--unscrollable');

                for(let k = 0; k < closeMobileCatalogButton.length; k++){
                    closeMobileCatalogButton[k].addEventListener('click', function(e){
                        e.preventDefault();
                        catalogMobile.classList.remove('catalog__overlay--active');
                        for(let j = 0; j < secondaryCategoriesMobile.length; j++){
                            secondaryCategoriesMobile[j].classList.remove('modal__catalog--translate');
                        }
                    })
                }
                
            });

            const backButton = catalogMobile.querySelectorAll('.modal__back-js');
            const mainMobileList = catalogMobile.querySelector('.modal__main-list-js');
            const mainCategoriesMobile = mainMobileList.querySelectorAll('.modal__list-link-js');
            const secondaryCategoriesMobile = catalogMobile.querySelectorAll('.modal__catalog-inner-js');
            
            // Переход в категориях
            for(let i = 0; i < mainCategoriesMobile.length; i++) {
                mainCategoriesMobile[i].addEventListener('click', function(e){
                    e.preventDefault();
                    secondaryCategoriesMobile[i].classList.add('modal__catalog--translate');
                   
                    for(let k = 0; k < backButton.length; k++){
                        backButton[k].addEventListener('click', function(e){
                            e.preventDefault();
                            backButton[k].closest('.modal__catalog-inner-js').classList.remove('modal__catalog--translate');
                        })
                    }
                });      
            }

            // Открытие закрытие выпадающих пунктов меню
            for(let k = 0; k < secondaryCategoriesMobile.length; k++){
                secondaryCategoriesMobile[k].addEventListener('click', function(e){
                    e.preventDefault();
                    if(e.target.classList.contains('modal__list-link-js')){
                        e.target.classList.toggle('modal__list-link--active');
                    }
                });
            }
            
        }else{
            const catalogDesktop = document.querySelector('.catalog__overlay-desktop-js');
            if(catalogDesktop){
                const closeCatalogButton = document.querySelector('.catalog__close-js');
                
                const catalogMainLinks = catalogDesktop.querySelectorAll('.catalog__nav-link-js');
                const subCatalogs = catalogDesktop.querySelectorAll('.catalog__list-js');
                const subCatalogHeader = catalogDesktop.querySelector('.catalog__side-title-js');

                const openCatalog = function(){
                    catalogDesktop.classList.add('catalog__overlay--active');
                    page.classList.add('page--unscrollable');
                }
            
                const closeCatalog = function(){
                    catalogDesktop.classList.remove('catalog__overlay--active');
                    page.classList.remove('page--unscrollable');
                }

                openCatalogButton.addEventListener('click', function(e){
                    e.preventDefault();
                    openCatalog();
                    document.addEventListener('keydown', function(e){
                        if(e.code==='Escape'){
                            closeCatalog();
                        }
                    });

                    // Навигация по каталогу
                    const mainLinksHandler = function(link, listItem){
                        link.addEventListener('click', function(e){
                            e.preventDefault();
                            for(let i = 0; i < catalogMainLinks.length; i++) {
                                catalogMainLinks[i].classList.remove('catalog__nav-link--active');
                                subCatalogs[i].classList.remove('catalog__list--active');
                            }
                            link.classList.add('catalog__nav-link--active');
                            listItem.classList.add('catalog__list--active');
                            subCatalogHeader.innerText = link.innerText;
                        })
                    }

                    for(let i = 0; i < catalogMainLinks.length; i++) {
                        mainLinksHandler(catalogMainLinks[i], subCatalogs[i]);
                    }

                });
            
                closeCatalogButton.addEventListener('click', function(e){
                    e.preventDefault();
                    closeCatalog();
                });
            
                catalogDesktop.addEventListener('click', function(e){
                    e.preventDefault();
                    if(e.target === catalogDesktop){
                        closeCatalog();
                    }
                    e.stopPropagation();
                });
            }
        }
    }

    // Модуль модальных окон
    const modalsModule = function(){
        const modalRegistrationHandlers = document.querySelectorAll('.button--open-modal-registration-js');
        const modalEnterHandler = document.querySelector('.button--open-modal-enter-js');
        const modalAddressHandler = document.querySelectorAll('.button--open-modal-address-js');
        const modalRegistration = document.querySelector('.modal-registration-js');
        const modalEnter = document.querySelector('.modal-enter-js');
        const modalAddress = document.querySelector('.modal-address-js'); 
        const modal = document.querySelector('.modal__overlay-js');
        const modalCloseHandlers = modal.querySelectorAll('.modal__close-js');
        
        // Закрытие модального окна
        const closeModal = function(){
            modal.classList.remove('modal__overlay--active');
            page.classList.remove('page--unscrollable');
        }

        // Открытие модального окна
        const openModal = function(){
            modal.classList.add('modal__overlay--active');
            page.classList.add('page--unscrollable');

            document.addEventListener('keydown', function(e){
                if(e.code === 'Escape'){
                    closeModal();
                    hiddenModalContent();
                }
            });
        }

        // Показ контента окна регистрации
        const openModalRegistration = function(){
            openModal();
            modalRegistration.classList.remove('modal--hidden');
        }
   
        // Показ контента окна адреса
        const openModalAddress = function(){
            openModal();
            modalAddress.classList.remove('modal--hidden');
        }
    
        // Показ контента окна входа
        const openModalEnter = function(){
            openModal();
            modalEnter.classList.remove('modal--hidden');
        }

        // Закрытие контента всех окон
        const hiddenModalContent = function(){
            const modals = document.querySelectorAll('.modal-js');
            for(let i = 0; i < modals.length; i++) {
                modals[i].classList.add('modal--hidden');
            }
        }

        for(let i = 0; i < modalCloseHandlers.length; i++) {
            modalCloseHandlers[i].addEventListener('click', function(e){
                e.preventDefault();
                closeModal();
                hiddenModalContent();
            })
        }

        for(let i = 0; i < modalRegistrationHandlers.length; i++) {
            modalRegistrationHandlers[i].addEventListener('click', function(e){
                e.preventDefault();
                hiddenModalContent();
                openModalRegistration();
            });
        }
        
        for(let i = 0; i < modalAddressHandler.length; i++){
            modalAddressHandler[i].addEventListener('click', function(e){
                e.preventDefault();
                hiddenModalContent();
                openModalAddress();
            });
        }
        
        if(modalEnterHandler){
            modalEnterHandler.addEventListener('click', function(e){
                e.preventDefault();
                openModal();
                openModalEnter();
            });
        }
        
        // Закрытие модального окна на overlay
        modal.addEventListener('click', function(e){
            let wrapper = modal.querySelector('.modal__wrapper-js');
            e.preventDefault();
            if(e.target === wrapper){
                closeModal();
                hiddenModalContent();
            }
            e.stopPropagation();
        });
        

    }

    // Модуль гармошка в футере
    const footerModule = function(){
        if(window.innerWidth < 992) {
            const footerDrobdownButtons = document.querySelectorAll('.footer__nav-title-js');
            for(let i = 0; i< footerDrobdownButtons.length; i++){
                footerDrobdownButtons[i].addEventListener('click', function(e){
                    e.preventDefault();
                    footerDrobdownButtons[i].classList.toggle('footer__nav-title--active');
                    const container = footerDrobdownButtons[i].closest('.footer__nav-item-js');
                    const containerList = container.querySelector('.footer__nav-list-js');
                    containerList.classList.toggle('footer__nav-list--active');
                })
            }
        }
    }

    // Модуль открытие меню личного кабинета
    const modalAccountModule = function(){
        if(window.innerWidth < 992){
            const openAccountButton = document.querySelector('.header__account-button-js');
            const accountMenu = document.querySelector('.modal-account-menu-mobile-js');
            if(accountMenu){
                const closeAccountButton = accountMenu.querySelector('.modal__close-js');
           
                openAccountButton.addEventListener('click', function(){
                    accountMenu.classList.add('modal__overlay--active');
                    page.classList.add('page--unscrollable');
                    closeAccountButton.addEventListener('click', function(){
                        accountMenu.classList.remove('modal__overlay--active');
                        page.classList.remove('page--unscrollable');
                    })
                })
            }
            

        }
    }


    // Модуль открытия мобильного меню
    const mobileMenuModule = function(){
        if(window.innerWidth < 992){
            const mobileMenuButton = document.querySelector('.user-button--mobile-menu-js');
            const mobileMenu = document.querySelector('.modal-mobile-menu-js'); 
            if(mobileMenu){
                const closeMobileMenuButton = mobileMenu.querySelector('.modal__close-js');
                mobileMenuButton.addEventListener('click', function(e){
                    e.preventDefault();

                    mobileMenu.classList.add('modal__overlay--active');
                    page.classList.add('page--unscrollable');

                    closeMobileMenuButton.addEventListener('click', function(e){
                        e.preventDefault();

                        mobileMenu.classList.remove('modal__overlay--active');
                        page.classList.remove('page--unscrollable');
                    })
                })
            }
        }
    }

    // Аккордеон "Заказ и возврат"
    const orderModule = function(){
        if(window.innerWidth < 992) {
            const orderDrobdownButtons = document.querySelectorAll('.order-list__content-title-js');
            if(orderDrobdownButtons){
                for(let i = 0; i< orderDrobdownButtons.length; i++){
                    orderDrobdownButtons[i].addEventListener('click', function(e){
                        e.preventDefault();
                        orderDrobdownButtons[i].classList.toggle('order-list__content-title--active');
                        const container = orderDrobdownButtons[i].closest('.order-list__content-item-js');
                        const containerList = container.querySelector('.order-list__content-inner-js');
                        containerList.classList.toggle('order-list__content-inner--active');
                    })
                }
            }
              
        }
    }

    // Модуль филтра на мобильных
    const mobileFilterModule = function(){
        if(window.innerWidth < 992) {
            const mobileFilterOpenButton = document.querySelector('.page__filter-mobile-filters-js');
            const mobileFilter = document.querySelector('.modal-mobile-filter-js');
            if(mobileFilter){
                
                const mobileFilterCloseButton = mobileFilter.querySelector('.modal__close-js');

                mobileFilterOpenButton.addEventListener('click', function(e){
                    e.preventDefault();
                    mobileFilter.classList.add('modal__overlay--active');
                    page.classList.add('page--unscrollable');
                    mobileFilterCloseButton.addEventListener('click', function(e){
                        e.preventDefault();
                        mobileFilter.classList.remove('modal__overlay--active');
                        page.classList.remove('page--unscrollable');
                    })
                })
            }
           
        }
        
    }

    const cardChooseImageModule = function(){
        const gallery = document.querySelector('.product__gallery-js');
        if(gallery){
            const galleryImage = gallery.querySelector('.product__gallery-image-js img');
            const galleryImagePreviewContainer = gallery.querySelectorAll('.product__gallery-list-item-js');
            const galleryImagePreview = gallery.querySelectorAll('.product__gallery-list-item-js img');
            if(gallery){
                for(let i = 0; i < galleryImagePreview.length; i++) {
                    galleryImagePreviewContainer[i].addEventListener('click', function(e){
                        e.preventDefault();
                        galleryImage.setAttribute('src', galleryImagePreview[i].getAttribute('src'));
                        for(let k = 0; k < galleryImagePreviewContainer.length; k++) {
                            galleryImagePreviewContainer[k].classList.remove('product__gallery-list-item--current');
                        }
                        galleryImagePreviewContainer[i].classList.add('product__gallery-list-item--current');
                    });
                }
            }
        }
        
        
    }

    const cardMoreModule = function(){
        const moreButton = document.querySelector('.product__details-more-js');
        const moreList = document.querySelector('.product__details-list-js');
        if(moreList){      
            const hiddenItems = moreList.querySelectorAll('.product__details-item--hidden-js');

            moreButton.addEventListener('click', function(e){
                for(let i = 0; i < hiddenItems.length; i++){
                    hiddenItems[i].classList.remove('product__details-item--hidden');
                }
                moreButton.remove();
            });
        }
        
        
    }

    // Модуль поля с паролем
    const inputPasswordModule = function(){
        const inputPassword = document.querySelectorAll('.input__password-js');

        if(inputPassword){
            for(let i = 0; i < inputPassword.length; i++){
                inputPassword[i].addEventListener('click', function(e){
                    let input = inputPassword[i].querySelector('.input__field');
                    e.preventDefault(); 
                    if(e.target.classList.contains('input__password-button-js')){ 
                        let svg = e.target.querySelector('svg use');
                        if(input.getAttribute('type') === "password"){
                            input.setAttribute('type', 'text');
                            svg.setAttribute('xlink:href', 'img/sprite/sprite.svg#icon-eye-slash');
                            return
                        }
                        input.setAttribute('type', 'password');
                        svg.setAttribute('xlink:href', 'img/sprite/sprite.svg#icon-eye');
                    }

                })
            }
        }
    }

    

    
    // Модуль выпадающегих адресов на мобильных
    const openAddressMobileModule = function(){
        if(window.innerWidth < 992){
            const addressDrowdownButton = document.querySelectorAll('.table-order__arrow-down-js');

            const openAddressMobileListener = function(button){
                button.addEventListener('click', function(e){
                    e.preventDefault();
                    button.classList.toggle('table-order__arrow-down--active')
                    button.closest('.table-order__list--row').querySelector('.table-order__address-mobile').classList.toggle('table-order__address-mobile--active');
                })
            }

            for(let i = 0; i < addressDrowdownButton.length; i++){
                openAddressMobileListener(addressDrowdownButton[i]);
            }
        }
    }

    

    inputPasswordModule();  
    catalogModule();
    modalsModule();
    footerModule();
    modalAccountModule();
    mobileMenuModule();
    orderModule();
    mobileFilterModule();
    cardChooseImageModule();
    cardMoreModule();
    openAddressMobileModule();

    
})