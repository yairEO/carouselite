/**
* Carouselite - basic jquery plugin by Yair Even Or
* DEC 2013
* http://dropthebit.com
* Version 1.0.0
*/
(function(){
    Carousel = function(settings, obj){
        var that = this;
        this.settings = settings;
        this.obj = $(obj);
        this.wrapper = $(obj).find('.wrap');
        this.pageIndex = 0;
        this.NumOfpages = 0;  // zero-based index
        this.calcs();

        this.obj.on('click.carousel', '.arrow.next', function(){ that.movePage( that.pageIndex++ );return false; });
        this.obj.on('click.carousel', '.arrow.prev', function(){ that.movePage( that.pageIndex-- );return false; });

        if( this.settings.autoplay ){
            setInterval(function(){
                that.movePage( that.pageIndex++ );
            }, this.settings.autoplay)
        }
      
        if( this.settings.pagination )
          this.pagination();
    }

    Carousel.prototype = {
        pagination : function(){
            var paginationList = $('<ul>'), 
                i = this.NumOfpages + 1,
                that = this;
          
            while( i-- > 0 )
                paginationList.append('<li>');
            
            this.paginationItems = paginationList.children();
            this.paginationItems.eq(0).addClass('active');
          
            this.obj.on('click.carousel', '> ul > li', function(){
              that.pageIndex = $(this).index();
              that.movePage();
            });  
          
            this.obj.append(paginationList);
        },

        calcs : function(){
            var wrapper = this.wrapper[0];
            if( this.settings.orientation == 'V' ){
                this.maxScroll = wrapper.scrollHeight;
                this.NumOfpages = this.maxScroll / wrapper.clientHeight;
            }
            else{
                this.maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
                this.NumOfpages = this.maxScroll / wrapper.clientWidth;
            }
        },

        movePage: function(){
            if( this.pageIndex < 0 ){
                this.pageIndex = 0;

                if( this.settings.loop )
                    this.pageIndex = this.NumOfpages;
                else return false;
            }
            else if( this.pageIndex > this.NumOfpages ){
                this.pageIndex = this.NumOfpages;

                if( this.settings.loop )
                    this.pageIndex = 0;
                else return false;
            }
			
			// set special classes when reached first or last "page"
			this.obj.removeClass('firstPage lastPage');
			if( this.pageIndex == 0 )
				this.obj.addClass('firstPage');
			else if( this.pageIndex == this.NumOfpages )
				this.obj.addClass('lastPage');

            if( this.settings.orientation == 'H' )
                this.wrapper.css('text-indent', -this.pageIndex*100 + '%');
            else
                return false // here goes code for vertical movement here
                
            if( this.settings.pagination )
              this.paginationItems.removeClass('active').eq(this.pageIndex).addClass('active');
        }
    }

    var defaults = {
        loop            : true,
        orientation     : 'H',            // H or V
        autoplay        : 0,             // in milliseconds
        pagination      : true,          // show bullets and track current page
    };

    $.fn.carouselite = function(settings){
        return this.each(function(){
            var $obj = $(this),
                $settings = $.extend( {}, defaults, settings || {} );
                carousel = $obj.data("carouselite") || new Carousel($settings, $obj),

            $obj.data("carouselite", carousel );
        });
    };
})();