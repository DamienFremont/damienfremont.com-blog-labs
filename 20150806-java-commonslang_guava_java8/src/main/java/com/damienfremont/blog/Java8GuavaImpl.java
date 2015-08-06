package com.damienfremont.blog;

import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;

import com.google.common.base.Preconditions;
import com.google.common.base.Strings;
import com.google.common.base.Throwables;

// STABLE: GUAVA UTILS, JAVA 8 UTILS
// FAST: JAVA 8 IMPL
public class Java8GuavaImpl implements IJavaUseCases {

	public boolean condition(String arg) {
		return !Strings.nullToEmpty(arg).trim().isEmpty();
	}

	public void check(String arg) {
		Preconditions.checkArgument(condition(arg));
	}

	public List<String> filter(List<String> input) {
		return input.stream() //
				.filter(i -> condition(i)) //
				.collect(Collectors.toList());
	}

	public List<String> map(List<String> input) {
		return input.stream() //
				.map(i -> i.toUpperCase()) //
				.collect(Collectors.toList());
	}

	public void errorHandling(Exception e) {
		throw Throwables.propagate(e);
	}

	public String loadFile(String path) throws IOException {
		return new String(Files.readAllBytes(Paths.get(path)));
	}

	public String loadResource(String name) throws Exception {
		URI uri = ClassLoader.getSystemResource(name).toURI();
		return new String(Files.readAllBytes(Paths.get(uri)));
	}
}
