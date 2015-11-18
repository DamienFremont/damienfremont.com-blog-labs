package com.damienfremont.blog;

import java.io.Serializable;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/data")
public class ServiceJAXRS {

  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public Content get() {
    Content res = new Content();
    res.content = "this is from backend!!!";
    return res;
  }
  
  static class Content implements Serializable {
    private static final long serialVersionUID = 611255415996442390L;
    public String content;
  }

}