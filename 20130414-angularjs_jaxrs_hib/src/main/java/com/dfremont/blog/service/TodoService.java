package com.dfremont.blog.service;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.dfremont.blog.core.model.Todo;

@Path("/todos")
public class TodoService {

	static Todo[] todos = new Todo[] { new Todo("linge", false, "author"),
			new Todo("vaisselle", false, "author") };

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Todo[] readTodos() {

		System.out.println("@GET todos");

		return todos;
	}

	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updateTodos(Todo[] updatedTodos) {

		System.out.println("@PUT todos");

		todos = updatedTodos;
		return Response.status(201).entity("Track saved").build();
	}

}