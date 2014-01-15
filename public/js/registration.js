$(document).ready(function () {
	    //Dropdown
    var productdd = new DropDown( $('#product-dd') );
    var placedd = new DropDown( $('#place-dd') );

    $(document).click(function() {
        // all dropdowns
        $('.wrapper-dropdown-1').removeClass('active');
    });
});