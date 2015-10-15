package com.damienfremont.blog;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.damienfremont.blog.PersonRepository.Person;

@Path("/person")
public class PersonResource {

 PersonRepository repo = new PersonRepository();
	
  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public Person get() {
	  // TODO validation
	return repo.read();
  }


}