package com.damienfremont.blog;

import static com.jayway.restassured.RestAssured.expect;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasItems;
import static org.hamcrest.Matchers.notNullValue;

import javax.servlet.ServletException;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

public class PersonService2Test {
	

	private static EmbeddedServer server;

	@BeforeClass
	public static void startServer() throws ServletException {
		server = new EmbeddedServer(8080, "/20150114-javaee-jersey_server");
		server.start();
	}

	@AfterClass
	public static void stopServer() {
		server.stop();
	}
	
	private static final String REST_API = "/20150114-javaee-jersey_server/api";

	@Test
	public void testPersonCreateSuccess() {
		expect()
			.statusCode(201)
			.body(notNullValue())
		.given()
			.contentType("application/json")
			.parameters(
					"firstName", "Padme",
					"lastName", "Amidala",
					"birthDate", "46 BBY")
		.when()
			.post(REST_API + "/persons2");
	}
	

	@Test
	public void testPersonCreateBadRequest() {
		expect()
			.statusCode(400)
		.given()
			.contentType("application/json")
			.parameters(
					// missing firstname !!!
					"lastName", "Amidala",
					"birthDate", "46 BBY")
		.when()
			.post(REST_API + "/persons2");
	}

}
