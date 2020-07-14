$(document).ready(function () {

    $('.solutions__tabs').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/decision/slider/slider-prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/decision/slider/slider-next.png"></button>',
        fade: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    arrows: false,
                },
            },
        ],
    });

    $('.mobile-menu').click(function(event) {
        $('.mobile-menu, .menu').toggleClass('active');
    });

});