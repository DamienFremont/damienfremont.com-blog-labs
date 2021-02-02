package com.damienfremont.blog;

public class HelloWorld6Final {

    public static void main(String[] args) {
        String name = getName(args);
        String text = String.format("Hello, %s!", name);
        System.out.println(text);
    }

    private static String getName(String[] args) {
        if (hasNoArgs(args)) {
            return "World!";
        }
        if(isNullOrEmpty(args[0])) {
            throw new IllegalArgumentException("bad arg (ex: Damien)");
        }
        return args[0];
    }

    private static boolean isNullOrEmpty(String arg) {
        return arg == null || arg.trim().isEmpty();
    }

    private static boolean hasNoArgs(String[] args) {
        return args == null || (args != null && args.length == 0);
    }
}
