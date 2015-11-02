package com.damienfremont.blog;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.TreeMap;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.damienfremont.blog.ServiceJAXRS.Person;

public class DatasRepository implements PagingAndSortingRepository<Person, Serializable> {

	// MOCK
	static List<Person> datas;

	static {
		datas = new ArrayList<>();
		for (int i = 0; i < 100; i++) {
			datas.add(new Person(i + 1, "John", "Doe"));
			i++;
			datas.add(new Person(i + 1, "Mich", "Jogger"));
			i++;
			datas.add(new Person(i + 1, "Santa", "Close"));
		}
	}

	@Override
	public Page<Person> findAll(Pageable arg0) {
		List<Person> content = null;
		int total = datas.size();
		Sort sort = arg0.getSort();
		if (null != sort) {
			TreeMap<Object, Person> sortedDatas = new TreeMap<>();
			if (null != sort.getOrderFor("id"))
				for (Person data : datas)
					sortedDatas.put(data.id, data);
			if (null != sort.getOrderFor("lastName"))
				for (Person data : datas)
					sortedDatas.put(data.lastName, data);
//			if (null != sort.getOrderFor("firstName"))
//				for (Person data : datas)
//					sortedDatas.put(data.firstName, data);
			content = new ArrayList<>(sortedDatas.values());
		} else {
			content = datas;
		}
		return new PageImpl<>(content, arg0, total);
	}

	@Override
	public long count() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void delete(Serializable arg0) {
		// TODO Auto-generated method stub

	}

	@Override
	public void delete(Person arg0) {
		// TODO Auto-generated method stub

	}

	@Override
	public void delete(Iterable<? extends Person> arg0) {
		// TODO Auto-generated method stub

	}

	@Override
	public void deleteAll() {
		// TODO Auto-generated method stub

	}

	@Override
	public boolean exists(Serializable arg0) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Iterable<Person> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Iterable<Person> findAll(Iterable<Serializable> arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Person findOne(Serializable arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends Person> S save(S arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends Person> Iterable<S> save(Iterable<S> arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Iterable<Person> findAll(Sort arg0) {
		// TODO Auto-generated method stub
		return null;
	}

}
