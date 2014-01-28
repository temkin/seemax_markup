$(document).ready(function (){
    var citydd = new DropDown( $('#city-dd') );
    $(document).click(function() {
    	$('.wrapper-dropdown-1').removeClass('active');
    });
    $('.open-close-buts a').on('click', function (e){
	    var self = $(this),
	    	but = null,
	    	showedObj = null,
	    	closedObj = null;
    	if($(this).hasClass('open-map')){
	    	but = self.next();
	    	showedObj = '.map-image';
	    	closedObj = '.shop-image';
	    }else{
	    	but = self.prev();
	    	showedObj = '.shop-image';
	    	closedObj = '.map-image';
	    }
    	var section;
    	if(self.parents('.ad__i').hasClass('top')){
    		section = 'top';
    	}else{
    		section = 'bot';
    	}
		var currentImages = self.parents('.adBox').children('.image-section.' + section);
		var imagesSection = currentImages.eq(0).children();
		imagesSection.children(closedObj).fadeOut('fast', function (){
			imagesSection.children(showedObj).fadeIn('fast');
			self.hide();
			but.show();
		});
		
    	e.preventDefault();
    });
});