package com.damienfremont.blog.step999;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.allOf;
import static org.hamcrest.Matchers.containsString;

class GoodbyeTransformTest {

    private GoodbyeTransform classToTest = new GoodbyeTransform();

    @ParameterizedTest
    @CsvSource({
            "'Goodbye from DAMIEN!', damien",
            "'Goodbye from JANE!', jane",
            "'Goodbye from JOHN!', john",
    })
    void transform(String expected, String parameter) throws Exception {
        assertThat(classToTest.transform(parameter), allOf(
                containsString("Goodbye"),
                equalTo(expected)));
    }

}