package com.damienfremont.blog;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

import org.assertj.core.api.Condition;
import org.junit.Test;

public class PersonModelTest {

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

		Set<ConstraintViolation<PersonModel>> constraintViolations = validator
				.validate(person);

		// THEN

		assertThat(constraintViolations).isEmpty();
	}

	@Test
	public void test_WHEN_invalid_GIVEN_valid_model_THEN_error() {

		// GIVEN

		PersonModel person = new PersonModel( //
				null, //
				"", //
				null);

		ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
		Validator validator = factory.getValidator();

		// WHEN

		Set<ConstraintViolation<PersonModel>> constraintViolations = validator
				.validate(person);

		// THEN

		assertThat(constraintViolations) //
				.hasSize(3) //
				.haveExactly(2, notNullCondition) //
				.haveExactly(1, notEmptyCondition);
	}

	Condition<ConstraintViolation<PersonModel>> notNullCondition = new Condition<ConstraintViolation<PersonModel>>() {

		@Override
		public boolean matches(ConstraintViolation<PersonModel> arg0) {
			return arg0.getMessage().contains("may not be null");
		}
	};
	Condition<ConstraintViolation<PersonModel>> notEmptyCondition = new Condition<ConstraintViolation<PersonModel>>() {

		@Override
		public boolean matches(ConstraintViolation<PersonModel> arg0) {
			return arg0.getMessage().contains("size must be between");
		}
	};
}
