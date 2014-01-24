$.bt_validate.method(
    'phone', 
    function(value) {
        return value.match(/^[0-9()-+ ]+$/ );
    },
    "Номер телефона должен состоять из 11 цифр и включать код города и страны"
);  
$.bt_validate.method(
    'name', 
    function(value) {
        return (!(/[\d]/.test(value)));
    },
    "Данное поле может содержать только кириллические буквы"
); 
$.bt_validate.method(
    'serial', 
    function(value) {
        return !(/[^0-9a-zA-Z\s\-]/.test(value)) && value.replace(/[\s\-]/g,"").length<=16;
    },
    "Введите корректный серийный номер."
); 
$.bt_validate.after_validate = function(method, value, params, result) {
    if (!result){
        $(this).addClass("input-error");
        $('.form__item .inputBox .item__i.quest').hide();
        $('.cloudBtn').removeClass('active');
    }else{
        $(this).removeClass("input-error");
        $('.cloudBtn').addClass('active');
    }
}
$.bt_validate.text["required"] = "Заполните это поле, пожалуйста.";
$.bt_validate.text["email"] = "Введите корректный e-mail.";
$.bt_validate.text["datetime"] = "Введите корректную дату.";