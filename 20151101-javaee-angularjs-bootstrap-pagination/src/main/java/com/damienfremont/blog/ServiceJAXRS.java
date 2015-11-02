package com.damienfremont.blog;

import java.io.Serializable;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

@Path("/person")
public class ServiceJAXRS {

	DatasRepository datas = new DatasRepository();

	@Path("/page")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Page<Person> getAll( //
			@QueryParam("sort") String sort, //
			@QueryParam("page") Integer page, //
			@QueryParam("size") Integer size) {
		Pageable pageRequest = new PageRequest( //
				((page == null) ? 0 : (page-1)), //
				((size == null) ? 10 : size));
		return datas.findAll(pageRequest);
	}

	// MODEL
	static class Person implements Serializable {
		private static final long serialVersionUID = 9167120287441116359L;
		public Integer id;
		public String firstName;
		public String lastName;

		public Person() {

		}

		public Person(Integer id, String firstName, String lastName) {
			super();
			this.id = id;
			this.firstName = firstName;
			this.lastName = lastName;
		}
	}

}