$(function() {

    $('.burger__menu').click(function() {
        $('.header__nav').toggleClass('active');
        $('.burger__menu').toggleClass('active');
        $('.burger__item').toggleClass('active');
    })
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="img/svg/prew.svg" alt="img"></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="img/svg/next.svg" alt="img"></button>',

        responsive: [{
                breakpoint: 1121,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 780,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    centerMode: true,
                }
            }
        ]
    })


});