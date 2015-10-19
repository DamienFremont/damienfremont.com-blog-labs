package com.damienfremont.blog;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/person")
public class ServiceJAXRS {
	
      @Path("/")
	  @GET
	  @Produces(MediaType.APPLICATION_JSON)
	  public List<Person> getAll() {
	    return datas;
	  }

      @Path("/{id}")
	  @GET
	  @Produces(MediaType.APPLICATION_JSON)
	  public Person get(@PathParam("id") Long id) {
	    return datas.get(id.intValue()-1);
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