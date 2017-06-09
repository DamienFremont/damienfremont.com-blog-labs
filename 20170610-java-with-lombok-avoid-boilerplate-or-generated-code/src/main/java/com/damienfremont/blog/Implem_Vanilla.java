package com.damienfremont.blog;

import java.util.logging.Logger;

public class Implem_Vanilla {
  private String status;

  private final static Logger log = Logger.getLogger(Implem_Vanilla.class.getName());

  public Implem_Vanilla(String status) {
    super();
    this.status = status;
  }

  public String execute(String arg) {
    if (arg == null)
      throw new NullPointerException("arg");
    log.info("Execute for arg=" + arg);
    return arg + " " + status;
  }
}
