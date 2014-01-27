$(document).ready(function (){
    var  themedd = new DropDown( $('#theme-dd') );
    $('.question-btn').on('click', function (e){
    	$('.question-form').slideToggle();
    	$(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('html, body').animate({scrollTop: $('.pageForm.question-form').offset().top}, 800); 
        }
    	e.preventDefault();
    });
    $('#partner-form').bt_validate();
    $('.nav__faq li').click(function(){
        $('.nav__faq li').removeClass('current');
        $(this).addClass('current');
    
        var n = $(this).index();
        $('.faqBox').hide();
        $('.faqBox').eq(n).fadeIn();

        return false;
    });
    $('#send-request').on('click', function (){
        $('html, body').animate({scrollTop: $('.pageForm.question-form').offset().top}, 800); 
    });
});