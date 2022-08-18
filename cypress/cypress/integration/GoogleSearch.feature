Feature: Google Search 
    Scenario: Search for remarkablemark on Google.
        Given I go to "https://www.google.com"
        When I search for "remarkablemark"
        Then I see "remarkablemark"
        