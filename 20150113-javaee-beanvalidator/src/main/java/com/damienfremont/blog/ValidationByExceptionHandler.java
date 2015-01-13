package com.damienfremont.blog;

import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;

public class ValidationByExceptionHandler {

	Validator jeeValidator = Validation.buildDefaultValidatorFactory()
			.getValidator();

	<T> void validate(T object) {
		Set<ConstraintViolation<T>> errs = jeeValidator.validate(object);
		if (errs.size() > 0) { // error
			String msg = "Invalid Bean, constraint error(s) : ";
			for (ConstraintViolation<T> err : errs) {
				msg += err.getPropertyPath() + " " + err.getMessage() + ". ";
			}
			throw new IllegalArgumentException(msg);
		}
	}
}
