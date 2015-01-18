package com.damienfremont.blog;

import static net.jadler.Jadler.closeJadler;
import static net.jadler.Jadler.initJadler;
import static net.jadler.Jadler.onRequest;
import static org.fest.assertions.api.Assertions.assertThat;

import java.nio.charset.Charset;

import net.jadler.Jadler;

import org.jboss.resteasy.client.ProxyFactory;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class PersonClientTest {

	PersonService client;

	@Before
	public void setUp() {
		// INIT MOCK
		initJadler();
		// INIT REST CLIENT
		client = ProxyFactory.create(//
				PersonService.class, //
				"http://localhost:" + Jadler.port() + "/api");
	}

	@After
	public void tearDown() {
		closeJadler();
	}

	@Test
	public void test_QUAND_get_person_ETANT_DONNE_id_valid_ALORS_success() {

		// ETANT DONNE
		onRequest()
				.havingMethodEqualTo("GET")
				.havingPathEqualTo("/api/persons/id/1")
				.respond()
				.withBody(
						"{person:{" //
								+ "\"id\":\"1\","
								+ "\"firstName\":\"Anakin\","
								+ "\"lastName\":\"Skylwalker\","
								+ "\"birthDate\":\"41.9 BBY\"" //
								+ "}}") //
				.withEncoding(Charset.forName("UTF-8")) //
				.withContentType("application/json; charset=UTF-8") //
				.withStatus(200);
		Integer arg = 1;

		// QUAND
		PersonModel response = client.readPerson(arg);

		// ALORS
		assertThat(response).isNotNull();
		assertThat(response.getId()).isNotNull();
		assertThat(response.getFirstName()).isEqualTo("Anakin");
		assertThat(response.getLastName()).isEqualTo("Skylwalker");
		assertThat(response.getBirthDate()).isEqualTo("41.9 BBY");
	}
}
