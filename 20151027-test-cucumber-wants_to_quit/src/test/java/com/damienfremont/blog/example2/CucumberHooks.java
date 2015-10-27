package com.damienfremont.blog.example2;

import java.util.Collection;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public final class CucumberHooks {

	private static final String TAG = "@important";
	private static boolean prevScenarioFailed = false;

	@After
	public void watch_this_tagged_scenario(Scenario scenario) throws Exception {
		if (isTagged(scenario)) {
			boolean isFailed = scenario.isFailed();
			if (isFailed)
				prevScenarioFailed = isFailed;
		}
	}

	@Before
	public void quit_if_tagged_scenario_failed(Scenario scenario) {
		if (!isTagged(scenario) && prevScenarioFailed)
			throw new IllegalStateException("An important scenario has failed! Cucumber wants to quit.");
	}

	private boolean isTagged(Scenario scenario) {
		Collection<String> tags = scenario.getSourceTagNames();
		return tags.contains(TAG);
	}
}