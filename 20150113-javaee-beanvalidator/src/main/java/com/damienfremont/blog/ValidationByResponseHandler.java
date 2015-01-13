package com.damienfremont.blog;

import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.ws.rs.core.Response;

public class ValidationByResponseHandler {

	Validator jeeValidator = Validation.buildDefaultValidatorFactory()
			.getValidator();

	<T> Response validate(T object) {
		Set<ConstraintViolation<T>> errs = jeeValidator.validate(object);
		if (errs.isEmpty()) { // no error
			return Response.status(200).entity(object).build();
		} else { // error
			String msg = "Invalid Bean, constraint error(s) : ";
			for (ConstraintViolation<T> err : errs) {
				msg += err.getPropertyPath() + " " + err.getMessage() + ". ";
			}
			return Response.status(400).entity(msg).build();
		}

	}
}
