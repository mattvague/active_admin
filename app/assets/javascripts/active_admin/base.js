//= require "active_admin/vendor"

/* Active Admin JS */

$(function(){
  $(".datepicker").datepicker({dateFormat: 'yy-mm-dd'});

  $(".clear_filters_btn").click(function(){
    window.location.search = "";
    return false;
  });
  
  $(".pagination a").pjax("#main_content");
  $(".scopes a").pjax("#main_content");
  
  $("#main_content")
    .bind('pjax:start', function() { /* do something */ })
    .bind('pjax:end',   function() { /* do something */ });
  
});
