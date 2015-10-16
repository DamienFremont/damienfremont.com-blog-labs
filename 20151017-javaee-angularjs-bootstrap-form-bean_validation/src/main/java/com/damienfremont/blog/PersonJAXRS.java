package com.damienfremont.blog;

import java.io.Serializable;

import javax.validation.Valid;
import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.NotNull;
import javax.validation.executable.ValidateOnExecution;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.hibernate.validator.constraints.Email;


@Path("/person")
public class PersonJAXRS {

  // READ
  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public Person get() {
    return data;
  }
  
  // UPDATE
  @POST
  @Consumes(MediaType.APPLICATION_JSON)
  @ValidateOnExecution
  public void post(@Valid Person data) {
    this.data = data;
  }
  
  // MODEL
  static class Person implements Serializable {
    private static final long serialVersionUID = 9167120287441116359L;
    @NotNull
    public String firstName;
    @NotNull
    public String lastName;
    @NotNull
    @DecimalMax("2015")
    public Integer birthYear;
    @Email
    public String email;
  }
  
  // MOCK
  static Person data;
  static {
    data = new Person();
    data.firstName = "Albert";
    data.lastName = "Einstein";
    data.birthYear= 1909;
    data.email= "aeinstein@lycos.com";
  }

}