package com.dfremont.blog;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

import org.junit.Test;

public class JUnit4Step1Test {

	@Test
	public void testDivideValue() {
		// Arrange
		final ClassToTest classToTest = new ClassToTest();
		// Act
		final int result = classToTest.divide(10, 2);
		// Assert
		assertEquals("ok", 5, result);
	}

	@Test
	public void testDivideValueWith0() {
		// Arrange
		final ClassToTest classToTest = new ClassToTest();
		int param1 = 10;
		int param2 = 0;
		// Act
		try {
			classToTest.divide(param1, param2);
			fail("Expected error!");
		} catch (ArithmeticException e) {
			// Assert
			assertEquals("Division by zero prohibited!", e.getMessage());
		}
	}

}
