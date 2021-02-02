package com.damienfremont.blog.step4;

import com.damienfremont.blog.step5Final.GoodbyeTransform5;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

class GoodbyeTransform4Test {

    private GoodbyeTransform4 classToTest = new GoodbyeTransform4();

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