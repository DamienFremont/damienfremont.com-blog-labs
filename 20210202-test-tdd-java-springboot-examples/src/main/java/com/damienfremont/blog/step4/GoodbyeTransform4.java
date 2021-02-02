package com.damienfremont.blog.step4;

import org.springframework.stereotype.Component;

@Component
public class GoodbyeTransform4 {

    public String transform(String name) {
        return String.format("Goodbye from %s!", name.toUpperCase());
    }
}
