$(document).ready(function (){
    var  themedd = new DropDown( $('#theme-dd') );
    $(document).click(function() {
    	$('.wrapper-dropdown-1').removeClass('active');
    });
    $('.question-btn').on('click', function (e){
    	$('.question-form').slideToggle();
    	$(this).toggleClass('active');
    	e.preventDefault();
    });
    $('#partner-form').bt_validate();
    $('.nav__faq li').click(function(){
        $('.nav__faq li').removeClass('current');
        $(this).addClass('current');
    
        var n = $(this).index();
        $('.faqBox').fadeOut();
        $('.faqBox').eq(n).fadeIn();

        return false;
    });
    $('#send-requst').on('click', function (){
    });
});