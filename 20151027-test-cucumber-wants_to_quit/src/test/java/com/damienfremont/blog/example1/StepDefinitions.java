package com.damienfremont.blog.example1;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitions {

	@When("^something$")
	public void do_something() throws Throwable {
		// something
	}

	@Then("^quit$")
	public void quit() throws Throwable {
		// Tell Cucumber to quit after this scenario is done
		CucumberWantsToQuit.wantsToQuit = true;
	}
}
