package com.damienfremont.blog;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/person")
@Consumes(MediaType.TEXT_PLAIN)
@Produces(MediaType.APPLICATION_JSON)
public class PersonService {

	private PersonRepository dao = new PersonRepository();

	/* CRUD METHODS */

	@POST
	public String createPerson(String name) {
		return dao.create(new PersonModel(name)).name;
	}

	@GET
	@Path("/id/{id}")
	public PersonModel readPerson(@PathParam("id") String id) {
		return dao.read(id);
	}

	@GET
	@Path("/all")
	public List<PersonModel> readPersons() {
		return dao.readAll();
	}
	
	@POST
	@Path("/id/{id}")
	public void updatePerson(@PathParam("id") String id, PersonModel person) {
		dao.update(person);
	}

	@DELETE
	@Path("/id/{id}")
	public void deletePerson(@PathParam("id") String id) {
		dao.delete(id);
	}
}
