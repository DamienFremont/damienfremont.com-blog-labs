package com.damienfremont.blog;

import static javax.ws.rs.core.Response.Status.ACCEPTED;
import static javax.ws.rs.core.Response.Status.BAD_REQUEST;
import static javax.ws.rs.core.Response.Status.CREATED;

import java.util.List;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

/**
 * Version avancee : on implemente certains comportements (validation, code http)
 */
@Path("/persons2")
public class PersonService2 {

	private PersonRepository dao = new PersonRepository();

	/* CRUD METHODS */

	@POST
	@Produces(MediaType.TEXT_PLAIN)
	public Response createPerson(PersonModel person) {
		// VALIDATION
		if (!(person != null 
				&& person.getFirstName() != null && person.getLastName() != null && person.getBirthDate() != null)) {
			return Response
					.status(BAD_REQUEST)
					.build();
		}
		// PROCESS
		PersonModel newEntity = dao.create(person);
		// RESULT
		return Response
				.status(CREATED)
				.entity("Location: /persons2/id/" + newEntity.getId())
				.build();
	}

	@GET
	@Path("/id/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response readPerson(@PathParam("id") Integer id) {
		// VALIDATION
		if (id == null)
			return Response
					.status(Status.BAD_REQUEST)
					.build();
		// PROCESS
		PersonModel entity = dao.read(id);
		// RESULT
		return Response
				.status(ACCEPTED)
				.entity(entity)
				.build();
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response readPersons() {
		// PROCESS
		List<PersonModel> entities = dao.readAll();
		// RESULT
		return Response
				.status(ACCEPTED)
				.entity(entities)
				.build();
	}

	@POST
	@Path("/id/{id}")
	public Response updatePerson(@PathParam("id") Integer id, PersonModel person) {
		// VALIDATION
		if (!(person != null && id != null
				&& person.getFirstName() != null && person.getLastName() != null && person.getBirthDate() != null)) {
			return Response
					.status(BAD_REQUEST)
					.build();
		}
		// PROCESS
		dao.update(person);
		// RESULT
		return Response
				.status(ACCEPTED)
				.build();
	}

	@DELETE
	@Path("/id/{id}")
	public Response deletePerson(@PathParam("id") Integer id) {
		// VALIDATION
		if (id == null)
			return Response
					.status(BAD_REQUEST)
					.build();
		// PROCESS
		dao.delete(id);
		// RESULT
		return Response
				.status(ACCEPTED)
				.build();
	}
}