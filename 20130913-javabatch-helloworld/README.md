Java batch simple helloworld repeat example (without dependencies)
======
 
![alt text](screenshots/160523003040225.png)
 
In Java, the development of batch can be achieved with few solutions. Most applications use their own code from scratch. Here’s a quick example of full java batch, without any external dependecy.
 

 
Without using any Framework, you need to develop every time the same parts of the batch: arg validation, batch processing, and error handling. Another example with the SpringBatch follow.
 
The focus of this tutorial is to develop a batch that will perform an “HelloWorld” task as many times as requested (value specify in argument content).
 
## 1. How it works?
 
```java
HelloWorldBatch.main(
    new String[] { "10" } // exec 10 times
);
```
 
## 2. Demo (console output)
 
```
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
```
 
## 3. Implementation
 
HelloWorldBatch.java
 
```java
package com.dfremont.blog;
 
public class HelloWorldBatch {
 
    public static void main(String[] args) {
        System.out.println("Executing batch");
 
        // arg validation
        if (args != null && args.length == 1 && args[0] != null) {
            System.out.println("input args ok");
        } else {
            System.out.println("Error with input args");
            throw new IllegalArgumentException("Error with input args");
        }
 
        // batch processing
        try {
            System.out.println("Executing job");
            for (int i = 0; i < Integer.valueOf(args[0]); i++) {
 
                // task to repeat
                System.out.println("Hello World!");
            }
            System.out.println("Ending job (success)");
        } catch (Exception e) {
 
            // error handling
            System.out.println("Error during job (failure)");
            System.out.println(e.getMessage());
            throw new RuntimeException("Error during task (failure)", e);
        }
        System.out.println("Ending batch");
    }
 
}
```
 
## View source code and more tests
 
[https://github.com/damienfremont/blog/tree/master/20130913-javabatch-helloworld](https://github.com/damienfremont/blog/tree/master/20130913-javabatch-helloworld)
https://github.com/damienfremont/blog/tree/master/20130913-javabatch-helloworld
 
 
## Origin
[https://damienfremont.com/2013/09/13/java-batch-simple-helloworld-repeat-example/](https://damienfremont.com/2013/09/13/java-batch-simple-helloworld-repeat-example/)
 
