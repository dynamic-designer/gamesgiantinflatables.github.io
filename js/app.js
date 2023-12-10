(function ($) {
    "use strict";

    var backToTopBtn = $("#backToTopButton");

    /*------------------------------------------
          = FUNCTIONS
      -------------------------------------------*/

    // Hero slider background setting
    function sliderBgSetting() {
        if ($(".hero-slider .slide").length) {
            $(".hero-slider .slide").each(function () {
                var $this = $(this);
                var img = $this.find(".slider-bg").attr("src");

                $this.css({
                    backgroundImage: "url(" + img + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                })
            });
        }
    }

    //Setting hero slider
    function heroSlider() {
        if ($(".hero-slider").length) {
            $(".hero-slider").slick({
                autoplay: false,
                autoplaySpeed: 6000,
                pauseOnHover: true,
                infinite: true,
                arrows: false,
                dots: true,
                fade: true,
                cssEase: 'linear'
            });
        }
    }

    //Setting hero slider
    function faqImagesSlider() {
        if ($(".faqImages-slider").length) {
            $(".faqImages-slider").slick({
                autoplay: false,
                autoplaySpeed: 6000,
                pauseOnHover: true,
                infinite: true,
                dots: true,
                fade: true,
                cssEase: 'linear',
                arrows: true,
                prevArrow:
                    '<div class="slick-prev"><span class="btn btn-primary"><i data-feather="arrow-left-circle"></i></span></div>',
                nextArrow:
                    '<div class="slick-next"><span class="btn btn-primary"><i data-feather="arrow-right-circle"></i></span></div>'
            });
        }
    }

    // Parallax background
    function bgParallax() {
        if ($(".parallax").length) {
            $(".parallax").each(function () {
                var height = $(this).position().top;
                var resize = height - $(window).scrollTop();
                var doParallax = -(resize / 5);
                var positionValue = doParallax + "px";
                var img = $(this).data("bg-image");

                $(this).css({
                    backgroundImage: "url(" + img + ")",
                    backgroundPosition: "50%" + positionValue,
                    backgroundSize: "cover"
                });
            });
        }
    }

    function productSlider() {
        if ($(".product-slider, .faq-slider").length) {
            $(".product-slider, .faq-slider").slick({
                infinite: true,
                slidesToShow: 3,
                dots: false,
                arrows: true,
                autoplay: false,
                autoplaySpeed: 4000,
                prevArrow:
                    '<div class="slick-prev"><span class="btn btn-primary"><i data-feather="arrow-left-circle"></i></span></div>',
                nextArrow:
                    '<div class="slick-next"><span class="btn btn-primary"><i data-feather="arrow-right-circle"></i></span></div>'
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
                asNavFor: ".updateHorizontal-slider",
                arrows: true,
                prevArrow:
                    '<div class="slick-prev"><span class="btn btn-primary"><i data-feather="arrow-left-circle"></i></span></div>',
                nextArrow:
                    '<div class="slick-next"><span class="btn btn-primary"><i data-feather="arrow-right-circle"></i></span></div>'
            });
        }
        if ($(".updateHorizontal-slider").length) {
            $(".updateHorizontal-slider").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 4000,
                infinite: true,
                asNavFor: ".updateVertical-slider",
                arrows: true,
                prevArrow:
                    '<div class="slick-prev slick-btn"><span class="btn btn-primary"><i data-feather="arrow-left-circle"></i></span></div>',
                nextArrow:
                    '<div class="slick-next slick-btn"><span class="btn btn-primary"><i data-feather="arrow-right-circle"></i></span></div>',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            asNavFor: ""
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
        sliderBgSetting();
        heroSlider();
        productSlider();
        updatesSlider();
        faqImagesSlider();

        var windowHeight = $(window).outerHeight()
        var headerHeight = $('header').outerHeight();
        $(".hero-slider-wrapper").css("height", (windowHeight - 200)+"px");

        //Feather Icon Init
        feather.replace();
    });

    /*==========================================================================
          WHEN WINDOW SCROLL
      ==========================================================================*/
    $(window).on("scroll", function () {
        bgParallax();

        if ($(window).scrollTop() > 300) {
            backToTopBtn.addClass("show");
        } else {
            backToTopBtn.removeClass("show");
        }
    });

    /*==========================================================================
          WHEN WINDOW RESIZE
      ==========================================================================*/
    $(window).on("resize", function () { });
})(window.jQuery);
