package com.damienfremont.blog;

import com.damienfremont.blog.utils.JUnit5Parent;
import org.junit.jupiter.api.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

@DisplayNameGeneration(DisplayNameGenerator.ReplaceUnderscores.class)
public class HelloWorld5Test extends JUnit5Parent {

    @Test
    void print_Hello_World_by_default() {
        String expected = "Hello, World!!";
        HelloWorld5.main(null);
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
        HelloWorld5.main(args);
        Assertions.assertEquals(
                expected,
                getOutput());
    }

    @Test
    void exception_bad_format() {
        // TODO: NEXT: `If parameter is not null or empty, then exception "bad arg (ex: Damien)"`
        throw new IllegalStateException("Not yet implemented!");
    }
}

