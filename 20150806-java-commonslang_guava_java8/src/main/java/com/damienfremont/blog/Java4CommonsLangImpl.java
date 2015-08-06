package com.damienfremont.blog;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;

// STABLE: COMMONS-LANG
public class Java4CommonsLangImpl implements IJavaUseCases {

	public boolean condition(String arg) {
		return StringUtils.isNotBlank(arg);
	}

	public void check(String arg) {
		if (!condition(arg)) {
			throw new IllegalArgumentException();
		}
	}

	public List filter(List input) {
		List output = new ArrayList();
		for (int i = 0; i < input.size(); i++) {
			String current = (String) input.get(i);
			if (condition(current)) {
				output.add(current);
			}
		}
		return output;
	}

	public List map(List input) {
		List output = new ArrayList();
		for (int i = 0; i < input.size(); i++) {
			String current = (String) input.get(i);
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
		ClassLoader classLoader = this.getClass().getClassLoader();
		return IOUtils.toString(classLoader.getResourceAsStream(name));
	}
}
