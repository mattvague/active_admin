module ActiveAdmin
  module Views

    # Renderer for the header of the application. Includes the page
    # title, global navigation and utility navigation.
    class HeaderRenderer < ::ActiveAdmin::Renderer

      def to_html
        title + global_navigation + utility_navigation + search + results
      end

      protected

      def title
        content_tag 'h1', active_admin_application.site_title, :id => 'site_title'
      end

      # Renders the global navigation returned by
      # ActiveAdmin::ResourceController#current_menu
      #
      # It uses the ActiveAdmin.tabs_renderer option
      def global_navigation
        render view_factory.global_navigation, current_menu
      end

      def utility_navigation
        content_tag 'p', :id => "utility_nav" do
          if current_active_admin_user?
            html = content_tag(:span, display_name(current_active_admin_user), :class => "current_user")

            if active_admin_application.logout_link_path
              html << link_to(I18n.t('active_admin.logout'), logout_path, :method => logout_method)
            end
          end
        end
      end
      
      def search
        content_tag :form, :id => "global_search" do
          content_tag :input, "", :type => "search"
        end
      end
      
      # TEMP FOR DEV
      
      def results
        content_tag :div, :id => "global_search_results_dropdown" do
          results = content_tag :div, :class => "global_search_results_group" do
            inner = content_tag :h3, "Transactions"
            inner += content_tag :ul do
              items = content_tag :li, :class => "global_search_result" do
                content_tag :a, :href => "#", :class => "global_search_result" do
                  inner = content_tag :strong, "Transaction #1999"
                  inner += content_tag :p, "Amount: $6,412.60"
                  inner
                end
              end
              items += content_tag :li, :class => "global_search_result" do
                content_tag :a, :href => "#", :class => "global_search_result" do
                  inner = content_tag :strong, "Transaction #1999"
                  inner += content_tag :p, "Amount: $6,412.60"
                  inner
                end
              end
              
              items
            end
            
            inner
          end
          
          results += content_tag :div, :class => "global_search_results_group" do
            inner = content_tag :h3, "Users"
            inner += content_tag :ul do
              content_tag :li, :class => "global_search_result" do
                content_tag :a, :href => "#" do
                  inner = content_tag :strong, "Quatchi Sasquatch"
                  inner += content_tag :p, "Joined on: November 15th"
                  inner
                end
              end
            end
            
            inner
          end
          
          results += content_tag :a, "Show all results (1000+)", :class => "show_all_link", :href => "#"
          
          results
        end
      end

      # Returns the logout path from the application settings
      def logout_path
        if active_admin_application.logout_link_path.is_a?(Symbol)
          send(active_admin_application.logout_link_path)
        else
          active_admin_application.logout_link_path
        end
      end

      def logout_method
        active_admin_application.logout_link_method || :get
      end
    end

  end
end
