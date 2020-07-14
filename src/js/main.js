
////////////////////////
///////// GSAP /////////
////////////////////////

gsap.from(".logo", {opacity: 0, x: -500, ease: "power2.out", duration: 1, delay: 0.4});
gsap.from(".promo__title", {opacity: 0, x: -500, ease: "power2.out", duration: 1, delay: 0.6});
gsap.from(".promo__sub-title", {opacity: 0, x: -500, ease: "power2.out", duration: 1, delay: 0.8});
gsap.from(".country__item", {opacity: 0, y: -500, ease: "power2.out", duration: 1, delay: 1, stagger: 0.2,});
gsap.from(".promo__btn", {opacity: 0, scale: 2, ease: "power2.out", duration: 1, delay: 2.8});
gsap.to('.contact__icon', {scale: 1.1, duration: 0.6, yoyo: true, repeat: -1});
gsap.to('.with-prengi__arrow-down', {y:-10, yoyo: true, repeat: -1});




////////////////////////
//////// jQuery ////////
////////////////////////

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