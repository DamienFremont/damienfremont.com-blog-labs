package com.damienfremont.blog;

import static java.lang.Long.valueOf;
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
		initJadler();
		int port = Jadler.port();
		// client = ProxyFactory.create( PersonService.class,
		// "http://localhost:" + port + "/api/" );

		client = ProxyFactory.create(PersonService.class, "http://localhost:"
				+ port + "/api/persons", new PersonClient());
	}

	@After
	public void tearDown() {
		closeJadler();
	}

	@Test
	public void testGetEmission() {
		// MOCK

		onRequest()
				.havingMethodEqualTo("GET")
				.havingPathEqualTo("/api/persons/id/1")
				//
				.respond()
				.withBody(
						"{\"fisrtName\":\"Anakin\",\"lastName\":\"Skylwalker\"}") //
				.withEncoding(Charset.forName("UTF-8")) //
				.withContentType("application/json; charset=UTF-8") //
				.withStatus(200);

		// ETANT DONNE

		Integer arg = 1;

		// QUAND

		PersonModel response = client.readPerson(arg);

		// ALORS

		assertThat(response).isNotNull();
		assertThat(response.getId()).isNotNull();
		assertThat(response.getFirstName()).isEqualTo("An");
		assertThat(response.getLastName()).isEqualTo("Sky");
	}

}
