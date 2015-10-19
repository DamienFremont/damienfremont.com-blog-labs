package com.damienfremont.blog;

import java.io.File;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;

@Path("/person")
public class ServiceJAXRS {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Person> getAll() {
		return datas;
	}

	@GET
	@Path("/csv")
	@Produces("application/pdf")
	public Response getFile() {
		File file = GenerateCSV.generateCsvFile(datas);
		ResponseBuilder response = Response.ok((Object) file);
		String filename = "export.csv";
		response.header("Content-Disposition", "attachment; filename="+filename);
		return response.build();
	}

	// MODEL

	static class Person implements Serializable {
		private static final long serialVersionUID = 9167120287441116359L;
		public Long id;
		public String firstName;
		public String lastName;

		public Person(Long id, String firstName, String lastName) {
			super();
			this.id = id;
			this.firstName = firstName;
			this.lastName = lastName;
		}
	}

	// MOCK

	static List<Person> datas;

	static {
		datas = new ArrayList<>();
		datas.add(new Person(1L, "Albert", "Einstein"));
		datas.add(new Person(2L, "Albert", "Einstein"));
		datas.add(new Person(3L, "Albert", "Einstein"));
	}
}