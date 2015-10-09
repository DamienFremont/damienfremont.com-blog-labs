package com.damienfremont.blog;

import java.util.List;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 * version simple du service: on laisse faire jersey-server.
 */
@Path("/persons")
public class PersonService1 {

	private PersonRepository dao = new PersonRepository();

	/* CRUD METHODS */

	@POST
    @Produces(MediaType.TEXT_PLAIN)
	public String createPerson(PersonModel person) {
		return String.valueOf( dao.create(person).getId());
	}

	@GET
	@Path("/id/{id}")
    @Produces(MediaType.APPLICATION_JSON)
	public PersonModel readPerson(@PathParam("id") Integer id) {
		return dao.read(id);
	}

	@GET
    @Produces(MediaType.APPLICATION_JSON)
	public List<PersonModel> readPersons() {
		return dao.readAll();
	}

	@POST
	@Path("/id/{id}")
	public void updatePerson(@PathParam("id") Integer id, PersonModel person) {
		dao.update(person);
	}

	@DELETE
	@Path("/id/{id}")
	public void deletePerson(@PathParam("id") Integer id) {
		dao.delete(id);
	}
}