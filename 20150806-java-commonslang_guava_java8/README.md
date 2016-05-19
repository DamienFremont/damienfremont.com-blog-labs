Migrating from Java4 CommonsLang to Java6 Guava to Java8
======
 
![alt text](screenshots/160520005915354.png)
 
This tutorial cover code migration from different historical technical stacks. It goes from Java 1.4 with Commons-Lang (2005, Apache), to Java 1.6 with Guava (2009, Google) then to Java 8 (2015). These technical stacks are knowned to be Java language extension (Jakarta and Guava). Most basic usecases will be covered:
 
* condition
* check
* filter
* map
* error handling
* load file
* load resource
 
by implementing this Interface:
 
```java
public interface IJavaUseCases {
 
    boolean condition(String arg);
    void check(String arg);
 
    List<String> filter(List<String> input);
    List<String> map(List<String> input);
 
    void errorHandling(Exception e);
 
    String loadFile(String path) throws Exception;
    String loadResource(String name) throws Exception;
 
}
```
 
## Java 1.4 (vanilla)
 
This source code is pure old Java, with a lot of boilerplate and very unsafe (missing generics, for each). For historical purpose only.
 
```java
// UNSTABLE: UNSAFE COLLECTIONS, BOILERPLATES
public class Java4AVanillaImpl implements IJavaUseCases {
 
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
```
 
## Java 1.4 with Commons-Lang (2005)
 
This is typical old Java 1.4 source code using Apache Commons-Lang. There is less boilerplate, but it’s still very unsafe (missing generics, for each).
 
```java
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
        ...
    }
 
    public List map(List input) {
        ...
    }
 
    public void errorHandling(Exception e) {
        ...
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
```
 
## Java 1.6 with Commons-Lang (2007)
 
This is lazy old Java 1.6 source code, still using outdated Commons-lang instead of more modern library like Spring or Guava. Not very different, but saffer (generics, foreach).
 
```java
// STABLE: COMMONS-LANG, JAVA GENERICS
public class Java6CommonsLangImpl implements IJavaUseCases {
 
    public boolean condition(String arg) {
        ...
    }
 
    public void check(String arg) {
        ...
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
        ...
    }
 
    public String loadFile(String path) throws Exception {
        ...
    }
 
    public String loadResource(String name) throws Exception {
        ...
    }
}
```
 
## Java 1.6 with Guava (2011)
 
This is actual Java 1.6 source code. Using modern library like Guava. This version is practilly bug-free and comprehensive because of the removing of boilerplate (using guava API and Impl instead).
 
```java
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
```
 
## Java 8 (2015)
 
This is actual “state of the art” Java 8. Using new Java API instead of Guava. The source code is a lot smaller, comprehensive, and faster because of the implementation delegation. Good functions like check() and isBlanck() are still missing. Maybe relying on JavaEE with BeanValidation annotation like @NotNull, @NotEmpty.
 
```java
// STABLE: GUAVA UTILS, JAVA 8 UTILS
// FAST: JAVA 8 IMPL
public class Java8GuavaImpl implements IJavaUseCases {
 
    public boolean condition(String arg) {
        ...
    }
 
    public void check(String arg) {
        ...
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
        ...
    }
 
    public String loadFile(String path) throws IOException {
        return new String(Files.readAllBytes(Paths.get(path)));
    }
 
    public String loadResource(String name) throws Exception {
        URI uri = ClassLoader.getSystemResource(name).toURI();
        return new String(Files.readAllBytes(Paths.get(uri)));
    }
}
```
 
## Demo
 
![alt text](screenshots/160520005915503.jpg)
 
The same test suite will be played for each technical stacks, by using JUnit Parameterized. JavaUseCasesTest.java
 
```java
@RunWith(value = Parameterized.class)
public class JavaUseCasesTest {
 
    private IJavaUseCases classToTest;
 
    public JavaUseCasesTest(IJavaUseCases classToTest) {
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
```
 
pom.xml
 
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.damienfremont.blog</groupId>
    <artifactId>20150806-java-commonslang_guava_java8</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <packaging>jar</packaging>
    <dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.12</version>
            <scope>test</scope>
        </dependency>
        <!-- APACHE LANGUAGE EXTENSION -->
        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-lang3</artifactId>
            <version>3.4</version>
        </dependency>
        <dependency>
            <groupId>commons-io</groupId>
            <artifactId>commons-io</artifactId>
            <version>2.4</version>
        </dependency>
        <!-- GOOGLE LANGUAGE EXTENSION -->
        <dependency>
            <groupId>com.google.guava</groupId>
            <artifactId>guava</artifactId>
            <version>18.0</version>
        </dependency>
    </dependencies>
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.3</version>
                <configuration>
                    <source>1.8</source>
                    <target>1.8</target>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
```
 
## 
 
## Conclusion
 
There is no going back, for the purpose of quality and productivity. The only reason not to use this last source code is if Java8 is not allowed on your project. Same for Java6 with Guava, or Java4 with Commons-Lang. On the opposite, vanilla Java 1.4 or Java 1.6 with Commons-Lang are no longer relevant.
 
## Source
 
[https://github.com/DamienFremont/blog/tree/master/20150806-java-commonslang_guava_java8](https://github.com/DamienFremont/blog/tree/master/20150806-java-commonslang_guava_java8)
https://github.com/DamienFremont/blog/tree/master/20150806-java-commonslang_guava_java8
 
## References
 
[https://commons.apache.org/proper/commons-lang/javadocs/api-release/index.html](https://commons.apache.org/proper/commons-lang/javadocs/api-release/index.html)
https://commons.apache.org/proper/commons-lang/javadocs/api-release/index.html
 
[https://code.google.com/p/guava-libraries/wiki/GuavaExplained](https://code.google.com/p/guava-libraries/wiki/GuavaExplained)
https://code.google.com/p/guava-libraries/wiki/GuavaExplained
 
[http://tutorials.jenkov.com/java-collections/streams.html](http://tutorials.jenkov.com/java-collections/streams.html)
http://tutorials.jenkov.com/java-collections/streams.html
 
[http://www.mkyong.com/unittest/junit-4-tutorial-6-parameterized-test/](http://www.mkyong.com/unittest/junit-4-tutorial-6-parameterized-test/)
http://www.mkyong.com/unittest/junit-4-tutorial-6-parameterized-test/
 
 
[https://damienfremont.com/2015/08/06/migrating-from-java4-commonslang-to-java6-guava-to-java8/](https://damienfremont.com/2015/08/06/migrating-from-java4-commonslang-to-java6-guava-to-java8/)
 
