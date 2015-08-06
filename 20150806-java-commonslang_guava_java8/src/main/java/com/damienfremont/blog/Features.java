package com.damienfremont.blog;

public interface Features {
	void check(String argument);

	String[] transform(String[] input);

	String[] filter(String[] input, String filterValue);

	void errorHandling();
}
