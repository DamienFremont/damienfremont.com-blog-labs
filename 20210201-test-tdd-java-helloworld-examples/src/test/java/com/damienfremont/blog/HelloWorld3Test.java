package com.damienfremont.blog;

import com.damienfremont.blog.utils.JUnit4Parent;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;

import java.util.Arrays;
import java.util.Collection;

@RunWith(Parameterized.class)
public class HelloWorld3Test extends JUnit4Parent {

    @Parameterized.Parameters
    public static Collection<Object[]> data() {
        return Arrays.asList(new Object[][]{
                {"Hello, World!", "World"},
                {"Hello, Damien!", "Damien"},
                {"Hello, Jane!", "Jane"},
                {"Hello, John!", "John"},
        });
    }

    private final String expected;
    private final String first;

    public HelloWorld3Test(String expected, String first) {
        this.first = first;
        this.expected = expected;
    }

    @Test
    public void print_Hello_with_parameter() {
        String[] args = {first};
        HelloWorld3.main(args);
        Assert.assertEquals(
                expected,
                getOutput());
    }

    @Test
    public void print_Hello_World_by_default() {
        throw new IllegalStateException("Not yet implemented!");
        // TODO: NEXT: If parameter is not present, Print "Hello, World!"
    }
}

