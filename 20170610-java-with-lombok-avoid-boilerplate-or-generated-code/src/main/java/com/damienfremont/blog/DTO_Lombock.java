package com.damienfremont.blog;
import java.util.Calendar;
import lombok.*;

@Data
@ToString(exclude =  {"id"})
@RequiredArgsConstructor
public class DTO_Lombock {
  @NonNull private Long id;
  @NonNull private String firstName;
  @NonNull private String lastName;
           private Calendar birthdate;
}
