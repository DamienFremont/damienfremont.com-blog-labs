package com.dfremont.blog;

import junit.framework.TestCase;

public class JUnit3Test extends TestCase {

	public void testDivide() {
		// Arrange
		ClassToTest classToTest = new ClassToTest();
		int param1 = 10;
		int param2 = 2;
		// Act
		int result = classToTest.divide(param1, param2);
		// Assert
		assertEquals("ok", 5, result);
	}

	public void testDivideValueWith0() {
		// Arrange
		ClassToTest classToTest = new ClassToTest();
		int param1 = 10;
		int param2 = 0;
		// Act
		try {
			classToTest.divide(param1, param2);
			fail("expected error!");
		} catch (ArithmeticException e) {
			// Assert
			assertEquals("Division by zero prohibited!", e.getMessage());
		}
	}
}
