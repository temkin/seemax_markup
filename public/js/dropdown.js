function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.dropdown > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;
 
        obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            return false;
        });

        obj.dd.on('blur', function(event){
            $(this).removeClass('active');
            return false;
        });
 
 
        obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();

            $.each(obj.opts, function (num, opt){
                console.log($(opt).text()+" --- " + obj.val);
                if ($(opt).text() ==  obj.val){
                    $(opt).find('a').text(obj.placeholder.text());
                }
            });
            obj.index = opt.index();
            obj.placeholder.text(obj.val);

        });
    },
    getValue : function() {
        return this.val;
    },
    getIndex : function() {
        return this.index;
    }
}