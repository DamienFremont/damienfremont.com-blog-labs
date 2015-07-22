package com.damienfremont.blog;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class PersonRepository {

	static Map<String, PersonModel> datas = new HashMap<>();

	long count() {
		return datas.size();
	}

	PersonModel create(PersonModel entity) {
		datas.put(entity.name, entity);
		return entity;
	}

	PersonModel read(String name) {
		return datas.get(name);
	}

	List<PersonModel> readAll() {
		return new ArrayList<PersonModel>(datas.values());
	}

	PersonModel update(PersonModel entity) {
		return datas.put(entity.name, entity);
	}

	void delete(Long id) {
		datas.remove(id);
	}

}
