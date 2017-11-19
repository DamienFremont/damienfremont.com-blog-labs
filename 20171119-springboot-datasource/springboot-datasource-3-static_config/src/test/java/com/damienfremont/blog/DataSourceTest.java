package com.damienfremont.blog;

import static org.junit.Assert.*;
import org.junit.*;
import org.junit.runner.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class DataSourceTest {

  @Autowired
  private GenericEntityRepository data;

  @Test
  public void test() {
    GenericEntity newEntity = new GenericEntity("test");
    
    GenericEntity savedEntity = data.save(newEntity);
    GenericEntity foundEntity = data.findOne(savedEntity.getId());

    assertNotNull(foundEntity);
    assertEquals(newEntity.getValue(), savedEntity.getValue());
    assertEquals(newEntity.getValue(), foundEntity.getValue());
  }
}
