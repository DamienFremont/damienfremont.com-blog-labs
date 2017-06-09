package com.damienfremont.blog;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;

public class ImplemTest {

  @Test
  public void test_Vanilla() {
    Implem_Vanilla obj = new Implem_Vanilla("suffix");

    String res = obj.execute("arg");
    assertThat(res).isEqualTo("arg suffix");

    try {
      obj.execute(null);
    } catch (NullPointerException e) {
      assertThat(e.getMessage()).contains("arg");
    }
  }

  @Test
  public void test_Lombock() {
    Implem_Lombock obj = new Implem_Lombock("suffix");

    String res = obj.execute("arg");
    assertThat(res).isEqualTo("arg suffix");

    try {
      obj.execute(null);
    } catch (NullPointerException e) {
      assertThat(e.getMessage()).contains("arg");
    }
  }

}
