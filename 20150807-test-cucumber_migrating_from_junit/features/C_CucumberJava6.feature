Feature: Refund item - C

  Scenario: Jeff returns a faulty microwave - C
    Given Jeff has bought a microwave for $100 - C
    And he has a receipt - C
    When he returns the microwave - C
    Then Jeff should be refunded $100 - C
