package com.damienfremont.blog;

import static com.jayway.restassured.RestAssured.expect;
import static org.hamcrest.Matchers.hasItems;
import static org.hamcrest.Matchers.hasSize;

import com.google.common.base.Throwables;

import cucumber.api.java8.En;

public class StepDefinitions implements En {

    private static EmbeddedServer SYSTEM;
    
	public StepDefinitions() {

		Given("an empty repository", 
			() -> 
				expect()
					.statusCode(200)
					.body("results", hasSize(0))
				.when()
					.get("/server/api/person"));

		When("I create a new Person named '(.*)' with the system", 
			(String name) -> 
				expect()
					.statusCode(200)
				.given()
					.contentType("text/plain")
					.content(name)
				.when()
					.post("/server/api/person"));

		Then("I should have Person named '(.*)' in the repository", 
			(String name) -> 
				expect()
					.statusCode(200)
					.body("name", hasItems(name))
				.when()
					.get("/server/api/person"));
		
		Before(
			()-> {
				try {
					SYSTEM = new EmbeddedServer(8080, "/server");
					SYSTEM.start();
				} catch (Exception e) {
					throw Throwables.propagate(e);
				}
		});
		
		After(
			()-> {
				SYSTEM.stop();
			});
	}
}
