#
# Active Admin JS
#

$ ->
  
  # Date picker

  $(".datepicker").datepicker dateFormat: "yy-mm-dd"
  
  
  # Clear filters button

  $(".clear_filters_btn").click ->
    window.location.search = ""
    false

  # Tabbed panels

  $(".tabbed_panel").tabs();
