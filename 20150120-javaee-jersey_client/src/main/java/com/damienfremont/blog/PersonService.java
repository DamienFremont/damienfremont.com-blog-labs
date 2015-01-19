package com.damienfremont.blog;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("persons")
public interface PersonService {

	@GET
	public void ping();

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public String createPerson(PersonModel newPerson);

	@GET
	@Path("id/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public PersonModel readPerson(@PathParam("id") Integer id);

	@POST
	@Path("id/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public String updatePerson(@PathParam("id") Integer id, PersonModel actualPerson);

	@DELETE
	@Path("id/{id}")
	public void deletePerson(@PathParam("id") Integer id);
}
