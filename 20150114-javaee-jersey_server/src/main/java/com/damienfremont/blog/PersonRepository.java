package com.damienfremont.blog;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

public class PersonRepository {

	/* DATAS */

	private static Map<Integer, PersonModel> datas = null;

	public PersonRepository() {
		datas = new HashMap<>();
		datas.put(1, new PersonModel(1, "Anakin", "Skywlaker", "41.9 BBY"));
		datas.put(2, new PersonModel(2, "Luke", "Skywlaker", "19 BBY"));
		datas.put(3, new PersonModel(3, "Leia", "Organa Solo", "19 BBY"));
	}

	/* CRUD METHODS */

	public PersonModel create(PersonModel entity) {
		int randomNum = new Random().nextInt();
		return datas.put(randomNum, entity);
	}

	public PersonModel read(Long id) {
		return datas.get(id);
	}

	public List<PersonModel> readAll() {
		return new ArrayList<PersonModel>(datas.values());
	}

	public PersonModel update(PersonModel entity) {
		return datas.put(entity.getId(), entity);
	}

	public void delete(Long id) {
		datas.remove(id);
	}

}
