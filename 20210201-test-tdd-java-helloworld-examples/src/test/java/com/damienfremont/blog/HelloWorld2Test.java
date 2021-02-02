package com.damienfremont.blog;

import com.damienfremont.blog.utils.JUnit4Parent;
import org.junit.Assert;
import org.junit.Test;

public class HelloWorld2Test extends JUnit4Parent {

    @Test
    public void print_Hello_World() {
        String expected = "Hello, World!";
        HelloWorld2.main(null);
        Assert.assertEquals(
                expected,
                getOutput());
    }

    @Test
    public void print_Hello_with_parameter() {
        throw new IllegalStateException("Not yet implemented!");
        // TODO: NEXT: Print "Hello, <MY NAME>!", where <MY NAME> is a parameter
    }
}

