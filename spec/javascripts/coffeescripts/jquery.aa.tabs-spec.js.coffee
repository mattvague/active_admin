describe "AA.Tabs", ->
  beforeEach ->
    loadFixtures('tabbed_panel.html')

    @panel = $("#my_tabbed_panel")
    new AA.Tabs({}, @panel)

    # Clear cookies before each test
    document.cookie = "my_tabbed_panel=2; expires=Fri, 3 Aug 2001 20:47:11 UTC; path=/"

  describe "on init", ->
    describe "when cookie is blank", ->
      it "needs this to erase cookies some reason???"

      it "should show the first tab as selected", ->
        document.cookie = "my_tabbed_panel=2; expires=Fri, 3 Aug 2001 20:47:11 UTC; path=/"
        expect(@panel.find("*[data-tab-id=1]")).toHaveClass("current");

      it "should show the first tab's content area", ->
        expect(@panel.find("*[data-tab-content-id=1]")).toBeVisible();

      it "should hide the other content areas", ->
        expect(@panel.find("*[data-tab-content-id=2]")).toBeHidden();
        expect(@panel.find("*[data-tab-content-id=3]")).toBeHidden();
        
    describe "when cookie is set to the second tab", ->
      beforeEach ->
        theDate = new Date();
        oneYearLater = new Date( theDate.getTime() + 31536000000 );
        expiryDate = oneYearLater.toGMTString();

        document.cookie = "my_tabbed_panel=2; expires= " + expiryDate + "; path=/"

      it "needs this to erase cookies some reason???"

      # TODO @refactor: Had to put all in one test because of lack of beforeAll method
      it "should select the second tab, show its content and hide the others", ->
        expect(@panel.find("*[data-tab-id=2]")).toHaveClass("current");        
        expect(@panel.find("*[data-tab-id=1]")).not.toHaveClass("current");
        expect(@panel.find("*[data-tab-id=3]")).not.toHaveClass("current");
        expect(@panel.find("*[data-tab-content-id=2]")).toBeVisible();
        expect(@panel.find("*[data-tab-content-id=1]")).toBeHidden();
        expect(@panel.find("*[data-tab-content-id=3]")).toBeHidden();

  describe "when a tab is clicked", ->
    beforeEach ->
      @panel.find("*[data-tab-id=2] a").trigger("click")

    describe "old tab", ->

      it "should make the tab inactive", ->
        expect(@panel.find("*[data-tab-id=1]")).not.toHaveClass("current");

      it "should hide the tabs contents", ->
        expect(@panel.find("*[data-tab-content-id=1]")).toBeHidden();

    describe "clicked tab", ->

      it "should make the tab active", ->
        expect(@panel.find("*[data-tab-id=2]")).toHaveClass("current");

      it "should show the tabs content", ->
        expect(@panel.find("*[data-tab-content-id=2]")).toBeVisible()

    it "should set a cookie to keep the 2nd tab open", ->
      expect(AA.getCookie("my_tabbed_panel")).toEqual "2"
