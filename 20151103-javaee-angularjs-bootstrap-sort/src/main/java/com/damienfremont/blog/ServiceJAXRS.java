package com.damienfremont.blog;

import static org.springframework.data.domain.Sort.Direction.ASC;
import static org.springframework.data.domain.Sort.Direction.DESC;

import java.io.Serializable;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;

@Path("/person")
public class ServiceJAXRS {

  DatasRepository datas = new DatasRepository();

  @Path("/page")
  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public Page<Person> getAll( //
      @QueryParam("sort") String sortPredicate, //
      @QueryParam("reverse") Boolean sortReverse //
  ) {
    Direction order = sortReverse ? DESC : ASC;
    Sort sort = new Sort(order, sortPredicate);
    Pageable pageRequest = new PageRequest(0, 100, sort);
    Page<Person> page = datas.findAll(pageRequest);
    return page;
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

}