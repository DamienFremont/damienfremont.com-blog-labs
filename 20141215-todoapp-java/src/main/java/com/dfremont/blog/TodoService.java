package com.dfremont.blog;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/todos")
public class TodoService {

	private TodoRepository dao = new TodoRepository();

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response readTodos() {
		// log
		System.out.println("@GET todos");
		try {
			// find
			TodoModel[] todos = dao.findAll();
			// success
			return Response.status(200).entity(todos).build();
		} catch (Exception e) {
			// error
			return Response.status(500).build();
		}
	}

	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updateTodos(TodoModel[] updatedTodos) {
		// log
		System.out.println("@PUT todos");
		try {
			// update
			dao.updateAll(updatedTodos);
			// success
			return Response.status(201).entity("Track saved").build();
		} catch (Exception e) {
			// error
			return Response.status(500).build();
		}
	}

}