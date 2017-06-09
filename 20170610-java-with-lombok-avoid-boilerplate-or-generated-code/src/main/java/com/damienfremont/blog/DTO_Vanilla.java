package com.damienfremont.blog;

import java.util.Calendar;

public class DTO_Vanilla {
  private Long id;
  private String firstName;
  private String lastName;
  private Calendar birthdate;

  public DTO_Vanilla(Long id, String firstName, String lastName) {
    super();
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  @Override
  public String toString() {
    return "DTO_1Vanilla(firstName=" + firstName + ", lastName=" + lastName + ", birthdate=" + birthdate + ")";
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public Calendar getBirthdate() {
    return birthdate;
  }

  public void setBirthdate(Calendar birthdate) {
    this.birthdate = birthdate;
  }
}
