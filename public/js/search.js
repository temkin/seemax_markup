$(document).ready(function(){
	var track_load = 0; //total loaded record group(s)
    var loading  = false; //to prevents multipal ajax loads
    var total_groups = 2;//<?php echo $total_groups; ?>;
	$(window).scroll(function() { //detect page scroll
        if($(window).scrollTop() + $(window).height() > $(document).height()-600) {
        	if(track_load <= total_groups && loading==false){ //there's more data to load
        		loading = true; 
        		$('.search__loader').loader("start");
        		$.ajax({
        			url:"",
        			dataType: "json",
        			success: function (resp){
        				var template = $('#search-item-template').html(),
        					html="";
        				resp = JSON.parse(resp);
						$(resp).each(function (){
							html += template
										.replace('{search_url}', this.search_url)
										.replace('{search_title}', this.search_title)
										.replace('{num}', this.num)
										
										.replace('{search_descr}', this.search_descr);
						});
						$(html).appendTo('.search__resultPage');
						$('.search__loader').loader("stop");
						track_load++; //loaded group increment
                    	loading = false; 
						console.log(html);
     				},
        			error: function (){
        				console.log("Error ajax request");
        			}
        		});
        	}
        }
    });
    //ac('{"search_url":"url", "search_title":"title", "search_descr":"descr", "num":21}');
});