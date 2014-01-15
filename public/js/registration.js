$(document).ready(function () {
	    //Dropdown
    var productdd = new DropDown( $('#product-dd') );
    var placedd = new DropDown( $('#place-dd') );
    var countrydd = new DropDown( $('#country-dd') );
    var  knowdd = new DropDown( $('#know-dd') );

    $(document).click(function() {
    	$('.wrapper-dropdown-1').removeClass('active');
        $('.serial-help-device').fadeOut('fast');
        $('.form__item .inputBox .item__i.quest').css('opacity',0.5);
    });

    $('.item__i.quest').on('click',
    	function (e){
    		$(this).css('opacity',1);
    		$('.serial-help-device').css({opacity: 0, display: 'inline-block'}).animate({opacity:1},600);
    		e.stopPropagation();
    	}
    );
});