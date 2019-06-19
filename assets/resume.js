const URL = 'https://docs.google.com/document/d/e/2PACX-1vR19XF8SYi0FQvij5F_gpkovJuettLAksXEIuZb304Ap4KoEunVkA3-Tm-go6UPKsLqC9_k3My4VUzc/pub?embedded=true';

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

    
    let projectTemplate = `<li>
        <h4 class="title"></h4>
        
        <span class="hidden machinedate"></span>
        <span class="date"></span>

        <p class="content"></p>
        <p class="keywords"></p>
    </li>`

    // List
    var projectList = new List('project-list', {
        valueNames: ['keywords', 'content', 'title', 'date', 'host', 'link', 'machinedate'],
        page: 3,
        pagination: true,
        fuzzySearch: {
            searchClass: 'search-fuzzy',
            location: 0,
            distance: 100,
            threshold: 0.4,
            multiSearch: true
        },
        item: projectTemplate,
    });

    projectList.on('updated', () => {
        document.querySelectorAll('#project-list > ul.pagination > li').forEach(page => {
            page.classList.add('page-item');
            page.querySelector('a').classList.add('page-link');
        });
    });

    getArticles(URL, { htmlFields: [ 'content' ] }).then((projects) => {
        projectList.add(projects);
        projectList.sort('machinedate', { order: 'desc' });
    })
})(jQuery);
