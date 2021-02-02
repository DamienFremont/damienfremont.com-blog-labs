package com.damienfremont.blog;

import com.damienfremont.blog.utils.JUnit5Parent;
import org.junit.jupiter.api.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

@DisplayNameGeneration(DisplayNameGenerator.ReplaceUnderscores.class)
public class HelloWorld6FinalTest extends JUnit5Parent {

    @Test
    void print_Hello_World_by_default() {
        String expected = "Hello, World!!";
        HelloWorld6Final.main(null);
        Assertions.assertEquals(
                expected,
                getOutput());
    }

    @DisplayName("print Hello with parameter (expected, parameter)")
    @ParameterizedTest
    @CsvSource({
            "'Hello, Damien!', Damien",
            "'Hello, Jane!', Jane",
            "'Hello, John!', John",
    })
    void print_Hello_with_parameter(String expected, String parameter) {
        String[] args = {parameter};
        HelloWorld6Final.main(args);
        Assertions.assertEquals(expected, getOutput());
    }

    @DisplayName("exception bad format (description, expected, parameter)")
    @ParameterizedTest
    @CsvSource({
            "Param is empty,  bad arg (ex: Damien), ''  ",
            "Param is blanck, bad arg (ex: Damien), ' ' ",
            "Param is null,   bad arg (ex: Damien), null"
    })
    void exception_bad_format(String description, String expected, String parameter) {
        String[] args = {parameter.equals("null") ? null : parameter};
        Exception e = Assertions.assertThrows(IllegalArgumentException.class, () -> {
            HelloWorld6Final.main(args);
        });
        Assertions.assertEquals(expected, e.getMessage());
    }
}

