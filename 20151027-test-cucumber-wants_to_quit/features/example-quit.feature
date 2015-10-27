Feature: Example Quit

  Scenario: success
    Given nothing
    When do something
    Then nothing

  Scenario: quit...
    Given nothing
    When do something
    Then quit

  Scenario: error because wants to quit
    Given nothing
    When nothing
    Then nothing
    