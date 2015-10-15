package com.damienfremont.blog;

import java.io.Serializable;
import java.util.Date;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/person")
public class PersonResource {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Person get() {
		return data;
	}

	// MOCK

	static Person data;

	static {
		data = new Person();
		data.firstName = "John";
		data.lastName = "Doe";
	}

	static class Person implements Serializable {
		private static final long serialVersionUID = 9167120287441116359L;
		public String firstName;
		public String lastName;
		public Date birthDate;
	}

}