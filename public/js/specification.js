$(document).ready(function(){
      //speciffication
       $('.boxFiles').css('top',$('.featuresBox').offset().top);
     $('.image-zoom').jqzoom({zoomType: 'innerzoom'});
     $('.visualModel__box').each(function(){

        var _this = $(this);
        //console.log(_this);

        $('.preview__item', _this).each(function(i){
            
            // Set an additional attribute for items
            $(this).attr('item-id', i);


            $(this).click(function(){
                var direction = 'next';
                $('.previewBox__i', _this).trigger('slideTo', $(this).attr('item-id')-1);
                return false;
            });
        });


        $('.bigFotot__model a img').each(function (i) {
            $(this).attr('item-id', i);
        });


        $('.previewBox__i', _this).carouFredSel({
            responsive: false,
            circular: true,
            infinite: false,
            prev: $('.prev_ar.ar_l', _this),
            next: $('.prev_ar.ar_r', _this),
            width: 546,//'546',
            height: 135,//'125',
            align: 'center',
            auto: {
                play: false
            },
            scroll: {
                items:1,
                onAfter: function () {
                    // Get item-id value of selected item
                    var itemId = $('.preview__item:eq(1)').attr('item-id');
                    
                    // Slide the big carousel to the same item-id
                    $('.bigFotot__model').trigger('slideTo', parseInt(itemId)  );
                }
            }, 
            items: {
                visible: 3
            }
        });

        $('.visual_characteristic').each(function(){
        var _this = $(this);
        
        $('.visual__i', _this).carouFredSel({
            responsive: false,
            circular: true,
            infinite: false,
            width: 560,
            height: 170,
            auto: {
                play: true
            },
            scroll: {
                items:1,
                duration:800
            }, 
            items: {
                visible: 1
            }, 
            pagination: {
                container: $('.visual__loader', _this)
            }
        })
    });


        var _this = $(this);
        $('.bigFotot__model', _this).carouFredSel({
            responsive: false,
            circular: true,
            infinite: false,
            width: '660',
            align: 'center',
            auto: {
                play: false,
            },
            scroll: {
                items:1,
                fx: "fade",
                onAfter: function () {
                    $('.bigFotot__model').css('visibility', 'visible');
                },
                duration:500
            }, 
            items: {
                visible: 1
            },
            onCreate: function() {
                $(this).trigger('slideTo', 1);
            }
        });
        // Sticky files panel
    var filesPanelBottomOffset = $(document).height() - $('.prodSpecification').position().top - $('.prodSpecification').height()+100 ;
    $.lockfixed('.boxFiles', {offset: {top: 105, bottom: filesPanelBottomOffset }});
    });
});