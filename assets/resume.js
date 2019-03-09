(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#sideNav'
    });

    // List
    var projectList = new List('project-list', {
        valueNames: ['keywords', 'description', 'name'],
        page: 3,
        pagination: true,
        fuzzySearch: {
            searchClass: 'search-fuzzy',
            location: 0,
            distance: 100,
            threshold: 0.4,
            multiSearch: true
        },
    });
    
    projectList.on('updated', () => {
        document.querySelectorAll('#project-list > ul.pagination > li').forEach(page => {
            page.classList.add('page-item');
            page.querySelector('a').classList.add('page-link');
        });
    });


})(jQuery);