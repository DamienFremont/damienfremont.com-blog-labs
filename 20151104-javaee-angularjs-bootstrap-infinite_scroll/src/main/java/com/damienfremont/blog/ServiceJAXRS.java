package com.damienfremont.blog;

import java.io.Serializable;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;


@Path("/message")
public class ServiceJAXRS {

  DatasRepository datas = new DatasRepository();

  @Path("/page")
  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public Page<Message> getAll( //
      @QueryParam("page") Integer page, //
      @QueryParam("size") Integer size) {
    Pageable pageRequest = new PageRequest( //
        ((page == null) ? 0 : (page - 1)), //
        ((size == null) ? 10 : size));
    return datas.findAll(pageRequest);
  }

  // MODEL
  static class Message implements Serializable {
    private static final long serialVersionUID = 9167120287441116359L;
    public Integer score;
    public String title;
    public String author;
    public Integer num_comments;

    public Message() {
    }

    public Message(Integer score, String title, String author, Integer num_comments) {
      super();
      this.score = score;
      this.title = title;
      this.author = author;
      this.num_comments = num_comments;
    }
  }
}