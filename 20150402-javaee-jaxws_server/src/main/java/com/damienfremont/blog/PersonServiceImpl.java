package com.damienfremont.blog;

import java.util.List;

public class PersonServiceImpl implements PersonService {
	
	private PersonRepository dao = new PersonRepository();

	/* CRUD METHODS */

	@Override
	public String createPerson(PersonModel person) {
		return String.valueOf(dao.create(person).getId());
	}

	@Override
	public PersonModel readPerson(Integer id) {
		return dao.read(id);
	}

	@Override
	public List<PersonModel> readPersons() {
		return dao.readAll();
	}

	@Override
	public void updatePerson(Integer id, PersonModel person) {
		dao.update(person);
	}

	@Override
	public void deletePerson(Integer id) {
		dao.delete(id);
	}

}
