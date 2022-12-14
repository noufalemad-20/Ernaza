
    $('.owl-carousel').owlCarousel({
        items: 3,
        margin: 0,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            768: {
                items: 2,
            },
            1100: {
                items: 3,
            },
            1400: {
                items: 4,
                loop: false,
            }
        }
    });
