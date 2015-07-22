package com.damienfremont.blog;

import static org.assertj.core.api.StrictAssertions.assertThat;

import cucumber.api.java8.En;

public class StepDefinitions implements En {

	PersonRepository system = RunBDDTest.INSTANCE;

	public StepDefinitions() {

		Given("an empty repository", 
			() -> 
				assertThat( system.count()).isEqualTo( 0 ));

		When("I create a new Person named '(.*)' with the system", 
			(String name) -> 
				system.create( new PersonModel(name)));

		Then("I should have Person named '(.*)' in the repository", 
			(String name) -> 
				assertThat(system.read(name)).isNotNull());
	}
}
