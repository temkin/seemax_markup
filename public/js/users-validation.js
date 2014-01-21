$.bt_validate.method(
    'phone', 
    function(value) {
        return value.length <= 12 && value.match(/^\d+$/);
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
$.bt_validate.method(
    'serial', 
    function(value) {
        return (value.replace(/\s/g, "").replace(/\-/g,"").length == 12);
    },
    "Данное поле заполнено неверно."
); 
$.bt_validate.after_validate = function(method, value, params, result) {
    if (!result){
        $(this).addClass("input-error");
        $('.form__item .inputBox .item__i.quest').hide();
    }else{
        $(this).removeClass("input-error");
    }
}
$.bt_validate.text["required"] = "Это поле должно быть заполнено.";
$.bt_validate.text["email"] = "Введен неверный e-mail.";
$.bt_validate.text["datetime"] = "Введена неверная дата";