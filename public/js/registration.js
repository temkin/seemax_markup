$(document).ready(function () {
	    //Dropdown
    var productdd = new DropDown( $('#product-dd') );
    var placedd = new DropDown( $('#place-dd') );
    var countrydd = new DropDown( $('#country-dd') );
    var  knowdd = new DropDown( $('#know-dd') );

    $('.item__i.quest').hover(
    	function (e){
    		$(this).css('opacity',1);
            $('.serial-help-device').fadeIn('fast');
    	},
        function (){
            $('.serial-help-device').fadeOut('fast');
            $('.form__item .inputBox .item__i.quest').css('opacity',0.5);
        }
    );
    //datepicker
    $('#choose-date').datepicker({format:"dd/mm/yyyy"});

    //validation
    $('#reg-form').bt_validate();
});