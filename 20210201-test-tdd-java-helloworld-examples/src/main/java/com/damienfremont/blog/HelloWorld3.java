package com.damienfremont.blog;

public class HelloWorld3 {

    public static void main(String[] args) {
        // TODO: NEXT: If parameter is not present, Print "Hello, World!"
        String text = args[0];
        System.out.println(String.format("Hello, %s!", text));
    }
}
