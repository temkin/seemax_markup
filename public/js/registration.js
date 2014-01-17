$(document).ready(function () {
	    //Dropdown
    var productdd = new DropDown( $('#product-dd') );
    var placedd = new DropDown( $('#place-dd') );
    var countrydd = new DropDown( $('#country-dd') );
    var  knowdd = new DropDown( $('#know-dd') );

    $(document).click(function() {
    	$('.wrapper-dropdown-1').removeClass('active');
    });

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

    $.bt_validate.method(
        'phone', 
        function(value) {
            return value.length == 11 && value.match(/^\d+$/);
        },
        "Номер телефона должен состоять из 11 цифр и включать код города и страны"
    );  
    $.bt_validate.method(
        'name', 
        function(value) {
            return (!(/[\d]/.test(value)));
        },
        "Данное поле не может содержать цифры"
    ); 
    $.bt_validate.after_validate = function(method, value, params, result) {
        if (!result){
            $(this).addClass("input-error");
        }else{
            $(this).removeClass("input-error");
        }
    }
    $.bt_validate.text["required"] = "Это поле должно быть заполнено.";
    $.bt_validate.text["email"] = "Введен неверный e-mail.";
    $.bt_validate.text["datetime"] = "Введена неверная дата";


});