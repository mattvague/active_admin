//= require "active_admin/vendor"

/* Active Admin JS */

$(function(){
  $(".datepicker").datepicker({dateFormat: 'yy-mm-dd'});

  $(".clear_filters_btn").click(function(){
    window.location.search = "";
    return false;
  });
  
  $("#tabs a").pjax("#main_content");
  $(".pagination .next a").pjax("#main_content");
  
});
