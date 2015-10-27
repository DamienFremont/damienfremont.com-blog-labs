package com.damienfremont.blog.example2;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitions {

	@When("^something$")
	public void do_something() throws Throwable {
		// something
	}

	@Then("^fail$")
	public void fail() throws Throwable {
		throw new PendingException("Fail!");
	}

}
