package com.damienfremont.blog;

import java.io.Serializable;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/person")
public class PersonResource {

  static PersonModel obj = new PersonModel();
  static {
    obj.firstName="John";
    obj.lastName="Doe";    	
  }
	
  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public PersonModel get() {
	return obj;
  }

  static class PersonModel implements Serializable {
    private static final long serialVersionUID = 9167120287441116359L;
    
    public String firstName;
    public String lastName;
    public String birthDate;
  }

}