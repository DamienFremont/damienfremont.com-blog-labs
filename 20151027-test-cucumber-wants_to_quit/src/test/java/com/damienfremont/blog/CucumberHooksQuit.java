package com.damienfremont.blog;

import cucumber.api.Scenario;
import cucumber.api.java.Before;

public final class CucumberHooksQuit {

	public static void wantsToQuit() {
		wantsToQuit = true;
	}

	private static boolean wantsToQuit = false;

	@Before
	public void quitIfRequested(Scenario scenario) {
		if (wantsToQuit) {
			throw new RuntimeException("Cucumber wants to quit.");
		}
	}
}