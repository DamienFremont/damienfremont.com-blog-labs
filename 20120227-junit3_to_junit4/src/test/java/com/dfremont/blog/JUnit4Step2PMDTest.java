package com.dfremont.blog;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

import org.junit.Test;

public class JUnit4Step2PMDTest {

	private static ClassToTest classToTest = new ClassToTest();

	@Test
	public void testDivideValue() {
		// Act
		final int result = classToTest.divide(10, 2);
		// Assert
		assertEquals("Result wrong value!", 5, result);
	}

	@Test
	public void testDivideValueWith0() {
		try {
			// Act
			classToTest.divide(10, 0);
			fail("Expected error!");
		} catch (ArithmeticException e) {
			// Assert
			assertEquals("Wrong Exc msg!", "Division by zero prohibited!",
					e.getMessage());
		}
	}

}
