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
		  @QueryParam("like") final String like) {
	List<Person> res = new ArrayList<>();
	for (Person i : datas) {
		boolean isSkipped = false;
		for (String like2 : like.split(" ")) {
			String dataLike = (i.id+i.firstName+i.lastName).toLowerCase();
			String argLike = like2.toLowerCase();
			if(!dataLike.contains(argLike)) {
				isSkipped = true;
			}
		}
		if(!isSkipped) {
			res.add(i);
		}	
	}
    return res;
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
    for (int i = 0; i < 100; i++) {
        datas.add(new Person(i+1, "John", "Doe"));
        datas.add(new Person(i+++1, "Mich", "Jogger"));
        datas.add(new Person(i+++1, "Santa", "Close"));
	}
  }
}