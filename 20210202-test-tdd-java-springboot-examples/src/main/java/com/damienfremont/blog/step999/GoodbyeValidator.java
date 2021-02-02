package com.damienfremont.blog.step999;

import org.springframework.stereotype.Component;

@Component
public class GoodbyeValidator {

    public boolean isValid(String name) {
        if (name == null) {
            return false;
        }
        if (name.length() < 3) {
            return false;
        }
        return true;
    }
}
