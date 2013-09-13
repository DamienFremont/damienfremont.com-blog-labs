package com.dfremont.blog;

/**
 * A simple Java Batch from scratch. With arg validation, batch processing, and
 * error handling.
 * 
 * @author Damien FREMONT
 */
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
