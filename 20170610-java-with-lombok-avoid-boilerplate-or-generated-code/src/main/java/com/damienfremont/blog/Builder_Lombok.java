package com.damienfremont.blog;
import java.util.Calendar;
import lombok.*;

@Builder
@Getter
public class Builder_Lombok {
  private Long id;
  private String firstName;
  private String lastName;
  private Calendar birthdate;
}
