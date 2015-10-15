package com.damienfremont.blog;

import java.io.Serializable;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
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
  
  @POST
  @Consumes(MediaType.APPLICATION_JSON)
  public void post(Person data) {
    this.data = data;
  }
  
  // MODEL
  
  static class Person implements Serializable {
    private static final long serialVersionUID = 9167120287441116359L;
    public String firstName;
    public String lastName;
    public Integer birthYear;
    public Boolean active;
  }
  
  // MOCK

  static Person data;
  static {
    data = new Person();
    data.firstName = "Albert";
    data.lastName = "Einstein";
    data.birthYear = 1909;
    data.active = Boolean.FALSE;
  }

}