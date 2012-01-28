Feature: Dashboard

  Background:
    Given I am logged in


  Scenario: With no configuration
    Given a configuration of:
      """
        
      """
    When I go to the dashboard
    Then I should see the default welcome message

  Scenario: With dashboard disabled and no resources registered
    Given a configuration of:
      """
      ActiveAdmin.setup do |config|
        config.dashboard = false
      end
      """
    When I go to the dashboard
    Then I should see the no resources or pages registered message

  Scenario: With dashboard disabled and posts registered
    Given a configuration of:
      """
      ActiveAdmin.register Post
      ActiveAdmin.setup do |config|
        config.dashboard = false
      end
      """
    When I go to the dashboard
    Then I should be on the index page for posts

  Scenario: With dashboard pointing to a resource
    Given a configuration of:
      """
      ActiveAdmin.register Post
      ActiveAdmin.register Category    
      ActiveAdmin.setup do |config|
        config.dashboard = :categories
      end
      """
    When I go to the dashboard
    Then I should be on the index page for categories

  Scenario: Displaying a dashboard widget
    Given a configuration of:
      """
      ActiveAdmin::Dashboards.build do
        section 'Hello World' do
          para "Hello world from the content"
        end
      end
      """
    When I go to the dashboard
    Then I should not see the default welcome message
    And I should see a dashboard widget "Hello World"
    And I should see "Hello world from the content"

  Scenario: Displaying a dashboard widget using the ':if' option
    Given a configuration of:
      """
      ActiveAdmin::Dashboards.build do
        section 'Hello World', :if => proc{ current_admin_user } do
          "Hello world from the content"
        end

        section 'Hidden by If', :if => proc{ false } do
          "Hello world from the content"
        end
      end
      """
    When I go to the dashboard
    Then I should not see the default welcome message
    And I should see a dashboard widget "Hello World"
    And I should not see a dashboard widget "Hidden by If"
