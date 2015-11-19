package com.damienfremont.blog;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.damienfremont.blog.ServiceJAXRS.Content;
import com.google.common.base.Optional;
import com.nimbusds.jose.JOSEException;

/**
 * @see https://github.com/sahat/satellizer/blob/master/examples/server/java/src/main/java/com/example/helloworld/resources/AuthResource.java
 */
@Path("/auth")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ServiceAuth {

  static Map<String, User> users = new HashMap<>();

  static {
    users.put("user1@mail.com", new User(1L, "user1@mail.com", "pass1"));
    users.put("user2@mail.com", new User(2L, "user2@mail.com", "pass2"));
  }

  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public Content get() {
    Content res = new Content();
    res.content = "this is from backend!!!";
    return res;
  }

  @Path("/login")
  @POST
  public Response login(@Valid final User user, @Context final HttpServletRequest request) throws JOSEException {
    final Optional<User> foundUser = findByEmail(user.email);
    if (foundUser.isPresent() && checkPassword(user.password, foundUser.get().password)) {
      final Token token = AuthUtils.createToken(request.getRemoteHost(), foundUser.get().id);
      return Response.ok().entity(token).build();
    }
    return Response.status(Status.UNAUTHORIZED).entity("LOGING_ERROR_MSG").build();
  }

  private boolean checkPassword(String password, String password2) {
    // TODO BUILD YOUR OWN ENCRYPT PASSWORD CHECKER
    return password.equals(password2);
  }

  private Optional<User> findByEmail(String email) {
    // TODO BUILD YOUR OWN DAO
    return Optional.fromNullable(users.get(email));
  }

  static class User {
    public Long id;
    public String email;
    public String password;

    public User() {
    }

    public User(Long id, String email, String password) {
      this.id = id;
      this.email = email;
      this.password = password;
    }

  }

}