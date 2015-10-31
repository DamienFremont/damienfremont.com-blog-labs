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
		  @QueryParam("sort") final String sort, 
		  @QueryParam("pfirst") final Integer pfirst,
	      @QueryParam("pmax") final Integer pmax) {
	int vpfirst = (pfirst == null ? 0 : pfirst);
    int vpmax = (pmax == null ? 10 : pmax);
	List<Person> res = new ArrayList<>();
	for (int i = 0; i < datas.size(); i++) {
		if(i>=vpfirst && i<vpfirst+vpmax) {
			Person person = datas.get(i);
			if((person.firstName+person.lastName).toLowerCase().contains(like.toLowerCase())) {
				res.add(person);
			}
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
        datas.add(new Person(i+++1, "Mich", "Jogger"));
        datas.add(new Person(i+++1, "Santa", "Close"));
	}
  }
}