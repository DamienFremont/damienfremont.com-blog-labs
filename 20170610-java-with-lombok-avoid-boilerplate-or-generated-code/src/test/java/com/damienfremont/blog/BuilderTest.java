package com.damienfremont.blog;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;

public class BuilderTest {

  @Test
  public void test_Vanilla() {
    Builder_Vanilla obj = Builder_Vanilla.builder() //
        .id(1492L) //
        .firstName("Damien") //
        .lastName("FREMONT") //
        .build();
    
      assertThat(obj.getId()).isEqualTo(1492L);
      assertThat(obj.getFirstName()).isEqualTo("Damien");
      assertThat(obj.getLastName()).isEqualTo("FREMONT");
  }

  @Test
  public void test_Lombock() {
    Builder_Lombok obj = Builder_Lombok.builder() //
        .id(1492L) //
        .firstName("Damien") //
        .lastName("FREMONT") //
        .build();
    
      assertThat(obj.getId()).isEqualTo(1492L);
      assertThat(obj.getFirstName()).isEqualTo("Damien");
      assertThat(obj.getLastName()).isEqualTo("FREMONT");
  }

}
