package com.dfremont.blog;

import static org.junit.Assert.assertEquals;

import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;

public class JUnit4Step3NewFeaturesTest {

	private static ClassToTest classToTest = new ClassToTest();

	@Rule
	public final ExpectedException exception = ExpectedException.none();

	@Test
	public void testDivideValue() {
		// Act
		final int result = classToTest.divide(10, 2);
		// Assert
		assertEquals("Result wrong value!", 5, result);
	}

	@Test
	public void testDivideValueWith0() {
		// Arrange
		exception.expect(ArithmeticException.class);
		exception.expectMessage("Division by zero prohibited!");
		// Act
		classToTest.divide(10, 0);
	}
}
