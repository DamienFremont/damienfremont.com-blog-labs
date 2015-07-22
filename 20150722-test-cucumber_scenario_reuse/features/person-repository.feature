Feature: Person Repository

  Scenario: Person Creation
    Given an empty repository
    When I create a new Person with the system
    Then I should have a new person in the repository
