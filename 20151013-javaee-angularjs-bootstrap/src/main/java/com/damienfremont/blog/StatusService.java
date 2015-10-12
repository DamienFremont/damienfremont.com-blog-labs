package com.damienfremont.blog;

import static javax.ws.rs.core.Response.status;
import static javax.ws.rs.core.Response.Status.OK;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/status")
public class StatusService {

  @GET
  public Response ping() {
    return status(OK).build();
  }

  @GET
  @Path("details")
  @Produces(MediaType.APPLICATION_JSON)
  public StatusModel details() {
    String pattern = "yyyy-MM-dd hh:mm:ss";
    SimpleDateFormat sdf = new SimpleDateFormat(pattern);
    String date = sdf.format(new Date());
    return new StatusModel("OK", date);
  }

  class StatusModel implements Serializable {
    private static final long serialVersionUID = 9167120287441116359L;
    
    public String value;

    public StatusModel(String value, String date) {
      super();
      this.value = value;
      this.date = date;
    }

    public String date;
  }

}