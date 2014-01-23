(function ( $ ) {
 
    $.fn.loader = function( action ) {
        var self = this,
            activePoint = 0;
        if (action == "start") {
            this.show();
            if (!this[0].startLoader){
                this[0].startLoader = setInterval(function (){
                    self.children().removeClass("cur").removeClass("pre-cur").css('opacity',0);
                    self.children().eq(activePoint).addClass("cur").css('opacity',1);;
                    self.children().eq(activePoint).prev().addClass("pre-cur").css('opacity',1);;
                    activePoint++;
                    if (activePoint == 3) {
                        activePoint=0;
                    };
                }, 250);
            }
        }
        else if (action == "stop"){
            clearInterval(this[0].startLoader);
            this.hide();
        }
        return this;
    };
}( jQuery ));

