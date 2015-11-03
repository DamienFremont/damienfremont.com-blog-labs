package com.damienfremont.blog;

import static org.springframework.data.domain.Sort.Direction.ASC;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.domain.Sort.Order;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.damienfremont.blog.ServiceJAXRS.Person;
import com.google.common.base.Function;
import com.google.common.collect.Ordering;

public class DatasRepository implements PagingAndSortingRepository<Person, Serializable> {

  // MOCK
  static List<Person> datas;

  static {
    datas = new ArrayList<>();
    for (int i = 0; i < 10; i++) {
      datas.add(new Person(i + 1, "John" + i + 1, "Doe"));
      i++;
      datas.add(new Person(i + 1, "Mich" + i + 1, "Jogger"));
      i++;
      datas.add(new Person(i + 1, "Santa" + i + 1, "Close"));
    }
  }

  @Override
  public Page<Person> findAll(Pageable arg0) {
    List<Person> content = null;
    if (null != arg0.getSort()) {
      Order orderById = arg0.getSort().getOrderFor("id");
      Order orderByLastName = arg0.getSort().getOrderFor("lastName");
      Order orderByFirstName = arg0.getSort().getOrderFor("firstName");
      Order order = null;
      Function sortBy = null;
      if (orderById != null) {
        order = orderById;
        sortBy = sortById;
      } else if (orderByLastName != null) {
        order = orderByLastName;
        sortBy = sortByLastName;
      } else if (orderByFirstName != null) {
        order = orderByFirstName;
        sortBy = sortByFirstName;
      } else {
        order = new Order(ASC, "id");
        sortBy = sortById;
      }
      Ordering ordering = Ordering //
          .natural() //
          .onResultOf(sortBy);
      boolean isOrderAsc = (order.getDirection() == ASC);
      content = isOrderAsc //
          ? ordering.sortedCopy(datas) //
          : ordering.reverse().sortedCopy(datas);
    } else {
      content = new ArrayList<>(datas);
    }
    int total = datas.size();
    return new PageImpl<>(content, arg0, total);
  }

  Function<Person, Integer> sortById = new Function<Person, Integer>() {
    public Integer apply(Person foo) {
      return foo.id;
    }
  };

  Function<Person, String> sortByFirstName = new Function<Person, String>() {
    public String apply(Person foo) {
      return foo.firstName;
    }
  };

  Function<Person, String> sortByLastName = new Function<Person, String>() {
    public String apply(Person foo) {
      return foo.lastName;
    }
  };

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
