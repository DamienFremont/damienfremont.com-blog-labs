Feature: Person Repository

  Scenario: Person Creation
    Given an empty repository
    When I create a new Person named 'George' with the system
    Then I should have Person named 'George' in the repository
