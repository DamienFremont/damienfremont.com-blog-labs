package com.damienfremont.blog;

public class PersonModel {

	private Integer id;
	private String firstName;
	private String lastName;
	private String birthDate;

	public PersonModel(String firstName, String lastName, String birthDate) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthDate = birthDate;
	}

	public PersonModel(Integer id, String firstName, String lastName,
			String birthDate) {
		this(firstName, lastName, birthDate);
		this.id = id;
	}

	public Integer getId() {
		return id;
	}

	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public String getBirthDate() {
		return birthDate;
	}
}
