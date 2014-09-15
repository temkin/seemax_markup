$(document).ready(function(){
    /* Показать/Спрятать поиск */
    $(".search i").click(function(){
         $(".header__search").fadeIn("fast");
         $(".search__slog input").focus();
        setTimeout(function(){
            $(".close_cross").addClass("show");
        },400);
         $(".header__i").hide();
     });
     $(".close_cross").click(function(){
         $(this).removeClass("show");
         $(".header__search").fadeOut("fast", function (){
            $(".header__i").show();
        });
     });

    /* закрытие поиска по клику вне блока поиска */
    $(document).on("mousedown", function(e){
        if($(e.target).closest(".header__search").length != 1){
            if($(".close_cross").hasClass("show")){
                $(".close_cross").trigger("click");
            }
        }
    });


    /*** Slider Handler ***/

    var sliderInterval = 5000;
    var sliderElementsNum = $('.slider__i').children().length;
    var sliderActive = 1;

    
    // Animate nav images: zoom in/out

    function navZoomOut(navObj) // `nav__i` -> navObj
    {
        navObj.find(".boxImg").stop(true, false).animate({
            top: -2,
            left: -0,
            width: 82,
            height: 82
        }, 250);
    }

    function navZoomIn(navObj) // `nav__i` -> navObj
    {
        navObj.find(".boxImg").stop(true, false).animate({
            top: -96,
            left: -30,
            width:124,
            height:124
        }, 250);
    }


    // Timer
    var sliderMove = function () {
        
        // Hide previous slide
        $('.slider_bg_' + String(sliderActive) ).fadeOut('slow'); 
           // Previous navigation item handling
        var navObj = $('.slider__nav .nav__i:nth-child(' + String(sliderActive) + ')');
        navObj.removeClass('cur');

        if ( !navObj.hasClass('mouse_over') ){
            navZoomOut(navObj);
        }

        // Calculate the next slide id
        sliderActive++;
        if (sliderActive > sliderElementsNum){
            sliderActive = 1;
        }
        $('.slider_bg_' + String(sliderActive) ).fadeIn("slow");   

        
        // The next navigation item handling
        var navObj = $('.slider__nav .nav__i:nth-child(' + String(sliderActive) + ')');
        navObj.addClass('cur');

        if ( !navObj.hasClass('mouse_over') ){
            navZoomIn(navObj);
        }    
    }

    var sliderIntervalID = setInterval(sliderMove, sliderInterval);



    // Mouse interaction with navigation toolbar
    $(".sliderBox").hover(
        function() {clearInterval(sliderIntervalID);},
        function() {sliderIntervalID = setInterval(sliderMove, sliderInterval);}
    );

    $('.nav__i').on('mouseover', function() {
        var toSlideNumber = parseInt($(this).attr("slide"));
        $(this).addClass('mouse_over');
        if ( !$(this).hasClass('cur') )
        {
            navZoomIn( $(this) );
            navZoomOut($('.cur'));
            $('.cur').removeClass('cur');
            $(this).addClass("cur");
        }
        if (sliderActive != toSlideNumber){
            $('.slider_bg_' + String(sliderActive)).fadeOut('slow');
            $('.slider_bg_' + String(toSlideNumber)).fadeIn('slow');
            sliderActive = toSlideNumber;

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
            width: '100%',
            responsive: true,
            height: 648,
            prev: $('.gal__a.prev', _this),
            next: $('.gal__a.next', _this),
            items: {
                visible:1
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
            var self = this;
            var _service = $(this).parent();
            if (_service.hasClass('cur')){
                _service.removeClass('cur').find('.section__content').slideUp();
            } else {
                var curContentHeight = $('.cur .section__content').height();
                if($('.supportBox .cur').offset()){
                    var curElemTop = $('.supportBox .cur').offset().top;
                }
                $('.cur .section__content').slideUp('slow');
                $('.contentBox .cur').removeClass('cur');
                _service.addClass('cur').find('.section__content').slideDown();
                $('.contentBox .cur h3').css('opacity', 1);
                var destination = $(self).parent().offset().top > curElemTop?$(self).parent().offset().top  - curContentHeight:$(self).parent().offset().top;
                $('html, body').animate({scrollTop:destination}, 800);
            }
            return false;
        });
        $('.section__title').on('mouseover' , function (){$(this).css('opacity',1);});
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



     //region
    $('.region').hover(
        function (){$('.region a').fadeIn("fast");},
        function (){$('.region a').fadeOut("fast");}
    );
     //FAQ TAB

    //  $('.boxFaq__tab').each(function(){
    //     var _this = $(this);
    //     $('.nav__faq li', _this).each(function(i){
    //         $(this).click(function(){
    //             $('.boxDescrCarousel').carouFredSel({scroll:{fx:"fade"}});
    //             $('.boxDescrCarousel').trigger('pause');
    //             $('.boxDescrCarousel', _this).trigger('slideTo', i);
    //             $('.nav__faq li.current', _this).removeClass('current');
    //             $(this).addClass('current');
    //             return false;
    //         });
    //     });
        
    //     $('.boxDescrCarousel', _this).carouFredSel({
    //         responsive: false,
    //         circular: false,
    //         infinite: false,
    //         align: 'left',
    //         width: '100%',
    //         auto: {
    //             play: false
    //         },
    //         scroll: {
    //             items:1
    //         }, 
    //         items: {
    //             visible: 1,
    //             width: 960
    //         }
    //     })
    // });

    //Parallax
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var offset = (scrollTop-300)/5;
        if (offset < 150 && scrollTop >= 300){
            $('.linkSlide img').css('margin-top', -offset );
        }
        var bannerTop = $('.bannerBox__i').offset()? scrollTop - $('.bannerBox__i').offset().top : 0;
        if (bannerTop >= -50 && bannerTop <= 50){
            $('.bannerBox__i').css('background-position-y', bannerTop/3);
        }
    });

    //Main menu add events

    $('.with-sub').hover(
        function (){$(this).children('.mainMenu__add').fadeIn("fast");},
        function (){$(this).children('.mainMenu__add').fadeOut("fast");}
    );

    $('.mainMenu__add_i.level1 > ul > li > a').on('click', function(){ 
        $(this).parents('.mainMenu__add_i').find('li').removeClass('cur');
        $(this).parents('.level1').find('.level2').hide();
        $(this).parent('li').addClass('cur').find('.level2').show();
        //двигаем товары вниз
        if($(this).parent('li').find('.level2').length){
            $(this).parents('.header').next('.catalogPage').find('.catalogBox').addClass('menu_on'); 
        }
        else{
            $(this).parents('.header').next('.catalogPage').find('.catalogBox').removeClass('menu_on'); 
        }  
    }); 

    $('.mainMenu__add_i.level2 > ul > li > a').on('click', function(){ 
        $(this).parents('.mainMenu__add_i.level2').find('li').removeClass('cur'); 
        $(this).parent('li').addClass('cur'); 
    }); 

    //Search
    $('.close__search').on("click", function (){
        $(this).prev().val('');
    });
    //Form pass
    $('.show-pass').on('click', function (){
        $(this).toggleClass("active");
        if ($(this).prev().attr('type') == "password") {
            $(this).prev()[0].type = "text";
        }else{
            $(this).prev()[0].type = "password";
        }
    });
    //Maps
    $('#open-map').on("click", function (e){
        $('.mapsBox').animate({height:"828px"}).addClass('active');
        $('#close-map').show();
        $(this).hide();
        e.stopPropagation();
        e.preventDefault();
    });
    $('#close-map').on("click", function (e){
        $('.mapsBox').animate({height:0}).removeClass('active');
        $('#open-map').show();
        $(this).hide();
        e.stopPropagation();
        e.preventDefault();
    });
    google.maps.event.addDomListener(window, 'load', initializeMap);
    function initializeMap() {
        var mapOptions = {
          center: new google.maps.LatLng(53.709807, 27.953389),
          zoom: 7
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
        var places = {
            minsk: new google.maps.Marker({
                position: new google.maps.LatLng(53.855724, 27.447270),
                map: map,
                title: 'Minsk'
            }),
            brest: new google.maps.Marker({
                position: new google.maps.LatLng(52.100768, 23.700771),
                map: map,
                title: 'Brest'
            }),
            vitebsk: new google.maps.Marker({
                position: new google.maps.LatLng(55.192597, 30.229915),
                map: map,
                title: 'Vitebsk'
            })
        };
        $('.pin-link').on('click', function (e){
            if (!$('.mapsBox').hasClass('active')) {
                $('#open-map').trigger('click');
            };
            var bounds = new google.maps.LatLngBounds(),
                marker = places[$(this).attr('loc')];
            bounds.extend(new google.maps.LatLng(marker.getPosition().lat(), marker.getPosition().lng()));
            map.fitBounds(bounds);
            $('html, body').animate({scrollTop:$('.mapsBox').offset().top}, 800);
            e.stopPropagation();
            e.preventDefault();
        });

      }
      





}); /* END $(document).ready() */