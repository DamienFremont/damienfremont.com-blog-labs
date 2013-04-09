package com.dfremont.blog;

import org.junit.Test;

public class JUnit4WrongTest {

	@Test
	@SuppressWarnings("unused")
	public void testDivideValue() {
		// Arrange
		ClassToTest classToTest = new ClassToTest();
		int param1 = 10;
		int param2 = 2;
		// Act
		int result = classToTest.divide(param1, param2);
		// Assert
		// assertEquals(5, result);
	}

	@Test
	public void testDivideValueWith0() {
		// Arrange
		ClassToTest classToTest = new ClassToTest();
		int param1 = 10;
		int param2 = 0;
		// Act
		try {
			classToTest.divide(param1, param2);
			// fail("Expected error!");
		} catch (ArithmeticException e) {
			// Assert
			// assertEquals("Wrong Exc msg!", "Division by zero prohibited!",
			// e.getMessage());
		}
	}
}
