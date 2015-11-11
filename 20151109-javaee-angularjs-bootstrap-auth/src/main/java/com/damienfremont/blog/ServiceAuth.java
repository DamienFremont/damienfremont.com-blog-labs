package com.damienfremont.blog;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.glassfish.jersey.internal.Errors.ErrorMessage;
import org.glassfish.jersey.message.internal.Token;

import com.nimbusds.jose.JOSEException;

import com.google.common.base.Optional;

@Path("/auth")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ServiceAuth {

  @Path("/login")
  @POST
  public Response login(@Valid final User user, @Context final HttpServletRequest request) throws JOSEException {
    final Optional<User> foundUser = dao.findByEmail(user.getEmail());
    if (foundUser.isPresent() && PasswordService.checkPassword(user.getPassword(), foundUser.get().getPassword())) {
      final Token token = AuthUtils.createToken(request.getRemoteHost(), foundUser.get().getId());
      return Response.ok().entity(token).build();
    }
    return Response.status(Status.UNAUTHORIZED).entity(new ErrorMessage(LOGING_ERROR_MSG)).build();
  }
  
  class User {
    String id;
    String password;
    String email;
  }

}