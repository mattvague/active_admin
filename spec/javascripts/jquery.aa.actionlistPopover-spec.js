describe("aaActionListPopover", function() {

	var $wrapper;
	var $button;
	var $popover;
	var popover;

  beforeEach(function() {
				
    $wrapper = $(inject({
    	  					id: 'wrapper',
    						}));
	
    $button = $(inject({
    	  				el: 'a',
    	  				id: 'my_popover_button',
    	  				attrs: {href: '#my_popover'}
    					}));
    
    $popover = $(inject({
    	  					id: 'my_popover'
    						}));

		$popover.inject({
						   	el: 'a',
						   	attrs: {href: '#'},
								text: "My action item"
						  })
    
    $button.aaActionListPopover({
    	  							fadeInDuration: 0,
    	  							fadeOutDuration: 0,
    								});

    popover = $button.data("aaActionListPopover");
  });
  
	
  describe("opening button / link is pressed", function() {
    it("should open the popover", function() {
      $button.trigger("click");
      expect($("#my_popover")).toBeVisible();
    });  
  });

	//describe("callbacks", function() {
  //	describe("onClickActionItem", function() {
	//		beforeEach(function() {
	//		  $button.aaActionListPopover("destroy");
	//		
	//			onClickActionItemSpyCallback = jasmine.createSpy(); 
  //
	//			$button.aaActionListPopover({
  //        autoOpen: false
  //      });
  //
	//			$button.aaActionListPopover({
	//				onClickActionItem: function() {
	//					onClickActionItemSpyCallback();
	//				}
	//			});
  //
	//			$popover.find("a").trigger("click");
	//		});
	//
  //	  describe("when action item is clicked", function() {
  //	    it("should execute the callback", function() {
  //	      expect(onClickActionItemSpyCallback).toHaveBeenCalled();
  //	    });
  //	  });
  //	});
	//});
  
});