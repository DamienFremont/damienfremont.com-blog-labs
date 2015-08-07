package com.damienfremont.blog;

import static org.assertj.core.api.StrictAssertions.assertThat;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.java8.En;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(strict = true, features = "features")
public class D_CucumberJava8Test implements En {
	
	ClassToTest classToTest;
	String receipt;
	String refund;

	public D_CucumberJava8Test() {
		
		Before(()->{
			classToTest = new ClassToTest();
		});
		
		Given("^Jeff has bought a microwave for \\$(\\d+) - D$", (Integer amount) -> {
			receipt = classToTest.buy("microwave", amount);
		});

		Given("^he has a receipt - D$", () -> {
			assertThat(receipt)
				.isNotNull();
		});

		When("^he returns the microwave - D$", () -> {
			refund = classToTest.returns("microwave", receipt);
		});

		Then("^Jeff should be refunded \\$(\\d+) - D$", (Integer amount) -> {
			assertThat(refund)
				.isNotNull()
				.contains(amount.toString());
		});
	}	
}
