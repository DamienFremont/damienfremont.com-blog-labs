package com.damienfremont.blog;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.damienfremont.blog.ServiceJAXRS.Message;

public class DatasRepository implements PagingAndSortingRepository<Message, Serializable> {

	// MOCK
	static List<Message> datas;
	static {
		datas = new ArrayList<>();
		for (int i = 0; i < 5000; i++) {
			datas.add(new Message(i, "Shooting star illuminates the Thailand sky", "John Doe", i));
		}
	}

	@Override
	public Page<Message> findAll(Pageable arg0) {
		int pSize = arg0.getPageSize();
		int pNumb = arg0.getPageNumber();
		int pFirst = pNumb * pSize;
		int pLast = pFirst + pSize;
		int total = datas.size();
		List<Message> content = new ArrayList<>();
		for (int i = 0; i < total; i++) {
			if (i >= pFirst && i < pLast) {
				Message data = datas.get(i);
				content.add(data);
			}
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
	public void delete(Message arg0) {
		// TODO Auto-generated method stub

	}

	@Override
	public void delete(Iterable<? extends Message> arg0) {
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
	public Iterable<Message> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Iterable<Message> findAll(Iterable<Serializable> arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Message findOne(Serializable arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends Message> S save(S arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <S extends Message> Iterable<S> save(Iterable<S> arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Iterable<Message> findAll(Sort arg0) {
		// TODO Auto-generated method stub
		return null;
	}

}
