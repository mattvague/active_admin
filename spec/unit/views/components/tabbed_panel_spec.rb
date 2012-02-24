require 'spec_helper'

describe ActiveAdmin::Views::TabbedPanel do

  setup_arbre_context!

  let(:the_tabbed_panel) do
    tabbed_panel do
      tab "Tab 1" do
        para "Tab 1 content"
      end

      tab "Tab 2" do
        para "Tab 2 content"
      end
    end
  end

  let(:the_panel) do
    panel "My Title" do
      span("Hello World")
    end
  end

  describe "tab" do
    let(:header) do
      the_tabbed_panel.find_by_class("panel_header").first
    end 

    it "should build a tab element for each tab" do
      header.find_by_class("tab").first.content.should include("Tab 1")
    end

    it "should add a data-tab-id attribute to each tab" do
      header.find_by_class("tab").first.attr(:"data-tab-id").should == "1"
    end
  end

  describe "content" do
    it "should build a tab element for each tab" do
      the_tabbed_panel.find_by_class("tab_contents").first.content.should include("Tab 1 content")
    end

    it "should add a data-tab-id attribute to each tab" do
      the_tabbed_panel.find_by_class("tab_contents").first.attr(:"data-tab-content-id").should == "1"
    end
  end

end

