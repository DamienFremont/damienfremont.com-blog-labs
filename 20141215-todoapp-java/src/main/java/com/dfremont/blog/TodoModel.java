package com.dfremont.blog;

import java.io.Serializable;

public class TodoModel implements Serializable {

	private static final long serialVersionUID = -3518357356159267241L;

	private Boolean completed;
	private String title;

	public TodoModel(final String title, final Boolean completed) {
		this.title = title;
		this.completed = completed;
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

}
