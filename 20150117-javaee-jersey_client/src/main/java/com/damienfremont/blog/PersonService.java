package com.damienfremont.blog;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("persons")
public interface PersonService {
	
	@GET
	void ping();

	@GET
	@Path("id/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	PersonModel readPerson(@PathParam("id") Integer id);
}
