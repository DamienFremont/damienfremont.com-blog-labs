package com.damienfremont.blog;

import static org.assertj.core.api.StrictAssertions.assertThat;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java8.En;
import cucumber.api.junit.Cucumber;

// It's modular code and functions reuse is possible. But it's not very productive because of the duplicate annotation/function syntax.
//@RunWith(Cucumber.class)
//@CucumberOptions(strict = true, features = "features")
public class C_CucumberJava6Test implements En {

	ClassToTest classToTest;
	String receipt;
	String refund;

	@Before
	public void beforeScenario() {
		classToTest = new ClassToTest();
	}

	@Given("^Jeff has bought a microwave for \\$(\\d+) - C$")
	public void jeff_has_bought_a_microwave_for(Integer amount) {
		receipt = classToTest.buy("microwave", amount);
	}

	@Given("^he has a receipt - C$")
	public void he_has_a_receipt() {
		assertThat(receipt).isNotNull();
	}

	@When("^he returns the microwave - C$")
	public void he_returns_the_microwave() {
		refund = classToTest.returns("microwave", receipt);
	}

	@Then("^Jeff should be refunded \\$(\\d+) - C$")
	public void jeff_should_be_refunded(Integer amount) {
		assertThat(refund).isNotNull().contains(amount.toString());
	}
}
