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

});