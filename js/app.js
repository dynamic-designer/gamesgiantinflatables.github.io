(function ($) {

    "use strict";

    var backToTopBtn = $('#backToTopButton');

    /*------------------------------------------
        = FUNCTIONS
    -------------------------------------------*/
    function productSlider() {
        if ($(".product-slider").length) {
            $(".product-slider").slick({
                infinite: true,
                slidesToShow: 3,
                dots: false,
                arrows: true,
                autoplay: false,
                autoplaySpeed: 4000,
                prevArrow: '<div class="slick-prev"><span class="arrow-icon"><i data-feather="chevron-left"></i></span></div>',
                nextArrow: '<div class="slick-next"><span class="arrow-icon"><i data-feather="chevron-right"></i></span></div>',
            });
        }
    }

    function updatesSlider() {
        if ($(".updateVertical-slider").length) {
            $(".updateVertical-slider").slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 4000,
                infinite: true,
                vertical: true,
                asNavFor: '.updateHorizontal-slider',
                arrows: true,
                prevArrow: '<div class="slick-prev"><span class="arrow-icon"><i data-feather="chevron-left"></i></span></div>',
                nextArrow: '<div class="slick-next"><span class="arrow-icon"><i data-feather="chevron-right"></i></span></div>',
            });
        }
        if ($(".updateHorizontal-slider").length) {
            $(".updateHorizontal-slider").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 4000,
                infinite: true,
                asNavFor: '.updateVertical-slider',
                arrows: true,
                prevArrow: '<div class="slick-prev slick-btn"><span class="arrow-icon"><i data-feather="chevron-left"></i></span></div>',
                nextArrow: '<div class="slick-next slick-btn"><span class="arrow-icon"><i data-feather="chevron-right"></i></span></div>',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            asNavFor: '',
                        }
                    }
                ]
            });
        }
    }


    /*==========================================================================
        WHEN DOCUMENT LOADING 
    ==========================================================================*/
    $(document).ready(function () {

        productSlider();
        updatesSlider();

        //Feather Icon Init
        feather.replace();

    });



    /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 300) {
            backToTopBtn.addClass('show');
        } else {
            backToTopBtn.removeClass('show');
        }
    });


    /*==========================================================================
        WHEN WINDOW RESIZE
    ==========================================================================*/
    $(window).on("resize", function () {

    });

})(window.jQuery);