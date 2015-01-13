package com.damienfremont.blog;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.*;

import org.assertj.core.api.Assertions;
import org.junit.Test;

import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

public class PersonValidatorTest {

	@Test
	public void test_WHEN_valid_GIVEN_valid_model_THEN_ok_no_errors() {

		// GIVEN

		PersonModel person = new PersonModel( //
				"Kim", //
				"Kardashian", //
				new GregorianCalendar(1980, Calendar.OCTOBER, 21));

		ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
		Validator validator = factory.getValidator();

		// WHEN

		Set<ConstraintViolation<PersonModel>> constraintViolations = validator.validate(person);

		// THEN

		assertThat(constraintViolations).isEmpty();
	}
}
