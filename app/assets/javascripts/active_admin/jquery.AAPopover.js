;( function($, window, document, undefined) {
  
  
  var pluginName = 'AAPopover';
  
  var defaults = {
    fadeInDuration: 20,
    fadeOutDuration: 100,
    autoOpen: true
  }
  
  function AAPopover( element, options ) {
    this.element = element;
    this.$element = $(element);
    this.options = $.extend( {}, defaults, options);

    this.init();
  }
  
  AAPopover.prototype.init = function() {
    var that = this;

    this.$popover = null;

    if ($(this.$element.attr("href")).length > 0) {
      this.$popover = $(this.$element.attr("href"));
    }
    
    // Create nipple
    this.$popover.prepend("<div class=\"popover_nipple\"></div>");
        
    this.isOpen = false;
        
    this.$popover.hide();
    
    this.$popover.addClass("popover");
    
    if (this.options.autoOpen == true) {
      this.$element.bind('click', function(){
        that.open();
        return false;
      });
    };

    $('#wrapper').bind('click', function(e) {
      if (that.isOpen == true) {
        that.close();
      };
    });
  }
  
  AAPopover.prototype.open = function() {
    this.isOpen = true;
    this.$popover.fadeIn(this.options.fadeInDuration);
    
    
    // Center the popover under the opening element
    
    var centerOfButtonFromLeft = this.$element.offset().left + this.$element.outerWidth() / 2;
    var centerOfPopoverFromLeft = this.$popover.outerWidth() / 2;
    var popoverLeftPos = centerOfButtonFromLeft - centerOfPopoverFromLeft;
    this.$popover.css('left', popoverLeftPos);
    
    // Center the nipple in the middle of the popover
    
    var bottomOfButtonFromTop = this.$element.offset().top + this.$element.outerHeight() + 10;
    this.$popover.css('top',  bottomOfButtonFromTop);
    var $nipple = this.$popover.find(".popover_nipple");
    var centerOfnippleFromLeft = $nipple.outerWidth() / 2;
    
    //console.log($nipple.outerWidth());
    //console.log($nipple.width());
    
    var nippleLeftPos = centerOfPopoverFromLeft - centerOfnippleFromLeft;
    
    $nipple.css('left', nippleLeftPos)
    
  }
  
  AAPopover.prototype.close = function() {
    this.isOpen = false;
    this.$popover.fadeOut(this.options.fadeOutDuration);
  }
  
  AAPopover.prototype.destroy = function() {
    this.$element.removeData(pluginName);
    this.$element.unbind();
    this.$element = null;
  }
  
  // Register as a jQuery plugin
  
	$.fn[pluginName] = function( options ) {
    return this.each(function () {
      var $this = $(this);
      var popOver = $this.data(pluginName);
      
      if ( typeof options === 'object' || ! options ) {
        if ( !popOver ) {
          popOver = new AAPopover($this, options);
          $this.data(pluginName, popOver);
        }
      } else if ( typeof options === 'string' ) {
        popOver[options]();
      } else {
        $.error( 'Method ' +  options + ' does not exist on ' + pluginName );
      }
    });
  };
  
})( jQuery, window, document );