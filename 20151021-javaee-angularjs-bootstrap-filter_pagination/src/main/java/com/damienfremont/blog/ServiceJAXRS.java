package com.damienfremont.blog;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

@Path("/person")
public class ServiceJAXRS {

  @Path("/all")
  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public List<Person> getAll(
		  @QueryParam("like") final String like, 
		  @QueryParam("pfirst") final Integer pfirst,
	      @QueryParam("pmax") final Integer pmax) {
	int vpfirst = 0;
    int vpmax = 10;
	  // TODO use spring datas
	List<Person> res = new ArrayList<>();
	for (int i = 0; i < datas.size(); i++) {
		if(i>=vpfirst && i<vpmax) {
			res.add(datas.get(i));
		}
	}
    return res;
  }
  
  @Path("/{id}")
  @GET
  @Consumes(MediaType.APPLICATION_JSON)
  public Person get(@PathParam("id") Integer id) {
    return datas.get(id);
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

  // MOCK
  static List<Person> datas;
  static {
    datas = new ArrayList<>();
    for (int i = 0; i < 5000; i++) {
        datas.add(new Person(i+1, "John", "Doe"));
	}
  }
}