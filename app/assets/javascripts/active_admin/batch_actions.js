$(function(){
  $("#batch_actions_button").aaPopover({ autoOpen: false
															 					 //onClickActionItem: {
																				 // 	// Present optional confirmation prompt to user
																				 //   //var $target = $(e.target);
																				 //   //if ( $target.attr("data-request-confirm") ) {
																				 //   //	if ( !confirm( $target.attr("data-request-confirm") ) ) {
																				 //   //		$("#batch_actions_popover").fadeOut(100);
																				 //   //		return false;
																				 //   //	}
																				 //   //}
																				 // 	
																				 //   // Submit the form, sending the request
																				 //   $('#batch_action').val( $target.attr("data-action") );
																				 //   $('#collection_selection').submit();
																				 //}
																				});

  // Batch actions stuff
  
  $('#batch_actions_button').click(function() {
    if (!$(this).hasClass("disabled")) {
      if ($("#batch_actions_popover").is(":hidden")) {
        $(this).aaPopover("open");
      } else {
        $("#batch_actions_button").aaPopover("close");
      }
    };
    return false;
  });

  $('#collection_selection_toggle_all').click(function() {
	
		var $this = $(this);
		var isTable = $this.closest(".index").hasClass("index_as_table");
	
    if ($(this).attr('checked') == true) {
      $('#batch_actions_button').removeClass("disabled");
      $('#batch_actions_button').addClass("selected");
			$('.collection_selection').attr('checked', 'checked');
      if ( isTable ) {
				$(this).parents(".index_table").find('tr').addClass("selected");
			}
    } else {
      $('#batch_actions_button').addClass("disabled");
      $('#batch_actions_button').removeClass("selected");
			$('.collection_selection').attr('checked', '');
      if ( isTable ) {
				$(this).parents(".index_table").find('tr').removeClass("selected");
			}
    }
  });
  
  $('.collection_selection').click(function() {
	
		var $this = $(this);
		var isTable = $this.closest(".index").hasClass("index_as_table");
		
    if ( $this.attr('checked') == true ) {
	
      $('#batch_actions_button').removeClass("disabled");
      $('#batch_actions_button').addClass("selected");
      if ( isTable ) {
				$this.parents('tr').addClass("selected");
			}

    } else {
      
			if ( $this.closest(".index").find("input:checked").length == 0) {
        $('#batch_actions_button').addClass("disabled");
        $('#batch_actions_button').removeClass("selected");
      }
      
			if ( isTable ) {
	      $this.parents('tr').removeClass("selected");
			}
      
			$("#collection_selection_toggle_all").attr('checked', '');
      
    }

  });

  // Attach a click hanlder to each of the batch action items
  $('#batch_actions_popover a.batch_action').click(function(e) {
	
		// Present optional confirmation prompt to user
		var $target = $(e.target);
		if ( $target.attr("data-request-confirm") ) {
			if ( !confirm( $target.attr("data-request-confirm") ) ) {
				$("#batch_actions_popover").fadeOut(100);
				return false;
			}
		}
	
		// Submit the form, sending the request
		$('#batch_action').val( $target.attr("data-action") );
		$('#collection_selection').submit();
	
  });

});
