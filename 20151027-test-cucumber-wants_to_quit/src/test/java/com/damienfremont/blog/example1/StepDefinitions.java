package com.damienfremont.blog.example1;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitions {

	@When("^something$")
	public void do_something() throws Throwable {
		// something
	}

	@Then("^something bad$")
	public void quit() throws Throwable {
		throw new RuntimeException("Fail!");
	}
	
	@After
	public void after(Scenario s) throws Exception {
		// Tell Cucumber to quit after this scenario is done - if it failed.
		CucumberHooks.wantsToQuit = true == s.isFailed();
	}
}
