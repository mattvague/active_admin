window.AA.Tabs = class AA.Tabs

  constructor: (@options, @container) ->
    @container = $(@container)

    @_init()

  _init: ->
    @tabs = @container.find(".tab")

    @tabs.filter("*[data-tab-id=" + @_selectedTab() + "]").addClass("current")
    #@tabs.addClass("current")

    @tabContentAreas = @container.find(".tab_contents")

    # Hide all content areas
    @tabContentAreas.hide()

    # Show the first content area 
    @tabContentAreas.filter("*[data-tab-content-id=" + @_selectedTab() + "]").show()

    @container.on "click", ".tab a", (e) => 
      tab = $(e.target)
      tabID = tab.parent("li").data("tab-id")
      theDate = new Date();
      oneYearLater = new Date( theDate.getTime() + 31536000000 );
      expiryDate = oneYearLater.toGMTString();

      document.cookie = @container.attr("id") + "=" + tabID + "; expires= " + expiryDate + "; path=/"      

      @tabs.each ->
        $(this).removeClass("current")

      tab.parent("li").addClass("current")

      @tabContentAreas.hide()
      @tabContentAreas.filter("*[data-tab-content-id=" + tabID + "]").show()
      

  _selectedTab: ->
    if AA.getCookie(@container.attr("id"))
      AA.getCookie(@container.attr("id"))
    else
      1

( ( $ ) ->
  $.widget.bridge 'tabs', AA.Tabs
)( jQuery )
