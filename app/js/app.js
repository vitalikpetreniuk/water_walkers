// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

import 'slick-carousel'

document.addEventListener('DOMContentLoaded', () => {

    $('.header-mob .burger').on('click', function () {
        $('.menu-mob').toggleClass('show')
        $('html, body').toggleClass('_over-hidden')
    })

    $('.burger-desktop, .menu-mob').hover(function (e) {
        $('.menu-mob').toggleClass('opened')
        $('.overlay').toggleClass('show')
    })

    $('.forPopup').on('click', function (e) {
        e.preventDefault()
        $('.popup').toggleClass('show')
        $('.overlay').toggleClass('show')
        $('html, body').toggleClass('_over-hidden')
    })
    $('.popup-close').on('click', function () {
        $('.popup').removeClass('show')
        $('.overlay').removeClass('show')
        $('html, body').removeClass('_over-hidden')
    })

    // copy card
    function copytext(el) {
        let $tmp = $("<textarea>");
        $("body").append($tmp);
        $tmp.val($(el).text()).select();
        document.execCommand("copy");
        $tmp.remove();
    }

    $('.services-support__number').on('click', function () {
        copytext($(this))
        $(this).children().next().toggleClass('copied')
    })

    // tabs
    $('ul.tabs-list').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs-wrapper').find('div.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
    });

    // carousel
    $('.command-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 0,
        speed: 4000,
        infinite: true,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    })

})
