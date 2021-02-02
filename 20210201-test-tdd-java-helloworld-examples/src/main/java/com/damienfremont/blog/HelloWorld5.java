package com.damienfremont.blog;

public class HelloWorld5 {

    public static void main(String[] args) {
        // TODO: NEXT: `If parameter is not null or empty, then exception "bad arg (ex: Damien)"`
        String text = hasNoArgs(args) ? "World!" : args[0];
        System.out.println(String.format("Hello, %s!", text));
    }

    private static boolean hasNoArgs(String[] args) {
        return args == null || (args != null && args.length == 0);
    }
}
