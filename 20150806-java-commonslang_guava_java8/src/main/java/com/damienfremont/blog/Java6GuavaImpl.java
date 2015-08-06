package com.damienfremont.blog;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import com.google.common.base.Charsets;
import com.google.common.base.Function;
import com.google.common.base.Preconditions;
import com.google.common.base.Predicate;
import com.google.common.base.Strings;
import com.google.common.base.Throwables;
import com.google.common.collect.Collections2;
import com.google.common.collect.Lists;
import com.google.common.io.Files;
import com.google.common.io.Resources;

// STABLE: GUAVA UTILS
// FAST: GUAVA IMPL
public class Java6GuavaImpl implements IJavaUseCases {

	public boolean condition(String arg) {
		return !Strings.nullToEmpty(arg).trim().isEmpty();
	}

	public void check(String arg) {
		Preconditions.checkArgument(condition(arg));
	}

	public List<String> filter(List<String> input) {
		return new ArrayList(Collections2.filter(input,
				new Predicate<String>() {
					public boolean apply(String input) {
						return condition(input);
					}
				}));
	}

	public List<String> map(List<String> input) {
		return Lists.transform(input, new Function<String, String>() {
			public String apply(String input) {
				return input.toUpperCase();
			}
		});
	}

	public void errorHandling(Exception e) {
		throw Throwables.propagate(e);
	}

	public String loadFile(String path) throws IOException {
		File file = new File(path);
		return Files.toString(file, Charsets.UTF_8);
	}

	public String loadResource(String name) throws IOException {
		URL url = Resources.getResource(name);
		return Resources.toString(url, Charsets.UTF_8);
	}
}
