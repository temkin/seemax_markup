$(document).ready(function () {
	    //Dropdown
    var productdd = new DropDown( $('#product-dd') );
    var placedd = new DropDown( $('#place-dd') );
    var countrydd = new DropDown( $('#country-dd') );
    var  knowdd = new DropDown( $('#know-dd') );

    $(document).click(function() {
    	$('.wrapper-dropdown-1').removeClass('active');
    });

    $('.item__i.quest').hover(function (e){
    		$(this).css('opacity',1);
            $('.serial-help-device').fadeIn('fast');
    		e.stopPropagation();
    	},
        function (){
            $('.serial-help-device').fadeOut('fast');
            $('.form__item .inputBox .item__i.quest').css('opacity',0.5);
        }
    );

    $('#choose-date').datepicker();
});