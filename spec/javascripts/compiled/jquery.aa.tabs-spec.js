(function() {

  describe("AA.Tabs", function() {
    beforeEach(function() {
      loadFixtures('tabbed_panel.html');
      this.panel = $("#my_tabbed_panel");
      new AA.Tabs({}, this.panel);
      return document.cookie = "my_tabbed_panel=2; expires=Fri, 3 Aug 2001 20:47:11 UTC; path=/";
    });
    describe("on init", function() {
      describe("when cookie is blank", function() {
        it("needs this to erase cookies some reason???");
        it("should show the first tab as selected", function() {
          document.cookie = "my_tabbed_panel=2; expires=Fri, 3 Aug 2001 20:47:11 UTC; path=/";
          return expect(this.panel.find("*[data-tab-id=1]")).toHaveClass("current");
        });
        it("should show the first tab's content area", function() {
          return expect(this.panel.find("*[data-tab-content-id=1]")).toBeVisible();
        });
        return it("should hide the other content areas", function() {
          expect(this.panel.find("*[data-tab-content-id=2]")).toBeHidden();
          return expect(this.panel.find("*[data-tab-content-id=3]")).toBeHidden();
        });
      });
      return describe("when cookie is set to the second tab", function() {
        beforeEach(function() {
          var expiryDate, oneYearLater, theDate;
          theDate = new Date();
          oneYearLater = new Date(theDate.getTime() + 31536000000);
          expiryDate = oneYearLater.toGMTString();
          return document.cookie = "my_tabbed_panel=2; expires= " + expiryDate + "; path=/";
        });
        it("needs this to erase cookies some reason???");
        return it("should select the second tab, show its content and hide the others", function() {
          expect(this.panel.find("*[data-tab-id=2]")).toHaveClass("current");
          expect(this.panel.find("*[data-tab-id=1]")).not.toHaveClass("current");
          expect(this.panel.find("*[data-tab-id=3]")).not.toHaveClass("current");
          expect(this.panel.find("*[data-tab-content-id=2]")).toBeVisible();
          expect(this.panel.find("*[data-tab-content-id=1]")).toBeHidden();
          return expect(this.panel.find("*[data-tab-content-id=3]")).toBeHidden();
        });
      });
    });
    return describe("when a tab is clicked", function() {
      beforeEach(function() {
        return this.panel.find("*[data-tab-id=2] a").trigger("click");
      });
      describe("old tab", function() {
        it("should make the tab inactive", function() {
          return expect(this.panel.find("*[data-tab-id=1]")).not.toHaveClass("current");
        });
        return it("should hide the tabs contents", function() {
          return expect(this.panel.find("*[data-tab-content-id=1]")).toBeHidden();
        });
      });
      describe("clicked tab", function() {
        it("should make the tab active", function() {
          return expect(this.panel.find("*[data-tab-id=2]")).toHaveClass("current");
        });
        return it("should show the tabs content", function() {
          return expect(this.panel.find("*[data-tab-content-id=2]")).toBeVisible();
        });
      });
      return it("should set a cookie to keep the 2nd tab open", function() {
        return expect(AA.getCookie("my_tabbed_panel")).toEqual("2");
      });
    });
  });

}).call(this);
