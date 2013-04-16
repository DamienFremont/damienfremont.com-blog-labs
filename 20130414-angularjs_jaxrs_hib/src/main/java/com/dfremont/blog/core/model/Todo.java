package com.dfremont.blog.core.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.NamedQuery;

@Entity
@NamedQuery(name = "findAll", query = "SELECT o FROM Todo o")
public class Todo implements Serializable {

	private static final long serialVersionUID = -3518357356159267241L;

	// Fields

	@Id
	@GeneratedValue
	private Long id;

	private Boolean completed;
	private String title;
	private String author;

	// Constructors

	public Todo() {
		// Auto-generated constructor stub
	}

	public Todo(final String title, final Boolean completed, final String author) {
		this.title = title;
		this.completed = completed;
		this.setAuthor(author);
	}

	// Property accessors

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Boolean getCompleted() {
		return completed;
	}

	public void setCompleted(Boolean completed) {
		this.completed = completed;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}
}
