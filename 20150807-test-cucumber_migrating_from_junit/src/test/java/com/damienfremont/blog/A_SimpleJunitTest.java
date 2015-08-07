package com.damienfremont.blog;

import static org.assertj.core.api.StrictAssertions.assertThat;

import org.junit.Test;

// It's the shortest source code ever. But it lacks stability, behaviour and documentation.
public class A_SimpleJunitTest {

	@Test
	public void test() {
		ClassToTest classToTest = new ClassToTest();
		String receipt = classToTest.buy("microwave", 100);
		assertThat(receipt).isNotNull();
		assertThat(classToTest.returns("microwave", receipt)).contains("100");
	}
}
