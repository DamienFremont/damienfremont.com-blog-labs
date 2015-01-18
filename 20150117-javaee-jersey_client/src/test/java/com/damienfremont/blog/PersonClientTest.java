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
	public void test_QUAND_create_person_ETANT_DONNE_new_ALORS_success() {

		// ETANT DONNE
		onRequest().havingMethodEqualTo("POST")
				.havingPathEqualTo("/api/persons").respond()
				.withBody("Location: /persons/id/6") //
				.withEncoding(Charset.forName("UTF-8")) //
				.withContentType("text/plain; charset=UTF-8") //
				.withStatus(204);

		PersonModel newPerson = new PersonModel();
		newPerson.setFirstName("Luke");
		newPerson.setLastName("Skylwalker");
		newPerson.setBirthDate("19 BBY");

		// QUAND
		client.createPerson(newPerson);

		// ALORS
		// nothing to assert
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
	
	@Test
	public void test_QUAND_post_person_ETANT_DONNE_person_exists_ALORS_success() {

		// ETANT DONNE
		onRequest()
				.havingMethodEqualTo("POST")
				.havingPathEqualTo("/api/persons/id/1")
				.respond()
				.withStatus(200);

		Integer arg = 1;
		PersonModel newPerson = new PersonModel();
		newPerson.setId(1);
		newPerson.setFirstName("Anakin");
		newPerson.setLastName("Skylwalker");
		newPerson.setBirthDate("41.9 BBY");

		// QUAND
		client.updatePerson(arg, newPerson);

		// ALORS
		// nothing to assert
	}
	
	@Test
	public void test_QUAND_delete_person_ETANT_DONNE_person_exists_ALORS_success() {

		// ETANT DONNE
		onRequest()
				.havingMethodEqualTo("DELETE")
				.havingPathEqualTo("/api/persons/id/1")
				.respond()
				.withStatus(200);

		Integer arg = 1;

		// QUAND
		client.deletePerson(arg);

		// ALORS
		// nothing to assert
	}
}
