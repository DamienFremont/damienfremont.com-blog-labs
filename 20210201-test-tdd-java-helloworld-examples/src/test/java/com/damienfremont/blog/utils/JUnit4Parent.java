package com.damienfremont.blog.utils;

import org.junit.After;
import org.junit.Before;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;

/**
 * Use getOutput() method to test HelloWorld result.
 */
public class JUnit4Parent implements JUnitParent {

    private final PrintStream standardOut = System.out;
    private final ByteArrayOutputStream outputStreamCaptor = new ByteArrayOutputStream();

    @Before
    public void setUp() {
        System.setOut(new PrintStream(outputStreamCaptor));
    }

    @After
    public void tearDown() {
        System.setOut(standardOut);
    }

    public String getOutput() {
        return outputStreamCaptor.toString().trim();
    }
}
