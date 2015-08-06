package com.damienfremont.blog;

import static java.util.Arrays.asList;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;

@RunWith(value = Parameterized.class)
public class FeaturesTest {

	private Features classToTest;

	public FeaturesTest(Features classToTest) {
		this.classToTest = classToTest;
	}

	@Parameters(name = "test of class {0}")
	public static Iterable<Object[]> data() {
		return asList(new Object[][] { //
		//
				{ new Java4AVanillaImpl() }, //
				{ new Java4CommonsLangImpl() }, //
				{ new Java6CommonsLangImpl() }, //
				{ new Java6GuavaImpl() }, //
				{ new Java8GuavaImpl() } });
	}

	@Test
	public void test_Condition() {
		assertTrue(classToTest.condition("Valid"));
		assertFalse(classToTest.condition(null));
		assertFalse(classToTest.condition(""));
		assertFalse(classToTest.condition(" "));
	}

	@Test
	public void test_Check() {
		classToTest.check("Valid");
		try {
			classToTest.check(null);
			fail("EXPECTED ERROR!");
		} catch (Exception e) {
			assertTrue(e instanceof IllegalArgumentException);
		}
		try {
			classToTest.check("");
			fail("EXPECTED ERROR!");
		} catch (Exception e) {
			assertTrue(e instanceof IllegalArgumentException);
		}
	}

	@Test
	public void test_Transform() {
		List<String> args = asList(new String[] { "a", "b", "c" });
		List<String> expected = asList(new String[] { "A", "B", "C" });
		List<String> result = classToTest.map(args);
		assertNotNull(result);
		assertEquals(expected.size(), result.size());
		for (int i = 0; i < result.size(); i++) {
			assertEquals(expected.get(i), result.get(i));
		}
	}

	@Test
	public void test_Filter() {
		List<String> args = asList(new String[] { "a", "", "c" });
		List<String> expected = asList(new String[] { "a", "c" });
		List<String> result = classToTest.filter(args);
		assertNotNull(result);
		assertEquals(expected.size(), result.size());
		for (int i = 0; i < result.size(); i++) {
			assertEquals(expected.get(i), result.get(i));
		}
	}

	@Test
	public void test_Error_Handling() {
		IllegalStateException arg = new IllegalStateException("AAhhh!");
		try {
			classToTest.errorHandling(arg);
			fail("EXPECTED ERROR!");
		} catch (Exception e) {
			assertTrue(e instanceof RuntimeException);
			assertEquals(arg.getMessage(), e.getMessage());
		}
	}

	@Test
	public void test_Load_File() throws Exception {
		String result = classToTest.loadFile("src/main/resources/file.txt");
		assertEquals("file content", result);
	}

	@Test
	public void test_Load_Resource() throws Exception {
		String result = classToTest.loadResource("resource.txt");
		assertEquals("resource content", result);
	}
}
