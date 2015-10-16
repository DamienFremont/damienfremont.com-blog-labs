package com.damienfremont.blog;

import java.util.HashSet;
import java.util.Set;
import javax.ws.rs.core.Application;

public class MyAppCONFIG extends Application {

  @Override
  public Set<Class<?>> getClasses() {
    Set<Class<?>> s = new HashSet<Class<?>>();
    s.add(PersonJAXRS.class);
//    s.add(ValidationConfigurationContextResolver)
    return s;
  }
}