Feature: Example Quit after tag

  @important
  Scenario: important 1
    Given something
    When fail
    Then something

  @important
  Scenario: important 2
    Given something
    When something
    Then something

  Scenario: optionnal, error because wants to quit
    Given something
    When something
    Then something
    