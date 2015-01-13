package com.damienfremont.blog;

import java.util.Calendar;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import javax.validation.constraints.Size;

public class PersonModel {

	@NotNull
	@Size(min = 1, max = 16)
	private String firstName;

	@NotNull
	@Size(min = 1, max = 16)
	private String lastName;

	@NotNull
	@Past
	private Calendar birthDate;

	public PersonModel(String firstName, String lastName, Calendar birthDate) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthDate = birthDate;
	}

}
