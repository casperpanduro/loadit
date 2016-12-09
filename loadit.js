
// Developed by Casper Panduro

(function ( $ ) {
    $.fn.loadit = function( options ) {
        
        var settings = $.extend({
            // These are the defaults.
            speed: 500,
            type: 'slideInLeft', // types: slideInLeft, slideInRight, fadeIn
            linkselector: '.loadit'
            
        }, options );

        // prepends
        this.wrapInner('<div class="loadit-content-wrapper"><div class="loadit-wrap visible"></div></div>');
        $(".loadit-wrap").after('<div class="loadit-wrap not-visible"></div>');

        // styles
        $(".loadit-wrap").css({
            "position":"absolute",
            "top":"0px",
            "left":"0px",
            "width": "100%"
        });



        var contentHeight = $(".loadit-wrap.visible").innerHeight();

        

        $(".loadit-content-wrapper").css({
            "position":"relative",
            "width":"100%",
            "height":contentHeight  
        });

        console.log(settings.type);
        
        if(settings.type == 'slideInLeft') {
            $(".loadit-wrap.not-visible").css({
                "left":"100%"
            });
            
        } else if (settings.type == 'slideInRight') {
            $(".loadit-wrap.not-visible").css({
                "left":"-100%"
            });
        }

        var windowPosition = $(window).scrollTop();

        $(window).scroll(function(){
            windowPosition = $(window).scrollTop();
            console.log(windowPosition);
        });


        $(document).on("click", settings.linkselector, function(e){
            console.log("click");
            $(".loadit-wrap.not-visible").load($(this).attr("href") + " #ajaxcontent");
            // update title
            $.ajax({
                url: $(this).attr("href"),
                success: function (response) {
                    var newTitle = $(response).filter('title').text();
                    document.title = newTitle;
                }
            });
            // update url
            window.history.pushState({"pageTitle":"test"},"", $(this).attr("href"))

            noscroll(true);
            
            // slide types
            if(settings.type == 'slideInLeft') {
                slideInLeft()
                
            } else if (settings.type == 'slideInRight') {
                slideInRight()
            }
            
            e.preventDefault();
        });

        function slideInLeft(){
            $(this).removeClass(".not-visible");
            $(".visible").animate({
                "left":"-100%"
            },1000,'easeInOutQuint', function(){
                $(this).removeClass("visible").addClass("not-visible").css({
                    "left":"100%"
                }).html("");
                completion();
            });
            $(".not-visible").css({ 
                "top":windowPosition
            }).animate({
                "left":"0%"
            },1000,'easeInOutQuint', function(){
                $(this).removeClass("not-visible").addClass("visible").css({
                    "top":0
                });
                $(window).scrollTop(0);
            });
        }

        function slideInRight(){
            $(this).removeClass(".not-visible");
            $(".visible").animate({
                "left":"100%"
            },1000, 'easeInOutQuint');
            $(".not-visible").css({ 
                "top":windowPosition
            }).animate({
                "left":"0%",
            },1000,'easeInOutQuint');
        }

        function noscroll(event) {
            if(event == true) {
                $("body").css({
                    "overflow-y":"hidden",
                    "height":"100vh"
                });
            }
            else {
                $("body").css({
                    "overflow-y":"scroll",
                    "height":"auto"
                });   
            }
            
        }

        function completion() {
            contentHeight = $(".loadit-wrap.visible").innerHeight();
            $(".loadit-content-wrapper").css({
                "height":contentHeight
            })
            noscroll(false);
        }
        

        
        
        return this;
    };
 
}( jQuery ));



