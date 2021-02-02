package com.damienfremont.blog.step5Final;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.junit.jupiter.api.Assertions.*;

class GoodbyeValidator5Test {

    private GoodbyeValidator5 classToTest = new GoodbyeValidator5();

    @ParameterizedTest
    @CsvSource({
            "damien",
            "jane",
            "john",
    })
    void isValid_true(String param) {
        assertTrue(classToTest.isValid(param));
    }

    @ParameterizedTest
    @CsvSource({
            "' '",
            "x",
            "xx",
    })
    void isValid_false(String param) {
        assertFalse(classToTest.isValid(param));
    }
}