package com.dfremont.blog;

import static org.junit.Assert.fail;

import org.junit.Test;

public class HelloWorldBatchTest {

    @Test
    public void test_batch_execution() {
        String[] args = { "10" }; // arrange
        HelloWorldBatch.main(args); // act
    }

    @Test
    public void test_args_validation() {
        try { // assert no args
            HelloWorldBatch.main(null);
            fail("error expected");
        } catch (IllegalArgumentException e) {
        }
        try { // assert empty args
            HelloWorldBatch.main(new String[] {});
            fail("error expected");
        } catch (IllegalArgumentException e) {
        }
        try { // assert null arg
            HelloWorldBatch.main(new String[] { null });
            fail("error expected");
        } catch (IllegalArgumentException e) {
        }
    }

    @Test(expected = RuntimeException.class)
    public void test_batch_execution_error() {
        HelloWorldBatch.main(new String[] { "ERROR" });
    }

}
