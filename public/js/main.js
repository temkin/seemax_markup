$(document).ready(function(){

    /* Показать/Спрятать поиск */
    $(".search i").click(function(){
         $(".header__search").show();
         $(".search__slog input").focus();
        setTimeout(function(){
            $(".close_ar").addClass("show");
        },400);
         $(".header__i").hide();
     });
     $(".close_cross").click(function(){
         $(this).removeClass("show");
         $(".header__search").hide();
         $(".header__i").show();
     });

    /* закрытие поиска по клику вне блока поиска */
    $(document).on("mousedown", function(e){
        if($(e.target).closest(".header__search").length != 1){
            if($(".close_ar").hasClass("show")){
                $(".close_ar").trigger("click");
            }
        }
    });


    /*** Slider Handler ***/

    var sliderInterval = 5000;
    var sliderElementsNum = $('.slider__ii').children().length;
    var sliderActive = 1;

    
    // Animate nav images: zoom in/out

    function navZoomOut(navObj) // `nav__i` -> navObj
    {
        navObj.find(".boxImg").stop(true, false).animate({
            top: -2,
            left: -0,
            width: 82,
            height: 82
        }, 400);
    }

    function navZoomIn(navObj) // `nav__i` -> navObj
    {
        navObj.find(".boxImg").stop(true, false).animate({
            top: -96,
            left: -30,
            width:124,
            height:124
        }, 400);
    }


    // Timer
    window.setInterval(function () {
        
        // Hide previous slide
        $('.slider_bg_' + String(sliderActive) ).hide();

        // Previous navigation item handling
        var navObj = $('.slider__nav .nav__i:nth-child(' + String(sliderActive) + ')');
        navObj.removeClass('cur');

        if ( !navObj.hasClass('mouse_over') )
        {
            navZoomOut(navObj);
        }

        // Calculate the next slide id
        sliderActive++;
        if (sliderActive > sliderElementsNum)
        {
            sliderActive = 1;
        }

        // Show the next slide
        $('.slider_bg_' + String(sliderActive) ).show();

        // The next navigation item handling
        var navObj = $('.slider__nav .nav__i:nth-child(' + String(sliderActive) + ')');
        navObj.addClass('cur');

        if ( !navObj.hasClass('mouse_over') )
        {
            navZoomIn(navObj);
        }        

        // /Switch slides and navigation items
    }, sliderInterval);


    // Mouse interaction with navigation toolbar

    $('.nav__i').on('mouseover', function() {
        $(this).addClass('mouse_over');

        if ( !$(this).hasClass('cur') )
        {
            navZoomIn( $(this) );
        }
    });

    $('.nav__i').on('mouseout', function() {
        $(this).removeClass('mouse_over');

        if ( !$(this).hasClass('cur') )
        {
            navZoomOut( $(this) );   
        }
    });



    $('.slider_bg_1').click(function () {


    } );

    //GALLERY

    $('.galleryBox').each(function(){
        var _this = $(this);
        $('.gallery__i', _this).carouFredSel({
            width: 1280,
            height: 648,
            prev: $('.gal__a.prev', _this),
            next: $('.gal__a.next', _this),
            items: {
                visible:1,
                height:648
            },
            auto: {
                play: false
            },
            scroll: {
                items:1
            }
        });
    });

    //SUPPORT

     $('.support__i .support__section').each(function(){
        $('.section__title', this).click(function(){

            var _service = $(this).parent();
            if (_service.hasClass('cur')){
                _service.removeClass('cur').find('.section__content').slideUp('slow');
            } else {
                $('.cur .section__content').slideUp('slow');
                $('.cur').removeClass('cur');
                _service.addClass('cur').find('.section__content').slideDown('slow');
            }
            return false;
        })

    });

     //FAQ

     $('.faqBox ul li').each(function(){
        $('.quest', this).click(function(){

            var _service = $(this).parent();
            if (_service.hasClass('cur')){
                _service.removeClass('cur').find('.answer').slideUp('slow');
            } else {
                $('.cur .answer').slideUp('slow');
                $('.cur').removeClass('cur');
                _service.addClass('cur').find('.answer').slideDown('slow');
            }
            return false;
        })

    });

     // speciffication2

     $('.visual_characteristic').each(function(){
        var _this = $(this);
        
        $('.visual__i', _this).carouFredSel({
            responsive: false,
            circular: true,
            infinite: false,
            width: 560,
            height: 170,
            auto: {
                play: false
            },
            scroll: {
                items:1
            }, 
            items: {
                visible: 1
            }, 
            pagination: {
                container: $('.visual__loader', _this)
            }
        })
    });

     //FAQ TAB

     $('.boxFaq__tab').each(function(){
        var _this = $(this);
        $('.nav__faq li', _this).each(function(i){
            $(this).click(function(){
                $('.boxDescrCarousel', _this).trigger('slideTo', i);
                $('.nav__faq li.current', _this).removeClass('current');
                $(this).addClass('current');
                return false;
            });
        });
        
        $('.boxDescrCarousel', _this).carouFredSel({
            responsive: false,
            circular: false,
            infinite: false,
            align: 'left',
            width: '100%',
            auto: {
                play: false
            },
            scroll: {
                items:1
            }, 
            items: {
                visible: 1,
                width: 960
            }
        })
    });

     //speciffication

     $('.visualModel__box').each(function(){

        var _this = $(this);

        $('.preview__item', _this).each(function(i){
            
            $(this).click(function(){
                $('.bigFotot__model', _this).trigger('slideTo', i);
                $('.previewBox .preview__item.cur', _this).removeClass('cur');
                $(this).addClass('cur');
                return false;
            });
        });
        

        $('.previewBox__i', _this).carouFredSel({
            responsive: false,
            circular: false,
            infinite: false,
            prev: $('.prev_ar.ar_l', _this),
            next: $('.prev_ar.ar_r', _this),
            width: '550',
            height:'125',
            align: 'center',
            auto: {
                play: false
            },
            scroll: {
                items:2
            }, 
            items: {
                visible: 3
            }
        });

        var _this = $(this);
        $('.bigFotot__model', _this).carouFredSel({
            responsive: false,
            circular: false,
            infinite: false,
            width: '660',
            align: 'center',
            auto: {
                play: false
            },
            scroll: {
                items:1,
                fx: 'crossfade'
            }, 
            items: {
                visible: 1
            }
        });
    });




}); /* END $(document).ready() */