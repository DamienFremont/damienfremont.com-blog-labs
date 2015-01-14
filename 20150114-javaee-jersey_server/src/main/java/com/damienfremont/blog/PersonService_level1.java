package com.damienfremont.blog;

import java.util.List;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

@Path("/persons-basic")
public class PersonService_level1 {

	private PersonRepository dao = new PersonRepository();

	/* CRUD METHODS */

	@POST
	public PersonModel createPerson(PersonModel person) {
		return dao.update(person);
	}

	@GET
	@Path("/{id}")
	public PersonModel readPerson(@PathParam("id") Long id) {
		return dao.read(id);
	}

	@GET
	public List<PersonModel> readPersons() {
		return dao.readAll();
	}

	@POST
	public PersonModel updatePerson(@PathParam("id") Long id, PersonModel person) {
		return dao.update(person);
	}

	@DELETE
	@Path("/{id}")
	public void deletePerson(@PathParam("id") Long id) {
		dao.delete(id);
	}
}