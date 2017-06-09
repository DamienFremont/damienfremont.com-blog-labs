package com.damienfremont.blog;
import lombok.*;
import lombok.extern.java.Log;

@Log
@RequiredArgsConstructor
public class Implem_Lombock {
  @NonNull private String status;

  public String execute(@NonNull String arg) {
    log.info("Execute for arg=" + arg);
    return arg + " " + status;
  }
}
