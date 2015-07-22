package com.damienfremont.blog;

import static org.assertj.core.api.StrictAssertions.assertThat;

import cucumber.api.java8.En;

public class StepDefinitions implements En {

	static PersonRepository SYSTEM = new PersonRepository();

	public StepDefinitions() {

		Given("an empty repository", 
			() -> 
				assertThat( SYSTEM.count()).isEqualTo( 0 ));

		When("I create a new Person named '(.*)' with the system", 
			(String name) -> 
				SYSTEM.create( new PersonModel(name)));

		Then("I should have Person named '(.*)' in the repository", 
			(String name) -> 
				assertThat(SYSTEM.read(name)).isNotNull());
		
	}
}
