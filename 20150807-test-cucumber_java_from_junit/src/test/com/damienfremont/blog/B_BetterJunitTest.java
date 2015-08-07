package com.damienfremont.blog;

import static org.assertj.core.api.StrictAssertions.assertThat;

import org.junit.Test;

import cucumber.api.java.Before;

// It's stable and behaviour-oriented code. But functions reuse is not possible, and Javadoc is not an open collaboration format for other people like Product-Owner.
/**
 * Feature: Refund item
 */
public class B_BetterJunitTest {

	ClassToTest classToTest;

	@Before
	public void beforeScenario() {
		classToTest = new ClassToTest();
	}

	/**
	 * Scenario: Jeff returns a faulty microwave<br/>
	 * - Given Jeff has bought a microwave for $100 <br/>
	 * -- And he has a receipt <br/>
	 * - When he returns the microwave <br/>
	 * - Then Jeff should be refunded $100 <br/>
	 */
	@Test
	public void test_jeff_returns_a_faulty_microwave() {
		// Given
		int amount = 100;
		String receipt = classToTest.buy("microwave", amount);
		// When
		assertThat(receipt)
			.isNotNull();
		// Then
		String refund = classToTest.returns("microwave", receipt);
		assertThat(refund)
			.isNotNull()
			.contains("100");
	}

}
