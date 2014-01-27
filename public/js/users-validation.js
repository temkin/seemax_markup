$.bt_validate.method(
    'phone', 
    function(value) {
        return value.match(/^[0-9()-+ ]+$/ );
    },
    "Введите правильный номер телефона (с кодом города или оператора)"
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

$.bt_validate.text["required"] = "Заполните это поле, пожалуйста.";
$.bt_validate.text["email"] = "Введите корректный e-mail.";
$.bt_validate.text["datetime"] = "Введите корректную дату.";


$(document).ready(function (){
    var fieldsState = {};
    $.each($.bt_validate.form.find('input[validate],select[validate],textarea[validate]'), function (key, value){
        fieldsState[value.name] = false;
    });
    $.bt_validate.after_validate = function(method, value, params, result) {
        if (!result){
            $(this).addClass("input-error");
            $('.form__item .inputBox .item__i.quest').hide();
            fieldsState[$(this)[0].name] = false;
        }else{
            fieldsState[$(this)[0].name] = true;
            $(this).removeClass("input-error");
        }
        if(allFieldsOk(fieldsState)){
            $('.cloudBtn').addClass('active');
        }else{
            $('.cloudBtn').removeClass('active');
        }

    }
    var allFieldsOk = function (fields){
        var res = true;
        $.each(fields, function (num, field){
            if (!field){return res = false;}
        });
        return res;
    }
});