//= require "active_admin/vendor"
//= require "active_admin/jquery.AAPopover.js"
//= require "active_admin/batch_actions.js"

/* Active Admin JS */

$(function(){
  $(".datepicker").datepicker({dateFormat: 'yy-mm-dd'});

  $(".clear_filters_btn").click(function(){
    window.location.search = "";
    return false;
  });
 
});
