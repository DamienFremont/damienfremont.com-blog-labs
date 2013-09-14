batch-simple_java
=============

In Java, the development of batch can be achieved with few solutions. Most applications use their own code from scratch. Here's a quick example of full java batch, without any external dependecy.

Without using any Framework, you need to develop every time the same parts of the batch: arg validation, batch processing, and error handling. Another example with the SpringBatch follow.

The focus of this tutorial is to develop a batch that will perform an "HelloWorld" task as many times as requested (value specify in argument content).

1. Expected usage (by test)
@Test
public void test_batch_execution() {
    String[] args = { "10" }; // arrange
    HelloWorldBatch.main(args); // act
}

2. Result (console output)
Executing batch
input args ok
Executing job
Hello World!
Hello World!
Hello World!
Hello World!
Hello World!
Hello World!
Hello World!
Hello World!
Hello World!
Hello World!
Ending job (success)
Ending batch
