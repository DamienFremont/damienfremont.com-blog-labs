package com.damienfremont.blog;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.ArrayList;
import java.util.List;

// UNSTABLE: UNTYPED COLLECTIONS, BOILERPLATES
public class Java4aVanillaImpl implements Features {

	public boolean condition(String arg) {
		return arg != null && arg.trim().length() > 0;
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
		FileInputStream stream = new FileInputStream(path);
		try {
			Reader br = new BufferedReader(new InputStreamReader(stream));
			StringBuffer sb = new StringBuffer();
			for (int c = br.read(); c != -1; c = br.read())
				sb.append((char) c);
			return sb.toString();
		} finally {
			stream.close();
		}
	}

	public String loadResource(String name) throws Exception {
		InputStream stream = getClass().getClassLoader().getResourceAsStream(
				name);
		try {
			Reader br = new BufferedReader(new InputStreamReader(stream));
			StringBuffer sb = new StringBuffer();
			for (int c = br.read(); c != -1; c = br.read())
				sb.append((char) c);
			return sb.toString();
		} finally {
			stream.close();
		}
	}

}
