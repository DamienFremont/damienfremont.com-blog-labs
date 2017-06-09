package com.damienfremont.blog;

public class Builder_Vanilla {
  private Long id;
  private String firstName;
  private String lastName;

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

  public static Builder builder() {
    return new Builder();
  }

  public static class Builder {
    private Builder_Vanilla obj;

    public Builder() {
      obj = new Builder_Vanilla();
    }

    public Builder id(Long arg) {
      obj.id = arg;
      return this;
    }

    public Builder firstName(String arg) {
      obj.firstName = arg;
      return this;
    }

    public Builder lastName(String arg) {
      obj.lastName = arg;
      return this;
    }

    public Builder_Vanilla build() {
      return obj;
    }
  }

}
