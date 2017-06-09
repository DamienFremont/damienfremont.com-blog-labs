package com.damienfremont.blog;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;

public class DTOTest {

  @Test
  public void test_Vanilla() {
    DTO_Vanilla obj = new DTO_Vanilla(1492L, "Damien", "FREMONT");
    
    assertThat(obj.getId()).isEqualTo(1492L);
    assertThat(obj.getFirstName()).isEqualTo("Damien");
    assertThat(obj.getLastName()).isEqualTo("FREMONT");
    
    assertThat(obj.toString()).isEqualTo("DTO_Vanilla(firstName=Damien, lastName=FREMONT, birthdate=null)");
  }

  @Test
  public void test_Lombock() {
    DTO_Lombock obj = new DTO_Lombock(1492L, "Damien", "FREMONT");
    
    assertThat(obj.getId()).isEqualTo(1492L);
    assertThat(obj.getFirstName()).isEqualTo("Damien");
    assertThat(obj.getLastName()).isEqualTo("FREMONT");
    
    assertThat(obj.toString()).isEqualTo("DTO_Lombock(firstName=Damien, lastName=FREMONT, birthdate=null)");
  }

}
