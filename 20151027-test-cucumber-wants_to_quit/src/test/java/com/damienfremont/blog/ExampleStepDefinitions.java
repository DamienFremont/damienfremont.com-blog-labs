package com.damienfremont.blog;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ExampleStepDefinitions {

	@Given("^nothing$")
	public void nothing() throws Throwable {
		// nothing
	}

	@When("^do something$")
	public void do_something() throws Throwable {
		// something
	}

	@Then("^quit$")
	public void quit() throws Throwable {
		CucumberQuit.wantsToQuit();
	}

}
