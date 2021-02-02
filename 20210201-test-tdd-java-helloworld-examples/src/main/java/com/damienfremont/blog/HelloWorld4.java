package com.damienfremont.blog;

public class HelloWorld4 {

    public static void main(String[] args) {
        String text = null;
        // TODO: NEXT: Use Ternary operator for inline condition
        if (hasNoArgs(args)) {
            text = "World!";
        } else {
            text = args[0];
        }
        System.out.println(String.format("Hello, %s!", text));
    }

    private static boolean hasNoArgs(String[] args) {
        return args == null || (args != null && args.length == 0);
    }
}
