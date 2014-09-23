function DropDown(el) {
    this.dd = el;
    this.name = this.dd.attr('name');
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.dropdown > li');
    this.val = '';
    this.index = -1;
    this.init();
}
DropDown.prototype = {
    init: function() {
        var obj = this;
 
        obj.dd.on('click', function(event){
            $(this).addClass('active');
            return false;
        });

        obj.dd.on('blur', function(event){
            $(this).removeClass('active');
            return false;
        });
        
        $.each(obj.opts, function (num, opt){
            $(opt).attr('value', num+2);
        });

        obj.placeholder.attr('value',1);
        $('<input type="hidden" name="'+ this.name +'" value="1">').insertAfter(obj.dd);
        obj.input = obj.dd.next();

        obj.opts.on('click', function(e){
            var opt = $(this);
            obj.val = opt.text();

            $.each(obj.opts, function (num, opt){
                if ($(opt).text() ==  obj.val){
                    $(opt).find('a').text(obj.placeholder.text());
                    var optVal = $(opt).attr('value');
                    $(opt).attr('value', obj.placeholder.attr('value'));
                    obj.placeholder.attr('value', optVal);
                }
            });
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
            obj.input.attr('value', obj.placeholder.attr('value'));
            obj.dd.removeClass('active');
            e.stopPropagation();
            e.preventDefault();
        });
    },
    getValue : function() {
        return this.val;
    },
    getIndex : function() {
        return this.index;
    }
}