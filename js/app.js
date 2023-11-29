(function($) {

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
                autoplay: false ,
                autoplaySpeed: 4000,
                prevArrow: '<div class="slick-prev"><span class="arrow-icon"><i data-feather="chevron-left"></i></span></div>',
                nextArrow: '<div class="slick-next"><span class="arrow-icon"><i data-feather="chevron-right"></i></span></div>',
            });
        }
    }


    /*==========================================================================
        WHEN DOCUMENT LOADING 
    ==========================================================================*/
    $(document).ready(function () {

        productSlider();
        
        //Feather Icon Init
        feather.replace();
        
    });



    /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 300) {
            backToTopBtn.addClass('show');
        } else {
            backToTopBtn.removeClass('show');
        }
    });

    
    /*==========================================================================
        WHEN WINDOW RESIZE
    ==========================================================================*/
    $(window).on("resize", function() {

    });

})(window.jQuery);