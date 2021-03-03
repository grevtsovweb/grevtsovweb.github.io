document.addEventListener('DOMContentLoaded', function(){

    let offer = document.querySelector('.page__offer');
    let calendar = document.querySelector('.page__calendar');
    let socialNav = document.querySelector('.page__social-nav');
    let progressBlock = document.querySelector('.page__progress-js');

    let replaceBlockToSidebar = function(elem){
        if(elem){
            let sidebar = document.querySelector('.page__sidebar');
            
            if(sidebar){
                sidebar.append(elem);
            }  
        }
    }

    let replaceCalendarDesktop = function(elem){
        if(elem){
            let container = document.querySelector('.page__content-row-js');
            

            container.append(elem);
        }
    }

    let replaceProgressBlock = function(elem){
        if(elem){
            let container = document.querySelector('.page__grid-js');
            
            container.prepend(elem);
        }
    }

    let renderElements = function(){
        let windowWidth = window.innerWidth;
        if(windowWidth > 760 && windowWidth < 992) {
            replaceProgressBlock(progressBlock);
            replaceBlockToSidebar(offer);
            replaceBlockToSidebar(calendar);
            replaceBlockToSidebar(socialNav);
        }else if(windowWidth > 992){
            replaceBlockToSidebar(offer);
            replaceCalendarDesktop(calendar);
            replaceBlockToSidebar(socialNav);
        }
    }

    renderElements();


    window.addEventListener('resize', function(){
        renderElements();
    })

    // replaceBlockToSidebar(offer);
    // replaceBlockToSidebar(calendar);
    // replaceBlockToSidebar(socialNav);
    // replaceCalendarDesktop(calendar);
    // replaceProgressBlock(progressBlock);
});