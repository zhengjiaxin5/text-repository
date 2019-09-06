(function($){  
    $.fn.tableUI = function(options){  
        var defaults = {  
            evenRowClass:"evenRow",  
            oddRowClass:"oddRow",  
            activeRowClass:"activeRow"              
        }  
        var options = jQuery.extend(defaults, options);  
        this.each(function(){  
            var thisTable=$(this);  
            //�����ż����ɫ
            thisTable.find("tr:even").addClass(options.evenRowClass);  
            thisTable.find("tr:odd").addClass(options.oddRowClass);
			//����ѡ���е���ɫ
            thisTable.find("tr").bind("mouseover mouseout",function(){  
                $(this).toggleClass(options.activeRowClass);  
            }); 
        });  
    };
})(jQuery);  