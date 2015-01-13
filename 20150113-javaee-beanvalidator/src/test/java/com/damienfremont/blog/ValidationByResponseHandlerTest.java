package com.damienfremont.blog;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.Calendar;
import java.util.GregorianCalendar;

import javax.ws.rs.core.Response;

import org.junit.Test;

public class ValidationByResponseHandlerTest {

	@Test
	public void test_WHEN_valid_GIVEN_valid_model_THEN_ok_no_errors() {

		// GIVEN

		PersonModel person = new PersonModel( //
				"Kim", //
				"Kardashian", //
				new GregorianCalendar(1980, Calendar.OCTOBER, 21));
		ValidationByResponseHandler validator = new ValidationByResponseHandler();

		// WHEN

		Response response = validator.validate(person);

		// THEN
		assertThat(response.getStatus()).isEqualTo(200);
	}

	@Test
	public void test_WHEN_invalid_GIVEN_valid_model_THEN_error() {

		// GIVEN

		PersonModel person = new PersonModel( //
				null, //
				"", //
				null);
		ValidationByResponseHandler validator = new ValidationByResponseHandler();

		// WHEN

		Response response = validator.validate(person);

		// THEN
		assertThat(response.getStatus()).isEqualTo(400);
		assertThat(response.getEntity().toString())
				.contains("Invalid Bean, constraint error(s) : ")
				.contains("birthDate may not be null.")
				.contains("firstName may not be null.")
				.contains("lastName size must be between 1 and 16.");
	}

}
