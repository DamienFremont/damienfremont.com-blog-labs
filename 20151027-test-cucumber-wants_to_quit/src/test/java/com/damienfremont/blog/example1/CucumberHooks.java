package com.damienfremont.blog.example1;

import cucumber.api.Scenario;
import cucumber.api.java.Before;

public final class CucumberHooks {

	public static boolean wantsToQuit = false;

	@Before
	public void quitIfRequested(Scenario scenario) {
		if (wantsToQuit)
			throw new RuntimeException("Cucumber wants to quit.");
	}
}