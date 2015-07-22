package com.damienfremont.blog;

import java.io.Serializable;

public class PersonModel implements Serializable {

	static final long serialVersionUID = 6879685199191377814L;

	String name;

	public PersonModel(String name) {
		this.name = name;
	}
}
