Feature: Person Repository

  Scenario: Person Creation
    Given an empty repository
    When I create a new Person named 'George' with the system
    Then I should have Person named 'Jean' in the repository

  Scenario Outline: Person Creation Examples
    Given a repository
    When I create a new Person named '<NAME>' with the system
    Then I should have Person named '<NAME>' in the repository
    

    Examples: 
      | NAME   |
      | Pierre |
      | Paul   |
      | Jack   |
    