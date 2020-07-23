const body = document.querySelector("body"),
    headerBurger = document.querySelector(".header-burger"),
    headerNav = document.querySelector(".header-nav");

headerBurger.onclick = function() {
    headerBurger.className = (headerBurger.className == 'header-burger' ? 'header-burger-active' : 'header-burger');
    headerNav.className = (headerNav.className == 'header-nav' ? 'header-nav-active' : 'header-nav');
};

const worksList = document.querySelector(".works-list"),
    readMore = document.querySelector(".read-more");

readMore.onclick = function() {
    worksList.className = (worksList.className == 'works-list' ? 'works-list-active' : 'works-list');
    readMore.className = (readMore.className == 'read-more' ? 'read-more-active' : 'read-more');
}

var mySwiper = new Swiper('.swiper-container', {

    slidesPerView: 1,
    breakpoints: {
    	768: {
    		slidesPerView: 3
    	}
    }

});

var mySwiper2 = new Swiper('.slider-container', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.slider-control-next',
        prevEl: '.slider-control-prev',
    },
    pagination: {
        el: '.slider-pagination',
        type: 'fraction',
    },
    breakpoints: {
        1250: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 1,
        },
        
    },

});