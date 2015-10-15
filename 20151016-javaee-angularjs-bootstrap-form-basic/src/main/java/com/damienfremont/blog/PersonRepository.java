package com.damienfremont.blog;

import java.io.Serializable;
import java.util.Date;

public class PersonRepository {

	Person data;

	public PersonRepository() {
		data = new Person();
		data.firstName = "John";
		data.lastName = "Doe";
	}

	public Person read() {
		return data;
	}

	public void update() {
		
	}

	static class Person implements Serializable {
		private static final long serialVersionUID = 9167120287441116359L;
		public String firstName;
		public String lastName;
		public Date birthDate;
	}

}
