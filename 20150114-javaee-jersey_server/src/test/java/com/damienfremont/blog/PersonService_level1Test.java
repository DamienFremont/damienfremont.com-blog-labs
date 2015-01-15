package com.damienfremont.blog;

import static com.jayway.restassured.RestAssured.expect;
import static org.hamcrest.Matchers.equalTo;

import org.hamcrest.Matchers;
import org.junit.Test;

public class PersonService_level1Test {

	@Test
	public void testPersonCreateSuccess() {
		expect()
			.statusCode(200)
			.body( Matchers.notNullValue())
		.given()
			.contentType("application/json")
			.parameters("firstName", "Padme", "lastName", "Amidala",	"birthDate", "46 BBY")
		.when()
			.post("/20150114-javaee-jersey_server/api/persons");
	}

	@Test
	public void testPersonGetSuccess() {
		expect()
			.statusCode(200)
			.body("id", equalTo(1))
			.body("firstName", equalTo("Anakin"))
			.body("lastName", equalTo("Skywalker"))
			.body("birthDate", equalTo("41.9 BBY")) //
		.when()
			.get("/20150114-javaee-jersey_server/api/persons/id/1");
	}

	@Test
	public void testPersonGetAllSuccess() {
		expect()
			.statusCode(200)
			.body("id", Matchers.hasItems(1, 2, 3)) //
		.when()
			.get("/20150114-javaee-jersey_server/api/persons");
	}

	@Test
	public void testPersonPostUpdateSuccess() {
		expect()
			.statusCode(204)
		.given()
			.contentType("application/json")
			.parameters("firstName", "Anakin", "lastName", "Skywalker",	"birthDate", "41.9 BBY")
		.when()
			.post("/20150114-javaee-jersey_server/api/persons/id/1");
	}
}
