//var AAActionListPopover = AAPopover;

function myActionListPopover(options, element) {
  this.element = element;
  this.$element = $(element);

	var defaults = {
    fadeInDuration: 20,
    fadeOutDuration: 100,
    autoOpen: true,
		pageWrapperElement: "#wrapper",
		onClickActionItemSpyCallback: null
  }

  this.options = $.extend( {}, defaults, options);

  this._init();
}

var AAActionListPopover = $.extend({}, AAPopover, myActionListPopover);


;( function($, window, document, undefined) {
  
  
  // Register as a jQuery plugin
	$.widget.bridge('aaActionListPopover', AAActionListPopover);

})( jQuery, window, document );