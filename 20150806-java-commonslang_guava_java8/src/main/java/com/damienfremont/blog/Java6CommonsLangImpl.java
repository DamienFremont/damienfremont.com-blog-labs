package com.damienfremont.blog;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;

// STABLE: COMMONS-LANG, JAVA GENERICS
public class Java6CommonsLangImpl implements IJavaUseCases {

	public boolean condition(String arg) {
		return StringUtils.isNotBlank(arg);
	}

	public void check(String arg) {
		if (!condition(arg)) {
			throw new IllegalArgumentException();
		}
	}

	public List<String> filter(List<String> input) {
		List<String> output = new ArrayList<String>();
		for (String current : input) {
			if (condition(current)) {
				output.add(current);
			}
		}
		return output;
	}

	public List<String> map(List<String> input) {
		List<String> output = new ArrayList<String>();
		for (String current : input) {
			String transformed = current.toUpperCase();
			output.add(transformed);
		}
		return output;
	}

	public void errorHandling(Exception e) {
		throw new RuntimeException(e.getMessage(), e);
	}

	public String loadFile(String path) throws Exception {
		File file = new File(path);
		return FileUtils.readFileToString(file);
	}

	public String loadResource(String name) throws Exception {
		ClassLoader classLoader = getClass().getClassLoader();
		return IOUtils.toString(classLoader.getResourceAsStream(name));
	}
}
