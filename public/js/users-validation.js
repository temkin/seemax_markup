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
    //phone mask init
    Typecast.Init();

    var fieldsState = {};
    $.each($.bt_validate.form.find('input[validate],select[validate],textarea[validate]'), function (key, value){
        fieldsState[value.name] = false;
        console.log(fieldsState[value.name]+' ' +value.name); 
        if(value.name == 'phone'){ 
        }
    });
    $.bt_validate.after_validate = function(method, value, params, result) { 
        // phone validation with mask begin
        if((value.indexOf('+X') === 0) && result){
            $(this).addClass("input-error");
            $('.form__item .inputBox .item__i.quest').hide();
            result = false;
        } 
        // phone validation with mask end
 
            console.log(result);
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