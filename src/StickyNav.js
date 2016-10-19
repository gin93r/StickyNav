(function($)
{
    $.fn.StickyNav = function(options)
    {
        if(console) console.log("yar");
        var settings = $.extend({}, $.fn.StickyNav.defaults, options);
        var _b = $("body");
        var _el = $(this);
        // on window scroll
        $(window).on("scroll", function()
        {
            if(_b.scrollTop() >= settings.stickAt && !_el.hasClass(settings.stickClass))
            {
                _el.addClass(settings.stickClass);
                settings.onStick.call();
            }
            else if(_b.scrollTop() < settings.stickAt && _el.hasClass(settings.stickClass))
            {
                _el.removeClass(settings.stickClass);
                settings.onUnStick.call();
            }
        });
        return this;
    };

    $.fn.StickyNav.defaults = {
        stickAt    : 1,
        stickClass : "sticky",
        onStick    : function()
        {
            
        },
        onUnStick  : function()
        {
            
        }
    };
})(jQuery);