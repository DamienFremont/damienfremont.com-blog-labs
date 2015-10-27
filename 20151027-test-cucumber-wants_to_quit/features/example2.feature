Feature: Example Quit after tag

  @important
  Scenario: important 1, and fails
    Given something
    When fail
    Then something

  @important
  Scenario: important 2, but run it anyway
    Given something
    When something
    Then something

  Scenario: optionnal, error because wants to quit
    Given something
    When something
    Then something
    