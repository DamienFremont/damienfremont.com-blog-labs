package com.damienfremont.blog;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;


@Path("/auth")
public class ServiceJAXRS {

  @Path("/login")
  @POST
  @Consumes(MediaType.APPLICATION_JSON)
  public void login(Object o) {
  }  

}