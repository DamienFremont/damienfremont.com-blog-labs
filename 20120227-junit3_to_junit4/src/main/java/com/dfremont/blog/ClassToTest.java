package com.dfremont.blog;

public class ClassToTest {

	public int divide(final int argValue, final int argDivider) {
		if (argDivider == 0) {
			throw new ArithmeticException("Division by zero prohibited!");
		}
		return (argValue / argDivider);
	}
}
