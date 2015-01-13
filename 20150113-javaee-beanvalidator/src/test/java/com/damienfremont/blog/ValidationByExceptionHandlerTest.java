package com.damienfremont.blog;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.fail;

import java.util.Calendar;
import java.util.GregorianCalendar;

import org.junit.Test;

public class ValidationByExceptionHandlerTest {

	@Test
	public void test_WHEN_valid_GIVEN_valid_model_THEN_ok_no_errors() {

		// GIVEN

		PersonModel person = new PersonModel( //
				"Kim", //
				"Kardashian", //
				new GregorianCalendar(1980, Calendar.OCTOBER, 21));
		ValidationByExceptionHandler validator = new ValidationByExceptionHandler();

		// WHEN

		validator.validate(person);

		// THEN
		// nothing to do
	}

	@Test
	public void test_WHEN_invalid_GIVEN_valid_model_THEN_error() {

		// GIVEN

		PersonModel person = new PersonModel( //
				null, //
				"", //
				null);
		ValidationByExceptionHandler validator = new ValidationByExceptionHandler();

		// WHEN

		try {
			validator.validate(person);
			fail();
		} catch (IllegalArgumentException e) {

			// THEN

			assertThat(e.getMessage())
					.contains("Invalid Bean, constraint error(s) : ")
					.contains("birthDate may not be null.")
					.contains("firstName may not be null.")
					.contains("lastName size must be between 1 and 16.");
		}
	}

}
