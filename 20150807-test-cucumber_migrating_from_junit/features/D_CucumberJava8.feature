Feature: Refund item - D

  Scenario: Jeff returns a faulty microwave - D
    Given Jeff has bought a microwave for $100 - D
    And he has a receipt - D
    When he returns the microwave - D
    Then Jeff should be refunded $100 - D
