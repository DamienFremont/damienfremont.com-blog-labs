package com.damienfremont.blog;

import javax.persistence.*;

@Entity
public class GenericEntity {
  
  // PROPERTIE(S)
  @Id @GeneratedValue(strategy = GenerationType.AUTO) 
  private Long id;
  private String value;

  // CONSTRUCTOR(S)
  public GenericEntity() { }
  public GenericEntity(String value) { this.value = value; }
  
  // ACCESSOR(S)
  public Long getId() { return id; }
  public void setId(Long id) { this.id = id; }
  public String getValue() { return value; }
  public void setValue(String value) { this.value = value; }
}