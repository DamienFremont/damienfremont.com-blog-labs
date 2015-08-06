package com.damienfremont.blog;

import java.util.List;

public interface Features {

	boolean condition(String arg);
	void check(String arg);

	List<String> filter(List<String> input);
	List<String> map(List<String> input);

	void errorHandling(Exception e);

	String loadFile(String path) throws Exception;
	String loadResource(String name) throws Exception;

}
