module ActiveAdmin
  module Views

    class TabbedPanel < ActiveAdmin::Component
      builder_method :tabbed_panel

      def default_class_name
        "tabbed_panel panel"
      end

      def build(attributes = {})

        @tab_count = 0

        super(attributes)

        build_header

        @contents = ""

      end

      def tab(title, *args)
        
        @tab_count += 1

        attributes = args.extract_options!

        attributes[:class] ||= ""
        attributes[:class] += " tab"
        attributes[:"data-tab-id"] = @tab_count.to_s

        within @header do
          li attributes do
            link_to title, "#"
          end
        end

        @contents += div :class => "tab_contents panel_contents", :"data-tab-content-id" => @tab_count.to_s do
          yield if block_given?
        end

      end

      private

      def build_header
        @header = ul :class => "panel_header"
      end

    end

  end
end

