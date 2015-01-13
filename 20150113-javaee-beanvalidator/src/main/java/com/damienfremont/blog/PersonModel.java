package com.damienfremont.blog;

import java.util.Calendar;

public class PersonModel {
	String firstName;
	String lastName;
	Calendar birthDate;

	public PersonModel(String firstName, String lastName, Calendar birthDate) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthDate = birthDate;
	}

}
