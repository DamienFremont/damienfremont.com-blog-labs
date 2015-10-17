package com.damienfremont.blog;

import java.io.Serializable;
import java.util.Date;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import javax.validation.executable.ValidateOnExecution;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;


@Path("/person")
public class ServiceJAXRS {
  
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
    @Past
    public Date testDateInput;
    @Past
    public Date testDatePicker;
  }
  
  // MOCK
  static Person data;
  static {
    data = new Person();
    data.testDateInput= new Date();
    data.testDatePicker= new Date();
  }
}