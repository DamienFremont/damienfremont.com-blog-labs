package com.damienfremont.blog.step5Final;

import org.springframework.stereotype.Component;

@Component
public class GoodbyeTransform5 {

    public String transform(String name) {
        return String.format("Goodbye from %s!", name.toUpperCase());
    }
}
