document.addEventListener("DOMContentLoaded", function(event) {
    
	var mainNav = document.querySelector('.main-nav'),
		buttonSearch = mainNav.querySelector('.main-nav__search'),
		searchForm = mainNav.querySelector('.main-nav__search-input');

	buttonSearch.addEventListener('click', function(e){
		e.preventDefault();

		searchForm.classList.add('main-nav__search-input_active');
		searchForm.focus();

		searchForm.addEventListener('blur', function(){
			searchForm.classList.remove('main-nav__search-input_active');
		});
	})

});