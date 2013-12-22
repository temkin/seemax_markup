$(document).ready(function(){

    /* Показать/Спрятать поиск */
    $(".search i").click(function(){
         $(".header__search").show();
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




}); /* END $(document).ready() */