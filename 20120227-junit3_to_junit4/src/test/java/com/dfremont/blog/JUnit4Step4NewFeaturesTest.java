package com.dfremont.blog;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class JUnit4Step4NewFeaturesTest {

	private static ClassToTest classToTest = new ClassToTest();

	@Test
	public void testDivideValue() {
		// Act
		final int result = classToTest.divide(10, 2);
		// Assert
		assertEquals("Result wrong value!", 5, result);
	}

	@Test(expected = ArithmeticException.class)
	public void testDivideValueWith0() {
		// Act
		classToTest.divide(10, 0);
	}
}
