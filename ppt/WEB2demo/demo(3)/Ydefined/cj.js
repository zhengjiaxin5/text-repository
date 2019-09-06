(function($){  
    $.fn.tableUI = function(options){  
        var defaults = {  
            evenRowClass:"evenRow",  
            oddRowClass:"oddRow",  
            activeRowClass:"activeRow"              
        }  
        var options = $.extend(defaults, options);  
        this.each(function(){  
            var thisTable=$(this);  
            //�����ż����ɫ  
            thisTable.find("tr:even").addClass(options.evenRowClass);  
            thisTable.find("tr:odd").addClass(options.oddRowClass);  
            //��ӻ����ɫ(����ע���������úͱ�����ͬ��������������ģ���ҿ��԰ٶ�һ��)  
            thisTable.find("tr").bind("mouseover mouseout",function(){  
                $(this).toggleClass(options.activeRowClass);  
            });  
            /* 
            $(thisTable).find("tr").bind("mouseenter mouseleave",function(e){ 
                $(this).toggleClass(options.activeRowClass); 
            }); 
            */  
        });  
    };  
})(jQuery);  