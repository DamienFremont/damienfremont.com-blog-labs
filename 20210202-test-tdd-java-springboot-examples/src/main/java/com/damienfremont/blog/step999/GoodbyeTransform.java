package com.damienfremont.blog.step999;

import org.springframework.stereotype.Component;

@Component
public class GoodbyeTransform {

    public String transform(String name) {
        return String.format("Goodbye from %s!", name.toUpperCase());
    }
}
