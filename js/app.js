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
                autoplay: true,
                autoplaySpeed: 6000,
                pauseOnHover: true,
                infinite: true,
                dots: false,
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
                autoplay: true,
                autoplaySpeed: 4000,
                prevArrow:
                    '<div class="slick-prev"><span class="btn btn-primary"><i data-feather="arrow-left-circle"></i></span></div>',
                nextArrow:
                    '<div class="slick-next"><span class="btn btn-primary"><i data-feather="arrow-right-circle"></i></span></div>'
            });
        }
    }

    function productCategorySlider() {
        if ($(".productCategory-slider").length) {
            $(".productCategory-slider").slick({
                infinite: true,
                slidesToShow: 3,
                dots: true,
                arrows: true,
                autoplay: true,
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
                autoplay: true,
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
                autoplay: true,
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

    //Setting Product Detail Slider
    function productDetailSlider() {
        if ($(".productDetail-slider").length) {
            $('.productDeatailImage-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                dots: false,
                arrows: true,
                autoplay: true,
                autoplaySpeed: 4000,
                prevArrow:
                    '<div class="slick-prev slick-btn"><span class="btn btn-primary"><i data-feather="arrow-left-circle"></i></span></div>',
                nextArrow:
                    '<div class="slick-next slick-btn"><span class="btn btn-primary"><i data-feather="arrow-right-circle"></i></span></div>',
            });

            $('.productDeatailThumb-slider')
                .on('init', function (event, slick) {
                    $('.productDeatailThumb-slider .slick-slide.slick-current').addClass('is-active');
                })
                .slick({
                    draggable: true,
                    infinite: false,
                    slidesToShow: 7,
                    dots: false,
                    arrows: true,
                    autoplay: true,
                    autoplaySpeed: 4000,
                    prevArrow:
                        '<div class="slick-prev slick-btn"><span class="btn btn-primary"><i data-feather="arrow-left-circle"></i></span></div>',
                    nextArrow:
                        '<div class="slick-next slick-btn"><span class="btn btn-primary"><i data-feather="arrow-right-circle"></i></span></div>',
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3,
                            }
                        }
                    ]
                });

            $('.productDeatailImage-slider').on('afterChange', function (event, slick, currentSlide) {
                $('.productDeatailThumb-slider').slick('slickGoTo', currentSlide);
                var currrentNavSlideElem = '.productDeatailThumb-slider .slick-slide[data-slick-index="' + currentSlide + '"]';
                $('.productDeatailThumb-slider .slick-slide.is-active').removeClass('is-active');
                $(currrentNavSlideElem).addClass('is-active');
            });

            $('.productDeatailThumb-slider').on('click', '.slick-slide', function (event) {
                event.preventDefault();
                var goToSingleSlide = $(this).data('slick-index');

                $('.productDeatailImage-slider').slick('slickGoTo', goToSingleSlide);
            });
        }
    }

    function moreUpdateSlider() {
        if ($(".moreUpdates-slider").length) {
            $(".moreUpdates-slider").slick({
                infinite: true,
                slidesToShow: 1,
                dots: true,
                arrows: true,
                autoplay: true,
                autoplaySpeed: 4000,
                prevArrow:
                    '<div class="slick-prev"><span class="btn btn-primary"><i data-feather="arrow-left-circle"></i></span></div>',
                nextArrow:
                    '<div class="slick-next"><span class="btn btn-primary"><i data-feather="arrow-right-circle"></i></span></div>'
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
        productDetailSlider();
        productCategorySlider();
        updatesSlider();
        faqImagesSlider();
        moreUpdateSlider();

        var windowHeight = $(window).outerHeight()
        var headerHeight = $('header').outerHeight();
        $(".hero-slider-wrapper").css("height", (windowHeight - headerHeight) + "px");

        var cursor = new MouseFollower({
            stateDetection: {
                '-pointer': 'a, button, .btn',
                '-hidden': 'iframe, input, select, textarea'
            }
        });

        backToTopBtn.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, '100');
        });

        var enqueryBoxHeight = $("#enqueryBox").outerHeight();
        if (window.matchMedia('(min-width: 1200px)').matches) {
            $(".aboutUsBox-section").find(".img-box > img").css("height", enqueryBoxHeight + "px");
        }

        $(function () {

            $('.custom-dropdown').on('show.bs.dropdown', function () {
                var that = $(this);
                setTimeout(function () {
                    that.find('.dropdown-menu').addClass('active');
                }, 100);


            });
            $('.custom-dropdown').on('hide.bs.dropdown', function () {
                $(this).find('.dropdown-menu').removeClass('active');
            });

        });

        //Feather Icon Init
        feather.replace();
    });

    /*==========================================================================
          WHEN WINDOW SCROLL
      ==========================================================================*/
    $(window).on("scroll", function () {
        bgParallax();

        var sticky = $('header'),
            scroll = $(window).scrollTop(),
            headerHeight = $("header").outerHeight(),
            windowHeight = $(window).outerHeight();

        if (scroll >= 500) {
            $("body").css("padding-top", headerHeight + "px");
            sticky.addClass('position-fixed');
        } else {
            $("body").css("padding-top", "0px");
            sticky.removeClass('position-fixed');
        };

        if ($(window).scrollTop() > 300) {
            backToTopBtn.addClass("show");
        } else {
            backToTopBtn.removeClass("show");
        }

        $('[data-bs-toggle="dropdown"]').removeClass('show');
        $("ul.dropdown-menu").removeClass('show active');
    });

    /*==========================================================================
          WHEN WINDOW RESIZE
      ==========================================================================*/
    $(window).on("resize", function () { });
})(window.jQuery);
