package com.damienfremont.blog;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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
		int total = datas.size();
		List<Person> content = new ArrayList<>(datas);
		return new PageImpl<>(datas, arg0, datas.size());
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
